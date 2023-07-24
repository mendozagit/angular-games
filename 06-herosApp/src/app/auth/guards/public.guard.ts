import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { inject } from '@angular/core';
import { Observable, tap, map, of } from 'rxjs';

function CheckAuth(): boolean | Observable<boolean> {
    const router: Router = inject(Router);
    const authService: AuthService = inject(AuthService);

    return authService.checkAuthStatus().pipe(
        tap((authorized) =>
            console.log('public guard authorized?', authorized)
        ),
        tap((authorized) => {
            if (authorized) {
                router.navigate(['/heroes/list']);
            }
        }),
        map((authorized) => (!authorized ? true : false))
    );
}
export const publicGuard: CanActivateFn = (route, state) => {
    return CheckAuth();
};
