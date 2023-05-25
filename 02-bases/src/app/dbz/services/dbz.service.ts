import { Injectable } from '@angular/core';
import { v4 as uuidService } from 'uuid';

import { Character } from '../interfaces/Character.Interface';

@Injectable({
    providedIn: 'root',
})
export class DbzService {
    public charaters: Character[] = [
        {
            id: uuidService(),
            name: 'Klilin',
            power: 1000,
        },
        {
            id: uuidService(),
            name: 'Goku',
            power: 9500,
        },
        {
            id: uuidService(),
            name: 'Vegeta',
            power: 7500,
        },
    ];

    /**
     * onNewCharacter
     */
    public addCharacter(character: Character): void {
        const newCharacter: Character = {
            ...character,
            id: uuidService(),
        };

        this.charaters.push(newCharacter);

        // console.log('main Page: ' + character.name);
        // console.log('main Page: ' + character.power);
    }

    /**
     * onDelete
     */
    public onDeleteById(id: string): void {
        // debugger;
        // const removed = this.charaters.splice(index, 1); // Mutates fruits and returns array of removed items}
        // console.log('fruits', this.charaters); // ["mango","apple","berry"]
        // console.log('removed', removed); // ["pine"]
        // // this.charaters = removed;

        // Itemitem(object here) to remove

        // retorna todos lo que no sean el buscado y los reasigna. (el buscado es excluido.)
        this.charaters = this.charaters.filter((x) => x.id !== id);
    }
}
