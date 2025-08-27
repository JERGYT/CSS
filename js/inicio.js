console.log("Hola Mundo desde archivo externo");
console.error("OK 2");

let numeros = [];
numeros = new Array(12);//los arrays en JS no tienen tamaño fijo amenos que se use new Array(tamaño)
numeros = [1,2,3,4,5,6,7,8,9,10];
console.log(numeros);

let otro = ['asdf', 123, true, null, [1,2,3]]; //los arrays pueden tener cualquier tipo de dato ya que es dinámico
let aaa = ['asdf', 123, true, null, [1,2,3], {nombre: 'julian', edad: 22}]; //los arrays pueden tener cualquier tipo de dato ya que es dinámico
let persona = {
    nombre: 'Julian',
    apellido: 'Gomez',
    edad: 22,
    mayorEdad: true,
    jobs: ['Programador', 'Diseñador', 'Arquitecto'],
}

console.log(otro[0]);
console.log(persona.nombre);
console.log("Ciclos");
for(let i=0; i<numeros.length; i++){
    const mod= numeros[i] % 2;
    if(mod === 0){
        console.log(numeros[i], "Es par");
    }else{
        console.log(numeros[i], "Es impar");
    }
}
