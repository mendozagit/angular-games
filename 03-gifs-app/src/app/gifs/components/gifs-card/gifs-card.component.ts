import { Component, Input } from '@angular/core';
import { Gif } from '../../interfaces/gifs.interfaces';

@Component({
    selector: 'gifs-card',
    templateUrl: './gifs-card.component.html',
    styleUrls: ['./gifs-card.component.css'],
})
export class GifsCardComponent {
    @Input()
    public gifInputProperty!: Gif;
}
