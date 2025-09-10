/*
    *ESTA LINEA DE CODIGO SE EJECUTA CUANDO ESTO <script src="js/dom.js"></script> ESTA EN EL HEAD
    document.addEventListener('DOMContentLoaded', () => {
        const titulo = document.getElementById('titulo-principal');
        titulo.textContent = 'hola desde javascript!!!';
    });
*/

const titulo = document.getElementById('titulo-principal');
titulo.textContent = 'hola desde javascript!!!';

const sumar = (num1, num2)  => {
    alert(num1 + num2);
};

const sumarBtn = document.getElementById('sumar-btn');
sumarBtn.addEventListener('click', () => {
    sumar(10, 20);
});

const form = document.forms["sumarForm"];
form.addEventListener('submit', (evt) => {
    evt.preventDefault();
    const num1 = Number(form["num-1"].value);
    const num2 = Number(form["num-2"].value);
    const modal = document.getElementById('error-msg');
    if (num1 >0 && num2 >0) {
        //alert(num1 + num2);
        modal.classList.remove('show');
        realizarSuma(num1, num2);
        form.reset();   
    }else {
        modal.classList.add('show');
    }
    
});

const realizarSuma = (num1, num2) => {
    const result = num1 + num2;
    
    const historial = document.getElementById('historial');

    const div = document.createElement('div');
    div.textContent = `${num1} + ${num2} = `;

    const strong = document.createElement('strong');
    strong.textContent = result;

    div.appendChild(strong);
    historial.appendChild(div);
};