<?php
require "BD_Connect.php";
require "fecha_hora.php";

    $fechaHoy;
    $horaHoy;
    $nomina = $_POST['nominaTutor'];
    $nombre = $_POST['nombre_tutor'];
    $apellido = $_POST['apepat_tutor']." ".$_POST['apemat_tutor'];
    $tutoria = $_POST['tipo_tutoria'];
    $sexoTut = $_POST['sexoTut'];
    $area = $_POST['area_de'];
    $correo = $_POST['email'];
    $usuario = $_POST['usu_tutor'];
    $passnormal = $_POST['pass_tutor'];
    //$password = password_hash($passnormal, PASSWORD_BCRYPT);

    $t_tutor = "INSERT INTO tutor VALUES ('$nomina','$nombre','$apellido','$sexoTut',
                                          '$tutoria','$area','$correo',
                                          '$fechaHoy','$horaHoy',
                                          '$usuario','$passnormal')";
    $qt = mysqli_query($connect, $t_tutor);

    if (!$qt){
        //printf("Errormessage: \n%s", mysqli_error($connect));
        http_response_code(404);
        echo "\n\nNO SE PUDO GUARDAR SU REGISTRO!!!";
    } else {
        echo "SU REGISTRO HA SIDO EXITOSO!!!";
    }
?>