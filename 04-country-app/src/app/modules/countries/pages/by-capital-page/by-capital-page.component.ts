import { Component, EventEmitter, Output } from '@angular/core';
import { CountryService } from '../../services/conuntry.service';
import { Country } from '../../interfaces/Country';

@Component({
    selector: 'countries-by-capital-page',
    templateUrl: './by-capital-page.component.html',
    styles: [],
})
export class ByCapitalPageComponent {
    public countries: Country[] = [];

    constructor(private countryService: CountryService) {}

    searchByCapital(textToSearch: string): void {
        this.countryService.searchCapital(textToSearch).subscribe((x) => {
            this.countries = x;
        });

        console.log(textToSearch + ' From searchByCapital');
    }
}
