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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   DELETE: () => (/* binding */ DELETE),\n/* harmony export */   FileUploadSchema: () => (/* binding */ FileUploadSchema),\n/* harmony export */   GET: () => (/* binding */ GET),\n/* harmony export */   POST: () => (/* binding */ POST),\n/* harmony export */   PUT: () => (/* binding */ PUT)\n/* harmony export */ });\n/* harmony import */ var next_server__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/server */ \"(rsc)/./node_modules/next/dist/api/server.js\");\n/* harmony import */ var _lib_prisma__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/lib/prisma */ \"(rsc)/./lib/prisma.ts\");\n/* harmony import */ var zod__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! zod */ \"(rsc)/./node_modules/zod/lib/index.mjs\");\n\n\n\n// Zod schema based on OpenAPI spec\nconst FileCreateSchema = zod__WEBPACK_IMPORTED_MODULE_2__.z.object({\n});\nconst FileUpdateSchema = zod__WEBPACK_IMPORTED_MODULE_2__.z.object({\n    id: zod__WEBPACK_IMPORTED_MODULE_2__.z.string()\n});\nconst FileUploadSchema = zod__WEBPACK_IMPORTED_MODULE_2__.z.object({\n    file: zod__WEBPACK_IMPORTED_MODULE_2__.z.instanceof(Blob),\n    metadata: zod__WEBPACK_IMPORTED_MODULE_2__.z.record(zod__WEBPACK_IMPORTED_MODULE_2__.z.any()).optional()\n});\nasync function GET() {\n    const files = await _lib_prisma__WEBPACK_IMPORTED_MODULE_1__.prisma.file.findMany({\n        orderBy: {\n            updatedAt: 'desc'\n        }\n    });\n    return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json(files);\n}\nasync function POST(request) {\n    const body = await request.json();\n    const parsed = FileCreateSchema.safeParse(body);\n    if (!parsed.success) {\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n            error: parsed.error\n        }, {\n            status: 400\n        });\n    }\n    const file = await _lib_prisma__WEBPACK_IMPORTED_MODULE_1__.prisma.file.create({\n        data: parsed.data\n    });\n    return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json(file);\n}\nasync function PUT(request) {\n    const body = await request.json();\n    const parsed = FileUpdateSchema.safeParse(body);\n    if (!parsed.success) {\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n            error: parsed.error\n        }, {\n            status: 400\n        });\n    }\n    const { id, ...updateData } = parsed.data;\n    const file = await _lib_prisma__WEBPACK_IMPORTED_MODULE_1__.prisma.file.update({\n        where: {\n            id\n        },\n        data: updateData\n    });\n    return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json(file);\n}\nasync function DELETE(request) {\n    const { searchParams } = new URL(request.url);\n    const id = searchParams.get('id');\n    if (!id) {\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n            error: 'ID is required'\n        }, {\n            status: 400\n        });\n    }\n    await _lib_prisma__WEBPACK_IMPORTED_MODULE_1__.prisma.file.delete({\n        where: {\n            id\n        }\n    });\n    return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n        success: true\n    });\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9hcHAvYXBpL2ZpbGVzL3JvdXRlLnRzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQTBDO0FBRUw7QUFDZDtBQVd2QixtQ0FBbUM7QUFDbkMsTUFBTUcsbUJBQW1CRCxrQ0FBQ0EsQ0FBQ0UsTUFBTSxDQUFDO0FBRWxDO0FBRUEsTUFBTUMsbUJBQW1CSCxrQ0FBQ0EsQ0FBQ0UsTUFBTSxDQUFDO0lBQ2hDRSxJQUFJSixrQ0FBQ0EsQ0FBQ0ssTUFBTTtBQUVkO0FBRU8sTUFBTUMsbUJBQW1CTixrQ0FBQ0EsQ0FBQ0UsTUFBTSxDQUFDO0lBQ3ZDSyxNQUFNUCxrQ0FBQ0EsQ0FBQ1EsVUFBVSxDQUFDQztJQUNuQkMsVUFBVVYsa0NBQUNBLENBQUNXLE1BQU0sQ0FBQ1gsa0NBQUNBLENBQUNZLEdBQUcsSUFBSUMsUUFBUTtBQUN0QyxHQUFFO0FBRUssZUFBZUM7SUFDcEIsTUFBTUMsUUFBUSxNQUFNaEIsK0NBQU1BLENBQUNRLElBQUksQ0FBQ1MsUUFBUSxDQUFDO1FBQUVDLFNBQVM7WUFBRUMsV0FBVztRQUFPO0lBQUU7SUFDMUUsT0FBT3BCLHFEQUFZQSxDQUFDcUIsSUFBSSxDQUFDSjtBQUMzQjtBQUVPLGVBQWVLLEtBQUtDLE9BQW9CO0lBQzdDLE1BQU1DLE9BQU8sTUFBTUQsUUFBUUYsSUFBSTtJQUMvQixNQUFNSSxTQUFTdEIsaUJBQWlCdUIsU0FBUyxDQUFDRjtJQUMxQyxJQUFJLENBQUNDLE9BQU9FLE9BQU8sRUFBRTtRQUNuQixPQUFPM0IscURBQVlBLENBQUNxQixJQUFJLENBQUM7WUFBRU8sT0FBT0gsT0FBT0csS0FBSztRQUFDLEdBQUc7WUFBRUMsUUFBUTtRQUFJO0lBQ2xFO0lBQ0EsTUFBTXBCLE9BQU8sTUFBTVIsK0NBQU1BLENBQUNRLElBQUksQ0FBQ3FCLE1BQU0sQ0FBQztRQUFFQyxNQUFNTixPQUFPTSxJQUFJO0lBQUM7SUFDMUQsT0FBTy9CLHFEQUFZQSxDQUFDcUIsSUFBSSxDQUFDWjtBQUMzQjtBQUVPLGVBQWV1QixJQUFJVCxPQUFvQjtJQUM1QyxNQUFNQyxPQUFPLE1BQU1ELFFBQVFGLElBQUk7SUFDL0IsTUFBTUksU0FBU3BCLGlCQUFpQnFCLFNBQVMsQ0FBQ0Y7SUFDMUMsSUFBSSxDQUFDQyxPQUFPRSxPQUFPLEVBQUU7UUFDbkIsT0FBTzNCLHFEQUFZQSxDQUFDcUIsSUFBSSxDQUFDO1lBQUVPLE9BQU9ILE9BQU9HLEtBQUs7UUFBQyxHQUFHO1lBQUVDLFFBQVE7UUFBSTtJQUNsRTtJQUNBLE1BQU0sRUFBRXZCLEVBQUUsRUFBRSxHQUFHMkIsWUFBWSxHQUFHUixPQUFPTSxJQUFJO0lBQ3pDLE1BQU10QixPQUFPLE1BQU1SLCtDQUFNQSxDQUFDUSxJQUFJLENBQUN5QixNQUFNLENBQUM7UUFBRUMsT0FBTztZQUFFN0I7UUFBRztRQUFHeUIsTUFBTUU7SUFBVztJQUN4RSxPQUFPakMscURBQVlBLENBQUNxQixJQUFJLENBQUNaO0FBQzNCO0FBRU8sZUFBZTJCLE9BQU9iLE9BQW9CO0lBQy9DLE1BQU0sRUFBRWMsWUFBWSxFQUFFLEdBQUcsSUFBSUMsSUFBSWYsUUFBUWdCLEdBQUc7SUFDNUMsTUFBTWpDLEtBQUsrQixhQUFhRyxHQUFHLENBQUM7SUFDNUIsSUFBSSxDQUFDbEMsSUFBSTtRQUNQLE9BQU9OLHFEQUFZQSxDQUFDcUIsSUFBSSxDQUFDO1lBQUVPLE9BQU87UUFBaUIsR0FBRztZQUFFQyxRQUFRO1FBQUk7SUFDdEU7SUFDQSxNQUFNNUIsK0NBQU1BLENBQUNRLElBQUksQ0FBQ2dDLE1BQU0sQ0FBQztRQUFFTixPQUFPO1lBQUU3QjtRQUFHO0lBQUU7SUFDekMsT0FBT04scURBQVlBLENBQUNxQixJQUFJLENBQUM7UUFBRU0sU0FBUztJQUFLO0FBQzNDIiwic291cmNlcyI6WyIvVXNlcnMvcmVnYW4tbWFjL0Rvd25sb2Fkcy9NVUQvcHJvdG8tZmUvYXBwL2FwaS9maWxlcy9yb3V0ZS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZXh0UmVzcG9uc2UgfSBmcm9tICduZXh0L3NlcnZlcidcbmltcG9ydCB0eXBlIHsgTmV4dFJlcXVlc3QgfSBmcm9tICduZXh0L3NlcnZlcidcbmltcG9ydCB7IHByaXNtYSB9IGZyb20gJ0AvbGliL3ByaXNtYSdcbmltcG9ydCB7IHogfSBmcm9tICd6b2QnXG5pbXBvcnQgdHlwZSB7IHBhdGhzIH0gZnJvbSAnQC90eXBlcy9vcGVuYXBpJ1xuXG4vLyBPcGVuQVBJIHR5cGVzXG4vLyBDb3JyZWN0ZWQ6IFJlbW92ZSAnL2FwaS8nIHByZWZpeCBmb3IgT3BlbkFQSSBwYXRoc1xudHlwZSBGaWxlQ3JlYXRlID0gcGF0aHNbJy9maWxlcyddWydwb3N0J11bJ3JlcXVlc3RCb2R5J11bJ2NvbnRlbnQnXVsnYXBwbGljYXRpb24vanNvbiddXG50eXBlIEZpbGVSZXNwb25zZSA9IHBhdGhzWycvZmlsZXMnXVsncG9zdCddWydyZXNwb25zZXMnXVsnMjAxJ11bJ2NvbnRlbnQnXVsnYXBwbGljYXRpb24vanNvbiddXG5cbi8vIFBPU1QgKHVwbG9hZCBmaWxlKVxudHlwZSBGaWxlVXBsb2FkID0gcGF0aHNbJy9maWxlcyddWydwb3N0J11bJ3JlcXVlc3RCb2R5J11bJ2NvbnRlbnQnXVsnbXVsdGlwYXJ0L2Zvcm0tZGF0YSddO1xuXG4vLyBab2Qgc2NoZW1hIGJhc2VkIG9uIE9wZW5BUEkgc3BlY1xuY29uc3QgRmlsZUNyZWF0ZVNjaGVtYSA9IHoub2JqZWN0KHtcbiAgLy8gRGVmaW5lIGZpZWxkcyBhcyBwZXIgeW91ciBPcGVuQVBJIHNwZWMgZm9yIGZpbGUgY3JlYXRpb25cbn0pXG5cbmNvbnN0IEZpbGVVcGRhdGVTY2hlbWEgPSB6Lm9iamVjdCh7XG4gIGlkOiB6LnN0cmluZygpLFxuICAvLyBBZGQgb3RoZXIgZmllbGRzIGFzIHBlciBPcGVuQVBJIHNwZWNcbn0pXG5cbmV4cG9ydCBjb25zdCBGaWxlVXBsb2FkU2NoZW1hID0gei5vYmplY3Qoe1xuICBmaWxlOiB6Lmluc3RhbmNlb2YoQmxvYiksIC8vIG9yIHouYW55KCkgaWYgdXNpbmcgRm9ybURhdGFcbiAgbWV0YWRhdGE6IHoucmVjb3JkKHouYW55KCkpLm9wdGlvbmFsKClcbn0pXG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBHRVQoKSB7XG4gIGNvbnN0IGZpbGVzID0gYXdhaXQgcHJpc21hLmZpbGUuZmluZE1hbnkoeyBvcmRlckJ5OiB7IHVwZGF0ZWRBdDogJ2Rlc2MnIH0gfSlcbiAgcmV0dXJuIE5leHRSZXNwb25zZS5qc29uKGZpbGVzKVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gUE9TVChyZXF1ZXN0OiBOZXh0UmVxdWVzdCkge1xuICBjb25zdCBib2R5ID0gYXdhaXQgcmVxdWVzdC5qc29uKClcbiAgY29uc3QgcGFyc2VkID0gRmlsZUNyZWF0ZVNjaGVtYS5zYWZlUGFyc2UoYm9keSlcbiAgaWYgKCFwYXJzZWQuc3VjY2Vzcykge1xuICAgIHJldHVybiBOZXh0UmVzcG9uc2UuanNvbih7IGVycm9yOiBwYXJzZWQuZXJyb3IgfSwgeyBzdGF0dXM6IDQwMCB9KVxuICB9XG4gIGNvbnN0IGZpbGUgPSBhd2FpdCBwcmlzbWEuZmlsZS5jcmVhdGUoeyBkYXRhOiBwYXJzZWQuZGF0YSB9KVxuICByZXR1cm4gTmV4dFJlc3BvbnNlLmpzb24oZmlsZSlcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIFBVVChyZXF1ZXN0OiBOZXh0UmVxdWVzdCkge1xuICBjb25zdCBib2R5ID0gYXdhaXQgcmVxdWVzdC5qc29uKClcbiAgY29uc3QgcGFyc2VkID0gRmlsZVVwZGF0ZVNjaGVtYS5zYWZlUGFyc2UoYm9keSlcbiAgaWYgKCFwYXJzZWQuc3VjY2Vzcykge1xuICAgIHJldHVybiBOZXh0UmVzcG9uc2UuanNvbih7IGVycm9yOiBwYXJzZWQuZXJyb3IgfSwgeyBzdGF0dXM6IDQwMCB9KVxuICB9XG4gIGNvbnN0IHsgaWQsIC4uLnVwZGF0ZURhdGEgfSA9IHBhcnNlZC5kYXRhXG4gIGNvbnN0IGZpbGUgPSBhd2FpdCBwcmlzbWEuZmlsZS51cGRhdGUoeyB3aGVyZTogeyBpZCB9LCBkYXRhOiB1cGRhdGVEYXRhIH0pXG4gIHJldHVybiBOZXh0UmVzcG9uc2UuanNvbihmaWxlKVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gREVMRVRFKHJlcXVlc3Q6IE5leHRSZXF1ZXN0KSB7XG4gIGNvbnN0IHsgc2VhcmNoUGFyYW1zIH0gPSBuZXcgVVJMKHJlcXVlc3QudXJsKVxuICBjb25zdCBpZCA9IHNlYXJjaFBhcmFtcy5nZXQoJ2lkJylcbiAgaWYgKCFpZCkge1xuICAgIHJldHVybiBOZXh0UmVzcG9uc2UuanNvbih7IGVycm9yOiAnSUQgaXMgcmVxdWlyZWQnIH0sIHsgc3RhdHVzOiA0MDAgfSlcbiAgfVxuICBhd2FpdCBwcmlzbWEuZmlsZS5kZWxldGUoeyB3aGVyZTogeyBpZCB9IH0pXG4gIHJldHVybiBOZXh0UmVzcG9uc2UuanNvbih7IHN1Y2Nlc3M6IHRydWUgfSlcbn0iXSwibmFtZXMiOlsiTmV4dFJlc3BvbnNlIiwicHJpc21hIiwieiIsIkZpbGVDcmVhdGVTY2hlbWEiLCJvYmplY3QiLCJGaWxlVXBkYXRlU2NoZW1hIiwiaWQiLCJzdHJpbmciLCJGaWxlVXBsb2FkU2NoZW1hIiwiZmlsZSIsImluc3RhbmNlb2YiLCJCbG9iIiwibWV0YWRhdGEiLCJyZWNvcmQiLCJhbnkiLCJvcHRpb25hbCIsIkdFVCIsImZpbGVzIiwiZmluZE1hbnkiLCJvcmRlckJ5IiwidXBkYXRlZEF0IiwianNvbiIsIlBPU1QiLCJyZXF1ZXN0IiwiYm9keSIsInBhcnNlZCIsInNhZmVQYXJzZSIsInN1Y2Nlc3MiLCJlcnJvciIsInN0YXR1cyIsImNyZWF0ZSIsImRhdGEiLCJQVVQiLCJ1cGRhdGVEYXRhIiwidXBkYXRlIiwid2hlcmUiLCJERUxFVEUiLCJzZWFyY2hQYXJhbXMiLCJVUkwiLCJ1cmwiLCJnZXQiLCJkZWxldGUiXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./app/api/files/route.ts\n");

/***/ }),

/***/ "(rsc)/./lib/prisma.ts":
/*!***********************!*\
  !*** ./lib/prisma.ts ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   prisma: () => (/* binding */ prisma)\n/* harmony export */ });\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @prisma/client */ \"@prisma/client\");\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_prisma_client__WEBPACK_IMPORTED_MODULE_0__);\n\n// PrismaClient is attached to the `global` object in development to prevent\n// exhausting your database connection limit.\nconst globalForPrisma = global;\nconst prisma = globalForPrisma.prisma || new _prisma_client__WEBPACK_IMPORTED_MODULE_0__.PrismaClient({\n    log: [\n        'query'\n    ]\n});\nif (true) globalForPrisma.prisma = prisma;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9saWIvcHJpc21hLnRzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUE2QztBQUU3Qyw0RUFBNEU7QUFDNUUsNkNBQTZDO0FBQzdDLE1BQU1DLGtCQUFrQkM7QUFFakIsTUFBTUMsU0FDWEYsZ0JBQWdCRSxNQUFNLElBQ3RCLElBQUlILHdEQUFZQSxDQUFDO0lBQ2ZJLEtBQUs7UUFBQztLQUFRO0FBQ2hCLEdBQUU7QUFFSixJQUFJQyxJQUFxQyxFQUFFSixnQkFBZ0JFLE1BQU0sR0FBR0EiLCJzb3VyY2VzIjpbIi9Vc2Vycy9yZWdhbi1tYWMvRG93bmxvYWRzL01VRC9wcm90by1mZS9saWIvcHJpc21hLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFByaXNtYUNsaWVudCB9IGZyb20gJ0BwcmlzbWEvY2xpZW50J1xuXG4vLyBQcmlzbWFDbGllbnQgaXMgYXR0YWNoZWQgdG8gdGhlIGBnbG9iYWxgIG9iamVjdCBpbiBkZXZlbG9wbWVudCB0byBwcmV2ZW50XG4vLyBleGhhdXN0aW5nIHlvdXIgZGF0YWJhc2UgY29ubmVjdGlvbiBsaW1pdC5cbmNvbnN0IGdsb2JhbEZvclByaXNtYSA9IGdsb2JhbCBhcyB1bmtub3duIGFzIHsgcHJpc21hOiBQcmlzbWFDbGllbnQgfVxuXG5leHBvcnQgY29uc3QgcHJpc21hID1cbiAgZ2xvYmFsRm9yUHJpc21hLnByaXNtYSB8fFxuICBuZXcgUHJpc21hQ2xpZW50KHtcbiAgICBsb2c6IFsncXVlcnknXSxcbiAgfSlcblxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIGdsb2JhbEZvclByaXNtYS5wcmlzbWEgPSBwcmlzbWEgIl0sIm5hbWVzIjpbIlByaXNtYUNsaWVudCIsImdsb2JhbEZvclByaXNtYSIsImdsb2JhbCIsInByaXNtYSIsImxvZyIsInByb2Nlc3MiXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./lib/prisma.ts\n");

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
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/zod"], () => (__webpack_exec__("(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Ffiles%2Froute&page=%2Fapi%2Ffiles%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Ffiles%2Froute.ts&appDir=%2FUsers%2Fregan-mac%2FDownloads%2FMUD%2Fproto-fe%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Fregan-mac%2FDownloads%2FMUD%2Fproto-fe&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!")));
module.exports = __webpack_exports__;

})();