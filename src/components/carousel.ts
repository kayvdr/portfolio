import EmblaCarousel, { EmblaCarouselType } from "embla-carousel";

const addTogglePrevNextBtnsActive = (
  emblaApi: EmblaCarouselType,
  prevBtn: HTMLElement,
  nextBtn: HTMLElement
) => {
  const togglePrevNextBtnsState = () => {
    emblaApi.canScrollPrev()
      ? prevBtn.removeAttribute("disabled")
      : prevBtn.setAttribute("disabled", "disabled");

    emblaApi.canScrollNext()
      ? nextBtn.removeAttribute("disabled")
      : nextBtn.setAttribute("disabled", "disabled");
  };

  emblaApi
    .on("select", togglePrevNextBtnsState)
    .on("init", togglePrevNextBtnsState)
    .on("reInit", togglePrevNextBtnsState);

  return () => {
    prevBtn.removeAttribute("disabled");
    nextBtn.removeAttribute("disabled");
  };
};

export const addPrevNextBtnsClickHandlers = (
  emblaApi: EmblaCarouselType,
  prevBtn: HTMLElement,
  nextBtn: HTMLElement
) => {
  prevBtn.addEventListener("click", () => emblaApi.scrollPrev(), false);
  nextBtn.addEventListener("click", () => emblaApi.scrollNext(), false);

  const removeTogglePrevNextBtnsActive = addTogglePrevNextBtnsActive(
    emblaApi,
    prevBtn,
    nextBtn
  );

  return () => removeTogglePrevNextBtnsActive();
};

export const initCarousel = () => {
  const prevBtnNode = document.querySelector<HTMLElement>(".js-prev-btn");
  const nextBtnNode = document.querySelector<HTMLElement>(".js-next-btn");
  const emblaNode = document.querySelector<HTMLElement>(".js-embla");

  if (!emblaNode || !prevBtnNode || !nextBtnNode) return;

  const emblaApi = EmblaCarousel(emblaNode, {
    loop: false,
    align: "start",
  });

  const removePrevNextBtnsClickHandlers = addPrevNextBtnsClickHandlers(
    emblaApi,
    prevBtnNode,
    nextBtnNode
  );

  emblaApi.on("destroy", removePrevNextBtnsClickHandlers);
};
