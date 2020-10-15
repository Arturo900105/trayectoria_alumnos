<?php
require "BD_Connect.php";
require "fecha_hora.php";

    $ficha = $_POST['no_ficha'];
    //$ficha = "20-0011";

    $nombre = $_POST['nombre'];
    $apellidos = $_POST['apat'] . ' ' . $_POST['amat'];
    $fecha_nacimiento = $_POST['fnacimiento'];


    $sexo = $_POST['sexo'];
    $edo_civil = $_POST['estado_civil'];
    if ($sexo != "Masculino") {
        if ($edo_civil == "Casado") {
            $edo_civil = "Casada";
        } else {$edo_civil = "Soltera";}
    }

    $indigena = $_POST['indigena'];
    $edad = $_POST['edad'];
    $tel_cel = $_POST['tel-cel'];
    $email = $_POST['e-mail'];
    $fecha_ficha = $_POST['f_registro'];
    $carrera = $_POST['carrera'];
    $generacion = $_POST['generacion'];


    $num_casa = $_POST['numero'];
    $esq_dom = $_POST['dom_esquina'];
    $domicilio = $_POST['domicilio'] . ' #' .$num_casa."; Esq. ". $esq_dom;

    if ($num_casa == ""){
        $domicilio = $_POST['domicilio'] . " S/N";
    } elseif ($esq_dom == "") {
        $domicilio = $_POST['domicilio'] . ' #' . $num_casa;
    }

    if ($num_casa == "" && $esq_dom != "") {
        $domicilio = $_POST['domicilio'] . " S/N; Esq. " . $esq_dom;
    }

    $colonia = $_POST['colonia'];
    $localidad = $_POST['localidad'];
    $codigo_postal = $_POST['cod-post'];
    $estado = $_POST['estado'];
    $municipio = $_POST['municipio'];

    if ($localidad == ""){
        $localidad = $_POST['municipio'];
        if ($municipio == "-------"){
            $localidad = $_POST['nom_municipio'];
        }
    }

    if ($estado == "1"){
        $procedencia = $municipio . "; Mich.";
    } elseif ($estado == "2"){
        $procedencia = $_POST['nom_municipio']."; ".$_POST['nom_estado'];
    }

    $tipo_bach = $_POST['tipo_area'];
    if (isset($tipo_bach)){
        $tipo_bach = implode(", ", $tipo_bach).".";
    }

    $bach = $_POST['preparatoria'];
    if ($bach == "otro") {
        $bach = $_POST['otro_bach'];
    }

    $nom_bach = $_POST['nom_prepa'];
    $prom_bach = $_POST['prom_prepa'];

    $guardar_alumno = "INSERT INTO alumno VALUES ('$ficha','$fechaHoy','$apellidos','$nombre','$fecha_nacimiento','$sexo','$indigena','$edad','$edo_civil','$tel_cel','$email','$fecha_ficha','$carrera','$generacion',false)";
    $query = mysqli_query($connect, $guardar_alumno);

    if ($query) {
        $domicilio = "INSERT INTO alumno_domicilio VALUES ('$ficha','$domicilio','$colonia','$codigo_postal','$localidad','$procedencia')";
        $query2 = mysqli_query($connect, $domicilio);

        $procedencia = "INSERT INTO alumno_procedencia VALUES ('$ficha','$bach','$tipo_bach','$nom_bach','$prom_bach')";
        $query3 = mysqli_query($connect, $procedencia);

        echo "REGISTRO EXITOSO!!!";

    } else {
        //printf("Errormessage: \n%s", mysqli_error($conectar));
        http_response_code(404);
        echo "\n\nNO SE GUARDÓ SU REGISTRO!!!";
    }

?>
