(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 3844:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ private_next_pages_app_tsx__WEBPACK_IMPORTED_MODULE_0__.Z)
/* harmony export */ });
/* harmony import */ var private_next_pages_app_tsx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4178);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([private_next_pages_app_tsx__WEBPACK_IMPORTED_MODULE_0__]);
private_next_pages_app_tsx__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];

        // Next.js Route Loader
        
        
    
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 4178:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var assets_styles_globals_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8324);
/* harmony import */ var assets_styles_globals_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(assets_styles_globals_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _tanstack_react_query__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9752);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6022);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _store_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8227);
/* harmony import */ var redux_persist_integration_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1127);
/* harmony import */ var redux_persist_integration_react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(redux_persist_integration_react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _providers_auth_provider_AuthProvider__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(7646);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_tanstack_react_query__WEBPACK_IMPORTED_MODULE_2__, _store_store__WEBPACK_IMPORTED_MODULE_4__, _providers_auth_provider_AuthProvider__WEBPACK_IMPORTED_MODULE_6__]);
([_tanstack_react_query__WEBPACK_IMPORTED_MODULE_2__, _store_store__WEBPACK_IMPORTED_MODULE_4__, _providers_auth_provider_AuthProvider__WEBPACK_IMPORTED_MODULE_6__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);







const queryClient = new _tanstack_react_query__WEBPACK_IMPORTED_MODULE_2__.QueryClient({
    defaultOptions: {
        queries: {
            refetchOnWindowFocus: false
        }
    }
});
function App({ Component , pageProps  }) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_tanstack_react_query__WEBPACK_IMPORTED_MODULE_2__.QueryClientProvider, {
        client: queryClient,
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_redux__WEBPACK_IMPORTED_MODULE_3__.Provider, {
            store: _store_store__WEBPACK_IMPORTED_MODULE_4__/* .store */ .h,
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(redux_persist_integration_react__WEBPACK_IMPORTED_MODULE_5__.PersistGate, {
                loading: null,
                persistor: _store_store__WEBPACK_IMPORTED_MODULE_4__/* .persistor */ .D,
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_providers_auth_provider_AuthProvider__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                    Component: {
                        isOnlyUser: Component.isOnlyUser
                    },
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Component, {
                        ...pageProps
                    })
                })
            })
        })
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (App);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 7646:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5152);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _hooks_useAuth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6789);
/* harmony import */ var _hooks_useActions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(4236);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _services_auth_auth_helper__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(5455);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_hooks_useActions__WEBPACK_IMPORTED_MODULE_4__, _services_auth_auth_helper__WEBPACK_IMPORTED_MODULE_6__]);
([_hooks_useActions__WEBPACK_IMPORTED_MODULE_4__, _services_auth_auth_helper__WEBPACK_IMPORTED_MODULE_6__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);







const DynamicCheckRole = next_dynamic__WEBPACK_IMPORTED_MODULE_2___default()(()=>__webpack_require__.e(/* import() */ 503).then(__webpack_require__.bind(__webpack_require__, 9503)), {
    loadableGenerated: {
        modules: [
            "..\\src\\providers\\auth-provider\\AuthProvider.tsx -> " + "./CheckRole"
        ]
    }
});
const AuthProvider = ({ Component: { isOnlyUser  } , children  })=>{
    const { user  } = (0,_hooks_useAuth__WEBPACK_IMPORTED_MODULE_3__/* .useAuth */ .a)();
    const { checkAuth , logout  } = (0,_hooks_useActions__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z)();
    const { pathname  } = (0,next_router__WEBPACK_IMPORTED_MODULE_5__.useRouter)();
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        const accessToken = (0,_services_auth_auth_helper__WEBPACK_IMPORTED_MODULE_6__/* .getAccessToken */ .hP)();
        if (accessToken) checkAuth();
    }, []);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        const refreshToken = (0,_services_auth_auth_helper__WEBPACK_IMPORTED_MODULE_6__/* .getRefreshToken */ .YV)();
        if (!refreshToken && user) logout();
    }, [
        pathname
    ]);
    return isOnlyUser ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(DynamicCheckRole, {
        Component: {
            isOnlyUser
        },
        children: children
    }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: children
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AuthProvider);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 8227:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "D": () => (/* binding */ persistor),
/* harmony export */   "h": () => (/* binding */ store)
/* harmony export */ });
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5184);
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var redux_persist_lib_storage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8936);
/* harmony import */ var redux_persist_lib_storage__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(redux_persist_lib_storage__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var redux_persist__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4161);
/* harmony import */ var redux_persist__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(redux_persist__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _user_user_slice__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7695);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_user_user_slice__WEBPACK_IMPORTED_MODULE_3__]);
_user_user_slice__WEBPACK_IMPORTED_MODULE_3__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];




const persistConfig = {
    key: "project",
    storage: (redux_persist_lib_storage__WEBPACK_IMPORTED_MODULE_1___default()),
    whitelist: [
        ""
    ]
};
const rootReducer = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.combineReducers)({
    user: _user_user_slice__WEBPACK_IMPORTED_MODULE_3__/* .userSlice.reducer */ .s.reducer
});
const persistedReducer = (0,redux_persist__WEBPACK_IMPORTED_MODULE_2__.persistReducer)(persistConfig, rootReducer);
const store = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.configureStore)({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware)=>getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [
                    redux_persist__WEBPACK_IMPORTED_MODULE_2__.FLUSH,
                    redux_persist__WEBPACK_IMPORTED_MODULE_2__.REHYDRATE,
                    redux_persist__WEBPACK_IMPORTED_MODULE_2__.PAUSE,
                    redux_persist__WEBPACK_IMPORTED_MODULE_2__.PERSIST,
                    redux_persist__WEBPACK_IMPORTED_MODULE_2__.PURGE,
                    redux_persist__WEBPACK_IMPORTED_MODULE_2__.REGISTER
                ]
            }
        })
});
const persistor = (0,redux_persist__WEBPACK_IMPORTED_MODULE_2__.persistStore)(store);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 7695:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "s": () => (/* binding */ userSlice)
/* harmony export */ });
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5184);
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _user_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3100);
/* harmony import */ var _utils_local_storage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5349);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_user_actions__WEBPACK_IMPORTED_MODULE_1__]);
_user_actions__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];



const initialState = {
    user: (0,_utils_local_storage__WEBPACK_IMPORTED_MODULE_2__/* .getStorageLocal */ .L)("user"),
    isLoading: false
};
const userSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({
    name: "user",
    initialState,
    reducers: {},
    extraReducers: (builder)=>{
        builder.addCase(_user_actions__WEBPACK_IMPORTED_MODULE_1__.auth.pending, (state)=>{
            state.isLoading = true;
        });
        builder.addCase(_user_actions__WEBPACK_IMPORTED_MODULE_1__.auth.fulfilled, (state, { payload: data  })=>{
            state.isLoading = false;
            state.user = data.user;
        });
        builder.addCase(_user_actions__WEBPACK_IMPORTED_MODULE_1__.auth.rejected, (state)=>{
            state.isLoading = false;
            state.user = null;
        });
        builder.addCase(_user_actions__WEBPACK_IMPORTED_MODULE_1__.logout.fulfilled, (state)=>{
            state.isLoading = false;
            state.user = null;
        });
        builder.addCase(_user_actions__WEBPACK_IMPORTED_MODULE_1__.checkAuth.fulfilled, (state, { payload  })=>{
            state.user = payload.user;
        });
    }
});

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 5349:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "L": () => (/* binding */ getStorageLocal)
/* harmony export */ });
const getStorageLocal = (name)=>{
    if (typeof localStorage === "undefined") return null;
    const gettingItem = localStorage.getItem(name);
    return gettingItem ? JSON.parse(gettingItem) : null;
};


/***/ }),

/***/ 8324:
/***/ (() => {



/***/ }),

/***/ 5184:
/***/ ((module) => {

"use strict";
module.exports = require("@reduxjs/toolkit");

/***/ }),

/***/ 5832:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/loadable.js");

/***/ }),

/***/ 1853:
/***/ ((module) => {

"use strict";
module.exports = require("next/router");

/***/ }),

/***/ 6689:
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ 6022:
/***/ ((module) => {

"use strict";
module.exports = require("react-redux");

/***/ }),

/***/ 6695:
/***/ ((module) => {

"use strict";
module.exports = require("redux");

/***/ }),

/***/ 4161:
/***/ ((module) => {

"use strict";
module.exports = require("redux-persist");

/***/ }),

/***/ 1127:
/***/ ((module) => {

"use strict";
module.exports = require("redux-persist/integration/react");

/***/ }),

/***/ 8936:
/***/ ((module) => {

"use strict";
module.exports = require("redux-persist/lib/storage");

/***/ }),

/***/ 9752:
/***/ ((module) => {

"use strict";
module.exports = import("@tanstack/react-query");;

/***/ }),

/***/ 9648:
/***/ ((module) => {

"use strict";
module.exports = import("axios");;

/***/ }),

/***/ 9915:
/***/ ((module) => {

"use strict";
module.exports = import("js-cookie");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [893,152,463,843], () => (__webpack_exec__(3844)));
module.exports = __webpack_exports__;

})();