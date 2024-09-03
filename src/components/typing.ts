// @ts-ignore
import Typewriter from "typewriter-effect/dist/core";

export const initTypingAnimation = () => {
  const titleEl = document.querySelector<HTMLElement>(".js-title");

  if (!titleEl) return;

  const text = titleEl?.textContent;

  const typewriter = new Typewriter(titleEl, {
    loop: true,
    delay: 75,
  });

  typewriter
    .pauseFor(2500)
    .callFunction(() => {
      const el = document.querySelector<HTMLElement>(".Typewriter__cursor");
      el?.classList.add("cursor-offset");
    })
    .typeString(text)
    .pauseFor(500)
    .deleteChars(4)
    .typeString("Kay")
    .pauseFor(2000)
    .callFunction(() => {
      const el = document.querySelector<HTMLElement>(".Typewriter__cursor");
      el?.classList.remove("cursor-offset");
    })
    .start();
};
