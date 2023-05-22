import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CounterModule } from './counter/counter.module';
import { HeroModule } from './heroes/heroModule';
import { DbzModule } from './dbz/dbz.module';

@NgModule({
    declarations: [AppComponent],
    imports: [BrowserModule, CounterModule, HeroModule, DbzModule],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
