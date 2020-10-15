<?php
$Ficha = $_POST['ficha'];

    if(!empty($Ficha)) {
        comprobar($Ficha);
    }

function comprobar($F) {
    require "BD_Connect.php";

    $consulFicha = "SELECT num_ficha FROM alumno WHERE num_ficha = '$F'";
    $rFicha = mysqli_query($connect, $consulFicha);
    $filaFicha = mysqli_num_rows($rFicha);

    if($filaFicha == 0) {
        echo "Ficha disponible";
    } else {
        echo "La ficha ".$F."\nno está disponible";
    }
}
?>