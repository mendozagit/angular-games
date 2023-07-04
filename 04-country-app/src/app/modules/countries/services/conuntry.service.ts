import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Country } from '../interfaces/Country';

@Injectable({ providedIn: 'root' })
export class CountryService {
    private readonly apiUrl = 'https://restcountries.com/v3.1';

    constructor(private httpClient: HttpClient) {}

    /**
     * searchCapital
text:string

*/
    public searchCapital(text: string): Observable<Country[]> {
        const url = `${this.apiUrl}/capital/${text}`;
        return this.httpClient.get<Country[]>(url);
    }
}
