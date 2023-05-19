export interface Product {
    description: string;
    price: number;
}

const phone: Product = {
    description: 'Nokia',
    price: 200,
};

const tablet: Product = {
    description: 'ipad',
    price: 500,
};

const shoopingCar = [phone, tablet];

export interface TaxCalculationOptions {
    tax: number;
    products: Product[];
}

export function taxCalculation(
    options: TaxCalculationOptions
): [number, number] {
    let total = 0;
    options.products.forEach((p) => {
        total += p.price;
    });

    return [total, total * options.tax];
}

const result: number[] = taxCalculation({
    tax: 0.16,
    products: shoopingCar,
});

// console.log('total ', result[0]);
// console.log('total ', result[1]);
