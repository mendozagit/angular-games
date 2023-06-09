import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, delay, map, of, tap } from 'rxjs';
import { Country } from '../interfaces/country.interface';
import { ChacheStore } from '../interfaces/cache-store.interface';
import { Region } from '../interfaces/region.type';

@Injectable({ providedIn: 'root' })
export class CountryService {
    private readonly apiUrl = 'https://restcountries.com/v3.1';
    private readonly storageKey: string = 'CacheStorage';
    public cacheStorage: ChacheStore = {
        byCapital: { searchText: '', countries: [] },
        byCountry: { searchText: '', countries: [] },
        byRegion: { region: '', countries: [] },
    };

    constructor(private httpClient: HttpClient) {
        this.readFropLocalStorage();
    }

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
            }),
            tap(() => {
                this.writeToLocalStorage();
            })
        );
    }

    public searchCountry(searchText: string): Observable<Country[]> {
        const url = `${this.apiUrl}/name/${searchText}`;
        return this.getCountriesRequest(url).pipe(
            tap((countries) => {
                this.cacheStorage.byCountry = {
                    searchText,
                    countries,
                };
            }),
            tap(() => {
                this.writeToLocalStorage();
            })
        );
    }

    public searchRegion(region: Region): Observable<Country[]> {
        const url = `${this.apiUrl}/region/${region}`;
        return this.getCountriesRequest(url).pipe(
            tap((countries) => {
                this.cacheStorage.byRegion = {
                    countries: countries,
                    region,
                };
            }),
            tap(() => {
                this.writeToLocalStorage();
            })
        );
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

    private writeToLocalStorage() {
        localStorage.setItem(
            this.storageKey,
            JSON.stringify(this.cacheStorage)
        );
    }
    private readFropLocalStorage() {
        //debugger;
        if (localStorage.getItem(this.storageKey)) {
            this.cacheStorage = JSON.parse(
                localStorage.getItem(this.storageKey)!
            );
        }
    }
}
