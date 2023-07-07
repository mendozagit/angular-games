import { Component, OnInit } from '@angular/core';
import { CountryService } from '../../services/conuntry.service';
import { Country } from '../../interfaces/country.interface';
import { Region } from '../../interfaces/region.type';

@Component({
    selector: 'countries-by-region-page',
    templateUrl: './by-region-page.component.html',
    styles: [],
})
export class ByRegionPageComponent implements OnInit {
    public selectedRegion?: Region;
    public countries: Country[] = [];
    public regions: Region[] = [
        'Africa',
        'America',
        'Asia',
        'Europe',
        'Oceania',
    ];

    constructor(private countryService: CountryService) {}

    searchByRegion(region: Region): void {
        this.countryService.searchRegion(region).subscribe((x) => {
            this.countries = x;
        });
        this.selectedRegion = region;

        console.log(region + ' From searchByRegion');
    }
    ngOnInit(): void {
        this.countries = this.countryService.cacheStorage.byRegion.countries;
        this.selectedRegion = this.countryService.cacheStorage.byRegion.region;
    }
}
