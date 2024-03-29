import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeroesRoutingModule } from './heroes-routing.module';
import { SearchPageComponent } from './pages/search-page/search-page.component';
import { NewPageComponent } from './pages/new-page/new-page.component';
import { ListPageComponent } from './pages/list-page/list-page.component';
import { HeroPageComponent } from './pages/hero-page/hero-page.component';
import { LayoutHeroPageComponent } from './pages/layout-page/layout-hero-page.component';
import { MaterialModule } from '../material/material.module';
import { HeroCardComponent } from './components/hero-card/hero-card.component';
import { HeroImagePipe } from './pipes/hero-image-pipe.pipe';
import { ConfirmDialogComponent } from './components/confirm-dialog/confirm-dialog.component';

@NgModule({
    declarations: [
        SearchPageComponent,
        NewPageComponent,
        ListPageComponent,
        HeroPageComponent,
        LayoutHeroPageComponent,
        HeroCardComponent,
        HeroImagePipe,
        ConfirmDialogComponent,
    ],
    imports: [CommonModule, HeroesRoutingModule, MaterialModule],
})
export class HeroesModule {}
