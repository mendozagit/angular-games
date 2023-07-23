import { Component } from '@angular/core';
import { Hero, Publisher } from '../../interfaces/hero.interface';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
    selector: 'app-new-page',
    templateUrl: './new-page.component.html',
    styles: [],
})
export class NewPageComponent {
    public hero?: Hero;
    public heroForm = new FormGroup({
        id: new FormControl(''),
        superhero: new FormControl('', { nonNullable: true }),
        publisher: new FormControl<Publisher>(Publisher.DCComics),
        alter_ego: new FormControl(''),
        first_appearance: new FormControl(''),
        characters: new FormControl(''),
        alt_image: new FormControl(''),
    });

    public publishers = [
        {
            id: 'DC Comics',
            desc: 'DC - Comics',
        },
        {
            id: 'Marvel Comics',
            desc: 'Marvel - Comics',
        },
    ];
}
