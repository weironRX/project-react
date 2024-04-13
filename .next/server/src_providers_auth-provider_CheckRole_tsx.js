"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "src_providers_auth-provider_CheckRole_tsx";
exports.ids = ["src_providers_auth-provider_CheckRole_tsx"];
exports.modules = {

/***/ "./src/providers/auth-provider/CheckRole.tsx":
/*!***************************************************!*\
  !*** ./src/providers/auth-provider/CheckRole.tsx ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _hooks_useAuth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/hooks/useAuth */ \"./src/hooks/useAuth.ts\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nconst CheckRole = ({ Component: { isOnlyUser  } , children  })=>{\n    const { user  } = (0,_hooks_useAuth__WEBPACK_IMPORTED_MODULE_1__.useAuth)();\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    if (user && isOnlyUser) return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: children\n    }, void 0, false);\n    router.pathname !== \"/auth\" && router.replace(\"/auth\");\n    return null;\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CheckRole);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcHJvdmlkZXJzL2F1dGgtcHJvdmlkZXIvQ2hlY2tSb2xlLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBRTBDO0FBQ0Y7QUFFeEMsTUFBTUUsWUFBNEQsQ0FBQyxFQUMvREMsV0FBVyxFQUNQQyxXQUFVLEVBQ2IsR0FBRUMsU0FBUSxFQUNkO0lBRUcsTUFBTSxFQUFDQyxLQUFJLEVBQUMsR0FBR04sdURBQU9BO0lBRXRCLE1BQU1PLFNBQVNOLHNEQUFTQTtJQUV4QixJQUFJSyxRQUFRRixZQUFZLHFCQUFPO2tCQUFHQzs7SUFFbENFLE9BQU9DLGFBQWEsV0FBV0QsT0FBT0UsUUFBUTtJQUM5QyxPQUFPO0FBc0JYO0FBRUEsaUVBQWVQLFNBQVNBLEVBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9hbWF6b24tZnJvbnRlbmQtdjEvLi9zcmMvcHJvdmlkZXJzL2F1dGgtcHJvdmlkZXIvQ2hlY2tSb2xlLnRzeD9kNWRiIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEZDLCBQcm9wc1dpdGhDaGlsZHJlbiB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBUeXBlQ29tcG9uZW50QXV0aEZpZWxkcyB9IGZyb20gXCIuL2F1dGgtcGFnZS50eXBlc1wiO1xyXG5pbXBvcnQgeyB1c2VBdXRoIH0gZnJvbSBcIkAvaG9va3MvdXNlQXV0aFwiO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuXHJcbmNvbnN0IENoZWNrUm9sZTogRkM8UHJvcHNXaXRoQ2hpbGRyZW48VHlwZUNvbXBvbmVudEF1dGhGaWVsZHM+PiA9ICh7XHJcbiAgICBDb21wb25lbnQ6IHtcclxuICAgICAgICBpc09ubHlVc2VyXHJcbiAgICB9LCBjaGlsZHJlblxyXG59KSA9PiB7XHJcblxyXG4gICAgY29uc3Qge3VzZXJ9ID0gdXNlQXV0aCgpXHJcblxyXG4gICAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKClcclxuXHJcbiAgICBpZiAodXNlciAmJiBpc09ubHlVc2VyKSByZXR1cm4gPD57Y2hpbGRyZW59PC8+XHJcblxyXG4gICAgcm91dGVyLnBhdGhuYW1lICE9PSBcIi9hdXRoXCIgJiYgcm91dGVyLnJlcGxhY2UoXCIvYXV0aFwiKVxyXG4gICAgcmV0dXJuIG51bGxcclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG4gICAgXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IENoZWNrUm9sZSJdLCJuYW1lcyI6WyJ1c2VBdXRoIiwidXNlUm91dGVyIiwiQ2hlY2tSb2xlIiwiQ29tcG9uZW50IiwiaXNPbmx5VXNlciIsImNoaWxkcmVuIiwidXNlciIsInJvdXRlciIsInBhdGhuYW1lIiwicmVwbGFjZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/providers/auth-provider/CheckRole.tsx\n");

/***/ })

};
;