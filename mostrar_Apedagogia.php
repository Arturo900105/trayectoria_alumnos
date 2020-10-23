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
    <title>Tabla Pedagogía</title>
    <link rel="stylesheet" href="css/estilos-mostrar.css">

    <script src="js/jquery_3.4.1.js"></script>
    <script src="https://cdn.jsdelivr.net/combine/npm/sweetalert2@9.10.12,npm/tablesorter@2.31.3"></script>
    <script src="js/ordenar_tabla.js"></script>
</head>
<body>
    <h1>RESULTADOS DEL EXAMEN DE PEDAGOGÍA</h1>
    <table id="mostrarPedagogia">
        <thead>
            <tr>
                <th class="mth_mostrarPedagogia">Núm. de Ficha</th>
                <th class="mth_mostrarPedagogia">Nombre</th>
                <th class="mth_mostrarPedagogia">Aprendizaje Visual</th>
                <th class="mth_mostrarPedagogia">Aprendizaje Auditivo</th>
                <th class="mth_mostrarPedagogia">Aprendizaje Kinestésico</th>
                <th class="mth_mostrarPedagogia">Organización del Estudio</th>
                <th class="mth_mostrarPedagogia">Técnicas de Estudio</th>
                <th class="mth_mostrarPedagogia">Motivación para el Estudio</th>
                <th class="mth_mostrarPedagogia">Carrera</th>
                <th class="mth_mostrarPedagogia">Generación</th>
            </tr>
        </thead>
        <tbody>
            <?php
            $qPedagogia = "SELECT pd.*,al.nombre,al.apellidos,al.carrera,al.generacion
                            FROM tabla_pedagogia pd
                            JOIN alumno al
                            ON pd.num_ficha = al.num_ficha";
            $rPedagogia = mysqli_query($connect, $qPedagogia);
            while ($fPedagogia = $rPedagogia->fetch_assoc()){
            ?>
            <tr>
                <td class="mtd_mostrarPedagogia"><?php echo $fPedagogia['num_ficha'] ?></td>
                <td class="mtd_mostrarPedagogia2"><?php echo $fPedagogia['nombre']." ".$fPedagogia['apellidos'] ?></td>
                <td class="mtd_mostrarPedagogia"><?php echo $fPedagogia['aprendizaje_visual'] ?></td>
                <td class="mtd_mostrarPedagogia"><?php echo $fPedagogia['aprendizaje_auditivo'] ?></td>
                <td class="mtd_mostrarPedagogia"><?php echo $fPedagogia['aprendizaje_kinestesico'] ?></td>
                <td class="mtd_mostrarPedagogia"><?php echo $fPedagogia['organizacion_estudio'] ?></td>
                <td class="mtd_mostrarPedagogia"><?php echo $fPedagogia['tecnicas_estudio'] ?></td>
                <td class="mtd_mostrarPedagogia"><?php echo $fPedagogia['motivacion_estudio'] ?></td>
                <td class="mtd_mostrarPedagogia"><?php echo $fPedagogia['carrera'] ?></td>
                <td class="mtd_mostrarPedagogia"><?php echo $fPedagogia['generacion'] ?></td>
            </tr>
            <?php } ?>
        </tbody>
    </table>
</body>
</html>
