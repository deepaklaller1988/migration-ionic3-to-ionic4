(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~components-chat-chat-module~components-message-message-module~components-post-post-module~ho~b6f0fa38"],{

/***/ "./node_modules/ngx-moment/fesm2015/ngx-moment.js":
/*!********************************************************!*\
  !*** ./node_modules/ngx-moment/fesm2015/ngx-moment.js ***!
  \********************************************************/
/*! exports provided: AddPipe, CalendarPipe, DateFormatPipe, DifferencePipe, DurationPipe, FromUnixPipe, ParsePipe, MomentModule, SubtractPipe, TimeAgoPipe, UtcPipe, FromUtcPipe, LocalTimePipe, LocalePipe, ParseZonePipe, IsBeforePipe, IsAfterPipe, NGX_MOMENT_OPTIONS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddPipe", function() { return AddPipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CalendarPipe", function() { return CalendarPipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DateFormatPipe", function() { return DateFormatPipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DifferencePipe", function() { return DifferencePipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DurationPipe", function() { return DurationPipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FromUnixPipe", function() { return FromUnixPipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ParsePipe", function() { return ParsePipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MomentModule", function() { return MomentModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SubtractPipe", function() { return SubtractPipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TimeAgoPipe", function() { return TimeAgoPipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UtcPipe", function() { return UtcPipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FromUtcPipe", function() { return FromUtcPipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LocalTimePipe", function() { return LocalTimePipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LocalePipe", function() { return LocalePipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ParseZonePipe", function() { return ParseZonePipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IsBeforePipe", function() { return IsBeforePipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IsAfterPipe", function() { return IsAfterPipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NGX_MOMENT_OPTIONS", function() { return NGX_MOMENT_OPTIONS; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_1__);




/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
/** @type {?} */
const momentConstructor = moment__WEBPACK_IMPORTED_MODULE_1__;
class AddPipe {
    /**
     * @param {?} value
     * @param {?} amount
     * @param {?=} unit
     * @return {?}
     */
    transform(value, amount, unit) {
        if (typeof amount === 'undefined' || (typeof amount === 'number' && typeof unit === 'undefined')) {
            throw new Error('AddPipe: missing required arguments');
        }
        return momentConstructor(value).add(amount, unit);
    }
}
AddPipe.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"], args: [{ name: 'amAdd' },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
/** @type {?} */
const momentConstructor$1 = moment__WEBPACK_IMPORTED_MODULE_1__;
class CalendarPipe {
    /**
     * @param {?} cdRef
     * @param {?} ngZone
     */
    constructor(cdRef, ngZone) {
        this.cdRef = cdRef;
        this.ngZone = ngZone;
        // using a single static timer for all instances of this pipe for performance reasons
        CalendarPipe.initTimer(ngZone);
        CalendarPipe.refs++;
        // values such as Today will need to be replaced with Yesterday after midnight,
        // so make sure we subscribe to an EventEmitter that we set up to emit at midnight
        this.midnightSub = CalendarPipe.midnight.subscribe(() => {
            this.ngZone.run(() => this.cdRef.markForCheck());
        });
    }
    /**
     * @param {?} value
     * @param {...?} args
     * @return {?}
     */
    transform(value, ...args) {
        /** @type {?} */
        let formats = null;
        /** @type {?} */
        let referenceTime = null;
        for (let i = 0, len = args.length; i < len; i++) {
            if (args[i] !== null) {
                if (typeof args[i] === 'object' && !Object(moment__WEBPACK_IMPORTED_MODULE_1__["isMoment"])(args[i])) {
                    formats = args[i];
                }
                else {
                    referenceTime = momentConstructor$1(args[i]);
                }
            }
        }
        return momentConstructor$1(value).calendar(referenceTime, formats);
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        if (CalendarPipe.refs > 0) {
            CalendarPipe.refs--;
        }
        if (CalendarPipe.refs === 0) {
            CalendarPipe.removeTimer();
        }
        this.midnightSub.unsubscribe();
    }
    /**
     * @param {?} ngZone
     * @return {?}
     */
    static initTimer(ngZone) {
        // initialize the timer
        if (!CalendarPipe.midnight) {
            CalendarPipe.midnight = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
            if (typeof window !== 'undefined') {
                /** @type {?} */
                const timeToUpdate = CalendarPipe._getMillisecondsUntilUpdate();
                CalendarPipe.timer = ngZone.runOutsideAngular(() => {
                    return window.setTimeout(() => {
                        // emit the current date
                        CalendarPipe.midnight.emit(new Date());
                        // refresh the timer
                        CalendarPipe.removeTimer();
                        CalendarPipe.initTimer(ngZone);
                    }, timeToUpdate);
                });
            }
        }
    }
    /**
     * @return {?}
     */
    static removeTimer() {
        if (CalendarPipe.timer) {
            window.clearTimeout(CalendarPipe.timer);
            CalendarPipe.timer = null;
            CalendarPipe.midnight = null;
        }
    }
    /**
     * @return {?}
     */
    static _getMillisecondsUntilUpdate() {
        /** @type {?} */
        const now = momentConstructor$1();
        /** @type {?} */
        const tomorrow = momentConstructor$1().startOf('day').add(1, 'days');
        /** @type {?} */
        const timeToMidnight = tomorrow.valueOf() - now.valueOf();
        return timeToMidnight + 1000; // 1 second after midnight
    }
}
/**
 * Internal reference counter, so we can clean up when no instances are in use
 */
CalendarPipe.refs = 0;
CalendarPipe.timer = null;
CalendarPipe.midnight = null;
CalendarPipe.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"], args: [{ name: 'amCalendar', pure: false },] }
];
/** @nocollapse */
CalendarPipe.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
/** @type {?} */
const momentConstructor$2 = moment__WEBPACK_IMPORTED_MODULE_1__;
class DateFormatPipe {
    /**
     * @param {?} value
     * @param {...?} args
     * @return {?}
     */
    transform(value, ...args) {
        if (!value) {
            return '';
        }
        return momentConstructor$2(value).format(args[0]);
    }
}
DateFormatPipe.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"], args: [{ name: 'amDateFormat' },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
/** @type {?} */
const momentConstructor$3 = moment__WEBPACK_IMPORTED_MODULE_1__;
class DifferencePipe {
    /**
     * @param {?} value
     * @param {?} otherValue
     * @param {?=} unit
     * @param {?=} precision
     * @return {?}
     */
    transform(value, otherValue, unit, precision) {
        /** @type {?} */
        const date = momentConstructor$3(value);
        /** @type {?} */
        const date2 = (otherValue !== null) ? momentConstructor$3(otherValue) : momentConstructor$3();
        return date.diff(date2, unit, precision);
    }
}
DifferencePipe.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"], args: [{ name: 'amDifference' },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
/** @type {?} */
const NGX_MOMENT_OPTIONS = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('NGX_MOMENT_OPTIONS');

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
class DurationPipe {
    /**
     * @param {?=} momentOptions
     */
    constructor(momentOptions) {
        this.allowedUnits = ['ss', 's', 'm', 'h', 'd', 'M'];
        this._applyOptions(momentOptions);
    }
    /**
     * @param {?} value
     * @param {...?} args
     * @return {?}
     */
    transform(value, ...args) {
        if (typeof args === 'undefined' || args.length !== 1) {
            throw new Error('DurationPipe: missing required time unit argument');
        }
        return Object(moment__WEBPACK_IMPORTED_MODULE_1__["duration"])(value, (/** @type {?} */ (args[0]))).humanize();
    }
    /**
     * @param {?} momentOptions
     * @return {?}
     */
    _applyOptions(momentOptions) {
        if (!momentOptions) {
            return;
        }
        if (!!momentOptions.relativeTimeThresholdOptions) {
            /** @type {?} */
            const units = Object.keys(momentOptions.relativeTimeThresholdOptions);
            /** @type {?} */
            const filteredUnits = units.filter(unit => this.allowedUnits.indexOf(unit) !== -1);
            filteredUnits.forEach(unit => {
                Object(moment__WEBPACK_IMPORTED_MODULE_1__["relativeTimeThreshold"])(unit, momentOptions.relativeTimeThresholdOptions[unit]);
            });
        }
    }
}
DurationPipe.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"], args: [{ name: 'amDuration' },] }
];
/** @nocollapse */
DurationPipe.ctorParameters = () => [
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [NGX_MOMENT_OPTIONS,] }] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
class FromUnixPipe {
    /**
     * @param {?} value
     * @param {...?} args
     * @return {?}
     */
    transform(value, ...args) {
        if (typeof value === 'string') {
            value = +value;
        }
        return Object(moment__WEBPACK_IMPORTED_MODULE_1__["unix"])(value);
    }
}
FromUnixPipe.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"], args: [{ name: 'amFromUnix' },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
/** @type {?} */
const momentConstructor$4 = moment__WEBPACK_IMPORTED_MODULE_1__;
class ParsePipe {
    /**
     * @param {?} value
     * @param {?} formats
     * @return {?}
     */
    transform(value, formats) {
        return momentConstructor$4(value, formats);
    }
}
ParsePipe.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"], args: [{ name: 'amParse' },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
class FromUtcPipe {
    /**
     * @param {?} value
     * @param {?=} formats
     * @param {...?} args
     * @return {?}
     */
    transform(value, formats, ...args) {
        return formats ? Object(moment__WEBPACK_IMPORTED_MODULE_1__["utc"])(value, formats) : Object(moment__WEBPACK_IMPORTED_MODULE_1__["utc"])(value);
    }
}
FromUtcPipe.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"], args: [{ name: 'amFromUtc' },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
/** @type {?} */
const momentConstructor$5 = moment__WEBPACK_IMPORTED_MODULE_1__;
class IsAfterPipe {
    /**
     * @param {?} value
     * @param {?} otherValue
     * @param {?=} unit
     * @return {?}
     */
    transform(value, otherValue, unit) {
        return momentConstructor$5(value).isAfter(momentConstructor$5(otherValue), unit);
    }
}
IsAfterPipe.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"], args: [{
                name: 'amIsAfter'
            },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
/** @type {?} */
const momentConstructor$6 = moment__WEBPACK_IMPORTED_MODULE_1__;
class IsBeforePipe {
    /**
     * @param {?} value
     * @param {?} otherValue
     * @param {?=} unit
     * @return {?}
     */
    transform(value, otherValue, unit) {
        return momentConstructor$6(value).isBefore(momentConstructor$6(otherValue), unit);
    }
}
IsBeforePipe.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"], args: [{
                name: 'amIsBefore'
            },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
/** @type {?} */
const momentConstructor$7 = moment__WEBPACK_IMPORTED_MODULE_1__;
class LocalTimePipe {
    /**
     * @param {?} value
     * @return {?}
     */
    transform(value) {
        return momentConstructor$7(value).local();
    }
}
LocalTimePipe.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"], args: [{ name: 'amLocal' },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
// under systemjs, moment is actually exported as the default export, so we account for that
/** @type {?} */
const momentConstructor$8 = moment__WEBPACK_IMPORTED_MODULE_1__;
class LocalePipe {
    /**
     * @param {?} value
     * @param {?} locale
     * @return {?}
     */
    transform(value, locale$$1) {
        return momentConstructor$8(value).locale(locale$$1);
    }
}
LocalePipe.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"], args: [{ name: 'amLocale' },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
class ParseZonePipe {
    /**
     * @param {?} value
     * @return {?}
     */
    transform(value) {
        return Object(moment__WEBPACK_IMPORTED_MODULE_1__["parseZone"])(value);
    }
}
ParseZonePipe.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"], args: [{ name: 'amParseZone' },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
/** @type {?} */
const momentConstructor$9 = moment__WEBPACK_IMPORTED_MODULE_1__;
class SubtractPipe {
    /**
     * @param {?} value
     * @param {?} amount
     * @param {?=} unit
     * @return {?}
     */
    transform(value, amount, unit) {
        if (typeof amount === 'undefined' || (typeof amount === 'number' && typeof unit === 'undefined')) {
            throw new Error('SubtractPipe: missing required arguments');
        }
        return momentConstructor$9(value).subtract(amount, unit);
    }
}
SubtractPipe.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"], args: [{ name: 'amSubtract' },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
/** @type {?} */
const momentConstructor$a = moment__WEBPACK_IMPORTED_MODULE_1__;
class TimeAgoPipe {
    /**
     * @param {?} cdRef
     * @param {?} ngZone
     */
    constructor(cdRef, ngZone) {
        this.cdRef = cdRef;
        this.ngZone = ngZone;
    }
    /**
     * @param {?} m
     * @return {?}
     */
    format(m) {
        return m.from(momentConstructor$a(), this.lastOmitSuffix);
    }
    /**
     * @param {?} value
     * @param {?=} omitSuffix
     * @param {?=} formatFn
     * @return {?}
     */
    transform(value, omitSuffix, formatFn) {
        if (this.hasChanged(value, omitSuffix)) {
            this.lastTime = this.getTime(value);
            this.lastValue = value;
            this.lastOmitSuffix = omitSuffix;
            this.lastLocale = this.getLocale(value);
            this.formatFn = formatFn || this.format.bind(this);
            this.removeTimer();
            this.createTimer();
            this.lastText = this.formatFn(momentConstructor$a(value));
        }
        else {
            this.createTimer();
        }
        return this.lastText;
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.removeTimer();
    }
    /**
     * @return {?}
     */
    createTimer() {
        if (this.currentTimer) {
            return;
        }
        /** @type {?} */
        const momentInstance = momentConstructor$a(this.lastValue);
        /** @type {?} */
        const timeToUpdate = this.getSecondsUntilUpdate(momentInstance) * 1000;
        this.currentTimer = this.ngZone.runOutsideAngular(() => {
            if (typeof window !== 'undefined') {
                return window.setTimeout(() => {
                    this.lastText = this.formatFn(momentConstructor$a(this.lastValue));
                    this.currentTimer = null;
                    this.ngZone.run(() => this.cdRef.markForCheck());
                }, timeToUpdate);
            }
            else {
                return null;
            }
        });
    }
    /**
     * @return {?}
     */
    removeTimer() {
        if (this.currentTimer) {
            window.clearTimeout(this.currentTimer);
            this.currentTimer = null;
        }
    }
    /**
     * @param {?} momentInstance
     * @return {?}
     */
    getSecondsUntilUpdate(momentInstance) {
        /** @type {?} */
        const howOld = Math.abs(momentConstructor$a().diff(momentInstance, 'minute'));
        if (howOld < 1) {
            return 1;
        }
        else if (howOld < 60) {
            return 30;
        }
        else if (howOld < 180) {
            return 300;
        }
        else {
            return 3600;
        }
    }
    /**
     * @param {?} value
     * @param {?=} omitSuffix
     * @return {?}
     */
    hasChanged(value, omitSuffix) {
        return this.getTime(value) !== this.lastTime
            || this.getLocale(value) !== this.lastLocale
            || omitSuffix !== this.lastOmitSuffix;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    getTime(value) {
        if (Object(moment__WEBPACK_IMPORTED_MODULE_1__["isDate"])(value)) {
            return value.getTime();
        }
        else if (Object(moment__WEBPACK_IMPORTED_MODULE_1__["isMoment"])(value)) {
            return value.valueOf();
        }
        else {
            return momentConstructor$a(value).valueOf();
        }
    }
    /**
     * @param {?} value
     * @return {?}
     */
    getLocale(value) {
        return Object(moment__WEBPACK_IMPORTED_MODULE_1__["isMoment"])(value) ? value.locale() : Object(moment__WEBPACK_IMPORTED_MODULE_1__["locale"])();
    }
}
TimeAgoPipe.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"], args: [{ name: 'amTimeAgo', pure: false },] }
];
/** @nocollapse */
TimeAgoPipe.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
/** @type {?} */
const momentConstructor$b = moment__WEBPACK_IMPORTED_MODULE_1__;
class UtcPipe {
    /**
     * @param {?} value
     * @return {?}
     */
    transform(value) {
        return momentConstructor$b(value).utc();
    }
}
UtcPipe.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"], args: [{ name: 'amUtc' },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
/** @type {?} */
const ANGULAR_MOMENT_PIPES = [
    AddPipe,
    CalendarPipe,
    DateFormatPipe,
    DifferencePipe,
    DurationPipe,
    FromUnixPipe,
    ParsePipe,
    SubtractPipe,
    TimeAgoPipe,
    UtcPipe,
    FromUtcPipe,
    LocalTimePipe,
    LocalePipe,
    ParseZonePipe,
    IsBeforePipe,
    IsAfterPipe
];
class MomentModule {
    /**
     * @param {?=} options
     * @return {?}
     */
    static forRoot(options) {
        return {
            ngModule: MomentModule,
            providers: [
                {
                    provide: NGX_MOMENT_OPTIONS, useValue: Object.assign({}, options)
                }
            ]
        };
    }
}
MomentModule.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"], args: [{
                declarations: ANGULAR_MOMENT_PIPES,
                exports: ANGULAR_MOMENT_PIPES
            },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */



//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LW1vbWVudC5qcy5tYXAiLCJzb3VyY2VzIjpbIm5nOi8vbmd4LW1vbWVudC9hZGQucGlwZS50cyIsIm5nOi8vbmd4LW1vbWVudC9jYWxlbmRhci5waXBlLnRzIiwibmc6Ly9uZ3gtbW9tZW50L2RhdGUtZm9ybWF0LnBpcGUudHMiLCJuZzovL25neC1tb21lbnQvZGlmZmVyZW5jZS5waXBlLnRzIiwibmc6Ly9uZ3gtbW9tZW50L21vbWVudC1vcHRpb25zLnRzIiwibmc6Ly9uZ3gtbW9tZW50L2R1cmF0aW9uLnBpcGUudHMiLCJuZzovL25neC1tb21lbnQvZnJvbS11bml4LnBpcGUudHMiLCJuZzovL25neC1tb21lbnQvcGFyc2UucGlwZS50cyIsIm5nOi8vbmd4LW1vbWVudC9mcm9tLXV0Yy5waXBlLnRzIiwibmc6Ly9uZ3gtbW9tZW50L2lzLWFmdGVyLnBpcGUudHMiLCJuZzovL25neC1tb21lbnQvaXMtYmVmb3JlLnBpcGUudHMiLCJuZzovL25neC1tb21lbnQvbG9jYWwucGlwZS50cyIsIm5nOi8vbmd4LW1vbWVudC9sb2NhbGUucGlwZS50cyIsIm5nOi8vbmd4LW1vbWVudC9wYXJzZS16b25lLnBpcGUudHMiLCJuZzovL25neC1tb21lbnQvc3VidHJhY3QucGlwZS50cyIsIm5nOi8vbmd4LW1vbWVudC90aW1lLWFnby5waXBlLnRzIiwibmc6Ly9uZ3gtbW9tZW50L3V0Yy5waXBlLnRzIiwibmc6Ly9uZ3gtbW9tZW50L21vbWVudC5tb2R1bGUudHMiXSwic291cmNlc0NvbnRlbnQiOlsiLyogbmd4LW1vbWVudCAoYykgMjAxNSwgMjAxNiBVcmkgU2hha2VkIC8gTUlUIExpY2VuY2UgKi9cclxuXHJcbmltcG9ydCB7UGlwZSwgUGlwZVRyYW5zZm9ybX0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCAqIGFzIG1vbWVudCBmcm9tICdtb21lbnQnO1xyXG5cclxuY29uc3QgbW9tZW50Q29uc3RydWN0b3IgPSBtb21lbnQ7XHJcblxyXG5AUGlwZSh7IG5hbWU6ICdhbUFkZCcgfSlcclxuZXhwb3J0IGNsYXNzIEFkZFBpcGUgaW1wbGVtZW50cyBQaXBlVHJhbnNmb3JtIHtcclxuICAgIHRyYW5zZm9ybSh2YWx1ZTogYW55LCBhbW91bnQ6IG1vbWVudC5EdXJhdGlvbklucHV0QXJnMSwgdW5pdD86IG1vbWVudC5EdXJhdGlvbklucHV0QXJnMik6IGFueSB7XHJcbiAgICAgICAgaWYgKHR5cGVvZiBhbW91bnQgPT09ICd1bmRlZmluZWQnIHx8ICh0eXBlb2YgYW1vdW50ID09PSAnbnVtYmVyJyAmJiB0eXBlb2YgdW5pdCA9PT0gJ3VuZGVmaW5lZCcpKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignQWRkUGlwZTogbWlzc2luZyByZXF1aXJlZCBhcmd1bWVudHMnKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIG1vbWVudENvbnN0cnVjdG9yKHZhbHVlKS5hZGQoYW1vdW50LCB1bml0KTtcclxuICAgIH1cclxufVxyXG4iLCIvKiBuZ3gtbW9tZW50IChjKSAyMDE1LCAyMDE2IFVyaSBTaGFrZWQgLyBNSVQgTGljZW5jZSAqL1xyXG5cclxuaW1wb3J0IHsgUGlwZSwgQ2hhbmdlRGV0ZWN0b3JSZWYsIFBpcGVUcmFuc2Zvcm0sIEV2ZW50RW1pdHRlciwgT25EZXN0cm95LCBOZ1pvbmUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0ICogYXMgbW9tZW50IGZyb20gJ21vbWVudCc7XHJcbmltcG9ydCB7IFN1YnNjcmlwdGlvbiB9IGZyb20gJ3J4anMnO1xyXG5cclxuY29uc3QgbW9tZW50Q29uc3RydWN0b3IgPSBtb21lbnQ7XHJcblxyXG5AUGlwZSh7IG5hbWU6ICdhbUNhbGVuZGFyJywgcHVyZTogZmFsc2UgfSlcclxuZXhwb3J0IGNsYXNzIENhbGVuZGFyUGlwZSBpbXBsZW1lbnRzIFBpcGVUcmFuc2Zvcm0sIE9uRGVzdHJveSB7XHJcblxyXG4gIC8qKlxyXG4gICAqIEludGVybmFsIHJlZmVyZW5jZSBjb3VudGVyLCBzbyB3ZSBjYW4gY2xlYW4gdXAgd2hlbiBubyBpbnN0YW5jZXMgYXJlIGluIHVzZVxyXG4gICAqL1xyXG4gIHByaXZhdGUgc3RhdGljIHJlZnMgPSAwO1xyXG5cclxuICBwcml2YXRlIHN0YXRpYyB0aW1lcjogbnVtYmVyIHwgbnVsbCA9IG51bGw7XHJcbiAgcHJpdmF0ZSBzdGF0aWMgbWlkbmlnaHQ6IEV2ZW50RW1pdHRlcjxEYXRlPiB8IG51bGwgPSBudWxsO1xyXG5cclxuICBwcml2YXRlIG1pZG5pZ2h0U3ViOiBTdWJzY3JpcHRpb247XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgY2RSZWY6IENoYW5nZURldGVjdG9yUmVmLCBwcml2YXRlIG5nWm9uZTogTmdab25lKSB7XHJcbiAgICAvLyB1c2luZyBhIHNpbmdsZSBzdGF0aWMgdGltZXIgZm9yIGFsbCBpbnN0YW5jZXMgb2YgdGhpcyBwaXBlIGZvciBwZXJmb3JtYW5jZSByZWFzb25zXHJcbiAgICBDYWxlbmRhclBpcGUuaW5pdFRpbWVyKG5nWm9uZSk7XHJcblxyXG4gICAgQ2FsZW5kYXJQaXBlLnJlZnMrKztcclxuXHJcbiAgICAvLyB2YWx1ZXMgc3VjaCBhcyBUb2RheSB3aWxsIG5lZWQgdG8gYmUgcmVwbGFjZWQgd2l0aCBZZXN0ZXJkYXkgYWZ0ZXIgbWlkbmlnaHQsXHJcbiAgICAvLyBzbyBtYWtlIHN1cmUgd2Ugc3Vic2NyaWJlIHRvIGFuIEV2ZW50RW1pdHRlciB0aGF0IHdlIHNldCB1cCB0byBlbWl0IGF0IG1pZG5pZ2h0XHJcbiAgICB0aGlzLm1pZG5pZ2h0U3ViID0gQ2FsZW5kYXJQaXBlLm1pZG5pZ2h0LnN1YnNjcmliZSgoKSA9PiB7XHJcbiAgICAgIHRoaXMubmdab25lLnJ1bigoKSA9PiB0aGlzLmNkUmVmLm1hcmtGb3JDaGVjaygpKTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgdHJhbnNmb3JtKHZhbHVlOiBEYXRlIHwgbW9tZW50Lk1vbWVudCwgLi4uYXJnczogYW55W10pOiBhbnkge1xyXG4gICAgbGV0IGZvcm1hdHM6IGFueSA9IG51bGw7XHJcbiAgICBsZXQgcmVmZXJlbmNlVGltZTogYW55ID0gbnVsbDtcclxuXHJcbiAgICBmb3IgKGxldCBpID0gMCwgbGVuID0gYXJncy5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xyXG4gICAgICBpZiAoYXJnc1tpXSAhPT0gbnVsbCkge1xyXG4gICAgICAgIGlmICh0eXBlb2YgYXJnc1tpXSA9PT0gJ29iamVjdCcgJiYgIW1vbWVudC5pc01vbWVudChhcmdzW2ldKSkge1xyXG4gICAgICAgICAgZm9ybWF0cyA9IGFyZ3NbaV07XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIHJlZmVyZW5jZVRpbWUgPSBtb21lbnRDb25zdHJ1Y3RvcihhcmdzW2ldKTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gbW9tZW50Q29uc3RydWN0b3IodmFsdWUpLmNhbGVuZGFyKHJlZmVyZW5jZVRpbWUsIGZvcm1hdHMpO1xyXG4gIH1cclxuXHJcbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XHJcbiAgICBpZiAoQ2FsZW5kYXJQaXBlLnJlZnMgPiAwKSB7XHJcbiAgICAgIENhbGVuZGFyUGlwZS5yZWZzLS07XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKENhbGVuZGFyUGlwZS5yZWZzID09PSAwKSB7XHJcbiAgICAgIENhbGVuZGFyUGlwZS5yZW1vdmVUaW1lcigpO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMubWlkbmlnaHRTdWIudW5zdWJzY3JpYmUoKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgc3RhdGljIGluaXRUaW1lcihuZ1pvbmU6IE5nWm9uZSkge1xyXG4gICAgLy8gaW5pdGlhbGl6ZSB0aGUgdGltZXJcclxuICAgIGlmICghQ2FsZW5kYXJQaXBlLm1pZG5pZ2h0KSB7XHJcbiAgICAgIENhbGVuZGFyUGlwZS5taWRuaWdodCA9IG5ldyBFdmVudEVtaXR0ZXI8RGF0ZT4oKTtcclxuICAgICAgaWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnKSB7XHJcbiAgICAgICAgY29uc3QgdGltZVRvVXBkYXRlID0gQ2FsZW5kYXJQaXBlLl9nZXRNaWxsaXNlY29uZHNVbnRpbFVwZGF0ZSgpO1xyXG4gICAgICAgIENhbGVuZGFyUGlwZS50aW1lciA9IG5nWm9uZS5ydW5PdXRzaWRlQW5ndWxhcigoKSA9PiB7XHJcbiAgICAgICAgICByZXR1cm4gd2luZG93LnNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICAvLyBlbWl0IHRoZSBjdXJyZW50IGRhdGVcclxuICAgICAgICAgICAgQ2FsZW5kYXJQaXBlLm1pZG5pZ2h0LmVtaXQobmV3IERhdGUoKSk7XHJcblxyXG4gICAgICAgICAgICAvLyByZWZyZXNoIHRoZSB0aW1lclxyXG4gICAgICAgICAgICBDYWxlbmRhclBpcGUucmVtb3ZlVGltZXIoKTtcclxuICAgICAgICAgICAgQ2FsZW5kYXJQaXBlLmluaXRUaW1lcihuZ1pvbmUpO1xyXG4gICAgICAgICAgfSwgdGltZVRvVXBkYXRlKTtcclxuICAgICAgICB9KTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBzdGF0aWMgcmVtb3ZlVGltZXIoKSB7XHJcbiAgICBpZiAoQ2FsZW5kYXJQaXBlLnRpbWVyKSB7XHJcbiAgICAgIHdpbmRvdy5jbGVhclRpbWVvdXQoQ2FsZW5kYXJQaXBlLnRpbWVyKTtcclxuICAgICAgQ2FsZW5kYXJQaXBlLnRpbWVyID0gbnVsbDtcclxuICAgICAgQ2FsZW5kYXJQaXBlLm1pZG5pZ2h0ID0gbnVsbDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHByaXZhdGUgc3RhdGljIF9nZXRNaWxsaXNlY29uZHNVbnRpbFVwZGF0ZSgpIHtcclxuICAgIGNvbnN0IG5vdyA9IG1vbWVudENvbnN0cnVjdG9yKCk7XHJcbiAgICBjb25zdCB0b21vcnJvdyA9IG1vbWVudENvbnN0cnVjdG9yKCkuc3RhcnRPZignZGF5JykuYWRkKDEsICdkYXlzJyk7XHJcbiAgICBjb25zdCB0aW1lVG9NaWRuaWdodCA9IHRvbW9ycm93LnZhbHVlT2YoKSAtIG5vdy52YWx1ZU9mKCk7XHJcbiAgICByZXR1cm4gdGltZVRvTWlkbmlnaHQgKyAxMDAwOyAvLyAxIHNlY29uZCBhZnRlciBtaWRuaWdodFxyXG4gIH1cclxufVxyXG4iLCIvKiBuZ3gtbW9tZW50IChjKSAyMDE1LCAyMDE2IFVyaSBTaGFrZWQgLyBNSVQgTGljZW5jZSAqL1xyXG5cclxuaW1wb3J0IHtQaXBlLCBQaXBlVHJhbnNmb3JtfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0ICogYXMgbW9tZW50IGZyb20gJ21vbWVudCc7XHJcblxyXG5jb25zdCBtb21lbnRDb25zdHJ1Y3RvciA9IG1vbWVudDtcclxuXHJcbkBQaXBlKHsgbmFtZTogJ2FtRGF0ZUZvcm1hdCcgfSlcclxuZXhwb3J0IGNsYXNzIERhdGVGb3JtYXRQaXBlIGltcGxlbWVudHMgUGlwZVRyYW5zZm9ybSB7XHJcbiAgdHJhbnNmb3JtKHZhbHVlOiBEYXRlIHwgbW9tZW50Lk1vbWVudCB8IHN0cmluZyB8IG51bWJlciwgLi4uYXJnczogYW55W10pOiBzdHJpbmcge1xyXG4gICAgaWYgKCF2YWx1ZSkgeyByZXR1cm4gJyc7IH1cclxuICAgIHJldHVybiBtb21lbnRDb25zdHJ1Y3Rvcih2YWx1ZSkuZm9ybWF0KGFyZ3NbMF0pO1xyXG4gIH1cclxufVxyXG4iLCIvKiBuZ3gtbW9tZW50IChjKSAyMDE1LCAyMDE2IFVyaSBTaGFrZWQgLyBNSVQgTGljZW5jZSAqL1xyXG5cclxuaW1wb3J0IHtQaXBlLCBQaXBlVHJhbnNmb3JtfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0ICogYXMgbW9tZW50IGZyb20gJ21vbWVudCc7XHJcblxyXG5jb25zdCBtb21lbnRDb25zdHJ1Y3RvciA9IG1vbWVudDtcclxuXHJcbkBQaXBlKHsgbmFtZTogJ2FtRGlmZmVyZW5jZScgfSlcclxuZXhwb3J0IGNsYXNzIERpZmZlcmVuY2VQaXBlIGltcGxlbWVudHMgUGlwZVRyYW5zZm9ybSB7XHJcbiAgdHJhbnNmb3JtKHZhbHVlOiBEYXRlIHwgbW9tZW50Lk1vbWVudCxcclxuICAgICAgICAgICAgb3RoZXJWYWx1ZTogRGF0ZSB8IG1vbWVudC5Nb21lbnQsXHJcbiAgICAgICAgICAgIHVuaXQ/OiBtb21lbnQudW5pdE9mVGltZS5EaWZmLFxyXG4gICAgICAgICAgICBwcmVjaXNpb24/OiBib29sZWFuKTogbnVtYmVyIHtcclxuXHJcbiAgICBjb25zdCBkYXRlID0gbW9tZW50Q29uc3RydWN0b3IodmFsdWUpO1xyXG4gICAgY29uc3QgZGF0ZTIgPSAob3RoZXJWYWx1ZSAhPT0gbnVsbCkgPyBtb21lbnRDb25zdHJ1Y3RvcihvdGhlclZhbHVlKSA6IG1vbWVudENvbnN0cnVjdG9yKCk7XHJcblxyXG4gICAgcmV0dXJuIGRhdGUuZGlmZihkYXRlMiwgdW5pdCwgcHJlY2lzaW9uKTtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgSW5qZWN0aW9uVG9rZW4gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbmV4cG9ydCBjb25zdCBOR1hfTU9NRU5UX09QVElPTlM6IEluamVjdGlvblRva2VuPE5neE1vbWVudE9wdGlvbnM+ID0gbmV3IEluamVjdGlvblRva2VuPE5neE1vbWVudE9wdGlvbnM+KCdOR1hfTU9NRU5UX09QVElPTlMnKTtcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgTmd4TW9tZW50T3B0aW9ucyB7XHJcbiAgLyoqXHJcbiAgICogcmVsYXRpdmVUaW1lVGhyZXNob2xkT3B0aW9uc1xyXG4gICAqIEBkZXNjcmlwdGlvbiBQcm92aWRlcyB0aGUgYHJlbGF0aXZlVGltZVRocmVzaG9sZGAgdW5pdHMgYWxsb3dpbmcgYSBwaXBlIHRvIHNldCB0aGUgYG1vbWVudC5yZWxhdGl2ZVRpbWVUaHJlc2hvbGRgIHZhbHVlcy5cclxuICAgKiBUaGUgYGtleWAgaXMgYSB1bml0IGRlZmluZWQgYXMgb25lIG9mIGBzc2AsIGBzYCwgYG1gLCBgaGAsIGBkYCwgYE1gLlxyXG4gICAqIEBzZWUgaHR0cHM6Ly9tb21lbnRqcy5jb20vZG9jcy8jL2N1c3RvbWl6YXRpb24vcmVsYXRpdmUtdGltZS10aHJlc2hvbGQvXHJcbiAgICogQGV4YW1wbGUgYnkgZGVmYXVsdCBtb3JlIHRoYW4gNDUgc2Vjb25kcyBpcyBjb25zaWRlcmVkIGEgbWludXRlLCBtb3JlIHRoYW4gMjIgaG91cnMgaXMgY29uc2lkZXJlZCBhIGRheSBhbmQgc28gb24uXHJcbiAgICogU28gc2V0dGluZ3MgdGhlIHVuaXQgJ20nIHRvIGA1OWAgd2lsbCBhZGp1c3QgdGhlIGByZWxhdGl2ZVRpbWVUaHJlc2hvbGRgIGFuZCBjb25zaWRlciBtb3JlIHRoYW4gNTkgbWludXRlc1xyXG4gICAqIHRvIGJlIGFuIGhvdXIgKGRlZmF1bHQgaXMgYDQ1IG1pbnV0ZXNgKVxyXG4gICAqL1xyXG4gIHJlbGF0aXZlVGltZVRocmVzaG9sZE9wdGlvbnM6IHsgW2tleTogc3RyaW5nXTogbnVtYmVyIH07XHJcbn1cclxuIiwiaW1wb3J0ICogYXMgbW9tZW50IGZyb20gJ21vbWVudCc7XHJcblxyXG5pbXBvcnQgeyBJbmplY3QsIE9wdGlvbmFsLCBQaXBlLCBQaXBlVHJhbnNmb3JtIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IE5HWF9NT01FTlRfT1BUSU9OUywgTmd4TW9tZW50T3B0aW9ucyB9IGZyb20gJy4vbW9tZW50LW9wdGlvbnMnO1xyXG5cclxuQFBpcGUoeyBuYW1lOiAnYW1EdXJhdGlvbicgfSlcclxuZXhwb3J0IGNsYXNzIER1cmF0aW9uUGlwZSBpbXBsZW1lbnRzIFBpcGVUcmFuc2Zvcm0ge1xyXG5cclxuICBhbGxvd2VkVW5pdHM6IEFycmF5PHN0cmluZz4gPSBbJ3NzJywgJ3MnLCAnbScsICdoJywgJ2QnLCAnTSddO1xyXG5cclxuICBjb25zdHJ1Y3RvcihAT3B0aW9uYWwoKSBASW5qZWN0KE5HWF9NT01FTlRfT1BUSU9OUykgbW9tZW50T3B0aW9ucz86IE5neE1vbWVudE9wdGlvbnMpIHtcclxuICAgIHRoaXMuX2FwcGx5T3B0aW9ucyhtb21lbnRPcHRpb25zKTtcclxuICB9XHJcblxyXG4gIHRyYW5zZm9ybSh2YWx1ZTogYW55LCAuLi5hcmdzOiBzdHJpbmdbXSk6IHN0cmluZyB7XHJcbiAgICBpZiAodHlwZW9mIGFyZ3MgPT09ICd1bmRlZmluZWQnIHx8IGFyZ3MubGVuZ3RoICE9PSAxKSB7XHJcbiAgICAgIHRocm93IG5ldyBFcnJvcignRHVyYXRpb25QaXBlOiBtaXNzaW5nIHJlcXVpcmVkIHRpbWUgdW5pdCBhcmd1bWVudCcpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIG1vbWVudC5kdXJhdGlvbih2YWx1ZSwgYXJnc1swXSBhcyBtb21lbnQudW5pdE9mVGltZS5EdXJhdGlvbkNvbnN0cnVjdG9yKS5odW1hbml6ZSgpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBfYXBwbHlPcHRpb25zKG1vbWVudE9wdGlvbnM6IE5neE1vbWVudE9wdGlvbnMpOiB2b2lkIHtcclxuICAgIGlmICghbW9tZW50T3B0aW9ucykge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKCEhbW9tZW50T3B0aW9ucy5yZWxhdGl2ZVRpbWVUaHJlc2hvbGRPcHRpb25zKSB7XHJcbiAgICAgIGNvbnN0IHVuaXRzOiBBcnJheTxzdHJpbmc+ID0gT2JqZWN0LmtleXMobW9tZW50T3B0aW9ucy5yZWxhdGl2ZVRpbWVUaHJlc2hvbGRPcHRpb25zKTtcclxuICAgICAgY29uc3QgZmlsdGVyZWRVbml0czogQXJyYXk8c3RyaW5nPiA9IHVuaXRzLmZpbHRlcih1bml0ID0+IHRoaXMuYWxsb3dlZFVuaXRzLmluZGV4T2YodW5pdCkgIT09IC0xKTtcclxuICAgICAgZmlsdGVyZWRVbml0cy5mb3JFYWNoKHVuaXQgPT4ge1xyXG4gICAgICAgIG1vbWVudC5yZWxhdGl2ZVRpbWVUaHJlc2hvbGQodW5pdCwgbW9tZW50T3B0aW9ucy5yZWxhdGl2ZVRpbWVUaHJlc2hvbGRPcHRpb25zW3VuaXRdKTtcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxufVxyXG4iLCIvKiBuZ3gtbW9tZW50IChjKSAyMDE1LCAyMDE2IFVyaSBTaGFrZWQgLyBNSVQgTGljZW5jZSAqL1xyXG5cclxuaW1wb3J0IHtQaXBlLCBQaXBlVHJhbnNmb3JtfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0ICogYXMgbW9tZW50IGZyb20gJ21vbWVudCc7XHJcblxyXG5AUGlwZSh7IG5hbWU6ICdhbUZyb21Vbml4JyB9KVxyXG5leHBvcnQgY2xhc3MgRnJvbVVuaXhQaXBlIGltcGxlbWVudHMgUGlwZVRyYW5zZm9ybSB7XHJcbiAgdHJhbnNmb3JtKHZhbHVlOiBhbnksIC4uLmFyZ3M6IHN0cmluZ1tdKTogYW55IHtcclxuICAgIGlmICh0eXBlb2YgdmFsdWUgPT09ICdzdHJpbmcnKSB7XHJcbiAgICAgIHZhbHVlID0gK3ZhbHVlO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIG1vbWVudC51bml4KHZhbHVlKTtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgUGlwZSwgUGlwZVRyYW5zZm9ybSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgKiBhcyBtb21lbnQgZnJvbSAnbW9tZW50JztcclxuXHJcbmNvbnN0IG1vbWVudENvbnN0cnVjdG9yID0gbW9tZW50O1xyXG5cclxuQFBpcGUoeyBuYW1lOiAnYW1QYXJzZScgfSlcclxuZXhwb3J0IGNsYXNzIFBhcnNlUGlwZSBpbXBsZW1lbnRzIFBpcGVUcmFuc2Zvcm0ge1xyXG4gIHRyYW5zZm9ybSh2YWx1ZTogc3RyaW5nLCBmb3JtYXRzOiBzdHJpbmd8c3RyaW5nW10pOiBtb21lbnQuTW9tZW50IHtcclxuICAgIHJldHVybiBtb21lbnRDb25zdHJ1Y3Rvcih2YWx1ZSwgZm9ybWF0cyk7XHJcbiAgfVxyXG59XHJcbiIsIi8qIG5neC1tb21lbnQgKGMpIDIwMTUsIDIwMTYgVXJpIFNoYWtlZCAvIE1JVCBMaWNlbmNlICovXHJcblxyXG5pbXBvcnQge1BpcGUsIFBpcGVUcmFuc2Zvcm19IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgKiBhcyBtb21lbnQgZnJvbSAnbW9tZW50JztcclxuXHJcbkBQaXBlKHsgbmFtZTogJ2FtRnJvbVV0YycgfSlcclxuZXhwb3J0IGNsYXNzIEZyb21VdGNQaXBlIGltcGxlbWVudHMgUGlwZVRyYW5zZm9ybSB7XHJcbiAgdHJhbnNmb3JtKHZhbHVlOiBhbnksIGZvcm1hdHM/OiBzdHJpbmd8c3RyaW5nW10sIC4uLmFyZ3M6IHN0cmluZ1tdKTogYW55IHtcclxuICAgIHJldHVybiBmb3JtYXRzID8gbW9tZW50LnV0Yyh2YWx1ZSwgZm9ybWF0cykgOiBtb21lbnQudXRjKHZhbHVlKTtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0ICogYXMgbW9tZW50IGZyb20gJ21vbWVudCc7XHJcblxyXG5pbXBvcnQgeyBQaXBlLCBQaXBlVHJhbnNmb3JtIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5jb25zdCBtb21lbnRDb25zdHJ1Y3RvciA9IG1vbWVudDtcclxuXHJcbkBQaXBlKHtcclxuICBuYW1lOiAnYW1Jc0FmdGVyJ1xyXG59KVxyXG5leHBvcnQgY2xhc3MgSXNBZnRlclBpcGUgaW1wbGVtZW50cyBQaXBlVHJhbnNmb3JtIHtcclxuXHJcbiAgdHJhbnNmb3JtKHZhbHVlOiBEYXRlIHwgbW9tZW50Lk1vbWVudCxcclxuICAgIG90aGVyVmFsdWU6IERhdGUgfCBtb21lbnQuTW9tZW50LFxyXG4gICAgdW5pdD86IG1vbWVudC51bml0T2ZUaW1lLlN0YXJ0T2YpOiBib29sZWFuIHtcclxuICAgIHJldHVybiBtb21lbnRDb25zdHJ1Y3Rvcih2YWx1ZSkuaXNBZnRlcihtb21lbnRDb25zdHJ1Y3RvcihvdGhlclZhbHVlKSwgdW5pdCk7XHJcbiAgfVxyXG5cclxufVxyXG4iLCJpbXBvcnQgKiBhcyBtb21lbnQgZnJvbSAnbW9tZW50JztcclxuXHJcbmltcG9ydCB7IFBpcGUsIFBpcGVUcmFuc2Zvcm0gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbmNvbnN0IG1vbWVudENvbnN0cnVjdG9yID0gbW9tZW50O1xyXG5cclxuQFBpcGUoe1xyXG4gIG5hbWU6ICdhbUlzQmVmb3JlJ1xyXG59KVxyXG5leHBvcnQgY2xhc3MgSXNCZWZvcmVQaXBlIGltcGxlbWVudHMgUGlwZVRyYW5zZm9ybSB7XHJcblxyXG4gIHRyYW5zZm9ybSh2YWx1ZTogRGF0ZSB8IG1vbWVudC5Nb21lbnQsXHJcbiAgICBvdGhlclZhbHVlOiBEYXRlIHwgbW9tZW50Lk1vbWVudCxcclxuICAgIHVuaXQ/OiBtb21lbnQudW5pdE9mVGltZS5TdGFydE9mKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gbW9tZW50Q29uc3RydWN0b3IodmFsdWUpLmlzQmVmb3JlKG1vbWVudENvbnN0cnVjdG9yKG90aGVyVmFsdWUpLCB1bml0KTtcclxuICB9XHJcblxyXG59XHJcbiIsImltcG9ydCB7IFBpcGUsIFBpcGVUcmFuc2Zvcm0gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0ICogYXMgbW9tZW50IGZyb20gJ21vbWVudCc7XHJcblxyXG5jb25zdCBtb21lbnRDb25zdHJ1Y3RvciA9IG1vbWVudDtcclxuXHJcbkBQaXBlKHsgbmFtZTogJ2FtTG9jYWwnIH0pXHJcbmV4cG9ydCBjbGFzcyBMb2NhbFRpbWVQaXBlIGltcGxlbWVudHMgUGlwZVRyYW5zZm9ybSB7XHJcbiAgICB0cmFuc2Zvcm0odmFsdWU6IERhdGUgfCBtb21lbnQuTW9tZW50IHwgc3RyaW5nIHwgbnVtYmVyKTogbW9tZW50Lk1vbWVudCB7XHJcbiAgICAgICAgcmV0dXJuIG1vbWVudENvbnN0cnVjdG9yKHZhbHVlKS5sb2NhbCgpO1xyXG4gICAgfVxyXG59XHJcbiIsImltcG9ydCB7IFBpcGUsIFBpcGVUcmFuc2Zvcm0gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0ICogYXMgbW9tZW50IGZyb20gJ21vbWVudCc7XHJcblxyXG4vLyB1bmRlciBzeXN0ZW1qcywgbW9tZW50IGlzIGFjdHVhbGx5IGV4cG9ydGVkIGFzIHRoZSBkZWZhdWx0IGV4cG9ydCwgc28gd2UgYWNjb3VudCBmb3IgdGhhdFxyXG5jb25zdCBtb21lbnRDb25zdHJ1Y3RvciA9IG1vbWVudDtcclxuXHJcbkBQaXBlKHsgbmFtZTogJ2FtTG9jYWxlJyB9KVxyXG5leHBvcnQgY2xhc3MgTG9jYWxlUGlwZSBpbXBsZW1lbnRzIFBpcGVUcmFuc2Zvcm0ge1xyXG4gIHRyYW5zZm9ybSh2YWx1ZTogc3RyaW5nIHwgRGF0ZSwgbG9jYWxlOiBzdHJpbmcpOiBtb21lbnQuTW9tZW50IHtcclxuICAgIHJldHVybiBtb21lbnRDb25zdHJ1Y3Rvcih2YWx1ZSkubG9jYWxlKGxvY2FsZSk7XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7IFBpcGUsIFBpcGVUcmFuc2Zvcm0gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0ICogYXMgbW9tZW50IGZyb20gJ21vbWVudCc7XHJcblxyXG5AUGlwZSh7IG5hbWU6ICdhbVBhcnNlWm9uZScgfSlcclxuZXhwb3J0IGNsYXNzIFBhcnNlWm9uZVBpcGUgaW1wbGVtZW50cyBQaXBlVHJhbnNmb3JtIHtcclxuICB0cmFuc2Zvcm0odmFsdWU6IHN0cmluZyk6IG1vbWVudC5Nb21lbnQge1xyXG4gICAgcmV0dXJuIG1vbWVudC5wYXJzZVpvbmUodmFsdWUpO1xyXG4gIH1cclxufVxyXG4iLCIvKiBuZ3gtbW9tZW50IChjKSAyMDE1LCAyMDE2IFVyaSBTaGFrZWQgLyBNSVQgTGljZW5jZSAqL1xyXG5cclxuaW1wb3J0IHtQaXBlLCBQaXBlVHJhbnNmb3JtfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0ICogYXMgbW9tZW50IGZyb20gJ21vbWVudCc7XHJcblxyXG5jb25zdCBtb21lbnRDb25zdHJ1Y3RvciA9IG1vbWVudDtcclxuXHJcbkBQaXBlKHsgbmFtZTogJ2FtU3VidHJhY3QnIH0pXHJcbmV4cG9ydCBjbGFzcyBTdWJ0cmFjdFBpcGUgaW1wbGVtZW50cyBQaXBlVHJhbnNmb3JtIHtcclxuICAgIHRyYW5zZm9ybSh2YWx1ZTogYW55LCBhbW91bnQ6IG1vbWVudC5EdXJhdGlvbklucHV0QXJnMSwgdW5pdD86IG1vbWVudC5EdXJhdGlvbklucHV0QXJnMik6IGFueSB7XHJcbiAgICAgICAgaWYgKHR5cGVvZiBhbW91bnQgPT09ICd1bmRlZmluZWQnIHx8ICh0eXBlb2YgYW1vdW50ID09PSAnbnVtYmVyJyAmJiB0eXBlb2YgdW5pdCA9PT0gJ3VuZGVmaW5lZCcpKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignU3VidHJhY3RQaXBlOiBtaXNzaW5nIHJlcXVpcmVkIGFyZ3VtZW50cycpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gbW9tZW50Q29uc3RydWN0b3IodmFsdWUpLnN1YnRyYWN0KGFtb3VudCwgdW5pdCk7XHJcbiAgICB9XHJcbn1cclxuIiwiLyogbmd4LW1vbWVudCAoYykgMjAxNSwgMjAxNiBVcmkgU2hha2VkIC8gTUlUIExpY2VuY2UgKi9cclxuXHJcbmltcG9ydCB7UGlwZSwgQ2hhbmdlRGV0ZWN0b3JSZWYsIFBpcGVUcmFuc2Zvcm0sIE9uRGVzdHJveSwgTmdab25lfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0ICogYXMgbW9tZW50IGZyb20gJ21vbWVudCc7XHJcblxyXG5jb25zdCBtb21lbnRDb25zdHJ1Y3RvciA9IG1vbWVudDtcclxuXHJcbkBQaXBlKHtuYW1lOiAnYW1UaW1lQWdvJywgcHVyZTogZmFsc2V9KVxyXG5leHBvcnQgY2xhc3MgVGltZUFnb1BpcGUgaW1wbGVtZW50cyBQaXBlVHJhbnNmb3JtLCBPbkRlc3Ryb3kge1xyXG4gIHByaXZhdGUgY3VycmVudFRpbWVyOiBudW1iZXIgfCBudWxsO1xyXG5cclxuICBwcml2YXRlIGxhc3RUaW1lOiBOdW1iZXI7XHJcbiAgcHJpdmF0ZSBsYXN0VmFsdWU6IG1vbWVudC5Nb21lbnRJbnB1dDtcclxuICBwcml2YXRlIGxhc3RPbWl0U3VmZml4OiBib29sZWFuO1xyXG4gIHByaXZhdGUgbGFzdExvY2FsZT86IHN0cmluZztcclxuICBwcml2YXRlIGxhc3RUZXh0OiBzdHJpbmc7XHJcbiAgcHJpdmF0ZSBmb3JtYXRGbjogKG06IG1vbWVudC5Nb21lbnQpID0+IHN0cmluZztcclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBjZFJlZjogQ2hhbmdlRGV0ZWN0b3JSZWYsIHByaXZhdGUgbmdab25lOiBOZ1pvbmUpIHtcclxuICB9XHJcblxyXG4gIGZvcm1hdChtOiBtb21lbnQuTW9tZW50KSB7XHJcbiAgICByZXR1cm4gbS5mcm9tKG1vbWVudENvbnN0cnVjdG9yKCksIHRoaXMubGFzdE9taXRTdWZmaXgpO1xyXG4gIH1cclxuXHJcbiAgdHJhbnNmb3JtKHZhbHVlOiBtb21lbnQuTW9tZW50SW5wdXQsIG9taXRTdWZmaXg/OiBib29sZWFuLCBmb3JtYXRGbj86IChtOiBtb21lbnQuTW9tZW50KSA9PiBzdHJpbmcpOiBzdHJpbmcge1xyXG4gICAgaWYgKHRoaXMuaGFzQ2hhbmdlZCh2YWx1ZSwgb21pdFN1ZmZpeCkpIHtcclxuICAgICAgdGhpcy5sYXN0VGltZSA9IHRoaXMuZ2V0VGltZSh2YWx1ZSk7XHJcbiAgICAgIHRoaXMubGFzdFZhbHVlID0gdmFsdWU7XHJcbiAgICAgIHRoaXMubGFzdE9taXRTdWZmaXggPSBvbWl0U3VmZml4O1xyXG4gICAgICB0aGlzLmxhc3RMb2NhbGUgPSB0aGlzLmdldExvY2FsZSh2YWx1ZSk7XHJcbiAgICAgIHRoaXMuZm9ybWF0Rm4gPSBmb3JtYXRGbiB8fCB0aGlzLmZvcm1hdC5iaW5kKHRoaXMpO1xyXG4gICAgICB0aGlzLnJlbW92ZVRpbWVyKCk7XHJcbiAgICAgIHRoaXMuY3JlYXRlVGltZXIoKTtcclxuICAgICAgdGhpcy5sYXN0VGV4dCA9IHRoaXMuZm9ybWF0Rm4obW9tZW50Q29uc3RydWN0b3IodmFsdWUpKTtcclxuXHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLmNyZWF0ZVRpbWVyKCk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHRoaXMubGFzdFRleHQ7XHJcbiAgfVxyXG5cclxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcclxuICAgIHRoaXMucmVtb3ZlVGltZXIoKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgY3JlYXRlVGltZXIoKSB7XHJcbiAgICBpZiAodGhpcy5jdXJyZW50VGltZXIpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IG1vbWVudEluc3RhbmNlID0gbW9tZW50Q29uc3RydWN0b3IodGhpcy5sYXN0VmFsdWUpO1xyXG4gICAgY29uc3QgdGltZVRvVXBkYXRlID0gdGhpcy5nZXRTZWNvbmRzVW50aWxVcGRhdGUobW9tZW50SW5zdGFuY2UpICogMTAwMDtcclxuXHJcbiAgICB0aGlzLmN1cnJlbnRUaW1lciA9IHRoaXMubmdab25lLnJ1bk91dHNpZGVBbmd1bGFyKCgpID0+IHtcclxuICAgICAgaWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnKSB7XHJcbiAgICAgICAgcmV0dXJuIHdpbmRvdy5zZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgIHRoaXMubGFzdFRleHQgPSB0aGlzLmZvcm1hdEZuKG1vbWVudENvbnN0cnVjdG9yKHRoaXMubGFzdFZhbHVlKSk7XHJcblxyXG4gICAgICAgICAgdGhpcy5jdXJyZW50VGltZXIgPSBudWxsO1xyXG4gICAgICAgICAgdGhpcy5uZ1pvbmUucnVuKCgpID0+IHRoaXMuY2RSZWYubWFya0ZvckNoZWNrKCkpO1xyXG4gICAgICAgIH0sIHRpbWVUb1VwZGF0ZSk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSByZW1vdmVUaW1lcigpIHtcclxuICAgIGlmICh0aGlzLmN1cnJlbnRUaW1lcikge1xyXG4gICAgICB3aW5kb3cuY2xlYXJUaW1lb3V0KHRoaXMuY3VycmVudFRpbWVyKTtcclxuICAgICAgdGhpcy5jdXJyZW50VGltZXIgPSBudWxsO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBnZXRTZWNvbmRzVW50aWxVcGRhdGUobW9tZW50SW5zdGFuY2U6IG1vbWVudC5Nb21lbnQpIHtcclxuICAgIGNvbnN0IGhvd09sZCA9IE1hdGguYWJzKG1vbWVudENvbnN0cnVjdG9yKCkuZGlmZihtb21lbnRJbnN0YW5jZSwgJ21pbnV0ZScpKTtcclxuICAgIGlmIChob3dPbGQgPCAxKSB7XHJcbiAgICAgIHJldHVybiAxO1xyXG4gICAgfSBlbHNlIGlmIChob3dPbGQgPCA2MCkge1xyXG4gICAgICByZXR1cm4gMzA7XHJcbiAgICB9IGVsc2UgaWYgKGhvd09sZCA8IDE4MCkge1xyXG4gICAgICByZXR1cm4gMzAwO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgcmV0dXJuIDM2MDA7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGhhc0NoYW5nZWQodmFsdWU6IG1vbWVudC5Nb21lbnRJbnB1dCwgb21pdFN1ZmZpeD86IGJvb2xlYW4pOiBib29sZWFuIHtcclxuICAgIHJldHVybiB0aGlzLmdldFRpbWUodmFsdWUpICE9PSB0aGlzLmxhc3RUaW1lXHJcbiAgICAgIHx8IHRoaXMuZ2V0TG9jYWxlKHZhbHVlKSAhPT0gdGhpcy5sYXN0TG9jYWxlXHJcbiAgICAgIHx8IG9taXRTdWZmaXggIT09IHRoaXMubGFzdE9taXRTdWZmaXg7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGdldFRpbWUodmFsdWU6IG1vbWVudC5Nb21lbnRJbnB1dCk6IG51bWJlciB7XHJcbiAgICBpZiAobW9tZW50LmlzRGF0ZSh2YWx1ZSkpIHtcclxuICAgICAgcmV0dXJuIHZhbHVlLmdldFRpbWUoKTtcclxuICAgIH0gZWxzZSBpZiAobW9tZW50LmlzTW9tZW50KHZhbHVlKSkge1xyXG4gICAgICByZXR1cm4gdmFsdWUudmFsdWVPZigpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgcmV0dXJuIG1vbWVudENvbnN0cnVjdG9yKHZhbHVlKS52YWx1ZU9mKCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGdldExvY2FsZSh2YWx1ZTogbW9tZW50Lk1vbWVudElucHV0KTogc3RyaW5nIHwgbnVsbCB7XHJcbiAgICByZXR1cm4gbW9tZW50LmlzTW9tZW50KHZhbHVlKSA/IHZhbHVlLmxvY2FsZSgpIDogbW9tZW50LmxvY2FsZSgpO1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgeyBQaXBlLCBQaXBlVHJhbnNmb3JtIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCAqIGFzIG1vbWVudCBmcm9tICdtb21lbnQnO1xyXG5cclxuY29uc3QgbW9tZW50Q29uc3RydWN0b3IgPSBtb21lbnQ7XHJcblxyXG5AUGlwZSh7IG5hbWU6ICdhbVV0YycgfSlcclxuZXhwb3J0IGNsYXNzIFV0Y1BpcGUgaW1wbGVtZW50cyBQaXBlVHJhbnNmb3JtIHtcclxuICB0cmFuc2Zvcm0odmFsdWU6IERhdGUgfCBtb21lbnQuTW9tZW50IHwgc3RyaW5nIHwgbnVtYmVyKTogbW9tZW50Lk1vbWVudCB7XHJcbiAgICByZXR1cm4gbW9tZW50Q29uc3RydWN0b3IodmFsdWUpLnV0YygpO1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgeyBNb2R1bGVXaXRoUHJvdmlkZXJzLCBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBOR1hfTU9NRU5UX09QVElPTlMsIE5neE1vbWVudE9wdGlvbnMgfSBmcm9tICcuL21vbWVudC1vcHRpb25zJztcclxuXHJcbmltcG9ydCB7IEFkZFBpcGUgfSBmcm9tICcuL2FkZC5waXBlJztcclxuaW1wb3J0IHsgQ2FsZW5kYXJQaXBlIH0gZnJvbSAnLi9jYWxlbmRhci5waXBlJztcclxuaW1wb3J0IHsgRGF0ZUZvcm1hdFBpcGUgfSBmcm9tICcuL2RhdGUtZm9ybWF0LnBpcGUnO1xyXG5pbXBvcnQgeyBEaWZmZXJlbmNlUGlwZSB9IGZyb20gJy4vZGlmZmVyZW5jZS5waXBlJztcclxuaW1wb3J0IHsgRHVyYXRpb25QaXBlIH0gZnJvbSAnLi9kdXJhdGlvbi5waXBlJztcclxuaW1wb3J0IHsgRnJvbVVuaXhQaXBlIH0gZnJvbSAnLi9mcm9tLXVuaXgucGlwZSc7XHJcbmltcG9ydCB7IEZyb21VdGNQaXBlIH0gZnJvbSAnLi9mcm9tLXV0Yy5waXBlJztcclxuaW1wb3J0IHsgSXNBZnRlclBpcGUgfSBmcm9tICcuL2lzLWFmdGVyLnBpcGUnO1xyXG5pbXBvcnQgeyBJc0JlZm9yZVBpcGUgfSBmcm9tICcuL2lzLWJlZm9yZS5waXBlJztcclxuaW1wb3J0IHsgTG9jYWxUaW1lUGlwZSB9IGZyb20gJy4vbG9jYWwucGlwZSc7XHJcbmltcG9ydCB7IExvY2FsZVBpcGUgfSBmcm9tICcuL2xvY2FsZS5waXBlJztcclxuaW1wb3J0IHsgUGFyc2VQaXBlIH0gZnJvbSAnLi9wYXJzZS5waXBlJztcclxuaW1wb3J0IHsgUGFyc2Vab25lUGlwZSB9IGZyb20gJy4vcGFyc2Utem9uZS5waXBlJztcclxuaW1wb3J0IHsgU3VidHJhY3RQaXBlIH0gZnJvbSAnLi9zdWJ0cmFjdC5waXBlJztcclxuaW1wb3J0IHsgVGltZUFnb1BpcGUgfSBmcm9tICcuL3RpbWUtYWdvLnBpcGUnO1xyXG5pbXBvcnQgeyBVdGNQaXBlIH0gZnJvbSAnLi91dGMucGlwZSc7XHJcblxyXG5jb25zdCBBTkdVTEFSX01PTUVOVF9QSVBFUyA9IFtcclxuICBBZGRQaXBlLFxyXG4gIENhbGVuZGFyUGlwZSxcclxuICBEYXRlRm9ybWF0UGlwZSxcclxuICBEaWZmZXJlbmNlUGlwZSxcclxuICBEdXJhdGlvblBpcGUsXHJcbiAgRnJvbVVuaXhQaXBlLFxyXG4gIFBhcnNlUGlwZSxcclxuICBTdWJ0cmFjdFBpcGUsXHJcbiAgVGltZUFnb1BpcGUsXHJcbiAgVXRjUGlwZSxcclxuICBGcm9tVXRjUGlwZSxcclxuICBMb2NhbFRpbWVQaXBlLFxyXG4gIExvY2FsZVBpcGUsXHJcbiAgUGFyc2Vab25lUGlwZSxcclxuICBJc0JlZm9yZVBpcGUsXHJcbiAgSXNBZnRlclBpcGVcclxuXTtcclxuXHJcbkBOZ01vZHVsZSh7XHJcbiAgZGVjbGFyYXRpb25zOiBBTkdVTEFSX01PTUVOVF9QSVBFUyxcclxuICBleHBvcnRzOiBBTkdVTEFSX01PTUVOVF9QSVBFU1xyXG59KVxyXG5leHBvcnQgY2xhc3MgTW9tZW50TW9kdWxlIHtcclxuICBzdGF0aWMgZm9yUm9vdChvcHRpb25zPzogTmd4TW9tZW50T3B0aW9ucyk6IE1vZHVsZVdpdGhQcm92aWRlcnMge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgbmdNb2R1bGU6IE1vbWVudE1vZHVsZSxcclxuICAgICAgcHJvdmlkZXJzOiBbXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgcHJvdmlkZTogTkdYX01PTUVOVF9PUFRJT05TLCB1c2VWYWx1ZToge1xyXG4gICAgICAgICAgICAuLi5vcHRpb25zXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICBdXHJcbiAgICB9O1xyXG4gIH1cclxufVxyXG4iXSwibmFtZXMiOlsibW9tZW50Q29uc3RydWN0b3IiLCJtb21lbnQuaXNNb21lbnQiLCJtb21lbnQuZHVyYXRpb24iLCJtb21lbnQucmVsYXRpdmVUaW1lVGhyZXNob2xkIiwibW9tZW50LnVuaXgiLCJtb21lbnQudXRjIiwibG9jYWxlIiwibW9tZW50LnBhcnNlWm9uZSIsIm1vbWVudC5pc0RhdGUiLCJtb21lbnQubG9jYWxlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7TUFLTSxpQkFBaUIsR0FBRyxNQUFNO0FBR2hDLE1BQWEsT0FBTzs7Ozs7OztJQUNoQixTQUFTLENBQUMsS0FBVSxFQUFFLE1BQWdDLEVBQUUsSUFBK0I7UUFDbkYsSUFBSSxPQUFPLE1BQU0sS0FBSyxXQUFXLEtBQUssT0FBTyxNQUFNLEtBQUssUUFBUSxJQUFJLE9BQU8sSUFBSSxLQUFLLFdBQVcsQ0FBQyxFQUFFO1lBQzlGLE1BQU0sSUFBSSxLQUFLLENBQUMscUNBQXFDLENB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

/***/ })

}]);
//# sourceMappingURL=default~components-chat-chat-module~components-message-message-module~components-post-post-module~ho~b6f0fa38-es2015.js.map