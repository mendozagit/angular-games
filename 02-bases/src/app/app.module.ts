import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeroComponent } from './heroes/hero/hero.component';
import { ListComponent } from './heroes/list/list.component';
import { CounterModule } from './counter/counter.module';

@NgModule({
    declarations: [AppComponent, HeroComponent, ListComponent],
    imports: [BrowserModule, CounterModule],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
