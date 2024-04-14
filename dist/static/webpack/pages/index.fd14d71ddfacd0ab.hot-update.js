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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Aside_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Aside.module.css */ \"./src/components/screens/index/aside/Aside.module.css\");\n/* harmony import */ var _Aside_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_Aside_module_css__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _services_changes_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/services/changes.service */ \"./src/services/changes.service.ts\");\n/* harmony import */ var _tanstack_react_query__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @tanstack/react-query */ \"./node_modules/@tanstack/react-query/build/lib/index.mjs\");\n\nvar _s = $RefreshSig$();\n\n\n\n\nconst Aside = (param)=>{\n    let { date , changeDate , remain  } = param;\n    _s();\n    const [isChange, setIsChange] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [seconds, setSeconds] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    const [intervalId, setIntervalId] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();\n    const [montly, setMonthly] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    const startChange = (seconds)=>{\n        localStorage.setItem(\"change\", String(seconds));\n        setIsChange(true);\n        setSeconds(seconds);\n        const id = setInterval(()=>{\n            setSeconds((prevSeconds)=>prevSeconds + 1);\n            const pr = localStorage.getItem(\"change\");\n            if (!pr) {\n                localStorage.setItem(\"change\", \"1\");\n            } else {\n                localStorage.removeItem(\"change\");\n                localStorage.setItem(\"change\", JSON.stringify(JSON.parse(pr) + 1));\n            }\n        }, 1000);\n        setIntervalId(id);\n    };\n    const create = async (seconds)=>{\n        await _services_changes_service__WEBPACK_IMPORTED_MODULE_2__.ChangesService.create({\n            date,\n            length: String(seconds)\n        });\n    };\n    const endChange = async ()=>{\n        setMonthly((montly)=>montly + seconds);\n        setIsChange(false);\n        setSeconds(0);\n        create(seconds);\n        localStorage.removeItem(\"change\");\n        clearInterval(intervalId);\n    };\n    const { isLoading , error , data  } = (0,_tanstack_react_query__WEBPACK_IMPORTED_MODULE_3__.useQuery)([\n        \"change-all\",\n        date,\n        isChange,\n        seconds\n    ], async ()=>_services_changes_service__WEBPACK_IMPORTED_MODULE_2__.ChangesService.getAll());\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const monthSeconds = (data === null || data === void 0 ? void 0 : data.data.reduce((summ, el)=>summ + Number(el.length), 0)) || 0;\n        setMonthly(monthSeconds);\n    }, [\n        data,\n        isChange\n    ]);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const pr = localStorage.getItem(\"change\");\n        console.log(pr);\n        if (pr) {\n            startChange(JSON.parse(pr));\n            localStorage.removeItem(\"change\");\n        }\n        return ()=>clear;\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"aside\", {\n        className: (_Aside_module_css__WEBPACK_IMPORTED_MODULE_4___default().aside),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_Aside_module_css__WEBPACK_IMPORTED_MODULE_4___default().aside__date),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        className: (_Aside_module_css__WEBPACK_IMPORTED_MODULE_4___default().aside__input),\n                        onChange: changeDate,\n                        type: \"date\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Dmitry\\\\job\\\\freelance\\\\fr\\\\src\\\\components\\\\screens\\\\index\\\\aside\\\\Aside.tsx\",\n                        lineNumber: 86,\n                        columnNumber: 17\n                    }, undefined),\n                    date\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\Dmitry\\\\job\\\\freelance\\\\fr\\\\src\\\\components\\\\screens\\\\index\\\\aside\\\\Aside.tsx\",\n                lineNumber: 85,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"nav\", {\n                className: (_Aside_module_css__WEBPACK_IMPORTED_MODULE_4___default().aside__nav),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                        className: (_Aside_module_css__WEBPACK_IMPORTED_MODULE_4___default().aside__link),\n                        href: \"clients\",\n                        children: \"Список клиентов\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Dmitry\\\\job\\\\freelance\\\\fr\\\\src\\\\components\\\\screens\\\\index\\\\aside\\\\Aside.tsx\",\n                        lineNumber: 91,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                        className: (_Aside_module_css__WEBPACK_IMPORTED_MODULE_4___default().aside__link),\n                        href: \"services\",\n                        children: \"Услуги\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Dmitry\\\\job\\\\freelance\\\\fr\\\\src\\\\components\\\\screens\\\\index\\\\aside\\\\Aside.tsx\",\n                        lineNumber: 92,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                        className: (_Aside_module_css__WEBPACK_IMPORTED_MODULE_4___default().aside__link),\n                        href: \"history\",\n                        children: \"История\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Dmitry\\\\job\\\\freelance\\\\fr\\\\src\\\\components\\\\screens\\\\index\\\\aside\\\\Aside.tsx\",\n                        lineNumber: 93,\n                        columnNumber: 17\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\Dmitry\\\\job\\\\freelance\\\\fr\\\\src\\\\components\\\\screens\\\\index\\\\aside\\\\Aside.tsx\",\n                lineNumber: 90,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_Aside_module_css__WEBPACK_IMPORTED_MODULE_4___default().aside__change),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        style: isChange ? {\n                            pointerEvents: \"none\",\n                            backgroundColor: \"blue\"\n                        } : {},\n                        className: (_Aside_module_css__WEBPACK_IMPORTED_MODULE_4___default().aside__change_button),\n                        onClick: ()=>startChange(0),\n                        children: \"Начать смену\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Dmitry\\\\job\\\\freelance\\\\fr\\\\src\\\\components\\\\screens\\\\index\\\\aside\\\\Aside.tsx\",\n                        lineNumber: 97,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        style: !isChange ? {\n                            pointerEvents: \"none\",\n                            backgroundColor: \"blue\"\n                        } : {},\n                        className: (_Aside_module_css__WEBPACK_IMPORTED_MODULE_4___default().aside__change_button),\n                        onClick: endChange,\n                        children: \"Завершить смену\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Dmitry\\\\job\\\\freelance\\\\fr\\\\src\\\\components\\\\screens\\\\index\\\\aside\\\\Aside.tsx\",\n                        lineNumber: 104,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_Aside_module_css__WEBPACK_IMPORTED_MODULE_4___default().aside__change_body),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                children: \"Время смены:\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Dmitry\\\\job\\\\freelance\\\\fr\\\\src\\\\components\\\\screens\\\\index\\\\aside\\\\Aside.tsx\",\n                                lineNumber: 112,\n                                columnNumber: 21\n                            }, undefined),\n                            isChange && new Date(seconds * 1000).toISOString().slice(11, 19),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                children: \"За месяц:\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Dmitry\\\\job\\\\freelance\\\\fr\\\\src\\\\components\\\\screens\\\\index\\\\aside\\\\Aside.tsx\",\n                                lineNumber: 114,\n                                columnNumber: 21\n                            }, undefined),\n                            new Date((montly || 0) * 1000).toISOString().slice(11, 19)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\Dmitry\\\\job\\\\freelance\\\\fr\\\\src\\\\components\\\\screens\\\\index\\\\aside\\\\Aside.tsx\",\n                        lineNumber: 111,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_Aside_module_css__WEBPACK_IMPORTED_MODULE_4___default().aside__remain),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                children: \"Осталось:\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Dmitry\\\\job\\\\freelance\\\\fr\\\\src\\\\components\\\\screens\\\\index\\\\aside\\\\Aside.tsx\",\n                                lineNumber: 118,\n                                columnNumber: 21\n                            }, undefined),\n                            new Date(remain * 1000).toISOString().slice(11, 19)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\Dmitry\\\\job\\\\freelance\\\\fr\\\\src\\\\components\\\\screens\\\\index\\\\aside\\\\Aside.tsx\",\n                        lineNumber: 117,\n                        columnNumber: 17\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\Dmitry\\\\job\\\\freelance\\\\fr\\\\src\\\\components\\\\screens\\\\index\\\\aside\\\\Aside.tsx\",\n                lineNumber: 96,\n                columnNumber: 13\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\Dmitry\\\\job\\\\freelance\\\\fr\\\\src\\\\components\\\\screens\\\\index\\\\aside\\\\Aside.tsx\",\n        lineNumber: 84,\n        columnNumber: 9\n    }, undefined);\n};\n_s(Aside, \"auApwOwEFRX7nCYTuOg1Vj7d9s4=\", false, function() {\n    return [\n        _tanstack_react_query__WEBPACK_IMPORTED_MODULE_3__.useQuery\n    ];\n});\n_c = Aside;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Aside);\nvar _c;\n$RefreshReg$(_c, \"Aside\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9zY3JlZW5zL2luZGV4L2FzaWRlL0FzaWRlLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUE4RTtBQUMzQztBQUN5QjtBQUNYO0FBVWpELE1BQU1LLFFBQW9CO1FBQUMsRUFBQ0MsS0FBSSxFQUFFQyxXQUFVLEVBQUVDLE9BQU0sRUFBQzs7SUFFakQsTUFBTSxDQUFDQyxVQUFVQyxZQUFZLEdBQUdULCtDQUFRQSxDQUFVO0lBQ2xELE1BQU0sQ0FBQ1UsU0FBU0MsV0FBVyxHQUFHWCwrQ0FBUUEsQ0FBUztJQUMvQyxNQUFNLENBQUNZLFlBQVlDLGNBQWMsR0FBR2IsK0NBQVFBO0lBQzVDLE1BQU0sQ0FBQ2MsUUFBUUMsV0FBVyxHQUFHZiwrQ0FBUUEsQ0FBUztJQUU5QyxNQUFNZ0IsY0FBYyxDQUFDTjtRQUNqQk8sYUFBYUMsUUFBUSxVQUFVQyxPQUFPVDtRQUV0Q0QsWUFBWTtRQUVaRSxXQUFXRDtRQUVYLE1BQU1VLEtBQUtDLFlBQVk7WUFDbkJWLFdBQVdXLENBQUFBLGNBQWVBLGNBQWM7WUFFeEMsTUFBTUMsS0FBS04sYUFBYU8sUUFBUTtZQUVoQyxJQUFJLENBQUNELElBQUk7Z0JBQ0xOLGFBQWFDLFFBQVEsVUFBVTtZQUNuQyxPQUFPO2dCQUNIRCxhQUFhUSxXQUFXO2dCQUN4QlIsYUFBYUMsUUFBUSxVQUFVUSxLQUFLQyxVQUFVRCxLQUFLRSxNQUFNTCxNQUFNO1lBQ25FO1FBQ0osR0FBRztRQUVIVixjQUFjTztJQUNsQjtJQUVBLE1BQU1TLFNBQVMsT0FBT25CO1FBQ2xCLE1BQU1SLDRFQUFxQjJCLENBQUM7WUFBQ3hCO1lBQU15QixRQUFRWCxPQUFPVDtRQUFRO0lBQzlEO0lBRUEsTUFBTXFCLFlBQVk7UUFDZGhCLFdBQVdELENBQUFBLFNBQVVBLFNBQVNKO1FBRTlCRCxZQUFZO1FBRVpFLFdBQVc7UUFDWGtCLE9BQU9uQjtRQUVQTyxhQUFhUSxXQUFXO1FBRXhCTyxjQUFjcEI7SUFDbEI7SUFHQSxNQUFNLEVBQUVxQixVQUFTLEVBQUVDLE1BQUssRUFBRUMsS0FBSSxFQUFFLEdBQUdoQywrREFBUUEsQ0FDdkM7UUFBQztRQUFjRTtRQUFNRztRQUFVRTtLQUFRLEVBQUUsVUFBWVIsNEVBQXFCa0M7SUFHOUVyQyxnREFBU0EsQ0FBQztRQUNOLE1BQU1zQyxlQUFlRixDQUFBQSxpQkFBQUEsa0JBQUFBLEtBQUFBLElBQUFBLEtBQU1BLEtBQUtHLE9BQU8sQ0FBQ0MsTUFBY0MsS0FBZ0JELE9BQU9FLE9BQU9ELEdBQUdWLFNBQVMsRUFBQyxLQUFLO1FBRXRHZixXQUFXc0I7SUFDZixHQUFHO1FBQUNGO1FBQU0zQjtLQUFTO0lBRW5CVCxnREFBU0EsQ0FBQztRQUNOLE1BQU13QixLQUFLTixhQUFhTyxRQUFRO1FBQ2hDa0IsUUFBUUMsSUFBSXBCO1FBQ1osSUFBSUEsSUFBSTtZQUNKUCxZQUFZVSxLQUFLRSxNQUFNTDtZQUN2Qk4sYUFBYVEsV0FBVztRQUM1QjtRQUVBLE9BQU8sSUFBTW1CO0lBQ2pCLEdBQUcsRUFBRTtJQUVMLHFCQUNJLDhEQUFDQztRQUFNQyxXQUFXN0MsZ0VBQVE0Qzs7MEJBQ3RCLDhEQUFDRTtnQkFBSUQsV0FBVzdDLHNFQUFjK0M7O2tDQUMxQiw4REFBQ0M7d0JBQU1ILFdBQVc3Qyx1RUFBZWlEO3dCQUFFQyxVQUFVN0M7d0JBQVk4QyxNQUFLOzs7Ozs7b0JBQzdEL0M7Ozs7Ozs7MEJBR0wsOERBQUNnRDtnQkFBSVAsV0FBVzdDLHFFQUFhcUQ7O2tDQUN6Qiw4REFBQ0M7d0JBQUVULFdBQVc3QyxzRUFBY3VEO3dCQUFFQyxNQUFLO2tDQUFVOzs7Ozs7a0NBQzdDLDhEQUFDRjt3QkFBRVQsV0FBVzdDLHNFQUFjdUQ7d0JBQUVDLE1BQUs7a0NBQVc7Ozs7OztrQ0FDOUMsOERBQUNGO3dCQUFFVCxXQUFXN0Msc0VBQWN1RDt3QkFBRUMsTUFBSztrQ0FBVTs7Ozs7Ozs7Ozs7OzBCQUdqRCw4REFBQ1Y7Z0JBQUlELFdBQVc3Qyx3RUFBZ0J5RDs7a0NBQzVCLDhEQUFDQzt3QkFDR0MsT0FBT3BELFdBQVc7NEJBQUNxRCxlQUFlOzRCQUFRQyxpQkFBaUI7d0JBQU0sSUFBSSxDQUFDO3dCQUN0RWhCLFdBQVc3QywrRUFBdUI4RDt3QkFDbENDLFNBQVMsSUFBTWhELFlBQVk7a0NBQzFCOzs7Ozs7a0NBR0wsOERBQUMyQzt3QkFDR0MsT0FBTyxDQUFDcEQsV0FBVzs0QkFBQ3FELGVBQWU7NEJBQVFDLGlCQUFpQjt3QkFBTSxJQUFJLENBQUM7d0JBQ3ZFaEIsV0FBVzdDLCtFQUF1QjhEO3dCQUNsQ0MsU0FBU2pDO2tDQUNaOzs7Ozs7a0NBR0QsOERBQUNnQjt3QkFBSUQsV0FBVzdDLDZFQUFxQmdFOzswQ0FDakMsOERBQUNsQjswQ0FBSTs7Ozs7OzRCQUNKdkMsWUFBYSxJQUFJMEQsS0FBS3hELFVBQVUsTUFBTXlELGNBQWNDLE1BQU0sSUFBSTswQ0FDL0QsOERBQUNyQjswQ0FBSTs7Ozs7OzRCQUNILElBQUltQixLQUFLLENBQUNwRCxVQUFVLEtBQUssTUFBTXFELGNBQWNDLE1BQU0sSUFBSTs7Ozs7OztrQ0FFN0QsOERBQUNyQjt3QkFBSUQsV0FBVzdDLHdFQUFnQm9FOzswQ0FDNUIsOERBQUN0QjswQ0FBSTs7Ozs7OzRCQUNILElBQUltQixLQUFLM0QsU0FBUyxNQUFNNEQsY0FBY0MsTUFBTSxJQUFJOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBS3RFO0dBOUdNaEU7O1FBZ0RpQ0QsMkRBQVFBOzs7S0FoRHpDQztBQWdITiwrREFBZUEsS0FBS0EsRUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9zY3JlZW5zL2luZGV4L2FzaWRlL0FzaWRlLnRzeD84YWU3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEZDLCB1c2VDYWxsYmFjaywgdXNlRWZmZWN0LCB1c2VNZW1vLCB1c2VSZWYsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBjbCBmcm9tIFwiLi9Bc2lkZS5tb2R1bGUuY3NzXCJcclxuaW1wb3J0IHsgQ2hhbmdlc1NlcnZpY2UgfSBmcm9tIFwiQC9zZXJ2aWNlcy9jaGFuZ2VzLnNlcnZpY2VcIjtcclxuaW1wb3J0IHsgdXNlUXVlcnkgfSBmcm9tIFwiQHRhbnN0YWNrL3JlYWN0LXF1ZXJ5XCI7XHJcbmltcG9ydCB7IElDaGFuZ2UgfSBmcm9tIFwiQC90eXBlcy9jaGFuZ2UuaW50ZXJmYWNlXCI7XHJcblxyXG5pbnRlcmZhY2UgSUFzaWRlIHtcclxuICAgIGRhdGU6IHN0cmluZyxcclxuICAgIGNoYW5nZURhdGU6IGFueSxcclxuICAgIHJlbWFpbjogbnVtYmVyXHJcbn1cclxuXHJcblxyXG5jb25zdCBBc2lkZTogRkM8SUFzaWRlPiA9ICh7ZGF0ZSwgY2hhbmdlRGF0ZSwgcmVtYWlufSkgPT4ge1xyXG5cclxuICAgIGNvbnN0IFtpc0NoYW5nZSwgc2V0SXNDaGFuZ2VdID0gdXNlU3RhdGU8Qm9vbGVhbj4oZmFsc2UpO1xyXG4gICAgY29uc3QgW3NlY29uZHMsIHNldFNlY29uZHNdID0gdXNlU3RhdGU8bnVtYmVyPigwKVxyXG4gICAgY29uc3QgW2ludGVydmFsSWQsIHNldEludGVydmFsSWRdID0gdXNlU3RhdGU8YW55PigpXHJcbiAgICBjb25zdCBbbW9udGx5LCBzZXRNb250aGx5XSA9IHVzZVN0YXRlPG51bWJlcj4oMClcclxuXHJcbiAgICBjb25zdCBzdGFydENoYW5nZSA9IChzZWNvbmRzOiBudW1iZXIpID0+IHtcclxuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcImNoYW5nZVwiLCBTdHJpbmcoc2Vjb25kcykpXHJcblxyXG4gICAgICAgIHNldElzQ2hhbmdlKHRydWUpO1xyXG5cclxuICAgICAgICBzZXRTZWNvbmRzKHNlY29uZHMpXHJcblxyXG4gICAgICAgIGNvbnN0IGlkID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xyXG4gICAgICAgICAgICBzZXRTZWNvbmRzKHByZXZTZWNvbmRzID0+IHByZXZTZWNvbmRzICsgMSk7XHJcblxyXG4gICAgICAgICAgICBjb25zdCBwciA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiY2hhbmdlXCIpXHJcblxyXG4gICAgICAgICAgICBpZiAoIXByKSB7XHJcbiAgICAgICAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcImNoYW5nZVwiLCBcIjFcIilcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKFwiY2hhbmdlXCIpXHJcbiAgICAgICAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcImNoYW5nZVwiLCBKU09OLnN0cmluZ2lmeShKU09OLnBhcnNlKHByKSArIDEpKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSwgMTAwMCk7XHJcblxyXG4gICAgICAgIHNldEludGVydmFsSWQoaWQpXHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgY3JlYXRlID0gYXN5bmMgKHNlY29uZHM6IG51bWJlcikgPT4ge1xyXG4gICAgICAgIGF3YWl0IENoYW5nZXNTZXJ2aWNlLmNyZWF0ZSh7ZGF0ZSwgbGVuZ3RoOiBTdHJpbmcoc2Vjb25kcyl9KTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBlbmRDaGFuZ2UgPSBhc3luYyAoKSA9PiB7XHJcbiAgICAgICAgc2V0TW9udGhseShtb250bHkgPT4gbW9udGx5ICsgc2Vjb25kcylcclxuXHJcbiAgICAgICAgc2V0SXNDaGFuZ2UoZmFsc2UpO1xyXG5cclxuICAgICAgICBzZXRTZWNvbmRzKDApXHJcbiAgICAgICAgY3JlYXRlKHNlY29uZHMpXHJcblxyXG4gICAgICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKFwiY2hhbmdlXCIpXHJcblxyXG4gICAgICAgIGNsZWFySW50ZXJ2YWwoaW50ZXJ2YWxJZClcclxuICAgIH1cclxuXHJcblxyXG4gICAgY29uc3QgeyBpc0xvYWRpbmcsIGVycm9yLCBkYXRhIH0gPSB1c2VRdWVyeShcclxuICAgICAgICBbJ2NoYW5nZS1hbGwnLCBkYXRlLCBpc0NoYW5nZSwgc2Vjb25kc10sIGFzeW5jICgpID0+IENoYW5nZXNTZXJ2aWNlLmdldEFsbCgpXHJcbiAgICApO1xyXG5cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgY29uc3QgbW9udGhTZWNvbmRzID0gZGF0YT8uZGF0YS5yZWR1Y2UoKHN1bW06IG51bWJlciwgZWw6IElDaGFuZ2UpID0+IHN1bW0gKyBOdW1iZXIoZWwubGVuZ3RoKSwgMCkgfHwgMFxyXG5cclxuICAgICAgICBzZXRNb250aGx5KG1vbnRoU2Vjb25kcylcclxuICAgIH0sIFtkYXRhLCBpc0NoYW5nZV0pXHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBjb25zdCBwciA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiY2hhbmdlXCIpXHJcbiAgICAgICAgY29uc29sZS5sb2cocHIpXHJcbiAgICAgICAgaWYgKHByKSB7XHJcbiAgICAgICAgICAgIHN0YXJ0Q2hhbmdlKEpTT04ucGFyc2UocHIpKVxyXG4gICAgICAgICAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbShcImNoYW5nZVwiKVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuICgpID0+IGNsZWFyXHJcbiAgICB9LCBbXSlcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxhc2lkZSBjbGFzc05hbWU9e2NsLmFzaWRlfT5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsLmFzaWRlX19kYXRlfT5cclxuICAgICAgICAgICAgICAgIDxpbnB1dCBjbGFzc05hbWU9e2NsLmFzaWRlX19pbnB1dH0gb25DaGFuZ2U9e2NoYW5nZURhdGV9IHR5cGU9XCJkYXRlXCIgLz5cclxuICAgICAgICAgICAgICAgIHtkYXRlfVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgIDxuYXYgY2xhc3NOYW1lPXtjbC5hc2lkZV9fbmF2fT5cclxuICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT17Y2wuYXNpZGVfX2xpbmt9IGhyZWY9XCJjbGllbnRzXCI+0KHQv9C40YHQvtC6INC60LvQuNC10L3RgtC+0LI8L2E+XHJcbiAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9e2NsLmFzaWRlX19saW5rfSBocmVmPVwic2VydmljZXNcIj7Qo9GB0LvRg9Cz0Lg8L2E+XHJcbiAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9e2NsLmFzaWRlX19saW5rfSBocmVmPVwiaGlzdG9yeVwiPtCY0YHRgtC+0YDQuNGPPC9hPlxyXG4gICAgICAgICAgICA8L25hdj5cclxuXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbC5hc2lkZV9fY2hhbmdlfT5cclxuICAgICAgICAgICAgICAgIDxidXR0b24gXHJcbiAgICAgICAgICAgICAgICAgICAgc3R5bGU9e2lzQ2hhbmdlID8ge3BvaW50ZXJFdmVudHM6IFwibm9uZVwiLCBiYWNrZ3JvdW5kQ29sb3I6IFwiYmx1ZVwifSA6IHt9fSBcclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsLmFzaWRlX19jaGFuZ2VfYnV0dG9ufVxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHN0YXJ0Q2hhbmdlKDApfVxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAg0J3QsNGH0LDRgtGMINGB0LzQtdC90YNcclxuICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDxidXR0b24gXHJcbiAgICAgICAgICAgICAgICAgICAgc3R5bGU9eyFpc0NoYW5nZSA/IHtwb2ludGVyRXZlbnRzOiBcIm5vbmVcIiwgYmFja2dyb3VuZENvbG9yOiBcImJsdWVcIn0gOiB7fX0gXHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbC5hc2lkZV9fY2hhbmdlX2J1dHRvbn1cclxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXtlbmRDaGFuZ2V9XHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAg0JfQsNCy0LXRgNGI0LjRgtGMINGB0LzQtdC90YNcclxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsLmFzaWRlX19jaGFuZ2VfYm9keX0+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdj7QktGA0LXQvNGPINGB0LzQtdC90Ys6PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAge2lzQ2hhbmdlICYmIChuZXcgRGF0ZShzZWNvbmRzICogMTAwMCkudG9JU09TdHJpbmcoKS5zbGljZSgxMSwgMTkpKX1cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2PtCX0LAg0LzQtdGB0Y/Rhjo8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICB7KG5ldyBEYXRlKChtb250bHkgfHwgMCkgKiAxMDAwKS50b0lTT1N0cmluZygpLnNsaWNlKDExLCAxOSkpfVxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2wuYXNpZGVfX3JlbWFpbn0+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdj7QntGB0YLQsNC70L7RgdGMOjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIHsobmV3IERhdGUocmVtYWluICogMTAwMCkudG9JU09TdHJpbmcoKS5zbGljZSgxMSwgMTkpKX1cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2FzaWRlPlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBBc2lkZSJdLCJuYW1lcyI6WyJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsImNsIiwiQ2hhbmdlc1NlcnZpY2UiLCJ1c2VRdWVyeSIsIkFzaWRlIiwiZGF0ZSIsImNoYW5nZURhdGUiLCJyZW1haW4iLCJpc0NoYW5nZSIsInNldElzQ2hhbmdlIiwic2Vjb25kcyIsInNldFNlY29uZHMiLCJpbnRlcnZhbElkIiwic2V0SW50ZXJ2YWxJZCIsIm1vbnRseSIsInNldE1vbnRobHkiLCJzdGFydENoYW5nZSIsImxvY2FsU3RvcmFnZSIsInNldEl0ZW0iLCJTdHJpbmciLCJpZCIsInNldEludGVydmFsIiwicHJldlNlY29uZHMiLCJwciIsImdldEl0ZW0iLCJyZW1vdmVJdGVtIiwiSlNPTiIsInN0cmluZ2lmeSIsInBhcnNlIiwiY3JlYXRlIiwibGVuZ3RoIiwiZW5kQ2hhbmdlIiwiY2xlYXJJbnRlcnZhbCIsImlzTG9hZGluZyIsImVycm9yIiwiZGF0YSIsImdldEFsbCIsIm1vbnRoU2Vjb25kcyIsInJlZHVjZSIsInN1bW0iLCJlbCIsIk51bWJlciIsImNvbnNvbGUiLCJsb2ciLCJjbGVhciIsImFzaWRlIiwiY2xhc3NOYW1lIiwiZGl2IiwiYXNpZGVfX2RhdGUiLCJpbnB1dCIsImFzaWRlX19pbnB1dCIsIm9uQ2hhbmdlIiwidHlwZSIsIm5hdiIsImFzaWRlX19uYXYiLCJhIiwiYXNpZGVfX2xpbmsiLCJocmVmIiwiYXNpZGVfX2NoYW5nZSIsImJ1dHRvbiIsInN0eWxlIiwicG9pbnRlckV2ZW50cyIsImJhY2tncm91bmRDb2xvciIsImFzaWRlX19jaGFuZ2VfYnV0dG9uIiwib25DbGljayIsImFzaWRlX19jaGFuZ2VfYm9keSIsIkRhdGUiLCJ0b0lTT1N0cmluZyIsInNsaWNlIiwiYXNpZGVfX3JlbWFpbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/screens/index/aside/Aside.tsx\n"));

/***/ })

});