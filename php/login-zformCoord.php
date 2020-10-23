<?php
    require "BD_Connect.php";
    $alertaNip = "Clave Incorrecta!!!";

    $nip_seguridad = $_POST['pass-nip'];
    $qNip = "SELECT pass_formCord FROM z_form_coord WHERE pass_formCord = '$nip_seguridad'";
    $rNip = mysqli_query($connect, $qNip);
    $fNip = mysqli_num_rows($rNip);

    if ($fNip > 0) {
        http_response_code(200);
    } else {
        http_response_code(404);
        echo ($alertaNip);
    }
?>