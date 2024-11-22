document.addEventListener("DOMContentLoaded", () => {
    const buttons = document.querySelectorAll(".details-button");
    buttons.forEach(button => {
        button.addEventListener("click", () => {
            const details = button.nextElementSibling;
            if (details.style.display === "none" || details.style.display === "") {
                details.style.display = "block";
                button.textContent = "Скрыть";
            } else {
                details.style.display = "none";
                button.textContent = "Подробнее";
            }
        });
    });


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
