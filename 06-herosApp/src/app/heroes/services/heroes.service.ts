import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
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
}
