import { Person } from './08-clases';
// export class Person {
//     public name?: string;
//     public address?: string;

//     /**
//      *
//      */
//     constructor(name: string, address: string) {
//         this.name = name;
//         this.address = address;
//     }
// }

export class Person {
    constructor(
        public firstName: string,
        public lastName: string,
        public address: string
    ) {}
}

// export class Hero extends Person {
//     constructor(
//         public alterEgo: string,
//         public age: number,
//         public realName: string
//     ) {
//         super(realName, 'CORTAZAR');
//     }
// }

export class Hero {
    constructor(
        public alterEgo: string,
        public age: number,
        public realName: string,
        public person: Person
    ) {
        this.person = person;
    }
}

const person = new Person('Jesus', 'Mendoza', 'Celaya');

const hero1 = new Hero('Hero1', 28, 'SpiederMan1', person);
const hero2 = new Hero('Hero2', 29, 'SpiederMan2', person);

console.log(hero1);
console.log(hero2);

// console.log('Name ', person1.name);
// console.log('Name ', person1.address);
