(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
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
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");




const routes = [];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _components_todo_list_todo_list_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/todo-list/todo-list.component */ "./src/app/components/todo-list/todo-list.component.ts");



class AppComponent {
    constructor() {
        this.title = 'todo-Angular';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 2, vars: 0, consts: [[1, "todo-lists"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-todo-list");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_components_todo_list_todo_list_component__WEBPACK_IMPORTED_MODULE_1__["TodoListComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.scss']
            }]
    }], null, null); })();


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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/drag-drop */ "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/drag-drop.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_todo_list_todo_list_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/todo-list/todo-list.component */ "./src/app/components/todo-list/todo-list.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _frontend_src_app_components_todo_list_directives_clickoutside_directive__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../frontend/src/app/components/todo-list/directives/clickoutside.directive */ "./src/app/components/todo-list/directives/clickoutside.directive.ts");










class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"],
            _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_2__["DragDropModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
        _components_todo_list_todo_list_component__WEBPACK_IMPORTED_MODULE_5__["TodoListComponent"],
        _frontend_src_app_components_todo_list_directives_clickoutside_directive__WEBPACK_IMPORTED_MODULE_8__["ClickOutsideDirective"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"],
        _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_2__["DragDropModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                    _components_todo_list_todo_list_component__WEBPACK_IMPORTED_MODULE_5__["TodoListComponent"],
                    _frontend_src_app_components_todo_list_directives_clickoutside_directive__WEBPACK_IMPORTED_MODULE_8__["ClickOutsideDirective"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"],
                    _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_2__["DragDropModule"]
                ],
                providers: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/components/todo-list/directives/clickoutside.directive.ts":
/*!***************************************************************************!*\
  !*** ./src/app/components/todo-list/directives/clickoutside.directive.ts ***!
  \***************************************************************************/
/*! exports provided: ClickOutsideDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClickOutsideDirective", function() { return ClickOutsideDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class ClickOutsideDirective {
    constructor(elementRef) {
        this.elementRef = elementRef;
        this.clickOutside = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    onClick(target) {
        const clickedInside = this.elementRef.nativeElement.contains(target);
        if (!clickedInside) {
            this.clickOutside.emit();
        }
    }
}
ClickOutsideDirective.ɵfac = function ClickOutsideDirective_Factory(t) { return new (t || ClickOutsideDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])); };
ClickOutsideDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: ClickOutsideDirective, selectors: [["", "clickOutside", ""]], hostBindings: function ClickOutsideDirective_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ClickOutsideDirective_click_HostBindingHandler($event) { return ctx.onClick($event.target); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveDocument"]);
    } }, outputs: { clickOutside: "clickOutside" } });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ClickOutsideDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
                selector: '[clickOutside]',
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }]; }, { clickOutside: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], onClick: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ['document:click', ['$event.target']]
        }] }); })();


/***/ }),

/***/ "./src/app/components/todo-list/todo-list.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/components/todo-list/todo-list.component.ts ***!
  \*************************************************************/
/*! exports provided: TodoListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TodoListComponent", function() { return TodoListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/cdk/drag-drop */ "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/drag-drop.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _directives_clickoutside_directive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./directives/clickoutside.directive */ "./src/app/components/todo-list/directives/clickoutside.directive.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");








function TodoListComponent_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.title);
} }
const _c0 = function () { return { standalone: true }; };
function TodoListComponent_form_7_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function TodoListComponent_form_7_Template_form_ngSubmit_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r3.onUpdateTitle(ctx_r3.newTitle); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "input", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function TodoListComponent_form_7_Template_input_ngModelChange_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r5.newTitle = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "OK");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TodoListComponent_form_7_Template_button_click_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r6.onEditTitle(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "NO");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r1.newTitle)("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](2, _c0));
} }
function TodoListComponent_li_26_span_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r7.todo);
} }
function TodoListComponent_li_26_span_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "del");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r7.todo);
} }
function TodoListComponent_li_26_form_5_Template(rf, ctx) { if (rf & 1) {
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function TodoListComponent_li_26_form_5_Template_form_ngSubmit_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r16); const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); const item_r7 = ctx_r15.$implicit; const i_r8 = ctx_r15.index; const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r14.onUpdateTodo(item_r7.id, i_r8); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "input", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function TodoListComponent_li_26_form_5_Template_input_ngModelChange_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r16); const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r17.changedTodo = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "OK");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TodoListComponent_li_26_form_5_Template_button_click_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r16); const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r18.offEditTodo(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "NO");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const i_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().index;
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("id", i_r8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r11.changedTodo)("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](3, _c0));
} }
function TodoListComponent_li_26_Template(rf, ctx) { if (rf & 1) {
    const _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "input", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function TodoListComponent_li_26_Template_input_change_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r21); const item_r7 = ctx.$implicit; const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r20.onComplete(item_r7); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, TodoListComponent_li_26_span_3_Template, 2, 1, "span", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, TodoListComponent_li_26_span_4_Template, 3, 1, "span", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, TodoListComponent_li_26_form_5_Template, 6, 4, "form", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "svg", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "use", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "label", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "span", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "svg", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TodoListComponent_li_26_Template__svg_svg_click_12_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r21); const i_r8 = ctx.index; const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r22.onEditTodo(i_r8); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "use", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "span", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TodoListComponent_li_26_Template_span_click_14_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r21); const item_r7 = ctx.$implicit; const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r23.onRemoveTodo(item_r7); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "svg", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "use", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r7 = ctx.$implicit;
    const i_r8 = ctx.index;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("checked", item_r7.isCompleted);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !item_r7.isCompleted);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r7.isCompleted);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.editTodoState && i_r8 === ctx_r2.editableTodoId);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("for", i_r8);
} }
class TodoListComponent {
    constructor(httpClient) {
        this.todo = '';
        this.changedTodo = '';
        this.title = '';
        this.newTitle = '';
        this.editTitleState = false;
        this.editTodoState = false;
        this.httpClient = httpClient;
    }
    drop(event) {
        Object(_angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_1__["moveItemInArray"])(this.todoList, event.previousIndex, event.currentIndex);
        console.log(event.previousIndex, event.currentIndex);
    }
    onEditTitle() {
        this.editTitleState = !this.editTitleState;
    }
    cancelEditTitle() {
        this.editTitleState = false;
    }
    onUpdateTitle(newTitle) {
        if (this.titleList.length === 0) {
            this.httpClient.post('http://localhost:3000/rest/title/', {
                title: newTitle
            }).subscribe(newTitle => {
                this.title = newTitle.title;
                this.titleId = newTitle.id;
                this.titleList.push(newTitle);
            });
            this.onEditTitle();
        }
        else {
            this.httpClient.patch('http://localhost:3000/rest/title/' + this.titleId, {
                title: newTitle
            }).subscribe(title => {
                this.title = title.title;
                this.onEditTitle();
            });
        }
    }
    onDeleteTitle() {
        if (this.titleList.length !== 0)
            this.httpClient.delete('http://localhost:3000/rest/title/' + this.titleId).subscribe(() => {
                this.titleList = [];
                this.title = '';
            });
    }
    onEditTodo(todoId) {
        this.editTodoState = !this.editTodoState;
        this.editableTodoId = todoId;
    }
    offEditTodo() {
        this.editTodoState = !this.editTodoState;
        this.editableTodoId = null;
    }
    onUpdateTodo(todoId, todoIndex) {
        if (this.changedTodo) {
            this.httpClient.patch('http://localhost:3000/rest/todo/' + todoId, {
                todo: this.changedTodo
            }).subscribe(todo => {
                this.changedTodo = todo.todo;
                this.todoList[todoIndex].todo = this.changedTodo;
                this.changedTodo = '';
                this.offEditTodo();
            });
        }
    }
    onCreateTodo() {
        if (this.todo) {
            this.httpClient.post('http://localhost:3000/rest/todo/', {
                todo: this.todo
            }).subscribe(todo => {
                this.todoList.push(todo);
            });
            this.todo = '';
        }
    }
    onRemoveTodo(todoOnDelete) {
        this.httpClient.delete('http://localhost:3000/rest/todo/' + todoOnDelete.id).subscribe(() => {
            this.todoList = this.todoList.filter(todo => todo.id !== todoOnDelete.id);
        });
    }
    onComplete(todoOnComplete) {
        this.httpClient.patch('http://localhost:3000/rest/todo/' + todoOnComplete.id, {
            todo: todoOnComplete.todo,
            isCompleted: !todoOnComplete.isCompleted
        }).subscribe((updatedTodo) => {
            this.todoList = this.todoList.map(todo => todo.id !== updatedTodo.id ? todo : updatedTodo);
        });
    }
    ngOnInit() {
        this.httpClient.get('http://localhost:3000/rest/todo/')
            .subscribe(todoList => {
            this.todoList = todoList;
            console.log(this.todoList);
        });
        this.httpClient.get('http://localhost:3000/rest/title/')
            .subscribe(title => {
            this.titleList = title;
            title.forEach(id => { this.titleId = id.id; });
            title.forEach(title => { this.title = title.title; });
        });
    }
}
TodoListComponent.ɵfac = function TodoListComponent_Factory(t) { return new (t || TodoListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"])); };
TodoListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TodoListComponent, selectors: [["app-todo-list"]], decls: 27, vars: 7, consts: [[1, "todo-list"], [1, "todo-list___header", 3, "clickOutside"], [1, "todo-list___header-calendar"], [1, "todo-list___header-calendar--icon"], [1, "icon"], [0, "xlink", "href", "../assets/icons/sprite.svg#icon-calendar"], ["class", "todo-list___header-calendar-list-name", 4, "ngIf"], ["action", "#", "class", "todo-list___header-calendar-list-name--form", 3, "ngSubmit", 4, "ngIf"], [1, "todo-list___header-controls"], [1, "todo-list___header-controls--edit"], ["for", "list-name"], [1, "icon", 3, "click"], [0, "xlink", "href", "../assets/icons/sprite.svg#icon-pencil1"], [1, "todo-list___header-controls--delete"], [0, "xlink", "href", "../assets/icons/sprite.svg#icon-bin"], [1, "todo-list__input"], ["for", "add-todo"], [1, "todo-list__input--plus"], [0, "xlink", "href", "../assets/icons/sprite.svg#icon-plus"], ["action", "#", 1, "todo-list__input--form", 3, "ngSubmit"], ["id", "add-todo", "type", "text", "placeholder", "Start typing here to create a task...", 1, "todo-list__input--form--input-todo", 3, "ngModel", "ngModelOptions", "ngModelChange"], ["type", "submit", 1, "todo-list__input--form--add-button", 3, "disabled"], ["cdkDropList", "", 1, "todo-list__tasks", 3, "cdkDropListDropped", "clickOutside"], ["cdkDrag", "", "class", "todo-list__tasks-item", 4, "ngFor", "ngForOf"], [1, "todo-list___header-calendar-list-name"], ["action", "#", 1, "todo-list___header-calendar-list-name--form", 3, "ngSubmit"], ["id", "list-name", "type", "text", 1, "todo-list___header-calendar-list-name--form--input", 3, "ngModel", "ngModelOptions", "ngModelChange"], ["type", "submit"], ["type", "button", 3, "click"], ["cdkDrag", "", 1, "todo-list__tasks-item"], [1, "todo-list__tasks-item--todo"], ["type", "checkbox", "name", "isCompleted", 1, "checkbox", 3, "checked", "change"], [4, "ngIf"], ["action", "#", "class", "todo-list__tasks-item--todo--form", 3, "ngSubmit", 4, "ngIf"], [1, "todo-list__tasks-controls"], [1, "todo-list__tasks-controls--move"], ["viewBox", "0 0 20 20", "width", "20", "height", "20", 1, "icon"], [0, "xlink", "href", "../assets/icons/sprite.svg#icon-menu2"], [3, "for"], [1, "todo-list__tasks-controls--edit"], ["viewBox", "0 0 20 20", "width", "20", "height", "20", 1, "icon", 3, "click"], [1, "todo-list__tasks-controls--delete", 3, "click"], ["action", "#", 1, "todo-list__tasks-item--todo--form", 3, "ngSubmit"], ["type", "text", 1, "todo-input", 3, "id", "ngModel", "ngModelOptions", "ngModelChange"]], template: function TodoListComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("clickOutside", function TodoListComponent_Template_div_clickOutside_1_listener() { return ctx.cancelEditTitle(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "svg", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "use", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, TodoListComponent_div_6_Template, 2, 1, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, TodoListComponent_form_7_Template, 6, 3, "form", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "label", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "svg", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TodoListComponent_Template__svg_svg_click_11_listener() { return ctx.onEditTitle(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "use", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "span", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "svg", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TodoListComponent_Template__svg_svg_click_14_listener() { return ctx.onDeleteTitle(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "use", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "label", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "span", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "svg", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "use", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "form", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function TodoListComponent_Template_form_ngSubmit_21_listener() { return ctx.onCreateTodo(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "input", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function TodoListComponent_Template_input_ngModelChange_22_listener($event) { return ctx.todo = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "button", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Add Task");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "ul", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("cdkDropListDropped", function TodoListComponent_Template_ul_cdkDropListDropped_25_listener($event) { return ctx.drop($event); })("clickOutside", function TodoListComponent_Template_ul_clickOutside_25_listener() { return ctx.offEditTodo(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](26, TodoListComponent_li_26_Template, 17, 5, "li", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.editTitleState);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.editTitleState);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.todo)("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](6, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx.todo);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.todoList);
    } }, directives: [_directives_clickoutside_directive__WEBPACK_IMPORTED_MODULE_3__["ClickOutsideDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgModel"], _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_1__["CdkDropList"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_1__["CdkDrag"]], styles: [".todo-list[_ngcontent-%COMP%] {\n  margin: 0 auto;\n  max-width: 60rem;\n  min-width: 30rem;\n}\n.todo-list[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%] {\n  width: 2rem;\n  height: 2rem;\n  cursor: pointer;\n}\n.todo-list___header[_ngcontent-%COMP%] {\n  background: linear-gradient(#6e9ef8, #5979b4);\n  min-height: 5rem;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 0 1.8rem;\n}\n.todo-list___header-calendar[_ngcontent-%COMP%] {\n  display: flex;\n  position: relative;\n}\n.todo-list___header-calendar--icon[_ngcontent-%COMP%] {\n  margin-right: 1rem;\n}\n.todo-list___header-calendar-list-name[_ngcontent-%COMP%] {\n  color: #fff;\n  font-size: 1.5rem;\n  font-weight: 600;\n}\n.todo-list___header-calendar-list-name--form[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  left: 40px;\n  display: flex;\n}\n.todo-list___header-calendar-list-name--form--input[_ngcontent-%COMP%] {\n  font-size: 1.5rem;\n  height: 2.5rem;\n  width: 20rem;\n}\n.todo-list___header-calendar-list-name--form--input[_ngcontent-%COMP%]:focus {\n  outline: none;\n}\n.todo-list___header-calendar-list-name--form[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  width: 3rem;\n  cursor: pointer;\n}\n.todo-list___header-controls--edit[_ngcontent-%COMP%] {\n  margin-right: 2rem;\n}\n.todo-list__input[_ngcontent-%COMP%] {\n  background: linear-gradient(#FFFFFF, #ABABAB);\n  min-height: 5rem;\n  display: flex;\n  align-items: center;\n}\n.todo-list__input--plus[_ngcontent-%COMP%] {\n  margin: 0 1.5rem 0 1.5rem;\n  flex: 0 0 auto;\n}\n.todo-list__input--plus[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  fill: green;\n}\n.todo-list__input--form[_ngcontent-%COMP%] {\n  flex: 0 2 90%;\n  display: flex;\n  flex-wrap: wrap;\n}\n.todo-list__input--form--input-todo[_ngcontent-%COMP%] {\n  font-size: 1.5rem;\n  flex: 4 4 30rem;\n  height: 3rem;\n  padding-left: 1rem;\n}\n.todo-list__input--form--input-todo[_ngcontent-%COMP%]:focus {\n  outline: none;\n}\n.todo-list__input--form--add-button[_ngcontent-%COMP%] {\n  height: 3rem;\n  cursor: pointer;\n  background: linear-gradient(#63db8b, #4ea742);\n  border-radius: 0 5px 5px 0;\n  color: #FFFFFF;\n  font-weight: 800;\n  border: none;\n  outline: none;\n  flex: 2 2 6rem;\n}\n.todo-list__input--form--add-button[_ngcontent-%COMP%]:active {\n  background: linear-gradient(#689262, #40614b);\n}\n.todo-list__tasks[_ngcontent-%COMP%]   .cdk-drop-list-dragging[_ngcontent-%COMP%] {\n  transition: transform 250ms cubic-bezier(0, 0, 0.2, 1);\n}\n.todo-list__tasks-item[_ngcontent-%COMP%] {\n  display: flex;\n  box-sizing: border-box;\n  justify-content: space-between;\n  align-items: center;\n  border: 2px solid #ddd;\n  background-color: #fff;\n  min-height: 5rem;\n  padding: 0 2rem;\n  font-size: 1.5rem;\n}\n.todo-list__tasks-item--todo[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n}\n.todo-list__tasks-item--todo[_ngcontent-%COMP%]   .completed-todo[_ngcontent-%COMP%]::placeholder {\n  text-decoration: line-through;\n}\n.todo-list__tasks-item--todo[_ngcontent-%COMP%]   .checkbox[_ngcontent-%COMP%] {\n  margin-right: 2rem;\n}\n.todo-list__tasks-item--todo--form[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n}\n.todo-list__tasks-item--todo--form[_ngcontent-%COMP%]   .todo-input[_ngcontent-%COMP%] {\n  height: 2rem;\n  font-size: 1.2rem;\n}\n.todo-list__tasks-item--todo--form[_ngcontent-%COMP%]   .todo-input[_ngcontent-%COMP%]:focus {\n  outline: none;\n}\n.todo-list__tasks-item--todo--form[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  width: 2rem;\n  height: 2rem;\n}\n.todo-list__tasks-item[_ngcontent-%COMP%]:not(.cdk-drag-placeholder) {\n  transition: transform 250ms cubic-bezier(0, 0, 0.2, 1);\n}\n.todo-list__tasks-item[_ngcontent-%COMP%]:hover {\n  background-color: burlywood;\n}\n.todo-list__tasks-item[_ngcontent-%COMP%]   .cdk-drag-preview[_ngcontent-%COMP%] {\n  box-sizing: border-box;\n  border-radius: 4px;\n  box-shadow: 0 5px 5px -3px rgba(0, 0, 0, 0.2), 0 8px 10px 1px rgba(0, 0, 0, 0.14), 0 3px 14px 2px rgba(0, 0, 0, 0.12);\n}\n.todo-list__tasks-item[_ngcontent-%COMP%]   .cdk-drag-placeholder[_ngcontent-%COMP%] {\n  opacity: 0;\n}\n.todo-list__tasks-item[_ngcontent-%COMP%]   .cdk-drag-animating[_ngcontent-%COMP%] {\n  transition: transform 250ms cubic-bezier(0, 0, 0.2, 1);\n}\n.todo-list__tasks-item[_ngcontent-%COMP%]:last-child {\n  border-radius: 0 0 15px 15px;\n}\n.todo-list__tasks[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%] {\n  width: 1.5rem;\n  height: 1.5rem;\n}\n.todo-list__tasks-controls[_ngcontent-%COMP%] {\n  display: flex;\n  flex: 0 0 15%;\n  justify-content: space-between;\n}\n.todo-list__tasks-controls--move[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%] {\n  cursor: move !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy90b2RvLWxpc3QvdG9kby1saXN0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsY0FBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7QUFDRjtBQUNFO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0FBQ0o7QUFFRTtFQUNFLDZDQUFBO0VBQ0EsZ0JBQUE7RUFDQSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0FBQUo7QUFFSTtFQUNFLGFBQUE7RUFDQSxrQkFBQTtBQUFOO0FBRU07RUFDRSxrQkFBQTtBQUFSO0FBR007RUFDRSxXQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtBQURSO0FBR1E7RUFDRSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxVQUFBO0VBQ0EsYUFBQTtBQURWO0FBR1U7RUFDRSxpQkFBQTtFQUNBLGNBQUE7RUFDQSxZQUFBO0FBRFo7QUFHWTtFQUNFLGFBQUE7QUFEZDtBQUtVO0VBQ0UsV0FBQTtFQUNBLGVBQUE7QUFIWjtBQVVNO0VBQ0Usa0JBQUE7QUFSUjtBQWFFO0VBQ0UsNkNBQUE7RUFDQSxnQkFBQTtFQUVBLGFBQUE7RUFDQSxtQkFBQTtBQVpKO0FBY0k7RUFDRSx5QkFBQTtFQUNBLGNBQUE7QUFaTjtBQWNNO0VBQ0UsV0FBQTtBQVpSO0FBZ0JJO0VBQ0UsYUFBQTtFQUNBLGFBQUE7RUFDQSxlQUFBO0FBZE47QUFnQk07RUFDRSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7QUFkUjtBQWVRO0VBQ0UsYUFBQTtBQWJWO0FBaUJNO0VBQ0UsWUFBQTtFQUNBLGVBQUE7RUFDQSw2Q0FBQTtFQUNBLDBCQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxjQUFBO0FBZlI7QUFpQlE7RUFDRSw2Q0FBQTtBQWZWO0FBc0JJO0VBQ0Usc0RBQUE7QUFwQk47QUFzQkk7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSw4QkFBQTtFQUNBLG1CQUFBO0VBQ0Esc0JBQUE7RUFDQSxzQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0FBcEJOO0FBc0JNO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0FBcEJSO0FBc0JRO0VBQ0UsNkJBQUE7QUFwQlY7QUF1QlE7RUFDRSxrQkFBQTtBQXJCVjtBQXdCUTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtBQXRCVjtBQXdCVTtFQUNFLFlBQUE7RUFDQSxpQkFBQTtBQXRCWjtBQXdCWTtFQUNFLGFBQUE7QUF0QmQ7QUEwQlU7RUFDRSxXQUFBO0VBQ0EsWUFBQTtBQXhCWjtBQTZCTTtFQUNFLHNEQUFBO0FBM0JSO0FBOEJNO0VBQ0UsMkJBQUE7QUE1QlI7QUErQk07RUFDRSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0EscUhBQUE7QUE3QlI7QUFrQ007RUFDRSxVQUFBO0FBaENSO0FBbUNNO0VBQ0Usc0RBQUE7QUFqQ1I7QUFvQ007RUFDRSw0QkFBQTtBQWxDUjtBQXNDSTtFQUNFLGFBQUE7RUFDQSxjQUFBO0FBcENOO0FBd0NJO0VBQ0UsYUFBQTtFQUNBLGFBQUE7RUFDQSw4QkFBQTtBQXRDTjtBQXdDTTtFQUNFLHVCQUFBO0FBdENSIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy90b2RvLWxpc3QvdG9kby1saXN0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnRvZG8tbGlzdCB7XG4gIG1hcmdpbjogMCBhdXRvO1xuICBtYXgtd2lkdGg6IDYwcmVtO1xuICBtaW4td2lkdGg6IDMwcmVtO1xuXG4gIC5pY29uIHtcbiAgICB3aWR0aDogMnJlbTtcbiAgICBoZWlnaHQ6IDJyZW07XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICB9XG5cbiAgJl9fX2hlYWRlciB7XG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KCM2ZTllZjgsICM1OTc5YjQpO1xuICAgIG1pbi1oZWlnaHQ6IDVyZW07XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBwYWRkaW5nOiAwIDEuOHJlbTsgIFxuXG4gICAgJi1jYWxlbmRhciB7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuXG4gICAgICAmLS1pY29uIHtcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAxcmVtO1xuICAgICAgfVxuXG4gICAgICAmLWxpc3QtbmFtZSB7XG4gICAgICAgIGNvbG9yOiAjZmZmO1xuICAgICAgICBmb250LXNpemU6IDEuNXJlbTtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcblxuICAgICAgICAmLS1mb3JtIHtcbiAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgdG9wOiAwO1xuICAgICAgICAgIGxlZnQ6IDQwcHg7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcblxuICAgICAgICAgICYtLWlucHV0IHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMS41cmVtO1xuICAgICAgICAgICAgaGVpZ2h0OiAyLjVyZW07XG4gICAgICAgICAgICB3aWR0aDogMjByZW07XG5cbiAgICAgICAgICAgICY6Zm9jdXMge1xuICAgICAgICAgICAgICBvdXRsaW5lOiBub25lO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cblxuICAgICAgICAgICYgYnV0dG9uIHtcbiAgICAgICAgICAgIHdpZHRoOiAzcmVtO1xuICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgICYtY29udHJvbHMge1xuICAgICAgJi0tZWRpdHtcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAycmVtOyAgXG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgJl9faW5wdXQge1xuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgjRkZGRkZGLCAjQUJBQkFCKTtcbiAgICBtaW4taGVpZ2h0OiA1cmVtO1xuXG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuXG4gICAgJi0tcGx1cyB7XG4gICAgICBtYXJnaW46IDAgMS41cmVtIDAgMS41cmVtO1xuICAgICAgZmxleDogMCAwIGF1dG87XG5cbiAgICAgICYgc3ZnIHtcbiAgICAgICAgZmlsbDogZ3JlZW47XG4gICAgICB9XG4gICAgfVxuXG4gICAgJi0tZm9ybSB7XG4gICAgICBmbGV4OiAwIDIgOTAlO1xuICAgICAgZGlzcGxheTpmbGV4O1xuICAgICAgZmxleC13cmFwOiB3cmFwO1xuXG4gICAgICAmLS1pbnB1dC10b2RvIHtcbiAgICAgICAgZm9udC1zaXplOiAxLjVyZW07XG4gICAgICAgIGZsZXg6IDQgNCAzMHJlbTtcbiAgICAgICAgaGVpZ2h0OiAzcmVtO1xuICAgICAgICBwYWRkaW5nLWxlZnQ6IDFyZW07XG4gICAgICAgICY6Zm9jdXN7XG4gICAgICAgICAgb3V0bGluZTogbm9uZTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAmLS1hZGQtYnV0dG9uIHtcbiAgICAgICAgaGVpZ2h0OiAzcmVtO1xuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgjNjNkYjhiLCAjNGVhNzQyKTtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMCA1cHggNXB4IDA7XG4gICAgICAgIGNvbG9yOiAjRkZGRkZGO1xuICAgICAgICBmb250LXdlaWdodDogODAwO1xuICAgICAgICBib3JkZXI6IG5vbmU7XG4gICAgICAgIG91dGxpbmU6bm9uZTtcbiAgICAgICAgZmxleDogMiAyIDZyZW07XG5cbiAgICAgICAgJjphY3RpdmUge1xuICAgICAgICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgjNjg5MjYyLCAjNDA2MTRiKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gICZfX3Rhc2tzIHtcbiAgICAuY2RrLWRyb3AtbGlzdC1kcmFnZ2luZyB7XG4gICAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMjUwbXMgY3ViaWMtYmV6aWVyKDAsIDAsIDAuMiwgMSk7XG4gICAgfVxuICAgICYtaXRlbSB7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICBib3JkZXI6IDJweCBzb2xpZCAjZGRkO1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgICAgIG1pbi1oZWlnaHQ6IDVyZW07XG4gICAgICBwYWRkaW5nOiAwIDJyZW07XG4gICAgICBmb250LXNpemU6IDEuNXJlbTtcblxuICAgICAgJi0tdG9kbyB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cbiAgICAgICAgLmNvbXBsZXRlZC10b2RvOjpwbGFjZWhvbGRlciB7XG4gICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBsaW5lLXRocm91Z2g7XG4gICAgICAgIH1cblxuICAgICAgICAuY2hlY2tib3gge1xuICAgICAgICAgIG1hcmdpbi1yaWdodDogMnJlbTtcbiAgICAgICAgfVxuXG4gICAgICAgICYtLWZvcm0ge1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgXG4gICAgICAgICAgLnRvZG8taW5wdXQge1xuICAgICAgICAgICAgaGVpZ2h0OiAycmVtO1xuICAgICAgICAgICAgZm9udC1zaXplOiAxLjJyZW07XG4gIFxuICAgICAgICAgICAgJjpmb2N1c3tcbiAgICAgICAgICAgICAgb3V0bGluZTogbm9uZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gIFxuICAgICAgICAgIGJ1dHRvbiB7XG4gICAgICAgICAgICB3aWR0aDogMnJlbTtcbiAgICAgICAgICAgIGhlaWdodDogMnJlbTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgICBcbiAgICAgICY6bm90KC5jZGstZHJhZy1wbGFjZWhvbGRlcikge1xuICAgICAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMjUwbXMgY3ViaWMtYmV6aWVyKDAsIDAsIDAuMiwgMSk7XG4gICAgICB9XG5cbiAgICAgICY6aG92ZXIge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBidXJseXdvb2Q7XG4gICAgICB9XG5cbiAgICAgIC5jZGstZHJhZy1wcmV2aWV3IHtcbiAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgICAgICBib3gtc2hhZG93OiAwIDVweCA1cHggLTNweCByZ2JhKDAsIDAsIDAsIDAuMiksXG4gICAgICAgICAgICAgICAgICAgIDAgOHB4IDEwcHggMXB4IHJnYmEoMCwgMCwgMCwgMC4xNCksXG4gICAgICAgICAgICAgICAgICAgIDAgM3B4IDE0cHggMnB4IHJnYmEoMCwgMCwgMCwgMC4xMik7XG4gICAgICB9XG4gICAgICBcbiAgICAgIC5jZGstZHJhZy1wbGFjZWhvbGRlciB7XG4gICAgICAgIG9wYWNpdHk6IDA7XG4gICAgICB9XG4gICAgICBcbiAgICAgIC5jZGstZHJhZy1hbmltYXRpbmcge1xuICAgICAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMjUwbXMgY3ViaWMtYmV6aWVyKDAsIDAsIDAuMiwgMSk7XG4gICAgICB9XG5cbiAgICAgICY6bGFzdC1jaGlsZCB7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDAgMCAxNXB4IDE1cHg7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLmljb24ge1xuICAgICAgd2lkdGg6IDEuNXJlbTtcbiAgICAgIGhlaWdodDogMS41cmVtO1xuXG4gICAgfVxuXG4gICAgJi1jb250cm9scyB7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgZmxleDogMCAwIDE1JTtcbiAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcblxuICAgICAgJi0tbW92ZSAuaWNvbiB7XG4gICAgICAgIGN1cnNvcjogbW92ZSAhaW1wb3J0YW50O1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TodoListComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-todo-list',
                templateUrl: './todo-list.component.html',
                styleUrls: ['./todo-list.component.scss']
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }]; }, null); })();


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
const environment = {
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/soma/Documents/Projects/Code/Angular/ruby-garage-todo-app/frontend/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map