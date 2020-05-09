<?php
require "login-psicologia.php";
mysqli_free_result($resultado);
mysqli_close($conectar);
header("location:../caracterizacion.html");
exit();
?>