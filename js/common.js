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

  const isMobile = window.innerWidth <= 700;
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
