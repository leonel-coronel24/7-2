setTimeout(function() {
    document.body.classList.add('fade-out');
}, 8900); // Empezar la transición después de 2.5 segundos

// Redirigir después de que la transición haya terminado
setTimeout(function() {
    window.location.href = 'panel4.html';
}, 10000);

function actualizarDatos() {
    fetch('connect4.php')
        .then(response => response.json())
        .then(datos => {
            // Limpiar el contenido actual
            //document.getElementById("datos").innerHTML = "";

            // Añadir los nuevos datos
            datos.forEach(dato => {
                if (dato.error) {
                    console.error(dato.error);
                    //document.getElementById("datos").innerHTML = "Error: " + dato.error;
                } else {
                    document.getElementById("footer").innerHTML = `${dato.footer}`;
                }
            });
        })
        .catch(error => {
            //console.error('Error al obtener los datos:', error);
            //document.getElementById("datos").innerHTML = "Error al obtener los datos.";
        });
}

// Llamar a `actualizarDatos` cuando la página se carga
window.onload = function() {
    actualizarDatos(); // Cargar datos al inicio
    setInterval(actualizarDatos, 500); // Actualizar cada 5 segundos
    setInterval(escan, 500);
};