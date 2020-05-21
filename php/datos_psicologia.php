<?php
    require "conectar.php";

    $fichaAlumno = $_POST[''];
    $resp1 = $_POST['respuesta1'];
    $cual = $_POST['cual'];
    $resp2 = $_POST['respuesta2'];
    $porque = $_POST['porque'];

    $a = $_POST['ep_a1'] + $_POST['ep_a2'] + $_POST['ep_a3'] + $_POST['ep_a4'] + $_POST['ep_a5'] + $_POST['ep_a6'] + $_POST['ep_a7'];
    $d = $_POST['ep_d1'] + $_POST['ep_d2'] + $_POST['ep_d3'] + $_POST['ep_d4'] + $_POST['ep_d5'] + $_POST['ep_d6'] + $_POST['ep_d7'];

    $b1 = $_POST['bloque1_1'] + $_POST['bloque1_2'] + $_POST['bloque1_3'] + $_POST['bloque1_4'] + $_POST['bloque1_5'] +
          $_POST['bloque1_6'] + $_POST['bloque1_7'] + $_POST['bloque1_8'] + $_POST['bloque1_9'] + $_POST['bloque1_10'];

    $b2 = $_POST['bloque2_11'] + $_POST['bloque2_12'] + $_POST['bloque2_13'] + $_POST['bloque2_14'] + $_POST['bloque2_15'] +
          $_POST['bloque2_16'] + $_POST['bloque2_17'] + $_POST['bloque2_18'] + $_POST['bloque2_19'] + $_POST['bloque2_20'];

    $b3 = $_POST['bloque3_21'] + $_POST['bloque3_22'] + $_POST['bloque3_23'] + $_POST['bloque3_24'] + $_POST['bloque3_25'] +
          $_POST['bloque3_26'] + $_POST['bloque3_27'] + $_POST['bloque3_28'] + $_POST['bloque3_29'] + $_POST['bloque3_30'];

    $b4 = $_POST['bloque4_31'] + $_POST['bloque4_32'] + $_POST['bloque4_33'] + $_POST['bloque4_34'] + $_POST['bloque4_35'] +
          $_POST['bloque4_36'] + $_POST['bloque4_37'] + $_POST['bloque4_38'] + $_POST['bloque4_39'] + $_POST['bloque4_40'];

    $pb1 = 'Bloque1';
    $pb2 = 'Bloque2';
    $pb3 = 'Bloque3';
    $pb4 = 'Bloque4';

    $psicologia = "INSERT INTO tabla_psicologia VALUES ('$fichaAlumno','$resp1','$cual','$resp2','$porque','$a','$d','$b1','$b2','$b3','$b4','$pb1','$pb2','$pb3','$pb4')";
    $q5 = mysqli_query($conectar, $psicologia);

    if ($q5){
        echo "REGISTRO EXITOSO!!!";
    }
    else{
        //printf("Errormessage: \n%s", mysqli_error($conectar));
        http_response_code(404);
        echo "\n\nNO SE GUARDÓ NADA!!!";
    }

?>