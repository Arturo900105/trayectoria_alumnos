<?php
require "BD_Connect.php";
    session_name("TUTOR");
    session_start();

    $alertaT1 = "Usuario o Contraseña\nIncorrecto!!!";
    $alertaT2 = "Usuario Incorrecto!!!";
    $alertaT3 = "Contraseña Incorrecta!!!";

    $usuarioT = $_POST['usuario'];
    $passwordT = $_POST['pass'];
    $_SESSION["usututor"] = $usuarioT;

    $consultaT = "SELECT * FROM tutor WHERE usuario = '$usuarioT' and pass_tutor = '$passwordT'";
    $resultadoT = mysqli_query($connect, $consultaT);
    $filasT = mysqli_num_rows($resultadoT);

    if ($filasT > 0){
        http_response_code(200);
        while($filasT = $resultadoT->fetch_object()){
            echo json_encode($filasT);
        }
    } else{
        http_response_code(404);
        echo ($alertaT1);
    }

    /*
     * if ($usuarioT != usuario) {
        http_response_code(404);
        echo ($alertaT2);
    } else if ($passwordT != pass_tutor) {
        http_response_code(404);
        echo ($alertaT3);
    }
    */
?>