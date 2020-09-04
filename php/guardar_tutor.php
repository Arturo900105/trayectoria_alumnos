<?php
require "BD_Connect.php";

    $registro = date('Y-m-d');
    $nombre = $_POST['nombre_tutor'];
    $apellido = $_POST['apepat_tutor']." ".$_POST['apemat_tutor'];
    $tutoria = $_POST['tipo_tutoria'];
    $area = $_POST['area_de'];
    $correo = $_POST['email'];
    $usuario = $_POST['usu_tutor'];
    $password = password_hash($_POST['pass_tutor'], PASSWORD_BCRYPT);

    $t_tutor = "INSERT INTO tutor (nombre,apellido,tipo_tutoria,area_de,email,fecha_registro,usuario,password) VALUES ('$nombre','$apellido','$tutoria','$area','$correo','$registro','$usuario','$password')";
    $qt = mysqli_query($connect, $t_tutor);

    if (!$qt){
        printf("Errormessage: \n%s", mysqli_error($connect));
        http_response_code(404);
        echo "\n\nNO SE PUDO GUARDAR SU REGISTRO!!!";
    } else {
        echo "SU REGISTRO HA SIDO EXITOSO!!!";
    }

?>