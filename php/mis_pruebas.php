<?php
require "fecha_hora.php";

$saludo = "Hola Abraham!!! Hoy es";
$columna1 = "Fecha de registro:";
$columna2 = "Hora de registro:";
$indicaHora = "y son las";

$fechita = date('d-m-Y');

echo $saludo." ".$fechaHoy."; ".$indicaHora.": ".$horaHoy;
?>