import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';

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
        name: [''],
        price: [0],
        inStorage: [0],
    });

    /**
     * onSubmit
     */
    public onSubmit() {
        console.log('form', this.form);
    }
}
