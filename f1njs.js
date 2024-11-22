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

document.addEventListener("DOMContentLoaded", () => {
    const expandButtons = document.querySelectorAll(".expand-news");
    expandButtons.forEach(button => {
        button.addEventListener("click", () => {
            const fullNews = button.nextElementSibling;
            fullNews.style.display = fullNews.style.display === "block" ? "none" : "block";
        });
    });

    const carousel = document.querySelector(".carousel");
    const prevButton = document.querySelector(".carousel-prev");
    const nextButton = document.querySelector(".carousel-next");

    let scrollPosition = 0;

    prevButton.addEventListener("click", () => {
        scrollPosition -= 300;
        if (scrollPosition < 0) {
            scrollPosition = 0;
        }
        carousel.style.transform = `translateX(-${scrollPosition}px)`;
    });

    nextButton.addEventListener("click", () => {
        const maxScroll = carousel.scrollWidth - carousel.clientWidth;
        scrollPosition += 300;
        if (scrollPosition > maxScroll) {
            scrollPosition = maxScroll;
        }
        carousel.style.transform = `translateX(-${scrollPosition}px)`;
    });
});

document.addEventListener("DOMContentLoaded", () => {
    const expandButtons = document.querySelectorAll(".expand-race");
    expandButtons.forEach(button => {
        button.addEventListener("click", () => {
            const raceDetails = button.nextElementSibling;
            raceDetails.style.display = raceDetails.style.display === "block" ? "none" : "block";
        });
    });
});
