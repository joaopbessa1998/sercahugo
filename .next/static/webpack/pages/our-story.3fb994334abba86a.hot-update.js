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

/***/ "./src/components/imageSlider.js":
/*!***************************************!*\
  !*** ./src/components/imageSlider.js ***!
  \***************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ ImageSlider; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_slider_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/slider.module.css */ \"./src/styles/slider.module.css\");\n/* harmony import */ var _styles_slider_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_slider_module_css__WEBPACK_IMPORTED_MODULE_2__);\n\nvar _s = $RefreshSig$();\n\n\nfunction ImageSlider() {\n    _s();\n    const slides = [\n        {\n            url: \"https://images.unsplash.com/photo-1533692336500-b85cd007c172?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80\"\n        },\n        {\n            url: \"https://images.unsplash.com/photo-1601397210737-a5534480bdc5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80\"\n        },\n        {\n            url: \"https://images.unsplash.com/photo-1473621038790-b778b4750efe?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2072&q=80\"\n        },\n        {\n            url: \"https://images.unsplash.com/photo-1634141737357-bbec5c1d21f6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80\"\n        },\n        {\n            url: \"https://images.unsplash.com/photo-1618492409933-20d5624cbf71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80\"\n        }\n    ];\n    const [currentIndex, setCurrentIndex] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    const prevSlide = ()=>{\n        const index = currentIndex > 0 ? currentIndex - 1 : slides.length - 1;\n        setCurrentIndex(index);\n    };\n    const nextSlide = ()=>{\n        const index = currentIndex < slides.length - 1 ? currentIndex + 1 : 0;\n        setCurrentIndex(index);\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const slideInterval = setInterval(()=>{\n            setCurrentIndex((currentIndex)=>currentIndex < slides.length - 1 ? currentIndex + 1 : 0);\n        }, 6000);\n        return ()=>clearInterval(slideInterval);\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: (_styles_slider_module_css__WEBPACK_IMPORTED_MODULE_2___default().carousel),\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_styles_slider_module_css__WEBPACK_IMPORTED_MODULE_2___default().carousel_inner),\n                style: {\n                    transform: \"translateX(\".concat(-currentIndex * 100, \"%)\")\n                },\n                children: slides.map((id, index)=>{\n                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_styles_slider_module_css__WEBPACK_IMPORTED_MODULE_2___default().carousel_inner_item),\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                            src: id.url,\n                            alt: \"\"\n                        }, void 0, false, {\n                            fileName: \"/Users/joao/Desktop/hugo/src/components/imageSlider.js\",\n                            lineNumber: 53,\n                            columnNumber: 37\n                        }, this)\n                    }, index, false, {\n                        fileName: \"/Users/joao/Desktop/hugo/src/components/imageSlider.js\",\n                        lineNumber: 52,\n                        columnNumber: 33\n                    }, this);\n                })\n            }, void 0, false, {\n                fileName: \"/Users/joao/Desktop/hugo/src/components/imageSlider.js\",\n                lineNumber: 48,\n                columnNumber: 17\n            }, this)\n        }, void 0, false, {\n            fileName: \"/Users/joao/Desktop/hugo/src/components/imageSlider.js\",\n            lineNumber: 47,\n            columnNumber: 13\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/joao/Desktop/hugo/src/components/imageSlider.js\",\n        lineNumber: 46,\n        columnNumber: 9\n    }, this);\n}\n_s(ImageSlider, \"tPjzCc9H5UuFdWNuAHYoD0K4UOk=\");\n_c = ImageSlider;\nvar _c;\n$RefreshReg$(_c, \"ImageSlider\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9pbWFnZVNsaWRlci5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBMkM7QUFDSztBQUdqQyxTQUFTRzs7SUFFcEIsTUFBTUMsU0FBUztRQUNYO1lBQ0lDLEtBQUs7UUFDVDtRQUNBO1lBQ0lBLEtBQUs7UUFDVDtRQUNBO1lBQ0lBLEtBQUs7UUFDVDtRQUNBO1lBQ0lBLEtBQUs7UUFDVDtRQUNBO1lBQ0lBLEtBQUs7UUFDVDtLQUNIO0lBRUQsTUFBTSxDQUFDQyxjQUFjQyxnQkFBZ0IsR0FBR1AsK0NBQVFBLENBQUM7SUFFakQsTUFBTVEsWUFBWTtRQUNkLE1BQU1DLFFBQVFILGVBQWUsSUFBSUEsZUFBZSxJQUFJRixPQUFPTSxTQUFTO1FBQ3BFSCxnQkFBZ0JFO0lBQ3BCO0lBRUEsTUFBTUUsWUFBWTtRQUNkLE1BQU1GLFFBQVFILGVBQWVGLE9BQU9NLFNBQVMsSUFBSUosZUFBZSxJQUFJO1FBQ3BFQyxnQkFBZ0JFO0lBQ3BCO0lBRUFSLGdEQUFTQSxDQUFDO1FBQ04sTUFBTVcsZ0JBQWdCQyxZQUFZO1lBQzlCTixnQkFBZ0JELENBQUFBLGVBQWdCQSxlQUFlRixPQUFPTSxTQUFTLElBQUlKLGVBQWUsSUFBSTtRQUMxRixHQUFHO1FBRUgsT0FBTyxJQUFNUSxjQUFjRjtJQUMvQixHQUFHLEVBQUU7SUFFTCxxQkFDSSw4REFBQ0c7a0JBQ0csNEVBQUNBO1lBQUlDLFdBQVdkLDJFQUFlZTtzQkFDM0IsNEVBQUNGO2dCQUFJQyxXQUFXZCxpRkFBcUJnQjtnQkFBRUMsT0FBTztvQkFBRUMsV0FBVyxjQUFtQyxPQUFyQixDQUFFZCxlQUFlLEtBQUk7Z0JBQUc7MEJBRXpGRixPQUFPaUIsSUFBSSxDQUFDQyxJQUFJYjtvQkFDWixxQkFDSSw4REFBQ007d0JBQWdCQyxXQUFXZCxzRkFBMEJxQjtrQ0FDbEQsNEVBQUNDOzRCQUFJQyxLQUFLSCxHQUFHakI7NEJBQUtxQixLQUFJOzs7Ozs7dUJBRGhCakI7Ozs7O2dCQUlsQjs7Ozs7Ozs7Ozs7Ozs7OztBQVV4QjtHQTdEd0JOO0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL2ltYWdlU2xpZGVyLmpzPzYyM2IiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiXG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuLi9zdHlsZXMvc2xpZGVyLm1vZHVsZS5jc3NcIlxuXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEltYWdlU2xpZGVyKCkge1xuXG4gICAgY29uc3Qgc2xpZGVzID0gW1xuICAgICAgICB7XG4gICAgICAgICAgICB1cmw6IFwiaHR0cHM6Ly9pbWFnZXMudW5zcGxhc2guY29tL3Bob3RvLTE1MzM2OTIzMzY1MDAtYjg1Y2QwMDdjMTcyP2l4bGliPXJiLTQuMC4zJml4aWQ9TTN3eE1qQTNmREI4TUh4d2FHOTBieTF3WVdkbGZIeDhmR1Z1ZkRCOGZIeDhmQSUzRCUzRCZhdXRvPWZvcm1hdCZmaXQ9Y3JvcCZ3PTE5NzQmcT04MFwiXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIHVybDogXCJodHRwczovL2ltYWdlcy51bnNwbGFzaC5jb20vcGhvdG8tMTYwMTM5NzIxMDczNy1hNTUzNDQ4MGJkYzU/aXhsaWI9cmItNC4wLjMmaXhpZD1NM3d4TWpBM2ZEQjhNSHh3YUc5MGJ5MXdZV2RsZkh4OGZHVnVmREI4Zkh4OGZBJTNEJTNEJmF1dG89Zm9ybWF0JmZpdD1jcm9wJnc9MjA3MCZxPTgwXCJcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgdXJsOiBcImh0dHBzOi8vaW1hZ2VzLnVuc3BsYXNoLmNvbS9waG90by0xNDczNjIxMDM4NzkwLWI3NzhiNDc1MGVmZT9peGxpYj1yYi00LjAuMyZpeGlkPU0zd3hNakEzZkRCOE1IeHdhRzkwYnkxd1lXZGxmSHg4ZkdWdWZEQjhmSHg4ZkElM0QlM0QmYXV0bz1mb3JtYXQmZml0PWNyb3Amdz0yMDcyJnE9ODBcIlxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICB1cmw6IFwiaHR0cHM6Ly9pbWFnZXMudW5zcGxhc2guY29tL3Bob3RvLTE2MzQxNDE3MzczNTctYmJlYzVjMWQyMWY2P2l4bGliPXJiLTQuMC4zJml4aWQ9TTN3eE1qQTNmREI4TUh4d2FHOTBieTF3WVdkbGZIeDhmR1Z1ZkRCOGZIeDhmQSUzRCUzRCZhdXRvPWZvcm1hdCZmaXQ9Y3JvcCZ3PTIwNzAmcT04MFwiXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIHVybDogXCJodHRwczovL2ltYWdlcy51bnNwbGFzaC5jb20vcGhvdG8tMTYxODQ5MjQwOTkzMy0yMGQ1NjI0Y2JmNzE/aXhsaWI9cmItNC4wLjMmaXhpZD1NM3d4TWpBM2ZEQjhNSHh3YUc5MGJ5MXdZV2RsZkh4OGZHVnVmREI4Zkh4OGZBJTNEJTNEJmF1dG89Zm9ybWF0JmZpdD1jcm9wJnc9MjA3MCZxPTgwXCJcbiAgICAgICAgfVxuICAgIF1cblxuICAgIGNvbnN0IFtjdXJyZW50SW5kZXgsIHNldEN1cnJlbnRJbmRleF0gPSB1c2VTdGF0ZSgwKTtcblxuICAgIGNvbnN0IHByZXZTbGlkZSA9ICgpID0+IHtcbiAgICAgICAgY29uc3QgaW5kZXggPSBjdXJyZW50SW5kZXggPiAwID8gY3VycmVudEluZGV4IC0gMSA6IHNsaWRlcy5sZW5ndGggLSAxXG4gICAgICAgIHNldEN1cnJlbnRJbmRleChpbmRleClcbiAgICB9O1xuXG4gICAgY29uc3QgbmV4dFNsaWRlID0gKCkgPT4ge1xuICAgICAgICBjb25zdCBpbmRleCA9IGN1cnJlbnRJbmRleCA8IHNsaWRlcy5sZW5ndGggLSAxID8gY3VycmVudEluZGV4ICsgMSA6IDBcbiAgICAgICAgc2V0Q3VycmVudEluZGV4KGluZGV4KVxuICAgIH07XG5cbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBjb25zdCBzbGlkZUludGVydmFsID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xuICAgICAgICAgICAgc2V0Q3VycmVudEluZGV4KGN1cnJlbnRJbmRleCA9PiBjdXJyZW50SW5kZXggPCBzbGlkZXMubGVuZ3RoIC0gMSA/IGN1cnJlbnRJbmRleCArIDEgOiAwKVxuICAgICAgICB9LCA2MDAwKVxuXG4gICAgICAgIHJldHVybiAoKSA9PiBjbGVhckludGVydmFsKHNsaWRlSW50ZXJ2YWwpXG4gICAgfSwgW10pXG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jYXJvdXNlbH0+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jYXJvdXNlbF9pbm5lcn0gc3R5bGU9e3sgdHJhbnNmb3JtOiBgdHJhbnNsYXRlWCgkey0gY3VycmVudEluZGV4ICogMTAwfSUpYH19PlxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzbGlkZXMubWFwKChpZCwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGtleT17aW5kZXh9IGNsYXNzTmFtZT17c3R5bGVzLmNhcm91c2VsX2lubmVyX2l0ZW19PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e2lkLnVybH0gYWx0PVwiXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIHsvKiA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNhcm91c2VsX2J1dHRvbnN9PlxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e3ByZXZTbGlkZX0+QW50ZXJpb3I8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtuZXh0U2xpZGV9PlByw7N4aW1hPC9idXR0b24+XG4gICAgICAgICAgICAgICAgPC9kaXY+ICovfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgIClcbn0iXSwibmFtZXMiOlsidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJzdHlsZXMiLCJJbWFnZVNsaWRlciIsInNsaWRlcyIsInVybCIsImN1cnJlbnRJbmRleCIsInNldEN1cnJlbnRJbmRleCIsInByZXZTbGlkZSIsImluZGV4IiwibGVuZ3RoIiwibmV4dFNsaWRlIiwic2xpZGVJbnRlcnZhbCIsInNldEludGVydmFsIiwiY2xlYXJJbnRlcnZhbCIsImRpdiIsImNsYXNzTmFtZSIsImNhcm91c2VsIiwiY2Fyb3VzZWxfaW5uZXIiLCJzdHlsZSIsInRyYW5zZm9ybSIsIm1hcCIsImlkIiwiY2Fyb3VzZWxfaW5uZXJfaXRlbSIsImltZyIsInNyYyIsImFsdCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/imageSlider.js\n"));

/***/ })

});