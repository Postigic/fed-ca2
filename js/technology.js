import { observeElements } from "./common.js";

observeElements({ elements: document.querySelector("#intro") });
observeElements({ elements: document.querySelector("#technologies") });

const cards = document.querySelectorAll(".tech-card");
cards.forEach((card) => {
    card.addEventListener("click", () => {
        const info = card.querySelector(".extra-info");
        info.classList.toggle("hidden");
    });
});
