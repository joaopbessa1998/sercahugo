"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/our-story",{

/***/ "./src/components/carousel.js":
/*!************************************!*\
  !*** ./src/components/carousel.js ***!
  \************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Carousel; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _btnSlider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./btnSlider */ \"./src/components/btnSlider.js\");\n\nvar _s = $RefreshSig$();\n\n\nconst dataSlider = [\n    {\n        id: 1,\n        img: \"https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80\"\n    },\n    {\n        id: 2,\n        img: \"https://images.unsplash.com/photo-1503174971373-b1f69850bded?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2113&q=80\"\n    },\n    {\n        id: 3,\n        img: \"https://images.unsplash.com/photo-1596204976717-1a9ff47f74ef?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80\"\n    },\n    {\n        id: 4,\n        img: \"https://images.unsplash.com/photo-1615873968403-89e068629265?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1932&q=80\"\n    }\n];\nfunction Carousel() {\n    _s();\n    const [slideIndex, setSlideIndex] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(1);\n    const nextSlide = ()=>{};\n    const prevSlide = ()=>{};\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: dataSlider.map((id, img)=>{\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                            src: img,\n                            alt: \"\"\n                        }, void 0, false, {\n                            fileName: \"/Users/joao/Desktop/hugo/src/components/carousel.js\",\n                            lineNumber: 42,\n                            columnNumber: 29\n                        }, this)\n                    }, id, false, {\n                        fileName: \"/Users/joao/Desktop/hugo/src/components/carousel.js\",\n                        lineNumber: 41,\n                        columnNumber: 25\n                    }, this);\n                })\n            }, void 0, false, {\n                fileName: \"/Users/joao/Desktop/hugo/src/components/carousel.js\",\n                lineNumber: 38,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_btnSlider__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                        moveSlide: nextSlide,\n                        direction: \"next\"\n                    }, void 0, false, {\n                        fileName: \"/Users/joao/Desktop/hugo/src/components/carousel.js\",\n                        lineNumber: 48,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_btnSlider__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                        moveSlide: prevSlide,\n                        direaction: \"prev\"\n                    }, void 0, false, {\n                        fileName: \"/Users/joao/Desktop/hugo/src/components/carousel.js\",\n                        lineNumber: 49,\n                        columnNumber: 17\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/joao/Desktop/hugo/src/components/carousel.js\",\n                lineNumber: 47,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/joao/Desktop/hugo/src/components/carousel.js\",\n        lineNumber: 37,\n        columnNumber: 9\n    }, this);\n}\n_s(Carousel, \"Chgf7CWoIiXrju8rJRx3dg0ygps=\");\n_c = Carousel;\nvar _c;\n$RefreshReg$(_c, \"Carousel\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9jYXJvdXNlbC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFnQztBQUNJO0FBR3BDLE1BQU1FLGFBQWE7SUFDZjtRQUNJQyxJQUFJO1FBQ0pDLEtBQUs7SUFDVDtJQUNBO1FBQ0lELElBQUk7UUFDSkMsS0FBSztJQUNUO0lBQ0E7UUFDSUQsSUFBSTtRQUNKQyxLQUFLO0lBQ1Q7SUFDQTtRQUNJRCxJQUFJO1FBQ0pDLEtBQUs7SUFDVDtDQUNIO0FBRWMsU0FBU0M7O0lBRXBCLE1BQU0sQ0FBQ0MsWUFBWUMsY0FBYyxHQUFHUCwrQ0FBUUEsQ0FBQztJQUU3QyxNQUFNUSxZQUFZLEtBRWxCO0lBRUEsTUFBTUMsWUFBWSxLQUVsQjtJQUVBLHFCQUNJLDhEQUFDQzs7MEJBQ0csOERBQUNBOzBCQUVPUixXQUFXUyxJQUFJLENBQUNSLElBQUlDO2tDQUNoQiw4REFBQ007a0NBQ0csNEVBQUNOOzRCQUFJUSxLQUFLUjs0QkFBS1MsS0FBSTs7Ozs7O3VCQURiVjs7Ozs7Z0JBR2Q7Ozs7OzswQkFHUiw4REFBQ087O2tDQUNHLDhEQUFDVCxrREFBU0E7d0JBQUNhLFdBQVdOO3dCQUFXTyxXQUFXOzs7Ozs7a0NBQzVDLDhEQUFDZCxrREFBU0E7d0JBQUNhLFdBQVdMO3dCQUFXTyxZQUFZOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFJN0Q7R0E3QndCWDtLQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9jYXJvdXNlbC5qcz81NTZmIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCJcbmltcG9ydCBCdG5TbGlkZXIgZnJvbSBcIi4vYnRuU2xpZGVyXCI7XG5cblxuY29uc3QgZGF0YVNsaWRlciA9IFtcbiAgICB7XG4gICAgICAgIGlkOiAxLFxuICAgICAgICBpbWc6IFwiaHR0cHM6Ly9pbWFnZXMudW5zcGxhc2guY29tL3Bob3RvLTE2MTgyMjExOTU3MTAtZGQ2YjQxZmFhZWE2P2l4bGliPXJiLTQuMC4zJml4aWQ9TTN3eE1qQTNmREI4TUh4d2FHOTBieTF3WVdkbGZIeDhmR1Z1ZkRCOGZIeDhmQSUzRCUzRCZhdXRvPWZvcm1hdCZmaXQ9Y3JvcCZ3PTIwMDAmcT04MFwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIGlkOiAyLFxuICAgICAgICBpbWc6IFwiaHR0cHM6Ly9pbWFnZXMudW5zcGxhc2guY29tL3Bob3RvLTE1MDMxNzQ5NzEzNzMtYjFmNjk4NTBiZGVkP2l4bGliPXJiLTQuMC4zJml4aWQ9TTN3eE1qQTNmREI4TUh4d2FHOTBieTF3WVdkbGZIeDhmR1Z1ZkRCOGZIeDhmQSUzRCUzRCZhdXRvPWZvcm1hdCZmaXQ9Y3JvcCZ3PTIxMTMmcT04MFwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIGlkOiAzLFxuICAgICAgICBpbWc6IFwiaHR0cHM6Ly9pbWFnZXMudW5zcGxhc2guY29tL3Bob3RvLTE1OTYyMDQ5NzY3MTctMWE5ZmY0N2Y3NGVmP2l4bGliPXJiLTQuMC4zJml4aWQ9TTN3eE1qQTNmREI4TUh4d2FHOTBieTF3WVdkbGZIeDhmR1Z1ZkRCOGZIeDhmQSUzRCUzRCZhdXRvPWZvcm1hdCZmaXQ9Y3JvcCZ3PTIwNzAmcT04MFwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIGlkOiA0LFxuICAgICAgICBpbWc6IFwiaHR0cHM6Ly9pbWFnZXMudW5zcGxhc2guY29tL3Bob3RvLTE2MTU4NzM5Njg0MDMtODllMDY4NjI5MjY1P2l4bGliPXJiLTQuMC4zJml4aWQ9TTN3eE1qQTNmREI4TUh4d2FHOTBieTF3WVdkbGZIeDhmR1Z1ZkRCOGZIeDhmQSUzRCUzRCZhdXRvPWZvcm1hdCZmaXQ9Y3JvcCZ3PTE5MzImcT04MFwiXG4gICAgfVxuXVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBDYXJvdXNlbCgpIHtcblxuICAgIGNvbnN0IFtzbGlkZUluZGV4LCBzZXRTbGlkZUluZGV4XSA9IHVzZVN0YXRlKDEpO1xuXG4gICAgY29uc3QgbmV4dFNsaWRlID0gKCkgPT4ge1xuXG4gICAgfVxuXG4gICAgY29uc3QgcHJldlNsaWRlID0gKCkgPT4ge1xuXG4gICAgfVxuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBkYXRhU2xpZGVyLm1hcCgoaWQsIGltZykgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBrZXk9e2lkfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17aW1nfSBhbHQ9XCJcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIDxCdG5TbGlkZXIgbW92ZVNsaWRlPXtuZXh0U2xpZGV9IGRpcmVjdGlvbj17XCJuZXh0XCJ9IC8+XG4gICAgICAgICAgICAgICAgPEJ0blNsaWRlciBtb3ZlU2xpZGU9e3ByZXZTbGlkZX0gZGlyZWFjdGlvbj17XCJwcmV2XCJ9IC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgKVxufSJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsIkJ0blNsaWRlciIsImRhdGFTbGlkZXIiLCJpZCIsImltZyIsIkNhcm91c2VsIiwic2xpZGVJbmRleCIsInNldFNsaWRlSW5kZXgiLCJuZXh0U2xpZGUiLCJwcmV2U2xpZGUiLCJkaXYiLCJtYXAiLCJzcmMiLCJhbHQiLCJtb3ZlU2xpZGUiLCJkaXJlY3Rpb24iLCJkaXJlYWN0aW9uIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/carousel.js\n"));

/***/ })

});