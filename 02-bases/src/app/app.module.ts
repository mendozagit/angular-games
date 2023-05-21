import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CounterModule } from './counter/counter.module';
import { HeroModule } from './heroes/heroModule';

@NgModule({
    declarations: [AppComponent],
    imports: [BrowserModule, CounterModule, HeroModule],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
