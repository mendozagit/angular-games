import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { ToggleCasePipe } from '../../../shared/pipes/toggle-case.pipe';

@Component({
    selector: 'products-order',
    templateUrl: './order.component.html',
    styles: [],
})
export class OrderComponent implements OnInit {
    public name: string = 'jesus mendoza';
    public isUpperCase: boolean = false;
    public menuItems: MenuItem[] = [];

    ngOnInit(): void {
        this.menuItems = [
            {
                label: 'Code',
                icon: 'pi pi-code',
            },
            {
                label: 'Sync',
                icon: 'pi pi-sync',
            },
            {
                label: 'Filter',
                icon: 'pi pi-filter-slash',
            },

            {
                label: 'PDF',
                icon: 'pi pi-file-pdf',
            },
        ];
    }

    toggleCase() {
        this.isUpperCase = !this.isUpperCase;
    }

    /*
     <p-button label="New" icon="pi pi-plus" class="mr-2"></p-button>
        <p-button label="Upload" icon="pi pi-upload" styleClass="p-button-success"></p-button>
        <i class="p-toolbar-separator pi pi-bars mr-2" style="vertical-align: middle"></i>
        <p-splitButton label="Save" icon="pi pi-check" [model]="items" styleClass="p-button-warning"></p-splitButton>
    */
}
