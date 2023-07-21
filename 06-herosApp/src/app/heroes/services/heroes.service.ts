import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, of } from 'rxjs';
import { Hero } from '../interfaces/hero.interface';
import { environments } from 'src/environments/environments';

@Injectable({ providedIn: 'root' })
export class HeroService {
    private readonly baseUrl: string = environments.baseUrl;

    constructor(private httpClient: HttpClient) {}

    getHeroes(): Observable<Hero[]> {
        const url = `${this.baseUrl}/heroes`;

        return this.httpClient.get<Hero[]>(url);
    }

    getHeroById(id: string): Observable<Hero | undefined> {
        const url = `${this.baseUrl}/heroes/${id}`;

        return this.httpClient
            .get<Hero>(url)
            .pipe(catchError((e) => of(undefined)));
    }

    getSuggestions(
        searchText: string,
        pageSize: number = 6
    ): Observable<Hero[]> {
        const url = `${this.baseUrl}/heroes?q=${searchText}&limit=${pageSize}`;

        return this.httpClient.get<Hero[]>(url).pipe(catchError((e) => of([])));
    }
}
