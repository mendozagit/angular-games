import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-counter',
    template: `
        <h3>Conunter: {{ counter }}</h3>
        <button (click)="OnIncreaseClick(+2)">+</button>
        <button (click)="OnIncreaseClick(-1)">-</button>
        <button (click)="onReset()">Reset</button>
    `,
})
export class CounterComponent implements OnInit {
    constructor() {}

    ngOnInit() {}

    public counter: number = 10;

    public OnIncreaseClick(value: number): void {
        this.counter += value;
    }
    /**
     * onReset
     */
    public onReset() {
        this.counter = 0;
    }
}
