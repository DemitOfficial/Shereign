import { EventEmitter, OnInit, OnChanges, SimpleChanges, ChangeDetectorRef } from '@angular/core';
import { ControlValueAccessor, Validator, FormControl } from '@angular/forms';
import * as ɵngcc0 from '@angular/core';
export declare class BarRating implements OnInit, OnChanges, ControlValueAccessor, Validator {
    private changeDetectorRef;
    contexts: {
        fraction: boolean;
        selected: boolean;
        active: boolean;
        click: (e: any) => void;
        enter: () => void;
    }[];
    nextRate: number;
    disabled: boolean;
    /** Current rating. Can be a decimal value like 3.14 */
    rate: any;
    /** Maximal rating that can be given using this widget. */
    max: number;
    /** A flag indicating if rating can be updated. */
    readOnly: boolean;
    /** Set the theme */
    theme: string;
    /** Show rating title */
    showText: boolean;
    /** Replace rate value with a title */
    titles: any[];
    /** A flag indicating if rating is required for form validation. */
    required: boolean;
    /**
     * An event fired when a user is hovering over a given rating.
     * Event's payload equals to the rating being hovered over.
     */
    hover: EventEmitter<number>;
    /**
     * An event fired when a user stops hovering over a given rating.
     * Event's payload equals to the rating of the last item being hovered over.
     */
    leave: EventEmitter<number>;
    /**
     * An event fired when a user selects a new rating.
     * Event's payload equals to the newly selected rating.
     */
    rateChange: EventEmitter<number>;
    constructor(changeDetectorRef: ChangeDetectorRef);
    ngOnChanges(changes: SimpleChanges): void;
    ngOnInit(): void;
    update(newRate: number, internalChange?: boolean): void;
    /** Reset rate value */
    reset(): void;
    private updateState;
    private handleClick;
    private handleEnter;
    /** This is the initial value set to the component */
    writeValue(value: number): void;
    validate(c: FormControl): {
        required: boolean;
    } | null;
    onChange: (_: any) => void;
    onTouched: () => void;
    registerOnChange(fn: (value: any) => any): void;
    registerOnTouched(fn: () => any): void;
    setDisabledState(isDisabled: boolean): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<BarRating, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<BarRating, "bar-rating", never, { "max": "max"; "readOnly": "readOnly"; "theme": "theme"; "showText": "showText"; "titles": "titles"; "required": "required"; "rate": "rate"; }, { "hover": "hover"; "leave": "leave"; "rateChange": "rateChange"; }, never, never>;
}

//# sourceMappingURL=bar-rating.d.ts.map