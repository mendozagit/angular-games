import { Component, EventEmitter, Output, OnInit } from '@angular/core';
import { CountryService } from '../../services/conuntry.service';
import { Country } from '../../interfaces/country.interface';

@Component({
    selector: 'countries-by-capital-page',
    templateUrl: './by-capital-page.component.html',
    styles: [],
})
export class ByCapitalPageComponent implements OnInit {
    public countries: Country[] = [];
    public isLoading: boolean = false;
    public searchText: string = '';

    constructor(private countryService: CountryService) {}

    searchByCapital(textToSearch: string): void {
        this.isLoading = true;
        this.countryService.searchCapital(textToSearch).subscribe((x) => {
            this.countries = x;
            this.isLoading = false;
        });

        console.log(textToSearch + ' From searchByCapital');
    }
    ngOnInit(): void {
        this.countries = this.countryService.cacheStorage.byCapital.countries;
        this.searchText = this.countryService.cacheStorage.byCapital.searchText;
    }
}
