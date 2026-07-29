export function observeElements({
    elements,
    childSelector = ".animate-target",
    desktopThreshold = 0.9,
    mobileThreshold = 0.4,
    baseDelay = 100,
    onVisibleClass = "visible",
}) {
    if (!elements) return;

    if (!Array.isArray(elements) && !(elements instanceof NodeList)) {
        elements = [elements];
    }

    const isMobile = window.innerWidth <= 768;
    const threshold = isMobile ? mobileThreshold : desktopThreshold;

    const observer = new IntersectionObserver(
        (entries, observer) => {
            const visibleEntries = entries
                .filter((e) => e.isIntersecting)
                .sort(
                    (a, b) =>
                        Array.from(elements).indexOf(a.target) -
                        Array.from(elements).indexOf(b.target),
                );

            visibleEntries.forEach((entry, i) => {
                setTimeout(() => {
                    const el = entry.target;
                    el.classList.add(onVisibleClass);

                    const children = el.querySelectorAll(childSelector);
                    children.forEach((child, j) => {
                        setTimeout(() => {
                            child.classList.add(onVisibleClass);
                        }, baseDelay * j);
                    });

                    observer.unobserve(el);
                }, baseDelay * i);
            });
        },
        { threshold },
    );

    elements.forEach((el) => observer.observe(el));
}

async function loadNavbar() {
    const response = await fetch("partials/navbar.html");
    const data = await response.text();

    const navbar = document.getElementById("navbar");
    navbar.innerHTML = data;

    const currentPath =
        window.location.pathname.split("/").pop() || "index.html";

    navbar.querySelectorAll(".nav-link").forEach((link) => {
        if (link.getAttribute("href") === currentPath) {
            link.classList.add("text-primary");
            link.setAttribute("aria-current", "page");
        }
    });
}

async function loadFooter() {
    const response = await fetch("partials/footer.html");
    const data = await response.text();
    document.getElementById("footer").innerHTML = data;
}

async function init() {
    await Promise.all([loadNavbar(), loadFooter()]);

    const sidebar = document.getElementById("sidebar");
    const button = document.getElementById("sidebar-btn");

    function isOpen() {
        return !sidebar.classList.contains("-translate-x-full");
    }

    function openSidebar() {
        sidebar.classList.remove("-translate-x-full");
        button.classList.add("invisible", "opacity-0");
    }

    function closeSidebar() {
        sidebar.classList.add("-translate-x-full");
        button.classList.remove("invisible", "opacity-0");
    }

    button.addEventListener("click", (e) => {
        e.stopPropagation();
        isOpen() ? closeSidebar() : openSidebar();
    });

    document.addEventListener("click", (e) => {
        if (isOpen() && !sidebar.contains(e.target)) closeSidebar();
    });
}

init();
