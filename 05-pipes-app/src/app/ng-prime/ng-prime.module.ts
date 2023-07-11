import { NgModule } from '@angular/core';

import { MenuModule } from 'primeng/menu';
import { ButtonModule } from 'primeng/button';
import { CheckboxModule } from 'primeng/checkbox';
@NgModule({
    exports: [MenuModule, ButtonModule, CheckboxModule],
})
export class NgPrimeModule {}
