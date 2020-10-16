<?php
require "php/BD_Connect.php";
$numFicha = $_GET["ficha_alumno"];
?>
<!doctype html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Tabla Médica 2</title>
    <link rel="stylesheet" href="css/estilos-mostrar.css">
</head>
<body>
    <?php
    $qMedica = "SELECT me.*,al.nombre,al.apellidos
                FROM tabla_medica me
                JOIN alumno al
                ON me.num_ficha = al.num_ficha
                WHERE me.num_ficha = '$numFicha'";
    $rMedica = mysqli_query($connect, $qMedica);
    while ($fMedica = $rMedica->fetch_assoc()){
    ?>
    <h1>Resultado Médico de: <?php echo $fMedica['nombre']." ".$fMedica['apellidos'] ?>.</h1>
    <form class="form_mostrarMedica2">
        <table id="mostrarMedica2">
            <tr>
                <th class="mth_mostrarMedica2">Antecedentes Heredofamiliares:</th>
                <td class="mtd_mostrarMedica2"><?php echo $fMedica['antes_hered'] ?></td>
            </tr>
            <tr>
                <th class="mth_mostrarMedica2">Toxicomanías:</th>
                <td class="mtd_mostrarMedica2"><?php echo $fMedica['toxicomanias'] ?></td>
            </tr>
            <tr>
                <th class="mth_mostrarMedica2">Tipo de Toxicomanías:</th>
                <td class="mtd_mostrarMedica2"><?php echo $fMedica['tipo_toxicomanias'] ?></td>
            </tr>
            <tr>
                <th class="mth_mostrarMedica2">Frecuencia de Toxicomanías:</th>
                <td class="mtd_mostrarMedica2"><?php echo $fMedica['frecuencia'] ?></td>
            </tr>
            <tr>
                <th class="mth_mostrarMedica2">Embarazo:</th>
                <td class="mtd_mostrarMedica2"><?php echo $fMedica['embarazo'] ?></td>
            </tr>
            <tr>
                <th class="mth_mostrarMedica2">Tiempo de Embarazo:</th>
                <td class="mtd_mostrarMedica2"><?php echo $fMedica['tiempo_embarazo'] ?></td>
            </tr>
            <tr>
                <th class="mth_mostrarMedica2">Actividad Fisica:</th>
                <td class="mtd_mostrarMedica2"><?php echo $fMedica['act_fisica'] ?></td>
            </tr>
            <tr>
                <th class="mth_mostrarMedica2">Tipo de Actividad:</th>
                <td class="mtd_mostrarMedica2"><?php echo $fMedica['actividad'] ?></td>
            </tr>
            <tr>
                <th class="mth_mostrarMedica2">Tiempo en Actividad:</th>
                <td class="mtd_mostrarMedica2"><?php echo $fMedica['tiempo'] ?></td>
            </tr>
            <tr>
                <th class="mth_mostrarMedica2">Alergias:</th>
                <td class="mtd_mostrarMedica2"><?php echo $fMedica['alergias'] ?></td>
            </tr>
            <tr>
                <th class="mth_mostrarMedica2">Alergia Especificada:</th>
                <td class="mtd_mostrarMedica2"><?php echo $fMedica['desc_alergias'] ?></td>
            </tr>
            <tr>
                <th class="mth_mostrarMedica2">Quirúrgicos/Cirugías:</th>
                <td class="mtd_mostrarMedica2"><?php echo $fMedica['quir_cir'] ?></td>
            </tr>
            <tr>
                <th class="mth_mostrarMedica2">Transfusionales:</th>
                <td class="mtd_mostrarMedica2"><?php echo $fMedica['transfusionales'] ?></td>
            </tr>
            <tr>
                <th class="mth_mostrarMedica2">Diabetes:</th>
                <td class="mtd_mostrarMedica2"><?php echo $fMedica['diabetes'] ?></td>
            </tr>
            <tr>
                <th class="mth_mostrarMedica2">Tipo de Diabetes:</th>
                <td class="mtd_mostrarMedica2"><?php echo $fMedica['tipo_diabetes'] ?></td>
            </tr>
            <tr>
                <th class="mth_mostrarMedica2">Hipertensión:</th>
                <td class="mtd_mostrarMedica2"><?php echo $fMedica['hipertencion'] ?></td>
            </tr>
            <tr>
                <th class="mth_mostrarMedica2">Convulsiones:</th>
                <td class="mtd_mostrarMedica2"><?php echo $fMedica['convulsiones'] ?></td>
            </tr>
            <tr>
                <th class="mth_mostrarMedica2">Asma:</th>
                <td class="mtd_mostrarMedica2"><?php echo $fMedica['asma'] ?></td>
            </tr>

            <?php } ?>
        </table>

        <div id="boton-Medica2">
            <button id="cerrar_Medica2" onclick="window.close();">CERRAR</button>
        </div>
    </form>

</body>
</html>
