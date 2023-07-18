import { Component, OnInit } from '@angular/core';
import { Hero } from '../../interfaces/hero.interface';
import { HeroService } from '../../services/heroes.service';

@Component({
    selector: 'app-list-page',
    templateUrl: './list-page.component.html',
    styles: [],
})
export class ListPageComponent implements OnInit {
    public heroes: Hero[] = [];

    constructor(private heroService: HeroService) {}
    ngOnInit(): void {
        // this.heroService
        //     .getHeroes()
        //     .subscribe((data: Hero[]) => (this.heroes = data));

        this.heroService.getHeroes().subscribe({
            next: (response) => {
                this.heroes = response;
                console.log({ response });
            },
            error: (e) => console.error({ e }),
            complete: () => console.info('complete'),
        });
    }
}
