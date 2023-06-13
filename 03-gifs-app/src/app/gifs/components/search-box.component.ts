import { Component } from '@angular/core';

@Component({
    selector: 'gifs-search-box',
    template: `
        <h5>Buscar:</h5>
        <input
            type="text"
            class="form-control"
            placeholder="Buscar gifs"
            name=""
            id=""
        />
    `,
})
export class SearchBoxComponent {
    constructor() {}
}
