export enum Color {
    red,
    blanck,
    blue,
    green,
}

export interface Hero {
    name: string;
    canFly: boolean;
    color: Color;
}
