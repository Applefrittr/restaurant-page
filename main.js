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
___CSS_LOADER_EXPORT___.push([module.id, ":root{\n    --theme-bg-color: blanchedalmond;\n}\n\n*   {\n    box-sizing: border-box;\n    margin: 0;\n}\n\n\n#content    {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    background-color: var(--theme-bg-color);\n    height: 100%;\n}\n\nbutton  {\n    padding: .5rem 1.5rem;\n}\n\n.hero {\n    background: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n    background-size: cover;\n    height: 600px;\n    display: grid;\n    grid-template-columns: 1fr 1fr 1.5fr;\n    grid-template-rows: 1fr 4fr;\n    margin-bottom: 5rem;\n}\n\n.resturant-name {\n    padding-left: 2rem;\n    align-self: center;\n    justify-self: start;\n    color: white;\n    font-size: 3rem;\n    font-family: Avantgarde, TeX Gyre Adventor, URW Gothic L, sans-serif;\n    font-variant: small-caps;\n    text-shadow: 1px 3px 2px black, 1px 3px 2px black, 1px -1px 0 black, -1px -1px 0 black;\n}\n\n.hero-descript  {\n    padding: 1rem;\n    color: white;\n    font-size: 1.5rem;\n    grid-column: 3 / 4;\n    grid-row: 2 / 3;\n    width: 65%;\n    align-self: center;\n    text-shadow: 1px 2px 2px black, 1px 2px 2px black, 1px -1px 0 black, -1px -1px 0 black;\n    background-color: rgba(0, 0, 0, .2);\n    border-radius: .5rem;\n    display: flex;\n    flex-direction: column;\n    gap: 1rem;\n}\n\n.reservation    {\n    grid-column: 3 / 4;\n    padding-right: 2rem;\n    align-self: center;\n    justify-self: end;\n}\n\n.nav-buttons    {\n    display: flex;\n    gap: 1rem;\n}\n\n.aboutPage   {\n    display: flex;\n    flex-direction: column;\n    width: 60vw;\n    gap: 5rem;\n    font-size: 1.25rem;\n    padding-bottom: 2rem;\n    transition: opacity 1s 0s;\n}\n\n.aboutImg   {\n    background: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ");\n    border-top-left-radius: 1rem;\n    border-bottom-left-radius: 1rem;\n    background-size: cover;\n    box-shadow: 0 0 0 0 blanchedalmond inset, -50px 0 50px 8px blanchedalmond inset;\n}\n\n.aboutDescript   {\n    padding: 1rem;\n}\n\n.aboutHeader    {\n    flex:auto;\n    display:flex;\n    flex-direction: column;\n    align-items: center;\n    gap: 1rem;\n}\n\n.aboutPage>div>h1   {\n    text-align: center;\n}\n\n.aboutPage>div>p    {\n    width: min(50%, 500px);\n    text-align: center;\n}\n\n.rowContainers  {\n    display: flex;\n    gap: 5rem;\n    \n}\n\nimg  {\n    max-width: 100%;\n    height: auto;\n    border-radius: 1rem;\n}\n\n.imgContainers  {\n    flex: 1 .25 50%;\n    min-width: 16rem;\n}\n\n.dscrptContainers   {\n    max-width: 36rem;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    gap: 1rem;\n}\n\n.menuPage   {\n    width: 85vw;\n    display:flex;\n    flex-wrap: wrap;\n    gap: 3rem;\n    justify-content: center;\n    padding-bottom: 2rem;\n    font-size: 1.25rem;\n    transition: opacity 1s 0s;\n}\n\n.menuHeader {\n    width: 100%;\n    text-align: center;\n    display: flex;\n    flex-direction: column;\n    gap: 1rem;\n}\n\n.itemCard   {\n    min-width: 16rem;\n    text-align: center;\n    display: flex;\n    flex-direction: column;\n    font-size: 1.25rem;\n    gap: 1rem;\n}\n\n.removed    {\n    opacity: 0;\n}\n\n.contactPage    {\n    display: flex;\n    flex-wrap: wrap;\n    font-size: 1.25rem;\n    padding-bottom: 2rem;\n    gap: 3rem;\n}\n\n.contactInfo    {\n    display: flex;\n    flex-direction: column;\n    gap: 1rem;\n}\n\n.contactForm    {\n    display: flex;\n    flex-direction: column;\n    gap: 1rem;\n}\n.contactForm>div    {\n    display: flex;\n    flex-direction: column;\n}\n\ninput, \ntextarea    {\n    border-radius: 2px;\n    border: 1px solid black;\n}\n\nfooter  {\n    padding: 1rem;\n    font-size: 1rem;\n    display: flex;\n    align-items: center;\n    gap: .5rem;\n}\n\na>img  {\n    width: 24px;\n    height: auto;\n}", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;IACI,gCAAgC;AACpC;;AAEA;IACI,sBAAsB;IACtB,SAAS;AACb;;;AAGA;IACI,aAAa;IACb,sBAAsB;IACtB,mBAAmB;IACnB,uCAAuC;IACvC,YAAY;AAChB;;AAEA;IACI,qBAAqB;AACzB;;AAEA;IACI,mDAA8B;IAC9B,sBAAsB;IACtB,aAAa;IACb,aAAa;IACb,oCAAoC;IACpC,2BAA2B;IAC3B,mBAAmB;AACvB;;AAEA;IACI,kBAAkB;IAClB,kBAAkB;IAClB,mBAAmB;IACnB,YAAY;IACZ,eAAe;IACf,oEAAoE;IACpE,wBAAwB;IACxB,sFAAsF;AAC1F;;AAEA;IACI,aAAa;IACb,YAAY;IACZ,iBAAiB;IACjB,kBAAkB;IAClB,eAAe;IACf,UAAU;IACV,kBAAkB;IAClB,sFAAsF;IACtF,mCAAmC;IACnC,oBAAoB;IACpB,aAAa;IACb,sBAAsB;IACtB,SAAS;AACb;;AAEA;IACI,kBAAkB;IAClB,mBAAmB;IACnB,kBAAkB;IAClB,iBAAiB;AACrB;;AAEA;IACI,aAAa;IACb,SAAS;AACb;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,WAAW;IACX,SAAS;IACT,kBAAkB;IAClB,oBAAoB;IACpB,yBAAyB;AAC7B;;AAEA;IACI,mDAA4B;IAC5B,4BAA4B;IAC5B,+BAA+B;IAC/B,sBAAsB;IACtB,+EAA+E;AACnF;;AAEA;IACI,aAAa;AACjB;;AAEA;IACI,SAAS;IACT,YAAY;IACZ,sBAAsB;IACtB,mBAAmB;IACnB,SAAS;AACb;;AAEA;IACI,kBAAkB;AACtB;;AAEA;IACI,sBAAsB;IACtB,kBAAkB;AACtB;;AAEA;IACI,aAAa;IACb,SAAS;;AAEb;;AAEA;IACI,eAAe;IACf,YAAY;IACZ,mBAAmB;AACvB;;AAEA;IACI,eAAe;IACf,gBAAgB;AACpB;;AAEA;IACI,gBAAgB;IAChB,aAAa;IACb,sBAAsB;IACtB,uBAAuB;IACvB,SAAS;AACb;;AAEA;IACI,WAAW;IACX,YAAY;IACZ,eAAe;IACf,SAAS;IACT,uBAAuB;IACvB,oBAAoB;IACpB,kBAAkB;IAClB,yBAAyB;AAC7B;;AAEA;IACI,WAAW;IACX,kBAAkB;IAClB,aAAa;IACb,sBAAsB;IACtB,SAAS;AACb;;AAEA;IACI,gBAAgB;IAChB,kBAAkB;IAClB,aAAa;IACb,sBAAsB;IACtB,kBAAkB;IAClB,SAAS;AACb;;AAEA;IACI,UAAU;AACd;;AAEA;IACI,aAAa;IACb,eAAe;IACf,kBAAkB;IAClB,oBAAoB;IACpB,SAAS;AACb;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,SAAS;AACb;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,SAAS;AACb;AACA;IACI,aAAa;IACb,sBAAsB;AAC1B;;AAEA;;IAEI,kBAAkB;IAClB,uBAAuB;AAC3B;;AAEA;IACI,aAAa;IACb,eAAe;IACf,aAAa;IACb,mBAAmB;IACnB,UAAU;AACd;;AAEA;IACI,WAAW;IACX,YAAY;AAChB","sourcesContent":[":root{\n    --theme-bg-color: blanchedalmond;\n}\n\n*   {\n    box-sizing: border-box;\n    margin: 0;\n}\n\n\n#content    {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    background-color: var(--theme-bg-color);\n    height: 100%;\n}\n\nbutton  {\n    padding: .5rem 1.5rem;\n}\n\n.hero {\n    background: url(./barrels.jpg);\n    background-size: cover;\n    height: 600px;\n    display: grid;\n    grid-template-columns: 1fr 1fr 1.5fr;\n    grid-template-rows: 1fr 4fr;\n    margin-bottom: 5rem;\n}\n\n.resturant-name {\n    padding-left: 2rem;\n    align-self: center;\n    justify-self: start;\n    color: white;\n    font-size: 3rem;\n    font-family: Avantgarde, TeX Gyre Adventor, URW Gothic L, sans-serif;\n    font-variant: small-caps;\n    text-shadow: 1px 3px 2px black, 1px 3px 2px black, 1px -1px 0 black, -1px -1px 0 black;\n}\n\n.hero-descript  {\n    padding: 1rem;\n    color: white;\n    font-size: 1.5rem;\n    grid-column: 3 / 4;\n    grid-row: 2 / 3;\n    width: 65%;\n    align-self: center;\n    text-shadow: 1px 2px 2px black, 1px 2px 2px black, 1px -1px 0 black, -1px -1px 0 black;\n    background-color: rgba(0, 0, 0, .2);\n    border-radius: .5rem;\n    display: flex;\n    flex-direction: column;\n    gap: 1rem;\n}\n\n.reservation    {\n    grid-column: 3 / 4;\n    padding-right: 2rem;\n    align-self: center;\n    justify-self: end;\n}\n\n.nav-buttons    {\n    display: flex;\n    gap: 1rem;\n}\n\n.aboutPage   {\n    display: flex;\n    flex-direction: column;\n    width: 60vw;\n    gap: 5rem;\n    font-size: 1.25rem;\n    padding-bottom: 2rem;\n    transition: opacity 1s 0s;\n}\n\n.aboutImg   {\n    background: url(./about.jpg);\n    border-top-left-radius: 1rem;\n    border-bottom-left-radius: 1rem;\n    background-size: cover;\n    box-shadow: 0 0 0 0 blanchedalmond inset, -50px 0 50px 8px blanchedalmond inset;\n}\n\n.aboutDescript   {\n    padding: 1rem;\n}\n\n.aboutHeader    {\n    flex:auto;\n    display:flex;\n    flex-direction: column;\n    align-items: center;\n    gap: 1rem;\n}\n\n.aboutPage>div>h1   {\n    text-align: center;\n}\n\n.aboutPage>div>p    {\n    width: min(50%, 500px);\n    text-align: center;\n}\n\n.rowContainers  {\n    display: flex;\n    gap: 5rem;\n    \n}\n\nimg  {\n    max-width: 100%;\n    height: auto;\n    border-radius: 1rem;\n}\n\n.imgContainers  {\n    flex: 1 .25 50%;\n    min-width: 16rem;\n}\n\n.dscrptContainers   {\n    max-width: 36rem;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    gap: 1rem;\n}\n\n.menuPage   {\n    width: 85vw;\n    display:flex;\n    flex-wrap: wrap;\n    gap: 3rem;\n    justify-content: center;\n    padding-bottom: 2rem;\n    font-size: 1.25rem;\n    transition: opacity 1s 0s;\n}\n\n.menuHeader {\n    width: 100%;\n    text-align: center;\n    display: flex;\n    flex-direction: column;\n    gap: 1rem;\n}\n\n.itemCard   {\n    min-width: 16rem;\n    text-align: center;\n    display: flex;\n    flex-direction: column;\n    font-size: 1.25rem;\n    gap: 1rem;\n}\n\n.removed    {\n    opacity: 0;\n}\n\n.contactPage    {\n    display: flex;\n    flex-wrap: wrap;\n    font-size: 1.25rem;\n    padding-bottom: 2rem;\n    gap: 3rem;\n}\n\n.contactInfo    {\n    display: flex;\n    flex-direction: column;\n    gap: 1rem;\n}\n\n.contactForm    {\n    display: flex;\n    flex-direction: column;\n    gap: 1rem;\n}\n.contactForm>div    {\n    display: flex;\n    flex-direction: column;\n}\n\ninput, \ntextarea    {\n    border-radius: 2px;\n    border: 1px solid black;\n}\n\nfooter  {\n    padding: 1rem;\n    font-size: 1rem;\n    display: flex;\n    align-items: center;\n    gap: .5rem;\n}\n\na>img  {\n    width: 24px;\n    height: auto;\n}"],"sourceRoot":""}]);
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

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "contact": () => (/* binding */ contact)
/* harmony export */ });

function contact()   {

    const container = document.createElement('div')
    container.classList.add('contactPage')

    const contactInfo = document.createElement('div')
    contactInfo.classList.add('contactInfo')

    const contactForm = document.createElement('div')

    container.appendChild(contactInfo)
    container.appendChild(contactForm)

    //////// build contactInfo div /////////

    const address = document.createElement('div')
    const addressHead = document.createElement('h1')
    addressHead.textContent = 'Address'

    const addressLine1 = document.createElement('p')
    addressLine1.textContent = '1000 Main Street'
    const addressLine2 = document.createElement('p')
    addressLine2.textContent = 'Queens, MA 12345'

    address.appendChild(addressHead)
    address.appendChild(addressLine1)
    address.appendChild(addressLine2)

    const hours = document.createElement('div')
    const hoursHead = document.createElement('h1')
    hoursHead.textContent = 'Hours'

    const hoursLine1 = document.createElement('p')
    hoursLine1.textContent = 'Monday to Sunday from 12pm - Midnight'

    hours.appendChild(hoursHead)
    hours.appendChild(hoursLine1)

    const contact = document.createElement('div')
    const contactHead = document.createElement('h1')

    contactHead.textContent = 'Contact'

    const contactEmail = document.createElement('p')
    contactEmail.textContent = 'Email: QueensBrew@123.com'
    const contactNum = document.createElement('p')
    contactNum.textContent = 'Phone: (123)456-7890'

    contact.appendChild(contactHead)
    contact.appendChild(contactEmail)
    contact.appendChild(contactNum)

    contactInfo.appendChild(address)
    contactInfo.appendChild(hours)
    contactInfo.appendChild(contact)

    ///////// build contact form ////////////

    const form = document.createElement('form')
    form.classList.add('contactForm')

    const formHead = document.createElement('h2')
    formHead.textContent = 'Leave Us a Note'

    form.appendChild(formHead)

    const name = document.createElement('div')

    const nameLabel = document.createElement('label')
    nameLabel.textContent = 'Name'
    nameLabel.htmlFor = 'name'

    const nameInput = document.createElement('input')
    nameInput.type = 'text'
    nameInput.id = 'name'
    nameInput.name = 'name'
    nameInput.required = 'true'

    name.appendChild(nameLabel)
    name.appendChild(nameInput)

    const email = document.createElement('div')

    const emailLabel = document.createElement('label')
    emailLabel.textContent = 'Email'
    emailLabel.htmlFor = 'email'


    const emailInput = document.createElement('input')
    emailInput.type = 'email'
    emailInput.id = 'email'
    emailInput.name = 'email'
    emailInput.required = 'true'

    email.appendChild(emailLabel)
    email.appendChild(emailInput)

    form.appendChild(name)
    form.appendChild(email)

    const comments = document.createElement('div')

    const commentsLabel = document.createElement('label')
    commentsLabel.textContent = 'Comments'
    commentsLabel.htmlFor = 'comments'

    const commentsInput = document.createElement('textarea')
    commentsInput.id = 'comments'
    commentsInput.name = 'comments'
    commentsInput.rows = '10'
    commentsInput.cols = '50'
    commentsInput.required = 'true'

    comments.appendChild(commentsLabel)
    comments.appendChild(commentsInput)

    const submitBtn = document.createElement('button')
    submitBtn.type = 'submit'
    submitBtn.textContent = 'Submit'
    submitBtn.style.width = '150px'

    form.appendChild(name)
    form.appendChild(email)
    form.appendChild(comments)
    form.appendChild(submitBtn)

    contactForm.appendChild(form)

    return container
}

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "menu": () => (/* binding */ menu)
/* harmony export */ });
/* harmony import */ var _menu_imgs_beer1_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./menu-imgs/beer1.jpg */ "./src/menu-imgs/beer1.jpg");
/* harmony import */ var _menu_imgs_beer2_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu-imgs/beer2.jpg */ "./src/menu-imgs/beer2.jpg");
/* harmony import */ var _menu_imgs_beer3_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./menu-imgs/beer3.jpg */ "./src/menu-imgs/beer3.jpg");
/* harmony import */ var _menu_imgs_beer4_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./menu-imgs/beer4.jpg */ "./src/menu-imgs/beer4.jpg");
/* harmony import */ var _menu_imgs_beer5_jpg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./menu-imgs/beer5.jpg */ "./src/menu-imgs/beer5.jpg");
/* harmony import */ var _menu_imgs_beer6_jpg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./menu-imgs/beer6.jpg */ "./src/menu-imgs/beer6.jpg");







const IMGS = [_menu_imgs_beer1_jpg__WEBPACK_IMPORTED_MODULE_0__, _menu_imgs_beer2_jpg__WEBPACK_IMPORTED_MODULE_1__, _menu_imgs_beer3_jpg__WEBPACK_IMPORTED_MODULE_2__, _menu_imgs_beer4_jpg__WEBPACK_IMPORTED_MODULE_3__, _menu_imgs_beer5_jpg__WEBPACK_IMPORTED_MODULE_4__, _menu_imgs_beer6_jpg__WEBPACK_IMPORTED_MODULE_5__]
const NAMES = ['Casa Roja', 'Blonde Bella', 'Long Shore', 'Henderson IPA', 'Stout BLVD', 'Station House']
const DETAILS = ['7% ABV', '3.8% ABV', '9.6% ABV', '5.1% ABV', '11.8% ABV', '4% ABV']

function beer(img, name, abv) {
    return {img, name, abv}
}

function menu() {

    const container = document.createElement('div')
    container.classList.add('menuPage')

    const menuHeaderContainer = document.createElement('div')
    menuHeaderContainer.classList.add('menuHeader')
    
    const menuHeader = document.createElement('h1')
    menuHeader.textContent = 'Current Drafts'
    
    const menuDescrpt = document.createElement('p')
    menuDescrpt.textContent = 'Drafts selection is changed each month on the 1st and the 15th.  Each rotation features tastsy drafts created from brewers around the state.'

    menuHeaderContainer.appendChild(menuHeader)
    menuHeaderContainer.appendChild(menuDescrpt)

    container.appendChild(menuHeaderContainer)

    for (let a = 0; a < IMGS.length; a++)   {
        let item  = beer(IMGS[a], NAMES[a], DETAILS[a])

        let card = document.createElement('div')
        card.classList.add('itemCard')

        let itemImg = document.createElement('img')
        itemImg.src = item.img

        let itemName = document.createElement('p')
        itemName.textContent = item.name

        let itemABV = document.createElement('p')
        itemABV.textContent = item.abv
        itemABV.style.color = 'blue'


        card.appendChild(itemImg)
        card.appendChild(itemName)
        card.appendChild(itemABV)

        container.appendChild(card)
    }

    return container

}

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
/* harmony import */ var _flight_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./flight.jpg */ "./src/flight.jpg");




function aboutPage()   {
    const about = document.createElement('div')
    about.classList.add('aboutPage')
    
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

/////////// Header ////////////////

    const missionHead = document.createElement('h1')
    missionHead.textContent = 'About Us'

    const missionDescript = document.createElement('p')
    missionDescript.textContent = `Our Mission - to bring the elitiest mircrobrew subculture straight to our home town of Queen's by expanding the neighboorhood's taste palate for a wide range of ales.  Down with the water-beer!`

    header.appendChild(missionHead)
    header.appendChild(missionDescript)

/////////// Row 1 //////////////

    const row1PicContainer = document.createElement('div')
    row1PicContainer.classList.add('imgContainers')
    const row1Dscpt = document.createElement('div')
    row1Dscpt.classList.add('dscrptContainers')

    const row1Pic = document.createElement('img')
    row1Pic.src = _taps_jpg__WEBPACK_IMPORTED_MODULE_0__

    const row1DscptHead = document.createElement('h2')
    row1DscptHead.textContent = `Hobby Homebrewers Rejoice!`
    const row1DscptPara = document.createElement('p')
    row1DscptPara.textContent = `Whether they are using an at home ale kit or run a microdistillery out of their parent's garage, we give the up and coming amateur brewers a chance to showcase their latest batches, for better or for worse.`

    row1Dscpt.appendChild(row1DscptHead)
    row1Dscpt.appendChild(row1DscptPara)
    row1PicContainer.appendChild(row1Pic)

    aboutRow1.appendChild(row1PicContainer)
    aboutRow1.appendChild(row1Dscpt)

//////////// Row 2 ////////////////

    const row2PicContainer = document.createElement('div')
    row2PicContainer.classList.add('imgContainers')
    const row2Dscpt = document.createElement('div')
    row2Dscpt.classList.add('dscrptContainers')

    const row2Pic = document.createElement('img')
    row2Pic.src = _pour_jpg__WEBPACK_IMPORTED_MODULE_1__

    const row2DscptHead = document.createElement('h2')
    row2DscptHead.textContent = `Quantity over Quality`
    const row2DscptPara = document.createElement('p')
    row2DscptPara.textContent = `We know Johnny with the beer kit he got from last Christmas won't create the next big double IPA, that's why we pull in brewers from around the state.  Someone is bound to have created something special.  Rule of large numbers!`

    row2Dscpt.appendChild(row2DscptHead)
    row2Dscpt.appendChild(row2DscptPara)
    row2PicContainer.appendChild(row2Pic)

    aboutRow2.appendChild(row2Dscpt)
    aboutRow2.appendChild(row2PicContainer)

///////////// Row 3 ////////////////

    const row3PicContainer = document.createElement('div')
    row3PicContainer.classList.add('imgContainers')
    const row3Dscpt = document.createElement('div')
    row3Dscpt.classList.add('dscrptContainers')

    const row3Pic = document.createElement('img')
    row3Pic.src = _flight_jpg__WEBPACK_IMPORTED_MODULE_2__

    const row3DscptHead = document.createElement('h2')
    row3DscptHead.textContent = `Inebriated Beginnings`
    const row3DscptPara = document.createElement('p')
    row3DscptPara.textContent = `After a night of self hatred fueled binge drinking and an argumenet with a mustache wielding beer aficionado, the idea for the brew house was formed.  Organizing an initial launch proved challenging at first but as the vision came together, more and more brewers were eager to be a part of the project.  We opened our doors Fall 2018 and have been rockin' and rollin' ever since.`

    row3Dscpt.appendChild(row3DscptHead)
    row3Dscpt.appendChild(row3DscptPara)
    row3PicContainer.appendChild(row3Pic)

    aboutRow3.appendChild(row3PicContainer)
    aboutRow3.appendChild(row3Dscpt)

//////////// Footer ///////////////

    const footerHead = document.createElement('h1')
    footerHead.textContent = 'Welcome All'

    const footerDescript = document.createElement('p')
    footerDescript.textContent = `Whether you are just beginning your journey into the world of craft beer or love to argue over the nuances between ales and lagers with strangers, come hang up your coat and try a few obscure beers with us!`

    footer.appendChild(footerHead)
    footer.appendChild(footerDescript)

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

/***/ "./src/flight.jpg":
/*!************************!*\
  !*** ./src/flight.jpg ***!
  \************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "c8034ac5f381dc62cd47.jpg";

/***/ }),

/***/ "./src/git.png":
/*!*********************!*\
  !*** ./src/git.png ***!
  \*********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "0035c307a36c17babb8d.png";

/***/ }),

/***/ "./src/menu-imgs/beer1.jpg":
/*!*********************************!*\
  !*** ./src/menu-imgs/beer1.jpg ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "d0d75ed86114e5c6a881.jpg";

/***/ }),

/***/ "./src/menu-imgs/beer2.jpg":
/*!*********************************!*\
  !*** ./src/menu-imgs/beer2.jpg ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "1d27ce8a5c65371f0957.jpg";

/***/ }),

/***/ "./src/menu-imgs/beer3.jpg":
/*!*********************************!*\
  !*** ./src/menu-imgs/beer3.jpg ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "7128e0435f969fc5ff3d.jpg";

/***/ }),

/***/ "./src/menu-imgs/beer4.jpg":
/*!*********************************!*\
  !*** ./src/menu-imgs/beer4.jpg ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "fad3e51240a9141f4d46.jpg";

/***/ }),

/***/ "./src/menu-imgs/beer5.jpg":
/*!*********************************!*\
  !*** ./src/menu-imgs/beer5.jpg ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "fc4bddcfe8617fc57c1e.jpg";

/***/ }),

/***/ "./src/menu-imgs/beer6.jpg":
/*!*********************************!*\
  !*** ./src/menu-imgs/beer6.jpg ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "596080d74577ca0d7019.jpg";

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
/* harmony import */ var _menu_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu.js */ "./src/menu.js");
/* harmony import */ var _contact_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./contact.js */ "./src/contact.js");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _git_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./git.png */ "./src/git.png");






///////// Initial Page load.  Creates Hero and nav buttons //////////////

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

aboutBtn.textContent = 'Home'
menuBtn.textContent = 'Beers'
contactBtn.textContent = 'Contact'
reservationBtn.textContent = 'Reserve a Table'

navButtons.appendChild(aboutBtn)
navButtons.appendChild(menuBtn)
navButtons.appendChild(contactBtn)
reservation.appendChild(reservationBtn)

////////// Nav container - where our different pages load ///////////

const navContainer = document.createElement('div')

container.appendChild(navContainer)

navContainer.appendChild((0,_splash_js__WEBPACK_IMPORTED_MODULE_0__.aboutPage)())


////////// footer //////////

const footer = document.createElement('footer')
footer.textContent = 'Created Sept 2022 by Applefrittr'

const gitLink = document.createElement('a')
gitLink.href = 'https://github.com/Applefrittr'

const icon = document.createElement('img')
icon.src = _git_png__WEBPACK_IMPORTED_MODULE_4__

gitLink.appendChild(icon)

footer.appendChild(gitLink)

container.appendChild(footer)

////////// Event Listeners for NAV Buttons //////////////


aboutBtn.addEventListener('click', () => {
    navContainer.removeChild(navContainer.firstChild)
    navContainer.appendChild((0,_splash_js__WEBPACK_IMPORTED_MODULE_0__.aboutPage)())
})

menuBtn.addEventListener('click', () => {
    navContainer.removeChild(navContainer.firstChild)
    navContainer.appendChild((0,_menu_js__WEBPACK_IMPORTED_MODULE_1__.menu)())
})

contactBtn.addEventListener('click', () => {
    navContainer.removeChild(navContainer.firstChild)
    navContainer.appendChild((0,_contact_js__WEBPACK_IMPORTED_MODULE_2__.contact)())
})



})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUEseUJBQXlCLHFEQUFTOzs7QUFHbEM7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsV0FBVyxxQ0FBTzs7QUFFbEI7O0FBRUE7O0FBRUE7O0FBRUE7OztBQUdBO0FBQ0E7QUFDQSw2QkFBNkIscURBQVM7QUFDdEMsQ0FBQzs7QUFFRDtBQUNBO0FBQ0EsNkJBQTZCLDhDQUFJO0FBQ2pDLENBQUM7O0FBRUQ7QUFDQTtBQUNBLDZCQUE2QixvREFBTztBQUNwQyxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2NvbnRhY3QuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL21lbnUuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL3NwbGFzaC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvanNvbnAgY2h1bmsgbG9hZGluZyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiLi9iYXJyZWxzLmpwZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fID0gbmV3IFVSTChcIi4vYWJvdXQuanBnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIjpyb290e1xcbiAgICAtLXRoZW1lLWJnLWNvbG9yOiBibGFuY2hlZGFsbW9uZDtcXG59XFxuXFxuKiAgIHtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgbWFyZ2luOiAwO1xcbn1cXG5cXG5cXG4jY29udGVudCAgICB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXRoZW1lLWJnLWNvbG9yKTtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbn1cXG5cXG5idXR0b24gIHtcXG4gICAgcGFkZGluZzogLjVyZW0gMS41cmVtO1xcbn1cXG5cXG4uaGVybyB7XFxuICAgIGJhY2tncm91bmQ6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gKyBcIik7XFxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxuICAgIGhlaWdodDogNjAwcHg7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmciAxLjVmcjtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgNGZyO1xcbiAgICBtYXJnaW4tYm90dG9tOiA1cmVtO1xcbn1cXG5cXG4ucmVzdHVyYW50LW5hbWUge1xcbiAgICBwYWRkaW5nLWxlZnQ6IDJyZW07XFxuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcXG4gICAganVzdGlmeS1zZWxmOiBzdGFydDtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBmb250LXNpemU6IDNyZW07XFxuICAgIGZvbnQtZmFtaWx5OiBBdmFudGdhcmRlLCBUZVggR3lyZSBBZHZlbnRvciwgVVJXIEdvdGhpYyBMLCBzYW5zLXNlcmlmO1xcbiAgICBmb250LXZhcmlhbnQ6IHNtYWxsLWNhcHM7XFxuICAgIHRleHQtc2hhZG93OiAxcHggM3B4IDJweCBibGFjaywgMXB4IDNweCAycHggYmxhY2ssIDFweCAtMXB4IDAgYmxhY2ssIC0xcHggLTFweCAwIGJsYWNrO1xcbn1cXG5cXG4uaGVyby1kZXNjcmlwdCAge1xcbiAgICBwYWRkaW5nOiAxcmVtO1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgICBncmlkLWNvbHVtbjogMyAvIDQ7XFxuICAgIGdyaWQtcm93OiAyIC8gMztcXG4gICAgd2lkdGg6IDY1JTtcXG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xcbiAgICB0ZXh0LXNoYWRvdzogMXB4IDJweCAycHggYmxhY2ssIDFweCAycHggMnB4IGJsYWNrLCAxcHggLTFweCAwIGJsYWNrLCAtMXB4IC0xcHggMCBibGFjaztcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAuMik7XFxuICAgIGJvcmRlci1yYWRpdXM6IC41cmVtO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBnYXA6IDFyZW07XFxufVxcblxcbi5yZXNlcnZhdGlvbiAgICB7XFxuICAgIGdyaWQtY29sdW1uOiAzIC8gNDtcXG4gICAgcGFkZGluZy1yaWdodDogMnJlbTtcXG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xcbiAgICBqdXN0aWZ5LXNlbGY6IGVuZDtcXG59XFxuXFxuLm5hdi1idXR0b25zICAgIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZ2FwOiAxcmVtO1xcbn1cXG5cXG4uYWJvdXRQYWdlICAge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICB3aWR0aDogNjB2dztcXG4gICAgZ2FwOiA1cmVtO1xcbiAgICBmb250LXNpemU6IDEuMjVyZW07XFxuICAgIHBhZGRpbmctYm90dG9tOiAycmVtO1xcbiAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IDFzIDBzO1xcbn1cXG5cXG4uYWJvdXRJbWcgICB7XFxuICAgIGJhY2tncm91bmQ6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gKyBcIik7XFxuICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDFyZW07XFxuICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDFyZW07XFxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxuICAgIGJveC1zaGFkb3c6IDAgMCAwIDAgYmxhbmNoZWRhbG1vbmQgaW5zZXQsIC01MHB4IDAgNTBweCA4cHggYmxhbmNoZWRhbG1vbmQgaW5zZXQ7XFxufVxcblxcbi5hYm91dERlc2NyaXB0ICAge1xcbiAgICBwYWRkaW5nOiAxcmVtO1xcbn1cXG5cXG4uYWJvdXRIZWFkZXIgICAge1xcbiAgICBmbGV4OmF1dG87XFxuICAgIGRpc3BsYXk6ZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZ2FwOiAxcmVtO1xcbn1cXG5cXG4uYWJvdXRQYWdlPmRpdj5oMSAgIHtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4uYWJvdXRQYWdlPmRpdj5wICAgIHtcXG4gICAgd2lkdGg6IG1pbig1MCUsIDUwMHB4KTtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4ucm93Q29udGFpbmVycyAge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBnYXA6IDVyZW07XFxuICAgIFxcbn1cXG5cXG5pbWcgIHtcXG4gICAgbWF4LXdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IGF1dG87XFxuICAgIGJvcmRlci1yYWRpdXM6IDFyZW07XFxufVxcblxcbi5pbWdDb250YWluZXJzICB7XFxuICAgIGZsZXg6IDEgLjI1IDUwJTtcXG4gICAgbWluLXdpZHRoOiAxNnJlbTtcXG59XFxuXFxuLmRzY3JwdENvbnRhaW5lcnMgICB7XFxuICAgIG1heC13aWR0aDogMzZyZW07XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBnYXA6IDFyZW07XFxufVxcblxcbi5tZW51UGFnZSAgIHtcXG4gICAgd2lkdGg6IDg1dnc7XFxuICAgIGRpc3BsYXk6ZmxleDtcXG4gICAgZmxleC13cmFwOiB3cmFwO1xcbiAgICBnYXA6IDNyZW07XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBwYWRkaW5nLWJvdHRvbTogMnJlbTtcXG4gICAgZm9udC1zaXplOiAxLjI1cmVtO1xcbiAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IDFzIDBzO1xcbn1cXG5cXG4ubWVudUhlYWRlciB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGdhcDogMXJlbTtcXG59XFxuXFxuLml0ZW1DYXJkICAge1xcbiAgICBtaW4td2lkdGg6IDE2cmVtO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGZvbnQtc2l6ZTogMS4yNXJlbTtcXG4gICAgZ2FwOiAxcmVtO1xcbn1cXG5cXG4ucmVtb3ZlZCAgICB7XFxuICAgIG9wYWNpdHk6IDA7XFxufVxcblxcbi5jb250YWN0UGFnZSAgICB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtd3JhcDogd3JhcDtcXG4gICAgZm9udC1zaXplOiAxLjI1cmVtO1xcbiAgICBwYWRkaW5nLWJvdHRvbTogMnJlbTtcXG4gICAgZ2FwOiAzcmVtO1xcbn1cXG5cXG4uY29udGFjdEluZm8gICAge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBnYXA6IDFyZW07XFxufVxcblxcbi5jb250YWN0Rm9ybSAgICB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGdhcDogMXJlbTtcXG59XFxuLmNvbnRhY3RGb3JtPmRpdiAgICB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcblxcbmlucHV0LCBcXG50ZXh0YXJlYSAgICB7XFxuICAgIGJvcmRlci1yYWRpdXM6IDJweDtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxufVxcblxcbmZvb3RlciAge1xcbiAgICBwYWRkaW5nOiAxcmVtO1xcbiAgICBmb250LXNpemU6IDFyZW07XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGdhcDogLjVyZW07XFxufVxcblxcbmE+aW1nICB7XFxuICAgIHdpZHRoOiAyNHB4O1xcbiAgICBoZWlnaHQ6IGF1dG87XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSxnQ0FBZ0M7QUFDcEM7O0FBRUE7SUFDSSxzQkFBc0I7SUFDdEIsU0FBUztBQUNiOzs7QUFHQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsbUJBQW1CO0lBQ25CLHVDQUF1QztJQUN2QyxZQUFZO0FBQ2hCOztBQUVBO0lBQ0kscUJBQXFCO0FBQ3pCOztBQUVBO0lBQ0ksbURBQThCO0lBQzlCLHNCQUFzQjtJQUN0QixhQUFhO0lBQ2IsYUFBYTtJQUNiLG9DQUFvQztJQUNwQywyQkFBMkI7SUFDM0IsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLGtCQUFrQjtJQUNsQixtQkFBbUI7SUFDbkIsWUFBWTtJQUNaLGVBQWU7SUFDZixvRUFBb0U7SUFDcEUsd0JBQXdCO0lBQ3hCLHNGQUFzRjtBQUMxRjs7QUFFQTtJQUNJLGFBQWE7SUFDYixZQUFZO0lBQ1osaUJBQWlCO0lBQ2pCLGtCQUFrQjtJQUNsQixlQUFlO0lBQ2YsVUFBVTtJQUNWLGtCQUFrQjtJQUNsQixzRkFBc0Y7SUFDdEYsbUNBQW1DO0lBQ25DLG9CQUFvQjtJQUNwQixhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLFNBQVM7QUFDYjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixtQkFBbUI7SUFDbkIsa0JBQWtCO0lBQ2xCLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixTQUFTO0FBQ2I7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLFdBQVc7SUFDWCxTQUFTO0lBQ1Qsa0JBQWtCO0lBQ2xCLG9CQUFvQjtJQUNwQix5QkFBeUI7QUFDN0I7O0FBRUE7SUFDSSxtREFBNEI7SUFDNUIsNEJBQTRCO0lBQzVCLCtCQUErQjtJQUMvQixzQkFBc0I7SUFDdEIsK0VBQStFO0FBQ25GOztBQUVBO0lBQ0ksYUFBYTtBQUNqQjs7QUFFQTtJQUNJLFNBQVM7SUFDVCxZQUFZO0lBQ1osc0JBQXNCO0lBQ3RCLG1CQUFtQjtJQUNuQixTQUFTO0FBQ2I7O0FBRUE7SUFDSSxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxzQkFBc0I7SUFDdEIsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLFNBQVM7O0FBRWI7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsWUFBWTtJQUNaLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGVBQWU7SUFDZixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsYUFBYTtJQUNiLHNCQUFzQjtJQUN0Qix1QkFBdUI7SUFDdkIsU0FBUztBQUNiOztBQUVBO0lBQ0ksV0FBVztJQUNYLFlBQVk7SUFDWixlQUFlO0lBQ2YsU0FBUztJQUNULHVCQUF1QjtJQUN2QixvQkFBb0I7SUFDcEIsa0JBQWtCO0lBQ2xCLHlCQUF5QjtBQUM3Qjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxrQkFBa0I7SUFDbEIsYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixTQUFTO0FBQ2I7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsa0JBQWtCO0lBQ2xCLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsa0JBQWtCO0lBQ2xCLFNBQVM7QUFDYjs7QUFFQTtJQUNJLFVBQVU7QUFDZDs7QUFFQTtJQUNJLGFBQWE7SUFDYixlQUFlO0lBQ2Ysa0JBQWtCO0lBQ2xCLG9CQUFvQjtJQUNwQixTQUFTO0FBQ2I7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLFNBQVM7QUFDYjs7QUFFQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsU0FBUztBQUNiO0FBQ0E7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0FBQzFCOztBQUVBOztJQUVJLGtCQUFrQjtJQUNsQix1QkFBdUI7QUFDM0I7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsZUFBZTtJQUNmLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsVUFBVTtBQUNkOztBQUVBO0lBQ0ksV0FBVztJQUNYLFlBQVk7QUFDaEJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiOnJvb3R7XFxuICAgIC0tdGhlbWUtYmctY29sb3I6IGJsYW5jaGVkYWxtb25kO1xcbn1cXG5cXG4qICAge1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICBtYXJnaW46IDA7XFxufVxcblxcblxcbiNjb250ZW50ICAgIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdGhlbWUtYmctY29sb3IpO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxufVxcblxcbmJ1dHRvbiAge1xcbiAgICBwYWRkaW5nOiAuNXJlbSAxLjVyZW07XFxufVxcblxcbi5oZXJvIHtcXG4gICAgYmFja2dyb3VuZDogdXJsKC4vYmFycmVscy5qcGcpO1xcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcbiAgICBoZWlnaHQ6IDYwMHB4O1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnIgMS41ZnI7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDRmcjtcXG4gICAgbWFyZ2luLWJvdHRvbTogNXJlbTtcXG59XFxuXFxuLnJlc3R1cmFudC1uYW1lIHtcXG4gICAgcGFkZGluZy1sZWZ0OiAycmVtO1xcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktc2VsZjogc3RhcnQ7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgZm9udC1zaXplOiAzcmVtO1xcbiAgICBmb250LWZhbWlseTogQXZhbnRnYXJkZSwgVGVYIEd5cmUgQWR2ZW50b3IsIFVSVyBHb3RoaWMgTCwgc2Fucy1zZXJpZjtcXG4gICAgZm9udC12YXJpYW50OiBzbWFsbC1jYXBzO1xcbiAgICB0ZXh0LXNoYWRvdzogMXB4IDNweCAycHggYmxhY2ssIDFweCAzcHggMnB4IGJsYWNrLCAxcHggLTFweCAwIGJsYWNrLCAtMXB4IC0xcHggMCBibGFjaztcXG59XFxuXFxuLmhlcm8tZGVzY3JpcHQgIHtcXG4gICAgcGFkZGluZzogMXJlbTtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBmb250LXNpemU6IDEuNXJlbTtcXG4gICAgZ3JpZC1jb2x1bW46IDMgLyA0O1xcbiAgICBncmlkLXJvdzogMiAvIDM7XFxuICAgIHdpZHRoOiA2NSU7XFxuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcXG4gICAgdGV4dC1zaGFkb3c6IDFweCAycHggMnB4IGJsYWNrLCAxcHggMnB4IDJweCBibGFjaywgMXB4IC0xcHggMCBibGFjaywgLTFweCAtMXB4IDAgYmxhY2s7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgLjIpO1xcbiAgICBib3JkZXItcmFkaXVzOiAuNXJlbTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZ2FwOiAxcmVtO1xcbn1cXG5cXG4ucmVzZXJ2YXRpb24gICAge1xcbiAgICBncmlkLWNvbHVtbjogMyAvIDQ7XFxuICAgIHBhZGRpbmctcmlnaHQ6IDJyZW07XFxuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcXG4gICAganVzdGlmeS1zZWxmOiBlbmQ7XFxufVxcblxcbi5uYXYtYnV0dG9ucyAgICB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGdhcDogMXJlbTtcXG59XFxuXFxuLmFib3V0UGFnZSAgIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgd2lkdGg6IDYwdnc7XFxuICAgIGdhcDogNXJlbTtcXG4gICAgZm9udC1zaXplOiAxLjI1cmVtO1xcbiAgICBwYWRkaW5nLWJvdHRvbTogMnJlbTtcXG4gICAgdHJhbnNpdGlvbjogb3BhY2l0eSAxcyAwcztcXG59XFxuXFxuLmFib3V0SW1nICAge1xcbiAgICBiYWNrZ3JvdW5kOiB1cmwoLi9hYm91dC5qcGcpO1xcbiAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAxcmVtO1xcbiAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAxcmVtO1xcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcbiAgICBib3gtc2hhZG93OiAwIDAgMCAwIGJsYW5jaGVkYWxtb25kIGluc2V0LCAtNTBweCAwIDUwcHggOHB4IGJsYW5jaGVkYWxtb25kIGluc2V0O1xcbn1cXG5cXG4uYWJvdXREZXNjcmlwdCAgIHtcXG4gICAgcGFkZGluZzogMXJlbTtcXG59XFxuXFxuLmFib3V0SGVhZGVyICAgIHtcXG4gICAgZmxleDphdXRvO1xcbiAgICBkaXNwbGF5OmZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGdhcDogMXJlbTtcXG59XFxuXFxuLmFib3V0UGFnZT5kaXY+aDEgICB7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuLmFib3V0UGFnZT5kaXY+cCAgICB7XFxuICAgIHdpZHRoOiBtaW4oNTAlLCA1MDBweCk7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuLnJvd0NvbnRhaW5lcnMgIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZ2FwOiA1cmVtO1xcbiAgICBcXG59XFxuXFxuaW1nICB7XFxuICAgIG1heC13aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiBhdXRvO1xcbiAgICBib3JkZXItcmFkaXVzOiAxcmVtO1xcbn1cXG5cXG4uaW1nQ29udGFpbmVycyAge1xcbiAgICBmbGV4OiAxIC4yNSA1MCU7XFxuICAgIG1pbi13aWR0aDogMTZyZW07XFxufVxcblxcbi5kc2NycHRDb250YWluZXJzICAge1xcbiAgICBtYXgtd2lkdGg6IDM2cmVtO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgZ2FwOiAxcmVtO1xcbn1cXG5cXG4ubWVudVBhZ2UgICB7XFxuICAgIHdpZHRoOiA4NXZ3O1xcbiAgICBkaXNwbGF5OmZsZXg7XFxuICAgIGZsZXgtd3JhcDogd3JhcDtcXG4gICAgZ2FwOiAzcmVtO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgcGFkZGluZy1ib3R0b206IDJyZW07XFxuICAgIGZvbnQtc2l6ZTogMS4yNXJlbTtcXG4gICAgdHJhbnNpdGlvbjogb3BhY2l0eSAxcyAwcztcXG59XFxuXFxuLm1lbnVIZWFkZXIge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBnYXA6IDFyZW07XFxufVxcblxcbi5pdGVtQ2FyZCAgIHtcXG4gICAgbWluLXdpZHRoOiAxNnJlbTtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBmb250LXNpemU6IDEuMjVyZW07XFxuICAgIGdhcDogMXJlbTtcXG59XFxuXFxuLnJlbW92ZWQgICAge1xcbiAgICBvcGFjaXR5OiAwO1xcbn1cXG5cXG4uY29udGFjdFBhZ2UgICAge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LXdyYXA6IHdyYXA7XFxuICAgIGZvbnQtc2l6ZTogMS4yNXJlbTtcXG4gICAgcGFkZGluZy1ib3R0b206IDJyZW07XFxuICAgIGdhcDogM3JlbTtcXG59XFxuXFxuLmNvbnRhY3RJbmZvICAgIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZ2FwOiAxcmVtO1xcbn1cXG5cXG4uY29udGFjdEZvcm0gICAge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBnYXA6IDFyZW07XFxufVxcbi5jb250YWN0Rm9ybT5kaXYgICAge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cXG5pbnB1dCwgXFxudGV4dGFyZWEgICAge1xcbiAgICBib3JkZXItcmFkaXVzOiAycHg7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcbn1cXG5cXG5mb290ZXIgIHtcXG4gICAgcGFkZGluZzogMXJlbTtcXG4gICAgZm9udC1zaXplOiAxcmVtO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBnYXA6IC41cmVtO1xcbn1cXG5cXG5hPmltZyAge1xcbiAgICB3aWR0aDogMjRweDtcXG4gICAgaGVpZ2h0OiBhdXRvO1xcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG5cbiAgaWYgKCF1cmwpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9XG5cbiAgdXJsID0gU3RyaW5nKHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmwpOyAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cblxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9XG5cbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XG4gIH0gLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuXG5cbiAgaWYgKC9bXCInKCkgXFx0XFxuXXwoJTIwKS8udGVzdCh1cmwpIHx8IG9wdGlvbnMubmVlZFF1b3Rlcykge1xuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgXCJcXFxcblwiKSwgXCJcXFwiXCIpO1xuICB9XG5cbiAgcmV0dXJuIHVybDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiXG5leHBvcnQgZnVuY3Rpb24gY29udGFjdCgpICAge1xuXG4gICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBjb250YWluZXIuY2xhc3NMaXN0LmFkZCgnY29udGFjdFBhZ2UnKVxuXG4gICAgY29uc3QgY29udGFjdEluZm8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIGNvbnRhY3RJbmZvLmNsYXNzTGlzdC5hZGQoJ2NvbnRhY3RJbmZvJylcblxuICAgIGNvbnN0IGNvbnRhY3RGb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcblxuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChjb250YWN0SW5mbylcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoY29udGFjdEZvcm0pXG5cbiAgICAvLy8vLy8vLyBidWlsZCBjb250YWN0SW5mbyBkaXYgLy8vLy8vLy8vXG5cbiAgICBjb25zdCBhZGRyZXNzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBjb25zdCBhZGRyZXNzSGVhZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJylcbiAgICBhZGRyZXNzSGVhZC50ZXh0Q29udGVudCA9ICdBZGRyZXNzJ1xuXG4gICAgY29uc3QgYWRkcmVzc0xpbmUxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpXG4gICAgYWRkcmVzc0xpbmUxLnRleHRDb250ZW50ID0gJzEwMDAgTWFpbiBTdHJlZXQnXG4gICAgY29uc3QgYWRkcmVzc0xpbmUyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpXG4gICAgYWRkcmVzc0xpbmUyLnRleHRDb250ZW50ID0gJ1F1ZWVucywgTUEgMTIzNDUnXG5cbiAgICBhZGRyZXNzLmFwcGVuZENoaWxkKGFkZHJlc3NIZWFkKVxuICAgIGFkZHJlc3MuYXBwZW5kQ2hpbGQoYWRkcmVzc0xpbmUxKVxuICAgIGFkZHJlc3MuYXBwZW5kQ2hpbGQoYWRkcmVzc0xpbmUyKVxuXG4gICAgY29uc3QgaG91cnMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIGNvbnN0IGhvdXJzSGVhZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJylcbiAgICBob3Vyc0hlYWQudGV4dENvbnRlbnQgPSAnSG91cnMnXG5cbiAgICBjb25zdCBob3Vyc0xpbmUxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpXG4gICAgaG91cnNMaW5lMS50ZXh0Q29udGVudCA9ICdNb25kYXkgdG8gU3VuZGF5IGZyb20gMTJwbSAtIE1pZG5pZ2h0J1xuXG4gICAgaG91cnMuYXBwZW5kQ2hpbGQoaG91cnNIZWFkKVxuICAgIGhvdXJzLmFwcGVuZENoaWxkKGhvdXJzTGluZTEpXG5cbiAgICBjb25zdCBjb250YWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBjb25zdCBjb250YWN0SGVhZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJylcblxuICAgIGNvbnRhY3RIZWFkLnRleHRDb250ZW50ID0gJ0NvbnRhY3QnXG5cbiAgICBjb25zdCBjb250YWN0RW1haWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJylcbiAgICBjb250YWN0RW1haWwudGV4dENvbnRlbnQgPSAnRW1haWw6IFF1ZWVuc0JyZXdAMTIzLmNvbSdcbiAgICBjb25zdCBjb250YWN0TnVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpXG4gICAgY29udGFjdE51bS50ZXh0Q29udGVudCA9ICdQaG9uZTogKDEyMyk0NTYtNzg5MCdcblxuICAgIGNvbnRhY3QuYXBwZW5kQ2hpbGQoY29udGFjdEhlYWQpXG4gICAgY29udGFjdC5hcHBlbmRDaGlsZChjb250YWN0RW1haWwpXG4gICAgY29udGFjdC5hcHBlbmRDaGlsZChjb250YWN0TnVtKVxuXG4gICAgY29udGFjdEluZm8uYXBwZW5kQ2hpbGQoYWRkcmVzcylcbiAgICBjb250YWN0SW5mby5hcHBlbmRDaGlsZChob3VycylcbiAgICBjb250YWN0SW5mby5hcHBlbmRDaGlsZChjb250YWN0KVxuXG4gICAgLy8vLy8vLy8vIGJ1aWxkIGNvbnRhY3QgZm9ybSAvLy8vLy8vLy8vLy9cblxuICAgIGNvbnN0IGZvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb3JtJylcbiAgICBmb3JtLmNsYXNzTGlzdC5hZGQoJ2NvbnRhY3RGb3JtJylcblxuICAgIGNvbnN0IGZvcm1IZWFkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKVxuICAgIGZvcm1IZWFkLnRleHRDb250ZW50ID0gJ0xlYXZlIFVzIGEgTm90ZSdcblxuICAgIGZvcm0uYXBwZW5kQ2hpbGQoZm9ybUhlYWQpXG5cbiAgICBjb25zdCBuYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcblxuICAgIGNvbnN0IG5hbWVMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJylcbiAgICBuYW1lTGFiZWwudGV4dENvbnRlbnQgPSAnTmFtZSdcbiAgICBuYW1lTGFiZWwuaHRtbEZvciA9ICduYW1lJ1xuXG4gICAgY29uc3QgbmFtZUlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKVxuICAgIG5hbWVJbnB1dC50eXBlID0gJ3RleHQnXG4gICAgbmFtZUlucHV0LmlkID0gJ25hbWUnXG4gICAgbmFtZUlucHV0Lm5hbWUgPSAnbmFtZSdcbiAgICBuYW1lSW5wdXQucmVxdWlyZWQgPSAndHJ1ZSdcblxuICAgIG5hbWUuYXBwZW5kQ2hpbGQobmFtZUxhYmVsKVxuICAgIG5hbWUuYXBwZW5kQ2hpbGQobmFtZUlucHV0KVxuXG4gICAgY29uc3QgZW1haWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuXG4gICAgY29uc3QgZW1haWxMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJylcbiAgICBlbWFpbExhYmVsLnRleHRDb250ZW50ID0gJ0VtYWlsJ1xuICAgIGVtYWlsTGFiZWwuaHRtbEZvciA9ICdlbWFpbCdcblxuXG4gICAgY29uc3QgZW1haWxJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0JylcbiAgICBlbWFpbElucHV0LnR5cGUgPSAnZW1haWwnXG4gICAgZW1haWxJbnB1dC5pZCA9ICdlbWFpbCdcbiAgICBlbWFpbElucHV0Lm5hbWUgPSAnZW1haWwnXG4gICAgZW1haWxJbnB1dC5yZXF1aXJlZCA9ICd0cnVlJ1xuXG4gICAgZW1haWwuYXBwZW5kQ2hpbGQoZW1haWxMYWJlbClcbiAgICBlbWFpbC5hcHBlbmRDaGlsZChlbWFpbElucHV0KVxuXG4gICAgZm9ybS5hcHBlbmRDaGlsZChuYW1lKVxuICAgIGZvcm0uYXBwZW5kQ2hpbGQoZW1haWwpXG5cbiAgICBjb25zdCBjb21tZW50cyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG5cbiAgICBjb25zdCBjb21tZW50c0xhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKVxuICAgIGNvbW1lbnRzTGFiZWwudGV4dENvbnRlbnQgPSAnQ29tbWVudHMnXG4gICAgY29tbWVudHNMYWJlbC5odG1sRm9yID0gJ2NvbW1lbnRzJ1xuXG4gICAgY29uc3QgY29tbWVudHNJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RleHRhcmVhJylcbiAgICBjb21tZW50c0lucHV0LmlkID0gJ2NvbW1lbnRzJ1xuICAgIGNvbW1lbnRzSW5wdXQubmFtZSA9ICdjb21tZW50cydcbiAgICBjb21tZW50c0lucHV0LnJvd3MgPSAnMTAnXG4gICAgY29tbWVudHNJbnB1dC5jb2xzID0gJzUwJ1xuICAgIGNvbW1lbnRzSW5wdXQucmVxdWlyZWQgPSAndHJ1ZSdcblxuICAgIGNvbW1lbnRzLmFwcGVuZENoaWxkKGNvbW1lbnRzTGFiZWwpXG4gICAgY29tbWVudHMuYXBwZW5kQ2hpbGQoY29tbWVudHNJbnB1dClcblxuICAgIGNvbnN0IHN1Ym1pdEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpXG4gICAgc3VibWl0QnRuLnR5cGUgPSAnc3VibWl0J1xuICAgIHN1Ym1pdEJ0bi50ZXh0Q29udGVudCA9ICdTdWJtaXQnXG4gICAgc3VibWl0QnRuLnN0eWxlLndpZHRoID0gJzE1MHB4J1xuXG4gICAgZm9ybS5hcHBlbmRDaGlsZChuYW1lKVxuICAgIGZvcm0uYXBwZW5kQ2hpbGQoZW1haWwpXG4gICAgZm9ybS5hcHBlbmRDaGlsZChjb21tZW50cylcbiAgICBmb3JtLmFwcGVuZENoaWxkKHN1Ym1pdEJ0bilcblxuICAgIGNvbnRhY3RGb3JtLmFwcGVuZENoaWxkKGZvcm0pXG5cbiAgICByZXR1cm4gY29udGFpbmVyXG59IiwiaW1wb3J0IEJlZXIxIGZyb20gJy4vbWVudS1pbWdzL2JlZXIxLmpwZydcbmltcG9ydCBCZWVyMiBmcm9tICcuL21lbnUtaW1ncy9iZWVyMi5qcGcnXG5pbXBvcnQgQmVlcjMgZnJvbSAnLi9tZW51LWltZ3MvYmVlcjMuanBnJ1xuaW1wb3J0IEJlZXI0IGZyb20gJy4vbWVudS1pbWdzL2JlZXI0LmpwZydcbmltcG9ydCBCZWVyNSBmcm9tICcuL21lbnUtaW1ncy9iZWVyNS5qcGcnXG5pbXBvcnQgQmVlcjYgZnJvbSAnLi9tZW51LWltZ3MvYmVlcjYuanBnJ1xuXG5jb25zdCBJTUdTID0gW0JlZXIxLCBCZWVyMiwgQmVlcjMsIEJlZXI0LCBCZWVyNSwgQmVlcjZdXG5jb25zdCBOQU1FUyA9IFsnQ2FzYSBSb2phJywgJ0Jsb25kZSBCZWxsYScsICdMb25nIFNob3JlJywgJ0hlbmRlcnNvbiBJUEEnLCAnU3RvdXQgQkxWRCcsICdTdGF0aW9uIEhvdXNlJ11cbmNvbnN0IERFVEFJTFMgPSBbJzclIEFCVicsICczLjglIEFCVicsICc5LjYlIEFCVicsICc1LjElIEFCVicsICcxMS44JSBBQlYnLCAnNCUgQUJWJ11cblxuZnVuY3Rpb24gYmVlcihpbWcsIG5hbWUsIGFidikge1xuICAgIHJldHVybiB7aW1nLCBuYW1lLCBhYnZ9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBtZW51KCkge1xuXG4gICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBjb250YWluZXIuY2xhc3NMaXN0LmFkZCgnbWVudVBhZ2UnKVxuXG4gICAgY29uc3QgbWVudUhlYWRlckNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgbWVudUhlYWRlckNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdtZW51SGVhZGVyJylcbiAgICBcbiAgICBjb25zdCBtZW51SGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKVxuICAgIG1lbnVIZWFkZXIudGV4dENvbnRlbnQgPSAnQ3VycmVudCBEcmFmdHMnXG4gICAgXG4gICAgY29uc3QgbWVudURlc2NycHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJylcbiAgICBtZW51RGVzY3JwdC50ZXh0Q29udGVudCA9ICdEcmFmdHMgc2VsZWN0aW9uIGlzIGNoYW5nZWQgZWFjaCBtb250aCBvbiB0aGUgMXN0IGFuZCB0aGUgMTV0aC4gIEVhY2ggcm90YXRpb24gZmVhdHVyZXMgdGFzdHN5IGRyYWZ0cyBjcmVhdGVkIGZyb20gYnJld2VycyBhcm91bmQgdGhlIHN0YXRlLidcblxuICAgIG1lbnVIZWFkZXJDb250YWluZXIuYXBwZW5kQ2hpbGQobWVudUhlYWRlcilcbiAgICBtZW51SGVhZGVyQ29udGFpbmVyLmFwcGVuZENoaWxkKG1lbnVEZXNjcnB0KVxuXG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKG1lbnVIZWFkZXJDb250YWluZXIpXG5cbiAgICBmb3IgKGxldCBhID0gMDsgYSA8IElNR1MubGVuZ3RoOyBhKyspICAge1xuICAgICAgICBsZXQgaXRlbSAgPSBiZWVyKElNR1NbYV0sIE5BTUVTW2FdLCBERVRBSUxTW2FdKVxuXG4gICAgICAgIGxldCBjYXJkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICAgICAgY2FyZC5jbGFzc0xpc3QuYWRkKCdpdGVtQ2FyZCcpXG5cbiAgICAgICAgbGV0IGl0ZW1JbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKVxuICAgICAgICBpdGVtSW1nLnNyYyA9IGl0ZW0uaW1nXG5cbiAgICAgICAgbGV0IGl0ZW1OYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpXG4gICAgICAgIGl0ZW1OYW1lLnRleHRDb250ZW50ID0gaXRlbS5uYW1lXG5cbiAgICAgICAgbGV0IGl0ZW1BQlYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJylcbiAgICAgICAgaXRlbUFCVi50ZXh0Q29udGVudCA9IGl0ZW0uYWJ2XG4gICAgICAgIGl0ZW1BQlYuc3R5bGUuY29sb3IgPSAnYmx1ZSdcblxuXG4gICAgICAgIGNhcmQuYXBwZW5kQ2hpbGQoaXRlbUltZylcbiAgICAgICAgY2FyZC5hcHBlbmRDaGlsZChpdGVtTmFtZSlcbiAgICAgICAgY2FyZC5hcHBlbmRDaGlsZChpdGVtQUJWKVxuXG4gICAgICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChjYXJkKVxuICAgIH1cblxuICAgIHJldHVybiBjb250YWluZXJcblxufSIsImltcG9ydCBUYXBzIGZyb20gJy4vdGFwcy5qcGcnXG5pbXBvcnQgUG91ciBmcm9tICcuL3BvdXIuanBnJ1xuaW1wb3J0IEZsaWdodCBmcm9tICcuL2ZsaWdodC5qcGcnXG5cbmV4cG9ydCBmdW5jdGlvbiBhYm91dFBhZ2UoKSAgIHtcbiAgICBjb25zdCBhYm91dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgYWJvdXQuY2xhc3NMaXN0LmFkZCgnYWJvdXRQYWdlJylcbiAgICBcbiAgICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIGNvbnN0IGFib3V0Um93MSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgY29uc3QgYWJvdXRSb3cyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBjb25zdCBhYm91dFJvdzMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIGNvbnN0IGZvb3RlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG5cbiAgICBhYm91dC5hcHBlbmRDaGlsZChoZWFkZXIpXG4gICAgaGVhZGVyLmNsYXNzTGlzdC5hZGQoJ2Fib3V0SGVhZGVyJylcbiAgICBhYm91dC5hcHBlbmRDaGlsZChhYm91dFJvdzEpXG4gICAgYWJvdXRSb3cxLmNsYXNzTGlzdC5hZGQoJ3Jvd0NvbnRhaW5lcnMnKVxuICAgIGFib3V0LmFwcGVuZENoaWxkKGFib3V0Um93MilcbiAgICBhYm91dFJvdzIuY2xhc3NMaXN0LmFkZCgncm93Q29udGFpbmVycycpXG4gICAgYWJvdXQuYXBwZW5kQ2hpbGQoYWJvdXRSb3czKVxuICAgIGFib3V0Um93My5jbGFzc0xpc3QuYWRkKCdyb3dDb250YWluZXJzJylcbiAgICBhYm91dC5hcHBlbmRDaGlsZChmb290ZXIpXG4gICAgZm9vdGVyLmNsYXNzTGlzdC5hZGQoJ2Fib3V0SGVhZGVyJylcblxuLy8vLy8vLy8vLy8gSGVhZGVyIC8vLy8vLy8vLy8vLy8vLy9cblxuICAgIGNvbnN0IG1pc3Npb25IZWFkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKVxuICAgIG1pc3Npb25IZWFkLnRleHRDb250ZW50ID0gJ0Fib3V0IFVzJ1xuXG4gICAgY29uc3QgbWlzc2lvbkRlc2NyaXB0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpXG4gICAgbWlzc2lvbkRlc2NyaXB0LnRleHRDb250ZW50ID0gYE91ciBNaXNzaW9uIC0gdG8gYnJpbmcgdGhlIGVsaXRpZXN0IG1pcmNyb2JyZXcgc3ViY3VsdHVyZSBzdHJhaWdodCB0byBvdXIgaG9tZSB0b3duIG9mIFF1ZWVuJ3MgYnkgZXhwYW5kaW5nIHRoZSBuZWlnaGJvb3Job29kJ3MgdGFzdGUgcGFsYXRlIGZvciBhIHdpZGUgcmFuZ2Ugb2YgYWxlcy4gIERvd24gd2l0aCB0aGUgd2F0ZXItYmVlciFgXG5cbiAgICBoZWFkZXIuYXBwZW5kQ2hpbGQobWlzc2lvbkhlYWQpXG4gICAgaGVhZGVyLmFwcGVuZENoaWxkKG1pc3Npb25EZXNjcmlwdClcblxuLy8vLy8vLy8vLy8gUm93IDEgLy8vLy8vLy8vLy8vLy9cblxuICAgIGNvbnN0IHJvdzFQaWNDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIHJvdzFQaWNDb250YWluZXIuY2xhc3NMaXN0LmFkZCgnaW1nQ29udGFpbmVycycpXG4gICAgY29uc3Qgcm93MURzY3B0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICByb3cxRHNjcHQuY2xhc3NMaXN0LmFkZCgnZHNjcnB0Q29udGFpbmVycycpXG5cbiAgICBjb25zdCByb3cxUGljID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJylcbiAgICByb3cxUGljLnNyYyA9IFRhcHNcblxuICAgIGNvbnN0IHJvdzFEc2NwdEhlYWQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpXG4gICAgcm93MURzY3B0SGVhZC50ZXh0Q29udGVudCA9IGBIb2JieSBIb21lYnJld2VycyBSZWpvaWNlIWBcbiAgICBjb25zdCByb3cxRHNjcHRQYXJhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpXG4gICAgcm93MURzY3B0UGFyYS50ZXh0Q29udGVudCA9IGBXaGV0aGVyIHRoZXkgYXJlIHVzaW5nIGFuIGF0IGhvbWUgYWxlIGtpdCBvciBydW4gYSBtaWNyb2Rpc3RpbGxlcnkgb3V0IG9mIHRoZWlyIHBhcmVudCdzIGdhcmFnZSwgd2UgZ2l2ZSB0aGUgdXAgYW5kIGNvbWluZyBhbWF0ZXVyIGJyZXdlcnMgYSBjaGFuY2UgdG8gc2hvd2Nhc2UgdGhlaXIgbGF0ZXN0IGJhdGNoZXMsIGZvciBiZXR0ZXIgb3IgZm9yIHdvcnNlLmBcblxuICAgIHJvdzFEc2NwdC5hcHBlbmRDaGlsZChyb3cxRHNjcHRIZWFkKVxuICAgIHJvdzFEc2NwdC5hcHBlbmRDaGlsZChyb3cxRHNjcHRQYXJhKVxuICAgIHJvdzFQaWNDb250YWluZXIuYXBwZW5kQ2hpbGQocm93MVBpYylcblxuICAgIGFib3V0Um93MS5hcHBlbmRDaGlsZChyb3cxUGljQ29udGFpbmVyKVxuICAgIGFib3V0Um93MS5hcHBlbmRDaGlsZChyb3cxRHNjcHQpXG5cbi8vLy8vLy8vLy8vLyBSb3cgMiAvLy8vLy8vLy8vLy8vLy8vXG5cbiAgICBjb25zdCByb3cyUGljQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICByb3cyUGljQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2ltZ0NvbnRhaW5lcnMnKVxuICAgIGNvbnN0IHJvdzJEc2NwdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgcm93MkRzY3B0LmNsYXNzTGlzdC5hZGQoJ2RzY3JwdENvbnRhaW5lcnMnKVxuXG4gICAgY29uc3Qgcm93MlBpYyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpXG4gICAgcm93MlBpYy5zcmMgPSBQb3VyXG5cbiAgICBjb25zdCByb3cyRHNjcHRIZWFkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKVxuICAgIHJvdzJEc2NwdEhlYWQudGV4dENvbnRlbnQgPSBgUXVhbnRpdHkgb3ZlciBRdWFsaXR5YFxuICAgIGNvbnN0IHJvdzJEc2NwdFBhcmEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJylcbiAgICByb3cyRHNjcHRQYXJhLnRleHRDb250ZW50ID0gYFdlIGtub3cgSm9obm55IHdpdGggdGhlIGJlZXIga2l0IGhlIGdvdCBmcm9tIGxhc3QgQ2hyaXN0bWFzIHdvbid0IGNyZWF0ZSB0aGUgbmV4dCBiaWcgZG91YmxlIElQQSwgdGhhdCdzIHdoeSB3ZSBwdWxsIGluIGJyZXdlcnMgZnJvbSBhcm91bmQgdGhlIHN0YXRlLiAgU29tZW9uZSBpcyBib3VuZCB0byBoYXZlIGNyZWF0ZWQgc29tZXRoaW5nIHNwZWNpYWwuICBSdWxlIG9mIGxhcmdlIG51bWJlcnMhYFxuXG4gICAgcm93MkRzY3B0LmFwcGVuZENoaWxkKHJvdzJEc2NwdEhlYWQpXG4gICAgcm93MkRzY3B0LmFwcGVuZENoaWxkKHJvdzJEc2NwdFBhcmEpXG4gICAgcm93MlBpY0NvbnRhaW5lci5hcHBlbmRDaGlsZChyb3cyUGljKVxuXG4gICAgYWJvdXRSb3cyLmFwcGVuZENoaWxkKHJvdzJEc2NwdClcbiAgICBhYm91dFJvdzIuYXBwZW5kQ2hpbGQocm93MlBpY0NvbnRhaW5lcilcblxuLy8vLy8vLy8vLy8vLyBSb3cgMyAvLy8vLy8vLy8vLy8vLy8vXG5cbiAgICBjb25zdCByb3czUGljQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICByb3czUGljQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2ltZ0NvbnRhaW5lcnMnKVxuICAgIGNvbnN0IHJvdzNEc2NwdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgcm93M0RzY3B0LmNsYXNzTGlzdC5hZGQoJ2RzY3JwdENvbnRhaW5lcnMnKVxuXG4gICAgY29uc3Qgcm93M1BpYyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpXG4gICAgcm93M1BpYy5zcmMgPSBGbGlnaHRcblxuICAgIGNvbnN0IHJvdzNEc2NwdEhlYWQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpXG4gICAgcm93M0RzY3B0SGVhZC50ZXh0Q29udGVudCA9IGBJbmVicmlhdGVkIEJlZ2lubmluZ3NgXG4gICAgY29uc3Qgcm93M0RzY3B0UGFyYSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKVxuICAgIHJvdzNEc2NwdFBhcmEudGV4dENvbnRlbnQgPSBgQWZ0ZXIgYSBuaWdodCBvZiBzZWxmIGhhdHJlZCBmdWVsZWQgYmluZ2UgZHJpbmtpbmcgYW5kIGFuIGFyZ3VtZW5ldCB3aXRoIGEgbXVzdGFjaGUgd2llbGRpbmcgYmVlciBhZmljaW9uYWRvLCB0aGUgaWRlYSBmb3IgdGhlIGJyZXcgaG91c2Ugd2FzIGZvcm1lZC4gIE9yZ2FuaXppbmcgYW4gaW5pdGlhbCBsYXVuY2ggcHJvdmVkIGNoYWxsZW5naW5nIGF0IGZpcnN0IGJ1dCBhcyB0aGUgdmlzaW9uIGNhbWUgdG9nZXRoZXIsIG1vcmUgYW5kIG1vcmUgYnJld2VycyB3ZXJlIGVhZ2VyIHRvIGJlIGEgcGFydCBvZiB0aGUgcHJvamVjdC4gIFdlIG9wZW5lZCBvdXIgZG9vcnMgRmFsbCAyMDE4IGFuZCBoYXZlIGJlZW4gcm9ja2luJyBhbmQgcm9sbGluJyBldmVyIHNpbmNlLmBcblxuICAgIHJvdzNEc2NwdC5hcHBlbmRDaGlsZChyb3czRHNjcHRIZWFkKVxuICAgIHJvdzNEc2NwdC5hcHBlbmRDaGlsZChyb3czRHNjcHRQYXJhKVxuICAgIHJvdzNQaWNDb250YWluZXIuYXBwZW5kQ2hpbGQocm93M1BpYylcblxuICAgIGFib3V0Um93My5hcHBlbmRDaGlsZChyb3czUGljQ29udGFpbmVyKVxuICAgIGFib3V0Um93My5hcHBlbmRDaGlsZChyb3czRHNjcHQpXG5cbi8vLy8vLy8vLy8vLyBGb290ZXIgLy8vLy8vLy8vLy8vLy8vXG5cbiAgICBjb25zdCBmb290ZXJIZWFkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKVxuICAgIGZvb3RlckhlYWQudGV4dENvbnRlbnQgPSAnV2VsY29tZSBBbGwnXG5cbiAgICBjb25zdCBmb290ZXJEZXNjcmlwdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKVxuICAgIGZvb3RlckRlc2NyaXB0LnRleHRDb250ZW50ID0gYFdoZXRoZXIgeW91IGFyZSBqdXN0IGJlZ2lubmluZyB5b3VyIGpvdXJuZXkgaW50byB0aGUgd29ybGQgb2YgY3JhZnQgYmVlciBvciBsb3ZlIHRvIGFyZ3VlIG92ZXIgdGhlIG51YW5jZXMgYmV0d2VlbiBhbGVzIGFuZCBsYWdlcnMgd2l0aCBzdHJhbmdlcnMsIGNvbWUgaGFuZyB1cCB5b3VyIGNvYXQgYW5kIHRyeSBhIGZldyBvYnNjdXJlIGJlZXJzIHdpdGggdXMhYFxuXG4gICAgZm9vdGVyLmFwcGVuZENoaWxkKGZvb3RlckhlYWQpXG4gICAgZm9vdGVyLmFwcGVuZENoaWxkKGZvb3RlckRlc2NyaXB0KVxuXG4gICAgcmV0dXJuIGFib3V0XG59IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbi8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBfX3dlYnBhY2tfbW9kdWxlc19fO1xuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyY1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHNjcmlwdFVybCA9IHNjcmlwdHNbc2NyaXB0cy5sZW5ndGggLSAxXS5zcmNcblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5iID0gZG9jdW1lbnQuYmFzZVVSSSB8fCBzZWxmLmxvY2F0aW9uLmhyZWY7XG5cbi8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4vLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbi8vIFtyZXNvbHZlLCByZWplY3QsIFByb21pc2VdID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxudmFyIGluc3RhbGxlZENodW5rcyA9IHtcblx0XCJtYWluXCI6IDBcbn07XG5cbi8vIG5vIGNodW5rIG9uIGRlbWFuZCBsb2FkaW5nXG5cbi8vIG5vIHByZWZldGNoaW5nXG5cbi8vIG5vIHByZWxvYWRlZFxuXG4vLyBubyBITVJcblxuLy8gbm8gSE1SIG1hbmlmZXN0XG5cbi8vIG5vIG9uIGNodW5rcyBsb2FkZWRcblxuLy8gbm8ganNvbnAgZnVuY3Rpb24iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCB7YWJvdXRQYWdlfSBmcm9tICcuL3NwbGFzaC5qcydcbmltcG9ydCB7bWVudX0gZnJvbSAnLi9tZW51LmpzJ1xuaW1wb3J0IHtjb250YWN0fSBmcm9tICcuL2NvbnRhY3QuanMnXG5pbXBvcnQgJy4vc3R5bGUuY3NzJ1xuaW1wb3J0IEdpdEljb24gZnJvbSAnLi9naXQucG5nJ1xuXG4vLy8vLy8vLy8gSW5pdGlhbCBQYWdlIGxvYWQuICBDcmVhdGVzIEhlcm8gYW5kIG5hdiBidXR0b25zIC8vLy8vLy8vLy8vLy8vXG5cbmNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjb250ZW50JylcblxuY29uc3QgaGVybyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG5oZXJvLmNsYXNzTGlzdC5hZGQoJ2hlcm8nKVxuXG5jb250YWluZXIuYXBwZW5kQ2hpbGQoaGVybylcblxuY29uc3QgbmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG5uYW1lLmNsYXNzTGlzdC5hZGQoJ3Jlc3R1cmFudC1uYW1lJylcbm5hbWUudGV4dENvbnRlbnQgPSBgUXVlZW4ncyBCcmV3IEhvdXNlYFxuXG5oZXJvLmFwcGVuZENoaWxkKG5hbWUpXG5cbmNvbnN0IGRlc2NyaXB0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbmRlc2NyaXB0LnRleHRDb250ZW50ID0gYExvY2FsIE1pY3JvYnJld2VyeSBTZXJ2aW5nIHRoZSBRdWVlbidzIGNvbW11bml0eSBkYWlseSBmcm9tIDEycG0gdG8gbWlkbmlnaHQuICBMb2NhdGVkIG5leHQgZG9vciB0byB0aGUgVVNQUyBPZmZpY2VgXG5kZXNjcmlwdC5jbGFzc0xpc3QuYWRkKCdoZXJvLWRlc2NyaXB0JylcblxuaGVyby5hcHBlbmRDaGlsZChkZXNjcmlwdClcblxuY29uc3QgbmF2QnV0dG9ucyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG5uYXZCdXR0b25zLmNsYXNzTGlzdC5hZGQoJ25hdi1idXR0b25zJylcblxuY29uc3QgcmVzZXJ2YXRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxucmVzZXJ2YXRpb24uY2xhc3NMaXN0LmFkZCgncmVzZXJ2YXRpb24nKVxuXG5oZXJvLmFwcGVuZENoaWxkKHJlc2VydmF0aW9uKVxuXG5kZXNjcmlwdC5hcHBlbmRDaGlsZChuYXZCdXR0b25zKVxuXG5jb25zdCBhYm91dEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpXG5jb25zdCBtZW51QnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJylcbmNvbnN0IGNvbnRhY3RCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKVxuY29uc3QgcmVzZXJ2YXRpb25CdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKVxuXG5hYm91dEJ0bi50ZXh0Q29udGVudCA9ICdIb21lJ1xubWVudUJ0bi50ZXh0Q29udGVudCA9ICdCZWVycydcbmNvbnRhY3RCdG4udGV4dENvbnRlbnQgPSAnQ29udGFjdCdcbnJlc2VydmF0aW9uQnRuLnRleHRDb250ZW50ID0gJ1Jlc2VydmUgYSBUYWJsZSdcblxubmF2QnV0dG9ucy5hcHBlbmRDaGlsZChhYm91dEJ0bilcbm5hdkJ1dHRvbnMuYXBwZW5kQ2hpbGQobWVudUJ0bilcbm5hdkJ1dHRvbnMuYXBwZW5kQ2hpbGQoY29udGFjdEJ0bilcbnJlc2VydmF0aW9uLmFwcGVuZENoaWxkKHJlc2VydmF0aW9uQnRuKVxuXG4vLy8vLy8vLy8vIE5hdiBjb250YWluZXIgLSB3aGVyZSBvdXIgZGlmZmVyZW50IHBhZ2VzIGxvYWQgLy8vLy8vLy8vLy9cblxuY29uc3QgbmF2Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcblxuY29udGFpbmVyLmFwcGVuZENoaWxkKG5hdkNvbnRhaW5lcilcblxubmF2Q29udGFpbmVyLmFwcGVuZENoaWxkKGFib3V0UGFnZSgpKVxuXG5cbi8vLy8vLy8vLy8gZm9vdGVyIC8vLy8vLy8vLy9cblxuY29uc3QgZm9vdGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9vdGVyJylcbmZvb3Rlci50ZXh0Q29udGVudCA9ICdDcmVhdGVkIFNlcHQgMjAyMiBieSBBcHBsZWZyaXR0cidcblxuY29uc3QgZ2l0TGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKVxuZ2l0TGluay5ocmVmID0gJ2h0dHBzOi8vZ2l0aHViLmNvbS9BcHBsZWZyaXR0cidcblxuY29uc3QgaWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpXG5pY29uLnNyYyA9IEdpdEljb25cblxuZ2l0TGluay5hcHBlbmRDaGlsZChpY29uKVxuXG5mb290ZXIuYXBwZW5kQ2hpbGQoZ2l0TGluaylcblxuY29udGFpbmVyLmFwcGVuZENoaWxkKGZvb3RlcilcblxuLy8vLy8vLy8vLyBFdmVudCBMaXN0ZW5lcnMgZm9yIE5BViBCdXR0b25zIC8vLy8vLy8vLy8vLy8vXG5cblxuYWJvdXRCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgbmF2Q29udGFpbmVyLnJlbW92ZUNoaWxkKG5hdkNvbnRhaW5lci5maXJzdENoaWxkKVxuICAgIG5hdkNvbnRhaW5lci5hcHBlbmRDaGlsZChhYm91dFBhZ2UoKSlcbn0pXG5cbm1lbnVCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgbmF2Q29udGFpbmVyLnJlbW92ZUNoaWxkKG5hdkNvbnRhaW5lci5maXJzdENoaWxkKVxuICAgIG5hdkNvbnRhaW5lci5hcHBlbmRDaGlsZChtZW51KCkpXG59KVxuXG5jb250YWN0QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIG5hdkNvbnRhaW5lci5yZW1vdmVDaGlsZChuYXZDb250YWluZXIuZmlyc3RDaGlsZClcbiAgICBuYXZDb250YWluZXIuYXBwZW5kQ2hpbGQoY29udGFjdCgpKVxufSlcblxuXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=