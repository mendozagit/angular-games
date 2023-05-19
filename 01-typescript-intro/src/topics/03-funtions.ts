


function addNumbers(a:number, b:number): number{

return a+b;
}


let sum = (x: number, y: number): string=> {
    return (x + y).toString();
}


const result1=  addNumbers(5,6);
const result2 = sum(5,3);



 function multiply(fistNumber:number, sencondNumber?: number, base:number= 2): number {

return fistNumber*base;
}

const result3= multiply(5);

console.log(result1);
console.log(result2);
console.log(result3);



export {};