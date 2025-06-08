const { app, BrowserWindow, ipcMain } = require("electron");
const path = require("path");
const fs = require("fs").promises;
const crypto = require("crypto");

// Path untuk file penyimpanan user data
const USER_DATA_FILE = path.join(__dirname, "users.json");

class SecureAuthSystem {
  constructor() {
    this.users = [];
    this.loadUsers();
  }

  // Load users dari file JSON
  async loadUsers() {
    try {
      const data = await fs.readFile(USER_DATA_FILE, "utf8");
      this.users = JSON.parse(data);
    } catch (error) {
      // File tidak ada, buat array kosong
      this.users = [];
    }
  }

  // Save users ke file JSON
  async saveUsers() {
    try {
      await fs.writeFile(USER_DATA_FILE, JSON.stringify(this.users, null, 2));
    } catch (error) {
      throw new Error("Gagal menyimpan data user");
    }
  }

  // SECURE CODING: Input Validation
  validateUsername(username) {
    const errors = [];

    // Validasi panjang data (8-20 karakter)
    if (username.length < 8) {
      errors.push("Username minimal 8 karakter");
    }
    if (username.length > 20) {
      errors.push("Username maksimal 20 karakter");
    }

    // Validasi range data (hanya alfabet ASCII dan angka)
    const validPattern = /^[a-zA-Z0-9]+$/;
    if (!validPattern.test(username)) {
      errors.push(
        "Username hanya boleh mengandung huruf alfabet ASCII dan angka"
      );
    }

    return {
      isValid: errors.length === 0,
      errors: errors,
    };
  }

  // SECURE CODING: Password Management - Password Rules
  validatePassword(password, username) {
    const errors = [];

    // Validasi panjang data (minimal 8 karakter, maksimal 50)
    if (password.length < 8) {
      errors.push("Password minimal 8 karakter");
    }
    if (password.length > 50) {
      errors.push("Password maksimal 50 karakter");
    }

    // Password harus mengandung minimal 1 karakter khusus
    const specialCharPattern = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/;
    if (!specialCharPattern.test(password)) {
      errors.push(
        "Password harus mengandung minimal 1 karakter khusus (!@#$%^&*)"
      );
    }

    // Password harus mengandung minimal 1 angka
    const numberPattern = /[0-9]/;
    if (!numberPattern.test(password)) {
      errors.push("Password harus mengandung minimal 1 angka");
    }

    // Password harus mengandung minimal 1 huruf besar
    const uppercasePattern = /[A-Z]/;
    if (!uppercasePattern.test(password)) {
      errors.push("Password harus mengandung minimal 1 huruf besar");
    }

    // Password tidak boleh mengandung username
    if (password.toLowerCase().includes(username.toLowerCase())) {
      errors.push("Password tidak boleh mengandung username");
    }

    return {
      isValid: errors.length === 0,
      errors: errors,
    };
  }

  // SECURE CODING: Password Management - Password Hashing
  hashPassword(password) {
    // Menggunakan SHA-256 dengan salt untuk keamanan ekstra
    const salt = crypto.randomBytes(16).toString("hex");
    const hash = crypto.createHash("sha256");
    hash.update(password + salt);
    return {
      hashedPassword: hash.digest("hex"),
      salt: salt,
    };
  }

  // Verifikasi password yang di-hash
  verifyPassword(password, hashedPassword, salt) {
    const hash = crypto.createHash("sha256");
    hash.update(password + salt);
    return hash.digest("hex") === hashedPassword;
  }

  // Registrasi user baru
  async registerUser(username, password) {
    try {
      // Validasi input
      const usernameValidation = this.validateUsername(username);
      if (!usernameValidation.isValid) {
        return {
          success: false,
          errors: usernameValidation.errors,
        };
      }

      const passwordValidation = this.validatePassword(password, username);
      if (!passwordValidation.isValid) {
        return {
          success: false,
          errors: passwordValidation.errors,
        };
      }

      // Cek apakah username sudah ada
      const existingUser = this.users.find(
        (user) => user.username === username
      );
      if (existingUser) {
        return {
          success: false,
          errors: ["Username sudah terdaftar"],
        };
      }

      // Hash password
      const { hashedPassword, salt } = this.hashPassword(password);

      // Simpan user baru
      const newUser = {
        id: Date.now().toString(),
        username: username,
        password: hashedPassword,
        salt: salt,
        createdAt: new Date().toISOString(),
      };

      this.users.push(newUser);
      await this.saveUsers();

      return {
        success: true,
        message: "Registrasi berhasil",
      };
    } catch (error) {
      return {
        success: false,
        errors: ["Terjadi kesalahan sistem"],
      };
    }
  }

  // Login user
  async loginUser(username, password) {
    try {
      // Validasi input basic
      if (!username || !password) {
        return {
          success: false,
          errors: ["Username dan password harus diisi"],
        };
      }

      // Cari user berdasarkan username
      const user = this.users.find((u) => u.username === username);
      if (!user) {
        return {
          success: false,
          errors: ["Username atau password salah"],
        };
      }

      // Verifikasi password
      const isPasswordValid = this.verifyPassword(
        password,
        user.password,
        user.salt
      );
      if (!isPasswordValid) {
        return {
          success: false,
          errors: ["Username atau password salah"],
        };
      }

      return {
        success: true,
        message: "Login berhasil",
        user: {
          id: user.id,
          username: user.username,
          createdAt: user.createdAt,
        },
      };
    } catch (error) {
      return {
        success: false,
        errors: ["Terjadi kesalahan sistem"],
      };
    }
  }
}

// Instance auth system
const authSystem = new SecureAuthSystem();

// IPC handlers untuk komunikasi dengan renderer
ipcMain.handle("register-user", async (event, { username, password }) => {
  return await authSystem.registerUser(username, password);
});

ipcMain.handle("login-user", async (event, { username, password }) => {
  return await authSystem.loginUser(username, password);
});

// Electron app setup
function createWindow() {
  const mainWindow = new BrowserWindow({
    width: 900,
    height: 700,
    webPreferences: {
      nodeIntegration: false,
      contextIsolation: true,
      preload: path.join(__dirname, "preload.js"),
    },
    icon: path.join(__dirname, "assets/icon.png"), // optional icon
    show: false, // untuk smooth loading
  });

  mainWindow.loadFile("index.html");

  // Show window setelah ready
  mainWindow.once("ready-to-show", () => {
    mainWindow.show();
  });

  // Optional: buka dev tools untuk development
  // mainWindow.webContents.openDevTools();
}

app.whenReady().then(createWindow);

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});

app.on("activate", () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});
