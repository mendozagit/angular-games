import { CountryService } from './../../services/country.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Region } from '../../interfaces/country.interface';
import { Subscription } from 'rxjs';

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

    get regions(): Region[] {
        return this.countryService.regions;
    }
    ngOnInit(): void {
        this.onRegionChange();
    }

    onRegionChange(): void {
        this.regionOnChangeSubcription = this.form
            .get('region')
            ?.valueChanges.subscribe((region) => {
                console.log({ region });
            });
    }
}
