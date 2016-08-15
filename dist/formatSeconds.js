(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["formatSeconds"] = factory();
	else
		root["formatSeconds"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _log = __webpack_require__(1);

	var _log2 = _interopRequireDefault(_log);

	var _trimZero = __webpack_require__(2);

	var _trimZero2 = _interopRequireDefault(_trimZero);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var UNITS = ["ms", "µs", "ns", "ps", "fs", "as", "zs", "ys"];

	/**
	 * https://en.wikipedia.org/wiki/Orders_of_magnitude_(time)
	 *
	 * @param number
	 * @return {*}
	 */
	var convert = function convert(number) {
	  if (number === null) {
	    return null;
	  }
	  var absolute = Math.abs(number);
	  if (absolute > 10000) {
	    return (0, _trimZero2.default)((number / 3600).toFixed(2)) + ' h';
	  } else if (absolute >= 1) {
	    return (0, _trimZero2.default)((number * 1).toFixed(2)) + ' s';
	  } else if (number === 0) {
	    return '0';
	  }

	  var unitIndex = 0 - Math.ceil((0, _log2.default)(absolute) / 3);
	  var scaleFactor = Math.pow(10, (1 + unitIndex) * 3);

	  return (0, _trimZero2.default)((number * scaleFactor).toFixed(2)) + ' ' + UNITS[unitIndex];
	};

	module.exports = convert;

/***/ },
/* 1 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	/**
	 * polyfill for log10
	 * @type {any}
	 */
	var log10 = Math.log10 || function (x) {
	  return Math.log(x) * Math.LOG10E;
	};
	exports.default = log10;

/***/ },
/* 2 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	/**
	 * 移除小数末尾的 0
	 * @param string
	 * @return {*}
	 */
	var trimZero = function trimZero(string) {
	  if (string && string.indexOf('.') !== -1) {
	    return string.replace(/0+$/, '').replace(/\.$/, '');
	  }
	  return string;
	};

	exports.default = trimZero;

/***/ }
/******/ ])
});
;