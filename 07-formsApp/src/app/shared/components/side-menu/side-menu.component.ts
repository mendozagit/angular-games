import { Component } from '@angular/core';

interface MenuItem {
    title: string;
    route: string;
}

@Component({
    selector: 'shared-side-menu',
    templateUrl: './side-menu.component.html',
    styles: [],
})
export class SideMenuComponent {
    public sideMenuItems: MenuItem[] = [
        { title: 'Basics', route: './reactive/basic' },
        { title: 'Dynamics', route: './reactive/dynamic' },
        { title: 'Switches', route: './reactive/switches' },
    ];
    public authMenuItems: MenuItem[] = [
        { title: 'Register', route: './auth/register' },
    ];
}
