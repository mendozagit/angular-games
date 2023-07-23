import { Pipe, PipeTransform } from '@angular/core';
import { Hero } from '../interfaces/hero.interface';

@Pipe({
    name: 'heroimage',
})
export class HeroImagePipe implements PipeTransform {
    transform(hero?: Hero): string {
        if (!hero) return 'assets/no-image.png';

        if (!hero?.id && hero?.alt_image) {
            return 'assets/no-image.png';
        }

        if (hero?.alt_image) return hero.alt_image;

        const src = `assets/heroes/${hero?.id}.jpg`;

        return src;
    }
}
