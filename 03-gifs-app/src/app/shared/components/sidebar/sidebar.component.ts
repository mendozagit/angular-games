import { GifsService } from './../../../gifs/services/gifs.service';
import { Component } from '@angular/core';

@Component({
    selector: 'shared-sidebar',
    templateUrl: './sidebar.component.html',
    styleUrls: ['./sidebar.component.css'],
})
export class SidebarComponent {
    /**
     * Tags
     */
    public tags(): string[] {
        return this.gifService.tagsHistory;
    }

    /**
     * onTagClick
     */
    public onTagClick(tag: string): void {
        this.gifService.searchTag(tag);
    }

    /**
     *
     */
    constructor(private gifService: GifsService) {}
}
