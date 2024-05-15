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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Aside_module_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Aside.module.css */ \"./src/components/screens/index/aside/Aside.module.css\");\n/* harmony import */ var _Aside_module_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_Aside_module_css__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _services_changes_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/services/changes.service */ \"./src/services/changes.service.ts\");\n/* harmony import */ var _tanstack_react_query__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @tanstack/react-query */ \"./node_modules/@tanstack/react-query/build/lib/index.mjs\");\n/* harmony import */ var _hooks_useActions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/hooks/useActions */ \"./src/hooks/useActions.ts\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nconst Aside = (param)=>{\n    let { date , changeDate , remain , setIsOpen , isOpen , refAside  } = param;\n    _s();\n    const [isChange, setIsChange] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [seconds, setSeconds] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    const [intervalId, setIntervalId] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();\n    const [montly, setMonthly] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    const { logout  } = (0,_hooks_useActions__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\n    const startChange = (seconds)=>{\n        setIsChange(true);\n        localStorage.setItem(\"change\", String(seconds));\n        setSeconds(seconds);\n        const id = setInterval(()=>{\n            setSeconds((prevSeconds)=>prevSeconds + 1);\n            const pr = localStorage.getItem(\"change\") || String(seconds);\n            if (!pr) {\n                localStorage.setItem(\"change\", \"1\");\n            } else {\n                localStorage.removeItem(\"change\");\n                localStorage.setItem(\"change\", JSON.stringify(JSON.parse(pr) + 1));\n            }\n        }, 1000);\n        setIntervalId(id);\n    };\n    const create = async (seconds)=>{\n        await _services_changes_service__WEBPACK_IMPORTED_MODULE_2__.ChangesService.create({\n            date,\n            length: String(seconds)\n        });\n    };\n    const endChange = async ()=>{\n        setMonthly((montly)=>montly + seconds);\n        setIsChange(false);\n        setSeconds(0);\n        create(seconds);\n        localStorage.removeItem(\"change\");\n        clearInterval(intervalId);\n    };\n    const { isLoading , error , data  } = (0,_tanstack_react_query__WEBPACK_IMPORTED_MODULE_4__.useQuery)([\n        \"change-all\",\n        date,\n        isChange\n    ], async ()=>_services_changes_service__WEBPACK_IMPORTED_MODULE_2__.ChangesService.getAll());\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const monthSeconds = (data === null || data === void 0 ? void 0 : data.data.reduce((summ, el)=>summ + Number(el.length), 0)) || 0;\n        setMonthly(monthSeconds);\n    }, [\n        data,\n        isChange\n    ]);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const pr = localStorage.getItem(\"change\");\n        if (pr) {\n            startChange(JSON.parse(pr));\n            localStorage.removeItem(\"change\");\n        }\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"aside\", {\n        ref: refAside,\n        className: isOpen ? (_Aside_module_css__WEBPACK_IMPORTED_MODULE_5___default().aside_active) : (_Aside_module_css__WEBPACK_IMPORTED_MODULE_5___default().aside),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_Aside_module_css__WEBPACK_IMPORTED_MODULE_5___default().aside__date),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        className: (_Aside_module_css__WEBPACK_IMPORTED_MODULE_5___default().aside__input),\n                        onChange: changeDate,\n                        type: \"date\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\my_files\\\\vs\\\\react\\\\project-react\\\\src\\\\components\\\\screens\\\\index\\\\aside\\\\Aside.tsx\",\n                        lineNumber: 91,\n                        columnNumber: 17\n                    }, undefined),\n                    date\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\my_files\\\\vs\\\\react\\\\project-react\\\\src\\\\components\\\\screens\\\\index\\\\aside\\\\Aside.tsx\",\n                lineNumber: 90,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"nav\", {\n                className: (_Aside_module_css__WEBPACK_IMPORTED_MODULE_5___default().aside__nav),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                        className: (_Aside_module_css__WEBPACK_IMPORTED_MODULE_5___default().aside__link),\n                        href: \"./clients\",\n                        children: \"Список клиентов\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\my_files\\\\vs\\\\react\\\\project-react\\\\src\\\\components\\\\screens\\\\index\\\\aside\\\\Aside.tsx\",\n                        lineNumber: 96,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                        className: (_Aside_module_css__WEBPACK_IMPORTED_MODULE_5___default().aside__link),\n                        href: \"./services\",\n                        children: \"Услуги\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\my_files\\\\vs\\\\react\\\\project-react\\\\src\\\\components\\\\screens\\\\index\\\\aside\\\\Aside.tsx\",\n                        lineNumber: 97,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                        className: (_Aside_module_css__WEBPACK_IMPORTED_MODULE_5___default().aside__link),\n                        href: \"./history\",\n                        children: \"История\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\my_files\\\\vs\\\\react\\\\project-react\\\\src\\\\components\\\\screens\\\\index\\\\aside\\\\Aside.tsx\",\n                        lineNumber: 98,\n                        columnNumber: 17\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\my_files\\\\vs\\\\react\\\\project-react\\\\src\\\\components\\\\screens\\\\index\\\\aside\\\\Aside.tsx\",\n                lineNumber: 95,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_Aside_module_css__WEBPACK_IMPORTED_MODULE_5___default().aside__change),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        style: isChange ? {\n                            pointerEvents: \"none\",\n                            backgroundColor: \"blue\"\n                        } : {},\n                        className: (_Aside_module_css__WEBPACK_IMPORTED_MODULE_5___default().aside__change_button),\n                        onClick: ()=>startChange(0),\n                        children: \"Начать смену\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\my_files\\\\vs\\\\react\\\\project-react\\\\src\\\\components\\\\screens\\\\index\\\\aside\\\\Aside.tsx\",\n                        lineNumber: 102,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        style: !isChange ? {\n                            pointerEvents: \"none\",\n                            backgroundColor: \"blue\"\n                        } : {},\n                        className: (_Aside_module_css__WEBPACK_IMPORTED_MODULE_5___default().aside__change_button),\n                        onClick: endChange,\n                        children: \"Завершить смену\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\my_files\\\\vs\\\\react\\\\project-react\\\\src\\\\components\\\\screens\\\\index\\\\aside\\\\Aside.tsx\",\n                        lineNumber: 109,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_Aside_module_css__WEBPACK_IMPORTED_MODULE_5___default().aside__change_body),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                children: \"Время смены:\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\my_files\\\\vs\\\\react\\\\project-react\\\\src\\\\components\\\\screens\\\\index\\\\aside\\\\Aside.tsx\",\n                                lineNumber: 117,\n                                columnNumber: 21\n                            }, undefined),\n                            isChange && new Date(seconds * 1000).toISOString().slice(11, 19),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                children: \"За месяц:\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\my_files\\\\vs\\\\react\\\\project-react\\\\src\\\\components\\\\screens\\\\index\\\\aside\\\\Aside.tsx\",\n                                lineNumber: 119,\n                                columnNumber: 21\n                            }, undefined),\n                            new Date((montly || 0) * 1000).toISOString().slice(11, 19)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\my_files\\\\vs\\\\react\\\\project-react\\\\src\\\\components\\\\screens\\\\index\\\\aside\\\\Aside.tsx\",\n                        lineNumber: 116,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_Aside_module_css__WEBPACK_IMPORTED_MODULE_5___default().aside__remain),\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            children: [\n                                \"Осталось: \",\n                                new Date(remain * 1000).toISOString().slice(11, 19)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\my_files\\\\vs\\\\react\\\\project-react\\\\src\\\\components\\\\screens\\\\index\\\\aside\\\\Aside.tsx\",\n                            lineNumber: 123,\n                            columnNumber: 21\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\my_files\\\\vs\\\\react\\\\project-react\\\\src\\\\components\\\\screens\\\\index\\\\aside\\\\Aside.tsx\",\n                        lineNumber: 122,\n                        columnNumber: 17\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\my_files\\\\vs\\\\react\\\\project-react\\\\src\\\\components\\\\screens\\\\index\\\\aside\\\\Aside.tsx\",\n                lineNumber: 101,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_Aside_module_css__WEBPACK_IMPORTED_MODULE_5___default().exit),\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    onClick: ()=>logout(),\n                    children: \"Выйти\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\my_files\\\\vs\\\\react\\\\project-react\\\\src\\\\components\\\\screens\\\\index\\\\aside\\\\Aside.tsx\",\n                    lineNumber: 128,\n                    columnNumber: 17\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"C:\\\\my_files\\\\vs\\\\react\\\\project-react\\\\src\\\\components\\\\screens\\\\index\\\\aside\\\\Aside.tsx\",\n                lineNumber: 127,\n                columnNumber: 13\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\my_files\\\\vs\\\\react\\\\project-react\\\\src\\\\components\\\\screens\\\\index\\\\aside\\\\Aside.tsx\",\n        lineNumber: 89,\n        columnNumber: 9\n    }, undefined);\n};\n_s(Aside, \"s5bqT5HUGX33WHVynC7hOjJHyqY=\", false, function() {\n    return [\n        _hooks_useActions__WEBPACK_IMPORTED_MODULE_3__[\"default\"],\n        _tanstack_react_query__WEBPACK_IMPORTED_MODULE_4__.useQuery\n    ];\n});\n_c = Aside;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Aside);\nvar _c;\n$RefreshReg$(_c, \"Aside\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9zY3JlZW5zL2luZGV4L2FzaWRlL0FzaWRlLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBOEU7QUFDM0M7QUFDeUI7QUFDWDtBQUVMO0FBYTVDLE1BQU1NLFFBQW9CO1FBQUMsRUFBQ0MsS0FBSSxFQUFFQyxXQUFVLEVBQUVDLE9BQU0sRUFBRUMsVUFBUyxFQUFFQyxPQUFNLEVBQUVDLFNBQVEsRUFBQzs7SUFFOUUsTUFBTSxDQUFDQyxVQUFVQyxZQUFZLEdBQUdiLCtDQUFRQSxDQUFVO0lBQ2xELE1BQU0sQ0FBQ2MsU0FBU0MsV0FBVyxHQUFHZiwrQ0FBUUEsQ0FBUztJQUMvQyxNQUFNLENBQUNnQixZQUFZQyxjQUFjLEdBQUdqQiwrQ0FBUUE7SUFDNUMsTUFBTSxDQUFDa0IsUUFBUUMsV0FBVyxHQUFHbkIsK0NBQVFBLENBQVM7SUFFOUMsTUFBTSxFQUFFb0IsT0FBTSxFQUFFLEdBQUdoQiw2REFBVUE7SUFFN0IsTUFBTWlCLGNBQWMsQ0FBQ1A7UUFDakJELFlBQVk7UUFFWlMsYUFBYUMsUUFBUSxVQUFVQyxPQUFPVjtRQUV0Q0MsV0FBV0Q7UUFFWCxNQUFNVyxLQUFLQyxZQUFZO1lBQ25CWCxXQUFXWSxDQUFBQSxjQUFlQSxjQUFjO1lBRXhDLE1BQU1DLEtBQUtOLGFBQWFPLFFBQVEsYUFBYUwsT0FBT1Y7WUFFcEQsSUFBSSxDQUFDYyxJQUFJO2dCQUNMTixhQUFhQyxRQUFRLFVBQVU7WUFDbkMsT0FBTztnQkFDSEQsYUFBYVEsV0FBVztnQkFDeEJSLGFBQWFDLFFBQVEsVUFBVVEsS0FBS0MsVUFBVUQsS0FBS0UsTUFBTUwsTUFBTTtZQUNuRTtRQUNKLEdBQUc7UUFFSFgsY0FBY1E7SUFDbEI7SUFHQSxNQUFNUyxTQUFTLE9BQU9wQjtRQUNsQixNQUFNWiw0RUFBcUJnQyxDQUFDO1lBQUM1QjtZQUFNNkIsUUFBUVgsT0FBT1Y7UUFBUTtJQUM5RDtJQUVBLE1BQU1zQixZQUFZO1FBQ2RqQixXQUFXRCxDQUFBQSxTQUFVQSxTQUFTSjtRQUU5QkQsWUFBWTtRQUVaRSxXQUFXO1FBQ1htQixPQUFPcEI7UUFFUFEsYUFBYVEsV0FBVztRQUV4Qk8sY0FBY3JCO0lBQ2xCO0lBR0EsTUFBTSxFQUFFc0IsVUFBUyxFQUFFQyxNQUFLLEVBQUVDLEtBQUksRUFBRSxHQUFHckMsK0RBQVFBLENBQ3ZDO1FBQUM7UUFBY0c7UUFBTU07S0FBUyxFQUFFLFVBQVlWLDRFQUFxQnVDO0lBR3JFMUMsZ0RBQVNBLENBQUM7UUFDTixNQUFNMkMsZUFBZUYsQ0FBQUEsaUJBQUFBLGtCQUFBQSxLQUFBQSxJQUFBQSxLQUFNQSxLQUFLRyxPQUFPLENBQUNDLE1BQWNDLEtBQWdCRCxPQUFPRSxPQUFPRCxHQUFHVixTQUFTLEVBQUMsS0FBSztRQUV0R2hCLFdBQVd1QjtJQUNmLEdBQUc7UUFBQ0Y7UUFBTTVCO0tBQVM7SUFFbkJiLGdEQUFTQSxDQUFDO1FBQ04sTUFBTTZCLEtBQUtOLGFBQWFPLFFBQVE7UUFDaEMsSUFBSUQsSUFBSTtZQUNKUCxZQUFZVSxLQUFLRSxNQUFNTDtZQUN2Qk4sYUFBYVEsV0FBVztRQUM1QjtJQUNKLEdBQUcsRUFBRTtJQUVMLHFCQUNJLDhEQUFDaUI7UUFBTUMsS0FBS3JDO1FBQVVzQyxXQUFZdkMsU0FBU1QsdUVBQWVpRCxHQUFHakQsZ0VBQVE4Qzs7MEJBQ2pFLDhEQUFDSTtnQkFBSUYsV0FBV2hELHNFQUFjbUQ7O2tDQUMxQiw4REFBQ0M7d0JBQU1KLFdBQVdoRCx1RUFBZXFEO3dCQUFFQyxVQUFVaEQ7d0JBQVlpRCxNQUFLOzs7Ozs7b0JBQzdEbEQ7Ozs7Ozs7MEJBR0wsOERBQUNtRDtnQkFBSVIsV0FBV2hELHFFQUFheUQ7O2tDQUN6Qiw4REFBQ0M7d0JBQUVWLFdBQVdoRCxzRUFBYzJEO3dCQUFFQyxNQUFLO2tDQUFZOzs7Ozs7a0NBQy9DLDhEQUFDRjt3QkFBRVYsV0FBV2hELHNFQUFjMkQ7d0JBQUVDLE1BQUs7a0NBQWE7Ozs7OztrQ0FDaEQsOERBQUNGO3dCQUFFVixXQUFXaEQsc0VBQWMyRDt3QkFBRUMsTUFBSztrQ0FBWTs7Ozs7Ozs7Ozs7OzBCQUduRCw4REFBQ1Y7Z0JBQUlGLFdBQVdoRCx3RUFBZ0I2RDs7a0NBQzVCLDhEQUFDQzt3QkFDR0MsT0FBT3BELFdBQVc7NEJBQUNxRCxlQUFlOzRCQUFRQyxpQkFBaUI7d0JBQU0sSUFBSSxDQUFDO3dCQUN0RWpCLFdBQVdoRCwrRUFBdUJrRTt3QkFDbENDLFNBQVMsSUFBTS9DLFlBQVk7a0NBQzFCOzs7Ozs7a0NBR0wsOERBQUMwQzt3QkFDR0MsT0FBTyxDQUFDcEQsV0FBVzs0QkFBQ3FELGVBQWU7NEJBQVFDLGlCQUFpQjt3QkFBTSxJQUFJLENBQUM7d0JBQ3ZFakIsV0FBV2hELCtFQUF1QmtFO3dCQUNsQ0MsU0FBU2hDO2tDQUNaOzs7Ozs7a0NBR0QsOERBQUNlO3dCQUFJRixXQUFXaEQsNkVBQXFCb0U7OzBDQUNqQyw4REFBQ2xCOzBDQUFJOzs7Ozs7NEJBQ0p2QyxZQUFhLElBQUkwRCxLQUFLeEQsVUFBVSxNQUFNeUQsY0FBY0MsTUFBTSxJQUFJOzBDQUMvRCw4REFBQ3JCOzBDQUFJOzs7Ozs7NEJBQ0gsSUFBSW1CLEtBQUssQ0FBQ3BELFVBQVUsS0FBSyxNQUFNcUQsY0FBY0MsTUFBTSxJQUFJOzs7Ozs7O2tDQUU3RCw4REFBQ3JCO3dCQUFJRixXQUFXaEQsd0VBQWdCd0U7a0NBQzVCLDRFQUFDdEI7O2dDQUFJO2dDQUFZLElBQUltQixLQUFLOUQsU0FBUyxNQUFNK0QsY0FBY0MsTUFBTSxJQUFJOzs7Ozs7Ozs7Ozs7Ozs7Ozs7MEJBSXpFLDhEQUFDckI7Z0JBQUlGLFdBQVdoRCwrREFBT3lFOzBCQUNuQiw0RUFBQ1g7b0JBQU9LLFNBQVMsSUFBTWhEOzhCQUFVOzs7Ozs7Ozs7Ozs7Ozs7OztBQUlqRDtHQWpITWY7O1FBT2lCRCx5REFBVUE7UUE0Q01ELDJEQUFRQTs7O0tBbkR6Q0U7QUFtSE4sK0RBQWVBLEtBQUtBLEVBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvc2NyZWVucy9pbmRleC9hc2lkZS9Bc2lkZS50c3g/OGFlNyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBGQywgdXNlQ2FsbGJhY2ssIHVzZUVmZmVjdCwgdXNlTWVtbywgdXNlUmVmLCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgY2wgZnJvbSBcIi4vQXNpZGUubW9kdWxlLmNzc1wiXHJcbmltcG9ydCB7IENoYW5nZXNTZXJ2aWNlIH0gZnJvbSBcIkAvc2VydmljZXMvY2hhbmdlcy5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7IHVzZVF1ZXJ5IH0gZnJvbSBcIkB0YW5zdGFjay9yZWFjdC1xdWVyeVwiO1xyXG5pbXBvcnQgeyBJQ2hhbmdlIH0gZnJvbSBcIkAvdHlwZXMvY2hhbmdlLmludGVyZmFjZVwiO1xyXG5pbXBvcnQgdXNlQWN0aW9ucyBmcm9tIFwiQC9ob29rcy91c2VBY3Rpb25zXCI7XHJcbmltcG9ydCB7IHVzZU91dHNpZGUgfSBmcm9tIFwiQC9ob29rcy91c2VPdXRzaWRlXCI7XHJcblxyXG5pbnRlcmZhY2UgSUFzaWRlIHtcclxuICAgIGRhdGU6IHN0cmluZyxcclxuICAgIGNoYW5nZURhdGU6IGFueSxcclxuICAgIHJlbWFpbjogbnVtYmVyLFxyXG4gICAgaXNPcGVuOiBib29sZWFuLFxyXG4gICAgc2V0SXNPcGVuOiBGdW5jdGlvbixcclxuICAgIHJlZkFzaWRlOiBSZWFjdC5SZWZPYmplY3Q8SFRNTElucHV0RWxlbWVudD5cclxufVxyXG5cclxuXHJcbmNvbnN0IEFzaWRlOiBGQzxJQXNpZGU+ID0gKHtkYXRlLCBjaGFuZ2VEYXRlLCByZW1haW4sIHNldElzT3BlbiwgaXNPcGVuLCByZWZBc2lkZX0pID0+IHtcclxuXHJcbiAgICBjb25zdCBbaXNDaGFuZ2UsIHNldElzQ2hhbmdlXSA9IHVzZVN0YXRlPEJvb2xlYW4+KGZhbHNlKTtcclxuICAgIGNvbnN0IFtzZWNvbmRzLCBzZXRTZWNvbmRzXSA9IHVzZVN0YXRlPG51bWJlcj4oMClcclxuICAgIGNvbnN0IFtpbnRlcnZhbElkLCBzZXRJbnRlcnZhbElkXSA9IHVzZVN0YXRlPGFueT4oKVxyXG4gICAgY29uc3QgW21vbnRseSwgc2V0TW9udGhseV0gPSB1c2VTdGF0ZTxudW1iZXI+KDApXHJcblxyXG4gICAgY29uc3QgeyBsb2dvdXQgfSA9IHVzZUFjdGlvbnMoKVxyXG5cclxuICAgIGNvbnN0IHN0YXJ0Q2hhbmdlID0gKHNlY29uZHM6IG51bWJlcikgPT4ge1xyXG4gICAgICAgIHNldElzQ2hhbmdlKHRydWUpO1xyXG5cclxuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcImNoYW5nZVwiLCBTdHJpbmcoc2Vjb25kcykpXHJcblxyXG4gICAgICAgIHNldFNlY29uZHMoc2Vjb25kcylcclxuXHJcbiAgICAgICAgY29uc3QgaWQgPSBzZXRJbnRlcnZhbCgoKSA9PiB7XHJcbiAgICAgICAgICAgIHNldFNlY29uZHMocHJldlNlY29uZHMgPT4gcHJldlNlY29uZHMgKyAxKTtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IHByID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJjaGFuZ2VcIikgfHwgU3RyaW5nKHNlY29uZHMpXHJcblxyXG4gICAgICAgICAgICBpZiAoIXByKSB7XHJcbiAgICAgICAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcImNoYW5nZVwiLCBcIjFcIilcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKFwiY2hhbmdlXCIpXHJcbiAgICAgICAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcImNoYW5nZVwiLCBKU09OLnN0cmluZ2lmeShKU09OLnBhcnNlKHByKSArIDEpKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSwgMTAwMCk7XHJcblxyXG4gICAgICAgIHNldEludGVydmFsSWQoaWQpXHJcbiAgICB9XHJcbiAgICBcclxuXHJcbiAgICBjb25zdCBjcmVhdGUgPSBhc3luYyAoc2Vjb25kczogbnVtYmVyKSA9PiB7XHJcbiAgICAgICAgYXdhaXQgQ2hhbmdlc1NlcnZpY2UuY3JlYXRlKHtkYXRlLCBsZW5ndGg6IFN0cmluZyhzZWNvbmRzKX0pO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGVuZENoYW5nZSA9IGFzeW5jICgpID0+IHtcclxuICAgICAgICBzZXRNb250aGx5KG1vbnRseSA9PiBtb250bHkgKyBzZWNvbmRzKVxyXG5cclxuICAgICAgICBzZXRJc0NoYW5nZShmYWxzZSk7XHJcblxyXG4gICAgICAgIHNldFNlY29uZHMoMClcclxuICAgICAgICBjcmVhdGUoc2Vjb25kcylcclxuXHJcbiAgICAgICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oXCJjaGFuZ2VcIilcclxuXHJcbiAgICAgICAgY2xlYXJJbnRlcnZhbChpbnRlcnZhbElkKVxyXG4gICAgfVxyXG5cclxuXHJcbiAgICBjb25zdCB7IGlzTG9hZGluZywgZXJyb3IsIGRhdGEgfSA9IHVzZVF1ZXJ5KFxyXG4gICAgICAgIFsnY2hhbmdlLWFsbCcsIGRhdGUsIGlzQ2hhbmdlXSwgYXN5bmMgKCkgPT4gQ2hhbmdlc1NlcnZpY2UuZ2V0QWxsKClcclxuICAgICk7XHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBjb25zdCBtb250aFNlY29uZHMgPSBkYXRhPy5kYXRhLnJlZHVjZSgoc3VtbTogbnVtYmVyLCBlbDogSUNoYW5nZSkgPT4gc3VtbSArIE51bWJlcihlbC5sZW5ndGgpLCAwKSB8fCAwXHJcblxyXG4gICAgICAgIHNldE1vbnRobHkobW9udGhTZWNvbmRzKVxyXG4gICAgfSwgW2RhdGEsIGlzQ2hhbmdlXSlcclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHByID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJjaGFuZ2VcIilcclxuICAgICAgICBpZiAocHIpIHtcclxuICAgICAgICAgICAgc3RhcnRDaGFuZ2UoSlNPTi5wYXJzZShwcikpXHJcbiAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKFwiY2hhbmdlXCIpXHJcbiAgICAgICAgfVxyXG4gICAgfSwgW10pXHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8YXNpZGUgcmVmPXtyZWZBc2lkZX0gY2xhc3NOYW1lPXsoaXNPcGVuID8gY2wuYXNpZGVfYWN0aXZlIDogY2wuYXNpZGUpfT5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsLmFzaWRlX19kYXRlfT5cclxuICAgICAgICAgICAgICAgIDxpbnB1dCBjbGFzc05hbWU9e2NsLmFzaWRlX19pbnB1dH0gb25DaGFuZ2U9e2NoYW5nZURhdGV9IHR5cGU9XCJkYXRlXCIgLz5cclxuICAgICAgICAgICAgICAgIHtkYXRlfVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgIDxuYXYgY2xhc3NOYW1lPXtjbC5hc2lkZV9fbmF2fT5cclxuICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT17Y2wuYXNpZGVfX2xpbmt9IGhyZWY9XCIuL2NsaWVudHNcIj7QodC/0LjRgdC+0Log0LrQu9C40LXQvdGC0L7QsjwvYT5cclxuICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT17Y2wuYXNpZGVfX2xpbmt9IGhyZWY9XCIuL3NlcnZpY2VzXCI+0KPRgdC70YPQs9C4PC9hPlxyXG4gICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPXtjbC5hc2lkZV9fbGlua30gaHJlZj1cIi4vaGlzdG9yeVwiPtCY0YHRgtC+0YDQuNGPPC9hPlxyXG4gICAgICAgICAgICA8L25hdj5cclxuXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbC5hc2lkZV9fY2hhbmdlfT5cclxuICAgICAgICAgICAgICAgIDxidXR0b24gXHJcbiAgICAgICAgICAgICAgICAgICAgc3R5bGU9e2lzQ2hhbmdlID8ge3BvaW50ZXJFdmVudHM6IFwibm9uZVwiLCBiYWNrZ3JvdW5kQ29sb3I6IFwiYmx1ZVwifSA6IHt9fSBcclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsLmFzaWRlX19jaGFuZ2VfYnV0dG9ufVxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHN0YXJ0Q2hhbmdlKDApfVxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAg0J3QsNGH0LDRgtGMINGB0LzQtdC90YNcclxuICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDxidXR0b24gXHJcbiAgICAgICAgICAgICAgICAgICAgc3R5bGU9eyFpc0NoYW5nZSA/IHtwb2ludGVyRXZlbnRzOiBcIm5vbmVcIiwgYmFja2dyb3VuZENvbG9yOiBcImJsdWVcIn0gOiB7fX0gXHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbC5hc2lkZV9fY2hhbmdlX2J1dHRvbn1cclxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXtlbmRDaGFuZ2V9XHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAg0JfQsNCy0LXRgNGI0LjRgtGMINGB0LzQtdC90YNcclxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsLmFzaWRlX19jaGFuZ2VfYm9keX0+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdj7QktGA0LXQvNGPINGB0LzQtdC90Ys6PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAge2lzQ2hhbmdlICYmIChuZXcgRGF0ZShzZWNvbmRzICogMTAwMCkudG9JU09TdHJpbmcoKS5zbGljZSgxMSwgMTkpKX1cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2PtCX0LAg0LzQtdGB0Y/Rhjo8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICB7KG5ldyBEYXRlKChtb250bHkgfHwgMCkgKiAxMDAwKS50b0lTT1N0cmluZygpLnNsaWNlKDExLCAxOSkpfVxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2wuYXNpZGVfX3JlbWFpbn0+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdj7QntGB0YLQsNC70L7RgdGMOiB7KG5ldyBEYXRlKHJlbWFpbiAqIDEwMDApLnRvSVNPU3RyaW5nKCkuc2xpY2UoMTEsIDE5KSl9PC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2wuZXhpdH0+XHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IGxvZ291dCgpfT7QktGL0LnRgtC4PC9idXR0b24+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvYXNpZGU+XHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEFzaWRlIl0sIm5hbWVzIjpbInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiY2wiLCJDaGFuZ2VzU2VydmljZSIsInVzZVF1ZXJ5IiwidXNlQWN0aW9ucyIsIkFzaWRlIiwiZGF0ZSIsImNoYW5nZURhdGUiLCJyZW1haW4iLCJzZXRJc09wZW4iLCJpc09wZW4iLCJyZWZBc2lkZSIsImlzQ2hhbmdlIiwic2V0SXNDaGFuZ2UiLCJzZWNvbmRzIiwic2V0U2Vjb25kcyIsImludGVydmFsSWQiLCJzZXRJbnRlcnZhbElkIiwibW9udGx5Iiwic2V0TW9udGhseSIsImxvZ291dCIsInN0YXJ0Q2hhbmdlIiwibG9jYWxTdG9yYWdlIiwic2V0SXRlbSIsIlN0cmluZyIsImlkIiwic2V0SW50ZXJ2YWwiLCJwcmV2U2Vjb25kcyIsInByIiwiZ2V0SXRlbSIsInJlbW92ZUl0ZW0iLCJKU09OIiwic3RyaW5naWZ5IiwicGFyc2UiLCJjcmVhdGUiLCJsZW5ndGgiLCJlbmRDaGFuZ2UiLCJjbGVhckludGVydmFsIiwiaXNMb2FkaW5nIiwiZXJyb3IiLCJkYXRhIiwiZ2V0QWxsIiwibW9udGhTZWNvbmRzIiwicmVkdWNlIiwic3VtbSIsImVsIiwiTnVtYmVyIiwiYXNpZGUiLCJyZWYiLCJjbGFzc05hbWUiLCJhc2lkZV9hY3RpdmUiLCJkaXYiLCJhc2lkZV9fZGF0ZSIsImlucHV0IiwiYXNpZGVfX2lucHV0Iiwib25DaGFuZ2UiLCJ0eXBlIiwibmF2IiwiYXNpZGVfX25hdiIsImEiLCJhc2lkZV9fbGluayIsImhyZWYiLCJhc2lkZV9fY2hhbmdlIiwiYnV0dG9uIiwic3R5bGUiLCJwb2ludGVyRXZlbnRzIiwiYmFja2dyb3VuZENvbG9yIiwiYXNpZGVfX2NoYW5nZV9idXR0b24iLCJvbkNsaWNrIiwiYXNpZGVfX2NoYW5nZV9ib2R5IiwiRGF0ZSIsInRvSVNPU3RyaW5nIiwic2xpY2UiLCJhc2lkZV9fcmVtYWluIiwiZXhpdCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/screens/index/aside/Aside.tsx\n"));

/***/ })

});