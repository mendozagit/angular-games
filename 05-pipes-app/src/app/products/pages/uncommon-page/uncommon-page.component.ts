import { Component } from '@angular/core';

@Component({
    selector: 'app-uncommon-page',
    templateUrl: './uncommon-page.component.html',
    styleUrls: ['./uncommon-page.component.css'],
})
export class UncommonPageComponent {
    public name: string = 'Jesus';
    public gender: 'male' | 'female' = 'male';
    public invitationMap = {
        male: 'invitarlo',
        female: 'invitarla',
    };

    public changeClient(): void {
        if (this.name === 'Jesus') {
            this.name = 'Leticia';
            this.gender = 'female';
        } else {
            this.name = 'Jesus';
            this.gender = 'male';
        }
    }
}
