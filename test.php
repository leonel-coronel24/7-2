<?php

 //Recuperar las variables

$nombre=$_POST['nombre'];
$apellido=$_POST['apellido'];

$fecha=$_POST['fecha'];
$mail=$_POST['mail'];
$telefono=$_POST['telefono'];

$usuario=$_POST['usuario'];
$contraseña=$_POST['contraseña'];


//Conexion a BD LOCAL

    //Conectamos con el servidor
    //Funcion llamada $conexion (dominio,usuario,contraseña,base_de_datos) 
      $conexion=mysqli_connect("localhost", "root", "", "bdprueba") or die ("Problemas al conectar con la Base de Datos");
      mysqli_select_db($conexion,$bdprueba) or die("problemas al conectar con la base de datos");


    //Hacemos la sentencia de sql
        $sql="INSERT INTO formulario VALUES ('$nombre','$apellido','$fecha','$mail','$telefono','$usuario','$contraseña')";

    //Ejecutamos la sentencia de sql
    $ejecutar=mysqli_query($conexion,$sql);

    //Verificamos la ejecucion
    if(!$ejecutar){
    echo"Hubo Algun Error";
    } 

    else{
    header ('location: datosg.html');
    }


?>

//
 //conectamos Con el servidor
 $host ="localhost";
 $user ="root";
 $pass ="";
 $db="acis";

 //funcion llamada conexion con (dominio,usuarios,contraseña,base_de_datos)
 $con = mysqli_connect($host,$user,$pass,$db)or die("Problemas al Conectar");
 mysqli_select_db($con,$db)or die("problemas al conectar con la base de datos");


 //recuperar las variables
 $cod=$_POST['cod'];
 $desc=$_POST['desc'];
 $cant=$_POST['cant'];
 $cajon=$_POST['cajon'];
 //hacemos la sentencia de sql
 $sql="INSERT INTO herramienta VALUES('$cod',
           '$desc',
           '$cant',
           '$cajon')";
 //ejecutamos la sentencia de sql
 $ejecutar=mysqli_query($con,$sql);
 //verificamos la ejecucion
 if(!$ejecutar){
  echo"Hubo Algun Error";
 }else{
  header ('location: datosg.html');
 }
//