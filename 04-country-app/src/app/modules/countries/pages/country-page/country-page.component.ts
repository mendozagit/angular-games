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
    public countries: Country[] = [];

    constructor(
        private activatedRoute: ActivatedRoute,
        private router: Router,
        private countryService: CountryService
    ) {}

    ngOnInit(): void {
        this.activatedRoute.params
            .pipe(
                switchMap((params) =>
                    this.countryService.searchCountryInfo(params['id'])
                )
            )
            .subscribe((country) => {
                console.log('countries: ', country);
                if (!country) {
                    console.log('Redirected to home');
                    this.router.navigateByUrl('');
                } else {
                    console.log('hay pais: ', country);
                }
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
