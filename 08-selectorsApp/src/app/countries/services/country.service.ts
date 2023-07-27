import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Country, Region, SmallCountry } from '../interfaces/country.interface';
import { Observable } from 'rxjs';

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
        this.url = `${this.baseUrl}/region/${region}`;

        return this.httpClient.get<Country[]>(this.url);
    }
}
