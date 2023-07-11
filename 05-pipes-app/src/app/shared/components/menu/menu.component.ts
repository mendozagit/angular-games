import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
    selector: 'shared-menu',
    templateUrl: './menu.component.html',
    styles: [],
})
export class MenuComponent implements OnInit {
    public menuItems: MenuItem[] = [];

    ngOnInit(): void {
        this.menuItems = [
            { label: 'New', icon: 'pi pi-arrow-down-left' },
            { label: 'Apple', icon: 'pi pi-apple' },
            { label: 'briefcase', icon: 'pi pi-briefcase' },
            { label: 'New', icon: 'pi pi-check' },
        ];
    }
}
