<?php
    require "BD_Connect.php";

    $examen = $_POST['Examen'];
    $alerta = "Ficha no encontrada!!!";

    $a_ficha = $_POST['login'];
    $consulta = "SELECT num_ficha,apellidos,nombre,sexo,carrera,generacion
                 FROM alumno
                 WHERE num_ficha = '$a_ficha'";
    $resultado = mysqli_query($connect, $consulta);
    $filas = mysqli_num_rows($resultado);

    if ($filas > 0){
        http_response_code(200);
        while($fila = $resultado->fetch_assoc()){
            switch ($examen) {
                case 'pedagogia.php':
                    $tablas = 'tabla_pedagogia';
                    break;
                case 'psicologia.php':
                    $tablas = 'tabla_psicologia';
                    break;
                case 'medica.php':
                    $tablas = 'tabla_medica';
                    break;
            }
            $qTest = "SELECT contestado FROM $tablas WHERE num_ficha = '$a_ficha'";
            $rTest = mysqli_query($connect, $qTest);
            $fTest = $rTest->fetch_assoc();
            if (!empty($fTest)) {
                if ($fTest['contestado'] == 1){
                    http_response_code(404);
                    switch ($examen) {
                        case 'pedagogia.php':
                            $nom_examen = 'de Pedagogía';
                        break;
                        case 'psicologia.php':
                            $nom_examen = 'de Psicologia';
                        break;
                        case 'medica.php':
                            $nom_examen = 'Médico';
                        break;
                    }
                    echo "Usted ya realizó el\nExamen ".$nom_examen;
                    return;
                }
            }
            session_name("ALUMNO");
            session_start();
            $_SESSION["usuAlumno"] = $a_ficha;
            session_start();
            echo json_encode($fila);
        }
    } else {
        http_response_code(404);
        echo ($alerta);
    }
?>