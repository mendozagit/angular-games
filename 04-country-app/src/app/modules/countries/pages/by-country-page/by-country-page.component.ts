import { Country } from '../../interfaces/Country';
import { CountryPageComponent } from '../country-page/country-page.component';
import { CountryService } from './../../services/conuntry.service';
import { Component } from '@angular/core';

@Component({
    selector: 'countries-by-country-page',
    templateUrl: './by-country-page.component.html',
    styles: [],
})
export class ByCountryPageComponent {
    public countries: Country[] = [];

    constructor(private countryService: CountryService) {}

    searchByCountry(textToSearch: string): void {
        this.countryService.searchCountry(textToSearch).subscribe((x) => {
            this.countries = x;
        });

        console.log(textToSearch + ' From searchByCountry');
    }
}
