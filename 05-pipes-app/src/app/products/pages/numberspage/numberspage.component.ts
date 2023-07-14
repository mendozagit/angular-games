import { Component } from '@angular/core';

@Component({
    selector: 'app-numberspage',
    templateUrl: './numberspage.component.html',
    styleUrls: ['./numberspage.component.css'],
})
export class NumberspageComponent {
    public totalSells: number = 256789.5698586;
    public percent: number = 0.78598;
}
