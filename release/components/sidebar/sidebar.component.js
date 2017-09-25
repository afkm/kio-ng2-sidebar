import { Component, ViewEncapsulation } from '@angular/core';
import { SidebarService } from '../../services/sidebar.service';
import { SidebarState } from '../../enums/sidebar-state.enum';
var SidebarComponent = /** @class */ (function () {
    function SidebarComponent(sidebarService) {
        var _this = this;
        this.sidebarService = sidebarService;
        this.isOpen = false;
        this.sidebarState = SidebarState.closed;
        this.anchorSubscription = this.sidebarService.sidebarState.subscribe(function (nextState) {
            _this.sidebarState = nextState;
            _this.isOpen = nextState > SidebarState.closing;
        });
    }
    SidebarComponent.prototype.toggleSidebarState = function (event) {
        this.isOpen = !this.isOpen;
    };
    SidebarComponent.decorators = [
        { type: Component, args: [{
                    selector: 'sidebar',
                    templateUrl: './sidebar.component.html',
                    styleUrls: ['./sidebar.component.css'],
                    encapsulation: ViewEncapsulation.None
                },] },
    ];
    /** @nocollapse */
    SidebarComponent.ctorParameters = function () { return [
        { type: SidebarService, },
    ]; };
    return SidebarComponent;
}());
export { SidebarComponent };
//# sourceMappingURL=sidebar.component.js.map