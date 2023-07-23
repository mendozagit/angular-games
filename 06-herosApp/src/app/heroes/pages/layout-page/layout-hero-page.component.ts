import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../../auth/services/auth.service';
import { User } from 'src/app/auth/interfaces/user.interface';

@Component({
    selector: 'hero-layout-page',
    templateUrl: './layout-hero-page.component.html',
    styles: [],
})
export class LayoutHeroPageComponent {
    constructor(private authService: AuthService, private router: Router) {}
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

    public onLogout(): void {
        this.authService.logout();
        this.router.navigateByUrl('/auth/login');
    }

    get currentUser(): User | undefined {
        return this.authService.currentUser;
    }
}
