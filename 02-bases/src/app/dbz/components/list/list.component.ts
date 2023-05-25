import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/Character.Interface';

@Component({
    selector: 'bdz-list',
    templateUrl: './list.component.html',
    styleUrls: ['./list.component.css'],
})
export class ListComponent {
    @Output() onDeleteEvent = new EventEmitter<string>();

    @Input()
    public characterList: Character[] = [
        {
            id: '',
            name: 'Trunk',
            power: 10,
        },
    ];

    /**
     * onDeleteCharacter
     */
    @Output()
    public onDeleteCharacter(id: string): string {
        console.log(id);
        this.onDeleteEvent.emit(id);
        return id;
    }
}
