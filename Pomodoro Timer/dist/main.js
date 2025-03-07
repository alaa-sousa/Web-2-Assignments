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

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _timer_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./timer.js */ \"./src/timer.js\");\n/* harmony import */ var _settings_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./settings.js */ \"./src/settings.js\");\n/* harmony import */ var _ui_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ui.js */ \"./src/ui.js\");\n\n\n\ndocument.getElementById('start-btn').addEventListener('click', function () {\n  (0,_settings_js__WEBPACK_IMPORTED_MODULE_1__.updateDurations)();\n  (0,_timer_js__WEBPACK_IMPORTED_MODULE_0__.startTimer)();\n});\ndocument.getElementById('pause-btn').addEventListener('click', _timer_js__WEBPACK_IMPORTED_MODULE_0__.pauseTimer);\ndocument.getElementById('reset-btn').addEventListener('click', function () {\n  (0,_timer_js__WEBPACK_IMPORTED_MODULE_0__.resetTimer)();\n  (0,_settings_js__WEBPACK_IMPORTED_MODULE_1__.resetToDefaults)();\n  (0,_ui_js__WEBPACK_IMPORTED_MODULE_2__.updateUI)();\n});\ndocument.getElementById('work-duration').addEventListener('change', _settings_js__WEBPACK_IMPORTED_MODULE_1__.updateDurations);\ndocument.getElementById('break-duration').addEventListener('change', _settings_js__WEBPACK_IMPORTED_MODULE_1__.updateDurations);\n(0,_settings_js__WEBPACK_IMPORTED_MODULE_1__.updateDurations)();\n\n//# sourceURL=webpack://pomodoro-timer/./src/index.js?");

/***/ }),

/***/ "./src/settings.js":
/*!*************************!*\
  !*** ./src/settings.js ***!
  \*************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   breakDuration: () => (/* binding */ breakDuration),\n/* harmony export */   getBreakDuration: () => (/* binding */ getBreakDuration),\n/* harmony export */   getWorkDuration: () => (/* binding */ getWorkDuration),\n/* harmony export */   longBreakDuration: () => (/* binding */ longBreakDuration),\n/* harmony export */   resetToDefaults: () => (/* binding */ resetToDefaults),\n/* harmony export */   updateDurations: () => (/* binding */ updateDurations),\n/* harmony export */   workDuration: () => (/* binding */ workDuration)\n/* harmony export */ });\n/* harmony import */ var _ui_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ui.js */ \"./src/ui.js\");\n\nvar defaultWorkDuration = 25 * 60;\nvar defaultBreakDuration = 5 * 60;\nvar workDuration = defaultWorkDuration;\nvar breakDuration = defaultBreakDuration;\nvar longBreakDuration = 15 * 60;\nfunction updateDurations() {\n  var workInput = document.getElementById('work-duration');\n  var breakInput = document.getElementById('break-duration');\n  var workTime = parseInt(workInput.value, 10);\n  var breakTime = parseInt(breakInput.value, 10);\n  if (workTime && workTime > 0) {\n    workDuration = workTime * 60;\n  }\n  if (breakTime && breakTime > 0) {\n    breakDuration = breakTime * 60;\n  }\n  (0,_ui_js__WEBPACK_IMPORTED_MODULE_0__.updateUI)(workDuration, breakDuration);\n}\nfunction resetToDefaults() {\n  workDuration = defaultWorkDuration;\n  breakDuration = defaultBreakDuration;\n}\nfunction getWorkDuration() {\n  var workInput = document.getElementById('work-duration').value;\n  return workInput ? parseInt(workInput, 10) || 25 : 25;\n}\nfunction getBreakDuration() {\n  var breakInput = document.getElementById('break-duration').value;\n  return breakInput ? parseInt(breakInput, 10) || 5 : 5;\n}\n\n\n//# sourceURL=webpack://pomodoro-timer/./src/settings.js?");

/***/ }),

/***/ "./src/timer.js":
/*!**********************!*\
  !*** ./src/timer.js ***!
  \**********************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   pauseTimer: () => (/* binding */ pauseTimer),\n/* harmony export */   resetTimer: () => (/* binding */ resetTimer),\n/* harmony export */   startTimer: () => (/* binding */ startTimer)\n/* harmony export */ });\n/* harmony import */ var _settings_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./settings.js */ \"./src/settings.js\");\n/* harmony import */ var _ui_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ui.js */ \"./src/ui.js\");\n\n\nvar timerInterval;\nvar timeLeft = _settings_js__WEBPACK_IMPORTED_MODULE_0__.workDuration;\nvar mode = 'work';\nconsole.log(\"Initial Work Duration:\", (0,_settings_js__WEBPACK_IMPORTED_MODULE_0__.getWorkDuration)());\nfunction startTimer() {\n  if (timerInterval) {\n    clearInterval(timerInterval);\n  }\n  timeLeft = _settings_js__WEBPACK_IMPORTED_MODULE_0__.workDuration;\n  currentMode = 'work';\n  timerInterval = setInterval(function () {\n    timeLeft--;\n    if (timeLeft <= 0) {\n      playSound();\n      if (currentMode === 'work') {\n        if (_settings_js__WEBPACK_IMPORTED_MODULE_0__.workDuration === 4) {\n          timeLeft = _settings_js__WEBPACK_IMPORTED_MODULE_0__.longBreakDuration;\n        } else {\n          timeLeft = _settings_js__WEBPACK_IMPORTED_MODULE_0__.breakDuration;\n        }\n        currentMode = 'break';\n      } else {\n        timeLeft = _settings_js__WEBPACK_IMPORTED_MODULE_0__.workDuration;\n        currentMode = 'work';\n      }\n    }\n    (0,_ui_js__WEBPACK_IMPORTED_MODULE_1__.updateUI)(timeLeft);\n  }, 1000);\n}\nfunction pauseTimer() {\n  clearInterval(timerInterval);\n}\nfunction resetTimer() {\n  var workDuration = (0,_settings_js__WEBPACK_IMPORTED_MODULE_0__.getWorkDuration)();\n  console.log(\"Work Duration in Reset:\", workDuration);\n  if (isNaN(workDuration)) {\n    console.error(\"Error: workDuration is NaN!\");\n    workDuration = 25;\n  }\n  timeLeft = workDuration * 60;\n  mode = 'work';\n  (0,_ui_js__WEBPACK_IMPORTED_MODULE_1__.updateUI)(timeLeft, mode);\n}\nfunction playSound() {\n  var audio = new Audio('notification.mp3');\n  audio.play();\n}\n\n//# sourceURL=webpack://pomodoro-timer/./src/timer.js?");

/***/ }),

/***/ "./src/ui.js":
/*!*******************!*\
  !*** ./src/ui.js ***!
  \*******************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   updateUI: () => (/* binding */ updateUI)\n/* harmony export */ });\nfunction updateUI(timeLeft, mode) {\n  var minutes = Math.floor(timeLeft / 60);\n  var seconds = timeLeft % 60;\n  document.getElementById('timer-display').textContent = \"\".concat(minutes.toString().padStart(2, '0'), \":\").concat(seconds.toString().padStart(2, '0'));\n  document.getElementById('mode-display').textContent = mode === 'work' ? \"Work Mode\" : \"Break Mode\";\n}\n\n//# sourceURL=webpack://pomodoro-timer/./src/ui.js?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;