<?php
    require "BD_Connect.php";

    ini_set('date.timezone', 'America/Mexico_City');
    setlocale(LC_TIME,"spanish");

    $fecha_rfinal = utf8_decode(strftime("%A,%e de %B de %Y"));
    $hora_rfinal = date("h:i a.");

    $periodoFinal = $_POST["periodofinal"];

    $nomTutorF = $_POST["nom_tutorf"];
    $nomTutorF = explode("_", $nomTutorF);

    $semgrupFin = $_POST["semestref"].'° "'.$_POST["grupof"].'"';
    $programFin = $_POST["programaf"];
    $numTAf = $_POST["num_tutoradof"];

    $materiaf1 = $_POST["materiaf1"];
    $numMateriaf1 = $_POST["num_materiaf1"];
    if ($numMateriaf1 == "") {
        $porMateriaf1 = "";
    } else {
        $porMateriaf1 = $_POST["por_materiaf1"]."%";
    }

    $materiaf2 = $_POST["materiaf2"];
    $numMateriaf2 = $_POST["num_materiaf2"];
    if ($numMateriaf2 == "") {
        $porMateriaf2 = "";
    } else {
        $porMateriaf2 = $_POST["por_materiaf2"]."%";
    }

    $materiaf3 = $_POST["materiaf3"];
    $numMateriaf3 = $_POST["num_materiaf3"];
    if ($numMateriaf3 == "") {
        $porMateriaf3 = "";
    } else {
        $porMateriaf3 = $_POST["por_materiaf3"]."%";
    }

    $materiaf4 = $_POST["materiaf4"];
    $numMateriaf4 = $_POST["num_materiaf4"];
    if ($numMateriaf4 == "") {
        $porMateriaf4 = "";
    } else {
        $porMateriaf4 = $_POST["por_materiaf4"]."%";
    }

    $materiaf5 = $_POST["materiaf5"];
    $numMateriaf5 = $_POST["num_materiaf5"];
    if ($numMateriaf5 == "") {
        $porMateriaf5 = "";
    } else {
        $porMateriaf5 = $_POST["por_materiaf5"]."%";
    }

    $materiaf6 = $_POST["materiaf6"];
    $numMateriaf6 = $_POST["num_materiaf6"];
    if ($numMateriaf6 == "") {
        $porMateriaf6 = "";
    } else {
        $porMateriaf6 = $_POST["por_materiaf6"]."%";
    }

    $reunionesF = $_POST["reuniones"];
    $alumnoBecadoF = $_POST["num_becadof"].", ".$_POST["becariosf"];
    $alumnoDesertadoF = $_POST["desertados"];

    $numAseParF = $_POST["num_canalif1"];
    $numPsicologiaF = $_POST["num_canalif2"];
    $numMedicaF = $_POST["num_canalif3"];
    $numPedagogicaF = $_POST["num_canalif4"];

    $problematicaF = $_POST["problematicaf"];
    $necesidadesF = $_POST["necesidadesf"];
    $desertoresF = $_POST["desertoresf"];
    $recobserF = $_POST["rec_obsf"];

    $reportFinal= "INSERT INTO reporte_final(fecha_final,hora_final,periodo_final,
                                             nombre_tutor,sem_grupf,programa_final,tutf_asignado,
                                             asignatura_f1,reprobado_f1,por_reprobadof1,
                                             asignatura_f2,reprobado_f2,por_reprobadof2,
                                             asignatura_f3,reprobado_f3,por_reprobadof3,
                                             asignatura_f4,reprobado_f4,por_reprobadof4,
                                             asignatura_f5,reprobado_f5,por_reprobadof5,
                                             asignatura_f6,reprobado_f6,por_reprobadof6,
                                             reunion_efectuada,alumno_becado,alumno_desertado,
                                             num_aseparf,num_psicologiaf,num_medicaf,num_pedagogica,
                                             problematica,necesidades,desertados,recomobser)

                    VALUES ('$fecha_rfinal','$hora_rfinal','$periodoFinal',
                            '$nomTutorF[0]','$semgrupFin','$programFin','$numTAf',
                            '$materiaf1','$numMateriaf1','$porMateriaf1',
                            '$materiaf2','$numMateriaf2','$porMateriaf2',
                            '$materiaf3','$numMateriaf3','$porMateriaf3',
                            '$materiaf4','$numMateriaf4','$porMateriaf4',
                            '$materiaf5','$numMateriaf5','$porMateriaf5',
                            '$materiaf6','$numMateriaf6','$porMateriaf6',
                            '$reunionesF','$alumnoBecadoF','$alumnoDesertadoF',
                            '$numAseParF','$numPsicologiaF','$numMedicaF','$numPedagogicaF',
                            '$problematicaF','$necesidadesF','$desertoresF','$recobserF')";

    $qrfinal = mysqli_query($connect, $reportFinal);

    if (!$qrfinal){
        //printf("Errormessage: \n%s", mysqli_error($connect));
        http_response_code(404);
        echo "\n\nNO SE PUDO GUARDAR EL REPORTE FINAL!!!";
    } else {
        //echo "REPORTE FINAL\nGUARDADO EXITOSAMENTE!!!";
        echo mysqli_insert_id($connect);
    }

?>