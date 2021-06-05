(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('simplebar/dist/simplebar-core.esm')) :
    typeof define === 'function' && define.amd ? define('simplebar-angular', ['exports', '@angular/core', 'simplebar/dist/simplebar-core.esm'], factory) :
    (global = global || self, factory(global['simplebar-angular'] = {}, global.ng.core, global.SimpleBar));
}(this, function (exports, core, SimpleBar) { 'use strict';

    SimpleBar = SimpleBar && SimpleBar.hasOwnProperty('default') ? SimpleBar['default'] : SimpleBar;

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
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
            { type: core.Component, args: [{
                        selector: 'ngx-simplebar',
                        host: { 'data-simplebar': 'init' },
                        template: "<div class=\"simplebar-wrapper\">\n  <div class=\"simplebar-height-auto-observer-wrapper\">\n    <div class=\"simplebar-height-auto-observer\"></div>\n  </div>\n  <div class=\"simplebar-mask\">\n    <div class=\"simplebar-offset\">\n      <div class=\"simplebar-content-wrapper\">\n        <div class=\"simplebar-content\">\n          <ng-content></ng-content>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"simplebar-placeholder\"></div>\n</div>\n<div class=\"simplebar-track simplebar-horizontal\">\n  <div class=\"simplebar-scrollbar\"></div>\n</div>\n<div class=\"simplebar-track simplebar-vertical\">\n  <div class=\"simplebar-scrollbar\"></div>\n</div>\n",
                        encapsulation: core.ViewEncapsulation.None,
                        styles: ["[data-simplebar]{position:relative;-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-direction:column;flex-wrap:wrap;-webkit-box-pack:start;justify-content:flex-start;align-content:flex-start;-webkit-box-align:start;align-items:flex-start}.simplebar-wrapper{overflow:hidden;width:inherit;height:inherit;max-width:inherit;max-height:inherit}.simplebar-mask{direction:inherit;position:absolute;overflow:hidden;padding:0;margin:0;left:0;top:0;bottom:0;right:0;width:auto!important;height:auto!important;z-index:0}.simplebar-offset{direction:inherit!important;box-sizing:inherit!important;resize:none!important;position:absolute;top:0;left:0;bottom:0;right:0;padding:0;margin:0;-webkit-overflow-scrolling:touch}.simplebar-content-wrapper{direction:inherit;box-sizing:border-box!important;position:relative;display:block;height:100%;width:auto;max-width:100%;max-height:100%;scrollbar-width:none;-ms-overflow-style:none}.simplebar-content-wrapper::-webkit-scrollbar,.simplebar-hide-scrollbar::-webkit-scrollbar{width:0;height:0}.simplebar-content:after,.simplebar-content:before{content:' ';display:table}.simplebar-placeholder{max-height:100%;max-width:100%;width:100%;pointer-events:none}.simplebar-height-auto-observer-wrapper{box-sizing:inherit!important;height:100%;width:100%;max-width:1px;position:relative;float:left;max-height:1px;overflow:hidden;z-index:-1;padding:0;margin:0;pointer-events:none;-webkit-box-flex:inherit;flex-grow:inherit;flex-shrink:0;flex-basis:0}.simplebar-height-auto-observer{box-sizing:inherit;display:block;opacity:0;position:absolute;top:0;left:0;height:1000%;width:1000%;min-height:1px;min-width:1px;overflow:hidden;pointer-events:none;z-index:-1}.simplebar-track{z-index:1;position:absolute;right:0;bottom:0;pointer-events:none;overflow:hidden}[data-simplebar].simplebar-dragging .simplebar-content{pointer-events:none;-moz-user-select:none;-ms-user-select:none;user-select:none;-webkit-user-select:none}[data-simplebar].simplebar-dragging .simplebar-track{pointer-events:all}.simplebar-scrollbar{position:absolute;left:0;right:0;min-height:10px}.simplebar-scrollbar:before{position:absolute;content:'';background:#000;border-radius:7px;left:2px;right:2px;opacity:0;-webkit-transition:opacity .2s linear;transition:opacity .2s linear}.simplebar-scrollbar.simplebar-visible:before{opacity:.5;-webkit-transition:opacity linear;transition:opacity linear}.simplebar-track.simplebar-vertical{top:0;width:11px}.simplebar-track.simplebar-vertical .simplebar-scrollbar:before{top:2px;bottom:2px}.simplebar-track.simplebar-horizontal{left:0;height:11px}.simplebar-track.simplebar-horizontal .simplebar-scrollbar:before{height:100%;left:2px;right:2px}.simplebar-track.simplebar-horizontal .simplebar-scrollbar{right:auto;left:0;top:2px;height:7px;min-height:0;min-width:10px;width:auto}[data-simplebar-direction=rtl] .simplebar-track.simplebar-vertical{right:auto;left:0}.hs-dummy-scrollbar-size{direction:rtl;position:fixed;opacity:0;visibility:hidden;height:500px;width:500px;overflow-y:hidden;overflow-x:scroll}.simplebar-hide-scrollbar{position:fixed;left:0;visibility:hidden;overflow-y:scroll;scrollbar-width:none;-ms-overflow-style:none}", "ngx-simplebar{display:block}"]
                    }] }
        ];
        /** @nocollapse */
        SimplebarAngularComponent.ctorParameters = function () { return [
            { type: core.ElementRef }
        ]; };
        SimplebarAngularComponent.propDecorators = {
            options: [{ type: core.Input, args: ['options',] }]
        };
        return SimplebarAngularComponent;
    }());
    if (false) {
        /** @type {?} */
        SimplebarAngularComponent.prototype.options;
        /** @type {?} */
        SimplebarAngularComponent.prototype.elRef;
        /** @type {?} */
        SimplebarAngularComponent.prototype.SimpleBar;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var SimplebarAngularModule = /** @class */ (function () {
        function SimplebarAngularModule() {
        }
        SimplebarAngularModule.decorators = [
            { type: core.NgModule, args: [{
                        declarations: [SimplebarAngularComponent],
                        imports: [],
                        exports: [SimplebarAngularComponent]
                    },] }
        ];
        return SimplebarAngularModule;
    }());

    exports.SimplebarAngularComponent = SimplebarAngularComponent;
    exports.SimplebarAngularModule = SimplebarAngularModule;

    Object.defineProperty(exports, '__esModule', { value: true });

}));
//# sourceMappingURL=simplebar-angular.umd.js.map
