"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/services",{

/***/ "./src/components/screens/services/Services.tsx":
/*!******************************************************!*\
  !*** ./src/components/screens/services/Services.tsx ***!
  \******************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Services_module_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Services.module.css */ \"./src/components/screens/services/Services.module.css\");\n/* harmony import */ var _Services_module_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_Services_module_css__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _services_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/services/service.service */ \"./src/services/service.service.ts\");\n/* harmony import */ var _tanstack_react_query__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @tanstack/react-query */ \"./node_modules/@tanstack/react-query/build/lib/index.mjs\");\n/* harmony import */ var _ServicesItem_ServicesItem__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ServicesItem/ServicesItem */ \"./src/components/screens/services/ServicesItem/ServicesItem.tsx\");\n/* harmony import */ var _ui_BackButton_BackButton__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/ui/BackButton/BackButton */ \"./src/components/ui/BackButton/BackButton.tsx\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\nconst Services = ()=>{\n    _s();\n    const { isLoading , error , data  } = (0,_tanstack_react_query__WEBPACK_IMPORTED_MODULE_5__.useQuery)([\n        \"services\"\n    ], async ()=>{\n        const response = await _services_service_service__WEBPACK_IMPORTED_MODULE_2__.ServiceService.getAll();\n        return response;\n    });\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const pr = localStorage.getItem(\"change\");\n        if (!pr) return;\n        const id = setInterval(()=>{\n            const seconds = localStorage.getItem(\"change\");\n            if (!seconds) return;\n            localStorage.removeItem(\"change\");\n            localStorage.setItem(\"change\", JSON.parse(seconds) + 1);\n        }, 1000);\n        return ()=>clearInterval(id);\n    });\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_Services_module_css__WEBPACK_IMPORTED_MODULE_6___default().container),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"aside\", {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ui_BackButton_BackButton__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Dmitry\\\\job\\\\freelance\\\\fr\\\\src\\\\components\\\\screens\\\\services\\\\Services.tsx\",\n                    lineNumber: 39,\n                    columnNumber: 17\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Dmitry\\\\job\\\\freelance\\\\fr\\\\src\\\\components\\\\screens\\\\services\\\\Services.tsx\",\n                lineNumber: 38,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_Services_module_css__WEBPACK_IMPORTED_MODULE_6___default().table),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        className: (_Services_module_css__WEBPACK_IMPORTED_MODULE_6___default().title),\n                        children: \"Услуги\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Dmitry\\\\job\\\\freelance\\\\fr\\\\src\\\\components\\\\screens\\\\services\\\\Services.tsx\",\n                        lineNumber: 42,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"table\", {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"thead\", {\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tr\", {\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                            className: (_Services_module_css__WEBPACK_IMPORTED_MODULE_6___default().subtitle),\n                                            children: \"Вид Услуги\"\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\Dmitry\\\\job\\\\freelance\\\\fr\\\\src\\\\components\\\\screens\\\\services\\\\Services.tsx\",\n                                            lineNumber: 46,\n                                            columnNumber: 29\n                                        }, undefined),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                            className: (_Services_module_css__WEBPACK_IMPORTED_MODULE_6___default().subtitle),\n                                            children: \"Цена\"\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\Dmitry\\\\job\\\\freelance\\\\fr\\\\src\\\\components\\\\screens\\\\services\\\\Services.tsx\",\n                                            lineNumber: 47,\n                                            columnNumber: 29\n                                        }, undefined)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"C:\\\\Users\\\\Dmitry\\\\job\\\\freelance\\\\fr\\\\src\\\\components\\\\screens\\\\services\\\\Services.tsx\",\n                                    lineNumber: 45,\n                                    columnNumber: 25\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Dmitry\\\\job\\\\freelance\\\\fr\\\\src\\\\components\\\\screens\\\\services\\\\Services.tsx\",\n                                lineNumber: 44,\n                                columnNumber: 21\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tbody\", {\n                                children: data && data.data.map((el)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ServicesItem_ServicesItem__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                                        service: el\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\Dmitry\\\\job\\\\freelance\\\\fr\\\\src\\\\components\\\\screens\\\\services\\\\Services.tsx\",\n                                        lineNumber: 53,\n                                        columnNumber: 29\n                                    }, undefined))\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Dmitry\\\\job\\\\freelance\\\\fr\\\\src\\\\components\\\\screens\\\\services\\\\Services.tsx\",\n                                lineNumber: 50,\n                                columnNumber: 21\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\Dmitry\\\\job\\\\freelance\\\\fr\\\\src\\\\components\\\\screens\\\\services\\\\Services.tsx\",\n                        lineNumber: 43,\n                        columnNumber: 17\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\Dmitry\\\\job\\\\freelance\\\\fr\\\\src\\\\components\\\\screens\\\\services\\\\Services.tsx\",\n                lineNumber: 41,\n                columnNumber: 13\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\Dmitry\\\\job\\\\freelance\\\\fr\\\\src\\\\components\\\\screens\\\\services\\\\Services.tsx\",\n        lineNumber: 37,\n        columnNumber: 9\n    }, undefined);\n};\n_s(Services, \"pIlGgJu0LsF5GLR4C/UJT+das1I=\", false, function() {\n    return [\n        _tanstack_react_query__WEBPACK_IMPORTED_MODULE_5__.useQuery\n    ];\n});\n_c = Services;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Services);\nvar _c;\n$RefreshReg$(_c, \"Services\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9zY3JlZW5zL3NlcnZpY2VzL1NlcnZpY2VzLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQXNDO0FBQ0M7QUFDcUI7QUFDWDtBQUVNO0FBQ0g7QUFHcEQsTUFBTU0sV0FBZTs7SUFFakIsTUFBTSxFQUFFQyxVQUFTLEVBQUVDLE1BQUssRUFBRUMsS0FBSSxFQUFFLEdBQUdOLCtEQUFRQSxDQUN2QztRQUFDO0tBQVcsRUFBRTtRQUNWLE1BQU1PLFdBQVcsTUFBTVIsNEVBQXFCUztRQUM1QyxPQUFPRDtJQUNYO0lBR0pWLGdEQUFTQSxDQUFDO1FBQ04sTUFBTVksS0FBS0MsYUFBYUMsUUFBUTtRQUVoQyxJQUFJLENBQUNGLElBQUk7UUFFVCxNQUFNRyxLQUFLQyxZQUFZO1lBQ25CLE1BQU1DLFVBQVVKLGFBQWFDLFFBQVE7WUFFckMsSUFBSSxDQUFDRyxTQUFTO1lBRWRKLGFBQWFLLFdBQVc7WUFDeEJMLGFBQWFNLFFBQVEsVUFBV0MsS0FBS0MsTUFBTUosV0FBVztRQUMxRCxHQUFHO1FBRUgsT0FBTyxJQUFNSyxjQUFjUDtJQUMvQjtJQUVBLHFCQUNJLDhEQUFDUTtRQUFJQyxXQUFXdkIsdUVBQVl3Qjs7MEJBQ3hCLDhEQUFDQzswQkFDRyw0RUFBQ3JCLGlFQUFVQTs7Ozs7Ozs7OzswQkFFZiw4REFBQ2tCO2dCQUFJQyxXQUFXdkIsbUVBQVEwQjs7a0NBQ3BCLDhEQUFDQzt3QkFBR0osV0FBV3ZCLG1FQUFRNEI7a0NBQUU7Ozs7OztrQ0FDekIsOERBQUNGOzswQ0FDRyw4REFBQ0c7MENBQ0csNEVBQUNDOztzREFDRyw4REFBQ0M7NENBQUdSLFdBQVd2QixzRUFBV2dDO3NEQUFFOzs7Ozs7c0RBQzVCLDhEQUFDRDs0Q0FBR1IsV0FBV3ZCLHNFQUFXZ0M7c0RBQUU7Ozs7Ozs7Ozs7Ozs7Ozs7OzBDQUdwQyw4REFBQ0M7MENBQ0l6QixRQUNEQSxLQUFLQSxLQUFLMEIsSUFBSSxDQUFDQyxtQkFDWCw4REFBQ2hDLGtFQUFZQTt3Q0FDVGlDLFNBQVdEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQVMzQztHQXJETTlCOztRQUVpQ0gsMkRBQVFBOzs7S0FGekNHO0FBdUROLCtEQUFlQSxRQUFRQSxFQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL3NjcmVlbnMvc2VydmljZXMvU2VydmljZXMudHN4PzAxNWMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRkMsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgY2wgZnJvbSBcIi4vU2VydmljZXMubW9kdWxlLmNzc1wiO1xyXG5pbXBvcnQgeyBTZXJ2aWNlU2VydmljZSB9IGZyb20gXCJAL3NlcnZpY2VzL3NlcnZpY2Uuc2VydmljZVwiO1xyXG5pbXBvcnQgeyB1c2VRdWVyeSB9IGZyb20gXCJAdGFuc3RhY2svcmVhY3QtcXVlcnlcIjtcclxuaW1wb3J0IHsgSVNlcnZpY2UgfSBmcm9tIFwiQC90eXBlcy9zZXJ2aWNlLmludGVyZmFjZVwiO1xyXG5pbXBvcnQgU2VydmljZXNJdGVtIGZyb20gXCIuL1NlcnZpY2VzSXRlbS9TZXJ2aWNlc0l0ZW1cIjtcclxuaW1wb3J0IEJhY2tCdXR0b24gZnJvbSBcIkAvdWkvQmFja0J1dHRvbi9CYWNrQnV0dG9uXCI7XHJcblxyXG5cclxuY29uc3QgU2VydmljZXM6IEZDID0gKCkgPT4ge1xyXG5cclxuICAgIGNvbnN0IHsgaXNMb2FkaW5nLCBlcnJvciwgZGF0YSB9ID0gdXNlUXVlcnkoXHJcbiAgICAgICAgWydzZXJ2aWNlcyddLCBhc3luYyAoKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgU2VydmljZVNlcnZpY2UuZ2V0QWxsKClcclxuICAgICAgICAgICAgcmV0dXJuIHJlc3BvbnNlXHJcbiAgICAgICAgfVxyXG4gICAgKTtcclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHByID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJjaGFuZ2VcIilcclxuXHJcbiAgICAgICAgaWYgKCFwcikgcmV0dXJuO1xyXG5cclxuICAgICAgICBjb25zdCBpZCA9IHNldEludGVydmFsKCgpID0+IHtcclxuICAgICAgICAgICAgY29uc3Qgc2Vjb25kcyA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiY2hhbmdlXCIpXHJcblxyXG4gICAgICAgICAgICBpZiAoIXNlY29uZHMpIHJldHVyblxyXG5cclxuICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oXCJjaGFuZ2VcIilcclxuICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJjaGFuZ2VcIiwgKEpTT04ucGFyc2Uoc2Vjb25kcykgKyAxKSlcclxuICAgICAgICB9LCAxMDAwKVxyXG5cclxuICAgICAgICByZXR1cm4gKCkgPT4gY2xlYXJJbnRlcnZhbChpZClcclxuICAgIH0pXHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2wuY29udGFpbmVyfT5cclxuICAgICAgICAgICAgPGFzaWRlPlxyXG4gICAgICAgICAgICAgICAgPEJhY2tCdXR0b24gLz5cclxuICAgICAgICAgICAgPC9hc2lkZT5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsLnRhYmxlfT5cclxuICAgICAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9e2NsLnRpdGxlfT7Qo9GB0LvRg9Cz0Lg8L2gxPlxyXG4gICAgICAgICAgICAgICAgPHRhYmxlPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0aGVhZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoIGNsYXNzTmFtZT17Y2wuc3VidGl0bGV9PtCS0LjQtCDQo9GB0LvRg9Cz0Lg8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoIGNsYXNzTmFtZT17Y2wuc3VidGl0bGV9PtCm0LXQvdCwPC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgICA8L3RoZWFkPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0Ym9keT5cclxuICAgICAgICAgICAgICAgICAgICAgICAge2RhdGEgJiYgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEuZGF0YS5tYXAoKGVsOiBJU2VydmljZSkgPT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxTZXJ2aWNlc0l0ZW0gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VydmljZSA9IHtlbH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvdGJvZHk+XHJcbiAgICAgICAgICAgICAgICA8L3RhYmxlPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgU2VydmljZXMiXSwibmFtZXMiOlsidXNlRWZmZWN0IiwiY2wiLCJTZXJ2aWNlU2VydmljZSIsInVzZVF1ZXJ5IiwiU2VydmljZXNJdGVtIiwiQmFja0J1dHRvbiIsIlNlcnZpY2VzIiwiaXNMb2FkaW5nIiwiZXJyb3IiLCJkYXRhIiwicmVzcG9uc2UiLCJnZXRBbGwiLCJwciIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJpZCIsInNldEludGVydmFsIiwic2Vjb25kcyIsInJlbW92ZUl0ZW0iLCJzZXRJdGVtIiwiSlNPTiIsInBhcnNlIiwiY2xlYXJJbnRlcnZhbCIsImRpdiIsImNsYXNzTmFtZSIsImNvbnRhaW5lciIsImFzaWRlIiwidGFibGUiLCJoMSIsInRpdGxlIiwidGhlYWQiLCJ0ciIsInRoIiwic3VidGl0bGUiLCJ0Ym9keSIsIm1hcCIsImVsIiwic2VydmljZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/screens/services/Services.tsx\n"));

/***/ })

});