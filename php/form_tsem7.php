<?php
    require "BD_Connect.php";
    require "fecha_hora.php";

    $numControl = $_POST['ctrAlumno'];

    $c_ingles = $_POST['ingles_7'];
    $n_ingles = $_POST['nivel_ingles_7'];
    $e_ingles = $_POST['ubicacion_7'];
    if ($c_ingles == "NO") {
        $n_ingles = "";
        $e_ingles = "";
    }

    $credito_T = $_POST['tutoria_7'];
    $credito_C = $_POST['cultural_7'];
    $credito_D = $_POST['deportiva_7'];
    $credito_AC = $_POST['complementaria_7'];
    $sumaCreditos = $_POST['suma_tcdc_7'];

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

    $servSocial = $_POST['servSocial_7'];
    $lugarServSocial = $_POST['lugar_servsoc7'];
    if ($servSocial == "NO") {
        $lugarServSocial = "";
    }

    $asignatura1 = $_POST['materia1_7'];
    $asignatura2 = $_POST['materia2_7'];
    $asignatura3 = $_POST['materia3_7'];
    $asignatura4 = $_POST['materia4_7'];
    $asignatura5 = $_POST['materia5_7'];
    $asignatura6 = $_POST['materia6_7'];
    $asignatura7 = $_POST['materia7_7'];

    $calificacion1 = $_POST['calificacion1_7'];
    $calificacion2 = $_POST['calificacion2_7'];
    $calificacion3 = $_POST['calificacion3_7'];
    $calificacion4 = $_POST['calificacion4_7'];
    $calificacion5 = $_POST['calificacion5_7'];
    $calificacion6 = $_POST['calificacion6_7'];
    $calificacion7 = $_POST['calificacion7_7'];

    $beca = $_POST['beca_7'];
    $tipo_beca = $_POST['tipo_beca_7'];
    if ($beca == "NO") {
        $tipo_beca = "";
    }

    $rep_materia1 = $_POST['materiarep1_7'];
    $rep_materia2 = $_POST['materiarep2_7'];
    $rep_materia3 = $_POST['materiarep3_7'];
    $rep_materia4 = $_POST['materiarep4_7'];
    $rep_materia5 = $_POST['materiarep5_7'];
    $rep_materia6 = $_POST['materiarep6_7'];
    $rep_materia7 = $_POST['materiarep7_7'];

    $c_areaMedica = $_POST['folioAM_7'];
    $c_areaPsicologica = $_POST['folioAP_7'];
    $c_asesoriaPares = $_POST['folioAPar_7'];
    $c_tutoriaIndividual = $_POST['folioTInd_7'];
    $c_otraCanalizacion = $_POST['folioTInd_7'];

    $observaciones = $_POST['observaciones_7'];
    $nomTutor = $_POST['nombreTutor'];

    $g_trayectoria7 = "INSERT INTO trayectoria_sem7 VALUE ('$numControl','$c_ingles','$n_ingles','$e_ingles',
                                                           '$credito_T','$credito_C','$credito_D','$credito_AC','$sumaCreditos',
                                                           '$nomCult','$nomDepor','$nomComple',
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
                                                           '$observaciones','$nomTutor','$fechaHoy','$horaHoy',true)";
    $q_T7 = mysqli_query($connect, $g_trayectoria7);

    if (!$q_T7) {
        //printf("Errormessage: \n%s", mysqli_error($conectar));
        http_response_code(404);
        echo "\nERROR AL GUARDAR\n".$numControl;
    } else {
        echo "Trayectoria 7mo Semestre\nde ".$numControl."\nGUARDADA EXITOSAMENTE";
    }
?>