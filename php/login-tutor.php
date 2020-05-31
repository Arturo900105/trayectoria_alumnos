<?php
require "BD_Connect.php";

    $alerta1 = "Usuario encontrado!!!";
    $alerta2 = "Usuario no encontrado!!!";

    $usuario = $_POST['usuario'];
    $password = $_POST['pass'];

    $consulta = "SELECT * FROM tutor WHERE usuario = '$usuario' and password = '$password'";
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