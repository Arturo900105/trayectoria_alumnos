<?php
$Ficha = $_POST['ficha'];

    if(!empty($Ficha)) {
        comprobar($Ficha);
    }

function comprobar($fihcaE) {
    require "BD_Connect.php";

    $consulFicha = "SELECT num_ficha FROM alumno WHERE num_ficha = '".$fihcaE."'";
    $rFicha = mysqli_query($connect, $consulFicha);
    $filaFicha = mysqli_num_rows($rFicha);

    if($filaFicha == 0) {
        echo "Ficha disponible";
    } else {
        echo "La ficha ".$fihcaE."\nno está disponible";
    }
}
?>