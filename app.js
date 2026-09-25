const navLinks = document.querySelectorAll(".nav-link");

for (const link of navLinks) {
  link.addEventListener("click", () => {
    for (const item of navLinks) {
      item.classList.remove("is-active");
      item.removeAttribute("aria-current");
    }
    link.classList.add("is-active");
    link.setAttribute("aria-current", "page");
  });
}
