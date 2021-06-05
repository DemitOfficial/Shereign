import { Component, Input, Output, EventEmitter, ChangeDetectorRef, ChangeDetectionStrategy, forwardRef } from '@angular/core';
import { NG_VALIDATORS, NG_VALUE_ACCESSOR } from '@angular/forms';
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
export class BarRating {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFyLXJhdGluZy5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvc291c2xpL0Rlc2t0b3AvdW50aXRsZWQgZm9sZGVyL25ldy1wcm8vcHJvamVjdHMvbmd4LWJhci1yYXRpbmcvc3JjLyIsInNvdXJjZXMiOlsibGliL2Jhci1yYXRpbmcudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUNMLFNBQVMsRUFDVCxLQUFLLEVBQ0wsTUFBTSxFQUNOLFlBQVksRUFJWixpQkFBaUIsRUFDakIsdUJBQXVCLEVBQ3ZCLFVBQVUsRUFDWCxNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQW1DLGFBQWEsRUFBRSxpQkFBaUIsRUFBZSxNQUFNLGdCQUFnQixDQUFDO0FBRWhILHFEQUFxRDtBQUNyRCxNQUFNLHFCQUFxQixHQUFHO0lBQzVCLE9BQU8sRUFBRSxpQkFBaUI7SUFDMUIsV0FBVyxFQUFFLFVBQVUsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxTQUFTLENBQUM7SUFDeEMsS0FBSyxFQUFFLElBQUk7Q0FDWixDQUFDO0FBRUYsK0NBQStDO0FBQy9DLE1BQU0sc0JBQXNCLEdBQUc7SUFDN0IsT0FBTyxFQUFFLGFBQWE7SUFDdEIsV0FBVyxFQUFFLFVBQVUsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxTQUFTLENBQUM7SUFDeEMsS0FBSyxFQUFFLElBQUk7Q0FDWixDQUFDO0FBU0YsTUFBTSxPQUFPLFNBQVM7SUE2Q3BCLFlBQW9CLGlCQUFvQztRQUFwQyxzQkFBaUIsR0FBakIsaUJBQWlCLENBQW1CO1FBM0N4RCxhQUFRLEdBQXVHLEVBQUUsQ0FBQztRQU9sSCwwREFBMEQ7UUFDakQsUUFBRyxHQUFHLENBQUMsQ0FBQztRQUVqQixrREFBa0Q7UUFDekMsYUFBUSxHQUFHLEtBQUssQ0FBQztRQUUxQixvQkFBb0I7UUFDWCxVQUFLLEdBQUcsU0FBUyxDQUFDO1FBRTNCLHdCQUF3QjtRQUNmLGFBQVEsR0FBRyxLQUFLLENBQUM7UUFFMUIsc0NBQXNDO1FBQzdCLFdBQU0s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LENBQWM7UUFDckIsT0FBTyxDQUFDLElBQUksQ0FBQyxRQUFRLElBQUksQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsUUFBUSxFQUFFLElBQUksRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUM7SUFDakUsQ0FBQztJQU9ELGdCQUFnQixDQUFDLEVBQXVCO1FBQ3RDLElBQUksQ0FBQyxRQUFRLEdBQUcsRUFBRSxDQUFDO0lBQ3JCLENBQUM7SUFFRCxpQkFBaUIsQ0FBQyxFQUFhO1FBQzdCLElBQUksQ0FBQyxTQUFTLEdBQUcsRUFBRSxDQUFDO0lBQ3RCLENBQUM7SUFFRCxnQkFBZ0IsQ0FBQyxVQUFtQjtRQUNsQyxJQUFJLENBQUMsUUFBUSxHQUFHLFVBQVUsQ0FBQztJQUM3QixDQUFDOzs7WUFySkYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxZQUFZO2dCQUN0Qiw4akJBQWdDO2dCQUVoQyxTQUFTLEVBQUUsQ0FBQyxxQkFBcUIsRUFBRSxzQkFBc0IsQ0FBQztnQkFDMUQsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07O2FBQ2hEOzs7WUExQkMsaUJBQWlCOzs7bUJBa0NoQixLQUFLO2tCQUdMLEtBQUs7dUJBR0wsS0FBSztvQkFHTCxLQUFLO3VCQUdMLEtBQUs7cUJBR0wsS0FBSzt1QkFHTCxLQUFLO29CQU1MLE1BQU07b0JBTU4sTUFBTTt5QkFNTixNQUFNIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQ29tcG9uZW50LFxuICBJbnB1dCxcbiAgT3V0cHV0LFxuICBFdmVudEVtaXR0ZXIsXG4gIE9uSW5pdCxcbiAgT25DaGFuZ2VzLFxuICBTaW1wbGVDaGFuZ2VzLFxuICBDaGFuZ2VEZXRlY3RvclJlZixcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG4gIGZvcndhcmRSZWZcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb250cm9sVmFsdWVBY2Nlc3NvciwgVmFsaWRhdG9yLCBOR19WQUxJREFUT1JTLCBOR19WQUxVRV9BQ0NFU1NPUiwgRm9ybUNvbnRyb2wgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5cbi8qKiBUaGlzIGFsbG93cyBzdXBwb3J0IFsobmdNb2RlbCldIGFuZCBuZ0NvbnRyb2wuICovXG5jb25zdCBSQVRJTkdfVkFMVUVfQUNDRVNTT1IgPSB7XG4gIHByb3ZpZGU6IE5HX1ZBTFVFX0FDQ0VTU09SLFxuICB1c2VFeGlzdGluZzogZm9yd2FyZFJlZigoKSA9PiBCYXJSYXRpbmcpLFxuICBtdWx0aTogdHJ1ZVxufTtcblxuLyoqIFRoaXMgYWxsb3dzIGNvbnRyb2wgcmVxdWlyZWQgdmFsaWRhdGlvbi4gKi9cbmNvbnN0IFJBVElOR19WQUxVRV9WQUxJREFUT1IgPSB7XG4gIHByb3ZpZGU6IE5HX1ZBTElEQVRPUlMsXG4gIHVzZUV4aXN0aW5nOiBmb3J3YXJkUmVmKCgpID0+IEJhclJhdGluZyksXG4gIG11bHRpOiB0cnVlLFxufTtcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYmFyLXJhdGluZycsXG4gIHRlbXBsYXRlVXJsOiAnLi9iYXItcmF0aW5nLmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9iYXItcmF0aW5nLnNjc3MnXSxcbiAgcHJvdmlkZXJzOiBbUkFUSU5HX1ZBTFVFX0FDQ0VTU09SLCBSQVRJTkdfVkFMVUVfVkFMSURBVE9SXSxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2hcbn0pXG5leHBvcnQgY2xhc3MgQmFyUmF0aW5nIGltcGxlbWVudHMgT25Jbml0LCBPbkNoYW5nZXMsIENvbnRyb2xWYWx1ZUFjY2Vzc29yLCBWYWxpZGF0b3Ige1xuXG4gIGNvbnRleHRzOiB7IGZyYWN0aW9uOiBib29sZWFuLCBzZWxlY3RlZDogYm9vbGVhbiwgYWN0aXZlOiBib29sZWFuLCBjbGljazogKGUpID0+IHZvaWQsIGVudGVyOiAoKSA9PiB2b2lkIH1bXSA9IFtdO1xuICBuZXh0UmF0ZTogbnVtYmVyO1xuICBkaXNhYmxlZDogYm9vbGVhbjtcblxuICAvKiogQ3VycmVudCByYXRpbmcuIENhbiBiZSBhIGRlY2ltYWwgdmFsdWUgbGlrZSAzLjE0ICovXG4gIEBJbnB1dCgpIHJhdGU7XG5cbiAgLyoqIE1heGltYWwgcmF0aW5nIHRoYXQgY2FuIGJlIGdpdmVuIHVzaW5nIHRoaXMgd2lkZ2V0LiAqL1xuICBASW5wdXQoKSBtYXggPSA1O1xuXG4gIC8qKiBBIGZsYWcgaW5kaWNhdGluZyBpZiByYXRpbmcgY2FuIGJlIHVwZGF0ZWQuICovXG4gIEBJbnB1dCgpIHJlYWRPbmx5ID0gZmFsc2U7XG5cbiAgLyoqIFNldCB0aGUgdGhlbWUgKi9cbiAgQElucHV0KCkgdGhlbWUgPSAnZGVmYXVsdCc7XG5cbiAgLyoqIFNob3cgcmF0aW5nIHRpdGxlICovXG4gIEBJbnB1dCgpIHNob3dUZXh0ID0gZmFsc2U7XG5cbiAgLyoqIFJlcGxhY2UgcmF0ZSB2YWx1ZSB3aXRoIGEgdGl0bGUgKi9cbiAgQElucHV0KCkgdGl0bGVzID0gW107XG5cbiAgLyoqIEEgZmxhZyBpbmRpY2F0aW5nIGlmIHJhdGluZyBpcyByZXF1aXJlZCBmb3IgZm9ybSB2YWxpZGF0aW9uLiAqL1xuICBASW5wdXQoKSByZXF1aXJlZCA9IGZhbHNlO1xuXG4gIC8qKlxuICAgKiBBbiBldmVudCBmaXJlZCB3aGVuIGEgdXNlciBpcyBob3ZlcmluZyBvdmVyIGEgZ2l2ZW4gcmF0aW5nLlxuICAgKiBFdmVudCdzIHBheWxvYWQgZXF1YWxzIHRvIHRoZSByYXRpbmcgYmVpbmcgaG92ZXJlZCBvdmVyLlxuICAgKi9cbiAgQE91dHB1dCgpIGhvdmVyID0gbmV3IEV2ZW50RW1pdHRlcjxudW1iZXI+KCk7XG5cbiAgLyoqXG4gICAqIEFuIGV2ZW50IGZpcmVkIHdoZW4gYSB1c2VyIHN0b3BzIGhvdmVyaW5nIG92ZXIgYSBnaXZlbiByYXRpbmcuXG4gICAqIEV2ZW50J3MgcGF5bG9hZCBlcXVhbHMgdG8gdGhlIHJhdGluZyBvZiB0aGUgbGFzdCBpdGVtIGJlaW5nIGhvdmVyZWQgb3Zlci5cbiAgICovXG4gIEBPdXRwdXQoKSBsZWF2ZSA9IG5ldyBFdmVudEVtaXR0ZXI8bnVtYmVyPigpO1xuXG4gIC8qKlxuICAgKiBBbiBldmVudCBmaXJlZCB3aGVuIGEgdXNlciBzZWxlY3RzIGEgbmV3IHJhdGluZy5cbiAgICogRXZlbnQncyBwYXlsb2FkIGVxdWFscyB0byB0aGUgbmV3bHkgc2VsZWN0ZWQgcmF0aW5nLlxuICAgKi9cbiAgQE91dHB1dCgpIHJhdGVDaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPG51bWJlcj4odHJ1ZSk7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBjaGFuZ2VEZXRlY3RvclJlZjogQ2hhbmdlRGV0ZWN0b3JSZWYpIHtcbiAgfVxuXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpOiB2b2lkIHtcbiAgICBpZiAoY2hhbmdlcy5yYXRlKSB7XG4gICAgICB0aGlzLnVwZGF0ZSh0aGlzLnJhdGUpO1xuICAgIH1cbiAgfVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIHRoaXMuY29udGV4dHMgPSBBcnJheS5mcm9tKHsgbGVuZ3RoOiB0aGlzLm1heCB9LCAoY29udGV4dCwgaSkgPT4gKHtcbiAgICAgIHNlbGVjdGVkOiBmYWxzZSxcbiAgICAgIGZyYWN0aW9uOiBmYWxzZSxcbiAgICAgIGFjdGl2ZTogZmFsc2UsXG4gICAgICBjbGljazogKGUpID0+IHRoaXMuaGFuZGxlQ2xpY2soZSwgaSArIDEpLFxuICAgICAgZW50ZXI6ICgpID0+IHRoaXMuaGFuZGxlRW50ZXIoaSArIDEpXG4gICAgfSkpO1xuXG4gICAgdGhpcy51cGRhdGVTdGF0ZSh0aGlzLnJhdGUpO1xuICB9XG5cbiAgdXBkYXRlKG5ld1JhdGU6IG51bWJlciwgaW50ZXJuYWxDaGFuZ2UgPSB0cnVlKTogdm9pZCB7XG4gICAgaWYgKCF0aGlzLnJlYWRPbmx5ICYmICF0aGlzLmRpc2FibGVkICYmIHRoaXMucmF0ZSAhPT0gbmV3UmF0ZSkge1xuICAgICAgdGhpcy5yYXRlID0gbmV3UmF0ZTtcbiAgICAgIHRoaXMucmF0ZUNoYW5nZS5lbWl0KHRoaXMucmF0ZSk7XG4gICAgfVxuICAgIGlmIChpbnRlcm5hbENoYW5nZSkge1xuICAgICAgdGhpcy5vbkNoYW5nZSh0aGlzLnJhdGUpO1xuICAgICAgdGhpcy5vblRvdWNoZWQoKTtcbiAgICB9XG4gICAgdGhpcy51cGRhdGVTdGF0ZSh0aGlzLnJhdGUpO1xuICB9XG5cbiAgLyoqIFJlc2V0IHJhdGUgdmFsdWUgKi9cbiAgcmVzZXQoKTogdm9pZCB7XG4gICAgdGhpcy5sZWF2ZS5lbWl0KHRoaXMubmV4dFJhdGUpO1xuICAgIHRoaXMudXBkYXRlU3RhdGUodGhpcy5yYXRlKTtcbiAgfVxuXG4gIHByaXZhdGUgdXBkYXRlU3RhdGUobmV4dFZhbHVlKTogdm9pZCB7XG4gICAgLyoqIFNldCByYXRlIHZhbHVlIGFzIHRleHQgKi9cbiAgICB0aGlzLm5leHRSYXRlID0gbmV4dFZhbHVlIC0gMTtcbiAgICAvKiogU2V0IHRoZSByYXRpbmcgKi9cbiAgICB0aGlzLmNvbnRleHRzID0gQXJyYXkuZnJvbSh7IGxlbmd0aDogdGhpcy5tYXggfSwgKGNvbnRleHQsIGluZGV4KSA9PiAoe1xuICAgICAgc2VsZWN0ZWQ6IGluZGV4ICsgMSA8PSBuZXh0VmFsdWUsXG4gICAgICBmcmFjdGlvbjogKGluZGV4ICsgMSA9PT0gTWF0aC5yb3VuZChuZXh0VmFsdWUpICYmIG5leHRWYWx1ZSAlIDEpID49IDAuNSxcbiAgICAgIGFjdGl2ZTogZmFsc2UsXG4gICAgICBjbGljazogKGUpID0+IHRoaXMuaGFuZGxlQ2xpY2soZSwgaW5kZXgpLFxuICAgICAgZW50ZXI6ICgpID0+IHRoaXMuaGFuZGxlRW50ZXIoaW5kZXgpXG4gICAgfSkpO1xuICB9XG5cbiAgcHJpdmF0ZSBoYW5kbGVDbGljayhlLCB2YWx1ZSk6IHZvaWQge1xuICAgIC8qKiAoTk9UIFRFU1RFRCkgUmVtb3ZlIDMwMG1zIGNsaWNrIGRlbGF5IG9uIHRvdWNoIGRldmljZXMgKi9cbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICB0aGlzLnVwZGF0ZSh2YWx1ZSArIDEpO1xuICB9XG5cbiAgcHJpdmF0ZSBoYW5kbGVFbnRlcihpbmRleCk6IHZvaWQge1xuICAgIGlmICghdGhpcy5kaXNhYmxlZCAmJiAhdGhpcy5yZWFkT25seSkge1xuICAgICAgLyoqIEFkZCBzZWxlY3RlZCBjbGFzcyBmb3IgcmF0aW5nIGhvdmVyICovXG4gICAgICB0aGlzLmNvbnRleHRzLm1hcCgoY29udGV4dCwgaSkgPT4ge1xuICAgICAgICBjb250ZXh0LmFjdGl2ZSA9IGkgPD0gaW5kZXg7XG4gICAgICAgIGNvbnRleHQuZnJhY3Rpb24gPSBmYWxzZTtcbiAgICAgICAgY29udGV4dC5zZWxlY3RlZCA9IGZhbHNlO1xuICAgICAgfSk7XG4gICAgICB0aGlzLm5leHRSYXRlID0gaW5kZXg7XG4gICAgICB0aGlzLmhvdmVyLmVtaXQoaW5kZXgpO1xuICAgIH1cbiAgfVxuXG4gIC8qKiBUaGlzIGlzIHRoZSBpbml0aWFsIHZhbHVlIHNldCB0byB0aGUgY29tcG9uZW50ICovXG4gIHdyaXRlVmFsdWUodmFsdWU6IG51bWJlcik6IHZvaWQge1xuICAgIHRoaXMudXBkYXRlKHZhbHVlLCBmYWxzZSk7XG4gICAgdGhpcy5jaGFuZ2VEZXRlY3RvclJlZi5tYXJrRm9yQ2hlY2soKTtcbiAgfVxuXG4gIHZhbGlkYXRlKGM6IEZvcm1Db250cm9sKTogeyByZXF1aXJlZDogYm9vbGVhbiB9IHwgbnVsbCB7XG4gICAgcmV0dXJuICh0aGlzLnJlcXVpcmVkICYmICFjLnZhbHVlKSA/IHsgcmVxdWlyZWQ6IHRydWUgfSA6IG51bGw7XG4gIH1cblxuICBvbkNoYW5nZSA9IChfOiBhbnkpID0+IHtcbiAgfTtcbiAgb25Ub3VjaGVkID0gKCkgPT4ge1xuICB9O1xuXG4gIHJlZ2lzdGVyT25DaGFuZ2UoZm46ICh2YWx1ZTogYW55KSA9PiBhbnkpOiB2b2lkIHtcbiAgICB0aGlzLm9uQ2hhbmdlID0gZm47XG4gIH1cblxuICByZWdpc3Rlck9uVG91Y2hlZChmbjogKCkgPT4gYW55KTogdm9pZCB7XG4gICAgdGhpcy5vblRvdWNoZWQgPSBmbjtcbiAgfVxuXG4gIHNldERpc2FibGVkU3RhdGUoaXNEaXNhYmxlZDogYm9vbGVhbik6IHZvaWQge1xuICAgIHRoaXMuZGlzYWJsZWQgPSBpc0Rpc2FibGVkO1xuICB9XG5cbn1cbiJdfQ==