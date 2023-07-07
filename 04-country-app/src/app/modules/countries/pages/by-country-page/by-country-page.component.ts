import { Country } from '../../interfaces/country.interface';
import { CountryPageComponent } from '../country-page/country-page.component';
import { CountryService } from './../../services/conuntry.service';
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'countries-by-country-page',
    templateUrl: './by-country-page.component.html',
    styles: [],
})
export class ByCountryPageComponent implements OnInit {
    public countries: Country[] = [];
    public searchText: string = '';

    constructor(private countryService: CountryService) {}

    searchByCountry(textToSearch: string): void {
        this.countryService.searchCountry(textToSearch).subscribe((x) => {
            this.countries = x;
        });

        console.log(textToSearch + ' From searchByCountry');
    }
    ngOnInit(): void {
        this.countries = this.countryService.cacheStorage.byCountry.countries;
        this.searchText = this.countryService.cacheStorage.byCountry.searchText;
    }
}
