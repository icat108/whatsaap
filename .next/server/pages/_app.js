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
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./components/Login.js":
/*!*****************************!*\
  !*** ./components/Login.js ***!
  \*****************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Login)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"next/head\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _chakra_ui_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @chakra-ui/icons */ \"@chakra-ui/icons\");\n/* harmony import */ var _chakra_ui_icons__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_icons__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @chakra-ui/react */ \"@chakra-ui/react\");\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react_firebase_hooks_auth__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-firebase-hooks/auth */ \"react-firebase-hooks/auth\");\n/* harmony import */ var react_firebase_hooks_auth__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_firebase_hooks_auth__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _firebaseconfig__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../firebaseconfig */ \"./firebaseconfig.js\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_firebaseconfig__WEBPACK_IMPORTED_MODULE_5__]);\n_firebaseconfig__WEBPACK_IMPORTED_MODULE_5__ = (__webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__)[0];\n\n\n\n\n\n\nfunction Login() {\n    const [signInWithGoogle, user, loading, error] = (0,react_firebase_hooks_auth__WEBPACK_IMPORTED_MODULE_4__.useSignInWithGoogle)(_firebaseconfig__WEBPACK_IMPORTED_MODULE_5__.auth);\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                    children: \"Login\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\ASUS\\\\Desktop\\\\whatsaap\\\\components\\\\Login.js\",\n                    lineNumber: 14,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\ASUS\\\\Desktop\\\\whatsaap\\\\components\\\\Login.js\",\n                lineNumber: 13,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Center, {\n                h: \"100vh\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Stack, {\n                    align: \"center\",\n                    bgColor: \"gray.600\",\n                    p: 16,\n                    rounded: \"3xl\",\n                    spacing: 12,\n                    boxShadow: \"lg\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Box, {\n                            bgColor: \"blue.500\",\n                            w: \"fit-content\",\n                            p: 5,\n                            rounded: \"3xl\",\n                            boxShadow: \"md\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_icons__WEBPACK_IMPORTED_MODULE_2__.ChatIcon, {\n                                w: \"100px\",\n                                h: \"100px\",\n                                color: \"white\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\ASUS\\\\Desktop\\\\whatsaap\\\\components\\\\Login.js\",\n                                lineNumber: 35,\n                                columnNumber: 13\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\ASUS\\\\Desktop\\\\whatsaap\\\\components\\\\Login.js\",\n                            lineNumber: 28,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Button, {\n                            boxShadow: \"md\",\n                            onClick: ()=>signInWithGoogle(\"\", {\n                                    prompt: \"select_account\"\n                                })\n                            ,\n                            children: \"Sign In with Google\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\ASUS\\\\Desktop\\\\whatsaap\\\\components\\\\Login.js\",\n                            lineNumber: 38,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\ASUS\\\\Desktop\\\\whatsaap\\\\components\\\\Login.js\",\n                    lineNumber: 19,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\ASUS\\\\Desktop\\\\whatsaap\\\\components\\\\Login.js\",\n                lineNumber: 17,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true));\n};\n\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0xvZ2luLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBNEI7QUFDZTtBQUNrQjtBQUNFO0FBQ3ZCO0FBRXpCLFFBQVEsQ0FBQ1EsS0FBSyxHQUFHLENBQUM7SUFDL0IsS0FBSyxFQUFFQyxnQkFBZ0IsRUFBRUMsSUFBSSxFQUFFQyxPQUFPLEVBQUVDLEtBQUssSUFBSU4sOEVBQW1CLENBQUNDLGlEQUFJO0lBRXpFLE1BQU07O3dGQUdEUCxrREFBSTtzR0FDRmEsQ0FBSzs4QkFBQyxDQUFLOzs7Ozs7Ozs7Ozt3RkFHYlQsb0RBQU07Z0JBQUNVLENBQUMsRUFBQyxDQUFPO3NHQUVkVCxtREFBSztvQkFDSlUsS0FBSyxFQUFDLENBQVE7b0JBQ2RDLE9BQU8sRUFBQyxDQUFVO29CQUNsQkMsQ0FBQyxFQUFFLEVBQUU7b0JBQ0xDLE9BQU8sRUFBQyxDQUFLO29CQUNiQyxPQUFPLEVBQUUsRUFBRTtvQkFDWEMsU0FBUyxFQUFDLENBQUk7O29HQUdibEIsaURBQUc7NEJBQ0ZjLE9BQU8sRUFBQyxDQUFVOzRCQUNsQkssQ0FBQyxFQUFDLENBQWE7NEJBQ2ZKLENBQUMsRUFBRSxDQUFDOzRCQUNKQyxPQUFPLEVBQUMsQ0FBSzs0QkFDYkUsU0FBUyxFQUFDLENBQUk7a0hBRWJuQixzREFBUTtnQ0FBQ29CLENBQUMsRUFBQyxDQUFPO2dDQUFDUCxDQUFDLEVBQUMsQ0FBTztnQ0FBQ1EsS0FBSyxFQUFDLENBQU87Ozs7Ozs7Ozs7O29HQUc1Q25CLG9EQUFNOzRCQUFDaUIsU0FBUyxFQUFDLENBQUk7NEJBQUNHLE9BQU8sTUFBUWQsZ0JBQWdCLENBQUMsQ0FBRSxHQUFFLENBQUNlO29DQUFBQSxNQUFNLEVBQUUsQ0FBZ0I7Z0NBQUEsQ0FBQzs7c0NBQUcsQ0FBbUI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFRckgsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2NoYXQtYXBwLy4vY29tcG9uZW50cy9Mb2dpbi5qcz82NTBjIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIjtcclxuaW1wb3J0IHsgQ2hhdEljb24gfSBmcm9tIFwiQGNoYWtyYS11aS9pY29uc1wiO1xyXG5pbXBvcnQgeyBCb3gsIEJ1dHRvbiwgQ2VudGVyLCBTdGFjayB9IGZyb20gXCJAY2hha3JhLXVpL3JlYWN0XCI7XHJcbmltcG9ydCB7IHVzZVNpZ25JbldpdGhHb29nbGUgfSBmcm9tIFwicmVhY3QtZmlyZWJhc2UtaG9va3MvYXV0aFwiO1xyXG5pbXBvcnQgeyBhdXRoIH0gZnJvbSBcIi4uL2ZpcmViYXNlY29uZmlnXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBMb2dpbigpIHtcclxuICBjb25zdCBbc2lnbkluV2l0aEdvb2dsZSwgdXNlciwgbG9hZGluZywgZXJyb3JdID0gdXNlU2lnbkluV2l0aEdvb2dsZShhdXRoKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICBcclxuICAgICAgPEhlYWQ+XHJcbiAgICAgICAgPHRpdGxlPkxvZ2luPC90aXRsZT5cclxuICAgICAgPC9IZWFkPlxyXG5cclxuICAgICAgPENlbnRlciBoPVwiMTAwdmhcIj5cclxuXHJcbiAgICAgICAgPFN0YWNrXHJcbiAgICAgICAgICBhbGlnbj1cImNlbnRlclwiXHJcbiAgICAgICAgICBiZ0NvbG9yPVwiZ3JheS42MDBcIlxyXG4gICAgICAgICAgcD17MTZ9XHJcbiAgICAgICAgICByb3VuZGVkPVwiM3hsXCJcclxuICAgICAgICAgIHNwYWNpbmc9ezEyfVxyXG4gICAgICAgICAgYm94U2hhZG93PVwibGdcIlxyXG4gICAgICAgID5cclxuICAgICAgICAgIFxyXG4gICAgICAgICAgPEJveFxyXG4gICAgICAgICAgICBiZ0NvbG9yPVwiYmx1ZS41MDBcIlxyXG4gICAgICAgICAgICB3PVwiZml0LWNvbnRlbnRcIlxyXG4gICAgICAgICAgICBwPXs1fVxyXG4gICAgICAgICAgICByb3VuZGVkPVwiM3hsXCJcclxuICAgICAgICAgICAgYm94U2hhZG93PVwibWRcIlxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICA8Q2hhdEljb24gdz1cIjEwMHB4XCIgaD1cIjEwMHB4XCIgY29sb3I9XCJ3aGl0ZVwiIC8+XHJcbiAgICAgICAgICA8L0JveD5cclxuXHJcbiAgICAgICAgICA8QnV0dG9uIGJveFNoYWRvdz1cIm1kXCIgb25DbGljaz17KCkgPT4gc2lnbkluV2l0aEdvb2dsZShcIlwiLCB7cHJvbXB0OiBcInNlbGVjdF9hY2NvdW50XCJ9KX0+U2lnbiBJbiB3aXRoIEdvb2dsZTwvQnV0dG9uPlxyXG5cclxuICAgICAgICA8L1N0YWNrPlxyXG5cclxuICAgICAgPC9DZW50ZXI+XHJcbiAgICBcclxuICAgIDwvPlxyXG4gIClcclxufSJdLCJuYW1lcyI6WyJIZWFkIiwiQ2hhdEljb24iLCJCb3giLCJCdXR0b24iLCJDZW50ZXIiLCJTdGFjayIsInVzZVNpZ25JbldpdGhHb29nbGUiLCJhdXRoIiwiTG9naW4iLCJzaWduSW5XaXRoR29vZ2xlIiwidXNlciIsImxvYWRpbmciLCJlcnJvciIsInRpdGxlIiwiaCIsImFsaWduIiwiYmdDb2xvciIsInAiLCJyb3VuZGVkIiwic3BhY2luZyIsImJveFNoYWRvdyIsInciLCJjb2xvciIsIm9uQ2xpY2siLCJwcm9tcHQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Login.js\n");

/***/ }),

/***/ "./firebaseconfig.js":
/*!***************************!*\
  !*** ./firebaseconfig.js ***!
  \***************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"auth\": () => (/* binding */ auth),\n/* harmony export */   \"db\": () => (/* binding */ db)\n/* harmony export */ });\n/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! firebase/app */ \"firebase/app\");\n/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! firebase/auth */ \"firebase/auth\");\n/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! firebase/firestore */ \"firebase/firestore\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([firebase_firestore__WEBPACK_IMPORTED_MODULE_2__, firebase_auth__WEBPACK_IMPORTED_MODULE_1__, firebase_app__WEBPACK_IMPORTED_MODULE_0__]);\n([firebase_firestore__WEBPACK_IMPORTED_MODULE_2__, firebase_auth__WEBPACK_IMPORTED_MODULE_1__, firebase_app__WEBPACK_IMPORTED_MODULE_0__] = __webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__);\n// Import the functions you need from the SDKs you need\n\n\n\n// Your web app's Firebase configuration\nconst firebaseConfig = {\n    apiKey: \"AIzaSyDRPtLlOba6mTC75d1fGemDTKU55egXOts\",\n    authDomain: \"tester-86663.firebaseapp.com\",\n    projectId: \"tester-86663\",\n    storageBucket: \"tester-86663.appspot.com\",\n    messagingSenderId: \"3977724476\",\n    appId: \"1:3977724476:web:69e3198e875e81f3dc7939\"\n};\n// Initialize Firebase\nconst app = (0,firebase_app__WEBPACK_IMPORTED_MODULE_0__.initializeApp)(firebaseConfig);\nconst auth = (0,firebase_auth__WEBPACK_IMPORTED_MODULE_1__.getAuth)();\nconst db = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_2__.getFirestore)();\n\n\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9maXJlYmFzZWNvbmZpZy5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBLEVBQXVEO0FBQ1g7QUFDTDtBQUNVO0FBRWpELEVBQXdDO0FBQ3hDLEtBQUssQ0FBQ0csY0FBYyxHQUFHLENBQUM7SUFDdEJDLE1BQU0sRUFBRSxDQUF5QztJQUNqREMsVUFBVSxFQUFFLENBQThCO0lBQzFDQyxTQUFTLEVBQUUsQ0FBYztJQUN6QkMsYUFBYSxFQUFFLENBQTBCO0lBQ3pDQyxpQkFBaUIsRUFBRSxDQUFZO0lBQy9CQyxLQUFLLEVBQUUsQ0FBeUM7QUFDbEQsQ0FBQztBQUVELEVBQXNCO0FBQ3RCLEtBQUssQ0FBQ0MsR0FBRyxHQUFHViwyREFBYSxDQUFDRyxjQUFjO0FBQ3hDLEtBQUssQ0FBQ1EsSUFBSSxHQUFHVixzREFBTztBQUNwQixLQUFLLENBQUNXLEVBQUUsR0FBR1YsZ0VBQVk7QUFFSCIsInNvdXJjZXMiOlsid2VicGFjazovL2NoYXQtYXBwLy4vZmlyZWJhc2Vjb25maWcuanM/ZDk1MCJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnQgdGhlIGZ1bmN0aW9ucyB5b3UgbmVlZCBmcm9tIHRoZSBTREtzIHlvdSBuZWVkXHJcbmltcG9ydCB7IGluaXRpYWxpemVBcHAgfSBmcm9tIFwiZmlyZWJhc2UvYXBwXCI7XHJcbmltcG9ydCB7IGdldEF1dGggfSBmcm9tIFwiZmlyZWJhc2UvYXV0aFwiO1xyXG5pbXBvcnQgeyBnZXRGaXJlc3RvcmUgfSBmcm9tIFwiZmlyZWJhc2UvZmlyZXN0b3JlXCI7XHJcblxyXG4vLyBZb3VyIHdlYiBhcHAncyBGaXJlYmFzZSBjb25maWd1cmF0aW9uXHJcbmNvbnN0IGZpcmViYXNlQ29uZmlnID0ge1xyXG4gIGFwaUtleTogXCJBSXphU3lEUlB0TGxPYmE2bVRDNzVkMWZHZW1EVEtVNTVlZ1hPdHNcIixcclxuICBhdXRoRG9tYWluOiBcInRlc3Rlci04NjY2My5maXJlYmFzZWFwcC5jb21cIixcclxuICBwcm9qZWN0SWQ6IFwidGVzdGVyLTg2NjYzXCIsXHJcbiAgc3RvcmFnZUJ1Y2tldDogXCJ0ZXN0ZXItODY2NjMuYXBwc3BvdC5jb21cIixcclxuICBtZXNzYWdpbmdTZW5kZXJJZDogXCIzOTc3NzI0NDc2XCIsXHJcbiAgYXBwSWQ6IFwiMTozOTc3NzI0NDc2OndlYjo2OWUzMTk4ZTg3NWU4MWYzZGM3OTM5XCIsXHJcbn07XHJcblxyXG4vLyBJbml0aWFsaXplIEZpcmViYXNlXHJcbmNvbnN0IGFwcCA9IGluaXRpYWxpemVBcHAoZmlyZWJhc2VDb25maWcpO1xyXG5jb25zdCBhdXRoID0gZ2V0QXV0aCgpO1xyXG5jb25zdCBkYiA9IGdldEZpcmVzdG9yZSgpO1xyXG5cclxuZXhwb3J0IHsgYXV0aCwgZGIgfTtcclxuIl0sIm5hbWVzIjpbImluaXRpYWxpemVBcHAiLCJnZXRBdXRoIiwiZ2V0RmlyZXN0b3JlIiwiZmlyZWJhc2VDb25maWciLCJhcGlLZXkiLCJhdXRoRG9tYWluIiwicHJvamVjdElkIiwic3RvcmFnZUJ1Y2tldCIsIm1lc3NhZ2luZ1NlbmRlcklkIiwiYXBwSWQiLCJhcHAiLCJhdXRoIiwiZGIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./firebaseconfig.js\n");

/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @chakra-ui/react */ \"@chakra-ui/react\");\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_firebase_hooks_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-firebase-hooks/auth */ \"react-firebase-hooks/auth\");\n/* harmony import */ var react_firebase_hooks_auth__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_firebase_hooks_auth__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_Login__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Login */ \"./components/Login.js\");\n/* harmony import */ var _firebaseconfig__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../firebaseconfig */ \"./firebaseconfig.js\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_Login__WEBPACK_IMPORTED_MODULE_3__, _firebaseconfig__WEBPACK_IMPORTED_MODULE_4__]);\n([_components_Login__WEBPACK_IMPORTED_MODULE_3__, _firebaseconfig__WEBPACK_IMPORTED_MODULE_4__] = __webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__);\n\n\n\n\n\nfunction MyApp({ Component , pageProps  }) {\n    const [user, loading, error] = (0,react_firebase_hooks_auth__WEBPACK_IMPORTED_MODULE_2__.useAuthState)(_firebaseconfig__WEBPACK_IMPORTED_MODULE_4__.auth);\n    if (loading) {\n        return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.ChakraProvider, {\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Center, {\n                h: \"100vh\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Spinner, {\n                    size: \"xl\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\ASUS\\\\Desktop\\\\whatsaap\\\\pages\\\\_app.js\",\n                    lineNumber: 13,\n                    columnNumber: 11\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\ASUS\\\\Desktop\\\\whatsaap\\\\pages\\\\_app.js\",\n                lineNumber: 12,\n                columnNumber: 9\n            }, this)\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\ASUS\\\\Desktop\\\\whatsaap\\\\pages\\\\_app.js\",\n            lineNumber: 11,\n            columnNumber: 7\n        }, this));\n    }\n    if (!user) {\n        return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.ChakraProvider, {\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Login__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\ASUS\\\\Desktop\\\\whatsaap\\\\pages\\\\_app.js\",\n                lineNumber: 22,\n                columnNumber: 9\n            }, this)\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\ASUS\\\\Desktop\\\\whatsaap\\\\pages\\\\_app.js\",\n            lineNumber: 21,\n            columnNumber: 7\n        }, this));\n    }\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.ChakraProvider, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n            ...pageProps\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\ASUS\\\\Desktop\\\\whatsaap\\\\pages\\\\_app.js\",\n            lineNumber: 29,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\ASUS\\\\Desktop\\\\whatsaap\\\\pages\\\\_app.js\",\n        lineNumber: 28,\n        columnNumber: 5\n    }, this));\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyApp);\n\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBa0U7QUFDVjtBQUNqQjtBQUNDO1NBRS9CTSxLQUFLLENBQUMsQ0FBQyxDQUFDQyxTQUFTLEdBQUVDLFNBQVMsRUFBQyxDQUFDLEVBQUUsQ0FBQztJQUN4QyxLQUFLLEVBQUVDLElBQUksRUFBRUMsT0FBTyxFQUFFQyxLQUFLLElBQUlSLHVFQUFZLENBQUNFLGlEQUFJO0lBRWhELEVBQUUsRUFBRUssT0FBTyxFQUFFLENBQUM7UUFDWixNQUFNLDZFQUNIViw0REFBYztrR0FDWkUsb0RBQU07Z0JBQUNVLENBQUMsRUFBQyxDQUFPO3NHQUNkWCxxREFBTztvQkFBQ1ksSUFBSSxFQUFDLENBQUk7Ozs7Ozs7Ozs7Ozs7Ozs7SUFJMUIsQ0FBQztJQUVELEVBQUUsR0FBR0osSUFBSSxFQUFFLENBQUM7UUFDVixNQUFNLDZFQUNIVCw0REFBYztrR0FDWkkseURBQUs7Ozs7Ozs7Ozs7SUFHWixDQUFDO0lBRUQsTUFBTSw2RUFDSEosNERBQWM7OEZBQ1pPLFNBQVM7ZUFBS0MsU0FBUzs7Ozs7Ozs7Ozs7QUFHOUIsQ0FBQztBQUVELGlFQUFlRixLQUFLIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vY2hhdC1hcHAvLi9wYWdlcy9fYXBwLmpzP2UwYWQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ2hha3JhUHJvdmlkZXIsIFNwaW5uZXIsIENlbnRlciB9IGZyb20gXCJAY2hha3JhLXVpL3JlYWN0XCI7XHJcbmltcG9ydCB7IHVzZUF1dGhTdGF0ZSB9IGZyb20gJ3JlYWN0LWZpcmViYXNlLWhvb2tzL2F1dGgnO1xyXG5pbXBvcnQgTG9naW4gZnJvbSBcIi4uL2NvbXBvbmVudHMvTG9naW5cIjtcclxuaW1wb3J0IHsgYXV0aCB9IGZyb20gXCIuLi9maXJlYmFzZWNvbmZpZ1wiXHJcblxyXG5mdW5jdGlvbiBNeUFwcCh7IENvbXBvbmVudCwgcGFnZVByb3BzIH0pIHtcclxuICBjb25zdCBbdXNlciwgbG9hZGluZywgZXJyb3JdID0gdXNlQXV0aFN0YXRlKGF1dGgpO1xyXG5cclxuICBpZiAobG9hZGluZykge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPENoYWtyYVByb3ZpZGVyPlxyXG4gICAgICAgIDxDZW50ZXIgaD1cIjEwMHZoXCI+XHJcbiAgICAgICAgICA8U3Bpbm5lciBzaXplPVwieGxcIiAvPlxyXG4gICAgICAgIDwvQ2VudGVyPlxyXG4gICAgICA8L0NoYWtyYVByb3ZpZGVyPlxyXG4gICAgKVxyXG4gIH1cclxuXHJcbiAgaWYgKCF1c2VyKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8Q2hha3JhUHJvdmlkZXI+XHJcbiAgICAgICAgPExvZ2luIC8+XHJcbiAgICAgIDwvQ2hha3JhUHJvdmlkZXI+XHJcbiAgICApXHJcbiAgfVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPENoYWtyYVByb3ZpZGVyPlxyXG4gICAgICA8Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9IC8+XHJcbiAgICA8L0NoYWtyYVByb3ZpZGVyPlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTXlBcHBcclxuIl0sIm5hbWVzIjpbIkNoYWtyYVByb3ZpZGVyIiwiU3Bpbm5lciIsIkNlbnRlciIsInVzZUF1dGhTdGF0ZSIsIkxvZ2luIiwiYXV0aCIsIk15QXBwIiwiQ29tcG9uZW50IiwicGFnZVByb3BzIiwidXNlciIsImxvYWRpbmciLCJlcnJvciIsImgiLCJzaXplIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/_app.js\n");

/***/ }),

/***/ "@chakra-ui/icons":
/*!***********************************!*\
  !*** external "@chakra-ui/icons" ***!
  \***********************************/
/***/ ((module) => {

module.exports = require("@chakra-ui/icons");

/***/ }),

/***/ "@chakra-ui/react":
/*!***********************************!*\
  !*** external "@chakra-ui/react" ***!
  \***********************************/
/***/ ((module) => {

module.exports = require("@chakra-ui/react");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/***/ ((module) => {

module.exports = require("next/head");

/***/ }),

/***/ "react-firebase-hooks/auth":
/*!********************************************!*\
  !*** external "react-firebase-hooks/auth" ***!
  \********************************************/
/***/ ((module) => {

module.exports = require("react-firebase-hooks/auth");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "firebase/app":
/*!*******************************!*\
  !*** external "firebase/app" ***!
  \*******************************/
/***/ ((module) => {

module.exports = import("firebase/app");;

/***/ }),

/***/ "firebase/auth":
/*!********************************!*\
  !*** external "firebase/auth" ***!
  \********************************/
/***/ ((module) => {

module.exports = import("firebase/auth");;

/***/ }),

/***/ "firebase/firestore":
/*!*************************************!*\
  !*** external "firebase/firestore" ***!
  \*************************************/
/***/ ((module) => {

module.exports = import("firebase/firestore");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/_app.js"));
module.exports = __webpack_exports__;

})();