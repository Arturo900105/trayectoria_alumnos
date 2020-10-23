<?php
    require "BD_Connect.php";
    $numControl = $_POST['numControl'];
    $numSems = $_POST['tsem'];
    $alerta = "Trayectoria Realizada\n".$numControl;

    switch ($numSems){
        case 't_semestre1':
            $tabla_ts = 'trayectoria_sem1';
            break;
        case 't_semestre2':
            $tabla_ts = 'trayectoria_sem2';
            break;
        case 't_semestre3':
            $tabla_ts = 'trayectoria_sem3';
            break;
        case 't_semestre4':
            $tabla_ts = 'trayectoria_sem4';
            break;
        case 't_semestre5':
            $tabla_ts = 'trayectoria_sem5';
            break;
        case 't_semestre6':
            $tabla_ts = 'trayectoria_sem6';
            break;
        case 't_semestre7':
            $tabla_ts = 'trayectoria_sem7';
            break;
        case 't_semestre8':
            $tabla_ts = 'trayectoria_sem8';
            break;
        case 't_semestre9':
            $tabla_ts = 'trayectoria_sem9';
            break;
        case 't_titulacion':
            $tabla_ts = 'trayectoria_titulacion';
            break;
    }

    $qTSem = "SELECT num_control FROM $tabla_ts WHERE num_control = '$numControl' AND contestado = 1";
    $rTSem = mysqli_query($connect, $qTSem);
    $fTSem = mysqli_num_rows($rTSem);

    if ($fTSem > 0) {
        http_response_code(404);
        while($fTSem = $rTSem->fetch_object()){
            echo ($alerta);
        }
    } else {
        http_response_code(200);
    }

?>

