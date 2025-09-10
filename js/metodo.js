function multiplicar(a, b) {
    return a * b;
}
console.log(multiplicar(4, 5)); // Output: 20

function sumar(a, b) {
    console.log(a + b);
}
sumar(3, 7); // Output: 10

const sumar = function (a, b) {
    return a + b;
}
console.log(sumar(10, 15)); // Output: 25

const dividir = (a, b) => {
    return a / b;
}
console.log(dividir(20, 4)); // Output: 5

const restar = (a, b) => a - b;
console.log(restar(10, 3)); // Output: 7

console.log('ok', 1, true, null, {}, []);

const sumarTres = (...arg) => {
    let reslt = 0;
    for (let num of arg) {
        reslt += num;
    }
    return reslt;
}

console.log(sumarTres(1, 2, 3, 'a', true)); // Output: 15
console.log(sumarTres(10, 20, 30)); // Output: 60

const operaciones = (ejecutar) => {
    return ejecutar();
}

console.log(operaciones(() => 3 + 7)); // Output: 10
console.log(operaciones(() => {
    return 2 * 5;
}));
console.log(operaciones(function() {
    return 100 / 4;
})); // Output: 25
console.log(operaciones(() => sumarTres(5, 9, 7))); // Output: 21

class Persona {
    constructor(nombre, edad) {
        this.nombre = nombre;
        this.edad = edad;
    }
    toString() {
        return `Nombre: ${this.nombre}, Edad: ${this.edad}`;
    }
}

const persona1 = new Persona('Julian', 22);
console.log(persona1.toString()); // Output: Nombre: Julian, Edad: 22