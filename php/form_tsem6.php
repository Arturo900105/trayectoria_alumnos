<?php
    require "BD_Connect.php";

    $numControl = $_POST[''];

    $c_ingles = $_POST['ingles_6'];
    $n_ingles = $_POST['nivel_ingles_6'];
    $e_ingles = $_POST['ubicacion_6'];
    if ($c_ingles == "NO") {
        $n_ingles = "";
        $e_ingles = "";
    }

    $credito_T = $_POST['tutoria_6'];
    $credito_C = $_POST['cultural_6'];
    $credito_D = $_POST['deportiva_6'];
    $credito_AC = $_POST['complementaria_6'];
    $sumaCreditos = $_POST['suma_tcdc_6'];

    $servSocial = $_POST['servSocial_6'];
    $lugarServSocial = $_POST['lugar_servsoc'];
    if ($servSocial == "NO") {
        $lugarServSocial = "";
    }

    $asignatura1 = $_POST['materia1_6'];
    $asignatura2 = $_POST['materia2_6'];
    $asignatura3 = $_POST['materia3_6'];
    $asignatura4 = $_POST['materia4_6'];
    $asignatura5 = $_POST['materia5_6'];
    $asignatura6 = $_POST['materia6_6'];
    $asignatura7 = $_POST['materia7_6'];

    $calificacion1 = $_POST['calificacion1_6'];
    $calificacion2 = $_POST['calificacion2_6'];
    $calificacion3 = $_POST['calificacion3_6'];
    $calificacion4 = $_POST['calificacion4_6'];
    $calificacion5 = $_POST['calificacion5_6'];
    $calificacion6 = $_POST['calificacion6_6'];
    $calificacion7 = $_POST['calificacion7_6'];

    $beca = $_POST['beca_6'];
    $tipo_beca = $_POST['tipo_beca_6'];
    if ($beca == "NO") {
        $tipo_beca = "";
    }

    $rep_materia1 = $_POST['materiarep1_6'];
    $rep_materia2 = $_POST['materiarep2_6'];
    $rep_materia3 = $_POST['materiarep3_6'];
    $rep_materia4 = $_POST['materiarep4_6'];
    $rep_materia5 = $_POST['materiarep5_6'];
    $rep_materia6 = $_POST['materiarep6_6'];
    $rep_materia7 = $_POST['materiarep7_6'];

    $c_areaMedica = $_POST['folioAM_6'];
    $c_areaPsicologica = $_POST['folioAP_6'];
    $c_asesoriaPares = $_POST['folioAPar_6'];
    $c_tutoriaIndividual = $_POST['folioTInd_6'];
    $c_otraCanalizacion = $_POST['folioTInd_6'];

    $observaciones = $_POST['observaciones_6'];


    $g_trayectoria6 = "INSERT INTO trayectoria_sem6 VALUE ('$numControl','$c_ingles','$n_ingles','$e_ingles',
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
    $q_T6 = mysqli_query($connect, $g_trayectoria6);

    if (!$q_T6) {
        //printf("Errormessage: \n%s", mysqli_error($conectar));
        http_response_code(404);
        echo "\nERROR AL GUARDAR\n".$numControl;
    } else {
        echo "Trayectoria 6to Semestre\nde ".$numControl."\nGUARDADA EXITOSAMENTE";
    }
?>