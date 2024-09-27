const btnPlay = document.getElementById('btnPlay');
const divUser = document.getElementById('user');
const divMaq = document.getElementById('maq');
const message = document.getElementById('message');
const imgUser = document.getElementById('imgUser');
const imgMaq = document.getElementById('imgMaq');

const opcionesValidas = ['piedra', 'papel', 'tijeras'];

const play = () => {
    let choiceUser = prompt('Elige: piedra, papel o tijeras').toLowerCase();

    if (!opcionesValidas.includes(choiceUser)) {
        alert('Opción inválida. Por favor, elige entre piedra, papel o tijeras.');
        return;
    }

    const aleatorio = Math.floor(Math.random() * 3);
    
    let choiceMaq;

    switch (aleatorio) {
        case 0:
            choiceMaq = 'piedra';
            imgMaq.src = 'piedra.jpg';
            break;
        case 1:
            choiceMaq = 'papel';
            imgMaq.src = 'papel.jpg';
            break;
        case 2:
            choiceMaq = 'tijeras';
            imgMaq.src = 'tijeras.jpg';
            break;
    }

    divMaq.innerText = `Máquina: ${choiceMaq}`;
    imgMaq.style.display = 'block'; 

    switch (true) {
        case (choiceUser === choiceMaq):
            message.innerText = "Es un empate!";
            break;
        case (choiceUser === 'piedra' && choiceMaq === 'tijeras'):
        case (choiceUser === 'papel' && choiceMaq === 'piedra'):
        case (choiceUser === 'tijeras' && choiceMaq === 'papel'):
            message.innerText = "¡Ganaste!";
            break;
        default:
            message.innerText = "¡Perdiste!";
    }

    divUser.innerText = `Usuario: ${choiceUser}`;
    imgUser.src = `${choiceUser}.jpg`;
    imgUser.style.display = 'block'; 
}

btnPlay.addEventListener('click', play);
