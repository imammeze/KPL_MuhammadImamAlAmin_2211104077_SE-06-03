// DOM Elements
const loginForm = document.getElementById("loginForm");
const registerForm = document.getElementById("registerForm");
const dashboard = document.getElementById("dashboard");
const showRegisterLink = document.getElementById("showRegister");
const showLoginLink = document.getElementById("showLogin");
const loginFormElement = document.getElementById("loginFormElement");
const registerFormElement = document.getElementById("registerFormElement");
const logoutBtn = document.getElementById("logoutBtn");

// Form switching dengan animasi
showRegisterLink.addEventListener("click", (e) => {
  e.preventDefault();
  switchToRegister();
});

showLoginLink.addEventListener("click", (e) => {
  e.preventDefault();
  switchToLogin();
});

function switchToRegister() {
  loginForm.classList.remove("active");
  setTimeout(() => {
    registerForm.classList.add("active");
  }, 150);
  clearMessages();
}

function switchToLogin() {
  registerForm.classList.remove("active");
  setTimeout(() => {
    loginForm.classList.add("active");
  }, 150);
  clearMessages();
}

// Clear messages
function clearMessages() {
  document.getElementById("loginMessage").innerHTML = "";
  document.getElementById("registerMessage").innerHTML = "";
}

// Show message dengan animasi
function showMessage(elementId, message, isError = false) {
  const element = document.getElementById(elementId);
  element.innerHTML = `<div class="${
    isError ? "error" : "success"
  }">${message}</div>`;
}

// Login form handler
loginFormElement.addEventListener("submit", async (e) => {
  e.preventDefault();

  const username = document.getElementById("loginUsername").value.trim();
  const password = document.getElementById("loginPassword").value;
  const loginBtn = document.getElementById("loginBtn");

  // Basic validation
  if (!username || !password) {
    showMessage("loginMessage", "Username dan password harus diisi", true);
    return;
  }

  loginBtn.disabled = true;
  loginBtn.textContent = "Memproses...";

  try {
    const result = await window.electronAPI.loginUser({ username, password });

    if (result.success) {
      showMessage("loginMessage", result.message, false);
      setTimeout(() => {
        showDashboard(result.user);
      }, 1500);
    } else {
      showMessage("loginMessage", result.errors.join("<br>"), true);
    }
  } catch (error) {
    console.error("Login error:", error);
    showMessage("loginMessage", "Terjadi kesalahan sistem", true);
  }

  loginBtn.disabled = false;
  loginBtn.textContent = "Login";
});

// Register form handler
registerFormElement.addEventListener("submit", async (e) => {
  e.preventDefault();

  const username = document.getElementById("registerUsername").value.trim();
  const password = document.getElementById("registerPassword").value;
  const confirmPassword = document.getElementById("confirmPassword").value;
  const registerBtn = document.getElementById("registerBtn");

  // Validasi konfirmasi password
  if (password !== confirmPassword) {
    showMessage(
      "registerMessage",
      "Password dan konfirmasi password tidak sama",
      true
    );
    return;
  }

  registerBtn.disabled = true;
  registerBtn.textContent = "Memproses...";

  try {
    const result = await window.electronAPI.registerUser({
      username,
      password,
    });

    if (result.success) {
      showMessage(
        "registerMessage",
        result.message + "<br>Anda akan diarahkan ke halaman login...",
        false
      );
      setTimeout(() => {
        switchToLogin();
        document.getElementById("registerFormElement").reset();
        // Auto-fill username di login form
        document.getElementById("loginUsername").value = username;
      }, 2500);
    } else {
      showMessage("registerMessage", result.errors.join("<br>"), true);
    }
  } catch (error) {
    console.error("Register error:", error);
    showMessage("registerMessage", "Terjadi kesalahan sistem", true);
  }

  registerBtn.disabled = false;
  registerBtn.textContent = "Daftar";
});

// Show dashboard dengan animasi
function showDashboard(user) {
  loginForm.classList.remove("active");
  registerForm.classList.remove("active");

  setTimeout(() => {
    dashboard.classList.add("active");
  }, 150);

  document.getElementById("userInfo").innerHTML = `
        <strong>Username:</strong> ${user.username}<br>
        <strong>User ID:</strong> ${user.id}<br>
        <strong>Terdaftar:</strong> ${new Date(user.createdAt).toLocaleString(
          "id-ID",
          {
            weekday: "long",
            year: "numeric",
            month: "long",
            day: "numeric",
            hour: "2-digit",
            minute: "2-digit",
          }
        )}
    `;

  // Reset forms
  document.getElementById("loginFormElement").reset();
  clearMessages();
}

// Logout handler
logoutBtn.addEventListener("click", () => {
  dashboard.classList.remove("active");
  setTimeout(() => {
    loginForm.classList.add("active");
  }, 150);
  clearMessages();
});

// Tambahan: Real-time password validation feedback
document
  .getElementById("registerPassword")
  ?.addEventListener("input", function (e) {
    const password = e.target.value;
    const username = document.getElementById("registerUsername").value;

    // Bisa ditambahkan indikator strength password di sini
    // Misalnya dengan progress bar atau checklist
  });

// Handle keyboard shortcuts
document.addEventListener("keydown", (e) => {
  // ESC untuk cancel/back
  if (e.key === "Escape") {
    if (registerForm.classList.contains("active")) {
      switchToLogin();
    } else if (dashboard.classList.contains("active")) {
      logoutBtn.click();
    }
  }
});

// Inisialisasi
document.addEventListener("DOMContentLoaded", () => {
  console.log("Secure Auth App loaded successfully");

  // Focus ke input pertama
  const firstInput = document.querySelector(".form-container.active input");
  if (firstInput) {
    firstInput.focus();
  }
});
