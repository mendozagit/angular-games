import { NgModule } from '@angular/core';

import { MenuModule } from 'primeng/menu';
import { ButtonModule } from 'primeng/button';
import { CheckboxModule } from 'primeng/checkbox';
import { MenubarModule } from 'primeng/menubar';
import { InputTextModule } from 'primeng/inputtext';
@NgModule({
    exports: [
        MenuModule,
        ButtonModule,
        CheckboxModule,
        MenubarModule,
        InputTextModule,
    ],
})
export class NgPrimeModule {}
