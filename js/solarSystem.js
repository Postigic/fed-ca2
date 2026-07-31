import { observeElements } from "./common.js";

observeElements({ elements: document.querySelector("#intro") });
observeElements({
    elements: document.querySelector("#orrery"),
    desktopThreshold: 0.7,
});

const PLANETS = [
    {
        id: "mercury",
        name: "Mercury",
        type: "planet",
        size: 9,
        orbitFrac: 0.12,
        periodYears: 0.241,
        ecc: 0.206,
        incl: 7.0,
        bg: "radial-gradient(circle at 35% 30%, #b9b3ab, #6b6660 60%, #3c3833 100%)",
        image: "assets/planets/mercury.jpg",
        tagline: "The swift, sun-scorched world",
        desc: "The smallest planet and closest to the Sun, Mercury has almost no atmosphere to trap heat, so it swings between blistering days and frozen nights.",
        stats: {
            Diameter: "4,879 km",
            "Distance from Sun": "0.39 AU (avg)",
            "Orbital period": "88 days",
            "Rotation period": "59 Earth days",
            Moons: "0",
            "Surface gravity": "0.38 g",
            "Mean temperature": "167 °C",
        },
    },
    {
        id: "venus",
        name: "Venus",
        type: "planet",
        size: 14,
        orbitFrac: 0.18,
        periodYears: 0.615,
        ecc: 0.007,
        incl: 3.4,
        bg: "radial-gradient(circle at 35% 30%, #f0dca8, #c9a05a 65%, #8a6a34 100%)",
        image: "assets/planets/venus.jpg",
        tagline: "Earth's twin, wrapped in a toxic haze",
        desc: "Venus is similar in size to Earth but its thick carbon dioxide atmosphere traps heat so effectively it's the hottest planet in the solar system.",
        stats: {
            Diameter: "12,104 km",
            "Distance from Sun": "0.72 AU (avg)",
            "Orbital period": "225 days",
            "Rotation period": "243 Earth days",
            Moons: "0",
            "Surface gravity": "0.90 g",
            "Mean temperature": "464 °C",
        },
    },
    {
        id: "earth",
        name: "Earth",
        type: "planet",
        size: 15,
        orbitFrac: 0.24,
        periodYears: 1,
        ecc: 0.017,
        incl: 0,
        bg: "radial-gradient(circle at 30% 65%, rgba(70,140,80,.9) 0 9%, transparent 10%), radial-gradient(circle at 62% 32%, rgba(70,140,80,.85) 0 11%, transparent 12%), radial-gradient(circle at 35% 30%, #7ec1e8, #285f92 55%, #12314f 100%)",
        image: "assets/planets/earth.jpg",
        tagline: "Our home, the only known living world",
        desc: "Liquid water, a protective atmosphere, and a stable climate make Earth the only place we know of where life has taken hold.",
        stats: {
            Diameter: "12,742 km",
            "Distance from Sun": "1 AU (avg)",
            "Orbital period": "365.25 days",
            "Rotation period": "24 hours",
            Moons: "1",
            "Surface gravity": "1.00 g",
            "Mean temperature": "15 °C",
        },
    },
    {
        id: "mars",
        name: "Mars",
        type: "planet",
        size: 11,
        orbitFrac: 0.3,
        periodYears: 1.881,
        ecc: 0.093,
        incl: 1.85,
        bg: "radial-gradient(circle at 35% 30%, #d98a5f, #a1502c 55%, #5c2814 100%)",
        image: "assets/planets/mars.jpg",
        tagline: "The rust-red desert world",
        desc: "Iron oxide dust gives Mars its color. It hosts the largest volcano and canyon in the solar system, and once had rivers and lakes of liquid water.",
        stats: {
            Diameter: "6,779 km",
            "Distance from Sun": "1.52 AU (avg)",
            "Orbital period": "687 days",
            "Rotation period": "24.6 hours",
            Moons: "2",
            "Surface gravity": "0.38 g",
            "Mean temperature": "-63 °C",
        },
    },
    {
        id: "jupiter",
        name: "Jupiter",
        type: "planet",
        size: 34,
        orbitFrac: 0.48,
        periodYears: 11.86,
        ecc: 0.048,
        incl: 1.3,
        bg: "repeating-linear-gradient(4deg, #e0bd8a 0 7%, #c9915a 7% 13%, #dba873 13% 19%), radial-gradient(circle at 30% 28%, rgba(255,255,255,.4), transparent 45%), radial-gradient(circle at 68% 74%, rgba(0,0,0,.4), transparent 60%)",
        blend: "screen, multiply, normal",
        image: "assets/planets/jupiter.jpg",
        tagline: "The gas giant that rules the outer system",
        desc: "Jupiter is the largest planet by far, a churning ball of hydrogen and helium with a storm — the Great Red Spot — wider than Earth.",
        stats: {
            Diameter: "139,820 km",
            "Distance from Sun": "5.2 AU (avg)",
            "Orbital period": "11.9 years",
            "Rotation period": "9.9 hours",
            Moons: "95",
            "Surface gravity": "2.53 g",
            "Mean temperature": "-108 °C",
        },
    },
    {
        id: "saturn",
        name: "Saturn",
        type: "planet",
        size: 30,
        orbitFrac: 0.58,
        periodYears: 29.4,
        ecc: 0.056,
        incl: 2.5,
        bg: "repeating-linear-gradient(4deg, #ecdcae 0 8%, #d9c08a 8% 15%), radial-gradient(circle at 30% 28%, rgba(255,255,255,.35), transparent 45%), radial-gradient(circle at 68% 74%, rgba(0,0,0,.35), transparent 60%)",
        blend: "screen, multiply, normal",
        image: "assets/planets/saturn.jpg",
        tagline: "Crowned by a dazzling ring system",
        desc: "Saturn's rings are made of countless chunks of ice and rock. Despite its size, Saturn is so low-density it would float in a big enough bathtub.",
        stats: {
            Diameter: "116,460 km",
            "Distance from Sun": "9.58 AU (avg)",
            "Orbital period": "29.4 years",
            "Rotation period": "10.7 hours",
            Moons: "146",
            "Surface gravity": "1.07 g",
            "Mean temperature": "-138 °C",
        },
    },
    {
        id: "uranus",
        name: "Uranus",
        type: "planet",
        size: 20,
        orbitFrac: 0.68,
        periodYears: 84,
        ecc: 0.046,
        incl: 0.77,
        bg: "radial-gradient(circle at 35% 30%, #b8e8e8, #6bb8b8 55%, #3a7d7d 100%)",
        image: "assets/planets/uranus.jpg",
        tagline: "The ice giant tipped on its side",
        desc: "Uranus rotates almost on its side, likely from an ancient collision, giving it the most extreme seasons of any planet.",
        stats: {
            Diameter: "50,724 km",
            "Distance from Sun": "19.2 AU (avg)",
            "Orbital period": "84 years",
            "Rotation period": "17.2 hours",
            Moons: "28",
            "Surface gravity": "0.89 g",
            "Mean temperature": "-197 °C",
        },
    },
    {
        id: "neptune",
        name: "Neptune",
        type: "planet",
        size: 19,
        orbitFrac: 0.77,
        periodYears: 165,
        ecc: 0.01,
        incl: 1.77,
        bg: "radial-gradient(circle at 35% 30%, #6f8ef0, #2f45c0 55%, #17206b 100%)",
        image: "assets/planets/neptune.jpg",
        tagline: "The windiest world in the solar system",
        desc: "Neptune is the farthest known planet from the Sun, a deep blue ice giant with supersonic winds faster than any measured on another planet.",
        stats: {
            Diameter: "49,244 km",
            "Distance from Sun": "30.05 AU (avg)",
            "Orbital period": "165 years",
            "Rotation period": "16.1 hours",
            Moons: "16",
            "Surface gravity": "1.14 g",
            "Mean temperature": "-201 °C",
        },
    },
];

const DWARFS = [
    {
        id: "ceres",
        name: "Ceres",
        type: "dwarf",
        size: 6,
        orbitFrac: 0.4,
        periodYears: 4.6,
        ecc: 0.076,
        incl: 10.6,
        bg: "radial-gradient(circle at 35% 30%, #a8a196, #6e6862 60%, #423e39 100%)",
        image: "assets/planets/ceres.jpg",
        tagline: "Queen of the asteroid belt",
        desc: "Ceres is the largest object in the asteroid belt and the only dwarf planet in the inner solar system, with a cratered, ice-rich surface.",
        stats: {
            Diameter: "940 km",
            "Distance from Sun": "2.77 AU (avg)",
            "Orbital period": "4.6 years",
            "Rotation period": "9 hours",
            Moons: "0",
            "Surface gravity": "0.03 g",
            "Mean temperature": "-105 °C",
        },
    },
    {
        id: "pluto",
        name: "Pluto",
        type: "dwarf",
        size: 7,
        orbitFrac: 0.68,
        periodYears: 248,
        ecc: 0.249,
        incl: 17.2,
        bg: "radial-gradient(circle at 35% 30%, #e6d9c8, #ab8f74 55%, #5f4c3c 100%)",
        image: "assets/planets/pluto.jpg",
        tagline: "The most famous dwarf planet",
        desc: "Pluto spent decades classified as the ninth planet before the 2006 definition of 'planet' moved it to dwarf-planet status. Its orbit is tilted and eccentric enough that it's occasionally closer to the Sun than Neptune.",
        stats: {
            Diameter: "2,377 km",
            "Distance from Sun": "39.5 AU (avg)",
            "Orbital period": "248 years",
            "Rotation period": "6.4 Earth days",
            Moons: "5",
            "Surface gravity": "0.06 g",
            "Mean temperature": "-229 °C",
        },
    },
    {
        id: "haumea",
        name: "Haumea",
        type: "dwarf",
        size: 5,
        orbitFrac: 0.74,
        periodYears: 284,
        ecc: 0.195,
        incl: 28.2,
        bg: "radial-gradient(circle at 35% 30%, #e2e8ea, #a9b6ba 55%, #647275 100%)",
        image: "assets/planets/haumea.jpg",
        tagline: "The dwarf planet shaped like an egg",
        desc: "Haumea spins so fast — once every four hours — that it has been stretched into an elongated, egg-like shape, unlike any planet in the solar system.",
        stats: {
            "Mean diameter": "~1,600 km",
            "Distance from Sun": "43 AU (avg)",
            "Orbital period": "284 years",
            "Rotation period": "3.9 hours",
            Moons: "2",
            "Surface gravity": "~0.04 g",
            "Mean temperature": "-241 °C",
        },
    },
    {
        id: "makemake",
        name: "Makemake",
        type: "dwarf",
        size: 5,
        orbitFrac: 0.78,
        periodYears: 305,
        ecc: 0.159,
        incl: 29.0,
        bg: "radial-gradient(circle at 35% 30%, #d9b89a, #a67c56 55%, #5e4530 100%)",
        image: "assets/planets/makemake.jpg",
        tagline: "A frozen world beyond Pluto",
        desc: "Makemake is one of the largest known Kuiper Belt objects, covered in frozen methane and ethane that give it a reddish-brown surface.",
        stats: {
            Diameter: "~1,430 km",
            "Distance from Sun": "45.8 AU (avg)",
            "Orbital period": "305 years",
            "Rotation period": "22.5 hours",
            Moons: "1",
            "Surface gravity": "~0.05 g",
            "Mean temperature": "-239 °C",
        },
    },
    {
        id: "eris",
        name: "Eris",
        type: "dwarf",
        size: 6,
        orbitFrac: 0.9,
        periodYears: 559,
        ecc: 0.436,
        incl: 44.0,
        bg: "radial-gradient(circle at 35% 30%, #eef1f4, #b7bfc9 55%, #6c7683 100%)",
        image: "assets/planets/eris.jpg",
        tagline: "A distant, icy rival to Pluto",
        desc: "Eris is nearly as large as Pluto but far more distant, on an orbit tilted an extreme 44° from the plane the planets roughly share. Its discovery in 2005 triggered the debate that redefined what counts as a planet.",
        stats: {
            Diameter: "2,326 km",
            "Distance from Sun": "96 AU (avg)",
            "Orbital period": "559 years",
            "Rotation period": "~26 hours",
            Moons: "1",
            "Surface gravity": "~0.08 g",
            "Mean temperature": "-231 °C",
        },
    },
];

const REGIONS = [
    {
        id: "asteroid-belt",
        name: "Asteroid Belt",
        type: "region",
        image: "assets/regions/asteroid-belt.jpg",
        bg: "radial-gradient(circle at 35% 30%, #a89882, #6b5d4a 60%, #40362a 100%)",
        tagline: "A scattered ring of rocky leftovers",
        desc: "Between Mars and Jupiter, millions of rocky bodies orbit the Sun — debris from the early solar system that never coalesced into a planet, kept stirred up by Jupiter's gravity.",
        stats: {
            Location: "2.1–3.3 AU",
            "Estimated objects": "~1 million (>1 km)",
            "Largest body": "Ceres",
            "Total mass": "~4% of the Moon",
        },
    },
    {
        id: "kuiper-belt",
        name: "Kuiper Belt",
        type: "region",
        image: "assets/regions/kuiper-belt.jpg",
        bg: "radial-gradient(circle at 35% 30%, #b7c6cc, #74868c 60%, #46545a 100%)",
        tagline: "A frozen ring of icy worlds beyond Neptune",
        desc: "Far past Neptune, the Kuiper Belt holds hundreds of thousands of icy bodies, including Pluto and several other dwarf planets, along with the source material for many short-period comets.",
        stats: {
            Location: "30–50 AU",
            "Estimated objects": "100,000+ (>100 km)",
            "Notable members": "Pluto, Makemake",
            Composition: "Ice, rock, methane",
        },
    },
    {
        id: "oort-cloud",
        name: "Oort Cloud",
        type: "region",
        image: "assets/regions/oort-cloud.jpg",
        bg: "radial-gradient(circle at 40% 35%, rgba(233,237,246,.5), rgba(233,237,246,.06) 70%)",
        tagline: "The solar system's distant, spherical shell of comets",
        desc: "The Oort Cloud is a vast, roughly spherical shell of icy debris thought to surround the solar system far beyond the planets — the presumed source of most long-period comets. It has never been directly observed.",
        stats: {
            Distance: "~2,000–100,000 AU",
            Shape: "Spherical shell",
            Composition: "Ice, dust",
            Status: "Theoretical / inferred",
        },
    },
];

const stageViewport = document.getElementById("stage-viewport"); // clipping window (overflow-hidden), pan/zoom pointer target
const stage = document.getElementById("stage");
const sun = document.getElementById("sun");
const grid = document.getElementById("orrery-grid");
const panel = document.getElementById("panel");
const panelInner = document.getElementById("panel-inner");
const panelClose = document.getElementById("panel-close");

const TILT = 0.4; // vertical foreshortening factor for the pseudo-3D "viewed from an angle" look
const K = 0.42; // tunable constant for the periodYears -> angular speed curve (see `speed` below)
const CX_BIAS = 0.5; // where the sun sits horizontally within the stage, as a fraction of width
const RADIAL_MARGIN = 0.88; // orbits are scaled to this fraction of the stage's half-width, leaving a margin

let fullW = 0,
    fullH = 0,
    cx = 0, // sun's x position in px, recomputed in layoutStage()
    cy = 0; // sun's y position in px, recomputed in layoutStage()
let activeId = null;

const ALL_BODIES = [...PLANETS, ...DWARFS, ...REGIONS];

function createStarfield(container, count = 140) {
    const frag = document.createDocumentFragment();
    for (let i = 0; i < count; i++) {
        const star = document.createElement("div");

        star.className = "star";
        star.setAttribute("aria-hidden", "true");

        const size = 0.6 + Math.random() * 1.6; // px

        star.style.width = size + "px";
        star.style.height = size + "px";
        star.style.left = Math.random() * 100 + "%";
        star.style.top = Math.random() * 100 + "%";

        // Twinkle range/timing randomized per-star via CSS custom properties
        // (consumed by the .star / @keyframes star-twinkle rules in the
        // <style> block) so stars don't all pulse in lockstep.
        const minOpacity = 0.15 + Math.random() * 0.2;
        const maxOpacity = 0.55 + Math.random() * 0.4;

        star.style.setProperty("--min-opacity", minOpacity.toFixed(2));
        star.style.setProperty("--max-opacity", maxOpacity.toFixed(2));
        star.style.setProperty(
            "--dur",
            (2.5 + Math.random() * 4).toFixed(2) + "s",
        );
        star.style.setProperty(
            "--delay",
            (-Math.random() * 6).toFixed(2) + "s",
        ); // negative delay = starts mid-cycle

        frag.appendChild(star);
    }
    container.appendChild(frag);
}

createStarfield(document.getElementById("starfield"));

const els = [...PLANETS, ...DWARFS].map((p) => {
    const orbit = document.createElement("div");
    orbit.className = "orbit" + (p.type === "dwarf" ? " is-dwarf" : "");
    stage.appendChild(orbit);

    const btn = document.createElement("button");

    btn.type = "button";
    btn.className =
        "planet absolute w-[var(--size)] h-[var(--size)] -translate-x-1/2 -translate-y-1/2 rounded-full border-0 bg-transparent p-0 m-0 cursor-pointer" +
        (p.type === "dwarf" ? " is-dwarf" : "");
    btn.dataset.planet = p.id;
    btn.style.setProperty("--size", p.size + "px");
    btn.setAttribute("aria-label", p.name);
    btn.innerHTML =
        '<span class="planet-dot" style="--bg:' +
        p.bg +
        (p.blend ? ";--blend:" + p.blend : "") +
        '"></span>' +
        '<span class="planet-label font-mono text-[0.62rem] tracking-wide uppercase">' +
        p.name +
        "</span>";

    stage.appendChild(btn);

    const item = {
        data: p,
        orbitEl: orbit,
        btnEl: btn,
        angle: Math.random() * Math.PI * 2, // current position along the orbit, radians
        speed: K / Math.pow(p.periodYears, 0.42), // angular speed, radians/sec
        phi: (p.incl * Math.PI) / 180, // inclination in radians, used to rotate the ellipse
    };

    btn.addEventListener("click", () => openBody(p.id));

    const setHover = (on) => {
        orbit.classList.toggle("is-hot", on || p.id === activeId);
        stage.classList.toggle("is-hovering", on);
    };

    btn.addEventListener("mouseenter", () => setHover(true));
    btn.addEventListener("mouseleave", () => setHover(false));
    btn.addEventListener("focus", () => setHover(true));
    btn.addEventListener("blur", () => setHover(false));

    return item;
});

// Stable "how far out is this body" ranking (0 = innermost), used as a
// tie-breaker in positionAll()'s z-index calc below. See the comment there
// for why this exists. Short version: without it, two planets can end up
// with near-identical z-index and their front/back order can flip randomly
// frame to frame (this is what caused Uranus to occasionally render in front
// of Saturn observed during testing).
[...els]
    .sort((a, b) => a.data.orbitFrac - b.data.orbitFrac)
    .forEach((e, i) => {
        e.depthRank = i;
    });

// Stamps out `count` small dots scattered in an annulus between fracMin and
// fracMax (as a fraction of stage radius). Used for the asteroid + Kuiper
// belts. These are purely decorative scatter, not simulated bodies, so
// each dot gets randomized size/opacity/phase once and just orbits at a
// fixed radius (no eccentricity/inclination like real planets get).
function makeBelt(className, fracMin, fracMax, count, sizeRange, periodRange) {
    const items = [];
    for (let i = 0; i < count; i++) {
        const el = document.createElement("div");

        el.className = "belt-dot " + className;
        el.setAttribute("aria-hidden", "true");
        stage.appendChild(el);

        const size =
            sizeRange[0] + Math.random() * (sizeRange[1] - sizeRange[0]);

        el.style.width = size + "px";
        el.style.height = size + "px";

        const baseOpacity = 0.25 + Math.random() * 0.4;
        el.style.opacity = String(baseOpacity);

        const period =
            periodRange[0] + Math.random() * (periodRange[1] - periodRange[0]);

        items.push({
            el,
            baseOpacity,
            fracR: fracMin + Math.random() * (fracMax - fracMin),
            jitter: (Math.random() - 0.5) * 0.5,
            angle: Math.random() * Math.PI * 2,
            speed: (K / Math.pow(period, 0.42)) * 0.6,
        });
    }
    return items;
}

const asteroidBelt = makeBelt("asteroid", 0.34, 0.42, 55, [1, 2.5], [3.3, 6]);
const kuiperBelt = makeBelt("kuiper", 0.58, 0.82, 40, [1, 2], [200, 320]);

// Single ring marking the (notional) edge of the Oort Cloud, just a dashed
// circle via CSS (.oort), sized/positioned in layoutStage(). Not a belt of
// dots since the real Oort Cloud is a diffuse shell, not a visible ring.
const oort = document.createElement("div");
oort.className = "oort";
oort.setAttribute("aria-hidden", "true");
stage.appendChild(oort);

// Highlights a belt's dots on hover/active (dims back to baseOpacity otherwise).
function setBeltHot(items, on) {
    items.forEach((b) => {
        b.el.style.opacity = on ? "0.95" : b.baseOpacity;
    });
}

// Each region-hit button covers the *entire* stage, then clip-path: path()
// cuts it down to a ring: an outer ellipse arc plus an inner ellipse arc,
// combined with fill-rule evenodd (outer minus inner = just the band).
// This is simpler than trying to hit-test "is this click within a ring" by
// hand. The browser's clip-path does it for free, and it composes cleanly
// with the same tilted-ellipse math used everywhere else on the stage.
function ellipseArc(px, py, rx, ry) {
    return (
        "M " +
        (px + rx) +
        " " +
        py +
        " A " +
        rx +
        " " +
        ry +
        " 0 1 0 " +
        (px - rx) +
        " " +
        py +
        " A " +
        rx +
        " " +
        ry +
        " 0 1 0 " +
        (px + rx) +
        " " +
        py +
        " Z"
    );
}

// Builds the two-arc `path(evenodd, ...)` clip-path string described above.
// rOuter/rInner get the same TILT foreshortening as everything else so the
// clickable band matches the visually tilted belt.
function annulusClip(px, py, rOuter, rInner) {
    const outer = ellipseArc(px, py, rOuter, rOuter * TILT);
    const inner = ellipseArc(px, py, rInner, rInner * TILT);

    return 'path(evenodd, "' + outer + " " + inner + '")';
}

// Positions a region label (asteroid/Kuiper/Oort) at a fixed polar
// coordinate relative to the sun.
function placeLabel(el, radius, angleDeg) {
    const theta = (angleDeg * Math.PI) / 180;

    el.style.left = cx + radius * Math.cos(theta) + "px";
    el.style.top = cy + radius * Math.sin(theta) * TILT + "px";
}

function makeRegionLabel(id) {
    const el = document.createElement("div");

    el.className =
        "region-label font-mono text-[0.62rem] tracking-wide uppercase";
    el.setAttribute("aria-hidden", "true");
    el.textContent = ALL_BODIES.find((b) => b.id === id).name;
    stage.appendChild(el);

    return el;
}

function makeRegionHit(id, label, onHover) {
    const btn = document.createElement("button");

    btn.type = "button";
    btn.className =
        "region-hit absolute top-0 left-0 z-[40] cursor-pointer border-0 bg-transparent p-0 m-0 outline-none";
    btn.setAttribute("aria-label", ALL_BODIES.find((b) => b.id === id).name);
    btn.addEventListener("click", () => openBody(id));

    const setOn = (on) => {
        onHover(on);
        label.classList.toggle("is-hot", on || activeId === id);
    };

    btn.addEventListener("mouseenter", () => setOn(true));
    btn.addEventListener("mouseleave", () => setOn(false));
    btn.addEventListener("focus", () => setOn(true));
    btn.addEventListener("blur", () => setOn(false));
    stage.appendChild(btn);

    return btn;
}

const asteroidLabel = makeRegionLabel("asteroid-belt");
const kuiperLabel = makeRegionLabel("kuiper-belt");
const oortLabel = makeRegionLabel("oort-cloud");

const asteroidHit = makeRegionHit("asteroid-belt", asteroidLabel, (on) =>
    setBeltHot(asteroidBelt, on || activeId === "asteroid-belt"),
);
const kuiperHit = makeRegionHit("kuiper-belt", kuiperLabel, (on) =>
    setBeltHot(kuiperBelt, on || activeId === "kuiper-belt"),
);
const oortHit = makeRegionHit("oort-cloud", oortLabel, (on) =>
    oort.classList.toggle("is-hot", on || activeId === "oort-cloud"),
);

// All pan/zoom state funnels into a single CSS transform applied to #stage
// (applyTransform, below) -- translate for pan, scale for zoom. Nothing else
// on the stage needs to know pan/zoom is happening; it's all just one
// transform on the parent layer.
let zoom = 1,
    panX = 0,
    panY = 0;
const ZOOM_MIN = 1,
    ZOOM_MAX = 4;
const pointers = new Map(); // active pointerId -> {x, y}, tracks up to 2 fingers for pinch
let panStart = null; // drag-in-progress state, or null
let pinch = null; // pinch-in-progress state, or null

function applyTransform() {
    stage.style.transform =
        "translate(" + panX + "px," + panY + "px) scale(" + zoom + ")";
}

function clampNum(v, min, max) {
    return Math.min(max, Math.max(min, v));
}

// Keeps panX/panY within a range that always leaves at least some of the
// stage visible (plus a small overscroll buffer), scaled by the current zoom.
function clampPan() {
    const vpW = stageViewport.clientWidth,
        vpH = stageViewport.clientHeight;
    const contentW = fullW * zoom,
        contentH = fullH * zoom;
    const buffer = 0.25;

    panX = clampNum(panX, vpW - contentW - fullW * buffer, fullW * buffer);
    panY = clampNum(panY, vpH - contentH - fullH * buffer, fullH * buffer);
}

// Zooms in/out by `factor`, keeping the point at viewport coords (vx, vy)
// visually fixed. Standard "zoom toward cursor/pinch-midpoint" math
function zoomAt(vx, vy, factor) {
    const newZoom = clampNum(zoom * factor, ZOOM_MIN, ZOOM_MAX);

    if (newZoom === zoom) return;

    panX = vx - (vx - panX) * (newZoom / zoom);
    panY = vy - (vy - panY) * (newZoom / zoom);
    zoom = newZoom;

    clampPan();
    applyTransform();
}

function resetView() {
    zoom = 1;
    panX = 0;
    panY = 0;

    applyTransform();
}

stageViewport.addEventListener(
    "wheel",
    (e) => {
        e.preventDefault();

        const rect = stageViewport.getBoundingClientRect();

        zoomAt(
            e.clientX - rect.left,
            e.clientY - rect.top,
            e.deltaY < 0 ? 1.15 : 1 / 1.15,
        );
    },
    { passive: false },
);

const DRAG_THRESHOLD = 6; // px of movement before a press counts as a pan instead of a tap

// Note on why pointer capture is deferred (see panStart.captured below):
// if we captured the pointer immediately on pointerdown, a plain click on a
// planet button would never reach that button because the viewport would "steal"
// it as the start of a pan. So panStart just records the starting position
// here; capture only happens once movement crosses DRAG_THRESHOLD in
// pointermove, by which point we're confident it's a drag, not a tap.
stageViewport.addEventListener("pointerdown", (e) => {
    pointers.set(e.pointerId, { x: e.clientX, y: e.clientY });
    if (pointers.size === 1) {
        panStart = {
            x: e.clientX,
            y: e.clientY,
            panX,
            panY,
            pointerId: e.pointerId,
            captured: false,
        };
    } else if (pointers.size === 2) {
        // A second finger landed mid-drag: cancel the single-pointer pan and
        // switch to pinch-zoom, anchored at the midpoint between the two touches.
        panStart = null;
        stageViewport.setPointerCapture(e.pointerId);

        const pts = [...pointers.values()];
        const rect = stageViewport.getBoundingClientRect();

        pinch = {
            dist: Math.hypot(pts[0].x - pts[1].x, pts[0].y - pts[1].y),
            zoom,
            panX,
            panY,
            mid: {
                x: (pts[0].x + pts[1].x) / 2 - rect.left,
                y: (pts[0].y + pts[1].y) / 2 - rect.top,
            },
        };
    }
});

stageViewport.addEventListener("pointermove", (e) => {
    if (!pointers.has(e.pointerId)) return;
    pointers.set(e.pointerId, { x: e.clientX, y: e.clientY });
    if (pointers.size === 1 && panStart && panStart.pointerId === e.pointerId) {
        const dx = e.clientX - panStart.x,
            dy = e.clientY - panStart.y;
        if (!panStart.captured) {
            if (Math.hypot(dx, dy) < DRAG_THRESHOLD) return;
            panStart.captured = true;
            stageViewport.setPointerCapture(e.pointerId);
            stageViewport.classList.add("is-panning");
        }
        panX = panStart.panX + dx;
        panY = panStart.panY + dy;
        clampPan();
        applyTransform();
    } else if (pointers.size === 2 && pinch) {
        const pts = [...pointers.values()];
        const dist = Math.hypot(pts[0].x - pts[1].x, pts[0].y - pts[1].y);
        const newZoom = clampNum(
            pinch.zoom * (dist / pinch.dist),
            ZOOM_MIN,
            ZOOM_MAX,
        );
        panX =
            pinch.mid.x - (pinch.mid.x - pinch.panX) * (newZoom / pinch.zoom);
        panY =
            pinch.mid.y - (pinch.mid.y - pinch.panY) * (newZoom / pinch.zoom);
        zoom = newZoom;
        clampPan();
        applyTransform();
    }
});

function endPointer(e) {
    pointers.delete(e.pointerId);
    if (pointers.size < 2) pinch = null;
    if (panStart && panStart.pointerId === e.pointerId) {
        panStart = null;
        stageViewport.classList.remove("is-panning");
    }
}
stageViewport.addEventListener("pointerup", endPointer);
stageViewport.addEventListener("pointercancel", endPointer);

document
    .getElementById("zoom-in")
    .addEventListener("click", () =>
        zoomAt(
            stageViewport.clientWidth / 2,
            stageViewport.clientHeight / 2,
            1.3,
        ),
    );
document
    .getElementById("zoom-out")
    .addEventListener("click", () =>
        zoomAt(
            stageViewport.clientWidth / 2,
            stageViewport.clientHeight / 2,
            1 / 1.3,
        ),
    );
document.getElementById("zoom-reset").addEventListener("click", resetView);

// Runs once on load and again (debounced) on resize. Everything that
// depends on the stage's pixel size gets recomputed here. Expensive-ish
// relative to positionAll(), so it deliberately does NOT run every frame.
function layoutStage() {
    fullW = stageViewport.getBoundingClientRect().width;
    fullH = fullW * (2 / 3); // fixed 3:2 aspect ratio for the stage
    const R = (fullW / 2) * RADIAL_MARGIN; // usable orbital radius, in px

    stage.style.width = fullW + "px";
    stage.style.height = fullH + "px";
    stageViewport.style.height = fullH + "px";

    cx = fullW * CX_BIAS;
    cy = fullH / 2;

    const sunSize = Math.max(28, Math.min(52, fullW * 0.045));
    sun.style.width = sunSize + "px";
    sun.style.height = sunSize + "px";
    sun.style.left = cx + "px";
    sun.style.top = cy + "px";

    // For each planet: derive its ellipse from orbitFrac + eccentricity, with
    // the SUN at one focus (not the ellipse's center). This is real orbital
    // geometry, not just a cosmetic oval. orbitFrac is treated as the target
    // *aphelion* (farthest point from the sun), so:
    //   a  = semi-major axis      (aphelion = a * (1+ecc), so a = aphelion / (1+ecc))
    //   b0 = semi-minor axis      (standard ellipse relation: b = a*sqrt(1-ecc^2))
    //   c  = focus offset from center (c = a*ecc)
    // a/b0/c are stashed on `e` because positionAll() needs `a` every frame
    // to solve the polar ellipse equation, and recomputing it there would be
    // wasteful.
    els.forEach((e) => {
        const ecc = e.data.ecc;
        const aphelionTarget = e.data.orbitFrac * R;
        const a = aphelionTarget / (1 + ecc);
        const b0 = a * Math.sqrt(1 - ecc * ecc);
        const c = a * ecc;
        e.a = a;
        e.b0 = b0;
        e.c = c;

        // Shift the ellipse so the sun sits at its focus (offset by -c along
        // the local major axis), then rotate that offset by the orbit's
        // inclination (phi) so it lines up with the rotated ring below.
        const cxLocal = -c;
        const cxRot = cxLocal * Math.cos(e.phi);
        const cyRot = cxLocal * Math.sin(e.phi);

        // Draw the ring as an untilted ellipse sized/positioned so the sun
        // sits at its focus, then let a CSS `rotate(incl deg)` transform
        // spin the whole ring to its final inclined orientation, which is simpler
        // than pre-rotating every point of the ellipse by hand.
        const ringW = a * 2,
            ringH = b0 * TILT * 2;
        e.orbitEl.style.width = ringW + "px";
        e.orbitEl.style.height = ringH + "px";
        e.orbitEl.style.left = cx + cxRot - a + "px";
        e.orbitEl.style.top = cy + cyRot - b0 * TILT + "px";
        e.orbitEl.style.transform = "rotate(" + e.data.incl + "deg)";
    });

    [...asteroidBelt, ...kuiperBelt].forEach((b) => {
        const rx = b.fracR * R;
        b.rx = rx;
        b.ry = rx * TILT;
    });

    const oortR = 1.03 * (fullW / 2);
    oort.style.width = oortR * 2 + "px";
    oort.style.height = oortR * TILT * 2 + "px";
    oort.style.left = cx - oortR + "px";
    oort.style.top = cy - oortR * TILT + "px";

    // Hit buttons cover the full stage, clipped to their band
    [asteroidHit, kuiperHit, oortHit].forEach((el) => {
        el.style.width = fullW + "px";
        el.style.height = fullH + "px";
    });
    asteroidHit.style.clipPath = annulusClip(cx, cy, 0.43 * R, 0.33 * R);
    kuiperHit.style.clipPath = annulusClip(cx, cy, 0.84 * R, 0.56 * R);
    const oortBand = 0.09 * (fullW / 2);
    oortHit.style.clipPath = annulusClip(
        cx,
        cy,
        oortR + oortBand,
        oortR - oortBand,
    );

    // Anchor labels along their band, upper-right of the busiest part of the scene
    placeLabel(asteroidLabel, 0.38 * R, -48);
    placeLabel(kuiperLabel, 0.7 * R, -48);
    placeLabel(oortLabel, 0.99 * (fullW / 2), -68);

    clampPan();
    applyTransform();
    positionAll();
}

// Runs every animation frame: solves each planet's current screen position
// from its ellipse + current angle, and updates the belts' scatter positions.
function positionAll() {
    els.forEach((e) => {
        const ecc = e.data.ecc;
        const theta = e.angle;
        // Polar equation of an ellipse with the origin AT ONE FOCUS (the sun):
        //   r(theta) = a(1 - e^2) / (1 + e*cos(theta))
        // This is the actual textbook Kepler orbit shape, it's why
        // eccentric orbits (Mercury, Pluto) visibly speed up near perihelion
        // (small r) and slow down near aphelion (large r), not just a
        // decorative squashed circle.
        const r = (e.a * (1 - ecc * ecc)) / (1 + ecc * Math.cos(theta));
        // Local (unrotated) position, with TILT foreshortening the y-axis to
        // fake a slightly-from-above viewing angle. This foreshortened y is
        // also what encodes "near side / far side of the orbit" for the
        // depth (z-index) hack just below.
        const xl = r * Math.cos(theta);
        const yl = r * Math.sin(theta) * TILT;
        // Rotate by the orbit's inclination (phi) to get the final on-screen offset.
        const xr = xl * Math.cos(e.phi) - yl * Math.sin(e.phi);
        const yr = xl * Math.sin(e.phi) + yl * Math.cos(e.phi);
        e.btnEl.style.left = cx + xr + "px";
        e.btnEl.style.top = cy + yr + "px";

        // ---- depth (z-index) hack ----
        // The sun is fixed at z-index 300. sin(theta) (the pre-rotation,
        // local "near/far along this planet's own orbit" signal) maps to a
        // ±90 offset around that, so each planet individually passes in
        // front of the sun on the near half of its orbit and behind it on
        // the far half of its orbit. See the note above #sun in the CSS for the
        // original reasoning.
        //
        // The gotcha: that ±90 range is identical for every planet, with no
        // regard for which orbit is actually farther out. So two planets on
        // different orbits can land on nearly the same z-index and their
        // stacking can flip essentially at random frame to frame. This is what caused
        // Uranus to sometimes render in front of Saturn.
        //
        // Fix: subtract depthRank (0 = innermost, computed once above) as a
        // small baseline offset. It nudges ties toward "farther-out planet
        // loses," without meaningfully disturbing the sun-crossing behavior
        // in any way. Max total range across all planets is still comfortably inside
        // the documented ~390 ceiling (worst case 300 - 0 + 78 = 378).
        e.btnEl.style.zIndex = String(
            300 - e.depthRank + Math.round(Math.sin(theta) * 78),
        );
    });
    [...asteroidBelt, ...kuiperBelt].forEach((b) => {
        const x = cx + b.rx * Math.cos(b.angle);
        const y = cy + b.ry * Math.sin(b.angle) + b.jitter * b.ry;
        b.el.style.left = x + "px";
        b.el.style.top = y + "px";
        // Belts get their own separate, lower z-index band (110-190) that
        // never overlaps the planets' band (210-390ish), so belts are
        // always behind every planet regardless of depth rank. No tie-break
        // needed here.
        b.el.style.zIndex = String(150 + Math.round(Math.sin(b.angle) * 40));
    });
}

// Main animation loop: advance every angle by speed * elapsed-seconds, then
// re-derive positions. Frame-rate independent (uses real dt, not a fixed
// step), so orbit speed stays consistent regardless of display refresh rate.
let lastT = null;
function tick(t) {
    if (lastT === null) lastT = t;
    const dt = (t - lastT) / 1000;
    lastT = t;
    els.forEach((e) => {
        e.angle += e.speed * dt;
    });
    [...asteroidBelt, ...kuiperBelt].forEach((b) => {
        b.angle += b.speed * dt;
    });
    positionAll();
    requestAnimationFrame(tick);
}

// Handles clicking any planet, dwarf, or region: updates all the "is-active"/
// "is-hot" highlight states (only one of these toggles is ever true per
// call, since `id` matches at most one thing), then builds and injects the
// detail panel's HTML from that body's data, and opens the panel via
// .is-open on the grid.
function openBody(id) {
    activeId = id;
    els.forEach((e) => {
        const on = e.data.id === id;
        e.btnEl.classList.toggle("is-active", on);
        e.orbitEl.classList.toggle("is-hot", on);
    });
    setBeltHot(asteroidBelt, id === "asteroid-belt");
    setBeltHot(kuiperBelt, id === "kuiper-belt");
    oort.classList.toggle("is-hot", id === "oort-cloud");
    asteroidLabel.classList.toggle("is-hot", id === "asteroid-belt");
    kuiperLabel.classList.toggle("is-hot", id === "kuiper-belt");
    oortLabel.classList.toggle("is-hot", id === "oort-cloud");

    const p = ALL_BODIES.find((pl) => pl.id === id);

    const statsHtml = Object.entries(p.stats)
        .map(
            ([k, v]) =>
                '<dt class="text-muted font-mono text-xs tracking-widest uppercase">' +
                k +
                "</dt>" +
                '<dd class="text-foreground font-mono text-lg">' +
                v +
                "</dd>",
        )
        .join("");

    panelInner.innerHTML =
        '<div class="panel-portrait bg-surface-2 relative mb-4 h-42.5 w-full overflow-hidden rounded-xl">' +
        '<img class="block h-full w-full object-cover" src="' +
        p.image +
        '" alt="' +
        p.imageAlt +
        '">' +
        "</div>" +
        (p.type === "dwarf"
            ? '<span class="border-border font-mono text-muted mb-2 inline-block rounded-full border px-2.5 py-0.5 text-[0.6rem] tracking-[0.15em] uppercase">Dwarf planet</span>'
            : "") +
        (p.type === "region"
            ? '<span class="border-border font-mono text-muted mb-2 inline-block rounded-full border px-2.5 py-0.5 text-[0.6rem] tracking-[0.15em] uppercase">Region</span>'
            : "") +
        '<p class="text-primary font-mono mb-1.5 text-xs tracking-[0.25em] uppercase">' +
        p.tagline +
        "</p>" +
        '<h2 class="font-display mb-2 text-3xl font-semibold tracking-tight">' +
        p.name +
        "</h2>" +
        '<p class="text-muted mb-5 text-sm leading-relaxed">' +
        p.desc +
        "</p>" +
        '<dl class="panel-stats border-border mb-6 grid grid-cols-2 gap-x-5 gap-y-4 border-t pt-4">' +
        statsHtml +
        "</dl>";

    grid.classList.add("is-open");
    panel.setAttribute("aria-hidden", "false");
}

// Mirror image of openBody: clears every highlight toggle and closes the panel.
function closePanel() {
    activeId = null;
    els.forEach((e) => {
        e.btnEl.classList.remove("is-active");
        e.orbitEl.classList.remove("is-hot");
    });
    setBeltHot(asteroidBelt, false);
    setBeltHot(kuiperBelt, false);
    oort.classList.remove("is-hot");
    asteroidLabel.classList.remove("is-hot");
    kuiperLabel.classList.remove("is-hot");
    oortLabel.classList.remove("is-hot");
    grid.classList.remove("is-open");
    panel.setAttribute("aria-hidden", "true");
}

panelClose.addEventListener("click", closePanel);
document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && activeId) closePanel();
});

// Debounced (100ms) so a window being actively resized doesn't trigger a
// full layoutStage() recompute on every intermediate pixel.
let resizeT;
window.addEventListener("resize", () => {
    clearTimeout(resizeT);
    resizeT = setTimeout(layoutStage, 100);
});

layoutStage();
requestAnimationFrame(tick);
