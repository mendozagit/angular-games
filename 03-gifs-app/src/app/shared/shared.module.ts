import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { CardListComponent } from './components/card-list/card-list/card-list.component';

@NgModule({
    declarations: [SidebarComponent, CardListComponent],
    imports: [CommonModule],
    exports: [SidebarComponent],
})
export class SharedModule {}
