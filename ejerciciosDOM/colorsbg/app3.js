function modificacion() {
    const div = document.getElementById('div');
    
    const ancho = document.getElementById('ancho').value;
    const largo = document.getElementById('largo').value;
    const sombra = document.getElementById('sombra').value;
    const radio = document.getElementById('radio').value;
    const color = document.getElementById('color').value; // Obtener el color

    div.style.width = ancho + 'px';
    div.style.height = largo + 'px';

    // Usa backticks para interpolación de cadenas, sin la transparencia
    div.style.boxShadow = `1px 1px ${sombra}px rgba(0, 0, 0, 1)`; // Sin transparencia (opaco)

    div.style.borderRadius = radio + 'px';

    div.style.backgroundColor = color;
}
