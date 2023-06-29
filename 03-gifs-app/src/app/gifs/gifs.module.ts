import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomePageComponent } from './pages/home-page/home-page.component';
import { SearchBoxComponent } from './components/search-box.component';
import { CardListComponent } from './components/card-list/card-list/card-list.component';
import { GifsCardComponent } from './components/gifs-card/gifs-card.component';

@NgModule({
    declarations: [HomePageComponent, SearchBoxComponent, CardListComponent, GifsCardComponent],
    imports: [CommonModule],
    exports: [HomePageComponent],
})
export class GifsModule {}
