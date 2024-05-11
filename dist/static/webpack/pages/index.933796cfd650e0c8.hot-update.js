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

/***/ "./src/components/screens/index/profile-redactor/ProfileRedactor.tsx":
/*!***************************************************************************!*\
  !*** ./src/components/screens/index/profile-redactor/ProfileRedactor.tsx ***!
  \***************************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _ProfileRedactor_module_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./ProfileRedactor.module.css */ \"./src/components/screens/index/profile-redactor/ProfileRedactor.module.css\");\n/* harmony import */ var _ProfileRedactor_module_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_ProfileRedactor_module_css__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _hooks_useProfile__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/hooks/useProfile */ \"./src/hooks/useProfile.ts\");\n/* harmony import */ var _ui_input_Field__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/ui/input/Field */ \"./src/components/ui/input/Field.tsx\");\n/* harmony import */ var _screens_auth_valid_email__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/screens/auth/valid-email */ \"./src/components/screens/auth/valid-email.ts\");\n/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-hook-form */ \"./node_modules/react-hook-form/dist/index.esm.mjs\");\n/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/services/user.service */ \"./src/services/user.service.ts\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\nconst ProfileRedactor = (param)=>{\n    let { isShow , setIsShow  } = param;\n    var _errors_login, _errors_name, _errors_password;\n    _s();\n    const [error, setError] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const handleClose = (e)=>{\n        setIsShow(false);\n    };\n    const { profile  } = (0,_hooks_useProfile__WEBPACK_IMPORTED_MODULE_2__.useProfile)();\n    console.log(profile);\n    const { register: formRegister , handleSubmit , formState: { errors  } , setValue , reset  } = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_6__.useForm)({\n        mode: \"onChange\"\n    });\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        if (!profile) return;\n        setValue(\"name\", profile.name);\n        setValue(\"login\", profile.login);\n    }, [\n        profile\n    ]);\n    const onSubmit = async (data)=>{\n        try {\n            await _services_user_service__WEBPACK_IMPORTED_MODULE_5__.UserService.updateProfile(data);\n        } catch (e) {\n            console.log(e.response.data);\n        }\n    };\n    const handleReset = ()=>{\n        reset();\n        if (!profile) return;\n        setValue(\"name\", profile.name);\n        setValue(\"login\", profile.login);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: isShow && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            onClick: handleClose,\n            className: (_ProfileRedactor_module_css__WEBPACK_IMPORTED_MODULE_7___default().redactor__wrapper),\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                onSubmit: handleSubmit(onSubmit),\n                onClick: (e)=>{\n                    e.stopPropagation();\n                },\n                className: (_ProfileRedactor_module_css__WEBPACK_IMPORTED_MODULE_7___default().redactor__body),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        children: \"Ваш профиль\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Dmitry\\\\job\\\\project-react\\\\src\\\\components\\\\screens\\\\index\\\\profile-redactor\\\\ProfileRedactor.tsx\",\n                        lineNumber: 69,\n                        columnNumber: 25\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ui_input_Field__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                        placeholder: \"Почта\",\n                        error: (_errors_login = errors.login) === null || _errors_login === void 0 ? void 0 : _errors_login.message,\n                        type: \"email\",\n                        ...formRegister(\"login\", {\n                            required: \"Введите почту\",\n                            pattern: {\n                                value: _screens_auth_valid_email__WEBPACK_IMPORTED_MODULE_4__.validEmail,\n                                message: \"Пожалуйста введите корректную почту\"\n                            }\n                        })\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Dmitry\\\\job\\\\project-react\\\\src\\\\components\\\\screens\\\\index\\\\profile-redactor\\\\ProfileRedactor.tsx\",\n                        lineNumber: 71,\n                        columnNumber: 25\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ui_input_Field__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                        placeholder: \"Имя\",\n                        error: (_errors_name = errors.name) === null || _errors_name === void 0 ? void 0 : _errors_name.message,\n                        type: \"text\",\n                        ...formRegister(\"name\", {\n                            required: \"Введите имя\"\n                        })\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Dmitry\\\\job\\\\project-react\\\\src\\\\components\\\\screens\\\\index\\\\profile-redactor\\\\ProfileRedactor.tsx\",\n                        lineNumber: 84,\n                        columnNumber: 25\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: (_ProfileRedactor_module_css__WEBPACK_IMPORTED_MODULE_7___default().password__assertion),\n                        children: \"Если вы хотите сменить пароль введите его в поле ниже\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Dmitry\\\\job\\\\project-react\\\\src\\\\components\\\\screens\\\\index\\\\profile-redactor\\\\ProfileRedactor.tsx\",\n                        lineNumber: 93,\n                        columnNumber: 25\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ui_input_Field__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                        placeholder: \"Новый пароль\",\n                        error: (_errors_password = errors.password) === null || _errors_password === void 0 ? void 0 : _errors_password.message,\n                        type: \"password\",\n                        ...formRegister(\"password\", {})\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Dmitry\\\\job\\\\project-react\\\\src\\\\components\\\\screens\\\\index\\\\profile-redactor\\\\ProfileRedactor.tsx\",\n                        lineNumber: 95,\n                        columnNumber: 25\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        type: \"submit\",\n                        children: \"Сохранить\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Dmitry\\\\job\\\\project-react\\\\src\\\\components\\\\screens\\\\index\\\\profile-redactor\\\\ProfileRedactor.tsx\",\n                        lineNumber: 102,\n                        columnNumber: 25\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        onClick: handleReset,\n                        children: \"Отмена\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Dmitry\\\\job\\\\project-react\\\\src\\\\components\\\\screens\\\\index\\\\profile-redactor\\\\ProfileRedactor.tsx\",\n                        lineNumber: 103,\n                        columnNumber: 25\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: error ? error : \"\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Dmitry\\\\job\\\\project-react\\\\src\\\\components\\\\screens\\\\index\\\\profile-redactor\\\\ProfileRedactor.tsx\",\n                        lineNumber: 105,\n                        columnNumber: 25\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\Dmitry\\\\job\\\\project-react\\\\src\\\\components\\\\screens\\\\index\\\\profile-redactor\\\\ProfileRedactor.tsx\",\n                lineNumber: 64,\n                columnNumber: 21\n            }, undefined)\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\Dmitry\\\\job\\\\project-react\\\\src\\\\components\\\\screens\\\\index\\\\profile-redactor\\\\ProfileRedactor.tsx\",\n            lineNumber: 60,\n            columnNumber: 17\n        }, undefined)\n    }, void 0, false);\n};\n_s(ProfileRedactor, \"JEajQ5mWFOhCOH4i3Mm67TrQbiQ=\", false, function() {\n    return [\n        _hooks_useProfile__WEBPACK_IMPORTED_MODULE_2__.useProfile,\n        react_hook_form__WEBPACK_IMPORTED_MODULE_6__.useForm\n    ];\n});\n_c = ProfileRedactor;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ProfileRedactor);\nvar _c;\n$RefreshReg$(_c, \"ProfileRedactor\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9zY3JlZW5zL2luZGV4L3Byb2ZpbGUtcmVkYWN0b3IvUHJvZmlsZVJlZGFjdG9yLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFnRTtBQUNuQjtBQUNFO0FBQ1g7QUFDbUI7QUFDQztBQUVIO0FBU3JELE1BQU1RLGtCQUF1QztRQUFDLEVBQUNDLE9BQU0sRUFBRUMsVUFBUyxFQUFDO1FBd0Q5QkMsZUFhQUEsY0FXQUE7O0lBOUUvQixNQUFNLENBQUNDLE9BQU9DLFNBQVMsR0FBR1osK0NBQVFBLENBQVU7SUFFNUMsTUFBTWEsY0FBYyxDQUFDQztRQUNqQkwsVUFBVTtJQUNkO0lBRUEsTUFBTSxFQUFFTSxRQUFPLEVBQUUsR0FBR2IsNkRBQVVBO0lBRTlCYyxRQUFRQyxJQUFJRjtJQUVaLE1BQU0sRUFBQ0csVUFBVUMsYUFBWSxFQUFFQyxhQUFZLEVBQUVDLFdBQVcsRUFBQ1gsT0FBTSxFQUFDLEdBQUVZLFNBQVEsRUFBRUMsTUFBSyxFQUFDLEdBQUdsQix3REFBT0EsQ0FBYztRQUN0R21CLE1BQU07SUFDVjtJQUVBekIsZ0RBQVNBLENBQUM7UUFDTixJQUFJLENBQUNnQixTQUFTO1FBRWRPLFNBQVMsUUFBUVAsUUFBUVU7UUFDekJILFNBQVMsU0FBU1AsUUFBUVc7SUFDOUIsR0FBRztRQUFDWDtLQUFRO0lBRVosTUFBTVksV0FBdUMsT0FBT0M7UUFDaEQsSUFBSTtZQUNBLE1BQU10Qiw2RUFBeUJ1QixDQUFDRDtRQUNwQyxFQUFFLE9BQU1kLEdBQVE7WUFDWkUsUUFBUUMsSUFBSUgsRUFBRWdCLFNBQVNGO1FBQzNCO0lBQ0o7SUFFQSxNQUFNRyxjQUFjO1FBQ2hCUjtRQUVBLElBQUksQ0FBQ1IsU0FBUztRQUVkTyxTQUFTLFFBQVFQLFFBQVFVO1FBQ3pCSCxTQUFTLFNBQVNQLFFBQVFXO0lBQzlCO0lBRUEscUJBQ0k7a0JBQ0tsQix3QkFDRyw4REFBQ3dCO1lBQ0dDLFNBQVNwQjtZQUNUcUIsV0FBV2pDLHNGQUFvQmtDO3NCQUUvQiw0RUFBQ0M7Z0JBQ0dULFVBQVVQLGFBQWFPO2dCQUN2Qk0sU0FBUyxDQUFDbkI7b0JBQVlBLEVBQUV1QjtnQkFBaUI7Z0JBQ3pDSCxXQUFXakMsbUZBQWlCcUM7O2tDQUU1Qiw4REFBQ0M7a0NBQUc7Ozs7OztrQ0FFSiw4REFBQ3BDLHVEQUFLQTt3QkFDRnFDLGFBQWE7d0JBQ2I3QixPQUFPRCxDQUFBQSxnQkFBQUEsT0FBT2dCLG1CQUFQaEIsMkJBQUFBLEtBQUFBLElBQUFBLGNBQWMrQjt3QkFDckJDLE1BQUs7d0JBQ0osR0FBR3ZCLGFBQWEsU0FBUzs0QkFDdEJ3QixVQUFVOzRCQUNWQyxTQUFTO2dDQUNMQyxPQUFPekMsaUVBQVVBO2dDQUNqQnFDLFNBQVM7NEJBQ2I7d0JBQ0osRUFBRTs7Ozs7O2tDQUdOLDhEQUFDdEMsdURBQUtBO3dCQUNGcUMsYUFBYTt3QkFDYjdCLE9BQU9ELENBQUFBLGVBQUFBLE9BQU9lLGtCQUFQZiwwQkFBQUEsS0FBQUEsSUFBQUEsYUFBYStCO3dCQUNwQkMsTUFBSzt3QkFDSixHQUFHdkIsYUFBYSxRQUFROzRCQUNyQndCLFVBQVU7d0JBQ2QsRUFBRTs7Ozs7O2tDQUdOLDhEQUFDRzt3QkFBRVosV0FBV2pDLHdGQUFzQjhDO2tDQUFFOzs7Ozs7a0NBRXRDLDhEQUFDNUMsdURBQUtBO3dCQUNGcUMsYUFBYTt3QkFDYjdCLE9BQU9ELENBQUFBLG1CQUFBQSxPQUFPc0Msc0JBQVB0Qyw4QkFBQUEsS0FBQUEsSUFBQUEsaUJBQWlCK0I7d0JBQ3hCQyxNQUFLO3dCQUNKLEdBQUd2QixhQUFhLFlBQVksQ0FBQyxFQUFFOzs7Ozs7a0NBR3BDLDhEQUFDOEI7d0JBQU9QLE1BQUs7a0NBQVM7Ozs7OztrQ0FDdEIsOERBQUNPO3dCQUFPaEIsU0FBU0Y7a0NBQWE7Ozs7OztrQ0FFOUIsOERBQUNlO2tDQUFHbkMsUUFBUUEsUUFBUTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBTTVDO0dBOUZNSjs7UUFRa0JMLHlEQUFVQTtRQUl1REcsb0RBQU9BOzs7S0FaMUZFO0FBZ0dOLCtEQUFlQSxlQUFlQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL3NjcmVlbnMvaW5kZXgvcHJvZmlsZS1yZWRhY3Rvci9Qcm9maWxlUmVkYWN0b3IudHN4P2VmODIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRkMsIHVzZUVmZmVjdCwgdXNlTWVtbywgdXNlUmVmLCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgY2wgZnJvbSBcIi4vUHJvZmlsZVJlZGFjdG9yLm1vZHVsZS5jc3NcIlxyXG5pbXBvcnQgeyB1c2VQcm9maWxlIH0gZnJvbSAnQC9ob29rcy91c2VQcm9maWxlJ1xyXG5pbXBvcnQgRmllbGQgZnJvbSAnQC91aS9pbnB1dC9GaWVsZCdcclxuaW1wb3J0IHsgdmFsaWRFbWFpbCB9IGZyb20gJ0Avc2NyZWVucy9hdXRoL3ZhbGlkLWVtYWlsJ1xyXG5pbXBvcnQgeyBTdWJtaXRIYW5kbGVyLCB1c2VGb3JtIH0gZnJvbSAncmVhY3QtaG9vay1mb3JtJ1xyXG5pbXBvcnQgeyBJVXBkYXRlVXNlciB9IGZyb20gJ0AvdHlwZXMvdXNlci5pbnRlcmZhY2UnXHJcbmltcG9ydCB7IFVzZXJTZXJ2aWNlIH0gZnJvbSAnQC9zZXJ2aWNlcy91c2VyLnNlcnZpY2UnXHJcbmltcG9ydCB7IGlzRXJyb3IgfSBmcm9tICdAdGFuc3RhY2svcmVhY3QtcXVlcnknXHJcblxyXG5pbnRlcmZhY2UgUHJvZmlsZVJlZGFjdG9yIHtcclxuICAgIGlzU2hvdzogYm9vbGVhbixcclxuICAgIHNldElzU2hvdzogRnVuY3Rpb24sXHJcbn1cclxuXHJcblxyXG5jb25zdCBQcm9maWxlUmVkYWN0b3I6IEZDPFByb2ZpbGVSZWRhY3Rvcj4gPSAoe2lzU2hvdywgc2V0SXNTaG93fSkgPT4ge1xyXG5cclxuICAgIGNvbnN0IFtlcnJvciwgc2V0RXJyb3JdID0gdXNlU3RhdGU8Ym9vbGVhbj4oZmFsc2UpXHJcblxyXG4gICAgY29uc3QgaGFuZGxlQ2xvc2UgPSAoZTogYW55KTogdm9pZCA9PiB7XHJcbiAgICAgICAgc2V0SXNTaG93KGZhbHNlKVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHsgcHJvZmlsZSB9ID0gdXNlUHJvZmlsZSgpXHJcblxyXG4gICAgY29uc29sZS5sb2cocHJvZmlsZSlcclxuXHJcbiAgICBjb25zdCB7cmVnaXN0ZXI6IGZvcm1SZWdpc3RlciwgaGFuZGxlU3VibWl0LCBmb3JtU3RhdGU6IHtlcnJvcnN9LCBzZXRWYWx1ZSwgcmVzZXR9ID0gdXNlRm9ybTxJVXBkYXRlVXNlcj4oe1xyXG4gICAgICAgIG1vZGU6IFwib25DaGFuZ2VcIixcclxuICAgIH0pXHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBpZiAoIXByb2ZpbGUpIHJldHVyblxyXG5cclxuICAgICAgICBzZXRWYWx1ZShcIm5hbWVcIiwgcHJvZmlsZS5uYW1lKVxyXG4gICAgICAgIHNldFZhbHVlKFwibG9naW5cIiwgcHJvZmlsZS5sb2dpbilcclxuICAgIH0sIFtwcm9maWxlXSk7XHJcblxyXG4gICAgY29uc3Qgb25TdWJtaXQ6IFN1Ym1pdEhhbmRsZXI8SVVwZGF0ZVVzZXI+ID0gYXN5bmMgKGRhdGE6IElVcGRhdGVVc2VyKSA9PiB7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgYXdhaXQgVXNlclNlcnZpY2UudXBkYXRlUHJvZmlsZShkYXRhKVxyXG4gICAgICAgIH0gY2F0Y2goZTogYW55KSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGUucmVzcG9uc2UuZGF0YSlcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgaGFuZGxlUmVzZXQgPSAoKTogdm9pZCA9PiB7XHJcbiAgICAgICAgcmVzZXQoKVxyXG5cclxuICAgICAgICBpZiAoIXByb2ZpbGUpIHJldHVyblxyXG5cclxuICAgICAgICBzZXRWYWx1ZShcIm5hbWVcIiwgcHJvZmlsZS5uYW1lKVxyXG4gICAgICAgIHNldFZhbHVlKFwibG9naW5cIiwgcHJvZmlsZS5sb2dpbilcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICAgIHtpc1Nob3cgJiZcclxuICAgICAgICAgICAgICAgIDxkaXYgXHJcbiAgICAgICAgICAgICAgICAgICAgb25DbGljaz17aGFuZGxlQ2xvc2V9XHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbC5yZWRhY3Rvcl9fd3JhcHBlcn1cclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICA8Zm9ybSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdChvblN1Ym1pdCl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eyhlOiBhbnkpID0+IHtlLnN0b3BQcm9wYWdhdGlvbigpfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbC5yZWRhY3Rvcl9fYm9keX1cclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxoMT7QktCw0Ygg0L/RgNC+0YTQuNC70Yw8L2gxPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEZpZWxkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj17XCLQn9C+0YfRgtCwXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlcnJvcj17ZXJyb3JzLmxvZ2luPy5tZXNzYWdlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cImVtYWlsXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsuLi5mb3JtUmVnaXN0ZXIoXCJsb2dpblwiLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWQ6IFwi0JLQstC10LTQuNGC0LUg0L/QvtGH0YLRg1wiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhdHRlcm46IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IHZhbGlkRW1haWwsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6IFwi0J/QvtC20LDQu9GD0LnRgdGC0LAg0LLQstC10LTQuNGC0LUg0LrQvtGA0YDQtdC60YLQvdGD0Y4g0L/QvtGH0YLRg1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8RmllbGRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPXtcItCY0LzRj1wifVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZXJyb3I9e2Vycm9ycy5uYW1lPy5tZXNzYWdlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgey4uLmZvcm1SZWdpc3RlcihcIm5hbWVcIiwge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkOiBcItCS0LLQtdC00LjRgtC1INC40LzRj1wiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9e2NsLnBhc3N3b3JkX19hc3NlcnRpb259PtCV0YHQu9C4INCy0Ysg0YXQvtGC0LjRgtC1INGB0LzQtdC90LjRgtGMINC/0LDRgNC+0LvRjCDQstCy0LXQtNC40YLQtSDQtdCz0L4g0LIg0L/QvtC70LUg0L3QuNC20LU8L3A+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8RmllbGRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPXtcItCd0L7QstGL0Lkg0L/QsNGA0L7Qu9GMXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlcnJvcj17ZXJyb3JzLnBhc3N3b3JkPy5tZXNzYWdlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInBhc3N3b3JkXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsuLi5mb3JtUmVnaXN0ZXIoXCJwYXNzd29yZFwiLCB7fSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9J3N1Ym1pdCc+0KHQvtGF0YDQsNC90LjRgtGMPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17aGFuZGxlUmVzZXR9PtCe0YLQvNC10L3QsDwvYnV0dG9uPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHA+e2Vycm9yID8gZXJyb3IgOiBcIlwifTwvcD5cclxuICAgICAgICAgICAgICAgICAgICA8L2Zvcm0+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIDwvPlxyXG4gICAgKVxyXG59XHJcbiBcclxuZXhwb3J0IGRlZmF1bHQgUHJvZmlsZVJlZGFjdG9yOyJdLCJuYW1lcyI6WyJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsImNsIiwidXNlUHJvZmlsZSIsIkZpZWxkIiwidmFsaWRFbWFpbCIsInVzZUZvcm0iLCJVc2VyU2VydmljZSIsIlByb2ZpbGVSZWRhY3RvciIsImlzU2hvdyIsInNldElzU2hvdyIsImVycm9ycyIsImVycm9yIiwic2V0RXJyb3IiLCJoYW5kbGVDbG9zZSIsImUiLCJwcm9maWxlIiwiY29uc29sZSIsImxvZyIsInJlZ2lzdGVyIiwiZm9ybVJlZ2lzdGVyIiwiaGFuZGxlU3VibWl0IiwiZm9ybVN0YXRlIiwic2V0VmFsdWUiLCJyZXNldCIsIm1vZGUiLCJuYW1lIiwibG9naW4iLCJvblN1Ym1pdCIsImRhdGEiLCJ1cGRhdGVQcm9maWxlIiwicmVzcG9uc2UiLCJoYW5kbGVSZXNldCIsImRpdiIsIm9uQ2xpY2siLCJjbGFzc05hbWUiLCJyZWRhY3Rvcl9fd3JhcHBlciIsImZvcm0iLCJzdG9wUHJvcGFnYXRpb24iLCJyZWRhY3Rvcl9fYm9keSIsImgxIiwicGxhY2Vob2xkZXIiLCJtZXNzYWdlIiwidHlwZSIsInJlcXVpcmVkIiwicGF0dGVybiIsInZhbHVlIiwicCIsInBhc3N3b3JkX19hc3NlcnRpb24iLCJwYXNzd29yZCIsImJ1dHRvbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/screens/index/profile-redactor/ProfileRedactor.tsx\n"));

/***/ })

});