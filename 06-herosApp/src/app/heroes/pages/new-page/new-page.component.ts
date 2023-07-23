import { Component } from '@angular/core';
import { Hero, Publisher } from '../../interfaces/hero.interface';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HeroService } from '../../services/heroes.service';

@Component({
    selector: 'app-new-page',
    templateUrl: './new-page.component.html',
    styles: [],
})
export class NewPageComponent {
    constructor(private router: Router, private heroService: HeroService) {}
    public hero?: Hero;
    public heroForm = new FormGroup({
        id: new FormControl(''),
        superhero: new FormControl('', { nonNullable: true }),
        publisher: new FormControl<Publisher>(Publisher.DCComics),
        alter_ego: new FormControl(''),
        first_appearance: new FormControl(''),
        characters: new FormControl(''),
        alt_image: new FormControl(''),
    });

    public publishers = [
        {
            id: 'DC Comics',
            desc: 'DC - Comics',
        },
        {
            id: 'Marvel Comics',
            desc: 'Marvel - Comics',
        },
    ];

    onSubmit(): void {
        if (!this.heroForm.valid) return;

        this.hero = this.heroForm.value as Hero;

        if (this.hero?.id) {
            // update
            this.heroService.updateHero(this.hero).subscribe((response) => {
                // show confirmation message
            });
            return;
        }

        // Insert
        this.heroService.addHero(this.hero).subscribe((response) => {
            // show confirmation message and redirect  /heros/edit/hero.id
        });

        console.log({
            valid: this.heroForm.valid,
            form: this.heroForm,
            getRawValue: this.heroForm.getRawValue,
        });

        //this.router.navigateByUrl('heroes/list');
    }
}
