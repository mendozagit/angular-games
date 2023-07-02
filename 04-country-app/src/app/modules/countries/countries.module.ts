import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ByCountryPageComponent } from './pages/by-country-page/by-country-page.component';
import { ByCapitalPageComponent } from './pages/by-capital-page/by-capital-page.component';
import { ByRegionPageComponent } from './pages/by-region-page/by-region-page.component';
import { CountryPageComponent } from './pages/country-page/country-page.component';
import { CountriesRoutingModule } from './coutries-routing.module';
import { SharedModule } from '../shared/shared.module';

@NgModule({
    declarations: [
        ByCountryPageComponent,
        ByCapitalPageComponent,
        ByRegionPageComponent,
        CountryPageComponent,
    ],
    imports: [CommonModule, CountriesRoutingModule, SharedModule],
})
export class CountriesModule {}
