webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
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
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<h1>{{title}}</h1>\n<!-- <ul>\n  <li><a routerLink=\"\">Visão Geral</a></li>\n  <li><a routerLink=\"reports\">Gráficos</a></li>\n  <li><a routerLink=\"history\">Histórico</a></li>\n</ul>\n<router-outlet></router-outlet> -->\n<app-overview></app-overview>"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'Controle de gastos';
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")],
            preserveWhitespaces: false
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__data_service__ = __webpack_require__("../../../../../src/app/data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__overview_overview_component__ = __webpack_require__("../../../../../src/app/overview/overview.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__list_list_component__ = __webpack_require__("../../../../../src/app/list/list.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









/*
    HistoryComponent,
    ReportsComponent,
    */
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["E" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_7__overview_overview_component__["a" /* OverviewComponent */],
                __WEBPACK_IMPORTED_MODULE_8__list_list_component__["a" /* ListComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */]
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_2__data_service__["a" /* DataService */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/data.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DataService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__ = __webpack_require__("../../../../rxjs/_esm5/BehaviorSubject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DataService = (function () {
    function DataService(http) {
        this.http = http;
        this.dispendeEndPoind = location.origin + "/dispende/";
        this.categoryEndPoind = location.origin + "/category/";
        //private DBOpenRequest = self.indexedDB.open('meusGastos', 2);
        this.despesas = new __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__["a" /* BehaviorSubject */]([]);
        this.countDespesas = new __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__["a" /* BehaviorSubject */](0);
        this.despesasSave = [];
        //private db: any = self.indexedDB.open("meusGastos", 2);
        this.despesa = this.despesas.asObservable();
        this.qtd = this.countDespesas.asObservable();
        this.despesasSave = new Array();
    }
    DataService.prototype.alterarDespesa = function (despesa) {
        return this.http.put("" + this.dispendeEndPoind + despesa._id, despesa);
    };
    DataService.prototype.alterarContagem = function (qtd) {
        this.countDespesas.next(qtd);
    };
    DataService.prototype.salveDespesa = function (despesa) {
        var d = JSON.parse(localStorage.getItem('Despesas'));
        d.push(despesa);
        this.despesas.next(Object.assign({}, d));
        localStorage.setItem('Despesas', JSON.stringify(d));
        return this.http.post(this.dispendeEndPoind, despesa);
    };
    DataService.prototype.buscarDespesas = function () {
        try {
            var despesas_1 = [];
            var obDespesa = this.http.get(this.dispendeEndPoind);
            obDespesa.subscribe(function (od) { return despesas_1 = od; });
            if (despesas_1) {
                localStorage.setItem('Despesas', JSON.stringify(despesas_1));
            }
            return obDespesa;
        }
        catch (e) {
            console.log(e);
            this.despesas.next(Object.assign({}, JSON.parse(localStorage.getItem('Despesas'))));
            return this.despesas;
        }
    };
    DataService.prototype.excluirDespesa = function (despesa) {
        this.despesasSave = this.despesasSave.filter(function (s) { return s.id != despesa.id; });
        localStorage.setItem('Despesas', JSON.stringify(this.despesasSave));
        return this.http.delete("" + this.dispendeEndPoind + despesa._id);
    };
    DataService.prototype.buscarCategorias = function () {
        return this.http.get(this.categoryEndPoind, {});
    };
    DataService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */]])
    ], DataService);
    return DataService;
}());



/***/ }),

/***/ "../../../../../src/app/list/list.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\r\n.color-dark {\r\n    background: #2885C4;\r\n}\r\n.color-light {\r\n    background: #57B3F1;\r\n}\r\n.life-container {\r\n    background:#3FA0E1;\r\n    padding:.5em;\r\n    font-weight:bold;\r\n    cursor:pointer;\r\n}\r\n.rtl {\r\n    direction: RTL;\r\n}\r\n.rtl .pull-right {\r\n    float:left !important;\r\n}\r\n@media(min-width: 550px) {\r\n    .container {\r\n        display: -ms-grid;\r\n        display: grid;\r\n        -ms-grid-columns: 50% auto;\r\n            grid-template-columns: 50% auto;\r\n    }\r\n    .col {\r\n        padding: .4em 1.3em;\r\n    }\r\n\r\n}\r\n\r\n@media (max-width: 550px) {\r\n    .container {\r\n        display: -ms-grid;\r\n        display: grid;\r\n        -ms-grid-columns: 100% auto;\r\n            grid-template-columns: 100% auto;\r\n    }\r\n    .col {\r\n        block-size: 10 vw;\r\n        padding: .2em 0.8em;\r\n    }\r\n    span.reflect {\r\n        border: 1em;\r\n        width: 100%;\r\n        margin: 1em;\r\n    }\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/list/list.component.html":
/***/ (function(module, exports) {

module.exports = "\n<div class=\"container color-dark\">\n    <div class=\"col\">\n      <p>Total gastos ({{ itemCount }})</p>\n    </div>\n</div>\n<div class=\"container color-light\" >\n  <div class=\"col\">\n    <p class=\"life-container\" *ngFor=\"let despesa of despesas; let i = index;\" (click)=\"edit(despesa)\">     \n      {{despesa.desc}} - {{despesa.valor}} - {{despesa.data | date:'dd/MM/yyyy' }} <i class=\"fa fa-trash-o pull-right\" (click)=\"removeItem(i)\" aria-hidden=\"true\"></i>\n    </p>\n    \n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/list/list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__data_service__ = __webpack_require__("../../../../../src/app/data.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ListComponent = (function () {
    function ListComponent(_data) {
        this._data = _data;
        //@Input() despesas: Array<Despesa>;
        this.despesas = [];
        this.itemCount = 0;
    }
    ListComponent.prototype.ngOnInit = function () {
        var self = this;
        self._data.buscarDespesas().forEach(function (a) { return self.despesas = a; });
        //self._data.despesa.subscribe(res=>self.despesas = res);      
        self._data.qtd.subscribe(function (res) { return self.itemCount = res; });
        self._data.alterarContagem(self.itemCount);
    };
    ListComponent.prototype.removeItem = function (i) {
        var self = this;
        self._data.excluirDespesa(self.despesas[i]).subscribe(function (res) {
            if (res != undefined) {
                self.despesas.splice(i, 1);
                self.itemCount = self.despesas.length;
                self._data.alterarContagem(self.calcTotal());
            }
        });
    };
    ListComponent.prototype.calcTotal = function () {
        return Math.abs(this.despesas.map(function (a) { return a.valor; }).reduce(function (a, b) { return a - b; }));
    };
    ListComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-list',
            template: __webpack_require__("../../../../../src/app/list/list.component.html"),
            styles: [__webpack_require__("../../../../../src/app/list/list.component.css")],
            preserveWhitespaces: false
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__data_service__["a" /* DataService */]])
    ], ListComponent);
    return ListComponent;
}());



/***/ }),

/***/ "../../../../../src/app/models/despesa.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Despesa; });
var Despesa = (function () {
    function Despesa(id, desc, data, valor) {
        this._id = id;
        this.desc = desc;
        this.data = data;
        this.valor = valor;
    }
    return Despesa;
}());



/***/ }),

/***/ "../../../../../src/app/overview/overview.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\r\n/* The alert message box */\r\n.alert {\r\n    padding: 20px;\r\n    background-color: #f44336; /* Red */\r\n    color: white;\r\n    margin-bottom: 15px;\r\n}\r\n\r\n/* The close button */\r\n.closebtn {\r\n    margin-left: 15px;\r\n    color: white;\r\n    font-weight: bold;\r\n    float: right;\r\n    font-size: 22px;\r\n    line-height: 20px;\r\n    cursor: pointer;\r\n    transition: 0.3s;\r\n}\r\n\r\n/* When moving the mouse over the close button */\r\n.closebtn:hover {\r\n    color: black;\r\n}\r\n\r\n.color-dark {\r\n    background: #2885C4;\r\n}\r\n.color-light {\r\n    background: #57B3F1;\r\n}\r\n\r\n@media(min-width: 850px) {\r\n    .container {\r\n        display: -ms-grid;\r\n        display: grid;\r\n        -ms-grid-columns: 50% auto;\r\n            grid-template-columns: 50% auto;\r\n    }\r\n    .col {\r\n        padding: .4em 1.3em;\r\n    \r\n}\r\n\r\n    input.txt {\r\n        border: 0;\r\n        padding: 1em;\r\n        width: 80%;\r\n        margin-bottom: 2em;\r\n    }\r\n    input.btn {\r\n        border: 0;\r\n        display:block;\r\n        padding:1em 3em;\r\n        background:#A5F883;\r\n        color:#003A61;\r\n        margin-bottom:1em;\r\n        cursor:pointer;\r\n    }\r\n    .life-container {\r\n        background:#3FA0E1;\r\n        padding:.5em;\r\n        font-weight:bold;\r\n        cursor:pointer;\r\n    }\r\n\r\n}\r\n\r\n@media (max-width: 850px) {\r\n    .container {\r\n        display: block;\r\n        -ms-grid-columns: 100% auto;\r\n            grid-template-columns: 100% auto;\r\n    }\r\n    .col {\r\n        block-size: 10 vw;\r\n        padding: .2em 0.8em;\r\n    }\r\n    \r\n    .col-variable {\r\n        block-size: 10 vw;\r\n        padding: .2em 0.8em;\r\n    }\r\n    input.txt {\r\n        border: 0;\r\n        padding: 1em;\r\n        width: 95%;\r\n        margin-bottom: 1em;\r\n    }\r\n\r\n    span.reflect {\r\n        border: 1em;\r\n        width: 100%;\r\n        margin: 1em;\r\n    }\r\n\r\n    input.btn {\r\n        display:block;\r\n        padding:1em 4em;\r\n        background:#A5F883;\r\n        color:#003A61;\r\n        margin-bottom:1em;\r\n        cursor:pointer;\r\n    }\r\n    .life-container {\r\n        background:#3FA0E1;\r\n        padding:.5em;\r\n        font-weight:bold;\r\n        cursor:pointer;\r\n    }\r\n    \r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/overview/overview.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n  <div class=\"col-variable\">\r\n    <div class=\"container color-dark\">\r\n      <div class=\"col\">\r\n        <p>Adicione seu gasto</p>\r\n      </div>\r\n    </div>\r\n    <div class=\"container color-light\">\r\n      <div class=\"col\">\r\n        <p class=\"sm\">Informe seu gasto</p>\r\n        <form (submit)=\"addItem()\">\r\n          <label for=\"item\">\r\n            <strong>Categoria : </strong>\r\n          </label>\r\n          <br />\r\n          <br />\r\n          <input type=\"text\" class=\"txt\" name=\"itens\" list=\"categorias\" [(ngModel)]=\"despesa.desc\">\r\n          <datalist id=\"categorias\">\r\n            <option *ngFor=\"let cat of categorias; let i = index;\" [ngValue]=\"cat\">{{cat}}</option>\r\n          </datalist>\r\n          <br />\r\n          <label for=\"valor\">\r\n            <strong>Valor : </strong>\r\n          </label>\r\n          <br />\r\n          <br />\r\n          <input type=\"number\" class=\"txt\" name=\"valor\" step=\"0.1\" (click)=\"despesa.valor=null\" [(ngModel)]=\"despesa.valor\">\r\n          <br />\r\n          <label for=\"data\">\r\n            <strong>Data : </strong>\r\n          </label>\r\n          <br />\r\n          <br />\r\n          <input type=\"date\" class=\"txt\" name=\"data\" [(ngModel)]=\"despesa.data\">\r\n          <br>\r\n          <input type=\"submit\" class=\"btn\" [value]=\"btnText\" >\r\n        </form>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <!-- <div class=\"col-variable\" *ngIf>\r\n    <app-list></app-list>\r\n  </div> -->\r\n</div>\r\n<div class=\"alert\" *ngIf=\"showMesage\">\r\n  <span class=\"closebtn\" onclick=\"this.parentElement.style.display='none';\">&times;</span>\r\n  Gasto Salvo com sucesso !\r\n</div>\r\n<app-list></app-list>\r\n"

/***/ }),

/***/ "../../../../../src/app/overview/overview.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OverviewComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_despesa__ = __webpack_require__("../../../../../src/app/models/despesa.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__data_service__ = __webpack_require__("../../../../../src/app/data.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var OverviewComponent = (function () {
    function OverviewComponent(_data) {
        this._data = _data;
        this.btnText = 'Adicionar';
        this.despesas = [];
        this.categorias = ['Mercado', 'Almoco', 'Outros', 'Compras', 'Farmacia', 'Estudo', 'Mimos', 'Lanche'];
        this.total = 0;
        this.showMesage = false;
    }
    OverviewComponent.prototype.ngOnInit = function () {
        var self = this;
        self._data.qtd.subscribe(function (res) { return self.total = res; });
        if (true) {
            self.despesa = new __WEBPACK_IMPORTED_MODULE_1__models_despesa__["a" /* Despesa */](undefined, '', new Date(), 0);
        }
        self._data.buscarDespesas().subscribe(function (res) { return self.despesas = res; });
        self._data.alterarContagem(self.total);
    };
    OverviewComponent.prototype.addItem = function () {
        var self = this;
        if (self.despesa.desc != '' && self.despesa.desc != 'Acresente uma descrição') {
            self._data.salveDespesa(self.despesa).subscribe(function (res) { return self.despesas.push(res); });
            self._data.alterarContagem(self.total);
        }
        else {
            self.despesa.desc = 'Acresente uma descrição';
        }
    };
    OverviewComponent.prototype.calcTotal = function () {
        var qtd = this.despesas.length;
        if (qtd > 0) {
            return this.despesas.map(function (a) { return a.valor; }).reduce(function (a, b) { return a + b; });
        }
        return qtd;
    };
    OverviewComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-overview',
            template: __webpack_require__("../../../../../src/app/overview/overview.component.html"),
            styles: [__webpack_require__("../../../../../src/app/overview/overview.component.css")],
            preserveWhitespaces: false
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__data_service__["a" /* DataService */]])
    ], OverviewComponent);
    return OverviewComponent;
}());



/***/ }),

/***/ "../../../../../src/environments/environment.ts":
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


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_7" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]).then(function () {
    // if ('serviceWorker' in navigator) {
    //       navigator.serviceWorker.register('worker.min.js');
    // }
}).catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map