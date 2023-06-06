"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/checkout";
exports.ids = ["pages/api/checkout"];
exports.modules = {

/***/ "stripe":
/*!*************************!*\
  !*** external "stripe" ***!
  \*************************/
/***/ ((module) => {

module.exports = import("stripe");;

/***/ }),

/***/ "(api)/./src/lib/stripe.ts":
/*!***************************!*\
  !*** ./src/lib/stripe.ts ***!
  \***************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"stripe\": () => (/* binding */ stripe)\n/* harmony export */ });\n/* harmony import */ var stripe__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! stripe */ \"stripe\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([stripe__WEBPACK_IMPORTED_MODULE_0__]);\nstripe__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\nconst stripe = new stripe__WEBPACK_IMPORTED_MODULE_0__[\"default\"](process.env.STRIPE_SECRET_KEY, {\n    apiVersion: \"2022-11-15\",\n    appInfo: {\n        name: \"Ignite Shop\"\n    }\n});\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9zcmMvbGliL3N0cmlwZS50cy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUE0QjtBQUVyQixNQUFNQyxTQUFTLElBQUlELDhDQUFNQSxDQUFDRSxRQUFRQyxHQUFHLENBQUNDLGlCQUFpQixFQUFHO0lBQzdEQyxZQUFZO0lBQ1pDLFNBQVM7UUFDTEMsTUFBTTtJQUNWO0FBQ0osR0FBRSIsInNvdXJjZXMiOlsid2VicGFjazovLzA0LWlnbml0ZS1zaG9wLy4vc3JjL2xpYi9zdHJpcGUudHM/Nzk4YSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgU3RyaXBlIGZyb20gXCJzdHJpcGVcIjtcblxuZXhwb3J0IGNvbnN0IHN0cmlwZSA9IG5ldyBTdHJpcGUocHJvY2Vzcy5lbnYuU1RSSVBFX1NFQ1JFVF9LRVkhLCB7XG4gICAgYXBpVmVyc2lvbjogJzIwMjItMTEtMTUnLFxuICAgIGFwcEluZm86IHtcbiAgICAgICAgbmFtZTogJ0lnbml0ZSBTaG9wJ1xuICAgIH1cbn0pIl0sIm5hbWVzIjpbIlN0cmlwZSIsInN0cmlwZSIsInByb2Nlc3MiLCJlbnYiLCJTVFJJUEVfU0VDUkVUX0tFWSIsImFwaVZlcnNpb24iLCJhcHBJbmZvIiwibmFtZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./src/lib/stripe.ts\n");

/***/ }),

/***/ "(api)/./src/pages/api/checkout.ts":
/*!***********************************!*\
  !*** ./src/pages/api/checkout.ts ***!
  \***********************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var _src_lib_stripe__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/src/lib/stripe */ \"(api)/./src/lib/stripe.ts\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_src_lib_stripe__WEBPACK_IMPORTED_MODULE_0__]);\n_src_lib_stripe__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\nasync function handler(req, res) {\n    const { priceId  } = req.body;\n    if (req.method !== \"POST\") {\n        return res.status(405).json({\n            error: \"Method not allowed\"\n        });\n    }\n    if (!priceId) {\n        return res.status(400).json({\n            error: \"Price not found.\"\n        });\n    }\n    const successUrl = `${process.env.NEXT_URL}/success?session_id={CHECKOUT_SESSION_ID}`;\n    const cancel_url = `${process.env.NEXT_URL}/`;\n    const checkoutSession = await _src_lib_stripe__WEBPACK_IMPORTED_MODULE_0__.stripe.checkout.sessions.create({\n        success_url: successUrl,\n        cancel_url: cancel_url,\n        mode: \"payment\",\n        line_items: [\n            {\n                price: priceId,\n                quantity: 1\n            }\n        ]\n    });\n    return res.status(201).json({\n        checkoutUrl: checkoutSession.url\n    });\n}\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9zcmMvcGFnZXMvYXBpL2NoZWNrb3V0LnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQTBDO0FBRzNCLGVBQWVDLFFBQVFDLEdBQW1CLEVBQUVDLEdBQW9CLEVBQUU7SUFDL0UsTUFBTSxFQUFFQyxRQUFPLEVBQUUsR0FBR0YsSUFBSUcsSUFBSTtJQUU1QixJQUFJSCxJQUFJSSxNQUFNLEtBQUssUUFBUTtRQUN6QixPQUFPSCxJQUFJSSxNQUFNLENBQUMsS0FBS0MsSUFBSSxDQUFDO1lBQUVDLE9BQU87UUFBcUI7SUFDNUQsQ0FBQztJQUVELElBQUksQ0FBQ0wsU0FBUztRQUNaLE9BQU9ELElBQUlJLE1BQU0sQ0FBQyxLQUFLQyxJQUFJLENBQUM7WUFDMUJDLE9BQU87UUFDVDtJQUNGLENBQUM7SUFFRCxNQUFNQyxhQUFhLENBQUMsRUFBRUMsUUFBUUMsR0FBRyxDQUFDQyxRQUFRLENBQUMseUNBQXlDLENBQUM7SUFDckYsTUFBTUMsYUFBYSxDQUFDLEVBQUVILFFBQVFDLEdBQUcsQ0FBQ0MsUUFBUSxDQUFDLENBQUMsQ0FBQztJQUU3QyxNQUFNRSxrQkFBa0IsTUFBTWYsNEVBQStCLENBQUM7UUFDNURtQixhQUFhVDtRQUNiSSxZQUFZQTtRQUNaTSxNQUFNO1FBQ05DLFlBQVk7WUFDVjtnQkFDRUMsT0FBT2xCO2dCQUNQbUIsVUFBVTtZQUNaO1NBQ0Q7SUFDSDtJQUVBLE9BQU9wQixJQUFJSSxNQUFNLENBQUMsS0FBS0MsSUFBSSxDQUFDO1FBQzFCZ0IsYUFBYVQsZ0JBQWdCVSxHQUFHO0lBQ2xDO0FBQ0YsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovLzA0LWlnbml0ZS1zaG9wLy4vc3JjL3BhZ2VzL2FwaS9jaGVja291dC50cz9mMTM0Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHN0cmlwZSB9IGZyb20gXCJAL3NyYy9saWIvc3RyaXBlXCI7XG5pbXBvcnQgeyBOZXh0QXBpUmVxdWVzdCwgTmV4dEFwaVJlc3BvbnNlIH0gZnJvbSBcIm5leHRcIjtcblxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24gaGFuZGxlcihyZXE6IE5leHRBcGlSZXF1ZXN0LCByZXM6IE5leHRBcGlSZXNwb25zZSkge1xuICBjb25zdCB7IHByaWNlSWQgfSA9IHJlcS5ib2R5O1xuXG4gIGlmIChyZXEubWV0aG9kICE9PSAnUE9TVCcpIHtcbiAgICByZXR1cm4gcmVzLnN0YXR1cyg0MDUpLmpzb24oeyBlcnJvcjogJ01ldGhvZCBub3QgYWxsb3dlZCcgfSlcbiAgfVxuXG4gIGlmICghcHJpY2VJZCkge1xuICAgIHJldHVybiByZXMuc3RhdHVzKDQwMCkuanNvbih7XG4gICAgICBlcnJvcjogJ1ByaWNlIG5vdCBmb3VuZC4nXG4gICAgfSlcbiAgfVxuXG4gIGNvbnN0IHN1Y2Nlc3NVcmwgPSBgJHtwcm9jZXNzLmVudi5ORVhUX1VSTH0vc3VjY2Vzcz9zZXNzaW9uX2lkPXtDSEVDS09VVF9TRVNTSU9OX0lEfWBcbiAgY29uc3QgY2FuY2VsX3VybCA9IGAke3Byb2Nlc3MuZW52Lk5FWFRfVVJMfS9gXG5cbiAgY29uc3QgY2hlY2tvdXRTZXNzaW9uID0gYXdhaXQgc3RyaXBlLmNoZWNrb3V0LnNlc3Npb25zLmNyZWF0ZSh7XG4gICAgc3VjY2Vzc191cmw6IHN1Y2Nlc3NVcmwsXG4gICAgY2FuY2VsX3VybDogY2FuY2VsX3VybCxcbiAgICBtb2RlOiAncGF5bWVudCcsXG4gICAgbGluZV9pdGVtczogW1xuICAgICAge1xuICAgICAgICBwcmljZTogcHJpY2VJZCxcbiAgICAgICAgcXVhbnRpdHk6IDEsXG4gICAgICB9XG4gICAgXVxuICB9KVxuXG4gIHJldHVybiByZXMuc3RhdHVzKDIwMSkuanNvbih7XG4gICAgY2hlY2tvdXRVcmw6IGNoZWNrb3V0U2Vzc2lvbi51cmwsXG4gIH0pXG59ICJdLCJuYW1lcyI6WyJzdHJpcGUiLCJoYW5kbGVyIiwicmVxIiwicmVzIiwicHJpY2VJZCIsImJvZHkiLCJtZXRob2QiLCJzdGF0dXMiLCJqc29uIiwiZXJyb3IiLCJzdWNjZXNzVXJsIiwicHJvY2VzcyIsImVudiIsIk5FWFRfVVJMIiwiY2FuY2VsX3VybCIsImNoZWNrb3V0U2Vzc2lvbiIsImNoZWNrb3V0Iiwic2Vzc2lvbnMiLCJjcmVhdGUiLCJzdWNjZXNzX3VybCIsIm1vZGUiLCJsaW5lX2l0ZW1zIiwicHJpY2UiLCJxdWFudGl0eSIsImNoZWNrb3V0VXJsIiwidXJsIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./src/pages/api/checkout.ts\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./src/pages/api/checkout.ts"));
module.exports = __webpack_exports__;

})();