const lienzo = document.querySelector('#lienzo');
const ctx = lienzo.getContext('2d');

// Fondo azul claro
ctx.fillStyle = '#87CEEB';
ctx.fillRect(0, 0, lienzo.width, lienzo.height);

// Sol
ctx.fillStyle = 'yellow';
ctx.beginPath();
ctx.arc(30, 50, 70, 0, Math.PI * 2, true);
ctx.fill();

// Nube
ctx.fillStyle = 'white';
ctx.beginPath();
ctx.arc(250, 70, 30, 0, Math.PI * 2, true);
ctx.arc(290, 70, 40, 0, Math.PI * 2, true);
ctx.arc(330, 70, 30, 0, Math.PI * 2, true);
ctx.fill();
// Nube
ctx.fillStyle = 'white';
ctx.beginPath();
ctx.arc(450, 70, 30, 0, Math.PI * 2, true);
ctx.arc(490, 70, 40, 0, Math.PI * 2, true);
ctx.arc(530, 70, 30, 0, Math.PI * 2, true);
ctx.fill();

// Montañas
ctx.fillStyle = '#8B4513';
ctx.beginPath();
ctx.moveTo(50, 300);
ctx.lineTo(150, 150);
ctx.lineTo(250, 300);
ctx.fill();

ctx.beginPath();
ctx.moveTo(200, 300);
ctx.lineTo(300, 180);
ctx.lineTo(400, 300);
ctx.fill();

// Plataforma de tierra
ctx.fillStyle = '#654390';
ctx.fillRect(100, 250, 200, 20);

// Plataforma flotante
ctx.fillStyle = '#654390';
ctx.fillRect(300, 180, 150, 15);

// Personaje
ctx.fillStyle = 'black';
ctx.fillRect(150, 210, 50, 40);
ctx.fillStyle = 'white';
ctx.fillRect(170, 210, 10, 40);
ctx.fillStyle = 'red';
ctx.beginPath();
ctx.arc(190, 219, 3, 0, Math.PI * 2, true);
ctx.fill();

// Cabeza del personaje
ctx.fillStyle = '#fdefc5';
ctx.beginPath();
ctx.arc(175, 195, 15, 0, Math.PI * 2, true);
ctx.fill();

// Ojos del personaje
ctx.fillStyle = 'black';
ctx.beginPath();
ctx.arc(170, 190, 3, 0, Math.PI * 2, true);
ctx.fill();
ctx.beginPath();
ctx.arc(180, 190, 3, 0, Math.PI * 2, true);
ctx.fill();

// Personaje2
ctx.fillStyle = 'white';
ctx.fillRect(210, 210, 50, 40);

// Cabeza del personaje2
ctx.fillStyle = '#fdefc5';
ctx.beginPath();
ctx.arc(235, 195, 15, 0, Math.PI * 2, true);
ctx.fill();

// Ojos del personaje2
ctx.fillStyle = 'black';
ctx.beginPath();
ctx.arc(229, 190, 3, 0, Math.PI * 2, true);
ctx.fill();
ctx.beginPath();
ctx.arc(239, 190, 3, 0, Math.PI * 2, true);
ctx.fill();
//cabello2
ctx.fillStyle = '#ffffff85';
ctx.beginPath();
ctx.arc(234, 195, 18, 0, Math.PI * 2, true);
ctx.fill();

// Árbol
ctx.fillStyle = '#641b00';
ctx.fillRect(400, 220, 20, 80);

ctx.fillStyle = 'green';
ctx.beginPath();
ctx.arc(410, 200, 40, 0, Math.PI * 2, true);
ctx.fill();

ctx.fillStyle = 'red';
ctx.beginPath();
ctx.arc(425, 222, 5, 0, Math.PI * 2, true);
ctx.fill();
ctx.fillStyle = 'red';
ctx.beginPath();
ctx.arc(392, 210, 5, 0, Math.PI * 2, true);
ctx.fill();
ctx.fillStyle = 'red';
ctx.beginPath();
ctx.arc(445, 205, 5, 0, Math.PI * 2, true);
ctx.fill();
ctx.fillStyle = 'red';
ctx.beginPath();
ctx.arc(420, 200, 5, 0, Math.PI * 2, true);
ctx.fill();
ctx.fillStyle = 'red';
ctx.beginPath();
ctx.arc(420, 172, 5, 0, Math.PI * 2, true);
ctx.fill();

// Hierba
ctx.fillStyle = 'green';
ctx.fillRect(0, 295, lienzo.width, 110);
