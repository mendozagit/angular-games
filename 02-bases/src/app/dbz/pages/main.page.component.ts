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

    /**
     * onNewCharacter
     */
    public onNewCharacter(character: Character): void {
        this.charaters.push(character);

        // console.log('main Page: ' + character.name);
        // console.log('main Page: ' + character.power);
    }

    /**
     * onDelete
     */
    public onDelete(index: number): void {
        // debugger;
        const removed = this.charaters.splice(index, 1); // Mutates fruits and returns array of removed items
        console.log('fruits', this.charaters); // ["mango","apple","berry"]
        console.log('removed', removed); // ["pine"]
        // this.charaters = removed;
    }
}
