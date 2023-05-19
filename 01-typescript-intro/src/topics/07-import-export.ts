import {
    Product,
    TaxCalculationOptions,
    taxCalculation,
} from './06-function-destructuring';

const shoppingCar: Product[] = [
    {
        description: 'Product 1',
        price: 100,
    },
    {
        description: 'Product 2',
        price: 200,
    },
    {
        description: 'Product 3',
        price: 300,
    },
];

const [total, taxes] = taxCalculation({
    tax: 0.16,
    products: shoppingCar,
});

console.log('Total: ', total);
console.log('Taxes: ', taxes);
