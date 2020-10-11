<?php
    require "BD_Connect.php";

    $alerta = "Ficha no encontrada!!!";

    $a_ficha = $_POST['login'];
    $consulta = "SELECT num_ficha,apellidos,nombre,sexo,carrera,generacion
                 FROM alumno
                 WHERE num_ficha = '$a_ficha'";
    $resultado = mysqli_query($connect, $consulta);
    $filas = mysqli_num_rows($resultado);

    if ($filas > 0){
        http_response_code(200);
        while($fila = $resultado->fetch_assoc()){
            session_name("ALUMNO");
            session_start();
            $_SESSION["usuAlumno"] = $a_ficha;
            session_start();
            echo json_encode($fila);
        }
    }
    else{
        http_response_code(404);
        echo ($alerta);
    }
?>