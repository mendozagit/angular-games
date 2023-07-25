import { Component } from '@angular/core';
import { FormArray, FormBuilder, Validators, FormGroup } from '@angular/forms';

@Component({
    templateUrl: './basic-page.component.html',
    styles: [],
})
export class BasicPageComponent {
    constructor(private formBuilder: FormBuilder) {}

    // public form = new FormGroup({
    //     name: new FormControl(''),
    //     price: new FormControl(0),
    //     inStorage: new FormControl(0),
    // });

    public form: FormGroup = this.formBuilder.group({
        name: ['', [Validators.required, Validators.minLength(3)]],
        price: [0, [Validators.required, Validators.min(0)]],
        inStorage: [0, [Validators.required, Validators.min(0)]],
    });

    /**
     * onSubmit
     */
    public onSubmit() {
        if (this.form.valid) {
            console.log('form', this.form);
        } else console.log('invalid form');
    }
}
