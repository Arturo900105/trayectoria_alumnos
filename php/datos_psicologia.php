<?php
    require "BD_Connect.php";

    $fichaAlumno = $_POST['ficha_alumno'];

    $resp1 = $_POST['respuesta1'];
    $cual = "";
    if ($resp1 == "SÍ"){
        $cual = $_POST['cual'];
    } else {
        $cual = "----------";
    }

    $resp2 = $_POST['respuesta2'];
    $porque = "";
    if ($resp2 == "SÍ"){
        $porque = $_POST['porque'];
    } else {
        $porque = "----------";
    }

    $a1 = $_POST['ep_a1'];
    $a2 = $_POST['ep_a2'];
    $a3 = $_POST['ep_a3'];
    $a4 = $_POST['ep_a4'];
    $a5 = $_POST['ep_a5'];
    $a6 = $_POST['ep_a6'];
    $a7 = $_POST['ep_a7'];

    $d1 = $_POST['ep_d1'];
    $d2 = $_POST['ep_d2'];
    $d3 = $_POST['ep_d3'];
    $d4 = $_POST['ep_d4'];
    $d5 = $_POST['ep_d5'];
    $d6 = $_POST['ep_d6'];
    $d7 = $_POST['ep_d7'];

    $ansiedad = $a1 + $a2 + $a3 + $a4 + $a5 + $a6 + $a7;
    $depresion = $d1 + $d2 + $d3 + $d4 + $d5 + $d6 + $d7;

    $suma_ad = $ansiedad + $depresion;

    $b1 = $_POST['bloque1_01'] + $_POST['bloque1_02'] + $_POST['bloque1_03'] + $_POST['bloque1_04'] + $_POST['bloque1_05'] +
          $_POST['bloque1_06'] + $_POST['bloque1_07'] + $_POST['bloque1_08'] + $_POST['bloque1_09'] + $_POST['bloque1_10'];

    $b2 = $_POST['bloque2_11'] + $_POST['bloque2_12'] + $_POST['bloque2_13'] + $_POST['bloque2_14'] + $_POST['bloque2_15'] +
          $_POST['bloque2_16'] + $_POST['bloque2_17'] + $_POST['bloque2_18'] + $_POST['bloque2_19'] + $_POST['bloque2_20'];

    $b3 = $_POST['bloque3_21'] + $_POST['bloque3_22'] + $_POST['bloque3_23'] + $_POST['bloque3_24'] + $_POST['bloque3_25'] +
          $_POST['bloque3_26'] + $_POST['bloque3_27'] + $_POST['bloque3_28'] + $_POST['bloque3_29'] + $_POST['bloque3_30'];

    $b4 = $_POST['bloque4_31'] + $_POST['bloque4_32'] + $_POST['bloque4_33'] + $_POST['bloque4_34'] + $_POST['bloque4_35'] +
          $_POST['bloque4_36'] + $_POST['bloque4_37'] + $_POST['bloque4_38'] + $_POST['bloque4_39'] + $_POST['bloque4_40'];

    $pb1 = $_POST['bloque1v_bd'];
    $pb2 = $_POST['bloque2v_bd'];
    $pb3 = $_POST['bloque3v_bd'];
    $pb4 = $_POST['bloque4v_bd'];

    $psicologia = "INSERT INTO tabla_psicologia VALUES ('$fichaAlumno','$resp1','$cual','$resp2','$porque',
                                                        '$a1','$a2','$a3','$a4','$a5','$a6','$a7',
                                                        '$d1','$d2','$d3','$d4','$d5','$d6','$d7',
                                                        '$ansiedad','$depresion','$suma_ad',
                                                        '$b1','$b2','$b3','$b4',
                                                        '$pb1','$pb2','$pb3','$pb4',true)";
    $q5 = mysqli_query($connect, $psicologia);

    if ($q5){
        echo "EXAMEN PSICOLÓGICO\nGUARDADO EXITOSAMENTE!!!";
    }
    else{
        //printf("Errormessage: \n%s", mysqli_error($connect));
        http_response_code(404);
        echo "\n\nNO SE PUDO GUARDAR\nEL EXAMEN PSICOLÓGICO";
    }

?>