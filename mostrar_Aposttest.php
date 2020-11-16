<?php
require "php/BD_Connect.php";
?>
<!doctype html>
<html lang="es">
<head>
    <META HTTP-EQUIV="REFRESH" CONTENT="10">
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Tabla Post-Test</title>
    <link rel="stylesheet" href="css/estilos-mostrar.css">

    <script src="js/jquery_3.4.1.js"></script>
    <script src="https://cdn.jsdelivr.net/combine/npm/sweetalert2@9.10.12,npm/tablesorter@2.31.3"></script>
    <script src="js/ordenar_tabla.js"></script>
</head>
<body>
    <h1>RESULTADOS DE LA ESCALA POST-TEST</h1>
    <table id="resultadoPostTest">
        <thead>
            <tr>
                <th class="mth_resultadoPostTest">Núm. de Control</th>
                <th class="mth_resultadoPostTest">Nombre</th>
                <th class="mth_resultadoPostTest">Semestre</th>
                <th class="mth_resultadoPostTest">Ansiedad</th>
                <th class="mth_resultadoPostTest">Depresión</th>
                <th class="mth_resultadoPostTest">Ansiedad/Depresión</th>
                <th class="mth_resultadoPostTest">Realizado</th>
                <th class="mth_resultadoPostTest">Hora</th>
                <th class="mth_resultadoPostTest">Carrera</th>
                <th class="mth_resultadoPostTest">Generación</th>
            </tr>
        </thead>
        <tbody>
        <?php
        $qPTest = "SELECT tpt.*, al.nombre, al.apellidos, al.carrera, al.generacion FROM tabla_posttest tpt
                   JOIN num_control_alumno ctr ON tpt.num_control = ctr.num_control
                   JOIN alumno al ON ctr.num_ficha = al.num_ficha
                   WHERE tpt.contestado = 1";
        $rPTest = mysqli_query($connect, $qPTest);
        while ($fPTest = $rPTest->fetch_assoc()){
        ?>
            <tr>
                <td class="mtd_resultadoPostTest"><?php echo $fPTest['num_control'] ?></td>
                <td class="mtd_resultadoPostTest"><?php echo $fPTest['apellidos']." ".$fPTest['nombre'] ?></td>
                <td class="mtd_resultadoPostTest"><?php echo $fPTest['semestre'] ?></td>
                <td class="mtd_resultadoPostTest"><?php echo $fPTest['ansiedad'] ?></td>
                <td class="mtd_resultadoPostTest"><?php echo $fPTest['depresion'] ?></td>
                <td class="mtd_resultadoPostTest"><?php echo $fPTest['suma_ad'] ?></td>
                <td class="mtd_resultadoPostTest"><?php echo $fPTest['fecha'] ?></td>
                <td class="mtd_resultadoPostTest"><?php echo $fPTest['hora'] ?></td>
                <td class="mtd_resultadoPostTest"><?php echo $fPTest['carrera'] ?></td>
                <td class="mtd_resultadoPostTest"><?php echo $fPTest['generacion'] ?></td>
            </tr>
            <?php } ?>
        </tbody>
    </table>
</body>
</html>