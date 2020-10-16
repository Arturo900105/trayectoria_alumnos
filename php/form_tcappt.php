<?php
    require "BD_Connect.php";

    $numFicha = $_POST['num_fichaAlumno'];

    $numControl = $_POST['num_control'];
    $trabaja = $_POST['trabaja'];
    $opcionITSP = $_POST['opciones'];

    $exaniII = $_POST['exani'];
    $cosnet = $_POST['cosnet'];

    $hablanteP = $_POST['hablante_purepecha'];
    $discapacidad = $_POST['discapacidad'];

    $diagPsicologico = $_POST['diag_psico'];
    $diagMedico = $_POST['diag_medico'];

    $riesgoSalud = $_POST['riesgo_salud'];

    $e_Aprendizaje = $_POST['aprendizaje'];
    if (isset($e_Aprendizaje)){
        $e_Aprendizaje = implode(", ", $e_Aprendizaje).".";
    }

    $he_Organizacion = $_POST['habitosOE'];
    $he_Tecnicas = $_POST['habitosTE'];
    $he_Motivacion = $_POST['habitosME'];

    $o_Vocacional = $_POST['bloque'];
    if (isset($o_Vocacional)){
        $o_Vocacional = "Bloque: ".implode(", ", $o_Vocacional).".";
    }

    $e_Ortografica = $_POST['eval_ort'];
    $e_Redaccion = $_POST['eval_reda'];

    $n_curso1 = $_POST['nom_curso1'];
    $n_curso2 = $_POST['nom_curso2'];
    $n_curso3 = $_POST['nom_curso3'];

    $r_curso1 = $_POST['res_curso1'];
    $r_curso2 = $_POST['res_curso2'];
    $r_curso3 = $_POST['res_curso3'];

    $g_numControl = "INSERT INTO num_control_alumno VALUE ('$numControl','$numFicha')";
    $q_nControl = mysqli_query($connect, $g_numControl);

    if ($q_nControl){
        $g_CAPPT = "INSERT INTO trayectoria_cappt VALUE ('$numControl','$trabaja','$opcionITSP','$exaniII','$cosnet','$hablanteP',
                                                         '$discapacidad','$diagPsicologico','$diagMedico','$riesgoSalud',
                                                         '$e_Aprendizaje','$he_Organizacion','$he_Tecnicas','$he_Motivacion',
                                                         '$o_Vocacional','$e_Ortografica','$e_Redaccion',
                                                         '$n_curso1','$r_curso1','$n_curso2','$r_curso2','$n_curso3','$r_curso3')";
        $q_CAPPT = mysqli_query($connect, $g_CAPPT);

        echo "CARACTERIZACIÓN\nPOR PARTE DEL TUTOR\nGUARDADA EXITOSAMENTE";

    } else {
        //printf("Errormessage: \n%s", mysqli_error($conectar));
        http_response_code(404);
        echo "\n\nNO SE PUDO GUARDAR LA\nCARACTERIZACIÓN INTENTELO DE NUEVO";
    }
?>