<?php
require "BD_Connect.php";
    $alertaC1 = "Usuario o Nip\nIncorrecto!!!";

    $usuarioCoord = $_POST['log_usuC'];
    $passwordCoord = $_POST['log_passC'];

    $consultaC = "SELECT * FROM coordinador WHERE usuario = '$usuarioCoord' and pass_coord = '$passwordCoord'";
    $resultadoC = mysqli_query($connect, $consultaC);
    $filasC = mysqli_num_rows($resultadoC);

    if ($filasC > 0){
        http_response_code(200);
        while($filasC = $resultadoC->fetch_object()){
            session_name("COORDINADOR");
            session_start();
            $_SESSION["usucoord"] = $usuarioCoord;
            echo json_encode($filasC);
        }
    } else{
        http_response_code(404);
        echo ($alertaC1);
    }

?>