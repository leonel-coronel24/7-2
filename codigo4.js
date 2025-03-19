setTimeout(function() {
    document.body.classList.add('fade-out');
}, 8900); // Empezar la transición después de 2.5 segundos

// Redirigir después de que la transición haya terminado
setTimeout(function() {
    window.location.href = 'index.html';
}, 10000);


function actualizarDatos() {
    fetch('connect3.php')
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
                    document.getElementById("text1").innerHTML = `●${dato.IMP1}●`;
                    document.getElementById("text2").innerHTML = `●${dato.IMP2}●`;
                    document.getElementById("text3").innerHTML = `●${dato.IMP3}●`;
                    document.getElementById("text4").innerHTML = `●${dato.IMP4}●`;
                    document.getElementById("text5").innerHTML = `●${dato.IMP5}●`;
                    document.getElementById("text6").innerHTML = `●${dato.IMP6}●`;
                    document.getElementById("text7").innerHTML = `●${dato.IMP7}●`;
                    document.getElementById("footer").innerHTML = `${dato.footer}`;
                    document.getElementById("TITULO").innerHTML = `${dato.TITULOS}`;
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
