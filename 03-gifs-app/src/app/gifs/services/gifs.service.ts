import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule, HttpParams } from '@angular/common/http';
import { Gif, SearchResponse } from '../interfaces/gifs.interfaces';

@Injectable({
    providedIn: 'root',
})
export class GifsService {
    private _tagsHistory: string[] = [];
    private readonly _api_key = 'aZalXL1pggNd7V17nLbYWd6I8ZrUWkW6';
    private readonly baseAddress = 'https://api.giphy.com/v1/gifs';
    private gifList: Gif[] = [];

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
        const endpoint = 'search';

        const params = new HttpParams()
            .set('api_key', this._api_key)
            .set('limit', 10)
            .set('q', tag);

        const url = `${this.baseAddress}/${endpoint}`;
        //this._tagsHistory.unshift(tag);

        this.httpClient
            .get<SearchResponse>(url, { params })
            .subscribe((response) => {
                this.gifList = response.data;
                console.log({ gifs: this.gifList });
            });
    }

    public gifs(): Gif[] {
        return this.gifList;
    }

    constructor(private httpClient: HttpClient) {}
}
