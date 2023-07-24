import { CanMatchFn } from '@angular/router';

export const authCanMatchGuard: CanMatchFn = (route, segments) => {
    console.log('authCanMatchGuard: route', route);
    console.log('authCanMatchGuard: segments', segments);

    return true;
};
