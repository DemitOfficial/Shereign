(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('rxjs'), require('@angular/common')) :
    typeof define === 'function' && define.amd ? define('ng-wizard', ['exports', '@angular/core', 'rxjs', '@angular/common'], factory) :
    (global = global || self, factory(global['ng-wizard'] = {}, global.ng.core, global.rxjs, global.ng.common));
}(this, (function (exports, core, rxjs, common) { 'use strict';

    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation.

    Permission to use, copy, modify, and/or distribute this software for any
    purpose with or without fee is hereby granted.

    THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
    REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
    AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
    INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
    LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
    OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
    PERFORMANCE OF THIS SOFTWARE.
    ***************************************************************************** */
    /* global Reflect, Promise */

    var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };

    function __extends(d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    var __assign = function() {
        __assign = Object.assign || function __assign(t) {
            for (var s, i = 1, n = arguments.length; i < n; i++) {
                s = arguments[i];
                for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
            }
            return t;
        };
        return __assign.apply(this, arguments);
    };

    function __rest(s, e) {
        var t = {};
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
            t[p] = s[p];
        if (s != null && typeof Object.getOwnPropertySymbols === "function")
            for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
                if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                    t[p[i]] = s[p[i]];
            }
        return t;
    }

    function __decorate(decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    }

    function __param(paramIndex, decorator) {
        return function (target, key) { decorator(target, key, paramIndex); }
    }

    function __metadata(metadataKey, metadataValue) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    }

    function __awaiter(thisArg, _arguments, P, generator) {
        function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
        return new (P || (P = Promise))(function (resolve, reject) {
            function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
            function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
            function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
            step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
    }

    function __generator(thisArg, body) {
        var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
        return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
        function verb(n) { return function (v) { return step([n, v]); }; }
        function step(op) {
            if (f) throw new TypeError("Generator is already executing.");
            while (_) try {
                if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
                if (y = 0, t) op = [op[0] & 2, t.value];
                switch (op[0]) {
                    case 0: case 1: t = op; break;
                    case 4: _.label++; return { value: op[1], done: false };
                    case 5: _.label++; y = op[1]; op = [0]; continue;
                    case 7: op = _.ops.pop(); _.trys.pop(); continue;
                    default:
                        if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                        if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                        if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                        if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                        if (t[2]) _.ops.pop();
                        _.trys.pop(); continue;
                }
                op = body.call(thisArg, _);
            } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
            if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
        }
    }

    function __createBinding(o, m, k, k2) {
        if (k2 === undefined) k2 = k;
        o[k2] = m[k];
    }

    function __exportStar(m, exports) {
        for (var p in m) if (p !== "default" && !exports.hasOwnProperty(p)) exports[p] = m[p];
    }

    function __values(o) {
        var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
        if (m) return m.call(o);
        if (o && typeof o.length === "number") return {
            next: function () {
                if (o && i >= o.length) o = void 0;
                return { value: o && o[i++], done: !o };
            }
        };
        throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
    }

    function __read(o, n) {
        var m = typeof Symbol === "function" && o[Symbol.iterator];
        if (!m) return o;
        var i = m.call(o), r, ar = [], e;
        try {
            while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
        }
        catch (error) { e = { error: error }; }
        finally {
            try {
                if (r && !r.done && (m = i["return"])) m.call(i);
            }
            finally { if (e) throw e.error; }
        }
        return ar;
    }

    function __spread() {
        for (var ar = [], i = 0; i < arguments.length; i++)
            ar = ar.concat(__read(arguments[i]));
        return ar;
    }

    function __spreadArrays() {
        for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
        for (var r = Array(s), k = 0, i = 0; i < il; i++)
            for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
                r[k] = a[j];
        return r;
    };

    function __await(v) {
        return this instanceof __await ? (this.v = v, this) : new __await(v);
    }

    function __asyncGenerator(thisArg, _arguments, generator) {
        if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
        var g = generator.apply(thisArg, _arguments || []), i, q = [];
        return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
        function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
        function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
        function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
        function fulfill(value) { resume("next", value); }
        function reject(value) { resume("throw", value); }
        function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
    }

    function __asyncDelegator(o) {
        var i, p;
        return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
        function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
    }

    function __asyncValues(o) {
        if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
        var m = o[Symbol.asyncIterator], i;
        return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
        function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
        function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
    }

    function __makeTemplateObject(cooked, raw) {
        if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
        return cooked;
    };

    function __importStar(mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
        result.default = mod;
        return result;
    }

    function __importDefault(mod) {
        return (mod && mod.__esModule) ? mod : { default: mod };
    }

    function __classPrivateFieldGet(receiver, privateMap) {
        if (!privateMap.has(receiver)) {
            throw new TypeError("attempted to get private field on non-instance");
        }
        return privateMap.get(receiver);
    }

    function __classPrivateFieldSet(receiver, privateMap, value) {
        if (!privateMap.has(receiver)) {
            throw new TypeError("attempted to set private field on non-instance");
        }
        privateMap.set(receiver, value);
        return value;
    }

    (function (TOOLBAR_POSITION) {
        TOOLBAR_POSITION["none"] = "none";
        TOOLBAR_POSITION["top"] = "top";
        TOOLBAR_POSITION["bottom"] = "bottom";
        TOOLBAR_POSITION["both"] = "both";
    })(exports.TOOLBAR_POSITION || (exports.TOOLBAR_POSITION = {}));

    (function (TOOLBAR_BUTTON_POSITION) {
        TOOLBAR_BUTTON_POSITION["start"] = "start";
        TOOLBAR_BUTTON_POSITION["end"] = "end";
    })(exports.TOOLBAR_BUTTON_POSITION || (exports.TOOLBAR_BUTTON_POSITION = {}));
    // export enum TRANSITION_EFFECT {
    //     none = 'none',
    //     slide = 'slide',
    //     fade = 'fade'
    // }

    (function (THEME) {
        THEME["default"] = "default";
        THEME["arrows"] = "arrows";
        THEME["circles"] = "circles";
        THEME["dots"] = "dots";
    })(exports.THEME || (exports.THEME = {}));

    (function (STEP_STATE) {
        STEP_STATE["normal"] = "normal";
        STEP_STATE["disabled"] = "disabled";
        STEP_STATE["error"] = "error";
        STEP_STATE["hidden"] = "hidden";
    })(exports.STEP_STATE || (exports.STEP_STATE = {}));
    var STEP_STATUS;
    (function (STEP_STATUS) {
        STEP_STATUS["untouched"] = "untouched";
        STEP_STATUS["done"] = "done";
        STEP_STATUS["active"] = "active";
    })(STEP_STATUS || (STEP_STATUS = {}));

    (function (STEP_DIRECTIN) {
        STEP_DIRECTIN["forward"] = "forward";
        STEP_DIRECTIN["backward"] = "backward";
    })(exports.STEP_DIRECTIN || (exports.STEP_DIRECTIN = {}));

    (function (STEP_POSITION) {
        STEP_POSITION["first"] = "first";
        STEP_POSITION["final"] = "final";
        STEP_POSITION["middle"] = "middle";
    })(exports.STEP_POSITION || (exports.STEP_POSITION = {}));

    var DEFAULT_CONFIG = {
        selected: 0,
        keyNavigation: true,
        cycleSteps: false,
        lang: {
            next: 'Next',
            previous: 'Previous'
        },
        toolbarSettings: {
            toolbarPosition: exports.TOOLBAR_POSITION.bottom,
            toolbarButtonPosition: exports.TOOLBAR_BUTTON_POSITION.end,
            showNextButton: true,
            showPreviousButton: true,
            toolbarExtraButtons: []
        },
        anchorSettings: {
            anchorClickable: true,
            enableAllAnchors: false,
            markDoneStep: true,
            markAllPreviousStepsAsDone: true,
            removeDoneStepOnNavigateBack: false,
            enableAnchorOnDoneStep: true
        },
        theme: exports.THEME.default,
    };

    var NG_WIZARD_CONFIG_TOKEN = new core.InjectionToken('ngWizardCustom.config');

    // https://gist.github.com/ahtcx/0cd94e62691f539160b32ecda18af3d6
    // Merge a `source` object to a `target` recursively
    function merge(target, source) {
        var e_1, _a;
        try {
            // Iterate through `source` properties and if an `Object` set property to merge of `target` and `source` properties
            for (var _b = __values(Object.keys(source)), _c = _b.next(); !_c.done; _c = _b.next()) {
                var key = _c.value;
                if (source[key] instanceof Object && key in target) {
                    Object.assign(source[key], merge(target[key], source[key]));
                }
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_1) throw e_1.error; }
        }
        // Join `target` and modified `source`
        Object.assign(target || {}, source);
        return target;
    }

    var NgWizardDataService = /** @class */ (function () {
        function NgWizardDataService(config) {
            this.config = config;
            this._defaultConfig = __assign({}, DEFAULT_CONFIG);
            if (this.config) {
                this._defaultConfig = merge(this._defaultConfig, this.config);
            }
            // Observable sources
            this._resetWizard = new rxjs.Subject();
            this._showNextStep = new rxjs.Subject();
            this._showPreviousStep = new rxjs.Subject();
            this._showStep = new rxjs.Subject();
            this._setTheme = new rxjs.Subject();
            this._stepChangedArgs = new rxjs.Subject();
            // Observable streams
            this.resetWizard$ = this._resetWizard.asObservable();
            this.showNextStep$ = this._showNextStep.asObservable();
            this.showPreviousStep$ = this._showPreviousStep.asObservable();
            this.showStep$ = this._showStep.asObservable();
            this.setTheme$ = this._setTheme.asObservable();
            this.stepChangedArgs$ = this._stepChangedArgs.asObservable();
        }
        NgWizardDataService.prototype.getDefaultConfig = function () {
            return __assign({}, this._defaultConfig);
        };
        NgWizardDataService.prototype.resetWizard = function () {
            this._resetWizard.next();
        };
        NgWizardDataService.prototype.showNextStep = function () {
            this._showNextStep.next();
        };
        NgWizardDataService.prototype.showPreviousStep = function () {
            this._showPreviousStep.next();
        };
        NgWizardDataService.prototype.showStep = function (index) {
            this._showStep.next(index);
        };
        NgWizardDataService.prototype.setTheme = function (theme) {
            this._setTheme.next(theme);
        };
        NgWizardDataService.prototype.stepChanged = function (args) {
            this._stepChangedArgs.next(args);
        };
        NgWizardDataService.ctorParameters = function () { return [
            { type: undefined, decorators: [{ type: core.Optional }, { type: core.Inject, args: [NG_WIZARD_CONFIG_TOKEN,] }] }
        ]; };
        NgWizardDataService.ɵprov = core.ɵɵdefineInjectable({ factory: function NgWizardDataService_Factory() { return new NgWizardDataService(core.ɵɵinject(NG_WIZARD_CONFIG_TOKEN, 8)); }, token: NgWizardDataService, providedIn: "root" });
        NgWizardDataService = __decorate([
            core.Injectable({
                providedIn: 'root'
            }),
            __param(0, core.Optional()), __param(0, core.Inject(NG_WIZARD_CONFIG_TOKEN)),
            __metadata("design:paramtypes", [Object])
        ], NgWizardDataService);
        return NgWizardDataService;
    }());

    var NgWizardService = /** @class */ (function () {
        function NgWizardService(ngWizardDataService) {
            this.ngWizardDataService = ngWizardDataService;
        }
        NgWizardService.prototype.reset = function () {
            this.ngWizardDataService.resetWizard();
        };
        NgWizardService.prototype.next = function () {
            this.ngWizardDataService.showNextStep();
        };
        NgWizardService.prototype.previous = function () {
            this.ngWizardDataService.showPreviousStep();
        };
        NgWizardService.prototype.show = function (index) {
            this.ngWizardDataService.showStep(index);
        };
        NgWizardService.prototype.theme = function (theme) {
            this.ngWizardDataService.setTheme(theme);
        };
        NgWizardService.prototype.stepChanged = function () {
            return this.ngWizardDataService.stepChangedArgs$;
        };
        NgWizardService.ctorParameters = function () { return [
            { type: NgWizardDataService }
        ]; };
        NgWizardService.ɵprov = core.ɵɵdefineInjectable({ factory: function NgWizardService_Factory() { return new NgWizardService(core.ɵɵinject(NgWizardDataService)); }, token: NgWizardService, providedIn: "root" });
        NgWizardService = __decorate([
            core.Injectable({
                providedIn: 'root'
            }),
            __metadata("design:paramtypes", [NgWizardDataService])
        ], NgWizardService);
        return NgWizardService;
    }());

    var NgWizardStep = /** @class */ (function () {
        function NgWizardStep() {
        }
        Object.defineProperty(NgWizardStep.prototype, "hidden", {
            get: function () {
                return this.status != STEP_STATUS.active;
            },
            enumerable: true,
            configurable: true
        });
        __decorate([
            core.Input(),
            __metadata("design:type", String)
        ], NgWizardStep.prototype, "title", void 0);
        __decorate([
            core.Input(),
            __metadata("design:type", String)
        ], NgWizardStep.prototype, "description", void 0);
        __decorate([
            core.Input(),
            __metadata("design:type", String)
        ], NgWizardStep.prototype, "state", void 0);
        __decorate([
            core.Input(),
            __metadata("design:type", core.Type)
        ], NgWizardStep.prototype, "component", void 0);
        __decorate([
            core.Input(),
            __metadata("design:type", Object)
        ], NgWizardStep.prototype, "canEnter", void 0);
        __decorate([
            core.Input(),
            __metadata("design:type", Object)
        ], NgWizardStep.prototype, "canExit", void 0);
        __decorate([
            core.HostBinding('hidden'),
            __metadata("design:type", Boolean),
            __metadata("design:paramtypes", [])
        ], NgWizardStep.prototype, "hidden", null);
        NgWizardStep = __decorate([
            core.Directive()
        ], NgWizardStep);
        return NgWizardStep;
    }());

    var NgWizardStepContentDirective = /** @class */ (function () {
        function NgWizardStepContentDirective(viewContainerRef) {
            this.viewContainerRef = viewContainerRef;
        }
        NgWizardStepContentDirective.ctorParameters = function () { return [
            { type: core.ViewContainerRef }
        ]; };
        NgWizardStepContentDirective = __decorate([
            core.Directive({
                selector: '[ngWizardStepContent]'
            }),
            __metadata("design:paramtypes", [core.ViewContainerRef])
        ], NgWizardStepContentDirective);
        return NgWizardStepContentDirective;
    }());

    var NgWizardStepComponent = /** @class */ (function (_super) {
        __extends(NgWizardStepComponent, _super);
        function NgWizardStepComponent(componentFactoryResolver) {
            var _this = _super.call(this) || this;
            _this.componentFactoryResolver = componentFactoryResolver;
            return _this;
        }
        NgWizardStepComponent_1 = NgWizardStepComponent;
        NgWizardStepComponent.prototype.ngOnInit = function () {
            this.loadComponent();
        };
        NgWizardStepComponent.prototype.loadComponent = function () {
            if (!this.component) {
                return;
            }
            var componentFactory = this.componentFactoryResolver.resolveComponentFactory(this.component);
            this.stepContent.viewContainerRef.clear();
            this.componentRef = this.stepContent.viewContainerRef.createComponent(componentFactory);
        };
        Object.defineProperty(NgWizardStepComponent.prototype, "isHidden", {
            get: function () {
                return this.state == exports.STEP_STATE.hidden;
            },
            enumerable: true,
            configurable: true
        });
        var NgWizardStepComponent_1;
        NgWizardStepComponent.ctorParameters = function () { return [
            { type: core.ComponentFactoryResolver }
        ]; };
        __decorate([
            core.ViewChild(NgWizardStepContentDirective, { static: true }),
            __metadata("design:type", NgWizardStepContentDirective)
        ], NgWizardStepComponent.prototype, "stepContent", void 0);
        NgWizardStepComponent = NgWizardStepComponent_1 = __decorate([
            core.Component({
                selector: 'ng-wizard-step',
                template: "<div class=\"tab-pane step-content\" style=\"display: block\">\r\n    <ng-content></ng-content>\r\n    <ng-template ngWizardStepContent></ng-template>\r\n</div>",
                providers: [
                    { provide: NgWizardStep, useExisting: core.forwardRef(function () { return NgWizardStepComponent_1; }) }
                ],
                styles: [""]
            }),
            __metadata("design:paramtypes", [core.ComponentFactoryResolver])
        ], NgWizardStepComponent);
        return NgWizardStepComponent;
    }(NgWizardStep));

    var NgWizardComponent = /** @class */ (function () {
        function NgWizardComponent(ngWizardDataService) {
            this.ngWizardDataService = ngWizardDataService;
            this.stepChanged = new core.EventEmitter();
            this.themeChanged = new core.EventEmitter();
            this.reseted = new core.EventEmitter();
            this.styles = {};
            this.showToolbarTop = false;
            this.showPreviousButton = false;
            this.showNextButton = false;
            this.showToolbarBottom = false;
            this.showExtraButtons = false;
            this.currentStepIndex = null; // Active step index
        }
        Object.defineProperty(NgWizardComponent.prototype, "pConfig", {
            get: function () {
                return this._pConfig || {};
            },
            set: function (config) {
                this._pConfig = config;
            },
            enumerable: true,
            configurable: true
        });
        NgWizardComponent.prototype.ngAfterContentInit = function () {
            var _this = this;
            this._backupStepStates();
            this._init();
            // Set toolbar
            this._setToolbar();
            // Assign plugin events
            this._setEvents();
            this.resetWizardWatcher = this.ngWizardDataService.resetWizard$.subscribe(function () { return _this._reset(); });
            this.showNextStepWatcher = this.ngWizardDataService.showNextStep$.subscribe(function () { return _this._showNextStep(); });
            this.showPreviousStepWatcher = this.ngWizardDataService.showPreviousStep$.subscribe(function () { return _this._showPreviousStep(); });
            this.showStepWatcher = this.ngWizardDataService.showStep$.subscribe(function (index) { return _this._showStep(index); });
            this.setThemeWatcher = this.ngWizardDataService.setTheme$.subscribe(function (theme) { return _this._setTheme(theme); });
        };
        NgWizardComponent.prototype._init = function () {
            // set config
            var defaultConfig = this.ngWizardDataService.getDefaultConfig();
            this.config = merge(defaultConfig, this.pConfig);
            // set step states
            this._initSteps();
            // Set the elements
            this._initStyles();
            // Show the initial step
            this._showStep(this.config.selected);
        };
        NgWizardComponent.prototype._initSteps = function () {
            var _this = this;
            this.steps.forEach(function (step, index) {
                step.index = index;
                step.status = step.status || STEP_STATUS.untouched;
                step.state = step.state || exports.STEP_STATE.normal;
            });
            // Mark previous steps of the active step as done
            if (this.config.selected > 0
                && this.config.anchorSettings.markDoneStep
                && this.config.anchorSettings.markAllPreviousStepsAsDone) {
                this.steps.forEach(function (step) {
                    if (step.state != exports.STEP_STATE.disabled && step.state != exports.STEP_STATE.hidden) {
                        step.status = step.index < _this.config.selected ? STEP_STATUS.done : step.status;
                    }
                });
            }
        };
        NgWizardComponent.prototype._backupStepStates = function () {
            this.steps.forEach(function (step) {
                step.initialStatus = step.status;
                step.initialState = step.state;
            });
        };
        NgWizardComponent.prototype._restoreStepStates = function () {
            this.steps.forEach(function (step) {
                step.status = step.initialStatus;
                step.state = step.initialState;
            });
        };
        // PRIVATE FUNCTIONS
        NgWizardComponent.prototype._initStyles = function () {
            // Set the main element
            this.styles.main = 'ng-wizard-main ng-wizard-theme-' + this.config.theme;
            // Set anchor elements
            this.styles.step = 'nav-item'; // li
            // Make the anchor clickable
            if (this.config.anchorSettings.enableAllAnchors && this.config.anchorSettings.anchorClickable) {
                this.styles.step += ' clickable';
            }
            // Set the toolbar styles
            this.styles.toolbarTop = 'btn-toolbar ng-wizard-toolbar ng-wizard-toolbar-top justify-content-' + this.config.toolbarSettings.toolbarButtonPosition;
            this.styles.toolbarBottom = 'btn-toolbar ng-wizard-toolbar ng-wizard-toolbar-bottom justify-content-' + this.config.toolbarSettings.toolbarButtonPosition;
            // Set previous&next buttons 
            this.styles.previousButton = 'btn btn-secondary ng-wizard-btn-prev';
            this.styles.nextButton = 'btn btn-secondary ng-wizard-btn-next';
        };
        NgWizardComponent.prototype._setToolbar = function () {
            this.showToolbarTop = this.config.toolbarSettings.toolbarPosition == exports.TOOLBAR_POSITION.top ||
                this.config.toolbarSettings.toolbarPosition == exports.TOOLBAR_POSITION.both;
            this.showToolbarBottom = this.config.toolbarSettings.toolbarPosition == exports.TOOLBAR_POSITION.bottom ||
                this.config.toolbarSettings.toolbarPosition == exports.TOOLBAR_POSITION.both;
            this.showPreviousButton = this.config.toolbarSettings.showPreviousButton;
            this.showNextButton = this.config.toolbarSettings.showNextButton;
            this.showExtraButtons = this.config.toolbarSettings.toolbarExtraButtons && this.config.toolbarSettings.toolbarExtraButtons.length > 0;
        };
        NgWizardComponent.prototype._setEvents = function () {
            //TODO: keyNavigation
            // Keyboard navigation event
            if (this.config.keyNavigation) {
                // $(document).keyup(function (e) {
                //   mi._keyNav(e);
                // });
            }
        };
        NgWizardComponent.prototype._getStepCssClass = function (selectedStep) {
            var stepClass = this.styles.step;
            switch (selectedStep.state) {
                case exports.STEP_STATE.disabled:
                    stepClass += ' disabled';
                    break;
                case exports.STEP_STATE.error:
                    stepClass += ' danger';
                    break;
                case exports.STEP_STATE.hidden:
                    stepClass += ' hidden';
                    break;
            }
            switch (selectedStep.status) {
                case STEP_STATUS.done:
                    stepClass += ' done';
                    break;
                case STEP_STATUS.active:
                    stepClass += ' active';
                    break;
            }
            return stepClass;
        };
        NgWizardComponent.prototype._showSelectedStep = function (event, selectedStep) {
            event.preventDefault();
            if (!this.config.anchorSettings.anchorClickable) {
                return;
            }
            if (!this.config.anchorSettings.enableAnchorOnDoneStep && selectedStep.status == STEP_STATUS.done) {
                return true;
            }
            if (selectedStep.index != this.currentStepIndex) {
                if (this.config.anchorSettings.enableAllAnchors && this.config.anchorSettings.anchorClickable) {
                    this._showStep(selectedStep.index);
                }
                else {
                    if (selectedStep.status == STEP_STATUS.done) {
                        this._showStep(selectedStep.index);
                    }
                }
            }
        };
        NgWizardComponent.prototype._showNextStep = function (event) {
            var _this = this;
            if (event) {
                event.preventDefault();
            }
            // Find the next not disabled & hidden step
            var filteredSteps = this.steps.filter(function (step) {
                return step.index > (_this.currentStepIndex == null ? -1 : _this.currentStepIndex)
                    && step.state != exports.STEP_STATE.disabled
                    && step.state != exports.STEP_STATE.hidden;
            });
            if (filteredSteps.length == 0) {
                if (!this.config.cycleSteps) {
                    return;
                }
                this._showStep(0);
            }
            else {
                this._showStep(filteredSteps.shift().index);
            }
        };
        NgWizardComponent.prototype._showPreviousStep = function (event) {
            var _this = this;
            if (event) {
                event.preventDefault();
            }
            // Find the previous not disabled & hidden step
            var filteredSteps = this.steps.filter(function (step) {
                return step.index < (_this.currentStepIndex == null && _this.config.cycleSteps ? _this.steps.length : _this.currentStepIndex)
                    && step.state != exports.STEP_STATE.disabled
                    && step.state != exports.STEP_STATE.hidden;
            });
            if (filteredSteps.length == 0) {
                if (!this.config.cycleSteps) {
                    return;
                }
                this._showStep(this.steps.length - 1);
            }
            else {
                this._showStep(filteredSteps.pop().index);
            }
        };
        NgWizardComponent.prototype._showStep = function (selectedStepIndex) {
            var _this = this;
            // If step not found, skip
            if (selectedStepIndex >= this.steps.length || selectedStepIndex < 0) {
                return;
            }
            // If current step is requested again, skip
            if (selectedStepIndex == this.currentStepIndex) {
                return;
            }
            var selectedStep = this.steps.toArray()[selectedStepIndex];
            // If it is a disabled or hidden step, skip
            if (selectedStep.state == exports.STEP_STATE.disabled || selectedStep.state == exports.STEP_STATE.hidden) {
                return;
            }
            this._showLoader();
            return this._isStepChangeValid(selectedStep, this.currentStep && this.currentStep.canExit).toPromise()
                .then(function (isValid) {
                if (isValid) {
                    return _this._isStepChangeValid(selectedStep, selectedStep.canEnter).toPromise();
                }
                return rxjs.of(isValid).toPromise();
            })
                .then(function (isValid) {
                if (isValid) {
                    // Load step content
                    _this._loadStepContent(selectedStep);
                }
            })
                .finally(function () { return _this._hideLoader(); });
        };
        NgWizardComponent.prototype._isStepChangeValid = function (selectedStep, condition) {
            if (typeof condition === typeof true) {
                return rxjs.of(condition);
            }
            else if (condition instanceof Function) {
                var direction = this._getStepDirection(selectedStep.index);
                var result = condition({ direction: direction, fromStep: this.currentStep, toStep: selectedStep });
                if (rxjs.isObservable(result)) {
                    return result;
                }
                else if (typeof result === typeof true) {
                    return rxjs.of(result);
                }
                else {
                    return rxjs.of(false);
                }
            }
            return rxjs.of(true);
        };
        NgWizardComponent.prototype._loadStepContent = function (selectedStep) {
            // Update controls
            this._setAnchor(selectedStep);
            // Set the buttons based on the step
            this._setButtons(selectedStep.index);
            // Trigger "stepChanged" event
            var args = {
                step: selectedStep,
                previousStep: this.currentStep,
                direction: this._getStepDirection(selectedStep.index),
                position: this._getStepPosition(selectedStep.index)
            };
            this.stepChanged.emit(args);
            this.ngWizardDataService.stepChanged(args);
            // Update the current index
            this.currentStepIndex = selectedStep.index;
            this.currentStep = selectedStep;
        };
        NgWizardComponent.prototype._setAnchor = function (selectedStep) {
            // Current step anchor > Remove other classes and add done class
            if (this.currentStep) {
                this.currentStep.status = STEP_STATUS.untouched;
                if (this.config.anchorSettings.markDoneStep) {
                    this.currentStep.status = STEP_STATUS.done;
                    if (this.config.anchorSettings.removeDoneStepOnNavigateBack) {
                        this.steps.forEach(function (step) {
                            if (step.index > selectedStep.index) {
                                step.status = STEP_STATUS.untouched;
                            }
                        });
                    }
                }
            }
            // Next step anchor > Remove other classes and add active class
            selectedStep.status = STEP_STATUS.active;
        };
        NgWizardComponent.prototype._setButtons = function (index) {
            // Previous/Next Button enable/disable based on step
            if (!this.config.cycleSteps) {
                if (0 >= index) {
                    this.styles.previousButton = 'btn btn-secondary ng-wizard-btn-prev disabled';
                }
                else {
                    this.styles.previousButton = 'btn btn-secondary ng-wizard-btn-prev';
                }
                if (this.steps.length - 1 <= index) {
                    this.styles.nextButton = 'btn btn-secondary ng-wizard-btn-next disabled';
                }
                else {
                    this.styles.nextButton = 'btn btn-secondary ng-wizard-btn-next';
                }
            }
        };
        NgWizardComponent.prototype._extraButtonClicked = function (button) {
            if (button.event) {
                button.event();
            }
        };
        // HELPER FUNCTIONS
        NgWizardComponent.prototype._keyNav = function (event) {
            // Keyboard navigation
            switch (event.which) {
                case 37:
                    // left
                    this._showPreviousStep(event);
                    event.preventDefault();
                    break;
                case 39:
                    // right
                    this._showNextStep(event);
                    event.preventDefault();
                    break;
                default:
                    return; // exit this handler for other keys
            }
        };
        NgWizardComponent.prototype._showLoader = function () {
            this.styles.main = 'ng-wizard-main ng-wizard-theme-' + this.config.theme + ' ng-wizard-loading';
        };
        NgWizardComponent.prototype._hideLoader = function () {
            this.styles.main = 'ng-wizard-main ng-wizard-theme-' + this.config.theme;
        };
        NgWizardComponent.prototype._getStepDirection = function (selectedStepIndex) {
            return (this.currentStepIndex != null && this.currentStepIndex != selectedStepIndex) ?
                (this.currentStepIndex < selectedStepIndex ? exports.STEP_DIRECTIN.forward : exports.STEP_DIRECTIN.backward) : null;
        };
        NgWizardComponent.prototype._getStepPosition = function (selectedStepIndex) {
            return (selectedStepIndex == 0) ? exports.STEP_POSITION.first : (selectedStepIndex == this.steps.length - 1 ? exports.STEP_POSITION.final : exports.STEP_POSITION.middle);
        };
        // PUBLIC FUNCTIONS
        NgWizardComponent.prototype._setTheme = function (theme) {
            if (this.config.theme == theme) {
                return false;
            }
            this.config.theme = theme;
            this.styles.main = 'ng-wizard-main ng-wizard-theme-' + this.config.theme;
            // Trigger "themeChanged" event
            this.themeChanged.emit(this.config.theme);
        };
        NgWizardComponent.prototype._reset = function () {
            // Reset all elements and classes
            this.currentStepIndex = null;
            this.currentStep = null;
            this._restoreStepStates();
            this._init();
            // Trigger "reseted" event
            this.reseted.emit();
        };
        NgWizardComponent.prototype.ngOnDestroy = function () {
            if (this.resetWizardWatcher) {
                this.resetWizardWatcher.unsubscribe();
            }
            if (this.showNextStepWatcher) {
                this.showNextStepWatcher.unsubscribe();
            }
            if (this.showPreviousStepWatcher) {
                this.showPreviousStepWatcher.unsubscribe();
            }
            if (this.showStepWatcher) {
                this.showStepWatcher.unsubscribe();
            }
            if (this.setThemeWatcher) {
                this.setThemeWatcher.unsubscribe();
            }
        };
        NgWizardComponent.ctorParameters = function () { return [
            { type: NgWizardDataService }
        ]; };
        __decorate([
            core.ContentChildren(NgWizardStep),
            __metadata("design:type", core.QueryList)
        ], NgWizardComponent.prototype, "steps", void 0);
        __decorate([
            core.Input('config'),
            __metadata("design:type", Object),
            __metadata("design:paramtypes", [Object])
        ], NgWizardComponent.prototype, "pConfig", null);
        __decorate([
            core.Output(),
            __metadata("design:type", Object)
        ], NgWizardComponent.prototype, "stepChanged", void 0);
        __decorate([
            core.Output(),
            __metadata("design:type", Object)
        ], NgWizardComponent.prototype, "themeChanged", void 0);
        __decorate([
            core.Output(),
            __metadata("design:type", Object)
        ], NgWizardComponent.prototype, "reseted", void 0);
        NgWizardComponent = __decorate([
            core.Component({
                selector: 'ng-wizard',
                template: "<div id=\"ngwizard\" [ngClass]=\"styles.main\">\r\n    <ul class=\"nav nav-tabs step-anchor\">\r\n        <li *ngFor=\"let step of steps; let i = index\" [ngClass]=\"_getStepCssClass(step)\">\r\n            <a href=\"#step-{{ i }}\" (click)=\"_showSelectedStep($event, step)\" *ngIf=\"!step.isHidden\"\r\n                class=\"nav-link\">{{ step.title }}<br /><small>{{ step.description }}</small></a>\r\n        </li>\r\n    </ul>\r\n\r\n    <div *ngIf=\"showToolbarTop\" [ngClass]=\"styles.toolbarTop\">\r\n        <div class=\"btn-group mr-2 ng-wizard-btn-group\" role=\"group\">\r\n            <button *ngIf=\"showPreviousButton\" [ngClass]=\"styles.previousButton\" type=\"button\"\r\n                (click)=\"_showPreviousStep($event)\">{{ config!.lang!.previous }}</button>\r\n            <button *ngIf=\"showNextButton\" [ngClass]=\"styles.nextButton\" type=\"button\"\r\n                (click)=\"_showNextStep($event)\">{{ config!.lang!.next }}</button>\r\n        </div>\r\n\r\n        <div *ngIf=\"showExtraButtons\" class=\"btn-group mr-2 ng-wizard-btn-group-extra\" role=\"group\">\r\n            <button *ngFor=\"let button of config!.toolbarSettings!.toolbarExtraButtons; let j = index\"\r\n                [ngClass]=\"button.class\" type=\"button\" (click)=\"_extraButtonClicked(button)\">{{ button.text }}</button>\r\n        </div>\r\n    </div>\r\n\r\n    <div class=\"ng-wizard-container tab-content\">\r\n        <ng-content></ng-content>\r\n    </div>\r\n\r\n    <div *ngIf=\"showToolbarBottom\" [ngClass]=\"styles.toolbarBottom\">\r\n        <div class=\"btn-group mr-2 ng-wizard-btn-group\" role=\"group\">\r\n            <button *ngIf=\"showPreviousButton\" [ngClass]=\"styles.previousButton\" type=\"button\"\r\n                (click)=\"_showPreviousStep($event)\">{{ config!.lang!.previous }}</button>\r\n            <button *ngIf=\"showNextButton\" [ngClass]=\"styles.nextButton\" type=\"button\"\r\n                (click)=\"_showNextStep($event)\">{{ config!.lang!.next }}</button>\r\n        </div>\r\n\r\n        <div *ngIf=\"showExtraButtons\" class=\"btn-group mr-2 ng-wizard-btn-group-extra\" role=\"group\">\r\n            <button *ngFor=\"let button of config!.toolbarSettings!.toolbarExtraButtons; let j = index\"\r\n                [ngClass]=\"button.class\" type=\"button\" (click)=\"_extraButtonClicked(button)\">{{ button.text }}</button>\r\n        </div>\r\n    </div>\r\n</div>",
                styles: [""]
            }),
            __metadata("design:paramtypes", [NgWizardDataService])
        ], NgWizardComponent);
        return NgWizardComponent;
    }());

    var NgWizardModule = /** @class */ (function () {
        function NgWizardModule() {
        }
        NgWizardModule_1 = NgWizardModule;
        /**
         * forRoot
         * @returns A module with its provider dependencies
         */
        NgWizardModule.forRoot = function (ngWizardConfig) {
            return {
                ngModule: NgWizardModule_1,
                providers: [
                    {
                        provide: NG_WIZARD_CONFIG_TOKEN,
                        useValue: ngWizardConfig
                    }
                ]
            };
        };
        var NgWizardModule_1;
        NgWizardModule = NgWizardModule_1 = __decorate([
            core.NgModule({
                imports: [common.CommonModule],
                declarations: [NgWizardComponent, NgWizardStepComponent, NgWizardStepContentDirective],
                exports: [NgWizardComponent, NgWizardStepComponent]
            })
        ], NgWizardModule);
        return NgWizardModule;
    }());

    exports.NgWizardComponent = NgWizardComponent;
    exports.NgWizardModule = NgWizardModule;
    exports.NgWizardService = NgWizardService;
    exports.NgWizardStep = NgWizardStep;
    exports.NgWizardStepComponent = NgWizardStepComponent;
    exports.ɵa = NgWizardDataService;
    exports.ɵb = NG_WIZARD_CONFIG_TOKEN;
    exports.ɵc = NgWizardStepContentDirective;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=ng-wizard.umd.js.map
