import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({ providedIn: 'root' })
export class CountryService {
    constructor(private httpClient: HttpClient) {}
}
