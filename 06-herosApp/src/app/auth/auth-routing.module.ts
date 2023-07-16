import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutAuthPageComponent } from './pages/layout-page/layout-auth-page.component';

const routes: Routes = [{ path: '', component: LayoutAuthPageComponent }];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class AuthRoutingModule {}
