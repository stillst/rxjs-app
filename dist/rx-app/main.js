(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./node_modules/pug-loader/index.js!./src/app/app.component.pug":
/*!*************************************************************!*\
  !*** ./node_modules/pug-loader!./src/app/app.component.pug ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var pug = __webpack_require__(/*! ../../node_modules/pug-runtime/index.js */ "./node_modules/pug-runtime/index.js");

function template(locals) {var pug_html = "", pug_mixins = {}, pug_interp;pug_html = pug_html + "\u003Cdiv class=\"wrapper\"\u003E\u003Capp-side-bar\u003E\u003C\u002Fapp-side-bar\u003E\u003Capp-ui-main\u003E\u003C\u002Fapp-ui-main\u003E\u003C\u002Fdiv\u003E";;return pug_html;};
module.exports = template;

/***/ }),

/***/ "./node_modules/pug-loader/index.js!./src/app/create/create.component.pug":
/*!***********************************************************************!*\
  !*** ./node_modules/pug-loader!./src/app/create/create.component.pug ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var pug = __webpack_require__(/*! ../../../node_modules/pug-runtime/index.js */ "./node_modules/pug-runtime/index.js");

function template(locals) {var pug_html = "", pug_mixins = {}, pug_interp;pug_html = pug_html + "\u003Cdiv class=\"init\"\u003E\u003Cbutton (click)=\"toogle()\"\u003Etoogle\u003C\u002Fbutton\u003E\u003Cul class=\"streams\" *ngIf=\"active\"\u003E\u003Cli *ngFor=\"let stream of streams\"\u003E\u003Capp-draw-stream [stream]=\"stream\"\u003E\u003C\u002Fapp-draw-stream\u003E\u003C\u002Fli\u003E\u003C\u002Ful\u003E\u003C\u002Fdiv\u003E";;return pug_html;};
module.exports = template;

/***/ }),

/***/ "./node_modules/pug-loader/index.js!./src/app/pages/combination/combine-all/combine-all.component.pug":
/*!***************************************************************************************************!*\
  !*** ./node_modules/pug-loader!./src/app/pages/combination/combine-all/combine-all.component.pug ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var pug = __webpack_require__(/*! ../../../../../node_modules/pug-runtime/index.js */ "./node_modules/pug-runtime/index.js");

function template(locals) {var pug_html = "", pug_mixins = {}, pug_interp;pug_html = pug_html + "\u003Cp\u003EWhen any observable emits a value, emit the latest value from each.\u003C\u002Fp\u003E\u003Cdiv class=\"stream-block\"\u003E\u003Cp\u003ESource\u003C\u002Fp\u003E\u003Capp-draw-stream [stream]=\"source1\"\u003E\u003C\u002Fapp-draw-stream\u003E\u003Cp\u003ENext Source\u003C\u002Fp\u003E\u003Capp-draw-stream [stream]=\"nextSource1\"\u003E\u003C\u002Fapp-draw-stream\u003E\u003Cp\u003EResult\u003C\u002Fp\u003E\u003Capp-draw-stream [stream]=\"result1\"\u003E\u003C\u002Fapp-draw-stream\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"stream-block\"\u003E\u003Cp\u003ESource\u003C\u002Fp\u003E\u003Capp-draw-stream [stream]=\"source2\"\u003E\u003C\u002Fapp-draw-stream\u003E\u003Cp\u003ENext Source\u003C\u002Fp\u003E\u003Capp-draw-stream [stream]=\"nextSource2\"\u003E\u003C\u002Fapp-draw-stream\u003E\u003Cp\u003EResult\u003C\u002Fp\u003E\u003Capp-draw-stream [stream]=\"result2\"\u003E\u003C\u002Fapp-draw-stream\u003E\u003C\u002Fdiv\u003E";;return pug_html;};
module.exports = template;

/***/ }),

/***/ "./node_modules/pug-loader/index.js!./src/app/pages/combination/combine-latest/combine-latest.component.pug":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/pug-loader!./src/app/pages/combination/combine-latest/combine-latest.component.pug ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var pug = __webpack_require__(/*! ../../../../../node_modules/pug-runtime/index.js */ "./node_modules/pug-runtime/index.js");

function template(locals) {var pug_html = "", pug_mixins = {}, pug_interp;pug_html = pug_html + "\u003Cp\u003EСтреляет массивом последних значений потоков\u003C\u002Fp\u003E\u003Cdiv class=\"stream-block\"\u003E\u003Cp\u003EПервый поток\u003C\u002Fp\u003E\u003Capp-draw-stream [stream]=\"source1\"\u003E\u003C\u002Fapp-draw-stream\u003E\u003Cp\u003EВторой поток\u003C\u002Fp\u003E\u003Capp-draw-stream [stream]=\"source2\"\u003E\u003C\u002Fapp-draw-stream\u003E\u003Cp\u003EТретий поток\u003C\u002Fp\u003E\u003Capp-draw-stream [stream]=\"source3\"\u003E\u003C\u002Fapp-draw-stream\u003E\u003Cp\u003EРезультат\u003C\u002Fp\u003E\u003Capp-draw-stream [stream]=\"result1\"\u003E\u003C\u002Fapp-draw-stream\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"stream-block\"\u003E\u003Cp\u003EПервый поток\u003C\u002Fp\u003E\u003Capp-draw-stream [stream]=\"source1\"\u003E\u003C\u002Fapp-draw-stream\u003E\u003Cp\u003EВторой поток\u003C\u002Fp\u003E\u003Capp-draw-stream [stream]=\"source2\"\u003E\u003C\u002Fapp-draw-stream\u003E\u003Cp\u003EТретий поток\u003C\u002Fp\u003E\u003Capp-draw-stream [stream]=\"source3\"\u003E\u003C\u002Fapp-draw-stream\u003E\u003Cp\u003EРезультат\u003C\u002Fp\u003E\u003Capp-draw-stream [stream]=\"result2\"\u003E\u003C\u002Fapp-draw-stream\u003E\u003C\u002Fdiv\u003E";;return pug_html;};
module.exports = template;

/***/ }),

/***/ "./node_modules/pug-loader/index.js!./src/app/pages/combination/concat/concat.component.pug":
/*!*****************************************************************************************!*\
  !*** ./node_modules/pug-loader!./src/app/pages/combination/concat/concat.component.pug ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var pug = __webpack_require__(/*! ../../../../../node_modules/pug-runtime/index.js */ "./node_modules/pug-runtime/index.js");

function template(locals) {var pug_html = "", pug_mixins = {}, pug_interp;pug_html = pug_html + "\u003Cp\u003EОбъединяет поток со следующим когда, предыдущий заканчивается\u003C\u002Fp\u003E\u003Cdiv class=\"stream-block\"\u003E\u003Cp\u003EПервый поток\u003C\u002Fp\u003E\u003Capp-draw-stream [stream]=\"source1\"\u003E\u003C\u002Fapp-draw-stream\u003E\u003Cp\u003EВторой поток\u003C\u002Fp\u003E\u003Capp-draw-stream [stream]=\"source2\"\u003E\u003C\u002Fapp-draw-stream\u003E\u003Cp\u003EРезультат\u003C\u002Fp\u003E\u003Capp-draw-stream [stream]=\"result1\"\u003E\u003C\u002Fapp-draw-stream\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"stream-block\"\u003E\u003Cp\u003EПервый поток\u003C\u002Fp\u003E\u003Capp-draw-stream [stream]=\"source2\"\u003E\u003C\u002Fapp-draw-stream\u003E\u003Cp\u003EВторой поток\u003C\u002Fp\u003E\u003Capp-draw-stream [stream]=\"source3\"\u003E\u003C\u002Fapp-draw-stream\u003E\u003Cp\u003EРезультат\u003C\u002Fp\u003E\u003Capp-draw-stream [stream]=\"result2\"\u003E\u003C\u002Fapp-draw-stream\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"stream-block\"\u003E\u003Cp\u003EПервый поток\u003C\u002Fp\u003E\u003Capp-draw-stream [stream]=\"source3\"\u003E\u003C\u002Fapp-draw-stream\u003E\u003Cp\u003EВторой поток\u003C\u002Fp\u003E\u003Capp-draw-stream [stream]=\"source1\"\u003E\u003C\u002Fapp-draw-stream\u003E\u003Cp\u003EРезультат\u003C\u002Fp\u003E\u003Capp-draw-stream [stream]=\"result3\"\u003E\u003C\u002Fapp-draw-stream\u003E\u003C\u002Fdiv\u003E";;return pug_html;};
module.exports = template;

/***/ }),

/***/ "./node_modules/pug-loader/index.js!./src/app/pages/combination/end-with/end-with.component.pug":
/*!*********************************************************************************************!*\
  !*** ./node_modules/pug-loader!./src/app/pages/combination/end-with/end-with.component.pug ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var pug = __webpack_require__(/*! ../../../../../node_modules/pug-runtime/index.js */ "./node_modules/pug-runtime/index.js");

function template(locals) {var pug_html = "", pug_mixins = {}, pug_interp;pug_html = pug_html + "\u003Cp\u003EПеред завершением потока стреляет переданным значением\u003C\u002Fp\u003E\u003Cdiv class=\"stream-block\"\u003E\u003Cp\u003EПоток\u003C\u002Fp\u003E\u003Capp-draw-stream [stream]=\"source1\"\u003E\u003C\u002Fapp-draw-stream\u003E\u003Cp\u003EРезультат\u003C\u002Fp\u003E\u003Capp-draw-stream [stream]=\"result1\"\u003E\u003C\u002Fapp-draw-stream\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"stream-block\"\u003E\u003Cp\u003EПоток\u003C\u002Fp\u003E\u003Capp-draw-stream [stream]=\"source2\"\u003E\u003C\u002Fapp-draw-stream\u003E\u003Cp\u003EРезультат\u003C\u002Fp\u003E\u003Capp-draw-stream [stream]=\"result2\"\u003E\u003C\u002Fapp-draw-stream\u003E\u003C\u002Fdiv\u003E";;return pug_html;};
module.exports = template;

/***/ }),

/***/ "./node_modules/pug-loader/index.js!./src/app/pages/combination/fork-join/fork-join.component.pug":
/*!***********************************************************************************************!*\
  !*** ./node_modules/pug-loader!./src/app/pages/combination/fork-join/fork-join.component.pug ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var pug = __webpack_require__(/*! ../../../../../node_modules/pug-runtime/index.js */ "./node_modules/pug-runtime/index.js");

function template(locals) {var pug_html = "", pug_mixins = {}, pug_interp;pug_html = pug_html + "\u003Cp\u003EКогда все потоки завершаются выстреливает последним значеним каждого\u003C\u002Fp\u003E\u003Cdiv class=\"stream-block\"\u003E\u003Cp\u003EПервый поток\u003C\u002Fp\u003E\u003Capp-draw-stream [stream]=\"source1\"\u003E\u003C\u002Fapp-draw-stream\u003E\u003Cp\u003EВторой поток\u003C\u002Fp\u003E\u003Capp-draw-stream [stream]=\"source2\"\u003E\u003C\u002Fapp-draw-stream\u003E\u003Cp\u003EТретий поток\u003C\u002Fp\u003E\u003Capp-draw-stream [stream]=\"source3\"\u003E\u003C\u002Fapp-draw-stream\u003E\u003Cp\u003EРезультат\u003C\u002Fp\u003E\u003Capp-draw-stream [stream]=\"result1\"\u003E\u003C\u002Fapp-draw-stream\u003E\u003C\u002Fdiv\u003E";;return pug_html;};
module.exports = template;

/***/ }),

/***/ "./node_modules/pug-loader/index.js!./src/app/pages/combination/merge-all/merge-all.component.pug":
/*!***********************************************************************************************!*\
  !*** ./node_modules/pug-loader!./src/app/pages/combination/merge-all/merge-all.component.pug ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var pug = __webpack_require__(/*! ../../../../../node_modules/pug-runtime/index.js */ "./node_modules/pug-runtime/index.js");

function template(locals) {var pug_html = "", pug_mixins = {}, pug_interp;pug_html = pug_html + "\u003Cp\u003EКонвертирует поток высшего порядка, в поток, который стреляет значениями всех потоков высшего порядка\u003C\u002Fp\u003E\u003Cp\u003E(Flattens an Observable-of-Observables)\u003C\u002Fp\u003E\u003Cdiv class=\"stream-block\"\u003E\u003Cp\u003EПоток кликов\u003C\u002Fp\u003E\u003Capp-draw-stream [stream]=\"source1\"\u003E\u003C\u002Fapp-draw-stream\u003E\u003Cp\u003EПоток высшего порядка (поток кликов перемапенный на поток потоков интервалов)\u003C\u002Fp\u003E\u003Capp-draw-stream [stream]=\"source2\"\u003E\u003C\u002Fapp-draw-stream\u003E\u003Cp\u003EРезультат merge-all\u003C\u002Fp\u003E\u003Capp-draw-stream [stream]=\"result1\"\u003E\u003C\u002Fapp-draw-stream\u003E\u003C\u002Fdiv\u003E";;return pug_html;};
module.exports = template;

/***/ }),

/***/ "./node_modules/pug-loader/index.js!./src/app/pages/combination/merge/merge.component.pug":
/*!***************************************************************************************!*\
  !*** ./node_modules/pug-loader!./src/app/pages/combination/merge/merge.component.pug ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var pug = __webpack_require__(/*! ../../../../../node_modules/pug-runtime/index.js */ "./node_modules/pug-runtime/index.js");

function template(locals) {var pug_html = "", pug_mixins = {}, pug_interp;pug_html = pug_html + "\u003Cp\u003EОбединяет несколько поток в один\u003C\u002Fp\u003E\u003Cdiv class=\"stream-block\"\u003E\u003Cp\u003EПервый поток\u003C\u002Fp\u003E\u003Capp-draw-stream [stream]=\"source1\"\u003E\u003C\u002Fapp-draw-stream\u003E\u003Cp\u003EВторой поток\u003C\u002Fp\u003E\u003Capp-draw-stream [stream]=\"source2\"\u003E\u003C\u002Fapp-draw-stream\u003E\u003Cp\u003EТретий поток\u003C\u002Fp\u003E\u003Capp-draw-stream [stream]=\"source3\"\u003E\u003C\u002Fapp-draw-stream\u003E\u003Cp\u003EРезультат\u003C\u002Fp\u003E\u003Capp-draw-stream [stream]=\"result1\"\u003E\u003C\u002Fapp-draw-stream\u003E\u003C\u002Fdiv\u003E";;return pug_html;};
module.exports = template;

/***/ }),

/***/ "./node_modules/pug-loader/index.js!./src/app/pages/combination/race/race.component.pug":
/*!*************************************************************************************!*\
  !*** ./node_modules/pug-loader!./src/app/pages/combination/race/race.component.pug ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var pug = __webpack_require__(/*! ../../../../../node_modules/pug-runtime/index.js */ "./node_modules/pug-runtime/index.js");

function template(locals) {var pug_html = "", pug_mixins = {}, pug_interp;pug_html = pug_html + "\u003Cp\u003EИспользуется поток, выстреливший первым\u003C\u002Fp\u003E\u003Cdiv class=\"stream-block\"\u003E\u003Cp\u003EПервый поток\u003C\u002Fp\u003E\u003Capp-draw-stream [stream]=\"source1\"\u003E\u003C\u002Fapp-draw-stream\u003E\u003Cp\u003EВторой поток\u003C\u002Fp\u003E\u003Capp-draw-stream [stream]=\"source2\"\u003E\u003C\u002Fapp-draw-stream\u003E\u003Cp\u003EТретий поток\u003C\u002Fp\u003E\u003Capp-draw-stream [stream]=\"source3\"\u003E\u003C\u002Fapp-draw-stream\u003E\u003Cp\u003EРезультат\u003C\u002Fp\u003E\u003Capp-draw-stream [stream]=\"result1\"\u003E\u003C\u002Fapp-draw-stream\u003E\u003C\u002Fdiv\u003E";;return pug_html;};
module.exports = template;

/***/ }),

/***/ "./node_modules/pug-loader/index.js!./src/app/pages/combination/start-with/start-with.component.pug":
/*!*************************************************************************************************!*\
  !*** ./node_modules/pug-loader!./src/app/pages/combination/start-with/start-with.component.pug ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var pug = __webpack_require__(/*! ../../../../../node_modules/pug-runtime/index.js */ "./node_modules/pug-runtime/index.js");

function template(locals) {var pug_html = "", pug_mixins = {}, pug_interp;pug_html = pug_html + "\u003Cp\u003EПервым стреляет переданным значением\u003C\u002Fp\u003E\u003Cdiv class=\"stream-block\"\u003E\u003Cp\u003EПоток\u003C\u002Fp\u003E\u003Capp-draw-stream [stream]=\"source1\"\u003E\u003C\u002Fapp-draw-stream\u003E\u003Cp\u003EРезультат приминения startWith('Hello!')\u003C\u002Fp\u003E\u003Capp-draw-stream [stream]=\"result1\"\u003E\u003C\u002Fapp-draw-stream\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"stream-block\"\u003E\u003Cp\u003EПоток\u003C\u002Fp\u003E\u003Capp-draw-stream [stream]=\"source2\"\u003E\u003C\u002Fapp-draw-stream\u003E\u003Cp\u003EРезультат приминения startWith('Hello', 'World!')\u003C\u002Fp\u003E\u003Capp-draw-stream [stream]=\"result2\"\u003E\u003C\u002Fapp-draw-stream\u003E\u003C\u002Fdiv\u003E";;return pug_html;};
module.exports = template;

/***/ }),

/***/ "./node_modules/pug-loader/index.js!./src/app/pages/combination/with-latest-from/with-latest-from.component.pug":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/pug-loader!./src/app/pages/combination/with-latest-from/with-latest-from.component.pug ***!
  \*************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var pug = __webpack_require__(/*! ../../../../../node_modules/pug-runtime/index.js */ "./node_modules/pug-runtime/index.js");

function template(locals) {var pug_html = "", pug_mixins = {}, pug_interp;pug_html = pug_html + "\u003Cp\u003EКомбинирует потоки, в результате массив последних значений\u003C\u002Fp\u003E\u003Cdiv class=\"stream-block\"\u003E\u003Cp\u003EПервый поток\u003C\u002Fp\u003E\u003Capp-draw-stream [stream]=\"source1\"\u003E\u003C\u002Fapp-draw-stream\u003E\u003Cp\u003EВторой поток\u003C\u002Fp\u003E\u003Capp-draw-stream [stream]=\"source2\"\u003E\u003C\u002Fapp-draw-stream\u003E\u003Cp\u003EРезультат\u003C\u002Fp\u003E\u003Capp-draw-stream [stream]=\"result1\"\u003E\u003C\u002Fapp-draw-stream\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"stream-block\"\u003E\u003Cp\u003EПервый поток\u003C\u002Fp\u003E\u003Capp-draw-stream [stream]=\"source2\"\u003E\u003C\u002Fapp-draw-stream\u003E\u003Cp\u003EВторой поток\u003C\u002Fp\u003E\u003Capp-draw-stream [stream]=\"source1\"\u003E\u003C\u002Fapp-draw-stream\u003E\u003Cp\u003EРезультат\u003C\u002Fp\u003E\u003Capp-draw-stream [stream]=\"result2\"\u003E\u003C\u002Fapp-draw-stream\u003E\u003C\u002Fdiv\u003E";;return pug_html;};
module.exports = template;

/***/ }),

/***/ "./node_modules/pug-loader/index.js!./src/app/pages/combination/zip/zip.component.pug":
/*!***********************************************************************************!*\
  !*** ./node_modules/pug-loader!./src/app/pages/combination/zip/zip.component.pug ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var pug = __webpack_require__(/*! ../../../../../node_modules/pug-runtime/index.js */ "./node_modules/pug-runtime/index.js");

function template(locals) {var pug_html = "", pug_mixins = {}, pug_interp;pug_html = pug_html + "\u003Cp\u003EПосле того как выстрелили все потоки, стреляет массивом их значений\u003C\u002Fp\u003E\u003Cp\u003EВ отличии от CombineLatest, ждет пока выстрелят n-th потоки и затем стреляет\u003C\u002Fp\u003E\u003Cdiv class=\"stream-block\"\u003E\u003Cp\u003EПервый поток\u003C\u002Fp\u003E\u003Capp-draw-stream [stream]=\"source1\"\u003E\u003C\u002Fapp-draw-stream\u003E\u003Cp\u003EВторой поток\u003C\u002Fp\u003E\u003Capp-draw-stream [stream]=\"source2\"\u003E\u003C\u002Fapp-draw-stream\u003E\u003Cp\u003EТретий поток\u003C\u002Fp\u003E\u003Capp-draw-stream [stream]=\"source3\"\u003E\u003C\u002Fapp-draw-stream\u003E\u003Cp\u003EЧетвертый поток\u003C\u002Fp\u003E\u003Capp-draw-stream [stream]=\"source4\"\u003E\u003C\u002Fapp-draw-stream\u003E\u003Cp\u003EРезультат\u003C\u002Fp\u003E\u003Capp-draw-stream [stream]=\"result1\"\u003E\u003C\u002Fapp-draw-stream\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"stream-block\"\u003E\u003Cp\u003EПервый поток\u003C\u002Fp\u003E\u003Capp-draw-stream [stream]=\"source2\"\u003E\u003C\u002Fapp-draw-stream\u003E\u003Cp\u003EВторой поток\u003C\u002Fp\u003E\u003Capp-draw-stream [stream]=\"source1\"\u003E\u003C\u002Fapp-draw-stream\u003E\u003Cp\u003EРезультат\u003C\u002Fp\u003E\u003Capp-draw-stream [stream]=\"result2\"\u003E\u003C\u002Fapp-draw-stream\u003E\u003C\u002Fdiv\u003E";;return pug_html;};
module.exports = template;

/***/ }),

/***/ "./node_modules/pug-loader/index.js!./src/app/pages/conditional/default-If-empty/default-if-empty.component.pug":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/pug-loader!./src/app/pages/conditional/default-If-empty/default-if-empty.component.pug ***!
  \*************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var pug = __webpack_require__(/*! ../../../../../node_modules/pug-runtime/index.js */ "./node_modules/pug-runtime/index.js");

function template(locals) {var pug_html = "", pug_mixins = {}, pug_interp;pug_html = pug_html + "\u003Cp\u003EВыстреливает заданным значением если у потока не было значений, только завершение\u003C\u002Fp\u003E\u003Cdiv class=\"stream-block\"\u003E\u003Cp\u003EПоток\u003C\u002Fp\u003E\u003Capp-draw-stream [stream]=\"source\"\u003E\u003C\u002Fapp-draw-stream\u003E\u003Cp\u003EРезультат\u003C\u002Fp\u003E\u003Capp-draw-stream [stream]=\"result\"\u003E\u003C\u002Fapp-draw-stream\u003E\u003C\u002Fdiv\u003E";;return pug_html;};
module.exports = template;

/***/ }),

/***/ "./node_modules/pug-loader/index.js!./src/app/pages/conditional/every/every.component.pug":
/*!***************************************************************************************!*\
  !*** ./node_modules/pug-loader!./src/app/pages/conditional/every/every.component.pug ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var pug = __webpack_require__(/*! ../../../../../node_modules/pug-runtime/index.js */ "./node_modules/pug-runtime/index.js");

function template(locals) {var pug_html = "", pug_mixins = {}, pug_interp;pug_html = pug_html + "\u003Cp\u003EЕсли все выстрелы потока удовлетворяют условию выстреливает\u003C\u002Fp\u003E\u003Cdiv class=\"stream-block\"\u003E\u003Cp\u003EПоток\u003C\u002Fp\u003E\u003Capp-draw-stream [stream]=\"source1\"\u003E\u003C\u002Fapp-draw-stream\u003E\u003Cp\u003EРезультат\u003C\u002Fp\u003E\u003Capp-draw-stream [stream]=\"result1\"\u003E\u003C\u002Fapp-draw-stream\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"stream-block\"\u003E\u003Cp\u003EПоток\u003C\u002Fp\u003E\u003Capp-draw-stream [stream]=\"source2\"\u003E\u003C\u002Fapp-draw-stream\u003E\u003Cp\u003EРезультат\u003C\u002Fp\u003E\u003Capp-draw-stream [stream]=\"result2\"\u003E\u003C\u002Fapp-draw-stream\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"stream-block\"\u003E\u003Cp\u003EПоток\u003C\u002Fp\u003E\u003Capp-draw-stream [stream]=\"source3\"\u003E\u003C\u002Fapp-draw-stream\u003E\u003Cp\u003EРезультат\u003C\u002Fp\u003E\u003Capp-draw-stream [stream]=\"result3\"\u003E\u003C\u002Fapp-draw-stream\u003E\u003C\u002Fdiv\u003E";;return pug_html;};
module.exports = template;

/***/ }),

/***/ "./node_modules/pug-loader/index.js!./src/app/pages/conditional/iif/iif.component.pug":
/*!***********************************************************************************!*\
  !*** ./node_modules/pug-loader!./src/app/pages/conditional/iif/iif.component.pug ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var pug = __webpack_require__(/*! ../../../../../node_modules/pug-runtime/index.js */ "./node_modules/pug-runtime/index.js");

function template(locals) {var pug_html = "", pug_mixins = {}, pug_interp;pug_html = pug_html + "\u003Cp\u003EПодписывается на один из потоков в зависимости от условия\u003C\u002Fp\u003E\u003Cdiv class=\"stream-block\"\u003E\u003Cp\u003EПоток\u003C\u002Fp\u003E\u003Capp-draw-stream [stream]=\"source1\"\u003E\u003C\u002Fapp-draw-stream\u003E\u003Cp\u003EРезультат\u003C\u002Fp\u003E\u003Capp-draw-stream [stream]=\"result1\"\u003E\u003C\u002Fapp-draw-stream\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"stream-block\"\u003E\u003Cp\u003EПоток\u003C\u002Fp\u003E\u003Capp-draw-stream [stream]=\"source2\"\u003E\u003C\u002Fapp-draw-stream\u003E\u003Cp\u003EРезультат\u003C\u002Fp\u003E\u003Capp-draw-stream [stream]=\"result2\"\u003E\u003C\u002Fapp-draw-stream\u003E\u003C\u002Fdiv\u003E";;return pug_html;};
module.exports = template;

/***/ }),

/***/ "./node_modules/pug-loader/index.js!./src/app/pages/conditional/sequnce-equal/sequnce-equal.component.pug":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/pug-loader!./src/app/pages/conditional/sequnce-equal/sequnce-equal.component.pug ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var pug = __webpack_require__(/*! ../../../../../node_modules/pug-runtime/index.js */ "./node_modules/pug-runtime/index.js");

function template(locals) {var pug_html = "", pug_mixins = {}, pug_interp;pug_html = pug_html + "\u003Cp\u003EПроверяет равны ли выстрелы потоков\u003C\u002Fp\u003E\u003Cdiv class=\"stream-block\"\u003E\u003Cp\u003EПоток 1\u003C\u002Fp\u003E\u003Capp-draw-stream [stream]=\"source1\"\u003E\u003C\u002Fapp-draw-stream\u003E\u003Cp\u003EПоток 2\u003C\u002Fp\u003E\u003Capp-draw-stream [stream]=\"source2\"\u003E\u003C\u002Fapp-draw-stream\u003E\u003Cp\u003EРезультат\u003C\u002Fp\u003E\u003Capp-draw-stream [stream]=\"result1\"\u003E\u003C\u002Fapp-draw-stream\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"stream-block\"\u003E\u003Cp\u003EПоток 1\u003C\u002Fp\u003E\u003Capp-draw-stream [stream]=\"source1\"\u003E\u003C\u002Fapp-draw-stream\u003E\u003Cp\u003EПоток 2\u003C\u002Fp\u003E\u003Capp-draw-stream [stream]=\"source3\"\u003E\u003C\u002Fapp-draw-stream\u003E\u003Cp\u003EРезультат\u003C\u002Fp\u003E\u003Capp-draw-stream [stream]=\"result2\"\u003E\u003C\u002Fapp-draw-stream\u003E\u003C\u002Fdiv\u003E";;return pug_html;};
module.exports = template;

/***/ }),

/***/ "./node_modules/pug-loader/index.js!./src/app/pages/creation/NEVER/NEVER.component.pug":
/*!************************************************************************************!*\
  !*** ./node_modules/pug-loader!./src/app/pages/creation/NEVER/NEVER.component.pug ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var pug = __webpack_require__(/*! ../../../../../node_modules/pug-runtime/index.js */ "./node_modules/pug-runtime/index.js");

function template(locals) {var pug_html = "", pug_mixins = {}, pug_interp;pug_html = pug_html + "\u003Cp\u003EПоток, который никогда не завершается\u003C\u002Fp\u003E\u003Cul class=\"streams\"\u003E\u003Cli *ngFor=\"let stream of streams\"\u003E\u003Capp-draw-stream [stream]=\"stream\"\u003E\u003C\u002Fapp-draw-stream\u003E\u003C\u002Fli\u003E\u003C\u002Ful\u003E";;return pug_html;};
module.exports = template;

/***/ }),

/***/ "./node_modules/pug-loader/index.js!./src/app/pages/creation/ajax/ajax.component.pug":
/*!**********************************************************************************!*\
  !*** ./node_modules/pug-loader!./src/app/pages/creation/ajax/ajax.component.pug ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var pug = __webpack_require__(/*! ../../../../../node_modules/pug-runtime/index.js */ "./node_modules/pug-runtime/index.js");

function template(locals) {var pug_html = "", pug_mixins = {}, pug_interp;pug_html = pug_html + "\u003Cp\u003EСоздает поток из переданных значений, затем его завершает\u003C\u002Fp\u003E\u003Cul class=\"streams\"\u003E\u003Cli *ngFor=\"let stream of streams\"\u003E\u003Capp-draw-stream [stream]=\"stream\"\u003E\u003C\u002Fapp-draw-stream\u003E\u003C\u002Fli\u003E\u003C\u002Ful\u003E";;return pug_html;};
module.exports = template;

/***/ }),

/***/ "./node_modules/pug-loader/index.js!./src/app/pages/creation/create/create.component.pug":
/*!**************************************************************************************!*\
  !*** ./node_modules/pug-loader!./src/app/pages/creation/create/create.component.pug ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var pug = __webpack_require__(/*! ../../../../../node_modules/pug-runtime/index.js */ "./node_modules/pug-runtime/index.js");

function template(locals) {var pug_html = "", pug_mixins = {}, pug_interp;pug_html = pug_html + "\u003Cp\u003EСоздает поток из переданной функции подписки\u003C\u002Fp\u003E\u003Cul class=\"streams\"\u003E\u003Cli *ngFor=\"let stream of streams\"\u003E\u003Capp-draw-stream [stream]=\"stream\"\u003E\u003C\u002Fapp-draw-stream\u003E\u003C\u002Fli\u003E\u003C\u002Ful\u003E";;return pug_html;};
module.exports = template;

/***/ }),

/***/ "./node_modules/pug-loader/index.js!./src/app/pages/creation/defer/defer.component.pug":
/*!************************************************************************************!*\
  !*** ./node_modules/pug-loader!./src/app/pages/creation/defer/defer.component.pug ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var pug = __webpack_require__(/*! ../../../../../node_modules/pug-runtime/index.js */ "./node_modules/pug-runtime/index.js");

function template(locals) {var pug_html = "", pug_mixins = {}, pug_interp;pug_html = pug_html + "\u003Cp\u003EСоздает поток из переданной функции\u003C\u002Fp\u003E\u003Cul class=\"streams\"\u003E\u003Cli *ngFor=\"let stream of streams\"\u003E\u003Capp-draw-stream [stream]=\"stream\"\u003E\u003C\u002Fapp-draw-stream\u003E\u003C\u002Fli\u003E\u003C\u002Ful\u003E";;return pug_html;};
module.exports = template;

/***/ }),

/***/ "./node_modules/pug-loader/index.js!./src/app/pages/creation/empty/empty.component.pug":
/*!************************************************************************************!*\
  !*** ./node_modules/pug-loader!./src/app/pages/creation/empty/empty.component.pug ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var pug = __webpack_require__(/*! ../../../../../node_modules/pug-runtime/index.js */ "./node_modules/pug-runtime/index.js");

function template(locals) {var pug_html = "", pug_mixins = {}, pug_interp;pug_html = pug_html + "\u003Cp\u003EСоздает поток, который сразу же завершается\u003C\u002Fp\u003E\u003Cul class=\"streams\"\u003E\u003Cli *ngFor=\"let stream of streams\"\u003E\u003Capp-draw-stream [stream]=\"stream\"\u003E\u003C\u002Fapp-draw-stream\u003E\u003C\u002Fli\u003E\u003C\u002Ful\u003E";;return pug_html;};
module.exports = template;

/***/ }),

/***/ "./node_modules/pug-loader/index.js!./src/app/pages/creation/from-event/from-event.component.pug":
/*!**********************************************************************************************!*\
  !*** ./node_modules/pug-loader!./src/app/pages/creation/from-event/from-event.component.pug ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var pug = __webpack_require__(/*! ../../../../../node_modules/pug-runtime/index.js */ "./node_modules/pug-runtime/index.js");

function template(locals) {var pug_html = "", pug_mixins = {}, pug_interp;pug_html = pug_html + "\u003Cp\u003EСоздает поток из последовательности событий\u003C\u002Fp\u003E\u003Cul class=\"streams\"\u003E\u003Cli *ngFor=\"let stream of streams\"\u003E\u003Capp-draw-stream [stream]=\"stream\"\u003E\u003C\u002Fapp-draw-stream\u003E\u003C\u002Fli\u003E\u003C\u002Ful\u003E\u003Cbutton #button style=\"padding: 10px; cursor: pointer\"\u003Eclick Me!\u003C\u002Fbutton\u003E";;return pug_html;};
module.exports = template;

/***/ }),

/***/ "./node_modules/pug-loader/index.js!./src/app/pages/creation/from/from.component.pug":
/*!**********************************************************************************!*\
  !*** ./node_modules/pug-loader!./src/app/pages/creation/from/from.component.pug ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var pug = __webpack_require__(/*! ../../../../../node_modules/pug-runtime/index.js */ "./node_modules/pug-runtime/index.js");

function template(locals) {var pug_html = "", pug_mixins = {}, pug_interp;pug_html = pug_html + "\u003Cp\u003EСоздает поток из массива, промиса, строки, или iterable\u003C\u002Fp\u003E\u003Cul class=\"streams\"\u003E\u003Cli *ngFor=\"let stream of streams\"\u003E\u003Capp-draw-stream [stream]=\"stream\"\u003E\u003C\u002Fapp-draw-stream\u003E\u003C\u002Fli\u003E\u003C\u002Ful\u003E";;return pug_html;};
module.exports = template;

/***/ }),

/***/ "./node_modules/pug-loader/index.js!./src/app/pages/creation/generate/generate.component.pug":
/*!******************************************************************************************!*\
  !*** ./node_modules/pug-loader!./src/app/pages/creation/generate/generate.component.pug ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var pug = __webpack_require__(/*! ../../../../../node_modules/pug-runtime/index.js */ "./node_modules/pug-runtime/index.js");

function template(locals) {var pug_html = "", pug_mixins = {}, pug_interp;pug_html = pug_html + "\u003Cp\u003EСоздает поток, с помощью переданного цикла\u003C\u002Fp\u003E\u003Cul class=\"streams\"\u003E\u003Cli *ngFor=\"let stream of streams\"\u003E\u003Capp-draw-stream [stream]=\"stream\"\u003E\u003C\u002Fapp-draw-stream\u003E\u003C\u002Fli\u003E\u003C\u002Ful\u003E";;return pug_html;};
module.exports = template;

/***/ }),

/***/ "./node_modules/pug-loader/index.js!./src/app/pages/creation/interval/interval.component.pug":
/*!******************************************************************************************!*\
  !*** ./node_modules/pug-loader!./src/app/pages/creation/interval/interval.component.pug ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var pug = __webpack_require__(/*! ../../../../../node_modules/pug-runtime/index.js */ "./node_modules/pug-runtime/index.js");

function template(locals) {var pug_html = "", pug_mixins = {}, pug_interp;pug_html = pug_html + "\u003Cp\u003EСоздает поток, стреляющий последовательностью чисел начиная с 0, с заданной периодичностью\u003C\u002Fp\u003E\u003Cul class=\"streams\"\u003E\u003Cli *ngFor=\"let stream of streams\"\u003E\u003Capp-draw-stream [stream]=\"stream\"\u003E\u003C\u002Fapp-draw-stream\u003E\u003C\u002Fli\u003E\u003C\u002Ful\u003E";;return pug_html;};
module.exports = template;

/***/ }),

/***/ "./node_modules/pug-loader/index.js!./src/app/pages/creation/of/of.component.pug":
/*!******************************************************************************!*\
  !*** ./node_modules/pug-loader!./src/app/pages/creation/of/of.component.pug ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var pug = __webpack_require__(/*! ../../../../../node_modules/pug-runtime/index.js */ "./node_modules/pug-runtime/index.js");

function template(locals) {var pug_html = "", pug_mixins = {}, pug_interp;pug_html = pug_html + "\u003Cp\u003EСоздает поток из переданных значений, затем его завершает\u003C\u002Fp\u003E\u003Cul class=\"streams\"\u003E\u003Cli *ngFor=\"let stream of streams\"\u003E\u003Capp-draw-stream [stream]=\"stream\"\u003E\u003C\u002Fapp-draw-stream\u003E\u003C\u002Fli\u003E\u003C\u002Ful\u003E";;return pug_html;};
module.exports = template;

/***/ }),

/***/ "./node_modules/pug-loader/index.js!./src/app/pages/creation/range/range.component.pug":
/*!************************************************************************************!*\
  !*** ./node_modules/pug-loader!./src/app/pages/creation/range/range.component.pug ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var pug = __webpack_require__(/*! ../../../../../node_modules/pug-runtime/index.js */ "./node_modules/pug-runtime/index.js");

function template(locals) {var pug_html = "", pug_mixins = {}, pug_interp;pug_html = pug_html + "\u003Cp\u003EСоздает поток из передавнного диапазона чисел\u003C\u002Fp\u003E\u003Cul class=\"streams\"\u003E\u003Cli *ngFor=\"let stream of streams\"\u003E\u003Capp-draw-stream [stream]=\"stream\"\u003E\u003C\u002Fapp-draw-stream\u003E\u003C\u002Fli\u003E\u003C\u002Ful\u003E";;return pug_html;};
module.exports = template;

/***/ }),

/***/ "./node_modules/pug-loader/index.js!./src/app/pages/creation/throw-error/throw-error.component.pug":
/*!************************************************************************************************!*\
  !*** ./node_modules/pug-loader!./src/app/pages/creation/throw-error/throw-error.component.pug ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var pug = __webpack_require__(/*! ../../../../../node_modules/pug-runtime/index.js */ "./node_modules/pug-runtime/index.js");

function template(locals) {var pug_html = "", pug_mixins = {}, pug_interp;pug_html = pug_html + "\u003Cp\u003EСоздает поток из последовательности событий\u003C\u002Fp\u003E\u003Cul class=\"streams\"\u003E\u003Cli *ngFor=\"let stream of streams\"\u003E\u003Capp-draw-stream [stream]=\"stream\"\u003E\u003C\u002Fapp-draw-stream\u003E\u003C\u002Fli\u003E\u003C\u002Ful\u003E";;return pug_html;};
module.exports = template;

/***/ }),

/***/ "./node_modules/pug-loader/index.js!./src/app/pages/creation/timer/timer.component.pug":
/*!************************************************************************************!*\
  !*** ./node_modules/pug-loader!./src/app/pages/creation/timer/timer.component.pug ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var pug = __webpack_require__(/*! ../../../../../node_modules/pug-runtime/index.js */ "./node_modules/pug-runtime/index.js");

function template(locals) {var pug_html = "", pug_mixins = {}, pug_interp;pug_html = pug_html + "\u003Cp\u003EПосле выбранного промежутка, стреляет последовательностью чисел с заданным промежутком.\u003C\u002Fp\u003E\u003Cul class=\"streams\"\u003E\u003Cli *ngFor=\"let stream of streams\"\u003E\u003Capp-draw-stream [stream]=\"stream\"\u003E\u003C\u002Fapp-draw-stream\u003E\u003C\u002Fli\u003E\u003C\u002Ful\u003E";;return pug_html;};
module.exports = template;

/***/ }),

/***/ "./node_modules/pug-loader/index.js!./src/app/pages/draw-stream/draw-stream.component.pug":
/*!***************************************************************************************!*\
  !*** ./node_modules/pug-loader!./src/app/pages/draw-stream/draw-stream.component.pug ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var pug = __webpack_require__(/*! ../../../../node_modules/pug-runtime/index.js */ "./node_modules/pug-runtime/index.js");

function template(locals) {var pug_html = "", pug_mixins = {}, pug_interp;pug_html = pug_html + "\u003Cdiv class=\"stream\"\u003E\u003Cdiv class=\"stream__extra\"\u003E\u003Cdiv class=\"stream__info\"\u003E\u003Cdiv class=\"stream__name\" *ngIf=\"stream\"\u003E{{ stream.name }}\u003C\u002Fdiv\u003E\u003Cdiv class=\"stream__code\" *ngIf=\"stream\"\u003E\u003Capp-ui-code [code]=\"stream.code\"\u003E\u003C\u002Fapp-ui-code\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"stream__description\" *ngIf=\"stream\"\u003E{{ stream.description }}\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003Cul class=\"stream__values\"\u003E\u003Cli class=\"stream__value-wrap\" *ngFor=\"let value of values\"\u003E\u003Cspan class=\"stream__value\" [ngClass]=\"getCssClasses(value)\"\u003E{{ showVal(value) }}\u003C\u002Fspan\u003E\u003Ccode class=\"stream__value-details\" *ngIf=\"isValSpecial(value.val)\"\u003E{{ showValDetails(value.val) }}\u003C\u002Fcode\u003E\u003C\u002Fli\u003E\u003C\u002Ful\u003E\u003C\u002Fdiv\u003E";;return pug_html;};
module.exports = template;

/***/ }),

/***/ "./node_modules/pug-loader/index.js!./src/app/pages/filtering/debounce-time/debounce-time.component.pug":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/pug-loader!./src/app/pages/filtering/debounce-time/debounce-time.component.pug ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var pug = __webpack_require__(/*! ../../../../../node_modules/pug-runtime/index.js */ "./node_modules/pug-runtime/index.js");

function template(locals) {var pug_html = "", pug_mixins = {}, pug_interp;pug_html = pug_html + "\u003Cp\u003EОтфильтровывает все выстрелы между которыми прошло меньше времени передано debounceTime\u003C\u002Fp\u003E\u003Cdiv class=\"stream-block\"\u003E\u003Cp\u003EПоток\u003C\u002Fp\u003E\u003Capp-draw-stream [stream]=\"source1\"\u003E\u003C\u002Fapp-draw-stream\u003E\u003Cp\u003EРезультат\u003C\u002Fp\u003E\u003Capp-draw-stream [stream]=\"result1\"\u003E\u003C\u002Fapp-draw-stream\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"stream-block\"\u003E\u003Cp\u003EПоток\u003C\u002Fp\u003E\u003Capp-draw-stream [stream]=\"source2\"\u003E\u003C\u002Fapp-draw-stream\u003E\u003Cp\u003EРезультат\u003C\u002Fp\u003E\u003Capp-draw-stream [stream]=\"result2\"\u003E\u003C\u002Fapp-draw-stream\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"stream-block\"\u003E\u003Cinput #input type=\"text\"\u003E\u003Cp\u003EПоток\u003C\u002Fp\u003E\u003Capp-draw-stream [stream]=\"source3\"\u003E\u003C\u002Fapp-draw-stream\u003E\u003Cp\u003EРезультат\u003C\u002Fp\u003E\u003Capp-draw-stream [stream]=\"result3\"\u003E\u003C\u002Fapp-draw-stream\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"stream-block\"\u003E\u003Cp\u003EПоток\u003C\u002Fp\u003E\u003Capp-draw-stream [stream]=\"source4\"\u003E\u003C\u002Fapp-draw-stream\u003E\u003Cp\u003EРезультат\u003C\u002Fp\u003E\u003Capp-draw-stream [stream]=\"result4\"\u003E\u003C\u002Fapp-draw-stream\u003E\u003C\u002Fdiv\u003E";;return pug_html;};
module.exports = template;

/***/ }),

/***/ "./node_modules/pug-loader/index.js!./src/app/pages/filtering/debounce/debounce.component.pug":
/*!*******************************************************************************************!*\
  !*** ./node_modules/pug-loader!./src/app/pages/filtering/debounce/debounce.component.pug ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var pug = __webpack_require__(/*! ../../../../../node_modules/pug-runtime/index.js */ "./node_modules/pug-runtime/index.js");

function template(locals) {var pug_html = "", pug_mixins = {}, pug_interp;pug_html = pug_html + "\u003Cp\u003EОтфильтровывает все выстрелы между которыми прошло меньше времени чем возвращает debounce\u003C\u002Fp\u003E\u003Cdiv class=\"stream-block\"\u003E\u003Cp\u003EПоток\u003C\u002Fp\u003E\u003Capp-draw-stream [stream]=\"source1\"\u003E\u003C\u002Fapp-draw-stream\u003E\u003Cp\u003EРезультат\u003C\u002Fp\u003E\u003Capp-draw-stream [stream]=\"result1\"\u003E\u003C\u002Fapp-draw-stream\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"stream-block\"\u003E\u003Cp\u003EПоток\u003C\u002Fp\u003E\u003Capp-draw-stream [stream]=\"source2\"\u003E\u003C\u002Fapp-draw-stream\u003E\u003Cp\u003EРезультат\u003C\u002Fp\u003E\u003Capp-draw-stream [stream]=\"result2\"\u003E\u003C\u002Fapp-draw-stream\u003E\u003C\u002Fdiv\u003E";;return pug_html;};
module.exports = template;

/***/ }),

/***/ "./node_modules/pug-loader/index.js!./src/app/pages/filtering/distinct-until-changed/distinct-until-changed.component.pug":
/*!***********************************************************************************************************************!*\
  !*** ./node_modules/pug-loader!./src/app/pages/filtering/distinct-until-changed/distinct-until-changed.component.pug ***!
  \***********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var pug = __webpack_require__(/*! ../../../../../node_modules/pug-runtime/index.js */ "./node_modules/pug-runtime/index.js");

function template(locals) {var pug_html = "", pug_mixins = {}, pug_interp;pug_html = pug_html + "\u003Cp\u003EВыстреливает только если новое значение отличается от предыдущего\u003C\u002Fp\u003E\u003Cp\u003EОбъекты сравниваются по ссылке\u003C\u002Fp\u003E\u003Cdiv class=\"stream-block\"\u003E\u003Cp\u003EПоток\u003C\u002Fp\u003E\u003Capp-draw-stream [stream]=\"source1\"\u003E\u003C\u002Fapp-draw-stream\u003E\u003Cp\u003EРезультат\u003C\u002Fp\u003E\u003Capp-draw-stream [stream]=\"result1\"\u003E\u003C\u002Fapp-draw-stream\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"stream-block\"\u003E\u003Cp\u003EПоток\u003C\u002Fp\u003E\u003Capp-draw-stream [stream]=\"source2\"\u003E\u003C\u002Fapp-draw-stream\u003E\u003Cp\u003EРезультат\u003C\u002Fp\u003E\u003Capp-draw-stream [stream]=\"result2\"\u003E\u003C\u002Fapp-draw-stream\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"stream-block\"\u003E\u003Cp\u003EПоток\u003C\u002Fp\u003E\u003Capp-draw-stream [stream]=\"source3\"\u003E\u003C\u002Fapp-draw-stream\u003E\u003Cp\u003EРезультат\u003C\u002Fp\u003E\u003Capp-draw-stream [stream]=\"result3\"\u003E\u003C\u002Fapp-draw-stream\u003E\u003C\u002Fdiv\u003E";;return pug_html;};
module.exports = template;

/***/ }),

/***/ "./node_modules/pug-loader/index.js!./src/app/pages/filtering/distinct/distinct.component.pug":
/*!*******************************************************************************************!*\
  !*** ./node_modules/pug-loader!./src/app/pages/filtering/distinct/distinct.component.pug ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var pug = __webpack_require__(/*! ../../../../../node_modules/pug-runtime/index.js */ "./node_modules/pug-runtime/index.js");

function template(locals) {var pug_html = "", pug_mixins = {}, pug_interp;pug_html = pug_html + "\u003Cp\u003EОтфильтровывает все не уникальные значения, можно передать функцию\u003C\u002Fp\u003E\u003Cdiv class=\"stream-block\"\u003E\u003Cp\u003EПоток\u003C\u002Fp\u003E\u003Capp-draw-stream [stream]=\"source1\"\u003E\u003C\u002Fapp-draw-stream\u003E\u003Cp\u003EРезультат\u003C\u002Fp\u003E\u003Capp-draw-stream [stream]=\"result1\"\u003E\u003C\u002Fapp-draw-stream\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"stream-block\"\u003E\u003Cp\u003EПоток\u003C\u002Fp\u003E\u003Capp-draw-stream [stream]=\"source2\"\u003E\u003C\u002Fapp-draw-stream\u003E\u003Cp\u003EРезультат\u003C\u002Fp\u003E\u003Capp-draw-stream [stream]=\"result2\"\u003E\u003C\u002Fapp-draw-stream\u003E\u003C\u002Fdiv\u003E";;return pug_html;};
module.exports = template;

/***/ }),

/***/ "./node_modules/pug-loader/index.js!./src/app/pages/filtering/element-at/element-at.component.pug":
/*!***********************************************************************************************!*\
  !*** ./node_modules/pug-loader!./src/app/pages/filtering/element-at/element-at.component.pug ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var pug = __webpack_require__(/*! ../../../../../node_modules/pug-runtime/index.js */ "./node_modules/pug-runtime/index.js");

function template(locals) {var pug_html = "", pug_mixins = {}, pug_interp;pug_html = pug_html + "\u003Cp\u003EВыстреливает единственным значением по переданному индексу из потока\u003C\u002Fp\u003E\u003Cdiv class=\"stream-block\"\u003E\u003Cp\u003EПоток\u003C\u002Fp\u003E\u003Capp-draw-stream [stream]=\"source1\"\u003E\u003C\u002Fapp-draw-stream\u003E\u003Cp\u003EРезультат\u003C\u002Fp\u003E\u003Capp-draw-stream [stream]=\"result1\"\u003E\u003C\u002Fapp-draw-stream\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"stream-block\"\u003E\u003Cp\u003EПоток\u003C\u002Fp\u003E\u003Capp-draw-stream [stream]=\"source2\"\u003E\u003C\u002Fapp-draw-stream\u003E\u003Cp\u003EРезультат\u003C\u002Fp\u003E\u003Capp-draw-stream [stream]=\"result2\"\u003E\u003C\u002Fapp-draw-stream\u003E\u003C\u002Fdiv\u003E";;return pug_html;};
module.exports = template;

/***/ }),

/***/ "./node_modules/pug-loader/index.js!./src/app/pages/filtering/filter/filter.component.pug":
/*!***************************************************************************************!*\
  !*** ./node_modules/pug-loader!./src/app/pages/filtering/filter/filter.component.pug ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var pug = __webpack_require__(/*! ../../../../../node_modules/pug-runtime/index.js */ "./node_modules/pug-runtime/index.js");

function template(locals) {var pug_html = "", pug_mixins = {}, pug_interp;pug_html = pug_html + "\u003Cp\u003EВыстреливает значениями удовлетворяющих предикату\u003C\u002Fp\u003E\u003Cdiv class=\"stream-block\"\u003E\u003Cp\u003EПоток\u003C\u002Fp\u003E\u003Capp-draw-stream [stream]=\"source1\"\u003E\u003C\u002Fapp-draw-stream\u003E\u003Cp\u003EРезультат\u003C\u002Fp\u003E\u003Capp-draw-stream [stream]=\"result1\"\u003E\u003C\u002Fapp-draw-stream\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"stream-block\"\u003E\u003Cp\u003EПоток\u003C\u002Fp\u003E\u003Capp-draw-stream [stream]=\"source2\"\u003E\u003C\u002Fapp-draw-stream\u003E\u003Cp\u003EРезультат\u003C\u002Fp\u003E\u003Capp-draw-stream [stream]=\"result2\"\u003E\u003C\u002Fapp-draw-stream\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"stream-block\"\u003E\u003Cp\u003EПоток\u003C\u002Fp\u003E\u003Capp-draw-stream [stream]=\"source3\"\u003E\u003C\u002Fapp-draw-stream\u003E\u003Cp\u003EРезультат\u003C\u002Fp\u003E\u003Capp-draw-stream [stream]=\"result3\"\u003E\u003C\u002Fapp-draw-stream\u003E\u003C\u002Fdiv\u003E";;return pug_html;};
module.exports = template;

/***/ }),

/***/ "./node_modules/pug-loader/index.js!./src/app/pages/filtering/find-index/find-index.component.pug":
/*!***********************************************************************************************!*\
  !*** ./node_modules/pug-loader!./src/app/pages/filtering/find-index/find-index.component.pug ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var pug = __webpack_require__(/*! ../../../../../node_modules/pug-runtime/index.js */ "./node_modules/pug-runtime/index.js");

function template(locals) {var pug_html = "", pug_mixins = {}, pug_interp;pug_html = pug_html + "\u003Cp\u003EВыстреливает первым индексом у значения потока удовлетворяющим предикату\u003C\u002Fp\u003E\u003Cdiv class=\"stream-block\"\u003E\u003Cp\u003EПоток\u003C\u002Fp\u003E\u003Capp-draw-stream [stream]=\"source1\"\u003E\u003C\u002Fapp-draw-stream\u003E\u003Cp\u003EРезультат\u003C\u002Fp\u003E\u003Capp-draw-stream [stream]=\"result1\"\u003E\u003C\u002Fapp-draw-stream\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"stream-block\"\u003E\u003Cp\u003EПоток\u003C\u002Fp\u003E\u003Capp-draw-stream [stream]=\"source2\"\u003E\u003C\u002Fapp-draw-stream\u003E\u003Cp\u003EResult\u003C\u002Fp\u003E\u003Capp-draw-stream [stream]=\"result2\"\u003E\u003C\u002Fapp-draw-stream\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"stream-block\"\u003E\u003Cp\u003EПоток\u003C\u002Fp\u003E\u003Capp-draw-stream [stream]=\"source3\"\u003E\u003C\u002Fapp-draw-stream\u003E\u003Cp\u003EРезультат\u003C\u002Fp\u003E\u003Capp-draw-stream [stream]=\"result3\"\u003E\u003C\u002Fapp-draw-stream\u003E\u003C\u002Fdiv\u003E";;return pug_html;};
module.exports = template;

/***/ }),

/***/ "./node_modules/pug-loader/index.js!./src/app/pages/filtering/find/find.component.pug":
/*!***********************************************************************************!*\
  !*** ./node_modules/pug-loader!./src/app/pages/filtering/find/find.component.pug ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var pug = __webpack_require__(/*! ../../../../../node_modules/pug-runtime/index.js */ "./node_modules/pug-runtime/index.js");

function template(locals) {var pug_html = "", pug_mixins = {}, pug_interp;pug_html = pug_html + "\u003Cp\u003EВыстреливает первым значением потока удовлетворяющим предикату\u003C\u002Fp\u003E\u003Cdiv class=\"stream-block\"\u003E\u003Cp\u003EПоток\u003C\u002Fp\u003E\u003Capp-draw-stream [stream]=\"source1\"\u003E\u003C\u002Fapp-draw-stream\u003E\u003Cp\u003EРезультат\u003C\u002Fp\u003E\u003Capp-draw-stream [stream]=\"result1\"\u003E\u003C\u002Fapp-draw-stream\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"stream-block\"\u003E\u003Cp\u003EПоток\u003C\u002Fp\u003E\u003Capp-draw-stream [stream]=\"source2\"\u003E\u003C\u002Fapp-draw-stream\u003E\u003Cp\u003EРезультат\u003C\u002Fp\u003E\u003Capp-draw-stream [stream]=\"result2\"\u003E\u003C\u002Fapp-draw-stream\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"stream-block\"\u003E\u003Cp\u003EПоток\u003C\u002Fp\u003E\u003Capp-draw-stream [stream]=\"source3\"\u003E\u003C\u002Fapp-draw-stream\u003E\u003Cp\u003EРезультат\u003C\u002Fp\u003E\u003Capp-draw-stream [stream]=\"result3\"\u003E\u003C\u002Fapp-draw-stream\u003E\u003C\u002Fdiv\u003E";;return pug_html;};
module.exports = template;

/***/ }),

/***/ "./node_modules/pug-loader/index.js!./src/app/pages/filtering/first/first.component.pug":
/*!*************************************************************************************!*\
  !*** ./node_modules/pug-loader!./src/app/pages/filtering/first/first.component.pug ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var pug = __webpack_require__(/*! ../../../../../node_modules/pug-runtime/index.js */ "./node_modules/pug-runtime/index.js");

function template(locals) {var pug_html = "", pug_mixins = {}, pug_interp;pug_html = pug_html + "\u003Cp\u003EВыстреливает первым значением потока\u003C\u002Fp\u003E\u003Cdiv class=\"stream-block\"\u003E\u003Cp\u003EПоток\u003C\u002Fp\u003E\u003Capp-draw-stream [stream]=\"source1\"\u003E\u003C\u002Fapp-draw-stream\u003E\u003Cp\u003EРезультат\u003C\u002Fp\u003E\u003Capp-draw-stream [stream]=\"result1\"\u003E\u003C\u002Fapp-draw-stream\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"stream-block\"\u003E\u003Cp\u003EПоток\u003C\u002Fp\u003E\u003Capp-draw-stream [stream]=\"source2\"\u003E\u003C\u002Fapp-draw-stream\u003E\u003Cp\u003EРезультат\u003C\u002Fp\u003E\u003Capp-draw-stream [stream]=\"result2\"\u003E\u003C\u002Fapp-draw-stream\u003E\u003C\u002Fdiv\u003E";;return pug_html;};
module.exports = template;

/***/ }),

/***/ "./node_modules/pug-loader/index.js!./src/app/pages/filtering/ignore-elements/ignore-elements.component.pug":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/pug-loader!./src/app/pages/filtering/ignore-elements/ignore-elements.component.pug ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var pug = __webpack_require__(/*! ../../../../../node_modules/pug-runtime/index.js */ "./node_modules/pug-runtime/index.js");

function template(locals) {var pug_html = "", pug_mixins = {}, pug_interp;pug_html = pug_html + "\u003Cp\u003EИгнорирует все кроме ошибки и завершения потока\u003C\u002Fp\u003E\u003Cdiv class=\"stream-block\"\u003E\u003Cp\u003EПоток\u003C\u002Fp\u003E\u003Capp-draw-stream [stream]=\"source1\"\u003E\u003C\u002Fapp-draw-stream\u003E\u003Cp\u003EРезультат\u003C\u002Fp\u003E\u003Capp-draw-stream [stream]=\"result1\"\u003E\u003C\u002Fapp-draw-stream\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"stream-block\"\u003E\u003Cp\u003EПоток\u003C\u002Fp\u003E\u003Capp-draw-stream [stream]=\"source2\"\u003E\u003C\u002Fapp-draw-stream\u003E\u003Cp\u003EРезультат\u003C\u002Fp\u003E\u003Capp-draw-stream [stream]=\"result2\"\u003E\u003C\u002Fapp-draw-stream\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"stream-block\"\u003E\u003Cp\u003EПоток\u003C\u002Fp\u003E\u003Capp-draw-stream [stream]=\"source3\"\u003E\u003C\u002Fapp-draw-stream\u003E\u003Cp\u003EРезультат\u003C\u002Fp\u003E\u003Capp-draw-stream [stream]=\"result3\"\u003E\u003C\u002Fapp-draw-stream\u003E\u003C\u002Fdiv\u003E";;return pug_html;};
module.exports = template;

/***/ }),

/***/ "./node_modules/pug-loader/index.js!./src/app/pages/filtering/last/last.component.pug":
/*!***********************************************************************************!*\
  !*** ./node_modules/pug-loader!./src/app/pages/filtering/last/last.component.pug ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var pug = __webpack_require__(/*! ../../../../../node_modules/pug-runtime/index.js */ "./node_modules/pug-runtime/index.js");

function template(locals) {var pug_html = "", pug_mixins = {}, pug_interp;pug_html = pug_html + "\u003Cp\u003EПоследнее значение потока, можно передать предикат\u003C\u002Fp\u003E\u003Cdiv class=\"stream-block\"\u003E\u003Cp\u003EПоток\u003C\u002Fp\u003E\u003Capp-draw-stream [stream]=\"source1\"\u003E\u003C\u002Fapp-draw-stream\u003E\u003Cp\u003EРезультат\u003C\u002Fp\u003E\u003Capp-draw-stream [stream]=\"result1\"\u003E\u003C\u002Fapp-draw-stream\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"stream-block\"\u003E\u003Cp\u003EПоток\u003C\u002Fp\u003E\u003Capp-draw-stream [stream]=\"source2\"\u003E\u003C\u002Fapp-draw-stream\u003E\u003Cp\u003EРезультат\u003C\u002Fp\u003E\u003Capp-draw-stream [stream]=\"result2\"\u003E\u003C\u002Fapp-draw-stream\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"stream-block\"\u003E\u003Cp\u003EПоток\u003C\u002Fp\u003E\u003Capp-draw-stream [stream]=\"source3\"\u003E\u003C\u002Fapp-draw-stream\u003E\u003Cp\u003EРезультат\u003C\u002Fp\u003E\u003Capp-draw-stream [stream]=\"result3\"\u003E\u003C\u002Fapp-draw-stream\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"stream-block\"\u003E\u003Cp\u003EПоток\u003C\u002Fp\u003E\u003Capp-draw-stream [stream]=\"source4\"\u003E\u003C\u002Fapp-draw-stream\u003E\u003Cp\u003EРезультат\u003C\u002Fp\u003E\u003Capp-draw-stream [stream]=\"result4\"\u003E\u003C\u002Fapp-draw-stream\u003E\u003C\u002Fdiv\u003E";;return pug_html;};
module.exports = template;

/***/ }),

/***/ "./node_modules/pug-loader/index.js!./src/app/pages/filtering/sample/sample.component.pug":
/*!***************************************************************************************!*\
  !*** ./node_modules/pug-loader!./src/app/pages/filtering/sample/sample.component.pug ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var pug = __webpack_require__(/*! ../../../../../node_modules/pug-runtime/index.js */ "./node_modules/pug-runtime/index.js");

function template(locals) {var pug_html = "", pug_mixins = {}, pug_interp;pug_html = pug_html + "\u003Cp\u003EКогда стреляет внутренний поток берет значение из внешнего (вроде)\u003C\u002Fp\u003E\u003Cp\u003EНо не чаще чем значение изменится\u003C\u002Fp\u003E\u003Cdiv class=\"stream-block\"\u003E\u003Cp\u003EПоток 1\u003C\u002Fp\u003E\u003Capp-draw-stream [stream]=\"source1\"\u003E\u003C\u002Fapp-draw-stream\u003E\u003Cp\u003EПоток 2\u003C\u002Fp\u003E\u003Capp-draw-stream [stream]=\"source2\"\u003E\u003C\u002Fapp-draw-stream\u003E\u003Cp\u003EРезультат\u003C\u002Fp\u003E\u003Capp-draw-stream [stream]=\"result1\"\u003E\u003C\u002Fapp-draw-stream\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"stream-block\"\u003E\u003Cp\u003EПоток 1\u003C\u002Fp\u003E\u003Capp-draw-stream [stream]=\"source2\"\u003E\u003C\u002Fapp-draw-stream\u003E\u003Cp\u003EПоток 2\u003C\u002Fp\u003E\u003Capp-draw-stream [stream]=\"source1\"\u003E\u003C\u002Fapp-draw-stream\u003E\u003Cp\u003EРезультат\u003C\u002Fp\u003E\u003Capp-draw-stream [stream]=\"result2\"\u003E\u003C\u002Fapp-draw-stream\u003E\u003C\u002Fdiv\u003E";;return pug_html;};
module.exports = template;

/***/ }),

/***/ "./node_modules/pug-loader/index.js!./src/app/pages/filtering/skip-until/skip-until.component.pug":
/*!***********************************************************************************************!*\
  !*** ./node_modules/pug-loader!./src/app/pages/filtering/skip-until/skip-until.component.pug ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var pug = __webpack_require__(/*! ../../../../../node_modules/pug-runtime/index.js */ "./node_modules/pug-runtime/index.js");

function template(locals) {var pug_html = "", pug_mixins = {}, pug_interp;pug_html = pug_html + "\u003Cp\u003EПропускает выстрелы потока, пока не выстрелит переданный\u003C\u002Fp\u003E\u003Cdiv class=\"stream-block\"\u003E\u003Cp\u003EПоток 1\u003C\u002Fp\u003E\u003Capp-draw-stream [stream]=\"source1\"\u003E\u003C\u002Fapp-draw-stream\u003E\u003Cp\u003EПоток 2\u003C\u002Fp\u003E\u003Capp-draw-stream [stream]=\"source2\"\u003E\u003C\u002Fapp-draw-stream\u003E\u003Cp\u003EРезультат\u003C\u002Fp\u003E\u003Capp-draw-stream [stream]=\"result1\"\u003E\u003C\u002Fapp-draw-stream\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"stream-block\"\u003E\u003Cp\u003EПоток 1\u003C\u002Fp\u003E\u003Capp-draw-stream [stream]=\"source3\"\u003E\u003C\u002Fapp-draw-stream\u003E\u003Cp\u003EПоток 2\u003C\u002Fp\u003E\u003Capp-draw-stream [stream]=\"source2\"\u003E\u003C\u002Fapp-draw-stream\u003E\u003Cp\u003EРезультат\u003C\u002Fp\u003E\u003Capp-draw-stream [stream]=\"result2\"\u003E\u003C\u002Fapp-draw-stream\u003E\u003C\u002Fdiv\u003E";;return pug_html;};
module.exports = template;

/***/ }),

/***/ "./node_modules/pug-loader/index.js!./src/app/pages/filtering/skip-while/skip-while.component.pug":
/*!***********************************************************************************************!*\
  !*** ./node_modules/pug-loader!./src/app/pages/filtering/skip-while/skip-while.component.pug ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var pug = __webpack_require__(/*! ../../../../../node_modules/pug-runtime/index.js */ "./node_modules/pug-runtime/index.js");

function template(locals) {var pug_html = "", pug_mixins = {}, pug_interp;pug_html = pug_html + "\u003Cp\u003EПропускает выстрелы потока пока переданный предикат false\u003C\u002Fp\u003E\u003Cdiv class=\"stream-block\"\u003E\u003Cp\u003EПоток\u003C\u002Fp\u003E\u003Capp-draw-stream [stream]=\"source1\"\u003E\u003C\u002Fapp-draw-stream\u003E\u003Cp\u003EРезультат\u003C\u002Fp\u003E\u003Capp-draw-stream [stream]=\"result1\"\u003E\u003C\u002Fapp-draw-stream\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"stream-block\"\u003E\u003Cp\u003EПоток\u003C\u002Fp\u003E\u003Capp-draw-stream [stream]=\"source2\"\u003E\u003C\u002Fapp-draw-stream\u003E\u003Cp\u003EРезультат\u003C\u002Fp\u003E\u003Capp-draw-stream [stream]=\"result2\"\u003E\u003C\u002Fapp-draw-stream\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"stream-block\"\u003E\u003Cp\u003EПоток\u003C\u002Fp\u003E\u003Capp-draw-stream [stream]=\"source3\"\u003E\u003C\u002Fapp-draw-stream\u003E\u003Cp\u003EРезультат\u003C\u002Fp\u003E\u003Capp-draw-stream [stream]=\"result3\"\u003E\u003C\u002Fapp-draw-stream\u003E\u003C\u002Fdiv\u003E";;return pug_html;};
module.exports = template;

/***/ }),

/***/ "./node_modules/pug-loader/index.js!./src/app/pages/filtering/skip/skip.component.pug":
/*!***********************************************************************************!*\
  !*** ./node_modules/pug-loader!./src/app/pages/filtering/skip/skip.component.pug ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var pug = __webpack_require__(/*! ../../../../../node_modules/pug-runtime/index.js */ "./node_modules/pug-runtime/index.js");

function template(locals) {var pug_html = "", pug_mixins = {}, pug_interp;pug_html = pug_html + "\u003Cp\u003EПропустить выстрелы потока\u003C\u002Fp\u003E\u003Cdiv class=\"stream-block\"\u003E\u003Cp\u003EПоток\u003C\u002Fp\u003E\u003Capp-draw-stream [stream]=\"source1\"\u003E\u003C\u002Fapp-draw-stream\u003E\u003Cp\u003EРезультат\u003C\u002Fp\u003E\u003Capp-draw-stream [stream]=\"result1\"\u003E\u003C\u002Fapp-draw-stream\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"stream-block\"\u003E\u003Cp\u003EПоток\u003C\u002Fp\u003E\u003Capp-draw-stream [stream]=\"source2\"\u003E\u003C\u002Fapp-draw-stream\u003E\u003Cp\u003EРезультат\u003C\u002Fp\u003E\u003Capp-draw-stream [stream]=\"result2\"\u003E\u003C\u002Fapp-draw-stream\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"stream-block\"\u003E\u003Cp\u003EПоток\u003C\u002Fp\u003E\u003Capp-draw-stream [stream]=\"source3\"\u003E\u003C\u002Fapp-draw-stream\u003E\u003Cp\u003EРезультат\u003C\u002Fp\u003E\u003Capp-draw-stream [stream]=\"result3\"\u003E\u003C\u002Fapp-draw-stream\u003E\u003C\u002Fdiv\u003E";;return pug_html;};
module.exports = template;

/***/ }),

/***/ "./node_modules/pug-loader/index.js!./src/app/pages/filtering/take-last/take-last.component.pug":
/*!*********************************************************************************************!*\
  !*** ./node_modules/pug-loader!./src/app/pages/filtering/take-last/take-last.component.pug ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var pug = __webpack_require__(/*! ../../../../../node_modules/pug-runtime/index.js */ "./node_modules/pug-runtime/index.js");

function template(locals) {var pug_html = "", pug_mixins = {}, pug_interp;pug_html = pug_html + "\u003Cp\u003EБерет последние n последних выстрелов observable\u003C\u002Fp\u003E\u003Cdiv class=\"stream-block\"\u003E\u003Cp\u003EПоток\u003C\u002Fp\u003E\u003Capp-draw-stream [stream]=\"source1\"\u003E\u003C\u002Fapp-draw-stream\u003E\u003Cp\u003EРезультат\u003C\u002Fp\u003E\u003Capp-draw-stream [stream]=\"result1\"\u003E\u003C\u002Fapp-draw-stream\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"stream-block\"\u003E\u003Cp\u003EПоток\u003C\u002Fp\u003E\u003Capp-draw-stream [stream]=\"source2\"\u003E\u003C\u002Fapp-draw-stream\u003E\u003Cp\u003EРезультат\u003C\u002Fp\u003E\u003Capp-draw-stream [stream]=\"result2\"\u003E\u003C\u002Fapp-draw-stream\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"stream-block\"\u003E\u003Cp\u003EПоток\u003C\u002Fp\u003E\u003Capp-draw-stream [stream]=\"source3\"\u003E\u003C\u002Fapp-draw-stream\u003E\u003Cp\u003EРезультат\u003C\u002Fp\u003E\u003Capp-draw-stream [stream]=\"result3\"\u003E\u003C\u002Fapp-draw-stream\u003E\u003C\u002Fdiv\u003E";;return pug_html;};
module.exports = template;

/***/ }),

/***/ "./node_modules/pug-loader/index.js!./src/app/pages/filtering/take-until/take-until.component.pug":
/*!***********************************************************************************************!*\
  !*** ./node_modules/pug-loader!./src/app/pages/filtering/take-until/take-until.component.pug ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var pug = __webpack_require__(/*! ../../../../../node_modules/pug-runtime/index.js */ "./node_modules/pug-runtime/index.js");

function template(locals) {var pug_html = "", pug_mixins = {}, pug_interp;pug_html = pug_html + "\u003Cp\u003EВыстреливает значениями потока не выстрелит переданный поток\u003C\u002Fp\u003E\u003Cdiv class=\"stream-block\"\u003E\u003Cp\u003EПоток 1\u003C\u002Fp\u003E\u003Capp-draw-stream [stream]=\"source1\"\u003E\u003C\u002Fapp-draw-stream\u003E\u003Cp\u003EПоток 2\u003C\u002Fp\u003E\u003Capp-draw-stream [stream]=\"source2\"\u003E\u003C\u002Fapp-draw-stream\u003E\u003Cp\u003EРезультат\u003C\u002Fp\u003E\u003Capp-draw-stream [stream]=\"result1\"\u003E\u003C\u002Fapp-draw-stream\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"stream-block\"\u003E\u003Cp\u003EПоток 1\u003C\u002Fp\u003E\u003Capp-draw-stream [stream]=\"source3\"\u003E\u003C\u002Fapp-draw-stream\u003E\u003Cp\u003EПоток 2\u003C\u002Fp\u003E\u003Capp-draw-stream [stream]=\"source2\"\u003E\u003C\u002Fapp-draw-stream\u003E\u003Cp\u003EРезультат\u003C\u002Fp\u003E\u003Capp-draw-stream [stream]=\"result2\"\u003E\u003C\u002Fapp-draw-stream\u003E\u003C\u002Fdiv\u003E";;return pug_html;};
module.exports = template;

/***/ }),

/***/ "./node_modules/pug-loader/index.js!./src/app/pages/filtering/take-while/take-while.component.pug":
/*!***********************************************************************************************!*\
  !*** ./node_modules/pug-loader!./src/app/pages/filtering/take-while/take-while.component.pug ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var pug = __webpack_require__(/*! ../../../../../node_modules/pug-runtime/index.js */ "./node_modules/pug-runtime/index.js");

function template(locals) {var pug_html = "", pug_mixins = {}, pug_interp;pug_html = pug_html + "\u003Cp\u003EВыстреливает значениями пока предикат false\u003C\u002Fp\u003E\u003Cdiv class=\"stream-block\"\u003E\u003Cp\u003EПоток\u003C\u002Fp\u003E\u003Capp-draw-stream [stream]=\"source1\"\u003E\u003C\u002Fapp-draw-stream\u003E\u003Cp\u003EРезультат\u003C\u002Fp\u003E\u003Capp-draw-stream [stream]=\"result1\"\u003E\u003C\u002Fapp-draw-stream\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"stream-block\"\u003E\u003Cp\u003EПоток\u003C\u002Fp\u003E\u003Capp-draw-stream [stream]=\"source2\"\u003E\u003C\u002Fapp-draw-stream\u003E\u003Cp\u003EРезультат\u003C\u002Fp\u003E\u003Capp-draw-stream [stream]=\"result2\"\u003E\u003C\u002Fapp-draw-stream\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"stream-block\"\u003E\u003Cp\u003EПоток\u003C\u002Fp\u003E\u003Capp-draw-stream [stream]=\"source3\"\u003E\u003C\u002Fapp-draw-stream\u003E\u003Cp\u003EРезультат\u003C\u002Fp\u003E\u003Capp-draw-stream [stream]=\"result3\"\u003E\u003C\u002Fapp-draw-stream\u003E\u003C\u002Fdiv\u003E";;return pug_html;};
module.exports = template;

/***/ }),

/***/ "./node_modules/pug-loader/index.js!./src/app/pages/filtering/take/take.component.pug":
/*!***********************************************************************************!*\
  !*** ./node_modules/pug-loader!./src/app/pages/filtering/take/take.component.pug ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var pug = __webpack_require__(/*! ../../../../../node_modules/pug-runtime/index.js */ "./node_modules/pug-runtime/index.js");

function template(locals) {var pug_html = "", pug_mixins = {}, pug_interp;pug_html = pug_html + "\u003Cp\u003ESkip the provided number of emitted values.\u003C\u002Fp\u003E\u003Cdiv class=\"stream-block\"\u003E\u003Cp\u003ESource\u003C\u002Fp\u003E\u003Capp-draw-stream [stream]=\"source1\"\u003E\u003C\u002Fapp-draw-stream\u003E\u003Cp\u003EResult\u003C\u002Fp\u003E\u003Capp-draw-stream [stream]=\"result1\"\u003E\u003C\u002Fapp-draw-stream\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"stream-block\"\u003E\u003Cp\u003ESource\u003C\u002Fp\u003E\u003Capp-draw-stream [stream]=\"source2\"\u003E\u003C\u002Fapp-draw-stream\u003E\u003Cp\u003EResult\u003C\u002Fp\u003E\u003Capp-draw-stream [stream]=\"result2\"\u003E\u003C\u002Fapp-draw-stream\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"stream-block\"\u003E\u003Cp\u003ESource\u003C\u002Fp\u003E\u003Capp-draw-stream [stream]=\"source3\"\u003E\u003C\u002Fapp-draw-stream\u003E\u003Cp\u003EResult\u003C\u002Fp\u003E\u003Capp-draw-stream [stream]=\"result3\"\u003E\u003C\u002Fapp-draw-stream\u003E\u003C\u002Fdiv\u003E";;return pug_html;};
module.exports = template;

/***/ }),

/***/ "./node_modules/pug-loader/index.js!./src/app/pages/filtering/throttle-time/throttle-time.component.pug":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/pug-loader!./src/app/pages/filtering/throttle-time/throttle-time.component.pug ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var pug = __webpack_require__(/*! ../../../../../node_modules/pug-runtime/index.js */ "./node_modules/pug-runtime/index.js");

function template(locals) {var pug_html = "", pug_mixins = {}, pug_interp;pug_html = pug_html + "\u003Cp\u003EОграничивает пропускную способность потока заданным интервалом времени\u003C\u002Fp\u003E\u003Cdiv class=\"stream-block\"\u003E\u003Cp\u003EПоток\u003C\u002Fp\u003E\u003Capp-draw-stream [stream]=\"source1\"\u003E\u003C\u002Fapp-draw-stream\u003E\u003Cp\u003EРезультат\u003C\u002Fp\u003E\u003Capp-draw-stream [stream]=\"result1\"\u003E\u003C\u002Fapp-draw-stream\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"stream-block\"\u003E\u003Cp\u003EПоток\u003C\u002Fp\u003E\u003Capp-draw-stream [stream]=\"source2\"\u003E\u003C\u002Fapp-draw-stream\u003E\u003Cp\u003EРезультат\u003C\u002Fp\u003E\u003Capp-draw-stream [stream]=\"result2\"\u003E\u003C\u002Fapp-draw-stream\u003E\u003C\u002Fdiv\u003E";;return pug_html;};
module.exports = template;

/***/ }),

/***/ "./node_modules/pug-loader/index.js!./src/app/pages/filtering/throttle/throttle.component.pug":
/*!*******************************************************************************************!*\
  !*** ./node_modules/pug-loader!./src/app/pages/filtering/throttle/throttle.component.pug ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var pug = __webpack_require__(/*! ../../../../../node_modules/pug-runtime/index.js */ "./node_modules/pug-runtime/index.js");

function template(locals) {var pug_html = "", pug_mixins = {}, pug_interp;pug_html = pug_html + "\u003Cp\u003EОграничивает пропускную способность потока заданным интервалом\u003C\u002Fp\u003E\u003Cdiv class=\"stream-block\"\u003E\u003Cp\u003EПоток\u003C\u002Fp\u003E\u003Capp-draw-stream [stream]=\"source1\"\u003E\u003C\u002Fapp-draw-stream\u003E\u003Cp\u003EРезультат\u003C\u002Fp\u003E\u003Capp-draw-stream [stream]=\"result1\"\u003E\u003C\u002Fapp-draw-stream\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"stream-block\"\u003E\u003Cp\u003EПоток\u003C\u002Fp\u003E\u003Capp-draw-stream [stream]=\"source1\"\u003E\u003C\u002Fapp-draw-stream\u003E\u003Cp\u003EРезультат\u003C\u002Fp\u003E\u003Capp-draw-stream [stream]=\"result2\"\u003E\u003C\u002Fapp-draw-stream\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"stream-block\"\u003E\u003Cp\u003EПоток\u003C\u002Fp\u003E\u003Capp-draw-stream [stream]=\"source2\"\u003E\u003C\u002Fapp-draw-stream\u003E\u003Cp\u003EРезультат\u003C\u002Fp\u003E\u003Capp-draw-stream [stream]=\"result3\"\u003E\u003C\u002Fapp-draw-stream\u003E\u003C\u002Fdiv\u003E";;return pug_html;};
module.exports = template;

/***/ }),

/***/ "./node_modules/pug-loader/index.js!./src/app/pages/multicasting/multicasting/multicasting.component.pug":
/*!******************************************************************************************************!*\
  !*** ./node_modules/pug-loader!./src/app/pages/multicasting/multicasting/multicasting.component.pug ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var pug = __webpack_require__(/*! ../../../../../node_modules/pug-runtime/index.js */ "./node_modules/pug-runtime/index.js");

function template(locals) {var pug_html = "", pug_mixins = {}, pug_interp;pug_html = pug_html + "\u003Cp\u003EРазделение значений между несколькими подписчиками (холодное наблюдаемое в горячее)\u003C\u002Fp\u003E\u003Cp\u003Emulticast в качестве параметра принимает любой из 4-х видов subject’ов.\u003C\u002Fp\u003E\u003Cp\u003EObservable возвращает объект с типом ConnectableObservable. Этот объект похож на обычный Observable, за исключением одного момента: он начинает производить элементы не тогда, когда на него подписываются, а только тогда, когда на нем вызвана функция .connect()\u003C\u002Fp\u003E\u003Cp\u003EМетод является устаревшим.\u003C\u002Fp\u003E\u003Cdiv class=\"stream-block\"\u003E\u003Cp\u003EПоток с multicast и обычным subject\u003C\u002Fp\u003E\u003Capp-draw-stream [stream]=\"source1\"\u003E\u003C\u002Fapp-draw-stream\u003E\u003Cp\u003EРезультат 1\u003C\u002Fp\u003E\u003Capp-draw-stream [stream]=\"result1\"\u003E\u003C\u002Fapp-draw-stream\u003E\u003Cp\u003EРезультат 2\u003C\u002Fp\u003E\u003Capp-draw-stream [stream]=\"result2\"\u003E\u003C\u002Fapp-draw-stream\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"stream-block\"\u003E\u003Cp\u003EПоток с multicast и replaySubject\u003C\u002Fp\u003E\u003Capp-draw-stream [stream]=\"source2\"\u003E\u003C\u002Fapp-draw-stream\u003E\u003Cp\u003EРезультат 3\u003C\u002Fp\u003E\u003Capp-draw-stream [stream]=\"result3\"\u003E\u003C\u002Fapp-draw-stream\u003E\u003Cp\u003EРезультат 4\u003C\u002Fp\u003E\u003Capp-draw-stream [stream]=\"result4\"\u003E\u003C\u002Fapp-draw-stream\u003E\u003C\u002Fdiv\u003E";;return pug_html;};
module.exports = template;

/***/ }),

/***/ "./node_modules/pug-loader/index.js!./src/app/pages/multicasting/publish-behavior/publish-behavior.component.pug":
/*!**************************************************************************************************************!*\
  !*** ./node_modules/pug-loader!./src/app/pages/multicasting/publish-behavior/publish-behavior.component.pug ***!
  \**************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var pug = __webpack_require__(/*! ../../../../../node_modules/pug-runtime/index.js */ "./node_modules/pug-runtime/index.js");

function template(locals) {var pug_html = "", pug_mixins = {}, pug_interp;pug_html = pug_html + "\u003Cp\u003EРазделение значений между несколькими подписчиками (холодное наблюдаемое в горячее)\u003C\u002Fp\u003E\u003Cp\u003EОператор publishBehavior(42) это сокращенный тип записи оператора multicast(new BehaviorSubject(42))\u003C\u002Fp\u003E\u003Cp\u003EObservable возвращает объект с типом ConnectableObservable. Этот объект похож на обычный Observable, за исключением одного момента: он начинает производить элементы не тогда, когда на него подписываются, а только тогда, когда на нем вызвана функция .connect()\u003C\u002Fp\u003E\u003Cp\u003EКаждый раз вызывать метод connect получается достаточно проблематично, мы можем с легкостью забыть его вызвать. Для того, чтобы об этом не волноваться, существует оператор refCount.\u003C\u002Fp\u003E\u003Cp\u003EМетод является устаревшим.\u003C\u002Fp\u003E\u003Cdiv class=\"stream-block\"\u003E\u003Cp\u003EИсходный поток\u003C\u002Fp\u003E\u003Capp-draw-stream [stream]=\"source1\"\u003E\u003C\u002Fapp-draw-stream\u003E\u003Cp\u003EРезультат 1\u003C\u002Fp\u003E\u003Capp-draw-stream [stream]=\"result1\"\u003E\u003C\u002Fapp-draw-stream\u003E\u003Cp\u003EРезультат 2\u003C\u002Fp\u003E\u003Capp-draw-stream [stream]=\"result2\"\u003E\u003C\u002Fapp-draw-stream\u003E\u003C\u002Fdiv\u003E";;return pug_html;};
module.exports = template;

/***/ }),

/***/ "./node_modules/pug-loader/index.js!./src/app/pages/multicasting/publish-last/publish-last.component.pug":
/*!******************************************************************************************************!*\
  !*** ./node_modules/pug-loader!./src/app/pages/multicasting/publish-last/publish-last.component.pug ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var pug = __webpack_require__(/*! ../../../../../node_modules/pug-runtime/index.js */ "./node_modules/pug-runtime/index.js");

function template(locals) {var pug_html = "", pug_mixins = {}, pug_interp;pug_html = pug_html + "\u003Cp\u003EРазделение значений между несколькими подписчиками (холодное наблюдаемое в горячее)\u003C\u002Fp\u003E\u003Cp\u003EОператор publishLast() это сокращенный тип записи оператора multicast(new AsyncSubject())\u003C\u002Fp\u003E\u003Cp\u003EObservable возвращает объект с типом ConnectableObservable. Этот объект похож на обычный Observable, за исключением одного момента: он начинает производить элементы не тогда, когда на него подписываются, а только тогда, когда на нем вызвана функция .connect()\u003C\u002Fp\u003E\u003Cp\u003EКаждый раз вызывать метод connect получается достаточно проблематично, мы можем с легкостью забыть его вызвать. Для того, чтобы об этом не волноваться, существует оператор refCount.\u003C\u002Fp\u003E\u003Cp\u003EМетод является устаревшим.\u003C\u002Fp\u003E\u003Cdiv class=\"stream-block\"\u003E\u003Cp\u003EИсходный поток\u003C\u002Fp\u003E\u003Capp-draw-stream [stream]=\"source1\"\u003E\u003C\u002Fapp-draw-stream\u003E\u003Cp\u003EРезультат 1\u003C\u002Fp\u003E\u003Capp-draw-stream [stream]=\"result1\"\u003E\u003C\u002Fapp-draw-stream\u003E\u003Cp\u003EРезультат 2\u003C\u002Fp\u003E\u003Capp-draw-stream [stream]=\"result2\"\u003E\u003C\u002Fapp-draw-stream\u003E\u003C\u002Fdiv\u003E";;return pug_html;};
module.exports = template;

/***/ }),

/***/ "./node_modules/pug-loader/index.js!./src/app/pages/multicasting/publish-replay/publish-replay.component.pug":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/pug-loader!./src/app/pages/multicasting/publish-replay/publish-replay.component.pug ***!
  \**********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var pug = __webpack_require__(/*! ../../../../../node_modules/pug-runtime/index.js */ "./node_modules/pug-runtime/index.js");

function template(locals) {var pug_html = "", pug_mixins = {}, pug_interp;pug_html = pug_html + "\u003Cp\u003EРазделение значений между несколькими подписчиками (холодное наблюдаемое в горячее)\u003C\u002Fp\u003E\u003Cp\u003EОператор publishReplay() это сокращенный тип записи оператора multicast(new ReplaySubject())\u003C\u002Fp\u003E\u003Cp\u003EObservable возвращает объект с типом ConnectableObservable. Этот объект похож на обычный Observable, за исключением одного момента: он начинает производить элементы не тогда, когда на него подписываются, а только тогда, когда на нем вызвана функция .connect()\u003C\u002Fp\u003E\u003Cp\u003EКаждый раз вызывать метод connect получается достаточно проблематично, мы можем с легкостью забыть его вызвать. Для того, чтобы об этом не волноваться, существует оператор refCount.\u003C\u002Fp\u003E\u003Cp\u003EМетод является устаревшим.\u003C\u002Fp\u003E\u003Cdiv class=\"stream-block\"\u003E\u003Cp\u003EИсходный поток\u003C\u002Fp\u003E\u003Capp-draw-stream [stream]=\"source1\"\u003E\u003C\u002Fapp-draw-stream\u003E\u003Cp\u003EРезультат 1\u003C\u002Fp\u003E\u003Capp-draw-stream [stream]=\"result1\"\u003E\u003C\u002Fapp-draw-stream\u003E\u003Cp\u003EРезультат 2\u003C\u002Fp\u003E\u003Capp-draw-stream [stream]=\"result2\"\u003E\u003C\u002Fapp-draw-stream\u003E\u003C\u002Fdiv\u003E";;return pug_html;};
module.exports = template;

/***/ }),

/***/ "./node_modules/pug-loader/index.js!./src/app/pages/multicasting/publish/publish.component.pug":
/*!********************************************************************************************!*\
  !*** ./node_modules/pug-loader!./src/app/pages/multicasting/publish/publish.component.pug ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var pug = __webpack_require__(/*! ../../../../../node_modules/pug-runtime/index.js */ "./node_modules/pug-runtime/index.js");

function template(locals) {var pug_html = "", pug_mixins = {}, pug_interp;pug_html = pug_html + "\u003Cp\u003EРазделение значений между несколькими подписчиками (холодное наблюдаемое в горячее)\u003C\u002Fp\u003E\u003Cp\u003EОператор publish это сокращенный тип записи оператора multicast(new Subject())\u003C\u002Fp\u003E\u003Cp\u003EТакже помимо оператора publish существуют другие операторы, который упрощают запись и сводят ее к одной строке.\u003C\u002Fp\u003E\u003Cul\u003E\u003Cli\u003Epublish =  multicast + Subject\u003C\u002Fli\u003E\u003Cli\u003EpublishReplay = multicast + ReplaySubject\u003C\u002Fli\u003E\u003Cli\u003EpublishBehavior = multicast + BehaviorSubject\u003C\u002Fli\u003E\u003Cli\u003EpublishLast = multicast + AsyncSubject\u003C\u002Fli\u003E\u003C\u002Ful\u003E\u003Cp\u003EObservable возвращает объект с типом ConnectableObservable. Этот объект похож на обычный Observable, за исключением одного момента: он начинает производить элементы не тогда, когда на него подписываются, а только тогда, когда на нем вызвана функция .connect()\u003C\u002Fp\u003E\u003Cp\u003EКаждый раз вызывать метод connect получается достаточно проблематично, мы можем с легкостью забыть его вызвать. Для того, чтобы об этом не волноваться, существует оператор refCount.\u003C\u002Fp\u003E\u003Cp\u003EМетод является устаревшим.\u003C\u002Fp\u003E\u003Cdiv class=\"stream-block\"\u003E\u003Cp\u003EИсходный поток\u003C\u002Fp\u003E\u003Capp-draw-stream [stream]=\"source1\"\u003E\u003C\u002Fapp-draw-stream\u003E\u003Cp\u003EРезультат 1\u003C\u002Fp\u003E\u003Capp-draw-stream [stream]=\"result1\"\u003E\u003C\u002Fapp-draw-stream\u003E\u003Cp\u003EРезультат 2\u003C\u002Fp\u003E\u003Capp-draw-stream [stream]=\"result2\"\u003E\u003C\u002Fapp-draw-stream\u003E\u003C\u002Fdiv\u003E";;return pug_html;};
module.exports = template;

/***/ }),

/***/ "./node_modules/pug-loader/index.js!./src/app/pages/multicasting/ref-count/ref-count.component.pug":
/*!************************************************************************************************!*\
  !*** ./node_modules/pug-loader!./src/app/pages/multicasting/ref-count/ref-count.component.pug ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var pug = __webpack_require__(/*! ../../../../../node_modules/pug-runtime/index.js */ "./node_modules/pug-runtime/index.js");

function template(locals) {var pug_html = "", pug_mixins = {}, pug_interp;pug_html = pug_html + "\u003Cp\u003EРазделение значений между несколькими подписчиками (холодное наблюдаемое в горячее)\u003C\u002Fp\u003E\u003Cp\u003EObservable возвращает объект с типом ConnectableObservable. Этот объект похож на обычный Observable, за исключением одного момента: он начинает производить элементы не тогда, когда на него подписываются, а только тогда, когда на нем вызвана функция .connect()\u003C\u002Fp\u003E\u003Cp\u003EКаждый раз вызывать метод connect получается достаточно проблематично, мы можем с легкостью забыть его вызвать. Для того, чтобы об этом не волноваться, существует оператор refCount. Этот оператор сам следит за количеством подписчиков и вызывает метод connect(), когда количество подписчиков меняется с 0 на 1, и делает отписку, когда количество подписчиков меняется с 1 на 0.\u003C\u002Fp\u003E\u003Cp\u003EМетод является устаревшим.\u003C\u002Fp\u003E\u003Cdiv class=\"stream-block\"\u003E\u003Cp\u003EИсходный поток\u003C\u002Fp\u003E\u003Capp-draw-stream [stream]=\"source1\"\u003E\u003C\u002Fapp-draw-stream\u003E\u003Cp\u003EРезультат 1\u003C\u002Fp\u003E\u003Capp-draw-stream [stream]=\"result1\"\u003E\u003C\u002Fapp-draw-stream\u003E\u003Cp\u003EРезультат 2\u003C\u002Fp\u003E\u003Capp-draw-stream [stream]=\"result2\"\u003E\u003C\u002Fapp-draw-stream\u003E\u003C\u002Fdiv\u003E";;return pug_html;};
module.exports = template;

/***/ }),

/***/ "./node_modules/pug-loader/index.js!./src/app/pages/multicasting/share-replay/share-replay.component.pug":
/*!******************************************************************************************************!*\
  !*** ./node_modules/pug-loader!./src/app/pages/multicasting/share-replay/share-replay.component.pug ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var pug = __webpack_require__(/*! ../../../../../node_modules/pug-runtime/index.js */ "./node_modules/pug-runtime/index.js");

function template(locals) {var pug_html = "", pug_mixins = {}, pug_interp;pug_html = pug_html + "\u003Cp\u003EРазделение значений между несколькими подписчиками\u003C\u002Fp\u003E\u003Cp\u003EShare это вызов операторов publishReplay и refCount, но только вызов будет состоять из одного оператора.\u003C\u002Fp\u003E\u003Cp\u003EПо умолчанию refCount (подсчет подписчиков не работает), начиная с версии 6.4.0, добавлен параметр refCount: boolean; который это меняет\u003C\u002Fp\u003E\u003Cdiv class=\"stream-block\"\u003E\u003Cp\u003EИсходный поток\u003C\u002Fp\u003E\u003Capp-draw-stream [stream]=\"source1\"\u003E\u003C\u002Fapp-draw-stream\u003E\u003Cp\u003EРезультат 1\u003C\u002Fp\u003E\u003Capp-draw-stream [stream]=\"result1\"\u003E\u003C\u002Fapp-draw-stream\u003E\u003Cp\u003EРезультат 2\u003C\u002Fp\u003E\u003Capp-draw-stream [stream]=\"result2\"\u003E\u003C\u002Fapp-draw-stream\u003E\u003C\u002Fdiv\u003E";;return pug_html;};
module.exports = template;

/***/ }),

/***/ "./node_modules/pug-loader/index.js!./src/app/pages/multicasting/share/share.component.pug":
/*!****************************************************************************************!*\
  !*** ./node_modules/pug-loader!./src/app/pages/multicasting/share/share.component.pug ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var pug = __webpack_require__(/*! ../../../../../node_modules/pug-runtime/index.js */ "./node_modules/pug-runtime/index.js");

function template(locals) {var pug_html = "", pug_mixins = {}, pug_interp;pug_html = pug_html + "\u003Cp\u003EРазделение значений между несколькими подписчиками\u003C\u002Fp\u003E\u003Cp\u003EShare это вызов операторов publish и refCount, но только вызов будет состоять из одного оператора.\u003C\u002Fp\u003E\u003Cdiv class=\"stream-block\"\u003E\u003Cp\u003EИсходный поток\u003C\u002Fp\u003E\u003Capp-draw-stream [stream]=\"source1\"\u003E\u003C\u002Fapp-draw-stream\u003E\u003Cp\u003EРезультат 1\u003C\u002Fp\u003E\u003Capp-draw-stream [stream]=\"result1\"\u003E\u003C\u002Fapp-draw-stream\u003E\u003Cp\u003EРезультат 2\u003C\u002Fp\u003E\u003Capp-draw-stream [stream]=\"result2\"\u003E\u003C\u002Fapp-draw-stream\u003E\u003C\u002Fdiv\u003E";;return pug_html;};
module.exports = template;

/***/ }),

/***/ "./node_modules/pug-loader/index.js!./src/app/pages/subjects/async-subject/async-subject.component.pug":
/*!****************************************************************************************************!*\
  !*** ./node_modules/pug-loader!./src/app/pages/subjects/async-subject/async-subject.component.pug ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var pug = __webpack_require__(/*! ../../../../../node_modules/pug-runtime/index.js */ "./node_modules/pug-runtime/index.js");

function template(locals) {var pug_html = "", pug_mixins = {}, pug_interp;pug_html = pug_html + "\u003Cp\u003EОсобый тип Observable, которые одновременно являются и наблюдателем, и наблюдаемым\u003C\u002Fp\u003E\u003Cp\u003EЧасто используются для того, чтобы передавать значения сразу нескольким подписчикам.\u003C\u002Fp\u003E\u003Cp\u003EПо умолчанию являются «горячими», то мы можем быть уверены, что у нас создается один поток, значения из которого будут получать наши подписчики.\u003C\u002Fp\u003E\u003Cp\u003EAsyncSubject возвращает последние значения из потока после завершения\u003C\u002Fp\u003E\u003Cdiv class=\"stream-block\"\u003E\u003Cp\u003EПример 1\u003C\u002Fp\u003E\u003Capp-draw-stream [stream]=\"result1\"\u003E\u003C\u002Fapp-draw-stream\u003E\u003Cp\u003EПример 2\u003C\u002Fp\u003E\u003Capp-draw-stream [stream]=\"result2\"\u003E\u003C\u002Fapp-draw-stream\u003E\u003Cp\u003EПример 3\u003C\u002Fp\u003E\u003Capp-draw-stream [stream]=\"result3\"\u003E\u003C\u002Fapp-draw-stream\u003E\u003C\u002Fdiv\u003E";;return pug_html;};
module.exports = template;

/***/ }),

/***/ "./node_modules/pug-loader/index.js!./src/app/pages/subjects/behavior-subject/behavior-subject.component.pug":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/pug-loader!./src/app/pages/subjects/behavior-subject/behavior-subject.component.pug ***!
  \**********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var pug = __webpack_require__(/*! ../../../../../node_modules/pug-runtime/index.js */ "./node_modules/pug-runtime/index.js");

function template(locals) {var pug_html = "", pug_mixins = {}, pug_interp;pug_html = pug_html + "\u003Cp\u003EОсобый тип Observable, которые одновременно являются и наблюдателем, и наблюдаемым\u003C\u002Fp\u003E\u003Cp\u003EЧасто используются для того, чтобы передавать значения сразу нескольким подписчикам.\u003C\u002Fp\u003E\u003Cp\u003EПо умолчанию являются «горячими», то мы можем быть уверены, что у нас создается один поток, значения из которого будут получать наши подписчики.\u003C\u002Fp\u003E\u003Cp\u003EBehaviorSubject всегда возвращает последнее значение из потока, при этом обязательно нужно указывать начальное значение\u003C\u002Fp\u003E\u003Cdiv class=\"stream-block\"\u003E\u003Cp\u003EПример 1\u003C\u002Fp\u003E\u003Capp-draw-stream [stream]=\"result1\"\u003E\u003C\u002Fapp-draw-stream\u003E\u003Cp\u003EПример 2\u003C\u002Fp\u003E\u003Capp-draw-stream [stream]=\"result2\"\u003E\u003C\u002Fapp-draw-stream\u003E\u003C\u002Fdiv\u003E";;return pug_html;};
module.exports = template;

/***/ }),

/***/ "./node_modules/pug-loader/index.js!./src/app/pages/subjects/replay-subject/replay-subject.component.pug":
/*!******************************************************************************************************!*\
  !*** ./node_modules/pug-loader!./src/app/pages/subjects/replay-subject/replay-subject.component.pug ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var pug = __webpack_require__(/*! ../../../../../node_modules/pug-runtime/index.js */ "./node_modules/pug-runtime/index.js");

function template(locals) {var pug_html = "", pug_mixins = {}, pug_interp;pug_html = pug_html + "\u003Cp\u003EОсобый тип Observable, которые одновременно являются и наблюдателем, и наблюдаемым\u003C\u002Fp\u003E\u003Cp\u003EЧасто используются для того, чтобы передавать значения сразу нескольким подписчикам.\u003C\u002Fp\u003E\u003Cp\u003EПо умолчанию являются «горячими», то мы можем быть уверены, что у нас создается один поток, значения из которого будут получать наши подписчики.\u003C\u002Fp\u003E\u003Cp\u003EReplaySubject возвращает последние значения из потока, есть возможность указать размер буфера\u003C\u002Fp\u003E\u003Cdiv class=\"stream-block\"\u003E\u003Cp\u003EПример 1\u003C\u002Fp\u003E\u003Capp-draw-stream [stream]=\"result1\"\u003E\u003C\u002Fapp-draw-stream\u003E\u003Cp\u003EПример 2\u003C\u002Fp\u003E\u003Capp-draw-stream [stream]=\"result2\"\u003E\u003C\u002Fapp-draw-stream\u003E\u003C\u002Fdiv\u003E";;return pug_html;};
module.exports = template;

/***/ }),

/***/ "./node_modules/pug-loader/index.js!./src/app/pages/subjects/subject/subject.component.pug":
/*!****************************************************************************************!*\
  !*** ./node_modules/pug-loader!./src/app/pages/subjects/subject/subject.component.pug ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var pug = __webpack_require__(/*! ../../../../../node_modules/pug-runtime/index.js */ "./node_modules/pug-runtime/index.js");

function template(locals) {var pug_html = "", pug_mixins = {}, pug_interp;pug_html = pug_html + "\u003Cp\u003EОсобый тип Observable, которые одновременно являются и наблюдателем, и наблюдаемым\u003C\u002Fp\u003E\u003Cp\u003EЧасто используются для того, чтобы передавать значения сразу нескольким подписчикам.\u003C\u002Fp\u003E\u003Cp\u003EПо умолчанию являются «горячими», то мы можем быть уверены, что у нас создается один поток, значения из которого будут получать наши подписчики.\u003C\u002Fp\u003E\u003Cdiv class=\"stream-block\"\u003E\u003Cp\u003EПример 1\u003C\u002Fp\u003E\u003Capp-draw-stream [stream]=\"result1\"\u003E\u003C\u002Fapp-draw-stream\u003E\u003Cp\u003EПример 2\u003C\u002Fp\u003E\u003Capp-draw-stream [stream]=\"result2\"\u003E\u003C\u002Fapp-draw-stream\u003E\u003C\u002Fdiv\u003E";;return pug_html;};
module.exports = template;

/***/ }),

/***/ "./node_modules/pug-loader/index.js!./src/app/pages/tasks/caching/caching.component.pug":
/*!*************************************************************************************!*\
  !*** ./node_modules/pug-loader!./src/app/pages/tasks/caching/caching.component.pug ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var pug = __webpack_require__(/*! ../../../../../node_modules/pug-runtime/index.js */ "./node_modules/pug-runtime/index.js");

function template(locals) {var pug_html = "", pug_mixins = {}, pug_interp;pug_html = pug_html + "\u003Cdiv class=\"stream-block\"\u003E\u003C\u002Fdiv\u003E";;return pug_html;};
module.exports = template;

/***/ }),

/***/ "./node_modules/pug-loader/index.js!./src/app/pages/tasks/cold-hot/cold-hot.component.pug":
/*!***************************************************************************************!*\
  !*** ./node_modules/pug-loader!./src/app/pages/tasks/cold-hot/cold-hot.component.pug ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var pug = __webpack_require__(/*! ../../../../../node_modules/pug-runtime/index.js */ "./node_modules/pug-runtime/index.js");

function template(locals) {var pug_html = "", pug_mixins = {}, pug_interp;pug_html = pug_html + "\u003Cp\u003EРазделение значений между несколькими подписчиками\u003C\u002Fp\u003E\u003Cdiv class=\"stream-block\"\u003E\u003Cp\u003ESource 1\u003C\u002Fp\u003E\u003Capp-draw-stream [stream]=\"source1\"\u003E\u003C\u002Fapp-draw-stream\u003E\u003Cp\u003ESource 1\u003C\u002Fp\u003E\u003Capp-draw-stream [stream]=\"source1\"\u003E\u003C\u002Fapp-draw-stream\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"stream-block\"\u003E\u003Cp\u003ESource 2\u003C\u002Fp\u003E\u003Capp-draw-stream [stream]=\"source2\"\u003E\u003C\u002Fapp-draw-stream\u003E\u003Cp\u003ESource 2\u003C\u002Fp\u003E\u003Capp-draw-stream [stream]=\"source2\"\u003E\u003C\u002Fapp-draw-stream\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"stream-block\"\u003E\u003Cp\u003ESource 3\u003C\u002Fp\u003E\u003Capp-draw-stream [stream]=\"source3\"\u003E\u003C\u002Fapp-draw-stream\u003E\u003Cp\u003ESource 3\u003C\u002Fp\u003E\u003Capp-draw-stream [stream]=\"source3\"\u003E\u003C\u002Fapp-draw-stream\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"stream-block\"\u003E\u003Cp\u003ESource 4\u003C\u002Fp\u003E\u003Capp-draw-stream [stream]=\"source4\"\u003E\u003C\u002Fapp-draw-stream\u003E\u003Cp\u003ESource 4\u003C\u002Fp\u003E\u003Capp-draw-stream [stream]=\"source4\"\u003E\u003C\u002Fapp-draw-stream\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"stream-block\"\u003E\u003Cp\u003ESource 5\u003C\u002Fp\u003E\u003Capp-draw-stream [stream]=\"source5\"\u003E\u003C\u002Fapp-draw-stream\u003E\u003Cp\u003ESource 5\u003C\u002Fp\u003E\u003Capp-draw-stream [stream]=\"source5\"\u003E\u003C\u002Fapp-draw-stream\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"stream-block\"\u003E\u003Cp\u003ESource 6\u003C\u002Fp\u003E\u003Capp-draw-stream [stream]=\"source6\"\u003E\u003C\u002Fapp-draw-stream\u003E\u003Cp\u003ESource 6\u003C\u002Fp\u003E\u003Capp-draw-stream [stream]=\"source6\"\u003E\u003C\u002Fapp-draw-stream\u003E\u003C\u002Fdiv\u003E";;return pug_html;};
module.exports = template;

/***/ }),

/***/ "./node_modules/pug-loader/index.js!./src/app/pages/tasks/unsubscribe-cool/unsubscribe-cool.component.pug":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/pug-loader!./src/app/pages/tasks/unsubscribe-cool/unsubscribe-cool.component.pug ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var pug = __webpack_require__(/*! ../../../../../node_modules/pug-runtime/index.js */ "./node_modules/pug-runtime/index.js");

function template(locals) {var pug_html = "", pug_mixins = {}, pug_interp;pug_html = pug_html + "\u003Cp\u003EРазделение значений между несколькими подписчиками\u003C\u002Fp\u003E\u003Cdiv class=\"stream-block\"\u003E\u003Cp\u003ESource 1\u003C\u002Fp\u003E\u003Capp-draw-stream [stream]=\"source1\"\u003E\u003C\u002Fapp-draw-stream\u003E\u003Cp\u003ESource 1\u003C\u002Fp\u003E\u003Capp-draw-stream [stream]=\"source1\"\u003E\u003C\u002Fapp-draw-stream\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"stream-block\"\u003E\u003Cp\u003ESource 2\u003C\u002Fp\u003E\u003Capp-draw-stream [stream]=\"source2\"\u003E\u003C\u002Fapp-draw-stream\u003E\u003Cp\u003ESource 2\u003C\u002Fp\u003E\u003Capp-draw-stream [stream]=\"source2\"\u003E\u003C\u002Fapp-draw-stream\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"stream-block\"\u003E\u003Cp\u003ESource 3\u003C\u002Fp\u003E\u003Capp-draw-stream [stream]=\"source3\"\u003E\u003C\u002Fapp-draw-stream\u003E\u003Cp\u003ESource 3\u003C\u002Fp\u003E\u003Capp-draw-stream [stream]=\"source3\"\u003E\u003C\u002Fapp-draw-stream\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"stream-block\"\u003E\u003Cp\u003ESource 4\u003C\u002Fp\u003E\u003Capp-draw-stream [stream]=\"source4\"\u003E\u003C\u002Fapp-draw-stream\u003E\u003Cp\u003ESource 4\u003C\u002Fp\u003E\u003Capp-draw-stream [stream]=\"source4\"\u003E\u003C\u002Fapp-draw-stream\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"stream-block\"\u003E\u003Cp\u003ESource 5\u003C\u002Fp\u003E\u003Capp-draw-stream [stream]=\"source5\"\u003E\u003C\u002Fapp-draw-stream\u003E\u003Cp\u003ESource 5\u003C\u002Fp\u003E\u003Capp-draw-stream [stream]=\"source5\"\u003E\u003C\u002Fapp-draw-stream\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"stream-block\"\u003E\u003Cp\u003ESource 6\u003C\u002Fp\u003E\u003Capp-draw-stream [stream]=\"source6\"\u003E\u003C\u002Fapp-draw-stream\u003E\u003Cp\u003ESource 6\u003C\u002Fp\u003E\u003Capp-draw-stream [stream]=\"source6\"\u003E\u003C\u002Fapp-draw-stream\u003E\u003C\u002Fdiv\u003E";;return pug_html;};
module.exports = template;

/***/ }),

/***/ "./node_modules/pug-loader/index.js!./src/app/pages/transformation/buffer-count/buffer-count.component.pug":
/*!********************************************************************************************************!*\
  !*** ./node_modules/pug-loader!./src/app/pages/transformation/buffer-count/buffer-count.component.pug ***!
  \********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var pug = __webpack_require__(/*! ../../../../../node_modules/pug-runtime/index.js */ "./node_modules/pug-runtime/index.js");

function template(locals) {var pug_html = "", pug_mixins = {}, pug_interp;pug_html = pug_html + "\u003Cp\u003EСобирает выстрелы потока, затем выстреливает массивом значений, второй аргумент указывает как часто повторять последние выстрелы\u003C\u002Fp\u003E\u003Cdiv class=\"stream-block\"\u003E\u003Cp\u003EПоток 1\u003C\u002Fp\u003E\u003Capp-draw-stream [stream]=\"getStreamObj(source1$, 'interval(1000)')\"\u003E\u003C\u002Fapp-draw-stream\u003E\u003Cp\u003EРезультат\u003C\u002Fp\u003E\u003Capp-draw-stream [stream]=\"result1\"\u003E\u003C\u002Fapp-draw-stream\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"stream-block\"\u003E\u003Cp\u003EПоток 2\u003C\u002Fp\u003E\u003Capp-draw-stream [stream]=\"getStreamObj(source1$, 'interval(1000)')\"\u003E\u003C\u002Fapp-draw-stream\u003E\u003Cp\u003EРезультат\u003C\u002Fp\u003E\u003Capp-draw-stream [stream]=\"result2\"\u003E\u003C\u002Fapp-draw-stream\u003E\u003C\u002Fdiv\u003E";;return pug_html;};
module.exports = template;

/***/ }),

/***/ "./node_modules/pug-loader/index.js!./src/app/pages/transformation/buffer-time/buffer-time.component.pug":
/*!******************************************************************************************************!*\
  !*** ./node_modules/pug-loader!./src/app/pages/transformation/buffer-time/buffer-time.component.pug ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var pug = __webpack_require__(/*! ../../../../../node_modules/pug-runtime/index.js */ "./node_modules/pug-runtime/index.js");

function template(locals) {var pug_html = "", pug_mixins = {}, pug_interp;pug_html = pug_html + "\u003Cp\u003EСобирает выстрелы потоков заданное количество времени, затем стреляет массивом значений\u003C\u002Fp\u003E\u003Cdiv class=\"stream-block\"\u003E\u003Cp\u003EПоток\u003C\u002Fp\u003E\u003Capp-draw-stream [stream]=\"getStreamObj(source1$, 'interval(1000)')\"\u003E\u003C\u002Fapp-draw-stream\u003E\u003Cp\u003EРезультат 1\u003C\u002Fp\u003E\u003Capp-draw-stream [stream]=\"result1\"\u003E\u003C\u002Fapp-draw-stream\u003E\u003Cp\u003EРезультат 2\u003C\u002Fp\u003E\u003Capp-draw-stream [stream]=\"result2\"\u003E\u003C\u002Fapp-draw-stream\u003E\u003C\u002Fdiv\u003E";;return pug_html;};
module.exports = template;

/***/ }),

/***/ "./node_modules/pug-loader/index.js!./src/app/pages/transformation/buffer-toogle/buffer-toogle.component.pug":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/pug-loader!./src/app/pages/transformation/buffer-toogle/buffer-toogle.component.pug ***!
  \**********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var pug = __webpack_require__(/*! ../../../../../node_modules/pug-runtime/index.js */ "./node_modules/pug-runtime/index.js");

function template(locals) {var pug_html = "", pug_mixins = {}, pug_interp;pug_html = pug_html + "\u003Cp\u003EКаждые 5 секунд будет начинаться новый буфер, собирать выстрелы 3 секунды и затем выстреливать массив\u003C\u002Fp\u003E\u003Cdiv class=\"stream-block\"\u003E\u003Cp\u003EПоток 1\u003C\u002Fp\u003E\u003Capp-draw-stream [stream]=\"getStreamObj(source1$, 'interval(1000)')\"\u003E\u003C\u002Fapp-draw-stream\u003E\u003Cp\u003EПоток 2\u003C\u002Fp\u003E\u003Capp-draw-stream [stream]=\"getStreamObj(source2$, 'interval(5000)')\"\u003E\u003C\u002Fapp-draw-stream\u003E\u003Cp\u003EПоток 3\u003C\u002Fp\u003E\u003Capp-draw-stream [stream]=\"getStreamObj(source3$, 'interval(3000)')\"\u003E\u003C\u002Fapp-draw-stream\u003E\u003Cp\u003EРезультат\u003C\u002Fp\u003E\u003Capp-draw-stream [stream]=\"result1\"\u003E\u003C\u002Fapp-draw-stream\u003E\u003C\u002Fdiv\u003E";;return pug_html;};
module.exports = template;

/***/ }),

/***/ "./node_modules/pug-loader/index.js!./src/app/pages/transformation/buffer-when/buffer-when.component.pug":
/*!******************************************************************************************************!*\
  !*** ./node_modules/pug-loader!./src/app/pages/transformation/buffer-when/buffer-when.component.pug ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var pug = __webpack_require__(/*! ../../../../../node_modules/pug-runtime/index.js */ "./node_modules/pug-runtime/index.js");

function template(locals) {var pug_html = "", pug_mixins = {}, pug_interp;pug_html = pug_html + "\u003Cp\u003EСобирает все выстрелы потока, когда стреляет второй поток, выстреливает массивом значений\u003C\u002Fp\u003E\u003Cdiv class=\"stream-block\"\u003E\u003Cp\u003EПоток\u003C\u002Fp\u003E\u003Capp-draw-stream [stream]=\"getStreamObj(this.source1$, 'interval(1000)')\"\u003E\u003C\u002Fapp-draw-stream\u003E\u003Cp\u003EРезультат\u003C\u002Fp\u003E\u003Capp-draw-stream [stream]=\"result1\"\u003E\u003C\u002Fapp-draw-stream\u003E\u003C\u002Fdiv\u003E";;return pug_html;};
module.exports = template;

/***/ }),

/***/ "./node_modules/pug-loader/index.js!./src/app/pages/transformation/buffer/buffer.component.pug":
/*!********************************************************************************************!*\
  !*** ./node_modules/pug-loader!./src/app/pages/transformation/buffer/buffer.component.pug ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var pug = __webpack_require__(/*! ../../../../../node_modules/pug-runtime/index.js */ "./node_modules/pug-runtime/index.js");

function template(locals) {var pug_html = "", pug_mixins = {}, pug_interp;pug_html = pug_html + "\u003Cp\u003EКогда выстрелит второй поток, стреляет массивом из накопившихся значений первого\u003C\u002Fp\u003E\u003Cdiv class=\"stream-block\"\u003E\u003Cp\u003EПоток 1\u003C\u002Fp\u003E\u003Capp-draw-stream [stream]=\"getStreamObj(source1$, 'interval(1000)')\"\u003E\u003C\u002Fapp-draw-stream\u003E\u003Cp\u003EПоток 2\u003C\u002Fp\u003E\u003Capp-draw-stream [stream]=\"getStreamObj(source2$, 'fromEvent(document, click)')\"\u003E\u003C\u002Fapp-draw-stream\u003E\u003Cp\u003EРезультат\u003C\u002Fp\u003E\u003Capp-draw-stream [stream]=\"result1\"\u003E\u003C\u002Fapp-draw-stream\u003E\u003C\u002Fdiv\u003E";;return pug_html;};
module.exports = template;

/***/ }),

/***/ "./node_modules/pug-loader/index.js!./src/app/pages/transformation/concat-map-to/concat-map-to.component.pug":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/pug-loader!./src/app/pages/transformation/concat-map-to/concat-map-to.component.pug ***!
  \**********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var pug = __webpack_require__(/*! ../../../../../node_modules/pug-runtime/index.js */ "./node_modules/pug-runtime/index.js");

function template(locals) {var pug_html = "", pug_mixins = {}, pug_interp;pug_html = pug_html + "\u003Cp\u003EМапит поток на внутренний, выстреливает все значения в заданном порядке.\u003C\u002Fp\u003E\u003Cp\u003EДожидается завершения внутреннего потока, прежде чем стреляет новыми значенийми из-за выстрела внешнего потока\u003C\u002Fp\u003E\u003Cdiv class=\"stream-block\"\u003E\u003Cp\u003EПоток 1\u003C\u002Fp\u003E\u003Capp-draw-stream [stream]=\"source1\"\u003E\u003C\u002Fapp-draw-stream\u003E\u003Cp\u003EПоток 2\u003C\u002Fp\u003E\u003Capp-draw-stream [stream]=\"source2\"\u003E\u003C\u002Fapp-draw-stream\u003E\u003Cp\u003EРезультат\u003C\u002Fp\u003E\u003Capp-draw-stream [stream]=\"result1\"\u003E\u003C\u002Fapp-draw-stream\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"stream-block\"\u003E\u003Cp\u003EПоток 1\u003C\u002Fp\u003E\u003Capp-draw-stream [stream]=\"source3\"\u003E\u003C\u002Fapp-draw-stream\u003E\u003Cp\u003EПоток 2\u003C\u002Fp\u003E\u003Capp-draw-stream [stream]=\"source4\"\u003E\u003C\u002Fapp-draw-stream\u003E\u003Cp\u003EРезультат\u003C\u002Fp\u003E\u003Capp-draw-stream [stream]=\"result2\"\u003E\u003C\u002Fapp-draw-stream\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"stream-block\"\u003E\u003Cp\u003EПоток 1\u003C\u002Fp\u003E\u003Capp-draw-stream [stream]=\"source5\"\u003E\u003C\u002Fapp-draw-stream\u003E\u003Cp\u003EПоток 2\u003C\u002Fp\u003E\u003Capp-draw-stream [stream]=\"source4\"\u003E\u003C\u002Fapp-draw-stream\u003E\u003Cp\u003EРезультат\u003C\u002Fp\u003E\u003Capp-draw-stream [stream]=\"result3\"\u003E\u003C\u002Fapp-draw-stream\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"stream-block\"\u003E\u003Cp\u003EПоток 1\u003C\u002Fp\u003E\u003Capp-draw-stream [stream]=\"source6\"\u003E\u003C\u002Fapp-draw-stream\u003E\u003Cp\u003EПоток 2\u003C\u002Fp\u003E\u003Capp-draw-stream [stream]=\"source7\"\u003E\u003C\u002Fapp-draw-stream\u003E\u003Cp\u003EРезультат\u003C\u002Fp\u003E\u003Capp-draw-stream [stream]=\"result4\"\u003E\u003C\u002Fapp-draw-stream\u003E\u003C\u002Fdiv\u003E";;return pug_html;};
module.exports = template;

/***/ }),

/***/ "./node_modules/pug-loader/index.js!./src/app/pages/transformation/concat-map/concat-map.component.pug":
/*!****************************************************************************************************!*\
  !*** ./node_modules/pug-loader!./src/app/pages/transformation/concat-map/concat-map.component.pug ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var pug = __webpack_require__(/*! ../../../../../node_modules/pug-runtime/index.js */ "./node_modules/pug-runtime/index.js");

function template(locals) {var pug_html = "", pug_mixins = {}, pug_interp;pug_html = pug_html + "\u003Cp\u003EМапит поток на внутренний, выстреливает все значения в заданном порядке.\u003C\u002Fp\u003E\u003Cp\u003EДожидается завершения внутреннего потока, прежде чем стреляет новыми значенийми из-за выстрела внешнего потока\u003C\u002Fp\u003E\u003Cdiv class=\"stream-block\"\u003E\u003Cp\u003EПоток 1\u003C\u002Fp\u003E\u003Capp-draw-stream [stream]=\"source1\"\u003E\u003C\u002Fapp-draw-stream\u003E\u003Cp\u003EПоток 2\u003C\u002Fp\u003E\u003Capp-draw-stream [stream]=\"source2\"\u003E\u003C\u002Fapp-draw-stream\u003E\u003Cp\u003EРезультат\u003C\u002Fp\u003E\u003Capp-draw-stream [stream]=\"result1\"\u003E\u003C\u002Fapp-draw-stream\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"stream-block\"\u003E\u003Cp\u003EПоток 1\u003C\u002Fp\u003E\u003Capp-draw-stream [stream]=\"source3\"\u003E\u003C\u002Fapp-draw-stream\u003E\u003Cp\u003EПоток 2\u003C\u002Fp\u003E\u003Capp-draw-stream [stream]=\"source4\"\u003E\u003C\u002Fapp-draw-stream\u003E\u003Cp\u003EРезультат\u003C\u002Fp\u003E\u003Capp-draw-stream [stream]=\"result2\"\u003E\u003C\u002Fapp-draw-stream\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"stream-block\"\u003E\u003Cp\u003EПоток 1\u003C\u002Fp\u003E\u003Capp-draw-stream [stream]=\"source5\"\u003E\u003C\u002Fapp-draw-stream\u003E\u003Cp\u003EПоток 2\u003C\u002Fp\u003E\u003Capp-draw-stream [stream]=\"source4\"\u003E\u003C\u002Fapp-draw-stream\u003E\u003Cp\u003EРезультат\u003C\u002Fp\u003E\u003Capp-draw-stream [stream]=\"result3\"\u003E\u003C\u002Fapp-draw-stream\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"stream-block\"\u003E\u003Cp\u003EПоток 1\u003C\u002Fp\u003E\u003Capp-draw-stream [stream]=\"source6\"\u003E\u003C\u002Fapp-draw-stream\u003E\u003Cp\u003EПоток 2\u003C\u002Fp\u003E\u003Capp-draw-stream [stream]=\"source7\"\u003E\u003C\u002Fapp-draw-stream\u003E\u003Cp\u003EРезультат\u003C\u002Fp\u003E\u003Capp-draw-stream [stream]=\"result4\"\u003E\u003C\u002Fapp-draw-stream\u003E\u003C\u002Fdiv\u003E";;return pug_html;};
module.exports = template;

/***/ }),

/***/ "./node_modules/pug-loader/index.js!./src/app/pages/transformation/exhaust-map/exhaust-map.component.pug":
/*!******************************************************************************************************!*\
  !*** ./node_modules/pug-loader!./src/app/pages/transformation/exhaust-map/exhaust-map.component.pug ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var pug = __webpack_require__(/*! ../../../../../node_modules/pug-runtime/index.js */ "./node_modules/pug-runtime/index.js");

function template(locals) {var pug_html = "", pug_mixins = {}, pug_interp;pug_html = pug_html + "\u003Cp\u003EМапит поток на внутренний, игнорирует новые выстрелы внешнего потока, пока не закончится внутренний.\u003C\u002Fp\u003E\u003Cp\u003EexhaustMap() обрабатывает новый поток только тогда, когда он не занят другим потоком. То есть если в момент нового сообщения он уже работает с потоком, то новый поток будет проигнорирован и никогда не обработается.\u003C\u002Fp\u003E\u003Cdiv class=\"stream-block\"\u003E\u003Cp\u003EПоток 1\u003C\u002Fp\u003E\u003Capp-draw-stream [stream]=\"source1\"\u003E\u003C\u002Fapp-draw-stream\u003E\u003Cp\u003EПоток 2\u003C\u002Fp\u003E\u003Capp-draw-stream [stream]=\"source2\"\u003E\u003C\u002Fapp-draw-stream\u003E\u003Cp\u003EРезультат\u003C\u002Fp\u003E\u003Capp-draw-stream [stream]=\"result1\"\u003E\u003C\u002Fapp-draw-stream\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"stream-block\"\u003E\u003Cp\u003EПоток 1\u003C\u002Fp\u003E\u003Capp-draw-stream [stream]=\"source3\"\u003E\u003C\u002Fapp-draw-stream\u003E\u003Cp\u003EПоток 2\u003C\u002Fp\u003E\u003Capp-draw-stream [stream]=\"source4\"\u003E\u003C\u002Fapp-draw-stream\u003E\u003Cp\u003EРезультат\u003C\u002Fp\u003E\u003Capp-draw-stream [stream]=\"result2\"\u003E\u003C\u002Fapp-draw-stream\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"stream-block\"\u003E\u003Cp\u003EПоток 1\u003C\u002Fp\u003E\u003Capp-draw-stream [stream]=\"source5\"\u003E\u003C\u002Fapp-draw-stream\u003E\u003Cp\u003EПоток 2\u003C\u002Fp\u003E\u003Capp-draw-stream [stream]=\"source4\"\u003E\u003C\u002Fapp-draw-stream\u003E\u003Cp\u003EРезультат\u003C\u002Fp\u003E\u003Capp-draw-stream [stream]=\"result3\"\u003E\u003C\u002Fapp-draw-stream\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"stream-block\"\u003E\u003Cp\u003EПоток 1\u003C\u002Fp\u003E\u003Capp-draw-stream [stream]=\"source6\"\u003E\u003C\u002Fapp-draw-stream\u003E\u003Cp\u003EПоток 2\u003C\u002Fp\u003E\u003Capp-draw-stream [stream]=\"source7\"\u003E\u003C\u002Fapp-draw-stream\u003E\u003Cp\u003EРезультат\u003C\u002Fp\u003E\u003Capp-draw-stream [stream]=\"result4\"\u003E\u003C\u002Fapp-draw-stream\u003E\u003C\u002Fdiv\u003E";;return pug_html;};
module.exports = template;

/***/ }),

/***/ "./node_modules/pug-loader/index.js!./src/app/pages/transformation/expand/expand.component.pug":
/*!********************************************************************************************!*\
  !*** ./node_modules/pug-loader!./src/app/pages/transformation/expand/expand.component.pug ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var pug = __webpack_require__(/*! ../../../../../node_modules/pug-runtime/index.js */ "./node_modules/pug-runtime/index.js");

function template(locals) {var pug_html = "", pug_mixins = {}, pug_interp;pug_html = pug_html + "\u003Cp\u003EРекурсивно вызывает передаваемую функцию\u003C\u002Fp\u003E\u003Cdiv class=\"stream-block\"\u003E\u003Cp\u003EПоток\u003C\u002Fp\u003E\u003Capp-draw-stream [stream]=\"getStreamObj(this.source1$, 'of(2)')\"\u003E\u003C\u002Fapp-draw-stream\u003E\u003Cp\u003EРезультат\u003C\u002Fp\u003E\u003Capp-draw-stream [stream]=\"result1\"\u003E\u003C\u002Fapp-draw-stream\u003E\u003C\u002Fdiv\u003E";;return pug_html;};
module.exports = template;

/***/ }),

/***/ "./node_modules/pug-loader/index.js!./src/app/pages/transformation/group-by/group-by.component.pug":
/*!************************************************************************************************!*\
  !*** ./node_modules/pug-loader!./src/app/pages/transformation/group-by/group-by.component.pug ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var pug = __webpack_require__(/*! ../../../../../node_modules/pug-runtime/index.js */ "./node_modules/pug-runtime/index.js");

function template(locals) {var pug_html = "", pug_mixins = {}, pug_interp;pug_html = pug_html + "\u003Cp\u003EГруппирирует поток по какому либо свойству в новый поток\u003C\u002Fp\u003E\u003Cdiv class=\"stream-block\"\u003E\u003Cp\u003EПоток\u003C\u002Fp\u003E\u003Capp-draw-stream [stream]=\"source1\"\u003E\u003C\u002Fapp-draw-stream\u003E\u003Cp\u003EРезультат\u003C\u002Fp\u003E\u003Capp-draw-stream [stream]=\"result1\"\u003E\u003C\u002Fapp-draw-stream\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"stream-block\"\u003E\u003Cp\u003EПоток\u003C\u002Fp\u003E\u003Capp-draw-stream [stream]=\"source2\"\u003E\u003C\u002Fapp-draw-stream\u003E\u003Cp\u003EРезультат\u003C\u002Fp\u003E\u003Capp-draw-stream [stream]=\"result2\"\u003E\u003C\u002Fapp-draw-stream\u003E\u003C\u002Fdiv\u003E";;return pug_html;};
module.exports = template;

/***/ }),

/***/ "./node_modules/pug-loader/index.js!./src/app/pages/transformation/map-to/map-to.component.pug":
/*!********************************************************************************************!*\
  !*** ./node_modules/pug-loader!./src/app/pages/transformation/map-to/map-to.component.pug ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var pug = __webpack_require__(/*! ../../../../../node_modules/pug-runtime/index.js */ "./node_modules/pug-runtime/index.js");

function template(locals) {var pug_html = "", pug_mixins = {}, pug_interp;pug_html = pug_html + "\u003Cp\u003EМапит поток\u003C\u002Fp\u003E\u003Cdiv class=\"stream-block\"\u003E\u003Cp\u003ESource\u003C\u002Fp\u003E\u003Capp-draw-stream [stream]=\"source1\"\u003E\u003C\u002Fapp-draw-stream\u003E\u003Cp\u003EResult\u003C\u002Fp\u003E\u003Capp-draw-stream [stream]=\"result1\"\u003E\u003C\u002Fapp-draw-stream\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"stream-block\"\u003E\u003Cp\u003ESource\u003C\u002Fp\u003E\u003Capp-draw-stream [stream]=\"source2\"\u003E\u003C\u002Fapp-draw-stream\u003E\u003Cp\u003EResult\u003C\u002Fp\u003E\u003Capp-draw-stream [stream]=\"result2\"\u003E\u003C\u002Fapp-draw-stream\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"stream-block\"\u003E\u003Cp\u003ESource\u003C\u002Fp\u003E\u003Capp-draw-stream [stream]=\"source3\"\u003E\u003C\u002Fapp-draw-stream\u003E\u003Cp\u003EResult\u003C\u002Fp\u003E\u003Capp-draw-stream [stream]=\"result3\"\u003E\u003C\u002Fapp-draw-stream\u003E\u003C\u002Fdiv\u003E";;return pug_html;};
module.exports = template;

/***/ }),

/***/ "./node_modules/pug-loader/index.js!./src/app/pages/transformation/map/map.component.pug":
/*!**************************************************************************************!*\
  !*** ./node_modules/pug-loader!./src/app/pages/transformation/map/map.component.pug ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var pug = __webpack_require__(/*! ../../../../../node_modules/pug-runtime/index.js */ "./node_modules/pug-runtime/index.js");

function template(locals) {var pug_html = "", pug_mixins = {}, pug_interp;pug_html = pug_html + "\u003Cp\u003EМапит поток\u003C\u002Fp\u003E\u003Cdiv class=\"stream-block\"\u003E\u003Cp\u003EПоток\u003C\u002Fp\u003E\u003Capp-draw-stream [stream]=\"source1\"\u003E\u003C\u002Fapp-draw-stream\u003E\u003Cp\u003EРезультат\u003C\u002Fp\u003E\u003Capp-draw-stream [stream]=\"result1\"\u003E\u003C\u002Fapp-draw-stream\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"stream-block\"\u003E\u003Cp\u003EПоток\u003C\u002Fp\u003E\u003Capp-draw-stream [stream]=\"source2\"\u003E\u003C\u002Fapp-draw-stream\u003E\u003Cp\u003EРезультат\u003C\u002Fp\u003E\u003Capp-draw-stream [stream]=\"result2\"\u003E\u003C\u002Fapp-draw-stream\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"stream-block\"\u003E\u003Cp\u003EПоток\u003C\u002Fp\u003E\u003Capp-draw-stream [stream]=\"source3\"\u003E\u003C\u002Fapp-draw-stream\u003E\u003Cp\u003EРезультат\u003C\u002Fp\u003E\u003Capp-draw-stream [stream]=\"result3\"\u003E\u003C\u002Fapp-draw-stream\u003E\u003C\u002Fdiv\u003E";;return pug_html;};
module.exports = template;

/***/ }),

/***/ "./node_modules/pug-loader/index.js!./src/app/pages/transformation/merge-map/merge-map.component.pug":
/*!**************************************************************************************************!*\
  !*** ./node_modules/pug-loader!./src/app/pages/transformation/merge-map/merge-map.component.pug ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var pug = __webpack_require__(/*! ../../../../../node_modules/pug-runtime/index.js */ "./node_modules/pug-runtime/index.js");

function template(locals) {var pug_html = "", pug_mixins = {}, pug_interp;pug_html = pug_html + "\u003Cp\u003EМапит поток на внутренний, если стреляет внешний поток до того как закончится внутренний мерджит выстрелы внутренних потоков между собой\u003C\u002Fp\u003E\u003Cdiv class=\"stream-block\"\u003E\u003Cp\u003EПоток 1\u003C\u002Fp\u003E\u003Capp-draw-stream [stream]=\"source1\"\u003E\u003C\u002Fapp-draw-stream\u003E\u003Cp\u003EПоток 2\u003C\u002Fp\u003E\u003Capp-draw-stream [stream]=\"source2\"\u003E\u003C\u002Fapp-draw-stream\u003E\u003Cp\u003EРезультат\u003C\u002Fp\u003E\u003Capp-draw-stream [stream]=\"result1\"\u003E\u003C\u002Fapp-draw-stream\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"stream-block\"\u003E\u003Cp\u003EПоток 1\u003C\u002Fp\u003E\u003Capp-draw-stream [stream]=\"source3\"\u003E\u003C\u002Fapp-draw-stream\u003E\u003Cp\u003EПоток 2\u003C\u002Fp\u003E\u003Capp-draw-stream [stream]=\"source4\"\u003E\u003C\u002Fapp-draw-stream\u003E\u003Cp\u003EРезультат\u003C\u002Fp\u003E\u003Capp-draw-stream [stream]=\"result2\"\u003E\u003C\u002Fapp-draw-stream\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"stream-block\"\u003E\u003Cp\u003EПоток 1\u003C\u002Fp\u003E\u003Capp-draw-stream [stream]=\"source5\"\u003E\u003C\u002Fapp-draw-stream\u003E\u003Cp\u003EПоток 2\u003C\u002Fp\u003E\u003Capp-draw-stream [stream]=\"source4\"\u003E\u003C\u002Fapp-draw-stream\u003E\u003Cp\u003EРезультат\u003C\u002Fp\u003E\u003Capp-draw-stream [stream]=\"result3\"\u003E\u003C\u002Fapp-draw-stream\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"stream-block\"\u003E\u003Cp\u003EПоток 1\u003C\u002Fp\u003E\u003Capp-draw-stream [stream]=\"source6\"\u003E\u003C\u002Fapp-draw-stream\u003E\u003Cp\u003EПоток 2\u003C\u002Fp\u003E\u003Capp-draw-stream [stream]=\"source7\"\u003E\u003C\u002Fapp-draw-stream\u003E\u003Cp\u003EРезультат\u003C\u002Fp\u003E\u003Capp-draw-stream [stream]=\"result4\"\u003E\u003C\u002Fapp-draw-stream\u003E\u003C\u002Fdiv\u003E";;return pug_html;};
module.exports = template;

/***/ }),

/***/ "./node_modules/pug-loader/index.js!./src/app/pages/transformation/partition/partition.component.pug":
/*!**************************************************************************************************!*\
  !*** ./node_modules/pug-loader!./src/app/pages/transformation/partition/partition.component.pug ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var pug = __webpack_require__(/*! ../../../../../node_modules/pug-runtime/index.js */ "./node_modules/pug-runtime/index.js");

function template(locals) {var pug_html = "", pug_mixins = {}, pug_interp;pug_html = pug_html + "\u003Cp\u003EРазделяет поток на два, основываясь на переданном предикате\u003C\u002Fp\u003E\u003Cdiv class=\"stream-block\"\u003E\u003Cp\u003EПоток\u003C\u002Fp\u003E\u003Capp-draw-stream [stream]=\"source1\"\u003E\u003C\u002Fapp-draw-stream\u003E\u003Cp\u003EРезультат 1\u003C\u002Fp\u003E\u003Capp-draw-stream [stream]=\"result1\"\u003E\u003C\u002Fapp-draw-stream\u003E\u003Cp\u003EРезультат 2\u003C\u002Fp\u003E\u003Capp-draw-stream [stream]=\"result2\"\u003E\u003C\u002Fapp-draw-stream\u003E\u003C\u002Fdiv\u003E";;return pug_html;};
module.exports = template;

/***/ }),

/***/ "./node_modules/pug-loader/index.js!./src/app/pages/transformation/pluck/pluck.component.pug":
/*!******************************************************************************************!*\
  !*** ./node_modules/pug-loader!./src/app/pages/transformation/pluck/pluck.component.pug ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var pug = __webpack_require__(/*! ../../../../../node_modules/pug-runtime/index.js */ "./node_modules/pug-runtime/index.js");

function template(locals) {var pug_html = "", pug_mixins = {}, pug_interp;pug_html = pug_html + "\u003Cp\u003EВыбор свойства объекта в потоке для эмита\u003C\u002Fp\u003E\u003Cdiv class=\"stream-block\"\u003E\u003Cp\u003EПоток\u003C\u002Fp\u003E\u003Capp-draw-stream [stream]=\"source1\"\u003E\u003C\u002Fapp-draw-stream\u003E\u003Cp\u003EРезультат\u003C\u002Fp\u003E\u003Capp-draw-stream [stream]=\"result1\"\u003E\u003C\u002Fapp-draw-stream\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"stream-block\"\u003E\u003Cp\u003EПоток\u003C\u002Fp\u003E\u003Capp-draw-stream [stream]=\"source2\"\u003E\u003C\u002Fapp-draw-stream\u003E\u003Cp\u003EРезультат\u003C\u002Fp\u003E\u003Capp-draw-stream [stream]=\"result2\"\u003E\u003C\u002Fapp-draw-stream\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"stream-block\"\u003E\u003Cp\u003EПоток\u003C\u002Fp\u003E\u003Capp-draw-stream [stream]=\"source3\"\u003E\u003C\u002Fapp-draw-stream\u003E\u003Cp\u003EРезультат\u003C\u002Fp\u003E\u003Capp-draw-stream [stream]=\"result3\"\u003E\u003C\u002Fapp-draw-stream\u003E\u003C\u002Fdiv\u003E";;return pug_html;};
module.exports = template;

/***/ }),

/***/ "./node_modules/pug-loader/index.js!./src/app/pages/transformation/reduce/reduce.component.pug":
/*!********************************************************************************************!*\
  !*** ./node_modules/pug-loader!./src/app/pages/transformation/reduce/reduce.component.pug ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var pug = __webpack_require__(/*! ../../../../../node_modules/pug-runtime/index.js */ "./node_modules/pug-runtime/index.js");

function template(locals) {var pug_html = "", pug_mixins = {}, pug_interp;pug_html = pug_html + "\u003Cp\u003EСворачивает выстрелы потока в один, когда поток завершится\u003C\u002Fp\u003E\u003Cdiv class=\"stream-block\"\u003E\u003Cp\u003EПоток\u003C\u002Fp\u003E\u003Capp-draw-stream [stream]=\"source1\"\u003E\u003C\u002Fapp-draw-stream\u003E\u003Cp\u003EРезультат\u003C\u002Fp\u003E\u003Capp-draw-stream [stream]=\"result1\"\u003E\u003C\u002Fapp-draw-stream\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"stream-block\"\u003E\u003Cp\u003EПоток\u003C\u002Fp\u003E\u003Capp-draw-stream [stream]=\"source2\"\u003E\u003C\u002Fapp-draw-stream\u003E\u003Cp\u003EРезультат\u003C\u002Fp\u003E\u003Capp-draw-stream [stream]=\"result2\"\u003E\u003C\u002Fapp-draw-stream\u003E\u003C\u002Fdiv\u003E";;return pug_html;};
module.exports = template;

/***/ }),

/***/ "./node_modules/pug-loader/index.js!./src/app/pages/transformation/scan/scan.component.pug":
/*!****************************************************************************************!*\
  !*** ./node_modules/pug-loader!./src/app/pages/transformation/scan/scan.component.pug ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var pug = __webpack_require__(/*! ../../../../../node_modules/pug-runtime/index.js */ "./node_modules/pug-runtime/index.js");

function template(locals) {var pug_html = "", pug_mixins = {}, pug_interp;pug_html = pug_html + "\u003Cp\u003EДелает reduce на каждый выстрел\u003C\u002Fp\u003E\u003Cdiv class=\"stream-block\"\u003E\u003Cp\u003EПоток\u003C\u002Fp\u003E\u003Capp-draw-stream [stream]=\"source1\"\u003E\u003C\u002Fapp-draw-stream\u003E\u003Cp\u003EРезультат\u003C\u002Fp\u003E\u003Capp-draw-stream [stream]=\"result1\"\u003E\u003C\u002Fapp-draw-stream\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"stream-block\"\u003E\u003Cp\u003EПоток\u003C\u002Fp\u003E\u003Capp-draw-stream [stream]=\"source2\"\u003E\u003C\u002Fapp-draw-stream\u003E\u003Cp\u003EРезультат\u003C\u002Fp\u003E\u003Capp-draw-stream [stream]=\"result2\"\u003E\u003C\u002Fapp-draw-stream\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"stream-block\"\u003E\u003Cp\u003EПоток\u003C\u002Fp\u003E\u003Capp-draw-stream [stream]=\"source2\"\u003E\u003C\u002Fapp-draw-stream\u003E\u003Cp\u003EРезультат\u003C\u002Fp\u003E\u003Capp-draw-stream [stream]=\"result3\"\u003E\u003C\u002Fapp-draw-stream\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"stream-block\"\u003E\u003Cp\u003EПоток\u003C\u002Fp\u003E\u003Capp-draw-stream [stream]=\"source3\"\u003E\u003C\u002Fapp-draw-stream\u003E\u003Cp\u003EРезультат\u003C\u002Fp\u003E\u003Capp-draw-stream [stream]=\"result4\"\u003E\u003C\u002Fapp-draw-stream\u003E\u003C\u002Fdiv\u003E";;return pug_html;};
module.exports = template;

/***/ }),

/***/ "./node_modules/pug-loader/index.js!./src/app/pages/transformation/switch-map/switch-map.component.pug":
/*!****************************************************************************************************!*\
  !*** ./node_modules/pug-loader!./src/app/pages/transformation/switch-map/switch-map.component.pug ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var pug = __webpack_require__(/*! ../../../../../node_modules/pug-runtime/index.js */ "./node_modules/pug-runtime/index.js");

function template(locals) {var pug_html = "", pug_mixins = {}, pug_interp;pug_html = pug_html + "\u003Cp\u003EМапит поток на внутренний, если стреляет внешний поток до того как закончится внутренний, то начинает стрелять новыми значениями\u003C\u002Fp\u003E\u003Cdiv class=\"stream-block\"\u003E\u003Cp\u003EПоток 1\u003C\u002Fp\u003E\u003Capp-draw-stream [stream]=\"source1\"\u003E\u003C\u002Fapp-draw-stream\u003E\u003Cp\u003EПоток 2\u003C\u002Fp\u003E\u003Capp-draw-stream [stream]=\"source2\"\u003E\u003C\u002Fapp-draw-stream\u003E\u003Cp\u003EРезультат\u003C\u002Fp\u003E\u003Capp-draw-stream [stream]=\"result1\"\u003E\u003C\u002Fapp-draw-stream\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"stream-block\"\u003E\u003Cp\u003EПоток 1\u003C\u002Fp\u003E\u003Capp-draw-stream [stream]=\"source3\"\u003E\u003C\u002Fapp-draw-stream\u003E\u003Cp\u003EПоток 2\u003C\u002Fp\u003E\u003Capp-draw-stream [stream]=\"source4\"\u003E\u003C\u002Fapp-draw-stream\u003E\u003Cp\u003EРезультат\u003C\u002Fp\u003E\u003Capp-draw-stream [stream]=\"result2\"\u003E\u003C\u002Fapp-draw-stream\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"stream-block\"\u003E\u003Cp\u003EПоток 1\u003C\u002Fp\u003E\u003Capp-draw-stream [stream]=\"source5\"\u003E\u003C\u002Fapp-draw-stream\u003E\u003Cp\u003EПоток 2\u003C\u002Fp\u003E\u003Capp-draw-stream [stream]=\"source4\"\u003E\u003C\u002Fapp-draw-stream\u003E\u003Cp\u003EРезультат\u003C\u002Fp\u003E\u003Capp-draw-stream [stream]=\"result3\"\u003E\u003C\u002Fapp-draw-stream\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"stream-block\"\u003E\u003Cp\u003EПоток 1\u003C\u002Fp\u003E\u003Capp-draw-stream [stream]=\"source6\"\u003E\u003C\u002Fapp-draw-stream\u003E\u003Cp\u003EПоток 2\u003C\u002Fp\u003E\u003Capp-draw-stream [stream]=\"source7\"\u003E\u003C\u002Fapp-draw-stream\u003E\u003Cp\u003EРезультат\u003C\u002Fp\u003E\u003Capp-draw-stream [stream]=\"result4\"\u003E\u003C\u002Fapp-draw-stream\u003E\u003C\u002Fdiv\u003E";;return pug_html;};
module.exports = template;

/***/ }),

/***/ "./node_modules/pug-loader/index.js!./src/app/pages/transformation/to-array/to-array.component.pug":
/*!************************************************************************************************!*\
  !*** ./node_modules/pug-loader!./src/app/pages/transformation/to-array/to-array.component.pug ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var pug = __webpack_require__(/*! ../../../../../node_modules/pug-runtime/index.js */ "./node_modules/pug-runtime/index.js");

function template(locals) {var pug_html = "", pug_mixins = {}, pug_interp;pug_html = pug_html + "\u003Cp\u003EСобирает выстрелы потока, а когда он завершается стреляет массивом выстрелов\u003C\u002Fp\u003E\u003Cdiv class=\"stream-block\"\u003E\u003Cp\u003EПоток\u003C\u002Fp\u003E\u003Capp-draw-stream [stream]=\"source1\"\u003E\u003C\u002Fapp-draw-stream\u003E\u003Cp\u003EРезультат\u003C\u002Fp\u003E\u003Capp-draw-stream [stream]=\"result1\"\u003E\u003C\u002Fapp-draw-stream\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"stream-block\"\u003E\u003Cp\u003EПоток\u003C\u002Fp\u003E\u003Capp-draw-stream [stream]=\"source2\"\u003E\u003C\u002Fapp-draw-stream\u003E\u003Cp\u003EРезультат\u003C\u002Fp\u003E\u003Capp-draw-stream [stream]=\"result2\"\u003E\u003C\u002Fapp-draw-stream\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"stream-block\"\u003E\u003Cp\u003EПоток\u003C\u002Fp\u003E\u003Capp-draw-stream [stream]=\"source3\"\u003E\u003C\u002Fapp-draw-stream\u003E\u003Cp\u003EРезультат\u003C\u002Fp\u003E\u003Capp-draw-stream [stream]=\"result3\"\u003E\u003C\u002Fapp-draw-stream\u003E\u003C\u002Fdiv\u003E";;return pug_html;};
module.exports = template;

/***/ }),

/***/ "./node_modules/pug-loader/index.js!./src/app/pages/transformation/window-count/window-count.component.pug":
/*!********************************************************************************************************!*\
  !*** ./node_modules/pug-loader!./src/app/pages/transformation/window-count/window-count.component.pug ***!
  \********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var pug = __webpack_require__(/*! ../../../../../node_modules/pug-runtime/index.js */ "./node_modules/pug-runtime/index.js");

function template(locals) {var pug_html = "", pug_mixins = {}, pug_interp;pug_html = pug_html + "\u003Cp\u003EBranch out the source Observable values as a nested Observable with each nested Observable emitting at most windowSize values.\u003C\u002Fp\u003E\u003Cp\u003EКак bufferCount, но выстреливает вложенными потоками вместо массива.\u003C\u002Fp\u003E\u003Cdiv class=\"stream-block\"\u003E\u003Cp\u003EПоток\u003C\u002Fp\u003E\u003Capp-draw-stream [stream]=\"source1\"\u003E\u003C\u002Fapp-draw-stream\u003E\u003Cp\u003EРезультат 1\u003C\u002Fp\u003E\u003Capp-draw-stream [stream]=\"result1\"\u003E\u003C\u002Fapp-draw-stream\u003E\u003Cp\u003EРезультат 2\u003C\u002Fp\u003E\u003Capp-draw-stream [stream]=\"result2\"\u003E\u003C\u002Fapp-draw-stream\u003E\u003C\u002Fdiv\u003E";;return pug_html;};
module.exports = template;

/***/ }),

/***/ "./node_modules/pug-loader/index.js!./src/app/pages/transformation/window-time/window-time.component.pug":
/*!******************************************************************************************************!*\
  !*** ./node_modules/pug-loader!./src/app/pages/transformation/window-time/window-time.component.pug ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var pug = __webpack_require__(/*! ../../../../../node_modules/pug-runtime/index.js */ "./node_modules/pug-runtime/index.js");

function template(locals) {var pug_html = "", pug_mixins = {}, pug_interp;pug_html = pug_html + "\u003Cp\u003EBranch out the source Observable values as a nested Observable periodically in time.\u003C\u002Fp\u003E\u003Cp\u003EКак bufferTime, но выстреливает вложенными потоками вместо массива.\u003C\u002Fp\u003E\u003Cdiv class=\"stream-block\"\u003E\u003Cp\u003EПоток\u003C\u002Fp\u003E\u003Capp-draw-stream [stream]=\"source1\"\u003E\u003C\u002Fapp-draw-stream\u003E\u003Cp\u003EРезультат\u003C\u002Fp\u003E\u003Capp-draw-stream [stream]=\"result1\"\u003E\u003C\u002Fapp-draw-stream\u003E\u003C\u002Fdiv\u003E";;return pug_html;};
module.exports = template;

/***/ }),

/***/ "./node_modules/pug-loader/index.js!./src/app/pages/transformation/window/window.component.pug":
/*!********************************************************************************************!*\
  !*** ./node_modules/pug-loader!./src/app/pages/transformation/window/window.component.pug ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var pug = __webpack_require__(/*! ../../../../../node_modules/pug-runtime/index.js */ "./node_modules/pug-runtime/index.js");

function template(locals) {var pug_html = "", pug_mixins = {}, pug_interp;pug_html = pug_html + "\u003Cp\u003EObservable of values for window of time.\u003C\u002Fp\u003E\u003Cp\u003EПревращает внешний поток, во внутренние потоки заданный промежуток времени\u003C\u002Fp\u003E\u003Cdiv class=\"stream-block\"\u003E\u003Cp\u003EПоток 1\u003C\u002Fp\u003E\u003Capp-draw-stream [stream]=\"source1\"\u003E\u003C\u002Fapp-draw-stream\u003E\u003Cp\u003EПоток 2\u003C\u002Fp\u003E\u003Capp-draw-stream [stream]=\"source2\"\u003E\u003C\u002Fapp-draw-stream\u003E\u003Cp\u003EРезультат\u003C\u002Fp\u003E\u003Capp-draw-stream [stream]=\"result1\"\u003E\u003C\u002Fapp-draw-stream\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"stream-block\"\u003E\u003Cp\u003EПоток 1\u003C\u002Fp\u003E\u003Capp-draw-stream [stream]=\"source3\"\u003E\u003C\u002Fapp-draw-stream\u003E\u003Cp\u003EПоток 2\u003C\u002Fp\u003E\u003Capp-draw-stream [stream]=\"source1\"\u003E\u003C\u002Fapp-draw-stream\u003E\u003Cp\u003EРезультат\u003C\u002Fp\u003E\u003Capp-draw-stream [stream]=\"result2\"\u003E\u003C\u002Fapp-draw-stream\u003E\u003C\u002Fdiv\u003E";;return pug_html;};
module.exports = template;

/***/ }),

/***/ "./node_modules/pug-loader/index.js!./src/app/ui/ui-code/ui-code.component.pug":
/*!****************************************************************************!*\
  !*** ./node_modules/pug-loader!./src/app/ui/ui-code/ui-code.component.pug ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var pug = __webpack_require__(/*! ../../../../node_modules/pug-runtime/index.js */ "./node_modules/pug-runtime/index.js");

function template(locals) {var pug_html = "", pug_mixins = {}, pug_interp;pug_html = pug_html + "\u003Cpre class=\"prettyprint\"\u003E\u003Ccode class=\"language-javascript\"\u003E{{ code }}\u003C\u002Fcode\u003E\u003C\u002Fpre\u003E";;return pug_html;};
module.exports = template;

/***/ }),

/***/ "./node_modules/pug-loader/index.js!./src/app/ui/ui-main/ui-main.component.pug":
/*!****************************************************************************!*\
  !*** ./node_modules/pug-loader!./src/app/ui/ui-main/ui-main.component.pug ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var pug = __webpack_require__(/*! ../../../../node_modules/pug-runtime/index.js */ "./node_modules/pug-runtime/index.js");

function template(locals) {var pug_html = "", pug_mixins = {}, pug_interp;pug_html = pug_html + "\u003Cmain class=\"main\"\u003E\u003Crouter-outlet\u003E\u003C\u002Frouter-outlet\u003E\u003C\u002Fmain\u003E";;return pug_html;};
module.exports = template;

/***/ }),

/***/ "./node_modules/pug-loader/index.js!./src/app/ui/ui-side-bar/ui-side-bar.component.pug":
/*!************************************************************************************!*\
  !*** ./node_modules/pug-loader!./src/app/ui/ui-side-bar/ui-side-bar.component.pug ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var pug = __webpack_require__(/*! ../../../../node_modules/pug-runtime/index.js */ "./node_modules/pug-runtime/index.js");

function template(locals) {var pug_html = "", pug_mixins = {}, pug_interp;pug_html = pug_html + "\u003Cdiv class=\"side-bar\"\u003E\u003Ca class=\"logo\" routerLink=\"\u002F\" routerLinkActive=\"active\"\u003E\u003Csvg xmlns=\"http:\u002F\u002Fwww.w3.org\u002F2000\u002Fsvg\" viewBox=\"0 0 267.4 264.3\"\u003E\u003Cstyle\u003E.st0{ fill:#b7178c }\u003C\u002Fstyle\u003E\u003Cpath class=\"st0\" d=\"M266.9 118.7c-7.2 13.1-14.3 26.2-26.2 35.9 7.7-12.7 13.3-26.1 13.9-41.1.7-18.1-4.6-34.3-12.1-40 9.4 46-10.4 80.9-44.5 110.3 14.7 1.5 27.6-2.6 39.7-10.2-19.8 20.6-43.5 33.3-73.3 36.2 11.6 10.7 23.9 15.7 38.1 16.4-43.5 10.5-74.9-11-103.8-40.1 1 14.8 9.6 24.9 18.3 35-1.3 0-2.1-.2-2.8-.6-24.4-12.7-39.7-32.2-42.4-59.9-2.1-21.8 2-42.3 19.3-58 8.9-8.1 19.2-13.8 30.7-17 2.6-.7 6-.5 8.4.6 20.1 8.7 40.6 16.2 62.5 18.9 10.5 1.3 21.2 1.9 31.4-2.1 9.3-3.7 13.1-10.2 11.8-20-1.2-9.5-6.1-17.3-12.3-24.2-24.8-27.7-55.4-44.4-93-46.6-4.8-.3-8.5-1.5-12.4-4.5C102.5-4.1 85.8-2 72.9 13c-1.3 1.5-2.6 2.9-3.8 4.4-6.3 7-13.9 10.6-23.5 11.5-13.1 1.3-22.5 5.6-21.6 23.4.1 1.4 0 2.8-.1 4.2-.2 8-2.3 14.9-9.4 19.6-2.6 1.7-4.6 4.3-7 6.5-6 5.5-7.2 12.3-5.1 19.9 1.3 4.6 2.8 9.1 4 13.7 1.7 6.4 1.5 12.7-3 18.1-4.9 5.8-4.2 11.6-.6 17.5 1.8 2.8 4 5.4 5.8 8.2 3.7 5.9 8.1 11.6 10.8 18 23.1 56.3 85 91.9 143.2 85.7 45.2-4.8 76.9-29 98-68.4 1.4-2.5 2.3-5.3 4-9.5-14.7 10.7-28.2 20.2-45.3 22.7 34-20.5 51.5-49.5 47.6-89.8zM166.2 53.5c3.8 0 6.1 2.2 6.1 5.9 0 3.9-2.4 6.3-6.4 6.2-3.7-.1-5.7-2.4-5.8-5.9.2-4.1 2.3-6.2 6.1-6.2z\"\u003E\u003C\u002Fpath\u003E\u003C\u002Fsvg\u003E\u003C\u002Fa\u003E\u003Cnav\u003E\u003Cul class=\"page-list\"\u003E\u003Cli class=\"page-list__group\"\u003E\u003Cspan class=\"page-list__group-name\"\u003EСreation\u003C\u002Fspan\u003E\u003Cul class=\"page-list__links\"\u003E\u003Cli class=\"page-list__link\" *ngFor=\"let link of creationLinks\"\u003E\u003Ca routerLink=\"{{ link }}\" routerLinkActive=\"active\"\u003E{{ camelCase(link) }}\u003C\u002Fa\u003E\u003C\u002Fli\u003E\u003C\u002Ful\u003E\u003C\u002Fli\u003E\u003Cli class=\"page-list__group\"\u003E\u003Cspan class=\"page-list__group-name\"\u003EСombination\u003C\u002Fspan\u003E\u003Cul class=\"page-list__links\"\u003E\u003Cli class=\"page-list__link\" *ngFor=\"let link of combinationLinks\"\u003E\u003Ca routerLink=\"{{ link }}\" routerLinkActive=\"active\"\u003E{{ camelCase(link) }}\u003C\u002Fa\u003E\u003C\u002Fli\u003E\u003C\u002Ful\u003E\u003C\u002Fli\u003E\u003Cli class=\"page-list__group\"\u003E\u003Cspan class=\"page-list__group-name\"\u003EMulticasting\u003C\u002Fspan\u003E\u003Cul class=\"page-list__links\"\u003E\u003Cli class=\"page-list__link\" *ngFor=\"let link of multicastingLinks\"\u003E\u003Ca routerLink=\"{{ link }}\" routerLinkActive=\"active\"\u003E{{ camelCase(link) }}\u003C\u002Fa\u003E\u003C\u002Fli\u003E\u003C\u002Ful\u003E\u003C\u002Fli\u003E\u003Cli class=\"page-list__group\"\u003E\u003Cspan class=\"page-list__group-name\"\u003ETasks\u003C\u002Fspan\u003E\u003Cul class=\"page-list__links\"\u003E\u003Cli class=\"page-list__link\" *ngFor=\"let link of tasksLinks\"\u003E\u003Ca routerLink=\"{{ link }}\" routerLinkActive=\"active\"\u003E{{ camelCase(link) }}\u003C\u002Fa\u003E\u003C\u002Fli\u003E\u003C\u002Ful\u003E\u003C\u002Fli\u003E\u003Cli class=\"page-list__group\"\u003E\u003Cspan class=\"page-list__group-name\"\u003ESubjects\u003C\u002Fspan\u003E\u003Cul class=\"page-list__links\"\u003E\u003Cli class=\"page-list__link\" *ngFor=\"let link of subjectsLinks\"\u003E\u003Ca routerLink=\"{{ link }}\" routerLinkActive=\"active\"\u003E{{ camelCase(link) }}\u003C\u002Fa\u003E\u003C\u002Fli\u003E\u003C\u002Ful\u003E\u003C\u002Fli\u003E\u003Cli class=\"page-list__group\"\u003E\u003Cspan class=\"page-list__group-name\"\u003ETransformation\u003C\u002Fspan\u003E\u003Cul class=\"page-list__links\"\u003E\u003Cli class=\"page-list__link\" *ngFor=\"let link of transformationLinks\"\u003E\u003Ca routerLink=\"{{ link }}\" routerLinkActive=\"active\"\u003E{{ camelCase(link) }}\u003C\u002Fa\u003E\u003C\u002Fli\u003E\u003C\u002Ful\u003E\u003C\u002Fli\u003E\u003Cli class=\"page-list__group\"\u003E\u003Cspan class=\"page-list__group-name\"\u003EFiltering\u003C\u002Fspan\u003E\u003Cul class=\"page-list__links\"\u003E\u003Cli class=\"page-list__link\" *ngFor=\"let link of filterLinks\"\u003E\u003Ca routerLink=\"{{ link }}\" routerLinkActive=\"active\"\u003E{{ camelCase(link) }}\u003C\u002Fa\u003E\u003C\u002Fli\u003E\u003C\u002Ful\u003E\u003C\u002Fli\u003E\u003Cli class=\"page-list__group\"\u003E\u003Cspan class=\"page-list__group-name\"\u003EConditional\u003C\u002Fspan\u003E\u003Cul class=\"page-list__links\"\u003E\u003Cli class=\"page-list__link\" *ngFor=\"let link of conditionalLinks\"\u003E\u003Ca routerLink=\"{{ link }}\" routerLinkActive=\"active\"\u003E{{ camelCase(link) }}\u003C\u002Fa\u003E\u003C\u002Fli\u003E\u003C\u002Ful\u003E\u003C\u002Fli\u003E\u003C\u002Ful\u003E\u003C\u002Fnav\u003E\u003C\u002Fdiv\u003E";;return pug_html;};
module.exports = template;

/***/ }),

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _create_create_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./create/create.component */ "./src/app/create/create.component.ts");
/* harmony import */ var _pages_pages_routing__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages/pages.routing */ "./src/app/pages/pages.routing.ts");





var routes = [
    { path: 'test', component: _create_create_component__WEBPACK_IMPORTED_MODULE_3__["CreatesComponent"] }
].concat(_pages_pages_routing__WEBPACK_IMPORTED_MODULE_4__["pagesRoutes"]);
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.pug":
/*!***********************************!*\
  !*** ./src/app/app.component.pug ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var req = __webpack_require__(/*! !./node_modules/pug-loader!./src/app/app.component.pug */ "./node_modules/pug-loader/index.js!./src/app/app.component.pug");
module.exports = (req['default'] || req).apply(req, [])

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'rx-app';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.pug */ "./src/app/app.component.pug"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _create_create_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./create/create.component */ "./src/app/create/create.component.ts");
/* harmony import */ var _pages_pages_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./pages/pages.module */ "./src/app/pages/pages.module.ts");
/* harmony import */ var _ui_ui_side_bar_ui_side_bar_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./ui/ui-side-bar/ui-side-bar.component */ "./src/app/ui/ui-side-bar/ui-side-bar.component.ts");
/* harmony import */ var _ui_ui_main_ui_main_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./ui/ui-main/ui-main.component */ "./src/app/ui/ui-main/ui-main.component.ts");
/* harmony import */ var _ui_ui_code_ui_code_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./ui/ui-code/ui-code.component */ "./src/app/ui/ui-code/ui-code.component.ts");












var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
                _create_create_component__WEBPACK_IMPORTED_MODULE_7__["CreatesComponent"],
                _ui_ui_side_bar_ui_side_bar_component__WEBPACK_IMPORTED_MODULE_9__["UiSideBarComponent"],
                _ui_ui_main_ui_main_component__WEBPACK_IMPORTED_MODULE_10__["UiMainComponent"],
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"],
                _pages_pages_module__WEBPACK_IMPORTED_MODULE_8__["PagesModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"]
            ],
            exports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"], _ui_ui_code_ui_code_component__WEBPACK_IMPORTED_MODULE_11__["UiCodeComponent"]],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/create/create.component.pug":
/*!*********************************************!*\
  !*** ./src/app/create/create.component.pug ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var req = __webpack_require__(/*! !./node_modules/pug-loader!./src/app/create/create.component.pug */ "./node_modules/pug-loader/index.js!./src/app/create/create.component.pug");
module.exports = (req['default'] || req).apply(req, [])

/***/ }),

/***/ "./src/app/create/create.component.scss":
/*!**********************************************!*\
  !*** ./src/app/create/create.component.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".init {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  padding: 20px; }\n\n.logo {\n  width: 50px;\n  height: auto;\n  margin-bottom: 50px; }\n\n.streams {\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  list-style: none;\n  margin: 0;\n  padding: 0; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zLmdhdnJpbG92L0VkdS9yeGpzL3J4anMtYXBwL3NyYy9hcHAvY3JlYXRlL2NyZWF0ZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsbUJBQW1CO0VBQ25CLGFBQWEsRUFBQTs7QUFHZjtFQUNFLFdBQVc7RUFDWCxZQUFZO0VBQ1osbUJBQW1CLEVBQUE7O0FBR3JCO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixXQUFXO0VBQ1gsZ0JBQWdCO0VBQ2hCLFNBQVM7RUFDVCxVQUFVLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9jcmVhdGUvY3JlYXRlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmluaXQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBwYWRkaW5nOiAyMHB4O1xufVxuXG4ubG9nbyB7XG4gIHdpZHRoOiA1MHB4O1xuICBoZWlnaHQ6IGF1dG87XG4gIG1hcmdpbi1ib3R0b206IDUwcHg7XG59XG5cbi5zdHJlYW1zIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgd2lkdGg6IDEwMCU7XG4gIGxpc3Qtc3R5bGU6IG5vbmU7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMDtcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/create/create.component.ts":
/*!********************************************!*\
  !*** ./src/app/create/create.component.ts ***!
  \********************************************/
/*! exports provided: CreatesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreatesComponent", function() { return CreatesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var ramda__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ramda */ "./node_modules/ramda/es/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _pages_app_constant__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../pages/app.constant */ "./src/app/pages/app.constant.ts");






var CreatesComponent = /** @class */ (function () {
    function CreatesComponent() {
        this.interval1$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["interval"])(1000);
        this.interval2$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["interval"])(2000);
        this.interval3$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["interval"])(3000);
        this.of = Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(1234);
        this.active = true;
    }
    CreatesComponent.prototype.toogle = function () {
        this.active = !this.active;
        console.log(this.active, 'this.active');
    };
    CreatesComponent.prototype.streamSubscribe = function () {
        this.interval1Subscription = this.interval1$.subscribe(function (val) {
            console.log("interval1 " + val);
        });
        this.interval2Subscription = this.interval2$.subscribe(function (val) {
            console.log("interval2 " + val);
        });
        this.interval3Subscription = this.interval3$.subscribe(function (val) {
            console.log("interval3 " + val);
        });
    };
    CreatesComponent.prototype.mergeStreams = function () {
        this.mergeStream$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["merge"])(this.interval1$, this.interval2$, this.interval3$);
        this.mergeSubscription = this.mergeStream$.subscribe(function (val) {
            console.log("merge " + val);
        });
    };
    CreatesComponent.prototype.createStreams = function () {
        this.streams = [{ name: 'interval 1', values: this.randomizeStreamValuesView(this.interval1$) },
            { name: 'interval 2', values: this.randomizeStreamValuesView(this.interval2$) },
            { name: 'interval 3', values: this.randomizeStreamValuesView(this.interval3$) },
            { name: 'of 1', values: this.randomizeStreamValuesView(this.of) }
        ];
    };
    CreatesComponent.prototype.randomizeStreamValuesView = function (stream) {
        var _this = this;
        return stream.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (val) { return Object(ramda__WEBPACK_IMPORTED_MODULE_3__["mergeRight"])({ shape: _this.randomShape, color: _this.randomColor }, { val: val }); }));
    };
    Object.defineProperty(CreatesComponent.prototype, "randomShape", {
        get: function () {
            return _pages_app_constant__WEBPACK_IMPORTED_MODULE_5__["shapes"][this.getRandomNumber(0, Object(ramda__WEBPACK_IMPORTED_MODULE_3__["length"])(_pages_app_constant__WEBPACK_IMPORTED_MODULE_5__["shapes"]) - 1)];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CreatesComponent.prototype, "randomColor", {
        get: function () {
            return _pages_app_constant__WEBPACK_IMPORTED_MODULE_5__["colors"][this.getRandomNumber(0, Object(ramda__WEBPACK_IMPORTED_MODULE_3__["length"])(_pages_app_constant__WEBPACK_IMPORTED_MODULE_5__["colors"]) - 1)];
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Returns a random number between min and max
     */
    CreatesComponent.prototype.getRandomNumber = function (min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    };
    CreatesComponent.prototype.ngOnInit = function () {
        // this.streamSubscribe();
        // this.mergeStreams();
        this.createStreams();
    };
    CreatesComponent.prototype.ngOnDestroy = function () {
        console.log('Destroy');
        // this.interval1Subscription.unsubscribe();
        // this.interval2Subscription.unsubscribe();
    };
    CreatesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-creates',
            template: __webpack_require__(/*! ./create.component.pug */ "./src/app/create/create.component.pug"),
            styles: [__webpack_require__(/*! ./create.component.scss */ "./src/app/create/create.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], CreatesComponent);
    return CreatesComponent;
}());



/***/ }),

/***/ "./src/app/pages/app.constant.ts":
/*!***************************************!*\
  !*** ./src/app/pages/app.constant.ts ***!
  \***************************************/
/*! exports provided: shapes, colors */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "shapes", function() { return shapes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "colors", function() { return colors; });
var shapes = ['circle', 'square'];
var colors = ['red', 'green', 'blue', 'black'];


/***/ }),

/***/ "./src/app/pages/combination/combination.routing.ts":
/*!**********************************************************!*\
  !*** ./src/app/pages/combination/combination.routing.ts ***!
  \**********************************************************/
/*! exports provided: combinationPagesRoutes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "combinationPagesRoutes", function() { return combinationPagesRoutes; });
/* harmony import */ var _combine_latest_combine_latest_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./combine-latest/combine-latest.component */ "./src/app/pages/combination/combine-latest/combine-latest.component.ts");
/* harmony import */ var _combine_all_combine_all_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./combine-all/combine-all.component */ "./src/app/pages/combination/combine-all/combine-all.component.ts");
/* harmony import */ var _concat_concat_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./concat/concat.component */ "./src/app/pages/combination/concat/concat.component.ts");
/* harmony import */ var _end_with_end_with_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./end-with/end-with.component */ "./src/app/pages/combination/end-with/end-with.component.ts");
/* harmony import */ var _fork_join_fork_join_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./fork-join/fork-join.component */ "./src/app/pages/combination/fork-join/fork-join.component.ts");
/* harmony import */ var _merge_merge_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./merge/merge.component */ "./src/app/pages/combination/merge/merge.component.ts");
/* harmony import */ var _merge_all_merge_all_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./merge-all/merge-all.component */ "./src/app/pages/combination/merge-all/merge-all.component.ts");
/* harmony import */ var _race_race_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./race/race.component */ "./src/app/pages/combination/race/race.component.ts");
/* harmony import */ var _start_with_start_with_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./start-with/start-with.component */ "./src/app/pages/combination/start-with/start-with.component.ts");
/* harmony import */ var _with_latest_from_with_latest_from_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./with-latest-from/with-latest-from.component */ "./src/app/pages/combination/with-latest-from/with-latest-from.component.ts");
/* harmony import */ var _zip_zip_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./zip/zip.component */ "./src/app/pages/combination/zip/zip.component.ts");











var combinationPagesRoutes = [
    { path: 'combine-latest', component: _combine_latest_combine_latest_component__WEBPACK_IMPORTED_MODULE_0__["CombineLatestComponent"] },
    { path: 'combine-all', component: _combine_all_combine_all_component__WEBPACK_IMPORTED_MODULE_1__["CombineAllComponent"] },
    { path: 'concat', component: _concat_concat_component__WEBPACK_IMPORTED_MODULE_2__["ConcatComponent"] },
    { path: 'end-with', component: _end_with_end_with_component__WEBPACK_IMPORTED_MODULE_3__["EndWithComponent"] },
    { path: 'fork-join', component: _fork_join_fork_join_component__WEBPACK_IMPORTED_MODULE_4__["ForkJoinComponent"] },
    { path: 'merge', component: _merge_merge_component__WEBPACK_IMPORTED_MODULE_5__["MergeComponent"] },
    { path: 'merge-all', component: _merge_all_merge_all_component__WEBPACK_IMPORTED_MODULE_6__["MergeAllComponent"] },
    { path: 'race', component: _race_race_component__WEBPACK_IMPORTED_MODULE_7__["RaceComponent"] },
    { path: 'start-with', component: _start_with_start_with_component__WEBPACK_IMPORTED_MODULE_8__["StartWithComponent"] },
    { path: 'with-latest-from', component: _with_latest_from_with_latest_from_component__WEBPACK_IMPORTED_MODULE_9__["WithLatestFromComponent"] },
    { path: 'zip', component: _zip_zip_component__WEBPACK_IMPORTED_MODULE_10__["ZipComponent"] },
];


/***/ }),

/***/ "./src/app/pages/combination/combine-all/combine-all.component.pug":
/*!*************************************************************************!*\
  !*** ./src/app/pages/combination/combine-all/combine-all.component.pug ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var req = __webpack_require__(/*! !./node_modules/pug-loader!./src/app/pages/combination/combine-all/combine-all.component.pug */ "./node_modules/pug-loader/index.js!./src/app/pages/combination/combine-all/combine-all.component.pug");
module.exports = (req['default'] || req).apply(req, [])

/***/ }),

/***/ "./src/app/pages/combination/combine-all/combine-all.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/pages/combination/combine-all/combine-all.component.ts ***!
  \************************************************************************/
/*! exports provided: CombineAllComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CombineAllComponent", function() { return CombineAllComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../utils */ "./src/app/pages/utils.ts");





var CombineAllComponent = /** @class */ (function () {
    function CombineAllComponent() {
        this.source1$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(1, 2, 3, 4, 5, 6, 7, 8);
        this.nextSource1$ = this.source1$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (x) { return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])('a-' + x, 'b-' + x, 'c-' + x, 'd-' + x); }));
        this.result1$ = this.nextSource1$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["combineAll"])());
        this.source1 = Object(_utils__WEBPACK_IMPORTED_MODULE_4__["getStreamObj"])(this.source1$, "of(1, 2, 3, 4, 5, 6, 7, 8)", '');
        this.nextSource1 = Object(_utils__WEBPACK_IMPORTED_MODULE_4__["getStreamObj"])(this.nextSource1$, "of(1, 2, 3, 4, 5, 6, 7, 8).pipe(map(x => of('a-' + x, 'b-' + x, 'c-' + x, 'd-' + x)))", '');
        this.result1 = Object(_utils__WEBPACK_IMPORTED_MODULE_4__["getStreamObj"])(this.result1$, "of(1, 2, 3, 4, 5, 6, 7, 8).pipe(map(x => of('a-' + x, 'b-' + x, 'c-' + x, 'd-' + x))).pipe(combineAll())", '');
        this.source2$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(1, 2, 3, 4, 5, 6, 7, 8);
        this.nextSource2$ = this.source1$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (x) { return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])('a', 'b', 'c', 'd'); }));
        this.result2$ = this.nextSource2$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["combineAll"])());
        this.source2 = Object(_utils__WEBPACK_IMPORTED_MODULE_4__["getStreamObj"])(this.source2$, "of(1, 2, 3, 4, 5, 6, 7, 8)", '');
        this.nextSource2 = Object(_utils__WEBPACK_IMPORTED_MODULE_4__["getStreamObj"])(this.nextSource2$, "of(1, 2, 3, 4, 5, 6, 7, 8).pipe(map(x => of('a', 'b', 'c', 'd')))", '');
        this.result2 = Object(_utils__WEBPACK_IMPORTED_MODULE_4__["getStreamObj"])(this.result2$, "of(1, 2, 3, 4, 5, 6, 7, 8).pipe(map(x => of('a', 'b', 'c' 'd'))).pipe(combineAll())", '');
    }
    CombineAllComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-combine-all',
            template: __webpack_require__(/*! ./combine-all.component.pug */ "./src/app/pages/combination/combine-all/combine-all.component.pug"),
        })
    ], CombineAllComponent);
    return CombineAllComponent;
}());



/***/ }),

/***/ "./src/app/pages/combination/combine-latest/combine-latest.component.pug":
/*!*******************************************************************************!*\
  !*** ./src/app/pages/combination/combine-latest/combine-latest.component.pug ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var req = __webpack_require__(/*! !./node_modules/pug-loader!./src/app/pages/combination/combine-latest/combine-latest.component.pug */ "./node_modules/pug-loader/index.js!./src/app/pages/combination/combine-latest/combine-latest.component.pug");
module.exports = (req['default'] || req).apply(req, [])

/***/ }),

/***/ "./src/app/pages/combination/combine-latest/combine-latest.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/pages/combination/combine-latest/combine-latest.component.ts ***!
  \******************************************************************************/
/*! exports provided: CombineLatestComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CombineLatestComponent", function() { return CombineLatestComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utils */ "./src/app/pages/utils.ts");




var CombineLatestComponent = /** @class */ (function () {
    function CombineLatestComponent() {
        this.source1$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["timer"])(1000, 10000);
        this.source2$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["timer"])(2000, 1000);
        this.source3$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["timer"])(2000, 2000);
        this.source1 = Object(_utils__WEBPACK_IMPORTED_MODULE_3__["getStreamObj"])(this.source1$, 'timer(1000, 10000)', 'Стреляет первый раз через секунду, затем каждые 10 секунд');
        this.source2 = Object(_utils__WEBPACK_IMPORTED_MODULE_3__["getStreamObj"])(this.source2$, 'timer(2000, 1000)', 'Стреляет первый раз через 2 секунды, затем каждую секунду');
        this.source3 = Object(_utils__WEBPACK_IMPORTED_MODULE_3__["getStreamObj"])(this.source3$, 'timer(2000, 2000)', 'Стреляет первый раз через 2 секунды, затем через каждые две секунды');
        this.result1 = Object(_utils__WEBPACK_IMPORTED_MODULE_3__["getStreamObj"])(Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["combineLatest"])(this.source1$, this.source2$, this.source3$), 'combineLatest(timer(1000, 10000), timer(2000, 1000), timer(2000, 2000))', 'Комбинирует три потока');
        this.result2 = Object(_utils__WEBPACK_IMPORTED_MODULE_3__["getStreamObj"])(Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["combineLatest"])(this.source1$, this.source2$, this.source3$, function (one, two, tree) { return (one + two + tree) / 2; }), "combineLatest(\n        timer(1000, 10000),\n        timer(2000, 1000),\n        timer(2000, 2000),\n        (one: number, two: number , tree: number) => (one + two + tree) / 2;\n    )", 'Комбинирует три потока, суммирует значение и стреляет');
    }
    CombineLatestComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-combine-latest',
            template: __webpack_require__(/*! ./combine-latest.component.pug */ "./src/app/pages/combination/combine-latest/combine-latest.component.pug"),
        })
    ], CombineLatestComponent);
    return CombineLatestComponent;
}());



/***/ }),

/***/ "./src/app/pages/combination/concat/concat.component.pug":
/*!***************************************************************!*\
  !*** ./src/app/pages/combination/concat/concat.component.pug ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var req = __webpack_require__(/*! !./node_modules/pug-loader!./src/app/pages/combination/concat/concat.component.pug */ "./node_modules/pug-loader/index.js!./src/app/pages/combination/concat/concat.component.pug");
module.exports = (req['default'] || req).apply(req, [])

/***/ }),

/***/ "./src/app/pages/combination/concat/concat.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/pages/combination/concat/concat.component.ts ***!
  \**************************************************************/
/*! exports provided: ConcatComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConcatComponent", function() { return ConcatComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utils */ "./src/app/pages/utils.ts");




var ConcatComponent = /** @class */ (function () {
    function ConcatComponent() {
        this.source1$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(1, 2, 3, 4, 5, 6, 7, 8);
        this.source2$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])('a', 'b', 'c', 'd', 'e', 'f', 'g', 'h');
        this.source3$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["interval"])(1000);
        this.source1 = Object(_utils__WEBPACK_IMPORTED_MODULE_3__["getStreamObj"])(this.source1$, 'of(1, 2, 3, 4, 5, 6, 7, 8)', 'Поток цифр');
        this.source2 = Object(_utils__WEBPACK_IMPORTED_MODULE_3__["getStreamObj"])(this.source2$, "of('a', 'b', 'c', 'd', 'e', 'f', 'g', 'h')", 'Поток букв');
        this.source3 = Object(_utils__WEBPACK_IMPORTED_MODULE_3__["getStreamObj"])(this.source3$, "interval(1000)", 'Интервал');
        this.result1 = Object(_utils__WEBPACK_IMPORTED_MODULE_3__["getStreamObj"])(Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["concat"])(this.source1$, this.source2$), "concat(of(1, 2, 3, 4, 5, 6, 7, 8), of('a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'))", "");
        this.result2 = Object(_utils__WEBPACK_IMPORTED_MODULE_3__["getStreamObj"])(Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["concat"])(this.source2$, this.source3$), "concat(of('a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'), interval(1000))", "");
        this.result3 = Object(_utils__WEBPACK_IMPORTED_MODULE_3__["getStreamObj"])(Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["concat"])(this.source3$, this.source1$), "concat(interval(1000), of(1, 2, 3, 4, 5, 6, 7, 8))", "");
    }
    ConcatComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-concat',
            template: __webpack_require__(/*! ./concat.component.pug */ "./src/app/pages/combination/concat/concat.component.pug"),
        })
    ], ConcatComponent);
    return ConcatComponent;
}());



/***/ }),

/***/ "./src/app/pages/combination/end-with/end-with.component.pug":
/*!*******************************************************************!*\
  !*** ./src/app/pages/combination/end-with/end-with.component.pug ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var req = __webpack_require__(/*! !./node_modules/pug-loader!./src/app/pages/combination/end-with/end-with.component.pug */ "./node_modules/pug-loader/index.js!./src/app/pages/combination/end-with/end-with.component.pug");
module.exports = (req['default'] || req).apply(req, [])

/***/ }),

/***/ "./src/app/pages/combination/end-with/end-with.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/pages/combination/end-with/end-with.component.ts ***!
  \******************************************************************/
/*! exports provided: EndWithComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EndWithComponent", function() { return EndWithComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../utils */ "./src/app/pages/utils.ts");





var EndWithComponent = /** @class */ (function () {
    function EndWithComponent() {
        this.source1$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(1, 2, 3, 4, 5, 6, 7, 8);
        this.source1 = Object(_utils__WEBPACK_IMPORTED_MODULE_4__["getStreamObj"])(this.source1$, "of(1, 2, 3, 4, 5, 6, 7, 8)", 'Поток чисел');
        this.source2$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["interval"])(1000);
        this.source2 = Object(_utils__WEBPACK_IMPORTED_MODULE_4__["getStreamObj"])(this.source2$, "interval(1000)", 'Интервал');
        this.result1 = Object(_utils__WEBPACK_IMPORTED_MODULE_4__["getStreamObj"])(this.source1$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["endWith"])(1002)), "of(1, 2, 3, 4, 5, 6, 7, 8).pipe(endWith('1002'))", "");
        this.result2 = Object(_utils__WEBPACK_IMPORTED_MODULE_4__["getStreamObj"])(this.source2$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["endWith"])(1002)), "interval(1000).pipe(endWith(1002))", "");
    }
    EndWithComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-end-with',
            template: __webpack_require__(/*! ./end-with.component.pug */ "./src/app/pages/combination/end-with/end-with.component.pug"),
        })
    ], EndWithComponent);
    return EndWithComponent;
}());



/***/ }),

/***/ "./src/app/pages/combination/fork-join/fork-join.component.pug":
/*!*********************************************************************!*\
  !*** ./src/app/pages/combination/fork-join/fork-join.component.pug ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var req = __webpack_require__(/*! !./node_modules/pug-loader!./src/app/pages/combination/fork-join/fork-join.component.pug */ "./node_modules/pug-loader/index.js!./src/app/pages/combination/fork-join/fork-join.component.pug");
module.exports = (req['default'] || req).apply(req, [])

/***/ }),

/***/ "./src/app/pages/combination/fork-join/fork-join.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/pages/combination/fork-join/fork-join.component.ts ***!
  \********************************************************************/
/*! exports provided: ForkJoinComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForkJoinComponent", function() { return ForkJoinComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../utils */ "./src/app/pages/utils.ts");





var ForkJoinComponent = /** @class */ (function () {
    function ForkJoinComponent() {
        this.source1$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["interval"])(1000).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["mapTo"])('1'), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(5));
        this.source2$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["interval"])(2000).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["mapTo"])('2'), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(3));
        this.source3$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["interval"])(3000).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["mapTo"])('3'), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(2));
        this.source1 = Object(_utils__WEBPACK_IMPORTED_MODULE_4__["getStreamObj"])(this.source1$, "interval(1000).pipe(mapTo('1'), take(5))", 'Поток единиц, стреляет каждую секунду');
        this.source2 = Object(_utils__WEBPACK_IMPORTED_MODULE_4__["getStreamObj"])(this.source2$, "interval(2000).pipe(mapTo('2'), take(3))", 'Поток двоек, стреляет раз в две секнуды');
        this.source3 = Object(_utils__WEBPACK_IMPORTED_MODULE_4__["getStreamObj"])(this.source3$, "interval(3000).pipe(mapTo('3'), take(2))", 'Поток троек, стреляет раз в 3 секунды');
        this.result1 = Object(_utils__WEBPACK_IMPORTED_MODULE_4__["getStreamObj"])(Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["forkJoin"])(this.source1$, this.source2$, this.source3$), "forkJoin(\n      interval(1000).pipe(mapTo('1')),\n      interval(2000).pipe(mapTo('2'))),\n      interval(3000).pipe(mapTo('3')),\n    ", "\u0420\u0435\u0437\u0443\u043B\u044C\u0442\u0430\u0442 \u043E\u0431\u044A\u0435\u0434\u0438\u043D\u0435\u043D\u0438\u044F");
    }
    ForkJoinComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-fork-join',
            template: __webpack_require__(/*! ./fork-join.component.pug */ "./src/app/pages/combination/fork-join/fork-join.component.pug"),
        })
    ], ForkJoinComponent);
    return ForkJoinComponent;
}());



/***/ }),

/***/ "./src/app/pages/combination/merge-all/merge-all.component.pug":
/*!*********************************************************************!*\
  !*** ./src/app/pages/combination/merge-all/merge-all.component.pug ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var req = __webpack_require__(/*! !./node_modules/pug-loader!./src/app/pages/combination/merge-all/merge-all.component.pug */ "./node_modules/pug-loader/index.js!./src/app/pages/combination/merge-all/merge-all.component.pug");
module.exports = (req['default'] || req).apply(req, [])

/***/ }),

/***/ "./src/app/pages/combination/merge-all/merge-all.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/pages/combination/merge-all/merge-all.component.ts ***!
  \********************************************************************/
/*! exports provided: MergeAllComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MergeAllComponent", function() { return MergeAllComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../utils */ "./src/app/pages/utils.ts");





var MergeAllComponent = /** @class */ (function () {
    function MergeAllComponent() {
        this.source1$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["fromEvent"])(document, 'click');
        this.source2$ = this.source1$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function () { return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["interval"])(1000).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(5)); }));
        this.result1$ = this.source2$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["mergeAll"])());
        this.source1 = Object(_utils__WEBPACK_IMPORTED_MODULE_4__["getStreamObj"])(this.source1$, "fromEvent(document, 'click')");
        this.source2 = Object(_utils__WEBPACK_IMPORTED_MODULE_4__["getStreamObj"])(this.source2$, "fromEvent(document, 'click').pipe(map(() => interval(1000).pipe(take(5))))");
        this.result1 = Object(_utils__WEBPACK_IMPORTED_MODULE_4__["getStreamObj"])(this.result1$, "fromEvent(document, 'click').pipe(map(() => interval(1000).pipe(take(5))), mergeAll())");
    }
    MergeAllComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-merge-all',
            template: __webpack_require__(/*! ./merge-all.component.pug */ "./src/app/pages/combination/merge-all/merge-all.component.pug"),
        })
    ], MergeAllComponent);
    return MergeAllComponent;
}());



/***/ }),

/***/ "./src/app/pages/combination/merge/merge.component.pug":
/*!*************************************************************!*\
  !*** ./src/app/pages/combination/merge/merge.component.pug ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var req = __webpack_require__(/*! !./node_modules/pug-loader!./src/app/pages/combination/merge/merge.component.pug */ "./node_modules/pug-loader/index.js!./src/app/pages/combination/merge/merge.component.pug");
module.exports = (req['default'] || req).apply(req, [])

/***/ }),

/***/ "./src/app/pages/combination/merge/merge.component.ts":
/*!************************************************************!*\
  !*** ./src/app/pages/combination/merge/merge.component.ts ***!
  \************************************************************/
/*! exports provided: MergeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MergeComponent", function() { return MergeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../utils */ "./src/app/pages/utils.ts");





var MergeComponent = /** @class */ (function () {
    function MergeComponent() {
        this.source1$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["interval"])(1000).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["mapTo"])('1'));
        this.source2$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["interval"])(2000).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["mapTo"])('2'));
        this.source3$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["interval"])(3000).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["mapTo"])('3'));
        this.source1 = Object(_utils__WEBPACK_IMPORTED_MODULE_4__["getStreamObj"])(this.source1$, "interval(1000).pipe(mapTo('1'))", 'Поток единиц, стреляет каждую секунду');
        this.source2 = Object(_utils__WEBPACK_IMPORTED_MODULE_4__["getStreamObj"])(this.source2$, "interval(2000).pipe(mapTo('2'))", 'Поток двоек, стреляет раз в две секнуды');
        this.source3 = Object(_utils__WEBPACK_IMPORTED_MODULE_4__["getStreamObj"])(this.source3$, "interval(3000).pipe(mapTo('3'))", 'Поток троек, стреляет раз в 3 секунды');
        this.result1 = Object(_utils__WEBPACK_IMPORTED_MODULE_4__["getStreamObj"])(Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["merge"])(this.source1$, this.source2$, this.source3$), "merge(\n      interval(1000).pipe(mapTo('1')),\n      interval(2000).pipe(mapTo('2'))),\n      interval(3000).pipe(mapTo('3')),\n    ", "\u0420\u0435\u0437\u0443\u043B\u044C\u0442\u0430\u0442 \u043E\u0431\u044A\u0435\u0434\u0438\u043D\u0435\u043D\u0438\u044F");
    }
    MergeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-merge',
            template: __webpack_require__(/*! ./merge.component.pug */ "./src/app/pages/combination/merge/merge.component.pug"),
        })
    ], MergeComponent);
    return MergeComponent;
}());



/***/ }),

/***/ "./src/app/pages/combination/race/race.component.pug":
/*!***********************************************************!*\
  !*** ./src/app/pages/combination/race/race.component.pug ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var req = __webpack_require__(/*! !./node_modules/pug-loader!./src/app/pages/combination/race/race.component.pug */ "./node_modules/pug-loader/index.js!./src/app/pages/combination/race/race.component.pug");
module.exports = (req['default'] || req).apply(req, [])

/***/ }),

/***/ "./src/app/pages/combination/race/race.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/pages/combination/race/race.component.ts ***!
  \**********************************************************/
/*! exports provided: RaceComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RaceComponent", function() { return RaceComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../utils */ "./src/app/pages/utils.ts");





var RaceComponent = /** @class */ (function () {
    function RaceComponent() {
        this.source1$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["interval"])(2000).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["mapTo"])('1'));
        this.source2$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["interval"])(3000).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["mapTo"])('2'));
        this.source3$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["interval"])(1000).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["mapTo"])('3'));
        this.source1 = Object(_utils__WEBPACK_IMPORTED_MODULE_4__["getStreamObj"])(this.source1$, "interval(2000).pipe(mapTo('1'))", 'Поток двоек, стреляет через 2 секунды');
        this.source2 = Object(_utils__WEBPACK_IMPORTED_MODULE_4__["getStreamObj"])(this.source2$, "interval(3000).pipe(mapTo('2'))", 'Поток троек, стреляет через 3 секунды');
        this.source3 = Object(_utils__WEBPACK_IMPORTED_MODULE_4__["getStreamObj"])(this.source3$, "interval(1000).pipe(mapTo('3'))", 'Поток единиц, стреляет через секунду');
        this.result1$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["race"])(this.source1$, this.source2$, this.source3$);
        this.result1 = Object(_utils__WEBPACK_IMPORTED_MODULE_4__["getStreamObj"])(this.result1$, "race(\n    interval(2000).pipe(mapTo('1')),\n    interval(3000).pipe(mapTo('2'))),\n    interval(1000).pipe(mapTo('3')),\n    ", "\u041F\u043E\u0442\u043E\u043A \u0435\u0434\u0438\u043D\u0438\u0446");
    }
    RaceComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-race',
            template: __webpack_require__(/*! ./race.component.pug */ "./src/app/pages/combination/race/race.component.pug"),
        })
    ], RaceComponent);
    return RaceComponent;
}());



/***/ }),

/***/ "./src/app/pages/combination/start-with/start-with.component.pug":
/*!***********************************************************************!*\
  !*** ./src/app/pages/combination/start-with/start-with.component.pug ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var req = __webpack_require__(/*! !./node_modules/pug-loader!./src/app/pages/combination/start-with/start-with.component.pug */ "./node_modules/pug-loader/index.js!./src/app/pages/combination/start-with/start-with.component.pug");
module.exports = (req['default'] || req).apply(req, [])

/***/ }),

/***/ "./src/app/pages/combination/start-with/start-with.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/pages/combination/start-with/start-with.component.ts ***!
  \**********************************************************************/
/*! exports provided: StartWithComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StartWithComponent", function() { return StartWithComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../utils */ "./src/app/pages/utils.ts");





var StartWithComponent = /** @class */ (function () {
    function StartWithComponent() {
        this.source1$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(1, 2, 3, 4, 5, 6, 7, 8);
        this.source2$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["interval"])(1000);
        this.source1 = Object(_utils__WEBPACK_IMPORTED_MODULE_4__["getStreamObj"])(this.source1$, "of(1, 2, 3, 4, 5, 6, 7, 8)", 'Поток чисел');
        this.source2 = Object(_utils__WEBPACK_IMPORTED_MODULE_4__["getStreamObj"])(this.source2$, "interval(1000)", 'Интервал');
        this.result1 = Object(_utils__WEBPACK_IMPORTED_MODULE_4__["getStreamObj"])(this.source1$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["startWith"])('Hello!')), "of(1, 2, 3, 4, 5, 6, 7, 8).pipe(startWith('Hello!'))", "");
        this.result2 = Object(_utils__WEBPACK_IMPORTED_MODULE_4__["getStreamObj"])(this.source2$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["startWith"])('Hello', 'World!')), "of(1, 2, 3, 4, 5, 6, 7, 8).pipe(startWith('Hello', 'World!'))", "");
    }
    StartWithComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-start-with',
            template: __webpack_require__(/*! ./start-with.component.pug */ "./src/app/pages/combination/start-with/start-with.component.pug"),
        })
    ], StartWithComponent);
    return StartWithComponent;
}());



/***/ }),

/***/ "./src/app/pages/combination/with-latest-from/with-latest-from.component.pug":
/*!***********************************************************************************!*\
  !*** ./src/app/pages/combination/with-latest-from/with-latest-from.component.pug ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var req = __webpack_require__(/*! !./node_modules/pug-loader!./src/app/pages/combination/with-latest-from/with-latest-from.component.pug */ "./node_modules/pug-loader/index.js!./src/app/pages/combination/with-latest-from/with-latest-from.component.pug");
module.exports = (req['default'] || req).apply(req, [])

/***/ }),

/***/ "./src/app/pages/combination/with-latest-from/with-latest-from.component.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/pages/combination/with-latest-from/with-latest-from.component.ts ***!
  \**********************************************************************************/
/*! exports provided: WithLatestFromComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WithLatestFromComponent", function() { return WithLatestFromComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../utils */ "./src/app/pages/utils.ts");





var WithLatestFromComponent = /** @class */ (function () {
    function WithLatestFromComponent() {
        this.source1$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["interval"])(1000);
        this.source2$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["interval"])(5000);
        this.source1 = Object(_utils__WEBPACK_IMPORTED_MODULE_4__["getStreamObj"])(this.source1$, "interval(1000)", '');
        this.source2 = Object(_utils__WEBPACK_IMPORTED_MODULE_4__["getStreamObj"])(this.source2$, "interval(5000)", '');
        this.result1 = Object(_utils__WEBPACK_IMPORTED_MODULE_4__["getStreamObj"])(this.source1$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["withLatestFrom"])(this.source2$)), "interval(1000).withLatestFrom(interval(5000))", "");
        this.result2 = Object(_utils__WEBPACK_IMPORTED_MODULE_4__["getStreamObj"])(this.source2$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["withLatestFrom"])(this.source1$)), "interval(5000).withLatestFrom(interval(1000))", "");
    }
    WithLatestFromComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-with-latest-from',
            template: __webpack_require__(/*! ./with-latest-from.component.pug */ "./src/app/pages/combination/with-latest-from/with-latest-from.component.pug"),
        })
    ], WithLatestFromComponent);
    return WithLatestFromComponent;
}());



/***/ }),

/***/ "./src/app/pages/combination/zip/zip.component.pug":
/*!*********************************************************!*\
  !*** ./src/app/pages/combination/zip/zip.component.pug ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var req = __webpack_require__(/*! !./node_modules/pug-loader!./src/app/pages/combination/zip/zip.component.pug */ "./node_modules/pug-loader/index.js!./src/app/pages/combination/zip/zip.component.pug");
module.exports = (req['default'] || req).apply(req, [])

/***/ }),

/***/ "./src/app/pages/combination/zip/zip.component.ts":
/*!********************************************************!*\
  !*** ./src/app/pages/combination/zip/zip.component.ts ***!
  \********************************************************/
/*! exports provided: ZipComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ZipComponent", function() { return ZipComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../utils */ "./src/app/pages/utils.ts");





var ZipComponent = /** @class */ (function () {
    function ZipComponent() {
        this.source1$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])('Hello');
        this.source2$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])('World!').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["delay"])(1000));
        this.source3$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])('Goodbye').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["delay"])(3000));
        this.source4$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])('Past').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["delay"])(4000));
        this.source1 = Object(_utils__WEBPACK_IMPORTED_MODULE_4__["getStreamObj"])(this.source1$, "of('Hello')", '');
        this.source2 = Object(_utils__WEBPACK_IMPORTED_MODULE_4__["getStreamObj"])(this.source2$, "of('World!')", '');
        this.source3 = Object(_utils__WEBPACK_IMPORTED_MODULE_4__["getStreamObj"])(this.source3$, "of('Goodbye')", '');
        this.source4 = Object(_utils__WEBPACK_IMPORTED_MODULE_4__["getStreamObj"])(this.source4$, "of('Past')", '');
        this.result1 = Object(_utils__WEBPACK_IMPORTED_MODULE_4__["getStreamObj"])(Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["zip"])(this.source1$, this.source2$, this.source3$, this.source4$), "zip(of('Hello'), of('World!'), of('Goodbye'), of('Past'))", "");
        this.result2 = Object(_utils__WEBPACK_IMPORTED_MODULE_4__["getStreamObj"])(this.source2$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["withLatestFrom"])(this.source1$)), "interval(5000).withLatestFrom(interval(1000))", "");
    }
    ZipComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-zip',
            template: __webpack_require__(/*! ./zip.component.pug */ "./src/app/pages/combination/zip/zip.component.pug"),
        })
    ], ZipComponent);
    return ZipComponent;
}());



/***/ }),

/***/ "./src/app/pages/conditional/conditional.routing.ts":
/*!**********************************************************!*\
  !*** ./src/app/pages/conditional/conditional.routing.ts ***!
  \**********************************************************/
/*! exports provided: conditionalPagesRoutes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "conditionalPagesRoutes", function() { return conditionalPagesRoutes; });
/* harmony import */ var _default_If_empty_default_if_empty_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./default-If-empty/default-if-empty.component */ "./src/app/pages/conditional/default-If-empty/default-if-empty.component.ts");
/* harmony import */ var _every_every_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./every/every.component */ "./src/app/pages/conditional/every/every.component.ts");
/* harmony import */ var _iif_iif_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./iif/iif.component */ "./src/app/pages/conditional/iif/iif.component.ts");
/* harmony import */ var _sequnce_equal_sequnce_equal_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./sequnce-equal/sequnce-equal.component */ "./src/app/pages/conditional/sequnce-equal/sequnce-equal.component.ts");




var conditionalPagesRoutes = [
    { path: 'default-if-empty', component: _default_If_empty_default_if_empty_component__WEBPACK_IMPORTED_MODULE_0__["DefaultIfEmptyComponent"] },
    { path: 'every', component: _every_every_component__WEBPACK_IMPORTED_MODULE_1__["EveryComponent"] },
    { path: 'iif', component: _iif_iif_component__WEBPACK_IMPORTED_MODULE_2__["IifComponent"] },
    { path: 'sequnce-equal', component: _sequnce_equal_sequnce_equal_component__WEBPACK_IMPORTED_MODULE_3__["SequnceEqualComponent"] },
];


/***/ }),

/***/ "./src/app/pages/conditional/default-If-empty/default-if-empty.component.pug":
/*!***********************************************************************************!*\
  !*** ./src/app/pages/conditional/default-If-empty/default-if-empty.component.pug ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var req = __webpack_require__(/*! !./node_modules/pug-loader!./src/app/pages/conditional/default-If-empty/default-if-empty.component.pug */ "./node_modules/pug-loader/index.js!./src/app/pages/conditional/default-If-empty/default-if-empty.component.pug");
module.exports = (req['default'] || req).apply(req, [])

/***/ }),

/***/ "./src/app/pages/conditional/default-If-empty/default-if-empty.component.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/pages/conditional/default-If-empty/default-if-empty.component.ts ***!
  \**********************************************************************************/
/*! exports provided: DefaultIfEmptyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DefaultIfEmptyComponent", function() { return DefaultIfEmptyComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../utils */ "./src/app/pages/utils.ts");





var DefaultIfEmptyComponent = /** @class */ (function () {
    function DefaultIfEmptyComponent() {
        this.emptyStream$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["empty"])();
        this.defaultIfEmpty$ = this.emptyStream$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["defaultIfEmpty"])('Observable.empty()!'));
        this.source = Object(_utils__WEBPACK_IMPORTED_MODULE_4__["getStreamObj"])(this.emptyStream$, 'empty()', 'Empty stream');
        this.result = Object(_utils__WEBPACK_IMPORTED_MODULE_4__["getStreamObj"])(this.defaultIfEmpty$, 'empty().pipe(defaultIfEmpty("Observable.empty()!))"', 'Empty stream');
    }
    DefaultIfEmptyComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-default-if-empty',
            template: __webpack_require__(/*! ./default-if-empty.component.pug */ "./src/app/pages/conditional/default-If-empty/default-if-empty.component.pug"),
        })
    ], DefaultIfEmptyComponent);
    return DefaultIfEmptyComponent;
}());



/***/ }),

/***/ "./src/app/pages/conditional/every/every.component.pug":
/*!*************************************************************!*\
  !*** ./src/app/pages/conditional/every/every.component.pug ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var req = __webpack_require__(/*! !./node_modules/pug-loader!./src/app/pages/conditional/every/every.component.pug */ "./node_modules/pug-loader/index.js!./src/app/pages/conditional/every/every.component.pug");
module.exports = (req['default'] || req).apply(req, [])

/***/ }),

/***/ "./src/app/pages/conditional/every/every.component.ts":
/*!************************************************************!*\
  !*** ./src/app/pages/conditional/every/every.component.ts ***!
  \************************************************************/
/*! exports provided: EveryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EveryComponent", function() { return EveryComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../utils */ "./src/app/pages/utils.ts");





var EveryComponent = /** @class */ (function () {
    function EveryComponent() {
        this.source1$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(1, 2, 3, 4, 5);
        this.everyEven1$ = this.source1$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["every"])(function (val) { return val % 2 === 0; }));
        this.source1 = Object(_utils__WEBPACK_IMPORTED_MODULE_4__["getStreamObj"])(this.source1$, 'of(1, 2, 3, 4, 5)', 'stream of 1, 2, 3, 4, 5');
        this.result1 = Object(_utils__WEBPACK_IMPORTED_MODULE_4__["getStreamObj"])(this.everyEven1$, 'every(val => val % 2 === 0)', 'is every value even?');
        this.source2$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(2, 4, 6, 8, 10);
        this.everyEven2$ = this.source2$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["every"])(function (val) { return val % 2 === 0; }));
        this.source2 = Object(_utils__WEBPACK_IMPORTED_MODULE_4__["getStreamObj"])(this.source2$, 'of(2, 4, 6, 8, 10)', 'stream of 2, 4, 6, 8, 10');
        this.result2 = Object(_utils__WEBPACK_IMPORTED_MODULE_4__["getStreamObj"])(this.everyEven2$, 'every(val => val % 2 === 0)', 'is every value even?');
        this.source3$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["concat"])(this.fakeRequest$(1), this.fakeRequest$('invalid payload'), this.fakeRequest$(2) // this won't execute as every will return false for previous line
        );
        this.everyEven3$ = this.source3$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["every"])(function (e) { return e.code === 200; }));
        this.source3 = Object(_utils__WEBPACK_IMPORTED_MODULE_4__["getStreamObj"])(this.source3$, "concat(\n    this.fakeRequest$(1),\n    this.fakeRequest$('invalid payload'),\n    this.fakeRequest$(2) // this won't execute as every will return false for previous line\n  )", 'stream of request');
        this.result3 = Object(_utils__WEBPACK_IMPORTED_MODULE_4__["getStreamObj"])(this.everyEven3$, 'every(e => e.code === 200)', 'every request succefull');
    }
    EveryComponent.prototype.returnCode = function (request) {
        return Number.isInteger(request)
            ? 200
            : 400;
    };
    EveryComponent.prototype.fakeRequest$ = function (request) {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])({ code: this.returnCode(request) })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (_) { return console.log(request); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["delay"])(1000));
    };
    EveryComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-every',
            template: __webpack_require__(/*! ./every.component.pug */ "./src/app/pages/conditional/every/every.component.pug"),
        })
    ], EveryComponent);
    return EveryComponent;
}());



/***/ }),

/***/ "./src/app/pages/conditional/iif/iif.component.pug":
/*!*********************************************************!*\
  !*** ./src/app/pages/conditional/iif/iif.component.pug ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var req = __webpack_require__(/*! !./node_modules/pug-loader!./src/app/pages/conditional/iif/iif.component.pug */ "./node_modules/pug-loader/index.js!./src/app/pages/conditional/iif/iif.component.pug");
module.exports = (req['default'] || req).apply(req, [])

/***/ }),

/***/ "./src/app/pages/conditional/iif/iif.component.ts":
/*!********************************************************!*\
  !*** ./src/app/pages/conditional/iif/iif.component.ts ***!
  \********************************************************/
/*! exports provided: IifComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IifComponent", function() { return IifComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../utils */ "./src/app/pages/utils.ts");





var IifComponent = /** @class */ (function () {
    function IifComponent() {
        this.source1$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["interval"])(1000);
        this.result1$ = this.source1$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["mergeMap"])(function (v) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["iif"])(function () { return v % 4 === 0; }, Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])('R'), Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])('X'));
        }));
        this.source1 = Object(_utils__WEBPACK_IMPORTED_MODULE_4__["getStreamObj"])(this.source1$, 'interval(1000)', '');
        this.result1 = Object(_utils__WEBPACK_IMPORTED_MODULE_4__["getStreamObj"])(this.result1$, "interval(1000).pipe(mergeMap(v =>\n    iif(\n      () => v % 4 === 0,\n      of('R'),\n      of('X')\n    ))", '');
        this.source2$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["fromEvent"])(document, 'mousemove');
        this.result2$ = this.source2$
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["throttleTime"])(50), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["filter"])(function (move) { return move.clientY < 210; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (move) { return move.clientY; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["mergeMap"])(function (yCoord) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["iif"])(function () { return yCoord < 110; }, Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])("I'm saying R!!"), Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])("X's always win!!"));
        }));
        this.source2 = Object(_utils__WEBPACK_IMPORTED_MODULE_4__["getStreamObj"])(this.source2$, 'fromEvent(document, "mousemove")', '');
        this.result2 = Object(_utils__WEBPACK_IMPORTED_MODULE_4__["getStreamObj"])(this.result2$, "source2$.pipe(\n      throttleTime(50),\n      filter((move: MouseEvent) => move.clientY < 210),\n      map((move: MouseEvent) => move.clientY),\n      mergeMap(yCoord =>\n        iif(\n          () => yCoord < 110,\n          of('I'm saying R!!'),\n          of('X's always win!!')\n      ))\n    )", '');
    }
    IifComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-iif',
            template: __webpack_require__(/*! ./iif.component.pug */ "./src/app/pages/conditional/iif/iif.component.pug"),
        })
    ], IifComponent);
    return IifComponent;
}());



/***/ }),

/***/ "./src/app/pages/conditional/sequnce-equal/sequnce-equal.component.pug":
/*!*****************************************************************************!*\
  !*** ./src/app/pages/conditional/sequnce-equal/sequnce-equal.component.pug ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var req = __webpack_require__(/*! !./node_modules/pug-loader!./src/app/pages/conditional/sequnce-equal/sequnce-equal.component.pug */ "./node_modules/pug-loader/index.js!./src/app/pages/conditional/sequnce-equal/sequnce-equal.component.pug");
module.exports = (req['default'] || req).apply(req, [])

/***/ }),

/***/ "./src/app/pages/conditional/sequnce-equal/sequnce-equal.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/pages/conditional/sequnce-equal/sequnce-equal.component.ts ***!
  \****************************************************************************/
/*! exports provided: SequnceEqualComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SequnceEqualComponent", function() { return SequnceEqualComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../utils */ "./src/app/pages/utils.ts");





var SequnceEqualComponent = /** @class */ (function () {
    function SequnceEqualComponent() {
        var _this = this;
        this.source1$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(4, 5, 6);
        this.source1 = Object(_utils__WEBPACK_IMPORTED_MODULE_4__["getStreamObj"])(this.source1$, 'of(4, 5, 6)', '');
        this.source2$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])([1, 2, 3], [4, 5, 6], [7, 8, 9]);
        this.source2 = Object(_utils__WEBPACK_IMPORTED_MODULE_4__["getStreamObj"])(this.source2$, 'of([1, 2, 3], [4, 5, 6], [7, 8, 9])', '');
        this.result1$ = this.source2$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])(function (arr) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["from"])(arr).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["sequenceEqual"])(_this.source1$));
        }));
        this.source3$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["from"])([4, 5, 6]);
        this.source3 = Object(_utils__WEBPACK_IMPORTED_MODULE_4__["getStreamObj"])(this.source3$, 'from([4, 5, 6])', '');
        this.result2$ = this.source1$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["sequenceEqual"])(this.source3$));
        this.result2 = Object(_utils__WEBPACK_IMPORTED_MODULE_4__["getStreamObj"])(this.result2$, "of(4, 5, 6).pipe(sequenceEqual(from([4, 5, 6])))", '');
        this.result1 = Object(_utils__WEBPACK_IMPORTED_MODULE_4__["getStreamObj"])(this.result1$, "source2$.pipe(\n    switchMap(arr =>\n      from(arr).pipe(sequenceEqual(of(4, 5, 6))))\n  )", '');
    }
    SequnceEqualComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-sequnce-equal',
            template: __webpack_require__(/*! ./sequnce-equal.component.pug */ "./src/app/pages/conditional/sequnce-equal/sequnce-equal.component.pug"),
        })
    ], SequnceEqualComponent);
    return SequnceEqualComponent;
}());



/***/ }),

/***/ "./src/app/pages/creation/NEVER/NEVER.component.pug":
/*!**********************************************************!*\
  !*** ./src/app/pages/creation/NEVER/NEVER.component.pug ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var req = __webpack_require__(/*! !./node_modules/pug-loader!./src/app/pages/creation/NEVER/NEVER.component.pug */ "./node_modules/pug-loader/index.js!./src/app/pages/creation/NEVER/NEVER.component.pug");
module.exports = (req['default'] || req).apply(req, [])

/***/ }),

/***/ "./src/app/pages/creation/NEVER/NEVER.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/pages/creation/NEVER/NEVER.component.ts ***!
  \*********************************************************/
/*! exports provided: NEVERComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NEVERComponent", function() { return NEVERComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utils */ "./src/app/pages/utils.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");





var NEVERComponent = /** @class */ (function () {
    function NEVERComponent() {
    }
    NEVERComponent.prototype.ngOnInit = function () {
        this.createStreams();
    };
    NEVERComponent.prototype.createStreams = function () {
        this.streams = [
            Object(_utils__WEBPACK_IMPORTED_MODULE_3__["getStreamObj"])(rxjs__WEBPACK_IMPORTED_MODULE_2__["NEVER"].pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["startWith"])(7)), "NEVER.pipe(startWith(7))", "\u041F\u043E\u0442\u043E\u043A, \u043A\u043E\u0442\u043E\u0440\u044B\u0439 \u043D\u0438\u043A\u043E\u0433\u0434\u0430 \u043D\u0435 \u0437\u0430\u0432\u0435\u0440\u0448\u0430\u0435\u0442\u0441\u044F"),
        ];
    };
    NEVERComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-never',
            template: __webpack_require__(/*! ./NEVER.component.pug */ "./src/app/pages/creation/NEVER/NEVER.component.pug"),
        })
    ], NEVERComponent);
    return NEVERComponent;
}());



/***/ }),

/***/ "./src/app/pages/creation/ajax/ajax.component.pug":
/*!********************************************************!*\
  !*** ./src/app/pages/creation/ajax/ajax.component.pug ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var req = __webpack_require__(/*! !./node_modules/pug-loader!./src/app/pages/creation/ajax/ajax.component.pug */ "./node_modules/pug-loader/index.js!./src/app/pages/creation/ajax/ajax.component.pug");
module.exports = (req['default'] || req).apply(req, [])

/***/ }),

/***/ "./src/app/pages/creation/ajax/ajax.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/pages/creation/ajax/ajax.component.ts ***!
  \*******************************************************/
/*! exports provided: AjaxComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AjaxComponent", function() { return AjaxComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs_ajax__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/ajax */ "./node_modules/rxjs/_esm5/ajax/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../utils */ "./src/app/pages/utils.ts");





var AjaxComponent = /** @class */ (function () {
    function AjaxComponent() {
    }
    AjaxComponent.prototype.ngOnInit = function () {
        this.createStreams();
    };
    AjaxComponent.prototype.createStreams = function () {
        this.streams = [
            Object(_utils__WEBPACK_IMPORTED_MODULE_4__["getStreamObj"])(Object(rxjs_ajax__WEBPACK_IMPORTED_MODULE_2__["ajax"])('https://yesno.wtf/api'), "ajax('https://yesno.wtf/api')", "\u041F\u043E\u0442\u043E\u043A \u0438\u0437 \u0437\u0430\u043F\u0440\u043E\u0441\u0430"),
            Object(_utils__WEBPACK_IMPORTED_MODULE_4__["getStreamObj"])(Object(rxjs_ajax__WEBPACK_IMPORTED_MODULE_2__["ajax"])('https://yesno.wtf/api').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["pluck"])('response')), "ajax('https://yesno.wtf/api').pipe(pluck('response')", "\u041F\u043E\u0442\u043E\u043A \u0438\u0437 \u0437\u0430\u043F\u0440\u043E\u0441\u0430, \u0431\u0435\u0440\u0435\u043C \u043E\u0442\u0432\u0435\u0442"),
        ];
    };
    AjaxComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-ajax',
            template: __webpack_require__(/*! ./ajax.component.pug */ "./src/app/pages/creation/ajax/ajax.component.pug"),
        })
    ], AjaxComponent);
    return AjaxComponent;
}());



/***/ }),

/***/ "./src/app/pages/creation/create/create.component.pug":
/*!************************************************************!*\
  !*** ./src/app/pages/creation/create/create.component.pug ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var req = __webpack_require__(/*! !./node_modules/pug-loader!./src/app/pages/creation/create/create.component.pug */ "./node_modules/pug-loader/index.js!./src/app/pages/creation/create/create.component.pug");
module.exports = (req['default'] || req).apply(req, [])

/***/ }),

/***/ "./src/app/pages/creation/create/create.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/pages/creation/create/create.component.ts ***!
  \***********************************************************/
/*! exports provided: CreateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateComponent", function() { return CreateComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utils */ "./src/app/pages/utils.ts");




var CreateComponent = /** @class */ (function () {
    function CreateComponent() {
    }
    CreateComponent.prototype.ngOnInit = function () {
        this.createStreams();
    };
    CreateComponent.prototype.createStreams = function () {
        var source1$ = rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"].create(function (observer) {
            var value = 0;
            var interval = setInterval(function () {
                if (value % 2 === 0) {
                    observer.next(value);
                }
                value++;
            }, 1000);
            return function () { return clearInterval(interval); };
        });
        this.streams = [
            Object(_utils__WEBPACK_IMPORTED_MODULE_3__["getStreamObj"])(rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"].create(function (observer) {
                observer.next('Hello');
                observer.next('World');
                observer.complete();
            }), "(observer: Subject<string>) => {\n          observer.next('Hello');\n          observer.next('World');\n          observer.complete();\n        }", "\u041F\u043E\u0442\u043E\u043A \u0432\u044B\u0441\u0442\u0440\u0435\u043B\u0438\u0432\u0430\u0435\u0442 \u043D\u0435\u0441\u043A\u043E\u043B\u044C\u043A\u043E \u0437\u043D\u0430\u0447\u0435\u043D\u0438\u0439, \u0437\u0430\u0442\u0435\u043C \u0437\u0430\u0432\u0435\u0440\u0448\u0430\u0435\u0442\u0441\u044F"),
            Object(_utils__WEBPACK_IMPORTED_MODULE_3__["getStreamObj"])(rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"].create(function (observer) {
                observer.next('Bye');
                observer.next('World');
                observer.error('Error');
            }), "Observable.create((observer: Subject<string>) => {\n          observer.next('Bye');\n          observer.next('World');\n          observer.error('Error');\n        }", "\u041F\u043E\u0442\u043E\u043A \u0432\u044B\u0441\u0442\u0440\u0435\u043B\u0438\u0432\u0430\u0435\u0442 \u043D\u0435\u0441\u043A\u043E\u043B\u044C\u043A\u043E \u0437\u043D\u0430\u0447\u0435\u043D\u0438\u0439, \u0437\u0430\u0442\u0435\u043C \u0437\u0430\u0432\u0435\u0440\u0448\u0430\u0435\u0442\u0441\u044F \u043E\u0448\u0438\u0431\u043A\u043E\u0439"),
            Object(_utils__WEBPACK_IMPORTED_MODULE_3__["getStreamObj"])(source1$, "Observable.create((observer: Subject<number>) => {\n          let value = 0;\n          const interval = setInterval(() => {\n            if (value % 2 === 0) {\n              observer.next(value);\n            }\n            value++;\n          }, 1000);\n          return () => clearInterval(interval);\n        }", "\u041F\u043E\u0442\u043E\u043A \u0441\u0442\u0440\u0435\u043B\u044F\u0435\u0442 \u0437\u043D\u0430\u0447\u0435\u043D\u0438\u044F\u043C\u0438, \u0441 \u0437\u0430\u0434\u0430\u043D\u043D\u044B\u043C \u043F\u0440\u043E\u043C\u0435\u0436\u0443\u0442\u043A\u043E\u043C"),
        ];
    };
    CreateComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-create',
            template: __webpack_require__(/*! ./create.component.pug */ "./src/app/pages/creation/create/create.component.pug"),
        })
    ], CreateComponent);
    return CreateComponent;
}());



/***/ }),

/***/ "./src/app/pages/creation/creation.routing.ts":
/*!****************************************************!*\
  !*** ./src/app/pages/creation/creation.routing.ts ***!
  \****************************************************/
/*! exports provided: creationPagesRoutes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "creationPagesRoutes", function() { return creationPagesRoutes; });
/* harmony import */ var _create_create_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./create/create.component */ "./src/app/pages/creation/create/create.component.ts");
/* harmony import */ var _interval_interval_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./interval/interval.component */ "./src/app/pages/creation/interval/interval.component.ts");
/* harmony import */ var _from_from_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./from/from.component */ "./src/app/pages/creation/from/from.component.ts");
/* harmony import */ var _from_event_from_event_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./from-event/from-event.component */ "./src/app/pages/creation/from-event/from-event.component.ts");
/* harmony import */ var _of_of_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./of/of.component */ "./src/app/pages/creation/of/of.component.ts");
/* harmony import */ var _timer_timer_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./timer/timer.component */ "./src/app/pages/creation/timer/timer.component.ts");
/* harmony import */ var _defer_defer_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./defer/defer.component */ "./src/app/pages/creation/defer/defer.component.ts");
/* harmony import */ var _empty_empty_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./empty/empty.component */ "./src/app/pages/creation/empty/empty.component.ts");
/* harmony import */ var _range_range_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./range/range.component */ "./src/app/pages/creation/range/range.component.ts");
/* harmony import */ var _ajax_ajax_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./ajax/ajax.component */ "./src/app/pages/creation/ajax/ajax.component.ts");
/* harmony import */ var _generate_generate_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./generate/generate.component */ "./src/app/pages/creation/generate/generate.component.ts");
/* harmony import */ var _throw_error_throw_error_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./throw-error/throw-error.component */ "./src/app/pages/creation/throw-error/throw-error.component.ts");
/* harmony import */ var _NEVER_NEVER_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./NEVER/NEVER.component */ "./src/app/pages/creation/NEVER/NEVER.component.ts");













var creationPagesRoutes = [
    { path: 'interval', component: _interval_interval_component__WEBPACK_IMPORTED_MODULE_1__["IntervalComponent"] },
    { path: 'from', component: _from_from_component__WEBPACK_IMPORTED_MODULE_2__["FromComponent"] },
    { path: 'from-event', component: _from_event_from_event_component__WEBPACK_IMPORTED_MODULE_3__["FromEventComponent"] },
    { path: 'of', component: _of_of_component__WEBPACK_IMPORTED_MODULE_4__["OfComponent"] },
    { path: 'timer', component: _timer_timer_component__WEBPACK_IMPORTED_MODULE_5__["TimerComponent"] },
    { path: 'create', component: _create_create_component__WEBPACK_IMPORTED_MODULE_0__["CreateComponent"] },
    { path: 'defer', component: _defer_defer_component__WEBPACK_IMPORTED_MODULE_6__["DeferComponent"] },
    { path: 'empty', component: _empty_empty_component__WEBPACK_IMPORTED_MODULE_7__["EmptyComponent"] },
    { path: 'range', component: _range_range_component__WEBPACK_IMPORTED_MODULE_8__["RangeComponent"] },
    { path: 'ajax', component: _ajax_ajax_component__WEBPACK_IMPORTED_MODULE_9__["AjaxComponent"] },
    { path: 'generate', component: _generate_generate_component__WEBPACK_IMPORTED_MODULE_10__["GenerateComponent"] },
    { path: 'throw-error', component: _throw_error_throw_error_component__WEBPACK_IMPORTED_MODULE_11__["ThrowErrorComponent"] },
    { path: 'NEVER', component: _NEVER_NEVER_component__WEBPACK_IMPORTED_MODULE_12__["NEVERComponent"] },
];


/***/ }),

/***/ "./src/app/pages/creation/defer/defer.component.pug":
/*!**********************************************************!*\
  !*** ./src/app/pages/creation/defer/defer.component.pug ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var req = __webpack_require__(/*! !./node_modules/pug-loader!./src/app/pages/creation/defer/defer.component.pug */ "./node_modules/pug-loader/index.js!./src/app/pages/creation/defer/defer.component.pug");
module.exports = (req['default'] || req).apply(req, [])

/***/ }),

/***/ "./src/app/pages/creation/defer/defer.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/pages/creation/defer/defer.component.ts ***!
  \*********************************************************/
/*! exports provided: DeferComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeferComponent", function() { return DeferComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utils */ "./src/app/pages/utils.ts");




var DeferComponent = /** @class */ (function () {
    function DeferComponent() {
    }
    DeferComponent.prototype.ngOnInit = function () {
        this.createStreams();
    };
    DeferComponent.prototype.createStreams = function () {
        this.streams = [
            Object(_utils__WEBPACK_IMPORTED_MODULE_3__["getStreamObj"])(Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["defer"])(function () { return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(new Date()); }), "defer(() => of(new Date()))", "\u041F\u043E\u0442\u043E\u043A \u0438\u0437 of(new Date())"),
        ];
    };
    DeferComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-defer',
            template: __webpack_require__(/*! ./defer.component.pug */ "./src/app/pages/creation/defer/defer.component.pug"),
        })
    ], DeferComponent);
    return DeferComponent;
}());



/***/ }),

/***/ "./src/app/pages/creation/empty/empty.component.pug":
/*!**********************************************************!*\
  !*** ./src/app/pages/creation/empty/empty.component.pug ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var req = __webpack_require__(/*! !./node_modules/pug-loader!./src/app/pages/creation/empty/empty.component.pug */ "./node_modules/pug-loader/index.js!./src/app/pages/creation/empty/empty.component.pug");
module.exports = (req['default'] || req).apply(req, [])

/***/ }),

/***/ "./src/app/pages/creation/empty/empty.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/pages/creation/empty/empty.component.ts ***!
  \*********************************************************/
/*! exports provided: EmptyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmptyComponent", function() { return EmptyComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../utils */ "./src/app/pages/utils.ts");





var EmptyComponent = /** @class */ (function () {
    function EmptyComponent() {
    }
    EmptyComponent.prototype.ngOnInit = function () {
        this.createStreams();
    };
    EmptyComponent.prototype.createStreams = function () {
        this.streams = [
            Object(_utils__WEBPACK_IMPORTED_MODULE_4__["getStreamObj"])(Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["empty"])(), "empty()", "\u041F\u043E\u0442\u043E\u043A, \u043A\u043E\u0442\u043E\u0440\u044B\u0439 \u0441\u0440\u0430\u0437\u0443 \u0436\u0435 \u0437\u0430\u0432\u0435\u0440\u0448\u0430\u0435\u0442\u0441\u044F"),
            Object(_utils__WEBPACK_IMPORTED_MODULE_4__["getStreamObj"])(Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["empty"])().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["startWith"])(7)), "empty().pipe(startWith(7)", "\u041F\u043E\u0442\u043E\u043A, \u043A\u043E\u0442\u043E\u0440\u044B\u0439 \u0432\u044B\u0441\u0442\u0440\u043E\u0435\u043B\u0438\u0432\u0430\u0435\u0442 \u043D\u0430\u0447\u0430\u043B\u044C\u043D\u044B\u043C \u0437\u043D\u0430\u0447\u0435\u043D\u0438\u0435\u043C \u0438 \u0441\u0440\u0430\u0437\u0443 \u0436\u0435 \u0437\u0430\u0432\u0435\u0440\u0448\u0430\u0435\u0442\u0441\u044F"),
        ];
    };
    EmptyComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-empty',
            template: __webpack_require__(/*! ./empty.component.pug */ "./src/app/pages/creation/empty/empty.component.pug"),
        })
    ], EmptyComponent);
    return EmptyComponent;
}());



/***/ }),

/***/ "./src/app/pages/creation/from-event/from-event.component.pug":
/*!********************************************************************!*\
  !*** ./src/app/pages/creation/from-event/from-event.component.pug ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var req = __webpack_require__(/*! !./node_modules/pug-loader!./src/app/pages/creation/from-event/from-event.component.pug */ "./node_modules/pug-loader/index.js!./src/app/pages/creation/from-event/from-event.component.pug");
module.exports = (req['default'] || req).apply(req, [])

/***/ }),

/***/ "./src/app/pages/creation/from-event/from-event.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/pages/creation/from-event/from-event.component.ts ***!
  \*******************************************************************/
/*! exports provided: FromEventComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FromEventComponent", function() { return FromEventComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utils */ "./src/app/pages/utils.ts");




var FromEventComponent = /** @class */ (function () {
    function FromEventComponent() {
    }
    FromEventComponent.prototype.ngOnInit = function () {
        this.createStreams();
    };
    FromEventComponent.prototype.createStreams = function () {
        this.streams = [
            Object(_utils__WEBPACK_IMPORTED_MODULE_3__["getStreamObj"])(Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["fromEvent"])(document, 'click'), "fromEvent(document, \"click\")", "\u041F\u043E\u0442\u043E\u043A \u0438\u0437 \u0432\u0441\u0435\u0445 \u043A\u043B\u0438\u043A\u043E\u0432 \u043D\u0430 \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u0435"),
            Object(_utils__WEBPACK_IMPORTED_MODULE_3__["getStreamObj"])(Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["fromEvent"])(this.button.nativeElement, 'click'), "fromEvent(this.button.nativeElement, \"click\")", "\u041F\u043E\u0442\u043E\u043A \u0438\u0437 \u043A\u043B\u0438\u043A\u043E\u0432 \u043F\u043E \u043A\u043D\u043E\u043F\u043A\u0435"),
        ];
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('button'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], FromEventComponent.prototype, "button", void 0);
    FromEventComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-from-event',
            template: __webpack_require__(/*! ./from-event.component.pug */ "./src/app/pages/creation/from-event/from-event.component.pug"),
        })
    ], FromEventComponent);
    return FromEventComponent;
}());



/***/ }),

/***/ "./src/app/pages/creation/from/from.component.pug":
/*!********************************************************!*\
  !*** ./src/app/pages/creation/from/from.component.pug ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var req = __webpack_require__(/*! !./node_modules/pug-loader!./src/app/pages/creation/from/from.component.pug */ "./node_modules/pug-loader/index.js!./src/app/pages/creation/from/from.component.pug");
module.exports = (req['default'] || req).apply(req, [])

/***/ }),

/***/ "./src/app/pages/creation/from/from.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/pages/creation/from/from.component.ts ***!
  \*******************************************************/
/*! exports provided: FromComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FromComponent", function() { return FromComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utils */ "./src/app/pages/utils.ts");




var FromComponent = /** @class */ (function () {
    function FromComponent() {
    }
    FromComponent.prototype.ngOnInit = function () {
        this.createStreams();
    };
    FromComponent.prototype.createStreams = function () {
        var source1 = new Map();
        source1.set(1, 'Hi');
        source1.set(2, 'Bye');
        this.streams = [
            Object(_utils__WEBPACK_IMPORTED_MODULE_3__["getStreamObj"])(Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["from"])([1, 2, 3, 4, 5, 6, 7, 8, 9]), "from([1, 2, 3, 4, 5, 6, 7, 8, 9])", "from \u0438\u0437 \u043C\u0430\u0441\u0441\u0438\u0432\u0430"),
            Object(_utils__WEBPACK_IMPORTED_MODULE_3__["getStreamObj"])(Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["from"])(new Promise(function (resolve, reject) {
                setTimeout(function () {
                    resolve(1);
                }, 2000);
            })), "from(new Promise((resolve, reject) => {\n          setTimeout(() => {\n            resolve(1);\n          }, 2000);\n        }))", "\u0441\u043E\u0437\u0434\u0430\u043D\u0438\u0435 \u043F\u043E\u0442\u043E\u043A\u0430 \u0441 \u043F\u043E\u043C\u043E\u0449\u044C\u044E from \u0438\u0437 \u043F\u0440\u043E\u043C\u0438\u0441\u0430"),
            Object(_utils__WEBPACK_IMPORTED_MODULE_3__["getStreamObj"])(Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["from"])(new Promise(function (resolve, reject) {
                setTimeout(function () {
                    reject(1);
                }, 3000);
            })), "from(new Promise((resolve, reject) => {\n          setTimeout(() => {\n            reject(1);\n          }, 3000);\n        }))", 'создание потока с помощью from из промиса (reject)'),
            Object(_utils__WEBPACK_IMPORTED_MODULE_3__["getStreamObj"])(Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["from"])(source1), " const map = new Map();\n          map.set(1, 'Hi');\n          map.set(2, 'Bye');\n          from(map)", 'создание потока с помощью from из Map()'),
            Object(_utils__WEBPACK_IMPORTED_MODULE_3__["getStreamObj"])(Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["from"])('Hello World'), "from('Hello World')", 'создание потока с помощью from из строки'),
            Object(_utils__WEBPACK_IMPORTED_MODULE_3__["getStreamObj"])(Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["from"])(Object(_utils__WEBPACK_IMPORTED_MODULE_3__["generateDoubles"])(3)), "function* generateDoubles(seed) {\n          let i = seed;\n          while (i < 1000) {\n            yield i;\n            i = 2 * i; // double it\n          }\n        }\n\n        const iterator = generateDoubles(3);\n        const result = from(iterator);\n\n        ", 'создание потока с помощью from из iterable (from a generator)'),
        ];
    };
    FromComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-from',
            template: __webpack_require__(/*! ./from.component.pug */ "./src/app/pages/creation/from/from.component.pug"),
        })
    ], FromComponent);
    return FromComponent;
}());



/***/ }),

/***/ "./src/app/pages/creation/generate/generate.component.pug":
/*!****************************************************************!*\
  !*** ./src/app/pages/creation/generate/generate.component.pug ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var req = __webpack_require__(/*! !./node_modules/pug-loader!./src/app/pages/creation/generate/generate.component.pug */ "./node_modules/pug-loader/index.js!./src/app/pages/creation/generate/generate.component.pug");
module.exports = (req['default'] || req).apply(req, [])

/***/ }),

/***/ "./src/app/pages/creation/generate/generate.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/pages/creation/generate/generate.component.ts ***!
  \***************************************************************/
/*! exports provided: GenerateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GenerateComponent", function() { return GenerateComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utils */ "./src/app/pages/utils.ts");




var GenerateComponent = /** @class */ (function () {
    function GenerateComponent() {
    }
    GenerateComponent.prototype.ngOnInit = function () {
        this.createStreams();
    };
    GenerateComponent.prototype.createStreams = function () {
        this.streams = [
            Object(_utils__WEBPACK_IMPORTED_MODULE_3__["getStreamObj"])(Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["generate"])(2, function (x) { return x <= 8; }, function (x) { return x + 3; }), "generate(2, x => x <= 8, x => x + 3)", "\u043F\u043E\u0442\u043E\u043A \u0438\u0437 \u0446\u0438\u043A\u043B\u0430"),
            Object(_utils__WEBPACK_IMPORTED_MODULE_3__["getStreamObj"])(Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["generate"])(200, function (x) { return x > 123; }, function (x) { return x - 13; }), "generate(200, x => x > 123, x => x - 13)", "\u043F\u043E\u0442\u043E\u043A \u0438\u0437 \u0446\u0438\u043A\u043B\u0430"),
            Object(_utils__WEBPACK_IMPORTED_MODULE_3__["getStreamObj"])(Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["generate"])(2, function (x) { return x <= 18; }, function (x) { return x + 2; }, function (x) { return '.'.repeat(x); }), "generate(2, x => x <= 18, x => x + 2, x => '.'.repeat(x))", "\u043F\u043E\u0442\u043E\u043A \u0438\u0437 \u0446\u0438\u043A\u043B\u0430, \u0441 \u0444\u0443\u043D\u043A\u0446\u0438\u0435\u0439 \u0440\u0435\u0437\u0443\u043B\u044C\u0442\u0430\u0442\u0430"),
        ];
    };
    GenerateComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-generate',
            template: __webpack_require__(/*! ./generate.component.pug */ "./src/app/pages/creation/generate/generate.component.pug"),
        })
    ], GenerateComponent);
    return GenerateComponent;
}());



/***/ }),

/***/ "./src/app/pages/creation/interval/interval.component.pug":
/*!****************************************************************!*\
  !*** ./src/app/pages/creation/interval/interval.component.pug ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var req = __webpack_require__(/*! !./node_modules/pug-loader!./src/app/pages/creation/interval/interval.component.pug */ "./node_modules/pug-loader/index.js!./src/app/pages/creation/interval/interval.component.pug");
module.exports = (req['default'] || req).apply(req, [])

/***/ }),

/***/ "./src/app/pages/creation/interval/interval.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/pages/creation/interval/interval.component.ts ***!
  \***************************************************************/
/*! exports provided: IntervalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IntervalComponent", function() { return IntervalComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utils */ "./src/app/pages/utils.ts");




var IntervalComponent = /** @class */ (function () {
    function IntervalComponent() {
    }
    IntervalComponent.prototype.ngOnInit = function () {
        this.createStreams();
    };
    IntervalComponent.prototype.createStreams = function () {
        this.streams = [
            Object(_utils__WEBPACK_IMPORTED_MODULE_3__["getStreamObj"])(Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["interval"])(1000), "interval(1000)", "\u0421\u0442\u0440\u0435\u043B\u044F\u0435\u0442 \u0440\u0430\u0437 \u0432 \u0441\u0435\u043A\u0443\u043D\u0434\u0443"),
            Object(_utils__WEBPACK_IMPORTED_MODULE_3__["getStreamObj"])(Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["interval"])(2000), "interval(2000)", "\u0421\u0442\u0440\u0435\u043B\u044F\u0435\u0442 \u0440\u0430\u0437 \u0432 2 \u0441\u0435\u043A\u0443\u043D\u0434\u044B"),
            Object(_utils__WEBPACK_IMPORTED_MODULE_3__["getStreamObj"])(Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["interval"])(3000), "interval(3000)", "\u0421\u0442\u0440\u0435\u043B\u044F\u0435\u0442 \u0440\u0430\u0437 \u0432 3 \u0441\u0435\u043A\u0443\u043D\u0434\u044B"),
            Object(_utils__WEBPACK_IMPORTED_MODULE_3__["getStreamObj"])(Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["interval"])(4000), "interval(4000)", "\u0421\u0442\u0440\u0435\u043B\u044F\u0435\u0442 \u0440\u0430\u0437 \u0432 4 \u0441\u0435\u043A\u0443\u043D\u0434\u044B"),
            Object(_utils__WEBPACK_IMPORTED_MODULE_3__["getStreamObj"])(Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["interval"])(5000), "interval(5000)", "\u0421\u0442\u0440\u0435\u043B\u044F\u0435\u0442 \u0440\u0430\u0437 \u0432 5 \u0441\u0435\u043A\u0443\u043D\u0434\u044B"),
        ];
    };
    IntervalComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-interval',
            template: __webpack_require__(/*! ./interval.component.pug */ "./src/app/pages/creation/interval/interval.component.pug"),
        })
    ], IntervalComponent);
    return IntervalComponent;
}());



/***/ }),

/***/ "./src/app/pages/creation/of/of.component.pug":
/*!****************************************************!*\
  !*** ./src/app/pages/creation/of/of.component.pug ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var req = __webpack_require__(/*! !./node_modules/pug-loader!./src/app/pages/creation/of/of.component.pug */ "./node_modules/pug-loader/index.js!./src/app/pages/creation/of/of.component.pug");
module.exports = (req['default'] || req).apply(req, [])

/***/ }),

/***/ "./src/app/pages/creation/of/of.component.ts":
/*!***************************************************!*\
  !*** ./src/app/pages/creation/of/of.component.ts ***!
  \***************************************************/
/*! exports provided: OfComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OfComponent", function() { return OfComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utils */ "./src/app/pages/utils.ts");




var OfComponent = /** @class */ (function () {
    function OfComponent() {
    }
    OfComponent.prototype.ngOnInit = function () {
        this.createStreams();
    };
    OfComponent.prototype.createStreams = function () {
        this.streams = [
            Object(_utils__WEBPACK_IMPORTED_MODULE_3__["getStreamObj"])(Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(1, 2, 3, 4, 5, 6, 7, 8, 9), "of(1, 2, 3, 4, 5, 6, 7, 8, 9)", "\u041F\u043E\u0442\u043E\u043A \u0438\u0437 \u043F\u043E\u0441\u043B\u0435\u0434\u043E\u0432\u0430\u0442\u0435\u043B\u044C\u043D\u043E\u0441\u0442\u0438 \u0447\u0438\u0441\u0435\u043B"),
            Object(_utils__WEBPACK_IMPORTED_MODULE_3__["getStreamObj"])(Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])({ name: 'Brian', type: 'Dog', sound: 'bark' }, [1, 2, 3], function hello() { return 'Hello'; }), "of({ name: \"Brian\" }, [1, 2, 3], function hello() { return \"Hello\"; })", "\u041F\u043E\u0442\u043E\u043A \u0438\u0437 \u043F\u0435\u0440\u0435\u0447\u043D\u044F \u0440\u0430\u0437\u043D\u043E\u0442\u0438\u043F\u043D\u044B\u0445 \u043E\u0431\u044A\u0435\u043A\u0442\u043E\u0432"),
            Object(_utils__WEBPACK_IMPORTED_MODULE_3__["getStreamObj"])(Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])([1, 2, 3, 4, 5, 6, 7, 8, 9]), "of([1, 2, 3, 4, 5, 6, 7, 8, 9])", "\u041F\u043E\u0442\u043E\u043A \u0438\u0437 \u043C\u0430\u0441\u0441\u0438\u0432\u0430"),
        ];
    };
    OfComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-of',
            template: __webpack_require__(/*! ./of.component.pug */ "./src/app/pages/creation/of/of.component.pug"),
        })
    ], OfComponent);
    return OfComponent;
}());



/***/ }),

/***/ "./src/app/pages/creation/range/range.component.pug":
/*!**********************************************************!*\
  !*** ./src/app/pages/creation/range/range.component.pug ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var req = __webpack_require__(/*! !./node_modules/pug-loader!./src/app/pages/creation/range/range.component.pug */ "./node_modules/pug-loader/index.js!./src/app/pages/creation/range/range.component.pug");
module.exports = (req['default'] || req).apply(req, [])

/***/ }),

/***/ "./src/app/pages/creation/range/range.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/pages/creation/range/range.component.ts ***!
  \*********************************************************/
/*! exports provided: RangeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RangeComponent", function() { return RangeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utils */ "./src/app/pages/utils.ts");




var RangeComponent = /** @class */ (function () {
    function RangeComponent() {
    }
    RangeComponent.prototype.ngOnInit = function () {
        this.createStreams();
    };
    RangeComponent.prototype.createStreams = function () {
        this.streams = [
            Object(_utils__WEBPACK_IMPORTED_MODULE_3__["getStreamObj"])(Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["range"])(5, 20), "range(5, 20)", "\u041F\u043E\u0442\u043E\u043A \u0438\u0437 \u043F\u043E\u0441\u043B\u0435\u0434\u043E\u0432\u0430\u0442\u0435\u043B\u044C\u043D\u043E\u0441\u0442\u0438 5-24"),
            Object(_utils__WEBPACK_IMPORTED_MODULE_3__["getStreamObj"])(Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["range"])(1, 10), "range(1, 10)", "\u041F\u043E\u0442\u043E\u043A \u0438\u0437 \u043F\u043E\u0441\u043B\u0435\u0434\u043E\u0432\u0430\u0442\u0435\u043B\u044C\u043D\u043E\u0441\u0442\u0438 1-10"),
        ];
    };
    RangeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-range',
            template: __webpack_require__(/*! ./range.component.pug */ "./src/app/pages/creation/range/range.component.pug"),
        })
    ], RangeComponent);
    return RangeComponent;
}());



/***/ }),

/***/ "./src/app/pages/creation/throw-error/throw-error.component.pug":
/*!**********************************************************************!*\
  !*** ./src/app/pages/creation/throw-error/throw-error.component.pug ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var req = __webpack_require__(/*! !./node_modules/pug-loader!./src/app/pages/creation/throw-error/throw-error.component.pug */ "./node_modules/pug-loader/index.js!./src/app/pages/creation/throw-error/throw-error.component.pug");
module.exports = (req['default'] || req).apply(req, [])

/***/ }),

/***/ "./src/app/pages/creation/throw-error/throw-error.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/pages/creation/throw-error/throw-error.component.ts ***!
  \*********************************************************************/
/*! exports provided: ThrowErrorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ThrowErrorComponent", function() { return ThrowErrorComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utils */ "./src/app/pages/utils.ts");




var ThrowErrorComponent = /** @class */ (function () {
    function ThrowErrorComponent() {
    }
    ThrowErrorComponent.prototype.ngOnInit = function () {
        this.createStreams();
    };
    ThrowErrorComponent.prototype.createStreams = function () {
        this.streams = [
            Object(_utils__WEBPACK_IMPORTED_MODULE_3__["getStreamObj"])(Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])('Ошибка'), "throwError('\u041E\u0448\u0438\u0431\u043A\u0430')", "\u041F\u043E\u0442\u043E\u043A \u0441\u0440\u0430\u0437\u0443 \u0436\u0435 \u0441\u0442\u0440\u0435\u043B\u044F\u0435\u0442 \u043E\u0448\u0438\u0431\u043A\u043E\u0439"),
        ];
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('button'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], ThrowErrorComponent.prototype, "button", void 0);
    ThrowErrorComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-throw-error',
            template: __webpack_require__(/*! ./throw-error.component.pug */ "./src/app/pages/creation/throw-error/throw-error.component.pug"),
        })
    ], ThrowErrorComponent);
    return ThrowErrorComponent;
}());



/***/ }),

/***/ "./src/app/pages/creation/timer/timer.component.pug":
/*!**********************************************************!*\
  !*** ./src/app/pages/creation/timer/timer.component.pug ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var req = __webpack_require__(/*! !./node_modules/pug-loader!./src/app/pages/creation/timer/timer.component.pug */ "./node_modules/pug-loader/index.js!./src/app/pages/creation/timer/timer.component.pug");
module.exports = (req['default'] || req).apply(req, [])

/***/ }),

/***/ "./src/app/pages/creation/timer/timer.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/pages/creation/timer/timer.component.ts ***!
  \*********************************************************/
/*! exports provided: TimerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TimerComponent", function() { return TimerComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utils */ "./src/app/pages/utils.ts");




var TimerComponent = /** @class */ (function () {
    function TimerComponent() {
    }
    TimerComponent.prototype.ngOnInit = function () {
        this.createStreams();
    };
    TimerComponent.prototype.createStreams = function () {
        this.streams = [
            Object(_utils__WEBPACK_IMPORTED_MODULE_3__["getStreamObj"])(Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["timer"])(2000), "timer(2000)", "\u0422\u0430\u0439\u043C\u0435\u0440 c\u0442\u0440\u0435\u043B\u044F\u0435\u0442 \u0447\u0435\u0440\u0435\u0437 2 \u0441\u0435\u043A\u0443\u043D\u0434\u044B, \u0437\u0430\u0442\u0435\u043C \u0437\u0430\u0432\u0435\u0440\u0448\u0430\u0435\u0442\u0441\u044F"),
            Object(_utils__WEBPACK_IMPORTED_MODULE_3__["getStreamObj"])(Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["timer"])(1000, 2000), "timer(1000, 2000)", "\u0422\u0430\u0439\u043C\u0435\u0440 c\u0442\u0440\u0435\u043B\u044F\u0435\u0442 \u0447\u0435\u0440\u0435\u0437 \u0441\u0435\u043A\u0443\u043D\u0434\u0443, \u0437\u0430\u0442\u0435\u043C \u0440\u0430\u0437 \u0432 \u0434\u0432\u0435 \u0441\u0435\u043A\u0443\u043D\u0434\u044B"),
            Object(_utils__WEBPACK_IMPORTED_MODULE_3__["getStreamObj"])(Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["timer"])(2000, 1000), "timer(2000, 1000)", "\u0422\u0430\u0439\u043C\u0435\u0440 c\u0442\u0440\u0435\u043B\u044F\u0435\u0442 \u0447\u0435\u0440\u0435\u0437 2 \u0441\u0435\u043A\u0443\u043D\u0434\u044B, \u0437\u0430\u0442\u0435\u043C \u043A\u0430\u0436\u0434\u0443\u044E \u0441\u0435\u043A\u0443\u043D\u0434\u0443"),
        ];
    };
    TimerComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-timer',
            template: __webpack_require__(/*! ./timer.component.pug */ "./src/app/pages/creation/timer/timer.component.pug"),
        })
    ], TimerComponent);
    return TimerComponent;
}());



/***/ }),

/***/ "./src/app/pages/draw-stream/draw-stream.component.pug":
/*!*************************************************************!*\
  !*** ./src/app/pages/draw-stream/draw-stream.component.pug ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var req = __webpack_require__(/*! !./node_modules/pug-loader!./src/app/pages/draw-stream/draw-stream.component.pug */ "./node_modules/pug-loader/index.js!./src/app/pages/draw-stream/draw-stream.component.pug");
module.exports = (req['default'] || req).apply(req, [])

/***/ }),

/***/ "./src/app/pages/draw-stream/draw-stream.component.scss":
/*!**************************************************************!*\
  !*** ./src/app/pages/draw-stream/draw-stream.component.scss ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  width: 100%; }\n\n.stream {\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n  padding: 10px;\n  margin: 10px 0;\n  border: 1px solid #000;\n  overflow-x: auto;\n  overflow-y: visible; }\n\n.stream .stream__info {\n    display: flex;\n    align-items: center; }\n\n.stream .stream__info * {\n      margin-right: 10px; }\n\n.stream .stream__extra {\n    display: flex;\n    justify-content: space-between;\n    width: 100%; }\n\n.stream .stream__toogle {\n    cursor: pointer;\n    padding: 2px; }\n\n.stream .stream__values {\n    position: relative;\n    display: flex;\n    list-style: none;\n    align-items: center;\n    margin: 0;\n    padding: 0;\n    min-height: 30px; }\n\n.stream .stream__values:before {\n      content: '';\n      position: absolute;\n      width: 100%;\n      height: 2px;\n      background-color: #000;\n      top: 50%;\n      -webkit-transform: translate(20px, -50%);\n              transform: translate(20px, -50%);\n      left: 0; }\n\n.stream .stream__values:after {\n      content: '';\n      display: block;\n      position: absolute;\n      width: 0;\n      height: 0;\n      right: -20px;\n      border-top: 15px solid transparent;\n      border-bottom: 15px solid transparent;\n      border-left: 15px solid #000; }\n\n.stream .stream__values .stream__value-wrap {\n      position: relative;\n      display: flex;\n      align-items: center;\n      justify-content: center;\n      margin-left: 5px;\n      flex-shrink: 0; }\n\n.stream .stream__values .stream__value-wrap:hover .stream__value-details {\n        display: flex; }\n\n.stream .stream__values .stream__value {\n      position: relative;\n      display: flex;\n      flex-shrink: 0;\n      align-items: center;\n      justify-content: center;\n      min-width: 25px;\n      max-width: 250px;\n      min-height: 25px;\n      color: #fff;\n      background-color: var(--blue, #2980b9);\n      padding: 0 10px; }\n\n.stream .stream__values .stream__value--red {\n        background-color: var(--red, #e74c3c); }\n\n.stream .stream__values .stream__value--green {\n        background-color: var(--green, #16a085); }\n\n.stream .stream__values .stream__value--blue {\n        background-color: var(--blue, #2980b9); }\n\n.stream .stream__values .stream__value--black {\n        background-color: #000; }\n\n.stream .stream__values .stream__value--circle {\n        border-radius: 50%; }\n\n.stream .stream__values .stream__value--cross {\n        position: relative;\n        font-size: 0;\n        width: 0;\n        height: 0;\n        min-height: 0;\n        min-width: 0;\n        margin-right: 20px;\n        min-width: 0px; }\n\n.stream .stream__values .stream__value--cross:before {\n          content: \"\";\n          position: absolute;\n          top: 70%;\n          left: 70%;\n          -webkit-transform: translate(-50%, -50%) rotate(45deg);\n                  transform: translate(-50%, -50%) rotate(45deg);\n          width: 30px;\n          height: 3px;\n          background-color: red; }\n\n.stream .stream__values .stream__value--cross:after {\n          content: \"\";\n          position: absolute;\n          top: 70%;\n          left: 70%;\n          -webkit-transform: translate(-50%, -50%) rotate(45deg);\n                  transform: translate(-50%, -50%) rotate(45deg);\n          width: 3px;\n          height: 30px;\n          background-color: red; }\n\n.stream .stream__values .stream__value--block {\n        width: 5px;\n        min-width: 5px;\n        height: 25px;\n        font-size: 0;\n        background-color: #000;\n        padding: 0; }\n\n.stream .stream__values .stream__value--observable {\n        -webkit-transform: rotateZ(30deg) translateY(35px);\n                transform: rotateZ(30deg) translateY(35px); }\n\n.stream .stream__values .stream__value--observable:after {\n          content: '';\n          display: block;\n          position: absolute;\n          width: 0;\n          height: 0;\n          right: -16px;\n          top: -2px;\n          border-top: 15px solid transparent;\n          border-bottom: 15px solid transparent;\n          border-left: 15px solid #000; }\n\n.stream .stream__values .stream__value-details {\n      position: absolute;\n      width: 120px;\n      border: 1px solid #000;\n      padding: 5px;\n      background: #fff;\n      display: none;\n      justify-content: center;\n      z-index: 10000; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zLmdhdnJpbG92L0VkdS9yeGpzL3J4anMtYXBwL3NyYy9hcHAvcGFnZXMvZHJhdy1zdHJlYW0vZHJhdy1zdHJlYW0uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFXLEVBQUE7O0FBR2I7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLHVCQUF1QjtFQUN2QixhQUFhO0VBQ2IsY0FBYztFQUNkLHNCQUFzQjtFQUN0QixnQkFBZ0I7RUFDaEIsbUJBQW1CLEVBQUE7O0FBUnJCO0lBV0ksYUFBYTtJQUNiLG1CQUFtQixFQUFBOztBQVp2QjtNQWVNLGtCQUFrQixFQUFBOztBQWZ4QjtJQW9CSSxhQUFhO0lBQ2IsOEJBQThCO0lBQzlCLFdBQVcsRUFBQTs7QUF0QmY7SUEwQkksZUFBZTtJQUNmLFlBQVksRUFBQTs7QUEzQmhCO0lBK0JJLGtCQUFrQjtJQUNsQixhQUFhO0lBQ2IsZ0JBQWdCO0lBQ2hCLG1CQUFtQjtJQUNuQixTQUFTO0lBQ1QsVUFBVTtJQUNWLGdCQUFnQixFQUFBOztBQXJDcEI7TUF3Q00sV0FBVztNQUNYLGtCQUFrQjtNQUNsQixXQUFXO01BQ1gsV0FBVztNQUNYLHNCQUFzQjtNQUN0QixRQUFRO01BQ1Isd0NBQWdDO2NBQWhDLGdDQUFnQztNQUNoQyxPQUFPLEVBQUE7O0FBL0NiO01BbURNLFdBQVc7TUFDWCxjQUFjO01BQ2Qsa0JBQWtCO01BQ2xCLFFBQVE7TUFDUixTQUFTO01BQ1QsWUFBWTtNQUVaLGtDQUFrQztNQUNsQyxxQ0FBcUM7TUFDckMsNEJBQTRCLEVBQUE7O0FBNURsQztNQWdFTSxrQkFBa0I7TUFDbEIsYUFBYTtNQUNiLG1CQUFtQjtNQUNuQix1QkFBdUI7TUFDdkIsZ0JBQWdCO01BQ2hCLGNBQWMsRUFBQTs7QUFyRXBCO1FBeUVVLGFBQWEsRUFBQTs7QUF6RXZCO01BK0VNLGtCQUFrQjtNQUNsQixhQUFhO01BQ2IsY0FBYztNQUNkLG1CQUFtQjtNQUNuQix1QkFBdUI7TUFDdkIsZUFBZTtNQUNmLGdCQUFnQjtNQUNoQixnQkFBZ0I7TUFDaEIsV0FBVztNQUNYLHNDQUFzQztNQUN0QyxlQUFlLEVBQUE7O0FBekZyQjtRQTRGUSxxQ0FBcUMsRUFBQTs7QUE1RjdDO1FBZ0dRLHVDQUF1QyxFQUFBOztBQWhHL0M7UUFvR1Esc0NBQXNDLEVBQUE7O0FBcEc5QztRQXdHUSxzQkFBc0IsRUFBQTs7QUF4RzlCO1FBNEdRLGtCQUFrQixFQUFBOztBQTVHMUI7UUFnSFEsa0JBQWtCO1FBQ2xCLFlBQVk7UUFDWixRQUFRO1FBQ1IsU0FBUztRQUNULGFBQWE7UUFDYixZQUFZO1FBQ1osa0JBQWtCO1FBQ2xCLGNBQWMsRUFBQTs7QUF2SHRCO1VBMEhVLFdBQVc7VUFDWCxrQkFBa0I7VUFDbEIsUUFBUTtVQUNSLFNBQVM7VUFDVCxzREFBOEM7a0JBQTlDLDhDQUE4QztVQUM5QyxXQUFXO1VBQ1gsV0FBVztVQUNYLHFCQUFxQixFQUFBOztBQWpJL0I7VUFxSVUsV0FBVztVQUNYLGtCQUFrQjtVQUNsQixRQUFRO1VBQ1IsU0FBUztVQUNULHNEQUE4QztrQkFBOUMsOENBQThDO1VBQzlDLFVBQVU7VUFDVixZQUFZO1VBQ1oscUJBQXFCLEVBQUE7O0FBNUkvQjtRQWlKUSxVQUFVO1FBQ1YsY0FBYztRQUNkLFlBQVk7UUFDWixZQUFZO1FBQ1osc0JBQXNCO1FBQ3RCLFVBQVUsRUFBQTs7QUF0SmxCO1FBMEpRLGtEQUEwQztnQkFBMUMsMENBQTBDLEVBQUE7O0FBMUpsRDtVQTZKVSxXQUFXO1VBQ1gsY0FBYztVQUNkLGtCQUFrQjtVQUNsQixRQUFRO1VBQ1IsU0FBUztVQUNULFlBQVk7VUFDWixTQUFTO1VBRVQsa0NBQWtDO1VBQ2xDLHFDQUFxQztVQUNyQyw0QkFBNEIsRUFBQTs7QUF2S3RDO01BNktNLGtCQUFrQjtNQUNsQixZQUFZO01BQ1osc0JBQXNCO01BQ3RCLFlBQVk7TUFDWixnQkFBZ0I7TUFDaEIsYUFBYTtNQUNiLHVCQUF1QjtNQUN2QixjQUFjLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9kcmF3LXN0cmVhbS9kcmF3LXN0cmVhbS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5zdHJlYW0ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbiAgcGFkZGluZzogMTBweDtcbiAgbWFyZ2luOiAxMHB4IDA7XG4gIGJvcmRlcjogMXB4IHNvbGlkICMwMDA7XG4gIG92ZXJmbG93LXg6IGF1dG87XG4gIG92ZXJmbG93LXk6IHZpc2libGU7XG5cbiAgLnN0cmVhbV9faW5mbyB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuXG4gICAgKiB7XG4gICAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG4gICAgfVxuICB9XG5cbiAgLnN0cmVhbV9fZXh0cmEge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG5cbiAgLnN0cmVhbV9fdG9vZ2xlIHtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgcGFkZGluZzogMnB4O1xuICB9XG5cbiAgLnN0cmVhbV9fdmFsdWVzIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBsaXN0LXN0eWxlOiBub25lO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgbWFyZ2luOiAwO1xuICAgIHBhZGRpbmc6IDA7XG4gICAgbWluLWhlaWdodDogMzBweDtcblxuICAgICY6YmVmb3JlIHtcbiAgICAgIGNvbnRlbnQ6ICcnO1xuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICBoZWlnaHQ6IDJweDtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDA7XG4gICAgICB0b3A6IDUwJTtcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDIwcHgsIC01MCUpO1xuICAgICAgbGVmdDogMDtcbiAgICB9XG5cbiAgICAmOmFmdGVyIHtcbiAgICAgIGNvbnRlbnQ6ICcnO1xuICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICB3aWR0aDogMDtcbiAgICAgIGhlaWdodDogMDtcbiAgICAgIHJpZ2h0OiAtMjBweDtcblxuICAgICAgYm9yZGVyLXRvcDogMTVweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgICAgIGJvcmRlci1ib3R0b206IDE1cHggc29saWQgdHJhbnNwYXJlbnQ7XG4gICAgICBib3JkZXItbGVmdDogMTVweCBzb2xpZCAjMDAwO1xuICAgIH1cblxuICAgIC5zdHJlYW1fX3ZhbHVlLXdyYXAge1xuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgIG1hcmdpbi1sZWZ0OiA1cHg7XG4gICAgICBmbGV4LXNocmluazogMDtcblxuICAgICAgJjpob3ZlciB7XG4gICAgICAgIC5zdHJlYW1fX3ZhbHVlLWRldGFpbHMge1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICAuc3RyZWFtX192YWx1ZSB7XG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgZmxleC1zaHJpbms6IDA7XG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICBtaW4td2lkdGg6IDI1cHg7XG4gICAgICBtYXgtd2lkdGg6IDI1MHB4O1xuICAgICAgbWluLWhlaWdodDogMjVweDtcbiAgICAgIGNvbG9yOiAjZmZmO1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmx1ZSwgIzI5ODBiOSk7XG4gICAgICBwYWRkaW5nOiAwIDEwcHg7XG5cbiAgICAgICYtLXJlZCB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXJlZCwgI2U3NGMzYyk7XG4gICAgICB9XG5cbiAgICAgICYtLWdyZWVuIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZ3JlZW4sICMxNmEwODUpO1xuICAgICAgfVxuXG4gICAgICAmLS1ibHVlIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmx1ZSwgIzI5ODBiOSk7XG4gICAgICB9XG5cbiAgICAgICYtLWJsYWNrIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDtcbiAgICAgIH1cblxuICAgICAgJi0tY2lyY2xlIHtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgICAgfVxuXG4gICAgICAmLS1jcm9zcyB7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgZm9udC1zaXplOiAwO1xuICAgICAgICB3aWR0aDogMDtcbiAgICAgICAgaGVpZ2h0OiAwO1xuICAgICAgICBtaW4taGVpZ2h0OiAwO1xuICAgICAgICBtaW4td2lkdGg6IDA7XG4gICAgICAgIG1hcmdpbi1yaWdodDogMjBweDtcbiAgICAgICAgbWluLXdpZHRoOiAwcHg7XG5cbiAgICAgICAgJjpiZWZvcmUge1xuICAgICAgICAgIGNvbnRlbnQ6IFwiXCI7XG4gICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgIHRvcDogNzAlO1xuICAgICAgICAgIGxlZnQ6IDcwJTtcbiAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKSByb3RhdGUoNDVkZWcpO1xuICAgICAgICAgIHdpZHRoOiAzMHB4O1xuICAgICAgICAgIGhlaWdodDogM3B4O1xuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJlZDtcbiAgICAgICAgfVxuXG4gICAgICAgICY6YWZ0ZXIge1xuICAgICAgICAgIGNvbnRlbnQ6IFwiXCI7XG4gICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgIHRvcDogNzAlO1xuICAgICAgICAgIGxlZnQ6IDcwJTtcbiAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKSByb3RhdGUoNDVkZWcpO1xuICAgICAgICAgIHdpZHRoOiAzcHg7XG4gICAgICAgICAgaGVpZ2h0OiAzMHB4O1xuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJlZDtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAmLS1ibG9jayB7XG4gICAgICAgIHdpZHRoOiA1cHg7XG4gICAgICAgIG1pbi13aWR0aDogNXB4O1xuICAgICAgICBoZWlnaHQ6IDI1cHg7XG4gICAgICAgIGZvbnQtc2l6ZTogMDtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDtcbiAgICAgICAgcGFkZGluZzogMDtcbiAgICAgIH1cblxuICAgICAgJi0tb2JzZXJ2YWJsZSB7XG4gICAgICAgIHRyYW5zZm9ybTogcm90YXRlWigzMGRlZykgdHJhbnNsYXRlWSgzNXB4KTtcblxuICAgICAgICAmOmFmdGVyIHtcbiAgICAgICAgICBjb250ZW50OiAnJztcbiAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgd2lkdGg6IDA7XG4gICAgICAgICAgaGVpZ2h0OiAwO1xuICAgICAgICAgIHJpZ2h0OiAtMTZweDtcbiAgICAgICAgICB0b3A6IC0ycHg7XG5cbiAgICAgICAgICBib3JkZXItdG9wOiAxNXB4IHNvbGlkIHRyYW5zcGFyZW50O1xuICAgICAgICAgIGJvcmRlci1ib3R0b206IDE1cHggc29saWQgdHJhbnNwYXJlbnQ7XG4gICAgICAgICAgYm9yZGVyLWxlZnQ6IDE1cHggc29saWQgIzAwMDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIC5zdHJlYW1fX3ZhbHVlLWRldGFpbHMge1xuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgd2lkdGg6IDEyMHB4O1xuICAgICAgYm9yZGVyOiAxcHggc29saWQgIzAwMDtcbiAgICAgIHBhZGRpbmc6IDVweDtcbiAgICAgIGJhY2tncm91bmQ6ICNmZmY7XG4gICAgICBkaXNwbGF5OiBub25lO1xuICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICB6LWluZGV4OiAxMDAwMDtcbiAgICB9XG4gIH1cbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/pages/draw-stream/draw-stream.component.ts":
/*!************************************************************!*\
  !*** ./src/app/pages/draw-stream/draw-stream.component.ts ***!
  \************************************************************/
/*! exports provided: DrawStreamComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DrawStreamComponent", function() { return DrawStreamComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ramda__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ramda */ "./node_modules/ramda/es/index.js");



var DrawStreamComponent = /** @class */ (function () {
    function DrawStreamComponent() {
        this.values = [];
        this.active = true;
        this.pause = false;
    }
    Object.defineProperty(DrawStreamComponent.prototype, "numMaxValues", {
        get: function () {
            return Object(ramda__WEBPACK_IMPORTED_MODULE_2__["propOr"])(30, 'numMaxValues', this.stream);
        },
        enumerable: true,
        configurable: true
    });
    DrawStreamComponent.prototype.ngOnInit = function () {
        var _this = this;
        console.log('this.stream', this.stream);
        if (this.stream) {
            var stream_1 = Object(ramda__WEBPACK_IMPORTED_MODULE_2__["propOr"])(this.stream, 'values', this.stream);
            setTimeout(function () {
                _this.subctiption = stream_1.subscribe(function (streamValue) {
                    if (_this.pause) {
                        return;
                    }
                    if (Object(ramda__WEBPACK_IMPORTED_MODULE_2__["length"])(_this.values) > _this.numMaxValues) {
                        _this.values = Object(ramda__WEBPACK_IMPORTED_MODULE_2__["dropLast"])(1, _this.values);
                    }
                    _this.values = Object(ramda__WEBPACK_IMPORTED_MODULE_2__["prepend"])(streamValue, _this.values);
                    // console.log('streamValue', streamValue);
                }, function (error) {
                    _this.values = Object(ramda__WEBPACK_IMPORTED_MODULE_2__["prepend"])({ val: 'error', shape: 'cross', color: 'red' }, _this.values);
                    _this.active = false;
                    console.log(error);
                }, function () {
                    _this.values = Object(ramda__WEBPACK_IMPORTED_MODULE_2__["prepend"])({ val: 'completed', shape: 'block', color: 'black' }, _this.values);
                    _this.active = false;
                });
            }, Object(ramda__WEBPACK_IMPORTED_MODULE_2__["propOr"])(0, 'timeOut', this.stream));
        }
        else {
            throw (new Error('no input stream'));
        }
    };
    DrawStreamComponent.prototype.isValSpecial = function (val) {
        return Object(ramda__WEBPACK_IMPORTED_MODULE_2__["type"])(val) === 'Object' || Object(ramda__WEBPACK_IMPORTED_MODULE_2__["type"])(val) === 'Function';
    };
    DrawStreamComponent.prototype.showVal = function (val) {
        var value = Object(ramda__WEBPACK_IMPORTED_MODULE_2__["propOr"])(val, 'val', val);
        switch (Object(ramda__WEBPACK_IMPORTED_MODULE_2__["type"])(value)) {
            case 'Object':
                if (this.isValObservable(value)) {
                    return 'Observable';
                }
                else if (Object(ramda__WEBPACK_IMPORTED_MODULE_2__["length"])(Object(ramda__WEBPACK_IMPORTED_MODULE_2__["keys"])(value)) < 4) {
                    var details_1 = '';
                    Object(ramda__WEBPACK_IMPORTED_MODULE_2__["forEachObjIndexed"])(function (objVal, objKey) {
                        details_1 = Object(ramda__WEBPACK_IMPORTED_MODULE_2__["append"])(" " + objKey + ":" + objVal, details_1);
                    }, val);
                    return "{ " + details_1 + " }";
                }
                return Object(ramda__WEBPACK_IMPORTED_MODULE_2__["type"])(value);
            case 'Function':
            case 'MouseEvent':
                return Object(ramda__WEBPACK_IMPORTED_MODULE_2__["type"])(value);
            case 'Date':
                return Object(ramda__WEBPACK_IMPORTED_MODULE_2__["split"])('GMT', value.toString())[0];
            case 'Array':
                return "[ " + value.toString().split(',').join(', ') + " ]";
            default:
                return value;
        }
    };
    DrawStreamComponent.prototype.showValDetails = function (val) {
        var details = [];
        switch (Object(ramda__WEBPACK_IMPORTED_MODULE_2__["type"])(val)) {
            case 'Object':
            case 'MouseEvent':
                Object(ramda__WEBPACK_IMPORTED_MODULE_2__["forEachObjIndexed"])(function (value, key) {
                    details = Object(ramda__WEBPACK_IMPORTED_MODULE_2__["append"])(" " + key + ": " + value, details);
                }, val);
                break;
            case 'Function':
                details = Object(ramda__WEBPACK_IMPORTED_MODULE_2__["append"])(val, details);
        }
        return details;
    };
    DrawStreamComponent.prototype.getCssClasses = function (value) {
        var classes = [];
        if (value.shape) {
            classes.push("stream__value--" + value.shape);
            classes.push("stream__value--" + value.color);
        }
        if (this.isValObservable(value)) {
            classes.push("stream__value--observable");
        }
        return classes;
    };
    DrawStreamComponent.prototype.isValObservable = function (val) {
        return !!Object(ramda__WEBPACK_IMPORTED_MODULE_2__["prop"])('subscribe', val);
    };
    DrawStreamComponent.prototype.ngOnDestroy = function () {
        this.subctiption.unsubscribe();
    };
    DrawStreamComponent.prototype.toogle = function () {
        this.pause = !this.pause;
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], DrawStreamComponent.prototype, "stream", void 0);
    DrawStreamComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-draw-stream',
            template: __webpack_require__(/*! ./draw-stream.component.pug */ "./src/app/pages/draw-stream/draw-stream.component.pug"),
            styles: [__webpack_require__(/*! ./draw-stream.component.scss */ "./src/app/pages/draw-stream/draw-stream.component.scss")]
        })
    ], DrawStreamComponent);
    return DrawStreamComponent;
}());



/***/ }),

/***/ "./src/app/pages/filtering/debounce-time/debounce-time.component.pug":
/*!***************************************************************************!*\
  !*** ./src/app/pages/filtering/debounce-time/debounce-time.component.pug ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var req = __webpack_require__(/*! !./node_modules/pug-loader!./src/app/pages/filtering/debounce-time/debounce-time.component.pug */ "./node_modules/pug-loader/index.js!./src/app/pages/filtering/debounce-time/debounce-time.component.pug");
module.exports = (req['default'] || req).apply(req, [])

/***/ }),

/***/ "./src/app/pages/filtering/debounce-time/debounce-time.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/pages/filtering/debounce-time/debounce-time.component.ts ***!
  \**************************************************************************/
/*! exports provided: DebounceTimeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DebounceTimeComponent", function() { return DebounceTimeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../utils */ "./src/app/pages/utils.ts");





var DebounceTimeComponent = /** @class */ (function () {
    function DebounceTimeComponent() {
        this.source1$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["interval"])(500);
        this.source2$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["interval"])(1000);
        this.source4$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])('WAIT', 'ONE', 'SECOND', 'Last will display');
        this.source1 = Object(_utils__WEBPACK_IMPORTED_MODULE_4__["getStreamObj"])(this.source1$, 'interval(500)', '');
        this.source2 = Object(_utils__WEBPACK_IMPORTED_MODULE_4__["getStreamObj"])(this.source2$, "interval(2000)", '');
        this.source4 = Object(_utils__WEBPACK_IMPORTED_MODULE_4__["getStreamObj"])(this.source4$, "of('WAIT', 'ONE', 'SECOND', 'Last will display')", '');
        this.result1 = Object(_utils__WEBPACK_IMPORTED_MODULE_4__["getStreamObj"])(this.source1$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["debounceTime"])(1000)), 'interval(500).pipe(debounceTime(1000))', '');
        this.result2 = Object(_utils__WEBPACK_IMPORTED_MODULE_4__["getStreamObj"])(this.source2$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["debounceTime"])(500)), 'interval(1000).pipe(debounceTime(500))', '');
        this.result4 = Object(_utils__WEBPACK_IMPORTED_MODULE_4__["getStreamObj"])(this.source4$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["debounceTime"])(500)), "of('WAIT', 'ONE', 'SECOND', 'Last will display').pipe(debounceTime(500))", '');
    }
    DebounceTimeComponent.prototype.ngOnInit = function () {
        this.source3$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["fromEvent"])(this.input.nativeElement, 'keyup').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["pluck"])('currentTarget', 'value'));
        this.source3 = Object(_utils__WEBPACK_IMPORTED_MODULE_4__["getStreamObj"])(this.source3$, "fromEvent(this.input.nativeElement, 'keyup').pipe(pluck('currentTarget', 'value'))", '');
        this.result3 = Object(_utils__WEBPACK_IMPORTED_MODULE_4__["getStreamObj"])(this.source3$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["debounceTime"])(2000)), "fromEvent(this.input.nativeElement, 'keyup').pipe(pluck('currentTarget', 'value')).pipe(debounceTime(2000))", '');
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('input'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], DebounceTimeComponent.prototype, "input", void 0);
    DebounceTimeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-debounce-time',
            template: __webpack_require__(/*! ./debounce-time.component.pug */ "./src/app/pages/filtering/debounce-time/debounce-time.component.pug"),
        })
    ], DebounceTimeComponent);
    return DebounceTimeComponent;
}());



/***/ }),

/***/ "./src/app/pages/filtering/debounce/debounce.component.pug":
/*!*****************************************************************!*\
  !*** ./src/app/pages/filtering/debounce/debounce.component.pug ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var req = __webpack_require__(/*! !./node_modules/pug-loader!./src/app/pages/filtering/debounce/debounce.component.pug */ "./node_modules/pug-loader/index.js!./src/app/pages/filtering/debounce/debounce.component.pug");
module.exports = (req['default'] || req).apply(req, [])

/***/ }),

/***/ "./src/app/pages/filtering/debounce/debounce.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/pages/filtering/debounce/debounce.component.ts ***!
  \****************************************************************/
/*! exports provided: DebounceComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DebounceComponent", function() { return DebounceComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../utils */ "./src/app/pages/utils.ts");





var DebounceComponent = /** @class */ (function () {
    function DebounceComponent() {
        this.source1$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])('WAIT', 'ONE', 'SECOND', 'Last will display');
        this.source1 = Object(_utils__WEBPACK_IMPORTED_MODULE_4__["getStreamObj"])(this.source1$, "of('WAIT', 'ONE', 'SECOND', 'Last will display')");
        this.result1 = Object(_utils__WEBPACK_IMPORTED_MODULE_4__["getStreamObj"])(this.source1$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["debounce"])(function () { return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["timer"])(1000); })), 'interval(500).pipe(debounceTime(1000))', "In this example, all values but the last will be omitted\n    output: 'Last will display");
        this.source2$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["interval"])(1000);
        this.source2 = Object(_utils__WEBPACK_IMPORTED_MODULE_4__["getStreamObj"])(this.source2$, "interval(1000)");
        this.result2 = Object(_utils__WEBPACK_IMPORTED_MODULE_4__["getStreamObj"])(this.source2$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["debounce"])(function (val) { return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["timer"])(200 * val); })), 'interval(500).pipe(debounceTime(1000))', " After 5 seconds, debounce time will be greater than interval time,\n      all future values will be thrown away\n      output: 0...1...2...3...4......(debounce time over 1s, no values emitted)\n    ");
    }
    DebounceComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-debounce',
            template: __webpack_require__(/*! ./debounce.component.pug */ "./src/app/pages/filtering/debounce/debounce.component.pug"),
        })
    ], DebounceComponent);
    return DebounceComponent;
}());



/***/ }),

/***/ "./src/app/pages/filtering/distinct-until-changed/distinct-until-changed.component.pug":
/*!*********************************************************************************************!*\
  !*** ./src/app/pages/filtering/distinct-until-changed/distinct-until-changed.component.pug ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var req = __webpack_require__(/*! !./node_modules/pug-loader!./src/app/pages/filtering/distinct-until-changed/distinct-until-changed.component.pug */ "./node_modules/pug-loader/index.js!./src/app/pages/filtering/distinct-until-changed/distinct-until-changed.component.pug");
module.exports = (req['default'] || req).apply(req, [])

/***/ }),

/***/ "./src/app/pages/filtering/distinct-until-changed/distinct-until-changed.component.ts":
/*!********************************************************************************************!*\
  !*** ./src/app/pages/filtering/distinct-until-changed/distinct-until-changed.component.ts ***!
  \********************************************************************************************/
/*! exports provided: DistinctUntilChangedComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DistinctUntilChangedComponent", function() { return DistinctUntilChangedComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../utils */ "./src/app/pages/utils.ts");





var DistinctUntilChangedComponent = /** @class */ (function () {
    function DistinctUntilChangedComponent() {
        this.source1$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(1, 1, 2, 2, 2, 1, 2, 3, 4, 3, 2, 1);
        this.source1 = Object(_utils__WEBPACK_IMPORTED_MODULE_4__["getStreamObj"])(this.source1$, "of(1, 1, 2, 2, 2, 1, 2, 3, 4, 3, 2, 1)");
        this.result1 = Object(_utils__WEBPACK_IMPORTED_MODULE_4__["getStreamObj"])(this.source1$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["distinctUntilChanged"])()), "interval(500).pipe(debounceTime(1000))");
        this.oneObj = { age: 4, name: 'Foo' };
        this.twoObj = { age: 7, name: 'Bar' };
        this.source2$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(this.oneObj, this.twoObj, this.twoObj, { age: 7, name: 'Bar' }, { age: 7, name: 'Bar' }, this.oneObj, this.oneObj, this.twoObj);
        this.source2 = Object(_utils__WEBPACK_IMPORTED_MODULE_4__["getStreamObj"])(this.source2$, "this.oneObj, this.twoObj, this.twoObj, { age: 7, name: 'Bar'},\n    { age: 7, name: 'Bar'}, this.oneObj, this.oneObj, this.twoObj,", 'Объекты сравниваются по ссылке');
        this.result2 = Object(_utils__WEBPACK_IMPORTED_MODULE_4__["getStreamObj"])(this.source2$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["distinctUntilChanged"])()), "distinctUntilChanged()");
        this.source3$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])({ age: 4, name: 'Foo' }, { age: 7, name: 'Bar' }, { age: 5, name: 'Foo' }, { age: 6, name: 'Foo' });
        this.source3 = Object(_utils__WEBPACK_IMPORTED_MODULE_4__["getStreamObj"])(this.source3$, "of<{age: number, name: string}>({ age: 4, name: 'Foo'},\n    { age: 7, name: 'Bar'}, { age: 5, name: 'Foo'}, { age: 6, name: 'Foo'})");
        this.result3 = Object(_utils__WEBPACK_IMPORTED_MODULE_4__["getStreamObj"])(this.source3$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["distinctUntilChanged"])(function (p, q) { return p.name === q.name; })), "distinctUntilChanged((p, q) => p.name === q.name)");
    }
    DistinctUntilChangedComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-distinct-until-changed',
            template: __webpack_require__(/*! ./distinct-until-changed.component.pug */ "./src/app/pages/filtering/distinct-until-changed/distinct-until-changed.component.pug"),
        })
    ], DistinctUntilChangedComponent);
    return DistinctUntilChangedComponent;
}());



/***/ }),

/***/ "./src/app/pages/filtering/distinct/distinct.component.pug":
/*!*****************************************************************!*\
  !*** ./src/app/pages/filtering/distinct/distinct.component.pug ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var req = __webpack_require__(/*! !./node_modules/pug-loader!./src/app/pages/filtering/distinct/distinct.component.pug */ "./node_modules/pug-loader/index.js!./src/app/pages/filtering/distinct/distinct.component.pug");
module.exports = (req['default'] || req).apply(req, [])

/***/ }),

/***/ "./src/app/pages/filtering/distinct/distinct.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/pages/filtering/distinct/distinct.component.ts ***!
  \****************************************************************/
/*! exports provided: DistinctComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DistinctComponent", function() { return DistinctComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../utils */ "./src/app/pages/utils.ts");





var DistinctComponent = /** @class */ (function () {
    function DistinctComponent() {
        this.source1$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(1, 1, 2, 2, 2, 1, 2, 3, 4, 3, 2, 1);
        this.source1 = Object(_utils__WEBPACK_IMPORTED_MODULE_4__["getStreamObj"])(this.source1$, "of(1, 1, 2, 2, 2, 1, 2, 3, 4, 3, 2, 1)");
        this.result1 = Object(_utils__WEBPACK_IMPORTED_MODULE_4__["getStreamObj"])(this.source1$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["distinct"])()), "of(1, 1, 2, 2, 2, 1, 2, 3, 4, 3, 2, 1).pipe(distinct())");
        this.source2$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])({ age: 4, name: 'Foo' }, { age: 7, name: 'Bar' }, { age: 5, name: 'Foo' });
        this.source2 = Object(_utils__WEBPACK_IMPORTED_MODULE_4__["getStreamObj"])(this.source2$, "of(\n      { age: 4, name: 'Foo'},\n      { age: 7, name: 'Bar'},\n      { age: 5, name: 'Foo'},\n    ),");
        this.result2 = Object(_utils__WEBPACK_IMPORTED_MODULE_4__["getStreamObj"])(this.source2$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["distinct"])(function (x) { return x.name; })), "of(\n        { age: 4, name: 'Foo'},\n        { age: 7, name: 'Bar'},\n        { age: 5, name: 'Foo'}\n      ).pipe(distinct(x => x.name))");
    }
    DistinctComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-distinct',
            template: __webpack_require__(/*! ./distinct.component.pug */ "./src/app/pages/filtering/distinct/distinct.component.pug"),
        })
    ], DistinctComponent);
    return DistinctComponent;
}());



/***/ }),

/***/ "./src/app/pages/filtering/element-at/element-at.component.pug":
/*!*********************************************************************!*\
  !*** ./src/app/pages/filtering/element-at/element-at.component.pug ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var req = __webpack_require__(/*! !./node_modules/pug-loader!./src/app/pages/filtering/element-at/element-at.component.pug */ "./node_modules/pug-loader/index.js!./src/app/pages/filtering/element-at/element-at.component.pug");
module.exports = (req['default'] || req).apply(req, [])

/***/ }),

/***/ "./src/app/pages/filtering/element-at/element-at.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/pages/filtering/element-at/element-at.component.ts ***!
  \********************************************************************/
/*! exports provided: ElementAtComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ElementAtComponent", function() { return ElementAtComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../utils */ "./src/app/pages/utils.ts");





var ElementAtComponent = /** @class */ (function () {
    function ElementAtComponent() {
        this.source1$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(1, 1, 2, 2, 34, 1, 2, 3, 4, 3, 2, 1);
        this.source1 = Object(_utils__WEBPACK_IMPORTED_MODULE_4__["getStreamObj"])(this.source1$, 'of(1, 1, 2, 2, 34, 1, 2, 3, 4, 3, 2, 1)');
        this.result1 = Object(_utils__WEBPACK_IMPORTED_MODULE_4__["getStreamObj"])(this.source1$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["elementAt"])(4)), 'of(1, 1, 2, 2, 34, 1, 2, 3, 4, 3, 2, 1).pipe(elementAt(4))');
        this.source2$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["interval"])(1000);
        this.source2 = Object(_utils__WEBPACK_IMPORTED_MODULE_4__["getStreamObj"])(this.source2$, 'interval(1000)');
        this.result2 = Object(_utils__WEBPACK_IMPORTED_MODULE_4__["getStreamObj"])(this.source2$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["elementAt"])(4)), 'interval(1000).pipe(elementAt(4))');
    }
    ElementAtComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-element-at',
            template: __webpack_require__(/*! ./element-at.component.pug */ "./src/app/pages/filtering/element-at/element-at.component.pug"),
        })
    ], ElementAtComponent);
    return ElementAtComponent;
}());



/***/ }),

/***/ "./src/app/pages/filtering/filter/filter.component.pug":
/*!*************************************************************!*\
  !*** ./src/app/pages/filtering/filter/filter.component.pug ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var req = __webpack_require__(/*! !./node_modules/pug-loader!./src/app/pages/filtering/filter/filter.component.pug */ "./node_modules/pug-loader/index.js!./src/app/pages/filtering/filter/filter.component.pug");
module.exports = (req['default'] || req).apply(req, [])

/***/ }),

/***/ "./src/app/pages/filtering/filter/filter.component.ts":
/*!************************************************************!*\
  !*** ./src/app/pages/filtering/filter/filter.component.ts ***!
  \************************************************************/
/*! exports provided: FilterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilterComponent", function() { return FilterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../utils */ "./src/app/pages/utils.ts");





var FilterComponent = /** @class */ (function () {
    function FilterComponent() {
        this.source1$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["interval"])(1000);
        this.source1 = Object(_utils__WEBPACK_IMPORTED_MODULE_4__["getStreamObj"])(this.source1$, "interval(1000)");
        this.result1 = Object(_utils__WEBPACK_IMPORTED_MODULE_4__["getStreamObj"])(this.source1$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["filter"])(function (x) { return x % 2 === 0; })), "interval(1000).pipe(filter(x => x % 2 === 0))");
        this.source2$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["from"])([{ name: 'Joe', age: 31 }, { name: 'Bob', age: 25 }, { name: 'Alic', age: 45 }]);
        this.source2 = Object(_utils__WEBPACK_IMPORTED_MODULE_4__["getStreamObj"])(this.source2$, "from([{ name: 'Joe', age: 31 }, { name: 'Bob', age: 25 }, { name: 'Alic', age: 45 }])");
        this.result2 = Object(_utils__WEBPACK_IMPORTED_MODULE_4__["getStreamObj"])(this.source2$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["filter"])(function (x) { return x.age > 30; })), "from([{ name: 'Joe', age: 31 }, { name: 'Bob', age: 25 },\n      { name: 'Alic', age: 45 }]).pipe(filter(x => x.age > 30))");
        this.source3$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["interval"])(1000);
        this.source3 = Object(_utils__WEBPACK_IMPORTED_MODULE_4__["getStreamObj"])(this.source1$, "interval(1000)");
        this.result3 = Object(_utils__WEBPACK_IMPORTED_MODULE_4__["getStreamObj"])(this.source1$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["filter"])(function (x, index) { return index >= 5; })), "interval(1000).pipe(filter((x, index) => index >= 5)", 'skip first 5 elements (better use skip)');
    }
    FilterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-filter',
            template: __webpack_require__(/*! ./filter.component.pug */ "./src/app/pages/filtering/filter/filter.component.pug"),
        })
    ], FilterComponent);
    return FilterComponent;
}());



/***/ }),

/***/ "./src/app/pages/filtering/filtering.routing.ts":
/*!******************************************************!*\
  !*** ./src/app/pages/filtering/filtering.routing.ts ***!
  \******************************************************/
/*! exports provided: filteringPagesRoutes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "filteringPagesRoutes", function() { return filteringPagesRoutes; });
/* harmony import */ var _debounce_time_debounce_time_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./debounce-time/debounce-time.component */ "./src/app/pages/filtering/debounce-time/debounce-time.component.ts");
/* harmony import */ var _debounce_debounce_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./debounce/debounce.component */ "./src/app/pages/filtering/debounce/debounce.component.ts");
/* harmony import */ var _distinct_distinct_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./distinct/distinct.component */ "./src/app/pages/filtering/distinct/distinct.component.ts");
/* harmony import */ var _distinct_until_changed_distinct_until_changed_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./distinct-until-changed/distinct-until-changed.component */ "./src/app/pages/filtering/distinct-until-changed/distinct-until-changed.component.ts");
/* harmony import */ var _element_at_element_at_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./element-at/element-at.component */ "./src/app/pages/filtering/element-at/element-at.component.ts");
/* harmony import */ var _first_first_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./first/first.component */ "./src/app/pages/filtering/first/first.component.ts");
/* harmony import */ var _filter_filter_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./filter/filter.component */ "./src/app/pages/filtering/filter/filter.component.ts");
/* harmony import */ var _find_find_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./find/find.component */ "./src/app/pages/filtering/find/find.component.ts");
/* harmony import */ var _find_index_find_index_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./find-index/find-index.component */ "./src/app/pages/filtering/find-index/find-index.component.ts");
/* harmony import */ var _ignore_elements_ignore_elements_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./ignore-elements/ignore-elements.component */ "./src/app/pages/filtering/ignore-elements/ignore-elements.component.ts");
/* harmony import */ var _last_last_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./last/last.component */ "./src/app/pages/filtering/last/last.component.ts");
/* harmony import */ var _sample_sample_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./sample/sample.component */ "./src/app/pages/filtering/sample/sample.component.ts");
/* harmony import */ var _skip_skip_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./skip/skip.component */ "./src/app/pages/filtering/skip/skip.component.ts");
/* harmony import */ var _skip_until_skip_until_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./skip-until/skip-until.component */ "./src/app/pages/filtering/skip-until/skip-until.component.ts");
/* harmony import */ var _skip_while_skip_while_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./skip-while/skip-while.component */ "./src/app/pages/filtering/skip-while/skip-while.component.ts");
/* harmony import */ var _take_take_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./take/take.component */ "./src/app/pages/filtering/take/take.component.ts");
/* harmony import */ var _take_last_take_last_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./take-last/take-last.component */ "./src/app/pages/filtering/take-last/take-last.component.ts");
/* harmony import */ var _take_until_take_until_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./take-until/take-until.component */ "./src/app/pages/filtering/take-until/take-until.component.ts");
/* harmony import */ var _take_while_take_while_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./take-while/take-while.component */ "./src/app/pages/filtering/take-while/take-while.component.ts");
/* harmony import */ var _throttle_throttle_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./throttle/throttle.component */ "./src/app/pages/filtering/throttle/throttle.component.ts");
/* harmony import */ var _throttle_time_throttle_time_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./throttle-time/throttle-time.component */ "./src/app/pages/filtering/throttle-time/throttle-time.component.ts");





















var filteringPagesRoutes = [
    { path: 'debounce', component: _debounce_debounce_component__WEBPACK_IMPORTED_MODULE_1__["DebounceComponent"] },
    { path: 'debounce-time', component: _debounce_time_debounce_time_component__WEBPACK_IMPORTED_MODULE_0__["DebounceTimeComponent"] },
    { path: 'distinct', component: _distinct_distinct_component__WEBPACK_IMPORTED_MODULE_2__["DistinctComponent"] },
    { path: 'distinct-until-changed', component: _distinct_until_changed_distinct_until_changed_component__WEBPACK_IMPORTED_MODULE_3__["DistinctUntilChangedComponent"] },
    { path: 'element-at', component: _element_at_element_at_component__WEBPACK_IMPORTED_MODULE_4__["ElementAtComponent"] },
    { path: 'filter', component: _filter_filter_component__WEBPACK_IMPORTED_MODULE_6__["FilterComponent"] },
    { path: 'find', component: _find_find_component__WEBPACK_IMPORTED_MODULE_7__["FindComponent"] },
    { path: 'find-index', component: _find_index_find_index_component__WEBPACK_IMPORTED_MODULE_8__["FindIndexComponent"] },
    { path: 'first', component: _first_first_component__WEBPACK_IMPORTED_MODULE_5__["FirstComponent"] },
    { path: 'ignore-elements', component: _ignore_elements_ignore_elements_component__WEBPACK_IMPORTED_MODULE_9__["IgnoreElementsComponent"] },
    { path: 'last', component: _last_last_component__WEBPACK_IMPORTED_MODULE_10__["LastComponent"] },
    { path: 'sample', component: _sample_sample_component__WEBPACK_IMPORTED_MODULE_11__["SampleComponent"] },
    { path: 'skip', component: _skip_skip_component__WEBPACK_IMPORTED_MODULE_12__["SkipComponent"] },
    { path: 'skip-until', component: _skip_until_skip_until_component__WEBPACK_IMPORTED_MODULE_13__["SkipUntilComponent"] },
    { path: 'skip-while', component: _skip_while_skip_while_component__WEBPACK_IMPORTED_MODULE_14__["SkipWhileComponent"] },
    { path: 'take', component: _take_take_component__WEBPACK_IMPORTED_MODULE_15__["TakeComponent"] },
    { path: 'take-last', component: _take_last_take_last_component__WEBPACK_IMPORTED_MODULE_16__["TakeLastComponent"] },
    { path: 'take-until', component: _take_until_take_until_component__WEBPACK_IMPORTED_MODULE_17__["TakeUntilComponent"] },
    { path: 'take-while', component: _take_while_take_while_component__WEBPACK_IMPORTED_MODULE_18__["TakeWhileComponent"] },
    { path: 'throttle', component: _throttle_throttle_component__WEBPACK_IMPORTED_MODULE_19__["ThrottleComponent"] },
    { path: 'throttle-time', component: _throttle_time_throttle_time_component__WEBPACK_IMPORTED_MODULE_20__["ThrottleTimeComponent"] },
];


/***/ }),

/***/ "./src/app/pages/filtering/find-index/find-index.component.pug":
/*!*********************************************************************!*\
  !*** ./src/app/pages/filtering/find-index/find-index.component.pug ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var req = __webpack_require__(/*! !./node_modules/pug-loader!./src/app/pages/filtering/find-index/find-index.component.pug */ "./node_modules/pug-loader/index.js!./src/app/pages/filtering/find-index/find-index.component.pug");
module.exports = (req['default'] || req).apply(req, [])

/***/ }),

/***/ "./src/app/pages/filtering/find-index/find-index.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/pages/filtering/find-index/find-index.component.ts ***!
  \********************************************************************/
/*! exports provided: FindIndexComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FindIndexComponent", function() { return FindIndexComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../utils */ "./src/app/pages/utils.ts");





var FindIndexComponent = /** @class */ (function () {
    function FindIndexComponent() {
        this.source1$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["interval"])(1000);
        this.source1 = Object(_utils__WEBPACK_IMPORTED_MODULE_4__["getStreamObj"])(this.source1$, "interval(1000)");
        this.result1 = Object(_utils__WEBPACK_IMPORTED_MODULE_4__["getStreamObj"])(this.source1$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["findIndex"])(function (x) { return x % 2 === 0; })), "interval(1000).pipe(findIndex(x => x % 2 === 0))");
        this.source2$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["from"])([{ name: 'Joe', age: 31 }, { name: 'Bob', age: 25 }, { name: 'Alic', age: 45 }]);
        this.source2 = Object(_utils__WEBPACK_IMPORTED_MODULE_4__["getStreamObj"])(this.source2$, "from([{ name: 'Joe', age: 31 }, { name: 'Bob', age: 25 },\n    { name: 'Alic', age: 45 }])");
        this.result2 = Object(_utils__WEBPACK_IMPORTED_MODULE_4__["getStreamObj"])(this.source2$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["findIndex"])(function (x) { return x.age < 30; })), "from([{ name: 'Joe', age: 31 }, { name: 'Bob', age: 25 },\n    { name: 'Alic', age: 45 }]).pipe(findIndex(x => x.age < 30))");
        this.source3$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["from"])([2, 30, 22, 5, 60, 1]);
        this.source3 = Object(_utils__WEBPACK_IMPORTED_MODULE_4__["getStreamObj"])(this.source3$, "from([2, 30, 22, 5, 60, 1])");
        this.result3 = Object(_utils__WEBPACK_IMPORTED_MODULE_4__["getStreamObj"])(this.source3$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["findIndex"])(function (x) { return x > 30; })), "from([2, 30, 22, 5, 60, 1]).pipe(findIndex(x => x.age > 30))");
    }
    FindIndexComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-find-index',
            template: __webpack_require__(/*! ./find-index.component.pug */ "./src/app/pages/filtering/find-index/find-index.component.pug"),
        })
    ], FindIndexComponent);
    return FindIndexComponent;
}());



/***/ }),

/***/ "./src/app/pages/filtering/find/find.component.pug":
/*!*********************************************************!*\
  !*** ./src/app/pages/filtering/find/find.component.pug ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var req = __webpack_require__(/*! !./node_modules/pug-loader!./src/app/pages/filtering/find/find.component.pug */ "./node_modules/pug-loader/index.js!./src/app/pages/filtering/find/find.component.pug");
module.exports = (req['default'] || req).apply(req, [])

/***/ }),

/***/ "./src/app/pages/filtering/find/find.component.ts":
/*!********************************************************!*\
  !*** ./src/app/pages/filtering/find/find.component.ts ***!
  \********************************************************/
/*! exports provided: FindComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FindComponent", function() { return FindComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../utils */ "./src/app/pages/utils.ts");





var FindComponent = /** @class */ (function () {
    function FindComponent() {
        this.source1$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["interval"])(1000);
        this.source1 = Object(_utils__WEBPACK_IMPORTED_MODULE_4__["getStreamObj"])(this.source1$, "interval(1000)");
        this.result1 = Object(_utils__WEBPACK_IMPORTED_MODULE_4__["getStreamObj"])(this.source1$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["find"])(function (x) { return x % 2 === 0; })), "interval(1000).pipe(find(x => x % 2 === 0))");
        this.source2$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["from"])([{ name: 'Joe', age: 31 }, { name: 'Bob', age: 25 }, { name: 'Alic', age: 45 }]);
        this.source2 = Object(_utils__WEBPACK_IMPORTED_MODULE_4__["getStreamObj"])(this.source2$, "from([{ name: 'Joe', age: 31 }, { name: 'Bob', age: 25 }, { name: 'Alic', age: 45 }])");
        this.result2 = Object(_utils__WEBPACK_IMPORTED_MODULE_4__["getStreamObj"])(this.source2$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["find"])(function (x) { return x.age > 30; })), "from([{ name: 'Joe', age: 31 }, { name: 'Bob', age: 25 },\n    { name: 'Alic', age: 45 }]).pipe(find(x => x.age > 30))");
        this.source3$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["from"])([2, 30, 22, 5, 60, 1]);
        this.source3 = Object(_utils__WEBPACK_IMPORTED_MODULE_4__["getStreamObj"])(this.source3$, "from([2, 30, 22, 5, 60, 1])");
        this.result3 = Object(_utils__WEBPACK_IMPORTED_MODULE_4__["getStreamObj"])(this.source3$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["find"])(function (x) { return x > 30; })), "from([2, 30, 22, 5, 60, 1]).pipe(find(x => x.age > 30))");
    }
    FindComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-find',
            template: __webpack_require__(/*! ./find.component.pug */ "./src/app/pages/filtering/find/find.component.pug"),
        })
    ], FindComponent);
    return FindComponent;
}());



/***/ }),

/***/ "./src/app/pages/filtering/first/first.component.pug":
/*!***********************************************************!*\
  !*** ./src/app/pages/filtering/first/first.component.pug ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var req = __webpack_require__(/*! !./node_modules/pug-loader!./src/app/pages/filtering/first/first.component.pug */ "./node_modules/pug-loader/index.js!./src/app/pages/filtering/first/first.component.pug");
module.exports = (req['default'] || req).apply(req, [])

/***/ }),

/***/ "./src/app/pages/filtering/first/first.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/pages/filtering/first/first.component.ts ***!
  \**********************************************************/
/*! exports provided: FirstComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FirstComponent", function() { return FirstComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../utils */ "./src/app/pages/utils.ts");





var FirstComponent = /** @class */ (function () {
    function FirstComponent() {
        this.source1$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(5, 1, 2, 2, 34, 1, 2, 3, 4, 44, 2, 1);
        this.source1 = Object(_utils__WEBPACK_IMPORTED_MODULE_4__["getStreamObj"])(this.source1$, 'of(5, 1, 2, 2, 34, 1, 2, 3, 4, 44, 2, 1)');
        this.result1 = Object(_utils__WEBPACK_IMPORTED_MODULE_4__["getStreamObj"])(this.source1$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["first"])()), 'of(5, 1, 2, 2, 34, 1, 2, 3, 4, 44, 2, 1).pipe(first())');
        this.source2$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["interval"])(1000);
        this.source2 = Object(_utils__WEBPACK_IMPORTED_MODULE_4__["getStreamObj"])(this.source2$, 'interval(1000)');
        this.result2 = Object(_utils__WEBPACK_IMPORTED_MODULE_4__["getStreamObj"])(this.source2$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["first"])()), 'interval(1000).pipe(first())');
    }
    FirstComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-first',
            template: __webpack_require__(/*! ./first.component.pug */ "./src/app/pages/filtering/first/first.component.pug"),
        })
    ], FirstComponent);
    return FirstComponent;
}());



/***/ }),

/***/ "./src/app/pages/filtering/ignore-elements/ignore-elements.component.pug":
/*!*******************************************************************************!*\
  !*** ./src/app/pages/filtering/ignore-elements/ignore-elements.component.pug ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var req = __webpack_require__(/*! !./node_modules/pug-loader!./src/app/pages/filtering/ignore-elements/ignore-elements.component.pug */ "./node_modules/pug-loader/index.js!./src/app/pages/filtering/ignore-elements/ignore-elements.component.pug");
module.exports = (req['default'] || req).apply(req, [])

/***/ }),

/***/ "./src/app/pages/filtering/ignore-elements/ignore-elements.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/pages/filtering/ignore-elements/ignore-elements.component.ts ***!
  \******************************************************************************/
/*! exports provided: IgnoreElementsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IgnoreElementsComponent", function() { return IgnoreElementsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../utils */ "./src/app/pages/utils.ts");





var IgnoreElementsComponent = /** @class */ (function () {
    function IgnoreElementsComponent() {
        this.source1$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["interval"])(1000);
        this.source1 = Object(_utils__WEBPACK_IMPORTED_MODULE_4__["getStreamObj"])(this.source1$, "interval(1000)");
        this.result1 = Object(_utils__WEBPACK_IMPORTED_MODULE_4__["getStreamObj"])(this.source1$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["ignoreElements"])()), "interval(1000).pipe(ignoreElements())");
        this.source2$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["from"])([{ name: 'Joe', age: 31 }, { name: 'Bob', age: 25 }, { name: 'Alic', age: 45 }]);
        this.source2 = Object(_utils__WEBPACK_IMPORTED_MODULE_4__["getStreamObj"])(this.source2$, "from([{ name: 'Joe', age: 31 }, { name: 'Bob', age: 25 }, { name: 'Alic', age: 45 }])");
        this.result2 = Object(_utils__WEBPACK_IMPORTED_MODULE_4__["getStreamObj"])(this.source2$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["ignoreElements"])()), "from([{ name: 'Joe', age: 31 }, { name: 'Bob', age: 25 },\n    { name: 'Alic', age: 45 }]).pipe(ignoreElements())");
        this.source3$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["from"])([2, 30, 22, 5, 60, 1]);
        this.source3 = Object(_utils__WEBPACK_IMPORTED_MODULE_4__["getStreamObj"])(this.source3$, "from([2, 30, 22, 5, 60, 1])");
        this.result3 = Object(_utils__WEBPACK_IMPORTED_MODULE_4__["getStreamObj"])(this.source3$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["ignoreElements"])()), "from([2, 30, 22, 5, 60, 1]).pipe(ignoreElements())");
    }
    IgnoreElementsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-ignore-elements',
            template: __webpack_require__(/*! ./ignore-elements.component.pug */ "./src/app/pages/filtering/ignore-elements/ignore-elements.component.pug"),
        })
    ], IgnoreElementsComponent);
    return IgnoreElementsComponent;
}());



/***/ }),

/***/ "./src/app/pages/filtering/last/last.component.pug":
/*!*********************************************************!*\
  !*** ./src/app/pages/filtering/last/last.component.pug ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var req = __webpack_require__(/*! !./node_modules/pug-loader!./src/app/pages/filtering/last/last.component.pug */ "./node_modules/pug-loader/index.js!./src/app/pages/filtering/last/last.component.pug");
module.exports = (req['default'] || req).apply(req, [])

/***/ }),

/***/ "./src/app/pages/filtering/last/last.component.ts":
/*!********************************************************!*\
  !*** ./src/app/pages/filtering/last/last.component.ts ***!
  \********************************************************/
/*! exports provided: LastComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LastComponent", function() { return LastComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../utils */ "./src/app/pages/utils.ts");





var LastComponent = /** @class */ (function () {
    function LastComponent() {
        this.source1$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["interval"])(1000);
        this.source1 = Object(_utils__WEBPACK_IMPORTED_MODULE_4__["getStreamObj"])(this.source1$, "interval(1000)");
        this.result1 = Object(_utils__WEBPACK_IMPORTED_MODULE_4__["getStreamObj"])(this.source1$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["last"])()), "interval(1000).pipe(last())");
        this.source2$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["from"])([{ name: 'Joe', age: 31 }, { name: 'Bob', age: 25 }, { name: 'Alic', age: 45 }]);
        this.source2 = Object(_utils__WEBPACK_IMPORTED_MODULE_4__["getStreamObj"])(this.source2$, "from([{ name: 'Joe', age: 31 }, { name: 'Bob', age: 25 }, { name: 'Alic', age: 45 }])");
        this.result2 = Object(_utils__WEBPACK_IMPORTED_MODULE_4__["getStreamObj"])(this.source2$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["last"])()), "\n    from([{ name: 'Joe', age: 31 }, { name: 'Bob', age: 25 }, { name: 'Alic', age: 45 }]).pipe(last())\n  ");
        this.source3$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["from"])([2, 30, 22, 5, 60, 1]);
        this.source3 = Object(_utils__WEBPACK_IMPORTED_MODULE_4__["getStreamObj"])(this.source3$, "from([2, 30, 22, 5, 60, 1])");
        this.result3 = Object(_utils__WEBPACK_IMPORTED_MODULE_4__["getStreamObj"])(this.source3$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["last"])(function (num) { return num % 2 === 0; })), "from([2, 30, 22, 5, 60, 1]).pipe(last(num => num % 2 === 0))", 'Последнее значение удовлетворяющее предикату');
        this.source4$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["from"])([2, 30, 22, 5, 60, 1]);
        this.source4 = Object(_utils__WEBPACK_IMPORTED_MODULE_4__["getStreamObj"])(this.source4$, "from([2, 30, 22, 5, 60, 1])");
        this.result4 = Object(_utils__WEBPACK_IMPORTED_MODULE_4__["getStreamObj"])(this.source4$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["last"])(function (v) { return v > 70; }, 'Nothing!')), "from([2, 30, 22, 5, 60, 1]).pipe(last(num => num % 2 === 0))", 'Последнее значение удовлетворяющее предикату, или Nothing!');
    }
    LastComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-last',
            template: __webpack_require__(/*! ./last.component.pug */ "./src/app/pages/filtering/last/last.component.pug"),
        })
    ], LastComponent);
    return LastComponent;
}());



/***/ }),

/***/ "./src/app/pages/filtering/sample/sample.component.pug":
/*!*************************************************************!*\
  !*** ./src/app/pages/filtering/sample/sample.component.pug ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var req = __webpack_require__(/*! !./node_modules/pug-loader!./src/app/pages/filtering/sample/sample.component.pug */ "./node_modules/pug-loader/index.js!./src/app/pages/filtering/sample/sample.component.pug");
module.exports = (req['default'] || req).apply(req, [])

/***/ }),

/***/ "./src/app/pages/filtering/sample/sample.component.ts":
/*!************************************************************!*\
  !*** ./src/app/pages/filtering/sample/sample.component.ts ***!
  \************************************************************/
/*! exports provided: SampleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SampleComponent", function() { return SampleComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../utils */ "./src/app/pages/utils.ts");





var SampleComponent = /** @class */ (function () {
    function SampleComponent() {
        this.source1$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["interval"])(1000);
        this.source2$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["interval"])(2000);
        this.source1 = Object(_utils__WEBPACK_IMPORTED_MODULE_4__["getStreamObj"])(this.source1$, "interval(1000)");
        this.source2 = Object(_utils__WEBPACK_IMPORTED_MODULE_4__["getStreamObj"])(this.source2$, "interval(2000)");
        this.result1 = Object(_utils__WEBPACK_IMPORTED_MODULE_4__["getStreamObj"])(this.source1$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["sample"])(this.source2$)), "interval(1000).pipe(sample(interval(2000)))");
        this.result2 = Object(_utils__WEBPACK_IMPORTED_MODULE_4__["getStreamObj"])(this.source2$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["sample"])(this.source1$)), "interval(2000).pipe(sample(interval(1000))),\n  ");
    }
    SampleComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-sample',
            template: __webpack_require__(/*! ./sample.component.pug */ "./src/app/pages/filtering/sample/sample.component.pug"),
        })
    ], SampleComponent);
    return SampleComponent;
}());



/***/ }),

/***/ "./src/app/pages/filtering/skip-until/skip-until.component.pug":
/*!*********************************************************************!*\
  !*** ./src/app/pages/filtering/skip-until/skip-until.component.pug ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var req = __webpack_require__(/*! !./node_modules/pug-loader!./src/app/pages/filtering/skip-until/skip-until.component.pug */ "./node_modules/pug-loader/index.js!./src/app/pages/filtering/skip-until/skip-until.component.pug");
module.exports = (req['default'] || req).apply(req, [])

/***/ }),

/***/ "./src/app/pages/filtering/skip-until/skip-until.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/pages/filtering/skip-until/skip-until.component.ts ***!
  \********************************************************************/
/*! exports provided: SkipUntilComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SkipUntilComponent", function() { return SkipUntilComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../utils */ "./src/app/pages/utils.ts");





var SkipUntilComponent = /** @class */ (function () {
    function SkipUntilComponent() {
        this.source1$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["interval"])(1000);
        this.source1 = Object(_utils__WEBPACK_IMPORTED_MODULE_4__["getStreamObj"])(this.source1$, "interval(1000)");
        this.source2$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["timer"])(6000);
        this.source2 = Object(_utils__WEBPACK_IMPORTED_MODULE_4__["getStreamObj"])(this.source2$, "timer(6000)");
        this.result1 = Object(_utils__WEBPACK_IMPORTED_MODULE_4__["getStreamObj"])(this.source1$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["skipUntil"])(Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["timer"])(6000))), "interval(1000).pipe(skipUntil(timer(6000)))");
        this.source3$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["from"])([{ name: 'Joe', age: 31 }, { name: 'Bob', age: 25 }, { name: 'Alic', age: 45 }]);
        this.source3 = Object(_utils__WEBPACK_IMPORTED_MODULE_4__["getStreamObj"])(this.source3$, "from([{ name: 'Joe', age: 31 }, { name: 'Bob', age: 25 }, { name: 'Alic', age: 45 }])");
        this.result2 = Object(_utils__WEBPACK_IMPORTED_MODULE_4__["getStreamObj"])(this.source3$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["skipUntil"])(this.source2$)), "from([{ name: 'Joe', age: 31 }, { name: 'Bob', age: 25 },\n    { name: 'Alic', age: 45 }]).pipe(skipUntil(timer(6000)))");
    }
    SkipUntilComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-skip-until',
            template: __webpack_require__(/*! ./skip-until.component.pug */ "./src/app/pages/filtering/skip-until/skip-until.component.pug"),
        })
    ], SkipUntilComponent);
    return SkipUntilComponent;
}());



/***/ }),

/***/ "./src/app/pages/filtering/skip-while/skip-while.component.pug":
/*!*********************************************************************!*\
  !*** ./src/app/pages/filtering/skip-while/skip-while.component.pug ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var req = __webpack_require__(/*! !./node_modules/pug-loader!./src/app/pages/filtering/skip-while/skip-while.component.pug */ "./node_modules/pug-loader/index.js!./src/app/pages/filtering/skip-while/skip-while.component.pug");
module.exports = (req['default'] || req).apply(req, [])

/***/ }),

/***/ "./src/app/pages/filtering/skip-while/skip-while.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/pages/filtering/skip-while/skip-while.component.ts ***!
  \********************************************************************/
/*! exports provided: SkipWhileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SkipWhileComponent", function() { return SkipWhileComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../utils */ "./src/app/pages/utils.ts");





var SkipWhileComponent = /** @class */ (function () {
    function SkipWhileComponent() {
        this.source1$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["interval"])(1000);
        this.source1 = Object(_utils__WEBPACK_IMPORTED_MODULE_4__["getStreamObj"])(this.source1$, "interval(1000)");
        this.result1 = Object(_utils__WEBPACK_IMPORTED_MODULE_4__["getStreamObj"])(this.source1$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["skipWhile"])(function (val) { return val < 5; })), "interval(1000).pipe(skipWhile(val => val < 5))");
        this.source2$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["from"])([{ name: 'Joe', age: 31 }, { name: 'Bob', age: 25 }, { name: 'Alic', age: 45 }]);
        this.source2 = Object(_utils__WEBPACK_IMPORTED_MODULE_4__["getStreamObj"])(this.source2$, "from([{ name: 'Joe', age: 31 }, { name: 'Bob', age: 25 }, { name: 'Alic', age: 45 }])");
        this.result2 = Object(_utils__WEBPACK_IMPORTED_MODULE_4__["getStreamObj"])(this.source2$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["skipWhile"])(function (val) { return val.age > 30; })), "from([{ name: 'Joe', age: 31 }, { name: 'Bob', age: 25 }, { name: 'Alic', age: 45 }])\n      .pipe(skipWhile(val => val.age > 30))");
        this.source3$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["from"])([2, 30, 22, 5, 60, 1]);
        this.source3 = Object(_utils__WEBPACK_IMPORTED_MODULE_4__["getStreamObj"])(this.source3$, "from([2, 30, 22, 5, 60, 1])");
        this.result3 = Object(_utils__WEBPACK_IMPORTED_MODULE_4__["getStreamObj"])(this.source3$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["skipWhile"])(function (val) { return val < 50; })), "from([2, 30, 22, 5, 60, 1]).pipe(skipWhile(val => val < 50))");
    }
    SkipWhileComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-skip-while',
            template: __webpack_require__(/*! ./skip-while.component.pug */ "./src/app/pages/filtering/skip-while/skip-while.component.pug"),
        })
    ], SkipWhileComponent);
    return SkipWhileComponent;
}());



/***/ }),

/***/ "./src/app/pages/filtering/skip/skip.component.pug":
/*!*********************************************************!*\
  !*** ./src/app/pages/filtering/skip/skip.component.pug ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var req = __webpack_require__(/*! !./node_modules/pug-loader!./src/app/pages/filtering/skip/skip.component.pug */ "./node_modules/pug-loader/index.js!./src/app/pages/filtering/skip/skip.component.pug");
module.exports = (req['default'] || req).apply(req, [])

/***/ }),

/***/ "./src/app/pages/filtering/skip/skip.component.ts":
/*!********************************************************!*\
  !*** ./src/app/pages/filtering/skip/skip.component.ts ***!
  \********************************************************/
/*! exports provided: SkipComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SkipComponent", function() { return SkipComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../utils */ "./src/app/pages/utils.ts");





var SkipComponent = /** @class */ (function () {
    function SkipComponent() {
        this.source1$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["interval"])(1000);
        this.source1 = Object(_utils__WEBPACK_IMPORTED_MODULE_4__["getStreamObj"])(this.source1$, "interval(1000)");
        this.result1 = Object(_utils__WEBPACK_IMPORTED_MODULE_4__["getStreamObj"])(this.source1$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["skip"])(5)), "interval(1000).pipe(skip(5))");
        this.source2$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["from"])([{ name: 'Joe', age: 31 }, { name: 'Bob', age: 25 }, { name: 'Alic', age: 45 }]);
        this.source2 = Object(_utils__WEBPACK_IMPORTED_MODULE_4__["getStreamObj"])(this.source2$, "from([{ name: 'Joe', age: 31 }, { name: 'Bob', age: 25 }, { name: 'Alic', age: 45 }])");
        this.result2 = Object(_utils__WEBPACK_IMPORTED_MODULE_4__["getStreamObj"])(this.source2$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["skip"])(5)), "from([{ name: 'Joe', age: 31 }, { name: 'Bob', age: 25 }, { name: 'Alic', age: 45 }]).pipe(skip(5))");
        this.source3$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["from"])([2, 30, 22, 5, 60, 1]);
        this.source3 = Object(_utils__WEBPACK_IMPORTED_MODULE_4__["getStreamObj"])(this.source3$, "from([2, 30, 22, 5, 60, 1])");
        this.result3 = Object(_utils__WEBPACK_IMPORTED_MODULE_4__["getStreamObj"])(this.source3$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["skip"])(5)), "from([2, 30, 22, 5, 60, 1]).pipe(skip(5))");
    }
    SkipComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-skip',
            template: __webpack_require__(/*! ./skip.component.pug */ "./src/app/pages/filtering/skip/skip.component.pug"),
        })
    ], SkipComponent);
    return SkipComponent;
}());



/***/ }),

/***/ "./src/app/pages/filtering/take-last/take-last.component.pug":
/*!*******************************************************************!*\
  !*** ./src/app/pages/filtering/take-last/take-last.component.pug ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var req = __webpack_require__(/*! !./node_modules/pug-loader!./src/app/pages/filtering/take-last/take-last.component.pug */ "./node_modules/pug-loader/index.js!./src/app/pages/filtering/take-last/take-last.component.pug");
module.exports = (req['default'] || req).apply(req, [])

/***/ }),

/***/ "./src/app/pages/filtering/take-last/take-last.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/pages/filtering/take-last/take-last.component.ts ***!
  \******************************************************************/
/*! exports provided: TakeLastComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TakeLastComponent", function() { return TakeLastComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../utils */ "./src/app/pages/utils.ts");





var TakeLastComponent = /** @class */ (function () {
    function TakeLastComponent() {
        this.source1$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["interval"])(1000);
        this.source1 = Object(_utils__WEBPACK_IMPORTED_MODULE_4__["getStreamObj"])(this.source1$, "interval(1000)");
        this.result1 = Object(_utils__WEBPACK_IMPORTED_MODULE_4__["getStreamObj"])(this.source1$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeLast"])(2)), "interval(1000).pipe(takeLast(2))");
        this.source2$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["from"])([{ name: 'Joe', age: 31 }, { name: 'Bob', age: 25 }, { name: 'Alic', age: 45 }]);
        this.source2 = Object(_utils__WEBPACK_IMPORTED_MODULE_4__["getStreamObj"])(this.source2$, "from([{ name: 'Joe', age: 31 },\n    { name: 'Bob', age: 25 }, { name: 'Alic', age: 45 }])");
        this.result2 = Object(_utils__WEBPACK_IMPORTED_MODULE_4__["getStreamObj"])(this.source2$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeLast"])(2)), "from([{ name: 'Joe', age: 31 },\n    { name: 'Bob', age: 25 }, { name: 'Alic', age: 45 }]).pipe(takeLast(2))");
        this.source3$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["from"])([2, 30, 22, 5, 60, 1]);
        this.source3 = Object(_utils__WEBPACK_IMPORTED_MODULE_4__["getStreamObj"])(this.source3$, "from([2, 30, 22, 5, 60, 1])");
        this.result3 = Object(_utils__WEBPACK_IMPORTED_MODULE_4__["getStreamObj"])(this.source3$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeLast"])(2)), "from([2, 30, 22, 5, 60, 1]).pipe(takeLast(2))");
    }
    TakeLastComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-take-last',
            template: __webpack_require__(/*! ./take-last.component.pug */ "./src/app/pages/filtering/take-last/take-last.component.pug"),
        })
    ], TakeLastComponent);
    return TakeLastComponent;
}());



/***/ }),

/***/ "./src/app/pages/filtering/take-until/take-until.component.pug":
/*!*********************************************************************!*\
  !*** ./src/app/pages/filtering/take-until/take-until.component.pug ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var req = __webpack_require__(/*! !./node_modules/pug-loader!./src/app/pages/filtering/take-until/take-until.component.pug */ "./node_modules/pug-loader/index.js!./src/app/pages/filtering/take-until/take-until.component.pug");
module.exports = (req['default'] || req).apply(req, [])

/***/ }),

/***/ "./src/app/pages/filtering/take-until/take-until.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/pages/filtering/take-until/take-until.component.ts ***!
  \********************************************************************/
/*! exports provided: TakeUntilComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TakeUntilComponent", function() { return TakeUntilComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../utils */ "./src/app/pages/utils.ts");





var TakeUntilComponent = /** @class */ (function () {
    function TakeUntilComponent() {
        this.source1$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["interval"])(1000);
        this.source1 = Object(_utils__WEBPACK_IMPORTED_MODULE_4__["getStreamObj"])(this.source1$, "interval(1000)");
        this.source2$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["timer"])(6000);
        this.source2 = Object(_utils__WEBPACK_IMPORTED_MODULE_4__["getStreamObj"])(this.source2$, "timer(6000)");
        this.result1 = Object(_utils__WEBPACK_IMPORTED_MODULE_4__["getStreamObj"])(this.source1$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeUntil"])(Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["timer"])(6000))), "interval(1000).pipe(takeUntil(timer(6000)))");
        this.source3$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["from"])([{ name: 'Joe', age: 31 }, { name: 'Bob', age: 25 }, { name: 'Alic', age: 45 }]);
        this.source3 = Object(_utils__WEBPACK_IMPORTED_MODULE_4__["getStreamObj"])(this.source3$, "from([{ name: 'Joe', age: 31 }, { name: 'Bob', age: 25 }, { name: 'Alic', age: 45 }])");
        this.result2 = Object(_utils__WEBPACK_IMPORTED_MODULE_4__["getStreamObj"])(this.source3$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeUntil"])(this.source2$)), "from([{ name: 'Joe', age: 31 }, { name: 'Bob', age: 25 },\n    { name: 'Alic', age: 45 }]).pipe(takeUntil(timer(6000)))");
    }
    TakeUntilComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-take-until',
            template: __webpack_require__(/*! ./take-until.component.pug */ "./src/app/pages/filtering/take-until/take-until.component.pug"),
        })
    ], TakeUntilComponent);
    return TakeUntilComponent;
}());



/***/ }),

/***/ "./src/app/pages/filtering/take-while/take-while.component.pug":
/*!*********************************************************************!*\
  !*** ./src/app/pages/filtering/take-while/take-while.component.pug ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var req = __webpack_require__(/*! !./node_modules/pug-loader!./src/app/pages/filtering/take-while/take-while.component.pug */ "./node_modules/pug-loader/index.js!./src/app/pages/filtering/take-while/take-while.component.pug");
module.exports = (req['default'] || req).apply(req, [])

/***/ }),

/***/ "./src/app/pages/filtering/take-while/take-while.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/pages/filtering/take-while/take-while.component.ts ***!
  \********************************************************************/
/*! exports provided: TakeWhileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TakeWhileComponent", function() { return TakeWhileComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../utils */ "./src/app/pages/utils.ts");





var TakeWhileComponent = /** @class */ (function () {
    function TakeWhileComponent() {
        this.source1$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["interval"])(1000);
        this.source1 = Object(_utils__WEBPACK_IMPORTED_MODULE_4__["getStreamObj"])(this.source1$, "interval(1000)");
        this.result1 = Object(_utils__WEBPACK_IMPORTED_MODULE_4__["getStreamObj"])(this.source1$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeWhile"])(function (val) { return val < 5; })), "interval(1000).pipe(takeWhile(val => val < 5))");
        this.source2$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["from"])([{ name: 'Joe', age: 31 }, { name: 'Bob', age: 25 }, { name: 'Alic', age: 45 }]);
        this.source2 = Object(_utils__WEBPACK_IMPORTED_MODULE_4__["getStreamObj"])(this.source2$, "from([{ name: 'Joe', age: 31 }, { name: 'Bob', age: 25 }, { name: 'Alic', age: 45 }])");
        this.result2 = Object(_utils__WEBPACK_IMPORTED_MODULE_4__["getStreamObj"])(this.source2$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeWhile"])(function (val) { return val.age > 30; })), "from([{ name: 'Joe', age: 31 }, { name: 'Bob', age: 25 }, { name: 'Alic', age: 45 }])\n      .pipe(takeWhile(val => val.age > 30))");
        this.source3$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["from"])([2, 30, 22, 5, 60, 1]);
        this.source3 = Object(_utils__WEBPACK_IMPORTED_MODULE_4__["getStreamObj"])(this.source3$, "from([2, 30, 22, 5, 60, 1])");
        this.result3 = Object(_utils__WEBPACK_IMPORTED_MODULE_4__["getStreamObj"])(this.source3$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeWhile"])(function (val) { return val < 50; })), "from([2, 30, 22, 5, 60, 1]).pipe(takeWhile(val => val < 50))");
    }
    TakeWhileComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-take-while',
            template: __webpack_require__(/*! ./take-while.component.pug */ "./src/app/pages/filtering/take-while/take-while.component.pug"),
        })
    ], TakeWhileComponent);
    return TakeWhileComponent;
}());



/***/ }),

/***/ "./src/app/pages/filtering/take/take.component.pug":
/*!*********************************************************!*\
  !*** ./src/app/pages/filtering/take/take.component.pug ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var req = __webpack_require__(/*! !./node_modules/pug-loader!./src/app/pages/filtering/take/take.component.pug */ "./node_modules/pug-loader/index.js!./src/app/pages/filtering/take/take.component.pug");
module.exports = (req['default'] || req).apply(req, [])

/***/ }),

/***/ "./src/app/pages/filtering/take/take.component.ts":
/*!********************************************************!*\
  !*** ./src/app/pages/filtering/take/take.component.ts ***!
  \********************************************************/
/*! exports provided: TakeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TakeComponent", function() { return TakeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../utils */ "./src/app/pages/utils.ts");





var TakeComponent = /** @class */ (function () {
    function TakeComponent() {
        this.source1$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["interval"])(1000);
        this.source1 = Object(_utils__WEBPACK_IMPORTED_MODULE_4__["getStreamObj"])(this.source1$, "interval(1000)");
        this.source2$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["timer"])(6000);
        this.source2 = Object(_utils__WEBPACK_IMPORTED_MODULE_4__["getStreamObj"])(this.source2$, "timer(6000)");
        this.result1 = Object(_utils__WEBPACK_IMPORTED_MODULE_4__["getStreamObj"])(this.source1$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeUntil"])(Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["timer"])(6000))), "interval(1000).pipe(takeUntil(timer(6000)))");
        this.source3$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["from"])([{ name: 'Joe', age: 31 }, { name: 'Bob', age: 25 }, { name: 'Alic', age: 45 }]);
        this.source3 = Object(_utils__WEBPACK_IMPORTED_MODULE_4__["getStreamObj"])(this.source3$, "from([{ name: 'Joe', age: 31 }, { name: 'Bob', age: 25 }, { name: 'Alic', age: 45 }])");
        this.result2 = Object(_utils__WEBPACK_IMPORTED_MODULE_4__["getStreamObj"])(this.source3$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeUntil"])(this.source2$)), "from([{ name: 'Joe', age: 31 }, { name: 'Bob', age: 25 },\n    { name: 'Alic', age: 45 }]).pipe(takeUntil(timer(6000)))");
    }
    TakeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-take',
            template: __webpack_require__(/*! ./take.component.pug */ "./src/app/pages/filtering/take/take.component.pug"),
        })
    ], TakeComponent);
    return TakeComponent;
}());



/***/ }),

/***/ "./src/app/pages/filtering/throttle-time/throttle-time.component.pug":
/*!***************************************************************************!*\
  !*** ./src/app/pages/filtering/throttle-time/throttle-time.component.pug ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var req = __webpack_require__(/*! !./node_modules/pug-loader!./src/app/pages/filtering/throttle-time/throttle-time.component.pug */ "./node_modules/pug-loader/index.js!./src/app/pages/filtering/throttle-time/throttle-time.component.pug");
module.exports = (req['default'] || req).apply(req, [])

/***/ }),

/***/ "./src/app/pages/filtering/throttle-time/throttle-time.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/pages/filtering/throttle-time/throttle-time.component.ts ***!
  \**************************************************************************/
/*! exports provided: ThrottleTimeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ThrottleTimeComponent", function() { return ThrottleTimeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../utils */ "./src/app/pages/utils.ts");





var ThrottleTimeComponent = /** @class */ (function () {
    function ThrottleTimeComponent() {
        this.source1$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["interval"])(1000);
        this.source1 = Object(_utils__WEBPACK_IMPORTED_MODULE_4__["getStreamObj"])(this.source1$, "interval(1000)");
        this.result1 = Object(_utils__WEBPACK_IMPORTED_MODULE_4__["getStreamObj"])(this.source1$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["throttleTime"])(3000)), "interval(1000).pipe(throttleTime(3000))");
        this.source2$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["fromEvent"])(document, 'click');
        this.source2 = Object(_utils__WEBPACK_IMPORTED_MODULE_4__["getStreamObj"])(this.source2$, "fromEvent(document, 'click')");
        this.result2 = Object(_utils__WEBPACK_IMPORTED_MODULE_4__["getStreamObj"])(this.source2$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["throttleTime"])(2000)), "fromEvent(document, 'click').pipe(throttleTime(2000))");
    }
    ThrottleTimeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-throttle-time',
            template: __webpack_require__(/*! ./throttle-time.component.pug */ "./src/app/pages/filtering/throttle-time/throttle-time.component.pug"),
        })
    ], ThrottleTimeComponent);
    return ThrottleTimeComponent;
}());



/***/ }),

/***/ "./src/app/pages/filtering/throttle/throttle.component.pug":
/*!*****************************************************************!*\
  !*** ./src/app/pages/filtering/throttle/throttle.component.pug ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var req = __webpack_require__(/*! !./node_modules/pug-loader!./src/app/pages/filtering/throttle/throttle.component.pug */ "./node_modules/pug-loader/index.js!./src/app/pages/filtering/throttle/throttle.component.pug");
module.exports = (req['default'] || req).apply(req, [])

/***/ }),

/***/ "./src/app/pages/filtering/throttle/throttle.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/pages/filtering/throttle/throttle.component.ts ***!
  \****************************************************************/
/*! exports provided: ThrottleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ThrottleComponent", function() { return ThrottleComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../utils */ "./src/app/pages/utils.ts");





var ThrottleComponent = /** @class */ (function () {
    function ThrottleComponent() {
        this.source1$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["interval"])(1000);
        this.source1 = Object(_utils__WEBPACK_IMPORTED_MODULE_4__["getStreamObj"])(this.source1$, "interval(1000)");
        this.result1 = Object(_utils__WEBPACK_IMPORTED_MODULE_4__["getStreamObj"])(this.source1$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["throttle"])(function () { return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["interval"])(3000); })), "interval(1000).pipe(throttle(() => interval(3000)))");
        this.result2 = Object(_utils__WEBPACK_IMPORTED_MODULE_4__["getStreamObj"])(this.source1$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["throttle"])(function (val) { return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["interval"])(val * 200); })), "interval(1000).pipe(throttle((val) => interval(val * 200)))");
        this.source2$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["fromEvent"])(document, 'click');
        this.source2 = Object(_utils__WEBPACK_IMPORTED_MODULE_4__["getStreamObj"])(this.source2$, "fromEvent(document, 'click')");
        this.result3 = Object(_utils__WEBPACK_IMPORTED_MODULE_4__["getStreamObj"])(this.source2$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["throttle"])(function () { return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["interval"])(2000); })), "fromEvent(document, 'click').pipe(throttle(() => interval(2000)))");
    }
    ThrottleComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-throttle',
            template: __webpack_require__(/*! ./throttle.component.pug */ "./src/app/pages/filtering/throttle/throttle.component.pug"),
        })
    ], ThrottleComponent);
    return ThrottleComponent;
}());



/***/ }),

/***/ "./src/app/pages/multicasting/multicasting.routing.ts":
/*!************************************************************!*\
  !*** ./src/app/pages/multicasting/multicasting.routing.ts ***!
  \************************************************************/
/*! exports provided: multicastingPagesRoutes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "multicastingPagesRoutes", function() { return multicastingPagesRoutes; });
/* harmony import */ var _multicasting_multicasting_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./multicasting/multicasting.component */ "./src/app/pages/multicasting/multicasting/multicasting.component.ts");
/* harmony import */ var _publish_publish_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./publish/publish.component */ "./src/app/pages/multicasting/publish/publish.component.ts");
/* harmony import */ var _publish_replay_publish_replay_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./publish-replay/publish-replay.component */ "./src/app/pages/multicasting/publish-replay/publish-replay.component.ts");
/* harmony import */ var _publish_behavior_publish_behavior_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./publish-behavior/publish-behavior.component */ "./src/app/pages/multicasting/publish-behavior/publish-behavior.component.ts");
/* harmony import */ var _publish_last_publish_last_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./publish-last/publish-last.component */ "./src/app/pages/multicasting/publish-last/publish-last.component.ts");
/* harmony import */ var _ref_count_ref_count_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ref-count/ref-count.component */ "./src/app/pages/multicasting/ref-count/ref-count.component.ts");
/* harmony import */ var _share_share_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./share/share.component */ "./src/app/pages/multicasting/share/share.component.ts");
/* harmony import */ var _share_replay_share_replay_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./share-replay/share-replay.component */ "./src/app/pages/multicasting/share-replay/share-replay.component.ts");








var multicastingPagesRoutes = [
    { path: 'multicasting', component: _multicasting_multicasting_component__WEBPACK_IMPORTED_MODULE_0__["MulticastingComponent"] },
    { path: 'publish', component: _publish_publish_component__WEBPACK_IMPORTED_MODULE_1__["PublishComponent"] },
    { path: 'publish-behavior', component: _publish_behavior_publish_behavior_component__WEBPACK_IMPORTED_MODULE_3__["PublishBehaviorComponent"] },
    { path: 'publish-last', component: _publish_last_publish_last_component__WEBPACK_IMPORTED_MODULE_4__["PublishLastComponent"] },
    { path: 'publish-replay', component: _publish_replay_publish_replay_component__WEBPACK_IMPORTED_MODULE_2__["PublishReplayComponent"] },
    { path: 'ref-count', component: _ref_count_ref_count_component__WEBPACK_IMPORTED_MODULE_5__["RefCountComponent"] },
    { path: 'share', component: _share_share_component__WEBPACK_IMPORTED_MODULE_6__["ShareComponent"] },
    { path: 'share-replay', component: _share_replay_share_replay_component__WEBPACK_IMPORTED_MODULE_7__["ShareReplayComponent"] },
];


/***/ }),

/***/ "./src/app/pages/multicasting/multicasting/multicasting.component.pug":
/*!****************************************************************************!*\
  !*** ./src/app/pages/multicasting/multicasting/multicasting.component.pug ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var req = __webpack_require__(/*! !./node_modules/pug-loader!./src/app/pages/multicasting/multicasting/multicasting.component.pug */ "./node_modules/pug-loader/index.js!./src/app/pages/multicasting/multicasting/multicasting.component.pug");
module.exports = (req['default'] || req).apply(req, [])

/***/ }),

/***/ "./src/app/pages/multicasting/multicasting/multicasting.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/pages/multicasting/multicasting/multicasting.component.ts ***!
  \***************************************************************************/
/*! exports provided: MulticastingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MulticastingComponent", function() { return MulticastingComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../utils */ "./src/app/pages/utils.ts");





var MulticastingComponent = /** @class */ (function () {
    function MulticastingComponent() {
        var _this = this;
        this.subject = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.replaySubject = new rxjs__WEBPACK_IMPORTED_MODULE_2__["ReplaySubject"]();
        this.source1$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["interval"])(1000).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["multicast"])(function () { return _this.subject; }));
        this.source1 = Object(_utils__WEBPACK_IMPORTED_MODULE_4__["getStreamObj"])(this.source1$, "interval(1000).pipe(multicast(() => this.subject))", '', false);
        this.result1 = Object(_utils__WEBPACK_IMPORTED_MODULE_4__["getStreamObj"])(this.source1$, "\u041F\u043E\u0434\u043F\u0438\u0441\u044B\u0432\u0430\u0435\u043C\u0441\u044F \u0441\u0440\u0430\u0437\u0443", "", false);
        this.result2 = Object(_utils__WEBPACK_IMPORTED_MODULE_4__["getStreamObj"])(this.source1$, "\u041F\u043E\u0434\u043F\u0438\u0441\u044B\u0432\u0430\u0435\u043C\u0441\u044F \u0447\u0435\u0440\u0435\u0437 4 \u0441\u0435\u043A\u0443\u043D\u0434\u044B", "", false, 4000);
        this.source2$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["interval"])(1000).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["multicast"])(function () { return _this.replaySubject; }));
        this.source2 = Object(_utils__WEBPACK_IMPORTED_MODULE_4__["getStreamObj"])(this.source2$, "interval(1000).pipe(multicast(() => this.replaySubject))", '', false);
        this.result3 = Object(_utils__WEBPACK_IMPORTED_MODULE_4__["getStreamObj"])(this.source2$, "\u041F\u043E\u0434\u043F\u0438\u0441\u044B\u0432\u0430\u0435\u043C\u0441\u044F \u0441\u0440\u0430\u0437\u0443", "", false);
        this.result4 = Object(_utils__WEBPACK_IMPORTED_MODULE_4__["getStreamObj"])(this.source2$, "\u041F\u043E\u0434\u043F\u0438\u0441\u044B\u0432\u0430\u0435\u043C\u0441\u044F \u0447\u0435\u0440\u0435\u0437 4 \u0441\u0435\u043A\u0443\u043D\u0434\u044B", "", false, 4000);
    }
    MulticastingComponent.prototype.ngOnInit = function () {
        this.source1$.connect();
        this.source2$.connect();
    };
    MulticastingComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-multicasting',
            template: __webpack_require__(/*! ./multicasting.component.pug */ "./src/app/pages/multicasting/multicasting/multicasting.component.pug"),
        })
    ], MulticastingComponent);
    return MulticastingComponent;
}());



/***/ }),

/***/ "./src/app/pages/multicasting/publish-behavior/publish-behavior.component.pug":
/*!************************************************************************************!*\
  !*** ./src/app/pages/multicasting/publish-behavior/publish-behavior.component.pug ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var req = __webpack_require__(/*! !./node_modules/pug-loader!./src/app/pages/multicasting/publish-behavior/publish-behavior.component.pug */ "./node_modules/pug-loader/index.js!./src/app/pages/multicasting/publish-behavior/publish-behavior.component.pug");
module.exports = (req['default'] || req).apply(req, [])

/***/ }),

/***/ "./src/app/pages/multicasting/publish-behavior/publish-behavior.component.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/pages/multicasting/publish-behavior/publish-behavior.component.ts ***!
  \***********************************************************************************/
/*! exports provided: PublishBehaviorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PublishBehaviorComponent", function() { return PublishBehaviorComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../utils */ "./src/app/pages/utils.ts");





var PublishBehaviorComponent = /** @class */ (function () {
    function PublishBehaviorComponent() {
        this.source1$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["interval"])(1000).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["publishBehavior"])(42));
        this.source1 = Object(_utils__WEBPACK_IMPORTED_MODULE_4__["getStreamObj"])(this.source1$, "interval(1000).pipe(publishBehavior(42))");
        this.result1 = Object(_utils__WEBPACK_IMPORTED_MODULE_4__["getStreamObj"])(this.source1$, "\u041F\u043E\u0434\u043F\u0438\u0441\u044B\u0432\u0430\u0435\u043C\u0441\u044F \u0441\u0440\u0430\u0437\u0443", "", false);
        this.result2 = Object(_utils__WEBPACK_IMPORTED_MODULE_4__["getStreamObj"])(this.source1$, "\u041F\u043E\u0434\u043F\u0438\u0441\u044B\u0432\u0430\u0435\u043C\u0441\u044F \u0447\u0435\u0440\u0435\u0437 4 \u0441\u0435\u043A\u0443\u043D\u0434\u044B", "", false, 4000);
    }
    PublishBehaviorComponent.prototype.ngOnInit = function () {
        this.source1$.connect();
    };
    PublishBehaviorComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-publish-behavior',
            template: __webpack_require__(/*! ./publish-behavior.component.pug */ "./src/app/pages/multicasting/publish-behavior/publish-behavior.component.pug"),
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], PublishBehaviorComponent);
    return PublishBehaviorComponent;
}());



/***/ }),

/***/ "./src/app/pages/multicasting/publish-last/publish-last.component.pug":
/*!****************************************************************************!*\
  !*** ./src/app/pages/multicasting/publish-last/publish-last.component.pug ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var req = __webpack_require__(/*! !./node_modules/pug-loader!./src/app/pages/multicasting/publish-last/publish-last.component.pug */ "./node_modules/pug-loader/index.js!./src/app/pages/multicasting/publish-last/publish-last.component.pug");
module.exports = (req['default'] || req).apply(req, [])

/***/ }),

/***/ "./src/app/pages/multicasting/publish-last/publish-last.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/pages/multicasting/publish-last/publish-last.component.ts ***!
  \***************************************************************************/
/*! exports provided: PublishLastComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PublishLastComponent", function() { return PublishLastComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../utils */ "./src/app/pages/utils.ts");





var PublishLastComponent = /** @class */ (function () {
    function PublishLastComponent() {
        this.source1$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["interval"])(1000).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(8), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["publishLast"])());
        this.source1 = Object(_utils__WEBPACK_IMPORTED_MODULE_4__["getStreamObj"])(this.source1$, "interval(1000).pipe(take(8), publishLast())");
        this.result1 = Object(_utils__WEBPACK_IMPORTED_MODULE_4__["getStreamObj"])(this.source1$, "\u041F\u043E\u0434\u043F\u0438\u0441\u044B\u0432\u0430\u0435\u043C\u0441\u044F \u0441\u0440\u0430\u0437\u0443", "", false);
        this.result2 = Object(_utils__WEBPACK_IMPORTED_MODULE_4__["getStreamObj"])(this.source1$, "\u041F\u043E\u0434\u043F\u0438\u0441\u044B\u0432\u0430\u0435\u043C\u0441\u044F \u0447\u0435\u0440\u0435\u0437 4 \u0441\u0435\u043A\u0443\u043D\u0434\u044B", "", false, 4000);
    }
    PublishLastComponent.prototype.ngOnInit = function () {
        this.source1$.connect();
    };
    PublishLastComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-last-replay',
            template: __webpack_require__(/*! ./publish-last.component.pug */ "./src/app/pages/multicasting/publish-last/publish-last.component.pug"),
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], PublishLastComponent);
    return PublishLastComponent;
}());



/***/ }),

/***/ "./src/app/pages/multicasting/publish-replay/publish-replay.component.pug":
/*!********************************************************************************!*\
  !*** ./src/app/pages/multicasting/publish-replay/publish-replay.component.pug ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var req = __webpack_require__(/*! !./node_modules/pug-loader!./src/app/pages/multicasting/publish-replay/publish-replay.component.pug */ "./node_modules/pug-loader/index.js!./src/app/pages/multicasting/publish-replay/publish-replay.component.pug");
module.exports = (req['default'] || req).apply(req, [])

/***/ }),

/***/ "./src/app/pages/multicasting/publish-replay/publish-replay.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/pages/multicasting/publish-replay/publish-replay.component.ts ***!
  \*******************************************************************************/
/*! exports provided: PublishReplayComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PublishReplayComponent", function() { return PublishReplayComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../utils */ "./src/app/pages/utils.ts");





var PublishReplayComponent = /** @class */ (function () {
    function PublishReplayComponent() {
        this.source1$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["interval"])(1000).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["publishReplay"])());
        this.source1 = Object(_utils__WEBPACK_IMPORTED_MODULE_4__["getStreamObj"])(this.source1$, "interval(1000).pipe(publishReplay())");
        this.result1 = Object(_utils__WEBPACK_IMPORTED_MODULE_4__["getStreamObj"])(this.source1$, "\u041F\u043E\u0434\u043F\u0438\u0441\u044B\u0432\u0430\u0435\u043C\u0441\u044F \u0441\u0440\u0430\u0437\u0443", "", false);
        this.result2 = Object(_utils__WEBPACK_IMPORTED_MODULE_4__["getStreamObj"])(this.source1$, "\u041F\u043E\u0434\u043F\u0438\u0441\u044B\u0432\u0430\u0435\u043C\u0441\u044F \u0447\u0435\u0440\u0435\u0437 4 \u0441\u0435\u043A\u0443\u043D\u0434\u044B", "", false, 4000);
    }
    PublishReplayComponent.prototype.ngOnInit = function () {
        this.source1$.connect();
    };
    PublishReplayComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-publish-replay',
            template: __webpack_require__(/*! ./publish-replay.component.pug */ "./src/app/pages/multicasting/publish-replay/publish-replay.component.pug"),
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], PublishReplayComponent);
    return PublishReplayComponent;
}());



/***/ }),

/***/ "./src/app/pages/multicasting/publish/publish.component.pug":
/*!******************************************************************!*\
  !*** ./src/app/pages/multicasting/publish/publish.component.pug ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var req = __webpack_require__(/*! !./node_modules/pug-loader!./src/app/pages/multicasting/publish/publish.component.pug */ "./node_modules/pug-loader/index.js!./src/app/pages/multicasting/publish/publish.component.pug");
module.exports = (req['default'] || req).apply(req, [])

/***/ }),

/***/ "./src/app/pages/multicasting/publish/publish.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/pages/multicasting/publish/publish.component.ts ***!
  \*****************************************************************/
/*! exports provided: PublishComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PublishComponent", function() { return PublishComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../utils */ "./src/app/pages/utils.ts");





var PublishComponent = /** @class */ (function () {
    function PublishComponent() {
        this.source1$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["interval"])(1000).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["publish"])());
        this.source1 = Object(_utils__WEBPACK_IMPORTED_MODULE_4__["getStreamObj"])(this.source1$, "interval(1000).pipe(publish())");
        this.result1 = Object(_utils__WEBPACK_IMPORTED_MODULE_4__["getStreamObj"])(this.source1$, "\u041F\u043E\u0434\u043F\u0438\u0441\u044B\u0432\u0430\u0435\u043C\u0441\u044F \u0441\u0440\u0430\u0437\u0443", "", false);
        this.result2 = Object(_utils__WEBPACK_IMPORTED_MODULE_4__["getStreamObj"])(this.source1$, "\u041F\u043E\u0434\u043F\u0438\u0441\u044B\u0432\u0430\u0435\u043C\u0441\u044F \u0447\u0435\u0440\u0435\u0437 4 \u0441\u0435\u043A\u0443\u043D\u0434\u044B", "", false, 4000);
    }
    PublishComponent.prototype.ngOnInit = function () {
        this.source1$.connect();
    };
    PublishComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-publish',
            template: __webpack_require__(/*! ./publish.component.pug */ "./src/app/pages/multicasting/publish/publish.component.pug"),
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], PublishComponent);
    return PublishComponent;
}());



/***/ }),

/***/ "./src/app/pages/multicasting/ref-count/ref-count.component.pug":
/*!**********************************************************************!*\
  !*** ./src/app/pages/multicasting/ref-count/ref-count.component.pug ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var req = __webpack_require__(/*! !./node_modules/pug-loader!./src/app/pages/multicasting/ref-count/ref-count.component.pug */ "./node_modules/pug-loader/index.js!./src/app/pages/multicasting/ref-count/ref-count.component.pug");
module.exports = (req['default'] || req).apply(req, [])

/***/ }),

/***/ "./src/app/pages/multicasting/ref-count/ref-count.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/pages/multicasting/ref-count/ref-count.component.ts ***!
  \*********************************************************************/
/*! exports provided: RefCountComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RefCountComponent", function() { return RefCountComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../utils */ "./src/app/pages/utils.ts");





var RefCountComponent = /** @class */ (function () {
    function RefCountComponent() {
        this.source1$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["interval"])(1000).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["publish"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["refCount"])());
        this.source1 = Object(_utils__WEBPACK_IMPORTED_MODULE_4__["getStreamObj"])(this.source1$, "interval(1000).pipe(publish(), refCount())");
        this.result1 = Object(_utils__WEBPACK_IMPORTED_MODULE_4__["getStreamObj"])(this.source1$, "\u041F\u043E\u0434\u043F\u0438\u0441\u044B\u0432\u0430\u0435\u043C\u0441\u044F \u0441\u0440\u0430\u0437\u0443", "", false);
        this.result2 = Object(_utils__WEBPACK_IMPORTED_MODULE_4__["getStreamObj"])(this.source1$, "\u041F\u043E\u0434\u043F\u0438\u0441\u044B\u0432\u0430\u0435\u043C\u0441\u044F \u0447\u0435\u0440\u0435\u0437 4 \u0441\u0435\u043A\u0443\u043D\u0434\u044B", "", false, 4000);
    }
    RefCountComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-ref-count',
            template: __webpack_require__(/*! ./ref-count.component.pug */ "./src/app/pages/multicasting/ref-count/ref-count.component.pug"),
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], RefCountComponent);
    return RefCountComponent;
}());



/***/ }),

/***/ "./src/app/pages/multicasting/share-replay/share-replay.component.pug":
/*!****************************************************************************!*\
  !*** ./src/app/pages/multicasting/share-replay/share-replay.component.pug ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var req = __webpack_require__(/*! !./node_modules/pug-loader!./src/app/pages/multicasting/share-replay/share-replay.component.pug */ "./node_modules/pug-loader/index.js!./src/app/pages/multicasting/share-replay/share-replay.component.pug");
module.exports = (req['default'] || req).apply(req, [])

/***/ }),

/***/ "./src/app/pages/multicasting/share-replay/share-replay.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/pages/multicasting/share-replay/share-replay.component.ts ***!
  \***************************************************************************/
/*! exports provided: ShareReplayComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShareReplayComponent", function() { return ShareReplayComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../utils */ "./src/app/pages/utils.ts");





var ShareReplayComponent = /** @class */ (function () {
    function ShareReplayComponent() {
        this.source1$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["interval"])(1000).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["shareReplay"])());
        this.source1 = Object(_utils__WEBPACK_IMPORTED_MODULE_4__["getStreamObj"])(this.source1$, "interval(1000).pipe(shareReplay())");
        this.result1 = Object(_utils__WEBPACK_IMPORTED_MODULE_4__["getStreamObj"])(this.source1$, "\u041F\u043E\u0434\u043F\u0438\u0441\u044B\u0432\u0430\u0435\u043C\u0441\u044F \u0441\u0440\u0430\u0437\u0443", "", false);
        this.result2 = Object(_utils__WEBPACK_IMPORTED_MODULE_4__["getStreamObj"])(this.source1$, "\u041F\u043E\u0434\u043F\u0438\u0441\u044B\u0432\u0430\u0435\u043C\u0441\u044F \u0447\u0435\u0440\u0435\u0437 4 \u0441\u0435\u043A\u0443\u043D\u0434\u044B", "", false, 4000);
    }
    ShareReplayComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-share-replay',
            template: __webpack_require__(/*! ./share-replay.component.pug */ "./src/app/pages/multicasting/share-replay/share-replay.component.pug"),
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ShareReplayComponent);
    return ShareReplayComponent;
}());



/***/ }),

/***/ "./src/app/pages/multicasting/share/share.component.pug":
/*!**************************************************************!*\
  !*** ./src/app/pages/multicasting/share/share.component.pug ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var req = __webpack_require__(/*! !./node_modules/pug-loader!./src/app/pages/multicasting/share/share.component.pug */ "./node_modules/pug-loader/index.js!./src/app/pages/multicasting/share/share.component.pug");
module.exports = (req['default'] || req).apply(req, [])

/***/ }),

/***/ "./src/app/pages/multicasting/share/share.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/pages/multicasting/share/share.component.ts ***!
  \*************************************************************/
/*! exports provided: ShareComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShareComponent", function() { return ShareComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../utils */ "./src/app/pages/utils.ts");





var ShareComponent = /** @class */ (function () {
    function ShareComponent() {
        this.source1$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["interval"])(1000).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["share"])());
        this.source1 = Object(_utils__WEBPACK_IMPORTED_MODULE_4__["getStreamObj"])(this.source1$, "interval(1000).pipe(share())");
        this.result1 = Object(_utils__WEBPACK_IMPORTED_MODULE_4__["getStreamObj"])(this.source1$, "\u041F\u043E\u0434\u043F\u0438\u0441\u044B\u0432\u0430\u0435\u043C\u0441\u044F \u0441\u0440\u0430\u0437\u0443", "", false);
        this.result2 = Object(_utils__WEBPACK_IMPORTED_MODULE_4__["getStreamObj"])(this.source1$, "\u041F\u043E\u0434\u043F\u0438\u0441\u044B\u0432\u0430\u0435\u043C\u0441\u044F \u0447\u0435\u0440\u0435\u0437 4 \u0441\u0435\u043A\u0443\u043D\u0434\u044B", "", false, 4000);
    }
    ShareComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-share',
            template: __webpack_require__(/*! ./share.component.pug */ "./src/app/pages/multicasting/share/share.component.pug"),
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ShareComponent);
    return ShareComponent;
}());



/***/ }),

/***/ "./src/app/pages/pages.module.ts":
/*!***************************************!*\
  !*** ./src/app/pages/pages.module.ts ***!
  \***************************************/
/*! exports provided: PagesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PagesModule", function() { return PagesModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var ramda__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ramda */ "./node_modules/ramda/es/index.js");
/* harmony import */ var _pages_filtering_filtering_routing__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../pages/filtering/filtering.routing */ "./src/app/pages/filtering/filtering.routing.ts");
/* harmony import */ var _pages_combination_combination_routing__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../pages/combination/combination.routing */ "./src/app/pages/combination/combination.routing.ts");
/* harmony import */ var _pages_conditional_conditional_routing__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../pages/conditional/conditional.routing */ "./src/app/pages/conditional/conditional.routing.ts");
/* harmony import */ var _pages_creation_creation_routing__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../pages/creation/creation.routing */ "./src/app/pages/creation/creation.routing.ts");
/* harmony import */ var _pages_transformation_transformation_routing__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../pages/transformation/transformation.routing */ "./src/app/pages/transformation/transformation.routing.ts");
/* harmony import */ var _pages_subjects_subjects_routing__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../pages/subjects/subjects.routing */ "./src/app/pages/subjects/subjects.routing.ts");
/* harmony import */ var _pages_tasks_tasks_routing__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../pages/tasks/tasks.routing */ "./src/app/pages/tasks/tasks.routing.ts");
/* harmony import */ var _pages_multicasting_multicasting_routing__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../pages/multicasting/multicasting.routing */ "./src/app/pages/multicasting/multicasting.routing.ts");
/* harmony import */ var _ui_ui_code_ui_code_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../ui/ui-code/ui-code.component */ "./src/app/ui/ui-code/ui-code.component.ts");
/* harmony import */ var _draw_stream_draw_stream_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./draw-stream/draw-stream.component */ "./src/app/pages/draw-stream/draw-stream.component.ts");














var componentsList = [
    _pages_combination_combination_routing__WEBPACK_IMPORTED_MODULE_5__["combinationPagesRoutes"],
    _pages_conditional_conditional_routing__WEBPACK_IMPORTED_MODULE_6__["conditionalPagesRoutes"],
    _pages_creation_creation_routing__WEBPACK_IMPORTED_MODULE_7__["creationPagesRoutes"],
    _pages_filtering_filtering_routing__WEBPACK_IMPORTED_MODULE_4__["filteringPagesRoutes"],
    _pages_transformation_transformation_routing__WEBPACK_IMPORTED_MODULE_8__["transformationPagesRoutes"],
    _pages_subjects_subjects_routing__WEBPACK_IMPORTED_MODULE_9__["subjectsPagesRoutes"],
    _pages_tasks_tasks_routing__WEBPACK_IMPORTED_MODULE_10__["tasksPagesRoutes"],
    _pages_multicasting_multicasting_routing__WEBPACK_IMPORTED_MODULE_11__["multicastingPagesRoutes"],
];
var PagesModule = /** @class */ (function () {
    function PagesModule() {
    }
    PagesModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _draw_stream_draw_stream_component__WEBPACK_IMPORTED_MODULE_13__["DrawStreamComponent"],
                _ui_ui_code_ui_code_component__WEBPACK_IMPORTED_MODULE_12__["UiCodeComponent"],
                Object(ramda__WEBPACK_IMPORTED_MODULE_3__["map"])(Object(ramda__WEBPACK_IMPORTED_MODULE_3__["map"])(Object(ramda__WEBPACK_IMPORTED_MODULE_3__["prop"])('component')))(componentsList)
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]
            ],
            exports: [
                _draw_stream_draw_stream_component__WEBPACK_IMPORTED_MODULE_13__["DrawStreamComponent"],
                _ui_ui_code_ui_code_component__WEBPACK_IMPORTED_MODULE_12__["UiCodeComponent"],
            ]
        })
    ], PagesModule);
    return PagesModule;
}());



/***/ }),

/***/ "./src/app/pages/pages.routing.ts":
/*!****************************************!*\
  !*** ./src/app/pages/pages.routing.ts ***!
  \****************************************/
/*! exports provided: pagesRoutes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pagesRoutes", function() { return pagesRoutes; });
/* harmony import */ var _creation_creation_routing__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./creation/creation.routing */ "./src/app/pages/creation/creation.routing.ts");
/* harmony import */ var _conditional_conditional_routing__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./conditional/conditional.routing */ "./src/app/pages/conditional/conditional.routing.ts");
/* harmony import */ var _combination_combination_routing__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./combination/combination.routing */ "./src/app/pages/combination/combination.routing.ts");
/* harmony import */ var _filtering_filtering_routing__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./filtering/filtering.routing */ "./src/app/pages/filtering/filtering.routing.ts");
/* harmony import */ var _transformation_transformation_routing__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./transformation/transformation.routing */ "./src/app/pages/transformation/transformation.routing.ts");
/* harmony import */ var _subjects_subjects_routing__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./subjects/subjects.routing */ "./src/app/pages/subjects/subjects.routing.ts");
/* harmony import */ var _tasks_tasks_routing__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./tasks/tasks.routing */ "./src/app/pages/tasks/tasks.routing.ts");
/* harmony import */ var _multicasting_multicasting_routing__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./multicasting/multicasting.routing */ "./src/app/pages/multicasting/multicasting.routing.ts");








var pagesRoutes = _creation_creation_routing__WEBPACK_IMPORTED_MODULE_0__["creationPagesRoutes"].concat(_conditional_conditional_routing__WEBPACK_IMPORTED_MODULE_1__["conditionalPagesRoutes"], _combination_combination_routing__WEBPACK_IMPORTED_MODULE_2__["combinationPagesRoutes"], _filtering_filtering_routing__WEBPACK_IMPORTED_MODULE_3__["filteringPagesRoutes"], _transformation_transformation_routing__WEBPACK_IMPORTED_MODULE_4__["transformationPagesRoutes"], _subjects_subjects_routing__WEBPACK_IMPORTED_MODULE_5__["subjectsPagesRoutes"], _tasks_tasks_routing__WEBPACK_IMPORTED_MODULE_6__["tasksPagesRoutes"], _multicasting_multicasting_routing__WEBPACK_IMPORTED_MODULE_7__["multicastingPagesRoutes"]);


/***/ }),

/***/ "./src/app/pages/subjects/async-subject/async-subject.component.pug":
/*!**************************************************************************!*\
  !*** ./src/app/pages/subjects/async-subject/async-subject.component.pug ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var req = __webpack_require__(/*! !./node_modules/pug-loader!./src/app/pages/subjects/async-subject/async-subject.component.pug */ "./node_modules/pug-loader/index.js!./src/app/pages/subjects/async-subject/async-subject.component.pug");
module.exports = (req['default'] || req).apply(req, [])

/***/ }),

/***/ "./src/app/pages/subjects/async-subject/async-subject.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/pages/subjects/async-subject/async-subject.component.ts ***!
  \*************************************************************************/
/*! exports provided: AsyncSubjectComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AsyncSubjectComponent", function() { return AsyncSubjectComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utils */ "./src/app/pages/utils.ts");




var AsyncSubjectComponent = /** @class */ (function () {
    function AsyncSubjectComponent() {
        this.sub = new rxjs__WEBPACK_IMPORTED_MODULE_2__["AsyncSubject"]();
        this.result1 = Object(_utils__WEBPACK_IMPORTED_MODULE_3__["getStreamObj"])(this.sub, "\u041F\u043E\u0434\u043F\u0438\u0441\u044B\u0432\u0430\u0435\u043C\u0441\u044F \u0441\u0440\u0430\u0437\u0443, \u0434\u043E\u0445\u043E\u0434\u0438\u0442 \u0442\u043E\u043B\u044C\u043A\u043E \u043F\u043E\u0441\u043B\u0435\u0434\u043D\u0438\u0439 \u0432\u044B\u0441\u0442\u0440\u0435\u043B, \u043F\u0435\u0440\u0435\u0434 \u0437\u0430\u0432\u0435\u0440\u0448\u0435\u043D\u0438\u0435\u043C \u043F\u043E\u0442\u043E\u043A\u0430");
        this.result2 = Object(_utils__WEBPACK_IMPORTED_MODULE_3__["getStreamObj"])(this.sub, "\u041F\u043E\u0434\u043F\u0438\u0441\u044B\u0432\u0430\u0435\u043C\u0441\u044F \u0447\u0435\u0440\u0435\u0437 2000, \u0434\u043E\u0445\u043E\u0434\u0438\u0442 \u0442\u043E\u043B\u044C\u043A\u043E \u043F\u043E\u0441\u043B\u0435\u0434\u043D\u0438\u0439 \u0432\u044B\u0441\u0442\u0440\u0435\u043B, \u043F\u0435\u0440\u0435\u0434 \u0437\u0430\u0432\u0435\u0440\u0448\u0435\u043D\u0438\u0435\u043C \u043F\u043E\u0442\u043E\u043A\u0430", '', false, 2000);
        this.result3 = Object(_utils__WEBPACK_IMPORTED_MODULE_3__["getStreamObj"])(this.sub, "\u041F\u043E\u0434\u043F\u0438\u0441\u044B\u0432\u0430\u0435\u043C\u0441\u044F \u0447\u0435\u0440\u0435\u0437 8000, \u0434\u043E\u0445\u043E\u0434\u0438\u0442 \u0442\u043E\u043B\u044C\u043A\u043E \u043F\u043E\u0441\u043B\u0435\u0434\u043D\u0438\u0439 \u0432\u044B\u0441\u0442\u0440\u0435\u043B, \u043F\u0435\u0440\u0435\u0434 \u0437\u0430\u0432\u0435\u0440\u0448\u0435\u043D\u0438\u0435\u043C \u043F\u043E\u0442\u043E\u043A\u0430", '', false, 8000);
    }
    AsyncSubjectComponent.prototype.ngOnInit = function () {
        var _this = this;
        var i = 0;
        var timerId = setInterval(function () {
            i = i + 1;
            _this.sub.next(i);
        }, 1000);
        setTimeout(function () {
            clearInterval(timerId);
            _this.sub.complete();
        }, 6000);
    };
    AsyncSubjectComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-async-subject',
            template: __webpack_require__(/*! ./async-subject.component.pug */ "./src/app/pages/subjects/async-subject/async-subject.component.pug"),
        })
    ], AsyncSubjectComponent);
    return AsyncSubjectComponent;
}());



/***/ }),

/***/ "./src/app/pages/subjects/behavior-subject/behavior-subject.component.pug":
/*!********************************************************************************!*\
  !*** ./src/app/pages/subjects/behavior-subject/behavior-subject.component.pug ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var req = __webpack_require__(/*! !./node_modules/pug-loader!./src/app/pages/subjects/behavior-subject/behavior-subject.component.pug */ "./node_modules/pug-loader/index.js!./src/app/pages/subjects/behavior-subject/behavior-subject.component.pug");
module.exports = (req['default'] || req).apply(req, [])

/***/ }),

/***/ "./src/app/pages/subjects/behavior-subject/behavior-subject.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/pages/subjects/behavior-subject/behavior-subject.component.ts ***!
  \*******************************************************************************/
/*! exports provided: BehaviorSubjectComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BehaviorSubjectComponent", function() { return BehaviorSubjectComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utils */ "./src/app/pages/utils.ts");




var BehaviorSubjectComponent = /** @class */ (function () {
    function BehaviorSubjectComponent() {
        this.sub = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](42);
        this.result1 = Object(_utils__WEBPACK_IMPORTED_MODULE_3__["getStreamObj"])(this.sub, "\u041F\u043E\u0434\u043F\u0438\u0441\u044B\u0432\u0430\u0435\u043C\u0441\u044F \u0441\u0440\u0430\u0437\u0443, \u043F\u0435\u0440\u0432\u043E\u0435 \u0437\u043D\u0430\u0447\u0435\u043D\u0438\u0435 42");
        this.result2 = Object(_utils__WEBPACK_IMPORTED_MODULE_3__["getStreamObj"])(this.sub, "\u041F\u043E\u0434\u043F\u0438\u0441\u044B\u0432\u0430\u0435\u043C\u0441\u044F \u0447\u0435\u0440\u0435\u0437 2000, \u0434\u043E\u0445\u043E\u0434\u044F\u0442 \u043D\u0435 \u0432\u0441\u0435 \u0432\u044B\u0441\u0442\u0440\u0435\u043B\u044B", '', false, 2000);
    }
    BehaviorSubjectComponent.prototype.ngOnInit = function () {
        var _this = this;
        var i = 0;
        var timerId = setInterval(function () {
            i = i + 1;
            _this.sub.next(i);
        }, 1000);
        setTimeout(function () {
            clearInterval(timerId);
            _this.sub.complete();
        }, 6000);
    };
    BehaviorSubjectComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-behavior-subject',
            template: __webpack_require__(/*! ./behavior-subject.component.pug */ "./src/app/pages/subjects/behavior-subject/behavior-subject.component.pug"),
        })
    ], BehaviorSubjectComponent);
    return BehaviorSubjectComponent;
}());



/***/ }),

/***/ "./src/app/pages/subjects/replay-subject/replay-subject.component.pug":
/*!****************************************************************************!*\
  !*** ./src/app/pages/subjects/replay-subject/replay-subject.component.pug ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var req = __webpack_require__(/*! !./node_modules/pug-loader!./src/app/pages/subjects/replay-subject/replay-subject.component.pug */ "./node_modules/pug-loader/index.js!./src/app/pages/subjects/replay-subject/replay-subject.component.pug");
module.exports = (req['default'] || req).apply(req, [])

/***/ }),

/***/ "./src/app/pages/subjects/replay-subject/replay-subject.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/pages/subjects/replay-subject/replay-subject.component.ts ***!
  \***************************************************************************/
/*! exports provided: ReplaySubjectComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReplaySubjectComponent", function() { return ReplaySubjectComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utils */ "./src/app/pages/utils.ts");




var ReplaySubjectComponent = /** @class */ (function () {
    function ReplaySubjectComponent() {
        this.sub = new rxjs__WEBPACK_IMPORTED_MODULE_2__["ReplaySubject"]();
        this.result1 = Object(_utils__WEBPACK_IMPORTED_MODULE_3__["getStreamObj"])(this.sub, "\u041F\u043E\u0434\u043F\u0438\u0441\u044B\u0432\u0430\u0435\u043C\u0441\u044F \u0441\u0440\u0430\u0437\u0443");
        this.result2 = Object(_utils__WEBPACK_IMPORTED_MODULE_3__["getStreamObj"])(this.sub, "\u041F\u043E\u0434\u043F\u0438\u0441\u044B\u0432\u0430\u0435\u043C\u0441\u044F \u0447\u0435\u0440\u0435\u0437 4 \u0441\u0435\u043A\u0443\u043D\u0434\u044B", '', false, 4000);
    }
    ReplaySubjectComponent.prototype.ngOnInit = function () {
        var _this = this;
        var i = 0;
        var timerId = setInterval(function () {
            i = i + 1;
            _this.sub.next(i);
        }, 1000);
        setTimeout(function () {
            clearInterval(timerId);
            _this.sub.complete();
        }, 6000);
    };
    ReplaySubjectComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-replay-subject',
            template: __webpack_require__(/*! ./replay-subject.component.pug */ "./src/app/pages/subjects/replay-subject/replay-subject.component.pug"),
        })
    ], ReplaySubjectComponent);
    return ReplaySubjectComponent;
}());



/***/ }),

/***/ "./src/app/pages/subjects/subject/subject.component.pug":
/*!**************************************************************!*\
  !*** ./src/app/pages/subjects/subject/subject.component.pug ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var req = __webpack_require__(/*! !./node_modules/pug-loader!./src/app/pages/subjects/subject/subject.component.pug */ "./node_modules/pug-loader/index.js!./src/app/pages/subjects/subject/subject.component.pug");
module.exports = (req['default'] || req).apply(req, [])

/***/ }),

/***/ "./src/app/pages/subjects/subject/subject.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/pages/subjects/subject/subject.component.ts ***!
  \*************************************************************/
/*! exports provided: SubjectComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SubjectComponent", function() { return SubjectComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utils */ "./src/app/pages/utils.ts");




var SubjectComponent = /** @class */ (function () {
    function SubjectComponent() {
        this.sub = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.result1 = Object(_utils__WEBPACK_IMPORTED_MODULE_3__["getStreamObj"])(this.sub, "\u041F\u043E\u0434\u043F\u0438\u0441\u044B\u0432\u0430\u0435\u043C\u0441\u044F \u0441\u0440\u0430\u0437\u0443, \u0432\u044B\u0441\u0442\u0440\u0435\u043B\u044B \u043A\u0430\u0436\u0434\u0443\u044E \u0441\u0435\u043A\u0443\u043D\u0434\u0443");
        this.result2 = Object(_utils__WEBPACK_IMPORTED_MODULE_3__["getStreamObj"])(this.sub, "\u041F\u043E\u0434\u043F\u0438\u0441\u044B\u0432\u0430\u0435\u043C\u0441\u044F \u0447\u0435\u0440\u0435\u0437 2000, \u043F\u0435\u0440\u0432\u044B\u0435 \u0432\u044B\u0441\u0442\u0440\u0435\u043B\u044B \u043D\u0435 \u0434\u043E\u0445\u043E\u0434\u044F\u0442", '', false, 2000);
    }
    SubjectComponent.prototype.ngOnInit = function () {
        var _this = this;
        var i = 0;
        var timerId = setInterval(function () {
            i = i + 1;
            _this.sub.next(i);
        }, 1000);
        setTimeout(function () {
            clearInterval(timerId);
            _this.sub.complete();
        }, 6000);
    };
    SubjectComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-subject',
            template: __webpack_require__(/*! ./subject.component.pug */ "./src/app/pages/subjects/subject/subject.component.pug"),
        })
    ], SubjectComponent);
    return SubjectComponent;
}());



/***/ }),

/***/ "./src/app/pages/subjects/subjects.routing.ts":
/*!****************************************************!*\
  !*** ./src/app/pages/subjects/subjects.routing.ts ***!
  \****************************************************/
/*! exports provided: subjectsPagesRoutes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "subjectsPagesRoutes", function() { return subjectsPagesRoutes; });
/* harmony import */ var _subject_subject_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./subject/subject.component */ "./src/app/pages/subjects/subject/subject.component.ts");
/* harmony import */ var _async_subject_async_subject_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./async-subject/async-subject.component */ "./src/app/pages/subjects/async-subject/async-subject.component.ts");
/* harmony import */ var _behavior_subject_behavior_subject_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./behavior-subject/behavior-subject.component */ "./src/app/pages/subjects/behavior-subject/behavior-subject.component.ts");
/* harmony import */ var _replay_subject_replay_subject_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./replay-subject/replay-subject.component */ "./src/app/pages/subjects/replay-subject/replay-subject.component.ts");




var subjectsPagesRoutes = [
    { path: 'subject', component: _subject_subject_component__WEBPACK_IMPORTED_MODULE_0__["SubjectComponent"] },
    { path: 'behavior-subject', component: _behavior_subject_behavior_subject_component__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubjectComponent"] },
    { path: 'replay-subject', component: _replay_subject_replay_subject_component__WEBPACK_IMPORTED_MODULE_3__["ReplaySubjectComponent"] },
    { path: 'async-subject', component: _async_subject_async_subject_component__WEBPACK_IMPORTED_MODULE_1__["AsyncSubjectComponent"] },
];


/***/ }),

/***/ "./src/app/pages/tasks/caching/caching.component.pug":
/*!***********************************************************!*\
  !*** ./src/app/pages/tasks/caching/caching.component.pug ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var req = __webpack_require__(/*! !./node_modules/pug-loader!./src/app/pages/tasks/caching/caching.component.pug */ "./node_modules/pug-loader/index.js!./src/app/pages/tasks/caching/caching.component.pug");
module.exports = (req['default'] || req).apply(req, [])

/***/ }),

/***/ "./src/app/pages/tasks/caching/caching.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/pages/tasks/caching/caching.component.ts ***!
  \**********************************************************/
/*! exports provided: CachingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CachingComponent", function() { return CachingComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../utils */ "./src/app/pages/utils.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");






var CachingComponent = /** @class */ (function () {
    function CachingComponent(http$) {
        this.http$ = http$;
        this.source1 = Object(_utils__WEBPACK_IMPORTED_MODULE_4__["getStreamObj"])(this.source1$, "");
        this.source2$ = this.http$.get('https://yesno.wtf/api')
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["share"])());
        this.source2 = Object(_utils__WEBPACK_IMPORTED_MODULE_4__["getStreamObj"])(this.source2$, "this.http$.get('https://yesno.wtf/api')");
    }
    CachingComponent.prototype.getResource1 = function () {
        var _this = this;
        if (!this.cachingObject) {
            this.cachingObject = new rxjs__WEBPACK_IMPORTED_MODULE_5__["ReplaySubject"](1);
            this.http$.get('https://yesno.wtf/api')
                .subscribe(function (result) {
                _this.cachingObject.next(result);
            });
        }
        return this.cachingObject.asObservable();
    };
    CachingComponent.prototype.getResource2 = function () {
        if (!this.cachhingConnectable) {
            this.cachhingConnectable = this.http$.get('https://yesno.wtf/api')
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["publishReplay"])(1));
            this.cachhingConnectable.connect();
        }
        return this.cachhingConnectable;
    };
    CachingComponent.prototype.ngOnInit = function () {
        this.source1$ = this.getResource1();
        this.getResource1();
        this.getResource1();
        this.getResource2();
        this.getResource2();
        this.getResource2();
    };
    CachingComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-caching',
            template: __webpack_require__(/*! ./caching.component.pug */ "./src/app/pages/tasks/caching/caching.component.pug"),
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], CachingComponent);
    return CachingComponent;
}());



/***/ }),

/***/ "./src/app/pages/tasks/cold-hot/cold-hot.component.pug":
/*!*************************************************************!*\
  !*** ./src/app/pages/tasks/cold-hot/cold-hot.component.pug ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var req = __webpack_require__(/*! !./node_modules/pug-loader!./src/app/pages/tasks/cold-hot/cold-hot.component.pug */ "./node_modules/pug-loader/index.js!./src/app/pages/tasks/cold-hot/cold-hot.component.pug");
module.exports = (req['default'] || req).apply(req, [])

/***/ }),

/***/ "./src/app/pages/tasks/cold-hot/cold-hot.component.ts":
/*!************************************************************!*\
  !*** ./src/app/pages/tasks/cold-hot/cold-hot.component.ts ***!
  \************************************************************/
/*! exports provided: ColdHotComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ColdHotComponent", function() { return ColdHotComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../utils */ "./src/app/pages/utils.ts");





var ColdHotComponent = /** @class */ (function () {
    function ColdHotComponent() {
        this.source1$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["interval"])(1000).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function () { return Math.random().toString().substr(2, 3); }));
        this.source1 = Object(_utils__WEBPACK_IMPORTED_MODULE_4__["getStreamObj"])(this.source1$, "interval(1000).pipe(\n    map(() => Math.random().toString().substr(2, 3))\n  )");
        this.subject = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.source2$ = this.source1$.subscribe(this.subject);
        this.source2 = Object(_utils__WEBPACK_IMPORTED_MODULE_4__["getStreamObj"])(this.subject, "interval(1000).pipe(\n    map(() => Math.random().toString().substr(2, 3)).subscribe(new Subject())\n  )");
        this.source3$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["interval"])(1000).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function () { return Math.random().toString().substr(2, 3); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["multicast"])(function () { return new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"](); }));
        this.source3 = Object(_utils__WEBPACK_IMPORTED_MODULE_4__["getStreamObj"])(this.source3$, "interval(1000).pipe(\n    map(() => Math.random().toString().substr(2, 3)).pipe(multicast(new Subject()))\n  )");
        this.source4$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["interval"])(1000).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function () { return Math.random().toString().substr(2, 3); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["publish"])());
        this.source4 = Object(_utils__WEBPACK_IMPORTED_MODULE_4__["getStreamObj"])(this.source4$, "interval(1000).pipe(\n    map(() => Math.random().toString().substr(2, 3)).publish()\n  )");
        this.source5$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["interval"])(1000).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function () { return Math.random().toString().substr(2, 3); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["publish"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["refCount"])() // подсчет активных подписок, если их не осталось поток завершается
        );
        this.source5 = Object(_utils__WEBPACK_IMPORTED_MODULE_4__["getStreamObj"])(this.source5$, "interval(1000).pipe(\n    map(() => Math.random().toString().substr(2, 3)),\n    publish(),\n    refCount(),\n  )");
        this.source6$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["interval"])(1000).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function () { return Math.random().toString().substr(2, 3); }), 
        // publish(),
        // refCount()
        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["share"])() // тоже самое что и publish + refCount
        );
        this.source6 = Object(_utils__WEBPACK_IMPORTED_MODULE_4__["getStreamObj"])(this.source6$, "interval(1000).pipe(\n    map(() => Math.random().toString().substr(2, 3)),\n    share(),\n  )");
    }
    ColdHotComponent.prototype.ngOnInit = function () {
        this.source3$.connect();
        this.source4$.connect();
    };
    ColdHotComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-cold-hot',
            template: __webpack_require__(/*! ./cold-hot.component.pug */ "./src/app/pages/tasks/cold-hot/cold-hot.component.pug"),
        })
    ], ColdHotComponent);
    return ColdHotComponent;
}());



/***/ }),

/***/ "./src/app/pages/tasks/tasks.routing.ts":
/*!**********************************************!*\
  !*** ./src/app/pages/tasks/tasks.routing.ts ***!
  \**********************************************/
/*! exports provided: tasksPagesRoutes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tasksPagesRoutes", function() { return tasksPagesRoutes; });
/* harmony import */ var _cold_hot_cold_hot_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cold-hot/cold-hot.component */ "./src/app/pages/tasks/cold-hot/cold-hot.component.ts");
/* harmony import */ var _unsubscribe_cool_unsubscribe_cool_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./unsubscribe-cool/unsubscribe-cool.component */ "./src/app/pages/tasks/unsubscribe-cool/unsubscribe-cool.component.ts");
/* harmony import */ var _caching_caching_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./caching/caching.component */ "./src/app/pages/tasks/caching/caching.component.ts");



var tasksPagesRoutes = [
    { path: 'cold-hot', component: _cold_hot_cold_hot_component__WEBPACK_IMPORTED_MODULE_0__["ColdHotComponent"] },
    { path: 'unsubscribe-cool', component: _unsubscribe_cool_unsubscribe_cool_component__WEBPACK_IMPORTED_MODULE_1__["UnsubscribeCoolComponent"] },
    { path: 'caching', component: _caching_caching_component__WEBPACK_IMPORTED_MODULE_2__["CachingComponent"] },
];


/***/ }),

/***/ "./src/app/pages/tasks/unsubscribe-cool/unsubscribe-cool.component.pug":
/*!*****************************************************************************!*\
  !*** ./src/app/pages/tasks/unsubscribe-cool/unsubscribe-cool.component.pug ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var req = __webpack_require__(/*! !./node_modules/pug-loader!./src/app/pages/tasks/unsubscribe-cool/unsubscribe-cool.component.pug */ "./node_modules/pug-loader/index.js!./src/app/pages/tasks/unsubscribe-cool/unsubscribe-cool.component.pug");
module.exports = (req['default'] || req).apply(req, [])

/***/ }),

/***/ "./src/app/pages/tasks/unsubscribe-cool/unsubscribe-cool.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/pages/tasks/unsubscribe-cool/unsubscribe-cool.component.ts ***!
  \****************************************************************************/
/*! exports provided: UnsubscribeCoolComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UnsubscribeCoolComponent", function() { return UnsubscribeCoolComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../utils */ "./src/app/pages/utils.ts");





var UnsubscribeCoolComponent = /** @class */ (function () {
    function UnsubscribeCoolComponent() {
        /**
         * Специальный сабджект для отписки
         */
        this.destroyStream = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.source1$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["interval"])(1000).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function () { return Math.random().toString().substr(2, 3); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeUntil"])(this.destroyStream));
        this.source1 = Object(_utils__WEBPACK_IMPORTED_MODULE_4__["getStreamObj"])(this.source1$, "interval(1000).pipe(\n    map(() => Math.random().toString().substr(2, 3))\n  )");
    }
    UnsubscribeCoolComponent.prototype.ngOnDestroy = function () {
        this.destroyStream.next();
    };
    UnsubscribeCoolComponent.prototype.ngOnInit = function () {
    };
    UnsubscribeCoolComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-unsubscribe-cool',
            template: __webpack_require__(/*! ./unsubscribe-cool.component.pug */ "./src/app/pages/tasks/unsubscribe-cool/unsubscribe-cool.component.pug"),
        })
    ], UnsubscribeCoolComponent);
    return UnsubscribeCoolComponent;
}());



/***/ }),

/***/ "./src/app/pages/transformation/buffer-count/buffer-count.component.pug":
/*!******************************************************************************!*\
  !*** ./src/app/pages/transformation/buffer-count/buffer-count.component.pug ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var req = __webpack_require__(/*! !./node_modules/pug-loader!./src/app/pages/transformation/buffer-count/buffer-count.component.pug */ "./node_modules/pug-loader/index.js!./src/app/pages/transformation/buffer-count/buffer-count.component.pug");
module.exports = (req['default'] || req).apply(req, [])

/***/ }),

/***/ "./src/app/pages/transformation/buffer-count/buffer-count.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/pages/transformation/buffer-count/buffer-count.component.ts ***!
  \*****************************************************************************/
/*! exports provided: BufferCountComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BufferCountComponent", function() { return BufferCountComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../utils */ "./src/app/pages/utils.ts");





var BufferCountComponent = /** @class */ (function () {
    function BufferCountComponent() {
        this.source1$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["interval"])(1000);
        this.getStreamObj = _utils__WEBPACK_IMPORTED_MODULE_4__["getStreamObj"];
        this.result1 = Object(_utils__WEBPACK_IMPORTED_MODULE_4__["getStreamObj"])(this.source1$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["bufferCount"])(5)), "interval(1000).pipe(bufferCount(5))");
        this.result2 = Object(_utils__WEBPACK_IMPORTED_MODULE_4__["getStreamObj"])(this.source1$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["bufferCount"])(5, 1)), "interval(1000).pipe(bufferCount(5, 1))");
    }
    BufferCountComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-buffer-count',
            template: __webpack_require__(/*! ./buffer-count.component.pug */ "./src/app/pages/transformation/buffer-count/buffer-count.component.pug"),
        })
    ], BufferCountComponent);
    return BufferCountComponent;
}());



/***/ }),

/***/ "./src/app/pages/transformation/buffer-time/buffer-time.component.pug":
/*!****************************************************************************!*\
  !*** ./src/app/pages/transformation/buffer-time/buffer-time.component.pug ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var req = __webpack_require__(/*! !./node_modules/pug-loader!./src/app/pages/transformation/buffer-time/buffer-time.component.pug */ "./node_modules/pug-loader/index.js!./src/app/pages/transformation/buffer-time/buffer-time.component.pug");
module.exports = (req['default'] || req).apply(req, [])

/***/ }),

/***/ "./src/app/pages/transformation/buffer-time/buffer-time.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/pages/transformation/buffer-time/buffer-time.component.ts ***!
  \***************************************************************************/
/*! exports provided: BufferTimeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BufferTimeComponent", function() { return BufferTimeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../utils */ "./src/app/pages/utils.ts");





var BufferTimeComponent = /** @class */ (function () {
    function BufferTimeComponent() {
        this.source1$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["interval"])(1000);
        this.getStreamObj = _utils__WEBPACK_IMPORTED_MODULE_4__["getStreamObj"];
        this.result1 = Object(_utils__WEBPACK_IMPORTED_MODULE_4__["getStreamObj"])(this.source1$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["bufferTime"])(3000)), "interval(1000).pipe(bufferTime(3000))");
        this.result2 = Object(_utils__WEBPACK_IMPORTED_MODULE_4__["getStreamObj"])(this.source1$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["bufferTime"])(10000)), "interval(1000).pipe(bufferTime(10000))");
    }
    BufferTimeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-buffer-time',
            template: __webpack_require__(/*! ./buffer-time.component.pug */ "./src/app/pages/transformation/buffer-time/buffer-time.component.pug"),
        })
    ], BufferTimeComponent);
    return BufferTimeComponent;
}());



/***/ }),

/***/ "./src/app/pages/transformation/buffer-toogle/buffer-toogle.component.pug":
/*!********************************************************************************!*\
  !*** ./src/app/pages/transformation/buffer-toogle/buffer-toogle.component.pug ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var req = __webpack_require__(/*! !./node_modules/pug-loader!./src/app/pages/transformation/buffer-toogle/buffer-toogle.component.pug */ "./node_modules/pug-loader/index.js!./src/app/pages/transformation/buffer-toogle/buffer-toogle.component.pug");
module.exports = (req['default'] || req).apply(req, [])

/***/ }),

/***/ "./src/app/pages/transformation/buffer-toogle/buffer-toogle.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/pages/transformation/buffer-toogle/buffer-toogle.component.ts ***!
  \*******************************************************************************/
/*! exports provided: BufferToggleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BufferToggleComponent", function() { return BufferToggleComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../utils */ "./src/app/pages/utils.ts");





var BufferToggleComponent = /** @class */ (function () {
    function BufferToggleComponent() {
        var _this = this;
        this.source1$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["interval"])(1000);
        this.source2$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["interval"])(5000);
        this.source3$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["interval"])(3000);
        this.getStreamObj = _utils__WEBPACK_IMPORTED_MODULE_4__["getStreamObj"];
        this.result1 = Object(_utils__WEBPACK_IMPORTED_MODULE_4__["getStreamObj"])(this.source1$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["bufferToggle"])(this.source2$, function (val) {
            console.log("Value " + val + " emitted, starting buffer! Closing in 3s!");
            return _this.source3$;
        })), "interval(1000).pipe(bufferToggle(interval(5000), val => interval(3000)))");
    }
    BufferToggleComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-buffer-toogle',
            template: __webpack_require__(/*! ./buffer-toogle.component.pug */ "./src/app/pages/transformation/buffer-toogle/buffer-toogle.component.pug"),
        })
    ], BufferToggleComponent);
    return BufferToggleComponent;
}());



/***/ }),

/***/ "./src/app/pages/transformation/buffer-when/buffer-when.component.pug":
/*!****************************************************************************!*\
  !*** ./src/app/pages/transformation/buffer-when/buffer-when.component.pug ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var req = __webpack_require__(/*! !./node_modules/pug-loader!./src/app/pages/transformation/buffer-when/buffer-when.component.pug */ "./node_modules/pug-loader/index.js!./src/app/pages/transformation/buffer-when/buffer-when.component.pug");
module.exports = (req['default'] || req).apply(req, [])

/***/ }),

/***/ "./src/app/pages/transformation/buffer-when/buffer-when.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/pages/transformation/buffer-when/buffer-when.component.ts ***!
  \***************************************************************************/
/*! exports provided: BufferWhenComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BufferWhenComponent", function() { return BufferWhenComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../utils */ "./src/app/pages/utils.ts");





var BufferWhenComponent = /** @class */ (function () {
    function BufferWhenComponent() {
        this.source1$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["interval"])(1000);
        this.getStreamObj = _utils__WEBPACK_IMPORTED_MODULE_4__["getStreamObj"];
        this.result1 = Object(_utils__WEBPACK_IMPORTED_MODULE_4__["getStreamObj"])(this.source1$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["bufferWhen"])(function () { return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["interval"])(3000); })), "interval(1000).pipe(bufferWhen(() => interval(3000)))");
    }
    BufferWhenComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-buffer-when',
            template: __webpack_require__(/*! ./buffer-when.component.pug */ "./src/app/pages/transformation/buffer-when/buffer-when.component.pug"),
        })
    ], BufferWhenComponent);
    return BufferWhenComponent;
}());



/***/ }),

/***/ "./src/app/pages/transformation/buffer/buffer.component.pug":
/*!******************************************************************!*\
  !*** ./src/app/pages/transformation/buffer/buffer.component.pug ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var req = __webpack_require__(/*! !./node_modules/pug-loader!./src/app/pages/transformation/buffer/buffer.component.pug */ "./node_modules/pug-loader/index.js!./src/app/pages/transformation/buffer/buffer.component.pug");
module.exports = (req['default'] || req).apply(req, [])

/***/ }),

/***/ "./src/app/pages/transformation/buffer/buffer.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/pages/transformation/buffer/buffer.component.ts ***!
  \*****************************************************************/
/*! exports provided: BufferComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BufferComponent", function() { return BufferComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../utils */ "./src/app/pages/utils.ts");





var BufferComponent = /** @class */ (function () {
    function BufferComponent() {
        this.source1$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["interval"])(1000);
        this.source2$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["fromEvent"])(document, 'click');
        this.getStreamObj = _utils__WEBPACK_IMPORTED_MODULE_4__["getStreamObj"];
        this.result1 = Object(_utils__WEBPACK_IMPORTED_MODULE_4__["getStreamObj"])(this.source1$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["buffer"])(this.source2$)), "interval(1000).pipe(fromEvent(document, 'click'))");
    }
    BufferComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-buffer',
            template: __webpack_require__(/*! ./buffer.component.pug */ "./src/app/pages/transformation/buffer/buffer.component.pug"),
        })
    ], BufferComponent);
    return BufferComponent;
}());



/***/ }),

/***/ "./src/app/pages/transformation/concat-map-to/concat-map-to.component.pug":
/*!********************************************************************************!*\
  !*** ./src/app/pages/transformation/concat-map-to/concat-map-to.component.pug ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var req = __webpack_require__(/*! !./node_modules/pug-loader!./src/app/pages/transformation/concat-map-to/concat-map-to.component.pug */ "./node_modules/pug-loader/index.js!./src/app/pages/transformation/concat-map-to/concat-map-to.component.pug");
module.exports = (req['default'] || req).apply(req, [])

/***/ }),

/***/ "./src/app/pages/transformation/concat-map-to/concat-map-to.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/pages/transformation/concat-map-to/concat-map-to.component.ts ***!
  \*******************************************************************************/
/*! exports provided: ConcatMapToComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConcatMapToComponent", function() { return ConcatMapToComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../utils */ "./src/app/pages/utils.ts");





var ConcatMapToComponent = /** @class */ (function () {
    function ConcatMapToComponent() {
        this.source1$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["interval"])(5000);
        this.source1 = Object(_utils__WEBPACK_IMPORTED_MODULE_4__["getStreamObj"])(this.source1$, "interval(5000)");
        this.source2$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["interval"])(1000).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(3));
        this.source2 = Object(_utils__WEBPACK_IMPORTED_MODULE_4__["getStreamObj"])(this.source2$, "interval(1000)");
        this.result1 = Object(_utils__WEBPACK_IMPORTED_MODULE_4__["getStreamObj"])(this.source1$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["concatMapTo"])(this.source2$)), "interval(5000).pipe(concatMapTo(interval(1000).pipe(take(3)).pipe(take(3))");
        this.source3$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["interval"])(2000).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(3));
        this.source3 = Object(_utils__WEBPACK_IMPORTED_MODULE_4__["getStreamObj"])(this.source3$, "interval(2000).pipe(take(3)");
        this.source4$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["interval"])(1000).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(6));
        this.source4 = Object(_utils__WEBPACK_IMPORTED_MODULE_4__["getStreamObj"])(this.source4$, "interval(1000).pipe(take(6))");
        this.result2 = Object(_utils__WEBPACK_IMPORTED_MODULE_4__["getStreamObj"])(this.source3$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["concatMapTo"])(this.source4$)), "interval(2000).pipe(take(3)).pipe(concatMapTo(interval(1000).pipe(take6)))");
        this.source5$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["fromEvent"])(document, 'click');
        this.source5 = Object(_utils__WEBPACK_IMPORTED_MODULE_4__["getStreamObj"])(this.source5$, "fromEvent(document, 'click')");
        this.result3 = Object(_utils__WEBPACK_IMPORTED_MODULE_4__["getStreamObj"])(this.source5$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["concatMapTo"])(this.source4$)), "fromEvent(document, 'click').pipe(concatMapTo(interval(1000).pipe(take6)))");
        this.source6$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["fromEvent"])(document, 'click');
        this.source6 = Object(_utils__WEBPACK_IMPORTED_MODULE_4__["getStreamObj"])(this.source6$, "fromEvent(document, 'click')");
        this.source7$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["interval"])(1000);
        this.source7 = Object(_utils__WEBPACK_IMPORTED_MODULE_4__["getStreamObj"])(this.source7$, "interval(1000)");
        this.result4 = Object(_utils__WEBPACK_IMPORTED_MODULE_4__["getStreamObj"])(this.source6$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["concatMapTo"])(this.source7$)), "fromEvent(document, 'click').pipe(concatMapTo(interval(1000)))");
    }
    ConcatMapToComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-concat-map-to',
            template: __webpack_require__(/*! ./concat-map-to.component.pug */ "./src/app/pages/transformation/concat-map-to/concat-map-to.component.pug"),
        })
    ], ConcatMapToComponent);
    return ConcatMapToComponent;
}());



/***/ }),

/***/ "./src/app/pages/transformation/concat-map/concat-map.component.pug":
/*!**************************************************************************!*\
  !*** ./src/app/pages/transformation/concat-map/concat-map.component.pug ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var req = __webpack_require__(/*! !./node_modules/pug-loader!./src/app/pages/transformation/concat-map/concat-map.component.pug */ "./node_modules/pug-loader/index.js!./src/app/pages/transformation/concat-map/concat-map.component.pug");
module.exports = (req['default'] || req).apply(req, [])

/***/ }),

/***/ "./src/app/pages/transformation/concat-map/concat-map.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/pages/transformation/concat-map/concat-map.component.ts ***!
  \*************************************************************************/
/*! exports provided: ConcatMapComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConcatMapComponent", function() { return ConcatMapComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../utils */ "./src/app/pages/utils.ts");





var ConcatMapComponent = /** @class */ (function () {
    function ConcatMapComponent() {
        var _this = this;
        this.source1$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["interval"])(5000);
        this.source1 = Object(_utils__WEBPACK_IMPORTED_MODULE_4__["getStreamObj"])(this.source1$, "interval(5000)");
        this.source2$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["interval"])(1000).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (x) { return x + 'a'; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(3));
        this.source2 = Object(_utils__WEBPACK_IMPORTED_MODULE_4__["getStreamObj"])(this.source2$, "interval(1000).pipe(take(3)");
        this.result1 = Object(_utils__WEBPACK_IMPORTED_MODULE_4__["getStreamObj"])(this.source1$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["concatMap"])(function () { return _this.source2$; })), "interval(5000).pipe(concatMap(() => interval(1000).pipe(take(3)).pipe(take(3))");
        this.source3$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["interval"])(2000).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(3));
        this.source3 = Object(_utils__WEBPACK_IMPORTED_MODULE_4__["getStreamObj"])(this.source3$, "interval(2000).pipe(take(3)");
        this.source4$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["interval"])(1000).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(6));
        this.source4 = Object(_utils__WEBPACK_IMPORTED_MODULE_4__["getStreamObj"])(this.source4$, "interval(1000).pipe(take(6))");
        this.result2 = Object(_utils__WEBPACK_IMPORTED_MODULE_4__["getStreamObj"])(this.source3$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["concatMap"])(function () { return _this.source4$; })), "interval(2000).pipe(take(3)).pipe(concatMap(() => interval(1000).pipe(take6)))");
        this.source5$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["fromEvent"])(document, 'click');
        this.source5 = Object(_utils__WEBPACK_IMPORTED_MODULE_4__["getStreamObj"])(this.source5$, "fromEvent(document, 'click')");
        this.result3 = Object(_utils__WEBPACK_IMPORTED_MODULE_4__["getStreamObj"])(this.source5$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["concatMap"])(function () { return _this.source4$; })), "fromEvent(document, 'click').pipe(concatMap(() => interval(1000).pipe(take6)))");
        this.source6$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["fromEvent"])(document, 'click');
        this.source6 = Object(_utils__WEBPACK_IMPORTED_MODULE_4__["getStreamObj"])(this.source6$, "fromEvent(document, 'click')");
        this.source7$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["interval"])(1000);
        this.source7 = Object(_utils__WEBPACK_IMPORTED_MODULE_4__["getStreamObj"])(this.source7$, "interval(1000)");
        this.result4 = Object(_utils__WEBPACK_IMPORTED_MODULE_4__["getStreamObj"])(this.source6$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["concatMap"])(function () { return _this.source7$; })), "fromEvent(document, 'click').pipe(concatMap(() => interval(1000)))");
    }
    ConcatMapComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-concat-map',
            template: __webpack_require__(/*! ./concat-map.component.pug */ "./src/app/pages/transformation/concat-map/concat-map.component.pug"),
        })
    ], ConcatMapComponent);
    return ConcatMapComponent;
}());



/***/ }),

/***/ "./src/app/pages/transformation/exhaust-map/exhaust-map.component.pug":
/*!****************************************************************************!*\
  !*** ./src/app/pages/transformation/exhaust-map/exhaust-map.component.pug ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var req = __webpack_require__(/*! !./node_modules/pug-loader!./src/app/pages/transformation/exhaust-map/exhaust-map.component.pug */ "./node_modules/pug-loader/index.js!./src/app/pages/transformation/exhaust-map/exhaust-map.component.pug");
module.exports = (req['default'] || req).apply(req, [])

/***/ }),

/***/ "./src/app/pages/transformation/exhaust-map/exhaust-map.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/pages/transformation/exhaust-map/exhaust-map.component.ts ***!
  \***************************************************************************/
/*! exports provided: ExhaustMapComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExhaustMapComponent", function() { return ExhaustMapComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../utils */ "./src/app/pages/utils.ts");





var ExhaustMapComponent = /** @class */ (function () {
    function ExhaustMapComponent() {
        var _this = this;
        this.source1$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["interval"])(5000);
        this.source1 = Object(_utils__WEBPACK_IMPORTED_MODULE_4__["getStreamObj"])(this.source1$, "interval(5000)");
        this.source2$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["interval"])(1000).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(3));
        this.source2 = Object(_utils__WEBPACK_IMPORTED_MODULE_4__["getStreamObj"])(this.source2$, "interval(1000)");
        this.result1 = Object(_utils__WEBPACK_IMPORTED_MODULE_4__["getStreamObj"])(this.source1$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["exhaustMap"])(function () { return _this.source2$; })), "interval(5000).pipe(exhaustMap(() => interval(1000).pipe(take(3)).pipe(take(3))");
        this.source3$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["interval"])(2000).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(3));
        this.source3 = Object(_utils__WEBPACK_IMPORTED_MODULE_4__["getStreamObj"])(this.source3$, "interval(2000).pipe(take(3)");
        this.source4$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["interval"])(1000).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(6));
        this.source4 = Object(_utils__WEBPACK_IMPORTED_MODULE_4__["getStreamObj"])(this.source4$, "interval(1000).pipe(take(6))");
        this.result2 = Object(_utils__WEBPACK_IMPORTED_MODULE_4__["getStreamObj"])(this.source3$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["exhaustMap"])(function () { return _this.source4$; })), "interval(2000).pipe(take(3)).pipe(exhaustMap(() => interval(1000).pipe(take6)))");
        this.source5$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["fromEvent"])(document, 'click');
        this.source5 = Object(_utils__WEBPACK_IMPORTED_MODULE_4__["getStreamObj"])(this.source5$, "fromEvent(document, 'click')");
        this.result3 = Object(_utils__WEBPACK_IMPORTED_MODULE_4__["getStreamObj"])(this.source5$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["exhaustMap"])(function () { return _this.source4$; })), "fromEvent(document, 'click').pipe(exhaustMap(() => interval(1000).pipe(take6)))");
        this.source6$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["fromEvent"])(document, 'click');
        this.source6 = Object(_utils__WEBPACK_IMPORTED_MODULE_4__["getStreamObj"])(this.source6$, "fromEvent(document, 'click')");
        this.source7$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["interval"])(1000);
        this.source7 = Object(_utils__WEBPACK_IMPORTED_MODULE_4__["getStreamObj"])(this.source7$, "interval(1000)");
        this.result4 = Object(_utils__WEBPACK_IMPORTED_MODULE_4__["getStreamObj"])(this.source6$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["exhaustMap"])(function () { return _this.source7$; })), "fromEvent(document, 'click').pipe(exhaustMap(() => interval(1000)))");
    }
    ExhaustMapComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-exhaust-map',
            template: __webpack_require__(/*! ./exhaust-map.component.pug */ "./src/app/pages/transformation/exhaust-map/exhaust-map.component.pug"),
        })
    ], ExhaustMapComponent);
    return ExhaustMapComponent;
}());



/***/ }),

/***/ "./src/app/pages/transformation/expand/expand.component.pug":
/*!******************************************************************!*\
  !*** ./src/app/pages/transformation/expand/expand.component.pug ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var req = __webpack_require__(/*! !./node_modules/pug-loader!./src/app/pages/transformation/expand/expand.component.pug */ "./node_modules/pug-loader/index.js!./src/app/pages/transformation/expand/expand.component.pug");
module.exports = (req['default'] || req).apply(req, [])

/***/ }),

/***/ "./src/app/pages/transformation/expand/expand.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/pages/transformation/expand/expand.component.ts ***!
  \*****************************************************************/
/*! exports provided: ExpandComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExpandComponent", function() { return ExpandComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../utils */ "./src/app/pages/utils.ts");





var ExpandComponent = /** @class */ (function () {
    function ExpandComponent() {
        this.source1$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(2);
        this.getStreamObj = _utils__WEBPACK_IMPORTED_MODULE_4__["getStreamObj"];
        this.result1 = Object(_utils__WEBPACK_IMPORTED_MODULE_4__["getStreamObj"])(this.source1$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["expand"])(function (val) { return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(1 + val); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(5)), "interval(1000).pipe(expand(val => of(1 + val)), take(5))");
    }
    ExpandComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-expand',
            template: __webpack_require__(/*! ./expand.component.pug */ "./src/app/pages/transformation/expand/expand.component.pug"),
        })
    ], ExpandComponent);
    return ExpandComponent;
}());



/***/ }),

/***/ "./src/app/pages/transformation/group-by/group-by.component.pug":
/*!**********************************************************************!*\
  !*** ./src/app/pages/transformation/group-by/group-by.component.pug ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var req = __webpack_require__(/*! !./node_modules/pug-loader!./src/app/pages/transformation/group-by/group-by.component.pug */ "./node_modules/pug-loader/index.js!./src/app/pages/transformation/group-by/group-by.component.pug");
module.exports = (req['default'] || req).apply(req, [])

/***/ }),

/***/ "./src/app/pages/transformation/group-by/group-by.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/pages/transformation/group-by/group-by.component.ts ***!
  \*********************************************************************/
/*! exports provided: GroupByComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GroupByComponent", function() { return GroupByComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../utils */ "./src/app/pages/utils.ts");





var GroupByComponent = /** @class */ (function () {
    function GroupByComponent() {
        this.source1$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["from"])([
            { name: 'Sue', age: 25 },
            { name: 'Joe', age: 30 },
            { name: 'Frank', age: 25 },
            { name: 'Sarah', age: 35 }
        ]);
        this.source1 = Object(_utils__WEBPACK_IMPORTED_MODULE_4__["getStreamObj"])(this.source1$, "from([\n    { name: 'Sue', age: 25 },\n    { name: 'Joe', age: 30 },\n    { name: 'Frank', age: 25 },\n    { name: 'Sarah', age: 35 }\n  ])");
        this.result1 = Object(_utils__WEBPACK_IMPORTED_MODULE_4__["getStreamObj"])(this.source1$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["groupBy"])(function (person) { return person.age; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["mergeMap"])(function (group) { return group.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["toArray"])()); })), "from([\n    { name: 'Sue', age: 25 },\n    { name: 'Joe', age: 30 },\n    { name: 'Frank', age: 25 },\n    { name: 'Sarah', age: 35 }\n  ]).pipe(\n      groupBy(person => person.age),\n      mergeMap(group => group.pipe(toArray()))\n    )");
        this.source2$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["from"])([
            { id: 1, name: 'javascript' },
            { id: 2, name: 'parcel' },
            { id: 2, name: 'webpack' },
            { id: 1, name: 'typescript' },
            { id: 3, name: 'tslint' }
        ]);
        this.source2 = Object(_utils__WEBPACK_IMPORTED_MODULE_4__["getStreamObj"])(this.source2$, "\n  from([\n    { id: 1, name: 'javascript' },\n    { id: 2, name: 'parcel' },\n    { id: 2, name: 'webpack' },\n    { id: 1, name: 'typescript' },\n    { id: 3, name: 'tslint' }\n  ])");
        this.result2 = Object(_utils__WEBPACK_IMPORTED_MODULE_4__["getStreamObj"])(this.source2$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["groupBy"])(function (p) { return p.id; }, function (p) { return p.name; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["mergeMap"])(function (group$) { return group$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["reduce"])(function (acc, cur) { return acc.concat([cur]); }, ['' + group$.key])); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (arr) { return ({ 'id': arr[0], 'values': arr.slice(1) }); })), "from([\n      { id: 1, name: 'javascript' },\n      { id: 2, name: 'parcel' },\n      { id: 2, name: 'webpack' },\n      { id: 1, name: 'typescript' },\n      { id: 3, name: 'tslint' }\n    ]).pipe(\n      groupBy(p => p.id, p => p.name),\n      mergeMap( (group$) => group$.pipe(reduce((acc, cur) => [...acc, cur], ['' + group$.key]))),\n      map((arr: any) => ({'id': arr[0], 'values': arr.slice(1)})),\n    )");
    }
    GroupByComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-group-by',
            template: __webpack_require__(/*! ./group-by.component.pug */ "./src/app/pages/transformation/group-by/group-by.component.pug"),
        })
    ], GroupByComponent);
    return GroupByComponent;
}());



/***/ }),

/***/ "./src/app/pages/transformation/map-to/map-to.component.pug":
/*!******************************************************************!*\
  !*** ./src/app/pages/transformation/map-to/map-to.component.pug ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var req = __webpack_require__(/*! !./node_modules/pug-loader!./src/app/pages/transformation/map-to/map-to.component.pug */ "./node_modules/pug-loader/index.js!./src/app/pages/transformation/map-to/map-to.component.pug");
module.exports = (req['default'] || req).apply(req, [])

/***/ }),

/***/ "./src/app/pages/transformation/map-to/map-to.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/pages/transformation/map-to/map-to.component.ts ***!
  \*****************************************************************/
/*! exports provided: MapToComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MapToComponent", function() { return MapToComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../utils */ "./src/app/pages/utils.ts");





var MapToComponent = /** @class */ (function () {
    function MapToComponent() {
        this.source1$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["from"])([1, 2, 3, 4, 5]);
        this.source1 = Object(_utils__WEBPACK_IMPORTED_MODULE_4__["getStreamObj"])(this.source1$, "from([1, 2, 3, 4, 5])");
        this.result1 = Object(_utils__WEBPACK_IMPORTED_MODULE_4__["getStreamObj"])(this.source1$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["mapTo"])(11)), "interval(5000).pipe(mapTo(11))");
        this.source2$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["from"])([
            { name: 'Joe', age: 30 },
            { name: 'Frank', age: 20 },
            { name: 'Ryan', age: 50 }
        ]);
        this.source2 = Object(_utils__WEBPACK_IMPORTED_MODULE_4__["getStreamObj"])(this.source2$, "from([\n    { name: 'Joe', age: 30 },\n    { name: 'Frank', age: 20 },\n    { name: 'Ryan', age: 50 }\n  ]);");
        this.result2 = Object(_utils__WEBPACK_IMPORTED_MODULE_4__["getStreamObj"])(this.source2$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["mapTo"])('person')), "from([\n      { name: 'Joe', age: 30 },\n      { name: 'Frank', age: 20 },\n      { name: 'Ryan', age: 50 }\n    ]).mapTo('person')");
        this.source3$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["fromEvent"])(document, 'click');
        this.source3 = Object(_utils__WEBPACK_IMPORTED_MODULE_4__["getStreamObj"])(this.source3$, "fromEvent(document, 'click')");
        this.result3 = Object(_utils__WEBPACK_IMPORTED_MODULE_4__["getStreamObj"])(this.source3$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["mapTo"])('click')), "fromEvent(document, 'click').pipe(mapTo('click'))");
    }
    MapToComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-map-to',
            template: __webpack_require__(/*! ./map-to.component.pug */ "./src/app/pages/transformation/map-to/map-to.component.pug"),
        })
    ], MapToComponent);
    return MapToComponent;
}());



/***/ }),

/***/ "./src/app/pages/transformation/map/map.component.pug":
/*!************************************************************!*\
  !*** ./src/app/pages/transformation/map/map.component.pug ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var req = __webpack_require__(/*! !./node_modules/pug-loader!./src/app/pages/transformation/map/map.component.pug */ "./node_modules/pug-loader/index.js!./src/app/pages/transformation/map/map.component.pug");
module.exports = (req['default'] || req).apply(req, [])

/***/ }),

/***/ "./src/app/pages/transformation/map/map.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/pages/transformation/map/map.component.ts ***!
  \***********************************************************/
/*! exports provided: MapComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MapComponent", function() { return MapComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../utils */ "./src/app/pages/utils.ts");





var MapComponent = /** @class */ (function () {
    function MapComponent() {
        this.source1$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["from"])([1, 2, 3, 4, 5]);
        this.source1 = Object(_utils__WEBPACK_IMPORTED_MODULE_4__["getStreamObj"])(this.source1$, "from([1, 2, 3, 4, 5])");
        this.result1 = Object(_utils__WEBPACK_IMPORTED_MODULE_4__["getStreamObj"])(this.source1$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (val) { return val * 11; })), "interval(5000).pipe(map((val) => val * 11))");
        this.source2$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["from"])([
            { name: 'Joe', age: 30 },
            { name: 'Frank', age: 20 },
            { name: 'Ryan', age: 50 }
        ]);
        this.source2 = Object(_utils__WEBPACK_IMPORTED_MODULE_4__["getStreamObj"])(this.source2$, "from([\n    { name: 'Joe', age: 30 },\n    { name: 'Frank', age: 20 },\n    { name: 'Ryan', age: 50 }\n  ]);");
        this.result2 = Object(_utils__WEBPACK_IMPORTED_MODULE_4__["getStreamObj"])(this.source2$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (_a) {
            var name = _a.name;
            return name;
        })), "from([\n      { name: 'Joe', age: 30 },\n      { name: 'Frank', age: 20 },\n      { name: 'Ryan', age: 50 }\n    ]).map(({ name }) => name)");
        this.source3$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["fromEvent"])(document, 'click');
        this.source3 = Object(_utils__WEBPACK_IMPORTED_MODULE_4__["getStreamObj"])(this.source3$, "fromEvent(document, 'click')");
        this.result3 = Object(_utils__WEBPACK_IMPORTED_MODULE_4__["getStreamObj"])(this.source3$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (ev) { return ev.clientX; })), "fromEvent(document, 'click').pipe(map((ev: any) => ev.clientX))");
    }
    MapComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-map',
            template: __webpack_require__(/*! ./map.component.pug */ "./src/app/pages/transformation/map/map.component.pug"),
        })
    ], MapComponent);
    return MapComponent;
}());



/***/ }),

/***/ "./src/app/pages/transformation/merge-map/merge-map.component.pug":
/*!************************************************************************!*\
  !*** ./src/app/pages/transformation/merge-map/merge-map.component.pug ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var req = __webpack_require__(/*! !./node_modules/pug-loader!./src/app/pages/transformation/merge-map/merge-map.component.pug */ "./node_modules/pug-loader/index.js!./src/app/pages/transformation/merge-map/merge-map.component.pug");
module.exports = (req['default'] || req).apply(req, [])

/***/ }),

/***/ "./src/app/pages/transformation/merge-map/merge-map.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/pages/transformation/merge-map/merge-map.component.ts ***!
  \***********************************************************************/
/*! exports provided: MergeMapComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MergeMapComponent", function() { return MergeMapComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../utils */ "./src/app/pages/utils.ts");





var MergeMapComponent = /** @class */ (function () {
    function MergeMapComponent() {
        var _this = this;
        this.source1$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["interval"])(5000);
        this.source1 = Object(_utils__WEBPACK_IMPORTED_MODULE_4__["getStreamObj"])(this.source1$, "interval(5000)");
        this.source2$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["interval"])(1000).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(3));
        this.source2 = Object(_utils__WEBPACK_IMPORTED_MODULE_4__["getStreamObj"])(this.source2$, "interval(1000)");
        this.result1 = Object(_utils__WEBPACK_IMPORTED_MODULE_4__["getStreamObj"])(this.source1$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["mergeMap"])(function () { return _this.source2$; })), "interval(5000).pipe(mergeMap(() => interval(1000).pipe(take(3)).pipe(take(3))");
        this.source3$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["interval"])(2000).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(3));
        this.source3 = Object(_utils__WEBPACK_IMPORTED_MODULE_4__["getStreamObj"])(this.source3$, "interval(2000).pipe(take(3)");
        this.source4$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["interval"])(1000).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(6));
        this.source4 = Object(_utils__WEBPACK_IMPORTED_MODULE_4__["getStreamObj"])(this.source4$, "interval(1000).pipe(take(6))");
        this.result2 = Object(_utils__WEBPACK_IMPORTED_MODULE_4__["getStreamObj"])(this.source3$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["mergeMap"])(function () { return _this.source4$; })), "interval(2000).pipe(take(3)).pipe(mergeMap(() => interval(1000).pipe(take6)))");
        this.source5$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["fromEvent"])(document, 'click');
        this.source5 = Object(_utils__WEBPACK_IMPORTED_MODULE_4__["getStreamObj"])(this.source5$, "fromEvent(document, 'click')");
        this.result3 = Object(_utils__WEBPACK_IMPORTED_MODULE_4__["getStreamObj"])(this.source5$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["mergeMap"])(function () { return _this.source4$; })), "fromEvent(document, 'click').pipe(mergeMap(() => interval(1000).pipe(take6)))");
        this.source6$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["fromEvent"])(document, 'click');
        this.source6 = Object(_utils__WEBPACK_IMPORTED_MODULE_4__["getStreamObj"])(this.source6$, "fromEvent(document, 'click')");
        this.source7$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["interval"])(1000);
        this.source7 = Object(_utils__WEBPACK_IMPORTED_MODULE_4__["getStreamObj"])(this.source7$, "interval(1000)");
        this.result4 = Object(_utils__WEBPACK_IMPORTED_MODULE_4__["getStreamObj"])(this.source6$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["mergeMap"])(function () { return _this.source7$; })), "fromEvent(document, 'click').pipe(mergeMap(() => interval(1000)))");
    }
    MergeMapComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-merge-map',
            template: __webpack_require__(/*! ./merge-map.component.pug */ "./src/app/pages/transformation/merge-map/merge-map.component.pug"),
        })
    ], MergeMapComponent);
    return MergeMapComponent;
}());



/***/ }),

/***/ "./src/app/pages/transformation/partition/partition.component.pug":
/*!************************************************************************!*\
  !*** ./src/app/pages/transformation/partition/partition.component.pug ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var req = __webpack_require__(/*! !./node_modules/pug-loader!./src/app/pages/transformation/partition/partition.component.pug */ "./node_modules/pug-loader/index.js!./src/app/pages/transformation/partition/partition.component.pug");
module.exports = (req['default'] || req).apply(req, [])

/***/ }),

/***/ "./src/app/pages/transformation/partition/partition.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/pages/transformation/partition/partition.component.ts ***!
  \***********************************************************************/
/*! exports provided: PartitionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PartitionComponent", function() { return PartitionComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../utils */ "./src/app/pages/utils.ts");





var PartitionComponent = /** @class */ (function () {
    function PartitionComponent() {
        this.source1$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["from"])([1, 2, 3, 4, 5]);
        this.source1 = Object(_utils__WEBPACK_IMPORTED_MODULE_4__["getStreamObj"])(this.source1$, "from([1, 2, 3, 4, 5])");
        this.results1$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["from"])([1, 2, 3, 4, 5, 6]).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["partition"])(function (val) { return val % 2 === 0; }));
        this.result1 = Object(_utils__WEBPACK_IMPORTED_MODULE_4__["getStreamObj"])(this.results1$[0], "from([1, 2, 3, 4, 5]).pipe(partition((val: number) => val % 2 === 0)[0])");
        this.result2 = Object(_utils__WEBPACK_IMPORTED_MODULE_4__["getStreamObj"])(this.results1$[1], "from([1, 2, 3, 4, 5]).pipe(partition((val: number) => val % 2 === 0)[1])");
    }
    PartitionComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-partition',
            template: __webpack_require__(/*! ./partition.component.pug */ "./src/app/pages/transformation/partition/partition.component.pug"),
        })
    ], PartitionComponent);
    return PartitionComponent;
}());



/***/ }),

/***/ "./src/app/pages/transformation/pluck/pluck.component.pug":
/*!****************************************************************!*\
  !*** ./src/app/pages/transformation/pluck/pluck.component.pug ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var req = __webpack_require__(/*! !./node_modules/pug-loader!./src/app/pages/transformation/pluck/pluck.component.pug */ "./node_modules/pug-loader/index.js!./src/app/pages/transformation/pluck/pluck.component.pug");
module.exports = (req['default'] || req).apply(req, [])

/***/ }),

/***/ "./src/app/pages/transformation/pluck/pluck.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/pages/transformation/pluck/pluck.component.ts ***!
  \***************************************************************/
/*! exports provided: PluckComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PluckComponent", function() { return PluckComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var ramda__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ramda */ "./node_modules/ramda/es/index.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../utils */ "./src/app/pages/utils.ts");






var PluckComponent = /** @class */ (function () {
    function PluckComponent() {
        this.source1$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["from"])([
            { name: 'Joe', age: 30 },
            { name: 'Frank', age: 20 },
            { name: 'Ryan', age: 50 }
        ]);
        this.source1 = Object(_utils__WEBPACK_IMPORTED_MODULE_5__["getStreamObj"])(this.source1$, "from([\n    { name: 'Joe', age: 30 },\n    { name: 'Frank', age: 20 },\n    { name: 'Ryan', age: 50 }\n  ]);");
        this.result1 = Object(_utils__WEBPACK_IMPORTED_MODULE_5__["getStreamObj"])(this.source1$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["pluck"])('name')), "from([\n      { name: 'Joe', age: 30 },\n      { name: 'Frank', age: 20 },\n      { name: 'Ryan', age: 50 }\n    ]).pluck('name'))");
        this.source2$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["fromEvent"])(document, 'click');
        this.source2 = Object(_utils__WEBPACK_IMPORTED_MODULE_5__["getStreamObj"])(this.source2$, "fromEvent(document, 'click')");
        this.result2 = Object(_utils__WEBPACK_IMPORTED_MODULE_5__["getStreamObj"])(this.source2$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["pluck"])('clientX')), "fromEvent(document, 'click').pipe(pluck('clientX'))");
        this.source3$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["from"])([
            { name: 'Joe', age: 30, job: { title: 'Developer', language: 'JavaScript' } },
            { name: 'Sarah', age: 35 }
        ]);
        this.source3 = Object(_utils__WEBPACK_IMPORTED_MODULE_5__["getStreamObj"])(this.source3$, "from([\n    { name: 'Joe', age: 30, job: { title: 'Developer', language: 'JavaScript' } },\n    { name: 'Sarah', age: 35 }\n  ])");
        this.result3 = Object(_utils__WEBPACK_IMPORTED_MODULE_5__["getStreamObj"])(this.source3$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["pluck"])('job', 'title'), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["filter"])(Object(ramda__WEBPACK_IMPORTED_MODULE_4__["compose"])(ramda__WEBPACK_IMPORTED_MODULE_4__["not"], ramda__WEBPACK_IMPORTED_MODULE_4__["isNil"]))), "from([\n      { name: 'Joe', age: 30, job: { title: 'Developer', language: 'JavaScript' } },\n      { name: 'Sarah', age: 35 }\n    ])pipe(pluck('job', 'title'), filter(compose(not, isNil)))");
    }
    PluckComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-pluck',
            template: __webpack_require__(/*! ./pluck.component.pug */ "./src/app/pages/transformation/pluck/pluck.component.pug"),
        })
    ], PluckComponent);
    return PluckComponent;
}());



/***/ }),

/***/ "./src/app/pages/transformation/reduce/reduce.component.pug":
/*!******************************************************************!*\
  !*** ./src/app/pages/transformation/reduce/reduce.component.pug ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var req = __webpack_require__(/*! !./node_modules/pug-loader!./src/app/pages/transformation/reduce/reduce.component.pug */ "./node_modules/pug-loader/index.js!./src/app/pages/transformation/reduce/reduce.component.pug");
module.exports = (req['default'] || req).apply(req, [])

/***/ }),

/***/ "./src/app/pages/transformation/reduce/reduce.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/pages/transformation/reduce/reduce.component.ts ***!
  \*****************************************************************/
/*! exports provided: ReduceComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReduceComponent", function() { return ReduceComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../utils */ "./src/app/pages/utils.ts");





var ReduceComponent = /** @class */ (function () {
    function ReduceComponent() {
        this.source1$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(1, 2, 3, 4);
        this.source1 = Object(_utils__WEBPACK_IMPORTED_MODULE_4__["getStreamObj"])(this.source1$, "of(1, 2, 3, 4)");
        this.result1 = Object(_utils__WEBPACK_IMPORTED_MODULE_4__["getStreamObj"])(this.source1$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["reduce"])(function (acc, val) { return acc + val; })), "of(1, 2, 3, 4).pipe(fromEvent(document, 'click'))");
        this.source2$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["interval"])(1000);
        this.source2 = Object(_utils__WEBPACK_IMPORTED_MODULE_4__["getStreamObj"])(this.source2$, "interval(1000)");
        this.result2 = Object(_utils__WEBPACK_IMPORTED_MODULE_4__["getStreamObj"])(this.source2$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["reduce"])(function (acc, val) { return acc + val; })), "interval(1000).pipe(fromEvent(document, 'click'))");
    }
    ReduceComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-reduce',
            template: __webpack_require__(/*! ./reduce.component.pug */ "./src/app/pages/transformation/reduce/reduce.component.pug"),
        })
    ], ReduceComponent);
    return ReduceComponent;
}());



/***/ }),

/***/ "./src/app/pages/transformation/scan/scan.component.pug":
/*!**************************************************************!*\
  !*** ./src/app/pages/transformation/scan/scan.component.pug ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var req = __webpack_require__(/*! !./node_modules/pug-loader!./src/app/pages/transformation/scan/scan.component.pug */ "./node_modules/pug-loader/index.js!./src/app/pages/transformation/scan/scan.component.pug");
module.exports = (req['default'] || req).apply(req, [])

/***/ }),

/***/ "./src/app/pages/transformation/scan/scan.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/pages/transformation/scan/scan.component.ts ***!
  \*************************************************************/
/*! exports provided: ScanComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScanComponent", function() { return ScanComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../utils */ "./src/app/pages/utils.ts");





var ScanComponent = /** @class */ (function () {
    function ScanComponent() {
        this.source1$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(1, 2, 3, 4);
        this.source1 = Object(_utils__WEBPACK_IMPORTED_MODULE_4__["getStreamObj"])(this.source1$, "of(1, 2, 3, 4)");
        this.result1 = Object(_utils__WEBPACK_IMPORTED_MODULE_4__["getStreamObj"])(this.source1$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["scan"])(function (acc, val) { return acc + val; })), "of(1, 2, 3, 4).pipe(scan((acc, val) => acc + val))");
        this.source2$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["interval"])(1000);
        this.source2 = Object(_utils__WEBPACK_IMPORTED_MODULE_4__["getStreamObj"])(this.source2$, "interval(1000)");
        this.result2 = Object(_utils__WEBPACK_IMPORTED_MODULE_4__["getStreamObj"])(this.source2$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["scan"])(function (acc, val) { return acc + val; })), "interval(1000).pipe(scan((acc, val) => acc + val))");
        this.result3 = Object(_utils__WEBPACK_IMPORTED_MODULE_4__["getStreamObj"])(this.source2$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["scan"])(function (acc, val) { return acc.concat([val]); }, [])), "interval(1000).pipe(scan((acc, val) => [...acc, val ], []))");
        this.source3$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])({ name: 'Joe' }, { age: 30 }, { favoriteLanguage: 'JavaScript' });
        this.source3 = Object(_utils__WEBPACK_IMPORTED_MODULE_4__["getStreamObj"])(this.source3$, "{ name: 'Joe' }, { age: 30 }, { favoriteLanguage: 'JavaScript' }");
        this.result4 = Object(_utils__WEBPACK_IMPORTED_MODULE_4__["getStreamObj"])(this.source3$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["scan"])(function (acc, curr) { return Object.assign({}, acc, curr); }, {})), "of({ name: 'Joe' }, { age: 30 }, { favoriteLanguage: 'JavaScript' }).pipe(\n      scan((acc, curr) => Object.assign({}, acc, curr), {})\n    )");
    }
    ScanComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-scan',
            template: __webpack_require__(/*! ./scan.component.pug */ "./src/app/pages/transformation/scan/scan.component.pug"),
        })
    ], ScanComponent);
    return ScanComponent;
}());



/***/ }),

/***/ "./src/app/pages/transformation/switch-map/switch-map.component.pug":
/*!**************************************************************************!*\
  !*** ./src/app/pages/transformation/switch-map/switch-map.component.pug ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var req = __webpack_require__(/*! !./node_modules/pug-loader!./src/app/pages/transformation/switch-map/switch-map.component.pug */ "./node_modules/pug-loader/index.js!./src/app/pages/transformation/switch-map/switch-map.component.pug");
module.exports = (req['default'] || req).apply(req, [])

/***/ }),

/***/ "./src/app/pages/transformation/switch-map/switch-map.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/pages/transformation/switch-map/switch-map.component.ts ***!
  \*************************************************************************/
/*! exports provided: SwitchMapComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SwitchMapComponent", function() { return SwitchMapComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../utils */ "./src/app/pages/utils.ts");





var SwitchMapComponent = /** @class */ (function () {
    function SwitchMapComponent() {
        var _this = this;
        this.source1$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["interval"])(5000);
        this.source1 = Object(_utils__WEBPACK_IMPORTED_MODULE_4__["getStreamObj"])(this.source1$, "interval(5000)");
        this.source2$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["interval"])(1000).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(3));
        this.source2 = Object(_utils__WEBPACK_IMPORTED_MODULE_4__["getStreamObj"])(this.source2$, "interval(1000)");
        this.result1 = Object(_utils__WEBPACK_IMPORTED_MODULE_4__["getStreamObj"])(this.source1$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])(function () { return _this.source2$; })), "interval(5000).pipe(switchMap(() => interval(1000).pipe(take(3)).pipe(take(3))");
        this.source3$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["interval"])(2000).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(3));
        this.source3 = Object(_utils__WEBPACK_IMPORTED_MODULE_4__["getStreamObj"])(this.source3$, "interval(2000).pipe(take(3)");
        this.source4$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["interval"])(1000).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(6));
        this.source4 = Object(_utils__WEBPACK_IMPORTED_MODULE_4__["getStreamObj"])(this.source4$, "interval(1000).pipe(take(6))");
        this.result2 = Object(_utils__WEBPACK_IMPORTED_MODULE_4__["getStreamObj"])(this.source3$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])(function () { return _this.source4$; })), "interval(2000).pipe(take(3)).pipe(switchMap(() => interval(1000).pipe(take6)))");
        this.source5$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["fromEvent"])(document, 'click');
        this.source5 = Object(_utils__WEBPACK_IMPORTED_MODULE_4__["getStreamObj"])(this.source5$, "fromEvent(document, 'click')");
        this.result3 = Object(_utils__WEBPACK_IMPORTED_MODULE_4__["getStreamObj"])(this.source5$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])(function () { return _this.source4$; })), "fromEvent(document, 'click').pipe(switchMap(() => interval(1000).pipe(take6)))");
        this.source6$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["fromEvent"])(document, 'click');
        this.source6 = Object(_utils__WEBPACK_IMPORTED_MODULE_4__["getStreamObj"])(this.source6$, "fromEvent(document, 'click')");
        this.source7$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["interval"])(1000);
        this.source7 = Object(_utils__WEBPACK_IMPORTED_MODULE_4__["getStreamObj"])(this.source7$, "interval(1000)");
        this.result4 = Object(_utils__WEBPACK_IMPORTED_MODULE_4__["getStreamObj"])(this.source6$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])(function () { return _this.source7$; })), "fromEvent(document, 'click').pipe(switchMap(() => interval(1000)))");
    }
    SwitchMapComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-switch-map',
            template: __webpack_require__(/*! ./switch-map.component.pug */ "./src/app/pages/transformation/switch-map/switch-map.component.pug"),
        })
    ], SwitchMapComponent);
    return SwitchMapComponent;
}());



/***/ }),

/***/ "./src/app/pages/transformation/to-array/to-array.component.pug":
/*!**********************************************************************!*\
  !*** ./src/app/pages/transformation/to-array/to-array.component.pug ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var req = __webpack_require__(/*! !./node_modules/pug-loader!./src/app/pages/transformation/to-array/to-array.component.pug */ "./node_modules/pug-loader/index.js!./src/app/pages/transformation/to-array/to-array.component.pug");
module.exports = (req['default'] || req).apply(req, [])

/***/ }),

/***/ "./src/app/pages/transformation/to-array/to-array.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/pages/transformation/to-array/to-array.component.ts ***!
  \*********************************************************************/
/*! exports provided: ToArrayComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToArrayComponent", function() { return ToArrayComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../utils */ "./src/app/pages/utils.ts");





var ToArrayComponent = /** @class */ (function () {
    function ToArrayComponent() {
        this.source1$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(1, 2, 3, 4);
        this.source1 = Object(_utils__WEBPACK_IMPORTED_MODULE_4__["getStreamObj"])(this.source1$, "of(1, 2, 3, 4)");
        this.result1 = Object(_utils__WEBPACK_IMPORTED_MODULE_4__["getStreamObj"])(this.source1$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["toArray"])()), "of(1, 2, 3, 4).pipe(toArray())");
        this.source2$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["interval"])(1000);
        this.source2 = Object(_utils__WEBPACK_IMPORTED_MODULE_4__["getStreamObj"])(this.source2$, "interval(1000)");
        this.result2 = Object(_utils__WEBPACK_IMPORTED_MODULE_4__["getStreamObj"])(this.source2$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["toArray"])()), "interval(1000).pipe(toArray())");
        this.source3$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["interval"])(1000).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(10));
        this.source3 = Object(_utils__WEBPACK_IMPORTED_MODULE_4__["getStreamObj"])(this.source3$, "interval(1000).pipe(take(10)");
        this.result3 = Object(_utils__WEBPACK_IMPORTED_MODULE_4__["getStreamObj"])(this.source2$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(10), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["toArray"])()), "interval(1000).pipe(take(10), toArray())");
    }
    ToArrayComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-to-array',
            template: __webpack_require__(/*! ./to-array.component.pug */ "./src/app/pages/transformation/to-array/to-array.component.pug"),
        })
    ], ToArrayComponent);
    return ToArrayComponent;
}());



/***/ }),

/***/ "./src/app/pages/transformation/transformation.routing.ts":
/*!****************************************************************!*\
  !*** ./src/app/pages/transformation/transformation.routing.ts ***!
  \****************************************************************/
/*! exports provided: transformationPagesRoutes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "transformationPagesRoutes", function() { return transformationPagesRoutes; });
/* harmony import */ var _buffer_buffer_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./buffer/buffer.component */ "./src/app/pages/transformation/buffer/buffer.component.ts");
/* harmony import */ var _buffer_count_buffer_count_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./buffer-count/buffer-count.component */ "./src/app/pages/transformation/buffer-count/buffer-count.component.ts");
/* harmony import */ var _buffer_time_buffer_time_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./buffer-time/buffer-time.component */ "./src/app/pages/transformation/buffer-time/buffer-time.component.ts");
/* harmony import */ var _buffer_toogle_buffer_toogle_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./buffer-toogle/buffer-toogle.component */ "./src/app/pages/transformation/buffer-toogle/buffer-toogle.component.ts");
/* harmony import */ var _buffer_when_buffer_when_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./buffer-when/buffer-when.component */ "./src/app/pages/transformation/buffer-when/buffer-when.component.ts");
/* harmony import */ var _concat_map_concat_map_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./concat-map/concat-map.component */ "./src/app/pages/transformation/concat-map/concat-map.component.ts");
/* harmony import */ var _concat_map_to_concat_map_to_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./concat-map-to/concat-map-to.component */ "./src/app/pages/transformation/concat-map-to/concat-map-to.component.ts");
/* harmony import */ var _merge_map_merge_map_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./merge-map/merge-map.component */ "./src/app/pages/transformation/merge-map/merge-map.component.ts");
/* harmony import */ var _switch_map_switch_map_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./switch-map/switch-map.component */ "./src/app/pages/transformation/switch-map/switch-map.component.ts");
/* harmony import */ var _exhaust_map_exhaust_map_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./exhaust-map/exhaust-map.component */ "./src/app/pages/transformation/exhaust-map/exhaust-map.component.ts");
/* harmony import */ var _expand_expand_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./expand/expand.component */ "./src/app/pages/transformation/expand/expand.component.ts");
/* harmony import */ var _group_by_group_by_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./group-by/group-by.component */ "./src/app/pages/transformation/group-by/group-by.component.ts");
/* harmony import */ var _map_map_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./map/map.component */ "./src/app/pages/transformation/map/map.component.ts");
/* harmony import */ var _map_to_map_to_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./map-to/map-to.component */ "./src/app/pages/transformation/map-to/map-to.component.ts");
/* harmony import */ var _partition_partition_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./partition/partition.component */ "./src/app/pages/transformation/partition/partition.component.ts");
/* harmony import */ var _pluck_pluck_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./pluck/pluck.component */ "./src/app/pages/transformation/pluck/pluck.component.ts");
/* harmony import */ var _reduce_reduce_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./reduce/reduce.component */ "./src/app/pages/transformation/reduce/reduce.component.ts");
/* harmony import */ var _scan_scan_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./scan/scan.component */ "./src/app/pages/transformation/scan/scan.component.ts");
/* harmony import */ var _to_array_to_array_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./to-array/to-array.component */ "./src/app/pages/transformation/to-array/to-array.component.ts");
/* harmony import */ var _window_window_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./window/window.component */ "./src/app/pages/transformation/window/window.component.ts");
/* harmony import */ var _window_count_window_count_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./window-count/window-count.component */ "./src/app/pages/transformation/window-count/window-count.component.ts");
/* harmony import */ var _window_time_window_time_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./window-time/window-time.component */ "./src/app/pages/transformation/window-time/window-time.component.ts");






















var transformationPagesRoutes = [
    { path: 'buffer', component: _buffer_buffer_component__WEBPACK_IMPORTED_MODULE_0__["BufferComponent"] },
    { path: 'buffer-count', component: _buffer_count_buffer_count_component__WEBPACK_IMPORTED_MODULE_1__["BufferCountComponent"] },
    { path: 'buffer-time', component: _buffer_time_buffer_time_component__WEBPACK_IMPORTED_MODULE_2__["BufferTimeComponent"] },
    { path: 'buffer-toogle', component: _buffer_toogle_buffer_toogle_component__WEBPACK_IMPORTED_MODULE_3__["BufferToggleComponent"] },
    { path: 'buffer-when', component: _buffer_when_buffer_when_component__WEBPACK_IMPORTED_MODULE_4__["BufferWhenComponent"] },
    { path: 'concat-map', component: _concat_map_concat_map_component__WEBPACK_IMPORTED_MODULE_5__["ConcatMapComponent"] },
    { path: 'concat-map-to', component: _concat_map_to_concat_map_to_component__WEBPACK_IMPORTED_MODULE_6__["ConcatMapToComponent"] },
    { path: 'merge-map', component: _merge_map_merge_map_component__WEBPACK_IMPORTED_MODULE_7__["MergeMapComponent"] },
    { path: 'switch-map', component: _switch_map_switch_map_component__WEBPACK_IMPORTED_MODULE_8__["SwitchMapComponent"] },
    { path: 'exhaust-map', component: _exhaust_map_exhaust_map_component__WEBPACK_IMPORTED_MODULE_9__["ExhaustMapComponent"] },
    { path: 'expand', component: _expand_expand_component__WEBPACK_IMPORTED_MODULE_10__["ExpandComponent"] },
    { path: 'group-by', component: _group_by_group_by_component__WEBPACK_IMPORTED_MODULE_11__["GroupByComponent"] },
    { path: 'map', component: _map_map_component__WEBPACK_IMPORTED_MODULE_12__["MapComponent"] },
    { path: 'map-to', component: _map_to_map_to_component__WEBPACK_IMPORTED_MODULE_13__["MapToComponent"] },
    { path: 'partition', component: _partition_partition_component__WEBPACK_IMPORTED_MODULE_14__["PartitionComponent"] },
    { path: 'pluck', component: _pluck_pluck_component__WEBPACK_IMPORTED_MODULE_15__["PluckComponent"] },
    { path: 'reduce', component: _reduce_reduce_component__WEBPACK_IMPORTED_MODULE_16__["ReduceComponent"] },
    { path: 'scan', component: _scan_scan_component__WEBPACK_IMPORTED_MODULE_17__["ScanComponent"] },
    { path: 'to-array', component: _to_array_to_array_component__WEBPACK_IMPORTED_MODULE_18__["ToArrayComponent"] },
    { path: 'window', component: _window_window_component__WEBPACK_IMPORTED_MODULE_19__["WindowComponent"] },
    { path: 'window-count', component: _window_count_window_count_component__WEBPACK_IMPORTED_MODULE_20__["WindowCountComponent"] },
    { path: 'window-time', component: _window_time_window_time_component__WEBPACK_IMPORTED_MODULE_21__["WindowTimeComponent"] },
];


/***/ }),

/***/ "./src/app/pages/transformation/window-count/window-count.component.pug":
/*!******************************************************************************!*\
  !*** ./src/app/pages/transformation/window-count/window-count.component.pug ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var req = __webpack_require__(/*! !./node_modules/pug-loader!./src/app/pages/transformation/window-count/window-count.component.pug */ "./node_modules/pug-loader/index.js!./src/app/pages/transformation/window-count/window-count.component.pug");
module.exports = (req['default'] || req).apply(req, [])

/***/ }),

/***/ "./src/app/pages/transformation/window-count/window-count.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/pages/transformation/window-count/window-count.component.ts ***!
  \*****************************************************************************/
/*! exports provided: WindowCountComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WindowCountComponent", function() { return WindowCountComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../utils */ "./src/app/pages/utils.ts");





var WindowCountComponent = /** @class */ (function () {
    function WindowCountComponent() {
        this.source1$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["interval"])(1000);
        this.source1 = Object(_utils__WEBPACK_IMPORTED_MODULE_4__["getStreamObj"])(this.source1$, 'interval(1000)');
        this.result1 = Object(_utils__WEBPACK_IMPORTED_MODULE_4__["getStreamObj"])(this.source1$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["windowCount"])(2, 3), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["mergeAll"])()), "interval(1000).pipe(windowCount(2, 3), mergeAll())", 'Ignore every 3rd event');
        this.result2 = Object(_utils__WEBPACK_IMPORTED_MODULE_4__["getStreamObj"])(this.source1$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["windowCount"])(4), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["mergeAll"])()), "interval(1000).pipe(windowCount(4), mergeAll())");
    }
    WindowCountComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-window-count',
            template: __webpack_require__(/*! ./window-count.component.pug */ "./src/app/pages/transformation/window-count/window-count.component.pug"),
        })
    ], WindowCountComponent);
    return WindowCountComponent;
}());



/***/ }),

/***/ "./src/app/pages/transformation/window-time/window-time.component.pug":
/*!****************************************************************************!*\
  !*** ./src/app/pages/transformation/window-time/window-time.component.pug ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var req = __webpack_require__(/*! !./node_modules/pug-loader!./src/app/pages/transformation/window-time/window-time.component.pug */ "./node_modules/pug-loader/index.js!./src/app/pages/transformation/window-time/window-time.component.pug");
module.exports = (req['default'] || req).apply(req, [])

/***/ }),

/***/ "./src/app/pages/transformation/window-time/window-time.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/pages/transformation/window-time/window-time.component.ts ***!
  \***************************************************************************/
/*! exports provided: WindowTimeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WindowTimeComponent", function() { return WindowTimeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../utils */ "./src/app/pages/utils.ts");





var WindowTimeComponent = /** @class */ (function () {
    function WindowTimeComponent() {
        this.source1$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["fromEvent"])(document, 'click');
        this.source1 = Object(_utils__WEBPACK_IMPORTED_MODULE_4__["getStreamObj"])(this.source1$, "fromEvent(document, 'click')");
        this.result1 = Object(_utils__WEBPACK_IMPORTED_MODULE_4__["getStreamObj"])(this.source1$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["windowTime"])(2000, 5000, 2), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["mergeAll"])()), "fromEvent(document, 'click').pipe(windowTime(2000, 5000, 2), mergeAll())", 'Every 5 seconds start a window 2 second long, and emit at most 2 click events per window');
    }
    WindowTimeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-window-time',
            template: __webpack_require__(/*! ./window-time.component.pug */ "./src/app/pages/transformation/window-time/window-time.component.pug"),
        })
    ], WindowTimeComponent);
    return WindowTimeComponent;
}());



/***/ }),

/***/ "./src/app/pages/transformation/window/window.component.pug":
/*!******************************************************************!*\
  !*** ./src/app/pages/transformation/window/window.component.pug ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var req = __webpack_require__(/*! !./node_modules/pug-loader!./src/app/pages/transformation/window/window.component.pug */ "./node_modules/pug-loader/index.js!./src/app/pages/transformation/window/window.component.pug");
module.exports = (req['default'] || req).apply(req, [])

/***/ }),

/***/ "./src/app/pages/transformation/window/window.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/pages/transformation/window/window.component.ts ***!
  \*****************************************************************/
/*! exports provided: WindowComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WindowComponent", function() { return WindowComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../utils */ "./src/app/pages/utils.ts");





var WindowComponent = /** @class */ (function () {
    function WindowComponent() {
        this.source1$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["timer"])(3000, 1000).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (x) { return x + 'a'; }));
        this.source1 = Object(_utils__WEBPACK_IMPORTED_MODULE_4__["getStreamObj"])(this.source1$, "timer(0, 1000)");
        this.source2$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["interval"])(3000);
        this.source2 = Object(_utils__WEBPACK_IMPORTED_MODULE_4__["getStreamObj"])(this.source2$, "interval(3000)");
        this.result1 = Object(_utils__WEBPACK_IMPORTED_MODULE_4__["getStreamObj"])(this.source1$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["window"])(this.source2$), 
        // tap(x => console.warn('x', x)),
        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["mergeAll"])()), 'timer(0, 1000).pipe(window(interval(3000)))');
        this.source3$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["fromEvent"])(document, 'click');
        this.source3 = Object(_utils__WEBPACK_IMPORTED_MODULE_4__["getStreamObj"])(this.source3$, "fromEvent(document, 'click')");
        this.result2$ = this.source3$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["window"])(this.source1$), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (win) { return win.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(2)); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["mergeAll"])());
        this.result2 = Object(_utils__WEBPACK_IMPORTED_MODULE_4__["getStreamObj"])(this.result2$, "fromEvent(document, 'click').pipe(\n    window(timer(0, 1000)),\n    map(win => win.pipe(take(2))),\n    mergeAll(),\n  )");
    }
    WindowComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-window',
            template: __webpack_require__(/*! ./window.component.pug */ "./src/app/pages/transformation/window/window.component.pug"),
        })
    ], WindowComponent);
    return WindowComponent;
}());



/***/ }),

/***/ "./src/app/pages/utils.ts":
/*!********************************!*\
  !*** ./src/app/pages/utils.ts ***!
  \********************************/
/*! exports provided: getStreamObj, generateDoubles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getStreamObj", function() { return getStreamObj; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "generateDoubles", function() { return generateDoubles; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var ramda__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ramda */ "./node_modules/ramda/es/index.js");
/* harmony import */ var _app_constant__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.constant */ "./src/app/pages/app.constant.ts");




function getStreamObj(values, code, description, randomized, timeOut) {
    if (description === void 0) { description = ''; }
    if (randomized === void 0) { randomized = false; }
    if (timeOut === void 0) { timeOut = 0; }
    return {
        code: code,
        description: description,
        values: randomized ? randomizeStreamValuesView(values) : values,
        timeOut: timeOut,
    };
}
function randomizeStreamValuesView(stream) {
    return stream.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (val) { return Object(ramda__WEBPACK_IMPORTED_MODULE_2__["mergeRight"])({ shape: getRandomShape(), color: getRandomColor() }, { val: val }); }));
}
function getRandomShape() {
    return _app_constant__WEBPACK_IMPORTED_MODULE_3__["shapes"][getRandomNumber(0, Object(ramda__WEBPACK_IMPORTED_MODULE_2__["length"])(_app_constant__WEBPACK_IMPORTED_MODULE_3__["shapes"]) - 1)];
}
function getRandomColor() {
    return _app_constant__WEBPACK_IMPORTED_MODULE_3__["colors"][getRandomNumber(0, Object(ramda__WEBPACK_IMPORTED_MODULE_2__["length"])(_app_constant__WEBPACK_IMPORTED_MODULE_3__["colors"]) - 1)];
}
/**
 * Returns a random number between min and max
 */
function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
function generateDoubles(seed) {
    var i;
    return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
        switch (_a.label) {
            case 0:
                i = seed;
                _a.label = 1;
            case 1:
                if (!(i < 1000)) return [3 /*break*/, 3];
                return [4 /*yield*/, i];
            case 2:
                _a.sent();
                i = 2 * i; // double it
                return [3 /*break*/, 1];
            case 3: return [2 /*return*/];
        }
    });
}


/***/ }),

/***/ "./src/app/ui/ui-code/ui-code.component.pug":
/*!**************************************************!*\
  !*** ./src/app/ui/ui-code/ui-code.component.pug ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var req = __webpack_require__(/*! !./node_modules/pug-loader!./src/app/ui/ui-code/ui-code.component.pug */ "./node_modules/pug-loader/index.js!./src/app/ui/ui-code/ui-code.component.pug");
module.exports = (req['default'] || req).apply(req, [])

/***/ }),

/***/ "./src/app/ui/ui-code/ui-code.component.scss":
/*!***************************************************!*\
  !*** ./src/app/ui/ui-code/ui-code.component.scss ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".prettyprint {\n  padding: 10px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zLmdhdnJpbG92L0VkdS9yeGpzL3J4anMtYXBwL3NyYy9hcHAvdWkvdWktY29kZS91aS1jb2RlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBYSxFQUFBIiwiZmlsZSI6InNyYy9hcHAvdWkvdWktY29kZS91aS1jb2RlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnByZXR0eXByaW50IHtcbiAgcGFkZGluZzogMTBweDtcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/ui/ui-code/ui-code.component.ts":
/*!*************************************************!*\
  !*** ./src/app/ui/ui-code/ui-code.component.ts ***!
  \*************************************************/
/*! exports provided: UiCodeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UiCodeComponent", function() { return UiCodeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var UiCodeComponent = /** @class */ (function () {
    function UiCodeComponent() {
    }
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], UiCodeComponent.prototype, "code", void 0);
    UiCodeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-ui-code',
            template: __webpack_require__(/*! ./ui-code.component.pug */ "./src/app/ui/ui-code/ui-code.component.pug"),
            styles: [__webpack_require__(/*! ./ui-code.component.scss */ "./src/app/ui/ui-code/ui-code.component.scss")]
        })
    ], UiCodeComponent);
    return UiCodeComponent;
}());



/***/ }),

/***/ "./src/app/ui/ui-main/ui-main.component.pug":
/*!**************************************************!*\
  !*** ./src/app/ui/ui-main/ui-main.component.pug ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var req = __webpack_require__(/*! !./node_modules/pug-loader!./src/app/ui/ui-main/ui-main.component.pug */ "./node_modules/pug-loader/index.js!./src/app/ui/ui-main/ui-main.component.pug");
module.exports = (req['default'] || req).apply(req, [])

/***/ }),

/***/ "./src/app/ui/ui-main/ui-main.component.scss":
/*!***************************************************!*\
  !*** ./src/app/ui/ui-main/ui-main.component.scss ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  display: flex;\n  position: relative;\n  left: 200px;\n  width: calc(100% - 200px);\n  padding: 25px; }\n\n.main {\n  width: 100%;\n  min-height: 500px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zLmdhdnJpbG92L0VkdS9yeGpzL3J4anMtYXBwL3NyYy9hcHAvdWkvdWktbWFpbi91aS1tYWluLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBYTtFQUNiLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gseUJBQXlCO0VBQ3pCLGFBQWEsRUFBQTs7QUFHZjtFQUNFLFdBQVc7RUFDWCxpQkFBaUIsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3VpL3VpLW1haW4vdWktbWFpbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcbiAgZGlzcGxheTogZmxleDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBsZWZ0OiAyMDBweDtcbiAgd2lkdGg6IGNhbGMoMTAwJSAtIDIwMHB4KTtcbiAgcGFkZGluZzogMjVweDtcbn1cblxuLm1haW4ge1xuICB3aWR0aDogMTAwJTtcbiAgbWluLWhlaWdodDogNTAwcHg7XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/ui/ui-main/ui-main.component.ts":
/*!*************************************************!*\
  !*** ./src/app/ui/ui-main/ui-main.component.ts ***!
  \*************************************************/
/*! exports provided: UiMainComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UiMainComponent", function() { return UiMainComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var UiMainComponent = /** @class */ (function () {
    function UiMainComponent() {
    }
    UiMainComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-ui-main',
            template: __webpack_require__(/*! ./ui-main.component.pug */ "./src/app/ui/ui-main/ui-main.component.pug"),
            styles: [__webpack_require__(/*! ./ui-main.component.scss */ "./src/app/ui/ui-main/ui-main.component.scss")]
        })
    ], UiMainComponent);
    return UiMainComponent;
}());



/***/ }),

/***/ "./src/app/ui/ui-side-bar/ui-side-bar.component.pug":
/*!**********************************************************!*\
  !*** ./src/app/ui/ui-side-bar/ui-side-bar.component.pug ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var req = __webpack_require__(/*! !./node_modules/pug-loader!./src/app/ui/ui-side-bar/ui-side-bar.component.pug */ "./node_modules/pug-loader/index.js!./src/app/ui/ui-side-bar/ui-side-bar.component.pug");
module.exports = (req['default'] || req).apply(req, [])

/***/ }),

/***/ "./src/app/ui/ui-side-bar/ui-side-bar.component.scss":
/*!***********************************************************!*\
  !*** ./src/app/ui/ui-side-bar/ui-side-bar.component.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  position: fixed;\n  width: 200px;\n  max-width: 20%;\n  left: 0;\n  top: 0;\n  bottom: 0;\n  padding: 25px;\n  overflow-y: auto;\n  border: 1px solid #000; }\n\n.side-bar {\n  display: flex;\n  flex-direction: column; }\n\n.logo {\n  display: flex;\n  align-items: flex-start;\n  justify-content: center;\n  margin-bottom: 30px; }\n\n.logo svg {\n    width: 50px; }\n\n.page-list {\n  list-style: none; }\n\n.page-list .page-list__group {\n    display: flex;\n    flex-direction: column; }\n\n.page-list .page-list__group-name {\n    font-weight: bold;\n    margin-bottom: 5px; }\n\n.page-list .page-list__links {\n    list-style: none;\n    display: flex;\n    flex-direction: column;\n    margin-bottom: 40px; }\n\n.page-list .page-list__link a {\n    text-decoration: none;\n    color: #364149; }\n\n.page-list .page-list__link a:hover {\n      color: #2770a5; }\n\n.page-list .page-list__link a.active {\n    color: #1788da; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zLmdhdnJpbG92L0VkdS9yeGpzL3J4anMtYXBwL3NyYy9hcHAvdWkvdWktc2lkZS1iYXIvdWktc2lkZS1iYXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxlQUFlO0VBQ2YsWUFBWTtFQUNaLGNBQWM7RUFDZCxPQUFPO0VBQ1AsTUFBTTtFQUNOLFNBQVM7RUFDVCxhQUFhO0VBQ2IsZ0JBQWdCO0VBQ2hCLHNCQUFzQixFQUFBOztBQUd4QjtFQUNFLGFBQWE7RUFDYixzQkFBc0IsRUFBQTs7QUFHeEI7RUFDRSxhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLHVCQUF1QjtFQUN2QixtQkFBbUIsRUFBQTs7QUFKckI7SUFPSSxXQUFXLEVBQUE7O0FBSWY7RUFDRSxnQkFBZ0IsRUFBQTs7QUFEbEI7SUFJSSxhQUFhO0lBQ2Isc0JBQXNCLEVBQUE7O0FBTDFCO0lBU0ksaUJBQWlCO0lBQ2pCLGtCQUFrQixFQUFBOztBQVZ0QjtJQWNJLGdCQUFnQjtJQUNoQixhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLG1CQUFtQixFQUFBOztBQWpCdkI7SUFzQk0scUJBQXFCO0lBQ3JCLGNBQWMsRUFBQTs7QUF2QnBCO01BMEJRLGNBQWMsRUFBQTs7QUExQnRCO0lBK0JNLGNBQWMsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3VpL3VpLXNpZGUtYmFyL3VpLXNpZGUtYmFyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHdpZHRoOiAyMDBweDtcbiAgbWF4LXdpZHRoOiAyMCU7XG4gIGxlZnQ6IDA7XG4gIHRvcDogMDtcbiAgYm90dG9tOiAwO1xuICBwYWRkaW5nOiAyNXB4O1xuICBvdmVyZmxvdy15OiBhdXRvO1xuICBib3JkZXI6IDFweCBzb2xpZCAjMDAwO1xufVxuXG4uc2lkZS1iYXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuXG4ubG9nbyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgbWFyZ2luLWJvdHRvbTogMzBweDtcblxuICBzdmcge1xuICAgIHdpZHRoOiA1MHB4O1xuICB9XG59XG5cbi5wYWdlLWxpc3Qge1xuICBsaXN0LXN0eWxlOiBub25lO1xuXG4gIC5wYWdlLWxpc3RfX2dyb3VwIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIH1cblxuICAucGFnZS1saXN0X19ncm91cC1uYW1lIHtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBtYXJnaW4tYm90dG9tOiA1cHg7XG4gIH1cblxuICAucGFnZS1saXN0X19saW5rcyB7XG4gICAgbGlzdC1zdHlsZTogbm9uZTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgbWFyZ2luLWJvdHRvbTogNDBweDtcbiAgfVxuXG4gIC5wYWdlLWxpc3RfX2xpbmsge1xuICAgIGEge1xuICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgY29sb3I6ICMzNjQxNDk7XG5cbiAgICAgICY6aG92ZXIge1xuICAgICAgICBjb2xvcjogIzI3NzBhNTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBhLmFjdGl2ZSB7XG4gICAgICBjb2xvcjogIzE3ODhkYTtcbiAgICB9XG4gIH1cbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/ui/ui-side-bar/ui-side-bar.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/ui/ui-side-bar/ui-side-bar.component.ts ***!
  \*********************************************************/
/*! exports provided: UiSideBarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UiSideBarComponent", function() { return UiSideBarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ramda__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ramda */ "./node_modules/ramda/es/index.js");
/* harmony import */ var _pages_filtering_filtering_routing__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../pages/filtering/filtering.routing */ "./src/app/pages/filtering/filtering.routing.ts");
/* harmony import */ var _pages_combination_combination_routing__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../pages/combination/combination.routing */ "./src/app/pages/combination/combination.routing.ts");
/* harmony import */ var _pages_creation_creation_routing__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../pages/creation/creation.routing */ "./src/app/pages/creation/creation.routing.ts");
/* harmony import */ var _pages_conditional_conditional_routing__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../pages/conditional/conditional.routing */ "./src/app/pages/conditional/conditional.routing.ts");
/* harmony import */ var _pages_transformation_transformation_routing__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../pages/transformation/transformation.routing */ "./src/app/pages/transformation/transformation.routing.ts");
/* harmony import */ var _pages_subjects_subjects_routing__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../pages/subjects/subjects.routing */ "./src/app/pages/subjects/subjects.routing.ts");
/* harmony import */ var _pages_tasks_tasks_routing__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../pages/tasks/tasks.routing */ "./src/app/pages/tasks/tasks.routing.ts");
/* harmony import */ var _pages_multicasting_multicasting_routing__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../pages/multicasting/multicasting.routing */ "./src/app/pages/multicasting/multicasting.routing.ts");











var path = Object(ramda__WEBPACK_IMPORTED_MODULE_2__["map"])(Object(ramda__WEBPACK_IMPORTED_MODULE_2__["prop"])('path'));
var capitalize = function (str) { return str.charAt(0).toUpperCase() + str.substring(1); };
var UiSideBarComponent = /** @class */ (function () {
    function UiSideBarComponent() {
    }
    Object.defineProperty(UiSideBarComponent.prototype, "filterLinks", {
        get: function () {
            return path(_pages_filtering_filtering_routing__WEBPACK_IMPORTED_MODULE_3__["filteringPagesRoutes"]);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UiSideBarComponent.prototype, "combinationLinks", {
        get: function () {
            return path(_pages_combination_combination_routing__WEBPACK_IMPORTED_MODULE_4__["combinationPagesRoutes"]);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UiSideBarComponent.prototype, "creationLinks", {
        get: function () {
            return path(_pages_creation_creation_routing__WEBPACK_IMPORTED_MODULE_5__["creationPagesRoutes"]);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UiSideBarComponent.prototype, "conditionalLinks", {
        get: function () {
            return path(_pages_conditional_conditional_routing__WEBPACK_IMPORTED_MODULE_6__["conditionalPagesRoutes"]);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UiSideBarComponent.prototype, "transformationLinks", {
        get: function () {
            return path(_pages_transformation_transformation_routing__WEBPACK_IMPORTED_MODULE_7__["transformationPagesRoutes"]);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UiSideBarComponent.prototype, "subjectsLinks", {
        get: function () {
            return path(_pages_subjects_subjects_routing__WEBPACK_IMPORTED_MODULE_8__["subjectsPagesRoutes"]);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UiSideBarComponent.prototype, "tasksLinks", {
        get: function () {
            return path(_pages_tasks_tasks_routing__WEBPACK_IMPORTED_MODULE_9__["tasksPagesRoutes"]);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UiSideBarComponent.prototype, "multicastingLinks", {
        get: function () {
            return path(_pages_multicasting_multicasting_routing__WEBPACK_IMPORTED_MODULE_10__["multicastingPagesRoutes"]);
        },
        enumerable: true,
        configurable: true
    });
    UiSideBarComponent.prototype.camelCase = function (link) {
        return link.split('-').map(function (item, index) { return index > 0
            ? capitalize(item)
            : item; }).join('');
    };
    UiSideBarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-side-bar',
            template: __webpack_require__(/*! ./ui-side-bar.component.pug */ "./src/app/ui/ui-side-bar/ui-side-bar.component.pug"),
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
            styles: [__webpack_require__(/*! ./ui-side-bar.component.scss */ "./src/app/ui/ui-side-bar/ui-side-bar.component.scss")]
        })
    ], UiSideBarComponent);
    return UiSideBarComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/s.gavrilov/Edu/rxjs/rxjs-app/src/main.ts */"./src/main.ts");


/***/ }),

/***/ 1:
/*!********************!*\
  !*** fs (ignored) ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map