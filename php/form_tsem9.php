<?php
    require "BD_Connect.php";
    require "fecha_hora.php";

    $numControl = $_POST['ctrAlumno'];

    $c_ingles = $_POST['ingles_9'];
    $n_ingles = $_POST['nivel_ingles_9'];
    $e_ingles = $_POST['ubicacion_9'];
    if ($c_ingles == "NO") {
        $n_ingles = "";
        $e_ingles = "";
    }

    $credito_T = $_POST['tutoria_9'];
    $credito_C = $_POST['cultural_9'];
    $credito_D = $_POST['deportiva_9'];
    $credito_AC = $_POST['complementaria_9'];
    $sumaCreditos = $_POST['suma_tcdc_9'];

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

    $resiProf = $_POST['residencia'];
    $lugarResiProf = $_POST['lugar_residencia'];
    if ($resiProf == "NO") {
        $lugarResiProf = "";
    }

    $asignatura1 = $_POST['materia1_9'];
    $asignatura2 = $_POST['materia2_9'];
    $asignatura3 = $_POST['materia3_9'];
    $asignatura4 = $_POST['materia4_9'];
    $asignatura5 = $_POST['materia5_9'];
    $asignatura6 = $_POST['materia6_9'];
    $asignatura7 = $_POST['materia7_9'];

    $calificacion1 = $_POST['calificacion1_9'];
    $calificacion2 = $_POST['calificacion2_9'];
    $calificacion3 = $_POST['calificacion3_9'];
    $calificacion4 = $_POST['calificacion4_9'];
    $calificacion5 = $_POST['calificacion5_9'];
    $calificacion6 = $_POST['calificacion6_9'];
    $calificacion7 = $_POST['calificacion7_9'];

    $beca = $_POST['beca_9'];
    $tipo_beca = $_POST['tipo_beca_9'];
    if ($beca == "NO") {
        $tipo_beca = "";
    }

    $rep_materia1 = $_POST['materiarep1_9'];
    $rep_materia2 = $_POST['materiarep2_9'];
    $rep_materia3 = $_POST['materiarep3_9'];
    $rep_materia4 = $_POST['materiarep4_9'];
    $rep_materia5 = $_POST['materiarep5_9'];
    $rep_materia6 = $_POST['materiarep6_9'];
    $rep_materia7 = $_POST['materiarep7_9'];

    $c_areaMedica = $_POST['folioAM_9'];
    $c_areaPsicologica = $_POST['folioAP_9'];
    $c_asesoriaPares = $_POST['folioAPar_9'];
    $c_tutoriaIndividual = $_POST['folioTInd_9'];
    $c_otraCanalizacion = $_POST['folioTInd_9'];

    $observaciones = $_POST['observaciones_9'];
    $nomTutor = $_POST['nombreTutor'];

    $g_trayectoria9 = "INSERT INTO trayectoria_sem9 VALUE ('$numControl','$c_ingles','$n_ingles','$e_ingles',
                                                           '$credito_T','$credito_C','$credito_D','$credito_AC','$sumaCreditos',
                                                           '$nomCult','$nomDepor','$nomComple',
                                                           '$resiProf','$lugarResiProf',
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
    $q_T9 = mysqli_query($connect, $g_trayectoria9);

    if (!$q_T9) {
        //printf("Errormessage: \n%s", mysqli_error($conectar));
        http_response_code(404);
        echo "\nERROR AL GUARDAR\n".$numControl;
    } else {
        echo "Trayectoria 9no Semestre\nde ".$numControl."\nGUARDADA EXITOSAMENTE";
    }
?>