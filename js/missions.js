const cards = document.querySelectorAll(".timeline-card");

cards.forEach((card) => {
    card.addEventListener("click", () => {
        const info = card.querySelector(".extra-info");
        const icon = card.querySelector("span");

        info.classList.toggle("hidden");

        icon.textContent = info.classList.contains("hidden") ? "+" : "−";
    });
});
