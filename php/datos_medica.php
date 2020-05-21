<?php
require "conectar.php";

    $fichaAlumno = $_POST['ficha_alumno'];

    $parte1 = "Peso: ".$_POST['peso']."kg.".
            "\nEstatura: ".$_POST['talla']."m.".
            "\nSangre: ".$_POST['sangre'].".";

    $parte2 = $_POST['ante_hered'];
    if (isset($parte2)){
        $parte2 = "─> ".implode(".\n─> ", $parte2).".";
    }

    $toxicomanias = $_POST['toxi'];
    if ($toxicomanias == "Sí"){
        $toxicomanias = "Toxicomanías: ".implode(", ", $_POST['toxicomanias'])."; Cada: ".$_POST['tox_frecuencia'].".";
    }else{
        $toxicomanias = "Toxicomanías: NO.";
    }

    $embarazo = $_POST['embarazo'];
    if ($embarazo == "Sí"){
        $embarazo = "Embarazo: lleva ".$_POST['tiempo_embarazo'].".";
    }else{
        $embarazo = "Embarazo: NO.";
    }

    $act_fisica = $_POST['act_fisica'];
    if ($act_fisica == "Sí"){
        $act_fisica = "Actividad Física: ".$_POST['esp_act']."; Tiempo: ".$_POST['tiempo_act'].".";
    }else{
        $act_fisica = "Actividad Física: NO.";
    }

    $parte3 = $toxicomanias."\n".$embarazo."\n".$act_fisica;

    $parte4 = $_POST[''];

    $emergencia = $_POST[''];

    $medica = "INSERT INTO tabla_medica VALUES ('$fichaAlumno','$parte1','$parte2','$parte3','$parte4','$emergencia')";
    $q6 = mysqli_query($conectar, $medica);

    if ($q6){
        echo "Datos Guardados Correctamente!!!";
    }
    else{
        //printf("Errormessage: \n%s", mysqli_error($conectar));
        http_response_code(404);
        echo "\n\nNO SE GUARDÓ NADA!!!";
    }

?>