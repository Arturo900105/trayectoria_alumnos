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
    <title>E. Pedagógico de <?php echo $numFicha ?></title>
    <link rel="stylesheet" href="css/estilos-resultados.css">
</head>
<body>
    <h1>Examen Pedagógico de <?php echo $numFicha ?></h1>
    <form class="tablas_ppm">
        <?php
        $Qtabla_Pedagogia = "SELECT tp.*,al.nombre,al.apellidos,al.carrera,al.generacion
                                FROM tabla_pedagogia tp
                                JOIN alumno al
                                ON al.num_ficha = tp.num_ficha
                                WHERE tp.num_ficha = '$numFicha'";
        $Rtabla_Pedagogia = mysqli_query($connect, $Qtabla_Pedagogia);
        while ($ftPedagogia = $Rtabla_Pedagogia->fetch_assoc()){
            if ($ftPedagogia['carrera'] == "IGEM") {
                $ftPedagogia['carrera'] = "Ingeniería en Gestión Empresarial";
            } elseif ($ftPedagogia['carrera'] == "IIND") {
                $ftPedagogia['carrera'] = "Ingeniería Industrial";
            } elseif ($ftPedagogia['carrera'] == "ISIC") {
                $ftPedagogia['carrera'] = "Ingeniería en Sistemas Computacionales";
            } elseif ($ftPedagogia['carrera'] == "IBIO") {
                $ftPedagogia['carrera'] = "Ingeniería Biomédica";
            } elseif ($ftPedagogia['carrera'] == "IIAS") {
                $ftPedagogia['carrera'] = "Ingeniería en Innovación Agrícola Sustentable";
            } elseif ($ftPedagogia['carrera'] == "IENR") {
                $ftPedagogia['carrera'] = "Ingeniería en Energías Renovables";
            } elseif ($ftPedagogia['carrera'] == "IFOR") {
                $ftPedagogia['carrera'] = "Ingeniería Forestal";
            } elseif ($ftPedagogia['carrera'] == "IAGR") {
                $ftPedagogia['carrera'] = "Ingeniería en Agronomía";
            }
        ?>

        <h2>Nombre: <?php echo $ftPedagogia['nombre']." ".$ftPedagogia['apellidos'] ?></h2>
        <h2>Carrera: <?php echo $ftPedagogia['carrera'] ?></h2>
        <h2>Generación: <?php echo $ftPedagogia['generacion'] ?></h2>
        <br>

        <table id="resultados_pedagogia">
            <tr>
                <th class="rth_pedagogia">Suma de Aprendizaje Visual:</th>
                <td class="rtd_pedagogia"><?php echo $ftPedagogia['aprendizaje_visual'] ?></td>
            </tr>
            <tr>
                <th class="rth_pedagogia">Suma de Aprendizaje Auditivo:</th>
                <td class="rtd_pedagogia"><?php echo $ftPedagogia['aprendizaje_auditivo'] ?></td>
            </tr>
            <tr>
                <th class="rth_pedagogia">Suma de Aprendizaje Kinestésico:</th>
                <td class="rtd_pedagogia"><?php echo $ftPedagogia['aprendizaje_kinestesico'] ?></td>
            </tr>
            <tr>
                <th class="rth_pedagogia">Preguntas validadas con "No" en Organización del Estudio:</th>
                <td class="rtd_pedagogia"><?php echo $ftPedagogia['preguntas_oe'] ?></td>
            </tr>
            <tr>
                <th class="rth_pedagogia">Total de Organización del Estudio:</th>
                <td class="rtd_pedagogia"><?php echo $ftPedagogia['organizacion_estudio'] ?></td>
            </tr>
            <tr>
                <th class="rth_pedagogia">Preguntas validadas con "No" en Técnicas de Estudio:</th>
                <td class="rtd_pedagogia"><?php echo $ftPedagogia['preguntas_te'] ?></td>
            </tr>
            <tr>
                <th class="rth_pedagogia">Total de Técnicas de Estudio:</th>
                <td class="rtd_pedagogia"><?php echo $ftPedagogia['tecnicas_estudio'] ?></td>
            </tr>
            <tr>
                <th class="rth_pedagogia">Preguntas validadas con "No" en Motivación para el Estudio:</th>
                <td class="rtd_pedagogia"><?php echo $ftPedagogia['preguntas_me'] ?></td>
            </tr>
            <tr>
                <th class="rth_pedagogia">Total de Motivación para el Estudio:</th>
                <td class="rtd_pedagogia"><?php echo $ftPedagogia['motivacion_estudio'] ?></td>
            </tr>
        </table>
        <?php } ?>
        <br>

        <div id="boton-pedagogia">
            <button id="cerrar_rpedagogia" onclick="window.close();">CERRAR</button>
        </div>
    </form>
</body>
</html>
