document.addEventListener("DOMContentLoaded", function() {
    const themeToggleBtn = document.getElementById("theme-toggle");
    const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)");

    const currentTheme = localStorage.getItem("theme") || "dark";

    if (currentTheme === "light") {
        document.body.classList.add("light-mode");
        themeToggleBtn.innerHTML = '<i class="fas fa-moon"></i>';
    } else {
        document.body.classList.remove("light-mode");
        themeToggleBtn.innerHTML = '<i class="fas fa-sun"></i>';
    }

    themeToggleBtn.addEventListener("click", function() {
        if (document.body.classList.contains("light-mode")) {
            document.body.classList.remove("light-mode");
            themeToggleBtn.innerHTML = '<i class="fas fa-sun"></i>';
            localStorage.setItem("theme", "dark");
        } else {
            document.body.classList.add("light-mode");
            themeToggleBtn.innerHTML = '<i class="fas fa-moon"></i>';
            localStorage.setItem("theme", "light");
        }
    });
});
