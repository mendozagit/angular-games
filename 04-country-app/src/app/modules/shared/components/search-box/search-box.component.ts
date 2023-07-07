import {
    Component,
    EventEmitter,
    Input,
    OnDestroy,
    OnInit,
    Output,
} from '@angular/core';
import { Subject, Subscription, debounceTime, map, tap } from 'rxjs';

@Component({
    selector: 'shared-search-box',
    templateUrl: './search-box.component.html',
    styles: [],
})
export class SearchBoxComponent implements OnInit, OnDestroy {
    private debouncer: Subject<string> = new Subject<string>();
    private debouncerSubscription?: Subscription;

    @Input()
    public placeholder: string = '';

    @Input()
    public initialValue: string = '';

    @Output()
    onEnterPressedEvent = new EventEmitter<string>();

    @Output()
    onDebounceEvent = new EventEmitter<string>();

    ngOnInit(): void {
        this.debouncerSubscription = this.debouncer
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

    ngOnDestroy(): void {
        console.log('SearchBoxComponent destroyed ');
        this.debouncerSubscription?.unsubscribe();
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
