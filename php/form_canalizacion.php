<?php
require "BD_Connect.php";
require "fecha_hora.php";

    function zero_fill ($valor, $long = 0) {
        return str_pad($valor, $long, '0', STR_PAD_LEFT);
    }

    $fecha = $_POST["fecha_hoy"];
    $nomAlumno = $_POST["nom_alumno"];

    $carrera = $_POST["carrera"];
    $carreraNombre = '';
    if ($carrera == "1"){
        $dig1 = "01";
        $igem = "X";
        $carreraNombre = 'igem';

    } else if ($carrera == "2"){
        $dig1 = "02";
        $iind = "X";
        $carreraNombre = 'iind';

    } else if ($carrera == "3"){
        $dig1 = "03";
        $isic = "X";
        $carreraNombre = 'isic';

    } else if ($carrera == "4"){
        $dig1 = "04";
        $ibio = "X";
        $carreraNombre = 'ibio';

    } else if ($carrera == "5"){
        $dig1 = "05";
        $iias = "X";
        $carreraNombre = 'iias';

    } else if ($carrera == "6"){
        $dig1 = "06";
        $ienr = "X";
        $carreraNombre = 'ienr';
    }

    else if ($carrera == "7"){
        $dig1 = "07";
        $ifor = "X";
        $carreraNombre = 'ifor';
    }

    else if ($carrera == "8"){
        $dig1 = "08";
        $iagr = "X";
        $carreraNombre = 'iagr';
    }

    $consultaFolio = "SELECT * FROM canalizacion WHERE $carreraNombre = 'X' and YEAR(STR_TO_DATE(fecha,'%d-%m-%Y')) = YEAR(NOW())";
    $resulFolio = mysqli_query($connect, $consultaFolio);
    $filaF = mysqli_num_rows($resulFolio);


    $dig2 = substr($fecha, -2);
    $dig3 = zero_fill(++$filaF, 3);

    $folio = $dig1.$dig2.$dig3;

    $numControl = $_POST["num_control"];
    $semestre = $_POST["semestre"];
    $cicloEscolar = $_POST["ciclo_escolar"];

    $canalizacion = $_POST["tipo_canalizacion"];
    if ($canalizacion == "Psicológica"){
        $psicologica = "X";
    } else if ($canalizacion == "Pedagógica"){
        $pedagogica = "X";
    } else if ($canalizacion == "Asesoría Académica"){
        $ases_acad = "X";
    } else if ($canalizacion == "Médica"){
        $medica = "X";
    } else if ($canalizacion == "otro"){
        $otraCanalizacion = $_POST["nombre_canalizacion"];
    }


    $descProblematica = $_POST["problematica"];

    $firmaTP = $_POST["firma_tutor-profesor"];
    $firmaCTPE = $_POST["firma_coor-tutoria"];
    $firmaEAC = $_POST["firma_encargado"];


    $t_canalizacion = "INSERT INTO canalizacion VALUES ('$folio','$fecha','$horaHoy','$nomAlumno',
                                                        '$igem','$iind','$isic','$ibio','$iias','$ienr','$ifor','$iagr',
                                                        '$numControl','$semestre','$cicloEscolar',
                                                        '$psicologica','$pedagogica','$ases_acad','$medica','$otraCanalizacion',
                                                        '$descProblematica','$firmaTP','$firmaCTPE','$firmaEAC')";
    $qtcanali = mysqli_query($connect, $t_canalizacion);

    if (!$qtcanali){
        //printf("Errormessage: \n%s", mysqli_error($conectar));
        http_response_code(404);
        echo "\n\nNO SE PUDO GUARDAR LA CANALIZACIÓN!!!";
    } else {
        //echo "CANALIZACIÓN GUARDADA EXITOSAMENTE!!!";
        echo $folio;
    }

?>