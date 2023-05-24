import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/Character.Interface';

@Component({
    selector: 'bdz-list',
    templateUrl: './list.component.html',
    styleUrls: ['./list.component.css'],
})
export class ListComponent {
    @Output() onDeleteEvent = new EventEmitter<number>();

    @Input()
    public characterList: Character[] = [
        {
            name: 'Trunk',
            power: 10,
        },
    ];

    /**
     * onDeleteCharacter
     */
    @Output()
    public onDeleteCharacter(index: number): number {
        console.log(index);
        this.onDeleteEvent.emit(index);
        return index;
    }
}
