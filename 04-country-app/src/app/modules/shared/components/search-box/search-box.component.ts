import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
    selector: 'shared-search-box',
    templateUrl: './search-box.component.html',
    styles: [],
})
export class SearchBoxComponent {
    @Input()
    public placeholder: string = '';

    @Output()
    onEnterPressedEvent = new EventEmitter<string>();

    public onEnterPressed(text: string): void {
        console.log(text + ' From SearchBoxComponent');
        this.onEnterPressedEvent.emit(text);
    }
}
