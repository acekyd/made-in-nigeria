webpackJsonp(["main"],{

/***/ "./src/$$_gendir lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_gendir lazy recursive";

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<clr-main-container>\n\n  <clr-header class=\"headerGreen\">\n    <section class=\"_branding\">\n      <section class=\"about-wrap\">\n        <a href=\"https://github.com/acekyd/made-in-nigeria\" target=\"_blank\"><span class=\"fa fa-info-circle\"></span>About</a>\n      </section>\n      <a href=\"\" class=\"_nav-link\">\n        <h1 class=\"_title\">Made. in. Nigeria.</h1>\n      </a>\n      <div class=\"_description\">\n        <p>A curation of awesome tools and projects built by Nigerian developers.</p>\n      </div>\n\n      <section class=\"search-wrap\">\n        <form class=\"_search\">\n          <div class=\"input-wrap\">\n            <span class=\"fa fa-search\"></span>\n            <input id=\"search_input\" type=\"text\" (keyup)=\"search($event)\"\n                   placeholder=\"Search projects...\"/>\n          </div>\n        </form>\n      </section>\n    </section>\n\n  </clr-header>\n\n\n  <section class=\"content-container\">\n    <main class=\"content-area\">\n      <h1 id=\"explore\">Explore.</h1>\n      <app-main></app-main>\n    </main>\n  </section>\n</clr-main-container>\n\n<footer class=\"footer\" style=\"display: none;\">\n  Made with love in Lagos, Nigeria.\n</footer>"

/***/ }),

/***/ "./src/app/app.component.scss":
/***/ (function(module, exports) {

module.exports = "/* ==========================================================================\n  Mixins\n========================================================================== */\n.capitalize {\n  text-transform: capitalize; }\n.uppercase {\n  text-transform: uppercase; }\n.lowercase {\n  text-transform: lowercase; }\n.shadow {\n  -webkit-box-shadow: 0px 0px 7px rgba(0, 0, 0, 0.1);\n  -ms-box-shadow: 0px 0px 7px rgba(0, 0, 0, 0.1);\n  -o-box-shadow: 0px 0px 7px rgba(0, 0, 0, 0.1);\n  box-shadow: 0px 0px 7px rgba(0, 0, 0, 0.1); }\n.shadow-alt {\n  -webkit-box-shadow: 0px 8px 6px -6px rgba(0, 0, 0, 0.1);\n  -ms-box-shadow: 0px 8px 6px -6px rgba(0, 0, 0, 0.1);\n  -o-box-shadow: 0px 8px 6px -6px rgba(0, 0, 0, 0.1);\n  box-shadow: 0px 8px 6px -6px rgba(0, 0, 0, 0.1); }\n.radius {\n  border-radius: 2px; }\n.radius-alt {\n  border-radius: 3px; }\n.radius-alter {\n  border-radius: 5px; }\n.circle, .round {\n  border-radius: 100%; }\n.hidden {\n  display: none !important; }\n.invisible {\n  visibility: hidden !important; }\n.fixed {\n  position: fixed; }\n.left {\n  float: left; }\n.right {\n  float: right; }\n.clear {\n  clear: both; }\n.clear:before, .clear:after {\n    clear: both;\n    content: \"\";\n    display: block;\n    font-size: 0px;\n    height: 0px;\n    line-height: 0; }\n.text-left {\n  text-align: left; }\n.text-right {\n  text-align: right; }\n.text-center {\n  text-align: center; }\n.text-bold {\n  font-weight: bold; }\n.text-bolder {\n  font-weight: bolder; }\n.text-normal {\n  font-weight: normal;\n  font-style: normal; }\n.aligncenter {\n  display: block;\n  margin-left: auto;\n  margin-right: auto; }\n.visible {\n  visibility: visible;\n  opacity: 1;\n  filter: alpha(opacity=100); }\n.display {\n  display: block !important;\n  visibility: visible;\n  opacity: 1;\n  filter: alpha(opacity=100); }\n.share-text {\n  font-size: 12px;\n  font-weight: bolder; }\n.main-container {\n  background: none;\n  height: 100%; }\n.header {\n  border-bottom: 10px dashed #EDEEF0;\n  background: #009E77;\n  text-align: center;\n  -ms-flex: 0 0 350px;\n  -webkit-box-flex: 0;\n          flex: 0 0 350px;\n  height: 350px;\n  white-space: normal; }\n._branding {\n  padding: 50px 0;\n  text-align: center;\n  width: 100%; }\n._branding > a {\n    display: inline-block;\n    text-decoration: none; }\n._branding a h1 {\n    -webkit-text-shadow: 2px 0px 10px #555;\n    -moz-text-shadow: 2px 0px 10px #555;\n    -ms-text-shadow: 2px 0px 10px #555;\n    -o-text-shadow: 2px 0px 10px #555;\n    text-shadow: 2px 0px 10px #555;\n    margin-bottom: 30px;\n    font-size: 50px;\n    font-weight: 900;\n    color: #f9f9f9; }\n@media screen and (max-width: 900px) {\n      ._branding a h1 {\n        font-size: 30px;\n        margin-left: 10px;\n        margin-right: 10px; } }\n._branding ._description {\n    position: relative;\n    display: block; }\n._branding ._description p {\n      display: inline-block;\n      margin-bottom: 30px;\n      font-size: 20px;\n      color: #eeeeee;\n      width: -webkit-fit-content;\n      height: -webkit-fit-content;\n      width: -moz-fit-content;\n      height: -moz-fit-content; }\n@media screen and (max-width: 900px) {\n        ._branding ._description p {\n          font-size: 16px;\n          margin-left: 10px;\n          margin-right: 10px; } }\n._branding .search-wrap {\n    display: inline-block;\n    width: 46%; }\n@media screen and (max-width: 900px) {\n      ._branding .search-wrap {\n        width: 80%; } }\n.search-wrap ._search input {\n  border-radius: 8rem;\n  border: none;\n  background: #ffffff;\n  text-indent: 20px;\n  padding: 20px;\n  width: 100%; }\n._search .input-wrap {\n  position: relative; }\n._search .input-wrap > .fa-search {\n    position: absolute;\n    font-size: 15px;\n    color: #999999;\n    left: 17px;\n    top: 14px; }\n.fa {\n  margin-right: 5px; }\n.about-wrap {\n  position: absolute;\n  float: right;\n  right: 10px;\n  top: -1px; }\n.about-wrap > a {\n    border-radius: 3px;\n    padding: 7px 15px 9px;\n    display: inline-block;\n    background: #00956E;\n    font-weight: bold;\n    color: #f9f9f9; }\n.main-container .content-container {\n  min-height: 100%; }\n.main-container .content-container .content-area {\n    overflow-y: visible; }\n.content-area #explore {\n  margin-bottom: 20px;\n  text-align: center;\n  font-weight: 600;\n  color: #3f5261; }\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_search_service__ = __webpack_require__("./src/app/services/search.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_mark_down_data_service__ = __webpack_require__("./src/app/services/mark-down-data.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AppComponent = (function () {
    function AppComponent(_searchService, _mdService) {
        this._searchService = _searchService;
        this._mdService = _mdService;
        this.showInfo = true;
    }
    /**
     * handle our search term on key up from our search input
     * from here our other components can subscribe for the changes
     * @param event
     */
    AppComponent.prototype.search = function (event) {
        this._searchService.search(event.target.value);
    };
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.scss")]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_search_service__["a" /* SearchService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_search_service__["a" /* SearchService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_mark_down_data_service__["a" /* MarkDownDataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_mark_down_data_service__["a" /* MarkDownDataService */]) === "function" && _b || Object])
    ], AppComponent);
    return AppComponent;
    var _a, _b;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("./node_modules/@angular/http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_clarity_angular__ = __webpack_require__("./node_modules/clarity-angular/clarity-angular.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__main_main_component__ = __webpack_require__("./src/app/main/main.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_platform_browser_animations__ = __webpack_require__("./node_modules/@angular/platform-browser/@angular/platform-browser/animations.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__repository_repository_component__ = __webpack_require__("./src/app/repository/repository.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__services_search_service__ = __webpack_require__("./src/app/services/search.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__services_mark_down_data_service__ = __webpack_require__("./src/app/services/mark-down-data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pipes_search_filter_pipe__ = __webpack_require__("./src/app/pipes/search-filter.pipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pipes_github_username_pipe__ = __webpack_require__("./src/app/pipes/github-username.pipe.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};













var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["L" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_6__main_main_component__["a" /* MainComponent */],
                __WEBPACK_IMPORTED_MODULE_8__repository_repository_component__["a" /* RepositoryComponent */],
                __WEBPACK_IMPORTED_MODULE_11__pipes_search_filter_pipe__["a" /* SearchFilterPipe */],
                __WEBPACK_IMPORTED_MODULE_12__pipes_github_username_pipe__["a" /* GithubUsernamePipe */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_7__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_4_clarity_angular__["a" /* ClarityModule */].forRoot()
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_9__services_search_service__["a" /* SearchService */], __WEBPACK_IMPORTED_MODULE_10__services_mark_down_data_service__["a" /* MarkDownDataService */], __WEBPACK_IMPORTED_MODULE_12__pipes_github_username_pipe__["a" /* GithubUsernamePipe */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "./src/app/interfaces/irepository.ts":
/***/ (function(module, exports) {

//# sourceMappingURL=irepository.js.map

/***/ }),

/***/ "./src/app/main/main.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-md-5 push-md-1\" *ngFor=\"let item of repositories | async | searchFilter:searchTerm\">\n    <repository [repo]=\"item\"></repository>\n  </div> <!--/ col 5-->\n</div><!--/ row-->\n"

/***/ }),

/***/ "./src/app/main/main.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/main/main.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MainComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_search_service__ = __webpack_require__("./src/app/services/search.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_mark_down_data_service__ = __webpack_require__("./src/app/services/mark-down-data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_debounceTime__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/debounceTime.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_distinctUntilChanged__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/distinctUntilChanged.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MainComponent = (function () {
    function MainComponent(_searchService, _mdService) {
        var _this = this;
        this._searchService = _searchService;
        this._mdService = _mdService;
        // let's get our observable of record here #repos
        this.repositories = this._mdService.data;
        /**
         * let's subscribe to our search source, so we listen for any changes
         * and in turn filter our view based on the term.
         * we don't waste time to always filter our list
         */
        this._searchSubscription = this._searchService.getSource()
            .debounceTime(300)
            .distinctUntilChanged()
            .subscribe(function (term) {
            _this.searchTerm = term;
        });
    }
    MainComponent.prototype.ngOnDestroy = function () {
        this._searchSubscription.unsubscribe(); // unsubscribe from our subscription , memory leak
    };
    MainComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-main',
            template: __webpack_require__("./src/app/main/main.component.html"),
            styles: [__webpack_require__("./src/app/main/main.component.scss")]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_search_service__["a" /* SearchService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_search_service__["a" /* SearchService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_mark_down_data_service__["a" /* MarkDownDataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_mark_down_data_service__["a" /* MarkDownDataService */]) === "function" && _b || Object])
    ], MainComponent);
    return MainComponent;
    var _a, _b;
}());

//# sourceMappingURL=main.component.js.map

/***/ }),

/***/ "./src/app/pipes/github-username.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GithubUsernamePipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var GithubUsernamePipe = (function () {
    function GithubUsernamePipe() {
    }
    /**
     * we want to get the github username from the repo link we do this procedure
     * test case http[s]://github.com/theo4u/repo_name
     * 1. remove from .com then -> remaining /theo4u/repo_name
     * 2. split it with '/' then -> get the array of ['','theo4u','repo_name']
     * 3. return index 1
     * @param value
     * @param args
     * @returns {null}
     */
    GithubUsernamePipe.prototype.transform = function (value, args) {
        value = value.substr(value.indexOf('.com'));
        value = value.split('/');
        return value[1];
    };
    GithubUsernamePipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["V" /* Pipe */])({
            name: 'githubUsername'
        })
    ], GithubUsernamePipe);
    return GithubUsernamePipe;
}());

//# sourceMappingURL=github-username.pipe.js.map

/***/ }),

/***/ "./src/app/pipes/search-filter.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchFilterPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var SearchFilterPipe = (function () {
    function SearchFilterPipe() {
    }
    /**
     * this pipe just simply checks for our
     * creator.name , name.name (repo name) , and within the description
     * @param items
     * @param value
     * @returns {any}
     */
    SearchFilterPipe.prototype.transform = function (items, value) {
        if (!items) {
            return [];
        }
        if (value == null || value.trim() === '') {
            return items;
        }
        return items.filter(function (it) {
            // let's check if our value or search can be splitted with whitespace
            var splitted_item = value.toLowerCase().split(' ');
            var seen = false;
            for (var _i = 0, splitted_item_1 = splitted_item; _i < splitted_item_1.length; _i++) {
                var word = splitted_item_1[_i];
                if (word === '') {
                    continue;
                }
                if (it.name.name.toLowerCase().indexOf(word) > -1
                    || it.creator.name.toLowerCase().indexOf(word) > -1
                    || it.description.toLowerCase().indexOf(word) > -1) {
                    seen = true;
                }
            }
            return seen;
        });
    };
    SearchFilterPipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["V" /* Pipe */])({
            name: 'searchFilter'
        })
    ], SearchFilterPipe);
    return SearchFilterPipe;
}());

//# sourceMappingURL=search-filter.pipe.js.map

/***/ }),

/***/ "./src/app/repository/repository.component.scss":
/***/ (function(module, exports) {

module.exports = "/* ==========================================================================\n  Mixins\n========================================================================== */\n.capitalize {\n  text-transform: capitalize; }\n.uppercase {\n  text-transform: uppercase; }\n.lowercase {\n  text-transform: lowercase; }\n.shadow {\n  -webkit-box-shadow: 0px 0px 7px rgba(0, 0, 0, 0.1);\n  -ms-box-shadow: 0px 0px 7px rgba(0, 0, 0, 0.1);\n  -o-box-shadow: 0px 0px 7px rgba(0, 0, 0, 0.1);\n  box-shadow: 0px 0px 7px rgba(0, 0, 0, 0.1); }\n.shadow-alt {\n  -webkit-box-shadow: 0px 8px 6px -6px rgba(0, 0, 0, 0.1);\n  -ms-box-shadow: 0px 8px 6px -6px rgba(0, 0, 0, 0.1);\n  -o-box-shadow: 0px 8px 6px -6px rgba(0, 0, 0, 0.1);\n  box-shadow: 0px 8px 6px -6px rgba(0, 0, 0, 0.1); }\n.radius {\n  border-radius: 2px; }\n.radius-alt {\n  border-radius: 3px; }\n.radius-alter {\n  border-radius: 5px; }\n.circle, .round {\n  border-radius: 100%; }\n.hidden {\n  display: none !important; }\n.invisible {\n  visibility: hidden !important; }\n.fixed {\n  position: fixed; }\n.left {\n  float: left; }\n.right {\n  float: right; }\n.clear {\n  clear: both; }\n.clear:before, .clear:after {\n    clear: both;\n    content: \"\";\n    display: block;\n    font-size: 0px;\n    height: 0px;\n    line-height: 0; }\n.text-left {\n  text-align: left; }\n.text-right {\n  text-align: right; }\n.text-center {\n  text-align: center; }\n.text-bold {\n  font-weight: bold; }\n.text-bolder {\n  font-weight: bolder; }\n.text-normal {\n  font-weight: normal;\n  font-style: normal; }\n.aligncenter {\n  display: block;\n  margin-left: auto;\n  margin-right: auto; }\n.visible {\n  visibility: visible;\n  opacity: 1;\n  filter: alpha(opacity=100); }\n.display {\n  display: block !important;\n  visibility: visible;\n  opacity: 1;\n  filter: alpha(opacity=100); }\n.share-text {\n  font-size: 12px;\n  font-weight: bolder; }\n/* Let's build our card here */\n.naija-card {\n  -webkit-box-shadow: 0px 8px 6px -6px rgba(0, 0, 0, 0.1);\n  -ms-box-shadow: 0px 8px 6px -6px rgba(0, 0, 0, 0.1);\n  -o-box-shadow: 0px 8px 6px -6px rgba(0, 0, 0, 0.1);\n  box-shadow: 0px 8px 6px -6px rgba(0, 0, 0, 0.1);\n  border-radius: 10px;\n  background: #ffffff;\n  margin-bottom: 16px;\n  min-height: 170px;\n  padding: 25px; }\n.naija-card:hover {\n    -webkit-box-shadow: 0 1px 12px 0 rgba(0, 0, 0, 0.06);\n    -ms-box-shadow: 0 1px 12px 0 rgba(0, 0, 0, 0.06);\n    -o-box-shadow: 0 1px 12px 0 rgba(0, 0, 0, 0.06);\n    box-shadow: 0 1px 12px 0 rgba(0, 0, 0, 0.06);\n    border-color: #ffffff; }\n.naija-card > .naija-header > a {\n    color: #333;\n    font-weight: 700;\n    margin-left: 2px; }\n.naija-card > .naija-header > img {\n    border-radius: 3px;\n    height: 24px;\n    width: 24px; }\n.naija-card > .naija-header > p {\n    margin: 10px 0;\n    font-size: 12px;\n    line-height: 1.5;\n    text-align: justify; }\n.naija-card > .naija-card-footer {\n    border-top: 1px solid #dadfe2;\n    margin-top: 20px;\n    text-align: center; }\n.naija-card > .naija-card-footer .stack-icon {\n      -webkit-transition: filter 0.3s ease-in-out;\n      -webkit-transition: -webkit-filter 0.3s ease-in-out;\n      transition: -webkit-filter 0.3s ease-in-out;\n      transition: filter 0.3s ease-in-out;\n      transition: filter 0.3s ease-in-out, -webkit-filter 0.3s ease-in-out;\n      -webkit-filter: grayscale(100%);\n              filter: grayscale(100%);\n      font-size: 30px; }\n.naija-card > .naija-card-footer .stack-icon:hover {\n        -webkit-filter: grayscale(0);\n                filter: grayscale(0); }\n/* end of our card */\n"

/***/ }),

/***/ "./src/app/repository/repository.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RepositoryComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__interfaces_irepository__ = __webpack_require__("./src/app/interfaces/irepository.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__interfaces_irepository___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__interfaces_irepository__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_mark_down_data_service__ = __webpack_require__("./src/app/services/mark-down-data.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var RepositoryComponent = (function () {
    function RepositoryComponent(_mdDataService) {
        this._mdDataService = _mdDataService;
    }
    RepositoryComponent.prototype.ngOnInit = function () {
    };
    /**
     * this is used to load each repo language
     * @param repo
     */
    RepositoryComponent.prototype.loadLanguage = function (repo) {
        // if loading before don't reload again
        if (repo.loader) {
            return;
        }
        repo.loader = true;
        this._mdDataService.getLanguages(repo)
            .subscribe(function (languages) {
            repo.loader = false;
            repo.stacks = languages;
        }, function (error) {
            repo.loader = false;
            console.error(error);
            // alert(JSON.parse(error._body).message);
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__interfaces_irepository__["IRepository"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__interfaces_irepository__["IRepository"]) === "function" && _a || Object)
    ], RepositoryComponent.prototype, "repo", void 0);
    RepositoryComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            // tslint:disable-next-line:component-selector
            selector: 'repository',
            template: "\n    <div class=\"naija-card\">\n      <div class=\"naija-header\">\n        <img src=\"https://avatars.githubusercontent.com/{{repo.name.link | githubUsername}}?size=40\">\n        <a [href]=\"repo.name.link\" target=\"_blank\">{{repo.name.name}}</a>\n\n        <a [href]=\"repo.creator.link\" target=\"_blank\" role=\"tooltip\" aria-haspopup=\"true\" class=\"tooltip tooltip-sm tooltip-left pull-right\"\n        style=\"font-size:12px\">\n        <clr-icon shape=\"user\"></clr-icon>\n        {{repo.creator.name | slice:1}}\n        <!-- this is just to remove @ from the creator not all from twitter -->\n        <span class=\"tooltip-content\">Creator</span>\n      </a>\n\n      <p>\n        {{repo.description}}\n      </p>\n    </div>\n    <div class=\"naija-card-footer\">\n      <!--show button when we have not loaded the languages-->\n      <button *ngIf=\"!repo.stacks\" class=\"btn btn-success-outline btn-sm\" (click)=\"loadLanguage(repo)\" [clrLoading]=\"repo.loader\">Load Language(s)</button>\n      <button *ngIf=\"repo.stacks && repo.stacks.length < 1\" class=\"btn btn-success-outline btn-sm\" [clrLoading]=\"repo.loader\">No Language(s) found</button>\n      <div style=\"padding-top: 6px;\">\n        <a *ngFor=\"let stack of repo.stacks\" style=\"text-decoration: none\">\n          <i class=\"stack-icon devicon-{{stack.key | lowercase}}-plain colored\"></i>\n        </a>\n      </div>\n      <div class=\"share-text\">\n          Share via:\n          <a href=\"http://twitter.com/share?text=Check out {{ repo.name.name }} - {{ repo.description }} by {{ repo.creator.name }} on Made In Nigeria repos. cc @ace_kyd&url=https://madeinnigeria.dev\" target=\"_blank\" rel=\"noopener\">Twitter</a>\n      </div>\n    </div>\n  </div> <!--/naija-card-->\n  ",
            styles: [__webpack_require__("./src/app/repository/repository.component.scss")]
        }),
        __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_mark_down_data_service__["a" /* MarkDownDataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_mark_down_data_service__["a" /* MarkDownDataService */]) === "function" && _b || Object])
    ], RepositoryComponent);
    return RepositoryComponent;
    var _a, _b;
}());

//# sourceMappingURL=repository.component.js.map

/***/ }),

/***/ "./src/app/services/mark-down-data.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MarkDownDataService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("./node_modules/@angular/http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs__ = __webpack_require__("./node_modules/rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_observable_of__ = __webpack_require__("./node_modules/rxjs/_esm5/add/observable/of.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_mergeMap__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/mergeMap.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pipes_github_username_pipe__ = __webpack_require__("./src/app/pipes/github-username.pipe.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


// tslint:disable-next-line:import-blacklist





var MarkDownDataService = (function () {
    function MarkDownDataService(_http, _githubUsername) {
        this._http = _http;
        this._githubUsername = _githubUsername;
        console.log('am in, should see this once #singleton');
        this._md = markdownit({
            html: true,
            linkify: true,
            typographer: true
        });
        this.data = this._parseMarkDown();
    }
    /**
     * following pattern from initial version done by
     * @link http://twitter.com/macbhee_
     *
     * just parse our markdown here to html element
     *
     */
    MarkDownDataService.prototype._parseMarkDown = function () {
        var _this = this;
        return this._http
            .get('https://raw.githubusercontent.com/acekyd/made-in-nigeria/master/README.MD')
            .map(function (data) { return data.text(); })
            .mergeMap(function (mdContent) {
            // Convert markdown file content to html string.
            var htmlStrData = _this._md.render(mdContent);
            /**
             * let's create a dom here to hold our html record
             * so we don't need to add hide or display none, since we
             * haven't append it to our body yet
             */
            var html = document.createElement('div');
            html.innerHTML = htmlStrData;
            return _this._prepareData(html.querySelectorAll('ul >li'));
        });
    };
    /**
     * now we can manipulate our list of naija folks (Am with the force and the force is with me) to be a normal
     * interface
     *
     * @param list
     */
    MarkDownDataService.prototype._prepareData = function (list) {
        var record = [];
        for (var i = 0; i < list.length; i++) {
            var li = list[i];
            var nameAnchor = li.querySelector('a:first-child');
            var creatorAnchor = li.querySelector('strong > a');
            /**
             *   in case creatorAnchor or nameAnchor is empty or null do this
             *   for our niggas that missed the pattern of <a>repo name</a> - description - <a>creator</a>
             */
            nameAnchor = nameAnchor || { text: '', href: '' };
            creatorAnchor = creatorAnchor || { text: '', href: '' };
            var item = {
                name: { name: nameAnchor.text, link: nameAnchor.href },
                description: this._getDiscription(li),
                creator: { name: creatorAnchor.text, link: creatorAnchor.href }
            };
            record.push(item);
        }
        return __WEBPACK_IMPORTED_MODULE_2_rxjs__["Observable"].of(record);
    };
    /**
     * this is used to get our description from our mark down
     * description entered by devs directly
     * @param li
     */
    MarkDownDataService.prototype._getDiscription = function (li) {
        li.removeChild(li.lastChild); // remove the creator we don't need it here
        var text = li.innerText;
        // not nice to use regexp for such a simple task
        return text.substring(text.lastIndexOf('- ') + 1).trim();
    };
    /**
     *  this is used to get the languages used by each repo
     *  sort by the highest number of code lines
     * @param repo
     * @returns {Observable<R>}
     */
    MarkDownDataService.prototype.getLanguages = function (repo) {
        // tslint:disable-next-line:max-line-length
        return this._http.get("https://api.github.com/repos/" + this._githubUsername.transform(repo.name.link) + "/" + repo.name.name.toLowerCase().split(' ').join('-') + "/languages")
            .map(function (res) {
            var obj = res.json();
            // convert to array of key and value pair instead of object
            return Object.keys(obj).map(function (key) {
                if (key === 'CSS') {
                    key = 'CSS3';
                }
                else if (key === 'HTML') {
                    key = 'HTML5';
                }
                return { key: key, value: obj[key] };
            });
        })
            .map(function (languages) {
            return languages.sort(function (a, b) { return (b.value - a.value); });
        });
    };
    MarkDownDataService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_6__pipes_github_username_pipe__["a" /* GithubUsernamePipe */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__pipes_github_username_pipe__["a" /* GithubUsernamePipe */]) === "function" && _b || Object])
    ], MarkDownDataService);
    return MarkDownDataService;
    var _a, _b;
}());

//# sourceMappingURL=mark-down-data.service.js.map

/***/ }),

/***/ "./src/app/services/search.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs__ = __webpack_require__("./node_modules/rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

// tslint:disable-next-line:import-blacklist

/**
 * this class service is here in order for us to do Parent and children communication
 *
 * @link https://angular.io/docs/ts/latest/cookbook/component-communication.html#!#bidirectional-service
 */
var SearchService = (function () {
    function SearchService() {
        // Observable string source
        this._searchSource = new __WEBPACK_IMPORTED_MODULE_1_rxjs__["Subject"]();
    }
    /**
     * this is used to pass our searched terms to our search source observable
     * @param term
     */
    SearchService.prototype.search = function (term) {
        this._searchSource.next(term);
    };
    /**
     * return our subject to us, so we can subscribe
     * @returns {Subject<string>}
     */
    SearchService.prototype.getSource = function () {
        return this._searchSource;
    };
    SearchService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], SearchService);
    return SearchService;
}());

//# sourceMappingURL=search.service.js.map

/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_20" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map