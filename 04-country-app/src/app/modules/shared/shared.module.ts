import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { AboutPageComponent } from './pages/about-page/about-page.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { RouterModule } from '@angular/router';
import { ContactPageComponent } from './pages/contact-page/contact-page.component';
import { SearchBoxComponent } from './components/search-box/search-box.component';

@NgModule({
    declarations: [
        HomePageComponent,
        AboutPageComponent,
        SidebarComponent,
        ContactPageComponent,
        SearchBoxComponent,
    ],
    imports: [CommonModule, RouterModule],
    exports: [
        AboutPageComponent,
        ContactPageComponent,
        HomePageComponent,
        SidebarComponent,
        SearchBoxComponent,
    ],
})
export class SharedModule {}
