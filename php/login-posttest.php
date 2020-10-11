<?php
    require "BD_Connect.php";

    $alerta2 = "Sin acceso a la\nEscala Post-Test";
    $acceso = $_POST['login_posttest'];

    $q_posttest = "SELECT cl.num_control, al.nombre, al.apellidos, al.carrera, al.generacion, psic.suma_ad
                   FROM num_control_alumno cl
                   INNER JOIN alumno al
                   ON cl.num_ficha = al.num_ficha
                   INNER JOIN tabla_psicologia psic
                   ON al.num_ficha = cl.num_ficha
                   WHERE cl.num_control = '$acceso' AND psic.suma_ad > 7";
    $r_posttest = mysqli_query($connect, $q_posttest);
    $f_posttest = mysqli_num_rows($r_posttest);

    if ($f_posttest > 0){
        http_response_code(200);
        while($fila_psicologia = $r_posttest->fetch_object()){
            session_name("POST-TEST");
            session_start();
            $_SESSION["ptestAlumno"] = $acceso;
            session_start();
            echo json_encode($fila_psicologia);
        }
    } else{
        http_response_code(404);
        echo ($alerta2);
    }
?>