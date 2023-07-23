import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environments } from 'src/environments/environments';
import { User } from '../interfaces/user.interface';
import { Observable, tap } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class AuthService {
    private readonly baseUrl = environments.baseUrl;
    private user?: User;

    constructor(private httpClient: HttpClient) {}

    get currentUser(): User | undefined {
        if (!this.user) {
            return undefined;
        }

        return structuredClone(this.user);
    }

    login(email: string, password: string): Observable<User> {
        const userId = '1';
        const url = `${this.baseUrl}/users/${userId}`;

        return this.httpClient.get<User>(url).pipe(
            tap((user) => (this.user = user)),
            tap((user) =>
                localStorage.setItem(
                    'token',
                    'aaaaaaaaaaaaa.bbbbbbbbbbbbbb.ccccccccc'
                )
            )
        );
    }
    logout(): void {
        this.user = undefined;
        localStorage.clear();
    }
}
