import { observeElements } from "./common.js";

observeElements({ elements: document.querySelector("#intro") });
observeElements({
    elements: document.querySelector("#technologies"),
    desktopThreshold: 0.5,
});

const TECHNOLOGIES = [
    {
        id: "telescopes",
        title: "Space Telescopes",
        category: "Observation",
        image: "assets/images/technology/telescope.jpg",
        alt: "Space Telescope",
        caption: "NASA's Hubble Space Telescope",
        body: "The Hubble Space Telescope was launched in 1990 and orbits Earth above most of the atmosphere. It has helped astronomers study distant galaxies, stars, planets and other objects throughout the universe.",
    },
    {
        id: "rovers",
        title: "Robotic Rovers",
        category: "Exploration",
        image: "assets/images/technology/rover.jpg",
        alt: "Mars Rover",
        caption: 'Mars Exploration Rover "Opportunity"',
        body: "Robotic rovers are unmanned vehicles designed to explore the surfaces of other worlds. NASA's Opportunity rover explored Mars and studied its rocks, soil and environment.",
    },
    {
        id: "stations",
        title: "Space Stations",
        category: "Habitation",
        image: "assets/images/technology/space_station.jpg",
        alt: "Space Station",
        caption: "NASA's International Space Station",
        body: "The International Space Station is a large laboratory orbiting Earth. Astronauts from different countries use it to conduct experiments and study how humans and technology operate in space.",
    },
    {
        id: "suits",
        title: "Space Suits",
        category: "Life Support",
        image: "assets/images/technology/suit.jpg",
        alt: "Space Suit",
        caption: "Space Suit (Extravehicular Mobility Unit)",
        body: "Space suits protect astronauts from the harsh environment of space. They provide oxygen, temperature control and protection while astronauts work outside their spacecraft.",
    },
];

const CATEGORY_ORDER = [
    "Observation",
    "Transportation",
    "Exploration",
    "Habitation",
    "Life Support",
    "Communication",
];

const techListWrap = document.getElementById("technologies-list");

function groupByCategory(items) {
    const groups = new Map();

    items.forEach((item) => {
        if (!groups.has(item.category)) groups.set(item.category, []);
        groups.get(item.category).push(item);
    });

    return groups;
}

function orderCategories(groups) {
    return CATEGORY_ORDER.filter((category) => groups.has(category));
}

function renderTechnology(tech) {
    const detailsId = `${tech.id}-details`;

    const li = document.createElement("li");
    li.className = "animate-target";
    li.innerHTML = `
        <article
            class="tech-card bg-surface-2 border-border hover:border-primary shadow-elevated hover:shadow-elevated-hover cursor-pointer rounded-sm border p-6 transition-[color,border-color,translate,box-shadow] duration-300 hover:-translate-y-1"
        >
            <button
                type="button"
                class="mb-4 flex w-full cursor-pointer items-center justify-between text-left"
                aria-expanded="false"
                aria-controls="${detailsId}"
            >
                <h3 class="font-display text-foreground text-xl font-semibold">
                    ${tech.title}
                </h3>
                <span class="text-primary text-2xl" aria-hidden="true">+</span>
            </button>
 
            <figure>
                <img
                    src="${tech.image}"
                    alt="${tech.alt}"
                    class="h-48 w-full rounded-sm object-cover"
                />
                <figcaption class="text-muted text-center text-sm leading-relaxed">
                    ${tech.caption}
                </figcaption>
            </figure>
 
            <div class="extra-info-wrap" id="${detailsId}">
                <div class="extra-info">
                    <p class="text-muted mt-4 leading-relaxed">${tech.body}</p>
                </div>
            </div>
        </article>
    `;

    return li;
}

function renderCategory(category, items) {
    const headingId = `${category.toLowerCase().replace(/\s+/g, "-")}-heading`;

    const section = document.createElement("section");
    section.className = "category-group animate-target";
    section.setAttribute("aria-labelledby", headingId);
    section.innerHTML = `
        <h2
            id="${headingId}"
            class="font-display text-foreground border-border mb-6 border-b pb-2 text-2xl font-semibold"
        >
            ${category}
        </h2>
        <ul class="grid grid-cols-1 items-start gap-6 sm:grid-cols-2"></ul>
    `;

    const ul = section.querySelector("ul");
    items.forEach((tech) => ul.appendChild(renderTechnology(tech)));

    return section;
}

const groups = groupByCategory(TECHNOLOGIES);
orderCategories(groups).forEach((category) => {
    techListWrap.appendChild(renderCategory(category, groups.get(category)));
});

const cards = document.querySelectorAll(".tech-card");

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
