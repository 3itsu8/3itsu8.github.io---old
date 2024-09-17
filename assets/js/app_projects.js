let isFadeIn = true;

const fadeIn = () => {
  const contents = document.querySelectorAll(".content");

  if (isFadeIn) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("fade-in");
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.1,
      }
    );

    contents.forEach((content) => {
      observer.observe(content);
    });
  }
};

const cover = document.querySelector(".cover");

window.addEventListener("DOMContentLoaded", () => {
  setTimeout(() => {
    cover.style.opacity = 0;
    cover.style.zIndex = -1;
    isFadeIn = true;
    fadeIn();
  }, 500);
});

function handleHeaderClick(target) {
  cover.style.opacity = 1;
  cover.style.zIndex = 90;
  setTimeout(() => {
    if (target === "home") {
      window.location.href = "/index.html";
    } else if (target === "projects") {
      window.location.href = "/Projects.html";
    } else if (target === "about") {
      window.location.href = "/About.html";
    }
  }, 1000);
}
