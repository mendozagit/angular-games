import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, delay, map, of, tap } from 'rxjs';
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
    public searchCapital(searchText: string): Observable<Country[]> {
        const url = `${this.apiUrl}/capital/${searchText}`;
        return this.getCountriesRequest(url).pipe(
            tap((countries) => {
                this.cacheStorage.byCapital = {
                    searchText,
                    countries,
                };
            })
        );
    }

    public searchCountry(searchText: string): Observable<Country[]> {
        const url = `${this.apiUrl}/name/${searchText}`;
        return this.getCountriesRequest(url);
    }

    public searchRegion(searchText: string): Observable<Country[]> {
        const url = `${this.apiUrl}/region/${searchText}`;
        return this.getCountriesRequest(url);
    }

    public searchCountryInfo(searchText: string): Observable<Country | null> {
        const url = `${this.apiUrl}/alpha/${searchText}`;

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
