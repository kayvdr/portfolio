import "@fontsource/anton";

import "../css/entry.css";
import { initAnimations } from "./components/animations";
import { initCarousel } from "./components/carousel";
import { initInstagramFeed } from "./components/instagram";
import { initNav } from "./components/nav";
import { initScrollHandling } from "./components/scroll";
import { initTypingAnimation } from "./components/typing";

initNav();
initCarousel();
initTypingAnimation();
initScrollHandling();
initAnimations();
initInstagramFeed(true);
