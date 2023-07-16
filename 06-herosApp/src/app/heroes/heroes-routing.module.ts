import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutHeroPageComponent } from './pages/layout-page/layout-hero-page.component';

const routes: Routes = [{ path: '', component: LayoutHeroPageComponent }];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class HeroesRoutingModule {}
