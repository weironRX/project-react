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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Aside_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Aside.module.css */ \"./src/components/screens/index/aside/Aside.module.css\");\n/* harmony import */ var _Aside_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_Aside_module_css__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _services_changes_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/services/changes.service */ \"./src/services/changes.service.ts\");\n/* harmony import */ var _tanstack_react_query__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @tanstack/react-query */ \"./node_modules/@tanstack/react-query/build/lib/index.mjs\");\n\nvar _s = $RefreshSig$();\n\n\n\n\nconst Aside = (param)=>{\n    let { date , changeDate , remain  } = param;\n    _s();\n    const [isChange, setIsChange] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [seconds, setSeconds] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    const [intervals, setIntervals] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [montly, setMonthly] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    const startChange = (seconds)=>{\n        setIsChange(true);\n        setSeconds(seconds);\n        const id = setInterval(()=>{\n            setSeconds((prevSeconds)=>prevSeconds + 1);\n        }, 1000);\n        setIntervals((intervals)=>[\n                ...intervals,\n                N\n            ]);\n    };\n    const create = async (seconds)=>{\n        await _services_changes_service__WEBPACK_IMPORTED_MODULE_2__.ChangesService.create({\n            date,\n            length: String(seconds)\n        });\n    };\n    const endChange = async ()=>{\n        setIsChange(false);\n        setSeconds(0);\n        create(seconds);\n        setMonthly((montly)=>montly + seconds);\n        localStorage.removeItem(\"change\");\n        clearInterval(intervalId);\n    };\n    const { isLoading , error , data  } = (0,_tanstack_react_query__WEBPACK_IMPORTED_MODULE_3__.useQuery)([\n        \"change-all\",\n        date,\n        isChange\n    ], async ()=>_services_changes_service__WEBPACK_IMPORTED_MODULE_2__.ChangesService.getAll());\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const monthSeconds = (data === null || data === void 0 ? void 0 : data.data.reduce((summ, el)=>summ + Number(el.length), 0)) || 0;\n        setMonthly(monthSeconds);\n    }, [\n        data,\n        isChange\n    ]);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        if (isChange) {\n            localStorage.removeItem(\"change\");\n            localStorage.setItem(\"change\", JSON.stringify(seconds));\n        }\n    }, [\n        seconds\n    ]);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const pr = localStorage.getItem(\"change\");\n        if (pr) {\n            startChange(JSON.parse(pr));\n        }\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"aside\", {\n        className: (_Aside_module_css__WEBPACK_IMPORTED_MODULE_4___default().aside),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_Aside_module_css__WEBPACK_IMPORTED_MODULE_4___default().aside__date),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        className: (_Aside_module_css__WEBPACK_IMPORTED_MODULE_4___default().aside__input),\n                        onChange: changeDate,\n                        type: \"date\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Dmitry\\\\job\\\\freelance\\\\fr\\\\src\\\\components\\\\screens\\\\index\\\\aside\\\\Aside.tsx\",\n                        lineNumber: 80,\n                        columnNumber: 17\n                    }, undefined),\n                    date\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\Dmitry\\\\job\\\\freelance\\\\fr\\\\src\\\\components\\\\screens\\\\index\\\\aside\\\\Aside.tsx\",\n                lineNumber: 79,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"nav\", {\n                className: (_Aside_module_css__WEBPACK_IMPORTED_MODULE_4___default().aside__nav),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                        className: (_Aside_module_css__WEBPACK_IMPORTED_MODULE_4___default().aside__link),\n                        href: \"clients\",\n                        children: \"Список клиентов\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Dmitry\\\\job\\\\freelance\\\\fr\\\\src\\\\components\\\\screens\\\\index\\\\aside\\\\Aside.tsx\",\n                        lineNumber: 85,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                        className: (_Aside_module_css__WEBPACK_IMPORTED_MODULE_4___default().aside__link),\n                        href: \"services\",\n                        children: \"Услуги\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Dmitry\\\\job\\\\freelance\\\\fr\\\\src\\\\components\\\\screens\\\\index\\\\aside\\\\Aside.tsx\",\n                        lineNumber: 86,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                        className: (_Aside_module_css__WEBPACK_IMPORTED_MODULE_4___default().aside__link),\n                        href: \"history\",\n                        children: \"История\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Dmitry\\\\job\\\\freelance\\\\fr\\\\src\\\\components\\\\screens\\\\index\\\\aside\\\\Aside.tsx\",\n                        lineNumber: 87,\n                        columnNumber: 17\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\Dmitry\\\\job\\\\freelance\\\\fr\\\\src\\\\components\\\\screens\\\\index\\\\aside\\\\Aside.tsx\",\n                lineNumber: 84,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_Aside_module_css__WEBPACK_IMPORTED_MODULE_4___default().aside__change),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        style: isChange ? {\n                            pointerEvents: \"none\",\n                            backgroundColor: \"blue\"\n                        } : {},\n                        className: (_Aside_module_css__WEBPACK_IMPORTED_MODULE_4___default().aside__change_button),\n                        onClick: ()=>startChange(0),\n                        children: \"Начать смену\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Dmitry\\\\job\\\\freelance\\\\fr\\\\src\\\\components\\\\screens\\\\index\\\\aside\\\\Aside.tsx\",\n                        lineNumber: 91,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        style: !isChange ? {\n                            pointerEvents: \"none\",\n                            backgroundColor: \"blue\"\n                        } : {},\n                        className: (_Aside_module_css__WEBPACK_IMPORTED_MODULE_4___default().aside__change_button),\n                        onClick: endChange,\n                        children: \"Завершить смену\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Dmitry\\\\job\\\\freelance\\\\fr\\\\src\\\\components\\\\screens\\\\index\\\\aside\\\\Aside.tsx\",\n                        lineNumber: 98,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_Aside_module_css__WEBPACK_IMPORTED_MODULE_4___default().aside__change_body),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                children: \"Время смены:\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Dmitry\\\\job\\\\freelance\\\\fr\\\\src\\\\components\\\\screens\\\\index\\\\aside\\\\Aside.tsx\",\n                                lineNumber: 106,\n                                columnNumber: 21\n                            }, undefined),\n                            isChange && new Date(seconds * 1000).toISOString().slice(11, 19),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                children: \"За месяц:\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Dmitry\\\\job\\\\freelance\\\\fr\\\\src\\\\components\\\\screens\\\\index\\\\aside\\\\Aside.tsx\",\n                                lineNumber: 108,\n                                columnNumber: 21\n                            }, undefined),\n                            new Date((montly || 0) * 1000).toISOString().slice(11, 19)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\Dmitry\\\\job\\\\freelance\\\\fr\\\\src\\\\components\\\\screens\\\\index\\\\aside\\\\Aside.tsx\",\n                        lineNumber: 105,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_Aside_module_css__WEBPACK_IMPORTED_MODULE_4___default().aside__remain),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                children: \"Осталось:\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Dmitry\\\\job\\\\freelance\\\\fr\\\\src\\\\components\\\\screens\\\\index\\\\aside\\\\Aside.tsx\",\n                                lineNumber: 112,\n                                columnNumber: 21\n                            }, undefined),\n                            new Date(remain * 1000).toISOString().slice(11, 19)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\Dmitry\\\\job\\\\freelance\\\\fr\\\\src\\\\components\\\\screens\\\\index\\\\aside\\\\Aside.tsx\",\n                        lineNumber: 111,\n                        columnNumber: 17\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\Dmitry\\\\job\\\\freelance\\\\fr\\\\src\\\\components\\\\screens\\\\index\\\\aside\\\\Aside.tsx\",\n                lineNumber: 90,\n                columnNumber: 13\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\Dmitry\\\\job\\\\freelance\\\\fr\\\\src\\\\components\\\\screens\\\\index\\\\aside\\\\Aside.tsx\",\n        lineNumber: 78,\n        columnNumber: 9\n    }, undefined);\n};\n_s(Aside, \"qDAZ0qYT6z+2D3evXP4+cZh6AbA=\", false, function() {\n    return [\n        _tanstack_react_query__WEBPACK_IMPORTED_MODULE_3__.useQuery\n    ];\n});\n_c = Aside;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Aside);\nvar _c;\n$RefreshReg$(_c, \"Aside\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9zY3JlZW5zL2luZGV4L2FzaWRlL0FzaWRlLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUE4RTtBQUMzQztBQUN5QjtBQUNYO0FBVWpELE1BQU1LLFFBQW9CO1FBQUMsRUFBQ0MsS0FBSSxFQUFFQyxXQUFVLEVBQUVDLE9BQU0sRUFBQzs7SUFFakQsTUFBTSxDQUFDQyxVQUFVQyxZQUFZLEdBQUdULCtDQUFRQSxDQUFVO0lBQ2xELE1BQU0sQ0FBQ1UsU0FBU0MsV0FBVyxHQUFHWCwrQ0FBUUEsQ0FBUztJQUMvQyxNQUFNLENBQUNZLFdBQVdDLGFBQWEsR0FBR2IsK0NBQVFBLENBQVcsRUFBRTtJQUN2RCxNQUFNLENBQUNjLFFBQVFDLFdBQVcsR0FBR2YsK0NBQVFBLENBQVM7SUFFOUMsTUFBTWdCLGNBQWMsQ0FBQ047UUFDakJELFlBQVk7UUFFWkUsV0FBV0Q7UUFFWCxNQUFNTyxLQUFLQyxZQUFZO1lBQ25CUCxXQUFXUSxDQUFBQSxjQUFlQSxjQUFjO1FBQzVDLEdBQUc7UUFFSE4sYUFBYUQsQ0FBQUEsWUFBYTttQkFBSUE7Z0JBQVdRO2FBQUU7SUFDL0M7SUFFQSxNQUFNQyxTQUFTLE9BQU9YO1FBQ2xCLE1BQU1SLDRFQUFxQm1CLENBQUM7WUFBQ2hCO1lBQU1pQixRQUFRQyxPQUFPYjtRQUFRO0lBQzlEO0lBRUEsTUFBTWMsWUFBWTtRQUNkZixZQUFZO1FBRVpFLFdBQVc7UUFDWFUsT0FBT1g7UUFFUEssV0FBV0QsQ0FBQUEsU0FBVUEsU0FBU0o7UUFFOUJlLGFBQWFDLFdBQVc7UUFFeEJDLGNBQWNDO0lBQ2xCO0lBR0EsTUFBTSxFQUFFQyxVQUFTLEVBQUVDLE1BQUssRUFBRUMsS0FBSSxFQUFFLEdBQUc1QiwrREFBUUEsQ0FDdkM7UUFBQztRQUFjRTtRQUFNRztLQUFTLEVBQUUsVUFBWU4sNEVBQXFCOEI7SUFHckVqQyxnREFBU0EsQ0FBQztRQUNOLE1BQU1rQyxlQUFlRixDQUFBQSxpQkFBQUEsa0JBQUFBLEtBQUFBLElBQUFBLEtBQU1BLEtBQUtHLE9BQU8sQ0FBQ0MsTUFBY0MsS0FBZ0JELE9BQU9FLE9BQU9ELEdBQUdkLFNBQVMsRUFBQyxLQUFLO1FBRXRHUCxXQUFXa0I7SUFDZixHQUFHO1FBQUNGO1FBQU12QjtLQUFTO0lBRW5CVCxnREFBU0EsQ0FBQztRQUNOLElBQUlTLFVBQVU7WUFDVmlCLGFBQWFDLFdBQVc7WUFDeEJELGFBQWFhLFFBQVEsVUFBVUMsS0FBS0MsVUFBVTlCO1FBQ2xEO0lBQ0osR0FBRztRQUFDQTtLQUFRO0lBRVpYLGdEQUFTQSxDQUFDO1FBRU4sTUFBTTBDLEtBQUtoQixhQUFhaUIsUUFBUTtRQUVoQyxJQUFJRCxJQUFJO1lBQ0p6QixZQUFZdUIsS0FBS0ksTUFBTUY7UUFDM0I7SUFDSixHQUFHLEVBQUU7SUFFTCxxQkFDSSw4REFBQ0c7UUFBTUMsV0FBVzVDLGdFQUFRMkM7OzBCQUN0Qiw4REFBQ0U7Z0JBQUlELFdBQVc1QyxzRUFBYzhDOztrQ0FDMUIsOERBQUNDO3dCQUFNSCxXQUFXNUMsdUVBQWVnRDt3QkFBRUMsVUFBVTVDO3dCQUFZNkMsTUFBSzs7Ozs7O29CQUM3RDlDOzs7Ozs7OzBCQUdMLDhEQUFDK0M7Z0JBQUlQLFdBQVc1QyxxRUFBYW9EOztrQ0FDekIsOERBQUNDO3dCQUFFVCxXQUFXNUMsc0VBQWNzRDt3QkFBRUMsTUFBSztrQ0FBVTs7Ozs7O2tDQUM3Qyw4REFBQ0Y7d0JBQUVULFdBQVc1QyxzRUFBY3NEO3dCQUFFQyxNQUFLO2tDQUFXOzs7Ozs7a0NBQzlDLDhEQUFDRjt3QkFBRVQsV0FBVzVDLHNFQUFjc0Q7d0JBQUVDLE1BQUs7a0NBQVU7Ozs7Ozs7Ozs7OzswQkFHakQsOERBQUNWO2dCQUFJRCxXQUFXNUMsd0VBQWdCd0Q7O2tDQUM1Qiw4REFBQ0M7d0JBQ0dDLE9BQU9uRCxXQUFXOzRCQUFDb0QsZUFBZTs0QkFBUUMsaUJBQWlCO3dCQUFNLElBQUksQ0FBQzt3QkFDdEVoQixXQUFXNUMsK0VBQXVCNkQ7d0JBQ2xDQyxTQUFTLElBQU0vQyxZQUFZO2tDQUMxQjs7Ozs7O2tDQUdMLDhEQUFDMEM7d0JBQ0dDLE9BQU8sQ0FBQ25ELFdBQVc7NEJBQUNvRCxlQUFlOzRCQUFRQyxpQkFBaUI7d0JBQU0sSUFBSSxDQUFDO3dCQUN2RWhCLFdBQVc1QywrRUFBdUI2RDt3QkFDbENDLFNBQVN2QztrQ0FDWjs7Ozs7O2tDQUdELDhEQUFDc0I7d0JBQUlELFdBQVc1Qyw2RUFBcUIrRDs7MENBQ2pDLDhEQUFDbEI7MENBQUk7Ozs7Ozs0QkFDSnRDLFlBQWEsSUFBSXlELEtBQUt2RCxVQUFVLE1BQU13RCxjQUFjQyxNQUFNLElBQUk7MENBQy9ELDhEQUFDckI7MENBQUk7Ozs7Ozs0QkFDSCxJQUFJbUIsS0FBSyxDQUFDbkQsVUFBVSxLQUFLLE1BQU1vRCxjQUFjQyxNQUFNLElBQUk7Ozs7Ozs7a0NBRTdELDhEQUFDckI7d0JBQUlELFdBQVc1Qyx3RUFBZ0JtRTs7MENBQzVCLDhEQUFDdEI7MENBQUk7Ozs7Ozs0QkFDSCxJQUFJbUIsS0FBSzFELFNBQVMsTUFBTTJELGNBQWNDLE1BQU0sSUFBSTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUt0RTtHQXhHTS9EOztRQXFDaUNELDJEQUFRQTs7O0tBckN6Q0M7QUEwR04sK0RBQWVBLEtBQUtBLEVBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvc2NyZWVucy9pbmRleC9hc2lkZS9Bc2lkZS50c3g/OGFlNyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBGQywgdXNlQ2FsbGJhY2ssIHVzZUVmZmVjdCwgdXNlTWVtbywgdXNlUmVmLCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgY2wgZnJvbSBcIi4vQXNpZGUubW9kdWxlLmNzc1wiXHJcbmltcG9ydCB7IENoYW5nZXNTZXJ2aWNlIH0gZnJvbSBcIkAvc2VydmljZXMvY2hhbmdlcy5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7IHVzZVF1ZXJ5IH0gZnJvbSBcIkB0YW5zdGFjay9yZWFjdC1xdWVyeVwiO1xyXG5pbXBvcnQgeyBJQ2hhbmdlIH0gZnJvbSBcIkAvdHlwZXMvY2hhbmdlLmludGVyZmFjZVwiO1xyXG5cclxuaW50ZXJmYWNlIElBc2lkZSB7XHJcbiAgICBkYXRlOiBzdHJpbmcsXHJcbiAgICBjaGFuZ2VEYXRlOiBhbnksXHJcbiAgICByZW1haW46IG51bWJlclxyXG59XHJcblxyXG5cclxuY29uc3QgQXNpZGU6IEZDPElBc2lkZT4gPSAoe2RhdGUsIGNoYW5nZURhdGUsIHJlbWFpbn0pID0+IHtcclxuXHJcbiAgICBjb25zdCBbaXNDaGFuZ2UsIHNldElzQ2hhbmdlXSA9IHVzZVN0YXRlPEJvb2xlYW4+KGZhbHNlKTtcclxuICAgIGNvbnN0IFtzZWNvbmRzLCBzZXRTZWNvbmRzXSA9IHVzZVN0YXRlPG51bWJlcj4oMClcclxuICAgIGNvbnN0IFtpbnRlcnZhbHMsIHNldEludGVydmFsc10gPSB1c2VTdGF0ZTxudW1iZXJbXT4oW10pXHJcbiAgICBjb25zdCBbbW9udGx5LCBzZXRNb250aGx5XSA9IHVzZVN0YXRlPG51bWJlcj4oMClcclxuXHJcbiAgICBjb25zdCBzdGFydENoYW5nZSA9IChzZWNvbmRzOiBudW1iZXIpID0+IHtcclxuICAgICAgICBzZXRJc0NoYW5nZSh0cnVlKTtcclxuXHJcbiAgICAgICAgc2V0U2Vjb25kcyhzZWNvbmRzKVxyXG5cclxuICAgICAgICBjb25zdCBpZCA9IHNldEludGVydmFsKCgpID0+IHtcclxuICAgICAgICAgICAgc2V0U2Vjb25kcyhwcmV2U2Vjb25kcyA9PiBwcmV2U2Vjb25kcyArIDEpO1xyXG4gICAgICAgIH0sIDEwMDApO1xyXG5cclxuICAgICAgICBzZXRJbnRlcnZhbHMoaW50ZXJ2YWxzID0+IFsuLi5pbnRlcnZhbHMsIE5dKVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGNyZWF0ZSA9IGFzeW5jIChzZWNvbmRzOiBudW1iZXIpID0+IHtcclxuICAgICAgICBhd2FpdCBDaGFuZ2VzU2VydmljZS5jcmVhdGUoe2RhdGUsIGxlbmd0aDogU3RyaW5nKHNlY29uZHMpfSk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgZW5kQ2hhbmdlID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgICAgIHNldElzQ2hhbmdlKGZhbHNlKTtcclxuXHJcbiAgICAgICAgc2V0U2Vjb25kcygwKVxyXG4gICAgICAgIGNyZWF0ZShzZWNvbmRzKVxyXG5cclxuICAgICAgICBzZXRNb250aGx5KG1vbnRseSA9PiBtb250bHkgKyBzZWNvbmRzKVxyXG5cclxuICAgICAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbShcImNoYW5nZVwiKVxyXG5cclxuICAgICAgICBjbGVhckludGVydmFsKGludGVydmFsSWQpXHJcbiAgICB9XHJcblxyXG5cclxuICAgIGNvbnN0IHsgaXNMb2FkaW5nLCBlcnJvciwgZGF0YSB9ID0gdXNlUXVlcnkoXHJcbiAgICAgICAgWydjaGFuZ2UtYWxsJywgZGF0ZSwgaXNDaGFuZ2VdLCBhc3luYyAoKSA9PiBDaGFuZ2VzU2VydmljZS5nZXRBbGwoKVxyXG4gICAgKTtcclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IG1vbnRoU2Vjb25kcyA9IGRhdGE/LmRhdGEucmVkdWNlKChzdW1tOiBudW1iZXIsIGVsOiBJQ2hhbmdlKSA9PiBzdW1tICsgTnVtYmVyKGVsLmxlbmd0aCksIDApIHx8IDBcclxuXHJcbiAgICAgICAgc2V0TW9udGhseShtb250aFNlY29uZHMpXHJcbiAgICB9LCBbZGF0YSwgaXNDaGFuZ2VdKVxyXG5cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgaWYgKGlzQ2hhbmdlKSB7XHJcbiAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKFwiY2hhbmdlXCIpXHJcbiAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwiY2hhbmdlXCIsIEpTT04uc3RyaW5naWZ5KHNlY29uZHMpKVxyXG4gICAgICAgIH1cclxuICAgIH0sIFtzZWNvbmRzXSk7XHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuXHJcbiAgICAgICAgY29uc3QgcHIgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImNoYW5nZVwiKVxyXG5cclxuICAgICAgICBpZiAocHIpIHtcclxuICAgICAgICAgICAgc3RhcnRDaGFuZ2UoSlNPTi5wYXJzZShwcikpXHJcbiAgICAgICAgfVxyXG4gICAgfSwgW10pXHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8YXNpZGUgY2xhc3NOYW1lPXtjbC5hc2lkZX0+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbC5hc2lkZV9fZGF0ZX0+XHJcbiAgICAgICAgICAgICAgICA8aW5wdXQgY2xhc3NOYW1lPXtjbC5hc2lkZV9faW5wdXR9IG9uQ2hhbmdlPXtjaGFuZ2VEYXRlfSB0eXBlPVwiZGF0ZVwiIC8+XHJcbiAgICAgICAgICAgICAgICB7ZGF0ZX1cclxuICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICA8bmF2IGNsYXNzTmFtZT17Y2wuYXNpZGVfX25hdn0+XHJcbiAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9e2NsLmFzaWRlX19saW5rfSBocmVmPVwiY2xpZW50c1wiPtCh0L/QuNGB0L7QuiDQutC70LjQtdC90YLQvtCyPC9hPlxyXG4gICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPXtjbC5hc2lkZV9fbGlua30gaHJlZj1cInNlcnZpY2VzXCI+0KPRgdC70YPQs9C4PC9hPlxyXG4gICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPXtjbC5hc2lkZV9fbGlua30gaHJlZj1cImhpc3RvcnlcIj7QmNGB0YLQvtGA0LjRjzwvYT5cclxuICAgICAgICAgICAgPC9uYXY+XHJcblxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2wuYXNpZGVfX2NoYW5nZX0+XHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uIFxyXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlPXtpc0NoYW5nZSA/IHtwb2ludGVyRXZlbnRzOiBcIm5vbmVcIiwgYmFja2dyb3VuZENvbG9yOiBcImJsdWVcIn0gOiB7fX0gXHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbC5hc2lkZV9fY2hhbmdlX2J1dHRvbn1cclxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzdGFydENoYW5nZSgwKX1cclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgINCd0LDRh9Cw0YLRjCDRgdC80LXQvdGDXHJcbiAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uIFxyXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlPXshaXNDaGFuZ2UgPyB7cG9pbnRlckV2ZW50czogXCJub25lXCIsIGJhY2tncm91bmRDb2xvcjogXCJibHVlXCJ9IDoge319IFxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2wuYXNpZGVfX2NoYW5nZV9idXR0b259XHJcbiAgICAgICAgICAgICAgICAgICAgb25DbGljaz17ZW5kQ2hhbmdlfVxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgINCX0LDQstC10YDRiNC40YLRjCDRgdC80LXQvdGDXHJcbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbC5hc2lkZV9fY2hhbmdlX2JvZHl9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXY+0JLRgNC10LzRjyDRgdC80LXQvdGLOjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIHtpc0NoYW5nZSAmJiAobmV3IERhdGUoc2Vjb25kcyAqIDEwMDApLnRvSVNPU3RyaW5nKCkuc2xpY2UoMTEsIDE5KSl9XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdj7Ql9CwINC80LXRgdGP0YY6PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgeyhuZXcgRGF0ZSgobW9udGx5IHx8IDApICogMTAwMCkudG9JU09TdHJpbmcoKS5zbGljZSgxMSwgMTkpKX1cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsLmFzaWRlX19yZW1haW59PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXY+0J7RgdGC0LDQu9C+0YHRjDo8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICB7KG5ldyBEYXRlKHJlbWFpbiAqIDEwMDApLnRvSVNPU3RyaW5nKCkuc2xpY2UoMTEsIDE5KSl9XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9hc2lkZT5cclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQXNpZGUiXSwibmFtZXMiOlsidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJjbCIsIkNoYW5nZXNTZXJ2aWNlIiwidXNlUXVlcnkiLCJBc2lkZSIsImRhdGUiLCJjaGFuZ2VEYXRlIiwicmVtYWluIiwiaXNDaGFuZ2UiLCJzZXRJc0NoYW5nZSIsInNlY29uZHMiLCJzZXRTZWNvbmRzIiwiaW50ZXJ2YWxzIiwic2V0SW50ZXJ2YWxzIiwibW9udGx5Iiwic2V0TW9udGhseSIsInN0YXJ0Q2hhbmdlIiwiaWQiLCJzZXRJbnRlcnZhbCIsInByZXZTZWNvbmRzIiwiTiIsImNyZWF0ZSIsImxlbmd0aCIsIlN0cmluZyIsImVuZENoYW5nZSIsImxvY2FsU3RvcmFnZSIsInJlbW92ZUl0ZW0iLCJjbGVhckludGVydmFsIiwiaW50ZXJ2YWxJZCIsImlzTG9hZGluZyIsImVycm9yIiwiZGF0YSIsImdldEFsbCIsIm1vbnRoU2Vjb25kcyIsInJlZHVjZSIsInN1bW0iLCJlbCIsIk51bWJlciIsInNldEl0ZW0iLCJKU09OIiwic3RyaW5naWZ5IiwicHIiLCJnZXRJdGVtIiwicGFyc2UiLCJhc2lkZSIsImNsYXNzTmFtZSIsImRpdiIsImFzaWRlX19kYXRlIiwiaW5wdXQiLCJhc2lkZV9faW5wdXQiLCJvbkNoYW5nZSIsInR5cGUiLCJuYXYiLCJhc2lkZV9fbmF2IiwiYSIsImFzaWRlX19saW5rIiwiaHJlZiIsImFzaWRlX19jaGFuZ2UiLCJidXR0b24iLCJzdHlsZSIsInBvaW50ZXJFdmVudHMiLCJiYWNrZ3JvdW5kQ29sb3IiLCJhc2lkZV9fY2hhbmdlX2J1dHRvbiIsIm9uQ2xpY2siLCJhc2lkZV9fY2hhbmdlX2JvZHkiLCJEYXRlIiwidG9JU09TdHJpbmciLCJzbGljZSIsImFzaWRlX19yZW1haW4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/screens/index/aside/Aside.tsx\n"));

/***/ })

});