import { Component } from '@angular/core';
import { CountryService } from '../../services/conuntry.service';
import { Country } from '../../interfaces/Country';

@Component({
    selector: 'countries-by-region-page',
    templateUrl: './by-region-page.component.html',
    styles: [],
})
export class ByRegionPageComponent {
    public countries: Country[] = [];

    constructor(private countryService: CountryService) {}

    searchByRegion(textToSearch: string): void {
        this.countryService.searchRegion(textToSearch).subscribe((x) => {
            this.countries = x;
        });

        console.log(textToSearch + ' From searchByRegion');
    }
}
