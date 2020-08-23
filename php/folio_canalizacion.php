<?php
/*
require "BD_Connect.php";
require "form_canalizacion.php";

$carrera = "X";

$consultaFolio = "SELECT * FROM canalizacion WHERE isic = '$carrera'";
$resulFolio = mysqli_query($connect, $consultaFolio);
$filaF = mysqli_num_rows($resulFolio);

//0320001 0320002

function zero_fill ($valor, $long = 0){
    return str_pad($valor, $long, '0', STR_PAD_LEFT);
}

echo "\nMuestra: "."03"."20".zero_fill($filaF, 3);

?>