"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/transition.js":
/*!***************************!*\
  !*** ./src/transition.js ***!
  \***************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"TransAnimation\": function() { return /* binding */ TransAnimation; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! framer-motion */ \"./node_modules/framer-motion/dist/es/index.mjs\");\n\n\nconst TransAnimation = {\n    hidden: {\n        scaleY: 2,\n        y: 500\n    },\n    show: {\n        scaleY: 3,\n        y: -2000\n    },\n    hide: {}\n};\nconst Transition = (Ogcomponent)=>{\n    return ()=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Ogcomponent, {}, void 0, false, {\n                    fileName: \"/Users/joao/Desktop/hugo/src/transition.js\",\n                    lineNumber: 21,\n                    columnNumber: 13\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_1__.motion.div, {\n                    className: \"slide-in\",\n                    initial: {\n                        scaleY: 0\n                    },\n                    animate: {\n                        scaleY: 0\n                    },\n                    exit: {\n                        scaleY: 1\n                    },\n                    transition: {\n                        duration: 3,\n                        ease: [\n                            0.22,\n                            1,\n                            0.36,\n                            1\n                        ]\n                    }\n                }, void 0, false, {\n                    fileName: \"/Users/joao/Desktop/hugo/src/transition.js\",\n                    lineNumber: 22,\n                    columnNumber: 13\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_1__.motion.div, {\n                    className: \"slide-out\",\n                    initial: {\n                        scaleY: 1\n                    },\n                    animate: {\n                        scaleY: 0\n                    },\n                    exit: {\n                        scaleY: 0\n                    },\n                    transition: {\n                        duration: 3,\n                        ease: [\n                            0.22,\n                            1,\n                            0.36,\n                            1\n                        ]\n                    }\n                }, void 0, false, {\n                    fileName: \"/Users/joao/Desktop/hugo/src/transition.js\",\n                    lineNumber: 29,\n                    columnNumber: 13\n                }, undefined)\n            ]\n        }, void 0, true);\n};\n_c = Transition;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Transition);\nvar _c;\n$RefreshReg$(_c, \"Transition\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvdHJhbnNpdGlvbi5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUF1QztBQUVoQyxNQUFNQyxpQkFBaUI7SUFDMUJDLFFBQVE7UUFDSkMsUUFBUTtRQUNSQyxHQUFHO0lBQ1A7SUFDQUMsTUFBTTtRQUNGRixRQUFRO1FBQ1JDLEdBQUcsQ0FBQztJQUNSO0lBQ0FFLE1BQU8sQ0FFUDtBQUNKLEVBQUM7QUFHRCxNQUFNQyxhQUFhLENBQUNDO0lBQ2hCLE9BQU8sa0JBQ0g7OzhCQUNJLDhEQUFDQTs7Ozs7OEJBQ0QsOERBQUNSLHFEQUFVUztvQkFDUEMsV0FBVTtvQkFDVkMsU0FBUzt3QkFBRVIsUUFBUTtvQkFBRTtvQkFDckJTLFNBQVM7d0JBQUVULFFBQVE7b0JBQUU7b0JBQ3JCVSxNQUFNO3dCQUFFVixRQUFRO29CQUFFO29CQUNsQlcsWUFBWTt3QkFBRUMsVUFBVTt3QkFBR0MsTUFBTTs0QkFBQzs0QkFBTTs0QkFBRzs0QkFBTTt5QkFBRTtvQkFBQzs7Ozs7OzhCQUV4RCw4REFBQ2hCLHFEQUFVUztvQkFDUEMsV0FBVTtvQkFDVkMsU0FBUzt3QkFBRVIsUUFBUTtvQkFBRTtvQkFDckJTLFNBQVM7d0JBQUVULFFBQVE7b0JBQUU7b0JBQ3JCVSxNQUFNO3dCQUFFVixRQUFRO29CQUFFO29CQUNsQlcsWUFBWTt3QkFBRUMsVUFBVTt3QkFBR0MsTUFBTTs0QkFBQzs0QkFBTTs0QkFBRzs0QkFBTTt5QkFBRTtvQkFBQzs7Ozs7Ozs7QUFJcEU7S0FwQk1UO0FBc0JOLCtEQUFlQSxVQUFVQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy90cmFuc2l0aW9uLmpzPzRiNmQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgbW90aW9uIH0gZnJvbSBcImZyYW1lci1tb3Rpb25cIjtcblxuZXhwb3J0IGNvbnN0IFRyYW5zQW5pbWF0aW9uID0ge1xuICAgIGhpZGRlbjoge1xuICAgICAgICBzY2FsZVk6IDIsXG4gICAgICAgIHk6IDUwMFxuICAgIH0sXG4gICAgc2hvdzoge1xuICAgICAgICBzY2FsZVk6IDMsXG4gICAgICAgIHk6IC0yMDAwXG4gICAgfSxcbiAgICBoaWRlIDoge1xuXG4gICAgfVxufVxuXG5cbmNvbnN0IFRyYW5zaXRpb24gPSAoT2djb21wb25lbnQpID0+IHtcbiAgICByZXR1cm4gKCkgPT4gKFxuICAgICAgICA8PlxuICAgICAgICAgICAgPE9nY29tcG9uZW50IC8+XG4gICAgICAgICAgICA8bW90aW9uLmRpdlxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInNsaWRlLWluXCJcbiAgICAgICAgICAgICAgICBpbml0aWFsPXt7IHNjYWxlWTogMCB9fVxuICAgICAgICAgICAgICAgIGFuaW1hdGU9e3sgc2NhbGVZOiAwIH19XG4gICAgICAgICAgICAgICAgZXhpdD17eyBzY2FsZVk6IDEgfX1cbiAgICAgICAgICAgICAgICB0cmFuc2l0aW9uPXt7IGR1cmF0aW9uOiAzLCBlYXNlOiBbMC4yMiwgMSwgMC4zNiwgMV0gfX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8bW90aW9uLmRpdlxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInNsaWRlLW91dFwiXG4gICAgICAgICAgICAgICAgaW5pdGlhbD17eyBzY2FsZVk6IDEgfX1cbiAgICAgICAgICAgICAgICBhbmltYXRlPXt7IHNjYWxlWTogMCB9fVxuICAgICAgICAgICAgICAgIGV4aXQ9e3sgc2NhbGVZOiAwIH19XG4gICAgICAgICAgICAgICAgdHJhbnNpdGlvbj17eyBkdXJhdGlvbjogMywgZWFzZTogWzAuMjIsIDEsIDAuMzYsIDFdIH19XG4gICAgICAgICAgICAvPlxuICAgICAgICA8Lz5cbiAgICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IFRyYW5zaXRpb247Il0sIm5hbWVzIjpbIm1vdGlvbiIsIlRyYW5zQW5pbWF0aW9uIiwiaGlkZGVuIiwic2NhbGVZIiwieSIsInNob3ciLCJoaWRlIiwiVHJhbnNpdGlvbiIsIk9nY29tcG9uZW50IiwiZGl2IiwiY2xhc3NOYW1lIiwiaW5pdGlhbCIsImFuaW1hdGUiLCJleGl0IiwidHJhbnNpdGlvbiIsImR1cmF0aW9uIiwiZWFzZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/transition.js\n"));

/***/ })

});