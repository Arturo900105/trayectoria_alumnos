<?php
    require "BD_Connect.php";
    require "fecha_hora.php";

    $numControl = $_POST['control'];
    $semestre = $_POST['sem_posttest'];
    
    $a_1 = $_POST['posttes_A1'];
    $a_2 = $_POST['posttes_A2'];
    $a_3 = $_POST['posttes_A3'];
    $a_4 = $_POST['posttes_A4'];
    $a_5 = $_POST['posttes_A5'];
    $a_6 = $_POST['posttes_A6'];
    $a_7 = $_POST['posttes_A7'];

    $d_1 = $_POST['posttes_D1'];
    $d_2 = $_POST['posttes_D2'];
    $d_3 = $_POST['posttes_D3'];
    $d_4 = $_POST['posttes_D4'];
    $d_5 = $_POST['posttes_D5'];
    $d_6 = $_POST['posttes_D6'];
    $d_7 = $_POST['posttes_D7'];

    $ansiedad = $a_1 + $a_2 + $a_3 + $a_4 + $a_5 + $a_6 + $a_7;
    $depresion = $d_1 + $d_2 + $d_3 + $d_4 + $d_5 + $d_6 + $d_7;
    $suma_ad = $ansiedad + $depresion;

    $ge_PostTest = "INSERT INTO tabla_posttest VALUES ('$numControl','$semestre',
                                                       '$a_1','$a_2','$a_3','$a_4','$a_5','$a_6','$a_7',
                                                       '$d_1','$d_2','$d_3','$d_4','$d_5','$d_6','$d_7',
                                                       '$ansiedad','$depresion','$suma_ad',
                                                       '$fechaHoy','$horaHoy',true)";
    $q_PostTest = mysqli_query($connect, $ge_PostTest);

    if (!$q_PostTest) {
        //printf("Errormessage: \n%s", mysqli_error($conectar));
        http_response_code(404);
        echo "\nERROR AL GUARDAR\nESCALA POST-TEST";
    } else {
        echo "\nESCALA POST-TEST\nGUARDADA EXITOSAMENTE";
    }
?>