import EmblaCarousel, { EmblaCarouselType } from "embla-carousel";

const handleButtons = (carousel: EmblaCarouselType | null) => {
  const leftArrowElement = document?.querySelector(".js-prev-btn");
  const rightArrowElement = document?.querySelector(".js-next-btn");

  leftArrowElement?.addEventListener("click", () => carousel?.scrollPrev());
  rightArrowElement?.addEventListener("click", () => carousel?.scrollNext());

  !carousel?.canScrollPrev()
    ? leftArrowElement?.classList.add("disabled")
    : leftArrowElement?.classList.remove("disabled");

  !carousel?.canScrollNext()
    ? rightArrowElement?.classList.add("disabled")
    : rightArrowElement?.classList.remove("disabled");
};

export const initCarousel = () => {
  const emblaNode = document.querySelector<HTMLElement>(".js-embla");

  const carousel =
    emblaNode &&
    EmblaCarousel(emblaNode, {
      loop: false,
      align: "start",
    });

  carousel?.on("init", () => handleButtons(carousel));
  carousel?.on("select", () => handleButtons(carousel));
};
