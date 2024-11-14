// @ts-ignore
import Typewriter from "typewriter-effect/dist/core";

export const initTypingAnimation = () => {
  const titleEl = document.querySelector<HTMLElement>(".js-title");

  if (!titleEl) return;

  const text = titleEl.textContent;

  const typewriter = new Typewriter(titleEl, {
    delay: 75,
  });

  typewriter
    .typeString("Hello World")
    .pauseFor(500)
    .deleteChars(10)
    .typeString(text?.substring(1))
    .pauseFor(2000)
    .start();
};
