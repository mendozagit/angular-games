import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { CardListComponentTsComponent } from './components/card-list/card-list.component.ts/card-list.component.ts.component';
import { CardListComponent } from './components/card-list/card-list/card-list.component';

@NgModule({
    declarations: [SidebarComponent, CardListComponentTsComponent, CardListComponent],
    imports: [CommonModule],
    exports: [SidebarComponent],
})
export class SharedModule {}
