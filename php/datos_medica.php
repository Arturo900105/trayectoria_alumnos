<?php
require "BD_Connect.php";

    $fichaAlumno = $_POST['ficha_alumno'];
    $peso = $_POST['peso']." kg.";
    $estatura = $_POST['talla']." m.";
    $tipo_sangre = $_POST['sangre'];

    $anteHeredofamiliar = "";
    if (isset($_POST['ante_hered'])){
        $anteHeredofamiliar = implode("\n", $_POST['ante_hered']);
        if ($anteHeredofamiliar == ""){
            $anteHeredofamiliar = "---------------";
        }
    }

    $toxicomanias = $_POST['toxi'];
    $tipo_toxi = "---------------";
    if (isset($_POST['toxicomanias'])){
        $tipo_toxi = implode("\n", $_POST['toxicomanias']);
    }
    $frecuencia = $_POST['tox_frecuencia'];

    if ($toxicomanias == "NO"){
        $frecuencia = "---------------";
    }

    $embarazo = "---------------";
    if ($embarazo == "SÍ"){
        $embarazo = "SÍ\n".$_POST['tiempo_embarazo'].".";
    }

    $act_fisica = $_POST['act_fisica'];
    $actividad = $_POST['esp_act'];
    $tiempo = $_POST['tiempo_act'];
    if ($act_fisica == "NO"){
        $actividad = "---------------";
        $tiempo = "---------------";
    }

    $alergia = $_POST['alergias'];
    if ($alergia == "SÍ"){
        $alergia = "SÍ:\n".$_POST['esp_alergia'].".";
    }

    $transfusionales = $_POST['transfusionales'];
    $quir_cir = $_POST['qui_cir'];
    $diabetes = $_POST['diabetes'];
    if ($diabetes == "SÍ"){
        $diabetes = "SÍ:\n".$_POST['diab_tipo'].".";
    }

    $hipertencion = $_POST['hipertension'];
    $convulsiones = $_POST['convulsiones'];
    $asma = $_POST['asma'];

    $tel_obligatorio = $_POST['tel_obligatorio'];
    $tel_opcional = $_POST['tel_opcional'];

    $tels_emergencia = $tel_obligatorio."\n".$tel_opcional;

    $medica = "INSERT INTO tabla_medica VALUES ('$fichaAlumno','$peso','$estatura','$tipo_sangre','$anteHeredofamiliar',
                                                '$toxicomanias','$tipo_toxi','$frecuencia','$embarazo','$act_fisica',
                                                '$actividad','$tiempo','$alergia','$quir_cir','$transfusionales',
                                                '$diabetes','$hipertencion','$convulsiones','$asma','$tels_emergencia')";
    $q6 = mysqli_query($connect, $medica);

    if ($q6){
        echo "Datos Guardados Correctamente!!!";
    }
    else{
        printf("Errormessage: \n%s", mysqli_error($connect));
        http_response_code(404);
        echo "\n\nNO SE GUARDÓ NADA!!!";
    }

