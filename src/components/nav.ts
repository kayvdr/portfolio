const handleNavBtn = (e: MouseEvent) => {
  const target = <HTMLElement>e.target;

  const navBtn = target.closest<HTMLButtonElement>(".js-nav-btn");

  if (!navBtn) return;

  e.preventDefault();

  const nav = document.querySelector(".js-nav");

  nav?.classList.contains("active")
    ? nav?.classList.remove("active")
    : nav?.classList.add("active");
};

const handleScrollBtn = (e: MouseEvent) => {
  const target = <HTMLElement>e.target;

  const targetLink = target.closest<HTMLAnchorElement>(`[href^="/#"]`);

  if (!targetLink) return;

  e.preventDefault();

  const element = document.querySelector(targetLink.hash);

  element?.scrollIntoView({ behavior: "smooth" });
};

const handleNavLink = (e: MouseEvent) => {
  const target = <HTMLElement>e.target;

  const navLink = target.closest<HTMLButtonElement>(".js-nav-link");

  if (!navLink) return;

  e.preventDefault();

  const nav = document.querySelector(".js-nav");
  nav?.classList.remove("active");
};

export const initNav = () => {
  document.addEventListener("click", (e) => {
    handleNavBtn(e);
    handleScrollBtn(e);
    handleNavLink(e);
  });
};
