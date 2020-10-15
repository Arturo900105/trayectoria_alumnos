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
    <title>Alumnos ITSP</title>
    <link rel="stylesheet" href="css/estilos-mostrar.css">
</head>
<body>
    <h1>ALUMNOS DEL ITSP</h1>

    <table id="mostrarAlumnos">
        <thead>
            <tr>
                <th class="mth_mostrarAlumnos">Núm. de Ficha</th>
                <th class="mth_mostrarAlumnos">Nombre</th>
                <th class="mth_mostrarAlumnos">Appelidos</th>
                <th class="mth_mostrarAlumnos">Fecha de nacimiento</th>
                <th class="mth_mostrarAlumnos">Sexo</th>
                <th class="mth_mostrarAlumnos">Indígena</th>
                <th class="mth_mostrarAlumnos">Edad</th>
                <th class="mth_mostrarAlumnos">Estado Civil</th>
                <th class="mth_mostrarAlumnos">Teléfono/Celular</th>
                <th class="mth_mostrarAlumnos">Email</th>
                <th class="mth_mostrarAlumnos">Obtuvo ficha</th>
                <th class="mth_mostrarAlumnos">Carrera</th>
                <th class="mth_mostrarAlumnos">Generación</th>
            </tr>
        </thead>
        <tbody>
            <?php
            $consultaA = "SELECT * FROM alumno";
            $resultadoA = mysqli_query($connect, $consultaA);
            while ($filaA = $resultadoA->fetch_assoc()){
            ?>
            <tr>
                <td class="mtd_mostrarAlumnos" title="Fecha de registro: <?php echo $filaA['fecha_registro'] ?>">
                    <?php echo $filaA['num_ficha'] ?>
                </td>
                <td class="mtd_mostrarAlumnos"><?php echo $filaA['nombre'] ?></td>
                <td class="mtd_mostrarAlumnos"><?php echo $filaA['apellidos'] ?></td>
                <td class="mtd_mostrarAlumnos"><?php echo $filaA['fecha_de_nacimiento'] ?></td>
                <td class="mtd_mostrarAlumnos"><?php echo $filaA['sexo'] ?></td>
                <td class="mtd_mostrarAlumnos"><?php echo $filaA['indigena'] ?></td>
                <td class="mtd_mostrarAlumnos"><?php echo $filaA['edad'] ?></td>
                <td class="mtd_mostrarAlumnos"><?php echo $filaA['edo_civil'] ?></td>
                <td class="mtd_mostrarAlumnos"><?php echo $filaA['tel_cel'] ?></td>
                <td class="mtd_mostrarAlumnos"><?php echo $filaA['email'] ?></td>
                <td class="mtd_mostrarAlumnos"><?php echo $filaA['fecha_ficha'] ?></td>
                <td class="mtd_mostrarAlumnos"><?php echo $filaA['carrera'] ?></td>
                <td class="mtd_mostrarAlumnos"><?php echo $filaA['generacion'] ?></td>
            </tr>
            <?php } ?>
        </tbody>

    </table>

</body>
</html>
