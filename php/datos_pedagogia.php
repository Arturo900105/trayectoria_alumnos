<?php
    require "conectar.php";

    $fichaAlumno = $_POST['ficha_alumno'];

    $sumaVisual = $_POST['pregunta1'] + $_POST['pregunta3'] + $_POST['pregunta6'] +
                  $_POST['pregunta9'] + $_POST['pregunta10'] + $_POST['pregunta11'] + $_POST['pregunta14'];

    $sumaAuditiva = $_POST['pregunta2'] + $_POST['pregunta5'] + $_POST['pregunta12'] +
                    $_POST['pregunta15'] + $_POST['pregunta16'] + $_POST['pregunta18'] + $_POST['pregunta20'];

    $sumaKinestesica = $_POST['pregunta4'] + $_POST['pregunta7'] + $_POST['pregunta8'] +
                       $_POST['pregunta13'] + $_POST['pregunta17'] + $_POST['pregunta19'] + $_POST['pregunta21'];

    $sumatoria1 = $_POST['marcaXA1'] + $_POST['marcaXB1'] + $_POST['marcaXC1'] + $_POST['marcaXD1'] + $_POST['marcaXE1'] +
                  $_POST['marcaXF1'] + $_POST['marcaXG1'] + $_POST['marcaXH1'] + $_POST['marcaXI1'] + $_POST['marcaXJ1'] +
                  $_POST['marcaXK1'] + $_POST['marcaXL1'] + $_POST['marcaXM1'] + $_POST['marcaXN1'] + $_POST['marcaXO1'] +
                  $_POST['marcaXP1'] + $_POST['marcaXQ1'] + $_POST['marcaXR1'] + $_POST['marcaXS1'] + $_POST['marcaXT1'];

    $sumatoria2 = $_POST['marcaXA2'] + $_POST['marcaXB2'] + $_POST['marcaXC2'] + $_POST['marcaXD2'] + $_POST['marcaXE2'] +
                  $_POST['marcaXF2'] + $_POST['marcaXG2'] + $_POST['marcaXH2'] + $_POST['marcaXI2'] + $_POST['marcaXJ2'] +
                  $_POST['marcaXK2'] + $_POST['marcaXL2'] + $_POST['marcaXM2'] + $_POST['marcaXN2'] + $_POST['marcaXO2'] +
                  $_POST['marcaXP2'] + $_POST['marcaXQ2'] + $_POST['marcaXR2'] + $_POST['marcaXS2'] + $_POST['marcaXT2'];

    $sumatoria3 = $_POST['marcaXA3'] + $_POST['marcaXB3'] + $_POST['marcaXC3'] + $_POST['marcaXD3'] + $_POST['marcaXE3'] +
                  $_POST['marcaXF3'] + $_POST['marcaXG3'] + $_POST['marcaXH3'] + $_POST['marcaXI3'] + $_POST['marcaXJ3'] +
                  $_POST['marcaXK3'] + $_POST['marcaXL3'] + $_POST['marcaXM3'] + $_POST['marcaXN3'] + $_POST['marcaXO3'] +
                  $_POST['marcaXP3'] + $_POST['marcaXQ3'] + $_POST['marcaXR3'] + $_POST['marcaXS3'] + $_POST['marcaXT3'];

    $pregutas1 = "Pregutas1";
    $pregutas2 = "Pregutas2";
    $pregutas3 = "Pregutas3";

    $pedagogia = "INSERT INTO tabla_pedagogia VALUES ('$fichaAlumno','$sumaVisual','$sumaAuditiva','$sumaKinestesica','$sumatoria1','$sumatoria2','$sumatoria3','$pregutas1','$pregutas2','$pregutas3')";
    $q4 = mysqli_query($conectar, $pedagogia);

    if ($q4){
        echo "REGISTRO EXITOSO!!!";
    }
    else{
        printf("Errormessage: \n%s", mysqli_error($conectar));
        http_response_code(404);
        echo "\n\nNO SE GUARDÓ NADA!!!";
    }

?>