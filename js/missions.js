import { observeElements } from "./common.js";

const MISSIONS = [
    {
        id: "sputnik-1",
        datetime: "1957-10",
        title: "Sputnik 1",
        blurb: "First artificial satellite.",
        image: "./assets/images/missions/sputnik-1.jpg",
        imageClass: "object-cover",
        facts: [
            { label: "Launch Date:", value: "4 October 1957" },
            { label: "Country:", value: "Soviet Union" },
            { label: "Rocket:", value: "Sputnik 8K71PS" },
            { label: "Orbital Period:", value: "96 minutes" },
            {
                label: "Mission Outcome:",
                value: "Re-entered Earth's atmosphere on 4 January 1958",
            },
        ],
        body: "Sputnik 1's simple radio beeps, audible to amateur radio operators worldwide, triggered the Space Race and prompted the United States to found NASA less than a year later.",
    },
    {
        id: "vostok-1",
        datetime: "1961-04",
        title: "Vostok 1",
        blurb: "First human spaceflight.",
        image: "./assets/images/missions/vostok-1.jpg",
        imageClass: "object-cover",
        facts: [
            { label: "Launch Date:", value: "12 April 1961" },
            { label: "Country:", value: "Soviet Union" },
            { label: "Cosmonaut:", value: "Yuri Gagarin" },
            { label: "Duration:", value: "108 minutes" },
            {
                label: "Mission Outcome:",
                value: "Successful, first human orbit of Earth",
            },
        ],
        body: "Gagarin's single orbit of Earth proved humans could survive spaceflight and made him instantly famous worldwide. The flight's success intensified the Space Race, pushing the United States toward its own crewed program and, eventually, the Moon.",
    },
    {
        id: "apollo-11",
        datetime: "1969-07",
        title: "Apollo 11",
        blurb: "First crewed Moon landing.",
        image: "./assets/images/missions/apollo-11(1).jpg",
        imageClass: "object-cover object-top",
        facts: [
            { label: "Launch Date:", value: "16 July 1969" },
            { label: "Landing:", value: "20 July 1969" },
            {
                label: "Crew:",
                value: "Neil Armstrong, Buzz Aldrin, Michael Collins",
            },
            { label: "Spacecraft:", value: "Columbia (CM), Eagle (LM)" },
            {
                label: "Mission Outcome:",
                value: "Successful Moon landing and safe return",
            },
        ],
        body: "An estimated 650 million people watched Armstrong's first steps live, one of the most-viewed broadcasts in history, fulfilling President Kennedy's 1961 pledge to land a man on the Moon before the decade's end.",
    },
    {
        id: "voyager-1",
        datetime: "1977-09",
        title: "Voyager 1",
        blurb: "Grand Tour probe, now in interstellar space.",
        image: "./assets/images/missions/voyager-1.jpg",
        imageClass: "object-cover",
        facts: [
            { label: "Launch Date:", value: "5 September 1977" },
            { label: "Country:", value: "United States" },
            { label: "Flybys:", value: "Jupiter, Saturn" },
            { label: "Status:", value: "Interstellar space since 2012" },
            {
                label: "Current Distance:",
                value: "Over 25 billion km from Earth (and increasing)",
            },
        ],
        body: "Voyager 1 carries the Golden Record, a phonograph disc of sounds and images meant to represent life on Earth to any intelligent life that might find it. Nearly five decades after launch, it's still transmitting data from farther away than any other human-made object has ever traveled.",
    },
    {
        id: "hubble-space-telescope",
        datetime: "1990-04",
        title: "Hubble Space Telescope",
        blurb: "Orbiting observatory that reshaped modern astronomy.",
        image: "./assets/images/missions/hubble-space-telescope(1).jpg",
        imageClass: "object-cover",
        facts: [
            { label: "Launch Date:", value: "24 April 1990" },
            { label: "Partners:", value: "NASA, ESA" },
            { label: "Orbit Altitude:", value: "~535 km" },
            { label: "Servicing Missions:", value: "5" },
            { label: "Status:", value: "Active" },
        ],
        body: "A flawed mirror nearly doomed the mission at launch, but a 1993 spacewalk repair turned Hubble into one of the most productive scientific instruments ever built, capturing images like the Hubble Deep Field that reshaped how far, and how old, the observable universe was known to be.",
    },
    {
        id: "international-space-station",
        datetime: "1998-11",
        title: "International Space Station",
        blurb: "Largest space laboratory, continuously crewed since 2000.",
        image: "./assets/images/missions/international-space-station.jpg",
        imageClass: "object-cover",
        facts: [
            { label: "First Module:", value: "Zarya, 20 November 1998" },
            {
                label: "Partners:",
                value: "NASA, Roscosmos, ESA, JAXA, CSA",
            },
            { label: "Continuous Occupation:", value: "Since 2 Nov 2000" },
            { label: "Orbit Altitude:", value: "~420 km" },
        ],
        body: "Assembled from more than 40 modules launched over more than a decade, the ISS orbits Earth roughly every 90 minutes and has hosted over 280 people from more than 20 countries, making it one of the longest-running examples of international cooperation in history.",
    },
    {
        id: "falcon-9-first-landing",
        datetime: "2015-12",
        title: "Falcon 9 First Landing",
        blurb: "First landing of an orbital-class rocket booster.",
        image: "./assets/images/missions/falcon-9-first-landing.jpg",
        imageClass: "object-cover object-bottom",
        facts: [
            { label: "Landing Date:", value: "21 December 2015" },
            { label: "Company:", value: "SpaceX" },
            { label: "Landing Site:", value: "Landing Zone 1, Cape Canaveral" },
            { label: "Mission:", value: "Orbcomm-2" },
            {
                label: "Mission Outcome:",
                value: "First successful landing of an orbital-class booster",
            },
        ],
        body: "Every orbital rocket before this flight had been thrown away after a single use. Landing the booster upright and intact opened the door to routine reuse, which has cut the cost of reaching orbit more than any advance since the Space Shuttle.",
    },
    {
        id: "crew-dragon-demo-2",
        datetime: "2020-05",
        title: "Crew Dragon Demo-2",
        blurb: "First crewed flight on a commercially built spacecraft.",
        image: "./assets/images/missions/crew-dragon-demo-2.jpg",
        imageClass: "object-cover",
        facts: [
            { label: "Launch Date:", value: "30 May 2020" },
            { label: "Operator:", value: "SpaceX, for NASA" },
            { label: "Crew:", value: "Robert Behnken, Douglas Hurley" },
            { label: "Destination:", value: "International Space Station" },
            {
                label: "Mission Outcome:",
                value: "Certified Crew Dragon for operational missions",
            },
        ],
        body: "Demo-2 ended a nine-year gap in US crewed launches since the Space Shuttle's retirement, and was the first time NASA astronauts reached orbit aboard a spacecraft built and flown by a private company.",
    },
    {
        id: "james-webb-space-telescope",
        datetime: "2022-07",
        title: "James Webb Space Telescope",
        blurb: "Hubble's successor, built to see the universe's first galaxies.",
        image: "./assets/images/missions/james-webb-space-telescope.jpg",
        imageClass: "object-cover",
        facts: [
            { label: "Launch Date:", value: "25 December 2021" },
            { label: "First Images:", value: "12 July 2022" },
            { label: "Partners:", value: "NASA, ESA, CSA" },
            { label: "Orbit:", value: "Sun–Earth L2, ~1.5 million km out" },
            { label: "Mirror Diameter:", value: "6.5 m" },
        ],
        body: "Webb's infrared instruments see through cosmic dust to light from galaxies formed within a few hundred million years of the Big Bang, further back in time than Hubble could reach.",
    },
    {
        id: "artemis-i",
        datetime: "2022-11",
        title: "Artemis I",
        blurb: "Uncrewed test flight paving the way back to the Moon.",
        image: "./assets/images/missions/artemis-i.jpg",
        imageClass: "object-cover",
        facts: [
            { label: "Launch:", value: "16 November 2022" },
            { label: "Spacecraft:", value: "Orion" },
            { label: "Mission Duration:", value: "25.5 days" },
            { label: "Max Distance:", value: "~432,000 km from Earth" },
            {
                label: "Mission Outcome:",
                value: "Successful uncrewed lunar test flight",
            },
        ],
        body: "Though it carried no crew, Artemis I proved out the Space Launch System rocket and Orion's heat shield ahead of Artemis II and III, the first attempts to return astronauts to the lunar surface since Apollo 17 in 1972.",
    },
];

const timelineWrap = document.getElementById("missions-timeline");

function factRow({ label, value }) {
    return `
        <div class="flex gap-1">
            <dt class="font-semibold">${label}</dt>
            <dd>${value}</dd>
        </div>
    `;
}

function renderMission(mission) {
    const detailsId = `mission-${mission.id}-details`;

    const li = document.createElement("li");
    li.innerHTML = `
        <article class="animate-target relative mb-10 flex items-center">
            <div class="relative flex w-8 justify-center" aria-hidden="true">
                <div class="border-border bg-background h-3 w-3 rounded-full border-2"></div>
            </div>

            <p class="text-muted ml-4 w-20 font-mono font-semibold">
                <time datetime="${mission.datetime}">${mission.datetime.substring(0, 4)}</time>
            </p>

            <div
                class="timeline-card border-border bg-surface hover:border-primary/40 shadow-elevated hover:shadow-elevated-hover ml-6 min-w-0 flex-1 cursor-pointer overflow-hidden rounded-sm border transition-[color,border-color,translate,box-shadow] duration-200 hover:-translate-y-1 active:translate-y-0 active:shadow-elevated"
            >
                <div class="relative aspect-3/1">
                    <img
                        src="${mission.image}"
                        alt=""
                        class="absolute inset-0 h-full w-full ${mission.imageClass}"
                    />
                    <div
                        class="from-background via-background/60 absolute inset-0 bg-linear-to-t to-transparent"
                    ></div>
                    <div class="relative flex h-full flex-col justify-end p-6">
                        <button
                            type="button"
                            class="flex w-full cursor-pointer items-center justify-between text-left"
                            aria-expanded="false"
                            aria-controls="${detailsId}"
                        >
                            <h2 class="font-display text-lg font-semibold">
                                ${mission.title}
                            </h2>
                            <span class="text-primary text-2xl" aria-hidden="true">+</span>
                        </button>

                        <p class="text-muted mt-2">${mission.blurb}</p>
                    </div>
                </div>

                <div class="extra-info-wrap" id="${detailsId}" aria-hidden="true">
                    <div class="extra-info">
                        <div class="text-muted p-6 pt-4">
                            <dl class="space-y-1">
                                ${mission.facts.map(factRow).join("")}
                            </dl>
                            <p class="mt-3">${mission.body}</p>
                        </div>
                    </div>
                </div>
            </div>
        </article>
    `;

    return li;
}

MISSIONS.forEach((mission) => {
    timelineWrap.appendChild(renderMission(mission));
});

const cards = document.querySelectorAll(".timeline-card");

cards.forEach((card) => {
    const button = card.querySelector("button");
    const wrap = card.querySelector(".extra-info-wrap");
    const icon = card.querySelector("span");

    card.addEventListener("click", () => {
        const isOpen = wrap.classList.toggle("is-open");

        icon.textContent = isOpen ? "−" : "+";
        button.setAttribute("aria-expanded", String(isOpen));
        wrap.setAttribute("aria-hidden", String(!isOpen));
    });
});

observeElements({ elements: document.querySelector("#intro") });
observeElements({
    elements: document.querySelector("#timeline"),
    desktopThreshold: 0.1,
    mobileThreshold: 0.1,
});
