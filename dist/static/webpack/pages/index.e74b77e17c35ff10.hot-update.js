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

/***/ "./src/components/screens/index/aside/Aside.tsx":
/*!******************************************************!*\
  !*** ./src/components/screens/index/aside/Aside.tsx ***!
  \******************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Aside_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Aside.module.css */ \"./src/components/screens/index/aside/Aside.module.css\");\n/* harmony import */ var _Aside_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_Aside_module_css__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _services_changes_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/services/changes.service */ \"./src/services/changes.service.ts\");\n/* harmony import */ var _tanstack_react_query__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @tanstack/react-query */ \"./node_modules/@tanstack/react-query/build/lib/index.mjs\");\n\nvar _s = $RefreshSig$();\n\n\n\n\nconst Aside = (param)=>{\n    let { date , changeDate , remain  } = param;\n    _s();\n    const [isChange, setIsChange] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [seconds, setSeconds] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    const [intervalId, setIntervalId] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();\n    const [montly, setMonthly] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    const startChange = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(()=>{\n        setIsChange(true);\n        const id = setInterval(()=>{\n            setSeconds((seconds)=>seconds + 1);\n        }, 1000);\n        localStorage.setItem(\"change\", JSON.stringify(seconds));\n        setIntervalId(id);\n    }, []);\n    const endChange = async ()=>{\n        setIsChange(false);\n        setSeconds(0);\n        await _services_changes_service__WEBPACK_IMPORTED_MODULE_2__.ChangesService.create({\n            date,\n            length: String(seconds)\n        });\n        setMonthly((montly)=>montly + seconds);\n        localStorage.removeItem(\"change\");\n        clearInterval(intervalId);\n    };\n    const { isLoading , error , data  } = (0,_tanstack_react_query__WEBPACK_IMPORTED_MODULE_3__.useQuery)([\n        \"change-all\",\n        date,\n        isChange\n    ], async ()=>_services_changes_service__WEBPACK_IMPORTED_MODULE_2__.ChangesService.getAll());\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const monthSeconds = (data === null || data === void 0 ? void 0 : data.data.reduce((summ, el)=>summ + Number(el.length), 0)) || 0;\n        setMonthly(monthSeconds);\n    }, [\n        data,\n        isChange\n    ]);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const change = localStorage.getItem(\"change\");\n        if (change) {\n            setIsChange(true);\n            setSeconds(JSON.parse(change));\n        }\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"aside\", {\n        className: (_Aside_module_css__WEBPACK_IMPORTED_MODULE_4___default().aside),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_Aside_module_css__WEBPACK_IMPORTED_MODULE_4___default().aside__date),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        className: (_Aside_module_css__WEBPACK_IMPORTED_MODULE_4___default().aside__input),\n                        onChange: changeDate,\n                        type: \"date\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Dmitry\\\\job\\\\freelance\\\\fr\\\\src\\\\components\\\\screens\\\\index\\\\aside\\\\Aside.tsx\",\n                        lineNumber: 68,\n                        columnNumber: 17\n                    }, undefined),\n                    date\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\Dmitry\\\\job\\\\freelance\\\\fr\\\\src\\\\components\\\\screens\\\\index\\\\aside\\\\Aside.tsx\",\n                lineNumber: 67,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"nav\", {\n                className: (_Aside_module_css__WEBPACK_IMPORTED_MODULE_4___default().aside__nav),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                        className: (_Aside_module_css__WEBPACK_IMPORTED_MODULE_4___default().aside__link),\n                        href: \"clients\",\n                        children: \"Список клиентов\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Dmitry\\\\job\\\\freelance\\\\fr\\\\src\\\\components\\\\screens\\\\index\\\\aside\\\\Aside.tsx\",\n                        lineNumber: 73,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                        className: (_Aside_module_css__WEBPACK_IMPORTED_MODULE_4___default().aside__link),\n                        href: \"services\",\n                        children: \"Услуги\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Dmitry\\\\job\\\\freelance\\\\fr\\\\src\\\\components\\\\screens\\\\index\\\\aside\\\\Aside.tsx\",\n                        lineNumber: 74,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                        className: (_Aside_module_css__WEBPACK_IMPORTED_MODULE_4___default().aside__link),\n                        href: \"history\",\n                        children: \"История\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Dmitry\\\\job\\\\freelance\\\\fr\\\\src\\\\components\\\\screens\\\\index\\\\aside\\\\Aside.tsx\",\n                        lineNumber: 75,\n                        columnNumber: 17\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\Dmitry\\\\job\\\\freelance\\\\fr\\\\src\\\\components\\\\screens\\\\index\\\\aside\\\\Aside.tsx\",\n                lineNumber: 72,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_Aside_module_css__WEBPACK_IMPORTED_MODULE_4___default().aside__change),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        style: isChange ? {\n                            pointerEvents: \"none\",\n                            backgroundColor: \"blue\"\n                        } : {},\n                        className: (_Aside_module_css__WEBPACK_IMPORTED_MODULE_4___default().aside__change_button),\n                        onClick: startChange,\n                        children: \"Начать смену\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Dmitry\\\\job\\\\freelance\\\\fr\\\\src\\\\components\\\\screens\\\\index\\\\aside\\\\Aside.tsx\",\n                        lineNumber: 79,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        style: !isChange ? {\n                            pointerEvents: \"none\",\n                            backgroundColor: \"blue\"\n                        } : {},\n                        className: (_Aside_module_css__WEBPACK_IMPORTED_MODULE_4___default().aside__change_button),\n                        onClick: endChange,\n                        children: \"Завершить смену\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Dmitry\\\\job\\\\freelance\\\\fr\\\\src\\\\components\\\\screens\\\\index\\\\aside\\\\Aside.tsx\",\n                        lineNumber: 86,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_Aside_module_css__WEBPACK_IMPORTED_MODULE_4___default().aside__change_body),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                children: \"Время смены:\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Dmitry\\\\job\\\\freelance\\\\fr\\\\src\\\\components\\\\screens\\\\index\\\\aside\\\\Aside.tsx\",\n                                lineNumber: 94,\n                                columnNumber: 21\n                            }, undefined),\n                            isChange && new Date(seconds * 1000).toISOString().slice(11, 19),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                children: \"За месяц:\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Dmitry\\\\job\\\\freelance\\\\fr\\\\src\\\\components\\\\screens\\\\index\\\\aside\\\\Aside.tsx\",\n                                lineNumber: 96,\n                                columnNumber: 21\n                            }, undefined),\n                            new Date((montly || 0) * 1000).toISOString().slice(11, 19)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\Dmitry\\\\job\\\\freelance\\\\fr\\\\src\\\\components\\\\screens\\\\index\\\\aside\\\\Aside.tsx\",\n                        lineNumber: 93,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_Aside_module_css__WEBPACK_IMPORTED_MODULE_4___default().aside__remain),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                children: \"Осталось:\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Dmitry\\\\job\\\\freelance\\\\fr\\\\src\\\\components\\\\screens\\\\index\\\\aside\\\\Aside.tsx\",\n                                lineNumber: 100,\n                                columnNumber: 21\n                            }, undefined),\n                            new Date(remain * 1000).toISOString().slice(11, 19)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\Dmitry\\\\job\\\\freelance\\\\fr\\\\src\\\\components\\\\screens\\\\index\\\\aside\\\\Aside.tsx\",\n                        lineNumber: 99,\n                        columnNumber: 17\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\Dmitry\\\\job\\\\freelance\\\\fr\\\\src\\\\components\\\\screens\\\\index\\\\aside\\\\Aside.tsx\",\n                lineNumber: 78,\n                columnNumber: 13\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\Dmitry\\\\job\\\\freelance\\\\fr\\\\src\\\\components\\\\screens\\\\index\\\\aside\\\\Aside.tsx\",\n        lineNumber: 66,\n        columnNumber: 9\n    }, undefined);\n};\n_s(Aside, \"+PFe8DBc5LqMefnLoIu8Hl/n4ZY=\", false, function() {\n    return [\n        _tanstack_react_query__WEBPACK_IMPORTED_MODULE_3__.useQuery\n    ];\n});\n_c = Aside;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Aside);\nvar _c;\n$RefreshReg$(_c, \"Aside\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9zY3JlZW5zL2luZGV4L2FzaWRlL0FzaWRlLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUE4RTtBQUMzQztBQUN5QjtBQUNYO0FBVWpELE1BQU1NLFFBQW9CO1FBQUMsRUFBQ0MsS0FBSSxFQUFFQyxXQUFVLEVBQUVDLE9BQU0sRUFBQzs7SUFFakQsTUFBTSxDQUFDQyxVQUFVQyxZQUFZLEdBQUdULCtDQUFRQSxDQUFVO0lBQ2xELE1BQU0sQ0FBQ1UsU0FBU0MsV0FBVyxHQUFHWCwrQ0FBUUEsQ0FBUztJQUMvQyxNQUFNLENBQUNZLFlBQVlDLGNBQWMsR0FBR2IsK0NBQVFBO0lBQzVDLE1BQU0sQ0FBQ2MsUUFBUUMsV0FBVyxHQUFHZiwrQ0FBUUEsQ0FBUztJQUU5QyxNQUFNZ0IsY0FBY2xCLGtEQUFXQSxDQUFDO1FBQzVCVyxZQUFZO1FBRVosTUFBTVEsS0FBS0MsWUFBWTtZQUNuQlAsV0FBV0QsQ0FBQUEsVUFBV0EsVUFBVTtRQUNwQyxHQUFHO1FBRUhTLGFBQWFDLFFBQVEsVUFBVUMsS0FBS0MsVUFBVVo7UUFFOUNHLGNBQWNJO0lBQ2xCLEdBQUcsRUFBRTtJQUVMLE1BQU1NLFlBQVk7UUFDZGQsWUFBWTtRQUVaRSxXQUFXO1FBQ1gsTUFBTVQsNEVBQXFCc0IsQ0FBQztZQUFDbkI7WUFBTW9CLFFBQVFDLE9BQU9oQjtRQUFRO1FBRTFESyxXQUFXRCxDQUFBQSxTQUFVQSxTQUFTSjtRQUU5QlMsYUFBYVEsV0FBVztRQUV4QkMsY0FBY2hCO0lBQ2xCO0lBRUEsTUFBTSxFQUFFaUIsVUFBUyxFQUFFQyxNQUFLLEVBQUVDLEtBQUksRUFBRSxHQUFHNUIsK0RBQVFBLENBQ3ZDO1FBQUM7UUFBY0U7UUFBTUc7S0FBUyxFQUFFLFVBQVlOLDRFQUFxQjhCO0lBR3JFakMsZ0RBQVNBLENBQUM7UUFDTixNQUFNa0MsZUFBZUYsQ0FBQUEsaUJBQUFBLGtCQUFBQSxLQUFBQSxJQUFBQSxLQUFNQSxLQUFLRyxPQUFPLENBQUNDLE1BQWNDLEtBQWdCRCxPQUFPRSxPQUFPRCxHQUFHWCxTQUFTLEVBQUMsS0FBSztRQUV0R1YsV0FBV2tCO0lBQ2YsR0FBRztRQUFDRjtRQUFNdkI7S0FBUztJQUVuQlQsZ0RBQVNBLENBQUM7UUFDTixNQUFNdUMsU0FBU25CLGFBQWFvQixRQUFRO1FBRXBDLElBQUlELFFBQVE7WUFDUjdCLFlBQVk7WUFDWkUsV0FBV1UsS0FBS21CLE1BQU1GO1FBQzFCO0lBQ0osR0FBRyxFQUFFO0lBRUwscUJBQ0ksOERBQUNHO1FBQU1DLFdBQVd6QyxnRUFBUXdDOzswQkFDdEIsOERBQUNFO2dCQUFJRCxXQUFXekMsc0VBQWMyQzs7a0NBQzFCLDhEQUFDQzt3QkFBTUgsV0FBV3pDLHVFQUFlNkM7d0JBQUVDLFVBQVV6Qzt3QkFBWTBDLE1BQUs7Ozs7OztvQkFDN0QzQzs7Ozs7OzswQkFHTCw4REFBQzRDO2dCQUFJUCxXQUFXekMscUVBQWFpRDs7a0NBQ3pCLDhEQUFDQzt3QkFBRVQsV0FBV3pDLHNFQUFjbUQ7d0JBQUVDLE1BQUs7a0NBQVU7Ozs7OztrQ0FDN0MsOERBQUNGO3dCQUFFVCxXQUFXekMsc0VBQWNtRDt3QkFBRUMsTUFBSztrQ0FBVzs7Ozs7O2tDQUM5Qyw4REFBQ0Y7d0JBQUVULFdBQVd6QyxzRUFBY21EO3dCQUFFQyxNQUFLO2tDQUFVOzs7Ozs7Ozs7Ozs7MEJBR2pELDhEQUFDVjtnQkFBSUQsV0FBV3pDLHdFQUFnQnFEOztrQ0FDNUIsOERBQUNDO3dCQUNHQyxPQUFPaEQsV0FBVzs0QkFBQ2lELGVBQWU7NEJBQVFDLGlCQUFpQjt3QkFBTSxJQUFJLENBQUM7d0JBQ3RFaEIsV0FBV3pDLCtFQUF1QjBEO3dCQUNsQ0MsU0FBUzVDO2tDQUNSOzs7Ozs7a0NBR0wsOERBQUN1Qzt3QkFDR0MsT0FBTyxDQUFDaEQsV0FBVzs0QkFBQ2lELGVBQWU7NEJBQVFDLGlCQUFpQjt3QkFBTSxJQUFJLENBQUM7d0JBQ3ZFaEIsV0FBV3pDLCtFQUF1QjBEO3dCQUNsQ0MsU0FBU3JDO2tDQUNaOzs7Ozs7a0NBR0QsOERBQUNvQjt3QkFBSUQsV0FBV3pDLDZFQUFxQjREOzswQ0FDakMsOERBQUNsQjswQ0FBSTs7Ozs7OzRCQUNKbkMsWUFBYSxJQUFJc0QsS0FBS3BELFVBQVUsTUFBTXFELGNBQWNDLE1BQU0sSUFBSTswQ0FDL0QsOERBQUNyQjswQ0FBSTs7Ozs7OzRCQUNILElBQUltQixLQUFLLENBQUNoRCxVQUFVLEtBQUssTUFBTWlELGNBQWNDLE1BQU0sSUFBSTs7Ozs7OztrQ0FFN0QsOERBQUNyQjt3QkFBSUQsV0FBV3pDLHdFQUFnQmdFOzswQ0FDNUIsOERBQUN0QjswQ0FBSTs7Ozs7OzRCQUNILElBQUltQixLQUFLdkQsU0FBUyxNQUFNd0QsY0FBY0MsTUFBTSxJQUFJOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBS3RFO0dBNUZNNUQ7O1FBZ0NpQ0QsMkRBQVFBOzs7S0FoQ3pDQztBQThGTiwrREFBZUEsS0FBS0EsRUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9zY3JlZW5zL2luZGV4L2FzaWRlL0FzaWRlLnRzeD84YWU3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEZDLCB1c2VDYWxsYmFjaywgdXNlRWZmZWN0LCB1c2VNZW1vLCB1c2VSZWYsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBjbCBmcm9tIFwiLi9Bc2lkZS5tb2R1bGUuY3NzXCJcclxuaW1wb3J0IHsgQ2hhbmdlc1NlcnZpY2UgfSBmcm9tIFwiQC9zZXJ2aWNlcy9jaGFuZ2VzLnNlcnZpY2VcIjtcclxuaW1wb3J0IHsgdXNlUXVlcnkgfSBmcm9tIFwiQHRhbnN0YWNrL3JlYWN0LXF1ZXJ5XCI7XHJcbmltcG9ydCB7IElDaGFuZ2UgfSBmcm9tIFwiQC90eXBlcy9jaGFuZ2UuaW50ZXJmYWNlXCI7XHJcblxyXG5pbnRlcmZhY2UgSUFzaWRlIHtcclxuICAgIGRhdGU6IHN0cmluZyxcclxuICAgIGNoYW5nZURhdGU6IGFueSxcclxuICAgIHJlbWFpbjogbnVtYmVyXHJcbn1cclxuXHJcblxyXG5jb25zdCBBc2lkZTogRkM8SUFzaWRlPiA9ICh7ZGF0ZSwgY2hhbmdlRGF0ZSwgcmVtYWlufSkgPT4ge1xyXG5cclxuICAgIGNvbnN0IFtpc0NoYW5nZSwgc2V0SXNDaGFuZ2VdID0gdXNlU3RhdGU8Qm9vbGVhbj4oZmFsc2UpO1xyXG4gICAgY29uc3QgW3NlY29uZHMsIHNldFNlY29uZHNdID0gdXNlU3RhdGU8bnVtYmVyPigwKVxyXG4gICAgY29uc3QgW2ludGVydmFsSWQsIHNldEludGVydmFsSWRdID0gdXNlU3RhdGU8YW55PigpXHJcbiAgICBjb25zdCBbbW9udGx5LCBzZXRNb250aGx5XSA9IHVzZVN0YXRlPG51bWJlcj4oMClcclxuXHJcbiAgICBjb25zdCBzdGFydENoYW5nZSA9IHVzZUNhbGxiYWNrKCgpID0+IHtcclxuICAgICAgICBzZXRJc0NoYW5nZSh0cnVlKTtcclxuXHJcbiAgICAgICAgY29uc3QgaWQgPSBzZXRJbnRlcnZhbCgoKSA9PiB7XHJcbiAgICAgICAgICAgIHNldFNlY29uZHMoc2Vjb25kcyA9PiBzZWNvbmRzICsgMSk7XHJcbiAgICAgICAgfSwgMTAwMCk7XHJcblxyXG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwiY2hhbmdlXCIsIEpTT04uc3RyaW5naWZ5KHNlY29uZHMpKVxyXG5cclxuICAgICAgICBzZXRJbnRlcnZhbElkKGlkKVxyXG4gICAgfSwgW10pXHJcblxyXG4gICAgY29uc3QgZW5kQ2hhbmdlID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgICAgIHNldElzQ2hhbmdlKGZhbHNlKTtcclxuXHJcbiAgICAgICAgc2V0U2Vjb25kcygwKVxyXG4gICAgICAgIGF3YWl0IENoYW5nZXNTZXJ2aWNlLmNyZWF0ZSh7ZGF0ZSwgbGVuZ3RoOiBTdHJpbmcoc2Vjb25kcyl9KTtcclxuXHJcbiAgICAgICAgc2V0TW9udGhseShtb250bHkgPT4gbW9udGx5ICsgc2Vjb25kcylcclxuXHJcbiAgICAgICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oXCJjaGFuZ2VcIilcclxuXHJcbiAgICAgICAgY2xlYXJJbnRlcnZhbChpbnRlcnZhbElkKVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHsgaXNMb2FkaW5nLCBlcnJvciwgZGF0YSB9ID0gdXNlUXVlcnkoXHJcbiAgICAgICAgWydjaGFuZ2UtYWxsJywgZGF0ZSwgaXNDaGFuZ2VdLCBhc3luYyAoKSA9PiBDaGFuZ2VzU2VydmljZS5nZXRBbGwoKVxyXG4gICAgKTtcclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IG1vbnRoU2Vjb25kcyA9IGRhdGE/LmRhdGEucmVkdWNlKChzdW1tOiBudW1iZXIsIGVsOiBJQ2hhbmdlKSA9PiBzdW1tICsgTnVtYmVyKGVsLmxlbmd0aCksIDApIHx8IDBcclxuXHJcbiAgICAgICAgc2V0TW9udGhseShtb250aFNlY29uZHMpXHJcbiAgICB9LCBbZGF0YSwgaXNDaGFuZ2VdKVxyXG5cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgY29uc3QgY2hhbmdlID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJjaGFuZ2VcIilcclxuXHJcbiAgICAgICAgaWYgKGNoYW5nZSkge1xyXG4gICAgICAgICAgICBzZXRJc0NoYW5nZSh0cnVlKVxyXG4gICAgICAgICAgICBzZXRTZWNvbmRzKEpTT04ucGFyc2UoY2hhbmdlKSlcclxuICAgICAgICB9XHJcbiAgICB9LCBbXSlcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxhc2lkZSBjbGFzc05hbWU9e2NsLmFzaWRlfT5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsLmFzaWRlX19kYXRlfT5cclxuICAgICAgICAgICAgICAgIDxpbnB1dCBjbGFzc05hbWU9e2NsLmFzaWRlX19pbnB1dH0gb25DaGFuZ2U9e2NoYW5nZURhdGV9IHR5cGU9XCJkYXRlXCIgLz5cclxuICAgICAgICAgICAgICAgIHtkYXRlfVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgIDxuYXYgY2xhc3NOYW1lPXtjbC5hc2lkZV9fbmF2fT5cclxuICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT17Y2wuYXNpZGVfX2xpbmt9IGhyZWY9XCJjbGllbnRzXCI+0KHQv9C40YHQvtC6INC60LvQuNC10L3RgtC+0LI8L2E+XHJcbiAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9e2NsLmFzaWRlX19saW5rfSBocmVmPVwic2VydmljZXNcIj7Qo9GB0LvRg9Cz0Lg8L2E+XHJcbiAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9e2NsLmFzaWRlX19saW5rfSBocmVmPVwiaGlzdG9yeVwiPtCY0YHRgtC+0YDQuNGPPC9hPlxyXG4gICAgICAgICAgICA8L25hdj5cclxuXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbC5hc2lkZV9fY2hhbmdlfT5cclxuICAgICAgICAgICAgICAgIDxidXR0b24gXHJcbiAgICAgICAgICAgICAgICAgICAgc3R5bGU9e2lzQ2hhbmdlID8ge3BvaW50ZXJFdmVudHM6IFwibm9uZVwiLCBiYWNrZ3JvdW5kQ29sb3I6IFwiYmx1ZVwifSA6IHt9fSBcclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsLmFzaWRlX19jaGFuZ2VfYnV0dG9ufVxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3N0YXJ0Q2hhbmdlfVxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAg0J3QsNGH0LDRgtGMINGB0LzQtdC90YNcclxuICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDxidXR0b24gXHJcbiAgICAgICAgICAgICAgICAgICAgc3R5bGU9eyFpc0NoYW5nZSA/IHtwb2ludGVyRXZlbnRzOiBcIm5vbmVcIiwgYmFja2dyb3VuZENvbG9yOiBcImJsdWVcIn0gOiB7fX0gXHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbC5hc2lkZV9fY2hhbmdlX2J1dHRvbn1cclxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXtlbmRDaGFuZ2V9XHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAg0JfQsNCy0LXRgNGI0LjRgtGMINGB0LzQtdC90YNcclxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsLmFzaWRlX19jaGFuZ2VfYm9keX0+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdj7QktGA0LXQvNGPINGB0LzQtdC90Ys6PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAge2lzQ2hhbmdlICYmIChuZXcgRGF0ZShzZWNvbmRzICogMTAwMCkudG9JU09TdHJpbmcoKS5zbGljZSgxMSwgMTkpKX1cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2PtCX0LAg0LzQtdGB0Y/Rhjo8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICB7KG5ldyBEYXRlKChtb250bHkgfHwgMCkgKiAxMDAwKS50b0lTT1N0cmluZygpLnNsaWNlKDExLCAxOSkpfVxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2wuYXNpZGVfX3JlbWFpbn0+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdj7QntGB0YLQsNC70L7RgdGMOjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIHsobmV3IERhdGUocmVtYWluICogMTAwMCkudG9JU09TdHJpbmcoKS5zbGljZSgxMSwgMTkpKX1cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2FzaWRlPlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBBc2lkZSJdLCJuYW1lcyI6WyJ1c2VDYWxsYmFjayIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiY2wiLCJDaGFuZ2VzU2VydmljZSIsInVzZVF1ZXJ5IiwiQXNpZGUiLCJkYXRlIiwiY2hhbmdlRGF0ZSIsInJlbWFpbiIsImlzQ2hhbmdlIiwic2V0SXNDaGFuZ2UiLCJzZWNvbmRzIiwic2V0U2Vjb25kcyIsImludGVydmFsSWQiLCJzZXRJbnRlcnZhbElkIiwibW9udGx5Iiwic2V0TW9udGhseSIsInN0YXJ0Q2hhbmdlIiwiaWQiLCJzZXRJbnRlcnZhbCIsImxvY2FsU3RvcmFnZSIsInNldEl0ZW0iLCJKU09OIiwic3RyaW5naWZ5IiwiZW5kQ2hhbmdlIiwiY3JlYXRlIiwibGVuZ3RoIiwiU3RyaW5nIiwicmVtb3ZlSXRlbSIsImNsZWFySW50ZXJ2YWwiLCJpc0xvYWRpbmciLCJlcnJvciIsImRhdGEiLCJnZXRBbGwiLCJtb250aFNlY29uZHMiLCJyZWR1Y2UiLCJzdW1tIiwiZWwiLCJOdW1iZXIiLCJjaGFuZ2UiLCJnZXRJdGVtIiwicGFyc2UiLCJhc2lkZSIsImNsYXNzTmFtZSIsImRpdiIsImFzaWRlX19kYXRlIiwiaW5wdXQiLCJhc2lkZV9faW5wdXQiLCJvbkNoYW5nZSIsInR5cGUiLCJuYXYiLCJhc2lkZV9fbmF2IiwiYSIsImFzaWRlX19saW5rIiwiaHJlZiIsImFzaWRlX19jaGFuZ2UiLCJidXR0b24iLCJzdHlsZSIsInBvaW50ZXJFdmVudHMiLCJiYWNrZ3JvdW5kQ29sb3IiLCJhc2lkZV9fY2hhbmdlX2J1dHRvbiIsIm9uQ2xpY2siLCJhc2lkZV9fY2hhbmdlX2JvZHkiLCJEYXRlIiwidG9JU09TdHJpbmciLCJzbGljZSIsImFzaWRlX19yZW1haW4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/screens/index/aside/Aside.tsx\n"));

/***/ })

});