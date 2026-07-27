import { observeElements } from "./common.js";

const cards = document.querySelectorAll(".timeline-card");

cards.forEach((card) => {
    const button = card.querySelector("button");
    const wrap = card.querySelector(".extra-info-wrap");
    const icon = card.querySelector("span");

    card.addEventListener("click", () => {
        const isOpen = wrap.classList.toggle("is-open");

        icon.textContent = isOpen ? "−" : "+";
        button.setAttribute("aria-expanded", String(isOpen));
    });
});

observeElements({
    elements: document.querySelector("#timeline"),
    desktopThreshold: 0.1,
    mobileThreshold: 0.1,
});
