import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';

@Component({
    templateUrl: './dynamic-page.component.html',
    styles: [],
})
export class DynamicPageComponent {
    /**
     *
     */
    constructor(private formBuilder: FormBuilder) {}
    public form: FormGroup = this.formBuilder.group({
        name: ['', [Validators.required, Validators.maxLength(3)]],
        favoriteGames: this.formBuilder.array([
            ['Metal Gear', Validators.required],
            ['Death Strading', Validators.required],
        ]),
    });

    onSubmit() {
        if (this.form.invalid) {
            this.form.markAllAsTouched();
            return;
        }

        console.log(this.form);

        this.form.reset();
    }

    get favoriteGames() {
        return (this.form.get('favoriteGames') as FormArray).controls;
    }
}
