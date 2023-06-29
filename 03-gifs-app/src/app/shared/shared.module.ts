import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { CardListComponent } from './components/card-list/card-list/card-list.component';
import { LazyImageComponent } from './components/lazy-image/lazy-image.component';

@NgModule({
    declarations: [SidebarComponent, CardListComponent, LazyImageComponent],
    imports: [CommonModule],
    exports: [SidebarComponent, LazyImageComponent],
})
export class SharedModule {}
