import { CanActivateFn } from '@angular/router';

export const authCanActivateGuard: CanActivateFn = (route, state) => {
    console.log('authCanActivateGuard: route', route);
    console.log('authCanActivateGuard: state', state);

    return true;
};
