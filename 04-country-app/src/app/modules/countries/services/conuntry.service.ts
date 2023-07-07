import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, delay, map, of } from 'rxjs';
import { Country } from '../interfaces/country.interface';
import { ChacheStore } from '../interfaces/cache-store.interface';

@Injectable({ providedIn: 'root' })
export class CountryService {
    private readonly apiUrl = 'https://restcountries.com/v3.1';

    public cacheStorage: ChacheStore = {
        byCapital: { searchText: '', countries: [] },
        byCountry: { searchText: '', countries: [] },
        byRegion: { region: '', countries: [] },
    };

    constructor(private httpClient: HttpClient) {}

    private getCountriesRequest(url: string): Observable<Country[]> {
        return this.httpClient.get<Country[]>(url).pipe(
            catchError((error) => {
                console.log('COUNTRY API ERROR RESPONSE:', error);
                return of([]);
            })
            //delay(2000)
        );
    }

    /**
     * searchCapital
text:string

*/
    public searchCapital(text: string): Observable<Country[]> {
        const url = `${this.apiUrl}/capital/${text}`;
        return this.getCountriesRequest(url);
    }

    public searchCountry(text: string): Observable<Country[]> {
        const url = `${this.apiUrl}/name/${text}`;
        return this.getCountriesRequest(url);
    }

    public searchRegion(text: string): Observable<Country[]> {
        const url = `${this.apiUrl}/region/${text}`;
        return this.getCountriesRequest(url);
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
