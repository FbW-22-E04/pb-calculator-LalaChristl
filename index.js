
class Calculator{
    constructor(){
        //properties
        this.pi = Math.PI;
        this.e = Math.exp(1)
    }

    //getter
    
    //methods

    ratio (x, y, width) {
        console.log(`The ratio is ${(y / x * width)}`);

    }

    percentage(x, y) {
        console.log(`Percentage is ${x / y * 100}`);
    }
    add(x, y) {
        console.log(`Sum is ${x + y}`);
    }

    subtract(x, y) {
        console.log(`Sum is ${x - y}`);
    }
    multiply(x, y) {
        console.log(`Sum is ${x * y}`);
    }

    divide(x, y) {
        if (y !== 0){
        console.log(`Sum is ${x / y}`);}
        else {
            console.log(`Y is not 0 `);
        }
    }


    modulation(x, y) {
        if (y !== 0){
        console.log(`Remainder is ${x % y}`);}
        else {
            console.log(`Y is not 0`);
        }
    }

        elevate(x, y) {
            if (y !== 0){
            console.log(`Power is ${x ** y}`)
            }
    }

    sqrt(x) {
        console.log(`Square is ${x * 0.05}`);
    }
}

const calculate = new Calculator

console.log(calculate.pi);
console.log(calculate.e);
calculate.ratio(5, 10, 30)
calculate.percentage(5, 10)
calculate.add(7, 10)
calculate.subtract(100, 10)
calculate.multiply(100, 5)
calculate.divide(100, 4)
calculate.modulation(100, 3)
calculate.elevate(10, 2)
calculate.sqrt(15)