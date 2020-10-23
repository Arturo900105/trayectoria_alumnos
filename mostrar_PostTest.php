<?php
require "php/BD_Connect.php";
?>
<!doctype html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Alumnos a Escala Post-Test</title>
    <link rel="stylesheet" href="css/estilos-mostrar.css">
</head>
<body>
    <h1>ALUMNOS QUE DEBEN REALIZAR LA ESCALA POST-TEST</h1>
    <table id="mostrarPostTest">
        <thead>
            <tr>
                <th class="mth_mostrarPostTest">NÚM. DE CONTROL</th>
                <th class="mth_mostrarPostTest">NOMBRE DEL ALUMNO</th>
                <th class="mth_mostrarPostTest">SUMA DE ANSIEDAD/DEPRESIÓN</th>
                <th class="mth_mostrarPostTest">CARRERA</th>
                <th class="mth_mostrarPostTest">GENERACIÓN</th>
            </tr>
        </thead>
        <tbody>
        <?php
        $qPostTest = "SELECT cl.num_control, al.nombre, al.apellidos, al.carrera, al.generacion, psic.suma_ad
                        FROM num_control_alumno cl
                            JOIN alumno al
                                ON cl.num_ficha = al.num_ficha
                            JOIN tabla_psicologia psic
                                ON al.num_ficha = psic.num_ficha
                            WHERE psic.suma_ad > 10";
        $rPostTest = mysqli_query($connect, $qPostTest);
        while ($fPostTest = $rPostTest->fetch_assoc()){
        ?>
            <tr>
                <td class="mtd_mostrarPostTest"><?php echo $fPostTest['num_control'] ?></td>
                <td class="mtd_mostrarPostTest2"><?php echo $fPostTest['nombre']." ".$fPostTest['apellidos'] ?></td>
                <td class="mtd_mostrarPostTest"><?php echo $fPostTest['suma_ad'] ?></td>
                <td class="mtd_mostrarPostTest"><?php echo $fPostTest['carrera'] ?></td>
                <td class="mtd_mostrarPostTest"><?php echo $fPostTest['generacion'] ?></td>
            </tr>
        <?php } ?>
        </tbody>
    </table>
</body>
</html>
