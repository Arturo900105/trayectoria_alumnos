<?php
    require "BD_Connect.php";

    $numControl = $_POST[''];

    $c_ingles = $_POST['ingles_2'];
    $n_ingles = $_POST['nivel_ingles_2'];
    $e_ingles = $_POST['ubicacion_2'];
    if ($c_ingles == "NO") {
        $n_ingles = "";
        $e_ingles = "";
    }

    $credito_T = $_POST['tutoria_2'];
    $credito_C = $_POST['cultural_2'];
    $credito_D = $_POST['deportiva_2'];
    $sumaCreditos = $_POST['suma_tcd_2'];

    $asignatura1 = $_POST['materia1_2'];
    $asignatura2 = $_POST['materia2_2'];
    $asignatura3 = $_POST['materia3_2'];
    $asignatura4 = $_POST['materia4_2'];
    $asignatura5 = $_POST['materia5_2'];
    $asignatura6 = $_POST['materia6_2'];
    $asignatura7 = $_POST['materia7_2'];

    $calificacion1 = $_POST['calificacion1_2'];
    $calificacion2 = $_POST['calificacion2_2'];
    $calificacion3 = $_POST['calificacion3_2'];
    $calificacion4 = $_POST['calificacion4_2'];
    $calificacion5 = $_POST['calificacion5_2'];
    $calificacion6 = $_POST['calificacion6_2'];
    $calificacion7 = $_POST['calificacion7_2'];

    $beca = $_POST['beca_2'];
    $tipo_beca = $_POST['tipo_beca_2'];
    if ($beca == "NO") {
        $tipo_beca = "";
    }

    $rep_materia1 = $_POST['materiarep1_2'];
    $rep_materia2 = $_POST['materiarep2_2'];
    $rep_materia3 = $_POST['materiarep3_2'];
    $rep_materia4 = $_POST['materiarep4_2'];
    $rep_materia5 = $_POST['materiarep5_2'];
    $rep_materia6 = $_POST['materiarep6_2'];
    $rep_materia7 = $_POST['materiarep7_2'];

    $c_areaMedica = $_POST['folioAM_2'];
    $c_areaPsicologica = $_POST['folioAP_2'];
    $c_asesoriaPares = $_POST['folioAPar_2'];
    $c_tutoriaIndividual = $_POST['folioTInd_2'];
    $c_otraCanalizacion = $_POST['folioTInd_2'];

    $observaciones = $_POST['observaciones_2'];


    $g_trayectoria2 = "INSERT INTO trayectoria_sem2 VALUE ('$numControl','$c_ingles','$n_ingles','$e_ingles',
                                                           '$credito_T','$credito_C','$credito_D','$sumaCreditos',
                                                           '$asignatura1','$calificacion1',
                                                           '$asignatura2','$calificacion2',
                                                           '$asignatura3','$calificacion3',
                                                           '$asignatura4','$calificacion4',
                                                           '$asignatura5','$calificacion5',
                                                           '$asignatura6','$calificacion6',
                                                           '$asignatura7','$calificacion7',
                                                           '$beca','$tipo_beca',
                                                           '$rep_materia1','$rep_materia2','$rep_materia3','$rep_materia4','$rep_materia5','$rep_materia6','$rep_materia7',
                                                           '$c_areaMedica','$c_areaPsicologica','$c_asesoriaPares','$c_tutoriaIndividual','$c_otraCanalizacion',
                                                           '$observaciones',)";
    $q_T2 = mysqli_query($connect, $g_trayectoria2);

    if (!$q_T2) {
        //printf("Errormessage: \n%s", mysqli_error($conectar));
        http_response_code(404);
        echo "\nERROR AL GUARDAR\n".$numControl;
    } else {
        echo "Trayectoria 2do Semestre\nde ".$numControl."\nGUARDADA EXITOSAMENTE";
    }
?>