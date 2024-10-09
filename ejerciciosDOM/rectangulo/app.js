const cuadro = document.getElementById('cuadro');

document.getElementById('radio').addEventListener('input', e => {
  cuadro.style.borderRadius = e.target.value + 'px';
});

document.getElementById('alto').addEventListener('input', e => {
  cuadro.style.height = e.target.value + 'px';
});

document.getElementById('ancho').addEventListener('input', e => {
  cuadro.style.width = e.target.value + 'px';
});

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
  cuadro.style.backgroundColor = color;
};

sliderRojo.addEventListener('input', changeColor);
sliderVerde.addEventListener('input', changeColor);
sliderAzul.addEventListener('input', changeColor);

document.getElementById('sombra').addEventListener('input', e => {
  cuadro.style.boxShadow = `0 0 ${e.target.value}px rgba(0, 0, 0, 0.5)`;
});
