import { Component, Input } from '@angular/core';
import { Character } from '../../interfaces/Character.Interface';

@Component({
    selector: 'bdz-list',
    templateUrl: './list.component.html',
    styleUrls: ['./list.component.css'],
})
export class ListComponent {
    @Input()
    public characterList: Character[] = [
        {
            name: 'Trunk',
            power: 10,
        },
    ];
}
