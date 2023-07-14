import { Component } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { interval } from 'rxjs/internal/observable/interval';
@Component({
    selector: 'app-uncommon-page',
    templateUrl: './uncommon-page.component.html',
    styleUrls: ['./uncommon-page.component.css'],
})
export class UncommonPageComponent {
    public name: string = 'Jesus';
    public gender: 'male' | 'female' = 'male';
    public invitationMap = {
        male: 'invitarlo',
        female: 'invitarla',
    };

    public changeClient(): void {
        if (this.name === 'Jesus') {
            this.name = 'Leticia';
            this.gender = 'female';
        } else {
            this.name = 'Jesus';
            this.gender = 'male';
        }
    }

    public commentCount: number = -0;
    commentMapping = {
        '=0': 'There are no message.',
        '=1': 'You have a message.',
        other: 'You have # messages.',
    };

    addComment(): void {
        this.commentCount--;
    }

    removeComment(): void {
        this.commentCount++;
    }

    public colorsArray: string[] = [
        'red',
        'black',
        'purple',
        'white',
        'green',
        'orange',
        'blue',
        'gold',
    ];
    str: string = 'abcdefghij';

    public person = {
        name: 'Jesus',
        age: 28,
        address: 'Guadalajara México',
    };

    public myObsevableTimer: Observable<number> = interval(1000).pipe(
        tap((x) => console.log('tap', x))
    );

    public myPromiseValue = new Promise<string>((resolve, reject) => {
        setTimeout(() => {
            resolve('Promise solved.');
            console.log('There are data in the promise.');
        }, 3500);
    });
}
