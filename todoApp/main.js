(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

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
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/add-item-button/add-item-button.component.css":
/*!***************************************************************!*\
  !*** ./src/app/add-item-button/add-item-button.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "button {\nborder-radius: 75%;\nposition: relative;\nleft: 89%;\n}\n\n.card-header {\n    background-color: #DCD8CF;;\n    color: black;\n}\n\n.card-body {\n    background-color: white;\n    color: black;\n}\n\n.panel-body{\n    background-color:#DCD8CF;\n   \n}\n\n.card-footer{ background-color: #DCD8CF;  color: black;}\n\n.form-check-input{\n    -webkit-transform: scale(1.5);\n            transform: scale(1.5);\n    margin-right: 20px;\n}\n\n.drop-desc{\n    color:#E25D33;\n    -webkit-animation: blink 1s linear infinite;\n            animation: blink 1s linear infinite;\n}\n\n@-webkit-keyframes blink {\n    0%{opacity: 0;}\n    50%{opacity: .5;}\n    100%{opacity: 1;}\n}\n\n@keyframes blink {\n    0%{opacity: 0;}\n    50%{opacity: .5;}\n    100%{opacity: 1;}\n}"

/***/ }),

/***/ "./src/app/add-item-button/add-item-button.component.html":
/*!****************************************************************!*\
  !*** ./src/app/add-item-button/add-item-button.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n\n\n<div *ngFor =\"let event of events\">\n\t\t<div class=\"panel panel-default\" >\n\t\t\t\t<div class=\"panel-body\">\n\t\n\t\t\t\t<div class=\"card text-center\">\n\t\t\t\t\t<div class=\"card-header\"></div>\n\n\t\t\t\t\t<div class=\"card-body\">\n\t\t\t\t\t\t\t<div class=\"form-check\">\n\t\t\t\t\t\t\t\t\t<input class=\"form-check-input\" type=\"checkbox\" value=\"\" id=\"defaultCheck1\" (click)=\"event.isCompleted = submitted;\" >\n\t\t\t\t\t\t\t\t\t<label class=\"form-check-label\" for=\"defaultCheck1\" >\n\t\t\t\t\t\t\t\t\t\t\t{{event.title | uppercase}}\n\t\t\t\t\t\t\t\t\t\t\t{{event.isCompleted}}\n\t\t\t\t\t\t\t\t\t\t\t{{submitted}}\n\n\t\t\t\t\t\t\t\t\t</label>\n\n\t\t\t\t\t\t\t\t\t<div>\n\t\t\t\t\t\t\t\t\t\t<span class=\"drop-desc\" [hidden]=\"isDropped\" (click)=\"isActive=false; isDropped=true\" >V</span>\n\t\t\t\t\t\t\t\t\t\t<span class=\"drop-desc\" [hidden]=\"isActive\" (click)=\"isActive=true; isDropped=false\" >^</span>\n\t\t\t\t\t\t\t\t\t\t<p [hidden]=\"isActive\" class=\"card-text\">{{event.description}}</p>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t    </div>\n\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"card-footer text-muted\">2 days ago</div>\n\t\t\t  \t</div>\n\n\n\n\n\n\t\t\t</div>\n\t</div>\n</div>"

/***/ }),

/***/ "./src/app/add-item-button/add-item-button.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/add-item-button/add-item-button.component.ts ***!
  \**************************************************************/
/*! exports provided: AddItemButtonComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddItemButtonComponent", function() { return AddItemButtonComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _events__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../events */ "./src/app/events.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AddItemButtonComponent = /** @class */ (function () {
    function AddItemButtonComponent() {
        this.events = _events__WEBPACK_IMPORTED_MODULE_1__["EVENTS"];
        this.submitted = true;
        this.isActive = true;
        this.isDropped = false;
    }
    AddItemButtonComponent.prototype.ngOnInit = function () {
    };
    AddItemButtonComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-add-item-button',
            template: __webpack_require__(/*! ./add-item-button.component.html */ "./src/app/add-item-button/add-item-button.component.html"),
            styles: [__webpack_require__(/*! ./add-item-button.component.css */ "./src/app/add-item-button/add-item-button.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AddItemButtonComponent);
    return AddItemButtonComponent;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@import url('https://fonts.googleapis.com/css?family=Arvo');\n\nh3 {\n\ttext-align: center;\n}\n\n.jumbotron {\n\tbackground-color:#E25D33;\n}\n\n.header-title{\n\ttext-align: center;\n\tcolor:  #DCD8CF;\n\tfont-family: 'Arvo', serif;\n\tfont-weight:  700;\n}\n\n.panel-heading{\n\tbackground-color:#DCD8CF;\n}\n\n.panel-body{\n\tbackground-color:#DCD8CF;\n}"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n  \n<div class=\"container\">\n  <div class=\"jumbotron\">\n    <h1 class=\"header-title\"> Daily Tasks</h1>\n  </div>\n\n\n  <div class=\"panel panel-primary\">\n    <div class=\"panel-body\">\n      <h3>{{title}}</h3>\n        <app-event-form></app-event-form>\n    </div>\n\t\n  </div>\n\n  <app-add-item-button></app-add-item-button>\n</div>"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.date = new Date();
        this.dateTitle = this.date.toString().split(" ").splice(0, 4);
        this.title = this.dateTitle.join(" ");
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _add_item_button_add_item_button_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./add-item-button/add-item-button.component */ "./src/app/add-item-button/add-item-button.component.ts");
/* harmony import */ var _event_form_event_form_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./event-form/event-form.component */ "./src/app/event-form/event-form.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/cdk/layout */ "./node_modules/@angular/cdk/esm5/layout.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                _add_item_button_add_item_button_component__WEBPACK_IMPORTED_MODULE_4__["AddItemButtonComponent"],
                _event_form_event_form_component__WEBPACK_IMPORTED_MODULE_5__["EventFormComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["BrowserAnimationsModule"],
                _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_7__["LayoutModule"],
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/event-form/event-form.component.css":
/*!*****************************************************!*\
  !*** ./src/app/event-form/event-form.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".ng-valid[required], .ng-valid.required  {\n  border-left: 5px solid #42A948; /* green */\n}\n\n.ng-invalid:not(form)  {\n  border-left: 5px solid #a94442; /* red */\n}\n\n.form-control {\n\twidth: 90%;\n}\n\n.full-width {\n  width: 100%;\n}\n\n.btn{\n  margin-right: 10px;\n}"

/***/ }),

/***/ "./src/app/event-form/event-form.component.html":
/*!******************************************************!*\
  !*** ./src/app/event-form/event-form.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <h1>To Do:</h1>\n    <form #f=\"ngForm\" (ngSubmit)=\"onSubmit(f)\">\n\n        <div class=\"form-group\"> \n              <label for=\"title\">Title</label>\n              <input id=\"title\" type=\"text\" class=\"form-control\" placeholder=\"Title\" ngModel name =\"title\" #title=\"ngModel\">\n\n              <!-- <div [hidden]=\"name.valid || name.pristine\" class=\"alert alert-danger\">\n       \t\t     Name is required\n  \t\t\t      </div> -->\n        </div>\n\n        <div class=\"form-group\"> \n            <label for=\"description \">Description</label>\n            <textarea id=\"description\" class=\"form-control\" placeholder=\"Tell me more\" ngModel name=\"description\" #description=\"ngModel\"  ></textarea>\n           \n            <!-- <div [hidden]=\"description.valid || description.pristine\"\tclass=\"alert alert-danger form-control\">\n             \t\tDescription is required\n    \t\t\t  </div> -->\n        </div>\n        <div class=\"row text-center\">\n            <button type=\"submit\" class=\"btn btn-success\">Submit</button>\n\n            <button type=\"button\" class=\"btn btn-default\" (click)=\"newEvent();\">Clear</button>\n        </div>\n\n    </form>\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n     <!--\n\n\n          <div class=\"form-group\">\n            <label for=\"description \">Description</label>\n            <input type=\"text\" class=\"form-control\" id=\"description\" required [(ngModel)]=\"model.description\" name=\"description\" #description=\"ngModel\">\n                <div [hidden]=\"description.valid || description.pristine\"\n             \t\tclass=\"alert alert-danger\">\n             \t\tDescription is required\n    \t\t\t      </div>\n          </div>\n\n          <div class=\"form-group\">\n          \n      <input  matInput  [matDatepicker]=\"picker\" placeholder=\"Start Date\" >\n          <mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle>\n          <mat-datepicker #picker [startAt]=\"startDate\"></mat-datepicker>\n          {{model.startDate}}\n\n           <label for=\"startDate\">Start Date</label>\n            <input type=\"text\" class=\"form-control\" id=\"description\" required [(ngModel)]=\"model.startDate\" name=\"startDate\" #startDate =\"ngModel\"> -->\n          \n<!--            <input [matDatepicker]=\"myDatepicker\">\n           <mat-datepicker #myDatepicker></mat-datepicker> -->\n\n    \n<!--             <div [hidden]=\"startDate.valid || startDate.pristine\"\n           \t\t\tclass=\"alert alert-danger\">\n           \t\t\tStart Date is required\n             </div> \n          </div> -->\n\n     <!--     <div class=\"form-group\">\n  <input matInput [matDatepicker]=\"picker2\" placeholder=\"Due Date\">\n  <mat-datepicker-toggle matSuffix [for]=\"picker2\"></mat-datepicker-toggle>\n  <mat-datepicker #picker2></mat-datepicker> \n            <input matInput [matDatepicker]=\"picker\" placeholder=\"Start Date\">\n              <mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle>\n              <mat-datepicker #picker startView=\"year\" [startAt]=\"startDate\"></mat-datepicker> -->\n   <!--          <label for=\"endDate\">Due Date</label>\n            <input type=\"text\" class=\"form-control\" id=\"description\" required [(ngModel)]=\"model.endDate\" name=\"endDate\" #endDate =\"ngModel\">\n            <div [hidden]=\"endDate.valid || endDate.pristine\"\n         \t\t\tclass=\"alert alert-danger\">\n         \t\t\tEnd Date is required\n         \t\t</div> \n         </div>\n     \n          <button type=\"submit\" class=\"btn btn-success\">Submit</button>\n\n          <button type=\"button\" class=\"btn btn-default\" (click)=\"newEvent(); eventForm.reset()\">Clear</button>\n     \n        </form>\n    </div>\n\n\n    -->"

/***/ }),

/***/ "./src/app/event-form/event-form.component.ts":
/*!****************************************************!*\
  !*** ./src/app/event-form/event-form.component.ts ***!
  \****************************************************/
/*! exports provided: EventFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventFormComponent", function() { return EventFormComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _event__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../event */ "./src/app/event.ts");
/* harmony import */ var _event_item_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../event-item.service */ "./src/app/event-item.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var EventFormComponent = /** @class */ (function () {
    function EventFormComponent(eventItemService) {
        this.eventItemService = eventItemService;
        this.count = 0;
    } //nothing yet
    EventFormComponent.prototype.ngOnInit = function () {
    };
    EventFormComponent.prototype.addEvent = function (event) {
        this.eventItemService.addEventItems(event);
    };
    EventFormComponent.prototype.onSubmit = function (f) {
        var title = f.value.title;
        var description = f.value.description;
        this.anotherEvent = new _event__WEBPACK_IMPORTED_MODULE_1__["EventItem"](this.count++, title, description, false);
        console.log(this.anotherEvent);
        this.addEvent(this.anotherEvent); //adds new event to through EventItemServce
    };
    EventFormComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-event-form',
            template: __webpack_require__(/*! ./event-form.component.html */ "./src/app/event-form/event-form.component.html"),
            styles: [__webpack_require__(/*! ./event-form.component.css */ "./src/app/event-form/event-form.component.css")]
        }),
        __metadata("design:paramtypes", [_event_item_service__WEBPACK_IMPORTED_MODULE_2__["EventItemService"]])
    ], EventFormComponent);
    return EventFormComponent;
}());



/***/ }),

/***/ "./src/app/event-item.service.ts":
/*!***************************************!*\
  !*** ./src/app/event-item.service.ts ***!
  \***************************************/
/*! exports provided: EventItemService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventItemService", function() { return EventItemService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _events__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./events */ "./src/app/events.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var EventItemService = /** @class */ (function () {
    function EventItemService() {
    }
    EventItemService.prototype.addEventItems = function (event) {
        _events__WEBPACK_IMPORTED_MODULE_1__["EVENTS"].push(event);
    };
    EventItemService.prototype.getEventItems = function () {
        return _events__WEBPACK_IMPORTED_MODULE_1__["EVENTS"];
    };
    EventItemService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], EventItemService);
    return EventItemService;
}());



/***/ }),

/***/ "./src/app/event.ts":
/*!**************************!*\
  !*** ./src/app/event.ts ***!
  \**************************/
/*! exports provided: EventItem */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventItem", function() { return EventItem; });
var EventItem = /** @class */ (function () {
    function EventItem(id, title, description, isCompleted) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.isCompleted = isCompleted;
    }
    EventItem.prototype.clear = function () {
        this.title = "";
        this.description = "";
        this.isCompleted = false;
    };
    return EventItem;
}());



/***/ }),

/***/ "./src/app/events.ts":
/*!***************************!*\
  !*** ./src/app/events.ts ***!
  \***************************/
/*! exports provided: EVENTS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EVENTS", function() { return EVENTS; });
var EVENTS = [];


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
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
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
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_4__);





if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/jordeguevara/Desktop/projects/web/tasks-angular/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map