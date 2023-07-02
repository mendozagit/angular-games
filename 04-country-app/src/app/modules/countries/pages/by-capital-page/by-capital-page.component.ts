import { Component, EventEmitter, Output } from '@angular/core';

@Component({
    selector: 'countries-by-capital-page',
    templateUrl: './by-capital-page.component.html',
    styles: [],
})
export class ByCapitalPageComponent {
    searchByCapital(textToSearch: string): void {
        console.log(textToSearch + ' From searchByCapital');
    }
}
