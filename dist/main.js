/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/fetchAsync/apiUtils.js":
/*!************************************!*\
  !*** ./src/fetchAsync/apiUtils.js ***!
  \************************************/
/*! exports provided: handleResponse, handleError */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"handleResponse\", function() { return handleResponse; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"handleError\", function() { return handleError; });\nconst handleResponse = async response => {\n  if (response.ok) return response.data;\n  // if (response.ok) return response.json();\n  if (response.status === 400) {\n    const error = await response.text();\n    throw new Error(error);\n  }\n  throw new Error('Network response error');\n};\n\nconst handleError = error => {\n  console.log('API call failed.' + error);\n  throw error;\n};\n\n\n//# sourceURL=webpack:///./src/fetchAsync/apiUtils.js?");

/***/ }),

/***/ "./src/fetchAsync/bookApi.js":
/*!***********************************!*\
  !*** ./src/fetchAsync/bookApi.js ***!
  \***********************************/
/*! exports provided: getBooks, addBook, removeBook */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getBooks\", function() { return getBooks; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"addBook\", function() { return addBook; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"removeBook\", function() { return removeBook; });\n/* harmony import */ var _apiUtils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./apiUtils */ \"./src/fetchAsync/apiUtils.js\");\n\nconst baseUrl = 'http://localhost:3000/api/v1/books/';\n\nconst getBooks = async () => {\n  try {\n    const response = await fetch(baseUrl);\n    return Object(_apiUtils__WEBPACK_IMPORTED_MODULE_0__[\"handleResponse\"])(response);\n  } catch (error) {\n    return Object(_apiUtils__WEBPACK_IMPORTED_MODULE_0__[\"handleError\"])(error);\n  }\n};\n\nconst addBook = async book => {\n  try {\n    const response = await fetch(baseUrl + (book.id || ''), {\n      method: book.id ? 'PUT' : 'POST',\n      headers: { 'content-type': 'application/json' },\n      body: JSON.stringify({\n        ...book,\n        id: parseInt(book.id, 10),\n      }),\n    });\n    return Object(_apiUtils__WEBPACK_IMPORTED_MODULE_0__[\"handleResponse\"])(response);\n  } catch (error) {\n    return Object(_apiUtils__WEBPACK_IMPORTED_MODULE_0__[\"handleError\"])(error);\n  }\n};\n\nconst removeBook = async id => {\n  try {\n    const response = await fetch(baseUrl + id, { method: 'DELETE' });\n    return Promise.resolve();\n  } catch (error) {\n    return Object(_apiUtils__WEBPACK_IMPORTED_MODULE_0__[\"handleError\"])(error);\n  }\n};\n\n\n//# sourceURL=webpack:///./src/fetchAsync/bookApi.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _fetchAsync_bookApi__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./fetchAsync/bookApi */ \"./src/fetchAsync/bookApi.js\");\n\n\n//getBooks().then(book => console.log(book));\n\nconst newBook = {\n  title: 'xxxxx',\n  author: 'xxxx',\n  category: 'xxx',\n  pages: 'xxxxx',\n  progress: 'xxxx',\n};\n\nconst updateBook = {\n  id: 11,\n  title: 'uuuuuu',\n  author: 'uuuuuu',\n  category: 'uuuuuu',\n  pages: 'uuuuuu',\n  progress: 'uuuuuu',\n};\n\n// const add = addBook(newBook);\n\n// const update = addBook(updateBook);\n\n// const remove = removeBook(9);\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ })

/******/ });