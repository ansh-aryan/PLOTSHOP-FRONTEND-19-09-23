"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/checkout",{

/***/ "./pages/checkout.js":
/*!***************************!*\
  !*** ./pages/checkout.js ***!
  \***************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n\nvar _s = $RefreshSig$();\n\n\nconst Checkout = ()=>{\n    _s();\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    const { cart } = router.query;\n    console.log(\"____________________________\");\n    console.log(typeof cart);\n    console.log(\"____________________________\");\n    const productCart = JSON.parse(cart);\n    const [isBill, setIsBill] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [isTax, setIsTax] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [totalBill, setTotalBill] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    const [totalTax, setTotalTax] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    const generateBill = ()=>{\n        // Define the URL of your backend server\n        const backendURL = \"http://localhost:8000\"; // Replace with your actual server URL\n        // Make a POST request to calculate the total bill\n        fetch(\"\".concat(backendURL, \"/total-bill\"), {\n            method: \"POST\",\n            headers: {\n                \"Content-Type\": \"application/json\"\n            },\n            body: JSON.stringify({\n                cart\n            })\n        }).then((response)=>{\n            if (!response.ok) {\n                throw new Error(\"Network response was not ok: \".concat(response.status));\n            }\n            return response.json();\n        }).then((data)=>{\n            // Handle the data received from the server\n            const totalBill = data.totalBill;\n            setTotalBill(totalBill);\n            setIsBill(true);\n            console.log(\"Total Bill: $\".concat(totalBill));\n        }).catch((error)=>{\n            // Handle any errors that occurred during the fetch\n            console.error(\"Fetch Error:\", error);\n        });\n        fetch(\"\".concat(backendURL, \"/total-tax\"), {\n            method: \"POST\",\n            headers: {\n                \"Content-Type\": \"application/json\"\n            },\n            body: JSON.stringify({\n                cart\n            })\n        }).then((response)=>{\n            if (!response.ok) {\n                throw new Error(\"Network response was not ok: \".concat(response.status));\n            }\n            return response.json();\n        }).then((data)=>{\n            // Handle the data received from the server\n            const totalTax = data.totalTax;\n            setTotalTax(totalTax);\n            setIsTax(true);\n            console.log(\"Total Bill: $\".concat(totalTax));\n        }).catch((error)=>{\n            // Handle any errors that occurred during the fetch\n            console.error(\"Fetch Error:\", error);\n        });\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {}, void 0, false);\n};\n_s(Checkout, \"C9Q5ol103gxmHqAeNiB73DEf4gk=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter\n    ];\n});\n_c = Checkout;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Checkout);\nvar _c;\n$RefreshReg$(_c, \"Checkout\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9jaGVja291dC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBd0M7QUFDQTtBQUV4QyxNQUFNRyxXQUFXOztJQUNmLE1BQU1DLFNBQVNGLHNEQUFTQTtJQUN4QixNQUFNLEVBQUVHLElBQUksRUFBRSxHQUFHRCxPQUFPRSxLQUFLO0lBQzdCQyxRQUFRQyxHQUFHLENBQUM7SUFDWkQsUUFBUUMsR0FBRyxDQUFDLE9BQU9IO0lBQ25CRSxRQUFRQyxHQUFHLENBQUM7SUFDWixNQUFNQyxjQUFjQyxLQUFLQyxLQUFLLENBQUNOO0lBQy9CLE1BQU0sQ0FBQ08sUUFBUUMsVUFBVSxHQUFHWiwrQ0FBUUEsQ0FBQztJQUNyQyxNQUFNLENBQUNhLE9BQU9DLFNBQVMsR0FBR2QsK0NBQVFBLENBQUM7SUFDbkMsTUFBTSxDQUFDZSxXQUFXQyxhQUFhLEdBQUdoQiwrQ0FBUUEsQ0FBQztJQUMzQyxNQUFNLENBQUNpQixVQUFVQyxZQUFZLEdBQUdsQiwrQ0FBUUEsQ0FBQztJQUN6QyxNQUFNbUIsZUFBZTtRQUNuQix3Q0FBd0M7UUFDeEMsTUFBTUMsYUFBYSx5QkFBeUIsc0NBQXNDO1FBRWxGLGtEQUFrRDtRQUNsREMsTUFBTSxHQUFjLE9BQVhELFlBQVcsZ0JBQWM7WUFDaENFLFFBQVE7WUFDUkMsU0FBUztnQkFDUCxnQkFBZ0I7WUFDbEI7WUFDQUMsTUFBTWYsS0FBS2dCLFNBQVMsQ0FBQztnQkFBRXJCO1lBQUs7UUFDOUIsR0FDR3NCLElBQUksQ0FBQyxDQUFDQztZQUNMLElBQUksQ0FBQ0EsU0FBU0MsRUFBRSxFQUFFO2dCQUNoQixNQUFNLElBQUlDLE1BQU0sZ0NBQWdELE9BQWhCRixTQUFTRyxNQUFNO1lBQ2pFO1lBQ0EsT0FBT0gsU0FBU0ksSUFBSTtRQUN0QixHQUNDTCxJQUFJLENBQUMsQ0FBQ007WUFDTCwyQ0FBMkM7WUFDM0MsTUFBTWpCLFlBQVlpQixLQUFLakIsU0FBUztZQUNoQ0MsYUFBYUQ7WUFDYkgsVUFBVTtZQUNWTixRQUFRQyxHQUFHLENBQUMsZ0JBQTBCLE9BQVZRO1FBQzlCLEdBQ0NrQixLQUFLLENBQUMsQ0FBQ0M7WUFDTixtREFBbUQ7WUFDbkQ1QixRQUFRNEIsS0FBSyxDQUFDLGdCQUFnQkE7UUFDaEM7UUFFQWIsTUFBTSxHQUFjLE9BQVhELFlBQVcsZUFBYTtZQUMvQkUsUUFBUTtZQUNSQyxTQUFTO2dCQUNQLGdCQUFnQjtZQUNsQjtZQUNBQyxNQUFNZixLQUFLZ0IsU0FBUyxDQUFDO2dCQUFFckI7WUFBSztRQUM5QixHQUNHc0IsSUFBSSxDQUFDLENBQUNDO1lBQ0wsSUFBSSxDQUFDQSxTQUFTQyxFQUFFLEVBQUU7Z0JBQ2hCLE1BQU0sSUFBSUMsTUFBTSxnQ0FBZ0QsT0FBaEJGLFNBQVNHLE1BQU07WUFDakU7WUFDQSxPQUFPSCxTQUFTSSxJQUFJO1FBQ3RCLEdBQ0NMLElBQUksQ0FBQyxDQUFDTTtZQUNMLDJDQUEyQztZQUMzQyxNQUFNZixXQUFXZSxLQUFLZixRQUFRO1lBQzlCQyxZQUFZRDtZQUNaSCxTQUFTO1lBQ1RSLFFBQVFDLEdBQUcsQ0FBQyxnQkFBeUIsT0FBVFU7UUFDOUIsR0FDQ2dCLEtBQUssQ0FBQyxDQUFDQztZQUNOLG1EQUFtRDtZQUNuRDVCLFFBQVE0QixLQUFLLENBQUMsZ0JBQWdCQTtRQUNoQztJQUNOO0lBRUEscUJBQ0U7QUFrR0o7R0F0S01oQzs7UUFDV0Qsa0RBQVNBOzs7S0FEcEJDO0FBd0tOLCtEQUFlQSxRQUFRQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2NoZWNrb3V0LmpzP2UwMWMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcblxuY29uc3QgQ2hlY2tvdXQgPSAoKSA9PiB7XG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuICBjb25zdCB7IGNhcnQgfSA9IHJvdXRlci5xdWVyeTtcbiAgY29uc29sZS5sb2coXCJfX19fX19fX19fX19fX19fX19fX19fX19fX19fXCIpO1xuICBjb25zb2xlLmxvZyh0eXBlb2YoY2FydCkpO1xuICBjb25zb2xlLmxvZyhcIl9fX19fX19fX19fX19fX19fX19fX19fX19fX19cIik7XG4gIGNvbnN0IHByb2R1Y3RDYXJ0ID0gSlNPTi5wYXJzZShjYXJ0KTtcbiAgY29uc3QgW2lzQmlsbCwgc2V0SXNCaWxsXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgW2lzVGF4LCBzZXRJc1RheF0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IFt0b3RhbEJpbGwsIHNldFRvdGFsQmlsbF0gPSB1c2VTdGF0ZSgwKTtcbiAgY29uc3QgW3RvdGFsVGF4LCBzZXRUb3RhbFRheF0gPSB1c2VTdGF0ZSgwKTtcbiAgY29uc3QgZ2VuZXJhdGVCaWxsID0gKCkgPT4ge1xuICAgIC8vIERlZmluZSB0aGUgVVJMIG9mIHlvdXIgYmFja2VuZCBzZXJ2ZXJcbiAgICBjb25zdCBiYWNrZW5kVVJMID0gXCJodHRwOi8vbG9jYWxob3N0OjgwMDBcIjsgLy8gUmVwbGFjZSB3aXRoIHlvdXIgYWN0dWFsIHNlcnZlciBVUkxcblxuICAgIC8vIE1ha2UgYSBQT1NUIHJlcXVlc3QgdG8gY2FsY3VsYXRlIHRoZSB0b3RhbCBiaWxsXG4gICAgZmV0Y2goYCR7YmFja2VuZFVSTH0vdG90YWwtYmlsbGAsIHtcbiAgICAgIG1ldGhvZDogXCJQT1NUXCIsXG4gICAgICBoZWFkZXJzOiB7XG4gICAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiLFxuICAgICAgfSxcbiAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHsgY2FydCB9KSxcbiAgICB9KVxuICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgIGlmICghcmVzcG9uc2Uub2spIHtcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYE5ldHdvcmsgcmVzcG9uc2Ugd2FzIG5vdCBvazogJHtyZXNwb25zZS5zdGF0dXN9YCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJlc3BvbnNlLmpzb24oKTtcbiAgICAgIH0pXG4gICAgICAudGhlbigoZGF0YSkgPT4ge1xuICAgICAgICAvLyBIYW5kbGUgdGhlIGRhdGEgcmVjZWl2ZWQgZnJvbSB0aGUgc2VydmVyXG4gICAgICAgIGNvbnN0IHRvdGFsQmlsbCA9IGRhdGEudG90YWxCaWxsO1xuICAgICAgICBzZXRUb3RhbEJpbGwodG90YWxCaWxsKTtcbiAgICAgICAgc2V0SXNCaWxsKHRydWUpO1xuICAgICAgICBjb25zb2xlLmxvZyhgVG90YWwgQmlsbDogJCR7dG90YWxCaWxsfWApO1xuICAgICAgfSlcbiAgICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcbiAgICAgICAgLy8gSGFuZGxlIGFueSBlcnJvcnMgdGhhdCBvY2N1cnJlZCBkdXJpbmcgdGhlIGZldGNoXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoXCJGZXRjaCBFcnJvcjpcIiwgZXJyb3IpO1xuICAgICAgfSk7XG5cbiAgICAgIGZldGNoKGAke2JhY2tlbmRVUkx9L3RvdGFsLXRheGAsIHtcbiAgICAgICAgbWV0aG9kOiBcIlBPU1RcIixcbiAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiLFxuICAgICAgICB9LFxuICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7IGNhcnQgfSksXG4gICAgICB9KVxuICAgICAgICAudGhlbigocmVzcG9uc2UpID0+IHtcbiAgICAgICAgICBpZiAoIXJlc3BvbnNlLm9rKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYE5ldHdvcmsgcmVzcG9uc2Ugd2FzIG5vdCBvazogJHtyZXNwb25zZS5zdGF0dXN9YCk7XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiByZXNwb25zZS5qc29uKCk7XG4gICAgICAgIH0pXG4gICAgICAgIC50aGVuKChkYXRhKSA9PiB7XG4gICAgICAgICAgLy8gSGFuZGxlIHRoZSBkYXRhIHJlY2VpdmVkIGZyb20gdGhlIHNlcnZlclxuICAgICAgICAgIGNvbnN0IHRvdGFsVGF4ID0gZGF0YS50b3RhbFRheDtcbiAgICAgICAgICBzZXRUb3RhbFRheCh0b3RhbFRheCk7XG4gICAgICAgICAgc2V0SXNUYXgodHJ1ZSk7XG4gICAgICAgICAgY29uc29sZS5sb2coYFRvdGFsIEJpbGw6ICQke3RvdGFsVGF4fWApO1xuICAgICAgICB9KVxuICAgICAgICAuY2F0Y2goKGVycm9yKSA9PiB7XG4gICAgICAgICAgLy8gSGFuZGxlIGFueSBlcnJvcnMgdGhhdCBvY2N1cnJlZCBkdXJpbmcgdGhlIGZldGNoXG4gICAgICAgICAgY29uc29sZS5lcnJvcihcIkZldGNoIEVycm9yOlwiLCBlcnJvcik7XG4gICAgICAgIH0pO1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIHsvKiA8c2VjdGlvbiBjbGFzc05hbWU9XCJ0ZXh0LWdyYXktNDAwIGJvZHktZm9udCBtYXgtaC1zY3JlZW5cIj5cbiAgICAgIDxoZWFkZXIgY2xhc3NOYW1lPVwidGV4dC1ncmF5LTQwMCAgYm9keS1mb250XCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyIG14LWF1dG8gZmxleCBmbGV4LXdyYXAgcC01IGZsZXgtY29sIG1kOmZsZXgtcm93IGl0ZW1zLWNlbnRlclwiPlxuICAgICAgICAgIDxhIGhyZWY9XCIvXCJjbGFzc05hbWU9XCJmbGV4IHRpdGxlLWZvbnQgZm9udC1tZWRpdW0gaXRlbXMtY2VudGVyIHRleHQtd2hpdGUgbWItNCBtZDptYi0wXCI+XG4gICAgICAgICAgICA8c3ZnXG4gICAgICAgICAgICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxuICAgICAgICAgICAgICB2aWV3Qm94PVwiMCAwIDI0IDI0XCJcbiAgICAgICAgICAgICAgaWQ9XCJTaG9wXCJcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPHBhdGhcbiAgICAgICAgICAgICAgICBkPVwiTTIyLDJIMkExLDEsMCwwLDAsMSwzVjdBMywzLDAsMCwwLDMsOS44MlYyMWExLDEsMCwwLDAsMSwxSDIwYTEsMSwwLDAsMCwxLTFWOS44MkEzLDMsMCwwLDAsMjMsN1YzQTEsMSwwLDAsMCwyMiwyWk0xNSw0aDJWN2ExLDEsMCwwLDEtMiwwWk0xMSw0aDJWN2ExLDEsMCwwLDEtMiwwWk03LDRIOVY3QTEsMSwwLDAsMSw3LDdaTTQsOEExLDEsMCwwLDEsMyw3VjRINVY3QTEsMSwwLDAsMSw0LDhaTTE0LDIwSDEwVjE2YTIsMiwwLDAsMSw0LDBabTUsMEgxNlYxNmE0LDQsMCwwLDAtOCwwdjRINVY5LjgyYTMuMTcsMy4xNywwLDAsMCwxLS42LDMsMywwLDAsMCw0LDAsMywzLDAsMCwwLDQsMCwzLDMsMCwwLDAsNCwwLDMuMTcsMy4xNywwLDAsMCwxLC42Wk0yMSw3YTEsMSwwLDAsMS0yLDBWNGgyWlwiXG4gICAgICAgICAgICAgICAgZmlsbD1cIiNmZmZmZmZcIlxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImNvbG9yMDAwMDAwIHN2Z1NoYXBlXCJcbiAgICAgICAgICAgICAgPjwvcGF0aD5cbiAgICAgICAgICAgIDwvc3ZnPlxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwibWwtMyB0ZXh0LXhsXCI+UExPVCBTaG9wPC9zcGFuPlxuICAgICAgICAgIDwvYT5cbiAgICAgICAgICA8bmF2IGNsYXNzTmFtZT1cIm1kOm1sLWF1dG8gZmxleCBmbGV4LXdyYXAgaXRlbXMtY2VudGVyIHRleHQtYmFzZSBqdXN0aWZ5LWNlbnRlclwiPjwvbmF2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvaGVhZGVyPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lciBweC01IHB5LTI0IG14LWF1dG9cIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgdGV4dC1jZW50ZXIgdy1mdWxsIG1iLTIwXCI+XG4gICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwic206dGV4dC00eGwgdGV4dC0zeGwgZm9udC1tZWRpdW0gdGl0bGUtZm9udCBtYi0yIHRleHQtd2hpdGVcIj5cbiAgICAgICAgICAgICAgT3JkZXIgU3VtbWFyeVxuICAgICAgICAgICAgPC9oMT5cbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImxnOnctMi8zIG14LWF1dG8gbGVhZGluZy1yZWxheGVkIHRleHQtYmFzZVwiPlxuICAgICAgICAgICAgICBTdW1tYXJ5IG9mIHRoZSBvcmRlclxuICAgICAgICAgICAgPC9wPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGc6dy0yLzMgdy1mdWxsIG14LWF1dG8gb3ZlcmZsb3ctYXV0b1wiPlxuICAgICAgICAgICAgPHRhYmxlIGNsYXNzTmFtZT1cInRhYmxlLWF1dG8gdy1mdWxsIHRleHQtbGVmdCB3aGl0ZXNwYWNlLW5vLXdyYXBcIj5cbiAgICAgICAgICAgICAgPHRoZWFkPlxuICAgICAgICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgICAgICAgIDx0aCBjbGFzc05hbWU9XCJweC00IHB5LTMgdGl0bGUtZm9udCB0cmFja2luZy13aWRlciBmb250LW1lZGl1bSB0ZXh0LXdoaXRlIHRleHQteGwgYmctc3RvbmUtOTUwIHJvdW5kZWQtdGwgcm91bmRlZC1ibFwiPlxuICAgICAgICAgICAgICAgICAgICBQcm9kdWN0XG4gICAgICAgICAgICAgICAgICA8L3RoPlxuICAgICAgICAgICAgICAgICAgPHRoIGNsYXNzTmFtZT1cInB4LTQgcHktMyB0aXRsZS1mb250IHRyYWNraW5nLXdpZGVyIGZvbnQtbWVkaXVtIHRleHQtd2hpdGUgdGV4dC14bCBiZy1zdG9uZS05NTBcIj5cbiAgICAgICAgICAgICAgICAgICAgUXVhbnRpdHlcbiAgICAgICAgICAgICAgICAgIDwvdGg+XG4gICAgICAgICAgICAgICAgICA8dGggY2xhc3NOYW1lPVwicHgtNCBweS0zIHRpdGxlLWZvbnQgdHJhY2tpbmctd2lkZXIgZm9udC1tZWRpdW0gdGV4dC13aGl0ZSB0ZXh0LXhsIGJnLXN0b25lLTk1MFwiPlxuICAgICAgICAgICAgICAgICAgICBUeXBlXG4gICAgICAgICAgICAgICAgICA8L3RoPlxuICAgICAgICAgICAgICAgICAgPHRoIGNsYXNzTmFtZT1cInB4LTQgcHktMyB0aXRsZS1mb250IHRyYWNraW5nLXdpZGVyIGZvbnQtbWVkaXVtIHRleHQtd2hpdGUgdGV4dC14bCBiZy1zdG9uZS05NTBcIj5cbiAgICAgICAgICAgICAgICAgICAgUHJpY2VcbiAgICAgICAgICAgICAgICAgIDwvdGg+XG4gICAgICAgICAgICAgICAgICA8dGggY2xhc3NOYW1lPVwicHgtNCBweS0zIHRpdGxlLWZvbnQgdHJhY2tpbmctd2lkZXIgZm9udC1tZWRpdW0gdGV4dC13aGl0ZSB0ZXh0LXhsIGJnLXN0b25lLTk1MFwiPlxuICAgICAgICAgICAgICAgICAgICBUYXhcbiAgICAgICAgICAgICAgICAgIDwvdGg+XG4gICAgICAgICAgICAgICAgICA8dGggY2xhc3NOYW1lPVwicHgtNCBweS0zIHRpdGxlLWZvbnQgdHJhY2tpbmctd2lkZXIgZm9udC1tZWRpdW0gdGV4dC13aGl0ZSB0ZXh0LXhsIGJnLXN0b25lLTk1MFwiPlxuICAgICAgICAgICAgICAgICAgICBUb3RhbFxuICAgICAgICAgICAgICAgICAgPC90aD5cbiAgICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgICA8L3RoZWFkPlxuICAgICAgICAgICAgICA8dGJvZHk+XG4gICAgICAgICAgICAgICAge3Byb2R1Y3RDYXJ0Lm1hcCgocHJvZHVjdCkgPT4gKFxuICAgICAgICAgICAgICAgICAgPHRyIGNsYXNzTmFtZT1cInRleHQtd2hpdGUgdGV4dC1sZyBiZy1zdG9uZS05NTAgXCI+XG4gICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJweC0zIHB5LTNcIj57cHJvZHVjdC5uYW1lfTwvdGQ+XG4gICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJweC0zIHB5LTNcIj57cHJvZHVjdC5xdWFudGl0eX08L3RkPlxuICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwicHgtMyBweS0zXCI+e3Byb2R1Y3QudHlwZX08L3RkPlxuICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwicHgtMyBweS0zXCI+4oK5IHtwcm9kdWN0LnByaWNlfTwvdGQ+XG4gICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJweC0zIHB5LTNcIj7igrkge3Byb2R1Y3QudGF4fTwvdGQ+XG4gICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJweC0zIHB5LTNcIj7igrkge3BhcnNlRmxvYXQocHJvZHVjdC50YXgpKnBhcnNlRmxvYXQocHJvZHVjdC5xdWFudGl0eSkrIHBhcnNlRmxvYXQocHJvZHVjdC5wcmljZSkgKiBwYXJzZUZsb2F0KHByb2R1Y3QucXVhbnRpdHkpfTwvdGQ+XG4gICAgICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgICAgIHtpc0JpbGwgPyAoXG4gICAgICAgICAgICAgICAgICAgIDx0ciBjbGFzc05hbWU9XCJ0ZXh0LXdoaXRlIHRleHQtbGcgYmctdGVhbC04MDBcIj5cbiAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cInB4LTMgcHktNlwiPlRPVEFMPC90ZD5cbiAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cInB4LTMgcHktNlwiPjwvdGQ+XG4gICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJweC0zIHB5LTZcIj48L3RkPlxuICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwicHgtMyBweS02XCI+4oK5IHt0b3RhbEJpbGx9PC90ZD5cbiAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cInB4LTMgcHktNlwiPuKCuSB7cGFyc2VGbG9hdCh0b3RhbFRheCkudG9GaXhlZCgyKX08L3RkPlxuICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwicHgtMyBweS02XCI+4oK5IHtwYXJzZUZsb2F0KHRvdGFsVGF4K3RvdGFsQmlsbCkudG9GaXhlZCgyKX08L3RkPlxuICAgICAgICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgICAgICApIDogKFxuICAgICAgICAgICAgICAgICAgPHRyPlxuICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwicHgtNCBweS02XCI+PC90ZD5cbiAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cInB4LTQgcHktNlwiPjwvdGQ+XG4gICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJweC00IHB5LTZcIj48L3RkPlxuICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwicHgtNCBweS02XCI+PC90ZD5cbiAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cInB4LTQgcHktNlwiPjwvdGQ+XG4gICAgICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgIDwvdGJvZHk+XG4gICAgICAgICAgICA8L3RhYmxlPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBwbC00IG10LTQgbGc6dy0yLzMgdy1mdWxsIG14LWF1dG9cIj5cbiAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgb25DbGljaz17Z2VuZXJhdGVCaWxsfVxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmbGV4IG1sLWF1dG8gdGV4dC14bCB0ZXh0LXdoaXRlIGJnLXRlYWwtODAwIGJvcmRlci0wIHB5LTIgcHgtNiBmb2N1czpvdXRsaW5lLW5vbmUgaG92ZXI6YmctdGVhbC05NTAgcm91bmRlZFwiXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIEdlbmVyYXRlIEJpbGxcbiAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvc2VjdGlvbj4gKi99XG4gICAgPC8+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBDaGVja291dDtcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwidXNlUm91dGVyIiwiQ2hlY2tvdXQiLCJyb3V0ZXIiLCJjYXJ0IiwicXVlcnkiLCJjb25zb2xlIiwibG9nIiwicHJvZHVjdENhcnQiLCJKU09OIiwicGFyc2UiLCJpc0JpbGwiLCJzZXRJc0JpbGwiLCJpc1RheCIsInNldElzVGF4IiwidG90YWxCaWxsIiwic2V0VG90YWxCaWxsIiwidG90YWxUYXgiLCJzZXRUb3RhbFRheCIsImdlbmVyYXRlQmlsbCIsImJhY2tlbmRVUkwiLCJmZXRjaCIsIm1ldGhvZCIsImhlYWRlcnMiLCJib2R5Iiwic3RyaW5naWZ5IiwidGhlbiIsInJlc3BvbnNlIiwib2siLCJFcnJvciIsInN0YXR1cyIsImpzb24iLCJkYXRhIiwiY2F0Y2giLCJlcnJvciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/checkout.js\n"));

/***/ })

});