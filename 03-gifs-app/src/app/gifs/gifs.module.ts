import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomePageComponent } from './pages/home-page/home-page.component';
import { SearchBoxComponent } from './components/search-box.component';
import { CardListComponent } from './components/card-list/card-list/card-list.component';

@NgModule({
    declarations: [HomePageComponent, SearchBoxComponent, CardListComponent],
    imports: [CommonModule],
    exports: [HomePageComponent],
})
export class GifsModule {}
