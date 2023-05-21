import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeroComponent } from './hero/hero.component';
import { ListComponent } from './list/list.component';

@NgModule({
    declarations: [HeroComponent, ListComponent],
    exports: [HeroComponent, ListComponent],
    imports: [CommonModule],
})
export class HeroModule {}
