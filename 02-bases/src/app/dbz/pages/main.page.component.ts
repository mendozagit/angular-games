import { Component, OnInit } from '@angular/core';
import { Character } from '../interfaces/Character.Interface';
import { DbzService } from '../services/dbz.service';

@Component({
    selector: 'app-dbz-main-page',
    templateUrl: 'main.page.component.html',
})
export class MainPageComponent {
    constructor(private dbzService: DbzService) {}

    get characters(): Character[] {
        return [...this.dbzService.charaters];
    }

    public onDeleteCharacter(id: string): void {
        this.dbzService.onDeleteById(id);
    }

    /**
     * addCharacter
     */
    public onAddCharacter(character: Character): void {
        this.dbzService.addCharacter(character);
    }
}
