import { CountryService } from './../../services/country.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Region, SmallCountry } from '../../interfaces/country.interface';
import { Subscription, filter, switchMap, tap } from 'rxjs';

@Component({
    selector: 'app-selector-page',
    templateUrl: './selector-page.component.html',
    styles: [],
})
export class SelectorPageComponent implements OnInit {
    constructor(
        private formBuilder: FormBuilder,
        private countryService: CountryService
    ) {}

    public form: FormGroup = this.formBuilder.group({
        region: ['', [Validators.required]],
        country: ['', [Validators.required]],
        border: ['', [Validators.required]],
    });
    public regionOnChangeSubcription: Subscription | undefined;
    public countryOnChangeSubcription: Subscription | undefined;
    public borderOnChangeSubcription: Subscription | undefined;

    public countriesByRegion: SmallCountry[] = [];
    public bordersByCountry: SmallCountry[] = [];

    get regions(): Region[] {
        return this.countryService.regions;
    }
    ngOnInit(): void {
        this.onRegionChange();
        this.onCountryChange();
        this.onBorderChange();
    }

    onRegionChange(): void {
        this.regionOnChangeSubcription = this.form
            .get('region')
            ?.valueChanges.pipe(
                tap(() => this.form.get('country')?.setValue('')),
                tap(() => (this.bordersByCountry = [])),
                tap((region: Region) => console.log('region', { region })),
                switchMap((region: Region) =>
                    this.countryService.getCountriesByregion(region)
                )
            )
            .subscribe((smallCountries) => {
                console.log('onRegionChange', { smallCountries });
                this.countriesByRegion = smallCountries;
            });
    }

    onCountryChange(): void {
        this.countryOnChangeSubcription = this.form
            .get('country')
            ?.valueChanges.pipe(
                tap(() => this.form.get('border')?.setValue('')),
                tap((alphaCode: string) =>
                    console.log('alphaCode', { alphaCode })
                ),
                filter((alphaCode: string) => alphaCode.length > 0),
                switchMap((alphaCode) =>
                    this.countryService.getCountryByAlphaCode(alphaCode)
                ),
                switchMap((smallCountry) =>
                    this.countryService.getCountriesByBorders(
                        smallCountry.borders
                    )
                )
            )
            .subscribe((smallCountries) => {
                console.log('onCountryChange', { smallCountries });
                this.bordersByCountry = smallCountries;
            });
    }
    onBorderChange(): void {
        this.borderOnChangeSubcription = this.form
            .get('border')
            ?.valueChanges.pipe(
                tap((border) => {
                    console.log('border', { border });
                }),
                filter((border: string) => border.length > 0),
                switchMap((border) =>
                    this.countryService.getCountryByAlphaCode(border)
                )
            )
            .subscribe((country) => {
                console.log('onBorderChange: subscribe', { country });
            });
    }
}
