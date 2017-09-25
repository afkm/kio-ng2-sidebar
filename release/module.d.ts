import { ModuleWithProviders } from '@angular/core';
import { SitemapNavigation, SidebarConfig } from './config/interfaces';
import { SidebarMenuComponent, SidebarMenuTheme } from './components/sidebar-menu/sidebar-menu.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
export { SIDEBAR_CONFIG, SITEMAP_NAVIGATION } from './config/token';
export { SitemapNavigation, SidebarConfig } from './config/interfaces';
export { SidebarMenuTheme };
export { SITEMAP_LOADER } from './injection/loader.token';
export { MenuItem, Menu } from './interfaces/menu';
export { SitemapLoader } from './interfaces/loader';
export declare const SidebarComponents: (typeof SidebarMenuComponent | typeof SidebarComponent)[];
export declare function sidebarConfigFactory(sitemapNavigation: SitemapNavigation): SidebarConfig;
export declare class KioNg2SidebarModule {
    static forRoot(sidebarConfig: SidebarConfig): ModuleWithProviders;
}
