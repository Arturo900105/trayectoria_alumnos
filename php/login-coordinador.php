<?php
require "BD_Connect.php";
    session_name("COORDINADOR");
    session_start();

    $alertaC1 = "Usuario o Nip\nIncorrecto!!!";

    $usuarioCoord = $_POST['log_usuC'];
    $passwordCoord = $_POST['log_passC'];
    $_SESSION["usucoord"] = $usuarioCoord;

    $consultaC = "SELECT * FROM coordinador WHERE usuario = '$usuarioCoord' and pass_coord = '$passwordCoord'";
    $resultadoC = mysqli_query($connect, $consultaC);
    $filasC = mysqli_num_rows($resultadoC);

    if ($filasC > 0){
        http_response_code(200);
        while($filasC = $resultadoC->fetch_object()){
            echo json_encode($filasC);
        }
    } else{
        http_response_code(404);
        echo ($alertaC1);
    }

?>