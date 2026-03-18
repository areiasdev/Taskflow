(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/areiasdev/Taskflow/frontend/src/lib/api/client.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__,
    "getAccessToken",
    ()=>getAccessToken,
    "setAccessToken",
    ()=>setAccessToken
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$areiasdev$2f$Taskflow$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/areiasdev/Taskflow/frontend/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$areiasdev$2f$Taskflow$2f$frontend$2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/areiasdev/Taskflow/frontend/node_modules/axios/lib/axios.js [app-client] (ecmascript)");
;
const API_URL = ("TURBOPACK compile-time value", "http://localhost:5153") || "http://localhost:5153";
const apiClient = __TURBOPACK__imported__module__$5b$project$5d2f$areiasdev$2f$Taskflow$2f$frontend$2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].create({
    baseURL: API_URL,
    headers: {
        "Content-Type": "application/json"
    },
    withCredentials: true
});
// Access token em memória (mais seguro)
let accessToken = null;
const setAccessToken = (token)=>{
    accessToken = token;
};
const getAccessToken = ()=>accessToken;
// Request interceptor — injeta o token em cada pedido
apiClient.interceptors.request.use((config)=>{
    if (accessToken) {
        config.headers.Authorization = `Bearer ${accessToken}`;
    }
    return config;
});
// Response interceptor — refresh automático quando 401
apiClient.interceptors.response.use((response)=>response, async (error)=>{
    const originalRequest = error.config;
    if (error.response?.status === 401 && !originalRequest._retry) {
        originalRequest._retry = true;
        try {
            const refreshToken = localStorage.getItem("refreshToken");
            if (!refreshToken) throw new Error("No refresh token");
            const { data } = await __TURBOPACK__imported__module__$5b$project$5d2f$areiasdev$2f$Taskflow$2f$frontend$2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].post(`${API_URL}/api/Auth/refresh`, {
                refreshToken
            });
            setAccessToken(data.accessToken);
            localStorage.setItem("refreshToken", data.refreshToken);
            originalRequest.headers.Authorization = `Bearer ${data.accessToken}`;
            return apiClient(originalRequest);
        } catch  {
            setAccessToken(null);
            localStorage.removeItem("refreshToken");
            window.location.href = "/login";
        }
    }
    return Promise.reject(error);
});
const __TURBOPACK__default__export__ = apiClient;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/areiasdev/Taskflow/frontend/src/lib/auth/authContext.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AuthProvider",
    ()=>AuthProvider,
    "useAuth",
    ()=>useAuth
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$areiasdev$2f$Taskflow$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/areiasdev/Taskflow/frontend/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$areiasdev$2f$Taskflow$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/areiasdev/Taskflow/frontend/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$areiasdev$2f$Taskflow$2f$frontend$2f$src$2f$lib$2f$api$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/areiasdev/Taskflow/frontend/src/lib/api/client.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
"use client";
;
;
;
const AuthContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$areiasdev$2f$Taskflow$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])(null);
function AuthProvider({ children }) {
    _s();
    const [user, setUser] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$areiasdev$2f$Taskflow$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [isLoading, setIsLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$areiasdev$2f$Taskflow$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    // Tenta fazer refresh ao carregar a app
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$areiasdev$2f$Taskflow$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "AuthProvider.useEffect": ()=>{
            const initAuth = {
                "AuthProvider.useEffect.initAuth": async ()=>{
                    const refreshToken = localStorage.getItem("refreshToken");
                    if (!refreshToken) {
                        setIsLoading(false);
                        return;
                    }
                    try {
                        const { data } = await __TURBOPACK__imported__module__$5b$project$5d2f$areiasdev$2f$Taskflow$2f$frontend$2f$src$2f$lib$2f$api$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].post("/api/Auth/refresh", {
                            refreshToken
                        });
                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$areiasdev$2f$Taskflow$2f$frontend$2f$src$2f$lib$2f$api$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["setAccessToken"])(data.accessToken);
                        localStorage.setItem("refreshToken", data.refreshToken);
                        setUser(data.user);
                    } catch  {
                        localStorage.removeItem("refreshToken");
                    } finally{
                        setIsLoading(false);
                    }
                }
            }["AuthProvider.useEffect.initAuth"];
            initAuth();
        }
    }["AuthProvider.useEffect"], []);
    const login = async (email, password)=>{
        const { data } = await __TURBOPACK__imported__module__$5b$project$5d2f$areiasdev$2f$Taskflow$2f$frontend$2f$src$2f$lib$2f$api$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].post("/api/Auth/login", {
            email,
            password
        });
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$areiasdev$2f$Taskflow$2f$frontend$2f$src$2f$lib$2f$api$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["setAccessToken"])(data.accessToken);
        localStorage.setItem("refreshToken", data.refreshToken);
        setUser(data.user);
    };
    const register = async (fullName, email, password)=>{
        const { data } = await __TURBOPACK__imported__module__$5b$project$5d2f$areiasdev$2f$Taskflow$2f$frontend$2f$src$2f$lib$2f$api$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].post("/api/Auth/register", {
            fullName,
            email,
            password
        });
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$areiasdev$2f$Taskflow$2f$frontend$2f$src$2f$lib$2f$api$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["setAccessToken"])(data.accessToken);
        localStorage.setItem("refreshToken", data.refreshToken);
        setUser(data.user);
    };
    const logout = async ()=>{
        const refreshToken = localStorage.getItem("refreshToken");
        if (refreshToken) {
            await __TURBOPACK__imported__module__$5b$project$5d2f$areiasdev$2f$Taskflow$2f$frontend$2f$src$2f$lib$2f$api$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].post("/api/Auth/logout", {
                refreshToken
            });
        }
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$areiasdev$2f$Taskflow$2f$frontend$2f$src$2f$lib$2f$api$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["setAccessToken"])(null);
        localStorage.removeItem("refreshToken");
        setUser(null);
        window.location.href = "/login";
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$areiasdev$2f$Taskflow$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(AuthContext.Provider, {
        value: {
            user,
            isLoading,
            login,
            register,
            logout
        },
        children: children
    }, void 0, false, {
        fileName: "[project]/areiasdev/Taskflow/frontend/src/lib/auth/authContext.tsx",
        lineNumber: 86,
        columnNumber: 5
    }, this);
}
_s(AuthProvider, "YajQB7LURzRD+QP5gw0+K2TZIWA=");
_c = AuthProvider;
const useAuth = ()=>{
    _s1();
    const context = (0, __TURBOPACK__imported__module__$5b$project$5d2f$areiasdev$2f$Taskflow$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(AuthContext);
    if (!context) throw new Error("useAuth must be used within AuthProvider");
    return context;
};
_s1(useAuth, "b9L3QQ+jgeyIrH0NfHrJ8nn7VMU=");
var _c;
__turbopack_context__.k.register(_c, "AuthProvider");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/areiasdev/Taskflow/frontend/src/lib/theme/themeContext.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ThemeProvider",
    ()=>ThemeProvider,
    "useThemeContext",
    ()=>useThemeContext
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$areiasdev$2f$Taskflow$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/areiasdev/Taskflow/frontend/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$areiasdev$2f$Taskflow$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/areiasdev/Taskflow/frontend/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$areiasdev$2f$Taskflow$2f$frontend$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$styles$2f$createTheme$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__createTheme$3e$__ = __turbopack_context__.i("[project]/areiasdev/Taskflow/frontend/node_modules/@mui/material/esm/styles/createTheme.js [app-client] (ecmascript) <export default as createTheme>");
var __TURBOPACK__imported__module__$5b$project$5d2f$areiasdev$2f$Taskflow$2f$frontend$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$styles$2f$ThemeProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ThemeProvider$3e$__ = __turbopack_context__.i("[project]/areiasdev/Taskflow/frontend/node_modules/@mui/material/esm/styles/ThemeProvider.js [app-client] (ecmascript) <export default as ThemeProvider>");
var __TURBOPACK__imported__module__$5b$project$5d2f$areiasdev$2f$Taskflow$2f$frontend$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$CssBaseline$2f$CssBaseline$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CssBaseline$3e$__ = __turbopack_context__.i("[project]/areiasdev/Taskflow/frontend/node_modules/@mui/material/esm/CssBaseline/CssBaseline.js [app-client] (ecmascript) <export default as CssBaseline>");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
"use client";
;
;
const ThemeContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$areiasdev$2f$Taskflow$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])({
    toggleTheme: ()=>{},
    mode: "light"
});
function ThemeProvider({ children }) {
    _s();
    const [mode, setMode] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$areiasdev$2f$Taskflow$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("light");
    const toggleTheme = ()=>{
        setMode((prev)=>{
            const next = prev === "light" ? "dark" : "light";
            document.documentElement.classList.toggle("dark", next === "dark");
            return next;
        });
    };
    const theme = (0, __TURBOPACK__imported__module__$5b$project$5d2f$areiasdev$2f$Taskflow$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "ThemeProvider.useMemo[theme]": ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$areiasdev$2f$Taskflow$2f$frontend$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$styles$2f$createTheme$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__createTheme$3e$__["createTheme"])({
                palette: {
                    mode
                }
            })
    }["ThemeProvider.useMemo[theme]"], [
        mode
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$areiasdev$2f$Taskflow$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ThemeContext.Provider, {
        value: {
            toggleTheme,
            mode
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$areiasdev$2f$Taskflow$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$areiasdev$2f$Taskflow$2f$frontend$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$styles$2f$ThemeProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ThemeProvider$3e$__["ThemeProvider"], {
            theme: theme,
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$areiasdev$2f$Taskflow$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$areiasdev$2f$Taskflow$2f$frontend$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$CssBaseline$2f$CssBaseline$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CssBaseline$3e$__["CssBaseline"], {}, void 0, false, {
                    fileName: "[project]/areiasdev/Taskflow/frontend/src/lib/theme/themeContext.tsx",
                    lineNumber: 40,
                    columnNumber: 9
                }, this),
                children
            ]
        }, void 0, true, {
            fileName: "[project]/areiasdev/Taskflow/frontend/src/lib/theme/themeContext.tsx",
            lineNumber: 39,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/areiasdev/Taskflow/frontend/src/lib/theme/themeContext.tsx",
        lineNumber: 38,
        columnNumber: 5
    }, this);
}
_s(ThemeProvider, "cbR/ILtTcGQBxvCvj3m4ZPbHb9Q=");
_c = ThemeProvider;
const useThemeContext = ()=>{
    _s1();
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$areiasdev$2f$Taskflow$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(ThemeContext);
};
_s1(useThemeContext, "gDsCjeeItUuvgOWf1v4qoK9RF6k=");
var _c;
__turbopack_context__.k.register(_c, "ThemeProvider");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=areiasdev_Taskflow_frontend_src_lib_e47c1265._.js.map