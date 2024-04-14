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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Aside_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Aside.module.css */ \"./src/components/screens/index/aside/Aside.module.css\");\n/* harmony import */ var _Aside_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_Aside_module_css__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _services_changes_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/services/changes.service */ \"./src/services/changes.service.ts\");\n/* harmony import */ var _tanstack_react_query__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @tanstack/react-query */ \"./node_modules/@tanstack/react-query/build/lib/index.mjs\");\n\nvar _s = $RefreshSig$();\n\n\n\n\nconst Aside = (param)=>{\n    let { date , changeDate , remain  } = param;\n    _s();\n    const [isChange, setIsChange] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [seconds, setSeconds] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    const [intervalId, setIntervalId] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();\n    const [montly, setMonthly] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    const startChange = (seconds)=>{\n        setIsChange(true);\n        console.log(\"Started with\", seconds);\n        localStorage.setItem(\"change\", String(seconds));\n        setSeconds(seconds);\n        const id = setInterval(()=>{\n            setSeconds((prevSeconds)=>prevSeconds + 1);\n            const pr = localStorage.getItem(\"change\");\n            if (!pr) {\n                localStorage.setItem(\"change\", \"1\");\n            } else {\n                console.log(\"Setted\");\n                localStorage.removeItem(\"change\");\n                localStorage.setItem(\"change\", JSON.stringify(Number(pr) + 1));\n            }\n        }, 1000);\n        setIntervalId(id);\n    };\n    const create = async (seconds)=>{\n        await _services_changes_service__WEBPACK_IMPORTED_MODULE_2__.ChangesService.create({\n            date,\n            length: String(seconds)\n        });\n    };\n    const endChange = async ()=>{\n        setMonthly((montly)=>montly + seconds);\n        setIsChange(false);\n        setSeconds(0);\n        create(seconds);\n        localStorage.removeItem(\"change\");\n        clearInterval(intervalId);\n    };\n    const { isLoading , error , data  } = (0,_tanstack_react_query__WEBPACK_IMPORTED_MODULE_3__.useQuery)([\n        \"change-all\",\n        date,\n        isChange,\n        seconds\n    ], async ()=>_services_changes_service__WEBPACK_IMPORTED_MODULE_2__.ChangesService.getAll());\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const monthSeconds = (data === null || data === void 0 ? void 0 : data.data.reduce((summ, el)=>summ + Number(el.length), 0)) || 0;\n        setMonthly(monthSeconds);\n    }, [\n        data,\n        isChange\n    ]);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const pr = localStorage.getItem(\"change\");\n        console.log(\"For start\", pr);\n        if (pr) {\n            startChange(JSON.parse(pr));\n            localStorage.removeItem(\"change\");\n        }\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"aside\", {\n        className: (_Aside_module_css__WEBPACK_IMPORTED_MODULE_4___default().aside),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_Aside_module_css__WEBPACK_IMPORTED_MODULE_4___default().aside__date),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        className: (_Aside_module_css__WEBPACK_IMPORTED_MODULE_4___default().aside__input),\n                        onChange: changeDate,\n                        type: \"date\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Dmitry\\\\job\\\\freelance\\\\fr\\\\src\\\\components\\\\screens\\\\index\\\\aside\\\\Aside.tsx\",\n                        lineNumber: 88,\n                        columnNumber: 17\n                    }, undefined),\n                    date\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\Dmitry\\\\job\\\\freelance\\\\fr\\\\src\\\\components\\\\screens\\\\index\\\\aside\\\\Aside.tsx\",\n                lineNumber: 87,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"nav\", {\n                className: (_Aside_module_css__WEBPACK_IMPORTED_MODULE_4___default().aside__nav),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                        className: (_Aside_module_css__WEBPACK_IMPORTED_MODULE_4___default().aside__link),\n                        href: \"clients\",\n                        children: \"Список клиентов\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Dmitry\\\\job\\\\freelance\\\\fr\\\\src\\\\components\\\\screens\\\\index\\\\aside\\\\Aside.tsx\",\n                        lineNumber: 93,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                        className: (_Aside_module_css__WEBPACK_IMPORTED_MODULE_4___default().aside__link),\n                        href: \"services\",\n                        children: \"Услуги\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Dmitry\\\\job\\\\freelance\\\\fr\\\\src\\\\components\\\\screens\\\\index\\\\aside\\\\Aside.tsx\",\n                        lineNumber: 94,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                        className: (_Aside_module_css__WEBPACK_IMPORTED_MODULE_4___default().aside__link),\n                        href: \"history\",\n                        children: \"История\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Dmitry\\\\job\\\\freelance\\\\fr\\\\src\\\\components\\\\screens\\\\index\\\\aside\\\\Aside.tsx\",\n                        lineNumber: 95,\n                        columnNumber: 17\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\Dmitry\\\\job\\\\freelance\\\\fr\\\\src\\\\components\\\\screens\\\\index\\\\aside\\\\Aside.tsx\",\n                lineNumber: 92,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_Aside_module_css__WEBPACK_IMPORTED_MODULE_4___default().aside__change),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        style: isChange ? {\n                            pointerEvents: \"none\",\n                            backgroundColor: \"blue\"\n                        } : {},\n                        className: (_Aside_module_css__WEBPACK_IMPORTED_MODULE_4___default().aside__change_button),\n                        onClick: ()=>startChange(0),\n                        children: \"Начать смену\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Dmitry\\\\job\\\\freelance\\\\fr\\\\src\\\\components\\\\screens\\\\index\\\\aside\\\\Aside.tsx\",\n                        lineNumber: 99,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        style: !isChange ? {\n                            pointerEvents: \"none\",\n                            backgroundColor: \"blue\"\n                        } : {},\n                        className: (_Aside_module_css__WEBPACK_IMPORTED_MODULE_4___default().aside__change_button),\n                        onClick: endChange,\n                        children: \"Завершить смену\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Dmitry\\\\job\\\\freelance\\\\fr\\\\src\\\\components\\\\screens\\\\index\\\\aside\\\\Aside.tsx\",\n                        lineNumber: 106,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_Aside_module_css__WEBPACK_IMPORTED_MODULE_4___default().aside__change_body),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                children: \"Время смены:\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Dmitry\\\\job\\\\freelance\\\\fr\\\\src\\\\components\\\\screens\\\\index\\\\aside\\\\Aside.tsx\",\n                                lineNumber: 114,\n                                columnNumber: 21\n                            }, undefined),\n                            isChange && new Date(seconds * 1000).toISOString().slice(11, 19),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                children: \"За месяц:\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Dmitry\\\\job\\\\freelance\\\\fr\\\\src\\\\components\\\\screens\\\\index\\\\aside\\\\Aside.tsx\",\n                                lineNumber: 116,\n                                columnNumber: 21\n                            }, undefined),\n                            new Date((montly || 0) * 1000).toISOString().slice(11, 19)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\Dmitry\\\\job\\\\freelance\\\\fr\\\\src\\\\components\\\\screens\\\\index\\\\aside\\\\Aside.tsx\",\n                        lineNumber: 113,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_Aside_module_css__WEBPACK_IMPORTED_MODULE_4___default().aside__remain),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                children: \"Осталось:\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Dmitry\\\\job\\\\freelance\\\\fr\\\\src\\\\components\\\\screens\\\\index\\\\aside\\\\Aside.tsx\",\n                                lineNumber: 120,\n                                columnNumber: 21\n                            }, undefined),\n                            new Date(remain * 1000).toISOString().slice(11, 19)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\Dmitry\\\\job\\\\freelance\\\\fr\\\\src\\\\components\\\\screens\\\\index\\\\aside\\\\Aside.tsx\",\n                        lineNumber: 119,\n                        columnNumber: 17\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\Dmitry\\\\job\\\\freelance\\\\fr\\\\src\\\\components\\\\screens\\\\index\\\\aside\\\\Aside.tsx\",\n                lineNumber: 98,\n                columnNumber: 13\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\Dmitry\\\\job\\\\freelance\\\\fr\\\\src\\\\components\\\\screens\\\\index\\\\aside\\\\Aside.tsx\",\n        lineNumber: 86,\n        columnNumber: 9\n    }, undefined);\n};\n_s(Aside, \"auApwOwEFRX7nCYTuOg1Vj7d9s4=\", false, function() {\n    return [\n        _tanstack_react_query__WEBPACK_IMPORTED_MODULE_3__.useQuery\n    ];\n});\n_c = Aside;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Aside);\nvar _c;\n$RefreshReg$(_c, \"Aside\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9zY3JlZW5zL2luZGV4L2FzaWRlL0FzaWRlLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUE4RTtBQUMzQztBQUN5QjtBQUNYO0FBVWpELE1BQU1LLFFBQW9CO1FBQUMsRUFBQ0MsS0FBSSxFQUFFQyxXQUFVLEVBQUVDLE9BQU0sRUFBQzs7SUFFakQsTUFBTSxDQUFDQyxVQUFVQyxZQUFZLEdBQUdULCtDQUFRQSxDQUFVO0lBQ2xELE1BQU0sQ0FBQ1UsU0FBU0MsV0FBVyxHQUFHWCwrQ0FBUUEsQ0FBUztJQUMvQyxNQUFNLENBQUNZLFlBQVlDLGNBQWMsR0FBR2IsK0NBQVFBO0lBQzVDLE1BQU0sQ0FBQ2MsUUFBUUMsV0FBVyxHQUFHZiwrQ0FBUUEsQ0FBUztJQUU5QyxNQUFNZ0IsY0FBYyxDQUFDTjtRQUVqQkQsWUFBWTtRQUVaUSxRQUFRQyxJQUFJLGdCQUFnQlI7UUFDNUJTLGFBQWFDLFFBQVEsVUFBVUMsT0FBT1g7UUFFdENDLFdBQVdEO1FBRVgsTUFBTVksS0FBS0MsWUFBWTtZQUNuQlosV0FBV2EsQ0FBQUEsY0FBZUEsY0FBYztZQUV4QyxNQUFNQyxLQUFLTixhQUFhTyxRQUFRO1lBRWhDLElBQUksQ0FBQ0QsSUFBSTtnQkFDTE4sYUFBYUMsUUFBUSxVQUFVO1lBQ25DLE9BQU87Z0JBQ0hILFFBQVFDLElBQUk7Z0JBQ1pDLGFBQWFRLFdBQVc7Z0JBQ3hCUixhQUFhQyxRQUFRLFVBQVVRLEtBQUtDLFVBQVVDLE9BQU9MLE1BQU07WUFDL0Q7UUFDSixHQUFHO1FBRUhaLGNBQWNTO0lBQ2xCO0lBRUEsTUFBTVMsU0FBUyxPQUFPckI7UUFDbEIsTUFBTVIsNEVBQXFCNkIsQ0FBQztZQUFDMUI7WUFBTTJCLFFBQVFYLE9BQU9YO1FBQVE7SUFDOUQ7SUFFQSxNQUFNdUIsWUFBWTtRQUNkbEIsV0FBV0QsQ0FBQUEsU0FBVUEsU0FBU0o7UUFFOUJELFlBQVk7UUFFWkUsV0FBVztRQUNYb0IsT0FBT3JCO1FBRVBTLGFBQWFRLFdBQVc7UUFFeEJPLGNBQWN0QjtJQUNsQjtJQUdBLE1BQU0sRUFBRXVCLFVBQVMsRUFBRUMsTUFBSyxFQUFFQyxLQUFJLEVBQUUsR0FBR2xDLCtEQUFRQSxDQUN2QztRQUFDO1FBQWNFO1FBQU1HO1FBQVVFO0tBQVEsRUFBRSxVQUFZUiw0RUFBcUJvQztJQUc5RXZDLGdEQUFTQSxDQUFDO1FBQ04sTUFBTXdDLGVBQWVGLENBQUFBLGlCQUFBQSxrQkFBQUEsS0FBQUEsSUFBQUEsS0FBTUEsS0FBS0csT0FBTyxDQUFDQyxNQUFjQyxLQUFnQkQsT0FBT1gsT0FBT1ksR0FBR1YsU0FBUyxFQUFDLEtBQUs7UUFFdEdqQixXQUFXd0I7SUFDZixHQUFHO1FBQUNGO1FBQU03QjtLQUFTO0lBRW5CVCxnREFBU0EsQ0FBQztRQUNOLE1BQU0wQixLQUFLTixhQUFhTyxRQUFRO1FBRWhDVCxRQUFRQyxJQUFJLGFBQWFPO1FBQ3pCLElBQUlBLElBQUk7WUFDSlQsWUFBWVksS0FBS2UsTUFBTWxCO1lBQ3ZCTixhQUFhUSxXQUFXO1FBQzVCO0lBQ0osR0FBRyxFQUFFO0lBRUwscUJBQ0ksOERBQUNpQjtRQUFNQyxXQUFXNUMsZ0VBQVEyQzs7MEJBQ3RCLDhEQUFDRTtnQkFBSUQsV0FBVzVDLHNFQUFjOEM7O2tDQUMxQiw4REFBQ0M7d0JBQU1ILFdBQVc1Qyx1RUFBZWdEO3dCQUFFQyxVQUFVNUM7d0JBQVk2QyxNQUFLOzs7Ozs7b0JBQzdEOUM7Ozs7Ozs7MEJBR0wsOERBQUMrQztnQkFBSVAsV0FBVzVDLHFFQUFhb0Q7O2tDQUN6Qiw4REFBQ0M7d0JBQUVULFdBQVc1QyxzRUFBY3NEO3dCQUFFQyxNQUFLO2tDQUFVOzs7Ozs7a0NBQzdDLDhEQUFDRjt3QkFBRVQsV0FBVzVDLHNFQUFjc0Q7d0JBQUVDLE1BQUs7a0NBQVc7Ozs7OztrQ0FDOUMsOERBQUNGO3dCQUFFVCxXQUFXNUMsc0VBQWNzRDt3QkFBRUMsTUFBSztrQ0FBVTs7Ozs7Ozs7Ozs7OzBCQUdqRCw4REFBQ1Y7Z0JBQUlELFdBQVc1Qyx3RUFBZ0J3RDs7a0NBQzVCLDhEQUFDQzt3QkFDR0MsT0FBT25ELFdBQVc7NEJBQUNvRCxlQUFlOzRCQUFRQyxpQkFBaUI7d0JBQU0sSUFBSSxDQUFDO3dCQUN0RWhCLFdBQVc1QywrRUFBdUI2RDt3QkFDbENDLFNBQVMsSUFBTS9DLFlBQVk7a0NBQzFCOzs7Ozs7a0NBR0wsOERBQUMwQzt3QkFDR0MsT0FBTyxDQUFDbkQsV0FBVzs0QkFBQ29ELGVBQWU7NEJBQVFDLGlCQUFpQjt3QkFBTSxJQUFJLENBQUM7d0JBQ3ZFaEIsV0FBVzVDLCtFQUF1QjZEO3dCQUNsQ0MsU0FBUzlCO2tDQUNaOzs7Ozs7a0NBR0QsOERBQUNhO3dCQUFJRCxXQUFXNUMsNkVBQXFCK0Q7OzBDQUNqQyw4REFBQ2xCOzBDQUFJOzs7Ozs7NEJBQ0p0QyxZQUFhLElBQUl5RCxLQUFLdkQsVUFBVSxNQUFNd0QsY0FBY0MsTUFBTSxJQUFJOzBDQUMvRCw4REFBQ3JCOzBDQUFJOzs7Ozs7NEJBQ0gsSUFBSW1CLEtBQUssQ0FBQ25ELFVBQVUsS0FBSyxNQUFNb0QsY0FBY0MsTUFBTSxJQUFJOzs7Ozs7O2tDQUU3RCw4REFBQ3JCO3dCQUFJRCxXQUFXNUMsd0VBQWdCbUU7OzBDQUM1Qiw4REFBQ3RCOzBDQUFJOzs7Ozs7NEJBQ0gsSUFBSW1CLEtBQUsxRCxTQUFTLE1BQU0yRCxjQUFjQyxNQUFNLElBQUk7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFLdEU7R0FoSE0vRDs7UUFtRGlDRCwyREFBUUE7OztLQW5EekNDO0FBa0hOLCtEQUFlQSxLQUFLQSxFQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL3NjcmVlbnMvaW5kZXgvYXNpZGUvQXNpZGUudHN4PzhhZTciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRkMsIHVzZUNhbGxiYWNrLCB1c2VFZmZlY3QsIHVzZU1lbW8sIHVzZVJlZiwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IGNsIGZyb20gXCIuL0FzaWRlLm1vZHVsZS5jc3NcIlxyXG5pbXBvcnQgeyBDaGFuZ2VzU2VydmljZSB9IGZyb20gXCJAL3NlcnZpY2VzL2NoYW5nZXMuc2VydmljZVwiO1xyXG5pbXBvcnQgeyB1c2VRdWVyeSB9IGZyb20gXCJAdGFuc3RhY2svcmVhY3QtcXVlcnlcIjtcclxuaW1wb3J0IHsgSUNoYW5nZSB9IGZyb20gXCJAL3R5cGVzL2NoYW5nZS5pbnRlcmZhY2VcIjtcclxuXHJcbmludGVyZmFjZSBJQXNpZGUge1xyXG4gICAgZGF0ZTogc3RyaW5nLFxyXG4gICAgY2hhbmdlRGF0ZTogYW55LFxyXG4gICAgcmVtYWluOiBudW1iZXJcclxufVxyXG5cclxuXHJcbmNvbnN0IEFzaWRlOiBGQzxJQXNpZGU+ID0gKHtkYXRlLCBjaGFuZ2VEYXRlLCByZW1haW59KSA9PiB7XHJcblxyXG4gICAgY29uc3QgW2lzQ2hhbmdlLCBzZXRJc0NoYW5nZV0gPSB1c2VTdGF0ZTxCb29sZWFuPihmYWxzZSk7XHJcbiAgICBjb25zdCBbc2Vjb25kcywgc2V0U2Vjb25kc10gPSB1c2VTdGF0ZTxudW1iZXI+KDApXHJcbiAgICBjb25zdCBbaW50ZXJ2YWxJZCwgc2V0SW50ZXJ2YWxJZF0gPSB1c2VTdGF0ZTxhbnk+KClcclxuICAgIGNvbnN0IFttb250bHksIHNldE1vbnRobHldID0gdXNlU3RhdGU8bnVtYmVyPigwKVxyXG5cclxuICAgIGNvbnN0IHN0YXJ0Q2hhbmdlID0gKHNlY29uZHM6IG51bWJlcikgPT4ge1xyXG5cclxuICAgICAgICBzZXRJc0NoYW5nZSh0cnVlKTtcclxuXHJcbiAgICAgICAgY29uc29sZS5sb2coXCJTdGFydGVkIHdpdGhcIiwgc2Vjb25kcylcclxuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcImNoYW5nZVwiLCBTdHJpbmcoc2Vjb25kcykpXHJcblxyXG4gICAgICAgIHNldFNlY29uZHMoc2Vjb25kcylcclxuXHJcbiAgICAgICAgY29uc3QgaWQgPSBzZXRJbnRlcnZhbCgoKSA9PiB7XHJcbiAgICAgICAgICAgIHNldFNlY29uZHMocHJldlNlY29uZHMgPT4gcHJldlNlY29uZHMgKyAxKTtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IHByID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJjaGFuZ2VcIilcclxuXHJcbiAgICAgICAgICAgIGlmICghcHIpIHtcclxuICAgICAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwiY2hhbmdlXCIsIFwiMVwiKVxyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJTZXR0ZWRcIilcclxuICAgICAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKFwiY2hhbmdlXCIpXHJcbiAgICAgICAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcImNoYW5nZVwiLCBKU09OLnN0cmluZ2lmeShOdW1iZXIocHIpICsgMSkpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LCAxMDAwKTtcclxuXHJcbiAgICAgICAgc2V0SW50ZXJ2YWxJZChpZClcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBjcmVhdGUgPSBhc3luYyAoc2Vjb25kczogbnVtYmVyKSA9PiB7XHJcbiAgICAgICAgYXdhaXQgQ2hhbmdlc1NlcnZpY2UuY3JlYXRlKHtkYXRlLCBsZW5ndGg6IFN0cmluZyhzZWNvbmRzKX0pO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGVuZENoYW5nZSA9IGFzeW5jICgpID0+IHtcclxuICAgICAgICBzZXRNb250aGx5KG1vbnRseSA9PiBtb250bHkgKyBzZWNvbmRzKVxyXG5cclxuICAgICAgICBzZXRJc0NoYW5nZShmYWxzZSk7XHJcblxyXG4gICAgICAgIHNldFNlY29uZHMoMClcclxuICAgICAgICBjcmVhdGUoc2Vjb25kcylcclxuXHJcbiAgICAgICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oXCJjaGFuZ2VcIilcclxuXHJcbiAgICAgICAgY2xlYXJJbnRlcnZhbChpbnRlcnZhbElkKVxyXG4gICAgfVxyXG5cclxuXHJcbiAgICBjb25zdCB7IGlzTG9hZGluZywgZXJyb3IsIGRhdGEgfSA9IHVzZVF1ZXJ5KFxyXG4gICAgICAgIFsnY2hhbmdlLWFsbCcsIGRhdGUsIGlzQ2hhbmdlLCBzZWNvbmRzXSwgYXN5bmMgKCkgPT4gQ2hhbmdlc1NlcnZpY2UuZ2V0QWxsKClcclxuICAgICk7XHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBjb25zdCBtb250aFNlY29uZHMgPSBkYXRhPy5kYXRhLnJlZHVjZSgoc3VtbTogbnVtYmVyLCBlbDogSUNoYW5nZSkgPT4gc3VtbSArIE51bWJlcihlbC5sZW5ndGgpLCAwKSB8fCAwXHJcblxyXG4gICAgICAgIHNldE1vbnRobHkobW9udGhTZWNvbmRzKVxyXG4gICAgfSwgW2RhdGEsIGlzQ2hhbmdlXSlcclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHByID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJjaGFuZ2VcIilcclxuXHJcbiAgICAgICAgY29uc29sZS5sb2coXCJGb3Igc3RhcnRcIiwgcHIpXHJcbiAgICAgICAgaWYgKHByKSB7XHJcbiAgICAgICAgICAgIHN0YXJ0Q2hhbmdlKEpTT04ucGFyc2UocHIpKVxyXG4gICAgICAgICAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbShcImNoYW5nZVwiKVxyXG4gICAgICAgIH1cclxuICAgIH0sIFtdKVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGFzaWRlIGNsYXNzTmFtZT17Y2wuYXNpZGV9PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2wuYXNpZGVfX2RhdGV9PlxyXG4gICAgICAgICAgICAgICAgPGlucHV0IGNsYXNzTmFtZT17Y2wuYXNpZGVfX2lucHV0fSBvbkNoYW5nZT17Y2hhbmdlRGF0ZX0gdHlwZT1cImRhdGVcIiAvPlxyXG4gICAgICAgICAgICAgICAge2RhdGV9XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgPG5hdiBjbGFzc05hbWU9e2NsLmFzaWRlX19uYXZ9PlxyXG4gICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPXtjbC5hc2lkZV9fbGlua30gaHJlZj1cImNsaWVudHNcIj7QodC/0LjRgdC+0Log0LrQu9C40LXQvdGC0L7QsjwvYT5cclxuICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT17Y2wuYXNpZGVfX2xpbmt9IGhyZWY9XCJzZXJ2aWNlc1wiPtCj0YHQu9GD0LPQuDwvYT5cclxuICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT17Y2wuYXNpZGVfX2xpbmt9IGhyZWY9XCJoaXN0b3J5XCI+0JjRgdGC0L7RgNC40Y88L2E+XHJcbiAgICAgICAgICAgIDwvbmF2PlxyXG5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsLmFzaWRlX19jaGFuZ2V9PlxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBcclxuICAgICAgICAgICAgICAgICAgICBzdHlsZT17aXNDaGFuZ2UgPyB7cG9pbnRlckV2ZW50czogXCJub25lXCIsIGJhY2tncm91bmRDb2xvcjogXCJibHVlXCJ9IDoge319IFxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2wuYXNpZGVfX2NoYW5nZV9idXR0b259XHJcbiAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc3RhcnRDaGFuZ2UoMCl9XHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICDQndCw0YfQsNGC0Ywg0YHQvNC10L3Rg1xyXG4gICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBcclxuICAgICAgICAgICAgICAgICAgICBzdHlsZT17IWlzQ2hhbmdlID8ge3BvaW50ZXJFdmVudHM6IFwibm9uZVwiLCBiYWNrZ3JvdW5kQ29sb3I6IFwiYmx1ZVwifSA6IHt9fSBcclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsLmFzaWRlX19jaGFuZ2VfYnV0dG9ufVxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e2VuZENoYW5nZX1cclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICDQl9Cw0LLQtdGA0YjQuNGC0Ywg0YHQvNC10L3Rg1xyXG4gICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2wuYXNpZGVfX2NoYW5nZV9ib2R5fT5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2PtCS0YDQtdC80Y8g0YHQvNC10L3Rizo8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICB7aXNDaGFuZ2UgJiYgKG5ldyBEYXRlKHNlY29uZHMgKiAxMDAwKS50b0lTT1N0cmluZygpLnNsaWNlKDExLCAxOSkpfVxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXY+0JfQsCDQvNC10YHRj9GGOjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIHsobmV3IERhdGUoKG1vbnRseSB8fCAwKSAqIDEwMDApLnRvSVNPU3RyaW5nKCkuc2xpY2UoMTEsIDE5KSl9XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbC5hc2lkZV9fcmVtYWlufT5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2PtCe0YHRgtCw0LvQvtGB0Yw6PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgeyhuZXcgRGF0ZShyZW1haW4gKiAxMDAwKS50b0lTT1N0cmluZygpLnNsaWNlKDExLCAxOSkpfVxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvYXNpZGU+XHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEFzaWRlIl0sIm5hbWVzIjpbInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiY2wiLCJDaGFuZ2VzU2VydmljZSIsInVzZVF1ZXJ5IiwiQXNpZGUiLCJkYXRlIiwiY2hhbmdlRGF0ZSIsInJlbWFpbiIsImlzQ2hhbmdlIiwic2V0SXNDaGFuZ2UiLCJzZWNvbmRzIiwic2V0U2Vjb25kcyIsImludGVydmFsSWQiLCJzZXRJbnRlcnZhbElkIiwibW9udGx5Iiwic2V0TW9udGhseSIsInN0YXJ0Q2hhbmdlIiwiY29uc29sZSIsImxvZyIsImxvY2FsU3RvcmFnZSIsInNldEl0ZW0iLCJTdHJpbmciLCJpZCIsInNldEludGVydmFsIiwicHJldlNlY29uZHMiLCJwciIsImdldEl0ZW0iLCJyZW1vdmVJdGVtIiwiSlNPTiIsInN0cmluZ2lmeSIsIk51bWJlciIsImNyZWF0ZSIsImxlbmd0aCIsImVuZENoYW5nZSIsImNsZWFySW50ZXJ2YWwiLCJpc0xvYWRpbmciLCJlcnJvciIsImRhdGEiLCJnZXRBbGwiLCJtb250aFNlY29uZHMiLCJyZWR1Y2UiLCJzdW1tIiwiZWwiLCJwYXJzZSIsImFzaWRlIiwiY2xhc3NOYW1lIiwiZGl2IiwiYXNpZGVfX2RhdGUiLCJpbnB1dCIsImFzaWRlX19pbnB1dCIsIm9uQ2hhbmdlIiwidHlwZSIsIm5hdiIsImFzaWRlX19uYXYiLCJhIiwiYXNpZGVfX2xpbmsiLCJocmVmIiwiYXNpZGVfX2NoYW5nZSIsImJ1dHRvbiIsInN0eWxlIiwicG9pbnRlckV2ZW50cyIsImJhY2tncm91bmRDb2xvciIsImFzaWRlX19jaGFuZ2VfYnV0dG9uIiwib25DbGljayIsImFzaWRlX19jaGFuZ2VfYm9keSIsIkRhdGUiLCJ0b0lTT1N0cmluZyIsInNsaWNlIiwiYXNpZGVfX3JlbWFpbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/screens/index/aside/Aside.tsx\n"));

/***/ })

});