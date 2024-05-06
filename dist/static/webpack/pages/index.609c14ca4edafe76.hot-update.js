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

/***/ "./src/components/screens/index/SettingsBlock/SettingsBlock.tsx":
/*!**********************************************************************!*\
  !*** ./src/components/screens/index/SettingsBlock/SettingsBlock.tsx ***!
  \**********************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _services_service_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/services/service.service */ \"./src/services/service.service.ts\");\n/* harmony import */ var _tanstack_react_query__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @tanstack/react-query */ \"./node_modules/@tanstack/react-query/build/lib/index.mjs\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _services_client_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/services/client.service */ \"./src/services/client.service.ts\");\n/* harmony import */ var _SettingsBlock_module_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./SettingsBlock.module.css */ \"./src/components/screens/index/SettingsBlock/SettingsBlock.module.css\");\n/* harmony import */ var _SettingsBlock_module_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_SettingsBlock_module_css__WEBPACK_IMPORTED_MODULE_5__);\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nconst SettingsBlock = (param)=>{\n    let { handleChange , data_alias , data_contact , data_service , data_price  } = param;\n    _s();\n    const { isLoading: isServiceLoading , isError: isServiceError , data: serviceData  } = (0,_tanstack_react_query__WEBPACK_IMPORTED_MODULE_4__.useQuery)([\n        \"services\"\n    ], async ()=>_services_service_service__WEBPACK_IMPORTED_MODULE_1__.ServiceService.getAll());\n    const { isLoading: isClientLoading , isError: isClientError , data: clientData  } = (0,_tanstack_react_query__WEBPACK_IMPORTED_MODULE_4__.useQuery)([\n        \"clients\"\n    ], async ()=>_services_client_service__WEBPACK_IMPORTED_MODULE_3__.ClientService.getAll());\n    const [alias, setAlias] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)();\n    const [contact, setContact] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\");\n    const [service, setSerivce] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\");\n    const [price, setPrice] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\");\n    const handleServiceChange = (e)=>{\n        const element = serviceData === null || serviceData === void 0 ? void 0 : serviceData.data.find((item)=>item.name == e.target.value);\n        setSerivce(element === null || element === void 0 ? void 0 : element.name);\n        setPrice(element === null || element === void 0 ? void 0 : element.price);\n    };\n    const handleClientChange = (e)=>{\n        const element = clientData === null || clientData === void 0 ? void 0 : clientData.data.find((item)=>item.alias == e.target.value);\n        setAlias(element === null || element === void 0 ? void 0 : element.alias);\n        setContact(element === null || element === void 0 ? void 0 : element.contact);\n    };\n    const reset = ()=>{\n        handleChange({\n            alias: \"\",\n            contact: \"\",\n            service: \"\",\n            price: \"\"\n        });\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        handleChange({\n            alias: alias,\n            contact: contact,\n            service: service,\n            price: price\n        });\n    }, [\n        alias,\n        contact,\n        service,\n        price\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_SettingsBlock_module_css__WEBPACK_IMPORTED_MODULE_5___default().container),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_SettingsBlock_module_css__WEBPACK_IMPORTED_MODULE_5___default().container__item),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                        className: (_SettingsBlock_module_css__WEBPACK_IMPORTED_MODULE_5___default().title),\n                        children: \"Выбрать услугу\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Dmitry\\\\job\\\\project-react\\\\src\\\\components\\\\screens\\\\index\\\\SettingsBlock\\\\SettingsBlock.tsx\",\n                        lineNumber: 69,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"select\", {\n                        onChange: handleServiceChange,\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                disabled: true,\n                                selected: true,\n                                children: \"Выбрать услугу\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Dmitry\\\\job\\\\project-react\\\\src\\\\components\\\\screens\\\\index\\\\SettingsBlock\\\\SettingsBlock.tsx\",\n                                lineNumber: 71,\n                                columnNumber: 21\n                            }, undefined),\n                            serviceData && serviceData.data.map((el)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                    value: el.name,\n                                    children: el.name\n                                }, el.name, false, {\n                                    fileName: \"C:\\\\Users\\\\Dmitry\\\\job\\\\project-react\\\\src\\\\components\\\\screens\\\\index\\\\SettingsBlock\\\\SettingsBlock.tsx\",\n                                    lineNumber: 73,\n                                    columnNumber: 25\n                                }, undefined))\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\Dmitry\\\\job\\\\project-react\\\\src\\\\components\\\\screens\\\\index\\\\SettingsBlock\\\\SettingsBlock.tsx\",\n                        lineNumber: 70,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_SettingsBlock_module_css__WEBPACK_IMPORTED_MODULE_5___default().container__inputs),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                className: (_SettingsBlock_module_css__WEBPACK_IMPORTED_MODULE_5___default().input),\n                                type: \"text\",\n                                placeholder: \"Услуга\",\n                                value: service,\n                                onChange: (e)=>setSerivce(e.target.value)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Dmitry\\\\job\\\\project-react\\\\src\\\\components\\\\screens\\\\index\\\\SettingsBlock\\\\SettingsBlock.tsx\",\n                                lineNumber: 77,\n                                columnNumber: 21\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                className: (_SettingsBlock_module_css__WEBPACK_IMPORTED_MODULE_5___default().input),\n                                type: \"text\",\n                                placeholder: \"Цена\",\n                                value: price,\n                                onChange: (e)=>setPrice(e.target.value)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Dmitry\\\\job\\\\project-react\\\\src\\\\components\\\\screens\\\\index\\\\SettingsBlock\\\\SettingsBlock.tsx\",\n                                lineNumber: 78,\n                                columnNumber: 21\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\Dmitry\\\\job\\\\project-react\\\\src\\\\components\\\\screens\\\\index\\\\SettingsBlock\\\\SettingsBlock.tsx\",\n                        lineNumber: 76,\n                        columnNumber: 17\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\Dmitry\\\\job\\\\project-react\\\\src\\\\components\\\\screens\\\\index\\\\SettingsBlock\\\\SettingsBlock.tsx\",\n                lineNumber: 68,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_SettingsBlock_module_css__WEBPACK_IMPORTED_MODULE_5___default().container__item),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                        className: (_SettingsBlock_module_css__WEBPACK_IMPORTED_MODULE_5___default().title),\n                        children: \"Выбрать клиента\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Dmitry\\\\job\\\\project-react\\\\src\\\\components\\\\screens\\\\index\\\\SettingsBlock\\\\SettingsBlock.tsx\",\n                        lineNumber: 82,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"select\", {\n                        onChange: handleClientChange,\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                disabled: true,\n                                selected: true,\n                                children: \"Выбрать клиента\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Dmitry\\\\job\\\\project-react\\\\src\\\\components\\\\screens\\\\index\\\\SettingsBlock\\\\SettingsBlock.tsx\",\n                                lineNumber: 84,\n                                columnNumber: 21\n                            }, undefined),\n                            clientData && clientData.data.map((el)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                    value: el.alias,\n                                    children: el.alias\n                                }, el.alias, false, {\n                                    fileName: \"C:\\\\Users\\\\Dmitry\\\\job\\\\project-react\\\\src\\\\components\\\\screens\\\\index\\\\SettingsBlock\\\\SettingsBlock.tsx\",\n                                    lineNumber: 86,\n                                    columnNumber: 25\n                                }, undefined))\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\Dmitry\\\\job\\\\project-react\\\\src\\\\components\\\\screens\\\\index\\\\SettingsBlock\\\\SettingsBlock.tsx\",\n                        lineNumber: 83,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_SettingsBlock_module_css__WEBPACK_IMPORTED_MODULE_5___default().container__inputs),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                className: (_SettingsBlock_module_css__WEBPACK_IMPORTED_MODULE_5___default().input),\n                                type: \"text\",\n                                placeholder: \"ФИО\",\n                                value: alias,\n                                onChange: (e)=>setAlias(e.target.value)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Dmitry\\\\job\\\\project-react\\\\src\\\\components\\\\screens\\\\index\\\\SettingsBlock\\\\SettingsBlock.tsx\",\n                                lineNumber: 90,\n                                columnNumber: 21\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                className: (_SettingsBlock_module_css__WEBPACK_IMPORTED_MODULE_5___default().input),\n                                type: \"text\",\n                                placeholder: \"Контакты\",\n                                value: contact,\n                                onChange: (e)=>setContact(e.target.value)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Dmitry\\\\job\\\\project-react\\\\src\\\\components\\\\screens\\\\index\\\\SettingsBlock\\\\SettingsBlock.tsx\",\n                                lineNumber: 91,\n                                columnNumber: 21\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\Dmitry\\\\job\\\\project-react\\\\src\\\\components\\\\screens\\\\index\\\\SettingsBlock\\\\SettingsBlock.tsx\",\n                        lineNumber: 89,\n                        columnNumber: 17\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\Dmitry\\\\job\\\\project-react\\\\src\\\\components\\\\screens\\\\index\\\\SettingsBlock\\\\SettingsBlock.tsx\",\n                lineNumber: 81,\n                columnNumber: 13\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\Dmitry\\\\job\\\\project-react\\\\src\\\\components\\\\screens\\\\index\\\\SettingsBlock\\\\SettingsBlock.tsx\",\n        lineNumber: 67,\n        columnNumber: 9\n    }, undefined);\n};\n_s(SettingsBlock, \"v+8SOAU36tS0gcN4khVeKHd1EsA=\", false, function() {\n    return [\n        _tanstack_react_query__WEBPACK_IMPORTED_MODULE_4__.useQuery,\n        _tanstack_react_query__WEBPACK_IMPORTED_MODULE_4__.useQuery\n    ];\n});\n_c = SettingsBlock;\n/* harmony default export */ __webpack_exports__[\"default\"] = (SettingsBlock);\nvar _c;\n$RefreshReg$(_c, \"SettingsBlock\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9zY3JlZW5zL2luZGV4L1NldHRpbmdzQmxvY2svU2V0dGluZ3NCbG9jay50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQTREO0FBQ1g7QUFDbUI7QUFFVjtBQUVmO0FBVTNDLE1BQU1NLGdCQUFvQztRQUFDLEVBQUNDLGFBQVksRUFBRUMsV0FBVSxFQUFFQyxhQUFZLEVBQUVDLGFBQVksRUFBRUMsV0FBVSxFQUFDOztJQUV6RyxNQUFNLEVBQUVDLFdBQVdDLGlCQUFnQixFQUFFQyxTQUFTQyxlQUFjLEVBQUVDLE1BQU1DLFlBQVcsRUFBRSxHQUFHaEIsK0RBQVFBLENBQ3hGO1FBQUM7S0FBVyxFQUFFLFVBQVlELDRFQUFxQmtCO0lBR25ELE1BQU0sRUFBRU4sV0FBV08sZ0JBQWUsRUFBRUwsU0FBU00sY0FBYSxFQUFFSixNQUFNSyxXQUFVLEVBQUUsR0FBR3BCLCtEQUFRQSxDQUNyRjtRQUFDO0tBQVUsRUFBRSxVQUFZRywwRUFBb0JjO0lBR2pELE1BQU0sQ0FBQ0ksT0FBT0MsU0FBUyxHQUFHcEIsK0NBQVFBO0lBQ2xDLE1BQU0sQ0FBQ3FCLFNBQVNDLFdBQVcsR0FBR3RCLCtDQUFRQSxDQUFTO0lBQy9DLE1BQU0sQ0FBQ3VCLFNBQVNDLFdBQVcsR0FBR3hCLCtDQUFRQSxDQUFTO0lBQy9DLE1BQU0sQ0FBQ3lCLE9BQU9DLFNBQVMsR0FBRzFCLCtDQUFRQSxDQUFTO0lBRTNDLE1BQU0yQixzQkFBc0IsQ0FBQ0M7UUFDekIsTUFBTUMsVUFBVWYsd0JBQUFBLHlCQUFBQSxLQUFBQSxJQUFBQSxZQUFhRCxLQUFLaUIsS0FBS0MsQ0FBQUEsT0FBUUEsS0FBS0MsUUFBUUosRUFBRUssT0FBT0M7UUFFckVWLFdBQVdLLG9CQUFBQSxxQkFBQUEsS0FBQUEsSUFBQUEsUUFBU0c7UUFDcEJOLFNBQVNHLG9CQUFBQSxxQkFBQUEsS0FBQUEsSUFBQUEsUUFBU0o7SUFDdEI7SUFFQSxNQUFNVSxxQkFBcUIsQ0FBQ1A7UUFDeEIsTUFBTUMsVUFBVVgsdUJBQUFBLHdCQUFBQSxLQUFBQSxJQUFBQSxXQUFZTCxLQUFLaUIsS0FBS0MsQ0FBQUEsT0FBUUEsS0FBS1osU0FBU1MsRUFBRUssT0FBT0M7UUFFckVkLFNBQVNTLG9CQUFBQSxxQkFBQUEsS0FBQUEsSUFBQUEsUUFBU1Y7UUFDbEJHLFdBQVdPLG9CQUFBQSxxQkFBQUEsS0FBQUEsSUFBQUEsUUFBU1I7SUFDeEI7SUFFQSxNQUFNZSxRQUFRO1FBQ1ZoQyxhQUFhO1lBQ1RlLE9BQU87WUFDUEUsU0FBUztZQUNURSxTQUFTO1lBQ1RFLE9BQU87UUFDWDtJQUNKO0lBR0ExQixnREFBU0EsQ0FBQztRQUNOSyxhQUFhO1lBQ1RlLE9BQU9BO1lBQ1BFLFNBQVNBO1lBQ1RFLFNBQVNBO1lBQ1RFLE9BQU9BO1FBQ1g7SUFDSixHQUFHO1FBQUNOO1FBQU9FO1FBQVNFO1FBQVNFO0tBQU07SUFHbkMscUJBQ0ksOERBQUNZO1FBQUlDLFdBQVdwQyw0RUFBWXFDOzswQkFDeEIsOERBQUNGO2dCQUFJQyxXQUFXcEMsa0ZBQWtCc0M7O2tDQUM5Qiw4REFBQ0M7d0JBQUdILFdBQVdwQyx3RUFBUXdDO2tDQUFFOzs7Ozs7a0NBQ3pCLDhEQUFDQzt3QkFBT0MsVUFBVWpCOzswQ0FDZCw4REFBQ2tCO2dDQUFPQyxRQUFRO2dDQUFDQyxRQUFROzBDQUFDOzs7Ozs7NEJBQ3pCakMsZUFBZUEsWUFBWUQsS0FBS21DLElBQUksQ0FBQ0MsbUJBQ2xDLDhEQUFDSjtvQ0FBcUJYLE9BQU9lLEdBQUdqQjs4Q0FBT2lCLEdBQUdqQjttQ0FBN0JpQixHQUFHakI7Ozs7Ozs7Ozs7O2tDQUd4Qiw4REFBQ0s7d0JBQUlDLFdBQVdwQyxvRkFBb0JnRDs7MENBQ2hDLDhEQUFDQztnQ0FBTWIsV0FBV3BDLHdFQUFRaUQ7Z0NBQUVDLE1BQUs7Z0NBQU9DLGFBQVk7Z0NBQVNuQixPQUFPWDtnQ0FBU3FCLFVBQVVoQixDQUFBQSxJQUFLSixXQUFXSSxFQUFFSyxPQUFPQzs7Ozs7OzBDQUNoSCw4REFBQ2lCO2dDQUFNYixXQUFXcEMsd0VBQVFpRDtnQ0FBRUMsTUFBSztnQ0FBT0MsYUFBWTtnQ0FBT25CLE9BQU9UO2dDQUFPbUIsVUFBVWhCLENBQUFBLElBQUtGLFNBQVNFLEVBQUVLLE9BQU9DOzs7Ozs7Ozs7Ozs7Ozs7Ozs7MEJBR2xILDhEQUFDRztnQkFBSUMsV0FBV3BDLGtGQUFrQnNDOztrQ0FDOUIsOERBQUNDO3dCQUFHSCxXQUFXcEMsd0VBQVF3QztrQ0FBRTs7Ozs7O2tDQUN6Qiw4REFBQ0M7d0JBQU9DLFVBQVVUOzswQ0FDZCw4REFBQ1U7Z0NBQU9DLFFBQVE7Z0NBQUNDLFFBQVE7MENBQUM7Ozs7Ozs0QkFDekI3QixjQUFjQSxXQUFXTCxLQUFLbUMsSUFBSSxDQUFDQyxtQkFDaEMsOERBQUNKO29DQUFzQlgsT0FBT2UsR0FBRzlCOzhDQUFROEIsR0FBRzlCO21DQUEvQjhCLEdBQUc5Qjs7Ozs7Ozs7Ozs7a0NBR3hCLDhEQUFDa0I7d0JBQUlDLFdBQVdwQyxvRkFBb0JnRDs7MENBQ2hDLDhEQUFDQztnQ0FBTWIsV0FBV3BDLHdFQUFRaUQ7Z0NBQUVDLE1BQUs7Z0NBQU9DLGFBQVk7Z0NBQU1uQixPQUFPZjtnQ0FBT3lCLFVBQVVoQixDQUFBQSxJQUFLUixTQUFTUSxFQUFFSyxPQUFPQzs7Ozs7OzBDQUN6Ryw4REFBQ2lCO2dDQUFNYixXQUFXcEMsd0VBQVFpRDtnQ0FBRUMsTUFBSztnQ0FBT0MsYUFBWTtnQ0FBV25CLE9BQU9iO2dDQUFTdUIsVUFBVWhCLENBQUFBLElBQUtOLFdBQVdNLEVBQUVLLE9BQU9DOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFLdEk7R0EvRU0vQjs7UUFFa0ZMLDJEQUFRQTtRQUlYQSwyREFBUUE7OztLQU52Rks7QUFpRk4sK0RBQWVBLGFBQWFBLEVBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvc2NyZWVucy9pbmRleC9TZXR0aW5nc0Jsb2NrL1NldHRpbmdzQmxvY2sudHN4PzVjNzkiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgU2VydmljZVNlcnZpY2UgfSBmcm9tIFwiQC9zZXJ2aWNlcy9zZXJ2aWNlLnNlcnZpY2VcIjtcclxuaW1wb3J0IHsgdXNlUXVlcnkgfSBmcm9tIFwiQHRhbnN0YWNrL3JlYWN0LXF1ZXJ5XCI7XHJcbmltcG9ydCB7IENoYW5nZUV2ZW50SGFuZGxlciwgRkMsIHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgSVNlcnZpY2UgfSBmcm9tIFwiQC90eXBlcy9zZXJ2aWNlLmludGVyZmFjZVwiO1xyXG5pbXBvcnQgeyBDbGllbnRTZXJ2aWNlIH0gZnJvbSBcIkAvc2VydmljZXMvY2xpZW50LnNlcnZpY2VcIjtcclxuaW1wb3J0IHsgSUNsaWVudCB9IGZyb20gXCJAL3R5cGVzL2NsaWVudC5pbnRlcmZhY2VcIjtcclxuaW1wb3J0IGNsIGZyb20gXCIuL1NldHRpbmdzQmxvY2subW9kdWxlLmNzc1wiXHJcblxyXG5pbnRlcmZhY2UgSVNldHRpbmdzQmxvY2sge1xyXG4gICAgaGFuZGxlQ2hhbmdlOiBhbnksXHJcbiAgICBkYXRhX2FsaWFzOiBzdHJpbmcsXHJcbiAgICBkYXRhX2NvbnRhY3Q6IHN0cmluZyxcclxuICAgIGRhdGFfc2VydmljZTogc3RyaW5nLFxyXG4gICAgZGF0YV9wcmljZTogc3RyaW5nXHJcbn1cclxuXHJcbmNvbnN0IFNldHRpbmdzQmxvY2s6IEZDPElTZXR0aW5nc0Jsb2NrPiA9ICh7aGFuZGxlQ2hhbmdlLCBkYXRhX2FsaWFzLCBkYXRhX2NvbnRhY3QsIGRhdGFfc2VydmljZSwgZGF0YV9wcmljZX0pID0+IHtcclxuXHJcbiAgICBjb25zdCB7IGlzTG9hZGluZzogaXNTZXJ2aWNlTG9hZGluZywgaXNFcnJvcjogaXNTZXJ2aWNlRXJyb3IsIGRhdGE6IHNlcnZpY2VEYXRhIH0gPSB1c2VRdWVyeShcclxuICAgICAgICBbXCJzZXJ2aWNlc1wiXSwgYXN5bmMgKCkgPT4gU2VydmljZVNlcnZpY2UuZ2V0QWxsKClcclxuICAgIClcclxuXHJcbiAgICBjb25zdCB7IGlzTG9hZGluZzogaXNDbGllbnRMb2FkaW5nLCBpc0Vycm9yOiBpc0NsaWVudEVycm9yLCBkYXRhOiBjbGllbnREYXRhIH0gPSB1c2VRdWVyeShcclxuICAgICAgICBbXCJjbGllbnRzXCJdLCBhc3luYyAoKSA9PiBDbGllbnRTZXJ2aWNlLmdldEFsbCgpXHJcbiAgICApXHJcblxyXG4gICAgY29uc3QgW2FsaWFzLCBzZXRBbGlhc10gPSB1c2VTdGF0ZTxzdHJpbmc+KClcclxuICAgIGNvbnN0IFtjb250YWN0LCBzZXRDb250YWN0XSA9IHVzZVN0YXRlPHN0cmluZz4oXCJcIilcclxuICAgIGNvbnN0IFtzZXJ2aWNlLCBzZXRTZXJpdmNlXSA9IHVzZVN0YXRlPHN0cmluZz4oXCJcIilcclxuICAgIGNvbnN0IFtwcmljZSwgc2V0UHJpY2VdID0gdXNlU3RhdGU8c3RyaW5nPihcIlwiKVxyXG5cclxuICAgIGNvbnN0IGhhbmRsZVNlcnZpY2VDaGFuZ2UgPSAoZTogYW55KSA9PiB7XHJcbiAgICAgICAgY29uc3QgZWxlbWVudCA9IHNlcnZpY2VEYXRhPy5kYXRhLmZpbmQoaXRlbSA9PiBpdGVtLm5hbWUgPT0gZS50YXJnZXQudmFsdWUpIVxyXG5cclxuICAgICAgICBzZXRTZXJpdmNlKGVsZW1lbnQ/Lm5hbWUpXHJcbiAgICAgICAgc2V0UHJpY2UoZWxlbWVudD8ucHJpY2UpXHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgaGFuZGxlQ2xpZW50Q2hhbmdlID0gKGU6IGFueSkgPT4ge1xyXG4gICAgICAgIGNvbnN0IGVsZW1lbnQgPSBjbGllbnREYXRhPy5kYXRhLmZpbmQoaXRlbSA9PiBpdGVtLmFsaWFzID09IGUudGFyZ2V0LnZhbHVlKSFcclxuXHJcbiAgICAgICAgc2V0QWxpYXMoZWxlbWVudD8uYWxpYXMpXHJcbiAgICAgICAgc2V0Q29udGFjdChlbGVtZW50Py5jb250YWN0KVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHJlc2V0ID0gKCk6IHZvaWQgPT4ge1xyXG4gICAgICAgIGhhbmRsZUNoYW5nZSh7XHJcbiAgICAgICAgICAgIGFsaWFzOiBcIlwiLFxyXG4gICAgICAgICAgICBjb250YWN0OiBcIlwiLFxyXG4gICAgICAgICAgICBzZXJ2aWNlOiBcIlwiLFxyXG4gICAgICAgICAgICBwcmljZTogXCJcIlxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG5cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgaGFuZGxlQ2hhbmdlKHtcclxuICAgICAgICAgICAgYWxpYXM6IGFsaWFzLFxyXG4gICAgICAgICAgICBjb250YWN0OiBjb250YWN0LFxyXG4gICAgICAgICAgICBzZXJ2aWNlOiBzZXJ2aWNlLFxyXG4gICAgICAgICAgICBwcmljZTogcHJpY2VcclxuICAgICAgICB9KVxyXG4gICAgfSwgW2FsaWFzLCBjb250YWN0LCBzZXJ2aWNlLCBwcmljZV0pXHJcblxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsLmNvbnRhaW5lcn0+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbC5jb250YWluZXJfX2l0ZW19PlxyXG4gICAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT17Y2wudGl0bGV9PtCS0YvQsdGA0LDRgtGMINGD0YHQu9GD0LPRgzwvaDM+XHJcbiAgICAgICAgICAgICAgICA8c2VsZWN0IG9uQ2hhbmdlPXtoYW5kbGVTZXJ2aWNlQ2hhbmdlfT5cclxuICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIGRpc2FibGVkIHNlbGVjdGVkPtCS0YvQsdGA0LDRgtGMINGD0YHQu9GD0LPRgzwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgIHtzZXJ2aWNlRGF0YSAmJiBzZXJ2aWNlRGF0YS5kYXRhLm1hcCgoZWw6IElTZXJ2aWNlKSA9PiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiBrZXk9e2VsLm5hbWV9IHZhbHVlPXtlbC5uYW1lfT57ZWwubmFtZX08L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgPC9zZWxlY3Q+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2wuY29udGFpbmVyX19pbnB1dHN9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCBjbGFzc05hbWU9e2NsLmlucHV0fSB0eXBlPVwidGV4dFwiIHBsYWNlaG9sZGVyPVwi0KPRgdC70YPQs9CwXCIgdmFsdWU9e3NlcnZpY2V9IG9uQ2hhbmdlPXtlID0+IHNldFNlcml2Y2UoZS50YXJnZXQudmFsdWUpfS8+XHJcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IGNsYXNzTmFtZT17Y2wuaW5wdXR9IHR5cGU9XCJ0ZXh0XCIgcGxhY2Vob2xkZXI9XCLQptC10L3QsFwiIHZhbHVlPXtwcmljZX0gb25DaGFuZ2U9e2UgPT4gc2V0UHJpY2UoZS50YXJnZXQudmFsdWUpfS8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbC5jb250YWluZXJfX2l0ZW19PlxyXG4gICAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT17Y2wudGl0bGV9PtCS0YvQsdGA0LDRgtGMINC60LvQuNC10L3RgtCwPC9oMz5cclxuICAgICAgICAgICAgICAgIDxzZWxlY3Qgb25DaGFuZ2U9e2hhbmRsZUNsaWVudENoYW5nZX0+XHJcbiAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiBkaXNhYmxlZCBzZWxlY3RlZD7QktGL0LHRgNCw0YLRjCDQutC70LjQtdC90YLQsDwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgIHtjbGllbnREYXRhICYmIGNsaWVudERhdGEuZGF0YS5tYXAoKGVsOiBJQ2xpZW50KSA9PiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiBrZXk9e2VsLmFsaWFzfSB2YWx1ZT17ZWwuYWxpYXN9PntlbC5hbGlhc308L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgPC9zZWxlY3Q+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2wuY29udGFpbmVyX19pbnB1dHN9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCBjbGFzc05hbWU9e2NsLmlucHV0fSB0eXBlPVwidGV4dFwiIHBsYWNlaG9sZGVyPVwi0KTQmNCeXCIgdmFsdWU9e2FsaWFzfSBvbkNoYW5nZT17ZSA9PiBzZXRBbGlhcyhlLnRhcmdldC52YWx1ZSl9Lz5cclxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgY2xhc3NOYW1lPXtjbC5pbnB1dH0gdHlwZT1cInRleHRcIiBwbGFjZWhvbGRlcj1cItCa0L7QvdGC0LDQutGC0YtcIiB2YWx1ZT17Y29udGFjdH0gb25DaGFuZ2U9e2UgPT4gc2V0Q29udGFjdChlLnRhcmdldC52YWx1ZSl9Lz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgU2V0dGluZ3NCbG9jayJdLCJuYW1lcyI6WyJTZXJ2aWNlU2VydmljZSIsInVzZVF1ZXJ5IiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJDbGllbnRTZXJ2aWNlIiwiY2wiLCJTZXR0aW5nc0Jsb2NrIiwiaGFuZGxlQ2hhbmdlIiwiZGF0YV9hbGlhcyIsImRhdGFfY29udGFjdCIsImRhdGFfc2VydmljZSIsImRhdGFfcHJpY2UiLCJpc0xvYWRpbmciLCJpc1NlcnZpY2VMb2FkaW5nIiwiaXNFcnJvciIsImlzU2VydmljZUVycm9yIiwiZGF0YSIsInNlcnZpY2VEYXRhIiwiZ2V0QWxsIiwiaXNDbGllbnRMb2FkaW5nIiwiaXNDbGllbnRFcnJvciIsImNsaWVudERhdGEiLCJhbGlhcyIsInNldEFsaWFzIiwiY29udGFjdCIsInNldENvbnRhY3QiLCJzZXJ2aWNlIiwic2V0U2VyaXZjZSIsInByaWNlIiwic2V0UHJpY2UiLCJoYW5kbGVTZXJ2aWNlQ2hhbmdlIiwiZSIsImVsZW1lbnQiLCJmaW5kIiwiaXRlbSIsIm5hbWUiLCJ0YXJnZXQiLCJ2YWx1ZSIsImhhbmRsZUNsaWVudENoYW5nZSIsInJlc2V0IiwiZGl2IiwiY2xhc3NOYW1lIiwiY29udGFpbmVyIiwiY29udGFpbmVyX19pdGVtIiwiaDMiLCJ0aXRsZSIsInNlbGVjdCIsIm9uQ2hhbmdlIiwib3B0aW9uIiwiZGlzYWJsZWQiLCJzZWxlY3RlZCIsIm1hcCIsImVsIiwiY29udGFpbmVyX19pbnB1dHMiLCJpbnB1dCIsInR5cGUiLCJwbGFjZWhvbGRlciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/screens/index/SettingsBlock/SettingsBlock.tsx\n"));

/***/ })

});