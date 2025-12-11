(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push(["chunks/[root-of-the-server]__22fb82ea._.js",
"[externals]/node:buffer [external] (node:buffer, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("node:buffer", () => require("node:buffer"));

module.exports = mod;
}),
"[externals]/node:async_hooks [external] (node:async_hooks, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("node:async_hooks", () => require("node:async_hooks"));

module.exports = mod;
}),
"[project]/messages/en.json (json)", ((__turbopack_context__) => {

__turbopack_context__.v(JSON.parse("{\"Dashboard\":{\"title\":\"Dashboard\",\"welcome\":\"Welcome back, {name}!\",\"overview\":\"Here's a quick overview of your health dashboard.\"},\"Header\":{\"dashboard\":\"Dashboard\",\"personal-history\":\"Personal History\",\"ai-help\":\"AI Symptom Checker\",\"doctors\":\"Find a Doctor\",\"pharmacy\":\"Pharmacy\",\"insurance\":\"Insurance\"},\"LanguageSwitcher\":{\"toggle\":\"Toggle language\",\"en\":\"English\",\"ta\":\"Tamil\"}}"));}),
"[project]/messages/ta.json (json)", ((__turbopack_context__) => {

__turbopack_context__.v(JSON.parse("{\"Dashboard\":{\"title\":\" டாஷ்போர்டு\",\"welcome\":\"மீண்டும் வருக, {name}!\",\"overview\":\"உங்கள் சுகாதார டாஷ்போர்டின் விரைவான கண்ணோட்டம் இங்கே.\"},\"Header\":{\"dashboard\":\"டாஷ்போர்டு\",\"personal-history\":\"தனிப்பட்ட வரலாறு\",\"ai-help\":\"AI அறிகுறி சரிபார்ப்பு\",\"doctors\":\"ஒரு மருத்துவரைக் கண்டுபிடி\",\"pharmacy\":\"மருந்தகம்\",\"insurance\":\"காப்பீடு\"},\"LanguageSwitcher\":{\"toggle\":\"மொழியை மாற்றவும்\",\"en\":\"ஆங்கிலம்\",\"ta\":\"தமிழ்\"}}"));}),
"[project]/i18n.ts [middleware-edge] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__,
    "defaultLocale",
    ()=>defaultLocale,
    "locales",
    ()=>locales
]);
(()=>{
    const e = new Error("Cannot find module 'next-intl/server'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$api$2f$navigation$2e$react$2d$server$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/next/dist/esm/api/navigation.react-server.js [middleware-edge] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$client$2f$components$2f$navigation$2e$react$2d$server$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/esm/client/components/navigation.react-server.js [middleware-edge] (ecmascript)");
;
;
const locales = [
    'en',
    'ta'
];
const defaultLocale = 'en';
const __TURBOPACK__default__export__ = getRequestConfig(async ({ locale })=>{
    // Validate that the incoming `locale` parameter is valid
    if (!locales.includes(locale)) (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$client$2f$components$2f$navigation$2e$react$2d$server$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["notFound"])();
    return {
        messages: (await __turbopack_context__.f({
            "./messages/en.json": {
                id: ()=>"[project]/messages/en.json (json)",
                module: ()=>Promise.resolve().then(()=>__turbopack_context__.i("[project]/messages/en.json (json)"))
            },
            "./messages/ta.json": {
                id: ()=>"[project]/messages/ta.json (json)",
                module: ()=>Promise.resolve().then(()=>__turbopack_context__.i("[project]/messages/ta.json (json)"))
            }
        }).import(`./messages/${locale}.json`)).default
    };
});
}),
"[project]/middleware.ts [middleware-edge] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "config",
    ()=>config,
    "default",
    ()=>__TURBOPACK__default__export__
]);
(()=>{
    const e = new Error("Cannot find module 'next-intl/middleware'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
var __TURBOPACK__imported__module__$5b$project$5d2f$i18n$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/i18n.ts [middleware-edge] (ecmascript)");
;
;
const __TURBOPACK__default__export__ = createMiddleware({
    locales: __TURBOPACK__imported__module__$5b$project$5d2f$i18n$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["locales"],
    defaultLocale: __TURBOPACK__imported__module__$5b$project$5d2f$i18n$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["defaultLocale"]
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

//# sourceMappingURL=%5Broot-of-the-server%5D__22fb82ea._.js.map