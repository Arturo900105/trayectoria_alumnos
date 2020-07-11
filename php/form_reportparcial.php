<?php
require "BD_Connect.php";

    $periodo = $_POST[""];
    $reporte = $_POST[""];
    $nomTutor = $_POST[""];
    $semGrupo = $_POST[""].'° "'.$_POST[""].'"';
    $Programa = $_POST[""];
    $numTA = $_POST[""];


    $asignatura1 = $_POST[""];
    $numAsignatura1 = $_POST[""];
    $porAsignatura1 = $_POST[""];

    $asignatura2 = $_POST[""];
    $numAsignatura2 = $_POST[""];
    $porAsignatura2 = $_POST[""];

    $asignatura3 = $_POST[""];
    $numAsignatura3 = $_POST[""];
    $porAsignatura3 = $_POST[""];

    $asignatura4 = $_POST[""];
    $numAsignatura4 = $_POST[""];
    $porAsignatura4 = $_POST[""];

    $asignatura5 = $_POST[""];
    $numAsignatura5 = $_POST[""];
    $porAsignatura5 = $_POST[""];

    $asignatura6 = $_POST[""];
    $numAsignatura6 = $_POST[""];
    $porAsignatura6 = $_POST[""];


    $reuniones = $_POST[""];
    $alumnoBecado = $_POST[""];
    $alumnoDesertado = $_POST[""];


    $numAsePar = $_POST[""];
    $numPsicologia = $_POST[""];
    $numMedica = $_POST[""];
    $numPedagogica = $_POST[""];


    $problematica = $_POST[""];
    $necesidades = $_POST[""];
    $desertores = $_POST[""];
    $recobser = $_POST[""];

    $reportParcial = "INSERT INTO reporte_parcial VALUES ('$periodo','$reporte','$nomTutor','$semGrupo','$Programa','$numTA',
                                                          '$asignatura1','$numAsignatura1','$porAsignatura1',
                                                          '$asignatura2','$numAsignatura2','$porAsignatura2',
                                                          '$asignatura3','$numAsignatura3','$porAsignatura3',
                                                          '$asignatura4','$numAsignatura4','$porAsignatura4',
                                                          '$asignatura5','$numAsignatura5','$porAsignatura5',
                                                          '$asignatura6','$numAsignatura6','$porAsignatura6',
                                                          '$reuniones','$alumnoBecado','$alumnoDesertado',
                                                          '$numAsePar','$numPsicologia','$numMedica','$numPedagogica',
                                                          '$problematica','$necesidades','$desertores','$recobser')";
    $qrparcial = mysqli_query($connect, $reportParcial);

    if (!$qrparcial){
        //printf("Errormessage: \n%s", mysqli_error($conectar));
        http_response_code(404);
        echo "\n\nNO SE PUDO GUARDAR EL REPORTE PARCIAL!!!";
    } else {
        echo "REPORTE PARCIAL\nGUARDADO EXITOSAMENTE!!!";
    }

?>