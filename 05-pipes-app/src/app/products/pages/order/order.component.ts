import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { ToggleCasePipe } from '../../../shared/pipes/toggle-case.pipe';
import { Product } from '../../interfaces/products.interface';
import { Color, Hero } from '../../interfaces/hero.interface';
import { SortByPipe } from '../../pipes/sort-by.pipe';

@Component({
    selector: 'products-order',
    templateUrl: './order.component.html',
    styles: [],
})
export class OrderComponent implements OnInit {
    public name: string = 'jesus mendoza';
    public isUpperCase: boolean = false;
    public menuItems: MenuItem[] = [];
    public products: Product[] = [];
    public heroes: Hero[] = [];
    public orderBy: keyof Hero | '' = '';
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

        this.products = [
            {
                Code: '1',
                Name: 'iPhone',
                Category: 'Electronic',
                Quantity: 10,
            },
            {
                Code: '2',
                Name: 'iPad',
                Category: 'Electronic',
                Quantity: 5,
            },
            {
                Code: '3',
                Name: 'Appe Watch',
                Category: 'Electronic',
                Quantity: 3,
            },
        ];

        this.heroes = [
            { name: 'SuoerMan', canFly: true, color: Color.blue },
            { name: 'Hero 2', canFly: false, color: Color.red },
            { name: 'Robin', canFly: false, color: Color.green },
            { name: 'Linerna verde', canFly: true, color: Color.green },
        ];
    }

    toggleCase() {
        this.isUpperCase = !this.isUpperCase;
    }
    changeOrderBy(value: keyof Hero | '') {
        this.orderBy = value;
    }
    /*
     <p-button label="New" icon="pi pi-plus" class="mr-2"></p-button>
        <p-button label="Upload" icon="pi pi-upload" styleClass="p-button-success"></p-button>
        <i class="p-toolbar-separator pi pi-bars mr-2" style="vertical-align: middle"></i>
        <p-splitButton label="Save" icon="pi pi-check" [model]="items" styleClass="p-button-warning"></p-splitButton>
    */
}
