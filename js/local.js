//Variables------------------------------
const form = document.forms['multiplicarForm'];
const result = document.getElementById('resultado');

const button = document.getElementById('historialLog'); 
const table = document.createElement('table');


localStorage.setItem('nameApp', 'Julian');
console.log(localStorage.getItem('nameApp'));

sessionStorage.setItem('nameApp', 'Julian');
console.log(sessionStorage.getItem('nameApp'));


//Metodos-----------------------------
const multiplicar = (factorA, factorB) => {
    return factorA * factorB;
}

const showResult = (resultado) => {
    result.textContent = `El resultado es: ${resultado}`;
}

const saveLog = (datos) => {
    const log = {
        fecha: new Date(),
        operacion: datos,
    }
    const num = localStorage.length;
    const key = `operacion_${num}`;
    localStorage.setItem(key, JSON.stringify(log));
}

const contTable = (factorA, FactorB, result) => {
    console
}
//Eventos------------------------------
form.addEventListener('submit', (event) => {
    event.preventDefault();
    const factorA = Number(form['factor1'].value);
    const factorB = Number(form['factor2'].value);
    const res = multiplicar(factorA, factorB);
    showResult(res);
    saveLog({
        factorA, factorB, res
    });

    form.reset();
});

document.getElementById('verLOg').addEventListener('click', (event) => {
    event.preventDefault();
    const tbody = document.createElement('tbody');

    for (let i=0; i<localStorage.length; i++) {
        const key = localStorage.key(i);
        if (key.startsWith('operacion_')) {
            const log = JSON.parse(localStorage.getItem(key));
            const tr = document.createElement('tr');
            const tdFecha = document.createElement('td');
            tdFecha.textContent = new Date(log.fecha).toLocaleString();
            const tdOperacion = document.createElement('td');   
            tdOperacion.textContent = `${log.operacion.factorA} * ${log.operacion.factorB} = ${log.operacion.res}`;
            tr.appendChild(tdFecha);
            tr.appendChild(tdOperacion);
            tbody.appendChild(tr);
        }   
    }
    table.appendChild(tbody);
    button.appendChild(table);
});