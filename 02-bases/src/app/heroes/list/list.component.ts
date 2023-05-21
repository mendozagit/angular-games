import { Component } from '@angular/core';

@Component({
    selector: 'app-heroes-list',
    templateUrl: './list.component.html',
    styleUrls: ['./list.component.css'],
})
export class ListComponent {
    public deletedHero?: string;

    public heroNames: string[] = [
        'hero 1',
        'hero 2',
        'hero 3',
        'hero 4',
        'hero 5',
        'hero 6',
    ];

    /**
     * removeLastHero
     */
    public onRemoveLastHero() {
        this.deletedHero = this.heroNames.pop();
    }
}
