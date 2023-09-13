/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/fixSidepanelHeight.js":
/*!**************************************!*\
  !*** ./src/js/fixSidepanelHeight.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ fixSidepanelHeight)\n/* harmony export */ });\nfunction fixSidepanelHeight() {\n  var sidepanel = document.querySelector('.sidepanel');\n  setHeight();\n  window.addEventListener('resize', function () {\n    setHeight();\n  });\n  function setHeight() {\n    var height = window.innerHeight;\n    sidepanel.style.height = height + 'px';\n  }\n}\n\n//# sourceURL=webpack://webpack-test/./src/js/fixSidepanelHeight.js?");

/***/ }),

/***/ "./src/js/hamburgerMenu.js":
/*!*********************************!*\
  !*** ./src/js/hamburgerMenu.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ hamburgerMenu)\n/* harmony export */ });\nfunction hamburgerMenu(triggerSelector, menuSelector, closeSelector) {\n  var trigger = document.querySelector(triggerSelector);\n  var menu = document.querySelector(menuSelector);\n  var close = document.querySelector(closeSelector);\n  var overlay = document.querySelector('.overlay');\n  var buttons = menu.querySelectorAll(\"li a\");\n  function onClose() {\n    menu.classList.remove('sidepanel_active');\n    overlay.classList.remove('overlay_active');\n    document.documentElement.style.overflow = 'auto';\n    document.body.style.overflow = 'hidden';\n  }\n  trigger.addEventListener('click', function (event) {\n    menu.classList.add('sidepanel_active');\n    overlay.style.transition = 'opacity 0.5s, visibility 0.5s';\n    overlay.classList.add('overlay_active');\n    document.documentElement.style.overflow = 'hidden';\n    document.body.style.overflow = 'hidden';\n  });\n  close.addEventListener('click', function () {\n    return onClose();\n  });\n  buttons.forEach(function (btn) {\n    btn.addEventListener('click', function () {\n      return onClose();\n    });\n  });\n}\n\n//# sourceURL=webpack://webpack-test/./src/js/hamburgerMenu.js?");

/***/ }),

/***/ "./src/js/progressBar.js":
/*!*******************************!*\
  !*** ./src/js/progressBar.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ progressBar)\n/* harmony export */ });\nfunction progressBar() {\n  var progressBars = document.querySelectorAll('.skills__progress-fill');\n  var percents = document.querySelectorAll('.skills__progress-percentage');\n  percents.forEach(function (percent, i) {\n    progressBars[i].style.width = percent.textContent;\n  });\n}\n\n//# sourceURL=webpack://webpack-test/./src/js/progressBar.js?");

/***/ }),

/***/ "./src/main.js":
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _js_hamburgerMenu__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./js/hamburgerMenu */ \"./src/js/hamburgerMenu.js\");\n/* harmony import */ var _js_progressBar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./js/progressBar */ \"./src/js/progressBar.js\");\n/* harmony import */ var _js_fixSidepanelHeight__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./js/fixSidepanelHeight */ \"./src/js/fixSidepanelHeight.js\");\n/* harmony import */ var _scss_style_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./scss/style.scss */ \"./src/scss/style.scss\");\n\n\n\n\nwindow.addEventListener('DOMContentLoaded', function () {\n  (0,_js_hamburgerMenu__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('.header__hamburger', '.sidepanel', '.sidepanel__close');\n  (0,_js_progressBar__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n  (0,_js_fixSidepanelHeight__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\n});\n\n//# sourceURL=webpack://webpack-test/./src/main.js?");

/***/ }),

/***/ "./src/scss/style.scss":
/*!*****************************!*\
  !*** ./src/scss/style.scss ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://webpack-test/./src/scss/style.scss?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/main.js");
/******/ 	
/******/ })()
;