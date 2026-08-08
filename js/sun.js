import { observeElements } from "./common.js";

observeElements({ elements: document.querySelector("#intro") });
observeElements({ elements: document.querySelector("#anatomy") });
observeElements({ elements: document.querySelector("#phenomena") });
observeElements({ elements: document.querySelector("#how-it-works") });

const LAYERS = [
    {
        id: "core",
        name: "Core",
        temp: "~15,000,000°C",
        desc: "The Sun's engine room. Crushing pressure fuses hydrogen into helium here, releasing the energy that eventually becomes sunlight.",
    },
    {
        id: "radiative",
        name: "Radiative Zone",
        temp: "~2,000,000–7,000,000°C",
        desc: "Energy leaves the core as photons that bounce between particles over and over — the trip through this zone alone can take tens of thousands of years.",
    },
    {
        id: "convective",
        name: "Convective Zone",
        temp: "~5,500–2,000,000°C",
        desc: "Closer to the surface, plasma is cool enough to rise and sink like boiling water, carrying the remaining energy outward much faster than radiation alone.",
    },
    {
        id: "photosphere",
        name: "Photosphere",
        temp: "~5,500°C",
        desc: "The visible 'surface' of the Sun — the layer where light finally escapes freely into space. This is the surface we actually see and photograph.",
    },
];

const svgLayers = document.querySelectorAll(".sun-layer");
const buttonsWrap = document.getElementById("layer-buttons");
const panel = document.getElementById("layer-panel");
const nameEl = document.getElementById("layer-name");
const tempEl = document.getElementById("layer-temp");
const descEl = document.getElementById("layer-desc");

function selectLayer(id) {
    const layer = LAYERS.find((l) => l.id === id);
    if (!layer) return;

    // brief fade-swap so the panel doesn't just snap to new content
    panel.classList.add("swapping");
    setTimeout(() => {
        nameEl.textContent = layer.name;
        tempEl.textContent = layer.temp;
        descEl.textContent = layer.desc;
        panel.classList.remove("swapping");
    }, 120);

    svgLayers.forEach((g) =>
        g.setAttribute(
            "data-active",
            g.dataset.layer === id ? "true" : "false",
        ),
    );
    document.querySelectorAll(".layer-btn").forEach((btn) => {
        btn.setAttribute(
            "aria-pressed",
            btn.dataset.layer === id ? "true" : "false",
        );
    });
}

// Build the accessible legend/tab buttons (also the primary keyboard control)
LAYERS.forEach((layer) => {
    const btn = document.createElement("button");
    btn.type = "button";
    btn.className =
        "layer-btn border-border hover:border-primary/40 rounded-sm border px-3 py-2 text-left text-sm transition-colors";
    btn.dataset.layer = layer.id;
    btn.setAttribute("role", "tab");
    btn.setAttribute("aria-pressed", "false");
    btn.textContent = layer.name;
    btn.addEventListener("click", () => selectLayer(layer.id));
    buttonsWrap.appendChild(btn);
});

// Clicking a ring in the SVG selects the same layer as its legend button
svgLayers.forEach((g) => {
    g.addEventListener("click", () => selectLayer(g.dataset.layer));
});

// Default to the core on load
selectLayer("core");
