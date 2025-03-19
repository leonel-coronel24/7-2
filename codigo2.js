setTimeout(function() {
    document.body.classList.add('fade-out');
}, 8900); // Empezar la transición después de 2.5 segundos

// Redirigir después de que la transición haya terminado
setTimeout(function() {
    window.location.href = 'panel3.html';
}, 10000);


function actualizarDatos() {
    fetch('connect2.php')
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
                    document.getElementById("TITULO").innerHTML = `${dato.TITULOS}`;
                    document.getElementById("INCRIPCION").innerHTML = `${dato.INSCRIPCION}`;
                    document.getElementById("imagenQRINT").value = `${dato.QR}`;
                    const iframe = document.getElementById('imagenQR');
                    iframe.alt = `${dato.QR}`;
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

var activar = true;
var datos;


function escan(){
    const input = document.getElementById("imagenQRINT").value;

    
    if(input.trim() === ""){
    }else{
       if(activar){
        datos = input.trim();
        loadIMAGEN();
        activar = false;
       }
       if(input.trim() === datos){
       }else{
        activar = true;
       }
    }
}

function loadIMAGEN(){
    const videoId = document.getElementById("imagenQRINT").value;
    
    // Si se encuentra un ID de video válido, incrustar el video en el iframe
    if (videoId) {
        const iframe = document.getElementById('imagenQR');
        
        // Establecer el src del iframe con los parámetros adicionales
        iframe.src = videoId;
    } else {
        alert("Por favor, introduce un enlace válido de YouTube.");
    }
}
