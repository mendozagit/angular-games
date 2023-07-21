import { HeroService } from './../../services/heroes.service';
import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Hero } from '../../interfaces/hero.interface';
import { map } from 'rxjs';

@Component({
    selector: 'app-search-page',
    templateUrl: './search-page.component.html',
    styles: [],
})
export class SearchPageComponent {
    public searchInput = new FormControl('');
    public heros: Hero[] = [];
    public searchText: string = '';

    constructor(private heroService: HeroService) {}
    searchHero() {
        this.searchText = this.searchInput.value?.trim() || '';

        this.heroService
            .getSuggestions(this.searchText)
            .subscribe((heros) => (this.heros = heros));

        console.log(this.searchText);
    }
}
