/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
var __webpack_exports__ = {};

;// CONCATENATED MODULE: ./src/js/hamburgerMenu.js
function hamburgerMenu(triggerSelector, menuSelector, closeSelector) {
  var trigger = document.querySelector(triggerSelector);
  var menu = document.querySelector(menuSelector);
  var close = document.querySelector(closeSelector);
  var overlay = document.querySelector('.overlay');
  var buttons = menu.querySelectorAll("li a");
  function onClose() {
    menu.classList.remove('sidepanel_active');
    overlay.classList.remove('overlay_active');
    document.documentElement.style.overflow = 'auto';
    document.body.style.overflow = 'hidden';
  }
  trigger.addEventListener('click', function (event) {
    menu.classList.add('sidepanel_active');
    overlay.style.transition = 'opacity 0.5s, visibility 0.5s';
    overlay.classList.add('overlay_active');
    document.documentElement.style.overflow = 'hidden';
    document.body.style.overflow = 'hidden';
  });
  close.addEventListener('click', function () {
    return onClose();
  });
  buttons.forEach(function (btn) {
    btn.addEventListener('click', function () {
      return onClose();
    });
  });
}
;// CONCATENATED MODULE: ./src/js/progressBar.js
function progressBar() {
  var progressBars = document.querySelectorAll('.skills__progress-fill');
  var percents = document.querySelectorAll('.skills__progress-percentage');
  percents.forEach(function (percent, i) {
    progressBars[i].style.width = percent.textContent;
  });
}
;// CONCATENATED MODULE: ./src/js/fixSidepanelHeight.js
function fixSidepanelHeight() {
  var sidepanel = document.querySelector('.sidepanel');
  setHeight();
  window.addEventListener('resize', function () {
    setHeight();
  });
  function setHeight() {
    var height = window.innerHeight;
    sidepanel.style.height = height + 'px';
  }
}
;// CONCATENATED MODULE: ./src/main.js




window.addEventListener('DOMContentLoaded', function () {
  hamburgerMenu('.header__hamburger', '.sidepanel', '.sidepanel__close');
  progressBar();
  fixSidepanelHeight();
});
/******/ })()
;