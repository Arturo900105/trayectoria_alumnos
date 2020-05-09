<?php

require "conectar.php";

    $ficha = $_POST['no_ficha'];
    $nombre = $_POST['apat'] . ' ' . $_POST['amat'] . ' ' . $_POST['nombre'];
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
    $fecha_registro = $_POST['f_registro'];
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

    $tipo_bach = $_POST['preparatoria'];
    if ($tipo_bach == "otro") {
        $tipo_bach = $_POST['otro_tipo_prepa'];
    }

    $nom_bach = $_POST['nom_prepa'];
    $prom_bach = $_POST['prom_prepa'];
    $nom_secun = $_POST['nom_secun'];
    $prom_secun = $_POST['prom_secun'];

    $guardar_alumno = "INSERT INTO alumno VALUES ('$ficha','$nombre','$fecha_nacimiento','$sexo','$indigena','$edad','$edo_civil','$tel_cel','$email','$fecha_registro','$carrera','$generacion')";
    $query = mysqli_query($conectar, $guardar_alumno);

    if ($query) {
        $domicilio = "INSERT INTO domicilio VALUES ('$ficha','$domicilio','$colonia','$codigo_postal','$localidad','$procedencia')";
        $query2 = mysqli_query($conectar, $domicilio);

        $procedencia = "INSERT INTO procedencia VALUES ('$ficha','$tipo_bach','$nom_bach','$prom_bach','$nom_secun','$prom_secun')";
        $query3 = mysqli_query($conectar, $procedencia);


        //$pedagogia = "INSERT INTO pedagogia VALUES()";
        //$query4 = mysqli_query($conectar, $pedagogia);

        //$psicologia = "INSERT INTO psicologia VALUES()";
        //$query5 = mysqli_query($conectar, $psicologia);

        //$medica = "INSERT INTO medica VALUES()";
        //$query6 = mysqli_query($conectar, $medica);


        $ficha_control = "INSERT INTO control_trayectoria (num_ficha) VALUES ('$ficha')";
        $query7 = mysqli_query($conectar, $ficha_control);

        echo "REGISTRO EXITOSO!!!";

    } else {
        //printf("Errormessage: \n%s", mysqli_error($conectar));
        http_response_code(404);
        echo "\n\nNO SE GUARDÓ NADA!!!";

    }
?>
