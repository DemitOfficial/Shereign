/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, ElementRef, ViewEncapsulation } from '@angular/core';
import SimpleBar from 'simplebar/dist/simplebar-core.esm';
var SimplebarAngularComponent = /** @class */ (function () {
    function SimplebarAngularComponent(elRef) {
        this.elRef = elRef;
    }
    /**
     * @return {?}
     */
    SimplebarAngularComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () { };
    /**
     * @return {?}
     */
    SimplebarAngularComponent.prototype.ngAfterViewInit = /**
     * @return {?}
     */
    function () {
        this.SimpleBar = new SimpleBar(this.elRef.nativeElement, this.options || {});
    };
    /**
     * @return {?}
     */
    SimplebarAngularComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.SimpleBar.unMount();
        this.SimpleBar = null;
    };
    SimplebarAngularComponent.decorators = [
        { type: Component, args: [{
                    selector: 'ngx-simplebar',
                    host: { 'data-simplebar': 'init' },
                    template: "<div class=\"simplebar-wrapper\">\n  <div class=\"simplebar-height-auto-observer-wrapper\">\n    <div class=\"simplebar-height-auto-observer\"></div>\n  </div>\n  <div class=\"simplebar-mask\">\n    <div class=\"simplebar-offset\">\n      <div class=\"simplebar-content-wrapper\">\n        <div class=\"simplebar-content\">\n          <ng-content></ng-content>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"simplebar-placeholder\"></div>\n</div>\n<div class=\"simplebar-track simplebar-horizontal\">\n  <div class=\"simplebar-scrollbar\"></div>\n</div>\n<div class=\"simplebar-track simplebar-vertical\">\n  <div class=\"simplebar-scrollbar\"></div>\n</div>\n",
                    encapsulation: ViewEncapsulation.None,
                    styles: ["[data-simplebar]{position:relative;-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-direction:column;flex-wrap:wrap;-webkit-box-pack:start;justify-content:flex-start;align-content:flex-start;-webkit-box-align:start;align-items:flex-start}.simplebar-wrapper{overflow:hidden;width:inherit;height:inherit;max-width:inherit;max-height:inherit}.simplebar-mask{direction:inherit;position:absolute;overflow:hidden;padding:0;margin:0;left:0;top:0;bottom:0;right:0;width:auto!important;height:auto!important;z-index:0}.simplebar-offset{direction:inherit!important;box-sizing:inherit!important;resize:none!important;position:absolute;top:0;left:0;bottom:0;right:0;padding:0;margin:0;-webkit-overflow-scrolling:touch}.simplebar-content-wrapper{direction:inherit;box-sizing:border-box!important;position:relative;display:block;height:100%;width:auto;max-width:100%;max-height:100%;scrollbar-width:none;-ms-overflow-style:none}.simplebar-content-wrapper::-webkit-scrollbar,.simplebar-hide-scrollbar::-webkit-scrollbar{width:0;height:0}.simplebar-content:after,.simplebar-content:before{content:' ';display:table}.simplebar-placeholder{max-height:100%;max-width:100%;width:100%;pointer-events:none}.simplebar-height-auto-observer-wrapper{box-sizing:inherit!important;height:100%;width:100%;max-width:1px;position:relative;float:left;max-height:1px;overflow:hidden;z-index:-1;padding:0;margin:0;pointer-events:none;-webkit-box-flex:inherit;flex-grow:inherit;flex-shrink:0;flex-basis:0}.simplebar-height-auto-observer{box-sizing:inherit;display:block;opacity:0;position:absolute;top:0;left:0;height:1000%;width:1000%;min-height:1px;min-width:1px;overflow:hidden;pointer-events:none;z-index:-1}.simplebar-track{z-index:1;position:absolute;right:0;bottom:0;pointer-events:none;overflow:hidden}[data-simplebar].simplebar-dragging .simplebar-content{pointer-events:none;-moz-user-select:none;-ms-user-select:none;user-select:none;-webkit-user-select:none}[data-simplebar].simplebar-dragging .simplebar-track{pointer-events:all}.simplebar-scrollbar{position:absolute;left:0;right:0;min-height:10px}.simplebar-scrollbar:before{position:absolute;content:'';background:#000;border-radius:7px;left:2px;right:2px;opacity:0;-webkit-transition:opacity .2s linear;transition:opacity .2s linear}.simplebar-scrollbar.simplebar-visible:before{opacity:.5;-webkit-transition:opacity linear;transition:opacity linear}.simplebar-track.simplebar-vertical{top:0;width:11px}.simplebar-track.simplebar-vertical .simplebar-scrollbar:before{top:2px;bottom:2px}.simplebar-track.simplebar-horizontal{left:0;height:11px}.simplebar-track.simplebar-horizontal .simplebar-scrollbar:before{height:100%;left:2px;right:2px}.simplebar-track.simplebar-horizontal .simplebar-scrollbar{right:auto;left:0;top:2px;height:7px;min-height:0;min-width:10px;width:auto}[data-simplebar-direction=rtl] .simplebar-track.simplebar-vertical{right:auto;left:0}.hs-dummy-scrollbar-size{direction:rtl;position:fixed;opacity:0;visibility:hidden;height:500px;width:500px;overflow-y:hidden;overflow-x:scroll}.simplebar-hide-scrollbar{position:fixed;left:0;visibility:hidden;overflow-y:scroll;scrollbar-width:none;-ms-overflow-style:none}", "ngx-simplebar{display:block}"]
                }] }
    ];
    /** @nocollapse */
    SimplebarAngularComponent.ctorParameters = function () { return [
        { type: ElementRef }
    ]; };
    SimplebarAngularComponent.propDecorators = {
        options: [{ type: Input, args: ['options',] }]
    };
    return SimplebarAngularComponent;
}());
export { SimplebarAngularComponent };
if (false) {
    /** @type {?} */
    SimplebarAngularComponent.prototype.options;
    /** @type {?} */
    SimplebarAngularComponent.prototype.elRef;
    /** @type {?} */
    SimplebarAngularComponent.prototype.SimpleBar;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2ltcGxlYmFyLWFuZ3VsYXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vc2ltcGxlYmFyLWFuZ3VsYXIvIiwic291cmNlcyI6WyJsaWIvc2ltcGxlYmFyLWFuZ3VsYXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQ0wsU0FBUyxFQUVULEtBQUssRUFFTCxVQUFVLEVBQ1YsaUJBQWlCLEVBQ2xCLE1BQU0sZUFBZSxDQUFDO0FBRXZCLE9BQU8sU0FBUyxNQUFNLG1DQUFtQyxDQUFDO0FBRzFEO0lBZ0JFLG1DQUFZLEtBQWlCO1FBQzNCLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO0lBQ3JCLENBQUM7Ozs7SUFFRCw0Q0FBUTs7O0lBQVIsY0FBWSxDQUFDOzs7O0lBRWIsbURBQWU7OztJQUFmO1FBQ0UsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLFNBQVMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLGFBQWEsRUFBRSxJQUFJLENBQUMsT0FBTyxJQUFJLEVBQUUsQ0FBQyxDQUFDO0lBQy9FLENBQUM7Ozs7SUFFRCwrQ0FBVzs7O0lBQVg7UUFDRSxJQUFJLENBQUMsU0FBUyxDQUFDLE9BQU8sRUFBRSxDQUFDO1FBQ3pCLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDO0lBQ3hCLENBQUM7O2dCQTdCRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLGVBQWU7b0JBQ3pCLElBQUksRUFBRSxFQUFFLGdCQUFnQixFQUFFLE1BQU0sRUFBRTtvQkFDbEMscXJCQUFpRDtvQkFLakQsYUFBYSxFQUFFLGlCQUFpQixDQUFDLElBQUk7O2lCQUN0Qzs7OztnQkFoQkMsVUFBVTs7OzBCQWtCVCxLQUFLLFNBQUMsU0FBUzs7SUFtQmxCLGdDQUFDO0NBQUEsQUE5QkQsSUE4QkM7U0FwQlkseUJBQXlCOzs7SUFDcEMsNENBQW1DOztJQUVuQywwQ0FBa0I7O0lBQ2xCLDhDQUFlIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQ29tcG9uZW50LFxuICBPbkluaXQsXG4gIElucHV0LFxuICBBZnRlclZpZXdJbml0LFxuICBFbGVtZW50UmVmLFxuICBWaWV3RW5jYXBzdWxhdGlvblxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IFNpbXBsZUJhciBmcm9tICdzaW1wbGViYXIvZGlzdC9zaW1wbGViYXItY29yZS5lc20nO1xuaW1wb3J0IHsgT3B0aW9ucyB9IGZyb20gJ3NpbXBsZWJhcic7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ25neC1zaW1wbGViYXInLFxuICBob3N0OiB7ICdkYXRhLXNpbXBsZWJhcic6ICdpbml0JyB9LFxuICB0ZW1wbGF0ZVVybDogJy4vc2ltcGxlYmFyLWFuZ3VsYXIuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFtcbiAgICAnLi4vLi4vLi4vc2ltcGxlYmFyL3NyYy9zaW1wbGViYXIuY3NzJyxcbiAgICAnLi9zaW1wbGViYXItYW5ndWxhci5jb21wb25lbnQuc2NzcydcbiAgXSxcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZVxufSlcbmV4cG9ydCBjbGFzcyBTaW1wbGViYXJBbmd1bGFyQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBBZnRlclZpZXdJbml0IHtcbiAgQElucHV0KCdvcHRpb25zJykgb3B0aW9uczogT3B0aW9ucztcblxuICBlbFJlZjogRWxlbWVudFJlZjtcbiAgU2ltcGxlQmFyOiBhbnk7XG5cbiAgY29uc3RydWN0b3IoZWxSZWY6IEVsZW1lbnRSZWYpIHtcbiAgICB0aGlzLmVsUmVmID0gZWxSZWY7XG4gIH1cblxuICBuZ09uSW5pdCgpIHt9XG5cbiAgbmdBZnRlclZpZXdJbml0KCk6IHZvaWQge1xuICAgIHRoaXMuU2ltcGxlQmFyID0gbmV3IFNpbXBsZUJhcih0aGlzLmVsUmVmLm5hdGl2ZUVsZW1lbnQsIHRoaXMub3B0aW9ucyB8fCB7fSk7XG4gIH1cblxuICBuZ09uRGVzdHJveSgpIHtcbiAgICB0aGlzLlNpbXBsZUJhci51bk1vdW50KCk7XG4gICAgdGhpcy5TaW1wbGVCYXIgPSBudWxsO1xuICB9XG59XG4iXX0=