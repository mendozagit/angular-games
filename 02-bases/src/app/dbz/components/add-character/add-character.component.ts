import { Component, EventEmitter, Output } from '@angular/core';
import { Character } from '../../interfaces/Character.Interface';

@Component({
    selector: 'dbz-add-character',
    templateUrl: './add-character.component.html',
    styleUrls: ['./add-character.component.css'],
})
export class AddCharacterComponent {
    @Output()
    public onAddCharacter = new EventEmitter<Character>();

    public character: Character = {
        id: '',
        name: '',
        power: 0,
    };

    /**
     * saveCharacter
     */
    public saveCharacter(): void {
        //debugger;
        if (this.character.name.length > 0) {
            this.onAddCharacter.emit(this.character);
            this.character = { id: '', name: '', power: 0 };
        }
    }
}
