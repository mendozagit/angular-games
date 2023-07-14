import { BasicsPageComponent } from './pages/basics-page/basics-page.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NumberspageComponent } from './pages/numberspage/numberspage.component';
import { UncommonPageComponent } from './pages/uncommon-page/uncommon-page.component';
import { OrderComponent } from './pages/order/order.component';

const routes: Routes = [
    { path: '', component: BasicsPageComponent },
    { path: 'basic', component: BasicsPageComponent },
    { path: 'numbers', component: NumberspageComponent },
    { path: 'uncommon', component: UncommonPageComponent },
    { path: 'custom', component: OrderComponent },
    { path: '**', redirectTo: '' },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class ProductsRoutingModule {}
