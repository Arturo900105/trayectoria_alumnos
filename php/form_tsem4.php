<?php
    require "BD_Connect.php";

    $numControl = $_POST[''];

    $c_ingles = $_POST['ingles_4'];
    $n_ingles = $_POST['nivel_ingles_4'];
    $e_ingles = $_POST['ubicacion_4'];
    if ($c_ingles == "NO") {
        $n_ingles = "";
        $e_ingles = "";
    }

    $credito_T = $_POST['tutoria_4'];
    $credito_C = $_POST['cultural_4'];
    $credito_D = $_POST['deportiva_4'];
    $credito_AC = $_POST['complementaria_4'];
    $sumaCreditos = $_POST['suma_tcdc_4'];

    $asignatura1 = $_POST['materia1_4'];
    $asignatura2 = $_POST['materia2_4'];
    $asignatura3 = $_POST['materia3_4'];
    $asignatura4 = $_POST['materia4_4'];
    $asignatura5 = $_POST['materia5_4'];
    $asignatura6 = $_POST['materia6_4'];
    $asignatura7 = $_POST['materia7_4'];

    $calificacion1 = $_POST['calificacion1_4'];
    $calificacion2 = $_POST['calificacion2_4'];
    $calificacion3 = $_POST['calificacion3_4'];
    $calificacion4 = $_POST['calificacion4_4'];
    $calificacion5 = $_POST['calificacion5_4'];
    $calificacion6 = $_POST['calificacion6_4'];
    $calificacion7 = $_POST['calificacion7_4'];

    $beca = $_POST['beca_4'];
    $tipo_beca = $_POST['tipo_beca_4'];
    if ($beca == "NO") {
        $tipo_beca = "";
    }

    $rep_materia1 = $_POST['materiarep1_4'];
    $rep_materia2 = $_POST['materiarep2_4'];
    $rep_materia3 = $_POST['materiarep3_4'];
    $rep_materia4 = $_POST['materiarep4_4'];
    $rep_materia5 = $_POST['materiarep5_4'];
    $rep_materia6 = $_POST['materiarep6_4'];
    $rep_materia7 = $_POST['materiarep7_4'];

    $c_areaMedica = $_POST['folioAM_4'];
    $c_areaPsicologica = $_POST['folioAP_4'];
    $c_asesoriaPares = $_POST['folioAPar_4'];
    $c_tutoriaIndividual = $_POST['folioTInd_4'];
    $c_otraCanalizacion = $_POST['folioTInd_4'];

    $observaciones = $_POST['observaciones_4'];


    $g_trayectoria4 = "INSERT INTO trayectoria_sem4 VALUE ('$numControl','$c_ingles','$n_ingles','$e_ingles',
                                                           '$credito_T','$credito_C','$credito_D','$credito_AC','$sumaCreditos',
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
    $q_T4 = mysqli_query($connect, $g_trayectoria4);

    if (!$q_T4) {
        //printf("Errormessage: \n%s", mysqli_error($conectar));
        http_response_code(404);
        echo "\nERROR AL GUARDAR\n".$numControl;
    } else {
        echo "Trayectoria 4to Semestre\nde ".$numControl."\nGUARDADA EXITOSAMENTE";
    }
?>