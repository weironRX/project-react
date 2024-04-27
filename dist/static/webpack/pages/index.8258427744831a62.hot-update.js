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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _services_service_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/services/service.service */ \"./src/services/service.service.ts\");\n/* harmony import */ var _tanstack_react_query__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @tanstack/react-query */ \"./node_modules/@tanstack/react-query/build/lib/index.mjs\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _services_client_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/services/client.service */ \"./src/services/client.service.ts\");\n/* harmony import */ var _SettingsBlock_module_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./SettingsBlock.module.css */ \"./src/components/screens/index/SettingsBlock/SettingsBlock.module.css\");\n/* harmony import */ var _SettingsBlock_module_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_SettingsBlock_module_css__WEBPACK_IMPORTED_MODULE_5__);\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nconst SettingsBlock = (param)=>{\n    let { handleChange  } = param;\n    _s();\n    const { isLoading: isServiceLoading , isError: isServiceError , data: serviceData  } = (0,_tanstack_react_query__WEBPACK_IMPORTED_MODULE_4__.useQuery)([\n        \"services\"\n    ], async ()=>_services_service_service__WEBPACK_IMPORTED_MODULE_1__.ServiceService.getAll());\n    const { isLoading: isClientLoading , isError: isClientError , data: clientData  } = (0,_tanstack_react_query__WEBPACK_IMPORTED_MODULE_4__.useQuery)([\n        \"clients\"\n    ], async ()=>_services_client_service__WEBPACK_IMPORTED_MODULE_3__.ClientService.getAll());\n    const [alias, setAlias] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\");\n    const [contact, setContact] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\");\n    const [service, setSerivce] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\");\n    const [price, setPrice] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\");\n    const [isSaveError, setISSaveError] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);\n    const handleServiceChange = (e)=>{\n        console.log(e);\n        const element = serviceData === null || serviceData === void 0 ? void 0 : serviceData.data.find((item)=>item.name == e.target.value);\n        setSerivce(element === null || element === void 0 ? void 0 : element.name);\n        setPrice(element === null || element === void 0 ? void 0 : element.price);\n    };\n    const handleClientChange = (e)=>{\n        const element = clientData === null || clientData === void 0 ? void 0 : clientData.data.find((item)=>item.alias == e.target.value);\n        setAlias(element === null || element === void 0 ? void 0 : element.alias);\n        setContact(element === null || element === void 0 ? void 0 : element.contact);\n    };\n    const reset = ()=>{\n        handleChange({\n            alias: \"\",\n            contact: \"\",\n            service: \"\",\n            price: price\n        });\n    };\n    const save = async ()=>{\n        setISSaveError(false);\n        handleChange({\n            alias: alias,\n            contact: contact,\n            service: service,\n            price: price\n        });\n        if (service != \"\") {\n            try {\n                await _services_service_service__WEBPACK_IMPORTED_MODULE_1__.ServiceService.create({\n                    name: service,\n                    price: price\n                });\n            } catch (e) {\n                setISSaveError(true);\n            }\n        }\n        if (alias != \"\") {\n            try {\n                await _services_client_service__WEBPACK_IMPORTED_MODULE_3__.ClientService.create({\n                    alias: alias,\n                    contact: contact\n                });\n            } catch (e) {\n                setISSaveError(true);\n            }\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_SettingsBlock_module_css__WEBPACK_IMPORTED_MODULE_5___default().container),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_SettingsBlock_module_css__WEBPACK_IMPORTED_MODULE_5___default().container__item),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                        className: (_SettingsBlock_module_css__WEBPACK_IMPORTED_MODULE_5___default().title),\n                        children: \"Выбрать услугу\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Dmitry\\\\job\\\\project-react\\\\src\\\\components\\\\screens\\\\index\\\\SettingsBlock\\\\SettingsBlock.tsx\",\n                        lineNumber: 83,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"select\", {\n                        onChange: handleServiceChange,\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                disabled: true,\n                                selected: true,\n                                children: \"Выбрать услугу\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Dmitry\\\\job\\\\project-react\\\\src\\\\components\\\\screens\\\\index\\\\SettingsBlock\\\\SettingsBlock.tsx\",\n                                lineNumber: 85,\n                                columnNumber: 21\n                            }, undefined),\n                            serviceData && serviceData.data.map((el)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                    value: el.name,\n                                    children: el.name\n                                }, el.name, false, {\n                                    fileName: \"C:\\\\Users\\\\Dmitry\\\\job\\\\project-react\\\\src\\\\components\\\\screens\\\\index\\\\SettingsBlock\\\\SettingsBlock.tsx\",\n                                    lineNumber: 87,\n                                    columnNumber: 25\n                                }, undefined))\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\Dmitry\\\\job\\\\project-react\\\\src\\\\components\\\\screens\\\\index\\\\SettingsBlock\\\\SettingsBlock.tsx\",\n                        lineNumber: 84,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_SettingsBlock_module_css__WEBPACK_IMPORTED_MODULE_5___default().container__inputs),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                className: (_SettingsBlock_module_css__WEBPACK_IMPORTED_MODULE_5___default().input),\n                                type: \"text\",\n                                value: service,\n                                onChange: (e)=>setSerivce(e.target.value)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Dmitry\\\\job\\\\project-react\\\\src\\\\components\\\\screens\\\\index\\\\SettingsBlock\\\\SettingsBlock.tsx\",\n                                lineNumber: 91,\n                                columnNumber: 21\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                className: (_SettingsBlock_module_css__WEBPACK_IMPORTED_MODULE_5___default().input),\n                                type: \"text\",\n                                value: price,\n                                onChange: (e)=>setPrice(e.target.value)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Dmitry\\\\job\\\\project-react\\\\src\\\\components\\\\screens\\\\index\\\\SettingsBlock\\\\SettingsBlock.tsx\",\n                                lineNumber: 92,\n                                columnNumber: 21\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\Dmitry\\\\job\\\\project-react\\\\src\\\\components\\\\screens\\\\index\\\\SettingsBlock\\\\SettingsBlock.tsx\",\n                        lineNumber: 90,\n                        columnNumber: 17\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\Dmitry\\\\job\\\\project-react\\\\src\\\\components\\\\screens\\\\index\\\\SettingsBlock\\\\SettingsBlock.tsx\",\n                lineNumber: 82,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_SettingsBlock_module_css__WEBPACK_IMPORTED_MODULE_5___default().container__item),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                        className: (_SettingsBlock_module_css__WEBPACK_IMPORTED_MODULE_5___default().title),\n                        children: \"Выбрать клиента\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Dmitry\\\\job\\\\project-react\\\\src\\\\components\\\\screens\\\\index\\\\SettingsBlock\\\\SettingsBlock.tsx\",\n                        lineNumber: 96,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"select\", {\n                        onChange: handleClientChange,\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                disabled: true,\n                                selected: true,\n                                children: \"Выбрать клиента\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Dmitry\\\\job\\\\project-react\\\\src\\\\components\\\\screens\\\\index\\\\SettingsBlock\\\\SettingsBlock.tsx\",\n                                lineNumber: 98,\n                                columnNumber: 21\n                            }, undefined),\n                            clientData && clientData.data.map((el)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                    value: el.alias,\n                                    children: el.alias\n                                }, el.alias, false, {\n                                    fileName: \"C:\\\\Users\\\\Dmitry\\\\job\\\\project-react\\\\src\\\\components\\\\screens\\\\index\\\\SettingsBlock\\\\SettingsBlock.tsx\",\n                                    lineNumber: 100,\n                                    columnNumber: 25\n                                }, undefined))\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\Dmitry\\\\job\\\\project-react\\\\src\\\\components\\\\screens\\\\index\\\\SettingsBlock\\\\SettingsBlock.tsx\",\n                        lineNumber: 97,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_SettingsBlock_module_css__WEBPACK_IMPORTED_MODULE_5___default().container__inputs),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                className: (_SettingsBlock_module_css__WEBPACK_IMPORTED_MODULE_5___default().input),\n                                type: \"text\",\n                                value: alias,\n                                onChange: (e)=>setAlias(e.target.value)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Dmitry\\\\job\\\\project-react\\\\src\\\\components\\\\screens\\\\index\\\\SettingsBlock\\\\SettingsBlock.tsx\",\n                                lineNumber: 104,\n                                columnNumber: 21\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                className: (_SettingsBlock_module_css__WEBPACK_IMPORTED_MODULE_5___default().input),\n                                type: \"text\",\n                                value: contact,\n                                onChange: (e)=>setContact(e.target.value)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Dmitry\\\\job\\\\project-react\\\\src\\\\components\\\\screens\\\\index\\\\SettingsBlock\\\\SettingsBlock.tsx\",\n                                lineNumber: 105,\n                                columnNumber: 21\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\Dmitry\\\\job\\\\project-react\\\\src\\\\components\\\\screens\\\\index\\\\SettingsBlock\\\\SettingsBlock.tsx\",\n                        lineNumber: 103,\n                        columnNumber: 17\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\Dmitry\\\\job\\\\project-react\\\\src\\\\components\\\\screens\\\\index\\\\SettingsBlock\\\\SettingsBlock.tsx\",\n                lineNumber: 95,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                className: (_SettingsBlock_module_css__WEBPACK_IMPORTED_MODULE_5___default().save_button),\n                onClick: ()=>save(),\n                children: isSaveError ? \"Ошибка сохранения данных\" : \"Выбрать\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Dmitry\\\\job\\\\project-react\\\\src\\\\components\\\\screens\\\\index\\\\SettingsBlock\\\\SettingsBlock.tsx\",\n                lineNumber: 108,\n                columnNumber: 13\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\Dmitry\\\\job\\\\project-react\\\\src\\\\components\\\\screens\\\\index\\\\SettingsBlock\\\\SettingsBlock.tsx\",\n        lineNumber: 81,\n        columnNumber: 9\n    }, undefined);\n};\n_s(SettingsBlock, \"w3G8Bbr+nYun4Hv0aOgpjEYDsdQ=\", false, function() {\n    return [\n        _tanstack_react_query__WEBPACK_IMPORTED_MODULE_4__.useQuery,\n        _tanstack_react_query__WEBPACK_IMPORTED_MODULE_4__.useQuery\n    ];\n});\n_c = SettingsBlock;\n/* harmony default export */ __webpack_exports__[\"default\"] = (SettingsBlock);\nvar _c;\n$RefreshReg$(_c, \"SettingsBlock\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9zY3JlZW5zL2luZGV4L1NldHRpbmdzQmxvY2svU2V0dGluZ3NCbG9jay50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQTREO0FBQ1g7QUFDUTtBQUVDO0FBRWY7QUFNM0MsTUFBTUssZ0JBQW9DO1FBQUMsRUFBQ0MsYUFBWSxFQUFDOztJQUVyRCxNQUFNLEVBQUVDLFdBQVdDLGlCQUFnQixFQUFFQyxTQUFTQyxlQUFjLEVBQUVDLE1BQU1DLFlBQVcsRUFBRSxHQUFHWCwrREFBUUEsQ0FDeEY7UUFBQztLQUFXLEVBQUUsVUFBWUQsNEVBQXFCYTtJQUduRCxNQUFNLEVBQUVOLFdBQVdPLGdCQUFlLEVBQUVMLFNBQVNNLGNBQWEsRUFBRUosTUFBTUssV0FBVSxFQUFFLEdBQUdmLCtEQUFRQSxDQUNyRjtRQUFDO0tBQVUsRUFBRSxVQUFZRSwwRUFBb0JVO0lBR2pELE1BQU0sQ0FBQ0ksT0FBT0MsU0FBUyxHQUFHaEIsK0NBQVFBLENBQVM7SUFDM0MsTUFBTSxDQUFDaUIsU0FBU0MsV0FBVyxHQUFHbEIsK0NBQVFBLENBQVM7SUFDL0MsTUFBTSxDQUFDbUIsU0FBU0MsV0FBVyxHQUFHcEIsK0NBQVFBLENBQVM7SUFDL0MsTUFBTSxDQUFDcUIsT0FBT0MsU0FBUyxHQUFHdEIsK0NBQVFBLENBQVM7SUFDM0MsTUFBTSxDQUFDdUIsYUFBYUMsZUFBZSxHQUFHeEIsK0NBQVFBLENBQUM7SUFFL0MsTUFBTXlCLHNCQUFzQixDQUFDQztRQUN6QkMsUUFBUUMsSUFBSUY7UUFFWixNQUFNRyxVQUFVbkIsd0JBQUFBLHlCQUFBQSxLQUFBQSxJQUFBQSxZQUFhRCxLQUFLcUIsS0FBS0MsQ0FBQUEsT0FBUUEsS0FBS0MsUUFBUU4sRUFBRU8sT0FBT0M7UUFFckVkLFdBQVdTLG9CQUFBQSxxQkFBQUEsS0FBQUEsSUFBQUEsUUFBU0c7UUFDcEJWLFNBQVNPLG9CQUFBQSxxQkFBQUEsS0FBQUEsSUFBQUEsUUFBU1I7SUFDdEI7SUFFQSxNQUFN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Ozs7Ozs7Ozs7Ozs7OzBCQUduRyw4REFBQ3FCO2dCQUFPZixXQUFXdEMsOEVBQWNzRDtnQkFBRUMsU0FBUyxJQUFNcEI7MEJBQVNkLGNBQWMsNkJBQTZCOzs7Ozs7Ozs7Ozs7QUFHbEg7R0FsR01wQjs7UUFFa0ZKLDJEQUFRQTtRQUlYQSwyREFBUUE7OztLQU52Rkk7QUFvR04sK0RBQWVBLGFBQWFBLEVBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvc2NyZWVucy9pbmRleC9TZXR0aW5nc0Jsb2NrL1NldHRpbmdzQmxvY2sudHN4PzVjNzkiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgU2VydmljZVNlcnZpY2UgfSBmcm9tIFwiQC9zZXJ2aWNlcy9zZXJ2aWNlLnNlcnZpY2VcIjtcclxuaW1wb3J0IHsgdXNlUXVlcnkgfSBmcm9tIFwiQHRhbnN0YWNrL3JlYWN0LXF1ZXJ5XCI7XHJcbmltcG9ydCB7IENoYW5nZUV2ZW50SGFuZGxlciwgRkMsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IElTZXJ2aWNlIH0gZnJvbSBcIkAvdHlwZXMvc2VydmljZS5pbnRlcmZhY2VcIjtcclxuaW1wb3J0IHsgQ2xpZW50U2VydmljZSB9IGZyb20gXCJAL3NlcnZpY2VzL2NsaWVudC5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7IElDbGllbnQgfSBmcm9tIFwiQC90eXBlcy9jbGllbnQuaW50ZXJmYWNlXCI7XHJcbmltcG9ydCBjbCBmcm9tIFwiLi9TZXR0aW5nc0Jsb2NrLm1vZHVsZS5jc3NcIlxyXG5cclxuaW50ZXJmYWNlIElTZXR0aW5nc0Jsb2NrIHtcclxuICAgIGhhbmRsZUNoYW5nZTogYW55LFxyXG59XHJcblxyXG5jb25zdCBTZXR0aW5nc0Jsb2NrOiBGQzxJU2V0dGluZ3NCbG9jaz4gPSAoe2hhbmRsZUNoYW5nZX0pID0+IHtcclxuXHJcbiAgICBjb25zdCB7IGlzTG9hZGluZzogaXNTZXJ2aWNlTG9hZGluZywgaXNFcnJvcjogaXNTZXJ2aWNlRXJyb3IsIGRhdGE6IHNlcnZpY2VEYXRhIH0gPSB1c2VRdWVyeShcclxuICAgICAgICBbXCJzZXJ2aWNlc1wiXSwgYXN5bmMgKCkgPT4gU2VydmljZVNlcnZpY2UuZ2V0QWxsKClcclxuICAgIClcclxuXHJcbiAgICBjb25zdCB7IGlzTG9hZGluZzogaXNDbGllbnRMb2FkaW5nLCBpc0Vycm9yOiBpc0NsaWVudEVycm9yLCBkYXRhOiBjbGllbnREYXRhIH0gPSB1c2VRdWVyeShcclxuICAgICAgICBbXCJjbGllbnRzXCJdLCBhc3luYyAoKSA9PiBDbGllbnRTZXJ2aWNlLmdldEFsbCgpXHJcbiAgICApXHJcblxyXG4gICAgY29uc3QgW2FsaWFzLCBzZXRBbGlhc10gPSB1c2VTdGF0ZTxzdHJpbmc+KFwiXCIpXHJcbiAgICBjb25zdCBbY29udGFjdCwgc2V0Q29udGFjdF0gPSB1c2VTdGF0ZTxzdHJpbmc+KFwiXCIpXHJcbiAgICBjb25zdCBbc2VydmljZSwgc2V0U2VyaXZjZV0gPSB1c2VTdGF0ZTxzdHJpbmc+KFwiXCIpXHJcbiAgICBjb25zdCBbcHJpY2UsIHNldFByaWNlXSA9IHVzZVN0YXRlPHN0cmluZz4oXCJcIilcclxuICAgIGNvbnN0IFtpc1NhdmVFcnJvciwgc2V0SVNTYXZlRXJyb3JdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG5cclxuICAgIGNvbnN0IGhhbmRsZVNlcnZpY2VDaGFuZ2UgPSAoZTogYW55KSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2coZSlcclxuXHJcbiAgICAgICAgY29uc3QgZWxlbWVudCA9IHNlcnZpY2VEYXRhPy5kYXRhLmZpbmQoaXRlbSA9PiBpdGVtLm5hbWUgPT0gZS50YXJnZXQudmFsdWUpIVxyXG5cclxuICAgICAgICBzZXRTZXJpdmNlKGVsZW1lbnQ/Lm5hbWUpXHJcbiAgICAgICAgc2V0UHJpY2UoZWxlbWVudD8ucHJpY2UpXHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgaGFuZGxlQ2xpZW50Q2hhbmdlID0gKGU6IGFueSkgPT4ge1xyXG4gICAgICAgIGNvbnN0IGVsZW1lbnQgPSBjbGllbnREYXRhPy5kYXRhLmZpbmQoaXRlbSA9PiBpdGVtLmFsaWFzID09IGUudGFyZ2V0LnZhbHVlKSFcclxuXHJcbiAgICAgICAgc2V0QWxpYXMoZWxlbWVudD8uYWxpYXMpXHJcbiAgICAgICAgc2V0Q29udGFjdChlbGVtZW50Py5jb250YWN0KVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHJlc2V0ID0gKCk6IHZvaWQgPT4ge1xyXG4gICAgICAgIGhhbmRsZUNoYW5nZSh7XHJcbiAgICAgICAgICAgIGFsaWFzOiBcIlwiLFxyXG4gICAgICAgICAgICBjb250YWN0OiBcIlwiLFxyXG4gICAgICAgICAgICBzZXJ2aWNlOiBcIlwiLFxyXG4gICAgICAgICAgICBwcmljZTogcHJpY2VcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHNhdmUgPSBhc3luYyAoKSA9PiB7XHJcbiAgICAgICAgc2V0SVNTYXZlRXJyb3IoZmFsc2UpXHJcblxyXG4gICAgICAgIGhhbmRsZUNoYW5nZSh7XHJcbiAgICAgICAgICAgIGFsaWFzOiBhbGlhcyxcclxuICAgICAgICAgICAgY29udGFjdDogY29udGFjdCxcclxuICAgICAgICAgICAgc2VydmljZTogc2VydmljZSxcclxuICAgICAgICAgICAgcHJpY2U6IHByaWNlXHJcbiAgICAgICAgfSlcclxuXHJcbiAgICAgICAgaWYgKHNlcnZpY2UgIT0gXCJcIikge1xyXG4gICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgYXdhaXQgU2VydmljZVNlcnZpY2UuY3JlYXRlKHtuYW1lOiBzZXJ2aWNlLCBwcmljZTogcHJpY2V9KTtcclxuICAgICAgICAgICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICAgICAgICAgICAgc2V0SVNTYXZlRXJyb3IodHJ1ZSlcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoYWxpYXMgIT0gXCJcIikge1xyXG4gICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgYXdhaXQgQ2xpZW50U2VydmljZS5jcmVhdGUoe2FsaWFzOiBhbGlhcywgY29udGFjdDogY29udGFjdH0pO1xyXG4gICAgICAgICAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgICAgICAgICAgICBzZXRJU1NhdmVFcnJvcih0cnVlKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsLmNvbnRhaW5lcn0+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbC5jb250YWluZXJfX2l0ZW19PlxyXG4gICAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT17Y2wudGl0bGV9PtCS0YvQsdGA0LDRgtGMINGD0YHQu9GD0LPRgzwvaDM+XHJcbiAgICAgICAgICAgICAgICA8c2VsZWN0IG9uQ2hhbmdlPXtoYW5kbGVTZXJ2aWNlQ2hhbmdlfT5cclxuICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIGRpc2FibGVkIHNlbGVjdGVkPtCS0YvQsdGA0LDRgtGMINGD0YHQu9GD0LPRgzwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgIHtzZXJ2aWNlRGF0YSAmJiBzZXJ2aWNlRGF0YS5kYXRhLm1hcCgoZWw6IElTZXJ2aWNlKSA9PiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiBrZXk9e2VsLm5hbWV9IHZhbHVlPXtlbC5uYW1lfT57ZWwubmFtZX08L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgPC9zZWxlY3Q+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2wuY29udGFpbmVyX19pbnB1dHN9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCBjbGFzc05hbWU9e2NsLmlucHV0fSB0eXBlPVwidGV4dFwiIHZhbHVlPXtzZXJ2aWNlfSBvbkNoYW5nZT17ZSA9PiBzZXRTZXJpdmNlKGUudGFyZ2V0LnZhbHVlKX0vPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCBjbGFzc05hbWU9e2NsLmlucHV0fSB0eXBlPVwidGV4dFwiIHZhbHVlPXtwcmljZX0gb25DaGFuZ2U9e2UgPT4gc2V0UHJpY2UoZS50YXJnZXQudmFsdWUpfS8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbC5jb250YWluZXJfX2l0ZW19PlxyXG4gICAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT17Y2wudGl0bGV9PtCS0YvQsdGA0LDRgtGMINC60LvQuNC10L3RgtCwPC9oMz5cclxuICAgICAgICAgICAgICAgIDxzZWxlY3Qgb25DaGFuZ2U9e2hhbmRsZUNsaWVudENoYW5nZX0+XHJcbiAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiBkaXNhYmxlZCBzZWxlY3RlZD7QktGL0LHRgNCw0YLRjCDQutC70LjQtdC90YLQsDwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgIHtjbGllbnREYXRhICYmIGNsaWVudERhdGEuZGF0YS5tYXAoKGVsOiBJQ2xpZW50KSA9PiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiBrZXk9e2VsLmFsaWFzfSB2YWx1ZT17ZWwuYWxpYXN9PntlbC5hbGlhc308L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgPC9zZWxlY3Q+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2wuY29udGFpbmVyX19pbnB1dHN9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCBjbGFzc05hbWU9e2NsLmlucHV0fSB0eXBlPVwidGV4dFwiIHZhbHVlPXthbGlhc30gb25DaGFuZ2U9e2UgPT4gc2V0QWxpYXMoZS50YXJnZXQudmFsdWUpfS8+XHJcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IGNsYXNzTmFtZT17Y2wuaW5wdXR9IHR5cGU9XCJ0ZXh0XCIgdmFsdWU9e2NvbnRhY3R9IG9uQ2hhbmdlPXtlID0+IHNldENvbnRhY3QoZS50YXJnZXQudmFsdWUpfS8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPXtjbC5zYXZlX2J1dHRvbn0gb25DbGljaz17KCkgPT4gc2F2ZSgpfT57aXNTYXZlRXJyb3IgPyBcItCe0YjQuNCx0LrQsCDRgdC+0YXRgNCw0L3QtdC90LjRjyDQtNCw0L3QvdGL0YVcIiA6IFwi0JLRi9Cx0YDQsNGC0YxcIn08L2J1dHRvbj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgU2V0dGluZ3NCbG9jayJdLCJuYW1lcyI6WyJTZXJ2aWNlU2VydmljZSIsInVzZVF1ZXJ5IiwidXNlU3RhdGUiLCJDbGllbnRTZXJ2aWNlIiwiY2wiLCJTZXR0aW5nc0Jsb2NrIiwiaGFuZGxlQ2hhbmdlIiwiaXNMb2FkaW5nIiwiaXNTZXJ2aWNlTG9hZGluZyIsImlzRXJyb3IiLCJpc1NlcnZpY2VFcnJvciIsImRhdGEiLCJzZXJ2aWNlRGF0YSIsImdldEFsbCIsImlzQ2xpZW50TG9hZGluZyIsImlzQ2xpZW50RXJyb3IiLCJjbGllbnREYXRhIiwiYWxpYXMiLCJzZXRBbGlhcyIsImNvbnRhY3QiLCJzZXRDb250YWN0Iiwic2VydmljZSIsInNldFNlcml2Y2UiLCJwcmljZSIsInNldFByaWNlIiwiaXNTYXZlRXJyb3IiLCJzZXRJU1NhdmVFcnJvciIsImhhbmRsZVNlcnZpY2VDaGFuZ2UiLCJlIiwiY29uc29sZSIsImxvZyIsImVsZW1lbnQiLCJmaW5kIiwiaXRlbSIsIm5hbWUiLCJ0YXJnZXQiLCJ2YWx1ZSIsImhhbmRsZUNsaWVudENoYW5nZSIsInJlc2V0Iiwic2F2ZSIsImNyZWF0ZSIsImRpdiIsImNsYXNzTmFtZSIsImNvbnRhaW5lciIsImNvbnRhaW5lcl9faXRlbSIsImgzIiwidGl0bGUiLCJzZWxlY3QiLCJvbkNoYW5nZSIsIm9wdGlvbiIsImRpc2FibGVkIiwic2VsZWN0ZWQiLCJtYXAiLCJlbCIsImNvbnRhaW5lcl9faW5wdXRzIiwiaW5wdXQiLCJ0eXBlIiwiYnV0dG9uIiwic2F2ZV9idXR0b24iLCJvbkNsaWNrIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/screens/index/SettingsBlock/SettingsBlock.tsx\n"));

/***/ })

});