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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _s = $RefreshSig$();\n\nconst ProductCard = (param)=>{\n    let { product, addToCart } = param;\n    _s();\n    const [quantity, setQuantity] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(product.quantity);\n    const handleIncrement = ()=>{\n        setQuantity(quantity + 1);\n    };\n    const handleDecrement = ()=>{\n        if (quantity > 1) {\n            setQuantity(quantity - 1);\n        }\n    };\n    const handleAddToCart = ()=>{\n        if (parseInt(product.quantity) > 0) {\n            var tax = 0;\n            if (product.type == \"Product\") {\n                if (product.price > 5000) tax = 0.18 * product.price;\n                else if (product.price > 1000 && product.price <= 5000) tax = 0.12 * product.price;\n                else tax = 200;\n            } else {\n                if (product.price > 8000) tax = 0.15 * Price;\n                else if (product.price > 1000 && product.price <= 8000) tax = 0.10 * product.price;\n                else tax = 100;\n            }\n            // Call the addToCart callback function with the product and quantity\n            addToCart(product.name, quantity, product.price, product.type, parseFloat(tax).toFixed(2));\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"lg:w-1/4 md:w-1/2 p-4 w-full border-4 border-teal-900\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                    className: \"block relative h-48 rounded overflow-hidden\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                        src: product.image,\n                        alt: product.name,\n                        className: \"object-cover object-center h-full block\"\n                    }, void 0, false, {\n                        fileName: \"/Users/ansh/Desktop Files/Plotline/PlotShop-Frontend-19-09-23/components/ProductCard.js\",\n                        lineNumber: 39,\n                        columnNumber: 11\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"/Users/ansh/Desktop Files/Plotline/PlotShop-Frontend-19-09-23/components/ProductCard.js\",\n                    lineNumber: 38,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"mt-4\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                            className: \"text-white title-font text-lg font-medium\",\n                            children: product.name\n                        }, void 0, false, {\n                            fileName: \"/Users/ansh/Desktop Files/Plotline/PlotShop-Frontend-19-09-23/components/ProductCard.js\",\n                            lineNumber: 46,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            className: \"mt-1\",\n                            children: [\n                                \"Rs \",\n                                product.price\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/ansh/Desktop Files/Plotline/PlotShop-Frontend-19-09-23/components/ProductCard.js\",\n                            lineNumber: 49,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            className: \"mt-1\",\n                            children: [\n                                \" \",\n                                product.type\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/ansh/Desktop Files/Plotline/PlotShop-Frontend-19-09-23/components/ProductCard.js\",\n                            lineNumber: 50,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"flex items-center space-x-4\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                    className: \"bg-teal-500 hover:bg-teal-600 text-white px-3 py-1 rounded\",\n                                    onClick: handleDecrement,\n                                    children: \"-\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/ansh/Desktop Files/Plotline/PlotShop-Frontend-19-09-23/components/ProductCard.js\",\n                                    lineNumber: 56,\n                                    columnNumber: 13\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                    className: \"text-xl\",\n                                    children: quantity\n                                }, void 0, false, {\n                                    fileName: \"/Users/ansh/Desktop Files/Plotline/PlotShop-Frontend-19-09-23/components/ProductCard.js\",\n                                    lineNumber: 62,\n                                    columnNumber: 13\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                    className: \"bg-teal-500 hover:bg-teal-600 text-white px-3 py-1 rounded\",\n                                    onClick: handleIncrement,\n                                    children: \"+\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/ansh/Desktop Files/Plotline/PlotShop-Frontend-19-09-23/components/ProductCard.js\",\n                                    lineNumber: 63,\n                                    columnNumber: 13\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                    className: \"bg-teal-500 hover:bg-teal-800 text-white px-4 py-2 rounded\",\n                                    onClick: handleAddToCart,\n                                    children: \"Add to Cart\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/ansh/Desktop Files/Plotline/PlotShop-Frontend-19-09-23/components/ProductCard.js\",\n                                    lineNumber: 70,\n                                    columnNumber: 13\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/ansh/Desktop Files/Plotline/PlotShop-Frontend-19-09-23/components/ProductCard.js\",\n                            lineNumber: 55,\n                            columnNumber: 11\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/ansh/Desktop Files/Plotline/PlotShop-Frontend-19-09-23/components/ProductCard.js\",\n                    lineNumber: 45,\n                    columnNumber: 9\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/ansh/Desktop Files/Plotline/PlotShop-Frontend-19-09-23/components/ProductCard.js\",\n            lineNumber: 37,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false);\n};\n_s(ProductCard, \"/lUgfl6PpQDF4SgpgF5febti0GY=\");\n_c = ProductCard;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ProductCard);\nvar _c;\n$RefreshReg$(_c, \"ProductCard\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL1Byb2R1Y3RDYXJkLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBd0M7QUFFeEMsTUFBTUUsY0FBYztRQUFDLEVBQUVDLE9BQU8sRUFBRUMsU0FBUyxFQUFFOztJQUN6QyxNQUFNLENBQUNDLFVBQVVDLFlBQVksR0FBR0wsK0NBQVFBLENBQUNFLFFBQVFFLFFBQVE7SUFFekQsTUFBTUUsa0JBQWtCO1FBQ3RCRCxZQUFZRCxXQUFXO0lBQ3pCO0lBRUEsTUFBTUcsa0JBQWtCO1FBQ3RCLElBQUlILFdBQVcsR0FBRztZQUNoQkMsWUFBWUQsV0FBVztRQUN6QjtJQUNGO0lBRUEsTUFBTUksa0JBQWtCO1FBQ3RCLElBQUdDLFNBQVNQLFFBQVFFLFFBQVEsSUFBRSxHQUFFO1lBQzlCLElBQUlNLE1BQU07WUFDVixJQUFHUixRQUFRUyxJQUFJLElBQUksV0FBVTtnQkFDM0IsSUFBR1QsUUFBUVUsS0FBSyxHQUFDLE1BQU1GLE1BQU0sT0FBS1IsUUFBUVUsS0FBSztxQkFDMUMsSUFBR1YsUUFBUVUsS0FBSyxHQUFDLFFBQVFWLFFBQVFVLEtBQUssSUFBRSxNQUFNRixNQUFNLE9BQUtSLFFBQVFVLEtBQUs7cUJBQ3RFRixNQUFNO1lBQ2YsT0FBSztnQkFDRCxJQUFHUixRQUFRVSxLQUFLLEdBQUMsTUFBTUYsTUFBTSxPQUFLRztxQkFDN0IsSUFBR1gsUUFBUVUsS0FBSyxHQUFDLFFBQVFWLFFBQVFVLEtBQUssSUFBRSxNQUFNRixNQUFNLE9BQUtSLFFBQVFVLEtBQUs7cUJBQ3RFRixNQUFNO1lBQ2Y7WUFFQSxxRUFBcUU7WUFDckVQLFVBQVVELFFBQVFZLElBQUksRUFBRVYsVUFBVUYsUUFBUVUsS0FBSyxFQUFFVixRQUFRUyxJQUFJLEVBQUVJLFdBQVdMLEtBQUtNLE9BQU8sQ0FBQztRQUN2RjtJQUVGO0lBRUEscUJBQ0U7a0JBQ0UsNEVBQUNDO1lBQUlDLFdBQVU7OzhCQUNiLDhEQUFDQztvQkFBRUQsV0FBVTs4QkFDWCw0RUFBQ0U7d0JBQ0NDLEtBQUtuQixRQUFRb0IsS0FBSzt3QkFDbEJDLEtBQUtyQixRQUFRWSxJQUFJO3dCQUNqQkksV0FBVTs7Ozs7Ozs7Ozs7OEJBR2QsOERBQUNEO29CQUFJQyxXQUFVOztzQ0FDYiw4REFBQ007NEJBQUdOLFdBQVU7c0NBQ1hoQixRQUFRWSxJQUFJOzs7Ozs7c0NBRWYsOERBQUNXOzRCQUFFUCxXQUFVOztnQ0FBTztnQ0FBSWhCLFFBQVFVLEtBQUs7Ozs7Ozs7c0NBQ3JDLDhEQUFDYTs0QkFBRVAsV0FBVTs7Z0NBQU87Z0NBQUVoQixRQUFRUyxJQUFJOzs7Ozs7O3NDQUtsQyw4REFBQ007NEJBQUlDLFdBQVU7OzhDQUNiLDhEQUFDUTtvQ0FDQ1IsV0FBVTtvQ0FDVlMsU0FBU3BCOzhDQUNWOzs7Ozs7OENBR0QsOERBQUNxQjtvQ0FBS1YsV0FBVTs4Q0FBV2Q7Ozs7Ozs4Q0FDM0IsOERBQUNzQjtvQ0FDQ1IsV0FBVTtvQ0FDVlMsU0FBU3JCOzhDQUNWOzs7Ozs7OENBSUQsOERBQUNvQjtvQ0FDQ1IsV0FBVTtvQ0FDVlMsU0FBU25COzhDQUNWOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBUWI7R0E5RU1QO0tBQUFBO0FBZ0ZOLCtEQUFlQSxXQUFXQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvUHJvZHVjdENhcmQuanM/YzlhMyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcblxuY29uc3QgUHJvZHVjdENhcmQgPSAoeyBwcm9kdWN0LCBhZGRUb0NhcnQgfSkgPT4ge1xuICBjb25zdCBbcXVhbnRpdHksIHNldFF1YW50aXR5XSA9IHVzZVN0YXRlKHByb2R1Y3QucXVhbnRpdHkpO1xuXG4gIGNvbnN0IGhhbmRsZUluY3JlbWVudCA9ICgpID0+IHtcbiAgICBzZXRRdWFudGl0eShxdWFudGl0eSArIDEpO1xuICB9O1xuXG4gIGNvbnN0IGhhbmRsZURlY3JlbWVudCA9ICgpID0+IHtcbiAgICBpZiAocXVhbnRpdHkgPiAxKSB7XG4gICAgICBzZXRRdWFudGl0eShxdWFudGl0eSAtIDEpO1xuICAgIH1cbiAgfTtcblxuICBjb25zdCBoYW5kbGVBZGRUb0NhcnQgPSAoKSA9PiB7XG4gICAgaWYocGFyc2VJbnQocHJvZHVjdC5xdWFudGl0eSk+MCl7XG4gICAgICB2YXIgdGF4ID0gMDtcbiAgICAgIGlmKHByb2R1Y3QudHlwZSA9PSBcIlByb2R1Y3RcIil7XG4gICAgICAgIGlmKHByb2R1Y3QucHJpY2U+NTAwMCkgdGF4ID0gMC4xOCpwcm9kdWN0LnByaWNlXG4gICAgICAgIGVsc2UgaWYocHJvZHVjdC5wcmljZT4xMDAwICYmIHByb2R1Y3QucHJpY2U8PTUwMDApIHRheCA9IDAuMTIqcHJvZHVjdC5wcmljZVxuICAgICAgICBlbHNlIHRheCA9IDIwMFxuICAgIH1lbHNle1xuICAgICAgICBpZihwcm9kdWN0LnByaWNlPjgwMDApIHRheCA9IDAuMTUqUHJpY2VcbiAgICAgICAgZWxzZSBpZihwcm9kdWN0LnByaWNlPjEwMDAgJiYgcHJvZHVjdC5wcmljZTw9ODAwMCkgdGF4ID0gMC4xMCpwcm9kdWN0LnByaWNlXG4gICAgICAgIGVsc2UgdGF4ID0gMTAwXG4gICAgfVxuXG4gICAgLy8gQ2FsbCB0aGUgYWRkVG9DYXJ0IGNhbGxiYWNrIGZ1bmN0aW9uIHdpdGggdGhlIHByb2R1Y3QgYW5kIHF1YW50aXR5XG4gICAgYWRkVG9DYXJ0KHByb2R1Y3QubmFtZSwgcXVhbnRpdHksIHByb2R1Y3QucHJpY2UsIHByb2R1Y3QudHlwZSwgcGFyc2VGbG9hdCh0YXgpLnRvRml4ZWQoMikpO1xuICAgIH1cbiAgICBcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImxnOnctMS80IG1kOnctMS8yIHAtNCB3LWZ1bGwgYm9yZGVyLTQgYm9yZGVyLXRlYWwtOTAwXCI+XG4gICAgICAgIDxhIGNsYXNzTmFtZT1cImJsb2NrIHJlbGF0aXZlIGgtNDggcm91bmRlZCBvdmVyZmxvdy1oaWRkZW5cIj5cbiAgICAgICAgICA8aW1nXG4gICAgICAgICAgICBzcmM9e3Byb2R1Y3QuaW1hZ2V9XG4gICAgICAgICAgICBhbHQ9e3Byb2R1Y3QubmFtZX1cbiAgICAgICAgICAgIGNsYXNzTmFtZT1cIm9iamVjdC1jb3ZlciBvYmplY3QtY2VudGVyIGgtZnVsbCBibG9ja1wiXG4gICAgICAgICAgLz5cbiAgICAgICAgPC9hPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm10LTRcIj5cbiAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwidGV4dC13aGl0ZSB0aXRsZS1mb250IHRleHQtbGcgZm9udC1tZWRpdW1cIj5cbiAgICAgICAgICAgIHtwcm9kdWN0Lm5hbWV9XG4gICAgICAgICAgPC9oMj5cbiAgICAgICAgICA8cCBjbGFzc05hbWU9XCJtdC0xXCI+UnMge3Byb2R1Y3QucHJpY2V9PC9wPlxuICAgICAgICAgIDxwIGNsYXNzTmFtZT1cIm10LTFcIj4ge3Byb2R1Y3QudHlwZX08L3A+XG4gICAgICAgICAgey8qIDxidXR0b24gY2xhc3NOYW1lPVwiaW5saW5lLWZsZXggdGV4dC13aGl0ZSBiZy1wdXJwbGUtNjAwIG15LTIgYm9yZGVyLTAgcHktMSBweC02IGZvY3VzOm91dGxpbmUtbm9uZSBob3ZlcjpiZy1wdXJwbGUtOTAwIHJvdW5kZWQgdGV4dC1sZyBob3ZlcjpzaGFkb3ctc20gaG92ZXI6c2hhZG93LXB1cnBsZS00MDAvNTBcIj5cbiAgICAgICAgICAgIEFERFxuICAgICAgICAgIDwvYnV0dG9uPiAqL31cblxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIgc3BhY2UteC00XCI+XG4gICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJnLXRlYWwtNTAwIGhvdmVyOmJnLXRlYWwtNjAwIHRleHQtd2hpdGUgcHgtMyBweS0xIHJvdW5kZWRcIlxuICAgICAgICAgICAgICBvbkNsaWNrPXtoYW5kbGVEZWNyZW1lbnR9XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIC1cbiAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC14bFwiPntxdWFudGl0eX08L3NwYW4+XG4gICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJnLXRlYWwtNTAwIGhvdmVyOmJnLXRlYWwtNjAwIHRleHQtd2hpdGUgcHgtMyBweS0xIHJvdW5kZWRcIlxuICAgICAgICAgICAgICBvbkNsaWNrPXtoYW5kbGVJbmNyZW1lbnR9XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgICtcbiAgICAgICAgICAgIDwvYnV0dG9uPlxuXG4gICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJnLXRlYWwtNTAwIGhvdmVyOmJnLXRlYWwtODAwIHRleHQtd2hpdGUgcHgtNCBweS0yIHJvdW5kZWRcIlxuICAgICAgICAgICAgICBvbkNsaWNrPXtoYW5kbGVBZGRUb0NhcnR9XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIEFkZCB0byBDYXJ0XG4gICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8Lz5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFByb2R1Y3RDYXJkO1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJQcm9kdWN0Q2FyZCIsInByb2R1Y3QiLCJhZGRUb0NhcnQiLCJxdWFudGl0eSIsInNldFF1YW50aXR5IiwiaGFuZGxlSW5jcmVtZW50IiwiaGFuZGxlRGVjcmVtZW50IiwiaGFuZGxlQWRkVG9DYXJ0IiwicGFyc2VJbnQiLCJ0YXgiLCJ0eXBlIiwicHJpY2UiLCJQcmljZSIsIm5hbWUiLCJwYXJzZUZsb2F0IiwidG9GaXhlZCIsImRpdiIsImNsYXNzTmFtZSIsImEiLCJpbWciLCJzcmMiLCJpbWFnZSIsImFsdCIsImgyIiwicCIsImJ1dHRvbiIsIm9uQ2xpY2siLCJzcGFuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/ProductCard.js\n"));

/***/ })

});