import { Component, Input } from '@angular/core';
import { Country } from '../../interfaces/country.interface';

@Component({
    selector: 'country-table',
    templateUrl: './country-table.component.html',
    styles: [
        `
            img {
                width: 25px;
            }
        `,
    ],
})
export class CountryTableComponent {
    @Input()
    public countries: Country[] = [];
}
