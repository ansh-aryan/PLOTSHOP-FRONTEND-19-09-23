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

/***/ "./components/ProductCard.js":
/*!***********************************!*\
  !*** ./components/ProductCard.js ***!
  \***********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _s = $RefreshSig$();\n\nconst ProductCard = (param)=>{\n    let { product, addToCart } = param;\n    _s();\n    const [quantity, setQuantity] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(product.quantity);\n    const handleIncrement = ()=>{\n        setQuantity(quantity + 1);\n    };\n    const handleDecrement = ()=>{\n        if (quantity > 1) {\n            setQuantity(quantity - 1);\n        }\n    };\n    const handleAddToCart = ()=>{\n        // Call the addToCart callback function with the product and quantity\n        addToCart(product.name, quantity, product.price, product.type, product.price * product.tax);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"lg:w-1/4 md:w-1/2 p-4 w-full border-4 border-teal-900\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                    className: \"block relative h-48 rounded overflow-hidden\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                        src: product.image,\n                        alt: product.name,\n                        className: \"object-cover object-center h-full block\"\n                    }, void 0, false, {\n                        fileName: \"/Users/ansh/Desktop Files/Plotline/PlotShop-Frontend-19-09-23/components/ProductCard.js\",\n                        lineNumber: 26,\n                        columnNumber: 11\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"/Users/ansh/Desktop Files/Plotline/PlotShop-Frontend-19-09-23/components/ProductCard.js\",\n                    lineNumber: 25,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"mt-4\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                            className: \"text-white title-font text-lg font-medium\",\n                            children: product.name\n                        }, void 0, false, {\n                            fileName: \"/Users/ansh/Desktop Files/Plotline/PlotShop-Frontend-19-09-23/components/ProductCard.js\",\n                            lineNumber: 33,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            className: \"mt-1\",\n                            children: [\n                                \"Rs \",\n                                product.price\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/ansh/Desktop Files/Plotline/PlotShop-Frontend-19-09-23/components/ProductCard.js\",\n                            lineNumber: 36,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            className: \"mt-1\",\n                            children: [\n                                \" \",\n                                product.type\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/ansh/Desktop Files/Plotline/PlotShop-Frontend-19-09-23/components/ProductCard.js\",\n                            lineNumber: 37,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"flex items-center space-x-4\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                    className: \"bg-teal-500 hover:bg-teal-600 text-white px-3 py-1 rounded\",\n                                    onClick: handleDecrement,\n                                    children: \"-\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/ansh/Desktop Files/Plotline/PlotShop-Frontend-19-09-23/components/ProductCard.js\",\n                                    lineNumber: 43,\n                                    columnNumber: 13\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                    className: \"text-xl\",\n                                    children: quantity\n                                }, void 0, false, {\n                                    fileName: \"/Users/ansh/Desktop Files/Plotline/PlotShop-Frontend-19-09-23/components/ProductCard.js\",\n                                    lineNumber: 49,\n                                    columnNumber: 13\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                    className: \"bg-teal-500 hover:bg-teal-600 text-white px-3 py-1 rounded\",\n                                    onClick: handleIncrement,\n                                    children: \"+\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/ansh/Desktop Files/Plotline/PlotShop-Frontend-19-09-23/components/ProductCard.js\",\n                                    lineNumber: 50,\n                                    columnNumber: 13\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                    className: \"bg-teal-500 hover:bg-teal-800 text-white px-4 py-2 rounded\",\n                                    onClick: handleAddToCart,\n                                    children: \"Add to Cart\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/ansh/Desktop Files/Plotline/PlotShop-Frontend-19-09-23/components/ProductCard.js\",\n                                    lineNumber: 57,\n                                    columnNumber: 13\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/ansh/Desktop Files/Plotline/PlotShop-Frontend-19-09-23/components/ProductCard.js\",\n                            lineNumber: 42,\n                            columnNumber: 11\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/ansh/Desktop Files/Plotline/PlotShop-Frontend-19-09-23/components/ProductCard.js\",\n                    lineNumber: 32,\n                    columnNumber: 9\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/ansh/Desktop Files/Plotline/PlotShop-Frontend-19-09-23/components/ProductCard.js\",\n            lineNumber: 24,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false);\n};\n_s(ProductCard, \"/lUgfl6PpQDF4SgpgF5febti0GY=\");\n_c = ProductCard;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ProductCard);\nvar _c;\n$RefreshReg$(_c, \"ProductCard\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL1Byb2R1Y3RDYXJkLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBd0M7QUFFeEMsTUFBTUUsY0FBYztRQUFDLEVBQUVDLE9BQU8sRUFBRUMsU0FBUyxFQUFFOztJQUN6QyxNQUFNLENBQUNDLFVBQVVDLFlBQVksR0FBR0wsK0NBQVFBLENBQUNFLFFBQVFFLFFBQVE7SUFFekQsTUFBTUUsa0JBQWtCO1FBQ3RCRCxZQUFZRCxXQUFXO0lBQ3pCO0lBRUEsTUFBTUcsa0JBQWtCO1FBQ3RCLElBQUlILFdBQVcsR0FBRztZQUNoQkMsWUFBWUQsV0FBVztRQUN6QjtJQUNGO0lBRUEsTUFBTUksa0JBQWtCO1FBRXRCLHFFQUFxRTtRQUNyRUwsVUFBVUQsUUFBUU8sSUFBSSxFQUFFTCxVQUFVRixRQUFRUSxLQUFLLEVBQUVSLFFBQVFTLElBQUksRUFBRVQsUUFBUVEsS0FBSyxHQUFHUixRQUFRVSxHQUFHO0lBQzVGO0lBRUEscUJBQ0U7a0JBQ0UsNEVBQUNDO1lBQUlDLFdBQVU7OzhCQUNiLDhEQUFDQztvQkFBRUQsV0FBVTs4QkFDWCw0RUFBQ0U7d0JBQ0NDLEtBQUtmLFFBQVFnQixLQUFLO3dCQUNsQkMsS0FBS2pCLFFBQVFPLElBQUk7d0JBQ2pCSyxXQUFVOzs7Ozs7Ozs7Ozs4QkFHZCw4REFBQ0Q7b0JBQUlDLFdBQVU7O3NDQUNiLDhEQUFDTTs0QkFBR04sV0FBVTtzQ0FDWFosUUFBUU8sSUFBSTs7Ozs7O3NDQUVmLDhEQUFDWTs0QkFBRVAsV0FBVTs7Z0NBQU87Z0NBQUlaLFFBQVFRLEtBQUs7Ozs7Ozs7c0NBQ3JDLDhEQUFDVzs0QkFBRVAsV0FBVTs7Z0NBQU87Z0NBQUVaLFFBQVFTLElBQUk7Ozs7Ozs7c0NBS2xDLDhEQUFDRTs0QkFBSUMsV0FBVTs7OENBQ2IsOERBQUNRO29DQUNDUixXQUFVO29DQUNWUyxTQUFTaEI7OENBQ1Y7Ozs7Ozs4Q0FHRCw4REFBQ2lCO29DQUFLVixXQUFVOzhDQUFXVjs7Ozs7OzhDQUMzQiw4REFBQ2tCO29DQUNDUixXQUFVO29DQUNWUyxTQUFTakI7OENBQ1Y7Ozs7Ozs4Q0FJRCw4REFBQ2dCO29DQUNDUixXQUFVO29DQUNWUyxTQUFTZjs4Q0FDVjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQVFiO0dBakVNUDtLQUFBQTtBQW1FTiwrREFBZUEsV0FBV0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL1Byb2R1Y3RDYXJkLmpzP2M5YTMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5cbmNvbnN0IFByb2R1Y3RDYXJkID0gKHsgcHJvZHVjdCwgYWRkVG9DYXJ0IH0pID0+IHtcbiAgY29uc3QgW3F1YW50aXR5LCBzZXRRdWFudGl0eV0gPSB1c2VTdGF0ZShwcm9kdWN0LnF1YW50aXR5KTtcblxuICBjb25zdCBoYW5kbGVJbmNyZW1lbnQgPSAoKSA9PiB7XG4gICAgc2V0UXVhbnRpdHkocXVhbnRpdHkgKyAxKTtcbiAgfTtcblxuICBjb25zdCBoYW5kbGVEZWNyZW1lbnQgPSAoKSA9PiB7XG4gICAgaWYgKHF1YW50aXR5ID4gMSkge1xuICAgICAgc2V0UXVhbnRpdHkocXVhbnRpdHkgLSAxKTtcbiAgICB9XG4gIH07XG5cbiAgY29uc3QgaGFuZGxlQWRkVG9DYXJ0ID0gKCkgPT4ge1xuICAgIFxuICAgIC8vIENhbGwgdGhlIGFkZFRvQ2FydCBjYWxsYmFjayBmdW5jdGlvbiB3aXRoIHRoZSBwcm9kdWN0IGFuZCBxdWFudGl0eVxuICAgIGFkZFRvQ2FydChwcm9kdWN0Lm5hbWUsIHF1YW50aXR5LCBwcm9kdWN0LnByaWNlLCBwcm9kdWN0LnR5cGUsIHByb2R1Y3QucHJpY2UgKiBwcm9kdWN0LnRheCk7XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJsZzp3LTEvNCBtZDp3LTEvMiBwLTQgdy1mdWxsIGJvcmRlci00IGJvcmRlci10ZWFsLTkwMFwiPlxuICAgICAgICA8YSBjbGFzc05hbWU9XCJibG9jayByZWxhdGl2ZSBoLTQ4IHJvdW5kZWQgb3ZlcmZsb3ctaGlkZGVuXCI+XG4gICAgICAgICAgPGltZ1xuICAgICAgICAgICAgc3JjPXtwcm9kdWN0LmltYWdlfVxuICAgICAgICAgICAgYWx0PXtwcm9kdWN0Lm5hbWV9XG4gICAgICAgICAgICBjbGFzc05hbWU9XCJvYmplY3QtY292ZXIgb2JqZWN0LWNlbnRlciBoLWZ1bGwgYmxvY2tcIlxuICAgICAgICAgIC8+XG4gICAgICAgIDwvYT5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtdC00XCI+XG4gICAgICAgICAgPGgyIGNsYXNzTmFtZT1cInRleHQtd2hpdGUgdGl0bGUtZm9udCB0ZXh0LWxnIGZvbnQtbWVkaXVtXCI+XG4gICAgICAgICAgICB7cHJvZHVjdC5uYW1lfVxuICAgICAgICAgIDwvaDI+XG4gICAgICAgICAgPHAgY2xhc3NOYW1lPVwibXQtMVwiPlJzIHtwcm9kdWN0LnByaWNlfTwvcD5cbiAgICAgICAgICA8cCBjbGFzc05hbWU9XCJtdC0xXCI+IHtwcm9kdWN0LnR5cGV9PC9wPlxuICAgICAgICAgIHsvKiA8YnV0dG9uIGNsYXNzTmFtZT1cImlubGluZS1mbGV4IHRleHQtd2hpdGUgYmctcHVycGxlLTYwMCBteS0yIGJvcmRlci0wIHB5LTEgcHgtNiBmb2N1czpvdXRsaW5lLW5vbmUgaG92ZXI6YmctcHVycGxlLTkwMCByb3VuZGVkIHRleHQtbGcgaG92ZXI6c2hhZG93LXNtIGhvdmVyOnNoYWRvdy1wdXJwbGUtNDAwLzUwXCI+XG4gICAgICAgICAgICBBRERcbiAgICAgICAgICA8L2J1dHRvbj4gKi99XG5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIHNwYWNlLXgtNFwiPlxuICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJiZy10ZWFsLTUwMCBob3ZlcjpiZy10ZWFsLTYwMCB0ZXh0LXdoaXRlIHB4LTMgcHktMSByb3VuZGVkXCJcbiAgICAgICAgICAgICAgb25DbGljaz17aGFuZGxlRGVjcmVtZW50fVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAtXG4gICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQteGxcIj57cXVhbnRpdHl9PC9zcGFuPlxuICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJiZy10ZWFsLTUwMCBob3ZlcjpiZy10ZWFsLTYwMCB0ZXh0LXdoaXRlIHB4LTMgcHktMSByb3VuZGVkXCJcbiAgICAgICAgICAgICAgb25DbGljaz17aGFuZGxlSW5jcmVtZW50fVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICArXG4gICAgICAgICAgICA8L2J1dHRvbj5cblxuICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJiZy10ZWFsLTUwMCBob3ZlcjpiZy10ZWFsLTgwMCB0ZXh0LXdoaXRlIHB4LTQgcHktMiByb3VuZGVkXCJcbiAgICAgICAgICAgICAgb25DbGljaz17aGFuZGxlQWRkVG9DYXJ0fVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICBBZGQgdG8gQ2FydFxuICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC8+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBQcm9kdWN0Q2FyZDtcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwiUHJvZHVjdENhcmQiLCJwcm9kdWN0IiwiYWRkVG9DYXJ0IiwicXVhbnRpdHkiLCJzZXRRdWFudGl0eSIsImhhbmRsZUluY3JlbWVudCIsImhhbmRsZURlY3JlbWVudCIsImhhbmRsZUFkZFRvQ2FydCIsIm5hbWUiLCJwcmljZSIsInR5cGUiLCJ0YXgiLCJkaXYiLCJjbGFzc05hbWUiLCJhIiwiaW1nIiwic3JjIiwiaW1hZ2UiLCJhbHQiLCJoMiIsInAiLCJidXR0b24iLCJvbkNsaWNrIiwic3BhbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/ProductCard.js\n"));

/***/ })

});