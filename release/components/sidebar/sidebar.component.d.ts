import { Subscription } from 'rxjs/Subscription';
import { SidebarService } from '../../services/sidebar.service';
import { SidebarState } from '../../enums/sidebar-state.enum';
export declare class SidebarComponent {
    protected sidebarService: SidebarService;
    constructor(sidebarService: SidebarService);
    isOpen: boolean;
    sidebarState: SidebarState;
    anchorSubscription: Subscription;
    toggleSidebarState(event: Event): void;
}
