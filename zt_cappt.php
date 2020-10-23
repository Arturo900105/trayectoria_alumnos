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
    <title>CAPPT de <?php echo $numControl ?></title>
    <link rel="stylesheet" href="css/ztrayectoria_estilos.css">
</head>
<body>
    <h1>Caracterización por parte del Tutor de <?php echo $numControl ?></h1>
    <table id="resultados_cappt">
        <?php
        $qCAPPT = "SELECT cappt.*, al.nombre, al.apellidos FROM trayectoria_cappt cappt
                   JOIN num_control_alumno ctl
                   ON cappt.num_control = ctl.num_control
                   JOIN alumno al
                   ON ctl.num_ficha = al.num_ficha
                   WHERE cappt.num_control = '$numControl'";
        $rCAPPT = mysqli_query($connect, $qCAPPT);
        while ($fCAPPT = $rCAPPT->fetch_assoc()){
        ?>
        <tr>
            <th class="th_rcappt">Nombre del Alumno:</th>
            <td class="td_rcappt"><?php echo $fCAPPT['nombre']." ".$fCAPPT['apellidos'] ?></td>
        </tr>
        <tr>
            <th class="th_rcappt">¿Trabaja?</th>
            <td class="td_rcappt"><?php echo $fCAPPT['trabaja'] ?></td>
        </tr>
        <tr>
            <th class="th_rcappt">Consideró al ITSP como:</th>
            <td class="td_rcappt"><?php echo $fCAPPT['itsp_opcion'] ?></td>
        </tr>
        <tr>
            <th class="th_rcappt">Puntaje de EXANI-II:</th>
            <td class="td_rcappt"><?php echo $fCAPPT['exani_ii'] ?></td>
        </tr>
        <tr>
            <th class="th_rcappt">Puntaje de COSNET:</th>
            <td class="td_rcappt"><?php echo $fCAPPT['cosnet'] ?></td>
        </tr>
        <tr>
            <th class="th_rcappt">Hablante del P'urépecha:</th>
            <td class="td_rcappt"><?php echo $fCAPPT['hablante_pu'] ?></td>
        </tr>
        <tr>
            <th class="th_rcappt">Discapacidad:</th>
            <td class="td_rcappt"><?php echo $fCAPPT['discapacidad'] ?></td>
        </tr>
        <tr>
            <th class="th_rcappt">Diagnóstico Psicológico:</th>
            <td class="td_rcappt"><?php echo $fCAPPT['diag_psicologico'] ?></td>
        </tr>
        <tr>
            <th class="th_rcappt">Diagnóstico Médico:</th>
            <td class="td_rcappt"><?php echo $fCAPPT['diag_medico'] ?></td>
        </tr>
        <tr>
            <th class="th_rcappt">Tipos de riesgo a la salud:</th>
            <td class="td_rcappt"><?php echo $fCAPPT['riesgo_salud'] ?></td>
        </tr>
        <tr>
            <th class="th_rcappt">Estilos de Aprendizaje:</th>
            <td class="td_rcappt"><?php echo $fCAPPT['estilo_aprendizaje'] ?></td>
        </tr>
        <tr>
            <th class="th_rcappt">Organización del Estudio:</th>
            <td class="td_rcappt"><?php echo $fCAPPT['h_organizacion'] ?></td>
        </tr>
        <tr>
            <th class="th_rcappt">Técnicas de Estudio:</th>
            <td class="td_rcappt"><?php echo $fCAPPT['h_tecnicas'] ?></td>
        </tr>
        <tr>
            <th class="th_rcappt">Motivación para el Estudio:</th>
            <td class="td_rcappt"><?php echo $fCAPPT['h_motivacion'] ?></td>
        </tr>
        <tr>
            <th class="th_rcappt">Orientación Vocacional:</th>
            <td class="td_rcappt"><?php echo $fCAPPT['o_vocacional'] ?></td>
        </tr>
        <tr>
            <th class="th_rcappt">Evaluación de ortografía:</th>
            <td class="td_rcappt"><?php echo $fCAPPT['e_ortografia'] ?></td>
        </tr>
        <tr>
            <th class="th_rcappt">Evaluación de redacción:</th>
            <td class="td_rcappt"><?php echo $fCAPPT['e_redaccion'] ?></td>
        </tr>
        <tr>
            <th class="th_rcappt">Nombre del Curso 1:</th>
            <td class="td_rcappt"><?php echo $fCAPPT['nombre_curso_1'] ?></td>
        </tr>
        <tr>
            <th class="th_rcappt">Calificación del Curso 1:</th>
            <td class="td_rcappt"><?php echo $fCAPPT['resultado_1'] ?></td>
        </tr>
        <tr>
            <th class="th_rcappt">Nombre del Curso 2:</th>
            <td class="td_rcappt"><?php echo $fCAPPT['nombre_curso_2'] ?></td>
        </tr>
        <tr>
            <th class="th_rcappt">Calificación del Curso 2:</th>
            <td class="td_rcappt"><?php echo $fCAPPT['resultado_2'] ?></td>
        </tr>
        <tr>
            <th class="th_rcappt">Nombre del Curso 3:</th>
            <td class="td_rcappt"><?php echo $fCAPPT['nombre_curso_3'] ?></td>
        </tr>
        <tr>
            <th class="th_rcappt">Calificación del Curso 3:</th>
            <td class="td_rcappt"><?php echo $fCAPPT['resultado_3'] ?></td>
        </tr>
        <tr>
            <th class="th_rcappt">Tutor(a) que lo realizó:</th>
            <td class="td_rcappt"><?php echo $fCAPPT['nombre_tutor'] ?></td>
        </tr>
        <tr>
            <th class="th_rcappt">Registro de Caracterización:</th>
            <td class="td_rcappt"><?php echo $fCAPPT['fecha_registro'] ?></td>
        </tr>
        <tr>
            <th class="th_rcappt">Hora de Registro:</th>
            <td class="td_rcappt"><?php echo $fCAPPT['hora'] ?></td>
        </tr>
        <?php } ?>
    </table>
</body>
</html>