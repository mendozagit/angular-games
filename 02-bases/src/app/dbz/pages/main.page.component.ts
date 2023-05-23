import { Component, OnInit } from '@angular/core';
import { Character } from '../interfaces/Character.Interface';

@Component({
    selector: 'app-dbz-main-page',
    templateUrl: 'main.page.component.html',
})
export class MainPageComponent {
    public charaters: Character[] = [
        {
            name: 'Klilin',
            power: 1000,
        },
        {
            name: 'Goku',
            power: 9500,
        },
        {
            name: 'Vegeta',
            power: 7500,
        },
    ];
}
