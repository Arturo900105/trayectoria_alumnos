<?php
    require "conectar.php";

    $alerta1 = "Ficha encontrada!!!";
    $alerta2 = "Ficha no encontrada!!!";

    $acceso = $_POST['login_pedagogia'];
    $consulta = "SELECT * FROM alumno WHERE num_ficha = '$acceso'";
    $resultado = mysqli_query($conectar, $consulta);
    $filas = mysqli_num_rows($resultado);

    if ($filas > 0){
        http_response_code(200);
        //session_start();

        while($fila = $resultado->fetch_object()){
            echo json_encode($fila);
        }
    }
    else{
        http_response_code(404);
        echo ($alerta2);
    }
?>