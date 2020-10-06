<?php
    require "BD_Connect.php";
    session_name("TUTOR");
    session_start();
    //session_unset();
    session_destroy();
    //header("Location:../index.php");
    echo "<script>history.go(-2);</script>";
?>