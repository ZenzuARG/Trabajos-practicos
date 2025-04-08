document.addEventListener("DOMContentLoaded", function () {
    const toggleButton = document.getElementById("darkModeToggle");
    const body = document.body;
  
    // Verificamos si ya hay una preferencia guardada
    const darkModeEnabled = localStorage.getItem("darkMode") === "true";
  
    if (darkModeEnabled) {
      body.classList.add("dark-mode");
      if (toggleButton) toggleButton.textContent = "Desactivar Modo Oscuro";
    }
  
    if (toggleButton) {
      toggleButton.addEventListener("click", () => {
        body.classList.toggle("dark-mode");
        const isDark = body.classList.contains("dark-mode");
        localStorage.setItem("darkMode", isDark);
  
        toggleButton.textContent = isDark
          ? "Desactivar Modo Oscuro"
          : "Activar Modo Oscuro";
      });
    }
  });
  