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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Carousel; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_slider_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/slider.module.css */ \"./src/styles/slider.module.css\");\n/* harmony import */ var _styles_slider_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_slider_module_css__WEBPACK_IMPORTED_MODULE_2__);\n\nvar _s = $RefreshSig$();\n\n\nfunction Carousel() {\n    _s();\n    const dataSlider = [\n        {\n            id: 1,\n            img: \"https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80\"\n        },\n        {\n            id: 2,\n            img: \"https://images.unsplash.com/photo-1503174971373-b1f69850bded?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2113&q=80\"\n        },\n        {\n            id: 3,\n            img: \"https://images.unsplash.com/photo-1596204976717-1a9ff47f74ef?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80\"\n        },\n        {\n            id: 4,\n            img: \"https://images.unsplash.com/photo-1615873968403-89e068629265?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1932&q=80\"\n        }\n    ];\n    const [slideIndex, setSlideIndex] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(1);\n    const nextSlide = ()=>{\n        if (slideIndex !== dataSlider.length) {\n            setSlideIndex(slideIndex + 1);\n        } else if (slideIndex === dataSlider.length) {\n            setSlideIndex(1);\n        }\n    };\n    const prevSlide = ()=>{\n        if (slideIndex !== 1) {\n            setSlideIndex(slideIndex - 1);\n        } else if (slideIndex === 1) {\n            setSlideIndex;\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_styles_slider_module_css__WEBPACK_IMPORTED_MODULE_2___default().slider),\n                children: dataSlider.map((id, index)=>{\n                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_styles_slider_module_css__WEBPACK_IMPORTED_MODULE_2___default().slide),\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                            src: id.img,\n                            alt: \"\"\n                        }, void 0, false, {\n                            fileName: \"/Users/joao/Desktop/hugo/src/components/carousel.js\",\n                            lineNumber: 55,\n                            columnNumber: 33\n                        }, this)\n                    }, index, false, {\n                        fileName: \"/Users/joao/Desktop/hugo/src/components/carousel.js\",\n                        lineNumber: 54,\n                        columnNumber: 29\n                    }, this);\n                })\n            }, void 0, false, {\n                fileName: \"/Users/joao/Desktop/hugo/src/components/carousel.js\",\n                lineNumber: 50,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        onClick: prevSlide,\n                        children: \"Anterior\"\n                    }, void 0, false, {\n                        fileName: \"/Users/joao/Desktop/hugo/src/components/carousel.js\",\n                        lineNumber: 62,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        onClick: nextSlide,\n                        children: \"Pr\\xf3xima\"\n                    }, void 0, false, {\n                        fileName: \"/Users/joao/Desktop/hugo/src/components/carousel.js\",\n                        lineNumber: 63,\n                        columnNumber: 17\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/joao/Desktop/hugo/src/components/carousel.js\",\n                lineNumber: 61,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/joao/Desktop/hugo/src/components/carousel.js\",\n        lineNumber: 49,\n        columnNumber: 9\n    }, this);\n}\n_s(Carousel, \"Chgf7CWoIiXrju8rJRx3dg0ygps=\");\n_c = Carousel;\nvar _c;\n$RefreshReg$(_c, \"Carousel\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9jYXJvdXNlbC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBZ0M7QUFDZ0I7QUFPakMsU0FBU0U7O0lBRXBCLE1BQU1DLGFBQWE7UUFDZjtZQUNJQyxJQUFJO1lBQ0pDLEtBQUs7UUFDVDtRQUNBO1lBQ0lELElBQUk7WUFDSkMsS0FBSztRQUNUO1FBQ0E7WUFDSUQsSUFBSTtZQUNKQyxLQUFLO1FBQ1Q7UUFDQTtZQUNJRCxJQUFJO1lBQ0pDLEtBQUs7UUFDVDtLQUNIO0lBRUQsTUFBTSxDQUFDQyxZQUFZQyxjQUFjLEdBQUdQLCtDQUFRQSxDQUFDO0lBRTdDLE1BQU1RLFlBQVk7UUFDZCxJQUFHRixlQUFlSCxXQUFXTSxRQUFRO1lBQ2pDRixjQUFjRCxhQUFhO1FBQy9CLE9BQU8sSUFBSUEsZUFBZUgsV0FBV00sUUFBUTtZQUN6Q0YsY0FBYztRQUNsQjtJQUNKO0lBRUEsTUFBTUcsWUFBWTtRQUNkLElBQUdKLGVBQWUsR0FBRztZQUNqQkMsY0FBY0QsYUFBYTtRQUMvQixPQUFPLElBQUlBLGVBQWUsR0FBRztZQUN6QkM7UUFDSjtJQUNKO0lBRUEscUJBQ0ksOERBQUNJOzswQkFDRyw4REFBQ0E7Z0JBQUlDLFdBQVdYLHlFQUFhWTswQkFFckJWLFdBQVdXLElBQUksQ0FBQ1YsSUFBSVc7b0JBQ2hCLHFCQUNJLDhEQUFDSjt3QkFBSUMsV0FBV1gsd0VBQVllO2tDQUN4Qiw0RUFBQ1g7NEJBQUlZLEtBQUtiLEdBQUdDOzRCQUFLYSxLQUFJOzs7Ozs7dUJBRFNIOzs7OztnQkFJM0M7Ozs7OzswQkFHUiw4REFBQ0o7O2tDQUNHLDhEQUFDUTt3QkFBT0MsU0FBU1Y7a0NBQVc7Ozs7OztrQ0FDNUIsOERBQUNTO3dCQUFPQyxTQUFTWjtrQ0FBVzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBSTVDO0dBMUR3Qk47S0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvY2Fyb3VzZWwuanM/NTU2ZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiXG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuLi9zdHlsZXMvc2xpZGVyLm1vZHVsZS5jc3NcIlxuXG5cblxuXG5cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQ2Fyb3VzZWwoKSB7XG5cbiAgICBjb25zdCBkYXRhU2xpZGVyID0gW1xuICAgICAgICB7XG4gICAgICAgICAgICBpZDogMSxcbiAgICAgICAgICAgIGltZzogXCJodHRwczovL2ltYWdlcy51bnNwbGFzaC5jb20vcGhvdG8tMTYxODIyMTE5NTcxMC1kZDZiNDFmYWFlYTY/aXhsaWI9cmItNC4wLjMmaXhpZD1NM3d4TWpBM2ZEQjhNSHh3YUc5MGJ5MXdZV2RsZkh4OGZHVnVmREI4Zkh4OGZBJTNEJTNEJmF1dG89Zm9ybWF0JmZpdD1jcm9wJnc9MjAwMCZxPTgwXCJcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgaWQ6IDIsXG4gICAgICAgICAgICBpbWc6IFwiaHR0cHM6Ly9pbWFnZXMudW5zcGxhc2guY29tL3Bob3RvLTE1MDMxNzQ5NzEzNzMtYjFmNjk4NTBiZGVkP2l4bGliPXJiLTQuMC4zJml4aWQ9TTN3eE1qQTNmREI4TUh4d2FHOTBieTF3WVdkbGZIeDhmR1Z1ZkRCOGZIeDhmQSUzRCUzRCZhdXRvPWZvcm1hdCZmaXQ9Y3JvcCZ3PTIxMTMmcT04MFwiXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIGlkOiAzLFxuICAgICAgICAgICAgaW1nOiBcImh0dHBzOi8vaW1hZ2VzLnVuc3BsYXNoLmNvbS9waG90by0xNTk2MjA0OTc2NzE3LTFhOWZmNDdmNzRlZj9peGxpYj1yYi00LjAuMyZpeGlkPU0zd3hNakEzZkRCOE1IeHdhRzkwYnkxd1lXZGxmSHg4ZkdWdWZEQjhmSHg4ZkElM0QlM0QmYXV0bz1mb3JtYXQmZml0PWNyb3Amdz0yMDcwJnE9ODBcIlxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBpZDogNCxcbiAgICAgICAgICAgIGltZzogXCJodHRwczovL2ltYWdlcy51bnNwbGFzaC5jb20vcGhvdG8tMTYxNTg3Mzk2ODQwMy04OWUwNjg2MjkyNjU/aXhsaWI9cmItNC4wLjMmaXhpZD1NM3d4TWpBM2ZEQjhNSHh3YUc5MGJ5MXdZV2RsZkh4OGZHVnVmREI4Zkh4OGZBJTNEJTNEJmF1dG89Zm9ybWF0JmZpdD1jcm9wJnc9MTkzMiZxPTgwXCJcbiAgICAgICAgfVxuICAgIF1cblxuICAgIGNvbnN0IFtzbGlkZUluZGV4LCBzZXRTbGlkZUluZGV4XSA9IHVzZVN0YXRlKDEpO1xuXG4gICAgY29uc3QgbmV4dFNsaWRlID0gKCkgPT4ge1xuICAgICAgICBpZihzbGlkZUluZGV4ICE9PSBkYXRhU2xpZGVyLmxlbmd0aCkge1xuICAgICAgICAgICAgc2V0U2xpZGVJbmRleChzbGlkZUluZGV4ICsgMSlcbiAgICAgICAgfSBlbHNlIGlmIChzbGlkZUluZGV4ID09PSBkYXRhU2xpZGVyLmxlbmd0aCkge1xuICAgICAgICAgICAgc2V0U2xpZGVJbmRleCgxKVxuICAgICAgICB9XG4gICAgfTtcblxuICAgIGNvbnN0IHByZXZTbGlkZSA9ICgpID0+IHtcbiAgICAgICAgaWYoc2xpZGVJbmRleCAhPT0gMSkge1xuICAgICAgICAgICAgc2V0U2xpZGVJbmRleChzbGlkZUluZGV4IC0gMSlcbiAgICAgICAgfSBlbHNlIGlmIChzbGlkZUluZGV4ID09PSAxKSB7XG4gICAgICAgICAgICBzZXRTbGlkZUluZGV4XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5zbGlkZXJ9PlxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgZGF0YVNsaWRlci5tYXAoKGlkLCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnNsaWRlfSBrZXk9e2luZGV4fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e2lkLmltZ30gYWx0PVwiXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtwcmV2U2xpZGV9PkFudGVyaW9yPC9idXR0b24+XG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtuZXh0U2xpZGV9PlByw7N4aW1hPC9idXR0b24+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgKVxufSJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsInN0eWxlcyIsIkNhcm91c2VsIiwiZGF0YVNsaWRlciIsImlkIiwiaW1nIiwic2xpZGVJbmRleCIsInNldFNsaWRlSW5kZXgiLCJuZXh0U2xpZGUiLCJsZW5ndGgiLCJwcmV2U2xpZGUiLCJkaXYiLCJjbGFzc05hbWUiLCJzbGlkZXIiLCJtYXAiLCJpbmRleCIsInNsaWRlIiwic3JjIiwiYWx0IiwiYnV0dG9uIiwib25DbGljayJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/carousel.js\n"));

/***/ })

});