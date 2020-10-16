<?php
    require "BD_Connect.php";

    $postTest = $_POST['PostTest'];
    $alerta = "Sin acceso a la\nEscala Post-Test";
    $acceso = $_POST['login_posttest'];

    $q_posttest = "SELECT cl.num_control, al.nombre, al.apellidos, al.carrera, al.generacion, psic.suma_ad
                   FROM num_control_alumno cl
                   JOIN alumno al
                   ON cl.num_ficha = al.num_ficha
                   JOIN tabla_psicologia psic
                   ON al.num_ficha = psic.num_ficha
                   WHERE cl.num_control = '$acceso' AND psic.suma_ad > 10";
    $r_posttest = mysqli_query($connect, $q_posttest);
    $f_posttest = mysqli_num_rows($r_posttest);

    if ($f_posttest > 0){
        http_response_code(200);
        while($fila_psicologia = $r_posttest->fetch_object()){
            $postTest = 'escala_posttest.ph';

            $q_pTest = "SELECT contestado FROM tabla_posttest WHERE num_control = '$acceso'";
            $r_pTest = mysqli_query($connect, $q_pTest);
            $f_pTest = $r_pTest->fetch_assoc();
            if (!empty($f_pTest)){
                if ($f_pTest['contestado'] == 1){
                    http_response_code(404);
                    echo "Usted ya realizó la\nEscala Post-Test";
                    return;
                }
            }
            session_name("POST-TEST");
            session_start();
            $_SESSION["ptestAlumno"] = $acceso;
            session_start();
            echo json_encode($fila_psicologia);
        }
    } else{
        http_response_code(404);
        echo ($alerta);
    }
?>