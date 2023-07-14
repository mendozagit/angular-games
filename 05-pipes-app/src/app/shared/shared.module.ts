import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './components/menu/menu.component';
import { NgPrimeModule } from '../ng-prime/ng-prime.module';
import { ToggleCasePipe } from './pipes/toggle-case.pipe';

@NgModule({
    declarations: [MenuComponent, ToggleCasePipe],
    imports: [CommonModule, NgPrimeModule],
    exports: [MenuComponent, ToggleCasePipe],
})
export class SharedModule {}
