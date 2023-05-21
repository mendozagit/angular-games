import { Component } from '@angular/core';

@Component({
    selector: 'app-heroes-hero',
    templateUrl: './hero.component.html',
    styleUrls: ['./hero.component.css'],
})
export class HeroComponent {
    public name: string = 'ironMan';
    public age: number = 45;

    get capitalizedName(): string {
        return this.name?.toUpperCase() ?? '';
    }

    /**
     * getHeroDescription
     */
    getHeroDescription(): string {
        return `${this.name} - ${this.age}`;
    }

    /**
     * changeHero
     */
    onChangeHero(newName: string): void {
        this.name = newName;
    }

    /**
     * changeAge
     */
    public onChangeAge(newAge: number) {
        this.age = newAge;
    }

    /**
     * onResetForm
     */
    public onResetForm() {
        this.name = 'ironMan';
        this.age = 45;
    }
}
