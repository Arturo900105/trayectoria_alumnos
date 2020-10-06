<?php
    require "BD_Connect.php";

    $jsonString = file_get_contents("php://input");
    $phpObject = json_decode($jsonString);

    $idAlumno = $phpObject->ids_alumno;;
    $idTutor = $phpObject->ids_tutor;

    $actAlumno = "UPDATE alumno SET id_tutor = '$idTutor' WHERE num_ficha = '$idAlumno'";
    $qAlumno = mysqli_query($connect, $actAlumno);

    if (!$qAlumno) {
        http_response_code(404);
        echo "No se pudo Agregar";
    } else {
        echo "Alumno agregado a su lista";
    }

?>