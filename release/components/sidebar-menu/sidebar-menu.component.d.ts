import { OnInit } from '@angular/core';
import { LocaleService } from 'kio-ng2-i18n';
import { SitemapChapterService, LocalizedChapter } from 'kio-ng2-sitemap';
import { SitemapLoader } from '../../interfaces/loader';
import { SidebarService } from '../../services/sidebar.service';
export declare enum SidebarMenuTheme {
    main = 0,
    sidebar = 1,
}
export interface MenuSlug {
    [key: string]: string;
}
export declare class SidebarMenuComponent implements OnInit {
    private localeService;
    private sitemapChapterService;
    private sidebarService;
    private sitemapLoader;
    constructor(localeService: LocaleService, sitemapChapterService: SitemapChapterService, sidebarService: SidebarService, sitemapLoader: SitemapLoader);
    locale: string;
    lang: string;
    navigationItems: LocalizedChapter[];
    theme: SidebarMenuTheme;
    onClick(event: Event, navigationItem: LocalizedChapter): boolean;
    protected navigateToNavigationItem(navigationItem: LocalizedChapter): void;
    private navSubscription;
    private chapterNavSubscription;
    ngOnInit(): void;
}
