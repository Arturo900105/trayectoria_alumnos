<?php
    require "BD_Connect.php";
    require "fecha_hora.php";

    $numControl = $_POST['ctrAlumno'];

    $c_ingles = $_POST['ingles_5'];
    $n_ingles = $_POST['nivel_ingles_5'];
    $e_ingles = $_POST['ubicacion_5'];
    if ($c_ingles == "NO") {
        $n_ingles = "";
        $e_ingles = "";
    }

    $credito_T = $_POST['tutoria_5'];
    $credito_C = $_POST['cultural_5'];
    $credito_D = $_POST['deportiva_5'];
    $credito_AC = $_POST['complementaria_5'];
    $sumaCreditos = $_POST['suma_tcdc_5'];

    $nomCult = $_POST['actCultural'];
    if ($nomCult == "otra"){
        $nomCult = $_POST['otraCult'];
    }
    $nomDepor = $_POST['actDeportiva'];
    if ($nomDepor == "otra"){
        $nomDepor = $_POST['otraDepor'];
    }
    $nomComple = $_POST['actComple'];
    if ($nomComple == "otra"){
        $nomComple = $_POST['otraComple'];
    }

    $asignatura1 = $_POST['materia1_5'];
    $asignatura2 = $_POST['materia2_5'];
    $asignatura3 = $_POST['materia3_5'];
    $asignatura4 = $_POST['materia4_5'];
    $asignatura5 = $_POST['materia5_5'];
    $asignatura6 = $_POST['materia6_5'];
    $asignatura7 = $_POST['materia7_5'];

    $calificacion1 = $_POST['calificacion1_5'];
    $calificacion2 = $_POST['calificacion2_5'];
    $calificacion3 = $_POST['calificacion3_5'];
    $calificacion4 = $_POST['calificacion4_5'];
    $calificacion5 = $_POST['calificacion5_5'];
    $calificacion6 = $_POST['calificacion6_5'];
    $calificacion7 = $_POST['calificacion7_5'];

    $beca = $_POST['beca_5'];
    $tipo_beca = $_POST['tipo_beca_5'];
    if ($beca == "NO") {
        $tipo_beca = "";
    }

    $rep_materia1 = $_POST['materiarep1_5'];
    $rep_materia2 = $_POST['materiarep2_5'];
    $rep_materia3 = $_POST['materiarep3_5'];
    $rep_materia4 = $_POST['materiarep4_5'];
    $rep_materia5 = $_POST['materiarep5_5'];
    $rep_materia6 = $_POST['materiarep6_5'];
    $rep_materia7 = $_POST['materiarep7_5'];

    $c_areaMedica = $_POST['folioAM_5'];
    $c_areaPsicologica = $_POST['folioAP_5'];
    $c_asesoriaPares = $_POST['folioAPar_5'];
    $c_tutoriaIndividual = $_POST['folioTInd_5'];
    $c_otraCanalizacion = $_POST['folioTInd_5'];

    $observaciones = $_POST['observaciones_5'];
    $nomTutor = $_POST['nombreTutor'];

    $g_trayectoria5 = "INSERT INTO trayectoria_sem5 VALUE ('$numControl','$c_ingles','$n_ingles','$e_ingles',
                                                           '$credito_T','$credito_C','$credito_D','$credito_AC','$sumaCreditos',
                                                           '$nomCult','$nomDepor','$nomComple',
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
                                                           '$observaciones','$nomTutor','$fechaHoy','$horaHoy',true)";
    $q_T5 = mysqli_query($connect, $g_trayectoria5);

    if (!$q_T5) {
        //printf("Errormessage: \n%s", mysqli_error($conectar));
        http_response_code(404);
        echo "\nERROR AL GUARDAR\n".$numControl;
    } else {
        echo "Trayectoria 5to Semestre\nde ".$numControl."\nGUARDADA EXITOSAMENTE";
    }
?>