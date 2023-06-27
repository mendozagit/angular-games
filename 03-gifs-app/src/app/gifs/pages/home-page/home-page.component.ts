import { Component } from '@angular/core';
import { GifsService } from '../../services/gifs.service';
import { Gif } from '../../interfaces/gifs.interfaces';

@Component({
    selector: 'gifs-home-page',
    templateUrl: './home-page.component.html',
    styleUrls: ['./home-page.component.css'],
})
export class HomePageComponent {
    /**
     *
     */
    constructor(private gifService: GifsService) {}

    get gifs(): Gif[] {
        return this.gifService.gifs();
    }
}
