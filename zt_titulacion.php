<?php
require "php/BD_Connect.php";
$numControl = $_GET["matricula_alumno"];
?>
<!doctype html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>P. Titulación de <?php echo $numControl?></title>
    <link rel="stylesheet" href="css/ztrayectoria_estilos.css">

    <script src="js/jquery_3.4.1.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/sweetalert2@9.10.12/dist/sweetalert2.all.min.js"></script>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@sweetalert2/theme-dark@3/dark.css">
    <script src="https://cdn.jsdelivr.net/npm/sweetalert2@9/dist/sweetalert2.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/js-cookie@rc/dist/js.cookie.min.js"></script>
    <script src="https://unpkg.com/ionicons@5.1.2/dist/ionicons.js"></script>
</head>
<body>
    <h1>Proceso Titulación de <?php echo $numControl?></h1>
    <table id="resultados_cappt">
        <?php
        $qTS = "SELECT tt.*, al.nombre, al.apellidos FROM trayectoria_titulacion tt
                   JOIN num_control_alumno ctl
                   ON tt.num_control = ctl.num_control
                   JOIN alumno al
                   ON ctl.num_ficha = al.num_ficha
                   WHERE tt.num_control = '$numControl'";
        $rTS = mysqli_query($connect, $qTS);
        while ($fTS = $rTS->fetch_assoc()){
            ?>
            <tr>
                <th class="th_rcappt">Nombre del Alumno:</th>
                <td class="td_rcappt"><?php echo $fTS['nombre']." ".$fTS['apellidos'] ?></td>
            </tr>
            <tr>
                <th class="th_rcappt">Tema del Proyecto:</th>
                <td class="td_rcappt"><?php echo $fTS['tema_proyecto'] ?></td>
            </tr>
            <tr>
                <th class="th_rcappt">Inglés Acreditado:</th>
                <td class="td_rcappt"><?php echo $fTS['ingles_acreditado'] ?></td>
            </tr>
            <tr>
                <th class="th_rcappt">Créditos Cumplidos:</th>
                <td class="td_rcappt"><?php echo $fTS['creditos_cumplidos'] ?></td>
            </tr>
            <tr>
                <th class="th_rcappt">Fecha de examen protocolario:</th>
                <td class="td_rcappt"><?php echo $fTS['examen_protocolario'] ?></td>
            </tr>
            <tr>
                <th class="th_rcappt">Tutor(a) de Proceso de Titulación:</th>
                <td class="td_rcappt"><?php echo $fTS['nombre_tutor'] ?></td>
            </tr>
            <tr>
                <th class="th_rcappt">Registro de Proceso de Titulación:</th>
                <td class="td_rcappt"><?php echo $fTS['fecha_registro'] ?></td>
            </tr>
            <tr>
                <th class="th_rcappt">Hora de Registro:</th>
                <td class="td_rcappt"><?php echo $fTS['hora_registro'] ?></td>
            </tr>
        <?php } ?>
    </table>
</body>
</html>