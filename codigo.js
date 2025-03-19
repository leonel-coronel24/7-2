setTimeout(function() {
    document.body.classList.add('fade-out');
}, 28800); // Empezar la transición después de 2.5 segundos

// Redirigir después de que la transición haya terminado
setTimeout(function() {
    window.location.href = 'panel2.html';
}, 30000);


function actualizarDatos() {
    fetch('connect.php')
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
                    document.getElementById("youtubeUrl").value = `${dato.DATO}`;
                    document.getElementById("youtubeUrl2").value = `${dato.SELDA2}`;
                    document.getElementById("youtubeUrl3").value = `${dato.SELDA3}`;
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

var activar = true;
var activar2 = true;
var activar3 = true;
var datos;
var datos2;
var datos3;

function escan(){
    const input = document.getElementById("youtubeUrl").value;
    const input2 = document.getElementById("youtubeUrl2").value;
    const input3 = document.getElementById("youtubeUrl3").value;
    
    if(input.trim() === ""){
    }else{
       if(activar){
        datos = input.trim();
        loadVideo1();
        activar = false;
       }
       if(input.trim() === datos){
       }else{
        activar = true;
       }
    }

    if(input2.trim() === ""){
    }else{
       if(activar2){
        datos2 = input2.trim();
        loadVideo2();
        activar2 = false;
       }
       if(input2.trim() === datos2){
       }else{
        activar2 = true;
       }
    }

    if(input3.trim() === ""){
    }else{
       if(activar3){
        datos3 = input3.trim();
        loadVideo3();
        activar3 = false;
       }
       if(input3.trim() === datos3){
       }else{
        activar3 = true;
       }
    }
}



function loadVideo1() {
    const inputUrl = document.getElementById('youtubeUrl').value;
    
    // Extraer el ID del video de la URL
    const videoId = extractVideoId1(inputUrl);
    
    // Si se encuentra un ID de video válido, incrustar el video en el iframe
    if (videoId) {
        const iframe = document.getElementById('youtubePlayer');
        
        // Establecer el src del iframe con los parámetros adicionales
        iframe.src = `https://www.youtube.com/embed/${videoId}?playlist=${videoId}&loop=1&mute=1&autoplay=1&controls=1`;
    } else {
        alert("Por favor, introduce un enlace válido de YouTube.");
    }
}

// Función para extraer el ID del video de un enlace de YouTube
function extractVideoId1(url) {
    const regex = /(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/(?:[^\/\n\s]+\/\S+\/|(?:v|e(?:mbed)?)\/|\S*?[?&]v=)|youtu\.be\/)([a-zA-Z0-9_-]{11})/;
    const match = url.match(regex);
    return match ? match[1] : null;
}

function loadVideo2() {
    const inputUrl = document.getElementById('youtubeUrl2').value;
    
    // Extraer el ID del video de la URL
    const videoId = extractVideoId2(inputUrl);
    
    // Si se encuentra un ID de video válido, incrustar el video en el iframe
    if (videoId) {
        const iframe = document.getElementById('youtubePlayer2');
        
        // Establecer el src del iframe con los parámetros adicionales
        iframe.src = `https://www.youtube.com/embed/${videoId}?playlist=${videoId}&loop=1&mute=1&autoplay=1&controls=1`;
    } else {
        alert("Por favor, introduce un enlace válido de YouTube.");
    }
}

// Función para extraer el ID del video de un enlace de YouTube
function extractVideoId2(url) {
    const regex = /(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/(?:[^\/\n\s]+\/\S+\/|(?:v|e(?:mbed)?)\/|\S*?[?&]v=)|youtu\.be\/)([a-zA-Z0-9_-]{11})/;
    const match = url.match(regex);
    return match ? match[1] : null;
}

function loadVideo3() {
    const inputUrl = document.getElementById('youtubeUrl3').value;
    
    // Extraer el ID del video de la URL
    const videoId = extractVideoId3(inputUrl);
    
    // Si se encuentra un ID de video válido, incrustar el video en el iframe
    if (videoId) {
        const iframe = document.getElementById('youtubePlayer3');
        
        // Establecer el src del iframe con los parámetros adicionales
        iframe.src = `https://www.youtube.com/embed/${videoId}?playlist=${videoId}&loop=1&mute=1&autoplay=1&controls=1`;
    } else {
        alert("Por favor, introduce un enlace válido de YouTube.");
    }
}

// Función para extraer el ID del video de un enlace de YouTube
function extractVideoId3(url) {
    const regex = /(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/(?:[^\/\n\s]+\/\S+\/|(?:v|e(?:mbed)?)\/|\S*?[?&]v=)|youtu\.be\/)([a-zA-Z0-9_-]{11})/;
    const match = url.match(regex);
    return match ? match[1] : null;
}
