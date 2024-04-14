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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Aside_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Aside.module.css */ \"./src/components/screens/index/aside/Aside.module.css\");\n/* harmony import */ var _Aside_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_Aside_module_css__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _services_changes_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/services/changes.service */ \"./src/services/changes.service.ts\");\n/* harmony import */ var _tanstack_react_query__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @tanstack/react-query */ \"./node_modules/@tanstack/react-query/build/lib/index.mjs\");\n\nvar _s = $RefreshSig$();\n\n\n\n\nconst Aside = (param)=>{\n    let { date , changeDate , remain  } = param;\n    _s();\n    const [isChange, setIsChange] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [seconds, setSeconds] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    const [intervalId, setIntervalId] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();\n    const [montly, setMonthly] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    const startChange = (seconds)=>{\n        setIsChange(true);\n        localStorage.setItem(\"change\", \"1\");\n        setSeconds(seconds);\n        const id = setInterval(()=>{\n            setSeconds((prevSeconds)=>prevSeconds + 1);\n            const pr = localStorage.getItem(\"change\");\n            if (!pr) {\n                localStorage.setItem(\"change\", \"1\");\n            } else {\n                localStorage.removeItem(\"change\");\n                localStorage.setItem(\"change\", JSON.stringify(JSON.parse(pr) + 1));\n            }\n        }, 1000);\n        setIntervalId(id);\n    };\n    const create = async (seconds)=>{\n        await _services_changes_service__WEBPACK_IMPORTED_MODULE_2__.ChangesService.create({\n            date,\n            length: String(seconds)\n        });\n    };\n    const endChange = async ()=>{\n        setMonthly((montly)=>montly + seconds);\n        setIsChange(false);\n        setSeconds(0);\n        create(seconds);\n        localStorage.removeItem(\"change\");\n        clearInterval(intervalId);\n    };\n    const { isLoading , error , data  } = (0,_tanstack_react_query__WEBPACK_IMPORTED_MODULE_3__.useQuery)([\n        \"change-all\",\n        date,\n        isChange,\n        seconds\n    ], async ()=>_services_changes_service__WEBPACK_IMPORTED_MODULE_2__.ChangesService.getAll());\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const monthSeconds = (data === null || data === void 0 ? void 0 : data.data.reduce((summ, el)=>summ + Number(el.length), 0)) || 0;\n        setMonthly(monthSeconds);\n    }, [\n        data,\n        isChange\n    ]);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const pr = localStorage.getItem(\"change\");\n        console.log(pr);\n        if (pr) {\n            startChange(JSON.parse(pr));\n            localStorage.removeItem(\"change\");\n        }\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"aside\", {\n        className: (_Aside_module_css__WEBPACK_IMPORTED_MODULE_4___default().aside),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_Aside_module_css__WEBPACK_IMPORTED_MODULE_4___default().aside__date),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        className: (_Aside_module_css__WEBPACK_IMPORTED_MODULE_4___default().aside__input),\n                        onChange: changeDate,\n                        type: \"date\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Dmitry\\\\job\\\\freelance\\\\fr\\\\src\\\\components\\\\screens\\\\index\\\\aside\\\\Aside.tsx\",\n                        lineNumber: 84,\n                        columnNumber: 17\n                    }, undefined),\n                    date\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\Dmitry\\\\job\\\\freelance\\\\fr\\\\src\\\\components\\\\screens\\\\index\\\\aside\\\\Aside.tsx\",\n                lineNumber: 83,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"nav\", {\n                className: (_Aside_module_css__WEBPACK_IMPORTED_MODULE_4___default().aside__nav),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                        className: (_Aside_module_css__WEBPACK_IMPORTED_MODULE_4___default().aside__link),\n                        href: \"clients\",\n                        children: \"Список клиентов\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Dmitry\\\\job\\\\freelance\\\\fr\\\\src\\\\components\\\\screens\\\\index\\\\aside\\\\Aside.tsx\",\n                        lineNumber: 89,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                        className: (_Aside_module_css__WEBPACK_IMPORTED_MODULE_4___default().aside__link),\n                        href: \"services\",\n                        children: \"Услуги\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Dmitry\\\\job\\\\freelance\\\\fr\\\\src\\\\components\\\\screens\\\\index\\\\aside\\\\Aside.tsx\",\n                        lineNumber: 90,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                        className: (_Aside_module_css__WEBPACK_IMPORTED_MODULE_4___default().aside__link),\n                        href: \"history\",\n                        children: \"История\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Dmitry\\\\job\\\\freelance\\\\fr\\\\src\\\\components\\\\screens\\\\index\\\\aside\\\\Aside.tsx\",\n                        lineNumber: 91,\n                        columnNumber: 17\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\Dmitry\\\\job\\\\freelance\\\\fr\\\\src\\\\components\\\\screens\\\\index\\\\aside\\\\Aside.tsx\",\n                lineNumber: 88,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_Aside_module_css__WEBPACK_IMPORTED_MODULE_4___default().aside__change),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        style: isChange ? {\n                            pointerEvents: \"none\",\n                            backgroundColor: \"blue\"\n                        } : {},\n                        className: (_Aside_module_css__WEBPACK_IMPORTED_MODULE_4___default().aside__change_button),\n                        onClick: ()=>startChange(0),\n                        children: \"Начать смену\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Dmitry\\\\job\\\\freelance\\\\fr\\\\src\\\\components\\\\screens\\\\index\\\\aside\\\\Aside.tsx\",\n                        lineNumber: 95,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        style: !isChange ? {\n                            pointerEvents: \"none\",\n                            backgroundColor: \"blue\"\n                        } : {},\n                        className: (_Aside_module_css__WEBPACK_IMPORTED_MODULE_4___default().aside__change_button),\n                        onClick: endChange,\n                        children: \"Завершить смену\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Dmitry\\\\job\\\\freelance\\\\fr\\\\src\\\\components\\\\screens\\\\index\\\\aside\\\\Aside.tsx\",\n                        lineNumber: 102,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_Aside_module_css__WEBPACK_IMPORTED_MODULE_4___default().aside__change_body),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                children: \"Время смены:\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Dmitry\\\\job\\\\freelance\\\\fr\\\\src\\\\components\\\\screens\\\\index\\\\aside\\\\Aside.tsx\",\n                                lineNumber: 110,\n                                columnNumber: 21\n                            }, undefined),\n                            isChange && new Date(seconds * 1000).toISOString().slice(11, 19),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                children: \"За месяц:\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Dmitry\\\\job\\\\freelance\\\\fr\\\\src\\\\components\\\\screens\\\\index\\\\aside\\\\Aside.tsx\",\n                                lineNumber: 112,\n                                columnNumber: 21\n                            }, undefined),\n                            new Date((montly || 0) * 1000).toISOString().slice(11, 19)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\Dmitry\\\\job\\\\freelance\\\\fr\\\\src\\\\components\\\\screens\\\\index\\\\aside\\\\Aside.tsx\",\n                        lineNumber: 109,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_Aside_module_css__WEBPACK_IMPORTED_MODULE_4___default().aside__remain),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                children: \"Осталось:\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Dmitry\\\\job\\\\freelance\\\\fr\\\\src\\\\components\\\\screens\\\\index\\\\aside\\\\Aside.tsx\",\n                                lineNumber: 116,\n                                columnNumber: 21\n                            }, undefined),\n                            new Date(remain * 1000).toISOString().slice(11, 19)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\Dmitry\\\\job\\\\freelance\\\\fr\\\\src\\\\components\\\\screens\\\\index\\\\aside\\\\Aside.tsx\",\n                        lineNumber: 115,\n                        columnNumber: 17\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\Dmitry\\\\job\\\\freelance\\\\fr\\\\src\\\\components\\\\screens\\\\index\\\\aside\\\\Aside.tsx\",\n                lineNumber: 94,\n                columnNumber: 13\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\Dmitry\\\\job\\\\freelance\\\\fr\\\\src\\\\components\\\\screens\\\\index\\\\aside\\\\Aside.tsx\",\n        lineNumber: 82,\n        columnNumber: 9\n    }, undefined);\n};\n_s(Aside, \"auApwOwEFRX7nCYTuOg1Vj7d9s4=\", false, function() {\n    return [\n        _tanstack_react_query__WEBPACK_IMPORTED_MODULE_3__.useQuery\n    ];\n});\n_c = Aside;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Aside);\nvar _c;\n$RefreshReg$(_c, \"Aside\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9zY3JlZW5zL2luZGV4L2FzaWRlL0FzaWRlLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUE4RTtBQUMzQztBQUN5QjtBQUNYO0FBVWpELE1BQU1LLFFBQW9CO1FBQUMsRUFBQ0MsS0FBSSxFQUFFQyxXQUFVLEVBQUVDLE9BQU0sRUFBQzs7SUFFakQsTUFBTSxDQUFDQyxVQUFVQyxZQUFZLEdBQUdULCtDQUFRQSxDQUFVO0lBQ2xELE1BQU0sQ0FBQ1UsU0FBU0MsV0FBVyxHQUFHWCwrQ0FBUUEsQ0FBUztJQUMvQyxNQUFNLENBQUNZLFlBQVlDLGNBQWMsR0FBR2IsK0NBQVFBO0lBQzVDLE1BQU0sQ0FBQ2MsUUFBUUMsV0FBVyxHQUFHZiwrQ0FBUUEsQ0FBUztJQUU5QyxNQUFNZ0IsY0FBYyxDQUFDTjtRQUNqQkQsWUFBWTtRQUVaUSxhQUFhQyxRQUFRLFVBQVU7UUFFL0JQLFdBQVdEO1FBRVgsTUFBTVMsS0FBS0MsWUFBWTtZQUNuQlQsV0FBV1UsQ0FBQUEsY0FBZUEsY0FBYztZQUV4QyxNQUFNQyxLQUFLTCxhQUFhTSxRQUFRO1lBRWhDLElBQUksQ0FBQ0QsSUFBSTtnQkFDTEwsYUFBYUMsUUFBUSxVQUFVO1lBQ25DLE9BQU87Z0JBQ0hELGFBQWFPLFdBQVc7Z0JBQ3hCUCxhQUFhQyxRQUFRLFVBQVVPLEtBQUtDLFVBQVVELEtBQUtFLE1BQU1MLE1BQU07WUFDbkU7UUFDSixHQUFHO1FBRUhULGNBQWNNO0lBQ2xCO0lBRUEsTUFBTVMsU0FBUyxPQUFPbEI7UUFDbEIsTUFBTVIsNEVBQXFCMEIsQ0FBQztZQUFDdkI7WUFBTXdCLFFBQVFDLE9BQU9wQjtRQUFRO0lBQzlEO0lBRUEsTUFBTXFCLFlBQVk7UUFDZGhCLFdBQVdELENBQUFBLFNBQVVBLFNBQVNKO1FBRTlCRCxZQUFZO1FBRVpFLFdBQVc7UUFDWGlCLE9BQU9sQjtRQUVQTyxhQUFhTyxXQUFXO1FBRXhCUSxjQUFjcEI7SUFDbEI7SUFHQSxNQUFNLEVBQUVxQixVQUFTLEVBQUVDLE1BQUssRUFBRUMsS0FBSSxFQUFFLEdBQUdoQywrREFBUUEsQ0FDdkM7UUFBQztRQUFjRTtRQUFNRztRQUFVRTtLQUFRLEVBQUUsVUFBWVIsNEVBQXFCa0M7SUFHOUVyQyxnREFBU0EsQ0FBQztRQUNOLE1BQU1zQyxlQUFlRixDQUFBQSxpQkFBQUEsa0JBQUFBLEtBQUFBLElBQUFBLEtBQU1BLEtBQUtHLE9BQU8sQ0FBQ0MsTUFBY0MsS0FBZ0JELE9BQU9FLE9BQU9ELEdBQUdYLFNBQVMsRUFBQyxLQUFLO1FBRXRHZCxXQUFXc0I7SUFDZixHQUFHO1FBQUNGO1FBQU0zQjtLQUFTO0lBRW5CVCxnREFBU0EsQ0FBQztRQUNOLE1BQU11QixLQUFLTCxhQUFhTSxRQUFRO1FBQ2hDbUIsUUFBUUMsSUFBSXJCO1FBQ1osSUFBSUEsSUFBSTtZQUNKTixZQUFZUyxLQUFLRSxNQUFNTDtZQUN2QkwsYUFBYU8sV0FBVztRQUM1QjtJQUNKLEdBQUcsRUFBRTtJQUVMLHFCQUNJLDhEQUFDb0I7UUFBTUMsV0FBVzVDLGdFQUFRMkM7OzBCQUN0Qiw4REFBQ0U7Z0JBQUlELFdBQVc1QyxzRUFBYzhDOztrQ0FDMUIsOERBQUNDO3dCQUFNSCxXQUFXNUMsdUVBQWVnRDt3QkFBRUMsVUFBVTVDO3dCQUFZNkMsTUFBSzs7Ozs7O29CQUM3RDlDOzs7Ozs7OzBCQUdMLDhEQUFDK0M7Z0JBQUlQLFdBQVc1QyxxRUFBYW9EOztrQ0FDekIsOERBQUNDO3dCQUFFVCxXQUFXNUMsc0VBQWNzRDt3QkFBRUMsTUFBSztrQ0FBVTs7Ozs7O2tDQUM3Qyw4REFBQ0Y7d0JBQUVULFdBQVc1QyxzRUFBY3NEO3dCQUFFQyxNQUFLO2tDQUFXOzs7Ozs7a0NBQzlDLDhEQUFDRjt3QkFBRVQsV0FBVzVDLHNFQUFjc0Q7d0JBQUVDLE1BQUs7a0NBQVU7Ozs7Ozs7Ozs7OzswQkFHakQsOERBQUNWO2dCQUFJRCxXQUFXNUMsd0VBQWdCd0Q7O2tDQUM1Qiw4REFBQ0M7d0JBQ0dDLE9BQU9uRCxXQUFXOzRCQUFDb0QsZUFBZTs0QkFBUUMsaUJBQWlCO3dCQUFNLElBQUksQ0FBQzt3QkFDdEVoQixXQUFXNUMsK0VBQXVCNkQ7d0JBQ2xDQyxTQUFTLElBQU0vQyxZQUFZO2tDQUMxQjs7Ozs7O2tDQUdMLDhEQUFDMEM7d0JBQ0dDLE9BQU8sQ0FBQ25ELFdBQVc7NEJBQUNvRCxlQUFlOzRCQUFRQyxpQkFBaUI7d0JBQU0sSUFBSSxDQUFDO3dCQUN2RWhCLFdBQVc1QywrRUFBdUI2RDt3QkFDbENDLFNBQVNoQztrQ0FDWjs7Ozs7O2tDQUdELDhEQUFDZTt3QkFBSUQsV0FBVzVDLDZFQUFxQitEOzswQ0FDakMsOERBQUNsQjswQ0FBSTs7Ozs7OzRCQUNKdEMsWUFBYSxJQUFJeUQsS0FBS3ZELFVBQVUsTUFBTXdELGNBQWNDLE1BQU0sSUFBSTswQ0FDL0QsOERBQUNyQjswQ0FBSTs7Ozs7OzRCQUNILElBQUltQixLQUFLLENBQUNuRCxVQUFVLEtBQUssTUFBTW9ELGNBQWNDLE1BQU0sSUFBSTs7Ozs7OztrQ0FFN0QsOERBQUNyQjt3QkFBSUQsV0FBVzVDLHdFQUFnQm1FOzswQ0FDNUIsOERBQUN0QjswQ0FBSTs7Ozs7OzRCQUNILElBQUltQixLQUFLMUQsU0FBUyxNQUFNMkQsY0FBY0MsTUFBTSxJQUFJOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBS3RFO0dBNUdNL0Q7O1FBZ0RpQ0QsMkRBQVFBOzs7S0FoRHpDQztBQThHTiwrREFBZUEsS0FBS0EsRUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9zY3JlZW5zL2luZGV4L2FzaWRlL0FzaWRlLnRzeD84YWU3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEZDLCB1c2VDYWxsYmFjaywgdXNlRWZmZWN0LCB1c2VNZW1vLCB1c2VSZWYsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBjbCBmcm9tIFwiLi9Bc2lkZS5tb2R1bGUuY3NzXCJcclxuaW1wb3J0IHsgQ2hhbmdlc1NlcnZpY2UgfSBmcm9tIFwiQC9zZXJ2aWNlcy9jaGFuZ2VzLnNlcnZpY2VcIjtcclxuaW1wb3J0IHsgdXNlUXVlcnkgfSBmcm9tIFwiQHRhbnN0YWNrL3JlYWN0LXF1ZXJ5XCI7XHJcbmltcG9ydCB7IElDaGFuZ2UgfSBmcm9tIFwiQC90eXBlcy9jaGFuZ2UuaW50ZXJmYWNlXCI7XHJcblxyXG5pbnRlcmZhY2UgSUFzaWRlIHtcclxuICAgIGRhdGU6IHN0cmluZyxcclxuICAgIGNoYW5nZURhdGU6IGFueSxcclxuICAgIHJlbWFpbjogbnVtYmVyXHJcbn1cclxuXHJcblxyXG5jb25zdCBBc2lkZTogRkM8SUFzaWRlPiA9ICh7ZGF0ZSwgY2hhbmdlRGF0ZSwgcmVtYWlufSkgPT4ge1xyXG5cclxuICAgIGNvbnN0IFtpc0NoYW5nZSwgc2V0SXNDaGFuZ2VdID0gdXNlU3RhdGU8Qm9vbGVhbj4oZmFsc2UpO1xyXG4gICAgY29uc3QgW3NlY29uZHMsIHNldFNlY29uZHNdID0gdXNlU3RhdGU8bnVtYmVyPigwKVxyXG4gICAgY29uc3QgW2ludGVydmFsSWQsIHNldEludGVydmFsSWRdID0gdXNlU3RhdGU8YW55PigpXHJcbiAgICBjb25zdCBbbW9udGx5LCBzZXRNb250aGx5XSA9IHVzZVN0YXRlPG51bWJlcj4oMClcclxuXHJcbiAgICBjb25zdCBzdGFydENoYW5nZSA9IChzZWNvbmRzOiBudW1iZXIpID0+IHtcclxuICAgICAgICBzZXRJc0NoYW5nZSh0cnVlKTtcclxuXHJcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJjaGFuZ2VcIiwgXCIxXCIpXHJcblxyXG4gICAgICAgIHNldFNlY29uZHMoc2Vjb25kcylcclxuXHJcbiAgICAgICAgY29uc3QgaWQgPSBzZXRJbnRlcnZhbCgoKSA9PiB7XHJcbiAgICAgICAgICAgIHNldFNlY29uZHMocHJldlNlY29uZHMgPT4gcHJldlNlY29uZHMgKyAxKTtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IHByID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJjaGFuZ2VcIilcclxuXHJcbiAgICAgICAgICAgIGlmICghcHIpIHtcclxuICAgICAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwiY2hhbmdlXCIsIFwiMVwiKVxyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oXCJjaGFuZ2VcIilcclxuICAgICAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwiY2hhbmdlXCIsIEpTT04uc3RyaW5naWZ5KEpTT04ucGFyc2UocHIpICsgMSkpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LCAxMDAwKTtcclxuXHJcbiAgICAgICAgc2V0SW50ZXJ2YWxJZChpZClcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBjcmVhdGUgPSBhc3luYyAoc2Vjb25kczogbnVtYmVyKSA9PiB7XHJcbiAgICAgICAgYXdhaXQgQ2hhbmdlc1NlcnZpY2UuY3JlYXRlKHtkYXRlLCBsZW5ndGg6IFN0cmluZyhzZWNvbmRzKX0pO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGVuZENoYW5nZSA9IGFzeW5jICgpID0+IHtcclxuICAgICAgICBzZXRNb250aGx5KG1vbnRseSA9PiBtb250bHkgKyBzZWNvbmRzKVxyXG5cclxuICAgICAgICBzZXRJc0NoYW5nZShmYWxzZSk7XHJcblxyXG4gICAgICAgIHNldFNlY29uZHMoMClcclxuICAgICAgICBjcmVhdGUoc2Vjb25kcylcclxuXHJcbiAgICAgICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oXCJjaGFuZ2VcIilcclxuXHJcbiAgICAgICAgY2xlYXJJbnRlcnZhbChpbnRlcnZhbElkKVxyXG4gICAgfVxyXG5cclxuXHJcbiAgICBjb25zdCB7IGlzTG9hZGluZywgZXJyb3IsIGRhdGEgfSA9IHVzZVF1ZXJ5KFxyXG4gICAgICAgIFsnY2hhbmdlLWFsbCcsIGRhdGUsIGlzQ2hhbmdlLCBzZWNvbmRzXSwgYXN5bmMgKCkgPT4gQ2hhbmdlc1NlcnZpY2UuZ2V0QWxsKClcclxuICAgICk7XHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBjb25zdCBtb250aFNlY29uZHMgPSBkYXRhPy5kYXRhLnJlZHVjZSgoc3VtbTogbnVtYmVyLCBlbDogSUNoYW5nZSkgPT4gc3VtbSArIE51bWJlcihlbC5sZW5ndGgpLCAwKSB8fCAwXHJcblxyXG4gICAgICAgIHNldE1vbnRobHkobW9udGhTZWNvbmRzKVxyXG4gICAgfSwgW2RhdGEsIGlzQ2hhbmdlXSlcclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHByID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJjaGFuZ2VcIilcclxuICAgICAgICBjb25zb2xlLmxvZyhwcilcclxuICAgICAgICBpZiAocHIpIHtcclxuICAgICAgICAgICAgc3RhcnRDaGFuZ2UoSlNPTi5wYXJzZShwcikpXHJcbiAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKFwiY2hhbmdlXCIpXHJcbiAgICAgICAgfVxyXG4gICAgfSwgW10pXHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8YXNpZGUgY2xhc3NOYW1lPXtjbC5hc2lkZX0+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbC5hc2lkZV9fZGF0ZX0+XHJcbiAgICAgICAgICAgICAgICA8aW5wdXQgY2xhc3NOYW1lPXtjbC5hc2lkZV9faW5wdXR9IG9uQ2hhbmdlPXtjaGFuZ2VEYXRlfSB0eXBlPVwiZGF0ZVwiIC8+XHJcbiAgICAgICAgICAgICAgICB7ZGF0ZX1cclxuICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICA8bmF2IGNsYXNzTmFtZT17Y2wuYXNpZGVfX25hdn0+XHJcbiAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9e2NsLmFzaWRlX19saW5rfSBocmVmPVwiY2xpZW50c1wiPtCh0L/QuNGB0L7QuiDQutC70LjQtdC90YLQvtCyPC9hPlxyXG4gICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPXtjbC5hc2lkZV9fbGlua30gaHJlZj1cInNlcnZpY2VzXCI+0KPRgdC70YPQs9C4PC9hPlxyXG4gICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPXtjbC5hc2lkZV9fbGlua30gaHJlZj1cImhpc3RvcnlcIj7QmNGB0YLQvtGA0LjRjzwvYT5cclxuICAgICAgICAgICAgPC9uYXY+XHJcblxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2wuYXNpZGVfX2NoYW5nZX0+XHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uIFxyXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlPXtpc0NoYW5nZSA/IHtwb2ludGVyRXZlbnRzOiBcIm5vbmVcIiwgYmFja2dyb3VuZENvbG9yOiBcImJsdWVcIn0gOiB7fX0gXHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbC5hc2lkZV9fY2hhbmdlX2J1dHRvbn1cclxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzdGFydENoYW5nZSgwKX1cclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgINCd0LDRh9Cw0YLRjCDRgdC80LXQvdGDXHJcbiAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uIFxyXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlPXshaXNDaGFuZ2UgPyB7cG9pbnRlckV2ZW50czogXCJub25lXCIsIGJhY2tncm91bmRDb2xvcjogXCJibHVlXCJ9IDoge319IFxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2wuYXNpZGVfX2NoYW5nZV9idXR0b259XHJcbiAgICAgICAgICAgICAgICAgICAgb25DbGljaz17ZW5kQ2hhbmdlfVxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgINCX0LDQstC10YDRiNC40YLRjCDRgdC80LXQvdGDXHJcbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbC5hc2lkZV9fY2hhbmdlX2JvZHl9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXY+0JLRgNC10LzRjyDRgdC80LXQvdGLOjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIHtpc0NoYW5nZSAmJiAobmV3IERhdGUoc2Vjb25kcyAqIDEwMDApLnRvSVNPU3RyaW5nKCkuc2xpY2UoMTEsIDE5KSl9XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdj7Ql9CwINC80LXRgdGP0YY6PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgeyhuZXcgRGF0ZSgobW9udGx5IHx8IDApICogMTAwMCkudG9JU09TdHJpbmcoKS5zbGljZSgxMSwgMTkpKX1cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsLmFzaWRlX19yZW1haW59PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXY+0J7RgdGC0LDQu9C+0YHRjDo8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICB7KG5ldyBEYXRlKHJlbWFpbiAqIDEwMDApLnRvSVNPU3RyaW5nKCkuc2xpY2UoMTEsIDE5KSl9XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9hc2lkZT5cclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQXNpZGUiXSwibmFtZXMiOlsidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJjbCIsIkNoYW5nZXNTZXJ2aWNlIiwidXNlUXVlcnkiLCJBc2lkZSIsImRhdGUiLCJjaGFuZ2VEYXRlIiwicmVtYWluIiwiaXNDaGFuZ2UiLCJzZXRJc0NoYW5nZSIsInNlY29uZHMiLCJzZXRTZWNvbmRzIiwiaW50ZXJ2YWxJZCIsInNldEludGVydmFsSWQiLCJtb250bHkiLCJzZXRNb250aGx5Iiwic3RhcnRDaGFuZ2UiLCJsb2NhbFN0b3JhZ2UiLCJzZXRJdGVtIiwiaWQiLCJzZXRJbnRlcnZhbCIsInByZXZTZWNvbmRzIiwicHIiLCJnZXRJdGVtIiwicmVtb3ZlSXRlbSIsIkpTT04iLCJzdHJpbmdpZnkiLCJwYXJzZSIsImNyZWF0ZSIsImxlbmd0aCIsIlN0cmluZyIsImVuZENoYW5nZSIsImNsZWFySW50ZXJ2YWwiLCJpc0xvYWRpbmciLCJlcnJvciIsImRhdGEiLCJnZXRBbGwiLCJtb250aFNlY29uZHMiLCJyZWR1Y2UiLCJzdW1tIiwiZWwiLCJOdW1iZXIiLCJjb25zb2xlIiwibG9nIiwiYXNpZGUiLCJjbGFzc05hbWUiLCJkaXYiLCJhc2lkZV9fZGF0ZSIsImlucHV0IiwiYXNpZGVfX2lucHV0Iiwib25DaGFuZ2UiLCJ0eXBlIiwibmF2IiwiYXNpZGVfX25hdiIsImEiLCJhc2lkZV9fbGluayIsImhyZWYiLCJhc2lkZV9fY2hhbmdlIiwiYnV0dG9uIiwic3R5bGUiLCJwb2ludGVyRXZlbnRzIiwiYmFja2dyb3VuZENvbG9yIiwiYXNpZGVfX2NoYW5nZV9idXR0b24iLCJvbkNsaWNrIiwiYXNpZGVfX2NoYW5nZV9ib2R5IiwiRGF0ZSIsInRvSVNPU3RyaW5nIiwic2xpY2UiLCJhc2lkZV9fcmVtYWluIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/screens/index/aside/Aside.tsx\n"));

/***/ })

});