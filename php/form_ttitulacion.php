<?php
    require "BD_Connect.php";

    $numControl = $_POST[''];
    $temaProyecto = $_POST['tema'];
    $inglesAcreditado = $_POST['ingles_acreditado'];
    $creditoCumplido = $_POST['creditos_cumplidos'];
    $fechaExamenP = $_POST['fecha_examen'];


    $g_trayectoriaT = "INSERT INTO trayectoria_titulacion VALUE ('$numControl',
                                                                 '$temaProyecto',
                                                                 '$inglesAcreditado',
                                                                 '$creditoCumplido',
                                                                 '$fechaExamenP')";
    $q_Titulacion = mysqli_query($connect, $g_trayectoriaT);

    if ($q_Titulacion) {
        echo "Trayectoria Titulación\nde ".$numControl."\nGUARDADA EXITOSAMENTE";
    } else {
        //printf("Errormessage: \n%s", mysqli_error($conectar));
        http_response_code(404);
        echo "\nERROR AL GUARDAR\n".$numControl;
    }

?>