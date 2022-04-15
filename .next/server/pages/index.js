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
exports.id = "pages/index";
exports.ids = ["pages/index"];
exports.modules = {

/***/ "./components/Sidebar.js":
/*!*******************************!*\
  !*** ./components/Sidebar.js ***!
  \*******************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Sidebar)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _chakra_ui_avatar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @chakra-ui/avatar */ \"@chakra-ui/avatar\");\n/* harmony import */ var _chakra_ui_avatar__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_avatar__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @chakra-ui/react */ \"@chakra-ui/react\");\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _chakra_ui_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @chakra-ui/button */ \"@chakra-ui/button\");\n/* harmony import */ var _chakra_ui_button__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_button__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _chakra_ui_layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @chakra-ui/layout */ \"@chakra-ui/layout\");\n/* harmony import */ var _chakra_ui_layout__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_layout__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _chakra_ui_icons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @chakra-ui/icons */ \"@chakra-ui/icons\");\n/* harmony import */ var _chakra_ui_icons__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_icons__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! firebase/auth */ \"firebase/auth\");\n/* harmony import */ var _firebaseconfig__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../firebaseconfig */ \"./firebaseconfig.js\");\n/* harmony import */ var react_firebase_hooks_auth__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-firebase-hooks/auth */ \"react-firebase-hooks/auth\");\n/* harmony import */ var react_firebase_hooks_auth__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_firebase_hooks_auth__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var react_firebase_hooks_firestore__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-firebase-hooks/firestore */ \"react-firebase-hooks/firestore\");\n/* harmony import */ var react_firebase_hooks_firestore__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_firebase_hooks_firestore__WEBPACK_IMPORTED_MODULE_9__);\n/* harmony import */ var _firebase_firestore__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @firebase/firestore */ \"@firebase/firestore\");\n/* harmony import */ var _utils_getOtherEmail__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../utils/getOtherEmail */ \"./utils/getOtherEmail.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_12__);\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_firebaseconfig__WEBPACK_IMPORTED_MODULE_7__, firebase_auth__WEBPACK_IMPORTED_MODULE_6__, _firebase_firestore__WEBPACK_IMPORTED_MODULE_10__]);\n([_firebaseconfig__WEBPACK_IMPORTED_MODULE_7__, firebase_auth__WEBPACK_IMPORTED_MODULE_6__, _firebase_firestore__WEBPACK_IMPORTED_MODULE_10__] = __webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__);\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nfunction Sidebar() {\n    const [user] = (0,react_firebase_hooks_auth__WEBPACK_IMPORTED_MODULE_8__.useAuthState)(_firebaseconfig__WEBPACK_IMPORTED_MODULE_7__.auth);\n    const [snapshot, loading, error] = (0,react_firebase_hooks_firestore__WEBPACK_IMPORTED_MODULE_9__.useCollection)((0,_firebase_firestore__WEBPACK_IMPORTED_MODULE_10__.collection)(_firebaseconfig__WEBPACK_IMPORTED_MODULE_7__.db, \"chats\"));\n    const chats = snapshot === null || snapshot === void 0 ? void 0 : snapshot.docs.map((doc)=>({\n            id: doc.id,\n            ...doc.data()\n        })\n    );\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_12__.useRouter)();\n    const redirect = (id)=>{\n        router.push(`/chat/${id}`);\n    };\n    const chatExists = (email)=>{\n        return chats === null || chats === void 0 ? void 0 : chats.find((chat)=>chat.users.includes(user.email) && chat.users.includes(email)\n        );\n    };\n    const newChat = async ()=>{\n        const input = prompt(\"Enter email of chat recipient\");\n        if (!chatExists(input) && input != user.email) {\n            await (0,_firebase_firestore__WEBPACK_IMPORTED_MODULE_10__.addDoc)((0,_firebase_firestore__WEBPACK_IMPORTED_MODULE_10__.collection)(_firebaseconfig__WEBPACK_IMPORTED_MODULE_7__.db, \"chats\"), {\n                users: [\n                    user.email,\n                    input\n                ]\n            });\n        }\n    };\n    const chatList = ()=>{\n        return chats === null || chats === void 0 ? void 0 : chats.filter((chat)=>chat.users.includes(user.email)\n        ).map((chat)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_layout__WEBPACK_IMPORTED_MODULE_4__.Flex, {\n                p: 3,\n                align: \"center\",\n                _hover: {\n                    bg: \"gray.100\",\n                    cursor: \"pointer\"\n                },\n                onClick: ()=>redirect(chat.id)\n                ,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_avatar__WEBPACK_IMPORTED_MODULE_1__.Avatar, {\n                        src: \"\",\n                        marginEnd: 3\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\ASUS\\\\Desktop\\\\whatsaap\\\\components\\\\Sidebar.js\",\n                        lineNumber: 40,\n                        columnNumber: 13\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_layout__WEBPACK_IMPORTED_MODULE_4__.Text, {\n                        children: (0,_utils_getOtherEmail__WEBPACK_IMPORTED_MODULE_11__[\"default\"])(chat.users, user)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\ASUS\\\\Desktop\\\\whatsaap\\\\components\\\\Sidebar.js\",\n                        lineNumber: 41,\n                        columnNumber: 13\n                    }, this)\n                ]\n            }, Math.random(), true, {\n                fileName: \"C:\\\\Users\\\\ASUS\\\\Desktop\\\\whatsaap\\\\components\\\\Sidebar.js\",\n                lineNumber: 39,\n                columnNumber: 11\n            }, this)\n        );\n    };\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_layout__WEBPACK_IMPORTED_MODULE_4__.Flex, {\n        // bg=\"blue.100\"\n        h: \"100%\",\n        w: \"300px\",\n        borderEnd: \"1px solid\",\n        borderColor: \"gray.200\",\n        direction: \"column\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_layout__WEBPACK_IMPORTED_MODULE_4__.Flex, {\n                // bg=\"red.100\"\n                h: \"81px\",\n                w: \"100%\",\n                align: \"center\",\n                justifyContent: \"space-between\",\n                borderBottom: \"1px solid\",\n                borderColor: \"gray.200\",\n                p: 3,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_layout__WEBPACK_IMPORTED_MODULE_4__.Flex, {\n                        align: \"center\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_avatar__WEBPACK_IMPORTED_MODULE_1__.Avatar, {\n                                src: user.photoURL,\n                                marginEnd: 3\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\ASUS\\\\Desktop\\\\whatsaap\\\\components\\\\Sidebar.js\",\n                                lineNumber: 65,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_layout__WEBPACK_IMPORTED_MODULE_4__.Text, {\n                                children: user.displayName\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\ASUS\\\\Desktop\\\\whatsaap\\\\components\\\\Sidebar.js\",\n                                lineNumber: 66,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\ASUS\\\\Desktop\\\\whatsaap\\\\components\\\\Sidebar.js\",\n                        lineNumber: 64,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_button__WEBPACK_IMPORTED_MODULE_3__.IconButton, {\n                        size: \"sm\",\n                        isRound: true,\n                        icon: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_icons__WEBPACK_IMPORTED_MODULE_5__.ArrowLeftIcon, {}, void 0, false, void 0, void 0),\n                        onClick: ()=>(0,firebase_auth__WEBPACK_IMPORTED_MODULE_6__.signOut)(_firebaseconfig__WEBPACK_IMPORTED_MODULE_7__.auth)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\ASUS\\\\Desktop\\\\whatsaap\\\\components\\\\Sidebar.js\",\n                        lineNumber: 69,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\ASUS\\\\Desktop\\\\whatsaap\\\\components\\\\Sidebar.js\",\n                lineNumber: 56,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Button, {\n                m: 5,\n                p: 4,\n                onClick: ()=>newChat()\n                ,\n                children: \"New Chat\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\ASUS\\\\Desktop\\\\whatsaap\\\\components\\\\Sidebar.js\",\n                lineNumber: 73,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_layout__WEBPACK_IMPORTED_MODULE_4__.Flex, {\n                overflowX: \"scroll\",\n                direction: \"column\",\n                sx: {\n                    scrollbarWidth: \"none\"\n                },\n                flex: 1,\n                children: chatList()\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\ASUS\\\\Desktop\\\\whatsaap\\\\components\\\\Sidebar.js\",\n                lineNumber: 75,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\ASUS\\\\Desktop\\\\whatsaap\\\\components\\\\Sidebar.js\",\n        lineNumber: 48,\n        columnNumber: 5\n    }, this));\n};\n\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL1NpZGViYXIuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQTBDO0FBQ0Q7QUFDSztBQUNBO0FBQ0U7QUFDVDtBQUNDO0FBQ2dCO0FBQ007QUFDTjtBQUNsQjtBQUNZO0FBQ1g7QUFFeEIsUUFBUSxDQUFDZSxPQUFPLEdBQUcsQ0FBQztJQUNqQyxLQUFLLEVBQUVDLElBQUksSUFBSVIsdUVBQVksQ0FBQ0QsaURBQUk7SUFDaEMsS0FBSyxFQUFFVSxRQUFRLEVBQUVDLE9BQU8sRUFBRUMsS0FBSyxJQUFJViw2RUFBYSxDQUFDQyxnRUFBVSxDQUFDRSwrQ0FBRSxFQUFFLENBQU87SUFDdkUsS0FBSyxDQUFDUSxLQUFLLEdBQUdILFFBQVEsYUFBUkEsUUFBUSxLQUFSQSxJQUFJLENBQUpBLENBQWMsR0FBZEEsSUFBSSxDQUFKQSxDQUFjLEdBQWRBLFFBQVEsQ0FBRUksSUFBSSxDQUFDQyxHQUFHLEVBQUNDLEdBQUcsSUFBSyxDQUFDQztZQUFBQSxFQUFFLEVBQUVELEdBQUcsQ0FBQ0MsRUFBRTtlQUFLRCxHQUFHLENBQUNFLElBQUk7UUFBRSxDQUFDOztJQUNwRSxLQUFLLENBQUNDLE1BQU0sR0FBR1osdURBQVM7SUFFeEIsS0FBSyxDQUFDYSxRQUFRLElBQUlILEVBQUUsR0FBSyxDQUFDO1FBQ3hCRSxNQUFNLENBQUNFLElBQUksRUFBRSxNQUFNLEVBQUVKLEVBQUU7SUFDekIsQ0FBQztJQUVELEtBQUssQ0FBQ0ssVUFBVSxJQUFHQyxLQUFLO2VBQUlWLEtBQUssYUFBTEEsS0FBSyxLQUFMQSxJQUFJLENBQUpBLENBQVcsR0FBWEEsSUFBSSxDQUFKQSxDQUFXLEdBQVhBLEtBQUssQ0FBRVcsSUFBSSxFQUFDQyxJQUFJLEdBQUtBLElBQUksQ0FBQ0MsS0FBSyxDQUFDQyxRQUFRLENBQUNsQixJQUFJLENBQUNjLEtBQUssS0FBS0UsSUFBSSxDQUFDQyxLQUFLLENBQUNDLFFBQVEsQ0FBQ0osS0FBSzs7O0lBRTdHLEtBQUssQ0FBQ0ssT0FBTyxhQUFlLENBQUM7UUFDM0IsS0FBSyxDQUFDQyxLQUFLLEdBQUdDLE1BQU0sQ0FBQyxDQUErQjtRQUNwRCxFQUFFLEdBQUdSLFVBQVUsQ0FBQ08sS0FBSyxLQUFNQSxLQUFLLElBQUlwQixJQUFJLENBQUNjLEtBQUssRUFBRyxDQUFDO1lBQ2hELEtBQUssQ0FBQ25CLDREQUFNLENBQUNELGdFQUFVLENBQUNFLCtDQUFFLEVBQUUsQ0FBTyxTQUFHLENBQUM7Z0JBQUNxQixLQUFLLEVBQUUsQ0FBQ2pCO29CQUFBQSxJQUFJLENBQUNjLEtBQUs7b0JBQUVNLEtBQUs7Z0JBQUEsQ0FBQztZQUFDLENBQUM7UUFDdEUsQ0FBQztJQUNILENBQUM7SUFFRCxLQUFLLENBQUNFLFFBQVEsT0FBUyxDQUFDO1FBQ3RCLE1BQU0sQ0FDSmxCLEtBQUssYUFBTEEsS0FBSyxLQUFMQSxJQUFJLENBQUpBLENBQWEsR0FBYkEsSUFBSSxDQUFKQSxDQUFhLEdBQWJBLEtBQUssQ0FBRW1CLE1BQU0sRUFBQ1AsSUFBSSxHQUFJQSxJQUFJLENBQUNDLEtBQUssQ0FBQ0MsUUFBUSxDQUFDbEIsSUFBSSxDQUFDYyxLQUFLO1VBQ25EUixHQUFHLEVBQ0ZVLElBQUksK0VBQ0Q3QixtREFBSTtnQkFBcUJxQyxDQUFDLEVBQUUsQ0FBQztnQkFBRUMsS0FBSyxFQUFDLENBQVE7Z0JBQUNDLE1BQU0sRUFBRSxDQUFDQztvQkFBQUEsRUFBRSxFQUFFLENBQVU7b0JBQUVDLE1BQU0sRUFBRSxDQUFTO2dCQUFBLENBQUM7Z0JBQUVDLE9BQU8sTUFBUWxCLFFBQVEsQ0FBQ0ssSUFBSSxDQUFDUixFQUFFOzs7Z0dBQ3hIeEIscURBQU07d0JBQUM4QyxHQUFHLEVBQUMsQ0FBRTt3QkFBQ0MsU0FBUyxFQUFFLENBQUM7Ozs7OztnR0FDMUIzQyxtREFBSTtrQ0FBRVMsaUVBQWEsQ0FBQ21CLElBQUksQ0FBQ0MsS0FBSyxFQUFFakIsSUFBSTs7Ozs7OztlQUY1QmdDLElBQUksQ0FBQ0MsTUFBTTs7Ozs7O0lBTTlCLENBQUM7SUFFRCxNQUFNLDZFQUNIOUMsbURBQUk7UUFDSCxFQUFnQjtRQUNoQitDLENBQUMsRUFBQyxDQUFNO1FBQ1JDLENBQUMsRUFBQyxDQUFPO1FBQ1RDLFNBQVMsRUFBQyxDQUFXO1FBQUNDLFdBQVcsRUFBQyxDQUFVO1FBQzVDQyxTQUFTLEVBQUMsQ0FBUTs7d0ZBR2pCbkQsbURBQUk7Z0JBQ0gsRUFBZTtnQkFDZitDLENBQUMsRUFBQyxDQUFNO2dCQUFDQyxDQUFDLEVBQUMsQ0FBTTtnQkFDakJWLEtBQUssRUFBQyxDQUFRO2dCQUFDYyxjQUFjLEVBQUMsQ0FBZTtnQkFDN0NDLFlBQVksRUFBQyxDQUFXO2dCQUFDSCxXQUFXLEVBQUMsQ0FBVTtnQkFDL0NiLENBQUMsRUFBRSxDQUFDOztnR0FHSHJDLG1EQUFJO3dCQUFDc0MsS0FBSyxFQUFDLENBQVE7O3dHQUNqQnpDLHFEQUFNO2dDQUFDOEMsR0FBRyxFQUFFOUIsSUFBSSxDQUFDeUMsUUFBUTtnQ0FBRVYsU0FBUyxFQUFFLENBQUM7Ozs7Ozt3R0FDdkMzQyxtREFBSTswQ0FBRVksSUFBSSxDQUFDMEMsV0FBVzs7Ozs7Ozs7Ozs7O2dHQUd4QnhELHlEQUFVO3dCQUFDeUQsSUFBSSxFQUFDLENBQUk7d0JBQUNDLE9BQU87d0JBQUNDLElBQUksOEVBQUd4RCwyREFBYTt3QkFBS3dDLE9BQU8sTUFBUXZDLHNEQUFPLENBQUNDLGlEQUFJOzs7Ozs7Ozs7Ozs7d0ZBSW5GTixvREFBTTtnQkFBQzZELENBQUMsRUFBRSxDQUFDO2dCQUFFdEIsQ0FBQyxFQUFFLENBQUM7Z0JBQUVLLE9BQU8sTUFBUVYsT0FBTzs7MEJBQUksQ0FBUTs7Ozs7O3dGQUVyRGhDLG1EQUFJO2dCQUFDNEQsU0FBUyxFQUFDLENBQVE7Z0JBQUNULFNBQVMsRUFBQyxDQUFRO2dCQUFDVSxFQUFFLEVBQUUsQ0FBQ0M7b0JBQUFBLGNBQWMsRUFBRSxDQUFNO2dCQUFBLENBQUM7Z0JBQUVDLElBQUksRUFBRSxDQUFDOzBCQUM5RTVCLFFBQVE7Ozs7Ozs7Ozs7OztBQU1qQixDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vY2hhdC1hcHAvLi9jb21wb25lbnRzL1NpZGViYXIuanM/M2RhYyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBdmF0YXIgfSBmcm9tIFwiQGNoYWtyYS11aS9hdmF0YXJcIjtcclxuaW1wb3J0IHsgQnV0dG9uIH0gZnJvbSBcIkBjaGFrcmEtdWkvcmVhY3RcIjtcclxuaW1wb3J0IHsgSWNvbkJ1dHRvbiB9IGZyb20gXCJAY2hha3JhLXVpL2J1dHRvblwiO1xyXG5pbXBvcnQgeyBGbGV4LCBUZXh0IH0gZnJvbSBcIkBjaGFrcmEtdWkvbGF5b3V0XCI7XHJcbmltcG9ydCB7IEFycm93TGVmdEljb24gfSBmcm9tIFwiQGNoYWtyYS11aS9pY29uc1wiO1xyXG5pbXBvcnQgeyBzaWduT3V0IH0gZnJvbSBcImZpcmViYXNlL2F1dGhcIjtcclxuaW1wb3J0IHsgYXV0aCB9IGZyb20gXCIuLi9maXJlYmFzZWNvbmZpZ1wiO1xyXG5pbXBvcnQgeyB1c2VBdXRoU3RhdGUgfSBmcm9tICdyZWFjdC1maXJlYmFzZS1ob29rcy9hdXRoJztcclxuaW1wb3J0IHsgdXNlQ29sbGVjdGlvbiB9IGZyb20gJ3JlYWN0LWZpcmViYXNlLWhvb2tzL2ZpcmVzdG9yZSc7XHJcbmltcG9ydCB7IGNvbGxlY3Rpb24sIGFkZERvYyB9IGZyb20gXCJAZmlyZWJhc2UvZmlyZXN0b3JlXCI7XHJcbmltcG9ydCB7IGRiIH0gZnJvbSBcIi4uL2ZpcmViYXNlY29uZmlnXCI7XHJcbmltcG9ydCBnZXRPdGhlckVtYWlsIGZyb20gXCIuLi91dGlscy9nZXRPdGhlckVtYWlsXCI7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gU2lkZWJhcigpIHtcclxuICBjb25zdCBbdXNlcl0gPSB1c2VBdXRoU3RhdGUoYXV0aCk7XHJcbiAgY29uc3QgW3NuYXBzaG90LCBsb2FkaW5nLCBlcnJvcl0gPSB1c2VDb2xsZWN0aW9uKGNvbGxlY3Rpb24oZGIsIFwiY2hhdHNcIikpO1xyXG4gIGNvbnN0IGNoYXRzID0gc25hcHNob3Q/LmRvY3MubWFwKGRvYyA9PiAoe2lkOiBkb2MuaWQsIC4uLmRvYy5kYXRhKCl9KSk7XHJcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcblxyXG4gIGNvbnN0IHJlZGlyZWN0ID0gKGlkKSA9PiB7XHJcbiAgICByb3V0ZXIucHVzaChgL2NoYXQvJHtpZH1gKTtcclxuICB9XHJcblxyXG4gIGNvbnN0IGNoYXRFeGlzdHMgPSBlbWFpbCA9PiBjaGF0cz8uZmluZChjaGF0ID0+IChjaGF0LnVzZXJzLmluY2x1ZGVzKHVzZXIuZW1haWwpICYmIGNoYXQudXNlcnMuaW5jbHVkZXMoZW1haWwpKSlcclxuXHJcbiAgY29uc3QgbmV3Q2hhdCA9IGFzeW5jICgpID0+IHtcclxuICAgIGNvbnN0IGlucHV0ID0gcHJvbXB0KFwiRW50ZXIgZW1haWwgb2YgY2hhdCByZWNpcGllbnRcIik7XHJcbiAgICBpZiAoIWNoYXRFeGlzdHMoaW5wdXQpICYmIChpbnB1dCAhPSB1c2VyLmVtYWlsKSkge1xyXG4gICAgICBhd2FpdCBhZGREb2MoY29sbGVjdGlvbihkYiwgXCJjaGF0c1wiKSwgeyB1c2VyczogW3VzZXIuZW1haWwsIGlucHV0XSB9KVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgY29uc3QgY2hhdExpc3QgPSAoKSA9PiB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICBjaGF0cz8uZmlsdGVyKGNoYXQgPT4gY2hhdC51c2Vycy5pbmNsdWRlcyh1c2VyLmVtYWlsKSlcclxuICAgICAgLm1hcChcclxuICAgICAgICBjaGF0ID0+IFxyXG4gICAgICAgICAgPEZsZXgga2V5PXtNYXRoLnJhbmRvbSgpfSBwPXszfSBhbGlnbj1cImNlbnRlclwiIF9ob3Zlcj17e2JnOiBcImdyYXkuMTAwXCIsIGN1cnNvcjogXCJwb2ludGVyXCJ9fSBvbkNsaWNrPXsoKSA9PiByZWRpcmVjdChjaGF0LmlkKX0+XHJcbiAgICAgICAgICAgIDxBdmF0YXIgc3JjPVwiXCIgbWFyZ2luRW5kPXszfSAvPlxyXG4gICAgICAgICAgICA8VGV4dD57Z2V0T3RoZXJFbWFpbChjaGF0LnVzZXJzLCB1c2VyKX08L1RleHQ+XHJcbiAgICAgICAgICA8L0ZsZXg+XHJcbiAgICAgIClcclxuICAgIClcclxuICB9XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8RmxleFxyXG4gICAgICAvLyBiZz1cImJsdWUuMTAwXCJcclxuICAgICAgaD1cIjEwMCVcIlxyXG4gICAgICB3PVwiMzAwcHhcIlxyXG4gICAgICBib3JkZXJFbmQ9XCIxcHggc29saWRcIiBib3JkZXJDb2xvcj1cImdyYXkuMjAwXCJcclxuICAgICAgZGlyZWN0aW9uPVwiY29sdW1uXCJcclxuICAgID5cclxuXHJcbiAgICAgIDxGbGV4XHJcbiAgICAgICAgLy8gYmc9XCJyZWQuMTAwXCJcclxuICAgICAgICBoPVwiODFweFwiIHc9XCIxMDAlXCJcclxuICAgICAgICBhbGlnbj1cImNlbnRlclwiIGp1c3RpZnlDb250ZW50PVwic3BhY2UtYmV0d2VlblwiXHJcbiAgICAgICAgYm9yZGVyQm90dG9tPVwiMXB4IHNvbGlkXCIgYm9yZGVyQ29sb3I9XCJncmF5LjIwMFwiXHJcbiAgICAgICAgcD17M31cclxuICAgICAgPlxyXG5cclxuICAgICAgICA8RmxleCBhbGlnbj1cImNlbnRlclwiPlxyXG4gICAgICAgICAgPEF2YXRhciBzcmM9e3VzZXIucGhvdG9VUkx9IG1hcmdpbkVuZD17M30gLz5cclxuICAgICAgICAgIDxUZXh0Pnt1c2VyLmRpc3BsYXlOYW1lfTwvVGV4dD5cclxuICAgICAgICA8L0ZsZXg+XHJcblxyXG4gICAgICAgIDxJY29uQnV0dG9uIHNpemU9XCJzbVwiIGlzUm91bmQgaWNvbj17PEFycm93TGVmdEljb24gLz59IG9uQ2xpY2s9eygpID0+IHNpZ25PdXQoYXV0aCl9IC8+XHJcblxyXG4gICAgICA8L0ZsZXg+XHJcblxyXG4gICAgICA8QnV0dG9uIG09ezV9IHA9ezR9IG9uQ2xpY2s9eygpID0+IG5ld0NoYXQoKX0+TmV3IENoYXQ8L0J1dHRvbj5cclxuXHJcbiAgICAgIDxGbGV4IG92ZXJmbG93WD1cInNjcm9sbFwiIGRpcmVjdGlvbj1cImNvbHVtblwiIHN4PXt7c2Nyb2xsYmFyV2lkdGg6IFwibm9uZVwifX0gZmxleD17MX0gPlxyXG4gICAgICAgIHtjaGF0TGlzdCgpfVxyXG4gICAgICA8L0ZsZXg+XHJcblxyXG4gICAgPC9GbGV4PlxyXG5cclxuICApXHJcbn0iXSwibmFtZXMiOlsiQXZhdGFyIiwiQnV0dG9uIiwiSWNvbkJ1dHRvbiIsIkZsZXgiLCJUZXh0IiwiQXJyb3dMZWZ0SWNvbiIsInNpZ25PdXQiLCJhdXRoIiwidXNlQXV0aFN0YXRlIiwidXNlQ29sbGVjdGlvbiIsImNvbGxlY3Rpb24iLCJhZGREb2MiLCJkYiIsImdldE90aGVyRW1haWwiLCJ1c2VSb3V0ZXIiLCJTaWRlYmFyIiwidXNlciIsInNuYXBzaG90IiwibG9hZGluZyIsImVycm9yIiwiY2hhdHMiLCJkb2NzIiwibWFwIiwiZG9jIiwiaWQiLCJkYXRhIiwicm91dGVyIiwicmVkaXJlY3QiLCJwdXNoIiwiY2hhdEV4aXN0cyIsImVtYWlsIiwiZmluZCIsImNoYXQiLCJ1c2VycyIsImluY2x1ZGVzIiwibmV3Q2hhdCIsImlucHV0IiwicHJvbXB0IiwiY2hhdExpc3QiLCJmaWx0ZXIiLCJwIiwiYWxpZ24iLCJfaG92ZXIiLCJiZyIsImN1cnNvciIsIm9uQ2xpY2siLCJzcmMiLCJtYXJnaW5FbmQiLCJNYXRoIiwicmFuZG9tIiwiaCIsInciLCJib3JkZXJFbmQiLCJib3JkZXJDb2xvciIsImRpcmVjdGlvbiIsImp1c3RpZnlDb250ZW50IiwiYm9yZGVyQm90dG9tIiwicGhvdG9VUkwiLCJkaXNwbGF5TmFtZSIsInNpemUiLCJpc1JvdW5kIiwiaWNvbiIsIm0iLCJvdmVyZmxvd1giLCJzeCIsInNjcm9sbGJhcldpZHRoIiwiZmxleCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Sidebar.js\n");

/***/ }),

/***/ "./firebaseconfig.js":
/*!***************************!*\
  !*** ./firebaseconfig.js ***!
  \***************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"auth\": () => (/* binding */ auth),\n/* harmony export */   \"db\": () => (/* binding */ db)\n/* harmony export */ });\n/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! firebase/app */ \"firebase/app\");\n/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! firebase/auth */ \"firebase/auth\");\n/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! firebase/firestore */ \"firebase/firestore\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([firebase_firestore__WEBPACK_IMPORTED_MODULE_2__, firebase_auth__WEBPACK_IMPORTED_MODULE_1__, firebase_app__WEBPACK_IMPORTED_MODULE_0__]);\n([firebase_firestore__WEBPACK_IMPORTED_MODULE_2__, firebase_auth__WEBPACK_IMPORTED_MODULE_1__, firebase_app__WEBPACK_IMPORTED_MODULE_0__] = __webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__);\n// Import the functions you need from the SDKs you need\n\n\n\n// Your web app's Firebase configuration\nconst firebaseConfig = {\n    apiKey: \"AIzaSyDRPtLlOba6mTC75d1fGemDTKU55egXOts\",\n    authDomain: \"tester-86663.firebaseapp.com\",\n    projectId: \"tester-86663\",\n    storageBucket: \"tester-86663.appspot.com\",\n    messagingSenderId: \"3977724476\",\n    appId: \"1:3977724476:web:69e3198e875e81f3dc7939\"\n};\n// Initialize Firebase\nconst app = (0,firebase_app__WEBPACK_IMPORTED_MODULE_0__.initializeApp)(firebaseConfig);\nconst auth = (0,firebase_auth__WEBPACK_IMPORTED_MODULE_1__.getAuth)();\nconst db = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_2__.getFirestore)();\n\n\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9maXJlYmFzZWNvbmZpZy5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBLEVBQXVEO0FBQ1g7QUFDTDtBQUNVO0FBRWpELEVBQXdDO0FBQ3hDLEtBQUssQ0FBQ0csY0FBYyxHQUFHLENBQUM7SUFDdEJDLE1BQU0sRUFBRSxDQUF5QztJQUNqREMsVUFBVSxFQUFFLENBQThCO0lBQzFDQyxTQUFTLEVBQUUsQ0FBYztJQUN6QkMsYUFBYSxFQUFFLENBQTBCO0lBQ3pDQyxpQkFBaUIsRUFBRSxDQUFZO0lBQy9CQyxLQUFLLEVBQUUsQ0FBeUM7QUFDbEQsQ0FBQztBQUVELEVBQXNCO0FBQ3RCLEtBQUssQ0FBQ0MsR0FBRyxHQUFHViwyREFBYSxDQUFDRyxjQUFjO0FBQ3hDLEtBQUssQ0FBQ1EsSUFBSSxHQUFHVixzREFBTztBQUNwQixLQUFLLENBQUNXLEVBQUUsR0FBR1YsZ0VBQVk7QUFFSCIsInNvdXJjZXMiOlsid2VicGFjazovL2NoYXQtYXBwLy4vZmlyZWJhc2Vjb25maWcuanM/ZDk1MCJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnQgdGhlIGZ1bmN0aW9ucyB5b3UgbmVlZCBmcm9tIHRoZSBTREtzIHlvdSBuZWVkXHJcbmltcG9ydCB7IGluaXRpYWxpemVBcHAgfSBmcm9tIFwiZmlyZWJhc2UvYXBwXCI7XHJcbmltcG9ydCB7IGdldEF1dGggfSBmcm9tIFwiZmlyZWJhc2UvYXV0aFwiO1xyXG5pbXBvcnQgeyBnZXRGaXJlc3RvcmUgfSBmcm9tIFwiZmlyZWJhc2UvZmlyZXN0b3JlXCI7XHJcblxyXG4vLyBZb3VyIHdlYiBhcHAncyBGaXJlYmFzZSBjb25maWd1cmF0aW9uXHJcbmNvbnN0IGZpcmViYXNlQ29uZmlnID0ge1xyXG4gIGFwaUtleTogXCJBSXphU3lEUlB0TGxPYmE2bVRDNzVkMWZHZW1EVEtVNTVlZ1hPdHNcIixcclxuICBhdXRoRG9tYWluOiBcInRlc3Rlci04NjY2My5maXJlYmFzZWFwcC5jb21cIixcclxuICBwcm9qZWN0SWQ6IFwidGVzdGVyLTg2NjYzXCIsXHJcbiAgc3RvcmFnZUJ1Y2tldDogXCJ0ZXN0ZXItODY2NjMuYXBwc3BvdC5jb21cIixcclxuICBtZXNzYWdpbmdTZW5kZXJJZDogXCIzOTc3NzI0NDc2XCIsXHJcbiAgYXBwSWQ6IFwiMTozOTc3NzI0NDc2OndlYjo2OWUzMTk4ZTg3NWU4MWYzZGM3OTM5XCIsXHJcbn07XHJcblxyXG4vLyBJbml0aWFsaXplIEZpcmViYXNlXHJcbmNvbnN0IGFwcCA9IGluaXRpYWxpemVBcHAoZmlyZWJhc2VDb25maWcpO1xyXG5jb25zdCBhdXRoID0gZ2V0QXV0aCgpO1xyXG5jb25zdCBkYiA9IGdldEZpcmVzdG9yZSgpO1xyXG5cclxuZXhwb3J0IHsgYXV0aCwgZGIgfTtcclxuIl0sIm5hbWVzIjpbImluaXRpYWxpemVBcHAiLCJnZXRBdXRoIiwiZ2V0RmlyZXN0b3JlIiwiZmlyZWJhc2VDb25maWciLCJhcGlLZXkiLCJhdXRoRG9tYWluIiwicHJvamVjdElkIiwic3RvcmFnZUJ1Y2tldCIsIm1lc3NhZ2luZ1NlbmRlcklkIiwiYXBwSWQiLCJhcHAiLCJhdXRoIiwiZGIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./firebaseconfig.js\n");

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Home)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @chakra-ui/react */ \"@chakra-ui/react\");\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ \"next/head\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_Sidebar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Sidebar */ \"./components/Sidebar.js\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_Sidebar__WEBPACK_IMPORTED_MODULE_3__]);\n_components_Sidebar__WEBPACK_IMPORTED_MODULE_3__ = (__webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__)[0];\n\n\n\n\nfunction Home() {\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_2___default()), {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                        children: \"Chat App\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\ASUS\\\\Desktop\\\\whatsaap\\\\pages\\\\index.js\",\n                        lineNumber: 9,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        name: \"description\",\n                        content: \"Generated by create next app\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\ASUS\\\\Desktop\\\\whatsaap\\\\pages\\\\index.js\",\n                        lineNumber: 10,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                        rel: \"icon\",\n                        href: \"/favicon.ico\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\ASUS\\\\Desktop\\\\whatsaap\\\\pages\\\\index.js\",\n                        lineNumber: 11,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\ASUS\\\\Desktop\\\\whatsaap\\\\pages\\\\index.js\",\n                lineNumber: 8,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Box, {\n                h: \"100vh\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Sidebar__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\ASUS\\\\Desktop\\\\whatsaap\\\\pages\\\\index.js\",\n                    lineNumber: 15,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\ASUS\\\\Desktop\\\\whatsaap\\\\pages\\\\index.js\",\n                lineNumber: 14,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\ASUS\\\\Desktop\\\\whatsaap\\\\pages\\\\index.js\",\n        lineNumber: 7,\n        columnNumber: 5\n    }, this));\n};\n\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBc0M7QUFDVjtBQUNlO0FBRTVCLFFBQVEsQ0FBQ0csSUFBSSxHQUFHLENBQUM7SUFDOUIsTUFBTSw2RUFDSEMsQ0FBRzs7d0ZBQ0RILGtEQUFJOztnR0FDRkksQ0FBSztrQ0FBQyxDQUFROzs7Ozs7Z0dBQ2RDLENBQUk7d0JBQUNDLElBQUksRUFBQyxDQUFhO3dCQUFDQyxPQUFPLEVBQUMsQ0FBOEI7Ozs7OztnR0FDOURDLENBQUk7d0JBQUNDLEdBQUcsRUFBQyxDQUFNO3dCQUFDQyxJQUFJLEVBQUMsQ0FBYzs7Ozs7Ozs7Ozs7O3dGQUdyQ1gsaURBQUc7Z0JBQUNZLENBQUMsRUFBQyxDQUFPO3NHQUNYViwyREFBTzs7Ozs7Ozs7Ozs7Ozs7OztBQUloQixDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vY2hhdC1hcHAvLi9wYWdlcy9pbmRleC5qcz9iZWU3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEJveCB9IGZyb20gXCJAY2hha3JhLXVpL3JlYWN0XCI7XHJcbmltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIjtcclxuaW1wb3J0IFNpZGViYXIgZnJvbSBcIi4uL2NvbXBvbmVudHMvU2lkZWJhclwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSgpIHtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdj5cclxuICAgICAgPEhlYWQ+XHJcbiAgICAgICAgPHRpdGxlPkNoYXQgQXBwPC90aXRsZT5cclxuICAgICAgICA8bWV0YSBuYW1lPVwiZGVzY3JpcHRpb25cIiBjb250ZW50PVwiR2VuZXJhdGVkIGJ5IGNyZWF0ZSBuZXh0IGFwcFwiIC8+XHJcbiAgICAgICAgPGxpbmsgcmVsPVwiaWNvblwiIGhyZWY9XCIvZmF2aWNvbi5pY29cIiAvPlxyXG4gICAgICA8L0hlYWQ+XHJcblxyXG4gICAgICA8Qm94IGg9XCIxMDB2aFwiPlxyXG4gICAgICAgIDxTaWRlYmFyIC8+XHJcbiAgICAgIDwvQm94PlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG4iXSwibmFtZXMiOlsiQm94IiwiSGVhZCIsIlNpZGViYXIiLCJIb21lIiwiZGl2IiwidGl0bGUiLCJtZXRhIiwibmFtZSIsImNvbnRlbnQiLCJsaW5rIiwicmVsIiwiaHJlZiIsImgiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ }),

/***/ "./utils/getOtherEmail.js":
/*!********************************!*\
  !*** ./utils/getOtherEmail.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst getOtherEmail = (users, currentUser)=>{\n    return users === null || users === void 0 ? void 0 : users.filter((user)=>user !== currentUser.email\n    )[0];\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getOtherEmail);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi91dGlscy9nZXRPdGhlckVtYWlsLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7QUFBQSxLQUFLLENBQUNBLGFBQWEsSUFBSUMsS0FBSyxFQUFFQyxXQUFXLEdBQUssQ0FBQztJQUM3QyxNQUFNLENBQUNELEtBQUssYUFBTEEsS0FBSyxLQUFMQSxJQUFJLENBQUpBLENBQWEsR0FBYkEsSUFBSSxDQUFKQSxDQUFhLEdBQWJBLEtBQUssQ0FBRUUsTUFBTSxFQUFDQyxJQUFJLEdBQUlBLElBQUksS0FBS0YsV0FBVyxDQUFDRyxLQUFLO01BQUUsQ0FBQztBQUM1RCxDQUFDO0FBRUQsaUVBQWVMLGFBQWEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2NoYXQtYXBwLy4vdXRpbHMvZ2V0T3RoZXJFbWFpbC5qcz85ZjU5Il0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IGdldE90aGVyRW1haWwgPSAodXNlcnMsIGN1cnJlbnRVc2VyKSA9PiB7XHJcbiAgcmV0dXJuIHVzZXJzPy5maWx0ZXIodXNlciA9PiB1c2VyICE9PSBjdXJyZW50VXNlci5lbWFpbClbMF07XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGdldE90aGVyRW1haWw7Il0sIm5hbWVzIjpbImdldE90aGVyRW1haWwiLCJ1c2VycyIsImN1cnJlbnRVc2VyIiwiZmlsdGVyIiwidXNlciIsImVtYWlsIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./utils/getOtherEmail.js\n");

/***/ }),

/***/ "@chakra-ui/avatar":
/*!************************************!*\
  !*** external "@chakra-ui/avatar" ***!
  \************************************/
/***/ ((module) => {

module.exports = require("@chakra-ui/avatar");

/***/ }),

/***/ "@chakra-ui/button":
/*!************************************!*\
  !*** external "@chakra-ui/button" ***!
  \************************************/
/***/ ((module) => {

module.exports = require("@chakra-ui/button");

/***/ }),

/***/ "@chakra-ui/icons":
/*!***********************************!*\
  !*** external "@chakra-ui/icons" ***!
  \***********************************/
/***/ ((module) => {

module.exports = require("@chakra-ui/icons");

/***/ }),

/***/ "@chakra-ui/layout":
/*!************************************!*\
  !*** external "@chakra-ui/layout" ***!
  \************************************/
/***/ ((module) => {

module.exports = require("@chakra-ui/layout");

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

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ "react-firebase-hooks/auth":
/*!********************************************!*\
  !*** external "react-firebase-hooks/auth" ***!
  \********************************************/
/***/ ((module) => {

module.exports = require("react-firebase-hooks/auth");

/***/ }),

/***/ "react-firebase-hooks/firestore":
/*!*************************************************!*\
  !*** external "react-firebase-hooks/firestore" ***!
  \*************************************************/
/***/ ((module) => {

module.exports = require("react-firebase-hooks/firestore");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "@firebase/firestore":
/*!**************************************!*\
  !*** external "@firebase/firestore" ***!
  \**************************************/
/***/ ((module) => {

module.exports = import("@firebase/firestore");;

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
var __webpack_exports__ = (__webpack_exec__("./pages/index.js"));
module.exports = __webpack_exports__;

})();