import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { BasicsPageComponent } from './pages/basics-page/basics-page.component';
import { NumberspageComponent } from './pages/numberspage/numberspage.component';
import { UncommonPageComponent } from './pages/uncommon-page/uncommon-page.component';
import { NgPrimeModule } from '../ng-prime/ng-prime.module';

@NgModule({
    declarations: [
        BasicsPageComponent,
        NumberspageComponent,
        UncommonPageComponent,
    ],
    imports: [CommonModule, ProductsRoutingModule, NgPrimeModule],
})
export class ProductsModule {}
