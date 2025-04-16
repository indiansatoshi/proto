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
exports.id = "app/api/files/route";
exports.ids = ["app/api/files/route"];
exports.modules = {

/***/ "(rsc)/./app/api/files/route.ts":
/*!********************************!*\
  !*** ./app/api/files/route.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   DELETE: () => (/* binding */ DELETE),\n/* harmony export */   GET: () => (/* binding */ GET),\n/* harmony export */   POST: () => (/* binding */ POST),\n/* harmony export */   PUT: () => (/* binding */ PUT)\n/* harmony export */ });\n/* harmony import */ var next_server__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/server */ \"(rsc)/./node_modules/next/dist/api/server.js\");\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @prisma/client */ \"@prisma/client\");\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_prisma_client__WEBPACK_IMPORTED_MODULE_1__);\n\n\n// Create a new PrismaClient instance for this route\nconst prisma = new _prisma_client__WEBPACK_IMPORTED_MODULE_1__.PrismaClient();\nasync function GET() {\n    // TODO: Implement actual file fetching logic\n    return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json([]);\n}\nasync function POST(request) {\n    try {\n        const data = await request.json();\n        const file = await prisma.file.create({\n            data\n        });\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json(file);\n    } catch (error) {\n        console.error('Error creating file:', error);\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n            error: 'Failed to create file'\n        }, {\n            status: 500\n        });\n    }\n}\nasync function PUT(request) {\n    try {\n        const data = await request.json();\n        const { id, ...updateData } = data;\n        const file = await prisma.file.update({\n            where: {\n                id\n            },\n            data: updateData\n        });\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json(file);\n    } catch (error) {\n        console.error('Error updating file:', error);\n        if (error instanceof Error && 'code' in error && error.code === 'P2025') {\n            return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n                error: 'File not found'\n            }, {\n                status: 404\n            });\n        }\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n            error: 'Failed to update file'\n        }, {\n            status: 500\n        });\n    }\n}\nasync function DELETE(request) {\n    try {\n        const { searchParams } = new URL(request.url);\n        const id = searchParams.get('id');\n        if (!id) {\n            return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n                error: 'ID is required'\n            }, {\n                status: 400\n            });\n        }\n        await prisma.file.delete({\n            where: {\n                id\n            }\n        });\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n            success: true\n        });\n    } catch (error) {\n        console.error('Error deleting file:', error);\n        if (error instanceof Error && 'code' in error && error.code === 'P2025') {\n            return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n                error: 'File not found'\n            }, {\n                status: 404\n            });\n        }\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n            error: 'Failed to delete file'\n        }, {\n            status: 500\n        });\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9hcHAvYXBpL2ZpbGVzL3JvdXRlLnRzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBMEM7QUFFRztBQUU3QyxvREFBb0Q7QUFDcEQsTUFBTUUsU0FBUyxJQUFJRCx3REFBWUE7QUFFeEIsZUFBZUU7SUFDcEIsNkNBQTZDO0lBQzdDLE9BQU9ILHFEQUFZQSxDQUFDSSxJQUFJLENBQUMsRUFBRTtBQUM3QjtBQUVPLGVBQWVDLEtBQUtDLE9BQW9CO0lBQzdDLElBQUk7UUFDRixNQUFNQyxPQUFPLE1BQU1ELFFBQVFGLElBQUk7UUFDL0IsTUFBTUksT0FBTyxNQUFNTixPQUFPTSxJQUFJLENBQUNDLE1BQU0sQ0FBQztZQUNwQ0Y7UUFDRjtRQUNBLE9BQU9QLHFEQUFZQSxDQUFDSSxJQUFJLENBQUNJO0lBQzNCLEVBQUUsT0FBT0UsT0FBTztRQUNkQyxRQUFRRCxLQUFLLENBQUMsd0JBQXdCQTtRQUN0QyxPQUFPVixxREFBWUEsQ0FBQ0ksSUFBSSxDQUFDO1lBQUVNLE9BQU87UUFBd0IsR0FBRztZQUFFRSxRQUFRO1FBQUk7SUFDN0U7QUFDRjtBQUVPLGVBQWVDLElBQUlQLE9BQW9CO0lBQzVDLElBQUk7UUFDRixNQUFNQyxPQUFPLE1BQU1ELFFBQVFGLElBQUk7UUFDL0IsTUFBTSxFQUFFVSxFQUFFLEVBQUUsR0FBR0MsWUFBWSxHQUFHUjtRQUU5QixNQUFNQyxPQUFPLE1BQU1OLE9BQU9NLElBQUksQ0FBQ1EsTUFBTSxDQUFDO1lBQ3BDQyxPQUFPO2dCQUFFSDtZQUFHO1lBQ1pQLE1BQU1RO1FBQ1I7UUFFQSxPQUFPZixxREFBWUEsQ0FBQ0ksSUFBSSxDQUFDSTtJQUMzQixFQUFFLE9BQU9FLE9BQU87UUFDZEMsUUFBUUQsS0FBSyxDQUFDLHdCQUF3QkE7UUFDdEMsSUFBSUEsaUJBQWlCUSxTQUFTLFVBQVVSLFNBQVNBLE1BQU1TLElBQUksS0FBSyxTQUFTO1lBQ3ZFLE9BQU9uQixxREFBWUEsQ0FBQ0ksSUFBSSxDQUFDO2dCQUFFTSxPQUFPO1lBQWlCLEdBQUc7Z0JBQUVFLFFBQVE7WUFBSTtRQUN0RTtRQUNBLE9BQU9aLHFEQUFZQSxDQUFDSSxJQUFJLENBQUM7WUFBRU0sT0FBTztRQUF3QixHQUFHO1lBQUVFLFFBQVE7UUFBSTtJQUM3RTtBQUNGO0FBRU8sZUFBZVEsT0FBT2QsT0FBb0I7SUFDL0MsSUFBSTtRQUNGLE1BQU0sRUFBRWUsWUFBWSxFQUFFLEdBQUcsSUFBSUMsSUFBSWhCLFFBQVFpQixHQUFHO1FBQzVDLE1BQU1ULEtBQUtPLGFBQWFHLEdBQUcsQ0FBQztRQUU1QixJQUFJLENBQUNWLElBQUk7WUFDUCxPQUFPZCxxREFBWUEsQ0FBQ0ksSUFBSSxDQUFDO2dCQUFFTSxPQUFPO1lBQWlCLEdBQUc7Z0JBQUVFLFFBQVE7WUFBSTtRQUN0RTtRQUVBLE1BQU1WLE9BQU9NLElBQUksQ0FBQ2lCLE1BQU0sQ0FBQztZQUN2QlIsT0FBTztnQkFBRUg7WUFBRztRQUNkO1FBRUEsT0FBT2QscURBQVlBLENBQUNJLElBQUksQ0FBQztZQUFFc0IsU0FBUztRQUFLO0lBQzNDLEVBQUUsT0FBT2hCLE9BQU87UUFDZEMsUUFBUUQsS0FBSyxDQUFDLHdCQUF3QkE7UUFDdEMsSUFBSUEsaUJBQWlCUSxTQUFTLFVBQVVSLFNBQVNBLE1BQU1TLElBQUksS0FBSyxTQUFTO1lBQ3ZFLE9BQU9uQixxREFBWUEsQ0FBQ0ksSUFBSSxDQUFDO2dCQUFFTSxPQUFPO1lBQWlCLEdBQUc7Z0JBQUVFLFFBQVE7WUFBSTtRQUN0RTtRQUNBLE9BQU9aLHFEQUFZQSxDQUFDSSxJQUFJLENBQUM7WUFBRU0sT0FBTztRQUF3QixHQUFHO1lBQUVFLFFBQVE7UUFBSTtJQUM3RTtBQUNGIiwic291cmNlcyI6WyIvVXNlcnMvcmVnYW4tbWFjL0Rvd25sb2Fkcy9NVUQvcHJvdG8tZmUvYXBwL2FwaS9maWxlcy9yb3V0ZS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZXh0UmVzcG9uc2UgfSBmcm9tICduZXh0L3NlcnZlcidcbmltcG9ydCB0eXBlIHsgTmV4dFJlcXVlc3QgfSBmcm9tICduZXh0L3NlcnZlcidcbmltcG9ydCB7IFByaXNtYUNsaWVudCB9IGZyb20gJ0BwcmlzbWEvY2xpZW50J1xuXG4vLyBDcmVhdGUgYSBuZXcgUHJpc21hQ2xpZW50IGluc3RhbmNlIGZvciB0aGlzIHJvdXRlXG5jb25zdCBwcmlzbWEgPSBuZXcgUHJpc21hQ2xpZW50KClcblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIEdFVCgpIHtcbiAgLy8gVE9ETzogSW1wbGVtZW50IGFjdHVhbCBmaWxlIGZldGNoaW5nIGxvZ2ljXG4gIHJldHVybiBOZXh0UmVzcG9uc2UuanNvbihbXSlcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIFBPU1QocmVxdWVzdDogTmV4dFJlcXVlc3QpIHtcbiAgdHJ5IHtcbiAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVxdWVzdC5qc29uKClcbiAgICBjb25zdCBmaWxlID0gYXdhaXQgcHJpc21hLmZpbGUuY3JlYXRlKHtcbiAgICAgIGRhdGFcbiAgICB9KVxuICAgIHJldHVybiBOZXh0UmVzcG9uc2UuanNvbihmaWxlKVxuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGNyZWF0aW5nIGZpbGU6JywgZXJyb3IpXG4gICAgcmV0dXJuIE5leHRSZXNwb25zZS5qc29uKHsgZXJyb3I6ICdGYWlsZWQgdG8gY3JlYXRlIGZpbGUnIH0sIHsgc3RhdHVzOiA1MDAgfSlcbiAgfVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gUFVUKHJlcXVlc3Q6IE5leHRSZXF1ZXN0KSB7XG4gIHRyeSB7XG4gICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlcXVlc3QuanNvbigpXG4gICAgY29uc3QgeyBpZCwgLi4udXBkYXRlRGF0YSB9ID0gZGF0YVxuICAgIFxuICAgIGNvbnN0IGZpbGUgPSBhd2FpdCBwcmlzbWEuZmlsZS51cGRhdGUoe1xuICAgICAgd2hlcmU6IHsgaWQgfSxcbiAgICAgIGRhdGE6IHVwZGF0ZURhdGFcbiAgICB9KVxuICAgIFxuICAgIHJldHVybiBOZXh0UmVzcG9uc2UuanNvbihmaWxlKVxuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIHVwZGF0aW5nIGZpbGU6JywgZXJyb3IpXG4gICAgaWYgKGVycm9yIGluc3RhbmNlb2YgRXJyb3IgJiYgJ2NvZGUnIGluIGVycm9yICYmIGVycm9yLmNvZGUgPT09ICdQMjAyNScpIHtcbiAgICAgIHJldHVybiBOZXh0UmVzcG9uc2UuanNvbih7IGVycm9yOiAnRmlsZSBub3QgZm91bmQnIH0sIHsgc3RhdHVzOiA0MDQgfSlcbiAgICB9XG4gICAgcmV0dXJuIE5leHRSZXNwb25zZS5qc29uKHsgZXJyb3I6ICdGYWlsZWQgdG8gdXBkYXRlIGZpbGUnIH0sIHsgc3RhdHVzOiA1MDAgfSlcbiAgfVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gREVMRVRFKHJlcXVlc3Q6IE5leHRSZXF1ZXN0KSB7XG4gIHRyeSB7XG4gICAgY29uc3QgeyBzZWFyY2hQYXJhbXMgfSA9IG5ldyBVUkwocmVxdWVzdC51cmwpXG4gICAgY29uc3QgaWQgPSBzZWFyY2hQYXJhbXMuZ2V0KCdpZCcpXG4gICAgXG4gICAgaWYgKCFpZCkge1xuICAgICAgcmV0dXJuIE5leHRSZXNwb25zZS5qc29uKHsgZXJyb3I6ICdJRCBpcyByZXF1aXJlZCcgfSwgeyBzdGF0dXM6IDQwMCB9KVxuICAgIH1cblxuICAgIGF3YWl0IHByaXNtYS5maWxlLmRlbGV0ZSh7XG4gICAgICB3aGVyZTogeyBpZCB9XG4gICAgfSlcbiAgICBcbiAgICByZXR1cm4gTmV4dFJlc3BvbnNlLmpzb24oeyBzdWNjZXNzOiB0cnVlIH0pXG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgY29uc29sZS5lcnJvcignRXJyb3IgZGVsZXRpbmcgZmlsZTonLCBlcnJvcilcbiAgICBpZiAoZXJyb3IgaW5zdGFuY2VvZiBFcnJvciAmJiAnY29kZScgaW4gZXJyb3IgJiYgZXJyb3IuY29kZSA9PT0gJ1AyMDI1Jykge1xuICAgICAgcmV0dXJuIE5leHRSZXNwb25zZS5qc29uKHsgZXJyb3I6ICdGaWxlIG5vdCBmb3VuZCcgfSwgeyBzdGF0dXM6IDQwNCB9KVxuICAgIH1cbiAgICByZXR1cm4gTmV4dFJlc3BvbnNlLmpzb24oeyBlcnJvcjogJ0ZhaWxlZCB0byBkZWxldGUgZmlsZScgfSwgeyBzdGF0dXM6IDUwMCB9KVxuICB9XG59ICJdLCJuYW1lcyI6WyJOZXh0UmVzcG9uc2UiLCJQcmlzbWFDbGllbnQiLCJwcmlzbWEiLCJHRVQiLCJqc29uIiwiUE9TVCIsInJlcXVlc3QiLCJkYXRhIiwiZmlsZSIsImNyZWF0ZSIsImVycm9yIiwiY29uc29sZSIsInN0YXR1cyIsIlBVVCIsImlkIiwidXBkYXRlRGF0YSIsInVwZGF0ZSIsIndoZXJlIiwiRXJyb3IiLCJjb2RlIiwiREVMRVRFIiwic2VhcmNoUGFyYW1zIiwiVVJMIiwidXJsIiwiZ2V0IiwiZGVsZXRlIiwic3VjY2VzcyJdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./app/api/files/route.ts\n");

/***/ }),

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Ffiles%2Froute&page=%2Fapi%2Ffiles%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Ffiles%2Froute.ts&appDir=%2FUsers%2Fregan-mac%2FDownloads%2FMUD%2Fproto-fe%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Fregan-mac%2FDownloads%2FMUD%2Fproto-fe&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Ffiles%2Froute&page=%2Fapi%2Ffiles%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Ffiles%2Froute.ts&appDir=%2FUsers%2Fregan-mac%2FDownloads%2FMUD%2Fproto-fe%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Fregan-mac%2FDownloads%2FMUD%2Fproto-fe&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D! ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   patchFetch: () => (/* binding */ patchFetch),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   serverHooks: () => (/* binding */ serverHooks),\n/* harmony export */   workAsyncStorage: () => (/* binding */ workAsyncStorage),\n/* harmony export */   workUnitAsyncStorage: () => (/* binding */ workUnitAsyncStorage)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/route-modules/app-route/module.compiled */ \"(rsc)/./node_modules/next/dist/server/route-modules/app-route/module.compiled.js\");\n/* harmony import */ var next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/route-kind */ \"(rsc)/./node_modules/next/dist/server/route-kind.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/server/lib/patch-fetch */ \"(rsc)/./node_modules/next/dist/server/lib/patch-fetch.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _Users_regan_mac_Downloads_MUD_proto_fe_app_api_files_route_ts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/api/files/route.ts */ \"(rsc)/./app/api/files/route.ts\");\n\n\n\n\n// We inject the nextConfigOutput here so that we can use them in the route\n// module.\nconst nextConfigOutput = \"\"\nconst routeModule = new next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__.AppRouteRouteModule({\n    definition: {\n        kind: next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.APP_ROUTE,\n        page: \"/api/files/route\",\n        pathname: \"/api/files\",\n        filename: \"route\",\n        bundlePath: \"app/api/files/route\"\n    },\n    resolvedPagePath: \"/Users/regan-mac/Downloads/MUD/proto-fe/app/api/files/route.ts\",\n    nextConfigOutput,\n    userland: _Users_regan_mac_Downloads_MUD_proto_fe_app_api_files_route_ts__WEBPACK_IMPORTED_MODULE_3__\n});\n// Pull out the exports that we need to expose from the module. This should\n// be eliminated when we've moved the other routes to the new format. These\n// are used to hook into the route.\nconst { workAsyncStorage, workUnitAsyncStorage, serverHooks } = routeModule;\nfunction patchFetch() {\n    return (0,next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__.patchFetch)({\n        workAsyncStorage,\n        workUnitAsyncStorage\n    });\n}\n\n\n//# sourceMappingURL=app-route.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWFwcC1sb2FkZXIvaW5kZXguanM/bmFtZT1hcHAlMkZhcGklMkZmaWxlcyUyRnJvdXRlJnBhZ2U9JTJGYXBpJTJGZmlsZXMlMkZyb3V0ZSZhcHBQYXRocz0mcGFnZVBhdGg9cHJpdmF0ZS1uZXh0LWFwcC1kaXIlMkZhcGklMkZmaWxlcyUyRnJvdXRlLnRzJmFwcERpcj0lMkZVc2VycyUyRnJlZ2FuLW1hYyUyRkRvd25sb2FkcyUyRk1VRCUyRnByb3RvLWZlJTJGYXBwJnBhZ2VFeHRlbnNpb25zPXRzeCZwYWdlRXh0ZW5zaW9ucz10cyZwYWdlRXh0ZW5zaW9ucz1qc3gmcGFnZUV4dGVuc2lvbnM9anMmcm9vdERpcj0lMkZVc2VycyUyRnJlZ2FuLW1hYyUyRkRvd25sb2FkcyUyRk1VRCUyRnByb3RvLWZlJmlzRGV2PXRydWUmdHNjb25maWdQYXRoPXRzY29uZmlnLmpzb24mYmFzZVBhdGg9JmFzc2V0UHJlZml4PSZuZXh0Q29uZmlnT3V0cHV0PSZwcmVmZXJyZWRSZWdpb249Jm1pZGRsZXdhcmVDb25maWc9ZTMwJTNEISIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUErRjtBQUN2QztBQUNxQjtBQUNjO0FBQzNGO0FBQ0E7QUFDQTtBQUNBLHdCQUF3Qix5R0FBbUI7QUFDM0M7QUFDQSxjQUFjLGtFQUFTO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxZQUFZO0FBQ1osQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBLFFBQVEsc0RBQXNEO0FBQzlEO0FBQ0EsV0FBVyw0RUFBVztBQUN0QjtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQzBGOztBQUUxRiIsInNvdXJjZXMiOlsiIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFwcFJvdXRlUm91dGVNb2R1bGUgfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9yb3V0ZS1tb2R1bGVzL2FwcC1yb3V0ZS9tb2R1bGUuY29tcGlsZWRcIjtcbmltcG9ydCB7IFJvdXRlS2luZCB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL3JvdXRlLWtpbmRcIjtcbmltcG9ydCB7IHBhdGNoRmV0Y2ggYXMgX3BhdGNoRmV0Y2ggfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9saWIvcGF0Y2gtZmV0Y2hcIjtcbmltcG9ydCAqIGFzIHVzZXJsYW5kIGZyb20gXCIvVXNlcnMvcmVnYW4tbWFjL0Rvd25sb2Fkcy9NVUQvcHJvdG8tZmUvYXBwL2FwaS9maWxlcy9yb3V0ZS50c1wiO1xuLy8gV2UgaW5qZWN0IHRoZSBuZXh0Q29uZmlnT3V0cHV0IGhlcmUgc28gdGhhdCB3ZSBjYW4gdXNlIHRoZW0gaW4gdGhlIHJvdXRlXG4vLyBtb2R1bGUuXG5jb25zdCBuZXh0Q29uZmlnT3V0cHV0ID0gXCJcIlxuY29uc3Qgcm91dGVNb2R1bGUgPSBuZXcgQXBwUm91dGVSb3V0ZU1vZHVsZSh7XG4gICAgZGVmaW5pdGlvbjoge1xuICAgICAgICBraW5kOiBSb3V0ZUtpbmQuQVBQX1JPVVRFLFxuICAgICAgICBwYWdlOiBcIi9hcGkvZmlsZXMvcm91dGVcIixcbiAgICAgICAgcGF0aG5hbWU6IFwiL2FwaS9maWxlc1wiLFxuICAgICAgICBmaWxlbmFtZTogXCJyb3V0ZVwiLFxuICAgICAgICBidW5kbGVQYXRoOiBcImFwcC9hcGkvZmlsZXMvcm91dGVcIlxuICAgIH0sXG4gICAgcmVzb2x2ZWRQYWdlUGF0aDogXCIvVXNlcnMvcmVnYW4tbWFjL0Rvd25sb2Fkcy9NVUQvcHJvdG8tZmUvYXBwL2FwaS9maWxlcy9yb3V0ZS50c1wiLFxuICAgIG5leHRDb25maWdPdXRwdXQsXG4gICAgdXNlcmxhbmRcbn0pO1xuLy8gUHVsbCBvdXQgdGhlIGV4cG9ydHMgdGhhdCB3ZSBuZWVkIHRvIGV4cG9zZSBmcm9tIHRoZSBtb2R1bGUuIFRoaXMgc2hvdWxkXG4vLyBiZSBlbGltaW5hdGVkIHdoZW4gd2UndmUgbW92ZWQgdGhlIG90aGVyIHJvdXRlcyB0byB0aGUgbmV3IGZvcm1hdC4gVGhlc2Vcbi8vIGFyZSB1c2VkIHRvIGhvb2sgaW50byB0aGUgcm91dGUuXG5jb25zdCB7IHdvcmtBc3luY1N0b3JhZ2UsIHdvcmtVbml0QXN5bmNTdG9yYWdlLCBzZXJ2ZXJIb29rcyB9ID0gcm91dGVNb2R1bGU7XG5mdW5jdGlvbiBwYXRjaEZldGNoKCkge1xuICAgIHJldHVybiBfcGF0Y2hGZXRjaCh7XG4gICAgICAgIHdvcmtBc3luY1N0b3JhZ2UsXG4gICAgICAgIHdvcmtVbml0QXN5bmNTdG9yYWdlXG4gICAgfSk7XG59XG5leHBvcnQgeyByb3V0ZU1vZHVsZSwgd29ya0FzeW5jU3RvcmFnZSwgd29ya1VuaXRBc3luY1N0b3JhZ2UsIHNlcnZlckhvb2tzLCBwYXRjaEZldGNoLCAgfTtcblxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9YXBwLXJvdXRlLmpzLm1hcCJdLCJuYW1lcyI6W10sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Ffiles%2Froute&page=%2Fapi%2Ffiles%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Ffiles%2Froute.ts&appDir=%2FUsers%2Fregan-mac%2FDownloads%2FMUD%2Fproto-fe%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Fregan-mac%2FDownloads%2FMUD%2Fproto-fe&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!\n");

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
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next"], () => (__webpack_exec__("(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Ffiles%2Froute&page=%2Fapi%2Ffiles%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Ffiles%2Froute.ts&appDir=%2FUsers%2Fregan-mac%2FDownloads%2FMUD%2Fproto-fe%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Fregan-mac%2FDownloads%2FMUD%2Fproto-fe&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!")));
module.exports = __webpack_exports__;

})();