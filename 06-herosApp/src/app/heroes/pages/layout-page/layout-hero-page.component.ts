import { Component } from '@angular/core';

@Component({
    selector: 'hero-layout-page',
    templateUrl: './layout-hero-page.component.html',
    styles: [],
})
export class LayoutHeroPageComponent {
    public menuItems = [
        {
            label: 'List',
            icon: 'label',
            url: './list',
        },
        {
            label: 'Add',
            icon: 'add',
            url: './new-hero',
        },
        {
            label: 'Search',
            icon: 'search',
            url: './search',
        },
    ];
}
