import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CountryService } from '../../services/conuntry.service';
import { Country } from '../../interfaces/Country';
import { switchMap } from 'rxjs';

@Component({
    selector: 'countries-country-page',
    templateUrl: './country-page.component.html',
    styles: [],
})
export class CountryPageComponent implements OnInit {
    public country?: Country | null;
    constructor(
        private activatedRoute: ActivatedRoute,
        private router: Router,
        private countryService: CountryService
    ) {}

    ngOnInit(): void {
        this.activatedRoute.params
            .pipe(
                switchMap(({ id }) => this.countryService.searchCountryInfo(id))
            )
            .subscribe((country) => {
                if (!country) this.router.navigateByUrl('');
                return (this.country = country);
            });
    }

    // searchCountryInfo(textToSearch: string): void {
    //     this.countryService.searchCountryInfo(textToSearch).subscribe((x) => {
    //         this.countries = x;
    //         console.log(textToSearch + ' From searchCountryInfo');
    //         console.log(this.countries);
    //     });
    // }
}
