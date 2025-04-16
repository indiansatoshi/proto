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
exports.id = "app/api/models/local/route";
exports.ids = ["app/api/models/local/route"];
exports.modules = {

/***/ "(rsc)/./app/api/models/local/route.ts":
/*!***************************************!*\
  !*** ./app/api/models/local/route.ts ***!
  \***************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   DELETE: () => (/* binding */ DELETE),\n/* harmony export */   GET: () => (/* binding */ GET),\n/* harmony export */   POST: () => (/* binding */ POST),\n/* harmony export */   PUT: () => (/* binding */ PUT)\n/* harmony export */ });\n/* harmony import */ var next_server__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/server */ \"(rsc)/./node_modules/next/dist/api/server.js\");\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @prisma/client */ \"@prisma/client\");\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_prisma_client__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _prisma_client_runtime_library__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @prisma/client/runtime/library */ \"@prisma/client/runtime/library\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_prisma_client_runtime_library__WEBPACK_IMPORTED_MODULE_2__]);\n_prisma_client_runtime_library__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n\n// Create a new PrismaClient instance for this route\nconst prisma = new _prisma_client__WEBPACK_IMPORTED_MODULE_1__.PrismaClient();\nasync function GET() {\n    try {\n        const models = await prisma.model.findMany({\n            where: {\n                provider: 'local'\n            }\n        });\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json(models);\n    } catch (error) {\n        console.error('Error fetching local models:', error);\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n            error: 'Failed to fetch models'\n        }, {\n            status: 500\n        });\n    }\n}\nasync function POST(request) {\n    try {\n        const data = await request.json();\n        const newModel = await prisma.model.create({\n            data: {\n                ...data,\n                provider: 'local'\n            }\n        });\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json(newModel);\n    } catch (error) {\n        console.error('Error creating local model:', error);\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n            error: 'Failed to create model'\n        }, {\n            status: 500\n        });\n    }\n}\nasync function PUT(request) {\n    try {\n        const data = await request.json();\n        const { id, ...updateData } = data;\n        const updatedModel = await prisma.model.update({\n            where: {\n                id\n            },\n            data: updateData\n        });\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json(updatedModel);\n    } catch (error) {\n        console.error('Error updating local model:', error);\n        if (error instanceof _prisma_client_runtime_library__WEBPACK_IMPORTED_MODULE_2__.PrismaClientKnownRequestError && error.code === 'P2025') {\n            return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n                error: 'Model not found'\n            }, {\n                status: 404\n            });\n        }\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n            error: 'Failed to update model'\n        }, {\n            status: 500\n        });\n    }\n}\nasync function DELETE(request) {\n    try {\n        const { searchParams } = new URL(request.url);\n        const id = searchParams.get('id');\n        if (!id) {\n            return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n                error: 'ID is required'\n            }, {\n                status: 400\n            });\n        }\n        await prisma.model.delete({\n            where: {\n                id\n            }\n        });\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n            success: true\n        });\n    } catch (error) {\n        console.error('Error deleting local model:', error);\n        if (error instanceof _prisma_client_runtime_library__WEBPACK_IMPORTED_MODULE_2__.PrismaClientKnownRequestError && error.code === 'P2025') {\n            return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n                error: 'Model not found'\n            }, {\n                status: 404\n            });\n        }\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n            error: 'Failed to delete model'\n        }, {\n            status: 500\n        });\n    }\n}\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFJO1FBQ3ZFO1FBQ0EsT0FBT2IscURBQVlBLENBQUNVLElBQUksQ0FBQztZQUFFQyxPQUFPO1FBQXlCLEdBQUc7WUFBRUUsUUFBUTtRQUFJO0lBQzlFO0FBQ0YiLCJzb3VyY2VzIjpbIi9Vc2Vycy9yZWdhbi1tYWMvRG93bmxvYWRzL01VRC9wcm90by1mZS9hcHAvYXBpL21vZGVscy9sb2NhbC9yb3V0ZS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZXh0UmVzcG9uc2UgfSBmcm9tICduZXh0L3NlcnZlcidcbmltcG9ydCB0eXBlIHsgTmV4dFJlcXVlc3QgfSBmcm9tICduZXh0L3NlcnZlcidcbmltcG9ydCB7IFByaXNtYUNsaWVudCB9IGZyb20gJ0BwcmlzbWEvY2xpZW50J1xuaW1wb3J0IHsgUHJpc21hQ2xpZW50S25vd25SZXF1ZXN0RXJyb3IgfSBmcm9tICdAcHJpc21hL2NsaWVudC9ydW50aW1lL2xpYnJhcnknXG5cbi8vIENyZWF0ZSBhIG5ldyBQcmlzbWFDbGllbnQgaW5zdGFuY2UgZm9yIHRoaXMgcm91dGVcbmNvbnN0IHByaXNtYSA9IG5ldyBQcmlzbWFDbGllbnQoKVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gR0VUKCkge1xuICB0cnkge1xuICAgIGNvbnN0IG1vZGVscyA9IGF3YWl0IHByaXNtYS5tb2RlbC5maW5kTWFueSh7XG4gICAgICB3aGVyZToge1xuICAgICAgICBwcm92aWRlcjogJ2xvY2FsJ1xuICAgICAgfVxuICAgIH0pXG4gICAgcmV0dXJuIE5leHRSZXNwb25zZS5qc29uKG1vZGVscylcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmVycm9yKCdFcnJvciBmZXRjaGluZyBsb2NhbCBtb2RlbHM6JywgZXJyb3IpXG4gICAgcmV0dXJuIE5leHRSZXNwb25zZS5qc29uKHsgZXJyb3I6ICdGYWlsZWQgdG8gZmV0Y2ggbW9kZWxzJyB9LCB7IHN0YXR1czogNTAwIH0pXG4gIH1cbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIFBPU1QocmVxdWVzdDogTmV4dFJlcXVlc3QpIHtcbiAgdHJ5IHtcbiAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVxdWVzdC5qc29uKClcbiAgICBjb25zdCBuZXdNb2RlbCA9IGF3YWl0IHByaXNtYS5tb2RlbC5jcmVhdGUoe1xuICAgICAgZGF0YToge1xuICAgICAgICAuLi5kYXRhLFxuICAgICAgICBwcm92aWRlcjogJ2xvY2FsJ1xuICAgICAgfVxuICAgIH0pXG4gICAgcmV0dXJuIE5leHRSZXNwb25zZS5qc29uKG5ld01vZGVsKVxuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGNyZWF0aW5nIGxvY2FsIG1vZGVsOicsIGVycm9yKVxuICAgIHJldHVybiBOZXh0UmVzcG9uc2UuanNvbih7IGVycm9yOiAnRmFpbGVkIHRvIGNyZWF0ZSBtb2RlbCcgfSwgeyBzdGF0dXM6IDUwMCB9KVxuICB9XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBQVVQocmVxdWVzdDogTmV4dFJlcXVlc3QpIHtcbiAgdHJ5IHtcbiAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVxdWVzdC5qc29uKClcbiAgICBjb25zdCB7IGlkLCAuLi51cGRhdGVEYXRhIH0gPSBkYXRhXG4gICAgXG4gICAgY29uc3QgdXBkYXRlZE1vZGVsID0gYXdhaXQgcHJpc21hLm1vZGVsLnVwZGF0ZSh7XG4gICAgICB3aGVyZTogeyBpZCB9LFxuICAgICAgZGF0YTogdXBkYXRlRGF0YVxuICAgIH0pXG4gICAgXG4gICAgcmV0dXJuIE5leHRSZXNwb25zZS5qc29uKHVwZGF0ZWRNb2RlbClcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmVycm9yKCdFcnJvciB1cGRhdGluZyBsb2NhbCBtb2RlbDonLCBlcnJvcilcbiAgICBpZiAoZXJyb3IgaW5zdGFuY2VvZiBQcmlzbWFDbGllbnRLbm93blJlcXVlc3RFcnJvciAmJiBlcnJvci5jb2RlID09PSAnUDIwMjUnKSB7XG4gICAgICByZXR1cm4gTmV4dFJlc3BvbnNlLmpzb24oeyBlcnJvcjogJ01vZGVsIG5vdCBmb3VuZCcgfSwgeyBzdGF0dXM6IDQwNCB9KVxuICAgIH1cbiAgICByZXR1cm4gTmV4dFJlc3BvbnNlLmpzb24oeyBlcnJvcjogJ0ZhaWxlZCB0byB1cGRhdGUgbW9kZWwnIH0sIHsgc3RhdHVzOiA1MDAgfSlcbiAgfVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gREVMRVRFKHJlcXVlc3Q6IE5leHRSZXF1ZXN0KSB7XG4gIHRyeSB7XG4gICAgY29uc3QgeyBzZWFyY2hQYXJhbXMgfSA9IG5ldyBVUkwocmVxdWVzdC51cmwpXG4gICAgY29uc3QgaWQgPSBzZWFyY2hQYXJhbXMuZ2V0KCdpZCcpXG4gICAgXG4gICAgaWYgKCFpZCkge1xuICAgICAgcmV0dXJuIE5leHRSZXNwb25zZS5qc29uKHsgZXJyb3I6ICdJRCBpcyByZXF1aXJlZCcgfSwgeyBzdGF0dXM6IDQwMCB9KVxuICAgIH1cblxuICAgIGF3YWl0IHByaXNtYS5tb2RlbC5kZWxldGUoe1xuICAgICAgd2hlcmU6IHsgaWQgfVxuICAgIH0pXG4gICAgXG4gICAgcmV0dXJuIE5leHRSZXNwb25zZS5qc29uKHsgc3VjY2VzczogdHJ1ZSB9KVxuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGRlbGV0aW5nIGxvY2FsIG1vZGVsOicsIGVycm9yKVxuICAgIGlmIChlcnJvciBpbnN0YW5jZW9mIFByaXNtYUNsaWVudEtub3duUmVxdWVzdEVycm9yICYmIGVycm9yLmNvZGUgPT09ICdQMjAyNScpIHtcbiAgICAgIHJldHVybiBOZXh0UmVzcG9uc2UuanNvbih7IGVycm9yOiAnTW9kZWwgbm90IGZvdW5kJyB9LCB7IHN0YXR1czogNDA0IH0pXG4gICAgfVxuICAgIHJldHVybiBOZXh0UmVzcG9uc2UuanNvbih7IGVycm9yOiAnRmFpbGVkIHRvIGRlbGV0ZSBtb2RlbCcgfSwgeyBzdGF0dXM6IDUwMCB9KVxuICB9XG59ICJdLCJuYW1lcyI6WyJOZXh0UmVzcG9uc2UiLCJQcmlzbWFDbGllbnQiLCJQcmlzbWFDbGllbnRLbm93blJlcXVlc3RFcnJvciIsInByaXNtYSIsIkdFVCIsIm1vZGVscyIsIm1vZGVsIiwiZmluZE1hbnkiLCJ3aGVyZSIsInByb3ZpZGVyIiwianNvbiIsImVycm9yIiwiY29uc29sZSIsInN0YXR1cyIsIlBPU1QiLCJyZXF1ZXN0IiwiZGF0YSIsIm5ld01vZGVsIiwiY3JlYXRlIiwiUFVUIiwiaWQiLCJ1cGRhdGVEYXRhIiwidXBkYXRlZE1vZGVsIiwidXBkYXRlIiwiY29kZSIsIkRFTEVURSIsInNlYXJjaFBhcmFtcyIsIlVSTCIsInVybCIsImdldCIsImRlbGV0ZSIsInN1Y2Nlc3MiXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./app/api/models/local/route.ts\n");

/***/ }),

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fmodels%2Flocal%2Froute&page=%2Fapi%2Fmodels%2Flocal%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fmodels%2Flocal%2Froute.ts&appDir=%2FUsers%2Fregan-mac%2FDownloads%2FMUD%2Fproto-fe%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Fregan-mac%2FDownloads%2FMUD%2Fproto-fe&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fmodels%2Flocal%2Froute&page=%2Fapi%2Fmodels%2Flocal%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fmodels%2Flocal%2Froute.ts&appDir=%2FUsers%2Fregan-mac%2FDownloads%2FMUD%2Fproto-fe%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Fregan-mac%2FDownloads%2FMUD%2Fproto-fe&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D! ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   patchFetch: () => (/* binding */ patchFetch),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   serverHooks: () => (/* binding */ serverHooks),\n/* harmony export */   workAsyncStorage: () => (/* binding */ workAsyncStorage),\n/* harmony export */   workUnitAsyncStorage: () => (/* binding */ workUnitAsyncStorage)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/route-modules/app-route/module.compiled */ \"(rsc)/./node_modules/next/dist/server/route-modules/app-route/module.compiled.js\");\n/* harmony import */ var next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/route-kind */ \"(rsc)/./node_modules/next/dist/server/route-kind.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/server/lib/patch-fetch */ \"(rsc)/./node_modules/next/dist/server/lib/patch-fetch.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _Users_regan_mac_Downloads_MUD_proto_fe_app_api_models_local_route_ts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/api/models/local/route.ts */ \"(rsc)/./app/api/models/local/route.ts\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_Users_regan_mac_Downloads_MUD_proto_fe_app_api_models_local_route_ts__WEBPACK_IMPORTED_MODULE_3__]);\n_Users_regan_mac_Downloads_MUD_proto_fe_app_api_models_local_route_ts__WEBPACK_IMPORTED_MODULE_3__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n\n\n// We inject the nextConfigOutput here so that we can use them in the route\n// module.\nconst nextConfigOutput = \"\"\nconst routeModule = new next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__.AppRouteRouteModule({\n    definition: {\n        kind: next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.APP_ROUTE,\n        page: \"/api/models/local/route\",\n        pathname: \"/api/models/local\",\n        filename: \"route\",\n        bundlePath: \"app/api/models/local/route\"\n    },\n    resolvedPagePath: \"/Users/regan-mac/Downloads/MUD/proto-fe/app/api/models/local/route.ts\",\n    nextConfigOutput,\n    userland: _Users_regan_mac_Downloads_MUD_proto_fe_app_api_models_local_route_ts__WEBPACK_IMPORTED_MODULE_3__\n});\n// Pull out the exports that we need to expose from the module. This should\n// be eliminated when we've moved the other routes to the new format. These\n// are used to hook into the route.\nconst { workAsyncStorage, workUnitAsyncStorage, serverHooks } = routeModule;\nfunction patchFetch() {\n    return (0,next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__.patchFetch)({\n        workAsyncStorage,\n        workUnitAsyncStorage\n    });\n}\n\n\n//# sourceMappingURL=app-route.js.map\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWFwcC1sb2FkZXIvaW5kZXguanM/bmFtZT1hcHAlMkZhcGklMkZtb2RlbHMlMkZsb2NhbCUyRnJvdXRlJnBhZ2U9JTJGYXBpJTJGbW9kZWxzJTJGbG9jYWwlMkZyb3V0ZSZhcHBQYXRocz0mcGFnZVBhdGg9cHJpdmF0ZS1uZXh0LWFwcC1kaXIlMkZhcGklMkZtb2RlbHMlMkZsb2NhbCUyRnJvdXRlLnRzJmFwcERpcj0lMkZVc2VycyUyRnJlZ2FuLW1hYyUyRkRvd25sb2FkcyUyRk1VRCUyRnByb3RvLWZlJTJGYXBwJnBhZ2VFeHRlbnNpb25zPXRzeCZwYWdlRXh0ZW5zaW9ucz10cyZwYWdlRXh0ZW5zaW9ucz1qc3gmcGFnZUV4dGVuc2lvbnM9anMmcm9vdERpcj0lMkZVc2VycyUyRnJlZ2FuLW1hYyUyRkRvd25sb2FkcyUyRk1VRCUyRnByb3RvLWZlJmlzRGV2PXRydWUmdHNjb25maWdQYXRoPXRzY29uZmlnLmpzb24mYmFzZVBhdGg9JmFzc2V0UHJlZml4PSZuZXh0Q29uZmlnT3V0cHV0PSZwcmVmZXJyZWRSZWdpb249Jm1pZGRsZXdhcmVDb25maWc9ZTMwJTNEISIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUErRjtBQUN2QztBQUNxQjtBQUNxQjtBQUNsRztBQUNBO0FBQ0E7QUFDQSx3QkFBd0IseUdBQW1CO0FBQzNDO0FBQ0EsY0FBYyxrRUFBUztBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsWUFBWTtBQUNaLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQSxRQUFRLHNEQUFzRDtBQUM5RDtBQUNBLFdBQVcsNEVBQVc7QUFDdEI7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUMwRjs7QUFFMUYscUMiLCJzb3VyY2VzIjpbIiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBcHBSb3V0ZVJvdXRlTW9kdWxlIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvcm91dGUtbW9kdWxlcy9hcHAtcm91dGUvbW9kdWxlLmNvbXBpbGVkXCI7XG5pbXBvcnQgeyBSb3V0ZUtpbmQgfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9yb3V0ZS1raW5kXCI7XG5pbXBvcnQgeyBwYXRjaEZldGNoIGFzIF9wYXRjaEZldGNoIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvbGliL3BhdGNoLWZldGNoXCI7XG5pbXBvcnQgKiBhcyB1c2VybGFuZCBmcm9tIFwiL1VzZXJzL3JlZ2FuLW1hYy9Eb3dubG9hZHMvTVVEL3Byb3RvLWZlL2FwcC9hcGkvbW9kZWxzL2xvY2FsL3JvdXRlLnRzXCI7XG4vLyBXZSBpbmplY3QgdGhlIG5leHRDb25maWdPdXRwdXQgaGVyZSBzbyB0aGF0IHdlIGNhbiB1c2UgdGhlbSBpbiB0aGUgcm91dGVcbi8vIG1vZHVsZS5cbmNvbnN0IG5leHRDb25maWdPdXRwdXQgPSBcIlwiXG5jb25zdCByb3V0ZU1vZHVsZSA9IG5ldyBBcHBSb3V0ZVJvdXRlTW9kdWxlKHtcbiAgICBkZWZpbml0aW9uOiB7XG4gICAgICAgIGtpbmQ6IFJvdXRlS2luZC5BUFBfUk9VVEUsXG4gICAgICAgIHBhZ2U6IFwiL2FwaS9tb2RlbHMvbG9jYWwvcm91dGVcIixcbiAgICAgICAgcGF0aG5hbWU6IFwiL2FwaS9tb2RlbHMvbG9jYWxcIixcbiAgICAgICAgZmlsZW5hbWU6IFwicm91dGVcIixcbiAgICAgICAgYnVuZGxlUGF0aDogXCJhcHAvYXBpL21vZGVscy9sb2NhbC9yb3V0ZVwiXG4gICAgfSxcbiAgICByZXNvbHZlZFBhZ2VQYXRoOiBcIi9Vc2Vycy9yZWdhbi1tYWMvRG93bmxvYWRzL01VRC9wcm90by1mZS9hcHAvYXBpL21vZGVscy9sb2NhbC9yb3V0ZS50c1wiLFxuICAgIG5leHRDb25maWdPdXRwdXQsXG4gICAgdXNlcmxhbmRcbn0pO1xuLy8gUHVsbCBvdXQgdGhlIGV4cG9ydHMgdGhhdCB3ZSBuZWVkIHRvIGV4cG9zZSBmcm9tIHRoZSBtb2R1bGUuIFRoaXMgc2hvdWxkXG4vLyBiZSBlbGltaW5hdGVkIHdoZW4gd2UndmUgbW92ZWQgdGhlIG90aGVyIHJvdXRlcyB0byB0aGUgbmV3IGZvcm1hdC4gVGhlc2Vcbi8vIGFyZSB1c2VkIHRvIGhvb2sgaW50byB0aGUgcm91dGUuXG5jb25zdCB7IHdvcmtBc3luY1N0b3JhZ2UsIHdvcmtVbml0QXN5bmNTdG9yYWdlLCBzZXJ2ZXJIb29rcyB9ID0gcm91dGVNb2R1bGU7XG5mdW5jdGlvbiBwYXRjaEZldGNoKCkge1xuICAgIHJldHVybiBfcGF0Y2hGZXRjaCh7XG4gICAgICAgIHdvcmtBc3luY1N0b3JhZ2UsXG4gICAgICAgIHdvcmtVbml0QXN5bmNTdG9yYWdlXG4gICAgfSk7XG59XG5leHBvcnQgeyByb3V0ZU1vZHVsZSwgd29ya0FzeW5jU3RvcmFnZSwgd29ya1VuaXRBc3luY1N0b3JhZ2UsIHNlcnZlckhvb2tzLCBwYXRjaEZldGNoLCAgfTtcblxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9YXBwLXJvdXRlLmpzLm1hcCJdLCJuYW1lcyI6W10sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fmodels%2Flocal%2Froute&page=%2Fapi%2Fmodels%2Flocal%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fmodels%2Flocal%2Froute.ts&appDir=%2FUsers%2Fregan-mac%2FDownloads%2FMUD%2Fproto-fe%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Fregan-mac%2FDownloads%2FMUD%2Fproto-fe&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!\n");

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
var __webpack_require__ = require("../../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next"], () => (__webpack_exec__("(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fmodels%2Flocal%2Froute&page=%2Fapi%2Fmodels%2Flocal%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fmodels%2Flocal%2Froute.ts&appDir=%2FUsers%2Fregan-mac%2FDownloads%2FMUD%2Fproto-fe%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Fregan-mac%2FDownloads%2FMUD%2Fproto-fe&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!")));
module.exports = __webpack_exports__;

})();