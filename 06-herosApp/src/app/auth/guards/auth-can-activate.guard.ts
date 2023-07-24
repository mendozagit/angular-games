import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { Observable, tap } from 'rxjs';

function CheckAuth(): boolean | Observable<boolean> {
    const router: Router = inject(Router);
    const authService: AuthService = inject(AuthService);

    return authService.checkAuthStatus().pipe(
        tap((authorized) => {
            if (!authorized) {
                router.navigate(['/auth/login']);
            }
        }),
        tap((authorized) => console.log(authorized))
    );
}
export const authCanActivateGuard: CanActivateFn = (route, state) => {
    return CheckAuth();
};
