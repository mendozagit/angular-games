import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { BasicsPageComponent } from './pages/basics-page/basics-page.component';
import { NumberspageComponent } from './pages/numberspage/numberspage.component';
import { UncommonPageComponent } from './pages/uncommon-page/uncommon-page.component';
import { NgPrimeModule } from '../ng-prime/ng-prime.module';
import { OrderComponent } from './pages/order/order.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
    declarations: [
        BasicsPageComponent,
        NumberspageComponent,
        UncommonPageComponent,
        OrderComponent,
    ],
    imports: [CommonModule, ProductsRoutingModule, NgPrimeModule, SharedModule],
})
export class ProductsModule {}
