<?php
    require "conectar.php";

    $registro = date('Y-m-d');
    $nombre = $_POST['nombre_tutor'];
    $apellido = $_POST['apepat_tutor']." ".$_POST['apemat_tutor'];
    $tutoria = $_POST['tipo_tutoria'];
    $area = $_POST['area_de'];
    $correo = $_POST['email'];
    $usuario = $_POST['usu_tutor'];
    $password = password_hash($_POST['pass_tutor'], PASSWORD_BCRYPT);

    $t_tutor = "INSERT INTO tutor VALUES ('$usuario','$apellido','$nombre','$tutoria','$area','$correo','$registro','$password')";
    $qt = mysqli_query($conectar, $t_tutor);

    if (!$qt){
        //printf("Errormessage: \n%s", mysqli_error($conectar));
        http_response_code(404);
        echo "\n\nNO SE GUARDÓ NADA!!!";
    } else {
        echo "REGISTRO EXITOSO!!!";
    }

?>