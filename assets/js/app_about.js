const cover = document.querySelector(".cover");

window.addEventListener("DOMContentLoaded", () => {
  setTimeout(() => {
    cover.style.opacity = 0;
    cover.style.zIndex = -1;
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
