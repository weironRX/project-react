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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _ProfileRedactor_module_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ProfileRedactor.module.css */ \"./src/components/screens/index/profile-redactor/ProfileRedactor.module.css\");\n/* harmony import */ var _ProfileRedactor_module_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_ProfileRedactor_module_css__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _hooks_useProfile__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/hooks/useProfile */ \"./src/hooks/useProfile.ts\");\n/* harmony import */ var _ui_input_Field__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/ui/input/Field */ \"./src/components/ui/input/Field.tsx\");\n/* harmony import */ var _screens_auth_valid_email__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/screens/auth/valid-email */ \"./src/components/screens/auth/valid-email.ts\");\n/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-hook-form */ \"./node_modules/react-hook-form/dist/index.esm.mjs\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nconst ProfileRedactor = (param)=>{\n    let { isShow , setIsShow  } = param;\n    var _errors_login, _errors_name;\n    _s();\n    const handleClose = (e)=>{\n        setIsShow(false);\n    };\n    const { register: formRegister , handleSubmit , formState: { errors  } , reset  } = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_4__.useForm)({\n        mode: \"onChange\"\n    });\n    const { profile  } = (0,_hooks_useProfile__WEBPACK_IMPORTED_MODULE_1__.useProfile)();\n    console.log(profile);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: isShow && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            onClick: handleClose,\n            className: (_ProfileRedactor_module_css__WEBPACK_IMPORTED_MODULE_5___default().redactor__wrapper),\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                onClick: (e)=>{\n                    e.stopPropagation();\n                },\n                className: (_ProfileRedactor_module_css__WEBPACK_IMPORTED_MODULE_5___default().redactor__body),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ui_input_Field__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                        placeholder: \"Почта\",\n                        error: (_errors_login = errors.login) === null || _errors_login === void 0 ? void 0 : _errors_login.message,\n                        type: \"email\",\n                        ...formRegister(\"login\", {\n                            required: \"Введите почту\",\n                            pattern: {\n                                value: _screens_auth_valid_email__WEBPACK_IMPORTED_MODULE_3__.validEmail,\n                                message: \"Пожалуйста введите корректную почту\"\n                            }\n                        })\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Dmitry\\\\job\\\\project-react\\\\src\\\\components\\\\screens\\\\index\\\\profile-redactor\\\\ProfileRedactor.tsx\",\n                        lineNumber: 40,\n                        columnNumber: 25\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ui_input_Field__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                        placeholder: \"Имя\",\n                        error: (_errors_name = errors.name) === null || _errors_name === void 0 ? void 0 : _errors_name.message,\n                        type: \"text\",\n                        ...formRegister(\"name\", {\n                            required: \"Введите имя\",\n                            pattern: {\n                                value: _screens_auth_valid_email__WEBPACK_IMPORTED_MODULE_3__.validEmail,\n                                message: \"Пожалуйста введите имя\"\n                            }\n                        })\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Dmitry\\\\job\\\\project-react\\\\src\\\\components\\\\screens\\\\index\\\\profile-redactor\\\\ProfileRedactor.tsx\",\n                        lineNumber: 53,\n                        columnNumber: 25\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\Dmitry\\\\job\\\\project-react\\\\src\\\\components\\\\screens\\\\index\\\\profile-redactor\\\\ProfileRedactor.tsx\",\n                lineNumber: 36,\n                columnNumber: 21\n            }, undefined)\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\Dmitry\\\\job\\\\project-react\\\\src\\\\components\\\\screens\\\\index\\\\profile-redactor\\\\ProfileRedactor.tsx\",\n            lineNumber: 32,\n            columnNumber: 17\n        }, undefined)\n    }, void 0, false);\n};\n_s(ProfileRedactor, \"KCWVC2Itq3iYAZ1EhWt5wS8KXB0=\", false, function() {\n    return [\n        react_hook_form__WEBPACK_IMPORTED_MODULE_4__.useForm,\n        _hooks_useProfile__WEBPACK_IMPORTED_MODULE_1__.useProfile\n    ];\n});\n_c = ProfileRedactor;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ProfileRedactor);\nvar _c;\n$RefreshReg$(_c, \"ProfileRedactor\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9zY3JlZW5zL2luZGV4L3Byb2ZpbGUtcmVkYWN0b3IvUHJvZmlsZVJlZGFjdG9yLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUM2QztBQUNFO0FBQ1g7QUFDbUI7QUFDZDtBQVN6QyxNQUFNSyxrQkFBdUM7UUFBQyxFQUFDQyxPQUFNLEVBQUVDLFVBQVMsRUFBQztRQTJCOUJDLGVBYUFBOztJQXRDL0IsTUFBTUMsY0FBYyxDQUFDQztRQUNqQkgsVUFBVTtJQUNkO0lBRUEsTUFBTSxFQUFDSSxVQUFVQyxhQUFZLEVBQUVDLGFBQVksRUFBRUMsV0FBVyxFQUFDTixPQUFNLEVBQUMsR0FBRU8sTUFBSyxFQUFDLEdBQUdYLHdEQUFPQSxDQUFjO1FBQzVGWSxNQUFNO0lBQ1Y7SUFFQSxNQUFNLEVBQUVDLFFBQU8sRUFBRSxHQUFHaEIsNkRBQVVBO0lBRTlCaUIsUUFBUUMsSUFBSUY7SUFFWixxQkFDSTtrQkFDS1gsd0JBQ0csOERBQUNjO1lBQ0dDLFNBQVNaO1lBQ1RhLFdBQVd0QixzRkFBb0J1QjtzQkFFL0IsNEVBQUNDO2dCQUNHSCxTQUFTLENBQUNYO29CQUFZQSxFQUFFZTtnQkFBaUI7Z0JBQ3pDSCxXQUFXdEIsbUZBQWlCMEI7O2tDQUU1Qiw4REFBQ3hCLHVEQUFLQTt3QkFDRnlCLGFBQWE7d0JBQ2JDLE9BQU9wQixDQUFBQSxnQkFBQUEsT0FBT3FCLG1CQUFQckIsMkJBQUFBLEtBQUFBLElBQUFBLGNBQWNzQjt3QkFDckJDLE1BQUs7d0JBQ0osR0FBR25CLGFBQWEsU0FBUzs0QkFDdEJvQixVQUFVOzRCQUNWQyxTQUFTO2dDQUNMQyxPQUFPL0IsaUVBQVVBO2dDQUNqQjJCLFNBQVM7NEJBQ2I7d0JBQ0osRUFBRTs7Ozs7O2tDQUdOLDhEQUFDNUIsdURBQUtBO3dCQUNGeUIsYUFBYTt3QkFDYkMsT0FBT3BCLENBQUFBLGVBQUFBLE9BQU8yQixrQkFBUDNCLDBCQUFBQSxLQUFBQSxJQUFBQSxhQUFhc0I7d0JBQ3BCQyxNQUFLO3dCQUNKLEdBQUduQixhQUFhLFFBQVE7NEJBQ3JCb0IsVUFBVTs0QkFDVkMsU0FBUztnQ0FDTEMsT0FBTy9CLGlFQUFVQTtnQ0FDakIyQixTQUFTOzRCQUNiO3dCQUNKLEVBQUU7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQU85QjtHQXZETXpCOztRQU15RUQsb0RBQU9BO1FBSTlESCx5REFBVUE7OztLQVY1Qkk7QUF5RE4sK0RBQWVBLGVBQWVBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvc2NyZWVucy9pbmRleC9wcm9maWxlLXJlZGFjdG9yL1Byb2ZpbGVSZWRhY3Rvci50c3g/ZWY4MiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBGQywgdXNlRWZmZWN0LCB1c2VNZW1vLCB1c2VSZWYsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCBjbCBmcm9tIFwiLi9Qcm9maWxlUmVkYWN0b3IubW9kdWxlLmNzc1wiXHJcbmltcG9ydCB7IHVzZVByb2ZpbGUgfSBmcm9tICdAL2hvb2tzL3VzZVByb2ZpbGUnXHJcbmltcG9ydCBGaWVsZCBmcm9tICdAL3VpL2lucHV0L0ZpZWxkJ1xyXG5pbXBvcnQgeyB2YWxpZEVtYWlsIH0gZnJvbSAnQC9zY3JlZW5zL2F1dGgvdmFsaWQtZW1haWwnXHJcbmltcG9ydCB7IHVzZUZvcm0gfSBmcm9tICdyZWFjdC1ob29rLWZvcm0nXHJcbmltcG9ydCB7IElVcGRhdGVVc2VyIH0gZnJvbSAnQC90eXBlcy91c2VyLmludGVyZmFjZSdcclxuXHJcbmludGVyZmFjZSBQcm9maWxlUmVkYWN0b3Ige1xyXG4gICAgaXNTaG93OiBib29sZWFuLFxyXG4gICAgc2V0SXNTaG93OiBGdW5jdGlvbixcclxufVxyXG5cclxuXHJcbmNvbnN0IFByb2ZpbGVSZWRhY3RvcjogRkM8UHJvZmlsZVJlZGFjdG9yPiA9ICh7aXNTaG93LCBzZXRJc1Nob3d9KSA9PiB7XHJcblxyXG4gICAgY29uc3QgaGFuZGxlQ2xvc2UgPSAoZTogYW55KTogdm9pZCA9PiB7XHJcbiAgICAgICAgc2V0SXNTaG93KGZhbHNlKVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHtyZWdpc3RlcjogZm9ybVJlZ2lzdGVyLCBoYW5kbGVTdWJtaXQsIGZvcm1TdGF0ZToge2Vycm9yc30sIHJlc2V0fSA9IHVzZUZvcm08SVVwZGF0ZVVzZXI+KHtcclxuICAgICAgICBtb2RlOiBcIm9uQ2hhbmdlXCJcclxuICAgIH0pXHJcblxyXG4gICAgY29uc3QgeyBwcm9maWxlIH0gPSB1c2VQcm9maWxlKClcclxuXHJcbiAgICBjb25zb2xlLmxvZyhwcm9maWxlKVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgICAge2lzU2hvdyAmJlxyXG4gICAgICAgICAgICAgICAgPGRpdiBcclxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXtoYW5kbGVDbG9zZX1cclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsLnJlZGFjdG9yX193cmFwcGVyfVxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIDxmb3JtIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoZTogYW55KSA9PiB7ZS5zdG9wUHJvcGFnYXRpb24oKX19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2wucmVkYWN0b3JfX2JvZHl9XHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8RmllbGRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPXtcItCf0L7Rh9GC0LBcIn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVycm9yPXtlcnJvcnMubG9naW4/Lm1lc3NhZ2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwiZW1haWxcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgey4uLmZvcm1SZWdpc3RlcihcImxvZ2luXCIsIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXF1aXJlZDogXCLQktCy0LXQtNC40YLQtSDQv9C+0YfRgtGDXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGF0dGVybjoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogdmFsaWRFbWFpbCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTogXCLQn9C+0LbQsNC70YPQudGB0YLQsCDQstCy0LXQtNC40YLQtSDQutC+0YDRgNC10LrRgtC90YPRjiDQv9C+0YfRgtGDXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxGaWVsZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9e1wi0JjQvNGPXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlcnJvcj17ZXJyb3JzLm5hbWU/Lm1lc3NhZ2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Li4uZm9ybVJlZ2lzdGVyKFwibmFtZVwiLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWQ6IFwi0JLQstC10LTQuNGC0LUg0LjQvNGPXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGF0dGVybjoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogdmFsaWRFbWFpbCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTogXCLQn9C+0LbQsNC70YPQudGB0YLQsCDQstCy0LXQtNC40YLQtSDQuNC80Y9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L2Zvcm0+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIDwvPlxyXG4gICAgKVxyXG59XHJcbiBcclxuZXhwb3J0IGRlZmF1bHQgUHJvZmlsZVJlZGFjdG9yOyJdLCJuYW1lcyI6WyJjbCIsInVzZVByb2ZpbGUiLCJGaWVsZCIsInZhbGlkRW1haWwiLCJ1c2VGb3JtIiwiUHJvZmlsZVJlZGFjdG9yIiwiaXNTaG93Iiwic2V0SXNTaG93IiwiZXJyb3JzIiwiaGFuZGxlQ2xvc2UiLCJlIiwicmVnaXN0ZXIiLCJmb3JtUmVnaXN0ZXIiLCJoYW5kbGVTdWJtaXQiLCJmb3JtU3RhdGUiLCJyZXNldCIsIm1vZGUiLCJwcm9maWxlIiwiY29uc29sZSIsImxvZyIsImRpdiIsIm9uQ2xpY2siLCJjbGFzc05hbWUiLCJyZWRhY3Rvcl9fd3JhcHBlciIsImZvcm0iLCJzdG9wUHJvcGFnYXRpb24iLCJyZWRhY3Rvcl9fYm9keSIsInBsYWNlaG9sZGVyIiwiZXJyb3IiLCJsb2dpbiIsIm1lc3NhZ2UiLCJ0eXBlIiwicmVxdWlyZWQiLCJwYXR0ZXJuIiwidmFsdWUiLCJuYW1lIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/screens/index/profile-redactor/ProfileRedactor.tsx\n"));

/***/ })

});