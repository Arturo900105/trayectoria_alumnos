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
    <title>Tabla Psicología</title>
    <link rel="stylesheet" href="css/estilos-mostrar.css">

    <script src="js/jquery_3.4.1.js"></script>
    <script src="https://cdn.jsdelivr.net/combine/npm/sweetalert2@9.10.12,npm/tablesorter@2.31.3"></script>
    <script src="js/ordenar_tabla.js"></script>
</head>
<body>
    <h1>RESULTADOS DEL EXAMEN DE PSICOLOGÍA</h1>
    <table id="mostrarPsicologia">
        <thead>
            <tr>
                <th class="mth_mostrarPsicologia">Núm. de Ficha</th>
                <th class="mth_mostrarPsicologia">Nombre</th>
                <th class="mth_mostrarPsicologia">Respuesta 1</th>
                <th class="mth_mostrarPsicologia">Respuesta 2</th>
                <th class="mth_mostrarPsicologia">Ansiedad</th>
                <th class="mth_mostrarPsicologia">Depresión</th>
                <th class="mth_mostrarPsicologia">Ansiedad/Depresión</th>
                <th class="mth_mostrarPsicologia">Bloque 1</th>
                <th class="mth_mostrarPsicologia">Bloque 2</th>
                <th class="mth_mostrarPsicologia">Bloque 3</th>
                <th class="mth_mostrarPsicologia">Bloque 4</th>
                <th class="mth_mostrarPsicologia">Carrera</th>
                <th class="mth_mostrarPsicologia">Generación</th>
            </tr>
        </thead>
        <tbody>
        <?php
            $qPsicologia = "SELECT ps.*,al.nombre,al.apellidos,al.carrera,al.generacion
                                FROM tabla_psicologia ps
                                JOIN alumno al
                                ON ps.num_ficha = al.num_ficha";
            $rPsicologia = mysqli_query($connect, $qPsicologia);
            while ($fPsicologia = $rPsicologia->fetch_assoc()){
            ?>
            <tr>
                <td class="mtd_mostrarPsicologia"><?php echo $fPsicologia['num_ficha'] ?></td>
                <td class="mtd_mostrarPsicologia2"><?php echo $fPsicologia['nombre']." ".$fPsicologia['apellidos'] ?></td>
                <td class="mtd_mostrarPsicologia"><?php echo $fPsicologia['respuesta1'] ?></td>
                <td class="mtd_mostrarPsicologia"><?php echo $fPsicologia['respuesta2'] ?></td>
                <td class="mtd_mostrarPsicologia"><?php echo $fPsicologia['ansiedad'] ?></td>
                <td class="mtd_mostrarPsicologia"><?php echo $fPsicologia['depresion'] ?></td>
                <td class="mtd_mostrarPsicologia"><?php echo $fPsicologia['suma_ad'] ?></td>
                <td class="mtd_mostrarPsicologia"><?php echo $fPsicologia['bloque1'] ?></td>
                <td class="mtd_mostrarPsicologia"><?php echo $fPsicologia['bloque2'] ?></td>
                <td class="mtd_mostrarPsicologia"><?php echo $fPsicologia['bloque3'] ?></td>
                <td class="mtd_mostrarPsicologia"><?php echo $fPsicologia['bloque4'] ?></td>
                <td class="mtd_mostrarPsicologia"><?php echo $fPsicologia['carrera'] ?></td>
                <td class="mtd_mostrarPsicologia"><?php echo $fPsicologia['generacion'] ?></td>
            </tr>
            <?php } ?>
        </tbody>
    </table>
</body>
</html>
