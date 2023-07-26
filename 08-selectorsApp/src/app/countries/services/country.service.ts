import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Region } from '../interfaces/country.interface';

@Injectable({ providedIn: 'root' })
export class CountryService {
    constructor(private httpClient: HttpClient) {}

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
}
