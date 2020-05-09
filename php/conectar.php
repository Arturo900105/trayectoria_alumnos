<?php

    $host = "localhost";
    $usuario = "root";
    $pass = "";
    $b_datos = "trayectoria_alumnos";
    $caracteres = "utf8";

    $conectar = @mysqli_connect($host, $usuario, $pass, $b_datos);
    $conectar -> set_charset($caracteres);

    if(!$conectar) {
        $mensaje = "Error al conectar a la base de datos!!!\n";
        echo $mensaje;
    }
?>
