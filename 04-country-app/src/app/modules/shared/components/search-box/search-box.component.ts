import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Subject, debounceTime, map, tap } from 'rxjs';

@Component({
    selector: 'shared-search-box',
    templateUrl: './search-box.component.html',
    styles: [],
})
export class SearchBoxComponent implements OnInit {
    public debouncer: Subject<string> = new Subject<string>();

    @Input()
    public placeholder: string = '';

    @Output()
    onEnterPressedEvent = new EventEmitter<string>();

    @Output()
    onDebounceEvent = new EventEmitter<string>();

    ngOnInit(): void {
        this.debouncer
            .pipe(
                debounceTime(500),
                map((x) => x.trim())
                // tap()
            )
            .subscribe((text) => {
                if (text) {
                    console.log('debouncer value: ', text);
                    this.onDebounceEvent.emit(text);
                }
            });
    }
    public onEnterPressed(text: string): void {
        console.log(text + ' From SearchBoxComponent');
        this.onEnterPressedEvent.emit(text);
    }

    public onKeyPressed(text: string): void {
        this.debouncer.next(text);
        //this.onKeyPressedEvent.emit(text);
    }
}
