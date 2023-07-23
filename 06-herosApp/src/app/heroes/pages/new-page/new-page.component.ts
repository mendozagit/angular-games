import { Component } from '@angular/core';
import { Hero, Publisher } from '../../interfaces/hero.interface';

@Component({
    selector: 'app-new-page',
    templateUrl: './new-page.component.html',
    styles: [],
})
export class NewPageComponent {
    public hero?: Hero;
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
