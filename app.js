// apuntar al div y h1
const ball = document.querySelector('div');
const message = document.querySelector('h1');

const eigthBall = () => {
    const randomNumber = Math.floor(Math.random() * 9);
    let resultMessage = "Predicción: \n";  

    switch(randomNumber) {
        case 0:
            resultMessage += "Sigue adelante!";
            break;
        case 1:
            resultMessage += "No te rindas!";
            break;
        case 2:
            resultMessage += "Intenta de nuevo!";
            break;
        case 3:
            resultMessage += "Hazlo ahora!";
            break;
        case 4:
            resultMessage += "Confia en ti!";
            break;
        case 5:
            resultMessage += "Concéntrate!";
            break;
        case 6:
            resultMessage += "Se positivo";
            break;
        case 7:
            resultMessage += "Eres el mejor!";
            break;
        case 8:
            resultMessage += "En proceso";
            break;
        default:
            resultMessage += "Error en la predicción.";
    }

    message.innerText = resultMessage;
}

// agregar el evento al div para escuchar el click
ball.addEventListener('click', eigthBall);

