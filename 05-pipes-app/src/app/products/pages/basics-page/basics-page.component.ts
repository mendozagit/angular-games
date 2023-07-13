import { Component } from '@angular/core';

@Component({
    selector: 'app-basics-page',
    templateUrl: './basics-page.component.html',
    styleUrls: ['./basics-page.component.css'],
})
export class BasicsPageComponent {
    public nameLower: string = 'Jesus Mendoza jaurez';
    public nameUpper: string = 'JESUS';
    public fullName: string = 'jESus mEnDoZa';
}
