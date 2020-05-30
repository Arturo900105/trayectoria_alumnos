<?php
$connect = mysqli_connect("localhost", "root", "", "trayectoria_alumnos");

if (!$connect) {
    echo "Error: No se pudo conectar a MySQL." . PHP_EOL;
    echo "errno de depuración: " . mysqli_connect_errno() . PHP_EOL;
    echo "error de depuración: " . mysqli_connect_error() . PHP_EOL;
    exit;
} else {
    echo "Success: Ya estas conectado" . PHP_EOL;
}

