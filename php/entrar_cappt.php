<?php
    require "BD_Connect.php";

    $numFicha = $_POST['numFicha'];
    $alerta = "Caracterización Realizada\n".$numFicha;

    $q_CAPPT = "SELECT cappt.num_control, cappt.contestado, al.num_ficha FROM trayectoria_cappt cappt
                JOIN num_control_alumno ctl
                ON cappt.num_control = ctl.num_control
                JOIN alumno al
                ON al.num_ficha = ctl.num_ficha
                WHERE al.num_ficha = '$numFicha' AND cappt.contestado = 1";
    $r_CAPPT = mysqli_query($connect, $q_CAPPT);
    $f_CAPPT = mysqli_num_rows($r_CAPPT);

    if ($f_CAPPT > 0) {
        http_response_code(404);
        while($f_CAPPT = $r_CAPPT->fetch_object()){
            echo ($alerta);
        }
    } else {
        http_response_code(200);
    }

?>