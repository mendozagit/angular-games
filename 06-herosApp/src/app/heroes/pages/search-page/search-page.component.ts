import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
    selector: 'app-search-page',
    templateUrl: './search-page.component.html',
    styles: [],
})
export class SearchPageComponent {
    public inputSearch = new FormControl('');
}
