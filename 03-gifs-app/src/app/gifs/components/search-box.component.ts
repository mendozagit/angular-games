import { Component, ElementRef, Input, ViewChild } from '@angular/core';
import { GifsService } from '../services/gifs.service';

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
            (keyup.enter)="searchTag()"
            #searchInput
        />
    `,
})
export class SearchBoxComponent {
    constructor(private gifService: GifsService) {}

    @ViewChild('searchInput')
    public searchInput!: ElementRef<HTMLInputElement>;
    /**
     * searchTag
     */
    // public searchTag(tag: string) {
    //     console.log(tag);
    // }

    public searchTag() {
        //     console.log(tag);
        const searchText = this.searchInput.nativeElement.value;
        this.gifService.searchTag(searchText);

        this.searchInput.nativeElement.value = '';
        console.log(this.gifService);
    }
}
