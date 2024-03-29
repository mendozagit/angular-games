import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
    selector: 'shared-menu',
    templateUrl: './menu.component.html',
    styles: [],
})
export class MenuComponent implements OnInit {
    public menuItems: MenuItem[] = [];
    public popup: boolean = true;
    ngOnInit(): void {
        this.menuItems = [
            {
                label: 'Angular pipes',
                icon: 'pi pi-desktop',
                items: [
                    {
                        label: 'Text And Dates',
                        icon: 'pi pi-align-left',
                        routerLink: 'basic',
                    },
                    {
                        label: 'Numbers',
                        icon: 'pi pi-dollar',
                        routerLink: 'numbers',
                    },
                    {
                        label: 'Non Common',
                        icon: 'pi pi-globe',
                        routerLink: 'uncommon',
                    },
                ],
            },
            {
                label: 'Custom pipes',
                icon: 'pi pi-cog',
                items: [
                    {
                        label: 'Custom',
                        icon: 'pi pi-align-left',
                        routerLink: 'custom',
                    },
                ],
            },
        ];
    }
}
