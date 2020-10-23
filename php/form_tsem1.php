<?php
    require "BD_Connect.php";
    require "fecha_hora.php";

    $numControl = $_POST['ctrAlumno'];

    $c_ingles = $_POST['ingles1'];
    $n_ingles = $_POST['nivel_ingles1'];
    $e_ingles = $_POST['ubicacion1'];
    if ($c_ingles == "NO") {
        $n_ingles = "";
        $e_ingles = "";
    }

    $credito_T = $_POST['tutoria1'];
    $credito_C = $_POST['cultural1'];
    $credito_D = $_POST['deportiva1'];
    $sumaCreditos = $_POST['suma_tcd1'];

    $nomCult = $_POST['actCultural'];
    if ($nomCult == "otra"){
        $nomCult = $_POST['otraCult'];
    }
    $nomDepor = $_POST['actDeportiva'];
    if ($nomDepor == "otra"){
        $nomDepor = $_POST['otraDepor'];
    }

    $asignatura1 = $_POST['materia1'];
    $asignatura2 = $_POST['materia2'];
    $asignatura3 = $_POST['materia3'];
    $asignatura4 = $_POST['materia4'];
    $asignatura5 = $_POST['materia5'];
    $asignatura6 = $_POST['materia6'];
    $asignatura7 = $_POST['materia7'];

    $calificacion1 = $_POST['calificacion1'];
    $calificacion2 = $_POST['calificacion2'];
    $calificacion3 = $_POST['calificacion3'];
    $calificacion4 = $_POST['calificacion4'];
    $calificacion5 = $_POST['calificacion5'];
    $calificacion6 = $_POST['calificacion6'];
    $calificacion7 = $_POST['calificacion7'];

    $beca = $_POST['beca'];
    $tipo_beca = $_POST['tipo_beca'];
    if ($beca == "NO") {
        $tipo_beca = "";
    }

    $rep_materia1 = $_POST['materiarep1'];
    $rep_materia2 = $_POST['materiarep2'];
    $rep_materia3 = $_POST['materiarep3'];
    $rep_materia4 = $_POST['materiarep4'];
    $rep_materia5 = $_POST['materiarep5'];
    $rep_materia6 = $_POST['materiarep6'];
    $rep_materia7 = $_POST['materiarep7'];

    $c_areaMedica = $_POST['folioAM'];
    $c_areaPsicologica = $_POST['folioAP'];
    $c_asesoriaPares = $_POST['folioAPar'];
    $c_tutoriaIndividual = $_POST['folioTInd'];
    $c_otraCanalizacion = $_POST['folioTInd'];

    $observaciones = $_POST['observaciones'];
    $nomTutor = $_POST['nombreTutor'];

    $g_trayectoria1 = "INSERT INTO trayectoria_sem1 VALUE ('$numControl','$c_ingles','$n_ingles','$e_ingles',
                                                           '$credito_T','$credito_C','$credito_D','$sumaCreditos',
                                                           '$nomCult','$nomDepor',
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
    $q_T1 = mysqli_query($connect, $g_trayectoria1);

    if (!$q_T1) {
        //printf("Errormessage: \n%s", mysqli_error($conectar));
        http_response_code(404);
        echo "\nERROR AL GUARDAR\n".$numControl;
    } else {
        echo "Trayectoria 1er Semestre\nde ".$numControl."\nGUARDADA EXITOSAMENTE";
    }
?>