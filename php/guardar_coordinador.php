<?php

require "BD_Connect.php";
    $nombre = $_POST['nombreCoord'];
    $apellidos = $_POST['apePat']." ".$_POST['apeMat'];
    $coordinacion = $_POST['cita_tutoria'];
    $email = $_POST['cita_email'];
    $usuario = $_POST['usuarioCoord'];
    $password = sha1($_POST['passCoord']);

    $t_coordinador = "INSERT INTO coordinador VALUES ('$nombre','$apellidos','$coordinacion','$email','$usuario','$password')";
    $qtcoord = mysqli_query($connect, $t_coordinador);

    if (!$qtcoord){
        //printf("Errormessage: \n%s", mysqli_error($conectar));
        http_response_code(404);
        echo "\n\nNO SE GUARDÓ NADA!!!";
    } else {
        echo "REGISTRO EXITOSO!!!";
    }

?>