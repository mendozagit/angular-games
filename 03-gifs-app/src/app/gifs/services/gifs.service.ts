import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root',
})
export class GifsService {
    private _tagsHistory: string[] = [];

    public get tagsHistory(): string[] {
        return [...this._tagsHistory];
    }

    public searchTag(tag: string): void {
        this._tagsHistory.unshift(tag);
    }

    constructor() {}
}
