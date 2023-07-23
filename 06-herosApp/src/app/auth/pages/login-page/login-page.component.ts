import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-login-page',
    templateUrl: './login-page.component.html',
    styles: [],
})
export class LoginPageComponent {
    constructor(private authService: AuthService, private router: Router) {}

    onSignIn(): void {
        this.authService
            .login('mendoza.git@gmail.com', 'somePass')
            .subscribe((user) => {
                this.router.navigateByUrl('/');
            });
    }
}
