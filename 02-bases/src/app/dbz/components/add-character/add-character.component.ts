import { Component } from '@angular/core';
import { Character } from '../../interfaces/Character.Interface';

@Component({
    selector: 'dbz-add-character',
    templateUrl: './add-character.component.html',
    styleUrls: ['./add-character.component.css'],
})
export class AddCharacterComponent {
    public character: Character = {
        name: 'ABC',
        power: 5,
    };

    /**
     * saveCharacter
     */
    public saveCharacter(): void {
        console.log(this.character);
    }
}
