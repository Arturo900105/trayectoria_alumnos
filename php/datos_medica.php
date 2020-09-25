<?php
require "BD_Connect.php";

    $fichaAlumno = $_POST['ficha_alumno'];
    $peso = $_POST['peso']." kg.";
    $estatura = $_POST['talla']." m.";
    $tipo_sangre = $_POST['sangre'];

    $anteHeredofamiliar = $_POST['ante_hered'];
    if (isset($anteHeredofamiliar)){
        $anteHeredofamiliar = implode("\n", $anteHeredofamiliar);
    }

    $toxicomanias = $_POST['toxi'];
    $tipo_toxi = "";
    if (isset($_POST['toxicomanias'])){
        $tipo_toxi = implode("\n", $_POST['toxicomanias']);
    }
    $frecuencia = $_POST['tox_frecuencia'].".";

    if ($toxicomanias == "NO"){
        $tipo_toxi = "----------";
        $frecuencia = "----------";
    }

    $embarazo = $_POST['embarazo'];
    $tiempo_embarazo = $_POST['tiempo_embarazo'].".";
    if ($embarazo == "NO"){
        $tiempo_embarazo = "----------";
    } else {
        $tiempo_embarazo = "";
    }

    $act_fisica = $_POST['act_fisica'];
    $actividad = $_POST['esp_act'];
    $tiempo = $_POST['tiempo_act'].".";
    if ($act_fisica == "NO"){
        $actividad = "----------";
        $tiempo = "----------";
    }

    $alergia = $_POST['alergias'];
    $desc_alergias = $_POST['esp_alergia'].".";
    if ($alergia == "NO"){
        $desc_alergias = "----------";
    }

    $transfusionales = $_POST['transfusionales'];
    $quir_cir = $_POST['qui_cir'];
    $diabetes = $_POST['diabetes'];
    $tipo_diabetes = $_POST['diab_tipo'];
    if ($diabetes == "NO"){
        $tipo_diabetes = "----------";
    }

    $hipertencion = $_POST['hipertension'];
    $convulsiones = $_POST['convulsiones'];
    $asma = $_POST['asma'];

    $tel_obligatorio = $_POST['tel_obligatorio'];
    $tel_opcional = $_POST['tel_opcional'];

    $tels_emergencia = $tel_obligatorio."\n".$tel_opcional;
    if ($tel_opcional == ""){
        $tels_emergencia = $tel_obligatorio;
    }

    $medica = "INSERT INTO tabla_medica VALUES ('$fichaAlumno','$peso','$estatura','$tipo_sangre','$anteHeredofamiliar',
                                                '$toxicomanias','$tipo_toxi','$frecuencia','$embarazo','$tiempo_embarazo',
                                                '$act_fisica','$actividad','$tiempo','$alergia','$desc_alergias',
                                                '$quir_cir','$transfusionales','$diabetes','$tipo_diabetes',
                                                '$hipertencion','$convulsiones','$asma','$tels_emergencia')";
    $q6 = mysqli_query($connect, $medica);

    if ($q6){
        echo "HISTORIAL MÉDICO\nGUARDADO EXITOSAMENTE!!!";
    }
    else{
        printf("Errormessage: \n%s", mysqli_error($connect));
        http_response_code(404);
        echo "\n\nNO SE PUDO GUARDAR\nEL HISTORIAL MÉDICO";
    }

