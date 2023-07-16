import { NgModule } from '@angular/core';

import { ButtonModule } from 'primeng/button';

import { CheckboxModule } from 'primeng/checkbox';
import { InputTextModule } from 'primeng/inputtext';
import { MenubarModule } from 'primeng/menubar';
import { CardModule } from 'primeng/card';
import { FieldsetModule } from 'primeng/fieldset';
import { PanelModule } from 'primeng/panel';
import { BadgeModule } from 'primeng/badge';
import { ToolbarModule } from 'primeng/toolbar';
import { SplitButtonModule } from 'primeng/splitbutton';
import { TableModule } from 'primeng/table';

@NgModule({
    exports: [
        ButtonModule,
        CardModule,
        CheckboxModule,
        FieldsetModule,
        InputTextModule,
        MenubarModule,
        PanelModule,
        BadgeModule,
        FieldsetModule,
        ToolbarModule,
        SplitButtonModule,
        TableModule,
    ],
})
export class NgPrimeModule {}
