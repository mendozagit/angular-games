import { CountryService } from './../../services/country.service';
import { Component } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Region } from '../../interfaces/country.interface';

@Component({
    selector: 'app-selector-page',
    templateUrl: './selector-page.component.html',
    styles: [],
})
export class SelectorPageComponent {
    constructor(
        private formBuilder: FormBuilder,
        private countryService: CountryService
    ) {}

    public form: FormGroup = this.formBuilder.group({
        region: ['', [Validators.required]],
        country: ['', [Validators.required]],
        borders: ['', [Validators.required]],
    });

    get regions(): Region[] {
        return this.countryService.regions;
    }
}
