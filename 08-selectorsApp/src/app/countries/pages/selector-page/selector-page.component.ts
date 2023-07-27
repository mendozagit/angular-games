import { CountryService } from './../../services/country.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Region, SmallCountry } from '../../interfaces/country.interface';
import { Subscription, switchMap, tap } from 'rxjs';

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
        borders: ['', [Validators.required]],
    });
    public regionOnChangeSubcription: Subscription | undefined;
    public countriesByRegion: SmallCountry[] = [];

    get regions(): Region[] {
        return this.countryService.regions;
    }
    ngOnInit(): void {
        this.onRegionChange();
    }

    onRegionChange(): void {
        this.regionOnChangeSubcription = this.form
            .get('region')
            ?.valueChanges.pipe(
                tap(() => this.form.get('country')?.setValue('')),
                switchMap((region) =>
                    this.countryService.getCountriesByregion(region)
                )
            )
            .subscribe((smallCountries) => {
                console.log('onRegionChange', { smallCountries });
                this.countriesByRegion = smallCountries;
            });
    }
}
