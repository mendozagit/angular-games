import { Component, OnInit } from '@angular/core';
import { Character } from '../interfaces/Character.Interface';
import { DbzService } from '../services/dbz.service';

@Component({
    selector: 'app-dbz-main-page',
    templateUrl: 'main.page.component.html',
})
export class MainPageComponent {
    constructor(public dbzService: DbzService) {}
}
