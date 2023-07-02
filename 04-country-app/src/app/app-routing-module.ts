import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './modules/shared/pages/home-page/home-page.component';
import { AboutPageComponent } from './modules/shared/pages/about-page/about-page.component';
import { ContactPageComponent } from './modules/shared/pages/contact-page/contact-page.component';
import { CountriesModule } from './modules/countries/countries.module';

const routes: Routes = [
    {
        path: '',
        component: HomePageComponent,
    },
    {
        path: 'about',
        component: AboutPageComponent,
    },
    {
        path: 'contact',
        component: ContactPageComponent,
    },
    {
        path: 'countries',
        loadChildren: () =>
            import('./modules/countries/countries.module').then(
                (m) => m.CountriesModule
            ),
    },
    {
        path: '**',
        redirectTo: '',
    },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
