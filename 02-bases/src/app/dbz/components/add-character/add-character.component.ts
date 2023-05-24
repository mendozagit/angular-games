import { Component, EventEmitter, Output } from '@angular/core';
import { Character } from '../../interfaces/Character.Interface';

@Component({
    selector: 'dbz-add-character',
    templateUrl: './add-character.component.html',
    styleUrls: ['./add-character.component.css'],
})
export class AddCharacterComponent {
    @Output()
    public onNewCharacter = new EventEmitter<Character>();

    public character: Character = {
        name: 'ABC',
        power: 5,
    };

    /**
     * saveCharacter
     */
    public saveCharacter(): void {
        // debugger;
        if (this.character.name.length > 0) {
            this.onNewCharacter.emit(this.character);
            console.log(this.character);
            this.character.name = '';
            this.character.power = 0;
        }
    }
}
