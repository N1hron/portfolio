import hamburgerMenu from "./modules/hamburgerMenu";
import progressBar from "./modules/progressBar";

window.addEventListener('DOMContentLoaded', () => {
    hamburgerMenu('.header__hamburger', '.sidepanel', '.sidepanel__close');
    progressBar();
})