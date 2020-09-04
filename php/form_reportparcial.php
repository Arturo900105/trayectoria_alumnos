<?php
    require "BD_Connect.php";

    ini_set('date.timezone', 'America/Mexico_City');
    setlocale(LC_TIME,"spanish");

    $fecha_realizado = utf8_decode(strftime("%A,%e de %B de %Y"));
    $hora_realizado = date("h:i a.");

    $periodo = $_POST["periodo"];
    $reporte = $_POST["num_reporte"];

    if ($reporte == "1") {
        $reporte1 = "1";
        $reporte2 = "-";
        $reporte3 = "-";
    } elseif ($reporte == "2") {
        $reporte1 = "-";
        $reporte2 = "2";
        $reporte3 = "-";
    } else {
        $reporte1 = "-";
        $reporte2 = "-";
        $reporte3 = "3";
    }

    $nomTutor = $_POST["nom_tutor"];
    $nomTutor = explode("_", $nomTutor);

    $semGrupo = $_POST["semestre"].'° "'.$_POST["grupo"].'"';
    $Programa = $_POST["programap"];
    $numTA = $_POST["num_tutoradop"];

    $asignatura1 = $_POST["materia1"];
    $numAsignatura1 = $_POST["materia_rep1"];
    if ($numAsignatura1 == "") {
        $porAsignatura1 = "";
    } else {
        $porAsignatura1 = $_POST["por_materia1"]."%";
    }

    $asignatura2 = $_POST["materia2"];
    $numAsignatura2 = $_POST["materia_rep2"];
    if ($numAsignatura2 == "") {
        $porAsignatura2 = "";
    } else {
        $porAsignatura2 = $_POST["por_materia2"]."%";
    }

    $asignatura3 = $_POST["materia3"];
    $numAsignatura3 = $_POST["materia_rep3"];
    if ($numAsignatura3 == "") {
        $porAsignatura3 = "";
    } else {
        $porAsignatura3 = $_POST["por_materia3"]."%";
    }

    $asignatura4 = $_POST["materia4"];
    $numAsignatura4 = $_POST["materia_rep4"];
    if ($numAsignatura4 == "") {
        $porAsignatura4 = "";
    } else {
        $porAsignatura4 = $_POST["por_materia4"]."%";
    }

    $asignatura5 = $_POST["materia5"];
    $numAsignatura5 = $_POST["materia_rep5"];
    if ($numAsignatura5 == "") {
        $porAsignatura5 = "";
    } else {
        $porAsignatura5 = $_POST["por_materia5"]."%";
    }

    $asignatura6 = $_POST["materia6"];
    $numAsignatura6 = $_POST["materia_rep6"];
    if ($numAsignatura6 == "") {
        $porAsignatura6 = "";
    } else {
        $porAsignatura6 = $_POST["por_materia6"]."%";
    }

    $reuniones = $_POST["reuniones"];
    $alumnoBecado = $_POST["num_becados"].", ".$_POST["becarios"];
    $alumnoDesertado = $_POST["desertados"];

    $numAsePar = $_POST["num_canalip1"];
    $numPsicologia = $_POST["num_canalip2"];
    $numMedica = $_POST["num_canalip3"];
    $numPedagogica = $_POST["num_canalip4"];

    $problematica = $_POST["problematica"];
    $necesidades = $_POST["necesidades"];
    $desertores = $_POST["desertores"];
    $recobser = $_POST["recobser"];

    $reportParcial = "INSERT INTO reporte_parcial(fecha,hora,periodo,
                                                  reporte1,reporte2,reporte3,
                                                  nom_tutor,semestre_grupo,programa,tutorado_asignado,
                                                  asignatura1,num_asignatura1,por_asignatura1,
                                                  asignatura2,num_asignatura2,por_asignatura2,
                                                  asignatura3,num_asignatura3,por_asignatura3,
                                                  asignatura4,num_asignatura4,por_asignatura4,
                                                  asignatura5,num_asignatura5,por_asignatura5,
                                                  asignatura6,num_asignatura6,por_asignatura6,
                                                  reuniones_efectuadas,alumnbecado,alumndesertado,
                                                  num_asepar,num_psicologia,num_medica,num_pedagogica,
                                                  problematica,necesidades,desertores,recomendacion_observacion)

                      VALUES ('$fecha_realizado','$hora_realizado','$periodo',
                              '$reporte1','$reporte2','$reporte3',
                              '$nomTutor[0]','$semGrupo','$Programa','$numTA',
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
        //printf("Errormessage: \n%s", mysqli_error($connect));
        http_response_code(404);
        echo "\n\nNO SE PUDO GUARDAR EL REPORTE PARCIAL!!!";
    } else {
        //echo "REPORTE PARCIAL\nGUARDADO EXITOSAMENTE!!!";
        echo mysqli_insert_id($connect);
    }

?>