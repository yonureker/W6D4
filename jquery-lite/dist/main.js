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

/***/ "./src/dom_node_collection.js":
/*!************************************!*\
  !*** ./src/dom_node_collection.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("\nclass DOMNodeCollection {\n  \n  constructor(elements){\n    \n    this.elements = elements;\n\n  }\n\n  html(string) {\n    if (typeof string === 'undefined') {\n      return this.elements[0].innerHTML\n    } else {\n      this.elements.forEach(element => {\n        element.innerHTML = string; \n      });\n    }\n  }\n\n  empty (){\n    this.html('');\n  }\n\n  append(element){\n    if (element instanceof DOMNodeCollection) {\n      for (let i = 0; i < element.elements.length; i++) {\n        this.elements.forEach(el2 => {\n          el2.innerHTML += element.elements[i].outerHTML;\n        });\n      }\n    } else if (typeof element === 'string'){\n      this.elements.forEach(el2 => {\n        el2.innerHTML += element;\n      });\n    }else{\n      this.elements.forEach(el2 => {\n        el2.innerHTML += element.outerHTML;\n      });\n    }\n  }\n\n  attr(attribute, value){\n    this.elements.forEach(el2 => {\n      el2.setAttribute(attribute,value);\n    });\n  }\n\n  addClass(name){\n    this.elements.forEach(el2 => {\n      el2.setAttribute(\"class\", name);\n    });\n  }\n\n  removeClass(){\n    this.elements.forEach(el2 => {\n      el2.removeAttribute(\"class\");\n    });\n  }\n\n  children(){\n    let allChildren = [];\n    this.elements.forEach(ele => {\n      allChildren = allChildren.concat(Array.from(ele.children));\n    }); \n    return new DOMNodeCollection(allChildren);\n  }\n\n  parent(){\n    let parents = [];\n    this.elements.forEach(ele => {\n      parents.push(ele.parentElement);\n    });\n    return new DOMNodeCollection(parents);\n  }\n\n}\n\nmodule.exports = DOMNodeCollection;\n\n//# sourceURL=webpack:///./src/dom_node_collection.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const DOMNodeCollection = __webpack_require__(/*! ./dom_node_collection.js */ \"./src/dom_node_collection.js\");\n\nWindow.prototype.$1 = function(selector){\n  if(typeof(selector) === \"string\"){\n    let selected = this.document.querySelectorAll(selector);\n    // let selectedArr = Array.from(selected);\n    let x = new DOMNodeCollection(Array.from(selected));\n    return x;\n  }else if (selector instanceof HTMLElement){\n    return new DOMNodeCollection([selector]);\n  }\n}\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ })

/******/ });