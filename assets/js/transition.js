document.addEventListener("DOMContentLoaded", () => {
  const transitionOverlay = document.querySelector(".transition-overlay");
  const contentWrapper = document.querySelector(".content-wrapper");
  const links = document.querySelectorAll('a:not([target="_blank"])');

  links.forEach((link) => {
    link.addEventListener("click", (e) => {
      if (link.hostname === window.location.hostname) {
        e.preventDefault();
        const href = link.getAttribute("href");
        transitionOverlay.classList.add("active");
        contentWrapper.classList.add("fade-out");
        setTimeout(() => {
          window.location.href = href;
        }, 500);
      }
    });
  });

  window.addEventListener("pageshow", () => {
    transitionOverlay.classList.remove("active");
    contentWrapper.classList.remove("fade-out");
  });
});
