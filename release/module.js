import { Observable } from 'rxjs/Observable';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarService } from './services/sidebar.service';
import { KioNg2SitemapModule } from 'kio-ng2-sitemap';
import { KioNg2UIUXModule } from 'kio-ng2-uiux';
import { SIDEBAR_CONFIG, SITEMAP_NAVIGATION } from './config/token';
import { SidebarMenuComponent, SidebarMenuTheme } from './components/sidebar-menu/sidebar-menu.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { InlineSVGModule } from 'ng-inline-svg';
export { SIDEBAR_CONFIG, SITEMAP_NAVIGATION } from './config/token';
export { SidebarMenuTheme };
export { SITEMAP_LOADER } from './injection/loader.token';
export var SidebarComponents = [SidebarMenuComponent, SidebarComponent];
//export const SidebarComponents = []
export function sidebarConfigFactory(sitemapNavigation) {
    return {
        sitemapNavigation: sitemapNavigation
    };
}
var KioNg2SidebarModule = /** @class */ (function () {
    function KioNg2SidebarModule() {
    }
    KioNg2SidebarModule.forRoot = function (sidebarConfig) {
        return {
            ngModule: KioNg2SidebarModule,
            providers: [
                {
                    provide: SIDEBAR_CONFIG,
                    useValue: sidebarConfig
                },
                {
                    provide: SITEMAP_NAVIGATION,
                    useValue: sidebarConfig.sitemapNavigation
                }
            ]
        };
    };
    KioNg2SidebarModule.decorators = [
        { type: NgModule, args: [{
                    imports: [
                        KioNg2SitemapModule,
                        InlineSVGModule,
                        KioNg2UIUXModule,
                        CommonModule,
                    ],
                    declarations: SidebarComponents.slice(),
                    entryComponents: SidebarComponents.slice(),
                    providers: [
                        {
                            provide: SITEMAP_NAVIGATION,
                            useValue: {
                                gotoChapter: function (chapter) {
                                    return Observable.throw(new Error("gotoChapter is not implemented."));
                                }
                            }
                        },
                        {
                            provide: SIDEBAR_CONFIG,
                            useFactory: sidebarConfigFactory,
                            deps: [SITEMAP_NAVIGATION]
                        },
                        SidebarService
                    ],
                    exports: SidebarComponents.concat([
                        CommonModule,
                        KioNg2SitemapModule,
                        KioNg2UIUXModule,
                        InlineSVGModule
                    ])
                },] },
    ];
    /** @nocollapse */
    KioNg2SidebarModule.ctorParameters = function () { return []; };
    return KioNg2SidebarModule;
}());
export { KioNg2SidebarModule };
//# sourceMappingURL=module.js.map