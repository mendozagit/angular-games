import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, map, of } from 'rxjs';
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

        return this.httpClient.get<Country[]>(url).pipe(
            // tap((countries) => console.log('TAP 1 ', countries)),
            // map((countries) => []),
            // tap((countries) => console.log('TAP 2', countries))
            catchError((error) => {
                console.log('COUNTRY API ERROR RESPONSE:', error);
                return of([]);
            })
        );
    }

    public searchCountry(text: string): Observable<Country[]> {
        const url = `${this.apiUrl}/name/${text}`;

        return this.httpClient.get<Country[]>(url).pipe(
            // tap((countries) => console.log('TAP 1 ', countries)),
            // map((countries) => []),
            // tap((countries) => console.log('TAP 2', countries))
            catchError((error) => {
                console.log('COUNTRY API ERROR RESPONSE:', error);
                return of([]);
            })
        );
    }

    public searchRegion(text: string): Observable<Country[]> {
        const url = `${this.apiUrl}/region/${text}`;

        return this.httpClient.get<Country[]>(url).pipe(
            // tap((countries) => console.log('TAP 1 ', countries)),
            // map((countries) => []),
            // tap((countries) => console.log('TAP 2', countries))
            catchError((error) => {
                console.log('COUNTRY API ERROR RESPONSE:', error);
                return of([]);
            })
        );
    }

    public searchCountryInfo(text: string): Observable<Country | null> {
        const url = `${this.apiUrl}/alpha/${text}`;

        return this.httpClient.get<Country[]>(url).pipe(
            // tap((countries) => console.log('TAP 1 ', countries)),
            // map((countries) => []),
            // tap((countries) => console.log('TAP 2', countries))
            map((coutries) => (coutries.length > 0 ? coutries[0] : null)),
            catchError((error) => {
                console.log('COUNTRY API ERROR RESPONSE:', error);
                return of(null);
            })
        );
    }
}
