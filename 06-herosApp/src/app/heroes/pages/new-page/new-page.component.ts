import { Component, OnInit } from '@angular/core';
import { Hero, Publisher } from '../../interfaces/hero.interface';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { HeroService } from '../../services/heroes.service';
import { switchMap } from 'rxjs';

@Component({
    selector: 'app-new-page',
    templateUrl: './new-page.component.html',
    styles: [],
})
export class NewPageComponent implements OnInit {
    constructor(
        private router: Router,
        private heroService: HeroService,
        private activatedRoute: ActivatedRoute
    ) {}
    public hero: Hero | undefined;
    public heroForm = new FormGroup({
        id: new FormControl(''),
        superhero: new FormControl('', { nonNullable: true }),
        publisher: new FormControl<Publisher>(Publisher.DCComics),
        alter_ego: new FormControl(''),
        first_appearance: new FormControl(''),
        characters: new FormControl(''),
        alt_image: new FormControl(''),
    });

    ngOnInit(): void {
        if (!this.router.url.includes('edit')) return;

        this.activatedRoute.params
            .pipe(
                switchMap((params) =>
                    this.heroService.getHeroById(params['id'])
                )
            )
            .subscribe((hero) => {
                if (!hero) this.router.navigateByUrl('/heroes/list');

                this.hero = hero;
                this.heroForm.reset(this.hero);
                return;
            });

        // this.activatedRoute.params.subscribe((params) => {
        //     const id = params['id'];

        //     this.heroService.getHeroById(id).subscribe((response) => {
        //         this.hero = response;
        //         console.log('hero', this.hero);
        //     });
        // });

        // this.activatedRoute.params.pipe(

        // th

        // ).subscribe();

        //console.log('activatedRoute', this.activatedRoute.params);
    }
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
