<?php
    require "BD_Connect.php";
    session_name("COORDINADOR");
    session_start();
    session_destroy();
    echo "<script>history.go(-2);</script>";
?>