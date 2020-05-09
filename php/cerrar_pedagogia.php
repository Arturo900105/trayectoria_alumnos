<?php
    require "login-pedagogia.php";
    mysqli_free_result($resultado);
    mysqli_close($conectar);
    header("location:../caracterizacion.html");
    exit();
?>