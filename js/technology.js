const cards = document.querySelectorAll(".tech-card");

cards.forEach(card => {
    card.addEventListener("click", () => {
    const info = card.querySelector(".extra-info");
    info.classList.toggle("hidden");

    });
});