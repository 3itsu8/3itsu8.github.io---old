document.addEventListener("DOMContentLoaded", () => {
  const contents = document.querySelectorAll(".content");

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
});
