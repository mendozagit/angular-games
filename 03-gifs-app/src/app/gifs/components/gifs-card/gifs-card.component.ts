import { Component, Input, OnInit } from '@angular/core';
import { Gif } from '../../interfaces/gifs.interfaces';

@Component({
    selector: 'gifs-card',
    templateUrl: './gifs-card.component.html',
    styleUrls: ['./gifs-card.component.css'],
})
export class GifsCardComponent implements OnInit {
    ngOnInit(): void {
        if (!this.gifInputProperty) {
            throw new Error('gifs-card.gifInputProperty is requiered');
        }
    }
    @Input()
    public gifInputProperty!: Gif;
}
