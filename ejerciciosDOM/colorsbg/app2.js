const body = document.querySelector('body');
const btnChange = document.querySelector('#btnChange');

const changeColor = () => {
    const rojo = Math.floor(Math.random() * 256);
    const verde = Math.floor(Math.random() * 256);
    const azul = Math.floor(Math.random() * 256);

    const color = `rgb(${rojo}, ${verde}, ${azul})`;

    body.style.backgroundColor = color;
}

btnChange.addEventListener('click', changeColor);
