import { observeElements } from "./common.js";

observeElements({ elements: document.querySelector("#intro") });
observeElements({
    elements: document.querySelector("#technologies"),
    desktopThreshold: 0.2,
    mobileThreshold: 0.2,
});

const TECHNOLOGIES = [
    {
        id: "launch-vehicles",
        title: "Launch Vehicles",
        category: "Transportation",
        image: "assets/images/technology/rocket.jpg",
        alt: "Rocket Launch",
        caption: "NASA's Space Launch System (SLS)",
        body: "Launch vehicles are powerful rockets that carry spacecraft and satellites from Earth into space. Modern launch systems can deliver cargo, astronauts and scientific missions into orbit and beyond.",
    },
    {
        id: "crew-spacecraft",
        title: "Crew Spacecraft",
        category: "Transportation",
        image: "assets/images/technology/crew_capsule.jpg",
        alt: "Crew Spacecraft",
        caption: "NASA's Orion spacecraft",
        body: "Crew spacecraft transport astronauts safely through space. They include life-support systems, navigation equipment and heat shields that protect crews during launch, spaceflight and re-entry.",
    },
    {
        id: "satellites",
        title: "Artificial Satellites",
        category: "Communication",
        image: "assets/images/technology/satellite.jpg",
        alt: "Communications Satellite",
        caption: "Communications satellite in Earth orbit",
        body: "Artificial satellites orbit Earth to provide communications, weather forecasting, navigation and scientific observations. Thousands of satellites support modern life every day.",
    },
    {
        id: "deep-space-network",
        title: "Deep Space Network",
        category: "Communication",
        image: "assets/images/technology/deep_space_network.jpg",
        alt: "Deep Space Network Antenna",
        caption: "NASA's Deep Space Network antenna",
        body: "The Deep Space Network is a worldwide system of giant radio antennas that communicates with spacecraft exploring the Solar System. It sends commands and receives scientific data from distant missions.",
    },
    {
        id: "landers",
        title: "Planetary Landers",
        category: "Exploration",
        image: "assets/images/technology/lander.jpg",
        alt: "Planetary Lander",
        caption: "Mars InSight lander",
        body: "Planetary landers are designed to touch down safely on the surfaces of other worlds. They carry scientific instruments that study geology, weather and the internal structure of planets and moons.",
    },
    {
        id: "probes",
        title: "Space Probes",
        category: "Exploration",
        image: "assets/images/technology/probe.jpg",
        alt: "Space Probe",
        caption: "Voyager 1 space probe",
        body: "Space probes are robotic spacecraft sent to explore planets, moons, asteroids and interstellar space. They collect valuable scientific data from places humans have not yet visited.",
    },
    {
        id: "spacecraft-docking",
        title: "Docking Systems",
        category: "Habitation",
        image: "assets/images/technology/docking.jpg",
        alt: "Spacecraft Docking",
        caption: "Spacecraft docking with the ISS",
        body: "Docking systems allow spacecraft to safely connect with space stations or other vehicles. They enable astronauts, supplies and scientific equipment to be transferred between spacecraft.",
    },
    {
        id: "solar-panels",
        title: "Solar Arrays",
        category: "Life Support",
        image: "assets/images/technology/solar_panels.jpg",
        alt: "Solar Arrays",
        caption: "Solar arrays powering the ISS",
        body: "Solar arrays convert sunlight into electricity, providing power for spacecraft, satellites and space stations. They are one of the most common energy sources used in space missions.",
    },
    {
        id: "robotic-arms",
        title: "Robotic Arms",
        category: "Exploration",
        image: "assets/images/technology/robotic_arm.jpg",
        alt: "Robotic Arm",
        caption: "Canadarm2 aboard the ISS",
        body: "Robotic arms assist astronauts by moving cargo, capturing spacecraft and supporting maintenance work. They can perform tasks that would otherwise require risky spacewalks.",
    },
    {
        id: "navigation",
        title: "Guidance & Navigation",
        category: "Communication",
        image: "assets/images/technology/navigation.jpg",
        alt: "Spacecraft Navigation",
        caption: "Spacecraft guidance systems",
        body: "Guidance, navigation and control systems help spacecraft determine their position, maintain orientation and follow precise flight paths during missions throughout the Solar System.",
    },
    {
        id: "heat-shields",
        title: "Heat Shields",
        category: "Transportation",
        image: "assets/images/technology/heat_shield.jpg",
        alt: "Heat Shield",
        caption: "Orion heat shield",
        body: "Heat shields protect spacecraft from the intense temperatures produced during atmospheric re-entry. Without them, returning spacecraft and their crews could not survive the journey home.",
    },
    {
        id: "space-habitats",
        title: "Space Habitats",
        category: "Habitation",
        image: "assets/images/technology/habitat.jpg",
        alt: "Space Habitat",
        caption: "Concept for a lunar habitat",
        body: "Space habitats are living environments designed for astronauts on long-duration missions. They provide shelter, life support, sleeping quarters and workspaces in space or on other worlds.",
    },
    {
        id: "chemical-rockets",
        title: "Chemical Rocket Engines",
        category: "Propulsion",
        image: "assets/images/technology/chemical_rocket.jpg",
        alt: "Chemical Rocket Engine",
        caption: "RS-25 rocket engine",
        body: "Chemical rocket engines generate thrust by burning fuel and an oxidizer at extremely high temperatures. They provide the powerful acceleration needed to launch spacecraft from Earth and perform major orbital maneuvers.",
    },
    {
        id: "ion-thrusters",
        title: "Ion Thrusters",
        category: "Propulsion",
        image: "assets/images/technology/ion_thruster.jpg",
        alt: "Ion Thruster",
        caption: "NASA's NEXT ion propulsion system",
        body: "Ion thrusters produce thrust by accelerating electrically charged particles. Although they generate much less force than chemical rockets, they are highly fuel-efficient and ideal for long-duration deep-space missions.",
    },
    {
        id: "nuclear-thermal",
        title: "Nuclear Thermal Propulsion",
        category: "Propulsion",
        image: "assets/images/technology/nuclear_thermal.jpg",
        alt: "Nuclear Thermal Rocket",
        caption: "Concept of a nuclear thermal rocket",
        body: "Nuclear thermal propulsion uses a nuclear reactor to heat hydrogen propellant, producing greater efficiency than conventional chemical rockets. The technology remains under development for future missions to Mars and beyond.",
    },
    {
        id: "solar-sails",
        title: "Solar Sails",
        category: "Propulsion",
        image: "assets/images/technology/solar_sail.jpg",
        alt: "Solar Sail",
        caption: "NASA's Advanced Composite Solar Sail",
        body: "Solar sails propel spacecraft using the tiny but continuous pressure exerted by sunlight. They require no onboard fuel, making them an attractive option for long-term exploration missions.",
    },
    {
        id: "in-space-manufacturing",
        title: "In-Space Manufacturing",
        category: "Manufacturing",
        image: "assets/images/technology/in_space_manufacturing.jpg",
        alt: "In-Space Manufacturing",
        caption: "Concept of manufacturing in orbit",
        body: "In-space manufacturing involves building or repairing equipment directly in orbit instead of launching everything from Earth. This approach can reduce mission costs and enable larger structures to be constructed in space.",
    },
    {
        id: "space-3d-printing",
        title: "3D Printing in Space",
        category: "Manufacturing",
        image: "assets/images/technology/space_3d_printer.jpg",
        alt: "3D Printer in Space",
        caption: "3D printer aboard the ISS",
        body: "3D printers aboard spacecraft and space stations can produce tools, replacement parts and scientific equipment on demand. This reduces the need to launch spare components from Earth.",
    },
    {
        id: "assembly-robots",
        title: "Autonomous Assembly Robots",
        category: "Manufacturing",
        image: "assets/images/technology/assembly_robot.jpg",
        alt: "Autonomous Space Robot",
        caption: "Concept of autonomous robotic assembly",
        body: "Autonomous assembly robots are designed to construct and maintain spacecraft, satellites and space habitats with minimal human intervention. They could enable the creation of structures too large to launch in a single piece.",
    },
];

const CATEGORY_ORDER = [
    "Observation",
    "Transportation",
    "Exploration",
    "Habitation",
    "Life Support",
    "Communication",
    "Propulsion",
    "Manufacturing",
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
