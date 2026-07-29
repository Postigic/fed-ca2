/* =========================================================
    MOON PHASE DATA
    index: 0-7 across the 8 canonical phases, angleDeg spaces
    them evenly around the 360° cycle (0 = new, 180 = full).
========================================================= */

import { observeElements } from "./common.js";

observeElements({ elements: document.querySelector("#intro") });
observeElements({ elements: document.querySelector("#phase-explorer") });
observeElements({ elements: document.querySelector("#fun-facts") });
observeElements({ elements: document.querySelector("#gallery") });
observeElements({ elements: document.querySelector("#timeline") });

const PHASES = [
    {
        name: "New Moon",
        angle: 0,
        desc: "The Moon sits between Earth and the Sun, so its lit side faces away from us and it's essentially invisible in the sky.",
        tip: "You won't see it — but it's the best night of the month for stargazing since there's no moonlight to wash out faint stars.",
    },
    {
        name: "Waxing Crescent",
        angle: 45,
        desc: "A thin sliver of light appears on the right edge as the Moon starts moving out from between Earth and the Sun.",
        tip: "Look just after sunset, low in the western sky.",
    },
    {
        name: "First Quarter",
        angle: 90,
        desc: "Exactly half the visible face is lit. Despite the name, it's a quarter of the way through the full cycle, not a quarter lit.",
        tip: "Visible high in the sky in the afternoon and early evening — a great time to see craters along the terminator line.",
    },
    {
        name: "Waxing Gibbous",
        angle: 135,
        desc: "More than half the disk is lit, and it keeps growing as the Moon approaches the far side of its orbit from the Sun.",
        tip: "Rises in the afternoon and is visible for most of the night.",
    },
    {
        name: "Full Moon",
        angle: 180,
        desc: "Earth sits roughly between the Sun and Moon, so we see the entire lit face — the brightest phase of the month.",
        tip: "Rises around sunset and stays up all night, making it easy to spot without staying up late.",
    },
    {
        name: "Waning Gibbous",
        angle: 225,
        desc: "Illumination starts shrinking back from the right side after the full moon, though it's still mostly lit.",
        tip: "Rises later in the evening — check the eastern sky after dark.",
    },
    {
        name: "Last Quarter",
        angle: 270,
        desc: "The other half of the disk is now lit, mirroring the first quarter — it's three-quarters of the way through the cycle.",
        tip: "Best viewed after midnight and into the early morning sky.",
    },
    {
        name: "Waning Crescent",
        angle: 315,
        desc: "A thin crescent remains as the Moon heads back toward alignment with the Sun and the next new moon.",
        tip: "Look for it low in the east just before sunrise.",
    },
];

const svgR = 70,
    svgCX = 100,
    svgCY = 100;

/**
 * Builds the SVG path for the illuminated portion of the Moon at a given
 * angle (0-360°) using the classic "two half-circle arcs" technique:
 * one arc is always the true limb of the Moon (radius = r), the other is
 * an ellipse whose horizontal radius is r*cos(angle) — its sweep flag
 * flips between crescent and gibbous so the two arcs bow the same way
 * (thin crescent) or opposite ways (fat gibbous).
 */
function moonLitPath(angleDeg, r = svgR, cx = svgCX, cy = svgCY) {
    const angle = (angleDeg * Math.PI) / 180;
    const rx = Math.abs(r * Math.cos(angle));
    const litOnRight = angleDeg <= 180;
    const crescent = angleDeg < 90 || angleDeg > 270;

    const outerSweep = litOnRight ? 1 : 0;
    const innerSweep = litOnRight ? (crescent ? 1 : 0) : crescent ? 0 : 1;

    const top = `${cx} ${cy - r}`;
    const bottom = `${cx} ${cy + r}`;

    return `M ${top} A ${r} ${r} 0 0 ${outerSweep} ${bottom} A ${rx} ${r} 0 0 ${innerSweep} ${top} Z`;
}

function illumination(angleDeg) {
    const angle = (angleDeg * Math.PI) / 180;
    return Math.round(((1 - Math.cos(angle)) / 2) * 100);
}

const litPathEl = document.getElementById("moon-lit-path");
const slider = document.getElementById("phase-slider");
const nameEl = document.getElementById("phase-name");
const descEl = document.getElementById("phase-desc");
const tipEl = document.getElementById("phase-tip");
const illumEl = document.getElementById("phase-illum");
const liveEl = document.getElementById("phase-live");
const ticksWrap = document.getElementById("phase-ticks");

function renderPhase(index) {
    const p = PHASES[index];
    litPathEl.setAttribute("d", moonLitPath(p.angle));
    nameEl.textContent = p.name;
    descEl.textContent = p.desc;
    tipEl.textContent = p.tip;
    illumEl.textContent = illumination(p.angle);
    liveEl.textContent = `${p.name}, ${illumination(p.angle)} percent illuminated`;

    slider.value = index;
    slider.style.setProperty("--fill", `${(index / 7) * 100}%`);

    document.querySelectorAll(".phase-tick").forEach((btn, i) => {
        btn.setAttribute("aria-pressed", i === index ? "true" : "false");
    });
}

// Build the 8 quick-select tick buttons, each with a small precomputed phase icon.
PHASES.forEach((p, i) => {
    const btn = document.createElement("button");
    btn.type = "button";
    btn.className =
        "phase-tick border-border hover:border-primary/40 flex flex-col items-center gap-1.5 rounded-sm border p-2 transition-colors";
    btn.setAttribute("aria-pressed", "false");
    btn.title = p.name;
    btn.innerHTML = `
        <svg viewBox="0 0 200 200" class="h-6 w-6" aria-hidden="true">
            <circle cx="100" cy="100" r="90" fill="var(--color-surface-2)" />
            <clipPath id="tick-clip-${i}"><path d="${moonLitPath(p.angle, 90)}" /></clipPath>
            <circle cx="100" cy="100" r="90" class="lit" clip-path="url(#tick-clip-${i})" />
        </svg>
        <span class="text-muted text-[10px] leading-tight">${p.name.split(" ")[0]}</span>
    `;
    btn.addEventListener("click", () => renderPhase(i));
    ticksWrap.appendChild(btn);
});

slider.addEventListener("input", (e) => renderPhase(Number(e.target.value)));
document.getElementById("phase-prev").addEventListener("click", () => {
    renderPhase((Number(slider.value) + 7) % 8);
});
document.getElementById("phase-next").addEventListener("click", () => {
    renderPhase((Number(slider.value) + 1) % 8);
});

renderPhase(0);

/* =========================================================
    TIMELINE
========================================================= */
const MILESTONES = [
    {
        year: "1609",
        title: "Galileo sketches the Moon",
        body: "Galileo Galilei points a telescope at the Moon and records mountains and craters, showing it isn't the perfectly smooth sphere many believed.",
    },
    {
        year: "1959",
        title: "Luna 2 reaches the surface",
        body: "The Soviet Union's Luna 2 becomes the first human-made object to reach the Moon, impacting its surface and confirming it has no significant magnetic field.",
    },
    {
        year: "1969",
        title: "Apollo 11 — first footsteps",
        body: "Neil Armstrong and Buzz Aldrin become the first humans to walk on the Moon, while Michael Collins orbits above in the command module.",
    },
    {
        year: "1972",
        title: "Apollo 17 — last crewed landing",
        body: "Gene Cernan and Harrison Schmitt complete the sixth and, so far, final crewed Moon landing, spending three days on the surface.",
    },
    {
        year: "2009",
        title: "Water ice confirmed",
        body: "NASA's LCROSS mission deliberately impacts a shadowed crater near the south pole, confirming the presence of water ice — a key resource for future missions.",
    },
    {
        year: "2026",
        title: "Artemis return missions",
        body: "NASA's Artemis program works to return astronauts to lunar orbit and the surface, this time aiming to stay for the long term.",
    },
];

const nodesWrap = document.getElementById("timeline-nodes");
const tlYear = document.getElementById("tl-year");
const tlTitle = document.getElementById("tl-title");
const tlBody = document.getElementById("tl-body");
const tlCard = document.getElementById("timeline-card");

function renderMilestone(index) {
    tlCard.classList.add("swapping");
    setTimeout(() => {
        const m = MILESTONES[index];
        tlYear.textContent = m.year;
        tlTitle.textContent = m.title;
        tlBody.textContent = m.body;
        tlCard.classList.remove("swapping");
    }, 150);

    document.querySelectorAll(".tl-node").forEach((btn, i) => {
        btn.setAttribute("aria-current", i === index ? "true" : "false");
    });
}

MILESTONES.forEach((m, i) => {
    const btn = document.createElement("button");
    btn.type = "button";
    btn.className = "tl-node group flex flex-col items-center gap-2 px-1";
    btn.setAttribute("aria-current", "false");
    btn.innerHTML = `
        <span class="tl-dot border-border bg-background group-hover:border-primary h-3 w-3 rounded-full border-2 transition-colors"></span>
        <span class="tl-label text-muted font-mono text-xs whitespace-nowrap transition-colors">${m.year}</span>
    `;
    btn.addEventListener("click", () => renderMilestone(i));
    nodesWrap.appendChild(btn);
});

renderMilestone(0);
