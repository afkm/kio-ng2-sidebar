import { Component, Optional, Input, Inject, ViewEncapsulation } from '@angular/core';
import { LocaleService } from 'kio-ng2-i18n';
import { SitemapChapterService } from 'kio-ng2-sitemap';
import { SITEMAP_LOADER } from '../../injection/loader.token';
import { SidebarService } from '../../services/sidebar.service';
export var SidebarMenuTheme;
(function (SidebarMenuTheme) {
    SidebarMenuTheme[SidebarMenuTheme["main"] = 0] = "main";
    SidebarMenuTheme[SidebarMenuTheme["sidebar"] = 1] = "sidebar";
})(SidebarMenuTheme || (SidebarMenuTheme = {}));
var SidebarMenuComponent = /** @class */ (function () {
    function SidebarMenuComponent(localeService, sitemapChapterService, sidebarService, sitemapLoader) {
        var _this = this;
        this.localeService = localeService;
        this.sitemapChapterService = sitemapChapterService;
        this.sidebarService = sidebarService;
        this.sitemapLoader = sitemapLoader;
        this.locale = this.localeService.currentLocale;
        this.lang = this.localeService.currentLocale.substr(0, 2);
        //slugs:MenuSlug[]=this.sitemapService.sitemap.items.map ( item => item.slug )
        this.navigationItems = [];
        this.theme = SidebarMenuTheme.main;
        this.navSubscription = this.sitemapChapterService.allModels.subscribe(function (models) {
            _this.navigationItems = [];
        });
        this.chapterNavSubscription = this.sitemapChapterService.navigation.filter(function (chapter) { return chapter.locale === _this.localeService.currentLocale; })
            .subscribe(function (chapter) {
            _this.navigationItems.push(chapter);
        });
    }
    SidebarMenuComponent.prototype.onClick = function (event, navigationItem) {
        //console.log('navigate to: ', navigationItem)
        event.preventDefault();
        event.stopPropagation();
        this.navigateToNavigationItem(navigationItem);
        return false;
    };
    SidebarMenuComponent.prototype.navigateToNavigationItem = function (navigationItem) {
        var _this = this;
        if (this.sitemapLoader) {
            var t0 = Date.now();
            this.sitemapLoader.gotoChapter(navigationItem)
                .flatMap(function (result) { return _this.sidebarService.close(); })
                .subscribe(function (result) { }, function (error) {
                console.error("Failed to go to chapter \"" + navigationItem.cuid + "\": " + error);
            });
        }
    };
    SidebarMenuComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.localeService.changes.subscribe(function (locale) {
            _this.locale = locale;
            _this.lang = locale.substr(0, 2);
        });
    };
    SidebarMenuComponent.decorators = [
        { type: Component, args: [{
                    selector: 'sidebar-menu',
                    templateUrl: './sidebar-menu.component.html',
                    styleUrls: ['./sidebar-menu.component.css'],
                    encapsulation: ViewEncapsulation.None
                },] },
    ];
    /** @nocollapse */
    SidebarMenuComponent.ctorParameters = function () { return [
        { type: LocaleService, },
        { type: SitemapChapterService, },
        { type: SidebarService, },
        { type: undefined, decorators: [{ type: Optional }, { type: Inject, args: [SITEMAP_LOADER,] },] },
    ]; };
    SidebarMenuComponent.propDecorators = {
        'theme': [{ type: Input },],
    };
    return SidebarMenuComponent;
}());
export { SidebarMenuComponent };
//# sourceMappingURL=sidebar-menu.component.js.map