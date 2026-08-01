import { observeElements } from "./common.js";

observeElements({ elements: document.querySelector("#intro") });
observeElements({ elements: document.querySelector("#planets") });

const PLANETS = [
    {
        name: "Mercury",
        color: "#a89a8c",
        image: "assets/images/celestial/mercury.jpg",
        moons: 0,
        classification: "Terrestrial",
        atmosphere:
            "Virtually no atmosphere, only a tenuous exosphere of oxygen, sodium, hydrogen, helium, and potassium knocked from the surface by sunlight and the solar wind.",
        structure:
            "An enormous iron core occupies roughly 85% of the planet's radius, surrounded by an unusually thin rocky mantle and crust.",
        surface:
            "A heavily cratered landscape resembling Earth's Moon, scarred by billions of years of impacts and marked by immense cliffs formed as the planet slowly shrank.",
        exploration:
            "Mariner 10 revealed Mercury's cratered surface in the 1970s. MESSENGER later became the first spacecraft to orbit the planet, and BepiColombo is currently en route.",
        mythology:
            "Named after the Roman messenger god because it moves swiftly across the sky.",
        discovered: "Known since antiquity",
        highlight:
            "Experiences the greatest surface temperature variation of any planet, with swings of more than 600°C between day and night.",
    },

    {
        name: "Venus",
        color: "#c9a86a",
        image: "assets/images/celestial/venus.jpg",
        moons: 0,
        classification: "Terrestrial",
        atmosphere:
            "A crushing carbon dioxide atmosphere nearly 100 times denser than Earth's, permanently hidden beneath clouds of sulfuric acid.",
        structure:
            "Similar in size and composition to Earth, with a rocky mantle and metallic core but lacking a global magnetic field.",
        surface:
            "Volcanic plains, broad lava flows, and thousands of volcanoes dominate a landscape reshaped by intense geological activity.",
        exploration:
            "The Soviet Venera missions became the first to land on another planet, returning the only photographs ever taken from Venus' surface.",
        mythology:
            "Named after the Roman goddess of love and beauty, reflecting its brilliance in the night sky.",
        discovered: "Known since antiquity",
        highlight:
            "Despite being farther from the Sun than Mercury, Venus is the hottest planet because of its runaway greenhouse effect.",
    },

    {
        name: "Earth",
        color: "#5f8fae",
        image: "assets/images/celestial/earth.jpg",
        moons: 1,
        classification: "Terrestrial",
        atmosphere:
            "A nitrogen-oxygen atmosphere shaped by billions of years of biological activity and protected by a strong magnetic field.",
        structure:
            "A solid inner core and liquid outer iron core generate a magnetic field that shields the planet from harmful solar radiation.",
        surface:
            "Unique among known planets for its vast oceans of liquid water, active plate tectonics, and extraordinary diversity of ecosystems.",
        exploration:
            "Earth is continuously studied by satellites, spacecraft, and people living on its surface, making it by far the best understood planet.",
        mythology:
            'Unlike the other planets, its English name comes from an Old English word meaning "ground," rather than a Greco-Roman deity.',
        discovered: "Known since prehistory",
        highlight: "The only known world to support life.",
    },

    {
        name: "Mars",
        color: "#b3563a",
        image: "assets/images/celestial/mars.jpg",
        moons: 2,
        classification: "Terrestrial",
        atmosphere:
            "A thin carbon dioxide atmosphere with less than 1% of Earth's surface pressure, offering little protection from the cold.",
        structure:
            "A rocky crust surrounds a mostly solid core, while remnants of an ancient magnetic field remain frozen into parts of the crust.",
        surface:
            "Home to giant volcanoes, vast canyons, ancient river valleys, polar ice caps, and countless impact craters that hint at a wetter past.",
        exploration:
            "The most explored planet beyond Earth, visited by numerous orbiters, landers, helicopters, and rovers searching for signs of past habitability.",
        mythology:
            "Named after the Roman god of war because of its reddish appearance.",
        discovered: "Known since antiquity",
        highlight:
            "Olympus Mons is the tallest known volcano in the Solar System.",
    },

    {
        name: "Jupiter",
        color: "#c9a17a",
        image: "assets/images/celestial/jupiter.jpg",
        moons: 95,
        classification: "Gas giant",
        atmosphere:
            "Mostly hydrogen and helium, organized into colorful cloud bands driven by powerful jet streams and immense storms.",
        structure:
            "Believed to contain a dense core beneath a vast mantle of metallic hydrogen that produces the strongest planetary magnetic field in the Solar System.",
        surface:
            "It has no solid surface. Its visible clouds gradually transition into hotter, denser layers deep within the planet.",
        exploration:
            "Pioneer and Voyager flew past Jupiter before Galileo became its first orbiter. Juno continues studying its deep interior today.",
        mythology:
            "Named after the king of the Roman gods, fitting for the Solar System's largest planet.",
        discovered: "Known since antiquity",
        highlight:
            "The Great Red Spot is a colossal storm that has persisted for centuries.",
    },

    {
        name: "Saturn",
        color: "#d8c48f",
        image: "assets/images/celestial/saturn(1).jpg",
        moons: 146,
        classification: "Gas giant",
        atmosphere:
            "A hydrogen-helium atmosphere with subtle cloud bands, powerful winds, and periodic giant storms.",
        structure:
            "A small rocky core lies beneath deep layers of metallic and molecular hydrogen, surrounded by the Solar System's most spectacular ring system.",
        surface:
            "It has no solid surface. Pressure steadily increases beneath its cloud tops until the gases gradually transition into liquid-like layers.",
        exploration:
            "The Cassini mission transformed our understanding of Saturn, its rings, and its many moons during thirteen years in orbit.",
        mythology:
            "Named after the Roman god of agriculture and father of Jupiter.",
        discovered: "Known since antiquity",
        highlight:
            "Its average density is lower than water, meaning it would float in an impossibly large ocean.",
    },

    {
        name: "Uranus",
        color: "#8fc4c9",
        image: "assets/images/celestial/uranus.jpg",
        moons: 28,
        classification: "Ice giant",
        atmosphere:
            "Hydrogen and helium mixed with methane, which absorbs red light and gives Uranus its pale blue-green color.",
        structure:
            "An icy mantle of water, ammonia, and methane surrounds a relatively small rocky core.",
        surface:
            "It has no solid surface. Beneath the atmosphere lies a deep mantle of hot, high-pressure icy fluids.",
        exploration:
            "Voyager 2 remains the only spacecraft to visit Uranus, flying past in 1986.",
        mythology:
            "Named after the Greek god of the sky, making it the only planet named for a Greek deity rather than a Roman one.",
        discovered:
            "Discovered by William Herschel in 1781, the first planet found using a telescope.",
        highlight:
            "Its axis is tilted by about 98°, causing it to appear to roll around the Sun.",
    },

    {
        name: "Neptune",
        color: "#5a7bc4",
        image: "assets/images/celestial/neptune.jpg",
        moons: 16,
        classification: "Ice giant",
        atmosphere:
            "Hydrogen, helium, and methane produce Neptune's vivid blue appearance, while fierce storms race through its atmosphere.",
        structure:
            "Like Uranus, Neptune contains a rocky core beneath an enormous mantle of water, ammonia, and methane ices.",
        surface:
            "It has no solid surface. Deeper layers become increasingly hot and compressed under immense pressure.",
        exploration:
            "Voyager 2 flew past Neptune in 1989, providing humanity's only close-up observations of the distant planet.",
        mythology:
            "Named after the Roman god of the sea because of its deep blue color.",
        discovered:
            "Predicted mathematically before being observed by Johann Galle in 1846.",
        highlight:
            "Hosts the fastest sustained winds measured anywhere in the Solar System, exceeding 2,000 km/h.",
    },
];

const gallery = document.getElementById("gallery");
const panelCollapse = document.getElementById("panel-collapse");
const panel = document.getElementById("panel");
const tableBody = document.getElementById("table-body");
const viewToggle = document.getElementById("view-toggle");
const viewToggleIcon = document.getElementById("view-toggle-icon");
const viewToggleLabel = document.getElementById("view-toggle-label");
const galleryView = document.getElementById("gallery-view");
const tableView = document.getElementById("table-view");

let expandedIndex = null;
let currentView = "gallery";

const cardBaseClass =
    "planet-card group border-border bg-surface shadow-elevated hover:shadow-elevated-hover active:shadow-elevated hover:border-primary/40 transition-[color, transform, box-shadow] flex flex-col items-center rounded-sm border p-5 text-center duration-200 hover:-translate-y-1 active:translate-y-0 cursor-pointer";

PLANETS.forEach((p, i) => {
    const wrapper = document.createElement("div");
    wrapper.className = "animate-target";

    const card = document.createElement("div");
    card.className = cardBaseClass;
    card.setAttribute("role", "button");
    card.setAttribute("tabindex", "0");
    card.setAttribute("aria-expanded", "false");
    card.setAttribute("aria-label", `${p.name}, tap to expand`);

    card.innerHTML = `
        <div
            class="bg-surface-2 mb-4 flex aspect-[2.2/1] w-full items-center justify-center overflow-hidden rounded-full border border-border"
        >
            <img
                src="${p.image}"
                alt=""
                class="h-full w-full object-cover"
                loading="lazy"
            />
        </div>
        <span class="mb-1 font-sans text-sm font-semibold">${p.name}</span>
        <span class="text-muted inline-flex items-center gap-1 font-mono text-xs tracking-widest uppercase">
            Tap to expand
            <i class="bx bx-chevron-down chevron-toggle text-sm" aria-hidden="true"></i>
        </span>
    `;

    card.addEventListener("click", () => toggleExpand(i));
    card.addEventListener("keydown", (e) => {
        if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            toggleExpand(i);
        }
    });

    wrapper.appendChild(card);
    gallery.appendChild(wrapper);
});

function toggleExpand(i) {
    const wasOpen = expandedIndex !== null;
    const previousIndex = expandedIndex;
    expandedIndex = expandedIndex === i ? null : i;

    [...gallery.children].forEach((wrapper, idx) => {
        wrapper
            .querySelector(".planet-card")
            .setAttribute("aria-expanded", String(idx === expandedIndex));
    });

    if (expandedIndex === null) {
        panelCollapse.classList.remove("is-open");
        panelCollapse.classList.remove("is-settled");
        return;
    }

    renderPanel(PLANETS[expandedIndex]);
    panelCollapse.classList.add("is-open");

    if (wasOpen && previousIndex !== expandedIndex) {
        // Switching directly between two already-open panels: the grid
        // row is already at 1fr and stays there, so grid-template-rows
        // never changes and no transitionend will fire to settle us.
        panelCollapse.classList.add("is-settled");
    } else {
        panelCollapse.classList.remove("is-settled");
    }

    window.setTimeout(() => {
        panelCollapse.scrollIntoView({ behavior: "smooth", block: "nearest" });
    }, 200);
}

panelCollapse.addEventListener("transitionend", (e) => {
    if (e.target === panelCollapse && e.propertyName === "grid-template-rows") {
        if (panelCollapse.classList.contains("is-open")) {
            panelCollapse.classList.add("is-settled");
        }
    }
});

function renderPanel(p) {
    panel.style.setProperty("--planet-color", p.color);

    panel.innerHTML = `
        <div
            class="border-border bg-surface shadow-elevated relative flex flex-col gap-6 rounded-sm border border-l-4 p-6 md:flex-row md:items-start"
            style="border-left-color: var(--planet-color);"
        >
            <button
                id="panel-close"
                type="button"
                aria-label="Close ${p.name} panel"
                class="text-muted hover:text-primary hover:bg-surface-2 absolute top-4 right-4 inline-flex h-8 w-8 items-center justify-center rounded-sm transition-colors duration-200"
            >
                <i class="bx bx-x text-xl" aria-hidden="true"></i>
            </button>

            <div
                class="bg-surface-2 mx-auto flex h-32 w-32 shrink-0 items-center justify-center overflow-hidden rounded-full border border-border md:mx-0"
            >
                <img
                    src="${p.image}"
                    alt="${p.name}"
                    class="h-full w-full object-cover"
                />
            </div>

            <div class="panel-inner-content min-w-0 flex-1 pr-10">
                <h3 class="font-display mb-1 text-2xl font-semibold tracking-tight">
                    ${p.name}
                </h3>

                <p class="text-muted mb-4 text-xs italic">
                    ${p.discovered}
                </p>

                <dl class="mb-5 grid grid-cols-2 gap-4">
                    <div>
                        <dt class="text-muted font-mono text-xs tracking-widest uppercase">
                            Classification
                        </dt>
                        <dd class="text-primary font-mono text-base font-semibold">
                            ${p.classification}
                        </dd>
                    </div>

                    <div>
                        <dt class="text-muted font-mono text-xs tracking-widest uppercase">
                            Moons
                        </dt>
                        <dd class="text-primary font-mono text-base font-semibold">
                            ${p.moons}
                        </dd>
                    </div>
                </dl>

                <p class="text-muted mb-3 text-sm leading-relaxed">
                    <span class="text-foreground font-mono text-xs tracking-widest uppercase">
                        Mythology
                    </span><br>
                    ${p.mythology}
                </p>

                <p class="text-muted mb-3 text-sm leading-relaxed">
                    <span class="text-foreground font-mono text-xs tracking-widest uppercase">
                        Atmosphere
                    </span><br>
                    ${p.atmosphere}
                </p>

                <p class="text-muted mb-3 text-sm leading-relaxed">
                    <span class="text-foreground font-mono text-xs tracking-widest uppercase">
                        Structure
                    </span><br>
                    ${p.structure}
                </p>

                <p class="text-muted mb-3 text-sm leading-relaxed">
                    <span class="text-foreground font-mono text-xs tracking-widest uppercase">
                        Surface
                    </span><br>
                    ${p.surface}
                </p>

                <p class="text-muted mb-3 text-sm leading-relaxed">
                    <span class="text-foreground font-mono text-xs tracking-widest uppercase">
                        Exploration
                    </span><br>
                    ${p.exploration}
                </p>

                <p class="text-muted text-sm leading-relaxed">
                    <span class="text-foreground font-mono text-xs tracking-widest uppercase">
                        Highlight
                    </span><br>
                    ${p.highlight}
                </p>
            </div>
        </div>
    `;

    document
        .getElementById("panel-close")
        .addEventListener("click", () => toggleExpand(expandedIndex));
}

PLANETS.forEach((p) => {
    const tr = document.createElement("tr");
    tr.innerHTML = `
        <td class="border-border border-b px-5 py-4 font-sans text-sm font-semibold">
            <span class="inline-flex items-center gap-2">
                <span class="inline-block h-2.5 w-2.5 rounded-full" style="background:${p.color}"></span>
                ${p.name}
            </span>
        </td>
        <td class="border-border text-foreground border-b px-5 py-4 font-mono text-sm">${p.discovered}</td>
        <td class="border-border text-foreground border-b px-5 py-4 font-mono text-sm">${p.classification}</td>
        <td class="border-border text-foreground border-b px-5 py-4 font-mono text-sm">${p.moons}</td>
        <td class="border-border text-muted border-b px-5 py-4 text-sm max-w-xs">${p.mythology}</td>
        <td class="border-border text-muted border-b px-5 py-4 text-sm max-w-xs">${p.atmosphere}</td>
        <td class="border-border text-muted border-b px-5 py-4 text-sm max-w-xs">${p.structure}</td>
        <td class="border-border text-muted border-b px-5 py-4 text-sm max-w-xs">${p.surface}</td>
        <td class="border-border text-muted border-b px-5 py-4 text-sm max-w-xs">${p.exploration}</td>
        <td class="border-border text-muted border-b px-5 py-4 text-sm max-w-xs">${p.highlight}</td>
    `;
    tableBody.appendChild(tr);
});

const viewStage = document.getElementById("view-stage");

viewToggle.addEventListener("click", () => {
    const goingToTable = currentView === "gallery";
    const outgoing = goingToTable ? galleryView : tableView;
    const incoming = goingToTable ? tableView : galleryView;

    if (goingToTable && expandedIndex !== null) {
        toggleExpand(expandedIndex);
    }

    // Lock the stage at its current on-screen height so we have a fixed
    // starting point to animate from (switching straight to `auto` snaps).
    const startHeight = viewStage.getBoundingClientRect().height;
    viewStage.style.height = `${startHeight}px`;

    // Briefly pull the incoming panel into normal flow (still invisible) just
    // to measure the height it would be, without showing it or disturbing
    // the outgoing panel's layout.
    incoming.style.position = "static";
    incoming.style.opacity = "0";
    incoming.style.pointerEvents = "none";
    const targetHeight = incoming.scrollHeight;
    incoming.style.position = "";
    incoming.style.opacity = "";
    incoming.style.pointerEvents = "";

    // Animate the stage to the incoming panel's real height (not the max of
    // both), so there's no leftover empty space once the switch settles.
    requestAnimationFrame(() => {
        viewStage.style.height = `${targetHeight}px`;
    });

    outgoing.classList.add("view-hidden");
    outgoing.setAttribute("inert", "");

    window.setTimeout(() => {
        incoming.classList.remove("view-hidden");
        incoming.removeAttribute("inert");
        currentView = goingToTable ? "table" : "gallery";
        viewToggleLabel.textContent = goingToTable
            ? "Gallery View"
            : "Table View";
        viewToggleIcon.className = goingToTable
            ? "bx bx-grid-alt text-base"
            : "bx bx-table text-base";

        // Hand height control back to content once things have settled, so
        // later changes (e.g. expanding a card) resize naturally again.
        viewStage.style.height = "auto";
    }, 320);
});
