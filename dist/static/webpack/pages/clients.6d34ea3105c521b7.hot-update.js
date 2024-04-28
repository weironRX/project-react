"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/clients",{

/***/ "./src/components/screens/clients/Clients.tsx":
/*!****************************************************!*\
  !*** ./src/components/screens/clients/Clients.tsx ***!
  \****************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _services_client_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/services/client.service */ \"./src/services/client.service.ts\");\n/* harmony import */ var _tanstack_react_query__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @tanstack/react-query */ \"./node_modules/@tanstack/react-query/build/lib/index.mjs\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _ClientsItem_ClientsItem__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ClientsItem/ClientsItem */ \"./src/components/screens/clients/ClientsItem/ClientsItem.tsx\");\n/* harmony import */ var _Clients_module_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Clients.module.css */ \"./src/components/screens/clients/Clients.module.css\");\n/* harmony import */ var _Clients_module_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_Clients_module_css__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _ui_BackButton_BackButton__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/ui/BackButton/BackButton */ \"./src/components/ui/BackButton/BackButton.tsx\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\nconst Clients = ()=>{\n    _s();\n    const [aliasSearch, setAliasSearch] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\");\n    const [contactsSearch, setContactsSearch] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\");\n    const { isLoading , isError , data , refetch  } = (0,_tanstack_react_query__WEBPACK_IMPORTED_MODULE_5__.useQuery)([\n        \"clients\",\n        aliasSearch,\n        contactsSearch\n    ], async ()=>await _services_client_service__WEBPACK_IMPORTED_MODULE_1__.ClientService.getAllBySearch(aliasSearch, contactsSearch));\n    console.log(data);\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        const pr = localStorage.getItem(\"change\");\n        if (!pr) return;\n        const id = setInterval(()=>{\n            const seconds = localStorage.getItem(\"change\");\n            if (!seconds) return;\n            localStorage.removeItem(\"change\");\n            localStorage.setItem(\"change\", JSON.parse(seconds) + 1);\n        }, 1000);\n        return ()=>clearInterval(id);\n    });\n    const createNew = async ()=>{\n        await _services_client_service__WEBPACK_IMPORTED_MODULE_1__.ClientService.create({\n            alias: \"\",\n            contact: \"\"\n        });\n        await refetch();\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: (_Clients_module_css__WEBPACK_IMPORTED_MODULE_6___default().container),\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"aside\", {\n                    className: (_Clients_module_css__WEBPACK_IMPORTED_MODULE_6___default().aside),\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ui_BackButton_BackButton__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Dmitry\\\\job\\\\project-react\\\\src\\\\components\\\\screens\\\\clients\\\\Clients.tsx\",\n                        lineNumber: 46,\n                        columnNumber: 17\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Dmitry\\\\job\\\\project-react\\\\src\\\\components\\\\screens\\\\clients\\\\Clients.tsx\",\n                    lineNumber: 45,\n                    columnNumber: 13\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: (_Clients_module_css__WEBPACK_IMPORTED_MODULE_6___default().table),\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                            className: (_Clients_module_css__WEBPACK_IMPORTED_MODULE_6___default().title),\n                            children: \"Список клиентов\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Dmitry\\\\job\\\\project-react\\\\src\\\\components\\\\screens\\\\clients\\\\Clients.tsx\",\n                            lineNumber: 49,\n                            columnNumber: 17\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"table\", {\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"thead\", {\n                                    className: (_Clients_module_css__WEBPACK_IMPORTED_MODULE_6___default().table__head),\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tr\", {\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                                    className: (_Clients_module_css__WEBPACK_IMPORTED_MODULE_6___default().input),\n                                                    placeholder: \"По псевдониму\",\n                                                    value: aliasSearch,\n                                                    onChange: (e)=>setAliasSearch(e.target.value)\n                                                }, void 0, false, {\n                                                    fileName: \"C:\\\\Users\\\\Dmitry\\\\job\\\\project-react\\\\src\\\\components\\\\screens\\\\clients\\\\Clients.tsx\",\n                                                    lineNumber: 53,\n                                                    columnNumber: 33\n                                                }, undefined)\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\Dmitry\\\\job\\\\project-react\\\\src\\\\components\\\\screens\\\\clients\\\\Clients.tsx\",\n                                                lineNumber: 53,\n                                                columnNumber: 29\n                                            }, undefined),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                                    className: (_Clients_module_css__WEBPACK_IMPORTED_MODULE_6___default().input),\n                                                    placeholder: \"По контактам\",\n                                                    value: contactsSearch,\n                                                    onChange: (e)=>setContactsSearch(e.target.value)\n                                                }, void 0, false, {\n                                                    fileName: \"C:\\\\Users\\\\Dmitry\\\\job\\\\project-react\\\\src\\\\components\\\\screens\\\\clients\\\\Clients.tsx\",\n                                                    lineNumber: 54,\n                                                    columnNumber: 33\n                                                }, undefined)\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\Dmitry\\\\job\\\\project-react\\\\src\\\\components\\\\screens\\\\clients\\\\Clients.tsx\",\n                                                lineNumber: 54,\n                                                columnNumber: 29\n                                            }, undefined)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"C:\\\\Users\\\\Dmitry\\\\job\\\\project-react\\\\src\\\\components\\\\screens\\\\clients\\\\Clients.tsx\",\n                                        lineNumber: 52,\n                                        columnNumber: 25\n                                    }, undefined)\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\Dmitry\\\\job\\\\project-react\\\\src\\\\components\\\\screens\\\\clients\\\\Clients.tsx\",\n                                    lineNumber: 51,\n                                    columnNumber: 21\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: (_Clients_module_css__WEBPACK_IMPORTED_MODULE_6___default().mobile_head),\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                            className: (_Clients_module_css__WEBPACK_IMPORTED_MODULE_6___default().input),\n                                            placeholder: \"По псевдониму\",\n                                            value: aliasSearch,\n                                            onChange: (e)=>setAliasSearch(e.target.value)\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\Dmitry\\\\job\\\\project-react\\\\src\\\\components\\\\screens\\\\clients\\\\Clients.tsx\",\n                                            lineNumber: 58,\n                                            columnNumber: 25\n                                        }, undefined),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                            className: (_Clients_module_css__WEBPACK_IMPORTED_MODULE_6___default().input),\n                                            placeholder: \"По контактам\",\n                                            value: contactsSearch,\n                                            onChange: (e)=>setContactsSearch(e.target.value)\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\Dmitry\\\\job\\\\project-react\\\\src\\\\components\\\\screens\\\\clients\\\\Clients.tsx\",\n                                            lineNumber: 59,\n                                            columnNumber: 25\n                                        }, undefined)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"C:\\\\Users\\\\Dmitry\\\\job\\\\project-react\\\\src\\\\components\\\\screens\\\\clients\\\\Clients.tsx\",\n                                    lineNumber: 57,\n                                    columnNumber: 21\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tbody\", {\n                                    children: data && data.data.map((el)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ClientsItem_ClientsItem__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                                            client: el\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\Dmitry\\\\job\\\\project-react\\\\src\\\\components\\\\screens\\\\clients\\\\Clients.tsx\",\n                                            lineNumber: 64,\n                                            columnNumber: 29\n                                        }, undefined))\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\Dmitry\\\\job\\\\project-react\\\\src\\\\components\\\\screens\\\\clients\\\\Clients.tsx\",\n                                    lineNumber: 61,\n                                    columnNumber: 21\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\Dmitry\\\\job\\\\project-react\\\\src\\\\components\\\\screens\\\\clients\\\\Clients.tsx\",\n                            lineNumber: 50,\n                            columnNumber: 17\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\Dmitry\\\\job\\\\project-react\\\\src\\\\components\\\\screens\\\\clients\\\\Clients.tsx\",\n                    lineNumber: 48,\n                    columnNumber: 13\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    className: (_Clients_module_css__WEBPACK_IMPORTED_MODULE_6___default().create_new),\n                    onClick: createNew,\n                    children: \"Создать новую\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Dmitry\\\\job\\\\project-react\\\\src\\\\components\\\\screens\\\\clients\\\\Clients.tsx\",\n                    lineNumber: 72,\n                    columnNumber: 13\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\Dmitry\\\\job\\\\project-react\\\\src\\\\components\\\\screens\\\\clients\\\\Clients.tsx\",\n            lineNumber: 44,\n            columnNumber: 13\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\Dmitry\\\\job\\\\project-react\\\\src\\\\components\\\\screens\\\\clients\\\\Clients.tsx\",\n        lineNumber: 43,\n        columnNumber: 9\n    }, undefined);\n};\n_s(Clients, \"nbVAvwqF20q41ka6O+h69LrH9uk=\", false, function() {\n    return [\n        _tanstack_react_query__WEBPACK_IMPORTED_MODULE_5__.useQuery\n    ];\n});\n_c = Clients;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Clients);\nvar _c;\n$RefreshReg$(_c, \"Clients\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9zY3JlZW5zL2NsaWVudHMvQ2xpZW50cy50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUEwRDtBQUVUO0FBQ1M7QUFDTjtBQUNmO0FBQ2U7QUFFcEQsTUFBTU8sVUFBYzs7SUFFaEIsTUFBTSxDQUFDQyxhQUFhQyxlQUFlLEdBQUdOLCtDQUFRQSxDQUFTO0lBQ3ZELE1BQU0sQ0FBQ08sZ0JBQWdCQyxrQkFBa0IsR0FBR1IsK0NBQVFBLENBQVM7SUFFN0QsTUFBTSxFQUFDUyxVQUFTLEVBQUVDLFFBQU8sRUFBRUMsS0FBSSxFQUFFQyxRQUFPLEVBQUMsR0FBR2QsK0RBQVFBLENBQ2hEO1FBQUM7UUFBV087UUFBYUU7S0FBZSxFQUFFLFVBQVksTUFBTVYsa0ZBQTRCZ0IsQ0FBQ1IsYUFBYUU7SUFHMUdPLFFBQVFDLElBQUlKO0lBRVpaLGdEQUFTQSxDQUFDO1FBQ04sTUFBTWlCLEtBQUtDLGFBQWFDLFFBQVE7UUFFaEMsSUFBSSxDQUFDRixJQUFJO1FBRVQsTUFBTUcsS0FBS0MsWUFBWTtZQUNuQixNQUFNQyxVQUFVSixhQUFhQyxRQUFRO1lBRXJDLElBQUksQ0FBQ0csU0FBUztZQUVkSixhQUFhSyxXQUFXO1lBQ3hCTCxhQUFhTSxRQUFRLFVBQVdDLEtBQUtDLE1BQU1KLFdBQVc7UUFDMUQsR0FBRztRQUVILE9BQU8sSUFBTUssY0FBY1A7SUFDL0I7SUFFQSxNQUFNUSxZQUFZO1FBQ2QsTUFBTTlCLDBFQUFvQitCLENBQUM7WUFBQ0MsT0FBTztZQUFJQyxTQUFTO1FBQUU7UUFDbEQsTUFBTWxCO0lBQ1Y7SUFFQSxxQkFDSSw4REFBQ21CO2tCQUNHLDRFQUFDQTtZQUFJQyxXQUFXOUIsc0VBQVkrQjs7OEJBQzVCLDhEQUFDQztvQkFBTUYsV0FBVzlCLGtFQUFRZ0M7OEJBQ3RCLDRFQUFDL0IsaUVBQVVBOzs7Ozs7Ozs7OzhCQUVmLDhEQUFDNEI7b0JBQUlDLFdBQVc5QixrRUFBUWlDOztzQ0FDcEIsOERBQUNDOzRCQUFHSixXQUFXOUIsa0VBQVFtQztzQ0FBRTs7Ozs7O3NDQUN6Qiw4REFBQ0Y7OzhDQUNHLDhEQUFDRztvQ0FBTU4sV0FBVzlCLHdFQUFjcUM7OENBQzVCLDRFQUFDQzs7MERBQ0csOERBQUNDOzBEQUFHLDRFQUFDQztvREFBTVYsV0FBVzlCLGtFQUFRd0M7b0RBQUVDLGFBQVk7b0RBQWdCQyxPQUFPdkM7b0RBQWF3QyxVQUFVQyxDQUFBQSxJQUFLeEMsZUFBZXdDLEVBQUVDLE9BQU9IOzs7Ozs7Ozs7OzswREFDdkgsOERBQUNIOzBEQUFHLDRFQUFDQztvREFBTVYsV0FBVzlCLGtFQUFRd0M7b0RBQUVDLGFBQVk7b0RBQWVDLE9BQU9yQztvREFBZ0JzQyxVQUFVQyxDQUFBQSxJQUFLdEMsa0JBQWtCc0MsRUFBRUMsT0FBT0g7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OENBR3BJLDhEQUFDYjtvQ0FBSUMsV0FBVzlCLHdFQUFjOEM7O3NEQUMxQiw4REFBQ047NENBQU1WLFdBQVc5QixrRUFBUXdDOzRDQUFFQyxhQUFZOzRDQUFnQkMsT0FBT3ZDOzRDQUFhd0MsVUFBVUMsQ0FBQUEsSUFBS3hDLGVBQWV3QyxFQUFFQyxPQUFPSDs7Ozs7O3NEQUNuSCw4REFBQ0Y7NENBQU1WLFdBQVc5QixrRUFBUXdDOzRDQUFFQyxhQUFZOzRDQUFlQyxPQUFPckM7NENBQWdCc0MsVUFBVUMsQ0FBQUEsSUFBS3RDLGtCQUFrQnNDLEVBQUVDLE9BQU9IOzs7Ozs7Ozs7Ozs7OENBRTVILDhEQUFDSzs4Q0FDSXRDLFFBQ0RBLEtBQUtBLEtBQUt1QyxJQUFJLENBQUNDLG1CQUNYLDhEQUFDbEQsZ0VBQVdBOzRDQUNSbUQsUUFBUUQ7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzhCQU81Qiw4REFBQ0U7b0JBQU9yQixXQUFXOUIsdUVBQWFvRDtvQkFBRUMsU0FBUzVCOzhCQUFXOzs7Ozs7Ozs7Ozs7Ozs7OztBQUlsRTtHQW5FTXZCOztRQUswQ04sMkRBQVFBOzs7S0FMbERNO0FBcUVOLCtEQUFlQSxPQUFPQSxFQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL3NjcmVlbnMvY2xpZW50cy9DbGllbnRzLnRzeD8zNTcwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENsaWVudFNlcnZpY2UgfSBmcm9tIFwiQC9zZXJ2aWNlcy9jbGllbnQuc2VydmljZVwiO1xyXG5pbXBvcnQgeyBJQ2xpZW50IH0gZnJvbSBcIkAvdHlwZXMvY2xpZW50LmludGVyZmFjZVwiO1xyXG5pbXBvcnQgeyB1c2VRdWVyeSB9IGZyb20gXCJAdGFuc3RhY2svcmVhY3QtcXVlcnlcIjtcclxuaW1wb3J0IHsgRkMsIEZyYWdtZW50LCB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBDbGllbnRzSXRlbSBmcm9tIFwiLi9DbGllbnRzSXRlbS9DbGllbnRzSXRlbVwiO1xyXG5pbXBvcnQgY2wgZnJvbSBcIi4vQ2xpZW50cy5tb2R1bGUuY3NzXCJcclxuaW1wb3J0IEJhY2tCdXR0b24gZnJvbSBcIkAvdWkvQmFja0J1dHRvbi9CYWNrQnV0dG9uXCI7XHJcblxyXG5jb25zdCBDbGllbnRzOiBGQyA9ICgpID0+IHtcclxuXHJcbiAgICBjb25zdCBbYWxpYXNTZWFyY2gsIHNldEFsaWFzU2VhcmNoXSA9IHVzZVN0YXRlPHN0cmluZz4oXCJcIilcclxuICAgIGNvbnN0IFtjb250YWN0c1NlYXJjaCwgc2V0Q29udGFjdHNTZWFyY2hdID0gdXNlU3RhdGU8c3RyaW5nPihcIlwiKVxyXG5cclxuICAgIGNvbnN0IHtpc0xvYWRpbmcsIGlzRXJyb3IsIGRhdGEsIHJlZmV0Y2h9ID0gdXNlUXVlcnkoXHJcbiAgICAgICAgW1wiY2xpZW50c1wiLCBhbGlhc1NlYXJjaCwgY29udGFjdHNTZWFyY2hdLCBhc3luYyAoKSA9PiBhd2FpdCBDbGllbnRTZXJ2aWNlLmdldEFsbEJ5U2VhcmNoKGFsaWFzU2VhcmNoLCBjb250YWN0c1NlYXJjaClcclxuICAgIClcclxuXHJcbiAgICBjb25zb2xlLmxvZyhkYXRhKVxyXG5cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgY29uc3QgcHIgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImNoYW5nZVwiKVxyXG5cclxuICAgICAgICBpZiAoIXByKSByZXR1cm47XHJcblxyXG4gICAgICAgIGNvbnN0IGlkID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBzZWNvbmRzID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJjaGFuZ2VcIilcclxuXHJcbiAgICAgICAgICAgIGlmICghc2Vjb25kcykgcmV0dXJuXHJcblxyXG4gICAgICAgICAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbShcImNoYW5nZVwiKVxyXG4gICAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcImNoYW5nZVwiLCAoSlNPTi5wYXJzZShzZWNvbmRzKSArIDEpKVxyXG4gICAgICAgIH0sIDEwMDApXHJcblxyXG4gICAgICAgIHJldHVybiAoKSA9PiBjbGVhckludGVydmFsKGlkKVxyXG4gICAgfSlcclxuXHJcbiAgICBjb25zdCBjcmVhdGVOZXcgPSBhc3luYyAoKSA9PiB7XHJcbiAgICAgICAgYXdhaXQgQ2xpZW50U2VydmljZS5jcmVhdGUoe2FsaWFzOiBcIlwiLCBjb250YWN0OiBcIlwifSk7XHJcbiAgICAgICAgYXdhaXQgcmVmZXRjaCgpXHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2wuY29udGFpbmVyfT5cclxuICAgICAgICAgICAgPGFzaWRlIGNsYXNzTmFtZT17Y2wuYXNpZGV9PlxyXG4gICAgICAgICAgICAgICAgPEJhY2tCdXR0b24gLz5cclxuICAgICAgICAgICAgPC9hc2lkZT5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsLnRhYmxlfT5cclxuICAgICAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9e2NsLnRpdGxlfT7QodC/0LjRgdC+0Log0LrQu9C40LXQvdGC0L7QsjwvaDE+XHJcbiAgICAgICAgICAgICAgICA8dGFibGU+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRoZWFkIGNsYXNzTmFtZT17Y2wudGFibGVfX2hlYWR9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGg+PGlucHV0IGNsYXNzTmFtZT17Y2wuaW5wdXR9IHBsYWNlaG9sZGVyPVwi0J/QviDQv9GB0LXQstC00L7QvdC40LzRg1wiIHZhbHVlPXthbGlhc1NlYXJjaH0gb25DaGFuZ2U9e2UgPT4gc2V0QWxpYXNTZWFyY2goZS50YXJnZXQudmFsdWUpfS8+PC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aD48aW5wdXQgY2xhc3NOYW1lPXtjbC5pbnB1dH0gcGxhY2Vob2xkZXI9XCLQn9C+INC60L7QvdGC0LDQutGC0LDQvFwiIHZhbHVlPXtjb250YWN0c1NlYXJjaH0gb25DaGFuZ2U9e2UgPT4gc2V0Q29udGFjdHNTZWFyY2goZS50YXJnZXQudmFsdWUpfS8+PC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgICA8L3RoZWFkPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbC5tb2JpbGVfaGVhZH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCBjbGFzc05hbWU9e2NsLmlucHV0fSBwbGFjZWhvbGRlcj1cItCf0L4g0L/RgdC10LLQtNC+0L3QuNC80YNcIiB2YWx1ZT17YWxpYXNTZWFyY2h9IG9uQ2hhbmdlPXtlID0+IHNldEFsaWFzU2VhcmNoKGUudGFyZ2V0LnZhbHVlKX0vPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgY2xhc3NOYW1lPXtjbC5pbnB1dH0gcGxhY2Vob2xkZXI9XCLQn9C+INC60L7QvdGC0LDQutGC0LDQvFwiIHZhbHVlPXtjb250YWN0c1NlYXJjaH0gb25DaGFuZ2U9e2UgPT4gc2V0Q29udGFjdHNTZWFyY2goZS50YXJnZXQudmFsdWUpfS8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRib2R5PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7ZGF0YSAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhLmRhdGEubWFwKChlbDogSUNsaWVudCkgPT4gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q2xpZW50c0l0ZW0gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xpZW50PXtlbH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvdGJvZHk+XHJcbiAgICAgICAgICAgICAgICA8L3RhYmxlPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9e2NsLmNyZWF0ZV9uZXd9IG9uQ2xpY2s9e2NyZWF0ZU5ld30+0KHQvtC30LTQsNGC0Ywg0L3QvtCy0YPRjjwvYnV0dG9uPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDbGllbnRzIl0sIm5hbWVzIjpbIkNsaWVudFNlcnZpY2UiLCJ1c2VRdWVyeSIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiQ2xpZW50c0l0ZW0iLCJjbCIsIkJhY2tCdXR0b24iLCJDbGllbnRzIiwiYWxpYXNTZWFyY2giLCJzZXRBbGlhc1NlYXJjaCIsImNvbnRhY3RzU2VhcmNoIiwic2V0Q29udGFjdHNTZWFyY2giLCJpc0xvYWRpbmciLCJpc0Vycm9yIiwiZGF0YSIsInJlZmV0Y2giLCJnZXRBbGxCeVNlYXJjaCIsImNvbnNvbGUiLCJsb2ciLCJwciIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJpZCIsInNldEludGVydmFsIiwic2Vjb25kcyIsInJlbW92ZUl0ZW0iLCJzZXRJdGVtIiwiSlNPTiIsInBhcnNlIiwiY2xlYXJJbnRlcnZhbCIsImNyZWF0ZU5ldyIsImNyZWF0ZSIsImFsaWFzIiwiY29udGFjdCIsImRpdiIsImNsYXNzTmFtZSIsImNvbnRhaW5lciIsImFzaWRlIiwidGFibGUiLCJoMSIsInRpdGxlIiwidGhlYWQiLCJ0YWJsZV9faGVhZCIsInRyIiwidGgiLCJpbnB1dCIsInBsYWNlaG9sZGVyIiwidmFsdWUiLCJvbkNoYW5nZSIsImUiLCJ0YXJnZXQiLCJtb2JpbGVfaGVhZCIsInRib2R5IiwibWFwIiwiZWwiLCJjbGllbnQiLCJidXR0b24iLCJjcmVhdGVfbmV3Iiwib25DbGljayJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/screens/clients/Clients.tsx\n"));

/***/ })

});