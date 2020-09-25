<?php
require "conectar.php";

ini_set('date.timezone', 'America/Mexico_City');
setlocale(LC_TIME,"spanish");

$week_days = array ("Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado");
$week_day_now = date ("w");
$day_now = date ("j");

$months = array ("", "Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre");
$month_now = date ("n");

$fechaHoy = strftime($week_days[$week_day_now].", ".$day_now." de ".$months[$month_now]." de %Y");
$horaHoy = date("h:i a.");
?>