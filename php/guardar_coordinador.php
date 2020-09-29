<?php
require "BD_Connect.php";
require "fecha_hora.php";

    $fechaHoy;
    $horaHoy;
    $nombre = $_POST['nombreCoord'];
    $apellidos = $_POST['apePat']." ".$_POST['apeMat'];
    $coordinacion = $_POST['cita_tutoria'];
    $email = $_POST['cita_email'];
    $usuario = $_POST['usuarioCoord'];
    $password = $_POST['passCoord'];

    $t_coordinador = "INSERT INTO coordinador (nombre,apellidos,coordinacion,email,fecha_registro,hora_registro,usuario,pass_coord)
                      VALUES ('$nombre','$apellidos','$coordinacion','$email','$fechaHoy','$horaHoy','$usuario','$password')";
    $qtcoord = mysqli_query($connect, $t_coordinador);

    if (!$qtcoord){
        //printf("Errormessage: \n%s", mysqli_error($conectar));
        http_response_code(404);
        echo "\n\nNO SE GUARDÓ NADA!!!";
    } else {
        echo "SU REGISTRO HA SIDO EXITOSO!!!";
    }

?>