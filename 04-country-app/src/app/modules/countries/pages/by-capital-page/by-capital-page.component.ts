import { Component, EventEmitter, Output } from '@angular/core';
import { CountryService } from '../../services/conuntry.service';
import { Country } from '../../interfaces/country.interface';

@Component({
    selector: 'countries-by-capital-page',
    templateUrl: './by-capital-page.component.html',
    styles: [],
})
export class ByCapitalPageComponent {
    public countries: Country[] = [];
    public isLoading: boolean = false;
    constructor(private countryService: CountryService) {}

    searchByCapital(textToSearch: string): void {
        this.isLoading = true;
        this.countryService.searchCapital(textToSearch).subscribe((x) => {
            this.countries = x;
            this.isLoading = false;
        });

        console.log(textToSearch + ' From searchByCapital');
    }
}
