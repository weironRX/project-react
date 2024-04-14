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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Aside_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Aside.module.css */ \"./src/components/screens/index/aside/Aside.module.css\");\n/* harmony import */ var _Aside_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_Aside_module_css__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _services_changes_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/services/changes.service */ \"./src/services/changes.service.ts\");\n/* harmony import */ var _tanstack_react_query__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @tanstack/react-query */ \"./node_modules/@tanstack/react-query/build/lib/index.mjs\");\n\nvar _s = $RefreshSig$();\n\n\n\n\nconst Aside = (param)=>{\n    let { date , changeDate , remain  } = param;\n    _s();\n    const [isChange, setIsChange] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [intervalId, setIntervalId] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();\n    const [montly, setMonthly] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    const startChange = (seconds)=>{\n        setIsChange(true);\n        console.log(\"Started with\", seconds);\n        localStorage.setItem(\"change\", String(seconds));\n        const id = setInterval(()=>{\n            const pr = localStorage.getItem(\"change\");\n            if (!pr) {\n                localStorage.setItem(\"change\", \"1\");\n            } else {\n                console.log(\"Setted\", pr);\n                localStorage.removeItem(\"change\");\n                localStorage.setItem(\"change\", JSON.stringify(Number(pr) + 1));\n            }\n        }, 1000);\n        setIntervalId(id);\n    };\n    const create = async (seconds)=>{\n        await _services_changes_service__WEBPACK_IMPORTED_MODULE_2__.ChangesService.create({\n            date,\n            length: String(seconds)\n        });\n    };\n    const endChange = async ()=>{\n        const pr = localStorage.getItem(\"change\") || \"0\";\n        localStorage.removeItem(\"change\");\n        setIsChange(false);\n        create(JSON.parse(pr));\n        localStorage.removeItem(\"change\");\n        clearInterval(intervalId);\n    };\n    const { isLoading , error , data  } = (0,_tanstack_react_query__WEBPACK_IMPORTED_MODULE_3__.useQuery)([\n        \"change-all\",\n        date,\n        isChange\n    ], async ()=>_services_changes_service__WEBPACK_IMPORTED_MODULE_2__.ChangesService.getAll());\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const monthSeconds = (data === null || data === void 0 ? void 0 : data.data.reduce((summ, el)=>summ + Number(el.length), 0)) || 0;\n        setMonthly(monthSeconds);\n    }, [\n        data,\n        isChange,\n        localStorage.getItem(\"change\")\n    ]);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const pr = localStorage.getItem(\"change\");\n        console.log(\"For start\", pr);\n        if (pr) {\n            startChange(JSON.parse(pr));\n            localStorage.removeItem(\"change\");\n        }\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"aside\", {\n        className: (_Aside_module_css__WEBPACK_IMPORTED_MODULE_4___default().aside),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_Aside_module_css__WEBPACK_IMPORTED_MODULE_4___default().aside__date),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        className: (_Aside_module_css__WEBPACK_IMPORTED_MODULE_4___default().aside__input),\n                        onChange: changeDate,\n                        type: \"date\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Dmitry\\\\job\\\\freelance\\\\fr\\\\src\\\\components\\\\screens\\\\index\\\\aside\\\\Aside.tsx\",\n                        lineNumber: 85,\n                        columnNumber: 17\n                    }, undefined),\n                    date\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\Dmitry\\\\job\\\\freelance\\\\fr\\\\src\\\\components\\\\screens\\\\index\\\\aside\\\\Aside.tsx\",\n                lineNumber: 84,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"nav\", {\n                className: (_Aside_module_css__WEBPACK_IMPORTED_MODULE_4___default().aside__nav),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                        className: (_Aside_module_css__WEBPACK_IMPORTED_MODULE_4___default().aside__link),\n                        href: \"clients\",\n                        children: \"Список клиентов\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Dmitry\\\\job\\\\freelance\\\\fr\\\\src\\\\components\\\\screens\\\\index\\\\aside\\\\Aside.tsx\",\n                        lineNumber: 90,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                        className: (_Aside_module_css__WEBPACK_IMPORTED_MODULE_4___default().aside__link),\n                        href: \"services\",\n                        children: \"Услуги\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Dmitry\\\\job\\\\freelance\\\\fr\\\\src\\\\components\\\\screens\\\\index\\\\aside\\\\Aside.tsx\",\n                        lineNumber: 91,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                        className: (_Aside_module_css__WEBPACK_IMPORTED_MODULE_4___default().aside__link),\n                        href: \"history\",\n                        children: \"История\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Dmitry\\\\job\\\\freelance\\\\fr\\\\src\\\\components\\\\screens\\\\index\\\\aside\\\\Aside.tsx\",\n                        lineNumber: 92,\n                        columnNumber: 17\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\Dmitry\\\\job\\\\freelance\\\\fr\\\\src\\\\components\\\\screens\\\\index\\\\aside\\\\Aside.tsx\",\n                lineNumber: 89,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_Aside_module_css__WEBPACK_IMPORTED_MODULE_4___default().aside__change),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        style: isChange ? {\n                            pointerEvents: \"none\",\n                            backgroundColor: \"blue\"\n                        } : {},\n                        className: (_Aside_module_css__WEBPACK_IMPORTED_MODULE_4___default().aside__change_button),\n                        onClick: ()=>startChange(0),\n                        children: \"Начать смену\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Dmitry\\\\job\\\\freelance\\\\fr\\\\src\\\\components\\\\screens\\\\index\\\\aside\\\\Aside.tsx\",\n                        lineNumber: 96,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        style: !isChange ? {\n                            pointerEvents: \"none\",\n                            backgroundColor: \"blue\"\n                        } : {},\n                        className: (_Aside_module_css__WEBPACK_IMPORTED_MODULE_4___default().aside__change_button),\n                        onClick: endChange,\n                        children: \"Завершить смену\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Dmitry\\\\job\\\\freelance\\\\fr\\\\src\\\\components\\\\screens\\\\index\\\\aside\\\\Aside.tsx\",\n                        lineNumber: 103,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_Aside_module_css__WEBPACK_IMPORTED_MODULE_4___default().aside__change_body),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                children: \"Время смены:\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Dmitry\\\\job\\\\freelance\\\\fr\\\\src\\\\components\\\\screens\\\\index\\\\aside\\\\Aside.tsx\",\n                                lineNumber: 111,\n                                columnNumber: 21\n                            }, undefined),\n                            isChange && new Date(localStorage.getItem(\"change\") || \"\" * 1000).toISOString().slice(11, 19),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                children: \"За месяц:\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Dmitry\\\\job\\\\freelance\\\\fr\\\\src\\\\components\\\\screens\\\\index\\\\aside\\\\Aside.tsx\",\n                                lineNumber: 113,\n                                columnNumber: 21\n                            }, undefined),\n                            new Date((montly || 0) * 1000).toISOString().slice(11, 19)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\Dmitry\\\\job\\\\freelance\\\\fr\\\\src\\\\components\\\\screens\\\\index\\\\aside\\\\Aside.tsx\",\n                        lineNumber: 110,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_Aside_module_css__WEBPACK_IMPORTED_MODULE_4___default().aside__remain),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                children: \"Осталось:\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Dmitry\\\\job\\\\freelance\\\\fr\\\\src\\\\components\\\\screens\\\\index\\\\aside\\\\Aside.tsx\",\n                                lineNumber: 117,\n                                columnNumber: 21\n                            }, undefined),\n                            new Date(remain * 1000).toISOString().slice(11, 19)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\Dmitry\\\\job\\\\freelance\\\\fr\\\\src\\\\components\\\\screens\\\\index\\\\aside\\\\Aside.tsx\",\n                        lineNumber: 116,\n                        columnNumber: 17\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\Dmitry\\\\job\\\\freelance\\\\fr\\\\src\\\\components\\\\screens\\\\index\\\\aside\\\\Aside.tsx\",\n                lineNumber: 95,\n                columnNumber: 13\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\Dmitry\\\\job\\\\freelance\\\\fr\\\\src\\\\components\\\\screens\\\\index\\\\aside\\\\Aside.tsx\",\n        lineNumber: 83,\n        columnNumber: 9\n    }, undefined);\n};\n_s(Aside, \"KkSBoi+TE07ZDtuOfIVTJoOSG/g=\", false, function() {\n    return [\n        _tanstack_react_query__WEBPACK_IMPORTED_MODULE_3__.useQuery\n    ];\n});\n_c = Aside;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Aside);\nvar _c;\n$RefreshReg$(_c, \"Aside\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9zY3JlZW5zL2luZGV4L2FzaWRlL0FzaWRlLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUE4RTtBQUMzQztBQUN5QjtBQUNYO0FBVWpELE1BQU1LLFFBQW9CO1FBQUMsRUFBQ0MsS0FBSSxFQUFFQyxXQUFVLEVBQUVDLE9BQU0sRUFBQzs7SUFFakQsTUFBTSxDQUFDQyxVQUFVQyxZQUFZLEdBQUdULCtDQUFRQSxDQUFVO0lBRWxELE1BQU0sQ0FBQ1UsWUFBWUMsY0FBYyxHQUFHWCwrQ0FBUUE7SUFDNUMsTUFBTSxDQUFDWSxRQUFRQyxXQUFXLEdBQUdiLCtDQUFRQSxDQUFTO0lBRTlDLE1BQU1jLGNBQWMsQ0FBQ0M7UUFFakJOLFlBQVk7UUFFWk8sUUFBUUMsSUFBSSxnQkFBZ0JGO1FBQzVCRyxhQUFhQyxRQUFRLFVBQVVDLE9BQU9MO1FBRXRDLE1BQU1NLEtBQUtDLFlBQVk7WUFFbkIsTUFBTUMsS0FBS0wsYUFBYU0sUUFBUTtZQUVoQyxJQUFJLENBQUNELElBQUk7Z0JBQ0xMLGFBQWFDLFFBQVEsVUFBVTtZQUNuQyxPQUFPO2dCQUNISCxRQUFRQyxJQUFJLFVBQVVNO2dCQUN0QkwsYUFBYU8sV0FBVztnQkFDeEJQLGFBQWFDLFFBQVEsVUFBVU8sS0FBS0MsVUFBVUMsT0FBT0wsTUFBTTtZQUMvRDtRQUNKLEdBQUc7UUFFSFosY0FBY1U7SUFDbEI7SUFFQSxNQUFNUSxTQUFTLE9BQU9kO1FBQ2xCLE1BQU1iLDRFQUFxQjJCLENBQUM7WUFBQ3hCO1lBQU15QixRQUFRVixPQUFPTDtRQUFRO0lBQzlEO0lBRUEsTUFBTWdCLFlBQVk7UUFDZCxNQUFNUixLQUFLTCxhQUFhTSxRQUFRLGFBQWE7UUFDN0NOLGFBQWFPLFdBQVc7UUFFeEJoQixZQUFZO1FBRVpvQixPQUFPSCxLQUFLTSxNQUFNVDtRQUVsQkwsYUFBYU8sV0FBVztRQUV4QlEsY0FBY3ZCO0lBQ2xCO0lBR0EsTUFBTSxFQUFFd0IsVUFBUyxFQUFFQyxNQUFLLEVBQUVDLEtBQUksRUFBRSxHQUFHakMsK0RBQVFBLENBQ3ZDO1FBQUM7UUFBY0U7UUFBTUc7S0FBUyxFQUFFLFVBQVlOLDRFQUFxQm1DO0lBR3JFdEMsZ0RBQVNBLENBQUM7UUFDTixNQUFNdUMsZUFBZUYsQ0FBQUEsaUJBQUFBLGtCQUFBQSxLQUFBQSxJQUFBQSxLQUFNQSxLQUFLRyxPQUFPLENBQUNDLE1BQWNDLEtBQWdCRCxPQUFPWixPQUFPYSxHQUFHWCxTQUFTLEVBQUMsS0FBSztRQUV0R2pCLFdBQVd5QjtJQUNmLEdBQUc7UUFBQ0Y7UUFBTTVCO1FBQVVVLGFBQWFNLFFBQVE7S0FBVTtJQUVuRHpCLGdEQUFTQSxDQUFDO1FBQ04sTUFBTXdCLEtBQUtMLGFBQWFNLFFBQVE7UUFFaENSLFFBQVFDLElBQUksYUFBYU07UUFDekIsSUFBSUEsSUFBSTtZQUNKVCxZQUFZWSxLQUFLTSxNQUFNVDtZQUN2QkwsYUFBYU8sV0FBVztRQUM1QjtJQUNKLEdBQUcsRUFBRTtJQUVMLHFCQUNJLDhEQUFDaUI7UUFBTUMsV0FBVzFDLGdFQUFReUM7OzBCQUN0Qiw4REFBQ0U7Z0JBQUlELFdBQVcxQyxzRUFBYzRDOztrQ0FDMUIsOERBQUNDO3dCQUFNSCxXQUFXMUMsdUVBQWU4Qzt3QkFBRUMsVUFBVTFDO3dCQUFZMkMsTUFBSzs7Ozs7O29CQUM3RDVDOzs7Ozs7OzBCQUdMLDhEQUFDNkM7Z0JBQUlQLFdBQVcxQyxxRUFBYWtEOztrQ0FDekIsOERBQUNDO3dCQUFFVCxXQUFXMUMsc0VBQWNvRDt3QkFBRUMsTUFBSztrQ0FBVTs7Ozs7O2tDQUM3Qyw4REFBQ0Y7d0JBQUVULFdBQVcxQyxzRUFBY29EO3dCQUFFQyxNQUFLO2tDQUFXOzs7Ozs7a0NBQzlDLDhEQUFDRjt3QkFBRVQsV0FBVzFDLHNFQUFjb0Q7d0JBQUVDLE1BQUs7a0NBQVU7Ozs7Ozs7Ozs7OzswQkFHakQsOERBQUNWO2dCQUFJRCxXQUFXMUMsd0VBQWdCc0Q7O2tDQUM1Qiw4REFBQ0M7d0JBQ0dDLE9BQU9qRCxXQUFXOzRCQUFDa0QsZUFBZTs0QkFBUUMsaUJBQWlCO3dCQUFNLElBQUksQ0FBQzt3QkFDdEVoQixXQUFXMUMsK0VBQXVCMkQ7d0JBQ2xDQyxTQUFTLElBQU0vQyxZQUFZO2tDQUMxQjs7Ozs7O2tDQUdMLDhEQUFDMEM7d0JBQ0dDLE9BQU8sQ0FBQ2pELFdBQVc7NEJBQUNrRCxlQUFlOzRCQUFRQyxpQkFBaUI7d0JBQU0sSUFBSSxDQUFDO3dCQUN2RWhCLFdBQVcxQywrRUFBdUIyRDt3QkFDbENDLFNBQVM5QjtrQ0FDWjs7Ozs7O2tDQUdELDhEQUFDYTt3QkFBSUQsV0FBVzFDLDZFQUFxQjZEOzswQ0FDakMsOERBQUNsQjswQ0FBSTs7Ozs7OzRCQUNKcEMsWUFBYSxJQUFJdUQsS0FBSzdDLGFBQWFNLFFBQVEsYUFBYSxLQUFLLE1BQU13QyxjQUFjQyxNQUFNLElBQUk7MENBQzVGLDhEQUFDckI7MENBQUk7Ozs7Ozs0QkFDSCxJQUFJbUIsS0FBSyxDQUFDbkQsVUFBVSxLQUFLLE1BQU1vRCxjQUFjQyxNQUFNLElBQUk7Ozs7Ozs7a0NBRTdELDhEQUFDckI7d0JBQUlELFdBQVcxQyx3RUFBZ0JpRTs7MENBQzVCLDhEQUFDdEI7MENBQUk7Ozs7Ozs0QkFDSCxJQUFJbUIsS0FBS3hELFNBQVMsTUFBTXlELGNBQWNDLE1BQU0sSUFBSTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUt0RTtHQTdHTTdEOztRQWdEaUNELDJEQUFRQTs7O0tBaER6Q0M7QUErR04sK0RBQWVBLEtBQUtBLEVBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvc2NyZWVucy9pbmRleC9hc2lkZS9Bc2lkZS50c3g/OGFlNyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBGQywgdXNlQ2FsbGJhY2ssIHVzZUVmZmVjdCwgdXNlTWVtbywgdXNlUmVmLCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgY2wgZnJvbSBcIi4vQXNpZGUubW9kdWxlLmNzc1wiXHJcbmltcG9ydCB7IENoYW5nZXNTZXJ2aWNlIH0gZnJvbSBcIkAvc2VydmljZXMvY2hhbmdlcy5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7IHVzZVF1ZXJ5IH0gZnJvbSBcIkB0YW5zdGFjay9yZWFjdC1xdWVyeVwiO1xyXG5pbXBvcnQgeyBJQ2hhbmdlIH0gZnJvbSBcIkAvdHlwZXMvY2hhbmdlLmludGVyZmFjZVwiO1xyXG5cclxuaW50ZXJmYWNlIElBc2lkZSB7XHJcbiAgICBkYXRlOiBzdHJpbmcsXHJcbiAgICBjaGFuZ2VEYXRlOiBhbnksXHJcbiAgICByZW1haW46IG51bWJlclxyXG59XHJcblxyXG5cclxuY29uc3QgQXNpZGU6IEZDPElBc2lkZT4gPSAoe2RhdGUsIGNoYW5nZURhdGUsIHJlbWFpbn0pID0+IHtcclxuXHJcbiAgICBjb25zdCBbaXNDaGFuZ2UsIHNldElzQ2hhbmdlXSA9IHVzZVN0YXRlPEJvb2xlYW4+KGZhbHNlKTtcclxuXHJcbiAgICBjb25zdCBbaW50ZXJ2YWxJZCwgc2V0SW50ZXJ2YWxJZF0gPSB1c2VTdGF0ZTxhbnk+KClcclxuICAgIGNvbnN0IFttb250bHksIHNldE1vbnRobHldID0gdXNlU3RhdGU8bnVtYmVyPigwKVxyXG5cclxuICAgIGNvbnN0IHN0YXJ0Q2hhbmdlID0gKHNlY29uZHM6IG51bWJlcikgPT4ge1xyXG5cclxuICAgICAgICBzZXRJc0NoYW5nZSh0cnVlKTtcclxuXHJcbiAgICAgICAgY29uc29sZS5sb2coXCJTdGFydGVkIHdpdGhcIiwgc2Vjb25kcylcclxuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcImNoYW5nZVwiLCBTdHJpbmcoc2Vjb25kcykpXHJcblxyXG4gICAgICAgIGNvbnN0IGlkID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xyXG5cclxuICAgICAgICAgICAgY29uc3QgcHIgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImNoYW5nZVwiKVxyXG5cclxuICAgICAgICAgICAgaWYgKCFwcikge1xyXG4gICAgICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJjaGFuZ2VcIiwgXCIxXCIpXHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIlNldHRlZFwiLCBwcilcclxuICAgICAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKFwiY2hhbmdlXCIpXHJcbiAgICAgICAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcImNoYW5nZVwiLCBKU09OLnN0cmluZ2lmeShOdW1iZXIocHIpICsgMSkpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LCAxMDAwKTtcclxuXHJcbiAgICAgICAgc2V0SW50ZXJ2YWxJZChpZClcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBjcmVhdGUgPSBhc3luYyAoc2Vjb25kczogbnVtYmVyKSA9PiB7XHJcbiAgICAgICAgYXdhaXQgQ2hhbmdlc1NlcnZpY2UuY3JlYXRlKHtkYXRlLCBsZW5ndGg6IFN0cmluZyhzZWNvbmRzKX0pO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGVuZENoYW5nZSA9IGFzeW5jICgpID0+IHtcclxuICAgICAgICBjb25zdCBwciA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiY2hhbmdlXCIpIHx8IFwiMFwiXHJcbiAgICAgICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oXCJjaGFuZ2VcIilcclxuXHJcbiAgICAgICAgc2V0SXNDaGFuZ2UoZmFsc2UpO1xyXG5cclxuICAgICAgICBjcmVhdGUoSlNPTi5wYXJzZShwcikpXHJcblxyXG4gICAgICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKFwiY2hhbmdlXCIpXHJcblxyXG4gICAgICAgIGNsZWFySW50ZXJ2YWwoaW50ZXJ2YWxJZClcclxuICAgIH1cclxuXHJcblxyXG4gICAgY29uc3QgeyBpc0xvYWRpbmcsIGVycm9yLCBkYXRhIH0gPSB1c2VRdWVyeShcclxuICAgICAgICBbJ2NoYW5nZS1hbGwnLCBkYXRlLCBpc0NoYW5nZV0sIGFzeW5jICgpID0+IENoYW5nZXNTZXJ2aWNlLmdldEFsbCgpXHJcbiAgICApO1xyXG5cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgY29uc3QgbW9udGhTZWNvbmRzID0gZGF0YT8uZGF0YS5yZWR1Y2UoKHN1bW06IG51bWJlciwgZWw6IElDaGFuZ2UpID0+IHN1bW0gKyBOdW1iZXIoZWwubGVuZ3RoKSwgMCkgfHwgMFxyXG5cclxuICAgICAgICBzZXRNb250aGx5KG1vbnRoU2Vjb25kcylcclxuICAgIH0sIFtkYXRhLCBpc0NoYW5nZSwgbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJjaGFuZ2VcIildKVxyXG5cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgY29uc3QgcHIgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImNoYW5nZVwiKVxyXG5cclxuICAgICAgICBjb25zb2xlLmxvZyhcIkZvciBzdGFydFwiLCBwcilcclxuICAgICAgICBpZiAocHIpIHtcclxuICAgICAgICAgICAgc3RhcnRDaGFuZ2UoSlNPTi5wYXJzZShwcikpXHJcbiAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKFwiY2hhbmdlXCIpXHJcbiAgICAgICAgfVxyXG4gICAgfSwgW10pXHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8YXNpZGUgY2xhc3NOYW1lPXtjbC5hc2lkZX0+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbC5hc2lkZV9fZGF0ZX0+XHJcbiAgICAgICAgICAgICAgICA8aW5wdXQgY2xhc3NOYW1lPXtjbC5hc2lkZV9faW5wdXR9IG9uQ2hhbmdlPXtjaGFuZ2VEYXRlfSB0eXBlPVwiZGF0ZVwiIC8+XHJcbiAgICAgICAgICAgICAgICB7ZGF0ZX1cclxuICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICA8bmF2IGNsYXNzTmFtZT17Y2wuYXNpZGVfX25hdn0+XHJcbiAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9e2NsLmFzaWRlX19saW5rfSBocmVmPVwiY2xpZW50c1wiPtCh0L/QuNGB0L7QuiDQutC70LjQtdC90YLQvtCyPC9hPlxyXG4gICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPXtjbC5hc2lkZV9fbGlua30gaHJlZj1cInNlcnZpY2VzXCI+0KPRgdC70YPQs9C4PC9hPlxyXG4gICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPXtjbC5hc2lkZV9fbGlua30gaHJlZj1cImhpc3RvcnlcIj7QmNGB0YLQvtGA0LjRjzwvYT5cclxuICAgICAgICAgICAgPC9uYXY+XHJcblxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2wuYXNpZGVfX2NoYW5nZX0+XHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uIFxyXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlPXtpc0NoYW5nZSA/IHtwb2ludGVyRXZlbnRzOiBcIm5vbmVcIiwgYmFja2dyb3VuZENvbG9yOiBcImJsdWVcIn0gOiB7fX0gXHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbC5hc2lkZV9fY2hhbmdlX2J1dHRvbn1cclxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzdGFydENoYW5nZSgwKX1cclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgINCd0LDRh9Cw0YLRjCDRgdC80LXQvdGDXHJcbiAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uIFxyXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlPXshaXNDaGFuZ2UgPyB7cG9pbnRlckV2ZW50czogXCJub25lXCIsIGJhY2tncm91bmRDb2xvcjogXCJibHVlXCJ9IDoge319IFxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2wuYXNpZGVfX2NoYW5nZV9idXR0b259XHJcbiAgICAgICAgICAgICAgICAgICAgb25DbGljaz17ZW5kQ2hhbmdlfVxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgINCX0LDQstC10YDRiNC40YLRjCDRgdC80LXQvdGDXHJcbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbC5hc2lkZV9fY2hhbmdlX2JvZHl9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXY+0JLRgNC10LzRjyDRgdC80LXQvdGLOjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIHtpc0NoYW5nZSAmJiAobmV3IERhdGUobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJjaGFuZ2VcIikgfHwgXCJcIiAqIDEwMDApLnRvSVNPU3RyaW5nKCkuc2xpY2UoMTEsIDE5KSl9XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdj7Ql9CwINC80LXRgdGP0YY6PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgeyhuZXcgRGF0ZSgobW9udGx5IHx8IDApICogMTAwMCkudG9JU09TdHJpbmcoKS5zbGljZSgxMSwgMTkpKX1cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsLmFzaWRlX19yZW1haW59PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXY+0J7RgdGC0LDQu9C+0YHRjDo8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICB7KG5ldyBEYXRlKHJlbWFpbiAqIDEwMDApLnRvSVNPU3RyaW5nKCkuc2xpY2UoMTEsIDE5KSl9XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9hc2lkZT5cclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQXNpZGUiXSwibmFtZXMiOlsidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJjbCIsIkNoYW5nZXNTZXJ2aWNlIiwidXNlUXVlcnkiLCJBc2lkZSIsImRhdGUiLCJjaGFuZ2VEYXRlIiwicmVtYWluIiwiaXNDaGFuZ2UiLCJzZXRJc0NoYW5nZSIsImludGVydmFsSWQiLCJzZXRJbnRlcnZhbElkIiwibW9udGx5Iiwic2V0TW9udGhseSIsInN0YXJ0Q2hhbmdlIiwic2Vjb25kcyIsImNvbnNvbGUiLCJsb2ciLCJsb2NhbFN0b3JhZ2UiLCJzZXRJdGVtIiwiU3RyaW5nIiwiaWQiLCJzZXRJbnRlcnZhbCIsInByIiwiZ2V0SXRlbSIsInJlbW92ZUl0ZW0iLCJKU09OIiwic3RyaW5naWZ5IiwiTnVtYmVyIiwiY3JlYXRlIiwibGVuZ3RoIiwiZW5kQ2hhbmdlIiwicGFyc2UiLCJjbGVhckludGVydmFsIiwiaXNMb2FkaW5nIiwiZXJyb3IiLCJkYXRhIiwiZ2V0QWxsIiwibW9udGhTZWNvbmRzIiwicmVkdWNlIiwic3VtbSIsImVsIiwiYXNpZGUiLCJjbGFzc05hbWUiLCJkaXYiLCJhc2lkZV9fZGF0ZSIsImlucHV0IiwiYXNpZGVfX2lucHV0Iiwib25DaGFuZ2UiLCJ0eXBlIiwibmF2IiwiYXNpZGVfX25hdiIsImEiLCJhc2lkZV9fbGluayIsImhyZWYiLCJhc2lkZV9fY2hhbmdlIiwiYnV0dG9uIiwic3R5bGUiLCJwb2ludGVyRXZlbnRzIiwiYmFja2dyb3VuZENvbG9yIiwiYXNpZGVfX2NoYW5nZV9idXR0b24iLCJvbkNsaWNrIiwiYXNpZGVfX2NoYW5nZV9ib2R5IiwiRGF0ZSIsInRvSVNPU3RyaW5nIiwic2xpY2UiLCJhc2lkZV9fcmVtYWluIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/screens/index/aside/Aside.tsx\n"));

/***/ })

});