import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Country, Region, SmallCountry } from '../interfaces/country.interface';
import { Observable, map, of, tap } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class CountryService {
    constructor(private httpClient: HttpClient) {}
    private readonly baseUrl = 'https://restcountries.com/v3.1';
    private url: string = '';

    private _regions: Region[] = [
        Region.Africa,
        Region.Americas,
        Region.Asia,
        Region.Europe,
        Region.Oceania,
    ];

    get regions(): Region[] {
        //return [...this._regions];
        // debugger;
        return structuredClone(this._regions);
    }

    getCountriesByregion(region: Region): Observable<SmallCountry[]> {
        if (!region) return of([]);

        this.url = `${this.baseUrl}/region/${region}/?fields=cca3,name,borders`;

        return this.httpClient.get<Country[]>(this.url).pipe(
            map((countries) =>
                countries.map((country) => ({
                    name: country.name.common,
                    cca3: country.cca3,
                    borders: country.borders ?? [],
                }))
            ),
            tap((response) => {
                console.log(' getCountriesByregion: small countries', response);
            })
        );
    }

    getCountryByAlphaCode(alphaCode: string): Observable<SmallCountry> {
        this.url = '';
        this.url = `${this.baseUrl}/alpha/${alphaCode}?fields=cca3,name,borders`;

        return this.httpClient.get<Country>(this.url).pipe(
            map((country) => ({
                name: country.name.common,
                cca3: country.cca3,
                borders: country.borders ?? [],
            }))
        );
    }
}
