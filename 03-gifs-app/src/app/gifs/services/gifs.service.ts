import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root',
})
export class GifsService {
    private _tagsHistory: string[] = [];

    public get tagsHistory(): string[] {
        return [...this._tagsHistory];
    }

    private organizeHistory(tag: string) {
        if (tag.length == 0) return;

        tag = tag.toLowerCase();

        if (this._tagsHistory.includes(tag)) {
            this._tagsHistory = this._tagsHistory.filter((x) => x !== tag);
        }

        this._tagsHistory.unshift(tag);
        this._tagsHistory = this._tagsHistory.splice(0, 10);
    }

    public searchTag(tag: string): void {
        //debugger;
        this.organizeHistory(tag);

        //this._tagsHistory.unshift(tag);
    }

    constructor() {}
}
