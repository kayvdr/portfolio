export const initExperienceYears = () => {
  const yearEl = document.querySelector(".js-year");

  yearEl &&
    yearEl.insertAdjacentHTML(
      "beforeend",
      (new Date().getFullYear() - 2017).toString()
    );
};
