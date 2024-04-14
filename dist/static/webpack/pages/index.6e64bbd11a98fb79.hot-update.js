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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Aside_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Aside.module.css */ \"./src/components/screens/index/aside/Aside.module.css\");\n/* harmony import */ var _Aside_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_Aside_module_css__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _services_changes_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/services/changes.service */ \"./src/services/changes.service.ts\");\n/* harmony import */ var _tanstack_react_query__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @tanstack/react-query */ \"./node_modules/@tanstack/react-query/build/lib/index.mjs\");\n\nvar _s = $RefreshSig$();\n\n\n\n\nconst Aside = (param)=>{\n    let { date , changeDate , remain  } = param;\n    _s();\n    const [isChange, setIsChange] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [seconds, setSeconds] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    const [intervalId, setIntervalId] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();\n    const [montly, setMonthly] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    const startChange = (seconds)=>{\n        setIsChange(true);\n        setSeconds(seconds);\n        const id = setInterval(()=>{\n            setSeconds((prevSeconds)=>prevSeconds + 1);\n        }, 1000);\n        if (i) setIntervalId(id);\n    };\n    const create = async (seconds)=>{\n        await _services_changes_service__WEBPACK_IMPORTED_MODULE_2__.ChangesService.create({\n            date,\n            length: String(seconds)\n        });\n    };\n    const endChange = async ()=>{\n        setIsChange(false);\n        setSeconds(0);\n        create(seconds);\n        setMonthly((montly)=>montly + seconds);\n        localStorage.removeItem(\"change\");\n        clearInterval(intervalId);\n    };\n    const { isLoading , error , data  } = (0,_tanstack_react_query__WEBPACK_IMPORTED_MODULE_3__.useQuery)([\n        \"change-all\",\n        date,\n        isChange\n    ], async ()=>_services_changes_service__WEBPACK_IMPORTED_MODULE_2__.ChangesService.getAll());\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const monthSeconds = (data === null || data === void 0 ? void 0 : data.data.reduce((summ, el)=>summ + Number(el.length), 0)) || 0;\n        setMonthly(monthSeconds);\n    }, [\n        data,\n        isChange\n    ]);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        if (isChange) {\n            localStorage.removeItem(\"change\");\n            localStorage.setItem(\"change\", JSON.stringify(seconds));\n        }\n    }, [\n        seconds\n    ]);\n    console.log(seconds);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const pr = localStorage.getItem(\"change\");\n        if (pr) {\n            startChange(JSON.parse(pr));\n        }\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"aside\", {\n        className: (_Aside_module_css__WEBPACK_IMPORTED_MODULE_4___default().aside),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_Aside_module_css__WEBPACK_IMPORTED_MODULE_4___default().aside__date),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        className: (_Aside_module_css__WEBPACK_IMPORTED_MODULE_4___default().aside__input),\n                        onChange: changeDate,\n                        type: \"date\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Dmitry\\\\job\\\\freelance\\\\fr\\\\src\\\\components\\\\screens\\\\index\\\\aside\\\\Aside.tsx\",\n                        lineNumber: 84,\n                        columnNumber: 17\n                    }, undefined),\n                    date\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\Dmitry\\\\job\\\\freelance\\\\fr\\\\src\\\\components\\\\screens\\\\index\\\\aside\\\\Aside.tsx\",\n                lineNumber: 83,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"nav\", {\n                className: (_Aside_module_css__WEBPACK_IMPORTED_MODULE_4___default().aside__nav),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                        className: (_Aside_module_css__WEBPACK_IMPORTED_MODULE_4___default().aside__link),\n                        href: \"clients\",\n                        children: \"Список клиентов\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Dmitry\\\\job\\\\freelance\\\\fr\\\\src\\\\components\\\\screens\\\\index\\\\aside\\\\Aside.tsx\",\n                        lineNumber: 89,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                        className: (_Aside_module_css__WEBPACK_IMPORTED_MODULE_4___default().aside__link),\n                        href: \"services\",\n                        children: \"Услуги\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Dmitry\\\\job\\\\freelance\\\\fr\\\\src\\\\components\\\\screens\\\\index\\\\aside\\\\Aside.tsx\",\n                        lineNumber: 90,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                        className: (_Aside_module_css__WEBPACK_IMPORTED_MODULE_4___default().aside__link),\n                        href: \"history\",\n                        children: \"История\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Dmitry\\\\job\\\\freelance\\\\fr\\\\src\\\\components\\\\screens\\\\index\\\\aside\\\\Aside.tsx\",\n                        lineNumber: 91,\n                        columnNumber: 17\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\Dmitry\\\\job\\\\freelance\\\\fr\\\\src\\\\components\\\\screens\\\\index\\\\aside\\\\Aside.tsx\",\n                lineNumber: 88,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_Aside_module_css__WEBPACK_IMPORTED_MODULE_4___default().aside__change),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        style: isChange ? {\n                            pointerEvents: \"none\",\n                            backgroundColor: \"blue\"\n                        } : {},\n                        className: (_Aside_module_css__WEBPACK_IMPORTED_MODULE_4___default().aside__change_button),\n                        onClick: ()=>startChange(0),\n                        children: \"Начать смену\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Dmitry\\\\job\\\\freelance\\\\fr\\\\src\\\\components\\\\screens\\\\index\\\\aside\\\\Aside.tsx\",\n                        lineNumber: 95,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        style: !isChange ? {\n                            pointerEvents: \"none\",\n                            backgroundColor: \"blue\"\n                        } : {},\n                        className: (_Aside_module_css__WEBPACK_IMPORTED_MODULE_4___default().aside__change_button),\n                        onClick: endChange,\n                        children: \"Завершить смену\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Dmitry\\\\job\\\\freelance\\\\fr\\\\src\\\\components\\\\screens\\\\index\\\\aside\\\\Aside.tsx\",\n                        lineNumber: 102,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_Aside_module_css__WEBPACK_IMPORTED_MODULE_4___default().aside__change_body),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                children: \"Время смены:\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Dmitry\\\\job\\\\freelance\\\\fr\\\\src\\\\components\\\\screens\\\\index\\\\aside\\\\Aside.tsx\",\n                                lineNumber: 110,\n                                columnNumber: 21\n                            }, undefined),\n                            isChange && new Date(seconds * 1000).toISOString().slice(11, 19),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                children: \"За месяц:\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Dmitry\\\\job\\\\freelance\\\\fr\\\\src\\\\components\\\\screens\\\\index\\\\aside\\\\Aside.tsx\",\n                                lineNumber: 112,\n                                columnNumber: 21\n                            }, undefined),\n                            new Date((montly || 0) * 1000).toISOString().slice(11, 19)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\Dmitry\\\\job\\\\freelance\\\\fr\\\\src\\\\components\\\\screens\\\\index\\\\aside\\\\Aside.tsx\",\n                        lineNumber: 109,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_Aside_module_css__WEBPACK_IMPORTED_MODULE_4___default().aside__remain),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                children: \"Осталось:\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Dmitry\\\\job\\\\freelance\\\\fr\\\\src\\\\components\\\\screens\\\\index\\\\aside\\\\Aside.tsx\",\n                                lineNumber: 116,\n                                columnNumber: 21\n                            }, undefined),\n                            new Date(remain * 1000).toISOString().slice(11, 19)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\Dmitry\\\\job\\\\freelance\\\\fr\\\\src\\\\components\\\\screens\\\\index\\\\aside\\\\Aside.tsx\",\n                        lineNumber: 115,\n                        columnNumber: 17\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\Dmitry\\\\job\\\\freelance\\\\fr\\\\src\\\\components\\\\screens\\\\index\\\\aside\\\\Aside.tsx\",\n                lineNumber: 94,\n                columnNumber: 13\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\Dmitry\\\\job\\\\freelance\\\\fr\\\\src\\\\components\\\\screens\\\\index\\\\aside\\\\Aside.tsx\",\n        lineNumber: 82,\n        columnNumber: 9\n    }, undefined);\n};\n_s(Aside, \"OhWRISyqnfHX+P08A2sRrPUOIPc=\", false, function() {\n    return [\n        _tanstack_react_query__WEBPACK_IMPORTED_MODULE_3__.useQuery\n    ];\n});\n_c = Aside;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Aside);\nvar _c;\n$RefreshReg$(_c, \"Aside\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9zY3JlZW5zL2luZGV4L2FzaWRlL0FzaWRlLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUE4RTtBQUMzQztBQUN5QjtBQUNYO0FBVWpELE1BQU1LLFFBQW9CO1FBQUMsRUFBQ0MsS0FBSSxFQUFFQyxXQUFVLEVBQUVDLE9BQU0sRUFBQzs7SUFFakQsTUFBTSxDQUFDQyxVQUFVQyxZQUFZLEdBQUdULCtDQUFRQSxDQUFVO0lBQ2xELE1BQU0sQ0FBQ1UsU0FBU0MsV0FBVyxHQUFHWCwrQ0FBUUEsQ0FBUztJQUMvQyxNQUFNLENBQUNZLFlBQVlDLGNBQWMsR0FBR2IsK0NBQVFBO0lBQzVDLE1BQU0sQ0FBQ2MsUUFBUUMsV0FBVyxHQUFHZiwrQ0FBUUEsQ0FBUztJQUU5QyxNQUFNZ0IsY0FBYyxDQUFDTjtRQUNqQkQsWUFBWTtRQUVaRSxXQUFXRDtRQUVYLE1BQU1PLEtBQUtDLFlBQVk7WUFDbkJQLFdBQVdRLENBQUFBLGNBQWVBLGNBQWM7UUFDNUMsR0FBRztRQUVILElBQUlDLEdBRUpQLGNBQWNJO0lBQ2xCO0lBRUEsTUFBTUksU0FBUyxPQUFPWDtRQUNsQixNQUFNUiw0RUFBcUJtQixDQUFDO1lBQUNoQjtZQUFNaUIsUUFBUUMsT0FBT2I7UUFBUTtJQUM5RDtJQUVBLE1BQU1jLFlBQVk7UUFDZGYsWUFBWTtRQUVaRSxXQUFXO1FBQ1hVLE9BQU9YO1FBRVBLLFdBQVdELENBQUFBLFNBQVVBLFNBQVNKO1FBRTlCZSxhQUFhQyxXQUFXO1FBRXhCQyxjQUFjZjtJQUNsQjtJQUdBLE1BQU0sRUFBRWdCLFVBQVMsRUFBRUMsTUFBSyxFQUFFQyxLQUFJLEVBQUUsR0FBRzNCLCtEQUFRQSxDQUN2QztRQUFDO1FBQWNFO1FBQU1HO0tBQVMsRUFBRSxVQUFZTiw0RUFBcUI2QjtJQUdyRWhDLGdEQUFTQSxDQUFDO1FBQ04sTUFBTWlDLGVBQWVGLENBQUFBLGlCQUFBQSxrQkFBQUEsS0FBQUEsSUFBQUEsS0FBTUEsS0FBS0csT0FBTyxDQUFDQyxNQUFjQyxLQUFnQkQsT0FBT0UsT0FBT0QsR0FBR2IsU0FBUyxFQUFDLEtBQUs7UUFFdEdQLFdBQVdpQjtJQUNmLEdBQUc7UUFBQ0Y7UUFBTXRCO0tBQVM7SUFFbkJULGdEQUFTQSxDQUFDO1FBQ04sSUFBSVMsVUFBVTtZQUNWaUIsYUFBYUMsV0FBVztZQUN4QkQsYUFBYVksUUFBUSxVQUFVQyxLQUFLQyxVQUFVN0I7UUFDbEQ7SUFDSixHQUFHO1FBQUNBO0tBQVE7SUFFWjhCLFFBQVFDLElBQUkvQjtJQUVaWCxnREFBU0EsQ0FBQztRQUVOLE1BQU0yQyxLQUFLakIsYUFBYWtCLFFBQVE7UUFFaEMsSUFBSUQsSUFBSTtZQUNKMUIsWUFBWXNCLEtBQUtNLE1BQU1GO1FBQzNCO0lBQ0osR0FBRyxFQUFFO0lBRUwscUJBQ0ksOERBQUNHO1FBQU1DLFdBQVc3QyxnRUFBUTRDOzswQkFDdEIsOERBQUNFO2dCQUFJRCxXQUFXN0Msc0VBQWMrQzs7a0NBQzFCLDhEQUFDQzt3QkFBTUgsV0FBVzdDLHVFQUFlaUQ7d0JBQUVDLFVBQVU3Qzt3QkFBWThDLE1BQUs7Ozs7OztvQkFDN0QvQzs7Ozs7OzswQkFHTCw4REFBQ2dEO2dCQUFJUCxXQUFXN0MscUVBQWFxRDs7a0NBQ3pCLDhEQUFDQzt3QkFBRVQsV0FBVzdDLHNFQUFjdUQ7d0JBQUVDLE1BQUs7a0NBQVU7Ozs7OztrQ0FDN0MsOERBQUNGO3dCQUFFVCxXQUFXN0Msc0VBQWN1RDt3QkFBRUMsTUFBSztrQ0FBVzs7Ozs7O2tDQUM5Qyw4REFBQ0Y7d0JBQUVULFdBQVc3QyxzRUFBY3VEO3dCQUFFQyxNQUFLO2tDQUFVOzs7Ozs7Ozs7Ozs7MEJBR2pELDhEQUFDVjtnQkFBSUQsV0FBVzdDLHdFQUFnQnlEOztrQ0FDNUIsOERBQUNDO3dCQUNHQyxPQUFPcEQsV0FBVzs0QkFBQ3FELGVBQWU7NEJBQVFDLGlCQUFpQjt3QkFBTSxJQUFJLENBQUM7d0JBQ3RFaEIsV0FBVzdDLCtFQUF1QjhEO3dCQUNsQ0MsU0FBUyxJQUFNaEQsWUFBWTtrQ0FDMUI7Ozs7OztrQ0FHTCw4REFBQzJDO3dCQUNHQyxPQUFPLENBQUNwRCxXQUFXOzRCQUFDcUQsZUFBZTs0QkFBUUMsaUJBQWlCO3dCQUFNLElBQUksQ0FBQzt3QkFDdkVoQixXQUFXN0MsK0VBQXVCOEQ7d0JBQ2xDQyxTQUFTeEM7a0NBQ1o7Ozs7OztrQ0FHRCw4REFBQ3VCO3dCQUFJRCxXQUFXN0MsNkVBQXFCZ0U7OzBDQUNqQyw4REFBQ2xCOzBDQUFJOzs7Ozs7NEJBQ0p2QyxZQUFhLElBQUkwRCxLQUFLeEQsVUFBVSxNQUFNeUQsY0FBY0MsTUFBTSxJQUFJOzBDQUMvRCw4REFBQ3JCOzBDQUFJOzs7Ozs7NEJBQ0gsSUFBSW1CLEtBQUssQ0FBQ3BELFVBQVUsS0FBSyxNQUFNcUQsY0FBY0MsTUFBTSxJQUFJOzs7Ozs7O2tDQUU3RCw4REFBQ3JCO3dCQUFJRCxXQUFXN0Msd0VBQWdCb0U7OzBDQUM1Qiw4REFBQ3RCOzBDQUFJOzs7Ozs7NEJBQ0gsSUFBSW1CLEtBQUszRCxTQUFTLE1BQU00RCxjQUFjQyxNQUFNLElBQUk7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFLdEU7R0E1R01oRTs7UUF1Q2lDRCwyREFBUUE7OztLQXZDekNDO0FBOEdOLCtEQUFlQSxLQUFLQSxFQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL3NjcmVlbnMvaW5kZXgvYXNpZGUvQXNpZGUudHN4PzhhZTciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRkMsIHVzZUNhbGxiYWNrLCB1c2VFZmZlY3QsIHVzZU1lbW8sIHVzZVJlZiwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IGNsIGZyb20gXCIuL0FzaWRlLm1vZHVsZS5jc3NcIlxyXG5pbXBvcnQgeyBDaGFuZ2VzU2VydmljZSB9IGZyb20gXCJAL3NlcnZpY2VzL2NoYW5nZXMuc2VydmljZVwiO1xyXG5pbXBvcnQgeyB1c2VRdWVyeSB9IGZyb20gXCJAdGFuc3RhY2svcmVhY3QtcXVlcnlcIjtcclxuaW1wb3J0IHsgSUNoYW5nZSB9IGZyb20gXCJAL3R5cGVzL2NoYW5nZS5pbnRlcmZhY2VcIjtcclxuXHJcbmludGVyZmFjZSBJQXNpZGUge1xyXG4gICAgZGF0ZTogc3RyaW5nLFxyXG4gICAgY2hhbmdlRGF0ZTogYW55LFxyXG4gICAgcmVtYWluOiBudW1iZXJcclxufVxyXG5cclxuXHJcbmNvbnN0IEFzaWRlOiBGQzxJQXNpZGU+ID0gKHtkYXRlLCBjaGFuZ2VEYXRlLCByZW1haW59KSA9PiB7XHJcblxyXG4gICAgY29uc3QgW2lzQ2hhbmdlLCBzZXRJc0NoYW5nZV0gPSB1c2VTdGF0ZTxCb29sZWFuPihmYWxzZSk7XHJcbiAgICBjb25zdCBbc2Vjb25kcywgc2V0U2Vjb25kc10gPSB1c2VTdGF0ZTxudW1iZXI+KDApXHJcbiAgICBjb25zdCBbaW50ZXJ2YWxJZCwgc2V0SW50ZXJ2YWxJZF0gPSB1c2VTdGF0ZTxhbnk+KClcclxuICAgIGNvbnN0IFttb250bHksIHNldE1vbnRobHldID0gdXNlU3RhdGU8bnVtYmVyPigwKVxyXG5cclxuICAgIGNvbnN0IHN0YXJ0Q2hhbmdlID0gKHNlY29uZHM6IG51bWJlcikgPT4ge1xyXG4gICAgICAgIHNldElzQ2hhbmdlKHRydWUpO1xyXG5cclxuICAgICAgICBzZXRTZWNvbmRzKHNlY29uZHMpXHJcblxyXG4gICAgICAgIGNvbnN0IGlkID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xyXG4gICAgICAgICAgICBzZXRTZWNvbmRzKHByZXZTZWNvbmRzID0+IHByZXZTZWNvbmRzICsgMSk7XHJcbiAgICAgICAgfSwgMTAwMCk7XHJcblxyXG4gICAgICAgIGlmIChpKVxyXG5cclxuICAgICAgICBzZXRJbnRlcnZhbElkKGlkKVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGNyZWF0ZSA9IGFzeW5jIChzZWNvbmRzOiBudW1iZXIpID0+IHtcclxuICAgICAgICBhd2FpdCBDaGFuZ2VzU2VydmljZS5jcmVhdGUoe2RhdGUsIGxlbmd0aDogU3RyaW5nKHNlY29uZHMpfSk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgZW5kQ2hhbmdlID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgICAgIHNldElzQ2hhbmdlKGZhbHNlKTtcclxuXHJcbiAgICAgICAgc2V0U2Vjb25kcygwKVxyXG4gICAgICAgIGNyZWF0ZShzZWNvbmRzKVxyXG5cclxuICAgICAgICBzZXRNb250aGx5KG1vbnRseSA9PiBtb250bHkgKyBzZWNvbmRzKVxyXG5cclxuICAgICAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbShcImNoYW5nZVwiKVxyXG5cclxuICAgICAgICBjbGVhckludGVydmFsKGludGVydmFsSWQpXHJcbiAgICB9XHJcblxyXG5cclxuICAgIGNvbnN0IHsgaXNMb2FkaW5nLCBlcnJvciwgZGF0YSB9ID0gdXNlUXVlcnkoXHJcbiAgICAgICAgWydjaGFuZ2UtYWxsJywgZGF0ZSwgaXNDaGFuZ2VdLCBhc3luYyAoKSA9PiBDaGFuZ2VzU2VydmljZS5nZXRBbGwoKVxyXG4gICAgKTtcclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IG1vbnRoU2Vjb25kcyA9IGRhdGE/LmRhdGEucmVkdWNlKChzdW1tOiBudW1iZXIsIGVsOiBJQ2hhbmdlKSA9PiBzdW1tICsgTnVtYmVyKGVsLmxlbmd0aCksIDApIHx8IDBcclxuXHJcbiAgICAgICAgc2V0TW9udGhseShtb250aFNlY29uZHMpXHJcbiAgICB9LCBbZGF0YSwgaXNDaGFuZ2VdKVxyXG5cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgaWYgKGlzQ2hhbmdlKSB7XHJcbiAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKFwiY2hhbmdlXCIpXHJcbiAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwiY2hhbmdlXCIsIEpTT04uc3RyaW5naWZ5KHNlY29uZHMpKVxyXG4gICAgICAgIH1cclxuICAgIH0sIFtzZWNvbmRzXSk7XHJcblxyXG4gICAgY29uc29sZS5sb2coc2Vjb25kcylcclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG5cclxuICAgICAgICBjb25zdCBwciA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiY2hhbmdlXCIpXHJcblxyXG4gICAgICAgIGlmIChwcikge1xyXG4gICAgICAgICAgICBzdGFydENoYW5nZShKU09OLnBhcnNlKHByKSlcclxuICAgICAgICB9XHJcbiAgICB9LCBbXSlcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxhc2lkZSBjbGFzc05hbWU9e2NsLmFzaWRlfT5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsLmFzaWRlX19kYXRlfT5cclxuICAgICAgICAgICAgICAgIDxpbnB1dCBjbGFzc05hbWU9e2NsLmFzaWRlX19pbnB1dH0gb25DaGFuZ2U9e2NoYW5nZURhdGV9IHR5cGU9XCJkYXRlXCIgLz5cclxuICAgICAgICAgICAgICAgIHtkYXRlfVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgIDxuYXYgY2xhc3NOYW1lPXtjbC5hc2lkZV9fbmF2fT5cclxuICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT17Y2wuYXNpZGVfX2xpbmt9IGhyZWY9XCJjbGllbnRzXCI+0KHQv9C40YHQvtC6INC60LvQuNC10L3RgtC+0LI8L2E+XHJcbiAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9e2NsLmFzaWRlX19saW5rfSBocmVmPVwic2VydmljZXNcIj7Qo9GB0LvRg9Cz0Lg8L2E+XHJcbiAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9e2NsLmFzaWRlX19saW5rfSBocmVmPVwiaGlzdG9yeVwiPtCY0YHRgtC+0YDQuNGPPC9hPlxyXG4gICAgICAgICAgICA8L25hdj5cclxuXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbC5hc2lkZV9fY2hhbmdlfT5cclxuICAgICAgICAgICAgICAgIDxidXR0b24gXHJcbiAgICAgICAgICAgICAgICAgICAgc3R5bGU9e2lzQ2hhbmdlID8ge3BvaW50ZXJFdmVudHM6IFwibm9uZVwiLCBiYWNrZ3JvdW5kQ29sb3I6IFwiYmx1ZVwifSA6IHt9fSBcclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsLmFzaWRlX19jaGFuZ2VfYnV0dG9ufVxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHN0YXJ0Q2hhbmdlKDApfVxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAg0J3QsNGH0LDRgtGMINGB0LzQtdC90YNcclxuICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDxidXR0b24gXHJcbiAgICAgICAgICAgICAgICAgICAgc3R5bGU9eyFpc0NoYW5nZSA/IHtwb2ludGVyRXZlbnRzOiBcIm5vbmVcIiwgYmFja2dyb3VuZENvbG9yOiBcImJsdWVcIn0gOiB7fX0gXHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbC5hc2lkZV9fY2hhbmdlX2J1dHRvbn1cclxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXtlbmRDaGFuZ2V9XHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAg0JfQsNCy0LXRgNGI0LjRgtGMINGB0LzQtdC90YNcclxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsLmFzaWRlX19jaGFuZ2VfYm9keX0+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdj7QktGA0LXQvNGPINGB0LzQtdC90Ys6PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAge2lzQ2hhbmdlICYmIChuZXcgRGF0ZShzZWNvbmRzICogMTAwMCkudG9JU09TdHJpbmcoKS5zbGljZSgxMSwgMTkpKX1cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2PtCX0LAg0LzQtdGB0Y/Rhjo8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICB7KG5ldyBEYXRlKChtb250bHkgfHwgMCkgKiAxMDAwKS50b0lTT1N0cmluZygpLnNsaWNlKDExLCAxOSkpfVxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2wuYXNpZGVfX3JlbWFpbn0+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdj7QntGB0YLQsNC70L7RgdGMOjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIHsobmV3IERhdGUocmVtYWluICogMTAwMCkudG9JU09TdHJpbmcoKS5zbGljZSgxMSwgMTkpKX1cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2FzaWRlPlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBBc2lkZSJdLCJuYW1lcyI6WyJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsImNsIiwiQ2hhbmdlc1NlcnZpY2UiLCJ1c2VRdWVyeSIsIkFzaWRlIiwiZGF0ZSIsImNoYW5nZURhdGUiLCJyZW1haW4iLCJpc0NoYW5nZSIsInNldElzQ2hhbmdlIiwic2Vjb25kcyIsInNldFNlY29uZHMiLCJpbnRlcnZhbElkIiwic2V0SW50ZXJ2YWxJZCIsIm1vbnRseSIsInNldE1vbnRobHkiLCJzdGFydENoYW5nZSIsImlkIiwic2V0SW50ZXJ2YWwiLCJwcmV2U2Vjb25kcyIsImkiLCJjcmVhdGUiLCJsZW5ndGgiLCJTdHJpbmciLCJlbmRDaGFuZ2UiLCJsb2NhbFN0b3JhZ2UiLCJyZW1vdmVJdGVtIiwiY2xlYXJJbnRlcnZhbCIsImlzTG9hZGluZyIsImVycm9yIiwiZGF0YSIsImdldEFsbCIsIm1vbnRoU2Vjb25kcyIsInJlZHVjZSIsInN1bW0iLCJlbCIsIk51bWJlciIsInNldEl0ZW0iLCJKU09OIiwic3RyaW5naWZ5IiwiY29uc29sZSIsImxvZyIsInByIiwiZ2V0SXRlbSIsInBhcnNlIiwiYXNpZGUiLCJjbGFzc05hbWUiLCJkaXYiLCJhc2lkZV9fZGF0ZSIsImlucHV0IiwiYXNpZGVfX2lucHV0Iiwib25DaGFuZ2UiLCJ0eXBlIiwibmF2IiwiYXNpZGVfX25hdiIsImEiLCJhc2lkZV9fbGluayIsImhyZWYiLCJhc2lkZV9fY2hhbmdlIiwiYnV0dG9uIiwic3R5bGUiLCJwb2ludGVyRXZlbnRzIiwiYmFja2dyb3VuZENvbG9yIiwiYXNpZGVfX2NoYW5nZV9idXR0b24iLCJvbkNsaWNrIiwiYXNpZGVfX2NoYW5nZV9ib2R5IiwiRGF0ZSIsInRvSVNPU3RyaW5nIiwic2xpY2UiLCJhc2lkZV9fcmVtYWluIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/screens/index/aside/Aside.tsx\n"));

/***/ })

});