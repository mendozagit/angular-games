import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { AboutPageComponent } from './pages/about-page/about-page.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { RouterModule } from '@angular/router';
import { ContactPageComponent } from './pages/contact-page/contact-page.component';

@NgModule({
    declarations: [
        HomePageComponent,
        AboutPageComponent,
        SidebarComponent,
        ContactPageComponent,
    ],
    imports: [CommonModule, RouterModule],
    exports: [
        AboutPageComponent,
        ContactPageComponent,
        HomePageComponent,
        SidebarComponent,
    ],
})
export class SharedModule {}
