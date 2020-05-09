<?php

    require "conectar.php";

    $ficha = $_POST['no_ficha'];
    $nombre = $_POST['apat'+" "].$_POST['amat'+" "].$_POST['nombre'];
    $generacion = $_POST['generacion'];

    $guardar_alumno = "INSERT INTO alumno VALUES ('$ficha','$nombre','$generacion')";

    $query = mysqli_query($conectar, $guardar_alumno);

        if(!$query){
            printf("Errormessage: %s\n", mysqli_error($conectar));
            echo "<script>alert('ERROR!!!')</script>";
        }
        else{
            echo $query;
        }
?>