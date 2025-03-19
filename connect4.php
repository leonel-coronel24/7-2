<?php
header('Content-Type: application/json');

// Configurar la conexión a la base de datos
$servername = "becsunbkechpocr290yf-mysql.services.clever-cloud.com";
$username = "ufusmwxiihkedulm";
$password = "ZLFmY49qijj3xTaVBCZx";
$dbname = "becsunbkechpocr290yf";
$port = 3306;

// Crear conexión
$conn = new mysqli($servername, $username, $password, $dbname, $port);

// Verificar conexión
if ($conn->connect_error) {
    echo json_encode(array("error" => "Conexión fallida: " . $conn->connect_error));
    exit();
}

// Realizar una consulta simple
$sql = "SELECT id, DATO, SELDA2, SELDA3, QR, IMP1, IMP2, IMP3, IMP4, IMP5, IMP6, IMP7, footer, TITULOS, INSCRIPCION FROM DATOS"; // Ajustado a tu tabla y columnas
$result = $conn->query($sql);

// Preparar datos para enviar como JSON
$datos = array();
if ($result->num_rows > 0) {
    while($row = $result->fetch_assoc()) {
        $datos[] = $row;
    }
} else {
    $datos[] = array("message" => "No hay datos");
}

// Enviar los datos como JSON
echo json_encode($datos);

// Cerrar conexión
$conn->close();
?>
