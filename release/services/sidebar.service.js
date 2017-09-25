import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/toPromise';
import { Injectable, EventEmitter } from '@angular/core';
import { SidebarState } from '../enums/sidebar-state.enum';
var SidebarService = /** @class */ (function () {
    function SidebarService() {
        var _this = this;
        this.sidebarStateEmitter = new EventEmitter();
        this.sidebarState = this.sidebarStateEmitter.asObservable().startWith(SidebarState.closed).shareReplay(1);
        this._lastSidebarStarteSub = this.sidebarState.subscribe(function (nextState) {
            _this.lastSidebarState = nextState;
        });
    }
    SidebarService.prototype.open = function () {
        return this.updateState(SidebarState.opened).toPromise(Promise);
    };
    SidebarService.prototype.close = function () {
        return this.updateState(SidebarState.closed).toPromise(Promise);
    };
    SidebarService.prototype.updateState = function (nextState) {
        var _this = this;
        return Observable.merge(this.sidebarStateEmitter.asObservable(), Observable.defer(function () {
            _this.sidebarStateEmitter.emit(nextState);
            return Observable.empty();
        })).filter(function (state) { return nextState === state; }).take(1);
    };
    SidebarService.decorators = [
        { type: Injectable },
    ];
    /** @nocollapse */
    SidebarService.ctorParameters = function () { return []; };
    return SidebarService;
}());
export { SidebarService };
//# sourceMappingURL=sidebar.service.js.map