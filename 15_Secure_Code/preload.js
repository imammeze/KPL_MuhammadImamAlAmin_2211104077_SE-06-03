const { contextBridge, ipcRenderer } = require("electron");

// Expose API yang aman ke renderer process
contextBridge.exposeInMainWorld("electronAPI", {
  registerUser: (userData) => ipcRenderer.invoke("register-user", userData),
  loginUser: (credentials) => ipcRenderer.invoke("login-user", credentials),
});

// Security: Disable node integration in renderer
window.addEventListener("DOMContentLoaded", () => {
  // Tambahan security measures bisa ditambahkan di sini
  console.log("Preload script loaded securely");
});
