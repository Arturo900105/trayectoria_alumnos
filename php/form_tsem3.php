<?php
    require "BD_Connect.php";

    $numControl = $_POST[''];

    $c_ingles = $_POST['ingles_3'];
    $n_ingles = $_POST['nivel_ingles_3'];
    $e_ingles = $_POST['ubicacion_3'];
    if ($c_ingles == "NO") {
        $n_ingles = "";
        $e_ingles = "";
    }

    $credito_T = $_POST['tutoria_3'];
    $credito_C = $_POST['cultural_3'];
    $credito_D = $_POST['deportiva_3'];
    $credito_AC = $_POST['complementaria_3'];
    $sumaCreditos = $_POST['suma_tcdc_3'];

    $asignatura1 = $_POST['materia1_3'];
    $asignatura2 = $_POST['materia2_3'];
    $asignatura3 = $_POST['materia3_3'];
    $asignatura4 = $_POST['materia4_3'];
    $asignatura5 = $_POST['materia5_3'];
    $asignatura6 = $_POST['materia6_3'];
    $asignatura7 = $_POST['materia7_3'];

    $calificacion1 = $_POST['calificacion1_3'];
    $calificacion2 = $_POST['calificacion2_3'];
    $calificacion3 = $_POST['calificacion3_3'];
    $calificacion4 = $_POST['calificacion4_3'];
    $calificacion5 = $_POST['calificacion5_3'];
    $calificacion6 = $_POST['calificacion6_3'];
    $calificacion7 = $_POST['calificacion7_3'];

    $beca = $_POST['beca_3'];
    $tipo_beca = $_POST['tipo_beca_3'];
    if ($beca == "NO") {
        $tipo_beca = "";
    }

    $rep_materia1 = $_POST['materiarep1_3'];
    $rep_materia2 = $_POST['materiarep2_3'];
    $rep_materia3 = $_POST['materiarep3_3'];
    $rep_materia4 = $_POST['materiarep4_3'];
    $rep_materia5 = $_POST['materiarep5_3'];
    $rep_materia6 = $_POST['materiarep6_3'];
    $rep_materia7 = $_POST['materiarep7_3'];

    $c_areaMedica = $_POST['folioAM_3'];
    $c_areaPsicologica = $_POST['folioAP_3'];
    $c_asesoriaPares = $_POST['folioAPar_3'];
    $c_tutoriaIndividual = $_POST['folioTInd_3'];
    $c_otraCanalizacion = $_POST['folioTInd_3'];

    $observaciones = $_POST['observaciones_3'];


    $g_trayectoria3 = "INSERT INTO trayectoria_sem3 VALUE ('$numControl','$c_ingles','$n_ingles','$e_ingles',
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
    $q_T3 = mysqli_query($connect, $g_trayectoria3);

    if (!$q_T3) {
        //printf("Errormessage: \n%s", mysqli_error($conectar));
        http_response_code(404);
        echo "\nERROR AL GUARDAR\n".$numControl;
    } else {
        echo "Trayectoria 3er Semestre\nde ".$numControl."\nGUARDADA EXITOSAMENTE";
    }
?>