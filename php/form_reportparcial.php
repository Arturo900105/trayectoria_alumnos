<?php
$connect = require "BD_Connect.php";

    $periodo = $_POST["periodo"];
    $reporte = $_POST["num_reporte"];
    $nomTutor = $_POST["nom_tutor"];
    $semGrupo = $_POST["semestre"].'° "'.$_POST["grupo"].'"';
    $Programa = $_POST["programa"];
    $numTA = $_POST["num_tutorado"];


    $asignatura1 = $_POST["materia1"];
    $numAsignatura1 = $_POST["materia_rep1"];
    $porAsignatura1 = $_POST["por_materia1"];

    $asignatura2 = $_POST["materia2"];
    $numAsignatura2 = $_POST["materia_rep2"];
    $porAsignatura2 = $_POST["por_materia2"];

    $asignatura3 = $_POST["materia3"];
    $numAsignatura3 = $_POST["materia_rep3"];
    $porAsignatura3 = $_POST["por_materia3"];

    $asignatura4 = $_POST["materia4"];
    $numAsignatura4 = $_POST["materia_rep4"];
    $porAsignatura4 = $_POST["por_materia4"];

    $asignatura5 = $_POST["materia5"];
    $numAsignatura5 = $_POST["materia_rep5"];
    $porAsignatura5 = $_POST["por_materia5"];

    $asignatura6 = $_POST["materia6"];
    $numAsignatura6 = $_POST["materia_rep6"];
    $porAsignatura6 = $_POST["por_materia6"];


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