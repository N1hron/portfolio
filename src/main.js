import hamburgerMenu from "./js/hamburgerMenu";
import progressBar from "./js/progressBar";

import './scss/style.scss';

window.addEventListener('DOMContentLoaded', () => {
    hamburgerMenu('.header__hamburger', '.sidepanel', '.sidepanel__close');
    progressBar();
})