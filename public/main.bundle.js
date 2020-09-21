/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"main": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
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
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push(["./src/index.js","vendors"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./config/imbuementOptions.json":
/*!**************************************!*\
  !*** ./config/imbuementOptions.json ***!
  \**************************************/
/*! exports provided: 0, 1, 2, default */
/***/ (function(module) {

module.exports = [{"type":1,"items":[{"Rope Belt":25,"Silencer Claws":25,"Some Grimeleech Wings":5},{"Gold Token":2,"Silencer Claws":25,"Some Grimeleech Wings":5},{"Gold Token":4,"Some Grimeleech Wings":5},{"Gold Token":6}]},{"type":2,"items":[{"Protective Charm":20,"Sabretooth":25,"Vexclaw Talon":5},{"Gold Token":2,"Sabretooth":25,"Vexclaw Talon":5},{"Gold Token":4,"Vexclaw Talon":5},{"Gold Token":6}]},{"type":3,"items":[{"Vampire Teeth":25,"Bloody Pincers":15,"Piece of Dead Brain":5},{"Gold Token":2,"Bloody Pincers":15,"Piece of Dead Brain":5},{"Gold Token":4,"Piece of Dead Brain":5},{"Gold Token":6}]}];

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles/app.css":
/*!******************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles/app.css ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, "html,\r\nbody {\r\n    min-height: 80% !important;\r\n    height: auto !important;\r\n}\r\n\r\nbody {\r\n    display: flex;\r\n    flex-direction: column; \r\n}\r\n \r\n.content {\r\n    flex: 1 0 auto;\r\n    margin: 15px 30px !important;\r\n    height: calc(100% - 60px);\r\n}\r\n\r\n.footer {\r\n    flex-shrink: 0;\r\n}\r\n\r\n@media (max-width: 768px) {\r\n    img {\r\n        width: 24px !important;\r\n        height: 24px !important;\r\n    }\r\n}\r\n\r\n@media (min-width: 768px) {\r\n    img {\r\n        width: 32px !important;\r\n        height: 32px !important;\r\n    }\r\n}", ""]);



/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles/imbu/ImbuType.css":
/*!****************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles/imbu/ImbuType.css ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, "div.imbu-type-card {\r\n    margin: 6px 3px !important;\r\n}\r\n\r\ndiv.imbu-type-card > div.card-header > span {\r\n    margin-left: -28px !important;\r\n}", ""]);



/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles/imbu/Imbuements.css":
/*!******************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles/imbu/Imbuements.css ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, "@media (min-width: 1200px) {\r\n    div.container.imbuements-wrapper {\r\n        padding-left:  0;\r\n        padding-right: 0;\r\n        margin-left: 5px;\r\n        margin-right: 5px;\r\n    }\r\n}\r\n\r\n@media (min-width: 1490px) {\r\n    .row {\r\n        flex-wrap: nowrap;\r\n    }\r\n}", ""]);



/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles/imbu/imbuItem.css":
/*!****************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles/imbu/imbuItem.css ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, ".count-input-wrapper {\r\n    padding-left: 0px !important;\r\n}", ""]);



/***/ }),

/***/ "./node_modules/moment/locale sync recursive ^\\.\\/.*$":
/*!**************************************************!*\
  !*** ./node_modules/moment/locale sync ^\.\/.*$ ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": "./node_modules/moment/locale/af.js",
	"./af.js": "./node_modules/moment/locale/af.js",
	"./ar": "./node_modules/moment/locale/ar.js",
	"./ar-dz": "./node_modules/moment/locale/ar-dz.js",
	"./ar-dz.js": "./node_modules/moment/locale/ar-dz.js",
	"./ar-kw": "./node_modules/moment/locale/ar-kw.js",
	"./ar-kw.js": "./node_modules/moment/locale/ar-kw.js",
	"./ar-ly": "./node_modules/moment/locale/ar-ly.js",
	"./ar-ly.js": "./node_modules/moment/locale/ar-ly.js",
	"./ar-ma": "./node_modules/moment/locale/ar-ma.js",
	"./ar-ma.js": "./node_modules/moment/locale/ar-ma.js",
	"./ar-sa": "./node_modules/moment/locale/ar-sa.js",
	"./ar-sa.js": "./node_modules/moment/locale/ar-sa.js",
	"./ar-tn": "./node_modules/moment/locale/ar-tn.js",
	"./ar-tn.js": "./node_modules/moment/locale/ar-tn.js",
	"./ar.js": "./node_modules/moment/locale/ar.js",
	"./az": "./node_modules/moment/locale/az.js",
	"./az.js": "./node_modules/moment/locale/az.js",
	"./be": "./node_modules/moment/locale/be.js",
	"./be.js": "./node_modules/moment/locale/be.js",
	"./bg": "./node_modules/moment/locale/bg.js",
	"./bg.js": "./node_modules/moment/locale/bg.js",
	"./bm": "./node_modules/moment/locale/bm.js",
	"./bm.js": "./node_modules/moment/locale/bm.js",
	"./bn": "./node_modules/moment/locale/bn.js",
	"./bn.js": "./node_modules/moment/locale/bn.js",
	"./bo": "./node_modules/moment/locale/bo.js",
	"./bo.js": "./node_modules/moment/locale/bo.js",
	"./br": "./node_modules/moment/locale/br.js",
	"./br.js": "./node_modules/moment/locale/br.js",
	"./bs": "./node_modules/moment/locale/bs.js",
	"./bs.js": "./node_modules/moment/locale/bs.js",
	"./ca": "./node_modules/moment/locale/ca.js",
	"./ca.js": "./node_modules/moment/locale/ca.js",
	"./cs": "./node_modules/moment/locale/cs.js",
	"./cs.js": "./node_modules/moment/locale/cs.js",
	"./cv": "./node_modules/moment/locale/cv.js",
	"./cv.js": "./node_modules/moment/locale/cv.js",
	"./cy": "./node_modules/moment/locale/cy.js",
	"./cy.js": "./node_modules/moment/locale/cy.js",
	"./da": "./node_modules/moment/locale/da.js",
	"./da.js": "./node_modules/moment/locale/da.js",
	"./de": "./node_modules/moment/locale/de.js",
	"./de-at": "./node_modules/moment/locale/de-at.js",
	"./de-at.js": "./node_modules/moment/locale/de-at.js",
	"./de-ch": "./node_modules/moment/locale/de-ch.js",
	"./de-ch.js": "./node_modules/moment/locale/de-ch.js",
	"./de.js": "./node_modules/moment/locale/de.js",
	"./dv": "./node_modules/moment/locale/dv.js",
	"./dv.js": "./node_modules/moment/locale/dv.js",
	"./el": "./node_modules/moment/locale/el.js",
	"./el.js": "./node_modules/moment/locale/el.js",
	"./en-SG": "./node_modules/moment/locale/en-SG.js",
	"./en-SG.js": "./node_modules/moment/locale/en-SG.js",
	"./en-au": "./node_modules/moment/locale/en-au.js",
	"./en-au.js": "./node_modules/moment/locale/en-au.js",
	"./en-ca": "./node_modules/moment/locale/en-ca.js",
	"./en-ca.js": "./node_modules/moment/locale/en-ca.js",
	"./en-gb": "./node_modules/moment/locale/en-gb.js",
	"./en-gb.js": "./node_modules/moment/locale/en-gb.js",
	"./en-ie": "./node_modules/moment/locale/en-ie.js",
	"./en-ie.js": "./node_modules/moment/locale/en-ie.js",
	"./en-il": "./node_modules/moment/locale/en-il.js",
	"./en-il.js": "./node_modules/moment/locale/en-il.js",
	"./en-nz": "./node_modules/moment/locale/en-nz.js",
	"./en-nz.js": "./node_modules/moment/locale/en-nz.js",
	"./eo": "./node_modules/moment/locale/eo.js",
	"./eo.js": "./node_modules/moment/locale/eo.js",
	"./es": "./node_modules/moment/locale/es.js",
	"./es-do": "./node_modules/moment/locale/es-do.js",
	"./es-do.js": "./node_modules/moment/locale/es-do.js",
	"./es-us": "./node_modules/moment/locale/es-us.js",
	"./es-us.js": "./node_modules/moment/locale/es-us.js",
	"./es.js": "./node_modules/moment/locale/es.js",
	"./et": "./node_modules/moment/locale/et.js",
	"./et.js": "./node_modules/moment/locale/et.js",
	"./eu": "./node_modules/moment/locale/eu.js",
	"./eu.js": "./node_modules/moment/locale/eu.js",
	"./fa": "./node_modules/moment/locale/fa.js",
	"./fa.js": "./node_modules/moment/locale/fa.js",
	"./fi": "./node_modules/moment/locale/fi.js",
	"./fi.js": "./node_modules/moment/locale/fi.js",
	"./fo": "./node_modules/moment/locale/fo.js",
	"./fo.js": "./node_modules/moment/locale/fo.js",
	"./fr": "./node_modules/moment/locale/fr.js",
	"./fr-ca": "./node_modules/moment/locale/fr-ca.js",
	"./fr-ca.js": "./node_modules/moment/locale/fr-ca.js",
	"./fr-ch": "./node_modules/moment/locale/fr-ch.js",
	"./fr-ch.js": "./node_modules/moment/locale/fr-ch.js",
	"./fr.js": "./node_modules/moment/locale/fr.js",
	"./fy": "./node_modules/moment/locale/fy.js",
	"./fy.js": "./node_modules/moment/locale/fy.js",
	"./ga": "./node_modules/moment/locale/ga.js",
	"./ga.js": "./node_modules/moment/locale/ga.js",
	"./gd": "./node_modules/moment/locale/gd.js",
	"./gd.js": "./node_modules/moment/locale/gd.js",
	"./gl": "./node_modules/moment/locale/gl.js",
	"./gl.js": "./node_modules/moment/locale/gl.js",
	"./gom-latn": "./node_modules/moment/locale/gom-latn.js",
	"./gom-latn.js": "./node_modules/moment/locale/gom-latn.js",
	"./gu": "./node_modules/moment/locale/gu.js",
	"./gu.js": "./node_modules/moment/locale/gu.js",
	"./he": "./node_modules/moment/locale/he.js",
	"./he.js": "./node_modules/moment/locale/he.js",
	"./hi": "./node_modules/moment/locale/hi.js",
	"./hi.js": "./node_modules/moment/locale/hi.js",
	"./hr": "./node_modules/moment/locale/hr.js",
	"./hr.js": "./node_modules/moment/locale/hr.js",
	"./hu": "./node_modules/moment/locale/hu.js",
	"./hu.js": "./node_modules/moment/locale/hu.js",
	"./hy-am": "./node_modules/moment/locale/hy-am.js",
	"./hy-am.js": "./node_modules/moment/locale/hy-am.js",
	"./id": "./node_modules/moment/locale/id.js",
	"./id.js": "./node_modules/moment/locale/id.js",
	"./is": "./node_modules/moment/locale/is.js",
	"./is.js": "./node_modules/moment/locale/is.js",
	"./it": "./node_modules/moment/locale/it.js",
	"./it-ch": "./node_modules/moment/locale/it-ch.js",
	"./it-ch.js": "./node_modules/moment/locale/it-ch.js",
	"./it.js": "./node_modules/moment/locale/it.js",
	"./ja": "./node_modules/moment/locale/ja.js",
	"./ja.js": "./node_modules/moment/locale/ja.js",
	"./jv": "./node_modules/moment/locale/jv.js",
	"./jv.js": "./node_modules/moment/locale/jv.js",
	"./ka": "./node_modules/moment/locale/ka.js",
	"./ka.js": "./node_modules/moment/locale/ka.js",
	"./kk": "./node_modules/moment/locale/kk.js",
	"./kk.js": "./node_modules/moment/locale/kk.js",
	"./km": "./node_modules/moment/locale/km.js",
	"./km.js": "./node_modules/moment/locale/km.js",
	"./kn": "./node_modules/moment/locale/kn.js",
	"./kn.js": "./node_modules/moment/locale/kn.js",
	"./ko": "./node_modules/moment/locale/ko.js",
	"./ko.js": "./node_modules/moment/locale/ko.js",
	"./ku": "./node_modules/moment/locale/ku.js",
	"./ku.js": "./node_modules/moment/locale/ku.js",
	"./ky": "./node_modules/moment/locale/ky.js",
	"./ky.js": "./node_modules/moment/locale/ky.js",
	"./lb": "./node_modules/moment/locale/lb.js",
	"./lb.js": "./node_modules/moment/locale/lb.js",
	"./lo": "./node_modules/moment/locale/lo.js",
	"./lo.js": "./node_modules/moment/locale/lo.js",
	"./lt": "./node_modules/moment/locale/lt.js",
	"./lt.js": "./node_modules/moment/locale/lt.js",
	"./lv": "./node_modules/moment/locale/lv.js",
	"./lv.js": "./node_modules/moment/locale/lv.js",
	"./me": "./node_modules/moment/locale/me.js",
	"./me.js": "./node_modules/moment/locale/me.js",
	"./mi": "./node_modules/moment/locale/mi.js",
	"./mi.js": "./node_modules/moment/locale/mi.js",
	"./mk": "./node_modules/moment/locale/mk.js",
	"./mk.js": "./node_modules/moment/locale/mk.js",
	"./ml": "./node_modules/moment/locale/ml.js",
	"./ml.js": "./node_modules/moment/locale/ml.js",
	"./mn": "./node_modules/moment/locale/mn.js",
	"./mn.js": "./node_modules/moment/locale/mn.js",
	"./mr": "./node_modules/moment/locale/mr.js",
	"./mr.js": "./node_modules/moment/locale/mr.js",
	"./ms": "./node_modules/moment/locale/ms.js",
	"./ms-my": "./node_modules/moment/locale/ms-my.js",
	"./ms-my.js": "./node_modules/moment/locale/ms-my.js",
	"./ms.js": "./node_modules/moment/locale/ms.js",
	"./mt": "./node_modules/moment/locale/mt.js",
	"./mt.js": "./node_modules/moment/locale/mt.js",
	"./my": "./node_modules/moment/locale/my.js",
	"./my.js": "./node_modules/moment/locale/my.js",
	"./nb": "./node_modules/moment/locale/nb.js",
	"./nb.js": "./node_modules/moment/locale/nb.js",
	"./ne": "./node_modules/moment/locale/ne.js",
	"./ne.js": "./node_modules/moment/locale/ne.js",
	"./nl": "./node_modules/moment/locale/nl.js",
	"./nl-be": "./node_modules/moment/locale/nl-be.js",
	"./nl-be.js": "./node_modules/moment/locale/nl-be.js",
	"./nl.js": "./node_modules/moment/locale/nl.js",
	"./nn": "./node_modules/moment/locale/nn.js",
	"./nn.js": "./node_modules/moment/locale/nn.js",
	"./pa-in": "./node_modules/moment/locale/pa-in.js",
	"./pa-in.js": "./node_modules/moment/locale/pa-in.js",
	"./pl": "./node_modules/moment/locale/pl.js",
	"./pl.js": "./node_modules/moment/locale/pl.js",
	"./pt": "./node_modules/moment/locale/pt.js",
	"./pt-br": "./node_modules/moment/locale/pt-br.js",
	"./pt-br.js": "./node_modules/moment/locale/pt-br.js",
	"./pt.js": "./node_modules/moment/locale/pt.js",
	"./ro": "./node_modules/moment/locale/ro.js",
	"./ro.js": "./node_modules/moment/locale/ro.js",
	"./ru": "./node_modules/moment/locale/ru.js",
	"./ru.js": "./node_modules/moment/locale/ru.js",
	"./sd": "./node_modules/moment/locale/sd.js",
	"./sd.js": "./node_modules/moment/locale/sd.js",
	"./se": "./node_modules/moment/locale/se.js",
	"./se.js": "./node_modules/moment/locale/se.js",
	"./si": "./node_modules/moment/locale/si.js",
	"./si.js": "./node_modules/moment/locale/si.js",
	"./sk": "./node_modules/moment/locale/sk.js",
	"./sk.js": "./node_modules/moment/locale/sk.js",
	"./sl": "./node_modules/moment/locale/sl.js",
	"./sl.js": "./node_modules/moment/locale/sl.js",
	"./sq": "./node_modules/moment/locale/sq.js",
	"./sq.js": "./node_modules/moment/locale/sq.js",
	"./sr": "./node_modules/moment/locale/sr.js",
	"./sr-cyrl": "./node_modules/moment/locale/sr-cyrl.js",
	"./sr-cyrl.js": "./node_modules/moment/locale/sr-cyrl.js",
	"./sr.js": "./node_modules/moment/locale/sr.js",
	"./ss": "./node_modules/moment/locale/ss.js",
	"./ss.js": "./node_modules/moment/locale/ss.js",
	"./sv": "./node_modules/moment/locale/sv.js",
	"./sv.js": "./node_modules/moment/locale/sv.js",
	"./sw": "./node_modules/moment/locale/sw.js",
	"./sw.js": "./node_modules/moment/locale/sw.js",
	"./ta": "./node_modules/moment/locale/ta.js",
	"./ta.js": "./node_modules/moment/locale/ta.js",
	"./te": "./node_modules/moment/locale/te.js",
	"./te.js": "./node_modules/moment/locale/te.js",
	"./tet": "./node_modules/moment/locale/tet.js",
	"./tet.js": "./node_modules/moment/locale/tet.js",
	"./tg": "./node_modules/moment/locale/tg.js",
	"./tg.js": "./node_modules/moment/locale/tg.js",
	"./th": "./node_modules/moment/locale/th.js",
	"./th.js": "./node_modules/moment/locale/th.js",
	"./tl-ph": "./node_modules/moment/locale/tl-ph.js",
	"./tl-ph.js": "./node_modules/moment/locale/tl-ph.js",
	"./tlh": "./node_modules/moment/locale/tlh.js",
	"./tlh.js": "./node_modules/moment/locale/tlh.js",
	"./tr": "./node_modules/moment/locale/tr.js",
	"./tr.js": "./node_modules/moment/locale/tr.js",
	"./tzl": "./node_modules/moment/locale/tzl.js",
	"./tzl.js": "./node_modules/moment/locale/tzl.js",
	"./tzm": "./node_modules/moment/locale/tzm.js",
	"./tzm-latn": "./node_modules/moment/locale/tzm-latn.js",
	"./tzm-latn.js": "./node_modules/moment/locale/tzm-latn.js",
	"./tzm.js": "./node_modules/moment/locale/tzm.js",
	"./ug-cn": "./node_modules/moment/locale/ug-cn.js",
	"./ug-cn.js": "./node_modules/moment/locale/ug-cn.js",
	"./uk": "./node_modules/moment/locale/uk.js",
	"./uk.js": "./node_modules/moment/locale/uk.js",
	"./ur": "./node_modules/moment/locale/ur.js",
	"./ur.js": "./node_modules/moment/locale/ur.js",
	"./uz": "./node_modules/moment/locale/uz.js",
	"./uz-latn": "./node_modules/moment/locale/uz-latn.js",
	"./uz-latn.js": "./node_modules/moment/locale/uz-latn.js",
	"./uz.js": "./node_modules/moment/locale/uz.js",
	"./vi": "./node_modules/moment/locale/vi.js",
	"./vi.js": "./node_modules/moment/locale/vi.js",
	"./x-pseudo": "./node_modules/moment/locale/x-pseudo.js",
	"./x-pseudo.js": "./node_modules/moment/locale/x-pseudo.js",
	"./yo": "./node_modules/moment/locale/yo.js",
	"./yo.js": "./node_modules/moment/locale/yo.js",
	"./zh-cn": "./node_modules/moment/locale/zh-cn.js",
	"./zh-cn.js": "./node_modules/moment/locale/zh-cn.js",
	"./zh-hk": "./node_modules/moment/locale/zh-hk.js",
	"./zh-hk.js": "./node_modules/moment/locale/zh-hk.js",
	"./zh-tw": "./node_modules/moment/locale/zh-tw.js",
	"./zh-tw.js": "./node_modules/moment/locale/zh-tw.js"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./node_modules/moment/locale sync recursive ^\\.\\/.*$";

/***/ }),

/***/ "./src/api/pricesApi.js":
/*!******************************!*\
  !*** ./src/api/pricesApi.js ***!
  \******************************/
/*! exports provided: getItemPrices, getItemPricesFake */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getItemPrices", function() { return getItemPrices; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getItemPricesFake", function() { return getItemPricesFake; });
/* harmony import */ var superagent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! superagent */ "./node_modules/superagent/lib/client.js");
/* harmony import */ var superagent__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(superagent__WEBPACK_IMPORTED_MODULE_0__);
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }


var API_PRICES_URL = 'http://ti-rules.ovh/tibia/api/prices';
var getItemPrices =
/*#__PURE__*/
function () {
  var _ref = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee() {
    var result;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            result = {
              data: [],
              message: 'Generic error',
              success: false
            };
            _context.next = 3;
            return superagent__WEBPACK_IMPORTED_MODULE_0___default.a.get(API_PRICES_URL).then(function (res) {
              if (res.statusCode === 200) {
                return {
                  data: res.body,
                  message: 'success',
                  success: true
                };
              }
            }).catch(function (err) {
              result.message = err;
              console.log('Error when calling item prices API', err);
            });

          case 3:
            return _context.abrupt("return", result);

          case 4:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, this);
  }));

  return function getItemPrices() {
    return _ref.apply(this, arguments);
  };
}();
var getItemPricesFake = function getItemPricesFake() {
  var jsonData = '[{"id":1005289,"worldName":"Secura","checkTime":"2019-03-01T21:26:17Z","value":32999,"itemName":"Gold Token","offerType":"sell","Type":0,"Count":1},{"id":1005149,"worldName":"Secura","checkTime":"2019-03-01T21:24:02Z","value":3650,"itemName":"Silencer Claws","offerType":"sell","Type":1,"Count":25},{"id":1005147,"worldName":"Secura","checkTime":"2019-03-01T21:24:02Z","value":2699,"itemName":"Rope Belt","offerType":"sell","Type":1,"Count":25},{"id":1005151,"worldName":"Secura","checkTime":"2019-03-01T21:24:02Z","value":1500,"itemName":"Some Grimeleech Wings","offerType":"sell","Type":1,"Count":5},{"id":1005175,"worldName":"Secura","checkTime":"2019-03-01T21:24:05Z","value":2097,"itemName":"Protective Charm","offerType":"sell","Type":2,"Count":20},{"id":1005148,"worldName":"Secura","checkTime":"2019-03-01T21:24:02Z","value":4200,"itemName":"Sabretooth","offerType":"sell","Type":2,"Count":25},{"id":1005216,"worldName":"Secura","checkTime":"2019-03-01T21:25:07Z","value":1150,"itemName":"Vexclaw Talon","offerType":"sell","Type":2,"Count":5},{"id":1005181,"worldName":"Secura","checkTime":"2019-03-01T21:24:05Z","value":1800,"itemName":"Vampire Teeth","offerType":"sell","Type":3,"Count":25},{"id":1005112,"worldName":"Secura","checkTime":"2019-03-01T21:23:02Z","value":6399,"itemName":"Bloody Pincers","offerType":"sell","Type":3,"Count":15},{"id":1005172,"worldName":"Secura","checkTime":"2019-03-01T21:24:05Z","value":12698,"itemName":"Piece of Dead Brain","offerType":"sell","Type":3,"Count":5}]';
  return {
    data: JSON.parse(jsonData),
    message: '',
    success: true,
    status: 200
  };
};

/***/ }),

/***/ "./src/components/app/App.jsx":
/*!************************************!*\
  !*** ./src/components/app/App.jsx ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _AppHeader_jsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AppHeader.jsx */ "./src/components/app/AppHeader.jsx");
/* harmony import */ var _AppFooter_jsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./AppFooter.jsx */ "./src/components/app/AppFooter.jsx");
/* harmony import */ var _styles_app_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../styles/app.css */ "./src/styles/app.css");
/* harmony import */ var _styles_app_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_app_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _imbu_ImbuItemCostAnalyzer_jsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../imbu/ImbuItemCostAnalyzer.jsx */ "./src/components/imbu/ImbuItemCostAnalyzer.jsx");






var App = function App() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_AppHeader_jsx__WEBPACK_IMPORTED_MODULE_1__["default"], null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_imbu_ImbuItemCostAnalyzer_jsx__WEBPACK_IMPORTED_MODULE_4__["default"], null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_AppFooter_jsx__WEBPACK_IMPORTED_MODULE_2__["default"], null));
};

/* harmony default export */ __webpack_exports__["default"] = (App);

/***/ }),

/***/ "./src/components/app/AppFooter.jsx":
/*!******************************************!*\
  !*** ./src/components/app/AppFooter.jsx ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


var AppFooter = function AppFooter() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("footer", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "footer navbar navbar-light bg-light fixed-bottom"
  }, new Date().getFullYear(), " \xA9 A3f"));
};

/* harmony default export */ __webpack_exports__["default"] = (AppFooter);

/***/ }),

/***/ "./src/components/app/AppHeader.jsx":
/*!******************************************!*\
  !*** ./src/components/app/AppHeader.jsx ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/es/index.js");



var AppHeader = function AppHeader() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Navbar"], {
    bg: "dark",
    variant: "dark",
    expand: "lg"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Navbar"].Brand, null, "Imbu Item Cost Analyzer"));
};

/* harmony default export */ __webpack_exports__["default"] = (AppHeader);

/***/ }),

/***/ "./src/components/hoc/withAppContext.js":
/*!**********************************************!*\
  !*** ./src/components/hoc/withAppContext.js ***!
  \**********************************************/
/*! exports provided: withAppContext */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "withAppContext", function() { return withAppContext; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _context_AppContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../context/AppContext */ "./src/context/AppContext.js");
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }



function withAppContext(Component) {
  return function WrapperComponent(props) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_context_AppContext__WEBPACK_IMPORTED_MODULE_1__["AppContext"].Consumer, null, function (ctx) {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Component, _extends({}, props, {
        context: ctx
      }));
    });
  };
}

/***/ }),

/***/ "./src/components/imbu/ImbuItem.jsx":
/*!******************************************!*\
  !*** ./src/components/imbu/ImbuItem.jsx ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/es/index.js");
/* harmony import */ var _ItemImage_jsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ItemImage.jsx */ "./src/components/imbu/ItemImage.jsx");




var ImbuItem = function ImbuItem(_ref) {
  var itemName = _ref.itemName,
      itemCount = _ref.itemCount;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    xs: "1",
    sm: "2"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ItemImage_jsx__WEBPACK_IMPORTED_MODULE_2__["default"], {
    itemName: itemName
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("small", null, itemCount)));
};

/* harmony default export */ __webpack_exports__["default"] = (ImbuItem);

/***/ }),

/***/ "./src/components/imbu/ImbuItemCostAnalyzer.jsx":
/*!******************************************************!*\
  !*** ./src/components/imbu/ImbuItemCostAnalyzer.jsx ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_if_elseif_else_render__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-if-elseif-else-render */ "./node_modules/react-if-elseif-else-render/build/index.js");
/* harmony import */ var react_if_elseif_else_render__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_if_elseif_else_render__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/es/index.js");
/* harmony import */ var _context_AppContext__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../context/AppContext */ "./src/context/AppContext.js");
/* harmony import */ var _ImbuLoadingOverlay_jsx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ImbuLoadingOverlay.jsx */ "./src/components/imbu/ImbuLoadingOverlay.jsx");
/* harmony import */ var _Toolbar_jsx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Toolbar.jsx */ "./src/components/imbu/Toolbar.jsx");
/* harmony import */ var _prices_PricesStatusInfo_jsx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../prices/PricesStatusInfo.jsx */ "./src/components/prices/PricesStatusInfo.jsx");
/* harmony import */ var _Imbuements_jsx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./Imbuements.jsx */ "./src/components/imbu/Imbuements.jsx");
/* harmony import */ var _utilities__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../utilities */ "./src/utilities.js");
/* harmony import */ var _formatters__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../formatters */ "./src/formatters.js");
/* harmony import */ var _api_pricesApi__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../api/pricesApi */ "./src/api/pricesApi.js");
/* harmony import */ var _config_imbuementOptions_json__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../config/imbuementOptions.json */ "./config/imbuementOptions.json");
var _config_imbuementOptions_json__WEBPACK_IMPORTED_MODULE_13___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../../config/imbuementOptions.json */ "./config/imbuementOptions.json", 1);
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }















var LOCALSTORAGE_ITEMPRICES_KEY = 'ItemPrices';

var ImbuItemCostAnalyzer =
/*#__PURE__*/
function (_Component) {
  _inherits(ImbuItemCostAnalyzer, _Component);

  function ImbuItemCostAnalyzer(props) {
    var _this;

    _classCallCheck(this, ImbuItemCostAnalyzer);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(ImbuItemCostAnalyzer).call(this, props));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "saveItemPrices", function (itemPrices) {
      _this.setStateAsync({
        itemPrices: itemPrices
      });

      var expiresAt = Object(_formatters__WEBPACK_IMPORTED_MODULE_11__["dateTimeFormatter"])(moment__WEBPACK_IMPORTED_MODULE_3___default()().add(1, 'hours'));
      window.localStorage.setItem(LOCALSTORAGE_ITEMPRICES_KEY, JSON.stringify({
        data: itemPrices,
        expiresAt: expiresAt
      }));
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "getPricesFromApi", function () {
      //const result = await getItemPrices();
      var result = Object(_api_pricesApi__WEBPACK_IMPORTED_MODULE_12__["getItemPricesFake"])();

      if (result.success) {
        _this.saveItemPrices(result.data);
      }
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "loadItemPrices",
    /*#__PURE__*/
    _asyncToGenerator(
    /*#__PURE__*/
    regeneratorRuntime.mark(function _callee() {
      var localStorageItemPrices, itemPricesLocalCache, expiresAt;
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              localStorageItemPrices = window.localStorage.getItem(LOCALSTORAGE_ITEMPRICES_KEY);

              if (!localStorageItemPrices) {
                _this.getPricesFromApi();
              } else {
                itemPricesLocalCache = JSON.parse(localStorageItemPrices);
                expiresAt = moment__WEBPACK_IMPORTED_MODULE_3___default()(itemPricesLocalCache.expiresAt, _formatters__WEBPACK_IMPORTED_MODULE_11__["defaultDateTimeFormat"]);

                if (expiresAt.isValid() && moment__WEBPACK_IMPORTED_MODULE_3___default()().isBefore(expiresAt)) {
                  _this.saveItemPrices(itemPricesLocalCache.data);
                } else {
                  _this.getPricesFromApi();
                }
              }

            case 2:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, this);
    })));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "changeItemProp", function (itemName, prop, value) {
      var itemPrices = _this.state.itemPrices;
      var itemInfo = Object(_utilities__WEBPACK_IMPORTED_MODULE_10__["getArrayElementInfo"])(itemPrices, 'itemName', itemName);

      if (!!itemInfo && itemInfo.element[prop] !== undefined) {
        itemInfo.element[prop] = value;
        Object.assign(itemPrices[itemInfo.elementIndex], itemInfo.element);

        _this.setState({
          itemPrices: itemPrices
        });
      }
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "reloadData",
    /*#__PURE__*/
    _asyncToGenerator(
    /*#__PURE__*/
    regeneratorRuntime.mark(function _callee2() {
      return regeneratorRuntime.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _this.setStateAsync({
                isLoadingData: true
              });

              _context2.next = 3;
              return _this.loadItemPrices();

            case 3:
              _this.setStateAsync({
                isLoadingData: false
              });

            case 4:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2, this);
    })));

    _this.state = {
      isLoadingData: false,
      itemPrices: [],
      imbuementOptions: _config_imbuementOptions_json__WEBPACK_IMPORTED_MODULE_13__ || []
    };
    return _this;
  }

  _createClass(ImbuItemCostAnalyzer, [{
    key: "setStateAsync",
    value: function setStateAsync(state) {
      var _this2 = this;

      return new Promise(function (resolve) {
        _this2.setState(state, resolve);
      });
    }
  }, {
    key: "componentDidMount",
    value: function () {
      var _componentDidMount = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee3() {
        return regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.next = 2;
                return this.reloadData();

              case 2:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      return function componentDidMount() {
        return _componentDidMount.apply(this, arguments);
      };
    }()
  }, {
    key: "render",
    value: function render() {
      var _this$state = this.state,
          isLoadingData = _this$state.isLoadingData,
          itemPrices = _this$state.itemPrices,
          imbuementOptions = _this$state.imbuementOptions;
      var context = {
        //props
        isLoadingData: isLoadingData,
        itemPrices: itemPrices,
        imbuementOptions: imbuementOptions,
        //functions
        changeItemProp: this.changeItemProp
      };
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_context_AppContext__WEBPACK_IMPORTED_MODULE_5__["AppContext"].Provider, {
        value: context
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ImbuLoadingOverlay_jsx__WEBPACK_IMPORTED_MODULE_6__["default"], {
        active: isLoadingData
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_prices_PricesStatusInfo_jsx__WEBPACK_IMPORTED_MODULE_8__["PricesStatusInfo"], null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_if_elseif_else_render__WEBPACK_IMPORTED_MODULE_1__["If"], {
        condition: itemPrices.length > 0 && imbuementOptions.length > 0
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_if_elseif_else_render__WEBPACK_IMPORTED_MODULE_1__["Then"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Toolbar_jsx__WEBPACK_IMPORTED_MODULE_7__["Toolbar"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["ButtonToolbar"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Button"], {
        variant: "primary",
        size: "lg",
        style: {
          marginLeft: '10px'
        },
        onClick: this.reloadData
      }, "Load Defaults"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Imbuements_jsx__WEBPACK_IMPORTED_MODULE_9__["default"], null)))));
    }
  }]);

  return ImbuItemCostAnalyzer;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (ImbuItemCostAnalyzer);

/***/ }),

/***/ "./src/components/imbu/ImbuLoadingOverlay.jsx":
/*!****************************************************!*\
  !*** ./src/components/imbu/ImbuLoadingOverlay.jsx ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_loading_overlay__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-loading-overlay */ "./node_modules/react-loading-overlay/lib/LoadingOverlay.js");
/* harmony import */ var react_loading_overlay__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_loading_overlay__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_spinners_CircleLoader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-spinners/CircleLoader */ "./node_modules/react-spinners/CircleLoader.js");
/* harmony import */ var react_spinners_CircleLoader__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_spinners_CircleLoader__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _context_AppContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../context/AppContext */ "./src/context/AppContext.js");





var ImbuLoadingOverlay = function ImbuLoadingOverlay(props) {
  var context = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_context_AppContext__WEBPACK_IMPORTED_MODULE_3__["AppContext"]);
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_loading_overlay__WEBPACK_IMPORTED_MODULE_1___default.a, {
    spinner: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_spinners_CircleLoader__WEBPACK_IMPORTED_MODULE_2___default.a, null),
    text: "Fetching Item Prices...",
    active: context.isLoadingData,
    styles: {
      wrapper: {
        marginBottom: '30px',
        marginLeft: '5px'
      }
    }
  }, props.children);
};

/* harmony default export */ __webpack_exports__["default"] = (ImbuLoadingOverlay);

/***/ }),

/***/ "./src/components/imbu/ImbuTypeCard.jsx":
/*!**********************************************!*\
  !*** ./src/components/imbu/ImbuTypeCard.jsx ***!
  \**********************************************/
/*! exports provided: ImbuTypeCard, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImbuTypeCard", function() { return ImbuTypeCard; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/es/index.js");
/* harmony import */ var _context_AppContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../context/AppContext */ "./src/context/AppContext.js");
/* harmony import */ var _styles_imbu_ImbuType_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../styles/imbu/ImbuType.css */ "./src/styles/imbu/ImbuType.css");
/* harmony import */ var _styles_imbu_ImbuType_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_imbu_ImbuType_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _imbuItemDetails_ImbuItemPriceEditor_jsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./imbuItemDetails/ImbuItemPriceEditor.jsx */ "./src/components/imbu/imbuItemDetails/ImbuItemPriceEditor.jsx");
/* harmony import */ var _analysisResult_ImbuCostAnalysisResult_jsx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./analysisResult/ImbuCostAnalysisResult.jsx */ "./src/components/imbu/analysisResult/ImbuCostAnalysisResult.jsx");






var ImbuTypeCard = function ImbuTypeCard(_ref) {
  var imbuType = _ref.imbuType;
  var context = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_context_AppContext__WEBPACK_IMPORTED_MODULE_2__["AppContext"]);
  var itemPrices = context.itemPrices.filter(function (x) {
    return x.Type == imbuType.id || x.itemName === 'Gold Token';
  });
  var imbuementOptions = context.imbuementOptions.filter(function (x) {
    return x.type == imbuType.id;
  })[0].items;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Card"], {
    className: "text-center imbu-type-card",
    bg: "light"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Card"].Header, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Card"].Img, {
    variant: "left",
    src: "images/".concat(imbuType.id, ".gif"),
    style: {
      float: 'left'
    }
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong", null, imbuType.name))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Card"].Body, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    style: {
      marginBottom: '15px'
    }
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_analysisResult_ImbuCostAnalysisResult_jsx__WEBPACK_IMPORTED_MODULE_5__["default"], {
    itemPrices: itemPrices,
    imbuementOptions: imbuementOptions
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_imbuItemDetails_ImbuItemPriceEditor_jsx__WEBPACK_IMPORTED_MODULE_4__["default"], {
    itemPrices: itemPrices,
    imbuementOptions: imbuementOptions
  }))));
};
/* harmony default export */ __webpack_exports__["default"] = (ImbuTypeCard);

/***/ }),

/***/ "./src/components/imbu/Imbuements.jsx":
/*!********************************************!*\
  !*** ./src/components/imbu/Imbuements.jsx ***!
  \********************************************/
/*! exports provided: Imbuements, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Imbuements", function() { return Imbuements; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/es/index.js");
/* harmony import */ var _styles_imbu_Imbuements_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../styles/imbu/Imbuements.css */ "./src/styles/imbu/Imbuements.css");
/* harmony import */ var _styles_imbu_Imbuements_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_imbu_Imbuements_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _ImbuTypeCard_jsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ImbuTypeCard.jsx */ "./src/components/imbu/ImbuTypeCard.jsx");
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../types */ "./src/types.js");





var Imbuements = function Imbuements() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Container"], {
    className: "imbuements-wrapper"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Row"], null, Object.values(_types__WEBPACK_IMPORTED_MODULE_4__["imbuTypes"]).map(function (imbuType) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
      key: imbuType.id,
      sx: 6,
      sm: {
        span: 10,
        offset: 1
      },
      md: {
        span: 7,
        offset: 0
      },
      lg: {
        span: 6,
        offset: 0
      },
      xl: {
        span: 5,
        offset: 0
      }
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ImbuTypeCard_jsx__WEBPACK_IMPORTED_MODULE_3__["default"], {
      imbuType: imbuType
    }));
  })));
};
/* harmony default export */ __webpack_exports__["default"] = (Imbuements);

/***/ }),

/***/ "./src/components/imbu/ItemImage.jsx":
/*!*******************************************!*\
  !*** ./src/components/imbu/ItemImage.jsx ***!
  \*******************************************/
/*! exports provided: ItemImage, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ItemImage", function() { return ItemImage; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utilities__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utilities */ "./src/utilities.js");


var ItemImage = function ItemImage(_ref) {
  var itemName = _ref.itemName,
      imageTitle = _ref.imageTitle;
  var imageId = Object(_utilities__WEBPACK_IMPORTED_MODULE_1__["getItemImageId"])(itemName);
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    title: "".concat(imageTitle || itemName)
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "#",
    onClick: function onClick(e) {
      e.preventDefault();
    }
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: "images/".concat(imageId, ".gif")
  })));
};
/* harmony default export */ __webpack_exports__["default"] = (ItemImage);

/***/ }),

/***/ "./src/components/imbu/Toolbar.jsx":
/*!*****************************************!*\
  !*** ./src/components/imbu/Toolbar.jsx ***!
  \*****************************************/
/*! exports provided: Toolbar, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Toolbar", function() { return Toolbar; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

var Toolbar = function Toolbar(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    style: {
      marginBottom: '10px',
      justifyContent: 'center',
      display: 'flex'
    }
  }, props.children);
};
/* harmony default export */ __webpack_exports__["default"] = (Toolbar);

/***/ }),

/***/ "./src/components/imbu/analysisResult/ImbuCostAnalysisResult.jsx":
/*!***********************************************************************!*\
  !*** ./src/components/imbu/analysisResult/ImbuCostAnalysisResult.jsx ***!
  \***********************************************************************/
/*! exports provided: ImbuCostAnalysisResult, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImbuCostAnalysisResult", function() { return ImbuCostAnalysisResult; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_if_elseif_else_render__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-if-elseif-else-render */ "./node_modules/react-if-elseif-else-render/build/index.js");
/* harmony import */ var react_if_elseif_else_render__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_if_elseif_else_render__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/es/index.js");
/* harmony import */ var react_bootstrap_Collapse__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-bootstrap/Collapse */ "./node_modules/react-bootstrap/Collapse.js");
/* harmony import */ var react_bootstrap_Collapse__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Collapse__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _hoc_withAppContext__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../hoc/withAppContext */ "./src/components/hoc/withAppContext.js");
/* harmony import */ var _utilities__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../utilities */ "./src/utilities.js");
/* harmony import */ var _prices_alerts_PricesAlert_jsx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../prices/alerts/PricesAlert.jsx */ "./src/components/prices/alerts/PricesAlert.jsx");
/* harmony import */ var _Toolbar_jsx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../Toolbar.jsx */ "./src/components/imbu/Toolbar.jsx");
/* harmony import */ var _ImbuCostAnalysisResultDetails_jsx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./ImbuCostAnalysisResultDetails.jsx */ "./src/components/imbu/analysisResult/ImbuCostAnalysisResultDetails.jsx");
/* harmony import */ var _ImbuCostAnalysisResultItem_jsx__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./ImbuCostAnalysisResultItem.jsx */ "./src/components/imbu/analysisResult/ImbuCostAnalysisResultItem.jsx");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }












var ImbuCostAnalysisResult =
/*#__PURE__*/
function (_Component) {
  _inherits(ImbuCostAnalysisResult, _Component);

  function ImbuCostAnalysisResult() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, ImbuCostAnalysisResult);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(ImbuCostAnalysisResult)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "state", {
      showDetails: false
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "calculateOption", function (itemPrices, itemSet) {
      var selectedPrices = [];
      Object.entries(itemSet).forEach(function (_ref) {
        var _ref2 = _slicedToArray(_ref, 2),
            itemName = _ref2[0],
            count = _ref2[1];

        var itemPrice = lodash__WEBPACK_IMPORTED_MODULE_2___default.a.find(itemPrices, {
          itemName: itemName
        });

        if (itemPrice) {
          var itemPriceInfo = {
            itemName: itemPrice.itemName,
            Count: itemPrice.Count,
            value: itemPrice.value,
            price: Object(_utilities__WEBPACK_IMPORTED_MODULE_6__["calculateImbuItemPrice"])(itemPrice.value, count)
          };

          if (itemName === 'Gold Token') {
            itemPriceInfo.Count = count;
          }

          selectedPrices = _toConsumableArray(selectedPrices).concat([itemPriceInfo]);
        }
      });
      return {
        itemSet: itemSet,
        totalPrice: Object(_utilities__WEBPACK_IMPORTED_MODULE_6__["sumImbuItemPrices"])(selectedPrices)
      };
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "calculateOptions", function (imbuementOptions, itemPrices) {
      var results = [];
      imbuementOptions.forEach(function (itemSet) {
        var result = _this.calculateOption(itemPrices, itemSet);

        results = _toConsumableArray(results).concat([result]);
      });
      return results;
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "analyzeOptions", function (imbuementOptions, itemPrices) {
      var calculatedOptions = _this.calculateOptions(imbuementOptions, itemPrices);

      var bestOption = lodash__WEBPACK_IMPORTED_MODULE_2___default.a.minBy(calculatedOptions, 'totalPrice');

      return {
        calculatedOptions: calculatedOptions,
        bestOption: bestOption
      };
    });

    return _this;
  }

  _createClass(ImbuCostAnalysisResult, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var showDetails = this.state.showDetails;
      var _this$props = this.props,
          imbuementOptions = _this$props.imbuementOptions,
          itemPrices = _this$props.itemPrices;

      var _this$analyzeOptions = this.analyzeOptions(imbuementOptions, itemPrices),
          calculatedOptions = _this$analyzeOptions.calculatedOptions,
          bestOption = _this$analyzeOptions.bestOption;

      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_prices_alerts_PricesAlert_jsx__WEBPACK_IMPORTED_MODULE_7__["PricesAlert"], {
        variant: "success",
        heading: "Cheapest option"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ImbuCostAnalysisResultItem_jsx__WEBPACK_IMPORTED_MODULE_10__["default"], {
        calculatedOption: bestOption
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_if_elseif_else_render__WEBPACK_IMPORTED_MODULE_1__["If"], {
        condition: !!calculatedOptions && calculatedOptions.length > 0
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_if_elseif_else_render__WEBPACK_IMPORTED_MODULE_1__["Then"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Toolbar_jsx__WEBPACK_IMPORTED_MODULE_8__["default"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["ButtonToolbar"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Button"], {
        "aria-controls": "imbu-cost-analysis-result-details",
        "aria-expanded": showDetails,
        variant: "success",
        size: "sm",
        onClick: function onClick() {
          return _this2.setState({
            showDetails: !showDetails
          });
        }
      }, "Details"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap_Collapse__WEBPACK_IMPORTED_MODULE_4___default.a, {
        in: this.state.showDetails
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        id: "imbu-cost-analysis-result-details"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ImbuCostAnalysisResultDetails_jsx__WEBPACK_IMPORTED_MODULE_9__["default"], {
        calculatedOptions: calculatedOptions
      })))))));
    }
  }]);

  return ImbuCostAnalysisResult;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);
/* harmony default export */ __webpack_exports__["default"] = (Object(_hoc_withAppContext__WEBPACK_IMPORTED_MODULE_5__["withAppContext"])(ImbuCostAnalysisResult));

/***/ }),

/***/ "./src/components/imbu/analysisResult/ImbuCostAnalysisResultDetails.jsx":
/*!******************************************************************************!*\
  !*** ./src/components/imbu/analysisResult/ImbuCostAnalysisResultDetails.jsx ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _prices_alerts_PricesAlert_jsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../prices/alerts/PricesAlert.jsx */ "./src/components/prices/alerts/PricesAlert.jsx");
/* harmony import */ var _ImbuCostAnalysisResultItem_jsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ImbuCostAnalysisResultItem.jsx */ "./src/components/imbu/analysisResult/ImbuCostAnalysisResultItem.jsx");




var ImbuCostAnalysisResultDetails = function ImbuCostAnalysisResultDetails(_ref) {
  var calculatedOptions = _ref.calculatedOptions;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, calculatedOptions.map(function (calculatedOption, i) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_prices_alerts_PricesAlert_jsx__WEBPACK_IMPORTED_MODULE_1__["PricesAlert"], {
      key: i,
      variant: "success",
      heading: "#".concat(i + 1, " option")
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ImbuCostAnalysisResultItem_jsx__WEBPACK_IMPORTED_MODULE_2__["default"], {
      calculatedOption: calculatedOption
    }));
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (ImbuCostAnalysisResultDetails);

/***/ }),

/***/ "./src/components/imbu/analysisResult/ImbuCostAnalysisResultItem.jsx":
/*!***************************************************************************!*\
  !*** ./src/components/imbu/analysisResult/ImbuCostAnalysisResultItem.jsx ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/es/index.js");
/* harmony import */ var _ImbuItem_jsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../ImbuItem.jsx */ "./src/components/imbu/ImbuItem.jsx");
/* harmony import */ var _imbuItemDetails_ImbuItemsTotalPrice_jsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../imbuItemDetails/ImbuItemsTotalPrice.jsx */ "./src/components/imbu/imbuItemDetails/ImbuItemsTotalPrice.jsx");





var ImbuCostAnalysisResultItem = function ImbuCostAnalysisResultItem(_ref) {
  var calculatedOption = _ref.calculatedOption;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Group, {
    as: react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Row"],
    className: "justify-content-center"
  }, Object.entries(calculatedOption.itemSet).map(function (items, i) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ImbuItem_jsx__WEBPACK_IMPORTED_MODULE_2__["default"], {
      key: i,
      itemName: items[0],
      itemCount: items[1]
    });
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_imbuItemDetails_ImbuItemsTotalPrice_jsx__WEBPACK_IMPORTED_MODULE_3__["default"], {
    totalPrice: calculatedOption.totalPrice
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (ImbuCostAnalysisResultItem);

/***/ }),

/***/ "./src/components/imbu/imbuItemDetails/ImbuItemEditable.jsx":
/*!******************************************************************!*\
  !*** ./src/components/imbu/imbuItemDetails/ImbuItemEditable.jsx ***!
  \******************************************************************/
/*! exports provided: ImbuItemEditable, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImbuItemEditable", function() { return ImbuItemEditable; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/es/index.js");
/* harmony import */ var _styles_imbu_imbuItem_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../styles/imbu/imbuItem.css */ "./src/styles/imbu/imbuItem.css");
/* harmony import */ var _styles_imbu_imbuItem_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_imbu_imbuItem_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _ItemImage_jsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../ItemImage.jsx */ "./src/components/imbu/ItemImage.jsx");




var ImbuItemEditable = function ImbuItemEditable(_ref) {
  var name = _ref.name,
      price = _ref.price,
      count = _ref.count,
      edited = _ref.edited,
      onChangePrice = _ref.onChangePrice,
      onChangeCount = _ref.onChangeCount;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Group, {
    as: react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Row"]
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    xs: "1",
    sm: "2"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ItemImage_jsx__WEBPACK_IMPORTED_MODULE_3__["default"], {
    itemName: name
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Label, {
    column: true,
    xs: {
      span: 4,
      offset: 1
    },
    sm: {
      span: 5,
      offset: 0
    }
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    title: "Item name"
  }, name)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    xs: "2",
    className: "count-input-wrapper"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Control, {
    id: "".concat(name, "-count"),
    plaintext: !edited,
    value: count,
    onChange: onChangeCount,
    title: "Item count",
    maxLength: "2"
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    xs: "3",
    className: "price-input-wrapper"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Control, {
    id: "".concat(name, "-price"),
    plaintext: !edited,
    value: price,
    onChange: onChangePrice,
    title: "Item unit price",
    maxLength: "6"
  })));
};
/* harmony default export */ __webpack_exports__["default"] = (ImbuItemEditable);

/***/ }),

/***/ "./src/components/imbu/imbuItemDetails/ImbuItemPriceEditor.jsx":
/*!*********************************************************************!*\
  !*** ./src/components/imbu/imbuItemDetails/ImbuItemPriceEditor.jsx ***!
  \*********************************************************************/
/*! exports provided: ImbuItemPriceEditor, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImbuItemPriceEditor", function() { return ImbuItemPriceEditor; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_if_elseif_else_render__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-if-elseif-else-render */ "./node_modules/react-if-elseif-else-render/build/index.js");
/* harmony import */ var react_if_elseif_else_render__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_if_elseif_else_render__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _hoc_withAppContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../hoc/withAppContext */ "./src/components/hoc/withAppContext.js");
/* harmony import */ var _prices_alerts_PricesAlert_jsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../prices/alerts/PricesAlert.jsx */ "./src/components/prices/alerts/PricesAlert.jsx");
/* harmony import */ var _ImbuItems_jsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ImbuItems.jsx */ "./src/components/imbu/imbuItemDetails/ImbuItems.jsx");
/* harmony import */ var _formatters__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../formatters */ "./src/formatters.js");
/* harmony import */ var _utilities__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../utilities */ "./src/utilities.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../constants */ "./src/constants.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }









var ImbuItemPriceEditor =
/*#__PURE__*/
function (_Component) {
  _inherits(ImbuItemPriceEditor, _Component);

  function ImbuItemPriceEditor() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, ImbuItemPriceEditor);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(ImbuItemPriceEditor)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "state", {
      inputs: []
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "componentDidMount", function () {
      _this.initializeInputs();
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "markItemEdited", function (id) {
      var inputs = _this.state.inputs;
      var input = Object(_utilities__WEBPACK_IMPORTED_MODULE_6__["getArrayElementInfo"])(inputs, 'id', id);

      if (!!input && !input.edited) {
        input.element.edited = true;
        Object.assign(inputs[input.elementIndex], input.element);

        _this.setState({
          inputs: inputs
        });
      }
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "onChangePrice", function (e) {
      var id = e.target.id.split('-')[0];
      var newPrice = Object(_formatters__WEBPACK_IMPORTED_MODULE_5__["toNumber"])(Object(_formatters__WEBPACK_IMPORTED_MODULE_5__["removeLeadingZero"])(Object(_formatters__WEBPACK_IMPORTED_MODULE_5__["limit"])(e.target.value, 6))) || 0;

      if (newPrice >= _constants__WEBPACK_IMPORTED_MODULE_7__["IMBU_ITEM_PRICE_MIN"] && newPrice <= _constants__WEBPACK_IMPORTED_MODULE_7__["IMBU_ITEM_PRICE_MAX"]) {
        _this.props.context.changeItemProp(id, 'value', parseInt(newPrice));
      }

      _this.markItemEdited(id);
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "onChangeCount", function (e) {
      var id = e.target.id.split('-')[0];
      var newCount = Object(_formatters__WEBPACK_IMPORTED_MODULE_5__["toNumber"])(Object(_formatters__WEBPACK_IMPORTED_MODULE_5__["removeLeadingZero"])(Object(_formatters__WEBPACK_IMPORTED_MODULE_5__["limit"])(e.target.value, 2))) || 0;

      if (newCount >= _constants__WEBPACK_IMPORTED_MODULE_7__["IMBU_ITEM_COUNT_MIN"] && newCount <= _constants__WEBPACK_IMPORTED_MODULE_7__["IMBU_ITEM_COUNT_MAX"]) {
        _this.props.context.changeItemProp(id, 'Count', parseInt(newCount));
      }

      _this.markItemEdited(id);
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "initializeInputs", function () {
      var itemPrices = _this.props.itemPrices;

      if (!!itemPrices) {
        var inputs = [];
        itemPrices.map(function (itemPrice) {
          var inputState = {
            id: itemPrice.itemName,
            edited: false
          };
          inputs = _toConsumableArray(inputs).concat([inputState]);
        });

        _this.setState({
          inputs: inputs
        });
      }
    });

    return _this;
  }

  _createClass(ImbuItemPriceEditor, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var inputs = this.state.inputs;
      var _this$props = this.props,
          itemPrices = _this$props.itemPrices,
          imbuementOptions = _this$props.imbuementOptions;
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_if_elseif_else_render__WEBPACK_IMPORTED_MODULE_1__["If"], {
        condition: !!itemPrices && inputs.length > 0
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_if_elseif_else_render__WEBPACK_IMPORTED_MODULE_1__["Then"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_prices_alerts_PricesAlert_jsx__WEBPACK_IMPORTED_MODULE_3__["PricesAlert"], {
        variant: "info",
        heading: "Items"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ImbuItems_jsx__WEBPACK_IMPORTED_MODULE_4__["ImbuItems"], {
        itemPrices: itemPrices,
        imbuementOptions: imbuementOptions,
        inputs: inputs,
        onChangePrice: function onChangePrice(e) {
          return _this2.onChangePrice(e);
        },
        onChangeCount: function onChangeCount(e) {
          return _this2.onChangeCount(e);
        }
      }))));
    }
  }]);

  return ImbuItemPriceEditor;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);
/* harmony default export */ __webpack_exports__["default"] = (Object(_hoc_withAppContext__WEBPACK_IMPORTED_MODULE_2__["withAppContext"])(ImbuItemPriceEditor));

/***/ }),

/***/ "./src/components/imbu/imbuItemDetails/ImbuItems.jsx":
/*!***********************************************************!*\
  !*** ./src/components/imbu/imbuItemDetails/ImbuItems.jsx ***!
  \***********************************************************/
/*! exports provided: ImbuItems, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImbuItems", function() { return ImbuItems; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ImbuItemEditable_jsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ImbuItemEditable.jsx */ "./src/components/imbu/imbuItemDetails/ImbuItemEditable.jsx");



var ImbuItems = function ImbuItems(_ref) {
  var itemPrices = _ref.itemPrices,
      imbuementOptions = _ref.imbuementOptions,
      inputs = _ref.inputs,
      onChangePrice = _ref.onChangePrice,
      onChangeCount = _ref.onChangeCount;
  return Object.keys(imbuementOptions[0]).map(function (itemName) {
    var itemPrice = lodash__WEBPACK_IMPORTED_MODULE_1___default.a.find(itemPrices, {
      itemName: itemName
    });

    var inputState = inputs.filter(function (x) {
      return x.id === itemName;
    })[0];

    if (!!itemPrice && !!inputState) {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ImbuItemEditable_jsx__WEBPACK_IMPORTED_MODULE_2__["ImbuItemEditable"], {
        key: itemPrice.itemName,
        name: itemPrice.itemName,
        price: itemPrice.value,
        count: itemPrice.Count,
        edited: inputState.edited,
        onChangePrice: onChangePrice,
        onChangeCount: onChangeCount
      });
    }
  });
};
/* harmony default export */ __webpack_exports__["default"] = (ImbuItems);

/***/ }),

/***/ "./src/components/imbu/imbuItemDetails/ImbuItemsTotalPrice.jsx":
/*!*********************************************************************!*\
  !*** ./src/components/imbu/imbuItemDetails/ImbuItemsTotalPrice.jsx ***!
  \*********************************************************************/
/*! exports provided: ImbuItemsTotalPrice, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImbuItemsTotalPrice", function() { return ImbuItemsTotalPrice; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/es/index.js");


var ImbuItemsTotalPrice = function ImbuItemsTotalPrice(_ref) {
  var totalPrice = _ref.totalPrice;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Group, {
    as: react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Row"]
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Label, {
    column: true,
    xs: "12"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    style: {
      fontWeight: 'bold'
    },
    title: "Total price for imbu (based off of currently set prices)"
  }, "Total Price: ", totalPrice.toLocaleString(), " gp")));
};
/* harmony default export */ __webpack_exports__["default"] = (ImbuItemsTotalPrice);

/***/ }),

/***/ "./src/components/prices/PricesStatusInfo.jsx":
/*!****************************************************!*\
  !*** ./src/components/prices/PricesStatusInfo.jsx ***!
  \****************************************************/
/*! exports provided: PricesStatusInfo, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PricesStatusInfo", function() { return PricesStatusInfo; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_if_elseif_else_render__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-if-elseif-else-render */ "./node_modules/react-if-elseif-else-render/build/index.js");
/* harmony import */ var react_if_elseif_else_render__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_if_elseif_else_render__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _context_AppContext__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../context/AppContext */ "./src/context/AppContext.js");
/* harmony import */ var _alerts_PricesNotFoundAlert_jsx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./alerts/PricesNotFoundAlert.jsx */ "./src/components/prices/alerts/PricesNotFoundAlert.jsx");
/* harmony import */ var _alerts_PricesUpToDateAlert_jsx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./alerts/PricesUpToDateAlert.jsx */ "./src/components/prices/alerts/PricesUpToDateAlert.jsx");
/* harmony import */ var _alerts_PricesOutdatedAlert_jsx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./alerts/PricesOutdatedAlert.jsx */ "./src/components/prices/alerts/PricesOutdatedAlert.jsx");
/* harmony import */ var _alerts_PricesLoadingAlert_jsx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./alerts/PricesLoadingAlert.jsx */ "./src/components/prices/alerts/PricesLoadingAlert.jsx");










var sortByCheckTimes = function sortByCheckTimes(itemPrices) {
  var checkTimes = itemPrices.map(function (x) {
    return x.checkTime;
  });

  if (checkTimes && checkTimes.length > 1) {
    return lodash__WEBPACK_IMPORTED_MODULE_3___default.a.orderBy(checkTimes, function (o) {
      return moment__WEBPACK_IMPORTED_MODULE_2___default()(o);
    }, ['desc']);
  } else {
    return checkTimes;
  }
};

var PricesStatusInfo = function PricesStatusInfo() {
  var context = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_context_AppContext__WEBPACK_IMPORTED_MODULE_4__["AppContext"]);
  var isLoadingData = context.isLoadingData,
      itemPrices = context.itemPrices;
  var maxCheckTime = sortByCheckTimes(itemPrices)[0];
  var maxCheckTimeMoment = !!maxCheckTime ? moment__WEBPACK_IMPORTED_MODULE_2___default()(maxCheckTime) : undefined;
  var pricesUpdateDiffHrs = !!maxCheckTime ? moment__WEBPACK_IMPORTED_MODULE_2___default()().diff(maxCheckTimeMoment, 'hours') : undefined;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_if_elseif_else_render__WEBPACK_IMPORTED_MODULE_1__["If"], {
    condition: isLoadingData
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_if_elseif_else_render__WEBPACK_IMPORTED_MODULE_1__["Then"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_alerts_PricesLoadingAlert_jsx__WEBPACK_IMPORTED_MODULE_8__["default"], null)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_if_elseif_else_render__WEBPACK_IMPORTED_MODULE_1__["ElseIf"], {
    condition: itemPrices.length == 0 || maxCheckTime === undefined || !maxCheckTimeMoment.isValid() || pricesUpdateDiffHrs === undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_alerts_PricesNotFoundAlert_jsx__WEBPACK_IMPORTED_MODULE_5__["default"], null)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_if_elseif_else_render__WEBPACK_IMPORTED_MODULE_1__["ElseIf"], {
    condition: pricesUpdateDiffHrs > 24
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_alerts_PricesOutdatedAlert_jsx__WEBPACK_IMPORTED_MODULE_7__["default"], {
    updatedOn: maxCheckTimeMoment,
    hours: pricesUpdateDiffHrs
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_if_elseif_else_render__WEBPACK_IMPORTED_MODULE_1__["Else"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_alerts_PricesUpToDateAlert_jsx__WEBPACK_IMPORTED_MODULE_6__["default"], {
    updatedOn: maxCheckTimeMoment
  })));
};
/* harmony default export */ __webpack_exports__["default"] = (PricesStatusInfo);

/***/ }),

/***/ "./src/components/prices/alerts/PricesAlert.jsx":
/*!******************************************************!*\
  !*** ./src/components/prices/alerts/PricesAlert.jsx ***!
  \******************************************************/
/*! exports provided: PricesAlert, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PricesAlert", function() { return PricesAlert; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/es/index.js");


var PricesAlert = function PricesAlert(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Alert"], {
    variant: props.variant
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Alert"].Heading, null, props.heading), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("hr", null), props.children);
};
/* harmony default export */ __webpack_exports__["default"] = (PricesAlert);

/***/ }),

/***/ "./src/components/prices/alerts/PricesLoadingAlert.jsx":
/*!*************************************************************!*\
  !*** ./src/components/prices/alerts/PricesLoadingAlert.jsx ***!
  \*************************************************************/
/*! exports provided: PricesLoadingAlert, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PricesLoadingAlert", function() { return PricesLoadingAlert; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _PricesAlert_jsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PricesAlert.jsx */ "./src/components/prices/alerts/PricesAlert.jsx");


var PricesLoadingAlert = function PricesLoadingAlert() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_PricesAlert_jsx__WEBPACK_IMPORTED_MODULE_1__["PricesAlert"], {
    variant: "info",
    heading: "Loading..."
  });
};
/* harmony default export */ __webpack_exports__["default"] = (PricesLoadingAlert);

/***/ }),

/***/ "./src/components/prices/alerts/PricesNotFoundAlert.jsx":
/*!**************************************************************!*\
  !*** ./src/components/prices/alerts/PricesNotFoundAlert.jsx ***!
  \**************************************************************/
/*! exports provided: PricesNotFoundAlert, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PricesNotFoundAlert", function() { return PricesNotFoundAlert; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _PricesAlert_jsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PricesAlert.jsx */ "./src/components/prices/alerts/PricesAlert.jsx");


var PricesNotFoundAlert = function PricesNotFoundAlert() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_PricesAlert_jsx__WEBPACK_IMPORTED_MODULE_1__["PricesAlert"], {
    variant: "danger",
    heading: "Item Prices Missing :-("
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "Item Prices seem to be missing. It could be an issue with item prices API (blame Macko)..."));
};
/* harmony default export */ __webpack_exports__["default"] = (PricesNotFoundAlert);

/***/ }),

/***/ "./src/components/prices/alerts/PricesOutdatedAlert.jsx":
/*!**************************************************************!*\
  !*** ./src/components/prices/alerts/PricesOutdatedAlert.jsx ***!
  \**************************************************************/
/*! exports provided: PricesOutdatedAlert, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PricesOutdatedAlert", function() { return PricesOutdatedAlert; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _PricesAlert_jsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PricesAlert.jsx */ "./src/components/prices/alerts/PricesAlert.jsx");
/* harmony import */ var _formatters__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../formatters */ "./src/formatters.js");



var PricesOutdatedAlert = function PricesOutdatedAlert(_ref) {
  var hours = _ref.hours,
      updatedOn = _ref.updatedOn;
  var date = Object(_formatters__WEBPACK_IMPORTED_MODULE_2__["momentFormat"])(updatedOn, _formatters__WEBPACK_IMPORTED_MODULE_2__["fancyDateTimeFormat"]);
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_PricesAlert_jsx__WEBPACK_IMPORTED_MODULE_1__["PricesAlert"], {
    variant: "warning",
    heading: "Item Prices Outdated :-("
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "Beware! Item Prices seem to be outdated. The latest update was ", hours, " hour(s) ago (", date, ")."));
};
/* harmony default export */ __webpack_exports__["default"] = (PricesOutdatedAlert);

/***/ }),

/***/ "./src/components/prices/alerts/PricesUpToDateAlert.jsx":
/*!**************************************************************!*\
  !*** ./src/components/prices/alerts/PricesUpToDateAlert.jsx ***!
  \**************************************************************/
/*! exports provided: PricesUpToDateAlert, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PricesUpToDateAlert", function() { return PricesUpToDateAlert; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _PricesAlert_jsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PricesAlert.jsx */ "./src/components/prices/alerts/PricesAlert.jsx");
/* harmony import */ var _formatters__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../formatters */ "./src/formatters.js");



var PricesUpToDateAlert = function PricesUpToDateAlert(_ref) {
  var updatedOn = _ref.updatedOn;
  var date = Object(_formatters__WEBPACK_IMPORTED_MODULE_2__["momentFormat"])(updatedOn, _formatters__WEBPACK_IMPORTED_MODULE_2__["fancyDateTimeFormat"]);
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_PricesAlert_jsx__WEBPACK_IMPORTED_MODULE_1__["PricesAlert"], {
    variant: "success",
    heading: "Item Prices Up-to-Date :-)"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "Item Prices have been updated in the last 24 hours (", date, ")."));
};
/* harmony default export */ __webpack_exports__["default"] = (PricesUpToDateAlert);

/***/ }),

/***/ "./src/constants.js":
/*!**************************!*\
  !*** ./src/constants.js ***!
  \**************************/
/*! exports provided: IMBU_ITEM_COUNT_MAX, IMBU_ITEM_COUNT_MIN, IMBU_ITEM_PRICE_MAX, IMBU_ITEM_PRICE_MIN */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IMBU_ITEM_COUNT_MAX", function() { return IMBU_ITEM_COUNT_MAX; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IMBU_ITEM_COUNT_MIN", function() { return IMBU_ITEM_COUNT_MIN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IMBU_ITEM_PRICE_MAX", function() { return IMBU_ITEM_PRICE_MAX; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IMBU_ITEM_PRICE_MIN", function() { return IMBU_ITEM_PRICE_MIN; });
var IMBU_ITEM_COUNT_MAX = 25;
var IMBU_ITEM_COUNT_MIN = 0;
var IMBU_ITEM_PRICE_MAX = 999999;
var IMBU_ITEM_PRICE_MIN = 0;

/***/ }),

/***/ "./src/context/AppContext.js":
/*!***********************************!*\
  !*** ./src/context/AppContext.js ***!
  \***********************************/
/*! exports provided: AppContext */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppContext", function() { return AppContext; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

var AppContext = react__WEBPACK_IMPORTED_MODULE_0___default.a.createContext();

/***/ }),

/***/ "./src/formatters.js":
/*!***************************!*\
  !*** ./src/formatters.js ***!
  \***************************/
/*! exports provided: defaultDateFormat, defaultDateTimeFormat, fancyDateTimeFormat, momentFormat, dateFormatter, dateTimeFormatter, toNumber, limit, removeLeadingZero */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defaultDateFormat", function() { return defaultDateFormat; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defaultDateTimeFormat", function() { return defaultDateTimeFormat; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fancyDateTimeFormat", function() { return fancyDateTimeFormat; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "momentFormat", function() { return momentFormat; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dateFormatter", function() { return dateFormatter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dateTimeFormatter", function() { return dateTimeFormatter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toNumber", function() { return toNumber; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "limit", function() { return limit; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeLeadingZero", function() { return removeLeadingZero; });
var defaultDateFormat = 'DD/MM/YYYY';
var defaultDateTimeFormat = 'DD/MM/YYYY HH:mm:ss';
var fancyDateTimeFormat = 'dddd, Do MMM YYYY @ HH:mm:ss';
var momentFormat = function momentFormat(momentDate, format) {
  return !!momentDate && !!format ? momentDate.format(format) : '';
};
var dateFormatter = function dateFormatter(momentDate) {
  return momentFormat(momentDate, defaultDateFormat);
};
var dateTimeFormatter = function dateTimeFormatter(momentDate) {
  return momentFormat(momentDate, defaultDateTimeFormat);
};
var toNumber = function toNumber(string) {
  if (!string) return '';
  return string.replace(/\D/g, '');
};
var limit = function limit(string, max) {
  if (!string) return '';
  return string.substr(0, max);
};
var removeLeadingZero = function removeLeadingZero(string) {
  if (!string) return '';
  return string.replace(/\b0+/g, '');
};

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_app_App_jsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/app/App.jsx */ "./src/components/app/App.jsx");



react_dom__WEBPACK_IMPORTED_MODULE_1___default.a.render(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_app_App_jsx__WEBPACK_IMPORTED_MODULE_2__["default"], null), document.getElementById('react-app-root'));

/***/ }),

/***/ "./src/styles/app.css":
/*!****************************!*\
  !*** ./src/styles/app.css ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js!./app.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles/app.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./src/styles/imbu/ImbuType.css":
/*!**************************************!*\
  !*** ./src/styles/imbu/ImbuType.css ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js!./ImbuType.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles/imbu/ImbuType.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./src/styles/imbu/Imbuements.css":
/*!****************************************!*\
  !*** ./src/styles/imbu/Imbuements.css ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js!./Imbuements.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles/imbu/Imbuements.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./src/styles/imbu/imbuItem.css":
/*!**************************************!*\
  !*** ./src/styles/imbu/imbuItem.css ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js!./imbuItem.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles/imbu/imbuItem.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./src/types.js":
/*!**********************!*\
  !*** ./src/types.js ***!
  \**********************/
/*! exports provided: imbuTypes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "imbuTypes", function() { return imbuTypes; });
var imbuTypes = [{
  id: 1,
  name: 'Mana Leech'
}, {
  id: 3,
  name: 'Life Leech'
}, {
  id: 2,
  name: 'Crit'
}];

/***/ }),

/***/ "./src/utilities.js":
/*!**************************!*\
  !*** ./src/utilities.js ***!
  \**************************/
/*! exports provided: calculateImbuItemPrice, sumImbuItemPrices, getArrayElementInfo, getItemImageId */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "calculateImbuItemPrice", function() { return calculateImbuItemPrice; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sumImbuItemPrices", function() { return sumImbuItemPrices; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getArrayElementInfo", function() { return getArrayElementInfo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getItemImageId", function() { return getItemImageId; });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);

var calculateImbuItemPrice = function calculateImbuItemPrice(price, count) {
  return parseInt(price) * parseInt(count);
};
var sumImbuItemPrices = function sumImbuItemPrices(itemPrices) {
  var prices = itemPrices.map(function (itemPrice) {
    return calculateImbuItemPrice(itemPrice.value, itemPrice.Count);
  });

  var totalPrice = lodash__WEBPACK_IMPORTED_MODULE_0___default.a.sumBy(prices, function (p) {
    return p;
  });

  return totalPrice;
};
var getArrayElementInfo = function getArrayElementInfo(array, key, value) {
  array = array || [];
  var element = array.filter(function (x) {
    return x[key] === value;
  });
  var elementIndex = array.findIndex(function (x) {
    return x[key] === value;
  });
  var elementInfo = null;

  if (!!element && element.length > 0) {
    elementInfo = {
      element: element[0],
      elementIndex: elementIndex
    };
  }

  return elementInfo;
};
var getItemImageId = function getItemImageId(itemName) {
  if (!itemName) return '';
  return itemName.replace(/\s+/g, '_').toLowerCase();
};

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0eWxlcy9hcHAuY3NzIiwid2VicGFjazovLy8uL3NyYy9zdHlsZXMvaW1idS9JbWJ1VHlwZS5jc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0eWxlcy9pbWJ1L0ltYnVlbWVudHMuY3NzIiwid2VicGFjazovLy8uL3NyYy9zdHlsZXMvaW1idS9pbWJ1SXRlbS5jc3MiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUgc3luYyBeXFwuXFwvLiokIiwid2VicGFjazovLy8uL3NyYy9hcGkvcHJpY2VzQXBpLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2FwcC9BcHAuanN4Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2FwcC9BcHBGb290ZXIuanN4Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2FwcC9BcHBIZWFkZXIuanN4Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2hvYy93aXRoQXBwQ29udGV4dC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9pbWJ1L0ltYnVJdGVtLmpzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9pbWJ1L0ltYnVJdGVtQ29zdEFuYWx5emVyLmpzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9pbWJ1L0ltYnVMb2FkaW5nT3ZlcmxheS5qc3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvaW1idS9JbWJ1VHlwZUNhcmQuanN4Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2ltYnUvSW1idWVtZW50cy5qc3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvaW1idS9JdGVtSW1hZ2UuanN4Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2ltYnUvVG9vbGJhci5qc3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvaW1idS9hbmFseXNpc1Jlc3VsdC9JbWJ1Q29zdEFuYWx5c2lzUmVzdWx0LmpzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9pbWJ1L2FuYWx5c2lzUmVzdWx0L0ltYnVDb3N0QW5hbHlzaXNSZXN1bHREZXRhaWxzLmpzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9pbWJ1L2FuYWx5c2lzUmVzdWx0L0ltYnVDb3N0QW5hbHlzaXNSZXN1bHRJdGVtLmpzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9pbWJ1L2ltYnVJdGVtRGV0YWlscy9JbWJ1SXRlbUVkaXRhYmxlLmpzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9pbWJ1L2ltYnVJdGVtRGV0YWlscy9JbWJ1SXRlbVByaWNlRWRpdG9yLmpzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9pbWJ1L2ltYnVJdGVtRGV0YWlscy9JbWJ1SXRlbXMuanN4Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2ltYnUvaW1idUl0ZW1EZXRhaWxzL0ltYnVJdGVtc1RvdGFsUHJpY2UuanN4Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL3ByaWNlcy9QcmljZXNTdGF0dXNJbmZvLmpzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9wcmljZXMvYWxlcnRzL1ByaWNlc0FsZXJ0LmpzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9wcmljZXMvYWxlcnRzL1ByaWNlc0xvYWRpbmdBbGVydC5qc3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvcHJpY2VzL2FsZXJ0cy9QcmljZXNOb3RGb3VuZEFsZXJ0LmpzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9wcmljZXMvYWxlcnRzL1ByaWNlc091dGRhdGVkQWxlcnQuanN4Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL3ByaWNlcy9hbGVydHMvUHJpY2VzVXBUb0RhdGVBbGVydC5qc3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbnN0YW50cy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29udGV4dC9BcHBDb250ZXh0LmpzIiwid2VicGFjazovLy8uL3NyYy9mb3JtYXR0ZXJzLmpzIiwid2VicGFjazovLy8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3R5bGVzL2FwcC5jc3M/MTc5OSIsIndlYnBhY2s6Ly8vLi9zcmMvc3R5bGVzL2ltYnUvSW1idVR5cGUuY3NzPzE0NzQiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0eWxlcy9pbWJ1L0ltYnVlbWVudHMuY3NzP2UyZjkiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0eWxlcy9pbWJ1L2ltYnVJdGVtLmNzcz81NzI3Iiwid2VicGFjazovLy8uL3NyYy90eXBlcy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdXRpbGl0aWVzLmpzIl0sIm5hbWVzIjpbIkFQSV9QUklDRVNfVVJMIiwiZ2V0SXRlbVByaWNlcyIsInJlc3VsdCIsImRhdGEiLCJtZXNzYWdlIiwic3VjY2VzcyIsInJlcXVlc3QiLCJnZXQiLCJ0aGVuIiwicmVzIiwic3RhdHVzQ29kZSIsImJvZHkiLCJjYXRjaCIsImVyciIsImNvbnNvbGUiLCJsb2ciLCJnZXRJdGVtUHJpY2VzRmFrZSIsImpzb25EYXRhIiwiSlNPTiIsInBhcnNlIiwic3RhdHVzIiwiQXBwIiwiQXBwRm9vdGVyIiwiRGF0ZSIsImdldEZ1bGxZZWFyIiwiQXBwSGVhZGVyIiwid2l0aEFwcENvbnRleHQiLCJDb21wb25lbnQiLCJXcmFwcGVyQ29tcG9uZW50IiwicHJvcHMiLCJjdHgiLCJJbWJ1SXRlbSIsIml0ZW1OYW1lIiwiaXRlbUNvdW50IiwiTE9DQUxTVE9SQUdFX0lURU1QUklDRVNfS0VZIiwiSW1idUl0ZW1Db3N0QW5hbHl6ZXIiLCJpdGVtUHJpY2VzIiwic2V0U3RhdGVBc3luYyIsImV4cGlyZXNBdCIsImRhdGVUaW1lRm9ybWF0dGVyIiwibW9tZW50IiwiYWRkIiwid2luZG93IiwibG9jYWxTdG9yYWdlIiwic2V0SXRlbSIsInN0cmluZ2lmeSIsInNhdmVJdGVtUHJpY2VzIiwibG9jYWxTdG9yYWdlSXRlbVByaWNlcyIsImdldEl0ZW0iLCJnZXRQcmljZXNGcm9tQXBpIiwiaXRlbVByaWNlc0xvY2FsQ2FjaGUiLCJkZWZhdWx0RGF0ZVRpbWVGb3JtYXQiLCJpc1ZhbGlkIiwiaXNCZWZvcmUiLCJwcm9wIiwidmFsdWUiLCJzdGF0ZSIsIml0ZW1JbmZvIiwiZ2V0QXJyYXlFbGVtZW50SW5mbyIsImVsZW1lbnQiLCJ1bmRlZmluZWQiLCJPYmplY3QiLCJhc3NpZ24iLCJlbGVtZW50SW5kZXgiLCJzZXRTdGF0ZSIsImlzTG9hZGluZ0RhdGEiLCJsb2FkSXRlbVByaWNlcyIsImltYnVlbWVudE9wdGlvbnMiLCJQcm9taXNlIiwicmVzb2x2ZSIsInJlbG9hZERhdGEiLCJjb250ZXh0IiwiY2hhbmdlSXRlbVByb3AiLCJsZW5ndGgiLCJtYXJnaW5MZWZ0IiwiSW1idUxvYWRpbmdPdmVybGF5IiwidXNlQ29udGV4dCIsIkFwcENvbnRleHQiLCJ3cmFwcGVyIiwibWFyZ2luQm90dG9tIiwiY2hpbGRyZW4iLCJJbWJ1VHlwZUNhcmQiLCJpbWJ1VHlwZSIsImZpbHRlciIsIngiLCJUeXBlIiwiaWQiLCJ0eXBlIiwiaXRlbXMiLCJmbG9hdCIsIm5hbWUiLCJJbWJ1ZW1lbnRzIiwidmFsdWVzIiwiaW1idVR5cGVzIiwibWFwIiwic3BhbiIsIm9mZnNldCIsIkl0ZW1JbWFnZSIsImltYWdlVGl0bGUiLCJpbWFnZUlkIiwiZ2V0SXRlbUltYWdlSWQiLCJlIiwicHJldmVudERlZmF1bHQiLCJUb29sYmFyIiwianVzdGlmeUNvbnRlbnQiLCJkaXNwbGF5IiwiSW1idUNvc3RBbmFseXNpc1Jlc3VsdCIsInNob3dEZXRhaWxzIiwiaXRlbVNldCIsInNlbGVjdGVkUHJpY2VzIiwiZW50cmllcyIsImZvckVhY2giLCJjb3VudCIsIml0ZW1QcmljZSIsIl8iLCJmaW5kIiwiaXRlbVByaWNlSW5mbyIsIkNvdW50IiwicHJpY2UiLCJjYWxjdWxhdGVJbWJ1SXRlbVByaWNlIiwidG90YWxQcmljZSIsInN1bUltYnVJdGVtUHJpY2VzIiwicmVzdWx0cyIsImNhbGN1bGF0ZU9wdGlvbiIsImNhbGN1bGF0ZWRPcHRpb25zIiwiY2FsY3VsYXRlT3B0aW9ucyIsImJlc3RPcHRpb24iLCJtaW5CeSIsImFuYWx5emVPcHRpb25zIiwiSW1idUNvc3RBbmFseXNpc1Jlc3VsdERldGFpbHMiLCJjYWxjdWxhdGVkT3B0aW9uIiwiaSIsIkltYnVDb3N0QW5hbHlzaXNSZXN1bHRJdGVtIiwiUm93IiwiSW1idUl0ZW1FZGl0YWJsZSIsImVkaXRlZCIsIm9uQ2hhbmdlUHJpY2UiLCJvbkNoYW5nZUNvdW50IiwiSW1idUl0ZW1QcmljZUVkaXRvciIsImlucHV0cyIsImluaXRpYWxpemVJbnB1dHMiLCJpbnB1dCIsInRhcmdldCIsInNwbGl0IiwibmV3UHJpY2UiLCJ0b051bWJlciIsInJlbW92ZUxlYWRpbmdaZXJvIiwibGltaXQiLCJjb25zdGFudHMiLCJwYXJzZUludCIsIm1hcmtJdGVtRWRpdGVkIiwibmV3Q291bnQiLCJpbnB1dFN0YXRlIiwiSW1idUl0ZW1zIiwia2V5cyIsIkltYnVJdGVtc1RvdGFsUHJpY2UiLCJmb250V2VpZ2h0IiwidG9Mb2NhbGVTdHJpbmciLCJzb3J0QnlDaGVja1RpbWVzIiwiY2hlY2tUaW1lcyIsImNoZWNrVGltZSIsIm9yZGVyQnkiLCJvIiwiUHJpY2VzU3RhdHVzSW5mbyIsIm1heENoZWNrVGltZSIsIm1heENoZWNrVGltZU1vbWVudCIsInByaWNlc1VwZGF0ZURpZmZIcnMiLCJkaWZmIiwiUHJpY2VzQWxlcnQiLCJ2YXJpYW50IiwiaGVhZGluZyIsIlByaWNlc0xvYWRpbmdBbGVydCIsIlByaWNlc05vdEZvdW5kQWxlcnQiLCJQcmljZXNPdXRkYXRlZEFsZXJ0IiwiaG91cnMiLCJ1cGRhdGVkT24iLCJkYXRlIiwibW9tZW50Rm9ybWF0IiwiZmFuY3lEYXRlVGltZUZvcm1hdCIsIlByaWNlc1VwVG9EYXRlQWxlcnQiLCJJTUJVX0lURU1fQ09VTlRfTUFYIiwiSU1CVV9JVEVNX0NPVU5UX01JTiIsIklNQlVfSVRFTV9QUklDRV9NQVgiLCJJTUJVX0lURU1fUFJJQ0VfTUlOIiwiUmVhY3QiLCJjcmVhdGVDb250ZXh0IiwiZGVmYXVsdERhdGVGb3JtYXQiLCJtb21lbnREYXRlIiwiZm9ybWF0IiwiZGF0ZUZvcm1hdHRlciIsInN0cmluZyIsInJlcGxhY2UiLCJtYXgiLCJzdWJzdHIiLCJSZWFjdERPTSIsInJlbmRlciIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJwcmljZXMiLCJzdW1CeSIsInAiLCJhcnJheSIsImtleSIsImZpbmRJbmRleCIsImVsZW1lbnRJbmZvIiwidG9Mb3dlckNhc2UiXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGdCQUFRLG9CQUFvQjtBQUM1QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUFpQiw0QkFBNEI7QUFDN0M7QUFDQTtBQUNBLDBCQUFrQiwyQkFBMkI7QUFDN0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esa0RBQTBDLGdDQUFnQztBQUMxRTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGdFQUF3RCxrQkFBa0I7QUFDMUU7QUFDQSx5REFBaUQsY0FBYztBQUMvRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaURBQXlDLGlDQUFpQztBQUMxRSx3SEFBZ0gsbUJBQW1CLEVBQUU7QUFDckk7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBMkIsMEJBQTBCLEVBQUU7QUFDdkQseUNBQWlDLGVBQWU7QUFDaEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOERBQXNELCtEQUErRDs7QUFFckg7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUFnQix1QkFBdUI7QUFDdkM7OztBQUdBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3RKQSwyQkFBMkIsbUJBQU8sQ0FBQyx3R0FBbUQ7QUFDdEY7QUFDQSxjQUFjLFFBQVMsa0JBQWtCLG1DQUFtQyxnQ0FBZ0MsS0FBSyxjQUFjLHNCQUFzQiwrQkFBK0IsTUFBTSxtQkFBbUIsdUJBQXVCLHFDQUFxQyxrQ0FBa0MsS0FBSyxpQkFBaUIsdUJBQXVCLEtBQUssbUNBQW1DLGFBQWEsbUNBQW1DLG9DQUFvQyxTQUFTLEtBQUssbUNBQW1DLGFBQWEsbUNBQW1DLG9DQUFvQyxTQUFTLEtBQUs7Ozs7Ozs7Ozs7Ozs7QUNGdm1CLDJCQUEyQixtQkFBTyxDQUFDLDJHQUFzRDtBQUN6RjtBQUNBLGNBQWMsUUFBUyx1QkFBdUIsbUNBQW1DLEtBQUsscURBQXFELHNDQUFzQyxLQUFLOzs7Ozs7Ozs7Ozs7O0FDRnRMLDJCQUEyQixtQkFBTyxDQUFDLDJHQUFzRDtBQUN6RjtBQUNBLGNBQWMsUUFBUywrQkFBK0IsMENBQTBDLDZCQUE2Qiw2QkFBNkIsNkJBQTZCLDhCQUE4QixTQUFTLEtBQUssb0NBQW9DLGNBQWMsOEJBQThCLFNBQVMsS0FBSzs7Ozs7Ozs7Ozs7OztBQ0ZqVSwyQkFBMkIsbUJBQU8sQ0FBQywyR0FBc0Q7QUFDekY7QUFDQSxjQUFjLFFBQVMseUJBQXlCLHFDQUFxQyxLQUFLOzs7Ozs7Ozs7Ozs7O0FDRjFGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ25SQTtBQUVBLElBQU1BLGNBQWMsR0FBRyxzQ0FBdkI7QUFFTyxJQUFNQyxhQUFhO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSwwQkFBRztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDckJDLGtCQURxQixHQUNaO0FBQ1RDLGtCQUFJLEVBQUUsRUFERztBQUVUQyxxQkFBTyxFQUFFLGVBRkE7QUFHVEMscUJBQU8sRUFBRTtBQUhBLGFBRFk7QUFBQTtBQUFBLG1CQU9uQkMsaURBQU8sQ0FDUkMsR0FEQyxDQUNHUCxjQURILEVBRURRLElBRkMsQ0FFSSxVQUFBQyxHQUFHLEVBQUk7QUFDVCxrQkFBSUEsR0FBRyxDQUFDQyxVQUFKLEtBQW1CLEdBQXZCLEVBQTRCO0FBQ3hCLHVCQUFPO0FBQ0hQLHNCQUFJLEVBQUVNLEdBQUcsQ0FBQ0UsSUFEUDtBQUVIUCx5QkFBTyxFQUFFLFNBRk47QUFHSEMseUJBQU8sRUFBRTtBQUhOLGlCQUFQO0FBS0g7QUFDSixhQVZDLEVBV0RPLEtBWEMsQ0FXSyxVQUFBQyxHQUFHLEVBQUk7QUFDVlgsb0JBQU0sQ0FBQ0UsT0FBUCxHQUFpQlMsR0FBakI7QUFDQUMscUJBQU8sQ0FBQ0MsR0FBUixDQUFZLG9DQUFaLEVBQWtERixHQUFsRDtBQUNILGFBZEMsQ0FQbUI7O0FBQUE7QUFBQSw2Q0F1QmxCWCxNQXZCa0I7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsR0FBSDs7QUFBQSxrQkFBYkQsYUFBYTtBQUFBO0FBQUE7QUFBQSxHQUFuQjtBQTBCQSxJQUFNZSxpQkFBaUIsR0FBRyxTQUFwQkEsaUJBQW9CLEdBQU07QUFDbkMsTUFBTUMsUUFBUSxHQUFHLHMrQ0FBakI7QUFDQSxTQUFPO0FBQ0hkLFFBQUksRUFBRWUsSUFBSSxDQUFDQyxLQUFMLENBQVdGLFFBQVgsQ0FESDtBQUVIYixXQUFPLEVBQUUsRUFGTjtBQUdIQyxXQUFPLEVBQUUsSUFITjtBQUlIZSxVQUFNLEVBQUU7QUFKTCxHQUFQO0FBTUgsQ0FSTSxDOzs7Ozs7Ozs7Ozs7QUM5QlA7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUMsR0FBRyxHQUFHLFNBQU5BLEdBQU07QUFBQSxTQUNSLHdIQUNJLDJEQUFDLHNEQUFELE9BREosRUFFSSwyREFBQyxzRUFBRCxPQUZKLEVBR0ksMkRBQUMsc0RBQUQsT0FISixDQURRO0FBQUEsQ0FBWjs7QUFRZUEsa0VBQWYsRTs7Ozs7Ozs7Ozs7O0FDZEE7QUFBQTtBQUFBO0FBQUE7O0FBRUEsSUFBTUMsU0FBUyxHQUFHLFNBQVpBLFNBQVk7QUFBQSxTQUNkLDJFQUNJO0FBQUssYUFBUyxFQUFDO0FBQWYsS0FDTSxJQUFJQyxJQUFKLEVBQUQsQ0FBYUMsV0FBYixFQURMLGNBREosQ0FEYztBQUFBLENBQWxCOztBQVFlRix3RUFBZixFOzs7Ozs7Ozs7Ozs7QUNWQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7O0FBRUEsSUFBTUcsU0FBUyxHQUFHLFNBQVpBLFNBQVk7QUFBQSxTQUNkLDJEQUFDLHNEQUFEO0FBQVEsTUFBRSxFQUFDLE1BQVg7QUFBa0IsV0FBTyxFQUFDLE1BQTFCO0FBQWlDLFVBQU0sRUFBQztBQUF4QyxLQUNJLDJEQUFDLHNEQUFELENBQVEsS0FBUixrQ0FESixDQURjO0FBQUEsQ0FBbEI7O0FBTWVBLHdFQUFmLEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNUQTtBQUNBO0FBRU8sU0FBU0MsY0FBVCxDQUF3QkMsU0FBeEIsRUFBbUM7QUFDdEMsU0FBTyxTQUFTQyxnQkFBVCxDQUEwQkMsS0FBMUIsRUFBaUM7QUFDcEMsV0FDSSwyREFBQyw4REFBRCxDQUFZLFFBQVosUUFDSyxVQUFBQyxHQUFHO0FBQUEsYUFBSSwyREFBQyxTQUFELGVBQWdCRCxLQUFoQjtBQUF1QixlQUFPLEVBQUVDO0FBQWhDLFNBQUo7QUFBQSxLQURSLENBREo7QUFLSCxHQU5EO0FBT0gsQzs7Ozs7Ozs7Ozs7O0FDWEQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFFQTs7QUFFQSxJQUFNQyxRQUFRLEdBQUcsU0FBWEEsUUFBVyxPQUE2QjtBQUFBLE1BQTFCQyxRQUEwQixRQUExQkEsUUFBMEI7QUFBQSxNQUFoQkMsU0FBZ0IsUUFBaEJBLFNBQWdCO0FBQzFDLFNBQ0ksMkRBQUMsbURBQUQ7QUFBSyxNQUFFLEVBQUMsR0FBUjtBQUFZLE1BQUUsRUFBQztBQUFmLEtBQ0ksMkRBQUMsc0RBQUQ7QUFBVyxZQUFRLEVBQUVEO0FBQXJCLElBREosRUFFSSx5RUFBTSwwRUFBUUMsU0FBUixDQUFOLENBRkosQ0FESjtBQU1ILENBUEQ7O0FBU2VGLHVFQUFmLEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDZEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBLElBQU1HLDJCQUEyQixHQUFHLFlBQXBDOztJQUVNQyxvQjs7Ozs7QUFDRixnQ0FBWU4sS0FBWixFQUFtQjtBQUFBOztBQUFBOztBQUNmLDhGQUFNQSxLQUFOOztBQURlLDZGQWNGLFVBQUNPLFVBQUQsRUFBZ0I7QUFDN0IsWUFBS0MsYUFBTCxDQUFtQjtBQUFFRCxrQkFBVSxFQUFFQTtBQUFkLE9BQW5COztBQUNBLFVBQU1FLFNBQVMsR0FBR0Msc0VBQWlCLENBQUNDLDZDQUFNLEdBQUdDLEdBQVQsQ0FBYSxDQUFiLEVBQWdCLE9BQWhCLENBQUQsQ0FBbkM7QUFDQUMsWUFBTSxDQUFDQyxZQUFQLENBQW9CQyxPQUFwQixDQUE0QlYsMkJBQTVCLEVBQXlEaEIsSUFBSSxDQUFDMkIsU0FBTCxDQUFlO0FBQUUxQyxZQUFJLEVBQUVpQyxVQUFSO0FBQW9CRSxpQkFBUyxFQUFFQTtBQUEvQixPQUFmLENBQXpEO0FBQ0gsS0FsQmtCOztBQUFBLCtGQW1CQSxZQUFNO0FBQ3JCO0FBQ0EsVUFBTXBDLE1BQU0sR0FBR2MseUVBQWlCLEVBQWhDOztBQUNBLFVBQUlkLE1BQU0sQ0FBQ0csT0FBWCxFQUFvQjtBQUNoQixjQUFLeUMsY0FBTCxDQUFvQjVDLE1BQU0sQ0FBQ0MsSUFBM0I7QUFDSDtBQUNKLEtBekJrQjs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDRCQTBCRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDUDRDLG9DQURPLEdBQ2tCTCxNQUFNLENBQUNDLFlBQVAsQ0FBb0JLLE9BQXBCLENBQTRCZCwyQkFBNUIsQ0FEbEI7O0FBRWIsa0JBQUksQ0FBQ2Esc0JBQUwsRUFBNkI7QUFDekIsc0JBQUtFLGdCQUFMO0FBQ0gsZUFGRCxNQUVPO0FBQ0dDLG9DQURILEdBQzBCaEMsSUFBSSxDQUFDQyxLQUFMLENBQVc0QixzQkFBWCxDQUQxQjtBQUVHVCx5QkFGSCxHQUVlRSw2Q0FBTSxDQUFDVSxvQkFBb0IsQ0FBQ1osU0FBdEIsRUFBaUNhLGtFQUFqQyxDQUZyQjs7QUFHSCxvQkFBSWIsU0FBUyxDQUFDYyxPQUFWLE1BQXVCWiw2Q0FBTSxHQUFHYSxRQUFULENBQWtCZixTQUFsQixDQUEzQixFQUF5RDtBQUNyRCx3QkFBS1EsY0FBTCxDQUFvQkksb0JBQW9CLENBQUMvQyxJQUF6QztBQUNILGlCQUZELE1BRU87QUFDSCx3QkFBSzhDLGdCQUFMO0FBQ0g7QUFDSjs7QUFaWTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQTFCRTs7QUFBQSw2RkF3Q0YsVUFBQ2pCLFFBQUQsRUFBV3NCLElBQVgsRUFBaUJDLEtBQWpCLEVBQTJCO0FBQ3hDLFVBQU1uQixVQUFVLEdBQUcsTUFBS29CLEtBQUwsQ0FBV3BCLFVBQTlCO0FBQ0EsVUFBTXFCLFFBQVEsR0FBR0MsdUVBQW1CLENBQUN0QixVQUFELEVBQWEsVUFBYixFQUF5QkosUUFBekIsQ0FBcEM7O0FBRUEsVUFBSSxDQUFDLENBQUN5QixRQUFGLElBQWNBLFFBQVEsQ0FBQ0UsT0FBVCxDQUFpQkwsSUFBakIsTUFBMkJNLFNBQTdDLEVBQXdEO0FBQ3BESCxnQkFBUSxDQUFDRSxPQUFULENBQWlCTCxJQUFqQixJQUF5QkMsS0FBekI7QUFDQU0sY0FBTSxDQUFDQyxNQUFQLENBQWMxQixVQUFVLENBQUNxQixRQUFRLENBQUNNLFlBQVYsQ0FBeEIsRUFBaUROLFFBQVEsQ0FBQ0UsT0FBMUQ7O0FBRUEsY0FBS0ssUUFBTCxDQUFjO0FBQUU1QixvQkFBVSxFQUFWQTtBQUFGLFNBQWQ7QUFDSDtBQUNKLEtBbERrQjs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDRCQW1ETjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ1Qsb0JBQUtDLGFBQUwsQ0FBbUI7QUFBRTRCLDZCQUFhLEVBQUU7QUFBakIsZUFBbkI7O0FBRFM7QUFBQSxxQkFFSCxNQUFLQyxjQUFMLEVBRkc7O0FBQUE7QUFHVCxvQkFBSzdCLGFBQUwsQ0FBbUI7QUFBRTRCLDZCQUFhLEVBQUU7QUFBakIsZUFBbkI7O0FBSFM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FuRE07O0FBR2YsVUFBS1QsS0FBTCxHQUFhO0FBQ1RTLG1CQUFhLEVBQUUsS0FETjtBQUVUN0IsZ0JBQVUsRUFBRSxFQUZIO0FBR1QrQixzQkFBZ0IsRUFBRUEsMkRBQWdCLElBQUk7QUFIN0IsS0FBYjtBQUhlO0FBUWxCOzs7O2tDQUNhWCxLLEVBQU87QUFBQTs7QUFDakIsYUFBTyxJQUFJWSxPQUFKLENBQVksVUFBQ0MsT0FBRCxFQUFhO0FBQzVCLGNBQUksQ0FBQ0wsUUFBTCxDQUFjUixLQUFkLEVBQXFCYSxPQUFyQjtBQUNILE9BRk0sQ0FBUDtBQUdIOzs7Ozs7Ozs7Ozs7dUJBNENTLEtBQUtDLFVBQUwsRTs7Ozs7Ozs7Ozs7Ozs7Ozs2QkFFRDtBQUFBLHdCQUNtRCxLQUFLZCxLQUR4RDtBQUFBLFVBQ0dTLGFBREgsZUFDR0EsYUFESDtBQUFBLFVBQ2tCN0IsVUFEbEIsZUFDa0JBLFVBRGxCO0FBQUEsVUFDOEIrQixnQkFEOUIsZUFDOEJBLGdCQUQ5QjtBQUVMLFVBQU1JLE9BQU8sR0FBRztBQUNaO0FBQ0FOLHFCQUFhLEVBQUVBLGFBRkg7QUFHWjdCLGtCQUFVLEVBQUVBLFVBSEE7QUFJWitCLHdCQUFnQixFQUFFQSxnQkFKTjtBQUtaO0FBQ0FLLHNCQUFjLEVBQUUsS0FBS0E7QUFOVCxPQUFoQjtBQVFBLGFBQ0ksMkRBQUMsOERBQUQsQ0FBWSxRQUFaO0FBQXFCLGFBQUssRUFBRUQ7QUFBNUIsU0FDSSwyREFBQywrREFBRDtBQUFvQixjQUFNLEVBQUVOO0FBQTVCLFNBQ0ksMkRBQUMsNkVBQUQsT0FESixFQUVJLDJEQUFDLDhEQUFEO0FBQUksaUJBQVMsRUFBRTdCLFVBQVUsQ0FBQ3FDLE1BQVgsR0FBb0IsQ0FBcEIsSUFBeUJOLGdCQUFnQixDQUFDTSxNQUFqQixHQUEwQjtBQUFsRSxTQUNJLDJEQUFDLGdFQUFELFFBQ0ksMkRBQUMsb0RBQUQsUUFDSSwyREFBQyw2REFBRCxRQUNJLDJEQUFDLHNEQUFEO0FBQVEsZUFBTyxFQUFDLFNBQWhCO0FBQTBCLFlBQUksRUFBQyxJQUEvQjtBQUFvQyxhQUFLLEVBQUU7QUFBRUMsb0JBQVUsRUFBRTtBQUFkLFNBQTNDO0FBQW1FLGVBQU8sRUFBRSxLQUFLSjtBQUFqRix5QkFESixDQURKLENBREosRUFNSSwyREFBQyx1REFBRCxPQU5KLENBREosQ0FGSixDQURKLENBREo7QUFpQkg7Ozs7RUF2RjhCM0MsK0M7O0FBMEZwQlEsbUZBQWYsRTs7Ozs7Ozs7Ozs7O0FDN0dBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFFQTs7QUFFQSxJQUFNd0Msa0JBQWtCLEdBQUcsU0FBckJBLGtCQUFxQixDQUFDOUMsS0FBRCxFQUFXO0FBQ2xDLE1BQU0wQyxPQUFPLEdBQUdLLHdEQUFVLENBQUNDLDhEQUFELENBQTFCO0FBQ0EsU0FDSSwyREFBQyw0REFBRDtBQUNJLFdBQU8sRUFBRSwyREFBQyxrRUFBRCxPQURiO0FBRUksUUFBSSxFQUFDLHlCQUZUO0FBR0ksVUFBTSxFQUFFTixPQUFPLENBQUNOLGFBSHBCO0FBSUksVUFBTSxFQUFFO0FBQ0phLGFBQU8sRUFBRTtBQUNMQyxvQkFBWSxFQUFFLE1BRFQ7QUFFTEwsa0JBQVUsRUFBRTtBQUZQO0FBREw7QUFKWixLQVdLN0MsS0FBSyxDQUFDbUQsUUFYWCxDQURKO0FBZUgsQ0FqQkQ7O0FBbUJlTCxpRkFBZixFOzs7Ozs7Ozs7Ozs7QUN6QkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFFTyxJQUFNTSxZQUFZLEdBQUcsU0FBZkEsWUFBZSxPQUFrQjtBQUFBLE1BQWZDLFFBQWUsUUFBZkEsUUFBZTtBQUMxQyxNQUFNWCxPQUFPLEdBQUdLLHdEQUFVLENBQUNDLDhEQUFELENBQTFCO0FBQ0EsTUFBTXpDLFVBQVUsR0FBR21DLE9BQU8sQ0FBQ25DLFVBQVIsQ0FBbUIrQyxNQUFuQixDQUEwQixVQUFBQyxDQUFDO0FBQUEsV0FBSUEsQ0FBQyxDQUFDQyxJQUFGLElBQVVILFFBQVEsQ0FBQ0ksRUFBbkIsSUFBeUJGLENBQUMsQ0FBQ3BELFFBQUYsS0FBZSxZQUE1QztBQUFBLEdBQTNCLENBQW5CO0FBQ0EsTUFBTW1DLGdCQUFnQixHQUFHSSxPQUFPLENBQUNKLGdCQUFSLENBQXlCZ0IsTUFBekIsQ0FBZ0MsVUFBQUMsQ0FBQztBQUFBLFdBQUlBLENBQUMsQ0FBQ0csSUFBRixJQUFVTCxRQUFRLENBQUNJLEVBQXZCO0FBQUEsR0FBakMsRUFBNEQsQ0FBNUQsRUFBK0RFLEtBQXhGO0FBQ0EsU0FDSSwyREFBQyxvREFBRDtBQUFNLGFBQVMsRUFBQyw0QkFBaEI7QUFBNkMsTUFBRSxFQUFDO0FBQWhELEtBQ0ksMkRBQUMsb0RBQUQsQ0FBTSxNQUFOLFFBQ0ksMkRBQUMsb0RBQUQsQ0FBTSxHQUFOO0FBQVUsV0FBTyxFQUFDLE1BQWxCO0FBQXlCLE9BQUcsbUJBQVlOLFFBQVEsQ0FBQ0ksRUFBckIsU0FBNUI7QUFBMkQsU0FBSyxFQUFFO0FBQUVHLFdBQUssRUFBRTtBQUFUO0FBQWxFLElBREosRUFFSSx5RUFBTSwyRUFBU1AsUUFBUSxDQUFDUSxJQUFsQixDQUFOLENBRkosQ0FESixFQUtJLDJEQUFDLG9EQUFELENBQU0sSUFBTixRQUNJO0FBQUssU0FBSyxFQUFFO0FBQUVYLGtCQUFZLEVBQUU7QUFBaEI7QUFBWixLQUNJLDJEQUFDLGtGQUFEO0FBQXdCLGNBQVUsRUFBRTNDLFVBQXBDO0FBQWdELG9CQUFnQixFQUFFK0I7QUFBbEUsSUFESixDQURKLEVBSUksd0VBQ0ksMkRBQUMsZ0ZBQUQ7QUFBcUIsY0FBVSxFQUFFL0IsVUFBakM7QUFBNkMsb0JBQWdCLEVBQUUrQjtBQUEvRCxJQURKLENBSkosQ0FMSixDQURKO0FBZ0JILENBcEJNO0FBc0JRYywyRUFBZixFOzs7Ozs7Ozs7Ozs7QUMvQkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVPLElBQU1VLFVBQVUsR0FBRyxTQUFiQSxVQUFhO0FBQUEsU0FDdEIsMkRBQUMseURBQUQ7QUFBVyxhQUFTLEVBQUM7QUFBckIsS0FDSSwyREFBQyxtREFBRCxRQUNLOUIsTUFBTSxDQUFDK0IsTUFBUCxDQUFjQyxnREFBZCxFQUF5QkMsR0FBekIsQ0FBNkIsVUFBQVosUUFBUTtBQUFBLFdBQ2xDLDJEQUFDLG1EQUFEO0FBQUssU0FBRyxFQUFFQSxRQUFRLENBQUNJLEVBQW5CO0FBQXVCLFFBQUUsRUFBRSxDQUEzQjtBQUE4QixRQUFFLEVBQUU7QUFBRVMsWUFBSSxFQUFFLEVBQVI7QUFBWUMsY0FBTSxFQUFFO0FBQXBCLE9BQWxDO0FBQTJELFFBQUUsRUFBRTtBQUFFRCxZQUFJLEVBQUUsQ0FBUjtBQUFXQyxjQUFNLEVBQUU7QUFBbkIsT0FBL0Q7QUFBdUYsUUFBRSxFQUFFO0FBQUVELFlBQUksRUFBRSxDQUFSO0FBQVdDLGNBQU0sRUFBRTtBQUFuQixPQUEzRjtBQUFtSCxRQUFFLEVBQUU7QUFBRUQsWUFBSSxFQUFFLENBQVI7QUFBV0MsY0FBTSxFQUFFO0FBQW5CO0FBQXZILE9BQ0ksMkRBQUMseURBQUQ7QUFBYyxjQUFRLEVBQUVkO0FBQXhCLE1BREosQ0FEa0M7QUFBQSxHQUFyQyxDQURMLENBREosQ0FEc0I7QUFBQSxDQUFuQjtBQVlRUyx5RUFBZixFOzs7Ozs7Ozs7Ozs7QUNuQkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFFTyxJQUFNTSxTQUFTLEdBQUcsU0FBWkEsU0FBWSxPQUE4QjtBQUFBLE1BQTNCakUsUUFBMkIsUUFBM0JBLFFBQTJCO0FBQUEsTUFBakJrRSxVQUFpQixRQUFqQkEsVUFBaUI7QUFDbkQsTUFBTUMsT0FBTyxHQUFHQyxpRUFBYyxDQUFDcEUsUUFBRCxDQUE5QjtBQUNBLFNBQ0k7QUFBTSxTQUFLLFlBQUtrRSxVQUFVLElBQUlsRSxRQUFuQjtBQUFYLEtBQ0k7QUFBRyxRQUFJLEVBQUMsR0FBUjtBQUFZLFdBQU8sRUFBRSxpQkFBQ3FFLENBQUQsRUFBTztBQUFFQSxPQUFDLENBQUNDLGNBQUY7QUFBcUI7QUFBbkQsS0FBcUQ7QUFBSyxPQUFHLG1CQUFZSCxPQUFaO0FBQVIsSUFBckQsQ0FESixDQURKO0FBS0gsQ0FQTTtBQVNRRix3RUFBZixFOzs7Ozs7Ozs7Ozs7QUNaQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRU8sSUFBTU0sT0FBTyxHQUFHLFNBQVZBLE9BQVUsQ0FBQzFFLEtBQUQ7QUFBQSxTQUNuQjtBQUFLLFNBQUssRUFBRTtBQUFFa0Qsa0JBQVksRUFBRSxNQUFoQjtBQUF3QnlCLG9CQUFjLEVBQUUsUUFBeEM7QUFBa0RDLGFBQU8sRUFBRTtBQUEzRDtBQUFaLEtBQ0s1RSxLQUFLLENBQUNtRCxRQURYLENBRG1CO0FBQUEsQ0FBaEI7QUFNUXVCLHNFQUFmLEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDUkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVPLElBQU1HLHNCQUFiO0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUE7O0FBQUE7O0FBQUE7O0FBQUE7QUFBQTtBQUFBOztBQUFBOztBQUFBLG9GQUNZO0FBQ0pDLGlCQUFXLEVBQUU7QUFEVCxLQURaOztBQUFBLDhGQUlzQixVQUFDdkUsVUFBRCxFQUFhd0UsT0FBYixFQUF5QjtBQUN2QyxVQUFJQyxjQUFjLEdBQUcsRUFBckI7QUFDQWhELFlBQU0sQ0FBQ2lELE9BQVAsQ0FBZUYsT0FBZixFQUF3QkcsT0FBeEIsQ0FBZ0MsZ0JBQXVCO0FBQUE7QUFBQSxZQUFyQi9FLFFBQXFCO0FBQUEsWUFBWGdGLEtBQVc7O0FBQ25ELFlBQU1DLFNBQVMsR0FBR0MsNkNBQUMsQ0FBQ0MsSUFBRixDQUFPL0UsVUFBUCxFQUFtQjtBQUFFSixrQkFBUSxFQUFSQTtBQUFGLFNBQW5CLENBQWxCOztBQUNBLFlBQUlpRixTQUFKLEVBQWU7QUFDWCxjQUFNRyxhQUFhLEdBQUc7QUFDbEJwRixvQkFBUSxFQUFFaUYsU0FBUyxDQUFDakYsUUFERjtBQUVsQnFGLGlCQUFLLEVBQUVKLFNBQVMsQ0FBQ0ksS0FGQztBQUdsQjlELGlCQUFLLEVBQUUwRCxTQUFTLENBQUMxRCxLQUhDO0FBSWxCK0QsaUJBQUssRUFBRUMseUVBQXNCLENBQUNOLFNBQVMsQ0FBQzFELEtBQVgsRUFBa0J5RCxLQUFsQjtBQUpYLFdBQXRCOztBQU9BLGNBQUloRixRQUFRLEtBQUssWUFBakIsRUFBK0I7QUFDM0JvRix5QkFBYSxDQUFDQyxLQUFkLEdBQXNCTCxLQUF0QjtBQUNIOztBQUVESCx3QkFBYyxzQkFBT0EsY0FBUCxVQUF1Qk8sYUFBdkIsRUFBZDtBQUNIO0FBQ0osT0FoQkQ7QUFpQkEsYUFBTztBQUFFUixlQUFPLEVBQVBBLE9BQUY7QUFBV1ksa0JBQVUsRUFBRUMsb0VBQWlCLENBQUNaLGNBQUQ7QUFBeEMsT0FBUDtBQUNILEtBeEJMOztBQUFBLCtGQXlCdUIsVUFBQzFDLGdCQUFELEVBQW1CL0IsVUFBbkIsRUFBa0M7QUFDakQsVUFBSXNGLE9BQU8sR0FBRyxFQUFkO0FBQ0F2RCxzQkFBZ0IsQ0FBQzRDLE9BQWpCLENBQXlCLFVBQUFILE9BQU8sRUFBSTtBQUNoQyxZQUFNMUcsTUFBTSxHQUFHLE1BQUt5SCxlQUFMLENBQXFCdkYsVUFBckIsRUFBaUN3RSxPQUFqQyxDQUFmOztBQUNBYyxlQUFPLHNCQUFPQSxPQUFQLFVBQWdCeEgsTUFBaEIsRUFBUDtBQUNILE9BSEQ7QUFJQSxhQUFPd0gsT0FBUDtBQUNILEtBaENMOztBQUFBLDZGQWlDcUIsVUFBQ3ZELGdCQUFELEVBQW1CL0IsVUFBbkIsRUFBa0M7QUFDL0MsVUFBTXdGLGlCQUFpQixHQUFHLE1BQUtDLGdCQUFMLENBQXNCMUQsZ0JBQXRCLEVBQXdDL0IsVUFBeEMsQ0FBMUI7O0FBQ0EsVUFBTTBGLFVBQVUsR0FBR1osNkNBQUMsQ0FBQ2EsS0FBRixDQUFRSCxpQkFBUixFQUEyQixZQUEzQixDQUFuQjs7QUFDQSxhQUFPO0FBQUVBLHlCQUFpQixFQUFqQkEsaUJBQUY7QUFBcUJFLGtCQUFVLEVBQVZBO0FBQXJCLE9BQVA7QUFDSCxLQXJDTDs7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQSw2QkFzQ2E7QUFBQTs7QUFBQSxVQUNHbkIsV0FESCxHQUNtQixLQUFLbkQsS0FEeEIsQ0FDR21ELFdBREg7QUFBQSx3QkFFb0MsS0FBSzlFLEtBRnpDO0FBQUEsVUFFR3NDLGdCQUZILGVBRUdBLGdCQUZIO0FBQUEsVUFFcUIvQixVQUZyQixlQUVxQkEsVUFGckI7O0FBQUEsaUNBR3FDLEtBQUs0RixjQUFMLENBQW9CN0QsZ0JBQXBCLEVBQXNDL0IsVUFBdEMsQ0FIckM7QUFBQSxVQUdHd0YsaUJBSEgsd0JBR0dBLGlCQUhIO0FBQUEsVUFHc0JFLFVBSHRCLHdCQUdzQkEsVUFIdEI7O0FBSUwsYUFDSSx3SEFDSSwyREFBQywwRUFBRDtBQUFhLGVBQU8sRUFBQyxTQUFyQjtBQUErQixlQUFPLEVBQUM7QUFBdkMsU0FDSSwyREFBQyx3RUFBRDtBQUE0Qix3QkFBZ0IsRUFBRUE7QUFBOUMsUUFESixFQUVJLDJEQUFDLDhEQUFEO0FBQUksaUJBQVMsRUFBRSxDQUFDLENBQUNGLGlCQUFGLElBQXVCQSxpQkFBaUIsQ0FBQ25ELE1BQWxCLEdBQTJCO0FBQWpFLFNBQ0ksMkRBQUMsZ0VBQUQsUUFDSSwyREFBQyxvREFBRCxRQUNJLDJEQUFDLDZEQUFELFFBQ0ksMkRBQUMsc0RBQUQ7QUFDSSx5QkFBYyxtQ0FEbEI7QUFFSSx5QkFBZWtDLFdBRm5CO0FBR0ksZUFBTyxFQUFDLFNBSFo7QUFJSSxZQUFJLEVBQUMsSUFKVDtBQUtJLGVBQU8sRUFBRTtBQUFBLGlCQUFNLE1BQUksQ0FBQzNDLFFBQUwsQ0FBYztBQUFFMkMsdUJBQVcsRUFBRSxDQUFDQTtBQUFoQixXQUFkLENBQU47QUFBQTtBQUxiLG1CQURKLENBREosQ0FESixFQWNJLDJEQUFDLCtEQUFEO0FBQVUsVUFBRSxFQUFFLEtBQUtuRCxLQUFMLENBQVdtRDtBQUF6QixTQUNJO0FBQUssVUFBRSxFQUFDO0FBQVIsU0FDSSwyREFBQywwRUFBRDtBQUErQix5QkFBaUIsRUFBRWlCO0FBQWxELFFBREosQ0FESixDQWRKLENBREosQ0FGSixDQURKLENBREo7QUE2Qkg7QUF2RUw7O0FBQUE7QUFBQSxFQUE0Q2pHLCtDQUE1QztBQTBFZUQseUlBQWMsQ0FBQ2dGLHNCQUFELENBQTdCLEU7Ozs7Ozs7Ozs7OztBQ3hGQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUNBOztBQUVBLElBQU11Qiw2QkFBNkIsR0FBRyxTQUFoQ0EsNkJBQWdDLE9BQTJCO0FBQUEsTUFBeEJMLGlCQUF3QixRQUF4QkEsaUJBQXdCO0FBQzdELFNBQ0ksd0hBQ0tBLGlCQUFpQixDQUFDOUIsR0FBbEIsQ0FBc0IsVUFBQ29DLGdCQUFELEVBQW1CQyxDQUFuQixFQUF5QjtBQUM1QyxXQUNJLDJEQUFDLDBFQUFEO0FBQWEsU0FBRyxFQUFFQSxDQUFsQjtBQUFxQixhQUFPLEVBQUMsU0FBN0I7QUFBdUMsYUFBTyxhQUFNQSxDQUFDLEdBQUcsQ0FBVjtBQUE5QyxPQUNJLDJEQUFDLHVFQUFEO0FBQTRCLHNCQUFnQixFQUFFRDtBQUE5QyxNQURKLENBREo7QUFLSCxHQU5BLENBREwsQ0FESjtBQVdILENBWkQ7O0FBY2VELDRGQUFmLEU7Ozs7Ozs7Ozs7OztBQ25CQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBRUE7QUFDQTs7QUFFQSxJQUFNRywwQkFBMEIsR0FBRyxTQUE3QkEsMEJBQTZCLE9BQTBCO0FBQUEsTUFBdkJGLGdCQUF1QixRQUF2QkEsZ0JBQXVCO0FBQ3pELFNBQ0ksd0hBQ0ksMkRBQUMsb0RBQUQsQ0FBTSxLQUFOO0FBQVksTUFBRSxFQUFFRyxtREFBaEI7QUFBcUIsYUFBUyxFQUFDO0FBQS9CLEtBQ0t4RSxNQUFNLENBQUNpRCxPQUFQLENBQWVvQixnQkFBZ0IsQ0FBQ3RCLE9BQWhDLEVBQXlDZCxHQUF6QyxDQUE2QyxVQUFDTixLQUFELEVBQVEyQyxDQUFSLEVBQWM7QUFDeEQsV0FBTywyREFBQyxxREFBRDtBQUFVLFNBQUcsRUFBRUEsQ0FBZjtBQUFrQixjQUFRLEVBQUUzQyxLQUFLLENBQUMsQ0FBRCxDQUFqQztBQUFzQyxlQUFTLEVBQUVBLEtBQUssQ0FBQyxDQUFEO0FBQXRELE1BQVA7QUFDSCxHQUZBLENBREwsQ0FESixFQU1JLDJEQUFDLGdGQUFEO0FBQXFCLGNBQVUsRUFBRTBDLGdCQUFnQixDQUFDVjtBQUFsRCxJQU5KLENBREo7QUFVSCxDQVhEOztBQWFlWSx5RkFBZixFOzs7Ozs7Ozs7Ozs7QUNuQkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRU8sSUFBTUUsZ0JBQWdCLEdBQUcsU0FBbkJBLGdCQUFtQjtBQUFBLE1BQUc1QyxJQUFILFFBQUdBLElBQUg7QUFBQSxNQUFTNEIsS0FBVCxRQUFTQSxLQUFUO0FBQUEsTUFBZ0JOLEtBQWhCLFFBQWdCQSxLQUFoQjtBQUFBLE1BQXVCdUIsTUFBdkIsUUFBdUJBLE1BQXZCO0FBQUEsTUFBK0JDLGFBQS9CLFFBQStCQSxhQUEvQjtBQUFBLE1BQThDQyxhQUE5QyxRQUE4Q0EsYUFBOUM7QUFBQSxTQUM1QiwyREFBQyxvREFBRCxDQUFNLEtBQU47QUFBWSxNQUFFLEVBQUVKLG1EQUFHQTtBQUFuQixLQUNJLDJEQUFDLG1EQUFEO0FBQUssTUFBRSxFQUFDLEdBQVI7QUFBWSxNQUFFLEVBQUM7QUFBZixLQUNJLDJEQUFDLHNEQUFEO0FBQVcsWUFBUSxFQUFFM0M7QUFBckIsSUFESixDQURKLEVBSUksMkRBQUMsb0RBQUQsQ0FBTSxLQUFOO0FBQVksVUFBTSxNQUFsQjtBQUFtQixNQUFFLEVBQUU7QUFBRUssVUFBSSxFQUFFLENBQVI7QUFBV0MsWUFBTSxFQUFFO0FBQW5CLEtBQXZCO0FBQStDLE1BQUUsRUFBRTtBQUFFRCxVQUFJLEVBQUUsQ0FBUjtBQUFXQyxZQUFNLEVBQUU7QUFBbkI7QUFBbkQsS0FDSTtBQUFNLFNBQUssRUFBQztBQUFaLEtBQXlCTixJQUF6QixDQURKLENBSkosRUFPSSwyREFBQyxtREFBRDtBQUFLLE1BQUUsRUFBQyxHQUFSO0FBQVksYUFBUyxFQUFDO0FBQXRCLEtBQ0ksMkRBQUMsb0RBQUQsQ0FBTSxPQUFOO0FBQWMsTUFBRSxZQUFLQSxJQUFMLFdBQWhCO0FBQW1DLGFBQVMsRUFBRSxDQUFDNkMsTUFBL0M7QUFBdUQsU0FBSyxFQUFFdkIsS0FBOUQ7QUFBcUUsWUFBUSxFQUFFeUIsYUFBL0U7QUFBOEYsU0FBSyxFQUFDLFlBQXBHO0FBQWlILGFBQVMsRUFBQztBQUEzSCxJQURKLENBUEosRUFVSSwyREFBQyxtREFBRDtBQUFLLE1BQUUsRUFBQyxHQUFSO0FBQVksYUFBUyxFQUFDO0FBQXRCLEtBQ0ksMkRBQUMsb0RBQUQsQ0FBTSxPQUFOO0FBQWMsTUFBRSxZQUFLL0MsSUFBTCxXQUFoQjtBQUFtQyxhQUFTLEVBQUUsQ0FBQzZDLE1BQS9DO0FBQXVELFNBQUssRUFBRWpCLEtBQTlEO0FBQXFFLFlBQVEsRUFBRWtCLGFBQS9FO0FBQThGLFNBQUssRUFBQyxpQkFBcEc7QUFBc0gsYUFBUyxFQUFDO0FBQWhJLElBREosQ0FWSixDQUQ0QjtBQUFBLENBQXpCO0FBaUJRRiwrRUFBZixFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdEJBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFTyxJQUFNSSxtQkFBYjtBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBOztBQUFBOztBQUFBOztBQUFBO0FBQUE7QUFBQTs7QUFBQTs7QUFBQSxvRkFDWTtBQUNKQyxZQUFNLEVBQUU7QUFESixLQURaOztBQUFBLGdHQUl3QixZQUFNO0FBQ3RCLFlBQUtDLGdCQUFMO0FBQ0gsS0FOTDs7QUFBQSw2RkFPcUIsVUFBQ3RELEVBQUQsRUFBUTtBQUFBLFVBQ2JxRCxNQURhLEdBQ0YsTUFBS25GLEtBREgsQ0FDYm1GLE1BRGE7QUFFckIsVUFBTUUsS0FBSyxHQUFHbkYsc0VBQW1CLENBQUNpRixNQUFELEVBQVMsSUFBVCxFQUFlckQsRUFBZixDQUFqQzs7QUFFQSxVQUFJLENBQUMsQ0FBQ3VELEtBQUYsSUFBVyxDQUFDQSxLQUFLLENBQUNOLE1BQXRCLEVBQThCO0FBQzFCTSxhQUFLLENBQUNsRixPQUFOLENBQWM0RSxNQUFkLEdBQXVCLElBQXZCO0FBQ0ExRSxjQUFNLENBQUNDLE1BQVAsQ0FBYzZFLE1BQU0sQ0FBQ0UsS0FBSyxDQUFDOUUsWUFBUCxDQUFwQixFQUEwQzhFLEtBQUssQ0FBQ2xGLE9BQWhEOztBQUVBLGNBQUtLLFFBQUwsQ0FBYztBQUFFMkUsZ0JBQU0sRUFBTkE7QUFBRixTQUFkO0FBQ0g7QUFDSixLQWpCTDs7QUFBQSw0RkFrQm9CLFVBQUN0QyxDQUFELEVBQU87QUFDbkIsVUFBTWYsRUFBRSxHQUFHZSxDQUFDLENBQUN5QyxNQUFGLENBQVN4RCxFQUFULENBQVl5RCxLQUFaLENBQWtCLEdBQWxCLEVBQXVCLENBQXZCLENBQVg7QUFDQSxVQUFNQyxRQUFRLEdBQUdDLDREQUFRLENBQUNDLHFFQUFpQixDQUFDQyx5REFBSyxDQUFDOUMsQ0FBQyxDQUFDeUMsTUFBRixDQUFTdkYsS0FBVixFQUFpQixDQUFqQixDQUFOLENBQWxCLENBQVIsSUFBeUQsQ0FBMUU7O0FBRUEsVUFBSXlGLFFBQVEsSUFBSUksOERBQVosSUFBNkNKLFFBQVEsSUFBSUksOERBQTdELEVBQTRGO0FBQ3hGLGNBQUt2SCxLQUFMLENBQVcwQyxPQUFYLENBQW1CQyxjQUFuQixDQUFrQ2MsRUFBbEMsRUFBc0MsT0FBdEMsRUFBK0MrRCxRQUFRLENBQUNMLFFBQUQsQ0FBdkQ7QUFDSDs7QUFFRCxZQUFLTSxjQUFMLENBQW9CaEUsRUFBcEI7QUFDSCxLQTNCTDs7QUFBQSw0RkE0Qm9CLFVBQUNlLENBQUQsRUFBTztBQUNuQixVQUFNZixFQUFFLEdBQUdlLENBQUMsQ0FBQ3lDLE1BQUYsQ0FBU3hELEVBQVQsQ0FBWXlELEtBQVosQ0FBa0IsR0FBbEIsRUFBdUIsQ0FBdkIsQ0FBWDtBQUNBLFVBQU1RLFFBQVEsR0FBR04sNERBQVEsQ0FBQ0MscUVBQWlCLENBQUNDLHlEQUFLLENBQUM5QyxDQUFDLENBQUN5QyxNQUFGLENBQVN2RixLQUFWLEVBQWlCLENBQWpCLENBQU4sQ0FBbEIsQ0FBUixJQUF5RCxDQUExRTs7QUFFQSxVQUFJZ0csUUFBUSxJQUFJSCw4REFBWixJQUE2Q0csUUFBUSxJQUFJSCw4REFBN0QsRUFBNEY7QUFDeEYsY0FBS3ZILEtBQUwsQ0FBVzBDLE9BQVgsQ0FBbUJDLGNBQW5CLENBQWtDYyxFQUFsQyxFQUFzQyxPQUF0QyxFQUErQytELFFBQVEsQ0FBQ0UsUUFBRCxDQUF2RDtBQUNIOztBQUVELFlBQUtELGNBQUwsQ0FBb0JoRSxFQUFwQjtBQUNILEtBckNMOztBQUFBLCtGQXNDdUIsWUFBTTtBQUFBLFVBQ2JsRCxVQURhLEdBQ0UsTUFBS1AsS0FEUCxDQUNiTyxVQURhOztBQUdyQixVQUFJLENBQUMsQ0FBQ0EsVUFBTixFQUFrQjtBQUNkLFlBQUl1RyxNQUFNLEdBQUcsRUFBYjtBQUVBdkcsa0JBQVUsQ0FBQzBELEdBQVgsQ0FBZSxVQUFBbUIsU0FBUyxFQUFJO0FBQ3hCLGNBQU11QyxVQUFVLEdBQUc7QUFDZmxFLGNBQUUsRUFBRTJCLFNBQVMsQ0FBQ2pGLFFBREM7QUFFZnVHLGtCQUFNLEVBQUU7QUFGTyxXQUFuQjtBQUlBSSxnQkFBTSxzQkFBT0EsTUFBUCxVQUFlYSxVQUFmLEVBQU47QUFDSCxTQU5EOztBQVFBLGNBQUt4RixRQUFMLENBQWM7QUFBRTJFLGdCQUFNLEVBQU5BO0FBQUYsU0FBZDtBQUNIO0FBQ0osS0F0REw7O0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUEsNkJBdURhO0FBQUE7O0FBQUEsVUFDR0EsTUFESCxHQUNjLEtBQUtuRixLQURuQixDQUNHbUYsTUFESDtBQUFBLHdCQUVvQyxLQUFLOUcsS0FGekM7QUFBQSxVQUVHTyxVQUZILGVBRUdBLFVBRkg7QUFBQSxVQUVlK0IsZ0JBRmYsZUFFZUEsZ0JBRmY7QUFHTCxhQUNJLDJEQUFDLDhEQUFEO0FBQUksaUJBQVMsRUFBRSxDQUFDLENBQUMvQixVQUFGLElBQWdCdUcsTUFBTSxDQUFDbEUsTUFBUCxHQUFnQjtBQUEvQyxTQUNJLDJEQUFDLGdFQUFELFFBQ0ksMkRBQUMsMEVBQUQ7QUFBYSxlQUFPLEVBQUMsTUFBckI7QUFBNEIsZUFBTyxFQUFDO0FBQXBDLFNBQ0ksMkRBQUMsd0RBQUQ7QUFDSSxrQkFBVSxFQUFFckMsVUFEaEI7QUFFSSx3QkFBZ0IsRUFBRStCLGdCQUZ0QjtBQUdJLGNBQU0sRUFBRXdFLE1BSFo7QUFJSSxxQkFBYSxFQUFFLHVCQUFDdEMsQ0FBRDtBQUFBLGlCQUFPLE1BQUksQ0FBQ21DLGFBQUwsQ0FBbUJuQyxDQUFuQixDQUFQO0FBQUEsU0FKbkI7QUFLSSxxQkFBYSxFQUFFLHVCQUFDQSxDQUFEO0FBQUEsaUJBQU8sTUFBSSxDQUFDb0MsYUFBTCxDQUFtQnBDLENBQW5CLENBQVA7QUFBQTtBQUxuQixRQURKLENBREosQ0FESixDQURKO0FBZUg7QUF6RUw7O0FBQUE7QUFBQSxFQUF5QzFFLCtDQUF6QztBQTRFZUQseUlBQWMsQ0FBQ2dILG1CQUFELENBQTdCLEU7Ozs7Ozs7Ozs7OztBQ3ZGQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFFQTtBQUVPLElBQU1lLFNBQVMsR0FBRyxTQUFaQSxTQUFZLE9BQTRFO0FBQUEsTUFBekVySCxVQUF5RSxRQUF6RUEsVUFBeUU7QUFBQSxNQUE3RCtCLGdCQUE2RCxRQUE3REEsZ0JBQTZEO0FBQUEsTUFBM0N3RSxNQUEyQyxRQUEzQ0EsTUFBMkM7QUFBQSxNQUFuQ0gsYUFBbUMsUUFBbkNBLGFBQW1DO0FBQUEsTUFBcEJDLGFBQW9CLFFBQXBCQSxhQUFvQjtBQUNqRyxTQUNJNUUsTUFBTSxDQUFDNkYsSUFBUCxDQUFZdkYsZ0JBQWdCLENBQUMsQ0FBRCxDQUE1QixFQUFpQzJCLEdBQWpDLENBQXFDLFVBQUE5RCxRQUFRLEVBQUk7QUFDN0MsUUFBTWlGLFNBQVMsR0FBR0MsNkNBQUMsQ0FBQ0MsSUFBRixDQUFPL0UsVUFBUCxFQUFtQjtBQUFFSixjQUFRLEVBQVJBO0FBQUYsS0FBbkIsQ0FBbEI7O0FBQ0EsUUFBTXdILFVBQVUsR0FBR2IsTUFBTSxDQUFDeEQsTUFBUCxDQUFjLFVBQUFDLENBQUM7QUFBQSxhQUFJQSxDQUFDLENBQUNFLEVBQUYsS0FBU3RELFFBQWI7QUFBQSxLQUFmLEVBQXNDLENBQXRDLENBQW5COztBQUNBLFFBQUksQ0FBQyxDQUFDaUYsU0FBRixJQUFlLENBQUMsQ0FBQ3VDLFVBQXJCLEVBQWlDO0FBQzdCLGFBQ0ksMkRBQUMsc0VBQUQ7QUFDSSxXQUFHLEVBQUV2QyxTQUFTLENBQUNqRixRQURuQjtBQUVJLFlBQUksRUFBRWlGLFNBQVMsQ0FBQ2pGLFFBRnBCO0FBR0ksYUFBSyxFQUFFaUYsU0FBUyxDQUFDMUQsS0FIckI7QUFJSSxhQUFLLEVBQUUwRCxTQUFTLENBQUNJLEtBSnJCO0FBS0ksY0FBTSxFQUFFbUMsVUFBVSxDQUFDakIsTUFMdkI7QUFNSSxxQkFBYSxFQUFFQyxhQU5uQjtBQU9JLHFCQUFhLEVBQUVDO0FBUG5CLFFBREo7QUFVSDtBQUNKLEdBZkQsQ0FESjtBQWtCSCxDQW5CTTtBQXFCUWdCLHdFQUFmLEU7Ozs7Ozs7Ozs7OztBQzFCQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUVPLElBQU1FLG1CQUFtQixHQUFHLFNBQXRCQSxtQkFBc0I7QUFBQSxNQUFHbkMsVUFBSCxRQUFHQSxVQUFIO0FBQUEsU0FDL0IsMkRBQUMsb0RBQUQsQ0FBTSxLQUFOO0FBQVksTUFBRSxFQUFFYSxtREFBR0E7QUFBbkIsS0FDSSwyREFBQyxvREFBRCxDQUFNLEtBQU47QUFBWSxVQUFNLE1BQWxCO0FBQW1CLE1BQUUsRUFBQztBQUF0QixLQUNJO0FBQU0sU0FBSyxFQUFFO0FBQUV1QixnQkFBVSxFQUFFO0FBQWQsS0FBYjtBQUFxQyxTQUFLLEVBQUM7QUFBM0Msc0JBQW9IcEMsVUFBVSxDQUFDcUMsY0FBWCxFQUFwSCxRQURKLENBREosQ0FEK0I7QUFBQSxDQUE1QjtBQVFRRixrRkFBZixFOzs7Ozs7Ozs7Ozs7QUNYQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUcsZ0JBQWdCLEdBQUcsU0FBbkJBLGdCQUFtQixDQUFDMUgsVUFBRCxFQUFnQjtBQUNyQyxNQUFNMkgsVUFBVSxHQUFHM0gsVUFBVSxDQUFDMEQsR0FBWCxDQUFlLFVBQUFWLENBQUM7QUFBQSxXQUFJQSxDQUFDLENBQUM0RSxTQUFOO0FBQUEsR0FBaEIsQ0FBbkI7O0FBQ0EsTUFBSUQsVUFBVSxJQUFJQSxVQUFVLENBQUN0RixNQUFYLEdBQW9CLENBQXRDLEVBQXlDO0FBQ3JDLFdBQU95Qyw2Q0FBQyxDQUFDK0MsT0FBRixDQUFVRixVQUFWLEVBQXNCLFVBQUNHLENBQUQsRUFBTztBQUNoQyxhQUFPMUgsNkNBQU0sQ0FBQzBILENBQUQsQ0FBYjtBQUNILEtBRk0sRUFFSixDQUFDLE1BQUQsQ0FGSSxDQUFQO0FBR0gsR0FKRCxNQUlPO0FBQ0gsV0FBT0gsVUFBUDtBQUNIO0FBQ0osQ0FURDs7QUFXTyxJQUFNSSxnQkFBZ0IsR0FBRyxTQUFuQkEsZ0JBQW1CLEdBQU07QUFDbEMsTUFBTTVGLE9BQU8sR0FBR0ssd0RBQVUsQ0FBQ0MsOERBQUQsQ0FBMUI7QUFEa0MsTUFFMUJaLGFBRjBCLEdBRUlNLE9BRkosQ0FFMUJOLGFBRjBCO0FBQUEsTUFFWDdCLFVBRlcsR0FFSW1DLE9BRkosQ0FFWG5DLFVBRlc7QUFHbEMsTUFBTWdJLFlBQVksR0FBR04sZ0JBQWdCLENBQUMxSCxVQUFELENBQWhCLENBQTZCLENBQTdCLENBQXJCO0FBQ0EsTUFBTWlJLGtCQUFrQixHQUFHLENBQUMsQ0FBQ0QsWUFBRixHQUFpQjVILDZDQUFNLENBQUM0SCxZQUFELENBQXZCLEdBQXdDeEcsU0FBbkU7QUFDQSxNQUFNMEcsbUJBQW1CLEdBQUcsQ0FBQyxDQUFDRixZQUFGLEdBQWlCNUgsNkNBQU0sR0FBRytILElBQVQsQ0FBY0Ysa0JBQWQsRUFBa0MsT0FBbEMsQ0FBakIsR0FBOER6RyxTQUExRjtBQUVBLFNBQ0ksMkRBQUMsOERBQUQ7QUFBSSxhQUFTLEVBQUVLO0FBQWYsS0FDSSwyREFBQyxnRUFBRCxRQUNJLDJEQUFDLHNFQUFELE9BREosQ0FESixFQUlJLDJEQUFDLGtFQUFEO0FBQVEsYUFBUyxFQUFFN0IsVUFBVSxDQUFDcUMsTUFBWCxJQUFxQixDQUFyQixJQUEwQjJGLFlBQVksS0FBS3hHLFNBQTNDLElBQXdELENBQUN5RyxrQkFBa0IsQ0FBQ2pILE9BQW5CLEVBQXpELElBQXlGa0gsbUJBQW1CLEtBQUsxRztBQUFwSSxLQUNJLDJEQUFDLHVFQUFELE9BREosQ0FKSixFQU9JLDJEQUFDLGtFQUFEO0FBQVEsYUFBUyxFQUFFMEcsbUJBQW1CLEdBQUc7QUFBekMsS0FDSSwyREFBQyx1RUFBRDtBQUFxQixhQUFTLEVBQUVELGtCQUFoQztBQUFvRCxTQUFLLEVBQUVDO0FBQTNELElBREosQ0FQSixFQVVJLDJEQUFDLGdFQUFELFFBQ0ksMkRBQUMsdUVBQUQ7QUFBcUIsYUFBUyxFQUFFRDtBQUFoQyxJQURKLENBVkosQ0FESjtBQWdCSCxDQXZCTTtBQXlCUUYsK0VBQWYsRTs7Ozs7Ozs7Ozs7O0FDaERBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBRU8sSUFBTUssV0FBVyxHQUFHLFNBQWRBLFdBQWMsQ0FBQzNJLEtBQUQsRUFBVztBQUNsQyxTQUNJLDJEQUFDLHFEQUFEO0FBQU8sV0FBTyxFQUFFQSxLQUFLLENBQUM0STtBQUF0QixLQUNJLDJEQUFDLHFEQUFELENBQU8sT0FBUCxRQUFnQjVJLEtBQUssQ0FBQzZJLE9BQXRCLENBREosRUFFSSxzRUFGSixFQUdLN0ksS0FBSyxDQUFDbUQsUUFIWCxDQURKO0FBT0gsQ0FSTTtBQVVRd0YsMEVBQWYsRTs7Ozs7Ozs7Ozs7O0FDYkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFFTyxJQUFNRyxrQkFBa0IsR0FBRyxTQUFyQkEsa0JBQXFCLEdBQU07QUFDcEMsU0FDSSwyREFBQyw0REFBRDtBQUNJLFdBQU8sRUFBQyxNQURaO0FBRUksV0FBTyxFQUFDO0FBRlosSUFESjtBQU1ILENBUE07QUFTUUEsaUZBQWYsRTs7Ozs7Ozs7Ozs7O0FDYkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFFTyxJQUFNQyxtQkFBbUIsR0FBRyxTQUF0QkEsbUJBQXNCLEdBQU07QUFDckMsU0FDSSwyREFBQyw0REFBRDtBQUNJLFdBQU8sRUFBQyxRQURaO0FBRUksV0FBTyxFQUFDO0FBRlosS0FJSSxtS0FKSixDQURKO0FBUUgsQ0FUTTtBQVdRQSxrRkFBZixFOzs7Ozs7Ozs7Ozs7QUNkQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFFTyxJQUFNQyxtQkFBbUIsR0FBRyxTQUF0QkEsbUJBQXNCLE9BQTBCO0FBQUEsTUFBdkJDLEtBQXVCLFFBQXZCQSxLQUF1QjtBQUFBLE1BQWhCQyxTQUFnQixRQUFoQkEsU0FBZ0I7QUFDekQsTUFBTUMsSUFBSSxHQUFHQyxnRUFBWSxDQUFDRixTQUFELEVBQVlHLCtEQUFaLENBQXpCO0FBQ0EsU0FDSSwyREFBQyw0REFBRDtBQUNJLFdBQU8sRUFBQyxTQURaO0FBRUksV0FBTyxFQUFDO0FBRlosS0FJSSx5SUFBbUVKLEtBQW5FLG9CQUF3RkUsSUFBeEYsT0FKSixDQURKO0FBUUgsQ0FWTTtBQVlRSCxrRkFBZixFOzs7Ozs7Ozs7Ozs7QUNqQkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBRU8sSUFBTU0sbUJBQW1CLEdBQUcsU0FBdEJBLG1CQUFzQixPQUFtQjtBQUFBLE1BQWhCSixTQUFnQixRQUFoQkEsU0FBZ0I7QUFDbEQsTUFBTUMsSUFBSSxHQUFHQyxnRUFBWSxDQUFDRixTQUFELEVBQVlHLCtEQUFaLENBQXpCO0FBQ0EsU0FDSSwyREFBQyw0REFBRDtBQUNJLFdBQU8sRUFBQyxTQURaO0FBRUksV0FBTyxFQUFDO0FBRlosS0FJSSw4SEFBd0RGLElBQXhELE9BSkosQ0FESjtBQVFILENBVk07QUFZUUcsa0ZBQWYsRTs7Ozs7Ozs7Ozs7O0FDakJBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBTyxJQUFNQyxtQkFBbUIsR0FBRyxFQUE1QjtBQUNBLElBQU1DLG1CQUFtQixHQUFHLENBQTVCO0FBRUEsSUFBTUMsbUJBQW1CLEdBQUcsTUFBNUI7QUFDQSxJQUFNQyxtQkFBbUIsR0FBRyxDQUE1QixDOzs7Ozs7Ozs7Ozs7QUNKUDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRU8sSUFBTTFHLFVBQVUsR0FBRzJHLDRDQUFLLENBQUNDLGFBQU4sRUFBbkIsQzs7Ozs7Ozs7Ozs7O0FDRlA7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBTyxJQUFNQyxpQkFBaUIsR0FBRyxZQUExQjtBQUNBLElBQU12SSxxQkFBcUIsR0FBRyxxQkFBOUI7QUFDQSxJQUFNK0gsbUJBQW1CLEdBQUcsOEJBQTVCO0FBRUEsSUFBTUQsWUFBWSxHQUFHLFNBQWZBLFlBQWUsQ0FBQ1UsVUFBRCxFQUFhQyxNQUFiLEVBQXdCO0FBQ2hELFNBQU8sQ0FBQyxDQUFDRCxVQUFGLElBQWdCLENBQUMsQ0FBQ0MsTUFBbEIsR0FBMkJELFVBQVUsQ0FBQ0MsTUFBWCxDQUFrQkEsTUFBbEIsQ0FBM0IsR0FBdUQsRUFBOUQ7QUFDSCxDQUZNO0FBSUEsSUFBTUMsYUFBYSxHQUFHLFNBQWhCQSxhQUFnQixDQUFDRixVQUFELEVBQWdCO0FBQ3pDLFNBQU9WLFlBQVksQ0FBQ1UsVUFBRCxFQUFhRCxpQkFBYixDQUFuQjtBQUNILENBRk07QUFJQSxJQUFNbkosaUJBQWlCLEdBQUcsU0FBcEJBLGlCQUFvQixDQUFDb0osVUFBRCxFQUFnQjtBQUM3QyxTQUFPVixZQUFZLENBQUNVLFVBQUQsRUFBYXhJLHFCQUFiLENBQW5CO0FBQ0gsQ0FGTTtBQUlBLElBQU04RixRQUFRLEdBQUcsU0FBWEEsUUFBVyxDQUFDNkMsTUFBRCxFQUFZO0FBQ2hDLE1BQUksQ0FBQ0EsTUFBTCxFQUFhLE9BQU8sRUFBUDtBQUNiLFNBQU9BLE1BQU0sQ0FBQ0MsT0FBUCxDQUFlLEtBQWYsRUFBc0IsRUFBdEIsQ0FBUDtBQUNILENBSE07QUFLQSxJQUFNNUMsS0FBSyxHQUFHLFNBQVJBLEtBQVEsQ0FBQzJDLE1BQUQsRUFBU0UsR0FBVCxFQUFrQjtBQUNuQyxNQUFJLENBQUNGLE1BQUwsRUFBYSxPQUFPLEVBQVA7QUFDYixTQUFPQSxNQUFNLENBQUNHLE1BQVAsQ0FBYyxDQUFkLEVBQWlCRCxHQUFqQixDQUFQO0FBQ0gsQ0FITTtBQUtBLElBQU05QyxpQkFBaUIsR0FBRyxTQUFwQkEsaUJBQW9CLENBQUM0QyxNQUFELEVBQVk7QUFDekMsTUFBSSxDQUFDQSxNQUFMLEVBQWEsT0FBTyxFQUFQO0FBQ2IsU0FBT0EsTUFBTSxDQUFDQyxPQUFQLENBQWUsT0FBZixFQUF3QixFQUF4QixDQUFQO0FBQ0gsQ0FITSxDOzs7Ozs7Ozs7Ozs7QUMxQlA7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUVBO0FBRUFHLGdEQUFRLENBQUNDLE1BQVQsQ0FBZ0IsMkRBQUMsK0RBQUQsT0FBaEIsRUFBeUJDLFFBQVEsQ0FBQ0MsY0FBVCxDQUF3QixnQkFBeEIsQ0FBekIsRTs7Ozs7Ozs7Ozs7O0FDSkEsY0FBYyxtQkFBTyxDQUFDLHdIQUF1RDs7QUFFN0UsNENBQTRDLFFBQVM7O0FBRXJEO0FBQ0E7Ozs7QUFJQSxlQUFlOztBQUVmO0FBQ0E7O0FBRUEsYUFBYSxtQkFBTyxDQUFDLHNHQUFtRDs7QUFFeEU7O0FBRUEsR0FBRyxLQUFVLEVBQUUsRTs7Ozs7Ozs7Ozs7O0FDbEJmLGNBQWMsbUJBQU8sQ0FBQywwSUFBK0Q7O0FBRXJGLDRDQUE0QyxRQUFTOztBQUVyRDtBQUNBOzs7O0FBSUEsZUFBZTs7QUFFZjtBQUNBOztBQUVBLGFBQWEsbUJBQU8sQ0FBQyx5R0FBc0Q7O0FBRTNFOztBQUVBLEdBQUcsS0FBVSxFQUFFLEU7Ozs7Ozs7Ozs7OztBQ2xCZixjQUFjLG1CQUFPLENBQUMsOElBQWlFOztBQUV2Riw0Q0FBNEMsUUFBUzs7QUFFckQ7QUFDQTs7OztBQUlBLGVBQWU7O0FBRWY7QUFDQTs7QUFFQSxhQUFhLG1CQUFPLENBQUMseUdBQXNEOztBQUUzRTs7QUFFQSxHQUFHLEtBQVUsRUFBRSxFOzs7Ozs7Ozs7Ozs7QUNsQmYsY0FBYyxtQkFBTyxDQUFDLDBJQUErRDs7QUFFckYsNENBQTRDLFFBQVM7O0FBRXJEO0FBQ0E7Ozs7QUFJQSxlQUFlOztBQUVmO0FBQ0E7O0FBRUEsYUFBYSxtQkFBTyxDQUFDLHlHQUFzRDs7QUFFM0U7O0FBRUEsR0FBRyxLQUFVLEVBQUUsRTs7Ozs7Ozs7Ozs7O0FDbkJmO0FBQUE7QUFBTyxJQUFNeEcsU0FBUyxHQUFHLENBQ3JCO0FBQUVQLElBQUUsRUFBRSxDQUFOO0FBQVNJLE1BQUksRUFBRTtBQUFmLENBRHFCLEVBRXJCO0FBQUVKLElBQUUsRUFBRSxDQUFOO0FBQVNJLE1BQUksRUFBRTtBQUFmLENBRnFCLEVBR3JCO0FBQUVKLElBQUUsRUFBRSxDQUFOO0FBQVNJLE1BQUksRUFBRTtBQUFmLENBSHFCLENBQWxCLEM7Ozs7Ozs7Ozs7OztBQ0FQO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFTyxJQUFNNkIsc0JBQXNCLEdBQUcsU0FBekJBLHNCQUF5QixDQUFDRCxLQUFELEVBQVFOLEtBQVIsRUFBa0I7QUFDcEQsU0FBT3FDLFFBQVEsQ0FBQy9CLEtBQUQsQ0FBUixHQUFrQitCLFFBQVEsQ0FBQ3JDLEtBQUQsQ0FBakM7QUFDSCxDQUZNO0FBSUEsSUFBTVMsaUJBQWlCLEdBQUcsU0FBcEJBLGlCQUFvQixDQUFDckYsVUFBRCxFQUFnQjtBQUM3QyxNQUFNa0ssTUFBTSxHQUFHbEssVUFBVSxDQUFDMEQsR0FBWCxDQUFlLFVBQUFtQixTQUFTO0FBQUEsV0FBSU0sc0JBQXNCLENBQUNOLFNBQVMsQ0FBQzFELEtBQVgsRUFBa0IwRCxTQUFTLENBQUNJLEtBQTVCLENBQTFCO0FBQUEsR0FBeEIsQ0FBZjs7QUFDQSxNQUFNRyxVQUFVLEdBQUdOLDZDQUFDLENBQUNxRixLQUFGLENBQVFELE1BQVIsRUFBZ0IsVUFBQUUsQ0FBQztBQUFBLFdBQUlBLENBQUo7QUFBQSxHQUFqQixDQUFuQjs7QUFFQSxTQUFPaEYsVUFBUDtBQUNILENBTE07QUFPQSxJQUFNOUQsbUJBQW1CLEdBQUcsU0FBdEJBLG1CQUFzQixDQUFDK0ksS0FBRCxFQUFRQyxHQUFSLEVBQWFuSixLQUFiLEVBQXVCO0FBQ3REa0osT0FBSyxHQUFHQSxLQUFLLElBQUksRUFBakI7QUFDQSxNQUFNOUksT0FBTyxHQUFHOEksS0FBSyxDQUFDdEgsTUFBTixDQUFhLFVBQUFDLENBQUM7QUFBQSxXQUFJQSxDQUFDLENBQUNzSCxHQUFELENBQUQsS0FBV25KLEtBQWY7QUFBQSxHQUFkLENBQWhCO0FBQ0EsTUFBTVEsWUFBWSxHQUFHMEksS0FBSyxDQUFDRSxTQUFOLENBQWdCLFVBQUF2SCxDQUFDO0FBQUEsV0FBSUEsQ0FBQyxDQUFDc0gsR0FBRCxDQUFELEtBQVduSixLQUFmO0FBQUEsR0FBakIsQ0FBckI7QUFFQSxNQUFJcUosV0FBVyxHQUFHLElBQWxCOztBQUNBLE1BQUksQ0FBQyxDQUFDakosT0FBRixJQUFhQSxPQUFPLENBQUNjLE1BQVIsR0FBaUIsQ0FBbEMsRUFBcUM7QUFDakNtSSxlQUFXLEdBQUc7QUFDVmpKLGFBQU8sRUFBRUEsT0FBTyxDQUFDLENBQUQsQ0FETjtBQUVWSSxrQkFBWSxFQUFFQTtBQUZKLEtBQWQ7QUFJSDs7QUFFRCxTQUFPNkksV0FBUDtBQUNILENBZE07QUFnQkEsSUFBTXhHLGNBQWMsR0FBRyxTQUFqQkEsY0FBaUIsQ0FBQ3BFLFFBQUQsRUFBYztBQUN4QyxNQUFJLENBQUNBLFFBQUwsRUFBZSxPQUFPLEVBQVA7QUFDZixTQUFPQSxRQUFRLENBQUMrSixPQUFULENBQWlCLE1BQWpCLEVBQXlCLEdBQXpCLEVBQThCYyxXQUE5QixFQUFQO0FBQ0gsQ0FITSxDIiwiZmlsZSI6Im1haW4uYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gaW5zdGFsbCBhIEpTT05QIGNhbGxiYWNrIGZvciBjaHVuayBsb2FkaW5nXG4gXHRmdW5jdGlvbiB3ZWJwYWNrSnNvbnBDYWxsYmFjayhkYXRhKSB7XG4gXHRcdHZhciBjaHVua0lkcyA9IGRhdGFbMF07XG4gXHRcdHZhciBtb3JlTW9kdWxlcyA9IGRhdGFbMV07XG4gXHRcdHZhciBleGVjdXRlTW9kdWxlcyA9IGRhdGFbMl07XG5cbiBcdFx0Ly8gYWRkIFwibW9yZU1vZHVsZXNcIiB0byB0aGUgbW9kdWxlcyBvYmplY3QsXG4gXHRcdC8vIHRoZW4gZmxhZyBhbGwgXCJjaHVua0lkc1wiIGFzIGxvYWRlZCBhbmQgZmlyZSBjYWxsYmFja1xuIFx0XHR2YXIgbW9kdWxlSWQsIGNodW5rSWQsIGkgPSAwLCByZXNvbHZlcyA9IFtdO1xuIFx0XHRmb3IoO2kgPCBjaHVua0lkcy5sZW5ndGg7IGkrKykge1xuIFx0XHRcdGNodW5rSWQgPSBjaHVua0lkc1tpXTtcbiBcdFx0XHRpZihpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0pIHtcbiBcdFx0XHRcdHJlc29sdmVzLnB1c2goaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdWzBdKTtcbiBcdFx0XHR9XG4gXHRcdFx0aW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdID0gMDtcbiBcdFx0fVxuIFx0XHRmb3IobW9kdWxlSWQgaW4gbW9yZU1vZHVsZXMpIHtcbiBcdFx0XHRpZihPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwobW9yZU1vZHVsZXMsIG1vZHVsZUlkKSkge1xuIFx0XHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0gPSBtb3JlTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdFx0fVxuIFx0XHR9XG4gXHRcdGlmKHBhcmVudEpzb25wRnVuY3Rpb24pIHBhcmVudEpzb25wRnVuY3Rpb24oZGF0YSk7XG5cbiBcdFx0d2hpbGUocmVzb2x2ZXMubGVuZ3RoKSB7XG4gXHRcdFx0cmVzb2x2ZXMuc2hpZnQoKSgpO1xuIFx0XHR9XG5cbiBcdFx0Ly8gYWRkIGVudHJ5IG1vZHVsZXMgZnJvbSBsb2FkZWQgY2h1bmsgdG8gZGVmZXJyZWQgbGlzdFxuIFx0XHRkZWZlcnJlZE1vZHVsZXMucHVzaC5hcHBseShkZWZlcnJlZE1vZHVsZXMsIGV4ZWN1dGVNb2R1bGVzIHx8IFtdKTtcblxuIFx0XHQvLyBydW4gZGVmZXJyZWQgbW9kdWxlcyB3aGVuIGFsbCBjaHVua3MgcmVhZHlcbiBcdFx0cmV0dXJuIGNoZWNrRGVmZXJyZWRNb2R1bGVzKCk7XG4gXHR9O1xuIFx0ZnVuY3Rpb24gY2hlY2tEZWZlcnJlZE1vZHVsZXMoKSB7XG4gXHRcdHZhciByZXN1bHQ7XG4gXHRcdGZvcih2YXIgaSA9IDA7IGkgPCBkZWZlcnJlZE1vZHVsZXMubGVuZ3RoOyBpKyspIHtcbiBcdFx0XHR2YXIgZGVmZXJyZWRNb2R1bGUgPSBkZWZlcnJlZE1vZHVsZXNbaV07XG4gXHRcdFx0dmFyIGZ1bGZpbGxlZCA9IHRydWU7XG4gXHRcdFx0Zm9yKHZhciBqID0gMTsgaiA8IGRlZmVycmVkTW9kdWxlLmxlbmd0aDsgaisrKSB7XG4gXHRcdFx0XHR2YXIgZGVwSWQgPSBkZWZlcnJlZE1vZHVsZVtqXTtcbiBcdFx0XHRcdGlmKGluc3RhbGxlZENodW5rc1tkZXBJZF0gIT09IDApIGZ1bGZpbGxlZCA9IGZhbHNlO1xuIFx0XHRcdH1cbiBcdFx0XHRpZihmdWxmaWxsZWQpIHtcbiBcdFx0XHRcdGRlZmVycmVkTW9kdWxlcy5zcGxpY2UoaS0tLCAxKTtcbiBcdFx0XHRcdHJlc3VsdCA9IF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gZGVmZXJyZWRNb2R1bGVbMF0pO1xuIFx0XHRcdH1cbiBcdFx0fVxuIFx0XHRyZXR1cm4gcmVzdWx0O1xuIFx0fVxuXG4gXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuIFx0Ly8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4gXHQvLyBQcm9taXNlID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxuIFx0dmFyIGluc3RhbGxlZENodW5rcyA9IHtcbiBcdFx0XCJtYWluXCI6IDBcbiBcdH07XG5cbiBcdHZhciBkZWZlcnJlZE1vZHVsZXMgPSBbXTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0dmFyIGpzb25wQXJyYXkgPSB3aW5kb3dbXCJ3ZWJwYWNrSnNvbnBcIl0gPSB3aW5kb3dbXCJ3ZWJwYWNrSnNvbnBcIl0gfHwgW107XG4gXHR2YXIgb2xkSnNvbnBGdW5jdGlvbiA9IGpzb25wQXJyYXkucHVzaC5iaW5kKGpzb25wQXJyYXkpO1xuIFx0anNvbnBBcnJheS5wdXNoID0gd2VicGFja0pzb25wQ2FsbGJhY2s7XG4gXHRqc29ucEFycmF5ID0ganNvbnBBcnJheS5zbGljZSgpO1xuIFx0Zm9yKHZhciBpID0gMDsgaSA8IGpzb25wQXJyYXkubGVuZ3RoOyBpKyspIHdlYnBhY2tKc29ucENhbGxiYWNrKGpzb25wQXJyYXlbaV0pO1xuIFx0dmFyIHBhcmVudEpzb25wRnVuY3Rpb24gPSBvbGRKc29ucEZ1bmN0aW9uO1xuXG5cbiBcdC8vIGFkZCBlbnRyeSBtb2R1bGUgdG8gZGVmZXJyZWQgbGlzdFxuIFx0ZGVmZXJyZWRNb2R1bGVzLnB1c2goW1wiLi9zcmMvaW5kZXguanNcIixcInZlbmRvcnNcIl0pO1xuIFx0Ly8gcnVuIGRlZmVycmVkIG1vZHVsZXMgd2hlbiByZWFkeVxuIFx0cmV0dXJuIGNoZWNrRGVmZXJyZWRNb2R1bGVzKCk7XG4iLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiKShmYWxzZSk7XG4vLyBNb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcImh0bWwsXFxyXFxuYm9keSB7XFxyXFxuICAgIG1pbi1oZWlnaHQ6IDgwJSAhaW1wb3J0YW50O1xcclxcbiAgICBoZWlnaHQ6IGF1dG8gIWltcG9ydGFudDtcXHJcXG59XFxyXFxuXFxyXFxuYm9keSB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47IFxcclxcbn1cXHJcXG4gXFxyXFxuLmNvbnRlbnQge1xcclxcbiAgICBmbGV4OiAxIDAgYXV0bztcXHJcXG4gICAgbWFyZ2luOiAxNXB4IDMwcHggIWltcG9ydGFudDtcXHJcXG4gICAgaGVpZ2h0OiBjYWxjKDEwMCUgLSA2MHB4KTtcXHJcXG59XFxyXFxuXFxyXFxuLmZvb3RlciB7XFxyXFxuICAgIGZsZXgtc2hyaW5rOiAwO1xcclxcbn1cXHJcXG5cXHJcXG5AbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcXHJcXG4gICAgaW1nIHtcXHJcXG4gICAgICAgIHdpZHRoOiAyNHB4ICFpbXBvcnRhbnQ7XFxyXFxuICAgICAgICBoZWlnaHQ6IDI0cHggIWltcG9ydGFudDtcXHJcXG4gICAgfVxcclxcbn1cXHJcXG5cXHJcXG5AbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIHtcXHJcXG4gICAgaW1nIHtcXHJcXG4gICAgICAgIHdpZHRoOiAzMnB4ICFpbXBvcnRhbnQ7XFxyXFxuICAgICAgICBoZWlnaHQ6IDMycHggIWltcG9ydGFudDtcXHJcXG4gICAgfVxcclxcbn1cIiwgXCJcIl0pO1xuXG4iLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiKShmYWxzZSk7XG4vLyBNb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcImRpdi5pbWJ1LXR5cGUtY2FyZCB7XFxyXFxuICAgIG1hcmdpbjogNnB4IDNweCAhaW1wb3J0YW50O1xcclxcbn1cXHJcXG5cXHJcXG5kaXYuaW1idS10eXBlLWNhcmQgPiBkaXYuY2FyZC1oZWFkZXIgPiBzcGFuIHtcXHJcXG4gICAgbWFyZ2luLWxlZnQ6IC0yOHB4ICFpbXBvcnRhbnQ7XFxyXFxufVwiLCBcIlwiXSk7XG5cbiIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCIpKGZhbHNlKTtcbi8vIE1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiQG1lZGlhIChtaW4td2lkdGg6IDEyMDBweCkge1xcclxcbiAgICBkaXYuY29udGFpbmVyLmltYnVlbWVudHMtd3JhcHBlciB7XFxyXFxuICAgICAgICBwYWRkaW5nLWxlZnQ6ICAwO1xcclxcbiAgICAgICAgcGFkZGluZy1yaWdodDogMDtcXHJcXG4gICAgICAgIG1hcmdpbi1sZWZ0OiA1cHg7XFxyXFxuICAgICAgICBtYXJnaW4tcmlnaHQ6IDVweDtcXHJcXG4gICAgfVxcclxcbn1cXHJcXG5cXHJcXG5AbWVkaWEgKG1pbi13aWR0aDogMTQ5MHB4KSB7XFxyXFxuICAgIC5yb3cge1xcclxcbiAgICAgICAgZmxleC13cmFwOiBub3dyYXA7XFxyXFxuICAgIH1cXHJcXG59XCIsIFwiXCJdKTtcblxuIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIikoZmFsc2UpO1xuLy8gTW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCIuY291bnQtaW5wdXQtd3JhcHBlciB7XFxyXFxuICAgIHBhZGRpbmctbGVmdDogMHB4ICFpbXBvcnRhbnQ7XFxyXFxufVwiLCBcIlwiXSk7XG5cbiIsInZhciBtYXAgPSB7XG5cdFwiLi9hZlwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvYWYuanNcIixcblx0XCIuL2FmLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9hZi5qc1wiLFxuXHRcIi4vYXJcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2FyLmpzXCIsXG5cdFwiLi9hci1kelwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvYXItZHouanNcIixcblx0XCIuL2FyLWR6LmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9hci1kei5qc1wiLFxuXHRcIi4vYXIta3dcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2FyLWt3LmpzXCIsXG5cdFwiLi9hci1rdy5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvYXIta3cuanNcIixcblx0XCIuL2FyLWx5XCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9hci1seS5qc1wiLFxuXHRcIi4vYXItbHkuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2FyLWx5LmpzXCIsXG5cdFwiLi9hci1tYVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvYXItbWEuanNcIixcblx0XCIuL2FyLW1hLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9hci1tYS5qc1wiLFxuXHRcIi4vYXItc2FcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2FyLXNhLmpzXCIsXG5cdFwiLi9hci1zYS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvYXItc2EuanNcIixcblx0XCIuL2FyLXRuXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9hci10bi5qc1wiLFxuXHRcIi4vYXItdG4uanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2FyLXRuLmpzXCIsXG5cdFwiLi9hci5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvYXIuanNcIixcblx0XCIuL2F6XCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9hei5qc1wiLFxuXHRcIi4vYXouanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2F6LmpzXCIsXG5cdFwiLi9iZVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvYmUuanNcIixcblx0XCIuL2JlLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9iZS5qc1wiLFxuXHRcIi4vYmdcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2JnLmpzXCIsXG5cdFwiLi9iZy5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvYmcuanNcIixcblx0XCIuL2JtXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9ibS5qc1wiLFxuXHRcIi4vYm0uanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2JtLmpzXCIsXG5cdFwiLi9iblwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvYm4uanNcIixcblx0XCIuL2JuLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9ibi5qc1wiLFxuXHRcIi4vYm9cIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2JvLmpzXCIsXG5cdFwiLi9iby5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvYm8uanNcIixcblx0XCIuL2JyXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9ici5qc1wiLFxuXHRcIi4vYnIuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2JyLmpzXCIsXG5cdFwiLi9ic1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvYnMuanNcIixcblx0XCIuL2JzLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9icy5qc1wiLFxuXHRcIi4vY2FcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2NhLmpzXCIsXG5cdFwiLi9jYS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvY2EuanNcIixcblx0XCIuL2NzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9jcy5qc1wiLFxuXHRcIi4vY3MuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2NzLmpzXCIsXG5cdFwiLi9jdlwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvY3YuanNcIixcblx0XCIuL2N2LmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9jdi5qc1wiLFxuXHRcIi4vY3lcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2N5LmpzXCIsXG5cdFwiLi9jeS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvY3kuanNcIixcblx0XCIuL2RhXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9kYS5qc1wiLFxuXHRcIi4vZGEuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2RhLmpzXCIsXG5cdFwiLi9kZVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZGUuanNcIixcblx0XCIuL2RlLWF0XCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9kZS1hdC5qc1wiLFxuXHRcIi4vZGUtYXQuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2RlLWF0LmpzXCIsXG5cdFwiLi9kZS1jaFwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZGUtY2guanNcIixcblx0XCIuL2RlLWNoLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9kZS1jaC5qc1wiLFxuXHRcIi4vZGUuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2RlLmpzXCIsXG5cdFwiLi9kdlwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZHYuanNcIixcblx0XCIuL2R2LmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9kdi5qc1wiLFxuXHRcIi4vZWxcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2VsLmpzXCIsXG5cdFwiLi9lbC5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZWwuanNcIixcblx0XCIuL2VuLVNHXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9lbi1TRy5qc1wiLFxuXHRcIi4vZW4tU0cuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2VuLVNHLmpzXCIsXG5cdFwiLi9lbi1hdVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZW4tYXUuanNcIixcblx0XCIuL2VuLWF1LmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9lbi1hdS5qc1wiLFxuXHRcIi4vZW4tY2FcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2VuLWNhLmpzXCIsXG5cdFwiLi9lbi1jYS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZW4tY2EuanNcIixcblx0XCIuL2VuLWdiXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9lbi1nYi5qc1wiLFxuXHRcIi4vZW4tZ2IuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2VuLWdiLmpzXCIsXG5cdFwiLi9lbi1pZVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZW4taWUuanNcIixcblx0XCIuL2VuLWllLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9lbi1pZS5qc1wiLFxuXHRcIi4vZW4taWxcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2VuLWlsLmpzXCIsXG5cdFwiLi9lbi1pbC5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZW4taWwuanNcIixcblx0XCIuL2VuLW56XCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9lbi1uei5qc1wiLFxuXHRcIi4vZW4tbnouanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2VuLW56LmpzXCIsXG5cdFwiLi9lb1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZW8uanNcIixcblx0XCIuL2VvLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9lby5qc1wiLFxuXHRcIi4vZXNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2VzLmpzXCIsXG5cdFwiLi9lcy1kb1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZXMtZG8uanNcIixcblx0XCIuL2VzLWRvLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9lcy1kby5qc1wiLFxuXHRcIi4vZXMtdXNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2VzLXVzLmpzXCIsXG5cdFwiLi9lcy11cy5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZXMtdXMuanNcIixcblx0XCIuL2VzLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9lcy5qc1wiLFxuXHRcIi4vZXRcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2V0LmpzXCIsXG5cdFwiLi9ldC5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZXQuanNcIixcblx0XCIuL2V1XCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9ldS5qc1wiLFxuXHRcIi4vZXUuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2V1LmpzXCIsXG5cdFwiLi9mYVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZmEuanNcIixcblx0XCIuL2ZhLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9mYS5qc1wiLFxuXHRcIi4vZmlcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2ZpLmpzXCIsXG5cdFwiLi9maS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZmkuanNcIixcblx0XCIuL2ZvXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9mby5qc1wiLFxuXHRcIi4vZm8uanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2ZvLmpzXCIsXG5cdFwiLi9mclwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZnIuanNcIixcblx0XCIuL2ZyLWNhXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9mci1jYS5qc1wiLFxuXHRcIi4vZnItY2EuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2ZyLWNhLmpzXCIsXG5cdFwiLi9mci1jaFwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZnItY2guanNcIixcblx0XCIuL2ZyLWNoLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9mci1jaC5qc1wiLFxuXHRcIi4vZnIuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2ZyLmpzXCIsXG5cdFwiLi9meVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZnkuanNcIixcblx0XCIuL2Z5LmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9meS5qc1wiLFxuXHRcIi4vZ2FcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2dhLmpzXCIsXG5cdFwiLi9nYS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZ2EuanNcIixcblx0XCIuL2dkXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9nZC5qc1wiLFxuXHRcIi4vZ2QuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2dkLmpzXCIsXG5cdFwiLi9nbFwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZ2wuanNcIixcblx0XCIuL2dsLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9nbC5qc1wiLFxuXHRcIi4vZ29tLWxhdG5cIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2dvbS1sYXRuLmpzXCIsXG5cdFwiLi9nb20tbGF0bi5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZ29tLWxhdG4uanNcIixcblx0XCIuL2d1XCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9ndS5qc1wiLFxuXHRcIi4vZ3UuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2d1LmpzXCIsXG5cdFwiLi9oZVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvaGUuanNcIixcblx0XCIuL2hlLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9oZS5qc1wiLFxuXHRcIi4vaGlcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2hpLmpzXCIsXG5cdFwiLi9oaS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvaGkuanNcIixcblx0XCIuL2hyXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9oci5qc1wiLFxuXHRcIi4vaHIuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2hyLmpzXCIsXG5cdFwiLi9odVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvaHUuanNcIixcblx0XCIuL2h1LmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9odS5qc1wiLFxuXHRcIi4vaHktYW1cIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2h5LWFtLmpzXCIsXG5cdFwiLi9oeS1hbS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvaHktYW0uanNcIixcblx0XCIuL2lkXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9pZC5qc1wiLFxuXHRcIi4vaWQuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2lkLmpzXCIsXG5cdFwiLi9pc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvaXMuanNcIixcblx0XCIuL2lzLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9pcy5qc1wiLFxuXHRcIi4vaXRcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2l0LmpzXCIsXG5cdFwiLi9pdC1jaFwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvaXQtY2guanNcIixcblx0XCIuL2l0LWNoLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9pdC1jaC5qc1wiLFxuXHRcIi4vaXQuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2l0LmpzXCIsXG5cdFwiLi9qYVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvamEuanNcIixcblx0XCIuL2phLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9qYS5qc1wiLFxuXHRcIi4vanZcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2p2LmpzXCIsXG5cdFwiLi9qdi5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvanYuanNcIixcblx0XCIuL2thXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9rYS5qc1wiLFxuXHRcIi4va2EuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2thLmpzXCIsXG5cdFwiLi9ra1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUva2suanNcIixcblx0XCIuL2trLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9ray5qc1wiLFxuXHRcIi4va21cIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2ttLmpzXCIsXG5cdFwiLi9rbS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUva20uanNcIixcblx0XCIuL2tuXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9rbi5qc1wiLFxuXHRcIi4va24uanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2tuLmpzXCIsXG5cdFwiLi9rb1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUva28uanNcIixcblx0XCIuL2tvLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9rby5qc1wiLFxuXHRcIi4va3VcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2t1LmpzXCIsXG5cdFwiLi9rdS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUva3UuanNcIixcblx0XCIuL2t5XCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9reS5qc1wiLFxuXHRcIi4va3kuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2t5LmpzXCIsXG5cdFwiLi9sYlwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbGIuanNcIixcblx0XCIuL2xiLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9sYi5qc1wiLFxuXHRcIi4vbG9cIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2xvLmpzXCIsXG5cdFwiLi9sby5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbG8uanNcIixcblx0XCIuL2x0XCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9sdC5qc1wiLFxuXHRcIi4vbHQuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2x0LmpzXCIsXG5cdFwiLi9sdlwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbHYuanNcIixcblx0XCIuL2x2LmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9sdi5qc1wiLFxuXHRcIi4vbWVcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL21lLmpzXCIsXG5cdFwiLi9tZS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbWUuanNcIixcblx0XCIuL21pXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9taS5qc1wiLFxuXHRcIi4vbWkuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL21pLmpzXCIsXG5cdFwiLi9ta1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbWsuanNcIixcblx0XCIuL21rLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9tay5qc1wiLFxuXHRcIi4vbWxcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL21sLmpzXCIsXG5cdFwiLi9tbC5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbWwuanNcIixcblx0XCIuL21uXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9tbi5qc1wiLFxuXHRcIi4vbW4uanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL21uLmpzXCIsXG5cdFwiLi9tclwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbXIuanNcIixcblx0XCIuL21yLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9tci5qc1wiLFxuXHRcIi4vbXNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL21zLmpzXCIsXG5cdFwiLi9tcy1teVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbXMtbXkuanNcIixcblx0XCIuL21zLW15LmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9tcy1teS5qc1wiLFxuXHRcIi4vbXMuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL21zLmpzXCIsXG5cdFwiLi9tdFwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbXQuanNcIixcblx0XCIuL210LmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9tdC5qc1wiLFxuXHRcIi4vbXlcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL215LmpzXCIsXG5cdFwiLi9teS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbXkuanNcIixcblx0XCIuL25iXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9uYi5qc1wiLFxuXHRcIi4vbmIuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL25iLmpzXCIsXG5cdFwiLi9uZVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbmUuanNcIixcblx0XCIuL25lLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9uZS5qc1wiLFxuXHRcIi4vbmxcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL25sLmpzXCIsXG5cdFwiLi9ubC1iZVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbmwtYmUuanNcIixcblx0XCIuL25sLWJlLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9ubC1iZS5qc1wiLFxuXHRcIi4vbmwuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL25sLmpzXCIsXG5cdFwiLi9ublwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbm4uanNcIixcblx0XCIuL25uLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9ubi5qc1wiLFxuXHRcIi4vcGEtaW5cIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3BhLWluLmpzXCIsXG5cdFwiLi9wYS1pbi5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvcGEtaW4uanNcIixcblx0XCIuL3BsXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9wbC5qc1wiLFxuXHRcIi4vcGwuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3BsLmpzXCIsXG5cdFwiLi9wdFwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvcHQuanNcIixcblx0XCIuL3B0LWJyXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9wdC1ici5qc1wiLFxuXHRcIi4vcHQtYnIuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3B0LWJyLmpzXCIsXG5cdFwiLi9wdC5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvcHQuanNcIixcblx0XCIuL3JvXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9yby5qc1wiLFxuXHRcIi4vcm8uanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3JvLmpzXCIsXG5cdFwiLi9ydVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvcnUuanNcIixcblx0XCIuL3J1LmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9ydS5qc1wiLFxuXHRcIi4vc2RcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3NkLmpzXCIsXG5cdFwiLi9zZC5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvc2QuanNcIixcblx0XCIuL3NlXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9zZS5qc1wiLFxuXHRcIi4vc2UuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3NlLmpzXCIsXG5cdFwiLi9zaVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvc2kuanNcIixcblx0XCIuL3NpLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9zaS5qc1wiLFxuXHRcIi4vc2tcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3NrLmpzXCIsXG5cdFwiLi9zay5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvc2suanNcIixcblx0XCIuL3NsXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9zbC5qc1wiLFxuXHRcIi4vc2wuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3NsLmpzXCIsXG5cdFwiLi9zcVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvc3EuanNcIixcblx0XCIuL3NxLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9zcS5qc1wiLFxuXHRcIi4vc3JcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3NyLmpzXCIsXG5cdFwiLi9zci1jeXJsXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9zci1jeXJsLmpzXCIsXG5cdFwiLi9zci1jeXJsLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9zci1jeXJsLmpzXCIsXG5cdFwiLi9zci5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvc3IuanNcIixcblx0XCIuL3NzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9zcy5qc1wiLFxuXHRcIi4vc3MuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3NzLmpzXCIsXG5cdFwiLi9zdlwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvc3YuanNcIixcblx0XCIuL3N2LmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9zdi5qc1wiLFxuXHRcIi4vc3dcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3N3LmpzXCIsXG5cdFwiLi9zdy5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvc3cuanNcIixcblx0XCIuL3RhXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS90YS5qc1wiLFxuXHRcIi4vdGEuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3RhLmpzXCIsXG5cdFwiLi90ZVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdGUuanNcIixcblx0XCIuL3RlLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS90ZS5qc1wiLFxuXHRcIi4vdGV0XCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS90ZXQuanNcIixcblx0XCIuL3RldC5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdGV0LmpzXCIsXG5cdFwiLi90Z1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdGcuanNcIixcblx0XCIuL3RnLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS90Zy5qc1wiLFxuXHRcIi4vdGhcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3RoLmpzXCIsXG5cdFwiLi90aC5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdGguanNcIixcblx0XCIuL3RsLXBoXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS90bC1waC5qc1wiLFxuXHRcIi4vdGwtcGguanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3RsLXBoLmpzXCIsXG5cdFwiLi90bGhcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3RsaC5qc1wiLFxuXHRcIi4vdGxoLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS90bGguanNcIixcblx0XCIuL3RyXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS90ci5qc1wiLFxuXHRcIi4vdHIuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3RyLmpzXCIsXG5cdFwiLi90emxcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3R6bC5qc1wiLFxuXHRcIi4vdHpsLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS90emwuanNcIixcblx0XCIuL3R6bVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdHptLmpzXCIsXG5cdFwiLi90em0tbGF0blwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdHptLWxhdG4uanNcIixcblx0XCIuL3R6bS1sYXRuLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS90em0tbGF0bi5qc1wiLFxuXHRcIi4vdHptLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS90em0uanNcIixcblx0XCIuL3VnLWNuXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS91Zy1jbi5qc1wiLFxuXHRcIi4vdWctY24uanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3VnLWNuLmpzXCIsXG5cdFwiLi91a1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdWsuanNcIixcblx0XCIuL3VrLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS91ay5qc1wiLFxuXHRcIi4vdXJcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3VyLmpzXCIsXG5cdFwiLi91ci5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdXIuanNcIixcblx0XCIuL3V6XCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS91ei5qc1wiLFxuXHRcIi4vdXotbGF0blwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdXotbGF0bi5qc1wiLFxuXHRcIi4vdXotbGF0bi5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdXotbGF0bi5qc1wiLFxuXHRcIi4vdXouanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3V6LmpzXCIsXG5cdFwiLi92aVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdmkuanNcIixcblx0XCIuL3ZpLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS92aS5qc1wiLFxuXHRcIi4veC1wc2V1ZG9cIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3gtcHNldWRvLmpzXCIsXG5cdFwiLi94LXBzZXVkby5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUveC1wc2V1ZG8uanNcIixcblx0XCIuL3lvXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS95by5qc1wiLFxuXHRcIi4veW8uanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3lvLmpzXCIsXG5cdFwiLi96aC1jblwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvemgtY24uanNcIixcblx0XCIuL3poLWNuLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS96aC1jbi5qc1wiLFxuXHRcIi4vemgtaGtcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3poLWhrLmpzXCIsXG5cdFwiLi96aC1oay5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvemgtaGsuanNcIixcblx0XCIuL3poLXR3XCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS96aC10dy5qc1wiLFxuXHRcIi4vemgtdHcuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3poLXR3LmpzXCJcbn07XG5cblxuZnVuY3Rpb24gd2VicGFja0NvbnRleHQocmVxKSB7XG5cdHZhciBpZCA9IHdlYnBhY2tDb250ZXh0UmVzb2x2ZShyZXEpO1xuXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhpZCk7XG59XG5mdW5jdGlvbiB3ZWJwYWNrQ29udGV4dFJlc29sdmUocmVxKSB7XG5cdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8obWFwLCByZXEpKSB7XG5cdFx0dmFyIGUgPSBuZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiICsgcmVxICsgXCInXCIpO1xuXHRcdGUuY29kZSA9ICdNT0RVTEVfTk9UX0ZPVU5EJztcblx0XHR0aHJvdyBlO1xuXHR9XG5cdHJldHVybiBtYXBbcmVxXTtcbn1cbndlYnBhY2tDb250ZXh0LmtleXMgPSBmdW5jdGlvbiB3ZWJwYWNrQ29udGV4dEtleXMoKSB7XG5cdHJldHVybiBPYmplY3Qua2V5cyhtYXApO1xufTtcbndlYnBhY2tDb250ZXh0LnJlc29sdmUgPSB3ZWJwYWNrQ29udGV4dFJlc29sdmU7XG5tb2R1bGUuZXhwb3J0cyA9IHdlYnBhY2tDb250ZXh0O1xud2VicGFja0NvbnRleHQuaWQgPSBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUgc3luYyByZWN1cnNpdmUgXlxcXFwuXFxcXC8uKiRcIjsiLCJpbXBvcnQgcmVxdWVzdCBmcm9tICdzdXBlcmFnZW50JztcclxuXHJcbmNvbnN0IEFQSV9QUklDRVNfVVJMID0gJ2h0dHA6Ly90aS1ydWxlcy5vdmgvdGliaWEvYXBpL3ByaWNlcyc7XHJcblxyXG5leHBvcnQgY29uc3QgZ2V0SXRlbVByaWNlcyA9IGFzeW5jICgpID0+IHtcclxuICAgIGxldCByZXN1bHQgPSB7XHJcbiAgICAgICAgZGF0YTogW10sXHJcbiAgICAgICAgbWVzc2FnZTogJ0dlbmVyaWMgZXJyb3InLFxyXG4gICAgICAgIHN1Y2Nlc3M6IGZhbHNlXHJcbiAgICB9O1xyXG5cclxuICAgIGF3YWl0IHJlcXVlc3RcclxuICAgICAgICAuZ2V0KEFQSV9QUklDRVNfVVJMKVxyXG4gICAgICAgIC50aGVuKHJlcyA9PiB7XHJcbiAgICAgICAgICAgIGlmIChyZXMuc3RhdHVzQ29kZSA9PT0gMjAwKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGRhdGE6IHJlcy5ib2R5LFxyXG4gICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6ICdzdWNjZXNzJyxcclxuICAgICAgICAgICAgICAgICAgICBzdWNjZXNzOiB0cnVlXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgICAgIC5jYXRjaChlcnIgPT4ge1xyXG4gICAgICAgICAgICByZXN1bHQubWVzc2FnZSA9IGVycjtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ0Vycm9yIHdoZW4gY2FsbGluZyBpdGVtIHByaWNlcyBBUEknLCBlcnIpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgIHJldHVybiByZXN1bHQ7XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBnZXRJdGVtUHJpY2VzRmFrZSA9ICgpID0+IHtcclxuICAgIGNvbnN0IGpzb25EYXRhID0gJ1t7XCJpZFwiOjEwMDUyODksXCJ3b3JsZE5hbWVcIjpcIlNlY3VyYVwiLFwiY2hlY2tUaW1lXCI6XCIyMDE5LTAzLTAxVDIxOjI2OjE3WlwiLFwidmFsdWVcIjozMjk5OSxcIml0ZW1OYW1lXCI6XCJHb2xkIFRva2VuXCIsXCJvZmZlclR5cGVcIjpcInNlbGxcIixcIlR5cGVcIjowLFwiQ291bnRcIjoxfSx7XCJpZFwiOjEwMDUxNDksXCJ3b3JsZE5hbWVcIjpcIlNlY3VyYVwiLFwiY2hlY2tUaW1lXCI6XCIyMDE5LTAzLTAxVDIxOjI0OjAyWlwiLFwidmFsdWVcIjozNjUwLFwiaXRlbU5hbWVcIjpcIlNpbGVuY2VyIENsYXdzXCIsXCJvZmZlclR5cGVcIjpcInNlbGxcIixcIlR5cGVcIjoxLFwiQ291bnRcIjoyNX0se1wiaWRcIjoxMDA1MTQ3LFwid29ybGROYW1lXCI6XCJTZWN1cmFcIixcImNoZWNrVGltZVwiOlwiMjAxOS0wMy0wMVQyMToyNDowMlpcIixcInZhbHVlXCI6MjY5OSxcIml0ZW1OYW1lXCI6XCJSb3BlIEJlbHRcIixcIm9mZmVyVHlwZVwiOlwic2VsbFwiLFwiVHlwZVwiOjEsXCJDb3VudFwiOjI1fSx7XCJpZFwiOjEwMDUxNTEsXCJ3b3JsZE5hbWVcIjpcIlNlY3VyYVwiLFwiY2hlY2tUaW1lXCI6XCIyMDE5LTAzLTAxVDIxOjI0OjAyWlwiLFwidmFsdWVcIjoxNTAwLFwiaXRlbU5hbWVcIjpcIlNvbWUgR3JpbWVsZWVjaCBXaW5nc1wiLFwib2ZmZXJUeXBlXCI6XCJzZWxsXCIsXCJUeXBlXCI6MSxcIkNvdW50XCI6NX0se1wiaWRcIjoxMDA1MTc1LFwid29ybGROYW1lXCI6XCJTZWN1cmFcIixcImNoZWNrVGltZVwiOlwiMjAxOS0wMy0wMVQyMToyNDowNVpcIixcInZhbHVlXCI6MjA5NyxcIml0ZW1OYW1lXCI6XCJQcm90ZWN0aXZlIENoYXJtXCIsXCJvZmZlclR5cGVcIjpcInNlbGxcIixcIlR5cGVcIjoyLFwiQ291bnRcIjoyMH0se1wiaWRcIjoxMDA1MTQ4LFwid29ybGROYW1lXCI6XCJTZWN1cmFcIixcImNoZWNrVGltZVwiOlwiMjAxOS0wMy0wMVQyMToyNDowMlpcIixcInZhbHVlXCI6NDIwMCxcIml0ZW1OYW1lXCI6XCJTYWJyZXRvb3RoXCIsXCJvZmZlclR5cGVcIjpcInNlbGxcIixcIlR5cGVcIjoyLFwiQ291bnRcIjoyNX0se1wiaWRcIjoxMDA1MjE2LFwid29ybGROYW1lXCI6XCJTZWN1cmFcIixcImNoZWNrVGltZVwiOlwiMjAxOS0wMy0wMVQyMToyNTowN1pcIixcInZhbHVlXCI6MTE1MCxcIml0ZW1OYW1lXCI6XCJWZXhjbGF3IFRhbG9uXCIsXCJvZmZlclR5cGVcIjpcInNlbGxcIixcIlR5cGVcIjoyLFwiQ291bnRcIjo1fSx7XCJpZFwiOjEwMDUxODEsXCJ3b3JsZE5hbWVcIjpcIlNlY3VyYVwiLFwiY2hlY2tUaW1lXCI6XCIyMDE5LTAzLTAxVDIxOjI0OjA1WlwiLFwidmFsdWVcIjoxODAwLFwiaXRlbU5hbWVcIjpcIlZhbXBpcmUgVGVldGhcIixcIm9mZmVyVHlwZVwiOlwic2VsbFwiLFwiVHlwZVwiOjMsXCJDb3VudFwiOjI1fSx7XCJpZFwiOjEwMDUxMTIsXCJ3b3JsZE5hbWVcIjpcIlNlY3VyYVwiLFwiY2hlY2tUaW1lXCI6XCIyMDE5LTAzLTAxVDIxOjIzOjAyWlwiLFwidmFsdWVcIjo2Mzk5LFwiaXRlbU5hbWVcIjpcIkJsb29keSBQaW5jZXJzXCIsXCJvZmZlclR5cGVcIjpcInNlbGxcIixcIlR5cGVcIjozLFwiQ291bnRcIjoxNX0se1wiaWRcIjoxMDA1MTcyLFwid29ybGROYW1lXCI6XCJTZWN1cmFcIixcImNoZWNrVGltZVwiOlwiMjAxOS0wMy0wMVQyMToyNDowNVpcIixcInZhbHVlXCI6MTI2OTgsXCJpdGVtTmFtZVwiOlwiUGllY2Ugb2YgRGVhZCBCcmFpblwiLFwib2ZmZXJUeXBlXCI6XCJzZWxsXCIsXCJUeXBlXCI6MyxcIkNvdW50XCI6NX1dJztcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgZGF0YTogSlNPTi5wYXJzZShqc29uRGF0YSksXHJcbiAgICAgICAgbWVzc2FnZTogJycsXHJcbiAgICAgICAgc3VjY2VzczogdHJ1ZSxcclxuICAgICAgICBzdGF0dXM6IDIwMFxyXG4gICAgfTtcclxufSIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBBcHBIZWFkZXIgZnJvbSAnLi9BcHBIZWFkZXIuanN4JztcclxuaW1wb3J0IEFwcEZvb3RlciBmcm9tICcuL0FwcEZvb3Rlci5qc3gnO1xyXG5pbXBvcnQgJy4uLy4uL3N0eWxlcy9hcHAuY3NzJztcclxuaW1wb3J0IEltYnVJdGVtQ29zdEFuYWx5emVyIGZyb20gJy4uL2ltYnUvSW1idUl0ZW1Db3N0QW5hbHl6ZXIuanN4JztcclxuXHJcbmNvbnN0IEFwcCA9ICgpID0+XHJcbiAgICA8PlxyXG4gICAgICAgIDxBcHBIZWFkZXIgLz5cclxuICAgICAgICA8SW1idUl0ZW1Db3N0QW5hbHl6ZXIgLz5cclxuICAgICAgICA8QXBwRm9vdGVyIC8+XHJcbiAgICA8Lz5cclxuO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQXBwOyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcblxyXG5jb25zdCBBcHBGb290ZXIgPSAoKSA9PlxyXG4gICAgPGZvb3Rlcj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvb3RlciBuYXZiYXIgbmF2YmFyLWxpZ2h0IGJnLWxpZ2h0IGZpeGVkLWJvdHRvbVwiPlxyXG4gICAgICAgICAgICB7KG5ldyBEYXRlKCkpLmdldEZ1bGxZZWFyKCl9ICZjb3B5OyBBM2ZcclxuICAgICAgICA8L2Rpdj5cclxuICAgIDwvZm9vdGVyPlxyXG47XHJcblxyXG5leHBvcnQgZGVmYXVsdCBBcHBGb290ZXI7IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgTmF2YmFyIH0gZnJvbSAncmVhY3QtYm9vdHN0cmFwJztcclxuXHJcbmNvbnN0IEFwcEhlYWRlciA9ICgpID0+XHJcbiAgICA8TmF2YmFyIGJnPVwiZGFya1wiIHZhcmlhbnQ9XCJkYXJrXCIgZXhwYW5kPVwibGdcIj5cclxuICAgICAgICA8TmF2YmFyLkJyYW5kPkltYnUgSXRlbSBDb3N0IEFuYWx5emVyPC9OYXZiYXIuQnJhbmQ+XHJcbiAgICA8L05hdmJhcj5cclxuO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQXBwSGVhZGVyOyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IEFwcENvbnRleHQgfSBmcm9tICcuLi8uLi9jb250ZXh0L0FwcENvbnRleHQnO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHdpdGhBcHBDb250ZXh0KENvbXBvbmVudCkge1xyXG4gICAgcmV0dXJuIGZ1bmN0aW9uIFdyYXBwZXJDb21wb25lbnQocHJvcHMpIHtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8QXBwQ29udGV4dC5Db25zdW1lcj5cclxuICAgICAgICAgICAgICAgIHtjdHggPT4gPENvbXBvbmVudCAgey4uLnByb3BzfSBjb250ZXh0PXtjdHh9IC8+fVxyXG4gICAgICAgICAgICA8L0FwcENvbnRleHQuQ29uc3VtZXI+XHJcbiAgICAgICAgKTtcclxuICAgIH07XHJcbn0iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBDb2wgfSBmcm9tICdyZWFjdC1ib290c3RyYXAnO1xyXG5cclxuaW1wb3J0IEl0ZW1JbWFnZSBmcm9tICcuL0l0ZW1JbWFnZS5qc3gnO1xyXG5cclxuY29uc3QgSW1idUl0ZW0gPSAoeyBpdGVtTmFtZSwgaXRlbUNvdW50IH0pID0+IHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPENvbCB4cz0nMScgc209JzInPlxyXG4gICAgICAgICAgICA8SXRlbUltYWdlIGl0ZW1OYW1lPXtpdGVtTmFtZX0gLz5cclxuICAgICAgICAgICAgPHNwYW4+PHNtYWxsPntpdGVtQ291bnR9PC9zbWFsbD48L3NwYW4+XHJcbiAgICAgICAgPC9Db2w+XHJcbiAgICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBJbWJ1SXRlbTsiLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBJZiwgVGhlbiB9IGZyb20gJ3JlYWN0LWlmLWVsc2VpZi1lbHNlLXJlbmRlcic7XHJcbmltcG9ydCBfIGZyb20gJ2xvZGFzaCc7XHJcbmltcG9ydCBtb21lbnQgZnJvbSAnbW9tZW50JztcclxuaW1wb3J0IHsgQnV0dG9uVG9vbGJhciwgQnV0dG9uIH0gZnJvbSAncmVhY3QtYm9vdHN0cmFwJztcclxuXHJcbmltcG9ydCB7IEFwcENvbnRleHQgfSBmcm9tICcuLi8uLi9jb250ZXh0L0FwcENvbnRleHQnO1xyXG5cclxuaW1wb3J0IEltYnVMb2FkaW5nT3ZlcmxheSBmcm9tICcuL0ltYnVMb2FkaW5nT3ZlcmxheS5qc3gnO1xyXG5pbXBvcnQgeyBUb29sYmFyIH0gZnJvbSAnLi9Ub29sYmFyLmpzeCc7XHJcbmltcG9ydCB7IFByaWNlc1N0YXR1c0luZm8gfSBmcm9tICcuLi9wcmljZXMvUHJpY2VzU3RhdHVzSW5mby5qc3gnO1xyXG5pbXBvcnQgSW1idWVtZW50cyBmcm9tICcuL0ltYnVlbWVudHMuanN4JztcclxuaW1wb3J0IHsgZ2V0QXJyYXlFbGVtZW50SW5mbyB9IGZyb20gJy4uLy4uL3V0aWxpdGllcyc7XHJcbmltcG9ydCB7IGRhdGVUaW1lRm9ybWF0dGVyLCBkZWZhdWx0RGF0ZVRpbWVGb3JtYXQgfSBmcm9tICcuLi8uLi9mb3JtYXR0ZXJzJztcclxuaW1wb3J0IHsgZ2V0SXRlbVByaWNlcywgZ2V0SXRlbVByaWNlc0Zha2UgfSBmcm9tICcuLi8uLi9hcGkvcHJpY2VzQXBpJztcclxuaW1wb3J0IGltYnVlbWVudE9wdGlvbnMgZnJvbSAnLi4vLi4vLi4vY29uZmlnL2ltYnVlbWVudE9wdGlvbnMuanNvbic7XHJcblxyXG5jb25zdCBMT0NBTFNUT1JBR0VfSVRFTVBSSUNFU19LRVkgPSAnSXRlbVByaWNlcyc7XHJcblxyXG5jbGFzcyBJbWJ1SXRlbUNvc3RBbmFseXplciBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgICAgIHN1cGVyKHByb3BzKTtcclxuICAgICAgICBcclxuICAgICAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICAgICAgICBpc0xvYWRpbmdEYXRhOiBmYWxzZSxcclxuICAgICAgICAgICAgaXRlbVByaWNlczogW10sXHJcbiAgICAgICAgICAgIGltYnVlbWVudE9wdGlvbnM6IGltYnVlbWVudE9wdGlvbnMgfHwgW11cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBzZXRTdGF0ZUFzeW5jKHN0YXRlKSB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoc3RhdGUsIHJlc29sdmUpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgc2F2ZUl0ZW1QcmljZXMgPSAoaXRlbVByaWNlcykgPT4ge1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGVBc3luYyh7IGl0ZW1QcmljZXM6IGl0ZW1QcmljZXMgfSk7XHJcbiAgICAgICAgY29uc3QgZXhwaXJlc0F0ID0gZGF0ZVRpbWVGb3JtYXR0ZXIobW9tZW50KCkuYWRkKDEsICdob3VycycpKTtcclxuICAgICAgICB3aW5kb3cubG9jYWxTdG9yYWdlLnNldEl0ZW0oTE9DQUxTVE9SQUdFX0lURU1QUklDRVNfS0VZLCBKU09OLnN0cmluZ2lmeSh7IGRhdGE6IGl0ZW1QcmljZXMsIGV4cGlyZXNBdDogZXhwaXJlc0F0IH0pKTtcclxuICAgIH1cclxuICAgIGdldFByaWNlc0Zyb21BcGkgPSAoKSA9PiB7XHJcbiAgICAgICAgLy9jb25zdCByZXN1bHQgPSBhd2FpdCBnZXRJdGVtUHJpY2VzKCk7XHJcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gZ2V0SXRlbVByaWNlc0Zha2UoKTtcclxuICAgICAgICBpZiAocmVzdWx0LnN1Y2Nlc3MpIHtcclxuICAgICAgICAgICAgdGhpcy5zYXZlSXRlbVByaWNlcyhyZXN1bHQuZGF0YSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgbG9hZEl0ZW1QcmljZXMgPSBhc3luYyAoKSA9PiB7XHJcbiAgICAgICAgY29uc3QgbG9jYWxTdG9yYWdlSXRlbVByaWNlcyA9IHdpbmRvdy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbShMT0NBTFNUT1JBR0VfSVRFTVBSSUNFU19LRVkpO1xyXG4gICAgICAgIGlmICghbG9jYWxTdG9yYWdlSXRlbVByaWNlcykge1xyXG4gICAgICAgICAgICB0aGlzLmdldFByaWNlc0Zyb21BcGkoKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBjb25zdCBpdGVtUHJpY2VzTG9jYWxDYWNoZSA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlSXRlbVByaWNlcyk7XHJcbiAgICAgICAgICAgIGNvbnN0IGV4cGlyZXNBdCA9IG1vbWVudChpdGVtUHJpY2VzTG9jYWxDYWNoZS5leHBpcmVzQXQsIGRlZmF1bHREYXRlVGltZUZvcm1hdCk7XHJcbiAgICAgICAgICAgIGlmIChleHBpcmVzQXQuaXNWYWxpZCgpICYmIG1vbWVudCgpLmlzQmVmb3JlKGV4cGlyZXNBdCkpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2F2ZUl0ZW1QcmljZXMoaXRlbVByaWNlc0xvY2FsQ2FjaGUuZGF0YSk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmdldFByaWNlc0Zyb21BcGkoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGNoYW5nZUl0ZW1Qcm9wID0gKGl0ZW1OYW1lLCBwcm9wLCB2YWx1ZSkgPT4ge1xyXG4gICAgICAgIGNvbnN0IGl0ZW1QcmljZXMgPSB0aGlzLnN0YXRlLml0ZW1QcmljZXM7XHJcbiAgICAgICAgY29uc3QgaXRlbUluZm8gPSBnZXRBcnJheUVsZW1lbnRJbmZvKGl0ZW1QcmljZXMsICdpdGVtTmFtZScsIGl0ZW1OYW1lKTtcclxuXHJcbiAgICAgICAgaWYgKCEhaXRlbUluZm8gJiYgaXRlbUluZm8uZWxlbWVudFtwcm9wXSAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIGl0ZW1JbmZvLmVsZW1lbnRbcHJvcF0gPSB2YWx1ZTtcclxuICAgICAgICAgICAgT2JqZWN0LmFzc2lnbihpdGVtUHJpY2VzW2l0ZW1JbmZvLmVsZW1lbnRJbmRleF0sIGl0ZW1JbmZvLmVsZW1lbnQpO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGl0ZW1QcmljZXMgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmVsb2FkRGF0YSA9IGFzeW5jICgpID0+IHtcclxuICAgICAgICB0aGlzLnNldFN0YXRlQXN5bmMoeyBpc0xvYWRpbmdEYXRhOiB0cnVlIH0pO1xyXG4gICAgICAgIGF3YWl0IHRoaXMubG9hZEl0ZW1QcmljZXMoKTtcclxuICAgICAgICB0aGlzLnNldFN0YXRlQXN5bmMoeyBpc0xvYWRpbmdEYXRhOiBmYWxzZSB9KTtcclxuICAgIH1cclxuICAgIGFzeW5jIGNvbXBvbmVudERpZE1vdW50KCkge1xyXG4gICAgICAgIGF3YWl0IHRoaXMucmVsb2FkRGF0YSgpO1xyXG4gICAgfVxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIGNvbnN0IHsgaXNMb2FkaW5nRGF0YSwgaXRlbVByaWNlcywgaW1idWVtZW50T3B0aW9ucyB9ID0gdGhpcy5zdGF0ZTtcclxuICAgICAgICBjb25zdCBjb250ZXh0ID0ge1xyXG4gICAgICAgICAgICAvL3Byb3BzXHJcbiAgICAgICAgICAgIGlzTG9hZGluZ0RhdGE6IGlzTG9hZGluZ0RhdGEsXHJcbiAgICAgICAgICAgIGl0ZW1QcmljZXM6IGl0ZW1QcmljZXMsXHJcbiAgICAgICAgICAgIGltYnVlbWVudE9wdGlvbnM6IGltYnVlbWVudE9wdGlvbnMsXHJcbiAgICAgICAgICAgIC8vZnVuY3Rpb25zXHJcbiAgICAgICAgICAgIGNoYW5nZUl0ZW1Qcm9wOiB0aGlzLmNoYW5nZUl0ZW1Qcm9wXHJcbiAgICAgICAgfTtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8QXBwQ29udGV4dC5Qcm92aWRlciB2YWx1ZT17Y29udGV4dH0+XHJcbiAgICAgICAgICAgICAgICA8SW1idUxvYWRpbmdPdmVybGF5IGFjdGl2ZT17aXNMb2FkaW5nRGF0YX0+XHJcbiAgICAgICAgICAgICAgICAgICAgPFByaWNlc1N0YXR1c0luZm8gLz5cclxuICAgICAgICAgICAgICAgICAgICA8SWYgY29uZGl0aW9uPXtpdGVtUHJpY2VzLmxlbmd0aCA+IDAgJiYgaW1idWVtZW50T3B0aW9ucy5sZW5ndGggPiAwfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFRoZW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VG9vbGJhcj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uVG9vbGJhcj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiB2YXJpYW50PVwicHJpbWFyeVwiIHNpemU9XCJsZ1wiIHN0eWxlPXt7IG1hcmdpbkxlZnQ6ICcxMHB4JyB9fSBvbkNsaWNrPXt0aGlzLnJlbG9hZERhdGF9PkxvYWQgRGVmYXVsdHM8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0J1dHRvblRvb2xiYXI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1Rvb2xiYXI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SW1idWVtZW50cyAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L1RoZW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9JZj5cclxuICAgICAgICAgICAgICAgIDwvSW1idUxvYWRpbmdPdmVybGF5PlxyXG4gICAgICAgICAgICA8L0FwcENvbnRleHQuUHJvdmlkZXI+XHJcbiAgICAgICAgKTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgSW1idUl0ZW1Db3N0QW5hbHl6ZXI7IiwiaW1wb3J0IFJlYWN0LCB7IHVzZUNvbnRleHQgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBMb2FkaW5nT3ZlcmxheSBmcm9tICdyZWFjdC1sb2FkaW5nLW92ZXJsYXknO1xyXG5pbXBvcnQgTG9hZGVyIGZyb20gJ3JlYWN0LXNwaW5uZXJzL0NpcmNsZUxvYWRlcic7XHJcblxyXG5pbXBvcnQgeyBBcHBDb250ZXh0IH0gZnJvbSAnLi4vLi4vY29udGV4dC9BcHBDb250ZXh0JztcclxuXHJcbmNvbnN0IEltYnVMb2FkaW5nT3ZlcmxheSA9IChwcm9wcykgPT4ge1xyXG4gICAgY29uc3QgY29udGV4dCA9IHVzZUNvbnRleHQoQXBwQ29udGV4dCk7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxMb2FkaW5nT3ZlcmxheVxyXG4gICAgICAgICAgICBzcGlubmVyPXs8TG9hZGVyIC8+fVxyXG4gICAgICAgICAgICB0ZXh0PSdGZXRjaGluZyBJdGVtIFByaWNlcy4uLidcclxuICAgICAgICAgICAgYWN0aXZlPXtjb250ZXh0LmlzTG9hZGluZ0RhdGF9XHJcbiAgICAgICAgICAgIHN0eWxlcz17e1xyXG4gICAgICAgICAgICAgICAgd3JhcHBlcjoge1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbkJvdHRvbTogJzMwcHgnLFxyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbkxlZnQ6ICc1cHgnXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH19XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgICB7cHJvcHMuY2hpbGRyZW59XHJcbiAgICAgICAgPC9Mb2FkaW5nT3ZlcmxheT5cclxuICAgICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEltYnVMb2FkaW5nT3ZlcmxheTsiLCJpbXBvcnQgUmVhY3QsIHsgdXNlQ29udGV4dCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgQ2FyZCB9IGZyb20gJ3JlYWN0LWJvb3RzdHJhcCc7XHJcblxyXG5pbXBvcnQgeyBBcHBDb250ZXh0IH0gZnJvbSAnLi4vLi4vY29udGV4dC9BcHBDb250ZXh0JztcclxuXHJcbmltcG9ydCAnLi4vLi4vc3R5bGVzL2ltYnUvSW1idVR5cGUuY3NzJztcclxuaW1wb3J0IEltYnVJdGVtUHJpY2VFZGl0b3IgZnJvbSAnLi9pbWJ1SXRlbURldGFpbHMvSW1idUl0ZW1QcmljZUVkaXRvci5qc3gnO1xyXG5pbXBvcnQgSW1idUNvc3RBbmFseXNpc1Jlc3VsdCBmcm9tICcuL2FuYWx5c2lzUmVzdWx0L0ltYnVDb3N0QW5hbHlzaXNSZXN1bHQuanN4JztcclxuXHJcbmV4cG9ydCBjb25zdCBJbWJ1VHlwZUNhcmQgPSAoeyBpbWJ1VHlwZSB9KSA9PiB7XHJcbiAgICBjb25zdCBjb250ZXh0ID0gdXNlQ29udGV4dChBcHBDb250ZXh0KTtcclxuICAgIGNvbnN0IGl0ZW1QcmljZXMgPSBjb250ZXh0Lml0ZW1QcmljZXMuZmlsdGVyKHggPT4geC5UeXBlID09IGltYnVUeXBlLmlkIHx8IHguaXRlbU5hbWUgPT09ICdHb2xkIFRva2VuJyk7XHJcbiAgICBjb25zdCBpbWJ1ZW1lbnRPcHRpb25zID0gY29udGV4dC5pbWJ1ZW1lbnRPcHRpb25zLmZpbHRlcih4ID0+IHgudHlwZSA9PSBpbWJ1VHlwZS5pZClbMF0uaXRlbXM7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxDYXJkIGNsYXNzTmFtZT1cInRleHQtY2VudGVyIGltYnUtdHlwZS1jYXJkXCIgYmc9XCJsaWdodFwiPlxyXG4gICAgICAgICAgICA8Q2FyZC5IZWFkZXI+XHJcbiAgICAgICAgICAgICAgICA8Q2FyZC5JbWcgdmFyaWFudD0nbGVmdCcgc3JjPXtgaW1hZ2VzLyR7aW1idVR5cGUuaWR9LmdpZmB9IHN0eWxlPXt7IGZsb2F0OiAnbGVmdCcgfX0gLz5cclxuICAgICAgICAgICAgICAgIDxzcGFuPjxzdHJvbmc+e2ltYnVUeXBlLm5hbWV9PC9zdHJvbmc+PC9zcGFuPlxyXG4gICAgICAgICAgICA8L0NhcmQuSGVhZGVyPlxyXG4gICAgICAgICAgICA8Q2FyZC5Cb2R5PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBtYXJnaW5Cb3R0b206ICcxNXB4JyB9fT5cclxuICAgICAgICAgICAgICAgICAgICA8SW1idUNvc3RBbmFseXNpc1Jlc3VsdCBpdGVtUHJpY2VzPXtpdGVtUHJpY2VzfSBpbWJ1ZW1lbnRPcHRpb25zPXtpbWJ1ZW1lbnRPcHRpb25zfSAvPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxJbWJ1SXRlbVByaWNlRWRpdG9yIGl0ZW1QcmljZXM9e2l0ZW1QcmljZXN9IGltYnVlbWVudE9wdGlvbnM9e2ltYnVlbWVudE9wdGlvbnN9IC8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9DYXJkLkJvZHk+XHJcbiAgICAgICAgPC9DYXJkPlxyXG4gICAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgSW1idVR5cGVDYXJkOyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IENvbnRhaW5lciwgUm93LCBDb2wgfSBmcm9tICdyZWFjdC1ib290c3RyYXAnO1xyXG5cclxuaW1wb3J0ICcuLi8uLi9zdHlsZXMvaW1idS9JbWJ1ZW1lbnRzLmNzcyc7XHJcbmltcG9ydCBJbWJ1VHlwZUNhcmQgZnJvbSAnLi9JbWJ1VHlwZUNhcmQuanN4JztcclxuaW1wb3J0IHsgaW1idVR5cGVzIH0gZnJvbSAnLi4vLi4vdHlwZXMnO1xyXG5cclxuZXhwb3J0IGNvbnN0IEltYnVlbWVudHMgPSAoKSA9PlxyXG4gICAgPENvbnRhaW5lciBjbGFzc05hbWU9J2ltYnVlbWVudHMtd3JhcHBlcic+XHJcbiAgICAgICAgPFJvdz5cclxuICAgICAgICAgICAge09iamVjdC52YWx1ZXMoaW1idVR5cGVzKS5tYXAoaW1idVR5cGUgPT4gXHJcbiAgICAgICAgICAgICAgICA8Q29sIGtleT17aW1idVR5cGUuaWR9IHN4PXs2fSBzbT17eyBzcGFuOiAxMCwgb2Zmc2V0OiAxIH19IG1kPXt7IHNwYW46IDcsIG9mZnNldDogMCB9fSBsZz17eyBzcGFuOiA2LCBvZmZzZXQ6IDAgfX0geGw9e3sgc3BhbjogNSwgb2Zmc2V0OiAwIH19PlxyXG4gICAgICAgICAgICAgICAgICAgIDxJbWJ1VHlwZUNhcmQgaW1idVR5cGU9e2ltYnVUeXBlfSAvPlxyXG4gICAgICAgICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICAgICl9XHJcbiAgICAgICAgPC9Sb3c+XHJcbiAgICA8L0NvbnRhaW5lcj5cclxuO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgSW1idWVtZW50czsiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBnZXRJdGVtSW1hZ2VJZCB9IGZyb20gJy4uLy4uL3V0aWxpdGllcyc7XHJcblxyXG5leHBvcnQgY29uc3QgSXRlbUltYWdlID0gKHsgaXRlbU5hbWUsIGltYWdlVGl0bGUgfSkgPT4ge1xyXG4gICAgY29uc3QgaW1hZ2VJZCA9IGdldEl0ZW1JbWFnZUlkKGl0ZW1OYW1lKTtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPHNwYW4gdGl0bGU9e2Ake2ltYWdlVGl0bGUgfHwgaXRlbU5hbWV9YH0+XHJcbiAgICAgICAgICAgIDxhIGhyZWY9XCIjXCIgb25DbGljaz17KGUpID0+IHsgZS5wcmV2ZW50RGVmYXVsdCgpOyB9fT48aW1nIHNyYz17YGltYWdlcy8ke2ltYWdlSWR9LmdpZmB9IC8+PC9hPlxyXG4gICAgICAgIDwvc3Bhbj5cclxuICAgICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEl0ZW1JbWFnZTsiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5cclxuZXhwb3J0IGNvbnN0IFRvb2xiYXIgPSAocHJvcHMpID0+XHJcbiAgICA8ZGl2IHN0eWxlPXt7IG1hcmdpbkJvdHRvbTogJzEwcHgnLCBqdXN0aWZ5Q29udGVudDogJ2NlbnRlcicsIGRpc3BsYXk6ICdmbGV4JyB9fT5cclxuICAgICAgICB7cHJvcHMuY2hpbGRyZW59XHJcbiAgICA8L2Rpdj5cclxuO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgVG9vbGJhcjsiLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBJZiwgVGhlbiB9IGZyb20gJ3JlYWN0LWlmLWVsc2VpZi1lbHNlLXJlbmRlcic7XHJcbmltcG9ydCBfIGZyb20gJ2xvZGFzaCc7XHJcbmltcG9ydCB7IEJ1dHRvblRvb2xiYXIsIEJ1dHRvbiAgfSBmcm9tICdyZWFjdC1ib290c3RyYXAnO1xyXG5pbXBvcnQgQ29sbGFwc2UgZnJvbSAncmVhY3QtYm9vdHN0cmFwL0NvbGxhcHNlJztcclxuXHJcbmltcG9ydCB7IHdpdGhBcHBDb250ZXh0IH0gZnJvbSAnLi4vLi4vaG9jL3dpdGhBcHBDb250ZXh0JztcclxuXHJcbmltcG9ydCB7IGNhbGN1bGF0ZUltYnVJdGVtUHJpY2UsIHN1bUltYnVJdGVtUHJpY2VzIH0gZnJvbSAnLi4vLi4vLi4vdXRpbGl0aWVzJztcclxuaW1wb3J0IHsgUHJpY2VzQWxlcnQgfSBmcm9tICcuLi8uLi9wcmljZXMvYWxlcnRzL1ByaWNlc0FsZXJ0LmpzeCc7XHJcbmltcG9ydCBUb29sYmFyIGZyb20gJy4uL1Rvb2xiYXIuanN4JztcclxuaW1wb3J0IEltYnVDb3N0QW5hbHlzaXNSZXN1bHREZXRhaWxzIGZyb20gJy4vSW1idUNvc3RBbmFseXNpc1Jlc3VsdERldGFpbHMuanN4JztcclxuaW1wb3J0IEltYnVDb3N0QW5hbHlzaXNSZXN1bHRJdGVtIGZyb20gJy4vSW1idUNvc3RBbmFseXNpc1Jlc3VsdEl0ZW0uanN4JztcclxuXHJcbmV4cG9ydCBjbGFzcyBJbWJ1Q29zdEFuYWx5c2lzUmVzdWx0IGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICAgIHN0YXRlID0ge1xyXG4gICAgICAgIHNob3dEZXRhaWxzOiBmYWxzZVxyXG4gICAgfVxyXG4gICAgY2FsY3VsYXRlT3B0aW9uID0gKGl0ZW1QcmljZXMsIGl0ZW1TZXQpID0+IHtcclxuICAgICAgICBsZXQgc2VsZWN0ZWRQcmljZXMgPSBbXTtcclxuICAgICAgICBPYmplY3QuZW50cmllcyhpdGVtU2V0KS5mb3JFYWNoKChbaXRlbU5hbWUsIGNvdW50XSkgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBpdGVtUHJpY2UgPSBfLmZpbmQoaXRlbVByaWNlcywgeyBpdGVtTmFtZSB9KTtcclxuICAgICAgICAgICAgaWYgKGl0ZW1QcmljZSkge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgaXRlbVByaWNlSW5mbyA9IHtcclxuICAgICAgICAgICAgICAgICAgICBpdGVtTmFtZTogaXRlbVByaWNlLml0ZW1OYW1lLFxyXG4gICAgICAgICAgICAgICAgICAgIENvdW50OiBpdGVtUHJpY2UuQ291bnQsXHJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU6IGl0ZW1QcmljZS52YWx1ZSxcclxuICAgICAgICAgICAgICAgICAgICBwcmljZTogY2FsY3VsYXRlSW1idUl0ZW1QcmljZShpdGVtUHJpY2UudmFsdWUsIGNvdW50KVxyXG4gICAgICAgICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoaXRlbU5hbWUgPT09ICdHb2xkIFRva2VuJykge1xyXG4gICAgICAgICAgICAgICAgICAgIGl0ZW1QcmljZUluZm8uQ291bnQgPSBjb3VudDtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBzZWxlY3RlZFByaWNlcyA9IFsuLi5zZWxlY3RlZFByaWNlcywgaXRlbVByaWNlSW5mb107XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgICByZXR1cm4geyBpdGVtU2V0LCB0b3RhbFByaWNlOiBzdW1JbWJ1SXRlbVByaWNlcyhzZWxlY3RlZFByaWNlcykgfTtcclxuICAgIH1cclxuICAgIGNhbGN1bGF0ZU9wdGlvbnMgPSAoaW1idWVtZW50T3B0aW9ucywgaXRlbVByaWNlcykgPT4ge1xyXG4gICAgICAgIGxldCByZXN1bHRzID0gW107XHJcbiAgICAgICAgaW1idWVtZW50T3B0aW9ucy5mb3JFYWNoKGl0ZW1TZXQgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCByZXN1bHQgPSB0aGlzLmNhbGN1bGF0ZU9wdGlvbihpdGVtUHJpY2VzLCBpdGVtU2V0KTtcclxuICAgICAgICAgICAgcmVzdWx0cyA9IFsuLi5yZXN1bHRzLCByZXN1bHRdO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHJldHVybiByZXN1bHRzO1xyXG4gICAgfVxyXG4gICAgYW5hbHl6ZU9wdGlvbnMgPSAoaW1idWVtZW50T3B0aW9ucywgaXRlbVByaWNlcykgPT4ge1xyXG4gICAgICAgIGNvbnN0IGNhbGN1bGF0ZWRPcHRpb25zID0gdGhpcy5jYWxjdWxhdGVPcHRpb25zKGltYnVlbWVudE9wdGlvbnMsIGl0ZW1QcmljZXMpO1xyXG4gICAgICAgIGNvbnN0IGJlc3RPcHRpb24gPSBfLm1pbkJ5KGNhbGN1bGF0ZWRPcHRpb25zLCAndG90YWxQcmljZScpO1xyXG4gICAgICAgIHJldHVybiB7IGNhbGN1bGF0ZWRPcHRpb25zLCBiZXN0T3B0aW9uIH07XHJcbiAgICB9XHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgY29uc3QgeyBzaG93RGV0YWlscyB9ID0gdGhpcy5zdGF0ZTtcclxuICAgICAgICBjb25zdCB7IGltYnVlbWVudE9wdGlvbnMsIGl0ZW1QcmljZXMgfSA9IHRoaXMucHJvcHM7XHJcbiAgICAgICAgY29uc3QgeyBjYWxjdWxhdGVkT3B0aW9ucywgYmVzdE9wdGlvbiB9ID0gdGhpcy5hbmFseXplT3B0aW9ucyhpbWJ1ZW1lbnRPcHRpb25zLCBpdGVtUHJpY2VzKTtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgICAgPFByaWNlc0FsZXJ0IHZhcmlhbnQ9J3N1Y2Nlc3MnIGhlYWRpbmc9J0NoZWFwZXN0IG9wdGlvbic+XHJcbiAgICAgICAgICAgICAgICAgICAgPEltYnVDb3N0QW5hbHlzaXNSZXN1bHRJdGVtIGNhbGN1bGF0ZWRPcHRpb249e2Jlc3RPcHRpb259Lz5cclxuICAgICAgICAgICAgICAgICAgICA8SWYgY29uZGl0aW9uPXshIWNhbGN1bGF0ZWRPcHRpb25zICYmIGNhbGN1bGF0ZWRPcHRpb25zLmxlbmd0aCA+IDB9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8VGhlbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUb29sYmFyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b25Ub29sYmFyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcmlhLWNvbnRyb2xzPVwiaW1idS1jb3N0LWFuYWx5c2lzLXJlc3VsdC1kZXRhaWxzXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFyaWEtZXhwYW5kZWQ9e3Nob3dEZXRhaWxzfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyaWFudD1cInN1Y2Nlc3NcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2l6ZT1cInNtXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHRoaXMuc2V0U3RhdGUoeyBzaG93RGV0YWlsczogIXNob3dEZXRhaWxzIH0pfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBEZXRhaWxzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uVG9vbGJhcj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvVG9vbGJhcj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDb2xsYXBzZSBpbj17dGhpcy5zdGF0ZS5zaG93RGV0YWlsc30+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBpZD1cImltYnUtY29zdC1hbmFseXNpcy1yZXN1bHQtZGV0YWlsc1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SW1idUNvc3RBbmFseXNpc1Jlc3VsdERldGFpbHMgY2FsY3VsYXRlZE9wdGlvbnM9e2NhbGN1bGF0ZWRPcHRpb25zfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Db2xsYXBzZT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9UaGVuPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvSWY+XHJcbiAgICAgICAgICAgICAgICA8L1ByaWNlc0FsZXJ0PlxyXG4gICAgICAgICAgICA8Lz5cclxuICAgICAgICApO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCB3aXRoQXBwQ29udGV4dChJbWJ1Q29zdEFuYWx5c2lzUmVzdWx0KTsiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5cclxuaW1wb3J0IHsgUHJpY2VzQWxlcnQgfSBmcm9tICcuLi8uLi9wcmljZXMvYWxlcnRzL1ByaWNlc0FsZXJ0LmpzeCc7XHJcbmltcG9ydCBJbWJ1Q29zdEFuYWx5c2lzUmVzdWx0SXRlbSBmcm9tICcuL0ltYnVDb3N0QW5hbHlzaXNSZXN1bHRJdGVtLmpzeCc7XHJcblxyXG5jb25zdCBJbWJ1Q29zdEFuYWx5c2lzUmVzdWx0RGV0YWlscyA9ICh7IGNhbGN1bGF0ZWRPcHRpb25zIH0pID0+IHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgICAge2NhbGN1bGF0ZWRPcHRpb25zLm1hcCgoY2FsY3VsYXRlZE9wdGlvbiwgaSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICA8UHJpY2VzQWxlcnQga2V5PXtpfSB2YXJpYW50PSdzdWNjZXNzJyBoZWFkaW5nPXtgIyR7aSArIDF9IG9wdGlvbmB9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8SW1idUNvc3RBbmFseXNpc1Jlc3VsdEl0ZW0gY2FsY3VsYXRlZE9wdGlvbj17Y2FsY3VsYXRlZE9wdGlvbn0gLz5cclxuICAgICAgICAgICAgICAgICAgICA8L1ByaWNlc0FsZXJ0PlxyXG4gICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgPC8+XHJcbiAgICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBJbWJ1Q29zdEFuYWx5c2lzUmVzdWx0RGV0YWlsczsiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBGb3JtLCBSb3cgfSBmcm9tICdyZWFjdC1ib290c3RyYXAnO1xyXG5cclxuaW1wb3J0IEltYnVJdGVtIGZyb20gJy4uL0ltYnVJdGVtLmpzeCc7XHJcbmltcG9ydCBJbWJ1SXRlbXNUb3RhbFByaWNlIGZyb20gJy4uL2ltYnVJdGVtRGV0YWlscy9JbWJ1SXRlbXNUb3RhbFByaWNlLmpzeCc7XHJcblxyXG5jb25zdCBJbWJ1Q29zdEFuYWx5c2lzUmVzdWx0SXRlbSA9ICh7IGNhbGN1bGF0ZWRPcHRpb24gfSkgPT4ge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8PlxyXG4gICAgICAgICAgICA8Rm9ybS5Hcm91cCBhcz17Um93fSBjbGFzc05hbWU9XCJqdXN0aWZ5LWNvbnRlbnQtY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICB7T2JqZWN0LmVudHJpZXMoY2FsY3VsYXRlZE9wdGlvbi5pdGVtU2V0KS5tYXAoKGl0ZW1zLCBpKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDxJbWJ1SXRlbSBrZXk9e2l9IGl0ZW1OYW1lPXtpdGVtc1swXX0gaXRlbUNvdW50PXtpdGVtc1sxXX0vPlxyXG4gICAgICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICAgIDwvRm9ybS5Hcm91cD5cclxuICAgICAgICAgICAgPEltYnVJdGVtc1RvdGFsUHJpY2UgdG90YWxQcmljZT17Y2FsY3VsYXRlZE9wdGlvbi50b3RhbFByaWNlfSAvPlxyXG4gICAgICAgIDwvPlxyXG4gICAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgSW1idUNvc3RBbmFseXNpc1Jlc3VsdEl0ZW07IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgRm9ybSwgUm93LCBDb2wgfSBmcm9tICdyZWFjdC1ib290c3RyYXAnO1xyXG5pbXBvcnQgJy4uLy4uLy4uL3N0eWxlcy9pbWJ1L2ltYnVJdGVtLmNzcyc7XHJcbmltcG9ydCBJdGVtSW1hZ2UgZnJvbSAnLi4vSXRlbUltYWdlLmpzeCc7XHJcblxyXG5leHBvcnQgY29uc3QgSW1idUl0ZW1FZGl0YWJsZSA9ICh7IG5hbWUsIHByaWNlLCBjb3VudCwgZWRpdGVkLCBvbkNoYW5nZVByaWNlLCBvbkNoYW5nZUNvdW50IH0pID0+XHJcbiAgICA8Rm9ybS5Hcm91cCBhcz17Um93fT5cclxuICAgICAgICA8Q29sIHhzPScxJyBzbT0nMic+XHJcbiAgICAgICAgICAgIDxJdGVtSW1hZ2UgaXRlbU5hbWU9e25hbWV9IC8+XHJcbiAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgPEZvcm0uTGFiZWwgY29sdW1uIHhzPXt7IHNwYW46IDQsIG9mZnNldDogMSB9fSBzbT17eyBzcGFuOiA1LCBvZmZzZXQ6IDAgfX0+XHJcbiAgICAgICAgICAgIDxzcGFuIHRpdGxlPVwiSXRlbSBuYW1lXCI+e25hbWV9PC9zcGFuPlxyXG4gICAgICAgIDwvRm9ybS5MYWJlbD5cclxuICAgICAgICA8Q29sIHhzPScyJyBjbGFzc05hbWU9J2NvdW50LWlucHV0LXdyYXBwZXInPlxyXG4gICAgICAgICAgICA8Rm9ybS5Db250cm9sIGlkPXtgJHtuYW1lfS1jb3VudGB9IHBsYWludGV4dD17IWVkaXRlZH0gdmFsdWU9e2NvdW50fSBvbkNoYW5nZT17b25DaGFuZ2VDb3VudH0gdGl0bGU9XCJJdGVtIGNvdW50XCIgbWF4TGVuZ3RoPScyJy8+XHJcbiAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgPENvbCB4cz0nMycgY2xhc3NOYW1lPSdwcmljZS1pbnB1dC13cmFwcGVyJz5cclxuICAgICAgICAgICAgPEZvcm0uQ29udHJvbCBpZD17YCR7bmFtZX0tcHJpY2VgfSBwbGFpbnRleHQ9eyFlZGl0ZWR9IHZhbHVlPXtwcmljZX0gb25DaGFuZ2U9e29uQ2hhbmdlUHJpY2V9IHRpdGxlPVwiSXRlbSB1bml0IHByaWNlXCIgbWF4TGVuZ3RoPSc2Jy8+XHJcbiAgICAgICAgPC9Db2w+XHJcbiAgICA8L0Zvcm0uR3JvdXA+XHJcbjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEltYnVJdGVtRWRpdGFibGU7IiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgSWYsIFRoZW4gfSBmcm9tICdyZWFjdC1pZi1lbHNlaWYtZWxzZS1yZW5kZXInO1xyXG5cclxuaW1wb3J0IHsgd2l0aEFwcENvbnRleHQgfSBmcm9tICcuLi8uLi9ob2Mvd2l0aEFwcENvbnRleHQnO1xyXG5cclxuaW1wb3J0IHsgUHJpY2VzQWxlcnQgfSBmcm9tICcuLi8uLi9wcmljZXMvYWxlcnRzL1ByaWNlc0FsZXJ0LmpzeCc7XHJcbmltcG9ydCB7IEltYnVJdGVtcyB9IGZyb20gJy4vSW1idUl0ZW1zLmpzeCc7XHJcbmltcG9ydCB7IHRvTnVtYmVyLCBsaW1pdCwgcmVtb3ZlTGVhZGluZ1plcm8gfSBmcm9tICcuLi8uLi8uLi9mb3JtYXR0ZXJzJztcclxuaW1wb3J0IHsgZ2V0QXJyYXlFbGVtZW50SW5mbyB9IGZyb20gJy4uLy4uLy4uL3V0aWxpdGllcyc7XHJcbmltcG9ydCAqIGFzIGNvbnN0YW50cyBmcm9tICcuLi8uLi8uLi9jb25zdGFudHMnO1xyXG5cclxuZXhwb3J0IGNsYXNzIEltYnVJdGVtUHJpY2VFZGl0b3IgZXh0ZW5kcyBDb21wb25lbnQge1xyXG4gICAgc3RhdGUgPSB7XHJcbiAgICAgICAgaW5wdXRzOiBbXVxyXG4gICAgfTtcclxuICAgIGNvbXBvbmVudERpZE1vdW50ID0gKCkgPT4ge1xyXG4gICAgICAgIHRoaXMuaW5pdGlhbGl6ZUlucHV0cygpO1xyXG4gICAgfTtcclxuICAgIG1hcmtJdGVtRWRpdGVkID0gKGlkKSA9PiB7XHJcbiAgICAgICAgY29uc3QgeyBpbnB1dHMgfSA9IHRoaXMuc3RhdGU7XHJcbiAgICAgICAgY29uc3QgaW5wdXQgPSBnZXRBcnJheUVsZW1lbnRJbmZvKGlucHV0cywgJ2lkJywgaWQpO1xyXG5cclxuICAgICAgICBpZiAoISFpbnB1dCAmJiAhaW5wdXQuZWRpdGVkKSB7XHJcbiAgICAgICAgICAgIGlucHV0LmVsZW1lbnQuZWRpdGVkID0gdHJ1ZTtcclxuICAgICAgICAgICAgT2JqZWN0LmFzc2lnbihpbnB1dHNbaW5wdXQuZWxlbWVudEluZGV4XSwgaW5wdXQuZWxlbWVudCk7XHJcblxyXG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgaW5wdXRzIH0pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIG9uQ2hhbmdlUHJpY2UgPSAoZSkgPT4ge1xyXG4gICAgICAgIGNvbnN0IGlkID0gZS50YXJnZXQuaWQuc3BsaXQoJy0nKVswXTtcclxuICAgICAgICBjb25zdCBuZXdQcmljZSA9IHRvTnVtYmVyKHJlbW92ZUxlYWRpbmdaZXJvKGxpbWl0KGUudGFyZ2V0LnZhbHVlLCA2KSkpIHx8IDA7XHJcblxyXG4gICAgICAgIGlmIChuZXdQcmljZSA+PSBjb25zdGFudHMuSU1CVV9JVEVNX1BSSUNFX01JTiAmJiBuZXdQcmljZSA8PSBjb25zdGFudHMuSU1CVV9JVEVNX1BSSUNFX01BWCkge1xyXG4gICAgICAgICAgICB0aGlzLnByb3BzLmNvbnRleHQuY2hhbmdlSXRlbVByb3AoaWQsICd2YWx1ZScsIHBhcnNlSW50KG5ld1ByaWNlKSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLm1hcmtJdGVtRWRpdGVkKGlkKTtcclxuICAgIH1cclxuICAgIG9uQ2hhbmdlQ291bnQgPSAoZSkgPT4ge1xyXG4gICAgICAgIGNvbnN0IGlkID0gZS50YXJnZXQuaWQuc3BsaXQoJy0nKVswXTtcclxuICAgICAgICBjb25zdCBuZXdDb3VudCA9IHRvTnVtYmVyKHJlbW92ZUxlYWRpbmdaZXJvKGxpbWl0KGUudGFyZ2V0LnZhbHVlLCAyKSkpIHx8IDA7XHJcblxyXG4gICAgICAgIGlmIChuZXdDb3VudCA+PSBjb25zdGFudHMuSU1CVV9JVEVNX0NPVU5UX01JTiAmJiBuZXdDb3VudCA8PSBjb25zdGFudHMuSU1CVV9JVEVNX0NPVU5UX01BWCkge1xyXG4gICAgICAgICAgICB0aGlzLnByb3BzLmNvbnRleHQuY2hhbmdlSXRlbVByb3AoaWQsICdDb3VudCcsIHBhcnNlSW50KG5ld0NvdW50KSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLm1hcmtJdGVtRWRpdGVkKGlkKTtcclxuICAgIH1cclxuICAgIGluaXRpYWxpemVJbnB1dHMgPSAoKSA9PiB7XHJcbiAgICAgICAgY29uc3QgeyBpdGVtUHJpY2VzIH0gPSB0aGlzLnByb3BzO1xyXG5cclxuICAgICAgICBpZiAoISFpdGVtUHJpY2VzKSB7XHJcbiAgICAgICAgICAgIGxldCBpbnB1dHMgPSBbXTtcclxuXHJcbiAgICAgICAgICAgIGl0ZW1QcmljZXMubWFwKGl0ZW1QcmljZSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBpbnB1dFN0YXRlID0ge1xyXG4gICAgICAgICAgICAgICAgICAgIGlkOiBpdGVtUHJpY2UuaXRlbU5hbWUsXHJcbiAgICAgICAgICAgICAgICAgICAgZWRpdGVkOiBmYWxzZVxyXG4gICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgICAgIGlucHV0cyA9IFsuLi5pbnB1dHMsIGlucHV0U3RhdGVdO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgIFxyXG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgaW5wdXRzIH0pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICBjb25zdCB7IGlucHV0cyB9ID0gdGhpcy5zdGF0ZTtcclxuICAgICAgICBjb25zdCB7IGl0ZW1QcmljZXMsIGltYnVlbWVudE9wdGlvbnMgfSA9IHRoaXMucHJvcHM7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPElmIGNvbmRpdGlvbj17ISFpdGVtUHJpY2VzICYmIGlucHV0cy5sZW5ndGggPiAwfT5cclxuICAgICAgICAgICAgICAgIDxUaGVuPlxyXG4gICAgICAgICAgICAgICAgICAgIDxQcmljZXNBbGVydCB2YXJpYW50PSdpbmZvJyBoZWFkaW5nPSdJdGVtcyc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxJbWJ1SXRlbXNcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW1QcmljZXM9e2l0ZW1QcmljZXN9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbWJ1ZW1lbnRPcHRpb25zPXtpbWJ1ZW1lbnRPcHRpb25zfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5wdXRzPXtpbnB1dHN9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZVByaWNlPXsoZSkgPT4gdGhpcy5vbkNoYW5nZVByaWNlKGUpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2VDb3VudD17KGUpID0+IHRoaXMub25DaGFuZ2VDb3VudChlKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L1ByaWNlc0FsZXJ0PlxyXG4gICAgICAgICAgICAgICAgPC9UaGVuPlxyXG4gICAgICAgICAgICA8L0lmPlxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHdpdGhBcHBDb250ZXh0KEltYnVJdGVtUHJpY2VFZGl0b3IpOyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBfIGZyb20gJ2xvZGFzaCc7XHJcblxyXG5pbXBvcnQgeyBJbWJ1SXRlbUVkaXRhYmxlIH0gZnJvbSAnLi9JbWJ1SXRlbUVkaXRhYmxlLmpzeCc7XHJcblxyXG5leHBvcnQgY29uc3QgSW1idUl0ZW1zID0gKHsgaXRlbVByaWNlcywgaW1idWVtZW50T3B0aW9ucywgaW5wdXRzLCBvbkNoYW5nZVByaWNlLCBvbkNoYW5nZUNvdW50IH0pID0+IHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgT2JqZWN0LmtleXMoaW1idWVtZW50T3B0aW9uc1swXSkubWFwKGl0ZW1OYW1lID0+IHtcclxuICAgICAgICAgICAgY29uc3QgaXRlbVByaWNlID0gXy5maW5kKGl0ZW1QcmljZXMsIHsgaXRlbU5hbWUgfSk7XHJcbiAgICAgICAgICAgIGNvbnN0IGlucHV0U3RhdGUgPSBpbnB1dHMuZmlsdGVyKHggPT4geC5pZCA9PT0gaXRlbU5hbWUpWzBdO1xyXG4gICAgICAgICAgICBpZiAoISFpdGVtUHJpY2UgJiYgISFpbnB1dFN0YXRlKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICAgIDxJbWJ1SXRlbUVkaXRhYmxlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGtleT17aXRlbVByaWNlLml0ZW1OYW1lfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lPXtpdGVtUHJpY2UuaXRlbU5hbWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHByaWNlPXtpdGVtUHJpY2UudmFsdWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvdW50PXtpdGVtUHJpY2UuQ291bnR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVkaXRlZD17aW5wdXRTdGF0ZS5lZGl0ZWR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlUHJpY2U9e29uQ2hhbmdlUHJpY2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlQ291bnQ9e29uQ2hhbmdlQ291bnR9IC8+XHJcbiAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEltYnVJdGVtczsiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBGb3JtLCBSb3cgfSBmcm9tICdyZWFjdC1ib290c3RyYXAnO1xyXG5cclxuZXhwb3J0IGNvbnN0IEltYnVJdGVtc1RvdGFsUHJpY2UgPSAoeyB0b3RhbFByaWNlIH0pID0+XHJcbiAgICA8Rm9ybS5Hcm91cCBhcz17Um93fT5cclxuICAgICAgICA8Rm9ybS5MYWJlbCBjb2x1bW4geHM9XCIxMlwiPlxyXG4gICAgICAgICAgICA8c3BhbiBzdHlsZT17eyBmb250V2VpZ2h0OiAnYm9sZCcgfX0gdGl0bGU9XCJUb3RhbCBwcmljZSBmb3IgaW1idSAoYmFzZWQgb2ZmIG9mIGN1cnJlbnRseSBzZXQgcHJpY2VzKVwiPlRvdGFsIFByaWNlOiB7dG90YWxQcmljZS50b0xvY2FsZVN0cmluZygpfSBncDwvc3Bhbj5cclxuICAgICAgICA8L0Zvcm0uTGFiZWw+XHJcbiAgICA8L0Zvcm0uR3JvdXA+XHJcbjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEltYnVJdGVtc1RvdGFsUHJpY2U7IiwiaW1wb3J0IFJlYWN0LCB7IHVzZUNvbnRleHQgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IElmLCBUaGVuLCBFbHNlSWYsIEVsc2UgfSBmcm9tICdyZWFjdC1pZi1lbHNlaWYtZWxzZS1yZW5kZXInO1xyXG5pbXBvcnQgbW9tZW50IGZyb20gJ21vbWVudCc7XHJcbmltcG9ydCBfIGZyb20gJ2xvZGFzaCc7XHJcblxyXG5pbXBvcnQgeyBBcHBDb250ZXh0IH0gZnJvbSAnLi4vLi4vY29udGV4dC9BcHBDb250ZXh0JztcclxuXHJcbmltcG9ydCBQcmljZXNOb3RGb3VuZEFsZXJ0IGZyb20gJy4vYWxlcnRzL1ByaWNlc05vdEZvdW5kQWxlcnQuanN4JztcclxuaW1wb3J0IFByaWNlc1VwVG9EYXRlQWxlcnQgZnJvbSAnLi9hbGVydHMvUHJpY2VzVXBUb0RhdGVBbGVydC5qc3gnO1xyXG5pbXBvcnQgUHJpY2VzT3V0ZGF0ZWRBbGVydCBmcm9tICcuL2FsZXJ0cy9QcmljZXNPdXRkYXRlZEFsZXJ0LmpzeCc7XHJcbmltcG9ydCBQcmljZXNMb2FkaW5nQWxlcnQgZnJvbSAnLi9hbGVydHMvUHJpY2VzTG9hZGluZ0FsZXJ0LmpzeCc7XHJcblxyXG5jb25zdCBzb3J0QnlDaGVja1RpbWVzID0gKGl0ZW1QcmljZXMpID0+IHtcclxuICAgIGNvbnN0IGNoZWNrVGltZXMgPSBpdGVtUHJpY2VzLm1hcCh4ID0+IHguY2hlY2tUaW1lKTtcclxuICAgIGlmIChjaGVja1RpbWVzICYmIGNoZWNrVGltZXMubGVuZ3RoID4gMSkge1xyXG4gICAgICAgIHJldHVybiBfLm9yZGVyQnkoY2hlY2tUaW1lcywgKG8pID0+IHtcclxuICAgICAgICAgICAgcmV0dXJuIG1vbWVudChvKTtcclxuICAgICAgICB9LCBbJ2Rlc2MnXSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIHJldHVybiBjaGVja1RpbWVzO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgUHJpY2VzU3RhdHVzSW5mbyA9ICgpID0+IHtcclxuICAgIGNvbnN0IGNvbnRleHQgPSB1c2VDb250ZXh0KEFwcENvbnRleHQpO1xyXG4gICAgY29uc3QgeyBpc0xvYWRpbmdEYXRhLCBpdGVtUHJpY2VzIH0gPSBjb250ZXh0O1xyXG4gICAgY29uc3QgbWF4Q2hlY2tUaW1lID0gc29ydEJ5Q2hlY2tUaW1lcyhpdGVtUHJpY2VzKVswXTtcclxuICAgIGNvbnN0IG1heENoZWNrVGltZU1vbWVudCA9ICEhbWF4Q2hlY2tUaW1lID8gbW9tZW50KG1heENoZWNrVGltZSkgOiB1bmRlZmluZWQ7IFxyXG4gICAgY29uc3QgcHJpY2VzVXBkYXRlRGlmZkhycyA9ICEhbWF4Q2hlY2tUaW1lID8gbW9tZW50KCkuZGlmZihtYXhDaGVja1RpbWVNb21lbnQsICdob3VycycpIDogdW5kZWZpbmVkO1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPElmIGNvbmRpdGlvbj17aXNMb2FkaW5nRGF0YX0+XHJcbiAgICAgICAgICAgIDxUaGVuPlxyXG4gICAgICAgICAgICAgICAgPFByaWNlc0xvYWRpbmdBbGVydCAvPlxyXG4gICAgICAgICAgICA8L1RoZW4+XHJcbiAgICAgICAgICAgIDxFbHNlSWYgY29uZGl0aW9uPXtpdGVtUHJpY2VzLmxlbmd0aCA9PSAwIHx8IG1heENoZWNrVGltZSA9PT0gdW5kZWZpbmVkIHx8ICFtYXhDaGVja1RpbWVNb21lbnQuaXNWYWxpZCgpIHx8IHByaWNlc1VwZGF0ZURpZmZIcnMgPT09IHVuZGVmaW5lZH0+XHJcbiAgICAgICAgICAgICAgICA8UHJpY2VzTm90Rm91bmRBbGVydCAvPlxyXG4gICAgICAgICAgICA8L0Vsc2VJZj4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIDxFbHNlSWYgY29uZGl0aW9uPXtwcmljZXNVcGRhdGVEaWZmSHJzID4gMjR9PlxyXG4gICAgICAgICAgICAgICAgPFByaWNlc091dGRhdGVkQWxlcnQgdXBkYXRlZE9uPXttYXhDaGVja1RpbWVNb21lbnR9IGhvdXJzPXtwcmljZXNVcGRhdGVEaWZmSHJzfS8+XHJcbiAgICAgICAgICAgIDwvRWxzZUlmPlxyXG4gICAgICAgICAgICA8RWxzZT5cclxuICAgICAgICAgICAgICAgIDxQcmljZXNVcFRvRGF0ZUFsZXJ0IHVwZGF0ZWRPbj17bWF4Q2hlY2tUaW1lTW9tZW50fS8+XHJcbiAgICAgICAgICAgIDwvRWxzZT5cclxuICAgICAgICA8L0lmPlxyXG4gICAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUHJpY2VzU3RhdHVzSW5mbzsiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBBbGVydCB9IGZyb20gJ3JlYWN0LWJvb3RzdHJhcCc7XHJcblxyXG5leHBvcnQgY29uc3QgUHJpY2VzQWxlcnQgPSAocHJvcHMpID0+IHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPEFsZXJ0IHZhcmlhbnQ9e3Byb3BzLnZhcmlhbnR9PlxyXG4gICAgICAgICAgICA8QWxlcnQuSGVhZGluZz57cHJvcHMuaGVhZGluZ308L0FsZXJ0LkhlYWRpbmc+XHJcbiAgICAgICAgICAgIDxociAvPlxyXG4gICAgICAgICAgICB7cHJvcHMuY2hpbGRyZW59XHJcbiAgICAgICAgPC9BbGVydD5cclxuICAgICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFByaWNlc0FsZXJ0OyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcblxyXG5pbXBvcnQgeyBQcmljZXNBbGVydCB9IGZyb20gJy4vUHJpY2VzQWxlcnQuanN4JztcclxuXHJcbmV4cG9ydCBjb25zdCBQcmljZXNMb2FkaW5nQWxlcnQgPSAoKSA9PiB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxQcmljZXNBbGVydFxyXG4gICAgICAgICAgICB2YXJpYW50PSdpbmZvJ1xyXG4gICAgICAgICAgICBoZWFkaW5nPSdMb2FkaW5nLi4uJ1xyXG4gICAgICAgIC8+XHJcbiAgICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQcmljZXNMb2FkaW5nQWxlcnQ7IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgUHJpY2VzQWxlcnQgfSBmcm9tICcuL1ByaWNlc0FsZXJ0LmpzeCc7XHJcblxyXG5leHBvcnQgY29uc3QgUHJpY2VzTm90Rm91bmRBbGVydCA9ICgpID0+IHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPFByaWNlc0FsZXJ0XHJcbiAgICAgICAgICAgIHZhcmlhbnQ9J2RhbmdlcidcclxuICAgICAgICAgICAgaGVhZGluZz0nSXRlbSBQcmljZXMgTWlzc2luZyA6LSgnXHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgICA8cD5JdGVtIFByaWNlcyBzZWVtIHRvIGJlIG1pc3NpbmcuIEl0IGNvdWxkIGJlIGFuIGlzc3VlIHdpdGggaXRlbSBwcmljZXMgQVBJIChibGFtZSBNYWNrbykuLi48L3A+XHJcbiAgICAgICAgPC9QcmljZXNBbGVydD5cclxuICAgICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFByaWNlc05vdEZvdW5kQWxlcnQ7IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuXHJcbmltcG9ydCB7IFByaWNlc0FsZXJ0IH0gZnJvbSAnLi9QcmljZXNBbGVydC5qc3gnO1xyXG5pbXBvcnQgeyBtb21lbnRGb3JtYXQsIGZhbmN5RGF0ZVRpbWVGb3JtYXQgfSBmcm9tICcuLi8uLi8uLi9mb3JtYXR0ZXJzJztcclxuXHJcbmV4cG9ydCBjb25zdCBQcmljZXNPdXRkYXRlZEFsZXJ0ID0gKHsgaG91cnMsIHVwZGF0ZWRPbiB9KSA9PiB7XHJcbiAgICBjb25zdCBkYXRlID0gbW9tZW50Rm9ybWF0KHVwZGF0ZWRPbiwgZmFuY3lEYXRlVGltZUZvcm1hdCk7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxQcmljZXNBbGVydFxyXG4gICAgICAgICAgICB2YXJpYW50PSd3YXJuaW5nJ1xyXG4gICAgICAgICAgICBoZWFkaW5nPSdJdGVtIFByaWNlcyBPdXRkYXRlZCA6LSgnXHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgICA8cD5CZXdhcmUhIEl0ZW0gUHJpY2VzIHNlZW0gdG8gYmUgb3V0ZGF0ZWQuIFRoZSBsYXRlc3QgdXBkYXRlIHdhcyB7aG91cnN9IGhvdXIocykgYWdvICh7ZGF0ZX0pLjwvcD5cclxuICAgICAgICA8L1ByaWNlc0FsZXJ0PlxyXG4gICAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUHJpY2VzT3V0ZGF0ZWRBbGVydDsiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5cclxuaW1wb3J0IHsgUHJpY2VzQWxlcnQgfSBmcm9tICcuL1ByaWNlc0FsZXJ0LmpzeCc7XHJcbmltcG9ydCB7IG1vbWVudEZvcm1hdCwgZmFuY3lEYXRlVGltZUZvcm1hdCB9IGZyb20gJy4uLy4uLy4uL2Zvcm1hdHRlcnMnO1xyXG5cclxuZXhwb3J0IGNvbnN0IFByaWNlc1VwVG9EYXRlQWxlcnQgPSAoeyB1cGRhdGVkT24gfSkgPT4ge1xyXG4gICAgY29uc3QgZGF0ZSA9IG1vbWVudEZvcm1hdCh1cGRhdGVkT24sIGZhbmN5RGF0ZVRpbWVGb3JtYXQpO1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8UHJpY2VzQWxlcnRcclxuICAgICAgICAgICAgdmFyaWFudD0nc3VjY2VzcydcclxuICAgICAgICAgICAgaGVhZGluZz0nSXRlbSBQcmljZXMgVXAtdG8tRGF0ZSA6LSknXHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgICA8cD5JdGVtIFByaWNlcyBoYXZlIGJlZW4gdXBkYXRlZCBpbiB0aGUgbGFzdCAyNCBob3VycyAoe2RhdGV9KS48L3A+XHJcbiAgICAgICAgPC9QcmljZXNBbGVydD5cclxuICAgICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFByaWNlc1VwVG9EYXRlQWxlcnQ7IiwiZXhwb3J0IGNvbnN0IElNQlVfSVRFTV9DT1VOVF9NQVggPSAyNTtcclxuZXhwb3J0IGNvbnN0IElNQlVfSVRFTV9DT1VOVF9NSU4gPSAwO1xyXG5cclxuZXhwb3J0IGNvbnN0IElNQlVfSVRFTV9QUklDRV9NQVggPSA5OTk5OTk7XHJcbmV4cG9ydCBjb25zdCBJTUJVX0lURU1fUFJJQ0VfTUlOID0gMDsiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5cclxuZXhwb3J0IGNvbnN0IEFwcENvbnRleHQgPSBSZWFjdC5jcmVhdGVDb250ZXh0KCk7IiwiZXhwb3J0IGNvbnN0IGRlZmF1bHREYXRlRm9ybWF0ID0gJ0REL01NL1lZWVknO1xyXG5leHBvcnQgY29uc3QgZGVmYXVsdERhdGVUaW1lRm9ybWF0ID0gJ0REL01NL1lZWVkgSEg6bW06c3MnO1xyXG5leHBvcnQgY29uc3QgZmFuY3lEYXRlVGltZUZvcm1hdCA9ICdkZGRkLCBEbyBNTU0gWVlZWSBAIEhIOm1tOnNzJztcclxuXHJcbmV4cG9ydCBjb25zdCBtb21lbnRGb3JtYXQgPSAobW9tZW50RGF0ZSwgZm9ybWF0KSA9PiB7XHJcbiAgICByZXR1cm4gISFtb21lbnREYXRlICYmICEhZm9ybWF0ID8gbW9tZW50RGF0ZS5mb3JtYXQoZm9ybWF0KSA6ICcnO1xyXG59XHJcblxyXG5leHBvcnQgY29uc3QgZGF0ZUZvcm1hdHRlciA9IChtb21lbnREYXRlKSA9PiB7XHJcbiAgICByZXR1cm4gbW9tZW50Rm9ybWF0KG1vbWVudERhdGUsIGRlZmF1bHREYXRlRm9ybWF0KTtcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IGRhdGVUaW1lRm9ybWF0dGVyID0gKG1vbWVudERhdGUpID0+IHtcclxuICAgIHJldHVybiBtb21lbnRGb3JtYXQobW9tZW50RGF0ZSwgZGVmYXVsdERhdGVUaW1lRm9ybWF0KTtcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IHRvTnVtYmVyID0gKHN0cmluZykgPT4ge1xyXG4gICAgaWYgKCFzdHJpbmcpIHJldHVybiAnJztcclxuICAgIHJldHVybiBzdHJpbmcucmVwbGFjZSgvXFxEL2csICcnKTtcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IGxpbWl0ID0gKHN0cmluZywgbWF4KSA9PiAge1xyXG4gICAgaWYgKCFzdHJpbmcpIHJldHVybiAnJztcclxuICAgIHJldHVybiBzdHJpbmcuc3Vic3RyKDAsIG1heCk7XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCByZW1vdmVMZWFkaW5nWmVybyA9IChzdHJpbmcpID0+IHtcclxuICAgIGlmICghc3RyaW5nKSByZXR1cm4gJyc7XHJcbiAgICByZXR1cm4gc3RyaW5nLnJlcGxhY2UoL1xcYjArL2csICcnKTtcclxufSIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBSZWFjdERPTSBmcm9tICdyZWFjdC1kb20nO1xyXG5cclxuaW1wb3J0IEFwcCBmcm9tICcuL2NvbXBvbmVudHMvYXBwL0FwcC5qc3gnO1xyXG5cclxuUmVhY3RET00ucmVuZGVyKDxBcHAgLz4sIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyZWFjdC1hcHAtcm9vdCcpKTsiLCJcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9hcHAuY3NzXCIpO1xuXG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcblxudmFyIHRyYW5zZm9ybTtcbnZhciBpbnNlcnRJbnRvO1xuXG5cblxudmFyIG9wdGlvbnMgPSB7XCJobXJcIjp0cnVlfVxuXG5vcHRpb25zLnRyYW5zZm9ybSA9IHRyYW5zZm9ybVxub3B0aW9ucy5pbnNlcnRJbnRvID0gdW5kZWZpbmVkO1xuXG52YXIgdXBkYXRlID0gcmVxdWlyZShcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXMuanNcIikoY29udGVudCwgb3B0aW9ucyk7XG5cbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuXG5pZihtb2R1bGUuaG90KSB7XG5cdG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2FwcC5jc3NcIiwgZnVuY3Rpb24oKSB7XG5cdFx0dmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2FwcC5jc3NcIik7XG5cblx0XHRpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcblxuXHRcdHZhciBsb2NhbHMgPSAoZnVuY3Rpb24oYSwgYikge1xuXHRcdFx0dmFyIGtleSwgaWR4ID0gMDtcblxuXHRcdFx0Zm9yKGtleSBpbiBhKSB7XG5cdFx0XHRcdGlmKCFiIHx8IGFba2V5XSAhPT0gYltrZXldKSByZXR1cm4gZmFsc2U7XG5cdFx0XHRcdGlkeCsrO1xuXHRcdFx0fVxuXG5cdFx0XHRmb3Ioa2V5IGluIGIpIGlkeC0tO1xuXG5cdFx0XHRyZXR1cm4gaWR4ID09PSAwO1xuXHRcdH0oY29udGVudC5sb2NhbHMsIG5ld0NvbnRlbnQubG9jYWxzKSk7XG5cblx0XHRpZighbG9jYWxzKSB0aHJvdyBuZXcgRXJyb3IoJ0Fib3J0aW5nIENTUyBITVIgZHVlIHRvIGNoYW5nZWQgY3NzLW1vZHVsZXMgbG9jYWxzLicpO1xuXG5cdFx0dXBkYXRlKG5ld0NvbnRlbnQpO1xuXHR9KTtcblxuXHRtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn0iLCJcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9JbWJ1VHlwZS5jc3NcIik7XG5cbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuXG52YXIgdHJhbnNmb3JtO1xudmFyIGluc2VydEludG87XG5cblxuXG52YXIgb3B0aW9ucyA9IHtcImhtclwiOnRydWV9XG5cbm9wdGlvbnMudHJhbnNmb3JtID0gdHJhbnNmb3JtXG5vcHRpb25zLmluc2VydEludG8gPSB1bmRlZmluZWQ7XG5cbnZhciB1cGRhdGUgPSByZXF1aXJlKFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlcy5qc1wiKShjb250ZW50LCBvcHRpb25zKTtcblxuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG5cbmlmKG1vZHVsZS5ob3QpIHtcblx0bW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vSW1idVR5cGUuY3NzXCIsIGZ1bmN0aW9uKCkge1xuXHRcdHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9JbWJ1VHlwZS5jc3NcIik7XG5cblx0XHRpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcblxuXHRcdHZhciBsb2NhbHMgPSAoZnVuY3Rpb24oYSwgYikge1xuXHRcdFx0dmFyIGtleSwgaWR4ID0gMDtcblxuXHRcdFx0Zm9yKGtleSBpbiBhKSB7XG5cdFx0XHRcdGlmKCFiIHx8IGFba2V5XSAhPT0gYltrZXldKSByZXR1cm4gZmFsc2U7XG5cdFx0XHRcdGlkeCsrO1xuXHRcdFx0fVxuXG5cdFx0XHRmb3Ioa2V5IGluIGIpIGlkeC0tO1xuXG5cdFx0XHRyZXR1cm4gaWR4ID09PSAwO1xuXHRcdH0oY29udGVudC5sb2NhbHMsIG5ld0NvbnRlbnQubG9jYWxzKSk7XG5cblx0XHRpZighbG9jYWxzKSB0aHJvdyBuZXcgRXJyb3IoJ0Fib3J0aW5nIENTUyBITVIgZHVlIHRvIGNoYW5nZWQgY3NzLW1vZHVsZXMgbG9jYWxzLicpO1xuXG5cdFx0dXBkYXRlKG5ld0NvbnRlbnQpO1xuXHR9KTtcblxuXHRtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn0iLCJcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9JbWJ1ZW1lbnRzLmNzc1wiKTtcblxuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG5cbnZhciB0cmFuc2Zvcm07XG52YXIgaW5zZXJ0SW50bztcblxuXG5cbnZhciBvcHRpb25zID0ge1wiaG1yXCI6dHJ1ZX1cblxub3B0aW9ucy50cmFuc2Zvcm0gPSB0cmFuc2Zvcm1cbm9wdGlvbnMuaW5zZXJ0SW50byA9IHVuZGVmaW5lZDtcblxudmFyIHVwZGF0ZSA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzLmpzXCIpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2FscztcblxuaWYobW9kdWxlLmhvdCkge1xuXHRtb2R1bGUuaG90LmFjY2VwdChcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9JbWJ1ZW1lbnRzLmNzc1wiLCBmdW5jdGlvbigpIHtcblx0XHR2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vSW1idWVtZW50cy5jc3NcIik7XG5cblx0XHRpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcblxuXHRcdHZhciBsb2NhbHMgPSAoZnVuY3Rpb24oYSwgYikge1xuXHRcdFx0dmFyIGtleSwgaWR4ID0gMDtcblxuXHRcdFx0Zm9yKGtleSBpbiBhKSB7XG5cdFx0XHRcdGlmKCFiIHx8IGFba2V5XSAhPT0gYltrZXldKSByZXR1cm4gZmFsc2U7XG5cdFx0XHRcdGlkeCsrO1xuXHRcdFx0fVxuXG5cdFx0XHRmb3Ioa2V5IGluIGIpIGlkeC0tO1xuXG5cdFx0XHRyZXR1cm4gaWR4ID09PSAwO1xuXHRcdH0oY29udGVudC5sb2NhbHMsIG5ld0NvbnRlbnQubG9jYWxzKSk7XG5cblx0XHRpZighbG9jYWxzKSB0aHJvdyBuZXcgRXJyb3IoJ0Fib3J0aW5nIENTUyBITVIgZHVlIHRvIGNoYW5nZWQgY3NzLW1vZHVsZXMgbG9jYWxzLicpO1xuXG5cdFx0dXBkYXRlKG5ld0NvbnRlbnQpO1xuXHR9KTtcblxuXHRtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn0iLCJcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9pbWJ1SXRlbS5jc3NcIik7XG5cbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuXG52YXIgdHJhbnNmb3JtO1xudmFyIGluc2VydEludG87XG5cblxuXG52YXIgb3B0aW9ucyA9IHtcImhtclwiOnRydWV9XG5cbm9wdGlvbnMudHJhbnNmb3JtID0gdHJhbnNmb3JtXG5vcHRpb25zLmluc2VydEludG8gPSB1bmRlZmluZWQ7XG5cbnZhciB1cGRhdGUgPSByZXF1aXJlKFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlcy5qc1wiKShjb250ZW50LCBvcHRpb25zKTtcblxuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG5cbmlmKG1vZHVsZS5ob3QpIHtcblx0bW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vaW1idUl0ZW0uY3NzXCIsIGZ1bmN0aW9uKCkge1xuXHRcdHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9pbWJ1SXRlbS5jc3NcIik7XG5cblx0XHRpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcblxuXHRcdHZhciBsb2NhbHMgPSAoZnVuY3Rpb24oYSwgYikge1xuXHRcdFx0dmFyIGtleSwgaWR4ID0gMDtcblxuXHRcdFx0Zm9yKGtleSBpbiBhKSB7XG5cdFx0XHRcdGlmKCFiIHx8IGFba2V5XSAhPT0gYltrZXldKSByZXR1cm4gZmFsc2U7XG5cdFx0XHRcdGlkeCsrO1xuXHRcdFx0fVxuXG5cdFx0XHRmb3Ioa2V5IGluIGIpIGlkeC0tO1xuXG5cdFx0XHRyZXR1cm4gaWR4ID09PSAwO1xuXHRcdH0oY29udGVudC5sb2NhbHMsIG5ld0NvbnRlbnQubG9jYWxzKSk7XG5cblx0XHRpZighbG9jYWxzKSB0aHJvdyBuZXcgRXJyb3IoJ0Fib3J0aW5nIENTUyBITVIgZHVlIHRvIGNoYW5nZWQgY3NzLW1vZHVsZXMgbG9jYWxzLicpO1xuXG5cdFx0dXBkYXRlKG5ld0NvbnRlbnQpO1xuXHR9KTtcblxuXHRtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn0iLCJleHBvcnQgY29uc3QgaW1idVR5cGVzID0gW1xyXG4gICAgeyBpZDogMSwgbmFtZTogJ01hbmEgTGVlY2gnIH0sXHJcbiAgICB7IGlkOiAzLCBuYW1lOiAnTGlmZSBMZWVjaCcgfSxcclxuICAgIHsgaWQ6IDIsIG5hbWU6ICdDcml0JyB9XHJcbl0iLCJpbXBvcnQgXyBmcm9tICdsb2Rhc2gnO1xyXG5cclxuZXhwb3J0IGNvbnN0IGNhbGN1bGF0ZUltYnVJdGVtUHJpY2UgPSAocHJpY2UsIGNvdW50KSA9PiB7XHJcbiAgICByZXR1cm4gcGFyc2VJbnQocHJpY2UpICogcGFyc2VJbnQoY291bnQpO1xyXG59XHJcblxyXG5leHBvcnQgY29uc3Qgc3VtSW1idUl0ZW1QcmljZXMgPSAoaXRlbVByaWNlcykgPT4ge1xyXG4gICAgY29uc3QgcHJpY2VzID0gaXRlbVByaWNlcy5tYXAoaXRlbVByaWNlID0+IGNhbGN1bGF0ZUltYnVJdGVtUHJpY2UoaXRlbVByaWNlLnZhbHVlLCBpdGVtUHJpY2UuQ291bnQpKTtcclxuICAgIGNvbnN0IHRvdGFsUHJpY2UgPSBfLnN1bUJ5KHByaWNlcywgcCA9PiBwKTtcclxuXHJcbiAgICByZXR1cm4gdG90YWxQcmljZTtcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IGdldEFycmF5RWxlbWVudEluZm8gPSAoYXJyYXksIGtleSwgdmFsdWUpID0+IHtcclxuICAgIGFycmF5ID0gYXJyYXkgfHwgW107XHJcbiAgICBjb25zdCBlbGVtZW50ID0gYXJyYXkuZmlsdGVyKHggPT4geFtrZXldID09PSB2YWx1ZSk7XHJcbiAgICBjb25zdCBlbGVtZW50SW5kZXggPSBhcnJheS5maW5kSW5kZXgoeCA9PiB4W2tleV0gPT09IHZhbHVlKTtcclxuICAgIFxyXG4gICAgbGV0IGVsZW1lbnRJbmZvID0gbnVsbDtcclxuICAgIGlmICghIWVsZW1lbnQgJiYgZWxlbWVudC5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgZWxlbWVudEluZm8gPSB7XHJcbiAgICAgICAgICAgIGVsZW1lbnQ6IGVsZW1lbnRbMF0sXHJcbiAgICAgICAgICAgIGVsZW1lbnRJbmRleDogZWxlbWVudEluZGV4XHJcbiAgICAgICAgfTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gZWxlbWVudEluZm87XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBnZXRJdGVtSW1hZ2VJZCA9IChpdGVtTmFtZSkgPT4ge1xyXG4gICAgaWYgKCFpdGVtTmFtZSkgcmV0dXJuICcnO1xyXG4gICAgcmV0dXJuIGl0ZW1OYW1lLnJlcGxhY2UoL1xccysvZywgJ18nKS50b0xvd2VyQ2FzZSgpO1xyXG59Il0sInNvdXJjZVJvb3QiOiIifQ==