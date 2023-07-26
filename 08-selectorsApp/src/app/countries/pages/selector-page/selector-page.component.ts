import { Component } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';

@Component({
    selector: 'app-selector-page',
    templateUrl: './selector-page.component.html',
    styles: [],
})
export class SelectorPageComponent {
    constructor(private formBuilder: FormBuilder) {}

    public form: FormGroup = this.formBuilder.group({
        region: ['', [Validators.required]],
        country: ['', [Validators.required]],
        borders: ['', [Validators.required]],
    });
}
