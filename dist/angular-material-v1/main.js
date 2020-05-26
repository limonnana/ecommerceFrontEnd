(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<mat-sidenav-container class=\"app-content\">\n  <mat-sidenav\n    #appSideNav\n    [mode]=\"viewportMobileQuery.matches ? 'over' : 'side'\"\n    [opened]=\"!viewportMobileQuery.matches\"\n    [fixedInViewport]=\"viewportMobileQuery.matches\">\n    <mat-toolbar color=\"primary\">\n      <mat-toolbar-row>\n        <h1></h1>\n        <span class=\"fill-space\"></span>\n        <button mat-icon-button *ngIf=\"viewportMobileQuery.matches\" (click)=\"appSideNav.close()\">\n          <mat-icon>arrow_back</mat-icon>\n        </button>\n      </mat-toolbar-row>\n    </mat-toolbar>\n\n    <mat-nav-list>\n      <!-- set the `routerLink` on the `mat-list-item` that way it will route if any of the list item is clicked -->\n      <mat-list-item routerLink=\"/\">\n        <mat-icon matListIcon>home</mat-icon>\n        <a matLine>Home</a>                    \n      </mat-list-item>\n      <mat-divider></mat-divider>\n      <mat-list-item routerLink=\"/users\" *ngIf=\"isLogged$ | async\">\n        <mat-icon matListIcon>perm_identity</mat-icon>\n        <a matLine>Users</a>\n      </mat-list-item>\n      <mat-list-item routerLink=\"/accounts\" *ngIf=\"isLogged$ | async\">\n        <mat-icon matListIcon>account_balance</mat-icon>\n        <a matLine>Accounts</a>\n      </mat-list-item>\n      <mat-list-item routerLink=\"/products\" *ngIf=\"isLogged$ | async\">\n        <mat-icon matListIcon>devices_other</mat-icon>\n       <a matLine>Products</a>\n      </mat-list-item>\n      <mat-list-item (click)=\"logout()\" *ngIf=\"isLogged$ | async\">\n         <mat-icon matListIcon>logout</mat-icon>\n         <a matLine>Logout</a>\n      </mat-list-item>\n      <mat-list-item (click)=\"login()\" *ngIf=\"isLoggedOut\">\n        <mat-icon matListIcon>logout</mat-icon>\n        <a matLine>Login</a> \n     </mat-list-item>\n    </mat-nav-list>\n  </mat-sidenav>\n  <mat-sidenav-content class=\"main-content\">\n    <mat-toolbar color=\"primary\" class=\"main-toolbar\">\n      <mat-toolbar-row>\n        <button mat-icon-button (click)=\"appSideNav.toggle()\" *ngIf=\"viewportMobileQuery.matches\">\n          <mat-icon>menu</mat-icon>\n        </button>\n        <h1 routerLink=\"/\" class=\"app-brand\">\n         Limonnana \n        </h1>\n      </mat-toolbar-row>\n    </mat-toolbar>\n    <main class=\"main-content-inner\">\n      <section class=\"content-area\">\n        <router-outlet></router-outlet>\n      </section>\n    </main>\n  </mat-sidenav-content>\n</mat-sidenav-container>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/dashboard/dashboard.component.html":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/dashboard/dashboard.component.html ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<mat-card>\n  <mat-card-header>\n    <mat-card-title>Last Account Transaction</mat-card-title>\n  </mat-card-header>\n  <mat-card-content>\n    <mat-list>\n      <mat-list-item>\n        <mat-icon matListIcon>info</mat-icon>\n        <h3 matLine>{{ lastTransaction.title }}</h3>\n        <p matLine>\n          <span class=\"text-caption\">Transaction Title</span>\n        </p>\n      </mat-list-item>\n      <mat-list-item>\n        <mat-icon matListIcon>today</mat-icon>\n        <h3 matLine>\n          {{ lastTransaction.transactionDate | date: 'MM/dd/yyyy @ hh:mm z' }}\n        </h3>\n        <p matLine>\n          <span class=\"text-caption\">Transaction Date</span>\n        </p>\n      </mat-list-item>\n      <mat-list-item>\n        <mat-icon matListIcon>attach_money</mat-icon>\n        <h3 matLine>\n          {{ lastTransaction.amount | currency: 'USD':'symbol':'2.2-2' }}\n        </h3>\n        <p matLine>\n          <span class=\"text-caption\">Amount</span>\n        </p>\n      </mat-list-item>\n      <mat-list-item>\n        <mat-icon matListIcon>\n          {{ lastTransaction.transactionType === 'DEBIT' ? 'arrow_upward' : 'arrow_downward' }}\n        </mat-icon>\n        <h3 matLine>{{ lastTransaction.transactionType }}</h3>\n        <p matLine>\n          <span class=\"text-caption\">Payment or Got Paid</span>\n        </p>\n      </mat-list-item>\n      <mat-list-item>\n        <mat-icon matListIcon>payment</mat-icon>\n        <h3 matLine>{{ lastTransaction.paymentType }}</h3>\n        <p matLine>\n          <span class=\"text-caption\">How the Transaction was Paid</span>\n        </p>\n      </mat-list-item>\n    </mat-list>\n  </mat-card-content>\n  <mat-card-actions>\n    <button mat-raised-button color=\"primary\">Edit Transaction</button>\n  </mat-card-actions>\n</mat-card>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/login/login.component.html":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/login/login.component.html ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"form-wraper\">\n    <div class=\"form-container card\">\n      <div class=\"form-header\">\n        <img src=\"./../../../assets/key.png\"  class=\"main-lock-icon\" alt=\"\">\n      </div>\n      <form class=\"clr-form\" (ngSubmit)=\"login()\"[formGroup]=\"loginForm\">\n      <div class=\"form-body\">\n        <mat-form-field class=\"justifier\">\n            <input matInput placeholder=\"Email\" text=\"email\" formControlName=\"email\" class=\"form-input\">\n        </mat-form-field>\n        <mat-form-field class=\"justifier\">\n            <input matInput type=\"password\" placeholder=\"Password\" text=\"password\"formControlName=\"password\" class=\"form-input\">\n        </mat-form-field>\n      </div>\n  \n      <div class=\"form-footer\">\n          <button mat-raised-button class=\"btn custom-btn\" type=\"submit\"> \n              <mat-icon class=\"mat-icon-rtl-mirror\" svgIcon=\"thumb-up\"></mat-icon> Login\n          </button>\n          <div class=\"txt\">\n            OR\n          </div>\n          <button mat-raised-button class=\"btn\"> \n            <img src=\"./../../../assets/search.png\" alt=\"\" class=\"google-icon\"> Login With Google\n          </button>\n      </div>\n      </form>\n      <div class=\"additional-link\">\n        <a routerLink=\"/register\">No Account? <strong>Create one here</strong></a>\n      </div>\n      <div class=\"additional-link\">\n        <a routerLink=\"/forgotPassword\">Forgot password</a>\n      </div>\n    </div>\n  </div>\n  \n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/product/create-product/create-product.component.html":
/*!***********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/product/create-product/create-product.component.html ***!
  \***********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>create-product works!</p>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/product/edit-product/edit-product.component.html":
/*!*******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/product/edit-product/edit-product.component.html ***!
  \*******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>edit-product works!</p>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/product/products/products.component.html":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/product/products/products.component.html ***!
  \***********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>products works!</p>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/register/register.component.html":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/register/register.component.html ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"form-wraper\">\n    <div class=\"form-container card\">\n      <div class=\"form-header\">\n        <h3 class=\"form-title\">Register </h3>\n      </div>\n      <form class=\"clr-form\" (ngSubmit)=\"register()\"[formGroup]=\"registerForm\">\n      <div class=\"form-body\">\n        <mat-form-field class=\"justifier\">\n            <input matInput placeholder=\"Email\" text=\"email\" name=\"email\" formControlName=\"email\" (blur)=\"isEmailTaken($event)\" class=\"form-input\">\n        </mat-form-field>\n        <mat-error *ngIf=\"error\">{{ error}}</mat-error>\n        <mat-form-field class=\"justifier\">\n            <input matInput type=\"password\" placeholder=\"Password\" text=\"password\" name=\"password\" formControlName=\"password\" class=\"form-input\">\n        </mat-form-field>\n        <mat-form-field class=\"justifier\">\n          <input matInput type=\"password\" placeholder=\"Retype password\" text=\"password\" name=\"retypePassword\" formControlName=\"retypePassword\" class=\"form-input\">\n      </mat-form-field>\n      </div>\n  \n      <div class=\"form-footer\">\n          <button mat-raised-button class=\"btn custom-btn\" type=\"submit\"> \n              <mat-icon></mat-icon> Signup\n          </button>\n      </div>\n      </form>\n      <div class=\"additional-link\">\n        <a routerLink=\"/login\">Already have an Account? <strong>Login</strong></a>\n      </div>\n    </div>\n  </div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/user/add-user/add-user.component.html":
/*!********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/user/add-user/add-user.component.html ***!
  \********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<mat-card>\n    <mat-card-header>\n      <mat-card-title>\n        Create User\n      </mat-card-title>\n    </mat-card-header>\n    <mat-card-content>\n      <mat-error>{{ error}}</mat-error> \n        <form class=\"clr-form\"(ngSubmit)=\"addUser()\"  [formGroup]=\"newUserFormGroup\">\n        <mat-form-field appearance=\"outline\" class=\"full-width-input\" color=\"primary\">\n          <mat-label>Full Name</mat-label>\n          <input matInput formControlName=\"name\" required />\n          <mat-error *ngIf=\"newUserFormGroup.controls['name'].invalid\">\n            Name is required\n          </mat-error>\n        </mat-form-field>\n\n        <mat-form-field appearance=\"outline\" class=\"full-width-input\" color=\"primary\">\n            <mat-label>Email</mat-label>\n            <input matInput formControlName=\"email\" required  (blur)=\"isEmailTaken($event)\"  />\n            <mat-error *ngIf=\"newUserFormGroup.controls['email'].invalid\">\n              Email is required\n            </mat-error>\n            <mat-error *ngIf=\"isEmailAlreadyTaken\">\n              Email is already taken\n            </mat-error>\n            <mat-error *ngIf=\"error\">{{ error}}</mat-error>\n          </mat-form-field>\n\n          <mat-form-field appearance=\"outline\" class=\"full-width-input\" color=\"primary\">\n            <mat-label>Phone</mat-label>\n            <input matInput formControlName=\"phone\" required />\n            <mat-error *ngIf=\"newUserFormGroup.controls['phone'].invalid\">\n              Phone is required\n            </mat-error>\n          </mat-form-field>\n       \n        <section class=\"full-width-input give-me-some-space top margin-25\">\n          <button type=\"submit\" mat-raised-button color=\"primary\" [disabled]=\"newUserFormGroup.invalid\">\n            Save\n          </button>\n        </section>\n      </form>\n    </mat-card-content>\n  </mat-card>\n  \n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/user/edit-user/edit-user.component.html":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/user/edit-user/edit-user.component.html ***!
  \**********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<mat-card>\n    <mat-card-header>\n      <mat-card-title>\n        \n      </mat-card-title>\n    </mat-card-header>\n    <mat-card-content>\n      <mat-error>{{ error}}</mat-error> \n        <form class=\"clr-form\"(ngSubmit)=\"editUser()\"  [formGroup]=\"editForm\">\n            <mat-form-field class=\"invisible\">\n                <input matInput formControlName=\"id\" />\n            </mat-form-field>\n        <mat-form-field appearance=\"outline\" class=\"full-width-input\" color=\"primary\">\n          <mat-label>Full Name</mat-label>\n          <input matInput formControlName=\"name\" required />\n          <mat-error *ngIf=\"editForm.controls['name'].invalid\">\n            Name is required\n          </mat-error>\n        </mat-form-field>\n\n        <mat-form-field appearance=\"outline\" class=\"full-width-input\" color=\"primary\">\n            <mat-label>Email</mat-label>\n            <input matInput formControlName=\"email\" required />\n            <mat-error *ngIf=\"editForm.controls['email'].invalid\">\n              Email is required\n            </mat-error>\n        </mat-form-field>\n\n          <mat-form-field appearance=\"outline\" class=\"full-width-input\" color=\"primary\">\n            <mat-label>Phone</mat-label>\n            <input matInput formControlName=\"phone\" required />\n            <mat-error *ngIf=\"editForm.controls['phone'].invalid\">\n              Phone is required\n            </mat-error>\n          </mat-form-field>\n       \n        <section class=\"full-width-input give-me-some-space top margin-25\">\n          <button type=\"submit\" mat-raised-button color=\"primary\" [disabled]=\"editForm.invalid\">\n            Save\n          </button>\n        </section>\n      </form>\n    </mat-card-content>\n  </mat-card>\n  \n\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/user/user-modal/user-modal.component.html":
/*!************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/user/user-modal/user-modal.component.html ***!
  \************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n<h3 mat-dialog-title>Are you sure you want to delete this user ?</h3>\n\n<div mat-dialog-actions>\n    <button class=\"mat-raised-button\" (click)=\"onNoClick()\">No</button>\n    <button class=\"mat-raised-button mat-primary\" (click)=\"save()\" cdkFocusInitial>Yes</button>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/user/user.component.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/user/user.component.html ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<mat-card>\n    <mat-card-header>\n      <mat-card-title>\n        <h1>Users</h1>\n      </mat-card-title>\n    </mat-card-header>\n    <mat-card-content>\n\n        <button mat-button routerLink=\"/addUser\">\n            <mat-icon>add</mat-icon>\n           Add User\n        </button>\n\n    <mat-table [dataSource]=\"dataSource\">\n\n        <ng-container matColumnDef=\"name\">\n            <!-- define the header for the id column. add sorting -->\n            <mat-header-cell *matHeaderCellDef>\n              Name\n            </mat-header-cell>\n            <!-- define the cell that will contain the data for each record in the data source -->\n            <!-- row gives you access to the Account record for a given row in the data source -->\n            <mat-cell *matCellDef=\"let row\">\n              {{ row.name }}\n            </mat-cell>\n          </ng-container>\n\n          <ng-container matColumnDef=\"email\">\n            <mat-header-cell *matHeaderCellDef>\n              Email\n            </mat-header-cell>\n            <mat-cell *matCellDef=\"let row\">\n              {{ row.email }}\n            </mat-cell>\n          </ng-container>\n\n          <ng-container matColumnDef=\"phone\">\n            <mat-header-cell *matHeaderCellDef >\n              Phone\n            </mat-header-cell>\n            <mat-cell *matCellDef=\"let row\">\n              {{ row.phone }}\n            </mat-cell>\n          </ng-container>\n\n          <ng-container matColumnDef=\"edit\">\n            <!-- define the header for the id column. add sorting -->\n            <mat-header-cell *matHeaderCellDef>\n              Edit\n            </mat-header-cell>\n            <!-- define the cell that will contain the data for each record in the data source -->\n            <!-- row gives you access to the Account record for a given row in the data source -->\n            <mat-cell *matCellDef=\"let row\">\n                <button mat-icon-button (click)=\"onEditClick(row.id)\">\n                    <mat-icon>edit</mat-icon>\n                    </button>\n            </mat-cell>\n          </ng-container>\n\n          <ng-container matColumnDef=\"delete\">\n              <!-- define the header for the id column. add sorting -->\n              <mat-header-cell *matHeaderCellDef>\n                Delete\n              </mat-header-cell>\n              <!-- define the cell that will contain the data for each record in the data source -->\n              <!-- row gives you access to the Account record for a given row in the data source -->\n              <mat-cell *matCellDef=\"let row\">\n                  <button mat-icon-button (click)=\"openDialog(row.id)\">\n                      <mat-icon>delete</mat-icon>\n                      </button>\n              </mat-cell>\n            </ng-container>\n\n     <!-- define the header row for the given columns -->\n      <mat-header-row *matHeaderRowDef=\"columns\"></mat-header-row>\n      <!-- define the rows and columns for each row in the data source -->\n      <mat-row *matRowDef=\"let row; columns: columns\"></mat-row>\n    </mat-table>\n      </mat-card-content>\n    </mat-card>\n\n    \n    \n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/containers/dashboard-container/dashboard-container.component.html":
/*!*************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/containers/dashboard-container/dashboard-container.component.html ***!
  \*************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-dashboard [lastTransaction]=\"lastTransaction$ | async\"></app-dashboard>\n");

/***/ }),

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"src/accounts/accounts.module": [
		"./src/accounts/accounts.module.ts",
		"src-accounts-accounts-module"
	]
};
function webpackAsyncContext(req) {
	if(!__webpack_require__.o(map, req)) {
		return Promise.resolve().then(function() {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}

	var ids = map[req], id = ids[0];
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";
module.exports = webpackAsyncContext;

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");
/* harmony import */ var _components_login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/login/login.component */ "./src/app/components/login/login.component.ts");
/* harmony import */ var _components_register_register_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/register/register.component */ "./src/app/components/register/register.component.ts");
/* harmony import */ var _components_user_user_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/user/user.component */ "./src/app/components/user/user.component.ts");
/* harmony import */ var _containers__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./containers */ "./src/app/containers/index.ts");
/* harmony import */ var _auth_guard__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./auth-guard */ "./src/app/auth-guard.ts");
/* harmony import */ var _components_user_add_user_add_user_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/user/add-user/add-user.component */ "./src/app/components/user/add-user/add-user.component.ts");
/* harmony import */ var _components_user_edit_user_edit_user_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/user/edit-user/edit-user.component */ "./src/app/components/user/edit-user/edit-user.component.ts");
/* harmony import */ var _components_product_products_products_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/product/products/products.component */ "./src/app/components/product/products/products.component.ts");
/* harmony import */ var _components_product_create_product_create_product_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/product/create-product/create-product.component */ "./src/app/components/product/create-product/create-product.component.ts");
/* harmony import */ var _components_product_edit_product_edit_product_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/product/edit-product/edit-product.component */ "./src/app/components/product/edit-product/edit-product.component.ts");













var routes = [
    {
        path: '',
        pathMatch: 'full',
        component: _containers__WEBPACK_IMPORTED_MODULE_6__["DashboardContainerComponent"]
    },
    {
        path: 'accounts',
        loadChildren: 'src/accounts/accounts.module#AccountsModule'
    },
    {
        path: 'login',
        component: _components_login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"]
    },
    {
        path: 'users',
        component: _components_user_user_component__WEBPACK_IMPORTED_MODULE_5__["UserComponent"],
        canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_7__["AuthGuard"]]
    },
    {
        path: 'addUser',
        component: _components_user_add_user_add_user_component__WEBPACK_IMPORTED_MODULE_8__["AddUserComponent"],
        canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_7__["AuthGuard"]]
    },
    {
        path: 'editUser/:id',
        component: _components_user_edit_user_edit_user_component__WEBPACK_IMPORTED_MODULE_9__["EditUserComponent"],
        canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_7__["AuthGuard"]]
    },
    {
        path: 'register',
        component: _components_register_register_component__WEBPACK_IMPORTED_MODULE_4__["RegisterComponent"]
    },
    {
        path: 'products',
        component: _components_product_products_products_component__WEBPACK_IMPORTED_MODULE_10__["ProductsComponent"],
        canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_7__["AuthGuard"]]
    },
    {
        path: 'create-product',
        component: _components_product_create_product_create_product_component__WEBPACK_IMPORTED_MODULE_11__["CreateProductComponent"],
        canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_7__["AuthGuard"]]
    },
    {
        path: 'edit-product',
        component: _components_product_edit_product_edit_product_component__WEBPACK_IMPORTED_MODULE_12__["EditProductComponent"],
        canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_7__["AuthGuard"]]
    }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".app-content {\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  width: 100vw;\n  height: 100vh;\n}\n.app-content mat-sidenav {\n  width: 350px;\n}\n.app-content .main-content {\n  display: flex;\n  flex-direction: column;\n}\n.app-content .main-content .main-toolbar {\n  flex: 0 0 auto;\n  z-index: 999;\n}\n.app-content .main-content .main-content-inner {\n  flex: 1 1 auto;\n  position: relative;\n  /* need this to position inner content */\n  overflow-y: auto;\n}\n.app-content .main-content .main-content-inner .content-area {\n  padding: 15px 30px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2V5YWwvV2ViRGV2ZWxvcG1lbnQvRnJvbnRFbmQvcHJvamVjdDA1L2FuZ3VsYXItbWF0ZXJpYWwtdjEvc3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLFNBQUE7RUFDQSxPQUFBO0VBQ0EsUUFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0FDQ0Y7QURDRTtFQUNFLFlBQUE7QUNDSjtBREVFO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0FDQUo7QURFSTtFQUNFLGNBQUE7RUFDQSxZQUFBO0FDQU47QURHSTtFQUNFLGNBQUE7RUFDQSxrQkFBQTtFQUFvQix3Q0FBQTtFQUNwQixnQkFBQTtBQ0FOO0FERU07RUFDRSxrQkFBQTtBQ0FSIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmFwcC1jb250ZW50IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGJvdHRvbTogMDtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG4gIHdpZHRoOiAxMDB2dztcbiAgaGVpZ2h0OiAxMDB2aDtcblxuICBtYXQtc2lkZW5hdiB7XG4gICAgd2lkdGg6IDM1MHB4O1xuICB9XG5cbiAgLm1haW4tY29udGVudCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuXG4gICAgLm1haW4tdG9vbGJhciB7XG4gICAgICBmbGV4OiAwIDAgYXV0bztcbiAgICAgIHotaW5kZXg6IDk5OTtcbiAgICB9XG5cbiAgICAubWFpbi1jb250ZW50LWlubmVyIHtcbiAgICAgIGZsZXg6IDEgMSBhdXRvO1xuICAgICAgcG9zaXRpb246IHJlbGF0aXZlOyAvKiBuZWVkIHRoaXMgdG8gcG9zaXRpb24gaW5uZXIgY29udGVudCAqL1xuICAgICAgb3ZlcmZsb3cteTogYXV0bztcblxuICAgICAgLmNvbnRlbnQtYXJlYSB7XG4gICAgICAgIHBhZGRpbmc6IDE1cHggMzBweDtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cbiIsIi5hcHAtY29udGVudCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICBib3R0b206IDA7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xuICB3aWR0aDogMTAwdnc7XG4gIGhlaWdodDogMTAwdmg7XG59XG4uYXBwLWNvbnRlbnQgbWF0LXNpZGVuYXYge1xuICB3aWR0aDogMzUwcHg7XG59XG4uYXBwLWNvbnRlbnQgLm1haW4tY29udGVudCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG4uYXBwLWNvbnRlbnQgLm1haW4tY29udGVudCAubWFpbi10b29sYmFyIHtcbiAgZmxleDogMCAwIGF1dG87XG4gIHotaW5kZXg6IDk5OTtcbn1cbi5hcHAtY29udGVudCAubWFpbi1jb250ZW50IC5tYWluLWNvbnRlbnQtaW5uZXIge1xuICBmbGV4OiAxIDEgYXV0bztcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAvKiBuZWVkIHRoaXMgdG8gcG9zaXRpb24gaW5uZXIgY29udGVudCAqL1xuICBvdmVyZmxvdy15OiBhdXRvO1xufVxuLmFwcC1jb250ZW50IC5tYWluLWNvbnRlbnQgLm1haW4tY29udGVudC1pbm5lciAuY29udGVudC1hcmVhIHtcbiAgcGFkZGluZzogMTVweCAzMHB4O1xufSJdfQ== */");

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/layout */ "./node_modules/@angular/cdk/__ivy_ngcc__/esm5/layout.es5.js");
/* harmony import */ var _services_credentials_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./services/credentials.service */ "./src/app/services/credentials.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");






var AppComponent = /** @class */ (function () {
    function AppComponent(changeDetectionRef, media, credentialsService, router) {
        var _this = this;
        this.changeDetectionRef = changeDetectionRef;
        this.media = media;
        this.credentialsService = credentialsService;
        this.router = router;
        this.credentials = null;
        this.viewportMobileQuery = media.matchMedia('(max-width: 600px)');
        this._viewportQueryListener = function () { return changeDetectionRef.detectChanges(); };
        this.viewportMobileQuery.addEventListener('change', this._viewportQueryListener);
        this.credentialsService.credentialEmitter.subscribe(function (credentialsE) {
            _this.credentials = credentialsE;
            if (_this.credentials) {
                _this.isLogged$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["of"])(true);
                _this.isLoggedOut = false;
            }
            else {
                _this.isLogged$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["of"])(false);
                _this.isLoggedOut = true;
            }
        });
    }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.isLogged$ = this.credentialsService.isAuthenticated();
        this.isLogged$.subscribe(function (res) { return res == true ? _this.isLoggedOut = false : _this.isLoggedOut = true; });
        //console.log('is authentik in header: ' + this.isLogged$)
    };
    AppComponent.prototype.ngOnDestroy = function () {
        this.viewportMobileQuery.removeEventListener('change', this._viewportQueryListener);
    };
    AppComponent.prototype.login = function () {
        this.router.navigate(['login']);
    };
    AppComponent.prototype.logout = function () {
        //this.store.dispatch(authLogout());
        this.credentialsService.logout();
        // this.updateMenu();
        this.credentials = null;
        this.credentialsService.credentialsEEmitChange(this.credentials);
        this.isLoggedOut = true;
        this.router.navigate(['login']);
        console.log('it has been logged out');
    };
    AppComponent.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] },
        { type: _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_2__["MediaMatcher"] },
        { type: _services_credentials_service__WEBPACK_IMPORTED_MODULE_3__["CredentialsService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
    ]; };
    AppComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __importDefault(__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")).default]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"],
            _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_2__["MediaMatcher"],
            _services_credentials_service__WEBPACK_IMPORTED_MODULE_3__["CredentialsService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm5/animations.js");
/* harmony import */ var _material_design_material_design_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../material-design/material-design.module */ "./src/material-design/material-design.module.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components */ "./src/app/components/index.ts");
/* harmony import */ var _containers__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./containers */ "./src/app/containers/index.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm5/forms.js");
/* harmony import */ var _components_login_login_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/login/login.component */ "./src/app/components/login/login.component.ts");
/* harmony import */ var _components_register_register_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/register/register.component */ "./src/app/components/register/register.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/http.js");
/* harmony import */ var _components_user_user_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/user/user.component */ "./src/app/components/user/user.component.ts");
/* harmony import */ var _utils_jwt_interceptor__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./utils/jwt.interceptor */ "./src/app/utils/jwt.interceptor.ts");
/* harmony import */ var _utils_ErrorInterceptor__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./utils/ErrorInterceptor */ "./src/app/utils/ErrorInterceptor.ts");
/* harmony import */ var _components_user_add_user_add_user_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/user/add-user/add-user.component */ "./src/app/components/user/add-user/add-user.component.ts");
/* harmony import */ var _components_user_edit_user_edit_user_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/user/edit-user/edit-user.component */ "./src/app/components/user/edit-user/edit-user.component.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/__ivy_ngcc__/esm5/material.es5.js");
/* harmony import */ var _components_user_user_modal_user_modal_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./components/user/user-modal/user-modal.component */ "./src/app/components/user/user-modal/user-modal.component.ts");
/* harmony import */ var _components_product_create_product_create_product_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./components/product/create-product/create-product.component */ "./src/app/components/product/create-product/create-product.component.ts");
/* harmony import */ var _components_product_products_products_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./components/product/products/products.component */ "./src/app/components/product/products/products.component.ts");
/* harmony import */ var _components_product_edit_product_edit_product_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./components/product/edit-product/edit-product.component */ "./src/app/components/product/edit-product/edit-product.component.ts");























var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__spreadArrays"])([
                _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]
            ], _containers__WEBPACK_IMPORTED_MODULE_8__["containers"], _components__WEBPACK_IMPORTED_MODULE_7__["components"], [
                _components_login_login_component__WEBPACK_IMPORTED_MODULE_10__["LoginComponent"],
                _components_register_register_component__WEBPACK_IMPORTED_MODULE_11__["RegisterComponent"],
                _components_user_user_component__WEBPACK_IMPORTED_MODULE_13__["UserComponent"],
                _components_user_add_user_add_user_component__WEBPACK_IMPORTED_MODULE_16__["AddUserComponent"],
                _components_user_edit_user_edit_user_component__WEBPACK_IMPORTED_MODULE_17__["EditUserComponent"],
                _components_user_user_modal_user_modal_component__WEBPACK_IMPORTED_MODULE_19__["UserModalComponent"],
                _components_product_create_product_create_product_component__WEBPACK_IMPORTED_MODULE_20__["CreateProductComponent"],
                _components_product_products_products_component__WEBPACK_IMPORTED_MODULE_21__["ProductsComponent"],
                _components_product_edit_product_edit_product_component__WEBPACK_IMPORTED_MODULE_22__["EditProductComponent"]
            ]),
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"],
                _material_design_material_design_module__WEBPACK_IMPORTED_MODULE_4__["MaterialDesignModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_12__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ReactiveFormsModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_18__["MatDialogModule"]
            ],
            entryComponents: [_components_user_user_modal_user_modal_component__WEBPACK_IMPORTED_MODULE_19__["UserModalComponent"]],
            providers: [
                { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_12__["HTTP_INTERCEPTORS"], useClass: _utils_jwt_interceptor__WEBPACK_IMPORTED_MODULE_14__["JwtInterceptor"], multi: true },
                { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_12__["HTTP_INTERCEPTORS"], useClass: _utils_ErrorInterceptor__WEBPACK_IMPORTED_MODULE_15__["ErrorInterceptor"], multi: true }
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/auth-guard.ts":
/*!*******************************!*\
  !*** ./src/app/auth-guard.ts ***!
  \*******************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");
/* harmony import */ var _services_credentials_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./services/credentials.service */ "./src/app/services/credentials.service.ts");




var AuthGuard = /** @class */ (function () {
    function AuthGuard(router, authenticationService) {
        this.router = router;
        this.authenticationService = authenticationService;
    }
    AuthGuard.prototype.canActivate = function (route, state) {
        var currentUser = this.authenticationService.isLogged();
        if (currentUser) {
            // check if route is restricted by role
            // if (route.data.roles && route.data.roles.indexOf(currentUser.role) === -1) {
            // role not authorised so redirect to home page
            //  this.router.navigate(['/']);
            //  return false;
            return true;
        }
        this.router.navigate(['/login']);
        return false;
    };
    AuthGuard.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _services_credentials_service__WEBPACK_IMPORTED_MODULE_3__["CredentialsService"] }
    ]; };
    AuthGuard = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({ providedIn: 'root' }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _services_credentials_service__WEBPACK_IMPORTED_MODULE_3__["CredentialsService"]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "./src/app/components/dashboard/dashboard.component.scss":
/*!***************************************************************!*\
  !*** ./src/app/components/dashboard/dashboard.component.scss ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZGFzaGJvYXJkL2Rhc2hib2FyZC5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/components/dashboard/dashboard.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/components/dashboard/dashboard.component.ts ***!
  \*************************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var util__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! util */ "./node_modules/util/util.js");
/* harmony import */ var util__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(util__WEBPACK_IMPORTED_MODULE_2__);



var DashboardComponent = /** @class */ (function () {
    function DashboardComponent() {
        this._lastTransaction = null;
    }
    Object.defineProperty(DashboardComponent.prototype, "lastTransaction", {
        get: function () {
            return this._lastTransaction;
        },
        set: function (txn) {
            if (!Object(util__WEBPACK_IMPORTED_MODULE_2__["isNullOrUndefined"])(txn) && (Object(util__WEBPACK_IMPORTED_MODULE_2__["isNullOrUndefined"])(this._lastTransaction) || this._lastTransaction.id !== txn.id)) {
                this._lastTransaction = txn;
            }
        },
        enumerable: true,
        configurable: true
    });
    DashboardComponent.prototype.ngOnInit = function () { };
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [Object])
    ], DashboardComponent.prototype, "lastTransaction", null);
    DashboardComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-dashboard',
            template: __importDefault(__webpack_require__(/*! raw-loader!./dashboard.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/dashboard/dashboard.component.html")).default,
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
            styles: [__importDefault(__webpack_require__(/*! ./dashboard.component.scss */ "./src/app/components/dashboard/dashboard.component.scss")).default]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "./src/app/components/index.ts":
/*!*************************************!*\
  !*** ./src/app/components/index.ts ***!
  \*************************************/
/*! exports provided: components, DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "components", function() { return components; });
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "./src/app/components/dashboard/dashboard.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_0__["DashboardComponent"]; });

var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};

var components = [_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_0__["DashboardComponent"]];



/***/ }),

/***/ "./src/app/components/login/login.component.scss":
/*!*******************************************************!*\
  !*** ./src/app/components/login/login.component.scss ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("body {\n  font-family: \"Roboto\", sans-serif;\n  margin: 0px !important;\n  overflow: hidden;\n}\n\n.add-btn {\n  position: fixed;\n  right: 25px;\n  bottom: 20px;\n}\n\n/** form **/\n\n.form-wraper {\n  width: 100%;\n  margin-top: 2%;\n}\n\n.form-container {\n  width: 35%;\n  margin: auto;\n  padding-bottom: 24px !important;\n  display: block;\n  background: #fdfdfd;\n}\n\n.card {\n  border-radius: 2px;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);\n  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);\n}\n\n/** form header **/\n\n.form-header {\n  padding: 24px 0;\n}\n\n.form-title {\n  text-align: center;\n  font-weight: 200;\n  font-size: 2.5em;\n}\n\n.main-lock-icon {\n  width: 13%;\n  margin: 5px auto;\n  display: block;\n}\n\n/** form body **/\n\n.form-body {\n  padding: 0 24px;\n}\n\n.justifier {\n  width: 100%;\n}\n\n.form-input {\n  margin-top: 24px;\n}\n\n/** form footer **/\n\n.form-footer {\n  padding: 24px;\n}\n\n.btn {\n  display: block;\n  width: 100%;\n  padding: 5% !important;\n  font-size: 1.5em;\n  font-weight: 200;\n  margin-top: 18px;\n}\n\n.custom-btn {\n  margin-bottom: 15px;\n  background: #3f51b5;\n  color: #fff;\n}\n\n.google-icon {\n  width: 11%;\n}\n\n.txt {\n  text-align: center;\n  color: #333;\n  margin: 10px auto !important;\n}\n\n.additional-link {\n  padding: 10px auto;\n  text-align: center;\n}\n\na {\n  text-decoration: none;\n  color: #2a7ddb;\n}\n\n/*\n  ##Device = Desktops\n  ##Screen = 1281px to higher resolution desktops\n*/\n\n/* \n    ##Device = Laptops, Desktops\n    ##Screen = B/w 1025px to 1280px\n */\n\n/* \n    ##Device = Tablets, Ipads (portrait)\n    ##Screen = B/w 768px to 1024px\n  */\n\n@media (min-width: 768px) and (max-width: 1024px) {\n  .form-container {\n    width: 95%;\n    margin: auto;\n    padding-bottom: 24px !important;\n    display: block;\n    background: #fdfdfd;\n  }\n\n  .btn {\n    font-size: 1em;\n  }\n}\n\n/* \n    ##Device = Tablets, Ipads (landscape)\n    ##Screen = B/w 768px to 1024px\n */\n\n/* \n    ##Device = Low Resolution Tablets, Mobiles (Landscape)\n    ##Screen = B/w 481px to 767px\n\n   */\n\n@media (min-width: 481px) and (max-width: 767px) {\n  .form-container {\n    width: 95%;\n    margin: auto;\n    padding-bottom: 24px !important;\n    display: block;\n    background: #fdfdfd;\n  }\n\n  .btn {\n    font-size: 1em;\n  }\n}\n\n/* \n    ##Device = Most of the Smartphones Mobiles (Portrait)\n    ##Screen = B/w 320px to 479px\n\n  */\n\n@media (min-width: 320px) and (max-width: 480px) {\n  .form-container {\n    width: 95%;\n    margin: auto;\n    padding-bottom: 24px !important;\n    display: block;\n    background: #fdfdfd;\n  }\n\n  .btn {\n    font-size: 1em;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2V5YWwvV2ViRGV2ZWxvcG1lbnQvRnJvbnRFbmQvcHJvamVjdDA1L2FuZ3VsYXItbWF0ZXJpYWwtdjEvc3JjL2FwcC9jb21wb25lbnRzL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksaUNBQUE7RUFDQSxzQkFBQTtFQUNBLGdCQUFBO0FDQ0o7O0FEQ0U7RUFDRSxlQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUNFSjs7QURDRSxXQUFBOztBQUNBO0VBQ0UsV0FBQTtFQUNBLGNBQUE7QUNFSjs7QURBRTtFQUNFLFVBQUE7RUFDQSxZQUFBO0VBQ0EsK0JBQUE7RUFDQSxjQUFBO0VBQ0EsbUJBQUE7QUNHSjs7QURERTtFQUNFLGtCQUFBO0VBQ0Esd0VBQUE7RUFDQSxxREFBQTtBQ0lKOztBRERFLGtCQUFBOztBQUNBO0VBQ0UsZUFBQTtBQ0lKOztBREZFO0VBQ0Usa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0FDS0o7O0FESEU7RUFDRSxVQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0FDTUo7O0FESEUsZ0JBQUE7O0FBQ0E7RUFDRSxlQUFBO0FDTUo7O0FESkU7RUFDRSxXQUFBO0FDT0o7O0FETEU7RUFDRSxnQkFBQTtBQ1FKOztBRExFLGtCQUFBOztBQUNBO0VBQ0UsYUFBQTtBQ1FKOztBRE5FO0VBQ0UsY0FBQTtFQUNBLFdBQUE7RUFDQSxzQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtBQ1NKOztBRFBFO0VBQ0UsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7QUNVSjs7QURSRTtFQUNFLFVBQUE7QUNXSjs7QURURTtFQUNFLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLDRCQUFBO0FDWUo7O0FEVkU7RUFDRSxrQkFBQTtFQUNBLGtCQUFBO0FDYUo7O0FEWEU7RUFDRSxxQkFBQTtFQUNBLGNBQUE7QUNjSjs7QURYRTs7O0NBQUE7O0FBUUE7OztFQUFBOztBQVFBOzs7R0FBQTs7QUFLQTtFQUNFO0lBQ0UsVUFBQTtJQUNBLFlBQUE7SUFDQSwrQkFBQTtJQUNBLGNBQUE7SUFDQSxtQkFBQTtFQ0tKOztFREhFO0lBQ0UsY0FBQTtFQ01KO0FBQ0Y7O0FESEU7OztFQUFBOztBQVFBOzs7O0lBQUE7O0FBS0E7RUFDRTtJQUNFLFVBQUE7SUFDQSxZQUFBO0lBQ0EsK0JBQUE7SUFDQSxjQUFBO0lBQ0EsbUJBQUE7RUNDSjs7RURDRTtJQUNFLGNBQUE7RUNFSjtBQUNGOztBRENFOzs7O0dBQUE7O0FBS0E7RUFDRTtJQUNFLFVBQUE7SUFDQSxZQUFBO0lBQ0EsK0JBQUE7SUFDQSxjQUFBO0lBQ0EsbUJBQUE7RUNDSjs7RURDRTtJQUNFLGNBQUE7RUNFSjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9sb2dpbi9sb2dpbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImJvZHkge1xuICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvJywgc2Fucy1zZXJpZjtcbiAgICBtYXJnaW46IDBweCAhaW1wb3J0YW50O1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gIH1cbiAgLmFkZC1idG4ge1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICByaWdodDogMjVweDtcbiAgICBib3R0b206IDIwcHg7XG4gIH1cbiAgXG4gIC8qKiBmb3JtICoqL1xuICAuZm9ybS13cmFwZXIge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG1hcmdpbi10b3A6IDIlO1xuICB9XG4gIC5mb3JtLWNvbnRhaW5lciB7XG4gICAgd2lkdGg6IDM1JTtcbiAgICBtYXJnaW46IGF1dG87XG4gICAgcGFkZGluZy1ib3R0b206IDI0cHggIWltcG9ydGFudDtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBiYWNrZ3JvdW5kOiByZ2IoMjUzLCAyNTMsIDI1Myk7XG4gIH1cbiAgLmNhcmQge1xuICAgIGJvcmRlci1yYWRpdXM6IDJweDtcbiAgICBib3gtc2hhZG93OiAwIDFweCAzcHggcmdiYSgwLCAwLCAwLCAwLjEyKSwgMCAxcHggMnB4IHJnYmEoMCwgMCwgMCwgMC4yNCk7XG4gICAgdHJhbnNpdGlvbjogYWxsIDAuM3MgY3ViaWMtYmV6aWVyKDAuMjUsIDAuOCwgMC4yNSwgMSk7XG4gIH1cbiAgXG4gIC8qKiBmb3JtIGhlYWRlciAqKi9cbiAgLmZvcm0taGVhZGVyIHtcbiAgICBwYWRkaW5nOiAyNHB4IDA7XG4gIH1cbiAgLmZvcm0tdGl0bGUge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBmb250LXdlaWdodDogMjAwO1xuICAgIGZvbnQtc2l6ZTogMi41ZW07XG4gIH1cbiAgLm1haW4tbG9jay1pY29uIHtcbiAgICB3aWR0aDogMTMlO1xuICAgIG1hcmdpbjogNXB4IGF1dG87XG4gICAgZGlzcGxheTogYmxvY2s7XG4gIH1cbiAgXG4gIC8qKiBmb3JtIGJvZHkgKiovXG4gIC5mb3JtLWJvZHkge1xuICAgIHBhZGRpbmc6IDAgMjRweDtcbiAgfVxuICAuanVzdGlmaWVyIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxuICAuZm9ybS1pbnB1dCB7XG4gICAgbWFyZ2luLXRvcDogMjRweDtcbiAgfVxuICBcbiAgLyoqIGZvcm0gZm9vdGVyICoqL1xuICAuZm9ybS1mb290ZXIge1xuICAgIHBhZGRpbmc6IDI0cHg7XG4gIH1cbiAgLmJ0biB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgcGFkZGluZzogNSUgIWltcG9ydGFudDtcbiAgICBmb250LXNpemU6IDEuNWVtO1xuICAgIGZvbnQtd2VpZ2h0OiAyMDA7XG4gICAgbWFyZ2luLXRvcDogMThweDtcbiAgfVxuICAuY3VzdG9tLWJ0biB7XG4gICAgbWFyZ2luLWJvdHRvbTogMTVweDtcbiAgICBiYWNrZ3JvdW5kOiAjM2Y1MWI1O1xuICAgIGNvbG9yOiAjZmZmO1xuICB9XG4gIC5nb29nbGUtaWNvbiB7XG4gICAgd2lkdGg6IDExJTtcbiAgfVxuICAudHh0IHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgY29sb3I6ICMzMzM7XG4gICAgbWFyZ2luOiAxMHB4IGF1dG8gIWltcG9ydGFudDtcbiAgfVxuICAuYWRkaXRpb25hbC1saW5rIHtcbiAgICBwYWRkaW5nOiAxMHB4IGF1dG87XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB9XG4gIGEge1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICBjb2xvcjogcmdiKDQyLCAxMjUsIDIxOSk7XG4gIH1cbiAgXG4gIC8qXG4gICAgIyNEZXZpY2UgPSBEZXNrdG9wc1xuICAgICMjU2NyZWVuID0gMTI4MXB4IHRvIGhpZ2hlciByZXNvbHV0aW9uIGRlc2t0b3BzXG4gICovXG4gIFxuICBAbWVkaWEgKG1pbi13aWR0aDogMTI4MXB4KSB7XG4gIH1cbiAgXG4gIC8qIFxuICAgICAgIyNEZXZpY2UgPSBMYXB0b3BzLCBEZXNrdG9wc1xuICAgICAgIyNTY3JlZW4gPSBCL3cgMTAyNXB4IHRvIDEyODBweFxuICAgKi9cbiAgXG4gIEBtZWRpYSAobWluLXdpZHRoOiAxMDI1cHgpIGFuZCAobWF4LXdpZHRoOiAxMjgwcHgpIHtcbiAgfVxuICBcbiAgLyogXG4gICAgICAjI0RldmljZSA9IFRhYmxldHMsIElwYWRzIChwb3J0cmFpdClcbiAgICAgICMjU2NyZWVuID0gQi93IDc2OHB4IHRvIDEwMjRweFxuICAgICovXG4gIFxuICBAbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIGFuZCAobWF4LXdpZHRoOiAxMDI0cHgpIHtcbiAgICAuZm9ybS1jb250YWluZXIge1xuICAgICAgd2lkdGg6IDk1JTtcbiAgICAgIG1hcmdpbjogYXV0bztcbiAgICAgIHBhZGRpbmctYm90dG9tOiAyNHB4ICFpbXBvcnRhbnQ7XG4gICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgIGJhY2tncm91bmQ6IHJnYigyNTMsIDI1MywgMjUzKTtcbiAgICB9XG4gICAgLmJ0biB7XG4gICAgICBmb250LXNpemU6IDFlbTtcbiAgICB9XG4gIH1cbiAgXG4gIC8qIFxuICAgICAgIyNEZXZpY2UgPSBUYWJsZXRzLCBJcGFkcyAobGFuZHNjYXBlKVxuICAgICAgIyNTY3JlZW4gPSBCL3cgNzY4cHggdG8gMTAyNHB4XG4gICAqL1xuICBcbiAgQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSBhbmQgKG1heC13aWR0aDogMTAyNHB4KSBhbmQgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpIHtcbiAgfVxuICBcbiAgLyogXG4gICAgICAjI0RldmljZSA9IExvdyBSZXNvbHV0aW9uIFRhYmxldHMsIE1vYmlsZXMgKExhbmRzY2FwZSlcbiAgICAgICMjU2NyZWVuID0gQi93IDQ4MXB4IHRvIDc2N3B4XG4gIFxuICAgICAqL1xuICBAbWVkaWEgKG1pbi13aWR0aDogNDgxcHgpIGFuZCAobWF4LXdpZHRoOiA3NjdweCkge1xuICAgIC5mb3JtLWNvbnRhaW5lciB7XG4gICAgICB3aWR0aDogOTUlO1xuICAgICAgbWFyZ2luOiBhdXRvO1xuICAgICAgcGFkZGluZy1ib3R0b206IDI0cHggIWltcG9ydGFudDtcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgYmFja2dyb3VuZDogcmdiKDI1MywgMjUzLCAyNTMpO1xuICAgIH1cbiAgICAuYnRuIHtcbiAgICAgIGZvbnQtc2l6ZTogMWVtO1xuICAgIH1cbiAgfVxuICBcbiAgLyogXG4gICAgICAjI0RldmljZSA9IE1vc3Qgb2YgdGhlIFNtYXJ0cGhvbmVzIE1vYmlsZXMgKFBvcnRyYWl0KVxuICAgICAgIyNTY3JlZW4gPSBCL3cgMzIwcHggdG8gNDc5cHhcbiAgICBcbiAgICAqL1xuICBAbWVkaWEgKG1pbi13aWR0aDogMzIwcHgpIGFuZCAobWF4LXdpZHRoOiA0ODBweCkge1xuICAgIC5mb3JtLWNvbnRhaW5lciB7XG4gICAgICB3aWR0aDogOTUlO1xuICAgICAgbWFyZ2luOiBhdXRvO1xuICAgICAgcGFkZGluZy1ib3R0b206IDI0cHggIWltcG9ydGFudDtcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgYmFja2dyb3VuZDogcmdiKDI1MywgMjUzLCAyNTMpO1xuICAgIH1cbiAgICAuYnRuIHtcbiAgICAgIGZvbnQtc2l6ZTogMWVtO1xuICAgIH1cbiAgfSIsImJvZHkge1xuICBmb250LWZhbWlseTogXCJSb2JvdG9cIiwgc2Fucy1zZXJpZjtcbiAgbWFyZ2luOiAwcHggIWltcG9ydGFudDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cblxuLmFkZC1idG4ge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHJpZ2h0OiAyNXB4O1xuICBib3R0b206IDIwcHg7XG59XG5cbi8qKiBmb3JtICoqL1xuLmZvcm0td3JhcGVyIHtcbiAgd2lkdGg6IDEwMCU7XG4gIG1hcmdpbi10b3A6IDIlO1xufVxuXG4uZm9ybS1jb250YWluZXIge1xuICB3aWR0aDogMzUlO1xuICBtYXJnaW46IGF1dG87XG4gIHBhZGRpbmctYm90dG9tOiAyNHB4ICFpbXBvcnRhbnQ7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBiYWNrZ3JvdW5kOiAjZmRmZGZkO1xufVxuXG4uY2FyZCB7XG4gIGJvcmRlci1yYWRpdXM6IDJweDtcbiAgYm94LXNoYWRvdzogMCAxcHggM3B4IHJnYmEoMCwgMCwgMCwgMC4xMiksIDAgMXB4IDJweCByZ2JhKDAsIDAsIDAsIDAuMjQpO1xuICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBjdWJpYy1iZXppZXIoMC4yNSwgMC44LCAwLjI1LCAxKTtcbn1cblxuLyoqIGZvcm0gaGVhZGVyICoqL1xuLmZvcm0taGVhZGVyIHtcbiAgcGFkZGluZzogMjRweCAwO1xufVxuXG4uZm9ybS10aXRsZSB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC13ZWlnaHQ6IDIwMDtcbiAgZm9udC1zaXplOiAyLjVlbTtcbn1cblxuLm1haW4tbG9jay1pY29uIHtcbiAgd2lkdGg6IDEzJTtcbiAgbWFyZ2luOiA1cHggYXV0bztcbiAgZGlzcGxheTogYmxvY2s7XG59XG5cbi8qKiBmb3JtIGJvZHkgKiovXG4uZm9ybS1ib2R5IHtcbiAgcGFkZGluZzogMCAyNHB4O1xufVxuXG4uanVzdGlmaWVyIHtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5mb3JtLWlucHV0IHtcbiAgbWFyZ2luLXRvcDogMjRweDtcbn1cblxuLyoqIGZvcm0gZm9vdGVyICoqL1xuLmZvcm0tZm9vdGVyIHtcbiAgcGFkZGluZzogMjRweDtcbn1cblxuLmJ0biB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB3aWR0aDogMTAwJTtcbiAgcGFkZGluZzogNSUgIWltcG9ydGFudDtcbiAgZm9udC1zaXplOiAxLjVlbTtcbiAgZm9udC13ZWlnaHQ6IDIwMDtcbiAgbWFyZ2luLXRvcDogMThweDtcbn1cblxuLmN1c3RvbS1idG4ge1xuICBtYXJnaW4tYm90dG9tOiAxNXB4O1xuICBiYWNrZ3JvdW5kOiAjM2Y1MWI1O1xuICBjb2xvcjogI2ZmZjtcbn1cblxuLmdvb2dsZS1pY29uIHtcbiAgd2lkdGg6IDExJTtcbn1cblxuLnR4dCB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgY29sb3I6ICMzMzM7XG4gIG1hcmdpbjogMTBweCBhdXRvICFpbXBvcnRhbnQ7XG59XG5cbi5hZGRpdGlvbmFsLWxpbmsge1xuICBwYWRkaW5nOiAxMHB4IGF1dG87XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuYSB7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgY29sb3I6ICMyYTdkZGI7XG59XG5cbi8qXG4gICMjRGV2aWNlID0gRGVza3RvcHNcbiAgIyNTY3JlZW4gPSAxMjgxcHggdG8gaGlnaGVyIHJlc29sdXRpb24gZGVza3RvcHNcbiovXG4vKiBcbiAgICAjI0RldmljZSA9IExhcHRvcHMsIERlc2t0b3BzXG4gICAgIyNTY3JlZW4gPSBCL3cgMTAyNXB4IHRvIDEyODBweFxuICovXG4vKiBcbiAgICAjI0RldmljZSA9IFRhYmxldHMsIElwYWRzIChwb3J0cmFpdClcbiAgICAjI1NjcmVlbiA9IEIvdyA3NjhweCB0byAxMDI0cHhcbiAgKi9cbkBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkgYW5kIChtYXgtd2lkdGg6IDEwMjRweCkge1xuICAuZm9ybS1jb250YWluZXIge1xuICAgIHdpZHRoOiA5NSU7XG4gICAgbWFyZ2luOiBhdXRvO1xuICAgIHBhZGRpbmctYm90dG9tOiAyNHB4ICFpbXBvcnRhbnQ7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgYmFja2dyb3VuZDogI2ZkZmRmZDtcbiAgfVxuXG4gIC5idG4ge1xuICAgIGZvbnQtc2l6ZTogMWVtO1xuICB9XG59XG4vKiBcbiAgICAjI0RldmljZSA9IFRhYmxldHMsIElwYWRzIChsYW5kc2NhcGUpXG4gICAgIyNTY3JlZW4gPSBCL3cgNzY4cHggdG8gMTAyNHB4XG4gKi9cbi8qIFxuICAgICMjRGV2aWNlID0gTG93IFJlc29sdXRpb24gVGFibGV0cywgTW9iaWxlcyAoTGFuZHNjYXBlKVxuICAgICMjU2NyZWVuID0gQi93IDQ4MXB4IHRvIDc2N3B4XG5cbiAgICovXG5AbWVkaWEgKG1pbi13aWR0aDogNDgxcHgpIGFuZCAobWF4LXdpZHRoOiA3NjdweCkge1xuICAuZm9ybS1jb250YWluZXIge1xuICAgIHdpZHRoOiA5NSU7XG4gICAgbWFyZ2luOiBhdXRvO1xuICAgIHBhZGRpbmctYm90dG9tOiAyNHB4ICFpbXBvcnRhbnQ7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgYmFja2dyb3VuZDogI2ZkZmRmZDtcbiAgfVxuXG4gIC5idG4ge1xuICAgIGZvbnQtc2l6ZTogMWVtO1xuICB9XG59XG4vKiBcbiAgICAjI0RldmljZSA9IE1vc3Qgb2YgdGhlIFNtYXJ0cGhvbmVzIE1vYmlsZXMgKFBvcnRyYWl0KVxuICAgICMjU2NyZWVuID0gQi93IDMyMHB4IHRvIDQ3OXB4XG5cbiAgKi9cbkBtZWRpYSAobWluLXdpZHRoOiAzMjBweCkgYW5kIChtYXgtd2lkdGg6IDQ4MHB4KSB7XG4gIC5mb3JtLWNvbnRhaW5lciB7XG4gICAgd2lkdGg6IDk1JTtcbiAgICBtYXJnaW46IGF1dG87XG4gICAgcGFkZGluZy1ib3R0b206IDI0cHggIWltcG9ydGFudDtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBiYWNrZ3JvdW5kOiAjZmRmZGZkO1xuICB9XG5cbiAgLmJ0biB7XG4gICAgZm9udC1zaXplOiAxZW07XG4gIH1cbn0iXX0= */");

/***/ }),

/***/ "./src/app/components/login/login.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/login/login.component.ts ***!
  \*****************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm5/forms.js");
/* harmony import */ var _services_login_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/login.service */ "./src/app/services/login.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");
/* harmony import */ var _services_credentials_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/credentials.service */ "./src/app/services/credentials.service.ts");
/* harmony import */ var _models_credentials__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../models/credentials */ "./src/app/models/credentials.ts");
/* harmony import */ var _models_role__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../models/role */ "./src/app/models/role.ts");








var LoginComponent = /** @class */ (function () {
    function LoginComponent(formBuilder, loginService, router, credentialsService) {
        this.formBuilder = formBuilder;
        this.loginService = loginService;
        this.router = router;
        this.credentialsService = credentialsService;
        this.credentials = new _models_credentials__WEBPACK_IMPORTED_MODULE_6__["Credentials"]('', '', _models_role__WEBPACK_IMPORTED_MODULE_7__["Role"].USER);
        this.createForm();
    }
    LoginComponent.prototype.ngOnInit = function () {
        // this.storageService.testLocalStorage();
        // this.isAuthenticated$ = this.store.pipe(select(selectIsAuthenticated));
        // this.isAdmin$ = this.store.pipe(select(selectIsAdmin));
    };
    LoginComponent.prototype.login = function () {
        var _this = this;
        this.loginService.authenticate(this.loginForm.value).subscribe(function (data) {
            _this.user = data;
            console.log('User Logged: ' + JSON.stringify(_this.user));
            if (_this.user.token) {
                _this.credentials.username = _this.user.email;
                _this.credentials.token = _this.user.token;
                _this.credentials.role = _this.user.role;
                _this.credentialsService.setCredentials(_this.credentials);
                _this.credentialsService.credentialsEEmitChange(_this.credentials);
                _this.router.navigate(['accounts']);
            }
            else {
                _this.wrongCredentials = "wrong credentials";
            }
        });
    };
    LoginComponent.prototype.createForm = function () {
        this.loginForm = this.formBuilder.group({
            email: [''],
            password: [''] //, Validators.required],
            //rememberMe: false
        });
    };
    LoginComponent.ctorParameters = function () { return [
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
        { type: _services_login_service__WEBPACK_IMPORTED_MODULE_3__["LoginService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
        { type: _services_credentials_service__WEBPACK_IMPORTED_MODULE_5__["CredentialsService"] }
    ]; };
    LoginComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login',
            template: __importDefault(__webpack_require__(/*! raw-loader!./login.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/login/login.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./login.component.scss */ "./src/app/components/login/login.component.scss")).default]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _services_login_service__WEBPACK_IMPORTED_MODULE_3__["LoginService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
            _services_credentials_service__WEBPACK_IMPORTED_MODULE_5__["CredentialsService"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/components/product/create-product/create-product.component.scss":
/*!*********************************************************************************!*\
  !*** ./src/app/components/product/create-product/create-product.component.scss ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcHJvZHVjdC9jcmVhdGUtcHJvZHVjdC9jcmVhdGUtcHJvZHVjdC5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/components/product/create-product/create-product.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/components/product/create-product/create-product.component.ts ***!
  \*******************************************************************************/
/*! exports provided: CreateProductComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateProductComponent", function() { return CreateProductComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");


var CreateProductComponent = /** @class */ (function () {
    function CreateProductComponent() {
    }
    CreateProductComponent.prototype.ngOnInit = function () {
    };
    CreateProductComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-create-product',
            template: __importDefault(__webpack_require__(/*! raw-loader!./create-product.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/product/create-product/create-product.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./create-product.component.scss */ "./src/app/components/product/create-product/create-product.component.scss")).default]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
    ], CreateProductComponent);
    return CreateProductComponent;
}());



/***/ }),

/***/ "./src/app/components/product/edit-product/edit-product.component.scss":
/*!*****************************************************************************!*\
  !*** ./src/app/components/product/edit-product/edit-product.component.scss ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcHJvZHVjdC9lZGl0LXByb2R1Y3QvZWRpdC1wcm9kdWN0LmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/components/product/edit-product/edit-product.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/components/product/edit-product/edit-product.component.ts ***!
  \***************************************************************************/
/*! exports provided: EditProductComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditProductComponent", function() { return EditProductComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");


var EditProductComponent = /** @class */ (function () {
    function EditProductComponent() {
    }
    EditProductComponent.prototype.ngOnInit = function () {
    };
    EditProductComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-edit-product',
            template: __importDefault(__webpack_require__(/*! raw-loader!./edit-product.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/product/edit-product/edit-product.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./edit-product.component.scss */ "./src/app/components/product/edit-product/edit-product.component.scss")).default]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
    ], EditProductComponent);
    return EditProductComponent;
}());



/***/ }),

/***/ "./src/app/components/product/products/products.component.scss":
/*!*********************************************************************!*\
  !*** ./src/app/components/product/products/products.component.scss ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcHJvZHVjdC9wcm9kdWN0cy9wcm9kdWN0cy5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/components/product/products/products.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/components/product/products/products.component.ts ***!
  \*******************************************************************/
/*! exports provided: ProductsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductsComponent", function() { return ProductsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");


var ProductsComponent = /** @class */ (function () {
    function ProductsComponent() {
    }
    ProductsComponent.prototype.ngOnInit = function () {
    };
    ProductsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-products',
            template: __importDefault(__webpack_require__(/*! raw-loader!./products.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/product/products/products.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./products.component.scss */ "./src/app/components/product/products/products.component.scss")).default]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
    ], ProductsComponent);
    return ProductsComponent;
}());



/***/ }),

/***/ "./src/app/components/register/register.component.scss":
/*!*************************************************************!*\
  !*** ./src/app/components/register/register.component.scss ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("body {\n  font-family: \"Roboto\", sans-serif;\n  margin: 0px !important;\n  overflow: hidden;\n}\n\n.add-btn {\n  position: fixed;\n  right: 25px;\n  bottom: 20px;\n}\n\n/** form **/\n\n.form-wraper {\n  width: 100%;\n  margin-top: 2%;\n}\n\n.form-container {\n  width: 35%;\n  margin: auto;\n  padding-bottom: 24px !important;\n  display: block;\n  background: #fdfdfd;\n}\n\n.card {\n  border-radius: 2px;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);\n  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);\n}\n\n/** form header **/\n\n.form-header {\n  padding: 24px 0;\n}\n\n.form-title {\n  text-align: center;\n  font-weight: 200;\n  font-size: 2.5em;\n}\n\n.main-lock-icon {\n  width: 35%;\n  margin: 2px auto;\n  display: block;\n}\n\n/** form body **/\n\n.form-body {\n  padding: 0 24px;\n}\n\n.justifier {\n  width: 100%;\n}\n\n.form-input {\n  margin-top: 24px;\n}\n\n/** form footer **/\n\n.form-footer {\n  padding: 24px;\n}\n\n.btn {\n  display: block;\n  width: 100%;\n  padding: 5% !important;\n  font-size: 1.5em;\n  font-weight: 200;\n  margin-top: 18px;\n}\n\n.custom-btn {\n  margin-bottom: 15px;\n  background: #3f51b5;\n  color: #fff;\n}\n\n.google-icon {\n  width: 6%;\n}\n\n.txt {\n  text-align: center;\n  color: #333;\n  margin: 10px auto !important;\n}\n\n.additional-link {\n  padding: 10px auto;\n  text-align: center;\n}\n\na {\n  text-decoration: none;\n  color: #2a7ddb;\n}\n\n/*\n  ##Device = Desktops\n  ##Screen = 1281px to higher resolution desktops\n*/\n\n/* \n    ##Device = Laptops, Desktops\n    ##Screen = B/w 1025px to 1280px\n */\n\n/* \n    ##Device = Tablets, Ipads (portrait)\n    ##Screen = B/w 768px to 1024px\n  */\n\n@media (min-width: 768px) and (max-width: 1024px) {\n  .form-container {\n    width: 95%;\n    margin: auto;\n    padding-bottom: 24px !important;\n    display: block;\n    background: #fdfdfd;\n  }\n\n  .btn {\n    font-size: 1em;\n  }\n}\n\n/* \n    ##Device = Tablets, Ipads (landscape)\n    ##Screen = B/w 768px to 1024px\n */\n\n/* \n    ##Device = Low Resolution Tablets, Mobiles (Landscape)\n    ##Screen = B/w 481px to 767px\n\n   */\n\n@media (min-width: 481px) and (max-width: 767px) {\n  .form-container {\n    width: 95%;\n    margin: auto;\n    padding-bottom: 24px !important;\n    display: block;\n    background: #fdfdfd;\n  }\n\n  .btn {\n    font-size: 1em;\n  }\n}\n\n/* \n    ##Device = Most of the Smartphones Mobiles (Portrait)\n    ##Screen = B/w 320px to 479px\n\n  */\n\n@media (min-width: 320px) and (max-width: 480px) {\n  .form-container {\n    width: 95%;\n    margin: auto;\n    padding-bottom: 24px !important;\n    display: block;\n    background: #fdfdfd;\n  }\n\n  .btn {\n    font-size: 1em;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2V5YWwvV2ViRGV2ZWxvcG1lbnQvRnJvbnRFbmQvcHJvamVjdDA1L2FuZ3VsYXItbWF0ZXJpYWwtdjEvc3JjL2FwcC9jb21wb25lbnRzL3JlZ2lzdGVyL3JlZ2lzdGVyLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL3JlZ2lzdGVyL3JlZ2lzdGVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksaUNBQUE7RUFDQSxzQkFBQTtFQUNBLGdCQUFBO0FDQ0o7O0FEQ0U7RUFDRSxlQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUNFSjs7QURDRSxXQUFBOztBQUNBO0VBQ0UsV0FBQTtFQUNBLGNBQUE7QUNFSjs7QURBRTtFQUNFLFVBQUE7RUFDQSxZQUFBO0VBQ0EsK0JBQUE7RUFDQSxjQUFBO0VBQ0EsbUJBQUE7QUNHSjs7QURERTtFQUNFLGtCQUFBO0VBQ0Esd0VBQUE7RUFDQSxxREFBQTtBQ0lKOztBRERFLGtCQUFBOztBQUNBO0VBQ0UsZUFBQTtBQ0lKOztBREZFO0VBQ0Usa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0FDS0o7O0FESEU7RUFDRSxVQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0FDTUo7O0FESEUsZ0JBQUE7O0FBQ0E7RUFDRSxlQUFBO0FDTUo7O0FESkU7RUFDRSxXQUFBO0FDT0o7O0FETEU7RUFDRSxnQkFBQTtBQ1FKOztBRExFLGtCQUFBOztBQUNBO0VBQ0UsYUFBQTtBQ1FKOztBRE5FO0VBQ0UsY0FBQTtFQUNBLFdBQUE7RUFDQSxzQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtBQ1NKOztBRFBFO0VBQ0UsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7QUNVSjs7QURSRTtFQUNFLFNBQUE7QUNXSjs7QURURTtFQUNFLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLDRCQUFBO0FDWUo7O0FEVkU7RUFDRSxrQkFBQTtFQUNBLGtCQUFBO0FDYUo7O0FEWEU7RUFDRSxxQkFBQTtFQUNBLGNBQUE7QUNjSjs7QURYRTs7O0NBQUE7O0FBUUE7OztFQUFBOztBQVFBOzs7R0FBQTs7QUFLQTtFQUNFO0lBQ0UsVUFBQTtJQUNBLFlBQUE7SUFDQSwrQkFBQTtJQUNBLGNBQUE7SUFDQSxtQkFBQTtFQ0tKOztFREhFO0lBQ0UsY0FBQTtFQ01KO0FBQ0Y7O0FESEU7OztFQUFBOztBQVFBOzs7O0lBQUE7O0FBS0E7RUFDRTtJQUNFLFVBQUE7SUFDQSxZQUFBO0lBQ0EsK0JBQUE7SUFDQSxjQUFBO0lBQ0EsbUJBQUE7RUNDSjs7RURDRTtJQUNFLGNBQUE7RUNFSjtBQUNGOztBRENFOzs7O0dBQUE7O0FBS0E7RUFDRTtJQUNFLFVBQUE7SUFDQSxZQUFBO0lBQ0EsK0JBQUE7SUFDQSxjQUFBO0lBQ0EsbUJBQUE7RUNDSjs7RURDRTtJQUNFLGNBQUE7RUNFSjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9yZWdpc3Rlci9yZWdpc3Rlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImJvZHkge1xuICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvJywgc2Fucy1zZXJpZjtcbiAgICBtYXJnaW46IDBweCAhaW1wb3J0YW50O1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gIH1cbiAgLmFkZC1idG4ge1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICByaWdodDogMjVweDtcbiAgICBib3R0b206IDIwcHg7XG4gIH1cbiAgXG4gIC8qKiBmb3JtICoqL1xuICAuZm9ybS13cmFwZXIge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG1hcmdpbi10b3A6IDIlO1xuICB9XG4gIC5mb3JtLWNvbnRhaW5lciB7XG4gICAgd2lkdGg6IDM1JTtcbiAgICBtYXJnaW46IGF1dG87XG4gICAgcGFkZGluZy1ib3R0b206IDI0cHggIWltcG9ydGFudDtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBiYWNrZ3JvdW5kOiByZ2IoMjUzLCAyNTMsIDI1Myk7XG4gIH1cbiAgLmNhcmQge1xuICAgIGJvcmRlci1yYWRpdXM6IDJweDtcbiAgICBib3gtc2hhZG93OiAwIDFweCAzcHggcmdiYSgwLCAwLCAwLCAwLjEyKSwgMCAxcHggMnB4IHJnYmEoMCwgMCwgMCwgMC4yNCk7XG4gICAgdHJhbnNpdGlvbjogYWxsIDAuM3MgY3ViaWMtYmV6aWVyKDAuMjUsIDAuOCwgMC4yNSwgMSk7XG4gIH1cbiAgXG4gIC8qKiBmb3JtIGhlYWRlciAqKi9cbiAgLmZvcm0taGVhZGVyIHtcbiAgICBwYWRkaW5nOiAyNHB4IDA7XG4gIH1cbiAgLmZvcm0tdGl0bGUge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBmb250LXdlaWdodDogMjAwO1xuICAgIGZvbnQtc2l6ZTogMi41ZW07XG4gIH1cbiAgLm1haW4tbG9jay1pY29uIHtcbiAgICB3aWR0aDogMzUlO1xuICAgIG1hcmdpbjogMnB4IGF1dG87XG4gICAgZGlzcGxheTogYmxvY2s7XG4gIH1cbiAgXG4gIC8qKiBmb3JtIGJvZHkgKiovXG4gIC5mb3JtLWJvZHkge1xuICAgIHBhZGRpbmc6IDAgMjRweDtcbiAgfVxuICAuanVzdGlmaWVyIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxuICAuZm9ybS1pbnB1dCB7XG4gICAgbWFyZ2luLXRvcDogMjRweDtcbiAgfVxuICBcbiAgLyoqIGZvcm0gZm9vdGVyICoqL1xuICAuZm9ybS1mb290ZXIge1xuICAgIHBhZGRpbmc6IDI0cHg7XG4gIH1cbiAgLmJ0biB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgcGFkZGluZzogNSUgIWltcG9ydGFudDtcbiAgICBmb250LXNpemU6IDEuNWVtO1xuICAgIGZvbnQtd2VpZ2h0OiAyMDA7XG4gICAgbWFyZ2luLXRvcDogMThweDtcbiAgfVxuICAuY3VzdG9tLWJ0biB7XG4gICAgbWFyZ2luLWJvdHRvbTogMTVweDtcbiAgICBiYWNrZ3JvdW5kOiAjM2Y1MWI1O1xuICAgIGNvbG9yOiAjZmZmO1xuICB9XG4gIC5nb29nbGUtaWNvbiB7XG4gICAgd2lkdGg6IDYlO1xuICB9XG4gIC50eHQge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBjb2xvcjogIzMzMztcbiAgICBtYXJnaW46IDEwcHggYXV0byAhaW1wb3J0YW50O1xuICB9XG4gIC5hZGRpdGlvbmFsLWxpbmsge1xuICAgIHBhZGRpbmc6IDEwcHggYXV0bztcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIH1cbiAgYSB7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgIGNvbG9yOiByZ2IoNDIsIDEyNSwgMjE5KTtcbiAgfVxuICBcbiAgLypcbiAgICAjI0RldmljZSA9IERlc2t0b3BzXG4gICAgIyNTY3JlZW4gPSAxMjgxcHggdG8gaGlnaGVyIHJlc29sdXRpb24gZGVza3RvcHNcbiAgKi9cbiAgXG4gIEBtZWRpYSAobWluLXdpZHRoOiAxMjgxcHgpIHtcbiAgfVxuICBcbiAgLyogXG4gICAgICAjI0RldmljZSA9IExhcHRvcHMsIERlc2t0b3BzXG4gICAgICAjI1NjcmVlbiA9IEIvdyAxMDI1cHggdG8gMTI4MHB4XG4gICAqL1xuICBcbiAgQG1lZGlhIChtaW4td2lkdGg6IDEwMjVweCkgYW5kIChtYXgtd2lkdGg6IDEyODBweCkge1xuICB9XG4gIFxuICAvKiBcbiAgICAgICMjRGV2aWNlID0gVGFibGV0cywgSXBhZHMgKHBvcnRyYWl0KVxuICAgICAgIyNTY3JlZW4gPSBCL3cgNzY4cHggdG8gMTAyNHB4XG4gICAgKi9cbiAgXG4gIEBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkgYW5kIChtYXgtd2lkdGg6IDEwMjRweCkge1xuICAgIC5mb3JtLWNvbnRhaW5lciB7XG4gICAgICB3aWR0aDogOTUlO1xuICAgICAgbWFyZ2luOiBhdXRvO1xuICAgICAgcGFkZGluZy1ib3R0b206IDI0cHggIWltcG9ydGFudDtcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgYmFja2dyb3VuZDogcmdiKDI1MywgMjUzLCAyNTMpO1xuICAgIH1cbiAgICAuYnRuIHtcbiAgICAgIGZvbnQtc2l6ZTogMWVtO1xuICAgIH1cbiAgfVxuICBcbiAgLyogXG4gICAgICAjI0RldmljZSA9IFRhYmxldHMsIElwYWRzIChsYW5kc2NhcGUpXG4gICAgICAjI1NjcmVlbiA9IEIvdyA3NjhweCB0byAxMDI0cHhcbiAgICovXG4gIFxuICBAbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIGFuZCAobWF4LXdpZHRoOiAxMDI0cHgpIGFuZCAob3JpZW50YXRpb246IGxhbmRzY2FwZSkge1xuICB9XG4gIFxuICAvKiBcbiAgICAgICMjRGV2aWNlID0gTG93IFJlc29sdXRpb24gVGFibGV0cywgTW9iaWxlcyAoTGFuZHNjYXBlKVxuICAgICAgIyNTY3JlZW4gPSBCL3cgNDgxcHggdG8gNzY3cHhcbiAgXG4gICAgICovXG4gIEBtZWRpYSAobWluLXdpZHRoOiA0ODFweCkgYW5kIChtYXgtd2lkdGg6IDc2N3B4KSB7XG4gICAgLmZvcm0tY29udGFpbmVyIHtcbiAgICAgIHdpZHRoOiA5NSU7XG4gICAgICBtYXJnaW46IGF1dG87XG4gICAgICBwYWRkaW5nLWJvdHRvbTogMjRweCAhaW1wb3J0YW50O1xuICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICBiYWNrZ3JvdW5kOiByZ2IoMjUzLCAyNTMsIDI1Myk7XG4gICAgfVxuICAgIC5idG4ge1xuICAgICAgZm9udC1zaXplOiAxZW07XG4gICAgfVxuICB9XG4gIFxuICAvKiBcbiAgICAgICMjRGV2aWNlID0gTW9zdCBvZiB0aGUgU21hcnRwaG9uZXMgTW9iaWxlcyAoUG9ydHJhaXQpXG4gICAgICAjI1NjcmVlbiA9IEIvdyAzMjBweCB0byA0NzlweFxuICAgIFxuICAgICovXG4gIEBtZWRpYSAobWluLXdpZHRoOiAzMjBweCkgYW5kIChtYXgtd2lkdGg6IDQ4MHB4KSB7XG4gICAgLmZvcm0tY29udGFpbmVyIHtcbiAgICAgIHdpZHRoOiA5NSU7XG4gICAgICBtYXJnaW46IGF1dG87XG4gICAgICBwYWRkaW5nLWJvdHRvbTogMjRweCAhaW1wb3J0YW50O1xuICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICBiYWNrZ3JvdW5kOiByZ2IoMjUzLCAyNTMsIDI1Myk7XG4gICAgfVxuICAgIC5idG4ge1xuICAgICAgZm9udC1zaXplOiAxZW07XG4gICAgfVxuICB9IiwiYm9keSB7XG4gIGZvbnQtZmFtaWx5OiBcIlJvYm90b1wiLCBzYW5zLXNlcmlmO1xuICBtYXJnaW46IDBweCAhaW1wb3J0YW50O1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuXG4uYWRkLWJ0biB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgcmlnaHQ6IDI1cHg7XG4gIGJvdHRvbTogMjBweDtcbn1cblxuLyoqIGZvcm0gKiovXG4uZm9ybS13cmFwZXIge1xuICB3aWR0aDogMTAwJTtcbiAgbWFyZ2luLXRvcDogMiU7XG59XG5cbi5mb3JtLWNvbnRhaW5lciB7XG4gIHdpZHRoOiAzNSU7XG4gIG1hcmdpbjogYXV0bztcbiAgcGFkZGluZy1ib3R0b206IDI0cHggIWltcG9ydGFudDtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGJhY2tncm91bmQ6ICNmZGZkZmQ7XG59XG5cbi5jYXJkIHtcbiAgYm9yZGVyLXJhZGl1czogMnB4O1xuICBib3gtc2hhZG93OiAwIDFweCAzcHggcmdiYSgwLCAwLCAwLCAwLjEyKSwgMCAxcHggMnB4IHJnYmEoMCwgMCwgMCwgMC4yNCk7XG4gIHRyYW5zaXRpb246IGFsbCAwLjNzIGN1YmljLWJlemllcigwLjI1LCAwLjgsIDAuMjUsIDEpO1xufVxuXG4vKiogZm9ybSBoZWFkZXIgKiovXG4uZm9ybS1oZWFkZXIge1xuICBwYWRkaW5nOiAyNHB4IDA7XG59XG5cbi5mb3JtLXRpdGxlIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXdlaWdodDogMjAwO1xuICBmb250LXNpemU6IDIuNWVtO1xufVxuXG4ubWFpbi1sb2NrLWljb24ge1xuICB3aWR0aDogMzUlO1xuICBtYXJnaW46IDJweCBhdXRvO1xuICBkaXNwbGF5OiBibG9jaztcbn1cblxuLyoqIGZvcm0gYm9keSAqKi9cbi5mb3JtLWJvZHkge1xuICBwYWRkaW5nOiAwIDI0cHg7XG59XG5cbi5qdXN0aWZpZXIge1xuICB3aWR0aDogMTAwJTtcbn1cblxuLmZvcm0taW5wdXQge1xuICBtYXJnaW4tdG9wOiAyNHB4O1xufVxuXG4vKiogZm9ybSBmb290ZXIgKiovXG4uZm9ybS1mb290ZXIge1xuICBwYWRkaW5nOiAyNHB4O1xufVxuXG4uYnRuIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nOiA1JSAhaW1wb3J0YW50O1xuICBmb250LXNpemU6IDEuNWVtO1xuICBmb250LXdlaWdodDogMjAwO1xuICBtYXJnaW4tdG9wOiAxOHB4O1xufVxuXG4uY3VzdG9tLWJ0biB7XG4gIG1hcmdpbi1ib3R0b206IDE1cHg7XG4gIGJhY2tncm91bmQ6ICMzZjUxYjU7XG4gIGNvbG9yOiAjZmZmO1xufVxuXG4uZ29vZ2xlLWljb24ge1xuICB3aWR0aDogNiU7XG59XG5cbi50eHQge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGNvbG9yOiAjMzMzO1xuICBtYXJnaW46IDEwcHggYXV0byAhaW1wb3J0YW50O1xufVxuXG4uYWRkaXRpb25hbC1saW5rIHtcbiAgcGFkZGluZzogMTBweCBhdXRvO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbmEge1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIGNvbG9yOiAjMmE3ZGRiO1xufVxuXG4vKlxuICAjI0RldmljZSA9IERlc2t0b3BzXG4gICMjU2NyZWVuID0gMTI4MXB4IHRvIGhpZ2hlciByZXNvbHV0aW9uIGRlc2t0b3BzXG4qL1xuLyogXG4gICAgIyNEZXZpY2UgPSBMYXB0b3BzLCBEZXNrdG9wc1xuICAgICMjU2NyZWVuID0gQi93IDEwMjVweCB0byAxMjgwcHhcbiAqL1xuLyogXG4gICAgIyNEZXZpY2UgPSBUYWJsZXRzLCBJcGFkcyAocG9ydHJhaXQpXG4gICAgIyNTY3JlZW4gPSBCL3cgNzY4cHggdG8gMTAyNHB4XG4gICovXG5AbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIGFuZCAobWF4LXdpZHRoOiAxMDI0cHgpIHtcbiAgLmZvcm0tY29udGFpbmVyIHtcbiAgICB3aWR0aDogOTUlO1xuICAgIG1hcmdpbjogYXV0bztcbiAgICBwYWRkaW5nLWJvdHRvbTogMjRweCAhaW1wb3J0YW50O1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIGJhY2tncm91bmQ6ICNmZGZkZmQ7XG4gIH1cblxuICAuYnRuIHtcbiAgICBmb250LXNpemU6IDFlbTtcbiAgfVxufVxuLyogXG4gICAgIyNEZXZpY2UgPSBUYWJsZXRzLCBJcGFkcyAobGFuZHNjYXBlKVxuICAgICMjU2NyZWVuID0gQi93IDc2OHB4IHRvIDEwMjRweFxuICovXG4vKiBcbiAgICAjI0RldmljZSA9IExvdyBSZXNvbHV0aW9uIFRhYmxldHMsIE1vYmlsZXMgKExhbmRzY2FwZSlcbiAgICAjI1NjcmVlbiA9IEIvdyA0ODFweCB0byA3NjdweFxuXG4gICAqL1xuQG1lZGlhIChtaW4td2lkdGg6IDQ4MXB4KSBhbmQgKG1heC13aWR0aDogNzY3cHgpIHtcbiAgLmZvcm0tY29udGFpbmVyIHtcbiAgICB3aWR0aDogOTUlO1xuICAgIG1hcmdpbjogYXV0bztcbiAgICBwYWRkaW5nLWJvdHRvbTogMjRweCAhaW1wb3J0YW50O1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIGJhY2tncm91bmQ6ICNmZGZkZmQ7XG4gIH1cblxuICAuYnRuIHtcbiAgICBmb250LXNpemU6IDFlbTtcbiAgfVxufVxuLyogXG4gICAgIyNEZXZpY2UgPSBNb3N0IG9mIHRoZSBTbWFydHBob25lcyBNb2JpbGVzIChQb3J0cmFpdClcbiAgICAjI1NjcmVlbiA9IEIvdyAzMjBweCB0byA0NzlweFxuXG4gICovXG5AbWVkaWEgKG1pbi13aWR0aDogMzIwcHgpIGFuZCAobWF4LXdpZHRoOiA0ODBweCkge1xuICAuZm9ybS1jb250YWluZXIge1xuICAgIHdpZHRoOiA5NSU7XG4gICAgbWFyZ2luOiBhdXRvO1xuICAgIHBhZGRpbmctYm90dG9tOiAyNHB4ICFpbXBvcnRhbnQ7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgYmFja2dyb3VuZDogI2ZkZmRmZDtcbiAgfVxuXG4gIC5idG4ge1xuICAgIGZvbnQtc2l6ZTogMWVtO1xuICB9XG59Il19 */");

/***/ }),

/***/ "./src/app/components/register/register.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/register/register.component.ts ***!
  \***********************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm5/forms.js");
/* harmony import */ var _services_validation_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/validation.service */ "./src/app/services/validation.service.ts");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");






//import { Role } from '../entities/role';
var RegisterComponent = /** @class */ (function () {
    function RegisterComponent(userService, formBuilder, router, validationService) {
        this.userService = userService;
        this.formBuilder = formBuilder;
        this.router = router;
        this.validationService = validationService;
        this.email = '';
        this.createForm();
    }
    RegisterComponent.prototype.ngOnInit = function () {
    };
    RegisterComponent.prototype.register = function () {
        var _this = this;
        var loginFromForm = this.registerForm.value;
        this.error = this.validationService.validateRegisterForm(loginFromForm);
        if (this.error != null && this.error.length > 2) {
            console.log('error from form: ' + this.error);
            return;
        }
        else {
            this.userService.register(loginFromForm).subscribe(function (data) {
                _this.router.navigate(['login']);
            });
        }
    };
    RegisterComponent.prototype.createForm = function () {
        this.registerForm = this.formBuilder.group({
            email: [''],
            password: [''],
            retypePassword: ['']
        });
    };
    RegisterComponent.prototype.isEmailTaken = function () {
        var _this = this;
        this.error = '';
        var userFromForm = this.registerForm.value;
        var email = userFromForm.email;
        this.userService.isEmailTaken(userFromForm).subscribe(function (data) {
            if (data.result === 'true') {
                _this.error =
                    'Email already registered, please login or use forgot password ';
            }
        });
    };
    RegisterComponent.ctorParameters = function () { return [
        { type: _services_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
        { type: _services_validation_service__WEBPACK_IMPORTED_MODULE_3__["ValidationService"] }
    ]; };
    RegisterComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-register',
            template: __importDefault(__webpack_require__(/*! raw-loader!./register.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/register/register.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./register.component.scss */ "./src/app/components/register/register.component.scss")).default]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_services_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"],
            _services_validation_service__WEBPACK_IMPORTED_MODULE_3__["ValidationService"]])
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ }),

/***/ "./src/app/components/user/add-user/add-user.component.scss":
/*!******************************************************************!*\
  !*** ./src/app/components/user/add-user/add-user.component.scss ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvdXNlci9hZGQtdXNlci9hZGQtdXNlci5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/components/user/add-user/add-user.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/components/user/add-user/add-user.component.ts ***!
  \****************************************************************/
/*! exports provided: AddUserComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddUserComponent", function() { return AddUserComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");
/* harmony import */ var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var src_app_services_validation_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/validation.service */ "./src/app/services/validation.service.ts");
/* harmony import */ var src_app_models_login__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/models/login */ "./src/app/models/login.ts");







var AddUserComponent = /** @class */ (function () {
    function AddUserComponent(fb, userService, router, validationService) {
        this.fb = fb;
        this.userService = userService;
        this.router = router;
        this.validationService = validationService;
        this.newUserFormGroup = null;
        this.error = '';
        this.email = '';
        this.isEmailAlreadyTaken = false;
    }
    AddUserComponent.prototype.ngOnInit = function () {
        this.newUserFormGroup = this.buildForm();
    };
    AddUserComponent.prototype.addUser = function () {
        var _this = this;
        var userFromForm = this.newUserFormGroup.value;
        this.error = this.validationService.validateNewUserForm(userFromForm);
        if (this.error != null && this.error.length > 2) {
            console.log('error from form: ' + this.error);
            return;
        }
        else {
            this.userService.save(userFromForm).subscribe(function (data) {
                _this.router.navigate(['users']);
                console.log('the answer from server is: ' + data.name);
            });
        }
    };
    AddUserComponent.prototype.buildForm = function () {
        return this.fb.group({
            name: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            email: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            phone: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
        });
    };
    AddUserComponent.prototype.isEmailTaken = function () {
        var _this = this;
        this.error = '';
        var userFromForm = this.newUserFormGroup.value;
        var email = userFromForm.email;
        var login = new src_app_models_login__WEBPACK_IMPORTED_MODULE_6__["Login"](email, '', '', false);
        this.userService.isEmailTaken(login).subscribe(function (data) {
            if (data.result === 'true') {
                _this.isEmailAlreadyTaken = true;
                _this.error = 'this email is alredy registered, please login or reset the password';
            }
        });
    };
    AddUserComponent.ctorParameters = function () { return [
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
        { type: src_app_services_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
        { type: src_app_services_validation_service__WEBPACK_IMPORTED_MODULE_5__["ValidationService"] }
    ]; };
    AddUserComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-add-user',
            template: __importDefault(__webpack_require__(/*! raw-loader!./add-user.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/user/add-user/add-user.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./add-user.component.scss */ "./src/app/components/user/add-user/add-user.component.scss")).default]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            src_app_services_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            src_app_services_validation_service__WEBPACK_IMPORTED_MODULE_5__["ValidationService"]])
    ], AddUserComponent);
    return AddUserComponent;
}());



/***/ }),

/***/ "./src/app/components/user/edit-user/edit-user.component.scss":
/*!********************************************************************!*\
  !*** ./src/app/components/user/edit-user/edit-user.component.scss ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".invisible {\n  display: block;\n  visibility: hidden;\n  height: 0;\n  width: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2V5YWwvV2ViRGV2ZWxvcG1lbnQvRnJvbnRFbmQvcHJvamVjdDA1L2FuZ3VsYXItbWF0ZXJpYWwtdjEvc3JjL2FwcC9jb21wb25lbnRzL3VzZXIvZWRpdC11c2VyL2VkaXQtdXNlci5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy91c2VyL2VkaXQtdXNlci9lZGl0LXVzZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxTQUFBO0VBQ0EsUUFBQTtBQ0NKIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy91c2VyL2VkaXQtdXNlci9lZGl0LXVzZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaW52aXNpYmxle1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcbiAgICBoZWlnaHQ6IDA7XG4gICAgd2lkdGg6IDA7XG59IiwiLmludmlzaWJsZSB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB2aXNpYmlsaXR5OiBoaWRkZW47XG4gIGhlaWdodDogMDtcbiAgd2lkdGg6IDA7XG59Il19 */");

/***/ }),

/***/ "./src/app/components/user/edit-user/edit-user.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/components/user/edit-user/edit-user.component.ts ***!
  \******************************************************************/
/*! exports provided: EditUserComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditUserComponent", function() { return EditUserComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");
/* harmony import */ var src_app_models_user__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/models/user */ "./src/app/models/user.ts");
/* harmony import */ var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm5/forms.js");
/* harmony import */ var src_app_services_validation_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/validation.service */ "./src/app/services/validation.service.ts");








var EditUserComponent = /** @class */ (function () {
    function EditUserComponent(route, userService, fb, validationService, router) {
        this.route = route;
        this.userService = userService;
        this.fb = fb;
        this.validationService = validationService;
        this.router = router;
        this.user = new src_app_models_user__WEBPACK_IMPORTED_MODULE_3__["User"]();
        this.editForm = null;
        this.error = '';
    }
    EditUserComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.editForm = this.buildForm();
        var id = this.route.snapshot.params.id;
        console.log(' the id is: ' + id);
        this.userService.getUserById(id)
            .subscribe(function (data) {
            _this.user.name = data.name;
            _this.user.phone = data.phone;
            _this.user.email = data.email;
            _this.user.id = id;
            _this.editForm.setValue(_this.user);
        });
    };
    EditUserComponent.prototype.editUser = function () {
        var _this = this;
        var userFromForm = this.editForm.value;
        this.error = this.validationService.validateNewUserForm(userFromForm);
        if (this.error != null && this.error.length > 2) {
            console.log('error from form: ' + this.error);
            return;
        }
        else {
            this.userService.updateUser(userFromForm).subscribe(function (data) {
                _this.router.navigate(['users']);
                console.log('the answer from server is: ' + data.message);
            });
        }
    };
    EditUserComponent.prototype.buildForm = function () {
        return this.fb.group({
            name: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
            email: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
            phone: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
            id: [null]
        });
    };
    EditUserComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
        { type: src_app_services_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"] },
        { type: src_app_services_validation_service__WEBPACK_IMPORTED_MODULE_6__["ValidationService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
    ]; };
    EditUserComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-edit-user',
            template: __importDefault(__webpack_require__(/*! raw-loader!./edit-user.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/user/edit-user/edit-user.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./edit-user.component.scss */ "./src/app/components/user/edit-user/edit-user.component.scss")).default]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            src_app_services_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"],
            src_app_services_validation_service__WEBPACK_IMPORTED_MODULE_6__["ValidationService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], EditUserComponent);
    return EditUserComponent;
}());



/***/ }),

/***/ "./src/app/components/user/user-modal/user-modal.component.scss":
/*!**********************************************************************!*\
  !*** ./src/app/components/user/user-modal/user-modal.component.scss ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvdXNlci91c2VyLW1vZGFsL3VzZXItbW9kYWwuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/components/user/user-modal/user-modal.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/components/user/user-modal/user-modal.component.ts ***!
  \********************************************************************/
/*! exports provided: UserModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserModalComponent", function() { return UserModalComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/__ivy_ngcc__/esm5/material.es5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm5/forms.js");




var UserModalComponent = /** @class */ (function () {
    function UserModalComponent(dialogRef, fb, data) {
        this.dialogRef = dialogRef;
        this.fb = fb;
        this.data = data;
        this.id = data.id;
    }
    UserModalComponent.prototype.ngOnInit = function () {
        this.form = this.fb.group({
            id: [this.id, []]
        });
    };
    UserModalComponent.prototype.onNoClick = function () {
        this.dialogRef.close();
    };
    UserModalComponent.prototype.save = function () {
        // console.log(" en la ventana id: " + this.form.value.id);
        this.dialogRef.close(this.form.value);
    };
    UserModalComponent.ctorParameters = function () { return [
        { type: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] },
        { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"],] }] }
    ]; };
    UserModalComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-user-modal',
            template: __importDefault(__webpack_require__(/*! raw-loader!./user-modal.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/user/user-modal/user-modal.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./user-modal.component.scss */ "./src/app/components/user/user-modal/user-modal.component.scss")).default]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"])),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"], Object])
    ], UserModalComponent);
    return UserModalComponent;
}());



/***/ }),

/***/ "./src/app/components/user/user.component.scss":
/*!*****************************************************!*\
  !*** ./src/app/components/user/user.component.scss ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvdXNlci91c2VyLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/components/user/user.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/user/user.component.ts ***!
  \***************************************************/
/*! exports provided: UserComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserComponent", function() { return UserComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/__ivy_ngcc__/esm5/material.es5.js");
/* harmony import */ var src_app_components_user_user_modal_user_modal_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/components/user/user-modal/user-modal.component */ "./src/app/components/user/user-modal/user-modal.component.ts");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/__ivy_ngcc__/esm5/table.es5.js");







var UserComponent = /** @class */ (function () {
    function UserComponent(userService, router, dialog) {
        this.userService = userService;
        this.router = router;
        this.dialog = dialog;
        this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_6__["MatTableDataSource"]([]);
    }
    UserComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.userService.getUsers().subscribe(function (data) {
            _this.dataSource.data = data;
        });
    };
    UserComponent.prototype.refresh = function () {
        var _this = this;
        this.userService.getUsers().subscribe(function (data) {
            _this.dataSource.data = data;
        });
    };
    UserComponent.prototype.openDialog = function (id) {
        var _this = this;
        var dialogRef = this.dialog.open(src_app_components_user_user_modal_user_modal_component__WEBPACK_IMPORTED_MODULE_5__["UserModalComponent"], {
            width: '300px',
            data: {
                id: id
            }
        });
        dialogRef.afterClosed().subscribe(function (data) {
            if (data) {
                _this.yesDelete(data.id);
            }
        });
    };
    UserComponent.prototype.onEditClick = function (id) {
        console.log('edit id: ' + id);
        this.router.navigate(['editUser/' + id]);
    };
    Object.defineProperty(UserComponent.prototype, "columns", {
        get: function () {
            // return a string array of the columns in the table
            // the order of these values will be the order your columns show up in
            return ['name', 'email', 'phone', 'edit', 'delete'];
        },
        enumerable: true,
        configurable: true
    });
    UserComponent.prototype.yesDelete = function (id) {
        var _this = this;
        this.userService.delete(id).subscribe(function (data) {
            console.log('Data: ' + data.message);
            if (data.message === 200) {
                _this.deleteFromTable(id);
            }
        });
    };
    UserComponent.prototype.deleteFromTable = function (id) {
        this.dataSource.data.splice(+id, 1);
        this.refresh();
    };
    UserComponent.ctorParameters = function () { return [
        { type: src_app_services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
        { type: _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatDialog"] }
    ]; };
    UserComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-user',
            template: __importDefault(__webpack_require__(/*! raw-loader!./user.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/user/user.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./user.component.scss */ "./src/app/components/user/user.component.scss")).default]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [src_app_services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatDialog"]])
    ], UserComponent);
    return UserComponent;
}());



/***/ }),

/***/ "./src/app/containers/dashboard-container/dashboard-container.component.scss":
/*!***********************************************************************************!*\
  !*** ./src/app/containers/dashboard-container/dashboard-container.component.scss ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbnRhaW5lcnMvZGFzaGJvYXJkLWNvbnRhaW5lci9kYXNoYm9hcmQtY29udGFpbmVyLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/containers/dashboard-container/dashboard-container.component.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/containers/dashboard-container/dashboard-container.component.ts ***!
  \*********************************************************************************/
/*! exports provided: DashboardContainerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardContainerComponent", function() { return DashboardContainerComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");



var DashboardContainerComponent = /** @class */ (function () {
    function DashboardContainerComponent() {
        this.lastTransaction$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])({
            id: 1,
            transactionDate: new Date(),
            title: 'Gas',
            amount: 25.0,
            transactionType: 'CREDIT',
            paymentType: 'DEBIT'
        });
    }
    DashboardContainerComponent.prototype.ngOnInit = function () { };
    DashboardContainerComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-dashboard-container',
            template: __importDefault(__webpack_require__(/*! raw-loader!./dashboard-container.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/containers/dashboard-container/dashboard-container.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./dashboard-container.component.scss */ "./src/app/containers/dashboard-container/dashboard-container.component.scss")).default]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
    ], DashboardContainerComponent);
    return DashboardContainerComponent;
}());



/***/ }),

/***/ "./src/app/containers/index.ts":
/*!*************************************!*\
  !*** ./src/app/containers/index.ts ***!
  \*************************************/
/*! exports provided: containers, DashboardContainerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "containers", function() { return containers; });
/* harmony import */ var _dashboard_container_dashboard_container_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dashboard-container/dashboard-container.component */ "./src/app/containers/dashboard-container/dashboard-container.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DashboardContainerComponent", function() { return _dashboard_container_dashboard_container_component__WEBPACK_IMPORTED_MODULE_0__["DashboardContainerComponent"]; });

var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};

var containers = [_dashboard_container_dashboard_container_component__WEBPACK_IMPORTED_MODULE_0__["DashboardContainerComponent"]];



/***/ }),

/***/ "./src/app/models/credentials.ts":
/*!***************************************!*\
  !*** ./src/app/models/credentials.ts ***!
  \***************************************/
/*! exports provided: Credentials */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Credentials", function() { return Credentials; });
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};
var Credentials = /** @class */ (function () {
    function Credentials(username, token, role) {
        this.username = username;
        this.token = token;
        this.role = role;
    }
    return Credentials;
}());



/***/ }),

/***/ "./src/app/models/login.ts":
/*!*********************************!*\
  !*** ./src/app/models/login.ts ***!
  \*********************************/
/*! exports provided: Login */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Login", function() { return Login; });
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};
var Login = /** @class */ (function () {
    function Login(email, password, retypePassword, rememberMe) {
        this.email = email;
        this.password = password;
        this.retypePassword = retypePassword;
        this.rememberMe = rememberMe;
    }
    return Login;
}());



/***/ }),

/***/ "./src/app/models/role.ts":
/*!********************************!*\
  !*** ./src/app/models/role.ts ***!
  \********************************/
/*! exports provided: Role */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Role", function() { return Role; });
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};
var Role;
(function (Role) {
    Role["USER"] = "USER";
    Role["ADMIN"] = "ADMIN";
})(Role || (Role = {}));


/***/ }),

/***/ "./src/app/models/user.ts":
/*!********************************!*\
  !*** ./src/app/models/user.ts ***!
  \********************************/
/*! exports provided: User */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "User", function() { return User; });
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};
var User = /** @class */ (function () {
    function User() {
    }
    return User;
}());



/***/ }),

/***/ "./src/app/services/credentials.service.ts":
/*!*************************************************!*\
  !*** ./src/app/services/credentials.service.ts ***!
  \*************************************************/
/*! exports provided: CredentialsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CredentialsService", function() { return CredentialsService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");



var credentialsKey = 'credentials';
var nameKey = 'name';
/**
 * Provides storage for authentication credentials.
 * The Credentials interface should be replaced with proper implementation.
 */
var CredentialsService = /** @class */ (function () {
    function CredentialsService() {
        this._credentials = null;
        this.credentialsE = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.credentialEmitter = this.credentialsE.asObservable();
        var savedCredentials = sessionStorage.getItem(credentialsKey) || localStorage.getItem(credentialsKey);
        if (savedCredentials) {
            this._credentials = JSON.parse(savedCredentials);
        }
    }
    CredentialsService.prototype.credentialsEEmitChange = function (cre) {
        this.credentialsE.next(cre);
    };
    CredentialsService.prototype.isAuthenticated = function () {
        if (this._credentials !== null) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(true);
        }
        else {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(false);
        }
    };
    CredentialsService.prototype.isLogged = function () {
        if (this._credentials !== null) {
            return true;
        }
        else {
            return false;
        }
    };
    CredentialsService.prototype.isAdmin = function () {
        if (this.getRole() === 'ADMIN') {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(true);
        }
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(false);
    };
    CredentialsService.prototype.admin = function () {
        if (this.getRole() === 'ADMIN') {
            return true;
        }
        return false;
    };
    CredentialsService.prototype.getRole = function () {
        if (this._credentials) {
            return this.credentials.role;
        }
        return null;
    };
    Object.defineProperty(CredentialsService.prototype, "credentials", {
        /**
         * Gets the user credentials.
         * @return The user credentials or null if the user is not authenticated.
         */
        get: function () {
            return this._credentials;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Sets the user credentials.
     * The credentials may be persisted across sessions by setting the `remember` parameter to true.
     * Otherwise, the credentials are only persisted for the current session.
     * @param credentials The user credentials.
     * @param remember True to remember credentials across sessions.
     */
    CredentialsService.prototype.setCredentials = function (credentials) {
        this._credentials = credentials || null;
        var remember = true;
        if (credentials) {
            var storage = remember ? localStorage : sessionStorage;
            storage.setItem(credentialsKey, JSON.stringify(credentials));
        }
        else {
            sessionStorage.removeItem(credentialsKey);
            localStorage.removeItem(credentialsKey);
        }
    };
    /**
     * Logs out the user and clear credentials.
     * @return True if the user was logged out successfully.
     */
    CredentialsService.prototype.logout = function () {
        // Customize credentials invalidation here
        this.setCredentials();
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(true);
    };
    CredentialsService.prototype.setName = function (name) {
        localStorage.setItem(nameKey, name);
    };
    CredentialsService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
    ], CredentialsService);
    return CredentialsService;
}());



/***/ }),

/***/ "./src/app/services/http-custom.service.ts":
/*!*************************************************!*\
  !*** ./src/app/services/http-custom.service.ts ***!
  \*************************************************/
/*! exports provided: HttpCustomService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpCustomService", function() { return HttpCustomService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/http.js");
/* harmony import */ var _credentials_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./credentials.service */ "./src/app/services/credentials.service.ts");




var HttpCustomService = /** @class */ (function () {
    function HttpCustomService(http, credentialsService) {
        this.http = http;
        this.credentialsService = credentialsService;
    }
    // console.log('the Credentials: ' + this.credentialJson);
    HttpCustomService.prototype.createAuthorizationHeader = function (headers) {
        headers.append('useremail', 'myEmail ');
    };
    HttpCustomService.prototype.get = function (url) {
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ useremail: 'myEmail ' });
        // let httpOptions={ headers: new HttpHeaders({ 'Content-Type': 'application/json'})};
        // httpOptions.headers = httpOptions.headers.append('Token', 'miToken');
        // this.createAuthorizationHeader(headers);
        // {headers: new HttpHeaders().set('UserEmail', 'email' ) }
        return this.http.get(url, { headers: headers });
    };
    HttpCustomService.prototype.post = function (url, data) {
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        this.createAuthorizationHeader(headers);
        return this.http.post(url, data, {
            headers: headers
        });
    };
    HttpCustomService.prototype.myCredentials = function () {
        var currentUserCredentials = this.credentialsService.credentials;
        var credentialJson = JSON.stringify(currentUserCredentials);
        return credentialJson;
    };
    HttpCustomService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
        { type: _credentials_service__WEBPACK_IMPORTED_MODULE_3__["CredentialsService"] }
    ]; };
    HttpCustomService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"],
            _credentials_service__WEBPACK_IMPORTED_MODULE_3__["CredentialsService"]])
    ], HttpCustomService);
    return HttpCustomService;
}());



/***/ }),

/***/ "./src/app/services/login.service.ts":
/*!*******************************************!*\
  !*** ./src/app/services/login.service.ts ***!
  \*******************************************/
/*! exports provided: LoginService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginService", function() { return LoginService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");






var LoginService = /** @class */ (function () {
    function LoginService(httpClient) {
        this.httpClient = httpClient;
        this.credentials = { username: '', token: '' };
    }
    LoginService.prototype.authenticate = function (context) {
        return this.httpClient
            .post(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].domain + "/authenticate", context)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["retry"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
    };
    LoginService.prototype.handleError = function (error) {
        var errorMessage = '';
        if (error.error instanceof ErrorEvent) {
            // Get client-side error
            errorMessage = error.error.message;
        }
        else {
            // Get server-side error
            errorMessage = "Error Code: " + error.status + "\nMessage: " + error.message;
        }
        window.alert(errorMessage);
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["throwError"])(errorMessage);
    };
    LoginService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
    ]; };
    LoginService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], LoginService);
    return LoginService;
}());



/***/ }),

/***/ "./src/app/services/user.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/user.service.ts ***!
  \******************************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _http_custom_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./http-custom.service */ "./src/app/services/http-custom.service.ts");







var UserService = /** @class */ (function () {
    function UserService(http, httpCustom) {
        this.http = http;
        this.httpCustom = httpCustom;
    }
    UserService.prototype.getUsers = function () {
        return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].secureUserApi + "/findAll");
    };
    UserService.prototype.save = function (user) {
        console.log(JSON.stringify(user));
        return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].secureUserApi + "/create", user);
    };
    UserService.prototype.register = function (login) {
        console.log(JSON.stringify(login));
        return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].domain + "/register", login);
    };
    UserService.prototype.delete = function (id) {
        return this.http.delete(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].secureUserApi + "/deleteUser/" + id);
    };
    UserService.prototype.getUserById = function (id) {
        return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].secureUserApi + "/getUser/" + id);
    };
    UserService.prototype.updateUser = function (user) {
        return this.http
            .put(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].secureUserApi + "/updateUser/" + user.id, user)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["retry"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(this.handleError));
    };
    UserService.prototype.isEmailTaken = function (login) {
        return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].domain + "/emailTaken/", login);
    };
    UserService.prototype.handleError = function (error) {
        var errorMessage = '';
        if (error.error instanceof ErrorEvent) {
            // Get client-side error
            errorMessage = error.error.message;
        }
        else {
            // Get server-side error
            errorMessage = "Error Code: " + error.status + "\nMessage: " + error.message;
        }
        window.alert(errorMessage);
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["throwError"])(errorMessage);
    };
    UserService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
        { type: _http_custom_service__WEBPACK_IMPORTED_MODULE_6__["HttpCustomService"] }
    ]; };
    UserService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"],
            _http_custom_service__WEBPACK_IMPORTED_MODULE_6__["HttpCustomService"]])
    ], UserService);
    return UserService;
}());



/***/ }),

/***/ "./src/app/services/validation.service.ts":
/*!************************************************!*\
  !*** ./src/app/services/validation.service.ts ***!
  \************************************************/
/*! exports provided: ValidationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ValidationService", function() { return ValidationService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");


var ValidationService = /** @class */ (function () {
    function ValidationService() {
    }
    ValidationService.prototype.validateNewUserForm = function (user) {
        var error = '';
        if (!user.email) {
            error = ' email is required ';
        }
        if (this.emailValidator(user.email)) {
            error = (error ? '' : error) + ' email is not valid ';
        }
        return error;
    };
    ValidationService.prototype.validateRegisterForm = function (login) {
        var error = '';
        if (!login.email) {
            error = ' email is required ';
        }
        if (this.emailValidator(login.email)) {
            error = (error ? '' : error) + ' email is not valid ';
        }
        if (this.passwordValidator(login.password)) {
            error = (error ? '' : error) + ' password is not valid , must have between 6 and 17 characters and at least one number';
        }
        if (this.retypePassword(login.password, login.retypePassword)) {
            error =
                (error ? '' : error) + " password and retype password don't match ";
        }
        // TODO validate password
        return error;
    };
    ValidationService.getValidatorErrorMessage = function (validatorName, validatorValue) {
        var config = {
            required: 'Required',
            invalidEmailAddress: 'Invalid email address',
            invalidPassword: 'Invalid password. Password must be at least 6 characters long, and contain a number.',
            minlength: "Minimum length " + validatorValue.requiredLength
        };
        return config[validatorName];
    };
    ValidationService.prototype.emailValidator = function (email) {
        // RFC 2822 compliant regex
        if (email.match(/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/)) {
            return null;
        }
        else {
            return { invalidEmailAddress: true };
        }
    };
    ValidationService.prototype.passwordValidator = function (password) {
        // {6,17}           - Assert password is between 6 and 17 characters
        // (?=.*[0-9])       - Assert a string has at least one number
        if (password.match(/^(?=.*[0-9])[a-zA-Z0-9!@#$%^&*]{6,100}$/)) {
            return null;
        }
        else {
            return { invalidPassword: true };
        }
    };
    ValidationService.prototype.retypePassword = function (password, retypePassword) {
        if (password === retypePassword) {
            return null;
        }
        else {
            return { invalidRetpePassword: true };
        }
    };
    ValidationService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
    ], ValidationService);
    return ValidationService;
}());



/***/ }),

/***/ "./src/app/utils/ErrorInterceptor.ts":
/*!*******************************************!*\
  !*** ./src/app/utils/ErrorInterceptor.ts ***!
  \*******************************************/
/*! exports provided: ErrorInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorInterceptor", function() { return ErrorInterceptor; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _services_credentials_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/credentials.service */ "./src/app/services/credentials.service.ts");





var ErrorInterceptor = /** @class */ (function () {
    function ErrorInterceptor(credentialsService) {
        this.credentialsService = credentialsService;
    }
    ErrorInterceptor.prototype.intercept = function (request, next) {
        var _this = this;
        return next.handle(request).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (err) {
            if ([401, 403].indexOf(err.status) !== -1) {
                // auto logout if 401 Unauthorized or 403 Forbidden response returned from api
                _this.credentialsService.logout();
                location.reload(true);
            }
            var error = err.error.message || err.statusText;
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(error);
        }));
    };
    ErrorInterceptor.ctorParameters = function () { return [
        { type: _services_credentials_service__WEBPACK_IMPORTED_MODULE_4__["CredentialsService"] }
    ]; };
    ErrorInterceptor = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_services_credentials_service__WEBPACK_IMPORTED_MODULE_4__["CredentialsService"]])
    ], ErrorInterceptor);
    return ErrorInterceptor;
}());



/***/ }),

/***/ "./src/app/utils/jwt.interceptor.ts":
/*!******************************************!*\
  !*** ./src/app/utils/jwt.interceptor.ts ***!
  \******************************************/
/*! exports provided: JwtInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JwtInterceptor", function() { return JwtInterceptor; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var src_app_services_credentials_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/credentials.service */ "./src/app/services/credentials.service.ts");



var JwtInterceptor = /** @class */ (function () {
    function JwtInterceptor(credentialsService) {
        this.credentialsService = credentialsService;
        this.credentialJson = 'defaul-Value';
    }
    JwtInterceptor.prototype.intercept = function (request, next) {
        // add auth header with jwt if user is logged in and request is to api url
        var currentUserCredentials = this.credentialsService.credentials;
        if (currentUserCredentials) {
            this.credentialJson = JSON.stringify(currentUserCredentials);
            request = request.clone({
                setHeaders: {
                    Authorization: "" + this.credentialJson
                }
            });
        }
        return next.handle(request);
    };
    JwtInterceptor.ctorParameters = function () { return [
        { type: src_app_services_credentials_service__WEBPACK_IMPORTED_MODULE_2__["CredentialsService"] }
    ]; };
    JwtInterceptor = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [src_app_services_credentials_service__WEBPACK_IMPORTED_MODULE_2__["CredentialsService"]])
    ], JwtInterceptor);
    return JwtInterceptor;
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
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};
var environment = {
    production: false,
    secureUserApi: 'http://localhost:8080/secure/user',
    secureProductApi: 'http://localhost:8080/secure/product',
    domain: 'http://localhost:8080'
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
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/__ivy_ngcc__/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ "./src/material-design/material-design.module.ts":
/*!*******************************************************!*\
  !*** ./src/material-design/material-design.module.ts ***!
  \*******************************************************/
/*! exports provided: MaterialDesignModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaterialDesignModule", function() { return MaterialDesignModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/esm5/button.es5.js");
/* harmony import */ var _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/button-toggle */ "./node_modules/@angular/material/__ivy_ngcc__/esm5/button-toggle.es5.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/__ivy_ngcc__/esm5/card.es5.js");
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/checkbox */ "./node_modules/@angular/material/__ivy_ngcc__/esm5/checkbox.es5.js");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/core */ "./node_modules/@angular/material/__ivy_ngcc__/esm5/core.es5.js");
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/datepicker */ "./node_modules/@angular/material/__ivy_ngcc__/esm5/datepicker.es5.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/__ivy_ngcc__/esm5/dialog.es5.js");
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/expansion */ "./node_modules/@angular/material/__ivy_ngcc__/esm5/expansion.es5.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/__ivy_ngcc__/esm5/icon.es5.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/__ivy_ngcc__/esm5/input.es5.js");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/list */ "./node_modules/@angular/material/__ivy_ngcc__/esm5/list.es5.js");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/menu */ "./node_modules/@angular/material/__ivy_ngcc__/esm5/menu.es5.js");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/paginator */ "./node_modules/@angular/material/__ivy_ngcc__/esm5/paginator.es5.js");
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/progress-bar */ "./node_modules/@angular/material/__ivy_ngcc__/esm5/progress-bar.es5.js");
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/progress-spinner */ "./node_modules/@angular/material/__ivy_ngcc__/esm5/progress-spinner.es5.js");
/* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/radio */ "./node_modules/@angular/material/__ivy_ngcc__/esm5/radio.es5.js");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/select */ "./node_modules/@angular/material/__ivy_ngcc__/esm5/select.es5.js");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/sidenav */ "./node_modules/@angular/material/__ivy_ngcc__/esm5/sidenav.es5.js");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/__ivy_ngcc__/esm5/snack-bar.es5.js");
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/sort */ "./node_modules/@angular/material/__ivy_ngcc__/esm5/sort.es5.js");
/* harmony import */ var _angular_material_stepper__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/stepper */ "./node_modules/@angular/material/__ivy_ngcc__/esm5/stepper.es5.js");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/__ivy_ngcc__/esm5/table.es5.js");
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/material/tabs */ "./node_modules/@angular/material/__ivy_ngcc__/esm5/tabs.es5.js");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/material/toolbar */ "./node_modules/@angular/material/__ivy_ngcc__/esm5/toolbar.es5.js");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/material/tooltip */ "./node_modules/@angular/material/__ivy_ngcc__/esm5/tooltip.es5.js");
/* harmony import */ var _angular_cdk_table__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/cdk/table */ "./node_modules/@angular/cdk/__ivy_ngcc__/esm5/table.es5.js");




























var modules = [
    _angular_material_button__WEBPACK_IMPORTED_MODULE_2__["MatButtonModule"],
    _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_5__["MatCheckboxModule"],
    _angular_material_select__WEBPACK_IMPORTED_MODULE_18__["MatSelectModule"],
    _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_25__["MatToolbarModule"],
    _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_19__["MatSidenavModule"],
    _angular_material_menu__WEBPACK_IMPORTED_MODULE_13__["MatMenuModule"],
    _angular_material_tabs__WEBPACK_IMPORTED_MODULE_24__["MatTabsModule"],
    _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__["MatIconModule"],
    _angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCardModule"],
    _angular_material_list__WEBPACK_IMPORTED_MODULE_12__["MatListModule"],
    _angular_material_table__WEBPACK_IMPORTED_MODULE_23__["MatTableModule"],
    _angular_cdk_table__WEBPACK_IMPORTED_MODULE_27__["CdkTableModule"],
    _angular_material_input__WEBPACK_IMPORTED_MODULE_11__["MatInputModule"],
    _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_7__["MatDatepickerModule"],
    _angular_material_core__WEBPACK_IMPORTED_MODULE_6__["MatNativeDateModule"],
    _angular_material_sort__WEBPACK_IMPORTED_MODULE_21__["MatSortModule"],
    _angular_material_paginator__WEBPACK_IMPORTED_MODULE_14__["MatPaginatorModule"],
    _angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__["MatDialogModule"],
    _angular_material_expansion__WEBPACK_IMPORTED_MODULE_9__["MatExpansionModule"],
    _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_16__["MatProgressSpinnerModule"],
    _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_15__["MatProgressBarModule"],
    _angular_material_stepper__WEBPACK_IMPORTED_MODULE_22__["MatStepperModule"],
    _angular_material_radio__WEBPACK_IMPORTED_MODULE_17__["MatRadioModule"],
    _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_26__["MatTooltipModule"],
    _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_3__["MatButtonToggleModule"],
    _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_20__["MatSnackBarModule"]
];
// Declare Module that imports/exports the @angular/material modules needed in the app
var MaterialDesignModule = /** @class */ (function () {
    function MaterialDesignModule() {
    }
    MaterialDesignModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__spreadArrays"])(modules),
            exports: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__spreadArrays"])(modules)
        })
    ], MaterialDesignModule);
    return MaterialDesignModule;
}());



/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/eyal/WebDevelopment/FrontEnd/project05/angular-material-v1/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map