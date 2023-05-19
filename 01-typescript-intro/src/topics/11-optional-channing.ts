export interface Passenger {
    name: string;
    children?: string[];
}

const passenger1: Passenger = {
    name: 'Jesus',
};

const passenger2: Passenger = {
    name: 'Raul',
    children: ['Hijo1,', 'Hijo2'],
};

const printChildren = (passenger: Passenger) => {
    const qtyChildren = passenger.children?.length ?? 0;
    console.log('Parent:', passenger.name, 'Hijos:', qtyChildren);
};

printChildren(passenger1);
