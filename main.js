/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./barrels.jpg */ "./src/barrels.jpg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ./about.jpg */ "./src/about.jpg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ":root{\n    --theme-bg-color: blanchedalmond;\n}\n\n*   {\n    box-sizing: border-box;\n    margin: 0;\n}\n\n\n#content    {\n    display: flex;\n    flex-direction: column;\n    gap: 5rem;\n    align-items: center;\n    background-color: var(--theme-bg-color);\n}\n\nbutton  {\n    padding: .5rem 1.5rem;\n}\n\n.hero {\n    background: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n    background-size: cover;\n    height: 600px;\n    display: grid;\n    grid-template-columns: 1fr 1fr 1.5fr;\n    grid-template-rows: 1fr 4fr;\n}\n\n.resturant-name {\n    padding-left: 2rem;\n    align-self: center;\n    justify-self: start;\n    color: white;\n    font-size: 3rem;\n    font-family: Avantgarde, TeX Gyre Adventor, URW Gothic L, sans-serif;\n    font-variant: small-caps;\n    text-shadow: 1px 3px 2px black, 1px 3px 2px black, 1px -1px 0 black, -1px -1px 0 black;\n}\n\n.hero-descript  {\n    padding: 1rem;\n    color: white;\n    font-size: 1.5rem;\n    grid-column: 3 / 4;\n    grid-row: 2 / 3;\n    width: 65%;\n    align-self: center;\n    text-shadow: 1px 2px 2px black, 1px 2px 2px black, 1px -1px 0 black, -1px -1px 0 black;\n    background-color: rgba(0, 0, 0, .2);\n    border-radius: .5rem;\n    display: flex;\n    flex-direction: column;\n    gap: 1rem;\n}\n\n.reservation    {\n    grid-column: 3 / 4;\n    padding-right: 2rem;\n    align-self: center;\n    justify-self: end;\n}\n\n.nav-buttons    {\n    display: flex;\n    gap: 1rem;\n}\n\n.aboutPage   {\n    display: flex;\n    flex-direction: column;\n    width: 60vw;\n    gap: 5rem;\n    font-size: 1.25rem;\n}\n\n.aboutImg   {\n    background: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ");\n    border-top-left-radius: 1rem;\n    border-bottom-left-radius: 1rem;\n    background-size: cover;\n    box-shadow: 0 0 0 0 blanchedalmond inset, -50px 0 50px 8px blanchedalmond inset;\n}\n\n.aboutDescript   {\n    padding: 1rem;\n}\n\n.aboutHeader    {\n    flex:auto;\n    display:flex;\n    flex-direction: column;\n    align-items: center;\n    gap: 1rem;\n}\n\n.aboutPage>div>h1   {\n    text-align: center;\n}\n\n.aboutPage>div>p    {\n    width: min(50%, 500px);\n    text-align: center;\n}\n\n.rowContainers  {\n    display: flex;\n    gap: 5rem;\n    \n}\n\nimg  {\n    max-width: 100%;\n    height: auto;\n    border-radius: 1rem;\n}\n\n.imgContainers  {\n    flex: 1 .25 50%;\n    min-width: 16rem;\n}\n\n.dscrptContainers   {\n    max-width: 36rem;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    gap: 1rem;\n}", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;IACI,gCAAgC;AACpC;;AAEA;IACI,sBAAsB;IACtB,SAAS;AACb;;;AAGA;IACI,aAAa;IACb,sBAAsB;IACtB,SAAS;IACT,mBAAmB;IACnB,uCAAuC;AAC3C;;AAEA;IACI,qBAAqB;AACzB;;AAEA;IACI,mDAA8B;IAC9B,sBAAsB;IACtB,aAAa;IACb,aAAa;IACb,oCAAoC;IACpC,2BAA2B;AAC/B;;AAEA;IACI,kBAAkB;IAClB,kBAAkB;IAClB,mBAAmB;IACnB,YAAY;IACZ,eAAe;IACf,oEAAoE;IACpE,wBAAwB;IACxB,sFAAsF;AAC1F;;AAEA;IACI,aAAa;IACb,YAAY;IACZ,iBAAiB;IACjB,kBAAkB;IAClB,eAAe;IACf,UAAU;IACV,kBAAkB;IAClB,sFAAsF;IACtF,mCAAmC;IACnC,oBAAoB;IACpB,aAAa;IACb,sBAAsB;IACtB,SAAS;AACb;;AAEA;IACI,kBAAkB;IAClB,mBAAmB;IACnB,kBAAkB;IAClB,iBAAiB;AACrB;;AAEA;IACI,aAAa;IACb,SAAS;AACb;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,WAAW;IACX,SAAS;IACT,kBAAkB;AACtB;;AAEA;IACI,mDAA4B;IAC5B,4BAA4B;IAC5B,+BAA+B;IAC/B,sBAAsB;IACtB,+EAA+E;AACnF;;AAEA;IACI,aAAa;AACjB;;AAEA;IACI,SAAS;IACT,YAAY;IACZ,sBAAsB;IACtB,mBAAmB;IACnB,SAAS;AACb;;AAEA;IACI,kBAAkB;AACtB;;AAEA;IACI,sBAAsB;IACtB,kBAAkB;AACtB;;AAEA;IACI,aAAa;IACb,SAAS;;AAEb;;AAEA;IACI,eAAe;IACf,YAAY;IACZ,mBAAmB;AACvB;;AAEA;IACI,eAAe;IACf,gBAAgB;AACpB;;AAEA;IACI,gBAAgB;IAChB,aAAa;IACb,sBAAsB;IACtB,uBAAuB;IACvB,SAAS;AACb","sourcesContent":[":root{\n    --theme-bg-color: blanchedalmond;\n}\n\n*   {\n    box-sizing: border-box;\n    margin: 0;\n}\n\n\n#content    {\n    display: flex;\n    flex-direction: column;\n    gap: 5rem;\n    align-items: center;\n    background-color: var(--theme-bg-color);\n}\n\nbutton  {\n    padding: .5rem 1.5rem;\n}\n\n.hero {\n    background: url(./barrels.jpg);\n    background-size: cover;\n    height: 600px;\n    display: grid;\n    grid-template-columns: 1fr 1fr 1.5fr;\n    grid-template-rows: 1fr 4fr;\n}\n\n.resturant-name {\n    padding-left: 2rem;\n    align-self: center;\n    justify-self: start;\n    color: white;\n    font-size: 3rem;\n    font-family: Avantgarde, TeX Gyre Adventor, URW Gothic L, sans-serif;\n    font-variant: small-caps;\n    text-shadow: 1px 3px 2px black, 1px 3px 2px black, 1px -1px 0 black, -1px -1px 0 black;\n}\n\n.hero-descript  {\n    padding: 1rem;\n    color: white;\n    font-size: 1.5rem;\n    grid-column: 3 / 4;\n    grid-row: 2 / 3;\n    width: 65%;\n    align-self: center;\n    text-shadow: 1px 2px 2px black, 1px 2px 2px black, 1px -1px 0 black, -1px -1px 0 black;\n    background-color: rgba(0, 0, 0, .2);\n    border-radius: .5rem;\n    display: flex;\n    flex-direction: column;\n    gap: 1rem;\n}\n\n.reservation    {\n    grid-column: 3 / 4;\n    padding-right: 2rem;\n    align-self: center;\n    justify-self: end;\n}\n\n.nav-buttons    {\n    display: flex;\n    gap: 1rem;\n}\n\n.aboutPage   {\n    display: flex;\n    flex-direction: column;\n    width: 60vw;\n    gap: 5rem;\n    font-size: 1.25rem;\n}\n\n.aboutImg   {\n    background: url(./about.jpg);\n    border-top-left-radius: 1rem;\n    border-bottom-left-radius: 1rem;\n    background-size: cover;\n    box-shadow: 0 0 0 0 blanchedalmond inset, -50px 0 50px 8px blanchedalmond inset;\n}\n\n.aboutDescript   {\n    padding: 1rem;\n}\n\n.aboutHeader    {\n    flex:auto;\n    display:flex;\n    flex-direction: column;\n    align-items: center;\n    gap: 1rem;\n}\n\n.aboutPage>div>h1   {\n    text-align: center;\n}\n\n.aboutPage>div>p    {\n    width: min(50%, 500px);\n    text-align: center;\n}\n\n.rowContainers  {\n    display: flex;\n    gap: 5rem;\n    \n}\n\nimg  {\n    max-width: 100%;\n    height: auto;\n    border-radius: 1rem;\n}\n\n.imgContainers  {\n    flex: 1 .25 50%;\n    min-width: 16rem;\n}\n\n.dscrptContainers   {\n    max-width: 36rem;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    gap: 1rem;\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }

  if (!url) {
    return url;
  }

  url = String(url.__esModule ? url.default : url); // If url is already wrapped in quotes, remove them

  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }

  if (options.hash) {
    url += options.hash;
  } // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls


  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }

  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/splash.js":
/*!***********************!*\
  !*** ./src/splash.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "aboutPage": () => (/* binding */ aboutPage)
/* harmony export */ });
/* harmony import */ var _taps_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./taps.jpg */ "./src/taps.jpg");
/* harmony import */ var _pour_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pour.jpg */ "./src/pour.jpg");



function aboutPage()   {
    const about = document.createElement('div')
    about.classList.add('aboutPage')
    
    // const aboutImg1 = document.createElement('div')
    // aboutImg1.classList.add('aboutImg')

    const header = document.createElement('div')
    const aboutRow1 = document.createElement('div')
    const aboutRow2 = document.createElement('div')
    const aboutRow3 = document.createElement('div')
    const footer = document.createElement('div')

    about.appendChild(header)
    header.classList.add('aboutHeader')
    about.appendChild(aboutRow1)
    aboutRow1.classList.add('rowContainers')
    about.appendChild(aboutRow2)
    aboutRow2.classList.add('rowContainers')
    about.appendChild(aboutRow3)
    aboutRow3.classList.add('rowContainers')
    about.appendChild(footer)
    footer.classList.add('aboutHeader')

    const missionHead = document.createElement('h1')
    missionHead.textContent = 'About Us'

    const missionDescript = document.createElement('p')
    missionDescript.textContent = `Our Mission - to bring the elitiest mircrobrew subculture straight to our home town of Queen's by expanding the neighboorhood's taste palate for a wide range of ales.  Down with the water-beer!`

    header.appendChild(missionHead)
    header.appendChild(missionDescript)

    const row1PicContainer = document.createElement('div')
    row1PicContainer.classList.add('imgContainers')
    const row1Dscpt = document.createElement('div')
    row1Dscpt.classList.add('dscrptContainers')

    const row1Pic = document.createElement('img')
    row1Pic.src = _taps_jpg__WEBPACK_IMPORTED_MODULE_0__

    const row1DscptHead = document.createElement('h2')
    row1DscptHead.textContent = `Hobby Homebrewers Rejoice!`
    const row1DscptPara = document.createElement('p')
    row1DscptPara.textContent = `Whether they are using an at home ale kit or run a microdistillery out of their parents garage, we give the local up and coming amateur brewers a chance to showcase their latest batches, for better or for worse.`

    row1Dscpt.appendChild(row1DscptHead)
    row1Dscpt.appendChild(row1DscptPara)
    row1PicContainer.appendChild(row1Pic)

    aboutRow1.appendChild(row1PicContainer)
    aboutRow1.appendChild(row1Dscpt)

////////////

    const row2PicContainer = document.createElement('div')
    row2PicContainer.classList.add('imgContainers')
    const row2Dscpt = document.createElement('div')
    row2Dscpt.classList.add('dscrptContainers')

    const row2Pic = document.createElement('img')
    row2Pic.src = _pour_jpg__WEBPACK_IMPORTED_MODULE_1__

    const row2DscptHead = document.createElement('h2')
    row2DscptHead.textContent = `Quantity over Quality`
    const row2DscptPara = document.createElement('p')
    row2DscptPara.textContent = `We know Johnny with the beer kit he got from last Christmas won't create the next big double IPA, that's why we pull in brewers from around the state.  Someone's bound to have created something special.  Rule of large numbers!`

    row2Dscpt.appendChild(row2DscptHead)
    row2Dscpt.appendChild(row2DscptPara)
    row2PicContainer.appendChild(row2Pic)

    aboutRow2.appendChild(row2Dscpt)
    aboutRow2.appendChild(row2PicContainer)

    // const imgContainer = document.createElement('div')
    // about.appendChild(imgContainer)
    
    // const aboutImg1 = document.createElement('img')
    // aboutImg1.src = AboutImg1


    // imgContainer.appendChild(aboutImg1)

    // const aboutDescrpt = document.createElement('div')
    // aboutDescrpt.textContent = 'Place holder for About Page, YEYEYYE'
    // aboutDescrpt.classList.add('aboutDescript')

    // about.appendChild(aboutDescrpt)

    return about
}

/***/ }),

/***/ "./src/about.jpg":
/*!***********************!*\
  !*** ./src/about.jpg ***!
  \***********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "693e5c1f6c9fc953527b.jpg";

/***/ }),

/***/ "./src/barrels.jpg":
/*!*************************!*\
  !*** ./src/barrels.jpg ***!
  \*************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "f9127a21b6d267b27d99.jpg";

/***/ }),

/***/ "./src/pour.jpg":
/*!**********************!*\
  !*** ./src/pour.jpg ***!
  \**********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "3c1e286d83d47ec1e98b.jpg";

/***/ }),

/***/ "./src/taps.jpg":
/*!**********************!*\
  !*** ./src/taps.jpg ***!
  \**********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "f6fdeec6e2d0a9c94f5e.jpg";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _splash_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./splash.js */ "./src/splash.js");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.css */ "./src/style.css");



const container = document.querySelector('#content')

const hero = document.createElement('div')
hero.classList.add('hero')

container.appendChild(hero)

const name = document.createElement('div')
name.classList.add('resturant-name')
name.textContent = `Queen's Brew House`

hero.appendChild(name)

const descript = document.createElement('div')
descript.textContent = `Local Microbrewery Serving the Queen's community daily from 12pm to midnight.  Located next door to the USPS Office`
descript.classList.add('hero-descript')

hero.appendChild(descript)

const navButtons = document.createElement('div')
navButtons.classList.add('nav-buttons')

const reservation = document.createElement('div')
reservation.classList.add('reservation')

hero.appendChild(reservation)

descript.appendChild(navButtons)

const aboutBtn = document.createElement('button')
const menuBtn = document.createElement('button')
const contactBtn = document.createElement('button')
const reservationBtn = document.createElement('button')

aboutBtn.textContent = 'About'
menuBtn.textContent = 'Menu'
contactBtn.textContent = 'Contact'
reservationBtn.textContent = 'Reserve a Table'

navButtons.appendChild(aboutBtn)
navButtons.appendChild(menuBtn)
navButtons.appendChild(contactBtn)
reservation.appendChild(reservationBtn)

content.appendChild((0,_splash_js__WEBPACK_IMPORTED_MODULE_0__.aboutPage)())

console.log('Hello World!')
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O1dBQ0E7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLEdBQUc7V0FDSDtXQUNBO1dBQ0EsQ0FBQzs7Ozs7V0NQRDs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7Ozs7O1dDZkE7O1dBRUE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOzs7OztXQ3JCQTs7Ozs7Ozs7Ozs7OztBQ0FxQztBQUNqQjs7QUFFcEI7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxvQkFBb0IscURBQVM7O0FBRTdCLDJCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL3NwbGFzaC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvanNvbnAgY2h1bmsgbG9hZGluZyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiLi9iYXJyZWxzLmpwZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fID0gbmV3IFVSTChcIi4vYWJvdXQuanBnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIjpyb290e1xcbiAgICAtLXRoZW1lLWJnLWNvbG9yOiBibGFuY2hlZGFsbW9uZDtcXG59XFxuXFxuKiAgIHtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgbWFyZ2luOiAwO1xcbn1cXG5cXG5cXG4jY29udGVudCAgICB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGdhcDogNXJlbTtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdGhlbWUtYmctY29sb3IpO1xcbn1cXG5cXG5idXR0b24gIHtcXG4gICAgcGFkZGluZzogLjVyZW0gMS41cmVtO1xcbn1cXG5cXG4uaGVybyB7XFxuICAgIGJhY2tncm91bmQ6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gKyBcIik7XFxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxuICAgIGhlaWdodDogNjAwcHg7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmciAxLjVmcjtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgNGZyO1xcbn1cXG5cXG4ucmVzdHVyYW50LW5hbWUge1xcbiAgICBwYWRkaW5nLWxlZnQ6IDJyZW07XFxuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcXG4gICAganVzdGlmeS1zZWxmOiBzdGFydDtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBmb250LXNpemU6IDNyZW07XFxuICAgIGZvbnQtZmFtaWx5OiBBdmFudGdhcmRlLCBUZVggR3lyZSBBZHZlbnRvciwgVVJXIEdvdGhpYyBMLCBzYW5zLXNlcmlmO1xcbiAgICBmb250LXZhcmlhbnQ6IHNtYWxsLWNhcHM7XFxuICAgIHRleHQtc2hhZG93OiAxcHggM3B4IDJweCBibGFjaywgMXB4IDNweCAycHggYmxhY2ssIDFweCAtMXB4IDAgYmxhY2ssIC0xcHggLTFweCAwIGJsYWNrO1xcbn1cXG5cXG4uaGVyby1kZXNjcmlwdCAge1xcbiAgICBwYWRkaW5nOiAxcmVtO1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgICBncmlkLWNvbHVtbjogMyAvIDQ7XFxuICAgIGdyaWQtcm93OiAyIC8gMztcXG4gICAgd2lkdGg6IDY1JTtcXG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xcbiAgICB0ZXh0LXNoYWRvdzogMXB4IDJweCAycHggYmxhY2ssIDFweCAycHggMnB4IGJsYWNrLCAxcHggLTFweCAwIGJsYWNrLCAtMXB4IC0xcHggMCBibGFjaztcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAuMik7XFxuICAgIGJvcmRlci1yYWRpdXM6IC41cmVtO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBnYXA6IDFyZW07XFxufVxcblxcbi5yZXNlcnZhdGlvbiAgICB7XFxuICAgIGdyaWQtY29sdW1uOiAzIC8gNDtcXG4gICAgcGFkZGluZy1yaWdodDogMnJlbTtcXG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xcbiAgICBqdXN0aWZ5LXNlbGY6IGVuZDtcXG59XFxuXFxuLm5hdi1idXR0b25zICAgIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZ2FwOiAxcmVtO1xcbn1cXG5cXG4uYWJvdXRQYWdlICAge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICB3aWR0aDogNjB2dztcXG4gICAgZ2FwOiA1cmVtO1xcbiAgICBmb250LXNpemU6IDEuMjVyZW07XFxufVxcblxcbi5hYm91dEltZyAgIHtcXG4gICAgYmFja2dyb3VuZDogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyArIFwiKTtcXG4gICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMXJlbTtcXG4gICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMXJlbTtcXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG4gICAgYm94LXNoYWRvdzogMCAwIDAgMCBibGFuY2hlZGFsbW9uZCBpbnNldCwgLTUwcHggMCA1MHB4IDhweCBibGFuY2hlZGFsbW9uZCBpbnNldDtcXG59XFxuXFxuLmFib3V0RGVzY3JpcHQgICB7XFxuICAgIHBhZGRpbmc6IDFyZW07XFxufVxcblxcbi5hYm91dEhlYWRlciAgICB7XFxuICAgIGZsZXg6YXV0bztcXG4gICAgZGlzcGxheTpmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBnYXA6IDFyZW07XFxufVxcblxcbi5hYm91dFBhZ2U+ZGl2PmgxICAge1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbi5hYm91dFBhZ2U+ZGl2PnAgICAge1xcbiAgICB3aWR0aDogbWluKDUwJSwgNTAwcHgpO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbi5yb3dDb250YWluZXJzICB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGdhcDogNXJlbTtcXG4gICAgXFxufVxcblxcbmltZyAge1xcbiAgICBtYXgtd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogYXV0bztcXG4gICAgYm9yZGVyLXJhZGl1czogMXJlbTtcXG59XFxuXFxuLmltZ0NvbnRhaW5lcnMgIHtcXG4gICAgZmxleDogMSAuMjUgNTAlO1xcbiAgICBtaW4td2lkdGg6IDE2cmVtO1xcbn1cXG5cXG4uZHNjcnB0Q29udGFpbmVycyAgIHtcXG4gICAgbWF4LXdpZHRoOiAzNnJlbTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGdhcDogMXJlbTtcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLGdDQUFnQztBQUNwQzs7QUFFQTtJQUNJLHNCQUFzQjtJQUN0QixTQUFTO0FBQ2I7OztBQUdBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixTQUFTO0lBQ1QsbUJBQW1CO0lBQ25CLHVDQUF1QztBQUMzQzs7QUFFQTtJQUNJLHFCQUFxQjtBQUN6Qjs7QUFFQTtJQUNJLG1EQUE4QjtJQUM5QixzQkFBc0I7SUFDdEIsYUFBYTtJQUNiLGFBQWE7SUFDYixvQ0FBb0M7SUFDcEMsMkJBQTJCO0FBQy9COztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLGtCQUFrQjtJQUNsQixtQkFBbUI7SUFDbkIsWUFBWTtJQUNaLGVBQWU7SUFDZixvRUFBb0U7SUFDcEUsd0JBQXdCO0lBQ3hCLHNGQUFzRjtBQUMxRjs7QUFFQTtJQUNJLGFBQWE7SUFDYixZQUFZO0lBQ1osaUJBQWlCO0lBQ2pCLGtCQUFrQjtJQUNsQixlQUFlO0lBQ2YsVUFBVTtJQUNWLGtCQUFrQjtJQUNsQixzRkFBc0Y7SUFDdEYsbUNBQW1DO0lBQ25DLG9CQUFvQjtJQUNwQixhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLFNBQVM7QUFDYjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixtQkFBbUI7SUFDbkIsa0JBQWtCO0lBQ2xCLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixTQUFTO0FBQ2I7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLFdBQVc7SUFDWCxTQUFTO0lBQ1Qsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksbURBQTRCO0lBQzVCLDRCQUE0QjtJQUM1QiwrQkFBK0I7SUFDL0Isc0JBQXNCO0lBQ3RCLCtFQUErRTtBQUNuRjs7QUFFQTtJQUNJLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxTQUFTO0lBQ1QsWUFBWTtJQUNaLHNCQUFzQjtJQUN0QixtQkFBbUI7SUFDbkIsU0FBUztBQUNiOztBQUVBO0lBQ0ksa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksc0JBQXNCO0lBQ3RCLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGFBQWE7SUFDYixTQUFTOztBQUViOztBQUVBO0lBQ0ksZUFBZTtJQUNmLFlBQVk7SUFDWixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsdUJBQXVCO0lBQ3ZCLFNBQVM7QUFDYlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCI6cm9vdHtcXG4gICAgLS10aGVtZS1iZy1jb2xvcjogYmxhbmNoZWRhbG1vbmQ7XFxufVxcblxcbiogICB7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgIG1hcmdpbjogMDtcXG59XFxuXFxuXFxuI2NvbnRlbnQgICAge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBnYXA6IDVyZW07XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXRoZW1lLWJnLWNvbG9yKTtcXG59XFxuXFxuYnV0dG9uICB7XFxuICAgIHBhZGRpbmc6IC41cmVtIDEuNXJlbTtcXG59XFxuXFxuLmhlcm8ge1xcbiAgICBiYWNrZ3JvdW5kOiB1cmwoLi9iYXJyZWxzLmpwZyk7XFxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxuICAgIGhlaWdodDogNjAwcHg7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmciAxLjVmcjtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgNGZyO1xcbn1cXG5cXG4ucmVzdHVyYW50LW5hbWUge1xcbiAgICBwYWRkaW5nLWxlZnQ6IDJyZW07XFxuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcXG4gICAganVzdGlmeS1zZWxmOiBzdGFydDtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBmb250LXNpemU6IDNyZW07XFxuICAgIGZvbnQtZmFtaWx5OiBBdmFudGdhcmRlLCBUZVggR3lyZSBBZHZlbnRvciwgVVJXIEdvdGhpYyBMLCBzYW5zLXNlcmlmO1xcbiAgICBmb250LXZhcmlhbnQ6IHNtYWxsLWNhcHM7XFxuICAgIHRleHQtc2hhZG93OiAxcHggM3B4IDJweCBibGFjaywgMXB4IDNweCAycHggYmxhY2ssIDFweCAtMXB4IDAgYmxhY2ssIC0xcHggLTFweCAwIGJsYWNrO1xcbn1cXG5cXG4uaGVyby1kZXNjcmlwdCAge1xcbiAgICBwYWRkaW5nOiAxcmVtO1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgICBncmlkLWNvbHVtbjogMyAvIDQ7XFxuICAgIGdyaWQtcm93OiAyIC8gMztcXG4gICAgd2lkdGg6IDY1JTtcXG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xcbiAgICB0ZXh0LXNoYWRvdzogMXB4IDJweCAycHggYmxhY2ssIDFweCAycHggMnB4IGJsYWNrLCAxcHggLTFweCAwIGJsYWNrLCAtMXB4IC0xcHggMCBibGFjaztcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAuMik7XFxuICAgIGJvcmRlci1yYWRpdXM6IC41cmVtO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBnYXA6IDFyZW07XFxufVxcblxcbi5yZXNlcnZhdGlvbiAgICB7XFxuICAgIGdyaWQtY29sdW1uOiAzIC8gNDtcXG4gICAgcGFkZGluZy1yaWdodDogMnJlbTtcXG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xcbiAgICBqdXN0aWZ5LXNlbGY6IGVuZDtcXG59XFxuXFxuLm5hdi1idXR0b25zICAgIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZ2FwOiAxcmVtO1xcbn1cXG5cXG4uYWJvdXRQYWdlICAge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICB3aWR0aDogNjB2dztcXG4gICAgZ2FwOiA1cmVtO1xcbiAgICBmb250LXNpemU6IDEuMjVyZW07XFxufVxcblxcbi5hYm91dEltZyAgIHtcXG4gICAgYmFja2dyb3VuZDogdXJsKC4vYWJvdXQuanBnKTtcXG4gICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMXJlbTtcXG4gICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMXJlbTtcXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG4gICAgYm94LXNoYWRvdzogMCAwIDAgMCBibGFuY2hlZGFsbW9uZCBpbnNldCwgLTUwcHggMCA1MHB4IDhweCBibGFuY2hlZGFsbW9uZCBpbnNldDtcXG59XFxuXFxuLmFib3V0RGVzY3JpcHQgICB7XFxuICAgIHBhZGRpbmc6IDFyZW07XFxufVxcblxcbi5hYm91dEhlYWRlciAgICB7XFxuICAgIGZsZXg6YXV0bztcXG4gICAgZGlzcGxheTpmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBnYXA6IDFyZW07XFxufVxcblxcbi5hYm91dFBhZ2U+ZGl2PmgxICAge1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbi5hYm91dFBhZ2U+ZGl2PnAgICAge1xcbiAgICB3aWR0aDogbWluKDUwJSwgNTAwcHgpO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbi5yb3dDb250YWluZXJzICB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGdhcDogNXJlbTtcXG4gICAgXFxufVxcblxcbmltZyAge1xcbiAgICBtYXgtd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogYXV0bztcXG4gICAgYm9yZGVyLXJhZGl1czogMXJlbTtcXG59XFxuXFxuLmltZ0NvbnRhaW5lcnMgIHtcXG4gICAgZmxleDogMSAuMjUgNTAlO1xcbiAgICBtaW4td2lkdGg6IDE2cmVtO1xcbn1cXG5cXG4uZHNjcnB0Q29udGFpbmVycyAgIHtcXG4gICAgbWF4LXdpZHRoOiAzNnJlbTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGdhcDogMXJlbTtcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuXG4gIGlmICghdXJsKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfVxuXG4gIHVybCA9IFN0cmluZyh1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsKTsgLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG5cbiAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgfVxuXG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9IC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcblxuXG4gIGlmICgvW1wiJygpIFxcdFxcbl18KCUyMCkvLnRlc3QodXJsKSB8fCBvcHRpb25zLm5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csIFwiXFxcXG5cIiksIFwiXFxcIlwiKTtcbiAgfVxuXG4gIHJldHVybiB1cmw7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCBUYXBzIGZyb20gJy4vdGFwcy5qcGcnXG5pbXBvcnQgUG91ciBmcm9tICcuL3BvdXIuanBnJ1xuXG5leHBvcnQgZnVuY3Rpb24gYWJvdXRQYWdlKCkgICB7XG4gICAgY29uc3QgYWJvdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIGFib3V0LmNsYXNzTGlzdC5hZGQoJ2Fib3V0UGFnZScpXG4gICAgXG4gICAgLy8gY29uc3QgYWJvdXRJbWcxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICAvLyBhYm91dEltZzEuY2xhc3NMaXN0LmFkZCgnYWJvdXRJbWcnKVxuXG4gICAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBjb25zdCBhYm91dFJvdzEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIGNvbnN0IGFib3V0Um93MiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgY29uc3QgYWJvdXRSb3czID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBjb25zdCBmb290ZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuXG4gICAgYWJvdXQuYXBwZW5kQ2hpbGQoaGVhZGVyKVxuICAgIGhlYWRlci5jbGFzc0xpc3QuYWRkKCdhYm91dEhlYWRlcicpXG4gICAgYWJvdXQuYXBwZW5kQ2hpbGQoYWJvdXRSb3cxKVxuICAgIGFib3V0Um93MS5jbGFzc0xpc3QuYWRkKCdyb3dDb250YWluZXJzJylcbiAgICBhYm91dC5hcHBlbmRDaGlsZChhYm91dFJvdzIpXG4gICAgYWJvdXRSb3cyLmNsYXNzTGlzdC5hZGQoJ3Jvd0NvbnRhaW5lcnMnKVxuICAgIGFib3V0LmFwcGVuZENoaWxkKGFib3V0Um93MylcbiAgICBhYm91dFJvdzMuY2xhc3NMaXN0LmFkZCgncm93Q29udGFpbmVycycpXG4gICAgYWJvdXQuYXBwZW5kQ2hpbGQoZm9vdGVyKVxuICAgIGZvb3Rlci5jbGFzc0xpc3QuYWRkKCdhYm91dEhlYWRlcicpXG5cbiAgICBjb25zdCBtaXNzaW9uSGVhZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJylcbiAgICBtaXNzaW9uSGVhZC50ZXh0Q29udGVudCA9ICdBYm91dCBVcydcblxuICAgIGNvbnN0IG1pc3Npb25EZXNjcmlwdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKVxuICAgIG1pc3Npb25EZXNjcmlwdC50ZXh0Q29udGVudCA9IGBPdXIgTWlzc2lvbiAtIHRvIGJyaW5nIHRoZSBlbGl0aWVzdCBtaXJjcm9icmV3IHN1YmN1bHR1cmUgc3RyYWlnaHQgdG8gb3VyIGhvbWUgdG93biBvZiBRdWVlbidzIGJ5IGV4cGFuZGluZyB0aGUgbmVpZ2hib29yaG9vZCdzIHRhc3RlIHBhbGF0ZSBmb3IgYSB3aWRlIHJhbmdlIG9mIGFsZXMuICBEb3duIHdpdGggdGhlIHdhdGVyLWJlZXIhYFxuXG4gICAgaGVhZGVyLmFwcGVuZENoaWxkKG1pc3Npb25IZWFkKVxuICAgIGhlYWRlci5hcHBlbmRDaGlsZChtaXNzaW9uRGVzY3JpcHQpXG5cbiAgICBjb25zdCByb3cxUGljQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICByb3cxUGljQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2ltZ0NvbnRhaW5lcnMnKVxuICAgIGNvbnN0IHJvdzFEc2NwdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgcm93MURzY3B0LmNsYXNzTGlzdC5hZGQoJ2RzY3JwdENvbnRhaW5lcnMnKVxuXG4gICAgY29uc3Qgcm93MVBpYyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpXG4gICAgcm93MVBpYy5zcmMgPSBUYXBzXG5cbiAgICBjb25zdCByb3cxRHNjcHRIZWFkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKVxuICAgIHJvdzFEc2NwdEhlYWQudGV4dENvbnRlbnQgPSBgSG9iYnkgSG9tZWJyZXdlcnMgUmVqb2ljZSFgXG4gICAgY29uc3Qgcm93MURzY3B0UGFyYSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKVxuICAgIHJvdzFEc2NwdFBhcmEudGV4dENvbnRlbnQgPSBgV2hldGhlciB0aGV5IGFyZSB1c2luZyBhbiBhdCBob21lIGFsZSBraXQgb3IgcnVuIGEgbWljcm9kaXN0aWxsZXJ5IG91dCBvZiB0aGVpciBwYXJlbnRzIGdhcmFnZSwgd2UgZ2l2ZSB0aGUgbG9jYWwgdXAgYW5kIGNvbWluZyBhbWF0ZXVyIGJyZXdlcnMgYSBjaGFuY2UgdG8gc2hvd2Nhc2UgdGhlaXIgbGF0ZXN0IGJhdGNoZXMsIGZvciBiZXR0ZXIgb3IgZm9yIHdvcnNlLmBcblxuICAgIHJvdzFEc2NwdC5hcHBlbmRDaGlsZChyb3cxRHNjcHRIZWFkKVxuICAgIHJvdzFEc2NwdC5hcHBlbmRDaGlsZChyb3cxRHNjcHRQYXJhKVxuICAgIHJvdzFQaWNDb250YWluZXIuYXBwZW5kQ2hpbGQocm93MVBpYylcblxuICAgIGFib3V0Um93MS5hcHBlbmRDaGlsZChyb3cxUGljQ29udGFpbmVyKVxuICAgIGFib3V0Um93MS5hcHBlbmRDaGlsZChyb3cxRHNjcHQpXG5cbi8vLy8vLy8vLy8vL1xuXG4gICAgY29uc3Qgcm93MlBpY0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgcm93MlBpY0NvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdpbWdDb250YWluZXJzJylcbiAgICBjb25zdCByb3cyRHNjcHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIHJvdzJEc2NwdC5jbGFzc0xpc3QuYWRkKCdkc2NycHRDb250YWluZXJzJylcblxuICAgIGNvbnN0IHJvdzJQaWMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKVxuICAgIHJvdzJQaWMuc3JjID0gUG91clxuXG4gICAgY29uc3Qgcm93MkRzY3B0SGVhZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJylcbiAgICByb3cyRHNjcHRIZWFkLnRleHRDb250ZW50ID0gYFF1YW50aXR5IG92ZXIgUXVhbGl0eWBcbiAgICBjb25zdCByb3cyRHNjcHRQYXJhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpXG4gICAgcm93MkRzY3B0UGFyYS50ZXh0Q29udGVudCA9IGBXZSBrbm93IEpvaG5ueSB3aXRoIHRoZSBiZWVyIGtpdCBoZSBnb3QgZnJvbSBsYXN0IENocmlzdG1hcyB3b24ndCBjcmVhdGUgdGhlIG5leHQgYmlnIGRvdWJsZSBJUEEsIHRoYXQncyB3aHkgd2UgcHVsbCBpbiBicmV3ZXJzIGZyb20gYXJvdW5kIHRoZSBzdGF0ZS4gIFNvbWVvbmUncyBib3VuZCB0byBoYXZlIGNyZWF0ZWQgc29tZXRoaW5nIHNwZWNpYWwuICBSdWxlIG9mIGxhcmdlIG51bWJlcnMhYFxuXG4gICAgcm93MkRzY3B0LmFwcGVuZENoaWxkKHJvdzJEc2NwdEhlYWQpXG4gICAgcm93MkRzY3B0LmFwcGVuZENoaWxkKHJvdzJEc2NwdFBhcmEpXG4gICAgcm93MlBpY0NvbnRhaW5lci5hcHBlbmRDaGlsZChyb3cyUGljKVxuXG4gICAgYWJvdXRSb3cyLmFwcGVuZENoaWxkKHJvdzJEc2NwdClcbiAgICBhYm91dFJvdzIuYXBwZW5kQ2hpbGQocm93MlBpY0NvbnRhaW5lcilcblxuICAgIC8vIGNvbnN0IGltZ0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgLy8gYWJvdXQuYXBwZW5kQ2hpbGQoaW1nQ29udGFpbmVyKVxuICAgIFxuICAgIC8vIGNvbnN0IGFib3V0SW1nMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpXG4gICAgLy8gYWJvdXRJbWcxLnNyYyA9IEFib3V0SW1nMVxuXG5cbiAgICAvLyBpbWdDb250YWluZXIuYXBwZW5kQ2hpbGQoYWJvdXRJbWcxKVxuXG4gICAgLy8gY29uc3QgYWJvdXREZXNjcnB0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICAvLyBhYm91dERlc2NycHQudGV4dENvbnRlbnQgPSAnUGxhY2UgaG9sZGVyIGZvciBBYm91dCBQYWdlLCBZRVlFWVlFJ1xuICAgIC8vIGFib3V0RGVzY3JwdC5jbGFzc0xpc3QuYWRkKCdhYm91dERlc2NyaXB0JylcblxuICAgIC8vIGFib3V0LmFwcGVuZENoaWxkKGFib3V0RGVzY3JwdClcblxuICAgIHJldHVybiBhYm91dFxufSIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5tID0gX193ZWJwYWNrX21vZHVsZXNfXztcblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmNcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSBzY3JpcHRVcmwgPSBzY3JpcHRzW3NjcmlwdHMubGVuZ3RoIC0gMV0uc3JjXG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18uYiA9IGRvY3VtZW50LmJhc2VVUkkgfHwgc2VsZi5sb2NhdGlvbi5ocmVmO1xuXG4vLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuLy8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4vLyBbcmVzb2x2ZSwgcmVqZWN0LCBQcm9taXNlXSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbnZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG5cdFwibWFpblwiOiAwXG59O1xuXG4vLyBubyBjaHVuayBvbiBkZW1hbmQgbG9hZGluZ1xuXG4vLyBubyBwcmVmZXRjaGluZ1xuXG4vLyBubyBwcmVsb2FkZWRcblxuLy8gbm8gSE1SXG5cbi8vIG5vIEhNUiBtYW5pZmVzdFxuXG4vLyBubyBvbiBjaHVua3MgbG9hZGVkXG5cbi8vIG5vIGpzb25wIGZ1bmN0aW9uIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQge2Fib3V0UGFnZX0gZnJvbSAnLi9zcGxhc2guanMnXG5pbXBvcnQgJy4vc3R5bGUuY3NzJ1xuXG5jb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY29udGVudCcpXG5cbmNvbnN0IGhlcm8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuaGVyby5jbGFzc0xpc3QuYWRkKCdoZXJvJylcblxuY29udGFpbmVyLmFwcGVuZENoaWxkKGhlcm8pXG5cbmNvbnN0IG5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxubmFtZS5jbGFzc0xpc3QuYWRkKCdyZXN0dXJhbnQtbmFtZScpXG5uYW1lLnRleHRDb250ZW50ID0gYFF1ZWVuJ3MgQnJldyBIb3VzZWBcblxuaGVyby5hcHBlbmRDaGlsZChuYW1lKVxuXG5jb25zdCBkZXNjcmlwdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG5kZXNjcmlwdC50ZXh0Q29udGVudCA9IGBMb2NhbCBNaWNyb2JyZXdlcnkgU2VydmluZyB0aGUgUXVlZW4ncyBjb21tdW5pdHkgZGFpbHkgZnJvbSAxMnBtIHRvIG1pZG5pZ2h0LiAgTG9jYXRlZCBuZXh0IGRvb3IgdG8gdGhlIFVTUFMgT2ZmaWNlYFxuZGVzY3JpcHQuY2xhc3NMaXN0LmFkZCgnaGVyby1kZXNjcmlwdCcpXG5cbmhlcm8uYXBwZW5kQ2hpbGQoZGVzY3JpcHQpXG5cbmNvbnN0IG5hdkJ1dHRvbnMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxubmF2QnV0dG9ucy5jbGFzc0xpc3QuYWRkKCduYXYtYnV0dG9ucycpXG5cbmNvbnN0IHJlc2VydmF0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbnJlc2VydmF0aW9uLmNsYXNzTGlzdC5hZGQoJ3Jlc2VydmF0aW9uJylcblxuaGVyby5hcHBlbmRDaGlsZChyZXNlcnZhdGlvbilcblxuZGVzY3JpcHQuYXBwZW5kQ2hpbGQobmF2QnV0dG9ucylcblxuY29uc3QgYWJvdXRCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKVxuY29uc3QgbWVudUJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpXG5jb25zdCBjb250YWN0QnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJylcbmNvbnN0IHJlc2VydmF0aW9uQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJylcblxuYWJvdXRCdG4udGV4dENvbnRlbnQgPSAnQWJvdXQnXG5tZW51QnRuLnRleHRDb250ZW50ID0gJ01lbnUnXG5jb250YWN0QnRuLnRleHRDb250ZW50ID0gJ0NvbnRhY3QnXG5yZXNlcnZhdGlvbkJ0bi50ZXh0Q29udGVudCA9ICdSZXNlcnZlIGEgVGFibGUnXG5cbm5hdkJ1dHRvbnMuYXBwZW5kQ2hpbGQoYWJvdXRCdG4pXG5uYXZCdXR0b25zLmFwcGVuZENoaWxkKG1lbnVCdG4pXG5uYXZCdXR0b25zLmFwcGVuZENoaWxkKGNvbnRhY3RCdG4pXG5yZXNlcnZhdGlvbi5hcHBlbmRDaGlsZChyZXNlcnZhdGlvbkJ0bilcblxuY29udGVudC5hcHBlbmRDaGlsZChhYm91dFBhZ2UoKSlcblxuY29uc29sZS5sb2coJ0hlbGxvIFdvcmxkIScpIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9