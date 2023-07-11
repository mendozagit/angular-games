import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './components/menu/menu.component';
import { NgPrimeModule } from '../ng-prime/ng-prime.module';

@NgModule({
    declarations: [MenuComponent],
    imports: [CommonModule, NgPrimeModule],
    exports: [MenuComponent],
})
export class SharedModule {}
