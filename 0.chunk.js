webpackJsonp([0],{

/***/ "../../../../../src/app/auth/auth-guard.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__ = __webpack_require__("../../../../angularfire2/auth.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_do__ = __webpack_require__("../../../../rxjs/add/operator/do.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_do___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_do__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_take__ = __webpack_require__("../../../../rxjs/add/operator/take.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_take___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_take__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthGuardService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var AuthGuardService = (function () {
    function AuthGuardService(auth, router) {
        this.auth = auth;
        this.router = router;
    }
    AuthGuardService.prototype.canActivate = function (route, state) {
        var _this = this;
        return this.auth.authState
            .take(1)
            .map(function (authState) { return !!authState; })
            .do(function (auth) { return !auth ? _this.router.navigate(['/']) : true; });
    };
    return AuthGuardService;
}());
AuthGuardService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__["a" /* AngularFireAuth */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__["a" /* AngularFireAuth */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === "function" && _b || Object])
], AuthGuardService);

var _a, _b;
//# sourceMappingURL=auth-guard.service.js.map

/***/ }),

/***/ "../../../../../src/app/polls/my-polls/my-polls.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".list-group-item-action {\n    cursor: pointer;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/polls/my-polls/my-polls.component.html":
/***/ (function(module, exports) {

module.exports = "<h1>My Polls</h1>\n<p class=\"lead text-muted\">Select a poll to see the results and vote, or <a routerLink=\"/polls/new\">make a new poll</a>!</p>\n<hr/>\n<div class=\"list-group\">\n    <a class=\"list-group-item list-group-item-action\" [routerLink]=\"['/poll', poll.$key]\" *ngFor=\"let poll of polls;\" [@listItem] (@listItem.done)=\"doNext()\">{{poll.title}}</a>\n</div>"

/***/ }),

/***/ "../../../../../src/app/polls/my-polls/my-polls.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__polls_service__ = __webpack_require__("../../../../../src/app/polls/polls.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_animations__ = __webpack_require__("../../../animations/@angular/animations.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyPollsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MyPollsComponent = (function () {
    function MyPollsComponent(pollService) {
        this.pollService = pollService;
        this.next = 0;
        this.polls = [];
        this.totalPolls = [];
    }
    MyPollsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.subscription = this.pollService.getUserPolls().subscribe(function (polls) {
            if (_this.totalPolls.length !== polls.length) {
                _this.totalPolls = polls.reverse();
                _this.polls = [];
                _this.next = 0;
                _this.doNext();
            }
        });
    };
    MyPollsComponent.prototype.ngOnDestroy = function () {
        this.subscription.unsubscribe();
    };
    MyPollsComponent.prototype.doNext = function () {
        if (this.next < this.totalPolls.length) {
            this.polls.push(this.totalPolls[this.next++]);
        }
    };
    return MyPollsComponent;
}());
MyPollsComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-polls',
        template: __webpack_require__("../../../../../src/app/polls/my-polls/my-polls.component.html"),
        styles: [__webpack_require__("../../../../../src/app/polls/my-polls/my-polls.component.css")],
        animations: [
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["a" /* trigger */])('listItem', [
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["b" /* transition */])(':enter', [
                    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["c" /* style */])({ transform: 'translateY(-10px)', opacity: 0 }),
                    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["d" /* animate */])('200ms', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["c" /* style */])({ transform: 'translateY(0)', opacity: 1 }))
                ])
            ])
        ]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__polls_service__["a" /* PollsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__polls_service__["a" /* PollsService */]) === "function" && _a || Object])
], MyPollsComponent);

var _a;
//# sourceMappingURL=my-polls.component.js.map

/***/ }),

/***/ "../../../../../src/app/polls/new-poll/new-poll.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "button {\n    cursor: pointer;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/polls/new-poll/new-poll.component.html":
/***/ (function(module, exports) {

module.exports = "<h1>\n    New Poll</h1>\n<hr/>\n<form [formGroup]=\"pollForm\" (ngSubmit)=\"onSubmit()\">\n    <div class=\"form-group\">\n        <label for=\"title\">Title:</label>\n        <input type=\"text\" class=\"form-control\" id=\"title\" formControlName=\"title\" />\n    </div>\n    <div class=\"form-group\" formArrayName=\"options\">\n        <label for=\"options\">Options:</label>\n        <div *ngFor=\"let optionCtrl of getOptions(pollForm); let i = index\" [formGroupName]=\"i\" style=\"margin-top: 10px;\">\n            <div class=\"input-group\">\n                <input type=\"text\" class=\"form-control\" formControlName=\"name\" />\n                <span class=\"input-group-addon\" (click)=\"onDeleteOption(i)\" style=\"cursor: pointer\">\n                <i class=\"fa fa-trash-o\"></i>\n              </span>\n            </div>\n            <input type=\"hidden\" formControlName=\"votes\" value=\"0\" />\n        </div>\n        <hr/>\n        <div class=\"row text-right\">\n            <div class=\"col\">\n                <button type=\"button\" class=\"btn btn-success\" (click)=\"onAddOption()\"><i class=\"fa fa-plus\"></i> Add Option</button>\n            </div>\n        </div>\n    </div>\n    <button type=\"submit\" [disabled]=\"!isValid()\" class=\"btn btn-default\">Publish</button>\n</form>"

/***/ }),

/***/ "../../../../../src/app/polls/new-poll/new-poll.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__polls_service__ = __webpack_require__("../../../../../src/app/polls/polls.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng2_toastr_ng2_toastr__ = __webpack_require__("../../../../ng2-toastr/ng2-toastr.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng2_toastr_ng2_toastr___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_ng2_toastr_ng2_toastr__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewPollComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var NewPollComponent = (function () {
    function NewPollComponent(pollService, route, router, toastr) {
        this.pollService = pollService;
        this.route = route;
        this.router = router;
        this.toastr = toastr;
    }
    NewPollComponent.prototype.ngOnInit = function () {
        this.initForm();
    };
    NewPollComponent.prototype.getOptions = function (form) {
        return form.get('options').controls;
    };
    NewPollComponent.prototype.onDeleteOption = function (index) {
        this.pollForm.get('options').removeAt(index);
    };
    NewPollComponent.prototype.onAddOption = function () {
        this.pollForm.get('options').push(new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormGroup */]({
            'name': new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* FormControl */](null, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].required),
            'votes': new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* FormControl */](0, [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].required])
        }));
    };
    NewPollComponent.prototype.onSubmit = function () {
        var _this = this;
        this.pollService.savePoll(this.pollForm.value).then(function (response) {
            _this.toastr.success('Poll Published!', 'Success!');
            _this.router.navigate(['../'], { relativeTo: _this.route });
        }).catch(function (error) {
            _this.toastr.error(error.message, error.name);
        });
    };
    NewPollComponent.prototype.isValid = function () {
        return (this.pollForm.valid && this.getOptions(this.pollForm).length > 0);
    };
    NewPollComponent.prototype.initForm = function () {
        this.pollForm = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormGroup */]({
            'title': new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].required),
            'options': new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* FormArray */]([], __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].minLength(2))
        });
    };
    return NewPollComponent;
}());
NewPollComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-new-poll',
        template: __webpack_require__("../../../../../src/app/polls/new-poll/new-poll.component.html"),
        styles: [__webpack_require__("../../../../../src/app/polls/new-poll/new-poll.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__polls_service__["a" /* PollsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__polls_service__["a" /* PollsService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* ActivatedRoute */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* Router */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3_ng2_toastr_ng2_toastr__["ToastsManager"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_ng2_toastr_ng2_toastr__["ToastsManager"]) === "function" && _d || Object])
], NewPollComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=new-poll.component.js.map

/***/ }),

/***/ "../../../../../src/app/polls/polls-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__auth_auth_guard_service__ = __webpack_require__("../../../../../src/app/auth/auth-guard.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__new_poll_new_poll_component__ = __webpack_require__("../../../../../src/app/polls/new-poll/new-poll.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__my_polls_my_polls_component__ = __webpack_require__("../../../../../src/app/polls/my-polls/my-polls.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PollsRoutingModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var pollsRoutes = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_5__my_polls_my_polls_component__["a" /* MyPollsComponent */],
        canActivate: [__WEBPACK_IMPORTED_MODULE_3__auth_auth_guard_service__["a" /* AuthGuardService */]]
    },
    {
        path: 'new',
        component: __WEBPACK_IMPORTED_MODULE_4__new_poll_new_poll_component__["a" /* NewPollComponent */],
        canActivate: [__WEBPACK_IMPORTED_MODULE_3__auth_auth_guard_service__["a" /* AuthGuardService */]]
    },
];
var PollsRoutingModule = (function () {
    function PollsRoutingModule() {
    }
    return PollsRoutingModule;
}());
PollsRoutingModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* RouterModule */].forChild(pollsRoutes)
        ],
        exports: [__WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* RouterModule */]],
        declarations: [],
        providers: [
            __WEBPACK_IMPORTED_MODULE_3__auth_auth_guard_service__["a" /* AuthGuardService */]
        ]
    })
], PollsRoutingModule);

//# sourceMappingURL=polls-routing.module.js.map

/***/ }),

/***/ "../../../../../src/app/polls/polls.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__my_polls_my_polls_component__ = __webpack_require__("../../../../../src/app/polls/my-polls/my-polls.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__polls_routing_module__ = __webpack_require__("../../../../../src/app/polls/polls-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__new_poll_new_poll_component__ = __webpack_require__("../../../../../src/app/polls/new-poll/new-poll.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__polls_service__ = __webpack_require__("../../../../../src/app/polls/polls.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PollsModule", function() { return PollsModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var PollsModule = (function () {
    function PollsModule() {
    }
    return PollsModule;
}());
PollsModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
            __WEBPACK_IMPORTED_MODULE_5__angular_forms__["b" /* ReactiveFormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__polls_routing_module__["a" /* PollsRoutingModule */]
        ],
        declarations: [__WEBPACK_IMPORTED_MODULE_2__my_polls_my_polls_component__["a" /* MyPollsComponent */], __WEBPACK_IMPORTED_MODULE_4__new_poll_new_poll_component__["a" /* NewPollComponent */]],
        providers: [
            __WEBPACK_IMPORTED_MODULE_6__polls_service__["a" /* PollsService */]
        ]
    })
], PollsModule);

//# sourceMappingURL=polls.module.js.map

/***/ }),

/***/ "../../../../rxjs/add/operator/do.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var Observable_1 = __webpack_require__("../../../../rxjs/Observable.js");
var do_1 = __webpack_require__("../../../../rxjs/operator/do.js");
Observable_1.Observable.prototype.do = do_1._do;
Observable_1.Observable.prototype._do = do_1._do;
//# sourceMappingURL=do.js.map

/***/ }),

/***/ "../../../../rxjs/add/operator/map.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var Observable_1 = __webpack_require__("../../../../rxjs/Observable.js");
var map_1 = __webpack_require__("../../../../rxjs/operator/map.js");
Observable_1.Observable.prototype.map = map_1.map;
//# sourceMappingURL=map.js.map

/***/ }),

/***/ "../../../../rxjs/add/operator/take.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var Observable_1 = __webpack_require__("../../../../rxjs/Observable.js");
var take_1 = __webpack_require__("../../../../rxjs/operator/take.js");
Observable_1.Observable.prototype.take = take_1.take;
//# sourceMappingURL=take.js.map

/***/ }),

/***/ "../../../../rxjs/operator/take.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Subscriber_1 = __webpack_require__("../../../../rxjs/Subscriber.js");
var ArgumentOutOfRangeError_1 = __webpack_require__("../../../../rxjs/util/ArgumentOutOfRangeError.js");
var EmptyObservable_1 = __webpack_require__("../../../../rxjs/observable/EmptyObservable.js");
/**
 * Emits only the first `count` values emitted by the source Observable.
 *
 * <span class="informal">Takes the first `count` values from the source, then
 * completes.</span>
 *
 * <img src="./img/take.png" width="100%">
 *
 * `take` returns an Observable that emits only the first `count` values emitted
 * by the source Observable. If the source emits fewer than `count` values then
 * all of its values are emitted. After that, it completes, regardless if the
 * source completes.
 *
 * @example <caption>Take the first 5 seconds of an infinite 1-second interval Observable</caption>
 * var interval = Rx.Observable.interval(1000);
 * var five = interval.take(5);
 * five.subscribe(x => console.log(x));
 *
 * @see {@link takeLast}
 * @see {@link takeUntil}
 * @see {@link takeWhile}
 * @see {@link skip}
 *
 * @throws {ArgumentOutOfRangeError} When using `take(i)`, it delivers an
 * ArgumentOutOrRangeError to the Observer's `error` callback if `i < 0`.
 *
 * @param {number} count The maximum number of `next` values to emit.
 * @return {Observable<T>} An Observable that emits only the first `count`
 * values emitted by the source Observable, or all of the values from the source
 * if the source emits fewer than `count` values.
 * @method take
 * @owner Observable
 */
function take(count) {
    if (count === 0) {
        return new EmptyObservable_1.EmptyObservable();
    }
    else {
        return this.lift(new TakeOperator(count));
    }
}
exports.take = take;
var TakeOperator = (function () {
    function TakeOperator(total) {
        this.total = total;
        if (this.total < 0) {
            throw new ArgumentOutOfRangeError_1.ArgumentOutOfRangeError;
        }
    }
    TakeOperator.prototype.call = function (subscriber, source) {
        return source.subscribe(new TakeSubscriber(subscriber, this.total));
    };
    return TakeOperator;
}());
/**
 * We need this JSDoc comment for affecting ESDoc.
 * @ignore
 * @extends {Ignored}
 */
var TakeSubscriber = (function (_super) {
    __extends(TakeSubscriber, _super);
    function TakeSubscriber(destination, total) {
        _super.call(this, destination);
        this.total = total;
        this.count = 0;
    }
    TakeSubscriber.prototype._next = function (value) {
        var total = this.total;
        var count = ++this.count;
        if (count <= total) {
            this.destination.next(value);
            if (count === total) {
                this.destination.complete();
                this.unsubscribe();
            }
        }
    };
    return TakeSubscriber;
}(Subscriber_1.Subscriber));
//# sourceMappingURL=take.js.map

/***/ }),

/***/ "../../../../rxjs/util/ArgumentOutOfRangeError.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
/**
 * An error thrown when an element was queried at a certain index of an
 * Observable, but no such index or position exists in that sequence.
 *
 * @see {@link elementAt}
 * @see {@link take}
 * @see {@link takeLast}
 *
 * @class ArgumentOutOfRangeError
 */
var ArgumentOutOfRangeError = (function (_super) {
    __extends(ArgumentOutOfRangeError, _super);
    function ArgumentOutOfRangeError() {
        var err = _super.call(this, 'argument out of range');
        this.name = err.name = 'ArgumentOutOfRangeError';
        this.stack = err.stack;
        this.message = err.message;
    }
    return ArgumentOutOfRangeError;
}(Error));
exports.ArgumentOutOfRangeError = ArgumentOutOfRangeError;
//# sourceMappingURL=ArgumentOutOfRangeError.js.map

/***/ })

});
//# sourceMappingURL=0.chunk.js.map