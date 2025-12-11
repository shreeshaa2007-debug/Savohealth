(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push(["chunks/[root-of-the-server]__4435c808._.js",
"[externals]/node:buffer [external] (node:buffer, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("node:buffer", () => require("node:buffer"));

module.exports = mod;
}),
"[externals]/node:async_hooks [external] (node:async_hooks, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("node:async_hooks", () => require("node:async_hooks"));

module.exports = mod;
}),
"[project]/src/navigation.ts [middleware-edge] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Link",
    ()=>Link,
    "getPathname",
    ()=>getPathname,
    "locales",
    ()=>locales,
    "pathnames",
    ()=>pathnames,
    "redirect",
    ()=>redirect,
    "usePathname",
    ()=>usePathname,
    "useRouter",
    ()=>useRouter
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$navigation$2f$react$2d$server$2f$createLocalizedPathnamesNavigation$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__$3c$export__default__as__createLocalizedPathnamesNavigation$3e$__ = __turbopack_context__.i("[project]/node_modules/next-intl/dist/esm/navigation/react-server/createLocalizedPathnamesNavigation.js [middleware-edge] (ecmascript) <export default as createLocalizedPathnamesNavigation>");
;
const locales = [
    'en',
    'ta'
];
const pathnames = {
    '/': '/',
    '/pathnames': {
        en: '/pathnames',
        ta: '/pfadnamen'
    }
};
const { Link, redirect, usePathname, useRouter, getPathname } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$navigation$2f$react$2d$server$2f$createLocalizedPathnamesNavigation$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__$3c$export__default__as__createLocalizedPathnamesNavigation$3e$__["createLocalizedPathnamesNavigation"])({
    locales,
    pathnames
});
}),
"[project]/src/middleware.ts [middleware-edge] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "config",
    ()=>config,
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$intl$2f$dist$2f$middleware$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next-intl/dist/middleware.js [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$navigation$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/navigation.ts [middleware-edge] (ecmascript)");
;
;
const __TURBOPACK__default__export__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$intl$2f$dist$2f$middleware$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["default"])({
    defaultLocale: 'en',
    locales: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$navigation$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["locales"],
    pathnames: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$navigation$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["pathnames"]
});
const config = {
    // Match only internationalized pathnames
    matcher: [
        '/',
        '/(ta|en)/:path*'
    ]
};
}),
]);

//# sourceMappingURL=%5Broot-of-the-server%5D__4435c808._.js.map