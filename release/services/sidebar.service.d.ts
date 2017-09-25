import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/toPromise';
import { EventEmitter } from '@angular/core';
import { SidebarState } from '../enums/sidebar-state.enum';
export declare class SidebarService {
    constructor();
    readonly sidebarStateEmitter: EventEmitter<SidebarState>;
    sidebarState: Observable<SidebarState>;
    lastSidebarState: SidebarState;
    private _lastSidebarStarteSub;
    open(): Promise<SidebarState>;
    close(): Promise<SidebarState>;
    protected updateState(nextState: SidebarState): Observable<SidebarState>;
}
