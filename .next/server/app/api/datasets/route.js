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
exports.id = "app/api/datasets/route";
exports.ids = ["app/api/datasets/route"];
exports.modules = {

/***/ "(rsc)/./app/api/datasets/route.ts":
/*!***********************************!*\
  !*** ./app/api/datasets/route.ts ***!
  \***********************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   DELETE: () => (/* binding */ DELETE),\n/* harmony export */   GET: () => (/* binding */ GET),\n/* harmony export */   POST: () => (/* binding */ POST),\n/* harmony export */   PUT: () => (/* binding */ PUT)\n/* harmony export */ });\n/* harmony import */ var next_server__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/server */ \"(rsc)/./node_modules/next/dist/api/server.js\");\n/* harmony import */ var _lib_prisma__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/lib/prisma */ \"(rsc)/./lib/prisma.ts\");\n/* harmony import */ var _prisma_client_runtime_library__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @prisma/client/runtime/library */ \"@prisma/client/runtime/library\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_prisma_client_runtime_library__WEBPACK_IMPORTED_MODULE_2__]);\n_prisma_client_runtime_library__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n\nasync function GET() {\n    // TODO: Implement actual dataset fetching logic\n    return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json([]);\n}\nasync function POST(request) {\n    try {\n        const data = await request.json();\n        const dataset = await _lib_prisma__WEBPACK_IMPORTED_MODULE_1__.prisma.dataset.create({\n            data: {\n                name: data.name,\n                description: data.description,\n                type: data.type,\n                format: data.format,\n                size: data.size,\n                path: data.path,\n                metadata: data.metadata || {}\n            }\n        });\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n            data: dataset\n        });\n    } catch (error) {\n        console.error('Error creating dataset:', error);\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n            error: 'Failed to create dataset'\n        }, {\n            status: 500\n        });\n    }\n}\nasync function PUT(request) {\n    try {\n        const data = await request.json();\n        const { id, ...updateData } = data;\n        if (!id) {\n            return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n                error: 'ID is required'\n            }, {\n                status: 400\n            });\n        }\n        const dataset = await _lib_prisma__WEBPACK_IMPORTED_MODULE_1__.prisma.dataset.update({\n            where: {\n                id\n            },\n            data: updateData\n        });\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json(dataset);\n    } catch (error) {\n        if (error instanceof _prisma_client_runtime_library__WEBPACK_IMPORTED_MODULE_2__.PrismaClientKnownRequestError && error.code === 'P2025') {\n            return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n                error: 'Dataset not found'\n            }, {\n                status: 404\n            });\n        }\n        console.error('Error updating dataset:', error);\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n            error: 'Failed to update dataset'\n        }, {\n            status: 500\n        });\n    }\n}\nasync function DELETE(request) {\n    try {\n        const { searchParams } = new URL(request.url);\n        const id = searchParams.get('id');\n        if (!id) {\n            return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n                error: 'ID is required'\n            }, {\n                status: 400\n            });\n        }\n        await _lib_prisma__WEBPACK_IMPORTED_MODULE_1__.prisma.dataset.delete({\n            where: {\n                id\n            }\n        });\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n            success: true\n        });\n    } catch (error) {\n        if (error instanceof _prisma_client_runtime_library__WEBPACK_IMPORTED_MODULE_2__.PrismaClientKnownRequestError && error.code === 'P2025') {\n            return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n                error: 'Dataset not found'\n            }, {\n                status: 404\n            });\n        }\n        console.error('Error deleting dataset:', error);\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n            error: 'Failed to delete dataset'\n        }, {\n            status: 500\n        });\n    }\n}\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFFRSxRQUFRO1lBQUk7UUFDekU7UUFDQUQsUUFBUUQsS0FBSyxDQUFDLDJCQUEyQkE7UUFDekMsT0FBT2pCLHFEQUFZQSxDQUFDSSxJQUFJLENBQUM7WUFBRWEsT0FBTztRQUEyQixHQUFHO1lBQUVFLFFBQVE7UUFBSTtJQUNoRjtBQUNGIiwic291cmNlcyI6WyIvVXNlcnMvcmVnYW4tbWFjL0Rvd25sb2Fkcy9NVUQvcHJvdG8tZmUvYXBwL2FwaS9kYXRhc2V0cy9yb3V0ZS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZXh0UmVzcG9uc2UgfSBmcm9tICduZXh0L3NlcnZlcidcbmltcG9ydCB0eXBlIHsgTmV4dFJlcXVlc3QgfSBmcm9tICduZXh0L3NlcnZlcidcbmltcG9ydCB7IHByaXNtYSB9IGZyb20gJ0AvbGliL3ByaXNtYSdcbmltcG9ydCB7IFByaXNtYUNsaWVudEtub3duUmVxdWVzdEVycm9yIH0gZnJvbSAnQHByaXNtYS9jbGllbnQvcnVudGltZS9saWJyYXJ5J1xuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gR0VUKCkge1xuICAvLyBUT0RPOiBJbXBsZW1lbnQgYWN0dWFsIGRhdGFzZXQgZmV0Y2hpbmcgbG9naWNcbiAgcmV0dXJuIE5leHRSZXNwb25zZS5qc29uKFtdKVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gUE9TVChyZXF1ZXN0OiBOZXh0UmVxdWVzdCkge1xuICB0cnkge1xuICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXF1ZXN0Lmpzb24oKVxuICAgIGNvbnN0IGRhdGFzZXQgPSBhd2FpdCBwcmlzbWEuZGF0YXNldC5jcmVhdGUoe1xuICAgICAgZGF0YToge1xuICAgICAgICBuYW1lOiBkYXRhLm5hbWUsXG4gICAgICAgIGRlc2NyaXB0aW9uOiBkYXRhLmRlc2NyaXB0aW9uLFxuICAgICAgICB0eXBlOiBkYXRhLnR5cGUsXG4gICAgICAgIGZvcm1hdDogZGF0YS5mb3JtYXQsXG4gICAgICAgIHNpemU6IGRhdGEuc2l6ZSxcbiAgICAgICAgcGF0aDogZGF0YS5wYXRoLFxuICAgICAgICBtZXRhZGF0YTogZGF0YS5tZXRhZGF0YSB8fCB7fVxuICAgICAgfVxuICAgIH0pXG4gICAgcmV0dXJuIE5leHRSZXNwb25zZS5qc29uKHsgZGF0YTogZGF0YXNldCB9KVxuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGNyZWF0aW5nIGRhdGFzZXQ6JywgZXJyb3IpXG4gICAgcmV0dXJuIE5leHRSZXNwb25zZS5qc29uKHsgZXJyb3I6ICdGYWlsZWQgdG8gY3JlYXRlIGRhdGFzZXQnIH0sIHsgc3RhdHVzOiA1MDAgfSlcbiAgfVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gUFVUKHJlcXVlc3Q6IE5leHRSZXF1ZXN0KSB7XG4gIHRyeSB7XG4gICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlcXVlc3QuanNvbigpXG4gICAgY29uc3QgeyBpZCwgLi4udXBkYXRlRGF0YSB9ID0gZGF0YVxuICAgIFxuICAgIGlmICghaWQpIHtcbiAgICAgIHJldHVybiBOZXh0UmVzcG9uc2UuanNvbih7IGVycm9yOiAnSUQgaXMgcmVxdWlyZWQnIH0sIHsgc3RhdHVzOiA0MDAgfSlcbiAgICB9XG4gICAgXG4gICAgY29uc3QgZGF0YXNldCA9IGF3YWl0IHByaXNtYS5kYXRhc2V0LnVwZGF0ZSh7XG4gICAgICB3aGVyZTogeyBpZCB9LFxuICAgICAgZGF0YTogdXBkYXRlRGF0YVxuICAgIH0pXG4gICAgcmV0dXJuIE5leHRSZXNwb25zZS5qc29uKGRhdGFzZXQpXG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgaWYgKGVycm9yIGluc3RhbmNlb2YgUHJpc21hQ2xpZW50S25vd25SZXF1ZXN0RXJyb3IgJiYgZXJyb3IuY29kZSA9PT0gJ1AyMDI1Jykge1xuICAgICAgcmV0dXJuIE5leHRSZXNwb25zZS5qc29uKHsgZXJyb3I6ICdEYXRhc2V0IG5vdCBmb3VuZCcgfSwgeyBzdGF0dXM6IDQwNCB9KVxuICAgIH1cbiAgICBjb25zb2xlLmVycm9yKCdFcnJvciB1cGRhdGluZyBkYXRhc2V0OicsIGVycm9yKVxuICAgIHJldHVybiBOZXh0UmVzcG9uc2UuanNvbih7IGVycm9yOiAnRmFpbGVkIHRvIHVwZGF0ZSBkYXRhc2V0JyB9LCB7IHN0YXR1czogNTAwIH0pXG4gIH1cbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIERFTEVURShyZXF1ZXN0OiBOZXh0UmVxdWVzdCkge1xuICB0cnkge1xuICAgIGNvbnN0IHsgc2VhcmNoUGFyYW1zIH0gPSBuZXcgVVJMKHJlcXVlc3QudXJsKVxuICAgIGNvbnN0IGlkID0gc2VhcmNoUGFyYW1zLmdldCgnaWQnKVxuICAgIFxuICAgIGlmICghaWQpIHtcbiAgICAgIHJldHVybiBOZXh0UmVzcG9uc2UuanNvbih7IGVycm9yOiAnSUQgaXMgcmVxdWlyZWQnIH0sIHsgc3RhdHVzOiA0MDAgfSlcbiAgICB9XG4gICAgXG4gICAgYXdhaXQgcHJpc21hLmRhdGFzZXQuZGVsZXRlKHtcbiAgICAgIHdoZXJlOiB7IGlkIH1cbiAgICB9KVxuICAgIHJldHVybiBOZXh0UmVzcG9uc2UuanNvbih7IHN1Y2Nlc3M6IHRydWUgfSlcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBpZiAoZXJyb3IgaW5zdGFuY2VvZiBQcmlzbWFDbGllbnRLbm93blJlcXVlc3RFcnJvciAmJiBlcnJvci5jb2RlID09PSAnUDIwMjUnKSB7XG4gICAgICByZXR1cm4gTmV4dFJlc3BvbnNlLmpzb24oeyBlcnJvcjogJ0RhdGFzZXQgbm90IGZvdW5kJyB9LCB7IHN0YXR1czogNDA0IH0pXG4gICAgfVxuICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGRlbGV0aW5nIGRhdGFzZXQ6JywgZXJyb3IpXG4gICAgcmV0dXJuIE5leHRSZXNwb25zZS5qc29uKHsgZXJyb3I6ICdGYWlsZWQgdG8gZGVsZXRlIGRhdGFzZXQnIH0sIHsgc3RhdHVzOiA1MDAgfSlcbiAgfVxufSAiXSwibmFtZXMiOlsiTmV4dFJlc3BvbnNlIiwicHJpc21hIiwiUHJpc21hQ2xpZW50S25vd25SZXF1ZXN0RXJyb3IiLCJHRVQiLCJqc29uIiwiUE9TVCIsInJlcXVlc3QiLCJkYXRhIiwiZGF0YXNldCIsImNyZWF0ZSIsIm5hbWUiLCJkZXNjcmlwdGlvbiIsInR5cGUiLCJmb3JtYXQiLCJzaXplIiwicGF0aCIsIm1ldGFkYXRhIiwiZXJyb3IiLCJjb25zb2xlIiwic3RhdHVzIiwiUFVUIiwiaWQiLCJ1cGRhdGVEYXRhIiwidXBkYXRlIiwid2hlcmUiLCJjb2RlIiwiREVMRVRFIiwic2VhcmNoUGFyYW1zIiwiVVJMIiwidXJsIiwiZ2V0IiwiZGVsZXRlIiwic3VjY2VzcyJdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./app/api/datasets/route.ts\n");

/***/ }),

/***/ "(rsc)/./lib/prisma.ts":
/*!***********************!*\
  !*** ./lib/prisma.ts ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   prisma: () => (/* binding */ prisma)\n/* harmony export */ });\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @prisma/client */ \"@prisma/client\");\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_prisma_client__WEBPACK_IMPORTED_MODULE_0__);\n\n// PrismaClient is attached to the `global` object in development to prevent\n// exhausting your database connection limit.\nconst globalForPrisma = global;\nconst prisma = globalForPrisma.prisma || new _prisma_client__WEBPACK_IMPORTED_MODULE_0__.PrismaClient({\n    log: [\n        'query'\n    ]\n});\nif (true) globalForPrisma.prisma = prisma;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9saWIvcHJpc21hLnRzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUE2QztBQUU3Qyw0RUFBNEU7QUFDNUUsNkNBQTZDO0FBQzdDLE1BQU1DLGtCQUFrQkM7QUFFakIsTUFBTUMsU0FDWEYsZ0JBQWdCRSxNQUFNLElBQ3RCLElBQUlILHdEQUFZQSxDQUFDO0lBQ2ZJLEtBQUs7UUFBQztLQUFRO0FBQ2hCLEdBQUU7QUFFSixJQUFJQyxJQUFxQyxFQUFFSixnQkFBZ0JFLE1BQU0sR0FBR0EiLCJzb3VyY2VzIjpbIi9Vc2Vycy9yZWdhbi1tYWMvRG93bmxvYWRzL01VRC9wcm90by1mZS9saWIvcHJpc21hLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFByaXNtYUNsaWVudCB9IGZyb20gJ0BwcmlzbWEvY2xpZW50J1xuXG4vLyBQcmlzbWFDbGllbnQgaXMgYXR0YWNoZWQgdG8gdGhlIGBnbG9iYWxgIG9iamVjdCBpbiBkZXZlbG9wbWVudCB0byBwcmV2ZW50XG4vLyBleGhhdXN0aW5nIHlvdXIgZGF0YWJhc2UgY29ubmVjdGlvbiBsaW1pdC5cbmNvbnN0IGdsb2JhbEZvclByaXNtYSA9IGdsb2JhbCBhcyB1bmtub3duIGFzIHsgcHJpc21hOiBQcmlzbWFDbGllbnQgfVxuXG5leHBvcnQgY29uc3QgcHJpc21hID1cbiAgZ2xvYmFsRm9yUHJpc21hLnByaXNtYSB8fFxuICBuZXcgUHJpc21hQ2xpZW50KHtcbiAgICBsb2c6IFsncXVlcnknXSxcbiAgfSlcblxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIGdsb2JhbEZvclByaXNtYS5wcmlzbWEgPSBwcmlzbWEgIl0sIm5hbWVzIjpbIlByaXNtYUNsaWVudCIsImdsb2JhbEZvclByaXNtYSIsImdsb2JhbCIsInByaXNtYSIsImxvZyIsInByb2Nlc3MiXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./lib/prisma.ts\n");

/***/ }),

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fdatasets%2Froute&page=%2Fapi%2Fdatasets%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fdatasets%2Froute.ts&appDir=%2FUsers%2Fregan-mac%2FDownloads%2FMUD%2Fproto-fe%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Fregan-mac%2FDownloads%2FMUD%2Fproto-fe&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fdatasets%2Froute&page=%2Fapi%2Fdatasets%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fdatasets%2Froute.ts&appDir=%2FUsers%2Fregan-mac%2FDownloads%2FMUD%2Fproto-fe%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Fregan-mac%2FDownloads%2FMUD%2Fproto-fe&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D! ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   patchFetch: () => (/* binding */ patchFetch),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   serverHooks: () => (/* binding */ serverHooks),\n/* harmony export */   workAsyncStorage: () => (/* binding */ workAsyncStorage),\n/* harmony export */   workUnitAsyncStorage: () => (/* binding */ workUnitAsyncStorage)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/route-modules/app-route/module.compiled */ \"(rsc)/./node_modules/next/dist/server/route-modules/app-route/module.compiled.js\");\n/* harmony import */ var next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/route-kind */ \"(rsc)/./node_modules/next/dist/server/route-kind.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/server/lib/patch-fetch */ \"(rsc)/./node_modules/next/dist/server/lib/patch-fetch.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _Users_regan_mac_Downloads_MUD_proto_fe_app_api_datasets_route_ts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/api/datasets/route.ts */ \"(rsc)/./app/api/datasets/route.ts\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_Users_regan_mac_Downloads_MUD_proto_fe_app_api_datasets_route_ts__WEBPACK_IMPORTED_MODULE_3__]);\n_Users_regan_mac_Downloads_MUD_proto_fe_app_api_datasets_route_ts__WEBPACK_IMPORTED_MODULE_3__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n\n\n// We inject the nextConfigOutput here so that we can use them in the route\n// module.\nconst nextConfigOutput = \"\"\nconst routeModule = new next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__.AppRouteRouteModule({\n    definition: {\n        kind: next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.APP_ROUTE,\n        page: \"/api/datasets/route\",\n        pathname: \"/api/datasets\",\n        filename: \"route\",\n        bundlePath: \"app/api/datasets/route\"\n    },\n    resolvedPagePath: \"/Users/regan-mac/Downloads/MUD/proto-fe/app/api/datasets/route.ts\",\n    nextConfigOutput,\n    userland: _Users_regan_mac_Downloads_MUD_proto_fe_app_api_datasets_route_ts__WEBPACK_IMPORTED_MODULE_3__\n});\n// Pull out the exports that we need to expose from the module. This should\n// be eliminated when we've moved the other routes to the new format. These\n// are used to hook into the route.\nconst { workAsyncStorage, workUnitAsyncStorage, serverHooks } = routeModule;\nfunction patchFetch() {\n    return (0,next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__.patchFetch)({\n        workAsyncStorage,\n        workUnitAsyncStorage\n    });\n}\n\n\n//# sourceMappingURL=app-route.js.map\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWFwcC1sb2FkZXIvaW5kZXguanM/bmFtZT1hcHAlMkZhcGklMkZkYXRhc2V0cyUyRnJvdXRlJnBhZ2U9JTJGYXBpJTJGZGF0YXNldHMlMkZyb3V0ZSZhcHBQYXRocz0mcGFnZVBhdGg9cHJpdmF0ZS1uZXh0LWFwcC1kaXIlMkZhcGklMkZkYXRhc2V0cyUyRnJvdXRlLnRzJmFwcERpcj0lMkZVc2VycyUyRnJlZ2FuLW1hYyUyRkRvd25sb2FkcyUyRk1VRCUyRnByb3RvLWZlJTJGYXBwJnBhZ2VFeHRlbnNpb25zPXRzeCZwYWdlRXh0ZW5zaW9ucz10cyZwYWdlRXh0ZW5zaW9ucz1qc3gmcGFnZUV4dGVuc2lvbnM9anMmcm9vdERpcj0lMkZVc2VycyUyRnJlZ2FuLW1hYyUyRkRvd25sb2FkcyUyRk1VRCUyRnByb3RvLWZlJmlzRGV2PXRydWUmdHNjb25maWdQYXRoPXRzY29uZmlnLmpzb24mYmFzZVBhdGg9JmFzc2V0UHJlZml4PSZuZXh0Q29uZmlnT3V0cHV0PSZwcmVmZXJyZWRSZWdpb249Jm1pZGRsZXdhcmVDb25maWc9ZTMwJTNEISIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUErRjtBQUN2QztBQUNxQjtBQUNpQjtBQUM5RjtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IseUdBQW1CO0FBQzNDO0FBQ0EsY0FBYyxrRUFBUztBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsWUFBWTtBQUNaLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQSxRQUFRLHNEQUFzRDtBQUM5RDtBQUNBLFdBQVcsNEVBQVc7QUFDdEI7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUMwRjs7QUFFMUYscUMiLCJzb3VyY2VzIjpbIiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBcHBSb3V0ZVJvdXRlTW9kdWxlIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvcm91dGUtbW9kdWxlcy9hcHAtcm91dGUvbW9kdWxlLmNvbXBpbGVkXCI7XG5pbXBvcnQgeyBSb3V0ZUtpbmQgfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9yb3V0ZS1raW5kXCI7XG5pbXBvcnQgeyBwYXRjaEZldGNoIGFzIF9wYXRjaEZldGNoIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvbGliL3BhdGNoLWZldGNoXCI7XG5pbXBvcnQgKiBhcyB1c2VybGFuZCBmcm9tIFwiL1VzZXJzL3JlZ2FuLW1hYy9Eb3dubG9hZHMvTVVEL3Byb3RvLWZlL2FwcC9hcGkvZGF0YXNldHMvcm91dGUudHNcIjtcbi8vIFdlIGluamVjdCB0aGUgbmV4dENvbmZpZ091dHB1dCBoZXJlIHNvIHRoYXQgd2UgY2FuIHVzZSB0aGVtIGluIHRoZSByb3V0ZVxuLy8gbW9kdWxlLlxuY29uc3QgbmV4dENvbmZpZ091dHB1dCA9IFwiXCJcbmNvbnN0IHJvdXRlTW9kdWxlID0gbmV3IEFwcFJvdXRlUm91dGVNb2R1bGUoe1xuICAgIGRlZmluaXRpb246IHtcbiAgICAgICAga2luZDogUm91dGVLaW5kLkFQUF9ST1VURSxcbiAgICAgICAgcGFnZTogXCIvYXBpL2RhdGFzZXRzL3JvdXRlXCIsXG4gICAgICAgIHBhdGhuYW1lOiBcIi9hcGkvZGF0YXNldHNcIixcbiAgICAgICAgZmlsZW5hbWU6IFwicm91dGVcIixcbiAgICAgICAgYnVuZGxlUGF0aDogXCJhcHAvYXBpL2RhdGFzZXRzL3JvdXRlXCJcbiAgICB9LFxuICAgIHJlc29sdmVkUGFnZVBhdGg6IFwiL1VzZXJzL3JlZ2FuLW1hYy9Eb3dubG9hZHMvTVVEL3Byb3RvLWZlL2FwcC9hcGkvZGF0YXNldHMvcm91dGUudHNcIixcbiAgICBuZXh0Q29uZmlnT3V0cHV0LFxuICAgIHVzZXJsYW5kXG59KTtcbi8vIFB1bGwgb3V0IHRoZSBleHBvcnRzIHRoYXQgd2UgbmVlZCB0byBleHBvc2UgZnJvbSB0aGUgbW9kdWxlLiBUaGlzIHNob3VsZFxuLy8gYmUgZWxpbWluYXRlZCB3aGVuIHdlJ3ZlIG1vdmVkIHRoZSBvdGhlciByb3V0ZXMgdG8gdGhlIG5ldyBmb3JtYXQuIFRoZXNlXG4vLyBhcmUgdXNlZCB0byBob29rIGludG8gdGhlIHJvdXRlLlxuY29uc3QgeyB3b3JrQXN5bmNTdG9yYWdlLCB3b3JrVW5pdEFzeW5jU3RvcmFnZSwgc2VydmVySG9va3MgfSA9IHJvdXRlTW9kdWxlO1xuZnVuY3Rpb24gcGF0Y2hGZXRjaCgpIHtcbiAgICByZXR1cm4gX3BhdGNoRmV0Y2goe1xuICAgICAgICB3b3JrQXN5bmNTdG9yYWdlLFxuICAgICAgICB3b3JrVW5pdEFzeW5jU3RvcmFnZVxuICAgIH0pO1xufVxuZXhwb3J0IHsgcm91dGVNb2R1bGUsIHdvcmtBc3luY1N0b3JhZ2UsIHdvcmtVbml0QXN5bmNTdG9yYWdlLCBzZXJ2ZXJIb29rcywgcGF0Y2hGZXRjaCwgIH07XG5cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWFwcC1yb3V0ZS5qcy5tYXAiXSwibmFtZXMiOltdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fdatasets%2Froute&page=%2Fapi%2Fdatasets%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fdatasets%2Froute.ts&appDir=%2FUsers%2Fregan-mac%2FDownloads%2FMUD%2Fproto-fe%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Fregan-mac%2FDownloads%2FMUD%2Fproto-fe&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!\n");

/***/ }),

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true!":
/*!******************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true! ***!
  \******************************************************************************************************/
/***/ (() => {



/***/ }),

/***/ "(ssr)/./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true!":
/*!******************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true! ***!
  \******************************************************************************************************/
/***/ (() => {



/***/ }),

/***/ "../app-render/after-task-async-storage.external":
/*!***********************************************************************************!*\
  !*** external "next/dist/server/app-render/after-task-async-storage.external.js" ***!
  \***********************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/app-render/after-task-async-storage.external.js");

/***/ }),

/***/ "../app-render/work-async-storage.external":
/*!*****************************************************************************!*\
  !*** external "next/dist/server/app-render/work-async-storage.external.js" ***!
  \*****************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/app-render/work-async-storage.external.js");

/***/ }),

/***/ "./work-unit-async-storage.external":
/*!**********************************************************************************!*\
  !*** external "next/dist/server/app-render/work-unit-async-storage.external.js" ***!
  \**********************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/app-render/work-unit-async-storage.external.js");

/***/ }),

/***/ "@prisma/client":
/*!*********************************!*\
  !*** external "@prisma/client" ***!
  \*********************************/
/***/ ((module) => {

"use strict";
module.exports = require("@prisma/client");

/***/ }),

/***/ "@prisma/client/runtime/library":
/*!*************************************************!*\
  !*** external "@prisma/client/runtime/library" ***!
  \*************************************************/
/***/ ((module) => {

"use strict";
module.exports = import("@prisma/client/runtime/library");;

/***/ }),

/***/ "next/dist/compiled/next-server/app-page.runtime.dev.js":
/*!*************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-page.runtime.dev.js" ***!
  \*************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/next-server/app-page.runtime.dev.js");

/***/ }),

/***/ "next/dist/compiled/next-server/app-route.runtime.dev.js":
/*!**************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-route.runtime.dev.js" ***!
  \**************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/next-server/app-route.runtime.dev.js");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next"], () => (__webpack_exec__("(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fdatasets%2Froute&page=%2Fapi%2Fdatasets%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fdatasets%2Froute.ts&appDir=%2FUsers%2Fregan-mac%2FDownloads%2FMUD%2Fproto-fe%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Fregan-mac%2FDownloads%2FMUD%2Fproto-fe&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!")));
module.exports = __webpack_exports__;

})();