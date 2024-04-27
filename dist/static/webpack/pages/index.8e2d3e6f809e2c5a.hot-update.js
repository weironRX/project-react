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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _services_service_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/services/service.service */ \"./src/services/service.service.ts\");\n/* harmony import */ var _tanstack_react_query__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @tanstack/react-query */ \"./node_modules/@tanstack/react-query/build/lib/index.mjs\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _services_client_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/services/client.service */ \"./src/services/client.service.ts\");\n/* harmony import */ var _SettingsBlock_module_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./SettingsBlock.module.css */ \"./src/components/screens/index/SettingsBlock/SettingsBlock.module.css\");\n/* harmony import */ var _SettingsBlock_module_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_SettingsBlock_module_css__WEBPACK_IMPORTED_MODULE_5__);\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nconst SettingsBlock = (param)=>{\n    let { handleChange  } = param;\n    _s();\n    const { isLoading: isServiceLoading , isError: isServiceError , data: serviceData  } = (0,_tanstack_react_query__WEBPACK_IMPORTED_MODULE_4__.useQuery)([\n        \"services\"\n    ], async ()=>_services_service_service__WEBPACK_IMPORTED_MODULE_1__.ServiceService.getAll());\n    const { isLoading: isClientLoading , isError: isClientError , data: clientData  } = (0,_tanstack_react_query__WEBPACK_IMPORTED_MODULE_4__.useQuery)([\n        \"clients\"\n    ], async ()=>_services_client_service__WEBPACK_IMPORTED_MODULE_3__.ClientService.getAll());\n    const [alias, setAlias] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\");\n    const [contact, setContact] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\");\n    const [service, setSerivce] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\");\n    const [price, setPrice] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\");\n    const [isSaveError, setISSaveError] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);\n    const handleServiceChange = (e)=>{\n        console.log(e);\n        const element = serviceData === null || serviceData === void 0 ? void 0 : serviceData.data.find((item)=>item.name == e.target.value);\n        setSerivce(element === null || element === void 0 ? void 0 : element.name);\n        setPrice(element === null || element === void 0 ? void 0 : element.price);\n    };\n    const handleClientChange = (e)=>{\n        const element = clientData === null || clientData === void 0 ? void 0 : clientData.data.find((item)=>item.alias == e.target.value);\n        setAlias(element === null || element === void 0 ? void 0 : element.alias);\n        setContact(element === null || element === void 0 ? void 0 : element.contact);\n    };\n    const save = async ()=>{\n        handleChange({\n            alias: alias,\n            contact: contact,\n            service: service,\n            price: price\n        });\n        if (service != \"\") {\n            try {\n                await _services_service_service__WEBPACK_IMPORTED_MODULE_1__.ServiceService.create({\n                    name: service,\n                    price: price\n                });\n            } catch (e) {\n                console.log(e);\n            }\n        }\n        if (alias != \"\") {\n            try {\n                await _services_client_service__WEBPACK_IMPORTED_MODULE_3__.ClientService.create({\n                    alias: alias,\n                    contact: contact\n                });\n            } catch (e) {\n                console.log(e);\n            }\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_SettingsBlock_module_css__WEBPACK_IMPORTED_MODULE_5___default().container),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_SettingsBlock_module_css__WEBPACK_IMPORTED_MODULE_5___default().container__item),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                        className: (_SettingsBlock_module_css__WEBPACK_IMPORTED_MODULE_5___default().title),\n                        children: \"Выбрать услугу\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Dmitry\\\\job\\\\project-react\\\\src\\\\components\\\\screens\\\\index\\\\SettingsBlock\\\\SettingsBlock.tsx\",\n                        lineNumber: 73,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"select\", {\n                        onChange: handleServiceChange,\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                disabled: true,\n                                selected: true,\n                                children: \"Выбрать услугу\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Dmitry\\\\job\\\\project-react\\\\src\\\\components\\\\screens\\\\index\\\\SettingsBlock\\\\SettingsBlock.tsx\",\n                                lineNumber: 75,\n                                columnNumber: 21\n                            }, undefined),\n                            serviceData && serviceData.data.map((el)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                    value: el.name,\n                                    children: el.name\n                                }, el.name, false, {\n                                    fileName: \"C:\\\\Users\\\\Dmitry\\\\job\\\\project-react\\\\src\\\\components\\\\screens\\\\index\\\\SettingsBlock\\\\SettingsBlock.tsx\",\n                                    lineNumber: 77,\n                                    columnNumber: 25\n                                }, undefined))\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\Dmitry\\\\job\\\\project-react\\\\src\\\\components\\\\screens\\\\index\\\\SettingsBlock\\\\SettingsBlock.tsx\",\n                        lineNumber: 74,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_SettingsBlock_module_css__WEBPACK_IMPORTED_MODULE_5___default().container__inputs),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                className: (_SettingsBlock_module_css__WEBPACK_IMPORTED_MODULE_5___default().input),\n                                type: \"text\",\n                                value: service,\n                                onChange: (e)=>setSerivce(e.target.value)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Dmitry\\\\job\\\\project-react\\\\src\\\\components\\\\screens\\\\index\\\\SettingsBlock\\\\SettingsBlock.tsx\",\n                                lineNumber: 81,\n                                columnNumber: 21\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                className: (_SettingsBlock_module_css__WEBPACK_IMPORTED_MODULE_5___default().input),\n                                type: \"text\",\n                                value: price,\n                                onChange: (e)=>setPrice(e.target.value)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Dmitry\\\\job\\\\project-react\\\\src\\\\components\\\\screens\\\\index\\\\SettingsBlock\\\\SettingsBlock.tsx\",\n                                lineNumber: 82,\n                                columnNumber: 21\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\Dmitry\\\\job\\\\project-react\\\\src\\\\components\\\\screens\\\\index\\\\SettingsBlock\\\\SettingsBlock.tsx\",\n                        lineNumber: 80,\n                        columnNumber: 17\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\Dmitry\\\\job\\\\project-react\\\\src\\\\components\\\\screens\\\\index\\\\SettingsBlock\\\\SettingsBlock.tsx\",\n                lineNumber: 72,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_SettingsBlock_module_css__WEBPACK_IMPORTED_MODULE_5___default().container__item),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                        className: (_SettingsBlock_module_css__WEBPACK_IMPORTED_MODULE_5___default().title),\n                        children: \"Выбрать клиента\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Dmitry\\\\job\\\\project-react\\\\src\\\\components\\\\screens\\\\index\\\\SettingsBlock\\\\SettingsBlock.tsx\",\n                        lineNumber: 86,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"select\", {\n                        onChange: handleClientChange,\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                disabled: true,\n                                selected: true,\n                                children: \"Выбрать клиента\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Dmitry\\\\job\\\\project-react\\\\src\\\\components\\\\screens\\\\index\\\\SettingsBlock\\\\SettingsBlock.tsx\",\n                                lineNumber: 88,\n                                columnNumber: 21\n                            }, undefined),\n                            clientData && clientData.data.map((el)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                    value: el.alias,\n                                    children: el.alias\n                                }, el.alias, false, {\n                                    fileName: \"C:\\\\Users\\\\Dmitry\\\\job\\\\project-react\\\\src\\\\components\\\\screens\\\\index\\\\SettingsBlock\\\\SettingsBlock.tsx\",\n                                    lineNumber: 90,\n                                    columnNumber: 25\n                                }, undefined))\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\Dmitry\\\\job\\\\project-react\\\\src\\\\components\\\\screens\\\\index\\\\SettingsBlock\\\\SettingsBlock.tsx\",\n                        lineNumber: 87,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_SettingsBlock_module_css__WEBPACK_IMPORTED_MODULE_5___default().container__inputs),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                className: (_SettingsBlock_module_css__WEBPACK_IMPORTED_MODULE_5___default().input),\n                                type: \"text\",\n                                value: alias,\n                                onChange: (e)=>setAlias(e.target.value)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Dmitry\\\\job\\\\project-react\\\\src\\\\components\\\\screens\\\\index\\\\SettingsBlock\\\\SettingsBlock.tsx\",\n                                lineNumber: 94,\n                                columnNumber: 21\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                className: (_SettingsBlock_module_css__WEBPACK_IMPORTED_MODULE_5___default().input),\n                                type: \"text\",\n                                value: contact,\n                                onChange: (e)=>setContact(e.target.value)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Dmitry\\\\job\\\\project-react\\\\src\\\\components\\\\screens\\\\index\\\\SettingsBlock\\\\SettingsBlock.tsx\",\n                                lineNumber: 95,\n                                columnNumber: 21\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\Dmitry\\\\job\\\\project-react\\\\src\\\\components\\\\screens\\\\index\\\\SettingsBlock\\\\SettingsBlock.tsx\",\n                        lineNumber: 93,\n                        columnNumber: 17\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\Dmitry\\\\job\\\\project-react\\\\src\\\\components\\\\screens\\\\index\\\\SettingsBlock\\\\SettingsBlock.tsx\",\n                lineNumber: 85,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                className: (_SettingsBlock_module_css__WEBPACK_IMPORTED_MODULE_5___default().save_button),\n                onClick: ()=>save(),\n                children: \"Выбрать\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Dmitry\\\\job\\\\project-react\\\\src\\\\components\\\\screens\\\\index\\\\SettingsBlock\\\\SettingsBlock.tsx\",\n                lineNumber: 98,\n                columnNumber: 13\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\Dmitry\\\\job\\\\project-react\\\\src\\\\components\\\\screens\\\\index\\\\SettingsBlock\\\\SettingsBlock.tsx\",\n        lineNumber: 71,\n        columnNumber: 9\n    }, undefined);\n};\n_s(SettingsBlock, \"w3G8Bbr+nYun4Hv0aOgpjEYDsdQ=\", false, function() {\n    return [\n        _tanstack_react_query__WEBPACK_IMPORTED_MODULE_4__.useQuery,\n        _tanstack_react_query__WEBPACK_IMPORTED_MODULE_4__.useQuery\n    ];\n});\n_c = SettingsBlock;\n/* harmony default export */ __webpack_exports__[\"default\"] = (SettingsBlock);\nvar _c;\n$RefreshReg$(_c, \"SettingsBlock\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9zY3JlZW5zL2luZGV4L1NldHRpbmdzQmxvY2svU2V0dGluZ3NCbG9jay50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQTREO0FBQ1g7QUFDUTtBQUVDO0FBRWY7QUFNM0MsTUFBTUssZ0JBQW9DO1FBQUMsRUFBQ0MsYUFBWSxFQUFDOztJQUVyRCxNQUFNLEVBQUVDLFdBQVdDLGlCQUFnQixFQUFFQyxTQUFTQyxlQUFjLEVBQUVDLE1BQU1DLFlBQVcsRUFBRSxHQUFHWCwrREFBUUEsQ0FDeEY7UUFBQztLQUFXLEVBQUUsVUFBWUQsNEVBQXFCYTtJQUduRCxNQUFNLEVBQUVOLFdBQVdPLGdCQUFlLEVBQUVMLFNBQVNNLGNBQWEsRUFBRUosTUFBTUssV0FBVSxFQUFFLEdBQUdmLCtEQUFRQSxDQUNyRjtRQUFDO0tBQVUsRUFBRSxVQUFZRSwwRUFBb0JVO0lBR2pELE1BQU0sQ0FBQ0ksT0FBT0MsU0FBUyxHQUFHaEIsK0NBQVFBLENBQVM7SUFDM0MsTUFBTSxDQUFDaUIsU0FBU0MsV0FBVyxHQUFHbEIsK0NBQVFBLENBQVM7SUFDL0MsTUFBTSxDQUFDbUIsU0FBU0MsV0FBVyxHQUFHcEIsK0NBQVFBLENBQVM7SUFDL0MsTUFBTSxDQUFDcUIsT0FBT0MsU0FBUyxHQUFHdEIsK0NBQVFBLENBQVM7SUFDM0MsTUFBTSxDQUFDdUIsYUFBYUMsZUFBZSxHQUFHeEIsK0NBQVFBLENBQUM7SUFFL0MsTUFBTXlCLHNCQUFzQixDQUFDQztRQUN6QkMsUUFBUUMsSUFBSUY7UUFFWixNQUFNRyxVQUFVbkIsd0JBQUFBLHlCQUFBQSxLQUFBQSxJQUFBQSxZQUFhRCxLQUFLcUIsS0FBS0MsQ0FBQUEsT0FBUUEsS0FBS0MsUUFBUU4sRUFBRU8sT0FBT0M7UUFFckVkLFdBQVdTLG9CQUFBQSxxQkFBQUEsS0FBQUEsSUFBQUEsUUFBU0c7UUFDcEJWLFNBQVNPLG9CQUFBQSxxQkFBQUEsS0FBQUEsSUFBQUEsUUFBU1I7SUFDdEI7SUFFQSxNQUFN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Ozs7OztBQUd0RTtHQXhGTWpDOztRQUVrRkosMkRBQVFBO1FBSVhBLDJEQUFRQTs7O0tBTnZGSTtBQTBGTiwrREFBZUEsYUFBYUEsRUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9zY3JlZW5zL2luZGV4L1NldHRpbmdzQmxvY2svU2V0dGluZ3NCbG9jay50c3g/NWM3OSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBTZXJ2aWNlU2VydmljZSB9IGZyb20gXCJAL3NlcnZpY2VzL3NlcnZpY2Uuc2VydmljZVwiO1xyXG5pbXBvcnQgeyB1c2VRdWVyeSB9IGZyb20gXCJAdGFuc3RhY2svcmVhY3QtcXVlcnlcIjtcclxuaW1wb3J0IHsgQ2hhbmdlRXZlbnRIYW5kbGVyLCBGQywgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgSVNlcnZpY2UgfSBmcm9tIFwiQC90eXBlcy9zZXJ2aWNlLmludGVyZmFjZVwiO1xyXG5pbXBvcnQgeyBDbGllbnRTZXJ2aWNlIH0gZnJvbSBcIkAvc2VydmljZXMvY2xpZW50LnNlcnZpY2VcIjtcclxuaW1wb3J0IHsgSUNsaWVudCB9IGZyb20gXCJAL3R5cGVzL2NsaWVudC5pbnRlcmZhY2VcIjtcclxuaW1wb3J0IGNsIGZyb20gXCIuL1NldHRpbmdzQmxvY2subW9kdWxlLmNzc1wiXHJcblxyXG5pbnRlcmZhY2UgSVNldHRpbmdzQmxvY2sge1xyXG4gICAgaGFuZGxlQ2hhbmdlOiBhbnksXHJcbn1cclxuXHJcbmNvbnN0IFNldHRpbmdzQmxvY2s6IEZDPElTZXR0aW5nc0Jsb2NrPiA9ICh7aGFuZGxlQ2hhbmdlfSkgPT4ge1xyXG5cclxuICAgIGNvbnN0IHsgaXNMb2FkaW5nOiBpc1NlcnZpY2VMb2FkaW5nLCBpc0Vycm9yOiBpc1NlcnZpY2VFcnJvciwgZGF0YTogc2VydmljZURhdGEgfSA9IHVzZVF1ZXJ5KFxyXG4gICAgICAgIFtcInNlcnZpY2VzXCJdLCBhc3luYyAoKSA9PiBTZXJ2aWNlU2VydmljZS5nZXRBbGwoKVxyXG4gICAgKVxyXG5cclxuICAgIGNvbnN0IHsgaXNMb2FkaW5nOiBpc0NsaWVudExvYWRpbmcsIGlzRXJyb3I6IGlzQ2xpZW50RXJyb3IsIGRhdGE6IGNsaWVudERhdGEgfSA9IHVzZVF1ZXJ5KFxyXG4gICAgICAgIFtcImNsaWVudHNcIl0sIGFzeW5jICgpID0+IENsaWVudFNlcnZpY2UuZ2V0QWxsKClcclxuICAgIClcclxuXHJcbiAgICBjb25zdCBbYWxpYXMsIHNldEFsaWFzXSA9IHVzZVN0YXRlPHN0cmluZz4oXCJcIilcclxuICAgIGNvbnN0IFtjb250YWN0LCBzZXRDb250YWN0XSA9IHVzZVN0YXRlPHN0cmluZz4oXCJcIilcclxuICAgIGNvbnN0IFtzZXJ2aWNlLCBzZXRTZXJpdmNlXSA9IHVzZVN0YXRlPHN0cmluZz4oXCJcIilcclxuICAgIGNvbnN0IFtwcmljZSwgc2V0UHJpY2VdID0gdXNlU3RhdGU8c3RyaW5nPihcIlwiKVxyXG4gICAgY29uc3QgW2lzU2F2ZUVycm9yLCBzZXRJU1NhdmVFcnJvcl0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcblxyXG4gICAgY29uc3QgaGFuZGxlU2VydmljZUNoYW5nZSA9IChlOiBhbnkpID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZyhlKVxyXG5cclxuICAgICAgICBjb25zdCBlbGVtZW50ID0gc2VydmljZURhdGE/LmRhdGEuZmluZChpdGVtID0+IGl0ZW0ubmFtZSA9PSBlLnRhcmdldC52YWx1ZSkhXHJcblxyXG4gICAgICAgIHNldFNlcml2Y2UoZWxlbWVudD8ubmFtZSlcclxuICAgICAgICBzZXRQcmljZShlbGVtZW50Py5wcmljZSlcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBoYW5kbGVDbGllbnRDaGFuZ2UgPSAoZTogYW55KSA9PiB7XHJcbiAgICAgICAgY29uc3QgZWxlbWVudCA9IGNsaWVudERhdGE/LmRhdGEuZmluZChpdGVtID0+IGl0ZW0uYWxpYXMgPT0gZS50YXJnZXQudmFsdWUpIVxyXG5cclxuICAgICAgICBzZXRBbGlhcyhlbGVtZW50Py5hbGlhcylcclxuICAgICAgICBzZXRDb250YWN0KGVsZW1lbnQ/LmNvbnRhY3QpXHJcbiAgICB9XHJcblxyXG4gICAgY29uc3Qgc2F2ZSA9IGFzeW5jICgpID0+IHtcclxuICAgICAgICBoYW5kbGVDaGFuZ2Uoe1xyXG4gICAgICAgICAgICBhbGlhczogYWxpYXMsXHJcbiAgICAgICAgICAgIGNvbnRhY3Q6IGNvbnRhY3QsXHJcbiAgICAgICAgICAgIHNlcnZpY2U6IHNlcnZpY2UsXHJcbiAgICAgICAgICAgIHByaWNlOiBwcmljZVxyXG4gICAgICAgIH0pXHJcblxyXG4gICAgICAgIGlmIChzZXJ2aWNlICE9IFwiXCIpIHtcclxuICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICAgIGF3YWl0IFNlcnZpY2VTZXJ2aWNlLmNyZWF0ZSh7bmFtZTogc2VydmljZSwgcHJpY2U6IHByaWNlfSk7XHJcbiAgICAgICAgICAgIH0gY2F0Y2ggKGUpIHtcclxuXHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChhbGlhcyAhPSBcIlwiKSB7XHJcbiAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICBhd2FpdCBDbGllbnRTZXJ2aWNlLmNyZWF0ZSh7YWxpYXM6IGFsaWFzLCBjb250YWN0OiBjb250YWN0fSk7XHJcbiAgICAgICAgICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGUpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2wuY29udGFpbmVyfT5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsLmNvbnRhaW5lcl9faXRlbX0+XHJcbiAgICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPXtjbC50aXRsZX0+0JLRi9Cx0YDQsNGC0Ywg0YPRgdC70YPQs9GDPC9oMz5cclxuICAgICAgICAgICAgICAgIDxzZWxlY3Qgb25DaGFuZ2U9e2hhbmRsZVNlcnZpY2VDaGFuZ2V9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxvcHRpb24gZGlzYWJsZWQgc2VsZWN0ZWQ+0JLRi9Cx0YDQsNGC0Ywg0YPRgdC70YPQs9GDPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAge3NlcnZpY2VEYXRhICYmIHNlcnZpY2VEYXRhLmRhdGEubWFwKChlbDogSVNlcnZpY2UpID0+IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIGtleT17ZWwubmFtZX0gdmFsdWU9e2VsLm5hbWV9PntlbC5uYW1lfTwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICA8L3NlbGVjdD5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbC5jb250YWluZXJfX2lucHV0c30+XHJcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IGNsYXNzTmFtZT17Y2wuaW5wdXR9IHR5cGU9XCJ0ZXh0XCIgdmFsdWU9e3NlcnZpY2V9IG9uQ2hhbmdlPXtlID0+IHNldFNlcml2Y2UoZS50YXJnZXQudmFsdWUpfS8+XHJcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IGNsYXNzTmFtZT17Y2wuaW5wdXR9IHR5cGU9XCJ0ZXh0XCIgdmFsdWU9e3ByaWNlfSBvbkNoYW5nZT17ZSA9PiBzZXRQcmljZShlLnRhcmdldC52YWx1ZSl9Lz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsLmNvbnRhaW5lcl9faXRlbX0+XHJcbiAgICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPXtjbC50aXRsZX0+0JLRi9Cx0YDQsNGC0Ywg0LrQu9C40LXQvdGC0LA8L2gzPlxyXG4gICAgICAgICAgICAgICAgPHNlbGVjdCBvbkNoYW5nZT17aGFuZGxlQ2xpZW50Q2hhbmdlfT5cclxuICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIGRpc2FibGVkIHNlbGVjdGVkPtCS0YvQsdGA0LDRgtGMINC60LvQuNC10L3RgtCwPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAge2NsaWVudERhdGEgJiYgY2xpZW50RGF0YS5kYXRhLm1hcCgoZWw6IElDbGllbnQpID0+IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIGtleT17ZWwuYWxpYXN9IHZhbHVlPXtlbC5hbGlhc30+e2VsLmFsaWFzfTwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICA8L3NlbGVjdD5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbC5jb250YWluZXJfX2lucHV0c30+XHJcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IGNsYXNzTmFtZT17Y2wuaW5wdXR9IHR5cGU9XCJ0ZXh0XCIgdmFsdWU9e2FsaWFzfSBvbkNoYW5nZT17ZSA9PiBzZXRBbGlhcyhlLnRhcmdldC52YWx1ZSl9Lz5cclxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgY2xhc3NOYW1lPXtjbC5pbnB1dH0gdHlwZT1cInRleHRcIiB2YWx1ZT17Y29udGFjdH0gb25DaGFuZ2U9e2UgPT4gc2V0Q29udGFjdChlLnRhcmdldC52YWx1ZSl9Lz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9e2NsLnNhdmVfYnV0dG9ufSBvbkNsaWNrPXsoKSA9PiBzYXZlKCl9PtCS0YvQsdGA0LDRgtGMPC9idXR0b24+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFNldHRpbmdzQmxvY2siXSwibmFtZXMiOlsiU2VydmljZVNlcnZpY2UiLCJ1c2VRdWVyeSIsInVzZVN0YXRlIiwiQ2xpZW50U2VydmljZSIsImNsIiwiU2V0dGluZ3NCbG9jayIsImhhbmRsZUNoYW5nZSIsImlzTG9hZGluZyIsImlzU2VydmljZUxvYWRpbmciLCJpc0Vycm9yIiwiaXNTZXJ2aWNlRXJyb3IiLCJkYXRhIiwic2VydmljZURhdGEiLCJnZXRBbGwiLCJpc0NsaWVudExvYWRpbmciLCJpc0NsaWVudEVycm9yIiwiY2xpZW50RGF0YSIsImFsaWFzIiwic2V0QWxpYXMiLCJjb250YWN0Iiwic2V0Q29udGFjdCIsInNlcnZpY2UiLCJzZXRTZXJpdmNlIiwicHJpY2UiLCJzZXRQcmljZSIsImlzU2F2ZUVycm9yIiwic2V0SVNTYXZlRXJyb3IiLCJoYW5kbGVTZXJ2aWNlQ2hhbmdlIiwiZSIsImNvbnNvbGUiLCJsb2ciLCJlbGVtZW50IiwiZmluZCIsIml0ZW0iLCJuYW1lIiwidGFyZ2V0IiwidmFsdWUiLCJoYW5kbGVDbGllbnRDaGFuZ2UiLCJzYXZlIiwiY3JlYXRlIiwiZGl2IiwiY2xhc3NOYW1lIiwiY29udGFpbmVyIiwiY29udGFpbmVyX19pdGVtIiwiaDMiLCJ0aXRsZSIsInNlbGVjdCIsIm9uQ2hhbmdlIiwib3B0aW9uIiwiZGlzYWJsZWQiLCJzZWxlY3RlZCIsIm1hcCIsImVsIiwiY29udGFpbmVyX19pbnB1dHMiLCJpbnB1dCIsInR5cGUiLCJidXR0b24iLCJzYXZlX2J1dHRvbiIsIm9uQ2xpY2siXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/screens/index/SettingsBlock/SettingsBlock.tsx\n"));

/***/ })

});