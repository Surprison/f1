document.addEventListener("DOMContentLoaded", () => {

    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
        document.body.classList.add(savedTheme);
    }


    const themeToggleBtn = document.getElementById("theme-toggle");
    themeToggleBtn.addEventListener("click", () => {
        document.body.classList.toggle("dark");

        if (document.body.classList.contains("dark")) {
            localStorage.setItem("theme", "dark");
        } else {
            localStorage.removeItem("theme");
        }
    });
});
