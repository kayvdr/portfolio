import "@fontsource/anton";

import "../css/entry.css";
import { initAnimations } from "./components/animations";
import { initCarousel } from "./components/carousel";
import { initCookieConsent } from "./components/cookieconsent";
import { initNav } from "./components/nav";
import { initScrollHandling } from "./components/scroll";
import { initTypingAnimation } from "./components/typing";

initCookieConsent();
initNav();
initCarousel();
initTypingAnimation();
initScrollHandling();
initAnimations();
