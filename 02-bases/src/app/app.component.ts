import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
})
export class AppComponent {
    public title: string = 'Hola title';
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
