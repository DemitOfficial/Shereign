import { forwardRef, EventEmitter, Component, ChangeDetectionStrategy, ChangeDetectorRef, Input, Output, Pipe, NgModule } from '@angular/core';
import { NG_VALUE_ACCESSOR, NG_VALIDATORS, FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

/** This allows support [(ngModel)] and ngControl. */
const RATING_VALUE_ACCESSOR = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => BarRating),
    multi: true
};
/** This allows control required validation. */
const RATING_VALUE_VALIDATOR = {
    provide: NG_VALIDATORS,
    useExisting: forwardRef(() => BarRating),
    multi: true,
};
class BarRating {
    constructor(changeDetectorRef) {
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
        this.hover = new EventEmitter();
        /**
         * An event fired when a user stops hovering over a given rating.
         * Event's payload equals to the rating of the last item being hovered over.
         */
        this.leave = new EventEmitter();
        /**
         * An event fired when a user selects a new rating.
         * Event's payload equals to the newly selected rating.
         */
        this.rateChange = new EventEmitter(true);
        this.onChange = (_) => {
        };
        this.onTouched = () => {
        };
    }
    ngOnChanges(changes) {
        if (changes.rate) {
            this.update(this.rate);
        }
    }
    ngOnInit() {
        this.contexts = Array.from({ length: this.max }, (context, i) => ({
            selected: false,
            fraction: false,
            active: false,
            click: (e) => this.handleClick(e, i + 1),
            enter: () => this.handleEnter(i + 1)
        }));
        this.updateState(this.rate);
    }
    update(newRate, internalChange = true) {
        if (!this.readOnly && !this.disabled && this.rate !== newRate) {
            this.rate = newRate;
            this.rateChange.emit(this.rate);
        }
        if (internalChange) {
            this.onChange(this.rate);
            this.onTouched();
        }
        this.updateState(this.rate);
    }
    /** Reset rate value */
    reset() {
        this.leave.emit(this.nextRate);
        this.updateState(this.rate);
    }
    updateState(nextValue) {
        /** Set rate value as text */
        this.nextRate = nextValue - 1;
        /** Set the rating */
        this.contexts = Array.from({ length: this.max }, (context, index) => ({
            selected: index + 1 <= nextValue,
            fraction: (index + 1 === Math.round(nextValue) && nextValue % 1) >= 0.5,
            active: false,
            click: (e) => this.handleClick(e, index),
            enter: () => this.handleEnter(index)
        }));
    }
    handleClick(e, value) {
        /** (NOT TESTED) Remove 300ms click delay on touch devices */
        e.preventDefault();
        e.stopPropagation();
        this.update(value + 1);
    }
    handleEnter(index) {
        if (!this.disabled && !this.readOnly) {
            /** Add selected class for rating hover */
            this.contexts.map((context, i) => {
                context.active = i <= index;
                context.fraction = false;
                context.selected = false;
            });
            this.nextRate = index;
            this.hover.emit(index);
        }
    }
    /** This is the initial value set to the component */
    writeValue(value) {
        this.update(value, false);
        this.changeDetectorRef.markForCheck();
    }
    validate(c) {
        return (this.required && !c.value) ? { required: true } : null;
    }
    registerOnChange(fn) {
        this.onChange = fn;
    }
    registerOnTouched(fn) {
        this.onTouched = fn;
    }
    setDisabledState(isDisabled) {
        this.disabled = isDisabled;
    }
}
BarRating.decorators = [
    { type: Component, args: [{
                selector: 'bar-rating',
                template: "<div class=\"br br-{{theme}}\"\n     [class.br-readonly]=\"readOnly\"\n     [class.br-disabled]=\"disabled\">\n\n  <div class=\"br-units\" (mouseleave)=\"reset()\">\n\n    <div class=\"br-unit\" *ngFor=\"let unit of contexts\"\n         [class.br-fraction]=\"unit.fraction\"\n         [class.br-selected]=\"unit.selected\"\n         [class.br-active]=\"unit.active\"\n         (click)=\"unit.click($event)\"\n         (mouseenter)=\"unit.enter()\"></div>\n  </div>\n\n  <div *ngIf=\"showText\" class=\"br-text\">{{ nextRate | rateTitle: titles }}</div>\n</div>\n",
                providers: [RATING_VALUE_ACCESSOR, RATING_VALUE_VALIDATOR],
                changeDetection: ChangeDetectionStrategy.OnPush,
                styles: ["*{box-sizing:border-box}.br{margin:15px 0;position:relative}.br-units{display:flex;flex-wrap:nowrap}.br-unit{-webkit-font-smoothing:antialiased;cursor:pointer;text-rendering:auto}.br-disabled .br-unit,.br-readonly .br-unit{cursor:default}"]
            },] }
];
BarRating.ctorParameters = () => [
    { type: ChangeDetectorRef }
];
BarRating.propDecorators = {
    rate: [{ type: Input }],
    max: [{ type: Input }],
    readOnly: [{ type: Input }],
    theme: [{ type: Input }],
    showText: [{ type: Input }],
    titles: [{ type: Input }],
    required: [{ type: Input }],
    hover: [{ type: Output }],
    leave: [{ type: Output }],
    rateChange: [{ type: Output }]
};

class BarRatingPipe {
    transform(value = 0, titles) {
        /** Initialize value with 0 in case of undefined */
        return titles[value] || value + 1;
    }
}
BarRatingPipe.decorators = [
    { type: Pipe, args: [{
                name: 'rateTitle'
            },] }
];

class BarRatingModule {
}
BarRatingModule.decorators = [
    { type: NgModule, args: [{
                declarations: [BarRating, BarRatingPipe],
                imports: [
                    CommonModule,
                    FormsModule
                ],
                exports: [BarRating]
            },] }
];

/**
 * Generated bundle index. Do not edit.
 */

export { BarRating, BarRatingModule, BarRatingPipe as ɵa };
//# sourceMappingURL=ngx-bar-rating.js.map
