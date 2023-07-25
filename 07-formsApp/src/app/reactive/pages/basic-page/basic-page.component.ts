import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, Validators, FormGroup } from '@angular/forms';

const product1 = {
    name: 'Coca-Cola',
    price: 25,
    inStorage: 300,
};

@Component({
    templateUrl: './basic-page.component.html',
    styles: [],
})
export class BasicPageComponent implements OnInit {
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
            this.form.reset({ price: 0, inStorage: 0 });
        } else console.log('invalid form');
    }
    ngOnInit(): void {
        this.form.reset(product1);
    }
}
