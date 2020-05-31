<?php
require "BD_Connect.php";

    $alerta1 = "Ficha encontrada!!!";
    $alerta2 = "Ficha no encontrada!!!";

    $acceso = $_POST['login'];
    $consulta = "SELECT * FROM alumno WHERE num_ficha = '$acceso'";
    $resultado = mysqli_query($connect, $consulta);
    $filas = mysqli_num_rows($resultado);

    if ($filas > 0){
        http_response_code(200);
        while($fila = $resultado->fetch_object()){
            echo json_encode($fila);
        }
    }
    else{
        http_response_code(404);
        echo ($alerta2);
    }
?>