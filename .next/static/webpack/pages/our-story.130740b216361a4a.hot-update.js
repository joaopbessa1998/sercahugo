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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Carousel; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _btnSlider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./btnSlider */ \"./src/components/btnSlider.js\");\n\nvar _s = $RefreshSig$();\n\n\nconst dataSlider = [\n    {\n        id: 1,\n        img: \"https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80\"\n    },\n    {\n        id: 2,\n        img: \"https://images.unsplash.com/photo-1503174971373-b1f69850bded?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2113&q=80\"\n    },\n    {\n        id: 3,\n        img: \"https://images.unsplash.com/photo-1596204976717-1a9ff47f74ef?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80\"\n    },\n    {\n        id: 4,\n        img: \"https://images.unsplash.com/photo-1615873968403-89e068629265?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1932&q=80\"\n    }\n];\nfunction Carousel() {\n    _s();\n    const [slideIndex, setSlideIndex] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(1);\n    const nextSlide = ()=>{};\n    const prevSlide = ()=>{};\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: dataSlider.map((id, img, index)=>{\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                            src: img,\n                            alt: \"\"\n                        }, id, false, {\n                            fileName: \"/Users/joao/Desktop/hugo/src/components/carousel.js\",\n                            lineNumber: 42,\n                            columnNumber: 29\n                        }, this)\n                    }, id, false, {\n                        fileName: \"/Users/joao/Desktop/hugo/src/components/carousel.js\",\n                        lineNumber: 41,\n                        columnNumber: 25\n                    }, this);\n                })\n            }, void 0, false, {\n                fileName: \"/Users/joao/Desktop/hugo/src/components/carousel.js\",\n                lineNumber: 38,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_btnSlider__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                        moveSlide: nextSlide,\n                        direction: \"next\"\n                    }, void 0, false, {\n                        fileName: \"/Users/joao/Desktop/hugo/src/components/carousel.js\",\n                        lineNumber: 48,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_btnSlider__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                        moveSlide: prevSlide,\n                        direaction: \"prev\"\n                    }, void 0, false, {\n                        fileName: \"/Users/joao/Desktop/hugo/src/components/carousel.js\",\n                        lineNumber: 49,\n                        columnNumber: 17\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/joao/Desktop/hugo/src/components/carousel.js\",\n                lineNumber: 47,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/joao/Desktop/hugo/src/components/carousel.js\",\n        lineNumber: 37,\n        columnNumber: 9\n    }, this);\n}\n_s(Carousel, \"Chgf7CWoIiXrju8rJRx3dg0ygps=\");\n_c = Carousel;\nvar _c;\n$RefreshReg$(_c, \"Carousel\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9jYXJvdXNlbC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFnQztBQUNJO0FBR3BDLE1BQU1FLGFBQWE7SUFDZjtRQUNJQyxJQUFJO1FBQ0pDLEtBQUs7SUFDVDtJQUNBO1FBQ0lELElBQUk7UUFDSkMsS0FBSztJQUNUO0lBQ0E7UUFDSUQsSUFBSTtRQUNKQyxLQUFLO0lBQ1Q7SUFDQTtRQUNJRCxJQUFJO1FBQ0pDLEtBQUs7SUFDVDtDQUNIO0FBRWMsU0FBU0M7O0lBRXBCLE1BQU0sQ0FBQ0MsWUFBWUMsY0FBYyxHQUFHUCwrQ0FBUUEsQ0FBQztJQUU3QyxNQUFNUSxZQUFZLEtBRWxCO0lBRUEsTUFBTUMsWUFBWSxLQUVsQjtJQUVBLHFCQUNJLDhEQUFDQzs7MEJBQ0csOERBQUNBOzBCQUVPUixXQUFXUyxJQUFJLENBQUNSLElBQUlDLEtBQUtRO2tDQUNyQiw4REFBQ0Y7a0NBQ0csNEVBQUNOOzRCQUFhUyxLQUFLVDs0QkFBS1UsS0FBSTsyQkFBbEJYOzs7Ozt1QkFESkE7Ozs7O2dCQUdkOzs7Ozs7MEJBR1IsOERBQUNPOztrQ0FDRyw4REFBQ1Qsa0RBQVNBO3dCQUFDYyxXQUFXUDt3QkFBV1EsV0FBVzs7Ozs7O2tDQUM1Qyw4REFBQ2Ysa0RBQVNBO3dCQUFDYyxXQUFXTjt3QkFBV1EsWUFBWTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBSTdEO0dBN0J3Qlo7S0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvY2Fyb3VzZWwuanM/NTU2ZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiXG5pbXBvcnQgQnRuU2xpZGVyIGZyb20gXCIuL2J0blNsaWRlclwiO1xuXG5cbmNvbnN0IGRhdGFTbGlkZXIgPSBbXG4gICAge1xuICAgICAgICBpZDogMSxcbiAgICAgICAgaW1nOiBcImh0dHBzOi8vaW1hZ2VzLnVuc3BsYXNoLmNvbS9waG90by0xNjE4MjIxMTk1NzEwLWRkNmI0MWZhYWVhNj9peGxpYj1yYi00LjAuMyZpeGlkPU0zd3hNakEzZkRCOE1IeHdhRzkwYnkxd1lXZGxmSHg4ZkdWdWZEQjhmSHg4ZkElM0QlM0QmYXV0bz1mb3JtYXQmZml0PWNyb3Amdz0yMDAwJnE9ODBcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBpZDogMixcbiAgICAgICAgaW1nOiBcImh0dHBzOi8vaW1hZ2VzLnVuc3BsYXNoLmNvbS9waG90by0xNTAzMTc0OTcxMzczLWIxZjY5ODUwYmRlZD9peGxpYj1yYi00LjAuMyZpeGlkPU0zd3hNakEzZkRCOE1IeHdhRzkwYnkxd1lXZGxmSHg4ZkdWdWZEQjhmSHg4ZkElM0QlM0QmYXV0bz1mb3JtYXQmZml0PWNyb3Amdz0yMTEzJnE9ODBcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBpZDogMyxcbiAgICAgICAgaW1nOiBcImh0dHBzOi8vaW1hZ2VzLnVuc3BsYXNoLmNvbS9waG90by0xNTk2MjA0OTc2NzE3LTFhOWZmNDdmNzRlZj9peGxpYj1yYi00LjAuMyZpeGlkPU0zd3hNakEzZkRCOE1IeHdhRzkwYnkxd1lXZGxmSHg4ZkdWdWZEQjhmSHg4ZkElM0QlM0QmYXV0bz1mb3JtYXQmZml0PWNyb3Amdz0yMDcwJnE9ODBcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBpZDogNCxcbiAgICAgICAgaW1nOiBcImh0dHBzOi8vaW1hZ2VzLnVuc3BsYXNoLmNvbS9waG90by0xNjE1ODczOTY4NDAzLTg5ZTA2ODYyOTI2NT9peGxpYj1yYi00LjAuMyZpeGlkPU0zd3hNakEzZkRCOE1IeHdhRzkwYnkxd1lXZGxmSHg4ZkdWdWZEQjhmSHg4ZkElM0QlM0QmYXV0bz1mb3JtYXQmZml0PWNyb3Amdz0xOTMyJnE9ODBcIlxuICAgIH1cbl1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQ2Fyb3VzZWwoKSB7XG5cbiAgICBjb25zdCBbc2xpZGVJbmRleCwgc2V0U2xpZGVJbmRleF0gPSB1c2VTdGF0ZSgxKTtcblxuICAgIGNvbnN0IG5leHRTbGlkZSA9ICgpID0+IHtcblxuICAgIH1cblxuICAgIGNvbnN0IHByZXZTbGlkZSA9ICgpID0+IHtcblxuICAgIH1cblxuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgZGF0YVNsaWRlci5tYXAoKGlkLCBpbWcsIGluZGV4KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGtleT17aWR9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcga2V5PXtpZH0gc3JjPXtpbWd9IGFsdD1cIlwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgPEJ0blNsaWRlciBtb3ZlU2xpZGU9e25leHRTbGlkZX0gZGlyZWN0aW9uPXtcIm5leHRcIn0gLz5cbiAgICAgICAgICAgICAgICA8QnRuU2xpZGVyIG1vdmVTbGlkZT17cHJldlNsaWRlfSBkaXJlYWN0aW9uPXtcInByZXZcIn0gLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICApXG59Il0sIm5hbWVzIjpbInVzZVN0YXRlIiwiQnRuU2xpZGVyIiwiZGF0YVNsaWRlciIsImlkIiwiaW1nIiwiQ2Fyb3VzZWwiLCJzbGlkZUluZGV4Iiwic2V0U2xpZGVJbmRleCIsIm5leHRTbGlkZSIsInByZXZTbGlkZSIsImRpdiIsIm1hcCIsImluZGV4Iiwic3JjIiwiYWx0IiwibW92ZVNsaWRlIiwiZGlyZWN0aW9uIiwiZGlyZWFjdGlvbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/carousel.js\n"));

/***/ })

});