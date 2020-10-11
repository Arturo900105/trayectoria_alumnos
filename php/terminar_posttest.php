<?php
    require "BD_Connect.php";
    session_name("POST-TEST");
    session_start();
    session_destroy();
    echo "<script>history.go(-2);</script>";
?>
