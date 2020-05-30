<?php
error_reporting(0);
$connect = mysqli_connect("localhost", "root", "", "trayectoria_alumnos");

if (!$connect) {
    //header("Location: /ErrorPages/500/index.php");
    echo file_get_contents($_SERVER['DOCUMENT_ROOT'] . "/ErrorPages/500/index.html");
    exit;
}
