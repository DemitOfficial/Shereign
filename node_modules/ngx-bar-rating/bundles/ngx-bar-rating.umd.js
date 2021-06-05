(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/forms'), require('@angular/common')) :
    typeof define === 'function' && define.amd ? define('ngx-bar-rating', ['exports', '@angular/core', '@angular/forms', '@angular/common'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global['ngx-bar-rating'] = {}, global.ng.core, global.ng.forms, global.ng.common));
}(this, (function (exports, core, forms, common) { 'use strict';

    /** This allows support [(ngModel)] and ngControl. */
    var RATING_VALUE_ACCESSOR = {
        provide: forms.NG_VALUE_ACCESSOR,
        useExisting: core.forwardRef(function () { return BarRating; }),
        multi: true
    };
    /** This allows control required validation. */
    var RATING_VALUE_VALIDATOR = {
        provide: forms.NG_VALIDATORS,
        useExisting: core.forwardRef(function () { return BarRating; }),
        multi: true,
    };
    var BarRating = /** @class */ (function () {
        function BarRating(changeDetectorRef) {
            this.changeDetectorRef = changeDetectorRef;
            this.contexts = [];
            /** Maximal rating that can be given using this widget. */
            this.max = 5;
            /** A flag indicating if rating can be updated. */
            this.readOnly = false;
            /** Set the theme */
            this.theme = 'default';
            /** Show rating title */
            this.showText = false;
            /** Replace rate value with a title */
            this.titles = [];
            /** A flag indicating if rating is required for form validation. */
            this.required = false;
            /**
             * An event fired when a user is hovering over a given rating.
             * Event's payload equals to the rating being hovered over.
             */
            this.hover = new core.EventEmitter();
            /**
             * An event fired when a user stops hovering over a given rating.
             * Event's payload equals to the rating of the last item being hovered over.
             */
            this.leave = new core.EventEmitter();
            /**
             * An event fired when a user selects a new rating.
             * Event's payload equals to the newly selected rating.
             */
            this.rateChange = new core.EventEmitter(true);
            this.onChange = function (_) {
            };
            this.onTouched = function () {
            };
        }
        BarRating.prototype.ngOnChanges = function (changes) {
            if (changes.rate) {
                this.update(this.rate);
            }
        };
        BarRating.prototype.ngOnInit = function () {
            var _this = this;
            this.contexts = Array.from({ length: this.max }, function (context, i) { return ({
                selected: false,
                fraction: false,
                active: false,
                click: function (e) { return _this.handleClick(e, i + 1); },
                enter: function () { return _this.handleEnter(i + 1); }
            }); });
            this.updateState(this.rate);
        };
        BarRating.prototype.update = function (newRate, internalChange) {
            if (internalChange === void 0) { internalChange = true; }
            if (!this.readOnly && !this.disabled && this.rate !== newRate) {
                this.rate = newRate;
                this.rateChange.emit(this.rate);
            }
            if (internalChange) {
                this.onChange(this.rate);
                this.onTouched();
            }
            this.updateState(this.rate);
        };
        /** Reset rate value */
        BarRating.prototype.reset = function () {
            this.leave.emit(this.nextRate);
            this.updateState(this.rate);
        };
        BarRating.prototype.updateState = function (nextValue) {
            var _this = this;
            /** Set rate value as text */
            this.nextRate = nextValue - 1;
            /** Set the rating */
            this.contexts = Array.from({ length: this.max }, function (context, index) { return ({
                selected: index + 1 <= nextValue,
                fraction: (index + 1 === Math.round(nextValue) && nextValue % 1) >= 0.5,
                active: false,
                click: function (e) { return _this.handleClick(e, index); },
                enter: function () { return _this.handleEnter(index); }
            }); });
        };
        BarRating.prototype.handleClick = function (e, value) {
            /** (NOT TESTED) Remove 300ms click delay on touch devices */
            e.preventDefault();
            e.stopPropagation();
            this.update(value + 1);
        };
        BarRating.prototype.handleEnter = function (index) {
            if (!this.disabled && !this.readOnly) {
                /** Add selected class for rating hover */
                this.contexts.map(function (context, i) {
                    context.active = i <= index;
                    context.fraction = false;
                    context.selected = false;
                });
                this.nextRate = index;
                this.hover.emit(index);
            }
        };
        /** This is the initial value set to the component */
        BarRating.prototype.writeValue = function (value) {
            this.update(value, false);
            this.changeDetectorRef.markForCheck();
        };
        BarRating.prototype.validate = function (c) {
            return (this.required && !c.value) ? { required: true } : null;
        };
        BarRating.prototype.registerOnChange = function (fn) {
            this.onChange = fn;
        };
        BarRating.prototype.registerOnTouched = function (fn) {
            this.onTouched = fn;
        };
        BarRating.prototype.setDisabledState = function (isDisabled) {
            this.disabled = isDisabled;
        };
        return BarRating;
    }());
    BarRating.decorators = [
        { type: core.Component, args: [{
                    selector: 'bar-rating',
                    template: "<div class=\"br br-{{theme}}\"\n     [class.br-readonly]=\"readOnly\"\n     [class.br-disabled]=\"disabled\">\n\n  <div class=\"br-units\" (mouseleave)=\"reset()\">\n\n    <div class=\"br-unit\" *ngFor=\"let unit of contexts\"\n         [class.br-fraction]=\"unit.fraction\"\n         [class.br-selected]=\"unit.selected\"\n         [class.br-active]=\"unit.active\"\n         (click)=\"unit.click($event)\"\n         (mouseenter)=\"unit.enter()\"></div>\n  </div>\n\n  <div *ngIf=\"showText\" class=\"br-text\">{{ nextRate | rateTitle: titles }}</div>\n</div>\n",
                    providers: [RATING_VALUE_ACCESSOR, RATING_VALUE_VALIDATOR],
                    changeDetection: core.ChangeDetectionStrategy.OnPush,
                    styles: ["*{box-sizing:border-box}.br{margin:15px 0;position:relative}.br-units{display:flex;flex-wrap:nowrap}.br-unit{-webkit-font-smoothing:antialiased;cursor:pointer;text-rendering:auto}.br-disabled .br-unit,.br-readonly .br-unit{cursor:default}"]
                },] }
    ];
    BarRating.ctorParameters = function () { return [
        { type: core.ChangeDetectorRef }
    ]; };
    BarRating.propDecorators = {
        rate: [{ type: core.Input }],
        max: [{ type: core.Input }],
        readOnly: [{ type: core.Input }],
        theme: [{ type: core.Input }],
        showText: [{ type: core.Input }],
        titles: [{ type: core.Input }],
        required: [{ type: core.Input }],
        hover: [{ type: core.Output }],
        leave: [{ type: core.Output }],
        rateChange: [{ type: core.Output }]
    };

    var BarRatingPipe = /** @class */ (function () {
        function BarRatingPipe() {
        }
        BarRatingPipe.prototype.transform = function (value, titles) {
            if (value === void 0) { value = 0; }
            /** Initialize value with 0 in case of undefined */
            return titles[value] || value + 1;
        };
        return BarRatingPipe;
    }());
    BarRatingPipe.decorators = [
        { type: core.Pipe, args: [{
                    name: 'rateTitle'
                },] }
    ];

    var BarRatingModule = /** @class */ (function () {
        function BarRatingModule() {
        }
        return BarRatingModule;
    }());
    BarRatingModule.decorators = [
        { type: core.NgModule, args: [{
                    declarations: [BarRating, BarRatingPipe],
                    imports: [
                        common.CommonModule,
                        forms.FormsModule
                    ],
                    exports: [BarRating]
                },] }
    ];

    /**
     * Generated bundle index. Do not edit.
     */

    exports.BarRating = BarRating;
    exports.BarRatingModule = BarRatingModule;
    exports.ɵa = BarRatingPipe;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=ngx-bar-rating.umd.js.map
