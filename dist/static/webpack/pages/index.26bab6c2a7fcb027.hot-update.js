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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Aside_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Aside.module.css */ \"./src/components/screens/index/aside/Aside.module.css\");\n/* harmony import */ var _Aside_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_Aside_module_css__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _services_changes_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/services/changes.service */ \"./src/services/changes.service.ts\");\n/* harmony import */ var _tanstack_react_query__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @tanstack/react-query */ \"./node_modules/@tanstack/react-query/build/lib/index.mjs\");\n\nvar _s = $RefreshSig$();\n\n\n\n\nconst Aside = (param)=>{\n    let { date , changeDate , remain  } = param;\n    _s();\n    const [isChange, setIsChange] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [seconds, setSeconds] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    const [intervalId, setIntervalId] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();\n    const [montly, setMonthly] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    const startChange = (seconds)=>{\n        setIsChange(true);\n        localStorage.setItem(\"change\", String(numbe));\n        setSeconds(seconds);\n        const id = setInterval(()=>{\n            setSeconds((prevSeconds)=>prevSeconds + 1);\n            const pr = localStorage.getItem(\"change\");\n            if (!pr) {\n                localStorage.setItem(\"change\", \"1\");\n            } else {\n                localStorage.removeItem(\"change\");\n                localStorage.setItem(\"change\", JSON.stringify(JSON.parse(pr) + 1));\n            }\n        }, 1000);\n        setIntervalId(id);\n    };\n    const create = async (seconds)=>{\n        await _services_changes_service__WEBPACK_IMPORTED_MODULE_2__.ChangesService.create({\n            date,\n            length: String(seconds)\n        });\n    };\n    const endChange = async ()=>{\n        setMonthly((montly)=>montly + seconds);\n        setIsChange(false);\n        setSeconds(0);\n        create(seconds);\n        localStorage.removeItem(\"change\");\n        clearInterval(intervalId);\n    };\n    const { isLoading , error , data  } = (0,_tanstack_react_query__WEBPACK_IMPORTED_MODULE_3__.useQuery)([\n        \"change-all\",\n        date,\n        isChange,\n        seconds\n    ], async ()=>_services_changes_service__WEBPACK_IMPORTED_MODULE_2__.ChangesService.getAll());\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const monthSeconds = (data === null || data === void 0 ? void 0 : data.data.reduce((summ, el)=>summ + Number(el.length), 0)) || 0;\n        setMonthly(monthSeconds);\n    }, [\n        data,\n        isChange\n    ]);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const pr = localStorage.getItem(\"change\");\n        console.log(pr);\n        if (pr) {\n            startChange(JSON.parse(pr));\n            localStorage.removeItem(\"change\");\n        }\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"aside\", {\n        className: (_Aside_module_css__WEBPACK_IMPORTED_MODULE_4___default().aside),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_Aside_module_css__WEBPACK_IMPORTED_MODULE_4___default().aside__date),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        className: (_Aside_module_css__WEBPACK_IMPORTED_MODULE_4___default().aside__input),\n                        onChange: changeDate,\n                        type: \"date\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Dmitry\\\\job\\\\freelance\\\\fr\\\\src\\\\components\\\\screens\\\\index\\\\aside\\\\Aside.tsx\",\n                        lineNumber: 84,\n                        columnNumber: 17\n                    }, undefined),\n                    date\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\Dmitry\\\\job\\\\freelance\\\\fr\\\\src\\\\components\\\\screens\\\\index\\\\aside\\\\Aside.tsx\",\n                lineNumber: 83,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"nav\", {\n                className: (_Aside_module_css__WEBPACK_IMPORTED_MODULE_4___default().aside__nav),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                        className: (_Aside_module_css__WEBPACK_IMPORTED_MODULE_4___default().aside__link),\n                        href: \"clients\",\n                        children: \"Список клиентов\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Dmitry\\\\job\\\\freelance\\\\fr\\\\src\\\\components\\\\screens\\\\index\\\\aside\\\\Aside.tsx\",\n                        lineNumber: 89,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                        className: (_Aside_module_css__WEBPACK_IMPORTED_MODULE_4___default().aside__link),\n                        href: \"services\",\n                        children: \"Услуги\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Dmitry\\\\job\\\\freelance\\\\fr\\\\src\\\\components\\\\screens\\\\index\\\\aside\\\\Aside.tsx\",\n                        lineNumber: 90,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                        className: (_Aside_module_css__WEBPACK_IMPORTED_MODULE_4___default().aside__link),\n                        href: \"history\",\n                        children: \"История\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Dmitry\\\\job\\\\freelance\\\\fr\\\\src\\\\components\\\\screens\\\\index\\\\aside\\\\Aside.tsx\",\n                        lineNumber: 91,\n                        columnNumber: 17\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\Dmitry\\\\job\\\\freelance\\\\fr\\\\src\\\\components\\\\screens\\\\index\\\\aside\\\\Aside.tsx\",\n                lineNumber: 88,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_Aside_module_css__WEBPACK_IMPORTED_MODULE_4___default().aside__change),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        style: isChange ? {\n                            pointerEvents: \"none\",\n                            backgroundColor: \"blue\"\n                        } : {},\n                        className: (_Aside_module_css__WEBPACK_IMPORTED_MODULE_4___default().aside__change_button),\n                        onClick: ()=>startChange(0),\n                        children: \"Начать смену\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Dmitry\\\\job\\\\freelance\\\\fr\\\\src\\\\components\\\\screens\\\\index\\\\aside\\\\Aside.tsx\",\n                        lineNumber: 95,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        style: !isChange ? {\n                            pointerEvents: \"none\",\n                            backgroundColor: \"blue\"\n                        } : {},\n                        className: (_Aside_module_css__WEBPACK_IMPORTED_MODULE_4___default().aside__change_button),\n                        onClick: endChange,\n                        children: \"Завершить смену\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Dmitry\\\\job\\\\freelance\\\\fr\\\\src\\\\components\\\\screens\\\\index\\\\aside\\\\Aside.tsx\",\n                        lineNumber: 102,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_Aside_module_css__WEBPACK_IMPORTED_MODULE_4___default().aside__change_body),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                children: \"Время смены:\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Dmitry\\\\job\\\\freelance\\\\fr\\\\src\\\\components\\\\screens\\\\index\\\\aside\\\\Aside.tsx\",\n                                lineNumber: 110,\n                                columnNumber: 21\n                            }, undefined),\n                            isChange && new Date(seconds * 1000).toISOString().slice(11, 19),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                children: \"За месяц:\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Dmitry\\\\job\\\\freelance\\\\fr\\\\src\\\\components\\\\screens\\\\index\\\\aside\\\\Aside.tsx\",\n                                lineNumber: 112,\n                                columnNumber: 21\n                            }, undefined),\n                            new Date((montly || 0) * 1000).toISOString().slice(11, 19)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\Dmitry\\\\job\\\\freelance\\\\fr\\\\src\\\\components\\\\screens\\\\index\\\\aside\\\\Aside.tsx\",\n                        lineNumber: 109,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_Aside_module_css__WEBPACK_IMPORTED_MODULE_4___default().aside__remain),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                children: \"Осталось:\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Dmitry\\\\job\\\\freelance\\\\fr\\\\src\\\\components\\\\screens\\\\index\\\\aside\\\\Aside.tsx\",\n                                lineNumber: 116,\n                                columnNumber: 21\n                            }, undefined),\n                            new Date(remain * 1000).toISOString().slice(11, 19)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\Dmitry\\\\job\\\\freelance\\\\fr\\\\src\\\\components\\\\screens\\\\index\\\\aside\\\\Aside.tsx\",\n                        lineNumber: 115,\n                        columnNumber: 17\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\Dmitry\\\\job\\\\freelance\\\\fr\\\\src\\\\components\\\\screens\\\\index\\\\aside\\\\Aside.tsx\",\n                lineNumber: 94,\n                columnNumber: 13\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\Dmitry\\\\job\\\\freelance\\\\fr\\\\src\\\\components\\\\screens\\\\index\\\\aside\\\\Aside.tsx\",\n        lineNumber: 82,\n        columnNumber: 9\n    }, undefined);\n};\n_s(Aside, \"auApwOwEFRX7nCYTuOg1Vj7d9s4=\", false, function() {\n    return [\n        _tanstack_react_query__WEBPACK_IMPORTED_MODULE_3__.useQuery\n    ];\n});\n_c = Aside;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Aside);\nvar _c;\n$RefreshReg$(_c, \"Aside\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9zY3JlZW5zL2luZGV4L2FzaWRlL0FzaWRlLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUE4RTtBQUMzQztBQUN5QjtBQUNYO0FBVWpELE1BQU1LLFFBQW9CO1FBQUMsRUFBQ0MsS0FBSSxFQUFFQyxXQUFVLEVBQUVDLE9BQU0sRUFBQzs7SUFFakQsTUFBTSxDQUFDQyxVQUFVQyxZQUFZLEdBQUdULCtDQUFRQSxDQUFVO0lBQ2xELE1BQU0sQ0FBQ1UsU0FBU0MsV0FBVyxHQUFHWCwrQ0FBUUEsQ0FBUztJQUMvQyxNQUFNLENBQUNZLFlBQVlDLGNBQWMsR0FBR2IsK0NBQVFBO0lBQzVDLE1BQU0sQ0FBQ2MsUUFBUUMsV0FBVyxHQUFHZiwrQ0FBUUEsQ0FBUztJQUU5QyxNQUFNZ0IsY0FBYyxDQUFDTjtRQUNqQkQsWUFBWTtRQUVaUSxhQUFhQyxRQUFRLFVBQVVDLE9BQU9DO1FBRXRDVCxXQUFXRDtRQUVYLE1BQU1XLEtBQUtDLFlBQVk7WUFDbkJYLFdBQVdZLENBQUFBLGNBQWVBLGNBQWM7WUFFeEMsTUFBTUMsS0FBS1AsYUFBYVEsUUFBUTtZQUVoQyxJQUFJLENBQUNELElBQUk7Z0JBQ0xQLGFBQWFDLFFBQVEsVUFBVTtZQUNuQyxPQUFPO2dCQUNIRCxhQUFhUyxXQUFXO2dCQUN4QlQsYUFBYUMsUUFBUSxVQUFVUyxLQUFLQyxVQUFVRCxLQUFLRSxNQUFNTCxNQUFNO1lBQ25FO1FBQ0osR0FBRztRQUVIWCxjQUFjUTtJQUNsQjtJQUVBLE1BQU1TLFNBQVMsT0FBT3BCO1FBQ2xCLE1BQU1SLDRFQUFxQjRCLENBQUM7WUFBQ3pCO1lBQU0wQixRQUFRWixPQUFPVDtRQUFRO0lBQzlEO0lBRUEsTUFBTXNCLFlBQVk7UUFDZGpCLFdBQVdELENBQUFBLFNBQVVBLFNBQVNKO1FBRTlCRCxZQUFZO1FBRVpFLFdBQVc7UUFDWG1CLE9BQU9wQjtRQUVQTyxhQUFhUyxXQUFXO1FBRXhCTyxjQUFjckI7SUFDbEI7SUFHQSxNQUFNLEVBQUVzQixVQUFTLEVBQUVDLE1BQUssRUFBRUMsS0FBSSxFQUFFLEdBQUdqQywrREFBUUEsQ0FDdkM7UUFBQztRQUFjRTtRQUFNRztRQUFVRTtLQUFRLEVBQUUsVUFBWVIsNEVBQXFCbUM7SUFHOUV0QyxnREFBU0EsQ0FBQztRQUNOLE1BQU11QyxlQUFlRixDQUFBQSxpQkFBQUEsa0JBQUFBLEtBQUFBLElBQUFBLEtBQU1BLEtBQUtHLE9BQU8sQ0FBQ0MsTUFBY0MsS0FBZ0JELE9BQU9FLE9BQU9ELEdBQUdWLFNBQVMsRUFBQyxLQUFLO1FBRXRHaEIsV0FBV3VCO0lBQ2YsR0FBRztRQUFDRjtRQUFNNUI7S0FBUztJQUVuQlQsZ0RBQVNBLENBQUM7UUFDTixNQUFNeUIsS0FBS1AsYUFBYVEsUUFBUTtRQUNoQ2tCLFFBQVFDLElBQUlwQjtRQUNaLElBQUlBLElBQUk7WUFDSlIsWUFBWVcsS0FBS0UsTUFBTUw7WUFDdkJQLGFBQWFTLFdBQVc7UUFDNUI7SUFDSixHQUFHLEVBQUU7SUFFTCxxQkFDSSw4REFBQ21CO1FBQU1DLFdBQVc3QyxnRUFBUTRDOzswQkFDdEIsOERBQUNFO2dCQUFJRCxXQUFXN0Msc0VBQWMrQzs7a0NBQzFCLDhEQUFDQzt3QkFBTUgsV0FBVzdDLHVFQUFlaUQ7d0JBQUVDLFVBQVU3Qzt3QkFBWThDLE1BQUs7Ozs7OztvQkFDN0QvQzs7Ozs7OzswQkFHTCw4REFBQ2dEO2dCQUFJUCxXQUFXN0MscUVBQWFxRDs7a0NBQ3pCLDhEQUFDQzt3QkFBRVQsV0FBVzdDLHNFQUFjdUQ7d0JBQUVDLE1BQUs7a0NBQVU7Ozs7OztrQ0FDN0MsOERBQUNGO3dCQUFFVCxXQUFXN0Msc0VBQWN1RDt3QkFBRUMsTUFBSztrQ0FBVzs7Ozs7O2tDQUM5Qyw4REFBQ0Y7d0JBQUVULFdBQVc3QyxzRUFBY3VEO3dCQUFFQyxNQUFLO2tDQUFVOzs7Ozs7Ozs7Ozs7MEJBR2pELDhEQUFDVjtnQkFBSUQsV0FBVzdDLHdFQUFnQnlEOztrQ0FDNUIsOERBQUNDO3dCQUNHQyxPQUFPcEQsV0FBVzs0QkFBQ3FELGVBQWU7NEJBQVFDLGlCQUFpQjt3QkFBTSxJQUFJLENBQUM7d0JBQ3RFaEIsV0FBVzdDLCtFQUF1QjhEO3dCQUNsQ0MsU0FBUyxJQUFNaEQsWUFBWTtrQ0FDMUI7Ozs7OztrQ0FHTCw4REFBQzJDO3dCQUNHQyxPQUFPLENBQUNwRCxXQUFXOzRCQUFDcUQsZUFBZTs0QkFBUUMsaUJBQWlCO3dCQUFNLElBQUksQ0FBQzt3QkFDdkVoQixXQUFXN0MsK0VBQXVCOEQ7d0JBQ2xDQyxTQUFTaEM7a0NBQ1o7Ozs7OztrQ0FHRCw4REFBQ2U7d0JBQUlELFdBQVc3Qyw2RUFBcUJnRTs7MENBQ2pDLDhEQUFDbEI7MENBQUk7Ozs7Ozs0QkFDSnZDLFlBQWEsSUFBSTBELEtBQUt4RCxVQUFVLE1BQU15RCxjQUFjQyxNQUFNLElBQUk7MENBQy9ELDhEQUFDckI7MENBQUk7Ozs7Ozs0QkFDSCxJQUFJbUIsS0FBSyxDQUFDcEQsVUFBVSxLQUFLLE1BQU1xRCxjQUFjQyxNQUFNLElBQUk7Ozs7Ozs7a0NBRTdELDhEQUFDckI7d0JBQUlELFdBQVc3Qyx3RUFBZ0JvRTs7MENBQzVCLDhEQUFDdEI7MENBQUk7Ozs7Ozs0QkFDSCxJQUFJbUIsS0FBSzNELFNBQVMsTUFBTTRELGNBQWNDLE1BQU0sSUFBSTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUt0RTtHQTVHTWhFOztRQWdEaUNELDJEQUFRQTs7O0tBaER6Q0M7QUE4R04sK0RBQWVBLEtBQUtBLEVBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvc2NyZWVucy9pbmRleC9hc2lkZS9Bc2lkZS50c3g/OGFlNyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBGQywgdXNlQ2FsbGJhY2ssIHVzZUVmZmVjdCwgdXNlTWVtbywgdXNlUmVmLCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgY2wgZnJvbSBcIi4vQXNpZGUubW9kdWxlLmNzc1wiXHJcbmltcG9ydCB7IENoYW5nZXNTZXJ2aWNlIH0gZnJvbSBcIkAvc2VydmljZXMvY2hhbmdlcy5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7IHVzZVF1ZXJ5IH0gZnJvbSBcIkB0YW5zdGFjay9yZWFjdC1xdWVyeVwiO1xyXG5pbXBvcnQgeyBJQ2hhbmdlIH0gZnJvbSBcIkAvdHlwZXMvY2hhbmdlLmludGVyZmFjZVwiO1xyXG5cclxuaW50ZXJmYWNlIElBc2lkZSB7XHJcbiAgICBkYXRlOiBzdHJpbmcsXHJcbiAgICBjaGFuZ2VEYXRlOiBhbnksXHJcbiAgICByZW1haW46IG51bWJlclxyXG59XHJcblxyXG5cclxuY29uc3QgQXNpZGU6IEZDPElBc2lkZT4gPSAoe2RhdGUsIGNoYW5nZURhdGUsIHJlbWFpbn0pID0+IHtcclxuXHJcbiAgICBjb25zdCBbaXNDaGFuZ2UsIHNldElzQ2hhbmdlXSA9IHVzZVN0YXRlPEJvb2xlYW4+KGZhbHNlKTtcclxuICAgIGNvbnN0IFtzZWNvbmRzLCBzZXRTZWNvbmRzXSA9IHVzZVN0YXRlPG51bWJlcj4oMClcclxuICAgIGNvbnN0IFtpbnRlcnZhbElkLCBzZXRJbnRlcnZhbElkXSA9IHVzZVN0YXRlPGFueT4oKVxyXG4gICAgY29uc3QgW21vbnRseSwgc2V0TW9udGhseV0gPSB1c2VTdGF0ZTxudW1iZXI+KDApXHJcblxyXG4gICAgY29uc3Qgc3RhcnRDaGFuZ2UgPSAoc2Vjb25kczogbnVtYmVyKSA9PiB7XHJcbiAgICAgICAgc2V0SXNDaGFuZ2UodHJ1ZSk7XHJcblxyXG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwiY2hhbmdlXCIsIFN0cmluZyhudW1iZSkpXHJcblxyXG4gICAgICAgIHNldFNlY29uZHMoc2Vjb25kcylcclxuXHJcbiAgICAgICAgY29uc3QgaWQgPSBzZXRJbnRlcnZhbCgoKSA9PiB7XHJcbiAgICAgICAgICAgIHNldFNlY29uZHMocHJldlNlY29uZHMgPT4gcHJldlNlY29uZHMgKyAxKTtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IHByID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJjaGFuZ2VcIilcclxuXHJcbiAgICAgICAgICAgIGlmICghcHIpIHtcclxuICAgICAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwiY2hhbmdlXCIsIFwiMVwiKVxyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oXCJjaGFuZ2VcIilcclxuICAgICAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwiY2hhbmdlXCIsIEpTT04uc3RyaW5naWZ5KEpTT04ucGFyc2UocHIpICsgMSkpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LCAxMDAwKTtcclxuXHJcbiAgICAgICAgc2V0SW50ZXJ2YWxJZChpZClcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBjcmVhdGUgPSBhc3luYyAoc2Vjb25kczogbnVtYmVyKSA9PiB7XHJcbiAgICAgICAgYXdhaXQgQ2hhbmdlc1NlcnZpY2UuY3JlYXRlKHtkYXRlLCBsZW5ndGg6IFN0cmluZyhzZWNvbmRzKX0pO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGVuZENoYW5nZSA9IGFzeW5jICgpID0+IHtcclxuICAgICAgICBzZXRNb250aGx5KG1vbnRseSA9PiBtb250bHkgKyBzZWNvbmRzKVxyXG5cclxuICAgICAgICBzZXRJc0NoYW5nZShmYWxzZSk7XHJcblxyXG4gICAgICAgIHNldFNlY29uZHMoMClcclxuICAgICAgICBjcmVhdGUoc2Vjb25kcylcclxuXHJcbiAgICAgICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oXCJjaGFuZ2VcIilcclxuXHJcbiAgICAgICAgY2xlYXJJbnRlcnZhbChpbnRlcnZhbElkKVxyXG4gICAgfVxyXG5cclxuXHJcbiAgICBjb25zdCB7IGlzTG9hZGluZywgZXJyb3IsIGRhdGEgfSA9IHVzZVF1ZXJ5KFxyXG4gICAgICAgIFsnY2hhbmdlLWFsbCcsIGRhdGUsIGlzQ2hhbmdlLCBzZWNvbmRzXSwgYXN5bmMgKCkgPT4gQ2hhbmdlc1NlcnZpY2UuZ2V0QWxsKClcclxuICAgICk7XHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBjb25zdCBtb250aFNlY29uZHMgPSBkYXRhPy5kYXRhLnJlZHVjZSgoc3VtbTogbnVtYmVyLCBlbDogSUNoYW5nZSkgPT4gc3VtbSArIE51bWJlcihlbC5sZW5ndGgpLCAwKSB8fCAwXHJcblxyXG4gICAgICAgIHNldE1vbnRobHkobW9udGhTZWNvbmRzKVxyXG4gICAgfSwgW2RhdGEsIGlzQ2hhbmdlXSlcclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHByID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJjaGFuZ2VcIilcclxuICAgICAgICBjb25zb2xlLmxvZyhwcilcclxuICAgICAgICBpZiAocHIpIHtcclxuICAgICAgICAgICAgc3RhcnRDaGFuZ2UoSlNPTi5wYXJzZShwcikpXHJcbiAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKFwiY2hhbmdlXCIpXHJcbiAgICAgICAgfVxyXG4gICAgfSwgW10pXHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8YXNpZGUgY2xhc3NOYW1lPXtjbC5hc2lkZX0+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbC5hc2lkZV9fZGF0ZX0+XHJcbiAgICAgICAgICAgICAgICA8aW5wdXQgY2xhc3NOYW1lPXtjbC5hc2lkZV9faW5wdXR9IG9uQ2hhbmdlPXtjaGFuZ2VEYXRlfSB0eXBlPVwiZGF0ZVwiIC8+XHJcbiAgICAgICAgICAgICAgICB7ZGF0ZX1cclxuICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICA8bmF2IGNsYXNzTmFtZT17Y2wuYXNpZGVfX25hdn0+XHJcbiAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9e2NsLmFzaWRlX19saW5rfSBocmVmPVwiY2xpZW50c1wiPtCh0L/QuNGB0L7QuiDQutC70LjQtdC90YLQvtCyPC9hPlxyXG4gICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPXtjbC5hc2lkZV9fbGlua30gaHJlZj1cInNlcnZpY2VzXCI+0KPRgdC70YPQs9C4PC9hPlxyXG4gICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPXtjbC5hc2lkZV9fbGlua30gaHJlZj1cImhpc3RvcnlcIj7QmNGB0YLQvtGA0LjRjzwvYT5cclxuICAgICAgICAgICAgPC9uYXY+XHJcblxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2wuYXNpZGVfX2NoYW5nZX0+XHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uIFxyXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlPXtpc0NoYW5nZSA/IHtwb2ludGVyRXZlbnRzOiBcIm5vbmVcIiwgYmFja2dyb3VuZENvbG9yOiBcImJsdWVcIn0gOiB7fX0gXHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbC5hc2lkZV9fY2hhbmdlX2J1dHRvbn1cclxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzdGFydENoYW5nZSgwKX1cclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgINCd0LDRh9Cw0YLRjCDRgdC80LXQvdGDXHJcbiAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uIFxyXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlPXshaXNDaGFuZ2UgPyB7cG9pbnRlckV2ZW50czogXCJub25lXCIsIGJhY2tncm91bmRDb2xvcjogXCJibHVlXCJ9IDoge319IFxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2wuYXNpZGVfX2NoYW5nZV9idXR0b259XHJcbiAgICAgICAgICAgICAgICAgICAgb25DbGljaz17ZW5kQ2hhbmdlfVxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgINCX0LDQstC10YDRiNC40YLRjCDRgdC80LXQvdGDXHJcbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbC5hc2lkZV9fY2hhbmdlX2JvZHl9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXY+0JLRgNC10LzRjyDRgdC80LXQvdGLOjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIHtpc0NoYW5nZSAmJiAobmV3IERhdGUoc2Vjb25kcyAqIDEwMDApLnRvSVNPU3RyaW5nKCkuc2xpY2UoMTEsIDE5KSl9XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdj7Ql9CwINC80LXRgdGP0YY6PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgeyhuZXcgRGF0ZSgobW9udGx5IHx8IDApICogMTAwMCkudG9JU09TdHJpbmcoKS5zbGljZSgxMSwgMTkpKX1cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsLmFzaWRlX19yZW1haW59PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXY+0J7RgdGC0LDQu9C+0YHRjDo8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICB7KG5ldyBEYXRlKHJlbWFpbiAqIDEwMDApLnRvSVNPU3RyaW5nKCkuc2xpY2UoMTEsIDE5KSl9XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9hc2lkZT5cclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQXNpZGUiXSwibmFtZXMiOlsidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJjbCIsIkNoYW5nZXNTZXJ2aWNlIiwidXNlUXVlcnkiLCJBc2lkZSIsImRhdGUiLCJjaGFuZ2VEYXRlIiwicmVtYWluIiwiaXNDaGFuZ2UiLCJzZXRJc0NoYW5nZSIsInNlY29uZHMiLCJzZXRTZWNvbmRzIiwiaW50ZXJ2YWxJZCIsInNldEludGVydmFsSWQiLCJtb250bHkiLCJzZXRNb250aGx5Iiwic3RhcnRDaGFuZ2UiLCJsb2NhbFN0b3JhZ2UiLCJzZXRJdGVtIiwiU3RyaW5nIiwibnVtYmUiLCJpZCIsInNldEludGVydmFsIiwicHJldlNlY29uZHMiLCJwciIsImdldEl0ZW0iLCJyZW1vdmVJdGVtIiwiSlNPTiIsInN0cmluZ2lmeSIsInBhcnNlIiwiY3JlYXRlIiwibGVuZ3RoIiwiZW5kQ2hhbmdlIiwiY2xlYXJJbnRlcnZhbCIsImlzTG9hZGluZyIsImVycm9yIiwiZGF0YSIsImdldEFsbCIsIm1vbnRoU2Vjb25kcyIsInJlZHVjZSIsInN1bW0iLCJlbCIsIk51bWJlciIsImNvbnNvbGUiLCJsb2ciLCJhc2lkZSIsImNsYXNzTmFtZSIsImRpdiIsImFzaWRlX19kYXRlIiwiaW5wdXQiLCJhc2lkZV9faW5wdXQiLCJvbkNoYW5nZSIsInR5cGUiLCJuYXYiLCJhc2lkZV9fbmF2IiwiYSIsImFzaWRlX19saW5rIiwiaHJlZiIsImFzaWRlX19jaGFuZ2UiLCJidXR0b24iLCJzdHlsZSIsInBvaW50ZXJFdmVudHMiLCJiYWNrZ3JvdW5kQ29sb3IiLCJhc2lkZV9fY2hhbmdlX2J1dHRvbiIsIm9uQ2xpY2siLCJhc2lkZV9fY2hhbmdlX2JvZHkiLCJEYXRlIiwidG9JU09TdHJpbmciLCJzbGljZSIsImFzaWRlX19yZW1haW4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/screens/index/aside/Aside.tsx\n"));

/***/ })

});