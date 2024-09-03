export const initScrollHandling = () => {
  const sections = document.querySelectorAll("section");
  const ranges = document.querySelectorAll(".js-skills-range");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const currentActive = document.querySelector(".js-nav-link.active");
          currentActive?.classList.remove("active");

          const currentLink = document.querySelector(
            `[href="/#${entry.target.id}"]`
          );
          currentLink?.classList.add("active");

          [...ranges].map((item) =>
            item.classList.toggle("animate", entry.target.id === "skills")
          );
        }
      });
    },
    {
      // rootMargin: "10px",
      threshold: 0.55,
    }
  );

  sections.forEach((section) => {
    observer.observe(section);
  });
};
