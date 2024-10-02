const body = document.querySelector('body');

const sliderRojo = document.querySelector('#sliderRojo');
const sliderVerde = document.querySelector('#sliderVerde');
const sliderAzul = document.querySelector('#sliderAzul');

const valorRojo = document.querySelector('#valorRojo');
const valorVerde = document.querySelector('#valorVerde');
const valorAzul = document.querySelector('#valorAzul');

const changeColor = () => {
    const rojo = sliderRojo.value;
    const verde = sliderVerde.value;
    const azul = sliderAzul.value;

    valorRojo.textContent = rojo;
    valorVerde.textContent = verde;
    valorAzul.textContent = azul;

    const color = `rgb(${rojo}, ${verde}, ${azul})`;
    body.style.backgroundColor = color;
}

sliderRojo.addEventListener('input', changeColor);
sliderVerde.addEventListener('input', changeColor);
sliderAzul.addEventListener('input', changeColor);
