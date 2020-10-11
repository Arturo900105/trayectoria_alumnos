<?php
    require "BD_Connect.php";

    $numControl = $_POST[''];

    $c_ingles = $_POST['ingles_8'];
    $n_ingles = $_POST['nivel_ingles_8'];
    $e_ingles = $_POST['ubicacion_8'];
    if ($c_ingles == "NO") {
        $n_ingles = "";
        $e_ingles = "";
    }

    $credito_T = $_POST['tutoria_8'];
    $credito_C = $_POST['cultural_8'];
    $credito_D = $_POST['deportiva_8'];
    $credito_AC = $_POST['complementaria_8'];
    $sumaCreditos = $_POST['suma_tcdc_8'];

    $servSocial = $_POST['servSocial_8'];
    $lugarServSocial = $_POST['lugar_servsoc8'];
    if ($servSocial == "NO") {
        $lugarServSocial = "";
    }

    $asignatura1 = $_POST['materia1_8'];
    $asignatura2 = $_POST['materia2_8'];
    $asignatura3 = $_POST['materia3_8'];
    $asignatura4 = $_POST['materia4_8'];
    $asignatura5 = $_POST['materia5_8'];
    $asignatura6 = $_POST['materia6_8'];
    $asignatura7 = $_POST['materia7_8'];

    $calificacion1 = $_POST['calificacion1_8'];
    $calificacion2 = $_POST['calificacion2_8'];
    $calificacion3 = $_POST['calificacion3_8'];
    $calificacion4 = $_POST['calificacion4_8'];
    $calificacion5 = $_POST['calificacion5_8'];
    $calificacion6 = $_POST['calificacion6_8'];
    $calificacion7 = $_POST['calificacion7_8'];

    $beca = $_POST['beca_8'];
    $tipo_beca = $_POST['tipo_beca_8'];
    if ($beca == "NO") {
        $tipo_beca = "";
    }

    $rep_materia1 = $_POST['materiarep1_8'];
    $rep_materia2 = $_POST['materiarep2_8'];
    $rep_materia3 = $_POST['materiarep3_8'];
    $rep_materia4 = $_POST['materiarep4_8'];
    $rep_materia5 = $_POST['materiarep5_8'];
    $rep_materia6 = $_POST['materiarep6_8'];
    $rep_materia7 = $_POST['materiarep7_8'];

    $c_areaMedica = $_POST['folioAM_8'];
    $c_areaPsicologica = $_POST['folioAP_8'];
    $c_asesoriaPares = $_POST['folioAPar_8'];
    $c_tutoriaIndividual = $_POST['folioTInd_8'];
    $c_otraCanalizacion = $_POST['folioTInd_8'];

    $observaciones = $_POST['observaciones_8'];


    $g_trayectoria8 = "INSERT INTO trayectoria_sem8 VALUE ('$numControl','$c_ingles','$n_ingles','$e_ingles',
                                                           '$credito_T','$credito_C','$credito_D','$credito_AC','$sumaCreditos',
                                                           '$servSocial','$lugarServSocial',
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
    $q_T8 = mysqli_query($connect, $g_trayectoria8);

    if (!$q_T8) {
        //printf("Errormessage: \n%s", mysqli_error($conectar));
        http_response_code(404);
        echo "\nERROR AL GUARDAR\n".$numControl;
    } else {
        echo "Trayectoria 8vo Semestre\nde ".$numControl."\nGUARDADA EXITOSAMENTE";
    }
?>