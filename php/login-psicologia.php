<?php
    require "conectar.php";

    $ficha = $_POST['login_psicologia'];
    $consulta = "SELECT * FROM alumno WHERE num_ficha = '$ficha'";
    $resultado = mysqli_query($conectar, $consulta);
    $filas = mysqli_num_rows($resultado);

    if ($filas > 0){
        //session_start();
        echo "Ficha encontrada!!!";
    }
    else{
        http_response_code(404);
        echo "Ficha no encontrada!!!";
    }
?>
