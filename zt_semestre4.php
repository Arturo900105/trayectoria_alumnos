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
    <title>Trayectoria 4 de <?php echo $numControl?></title>
    <link rel="stylesheet" href="css/ztrayectoria_estilos.css">

    <script src="js/jquery_3.4.1.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/sweetalert2@9.10.12/dist/sweetalert2.all.min.js"></script>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@sweetalert2/theme-dark@3/dark.css">
    <script src="https://cdn.jsdelivr.net/npm/sweetalert2@9/dist/sweetalert2.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/js-cookie@rc/dist/js.cookie.min.js"></script>
    <script src="https://unpkg.com/ionicons@5.1.2/dist/ionicons.js"></script>
</head>
<body>
    <h1>Trayectoria 4to Semestre de <?php echo $numControl?></h1>
    <table id="resultados_tsem">
        <?php
        $qTS = "SELECT tr.*, al.nombre, al.apellidos FROM trayectoria_sem4 tr
                   JOIN num_control_alumno ctl
                   ON tr.num_control = ctl.num_control
                   JOIN alumno al
                   ON ctl.num_ficha = al.num_ficha
                   WHERE tr.num_control = '$numControl'";
        $rTS = mysqli_query($connect, $qTS);
        while ($fTS = $rTS->fetch_assoc()){
            ?>
            <tr>
                <th class="th_rtsem">Nombre del Alumno:</th>
                <td class="td_rtsem"><?php echo $fTS['nombre']." ".$fTS['apellidos'] ?></td>
            </tr>
            <tr>
                <th class="th_rtsem">¿Se encuentra cursando el idioma Inglés?</th>
                <td class="td_rtsem"><?php echo $fTS['ingles'] ?></td>
            </tr>
            <tr>
                <th class="th_rtsem">¿Qué nivel?</th>
                <td class="td_rtsem"><?php echo $fTS['nivel_ingles'] ?></td>
            </tr>
            <tr>
                <th class="th_rtsem">¿Realizó examen de Ubicación?</th>
                <td class="td_rtsem"><?php echo $fTS['examen_ubicacion'] ?></td>
            </tr>
            <tr>
                <th class="th_rtsem">Crédito de Tutoría 1:</th>
                <td class="td_rtsem"><?php echo $fTS['credito_tutoria'] ?></td>
            </tr>
            <tr>
                <th class="th_rtsem">Crédito de AE. Cultural:</th>
                <td class="td_rtsem"><?php echo $fTS['credito_cultural'] ?></td>
            </tr>
            <tr>
                <th class="th_rtsem">Nombre de AE. Cultural:</th>
                <td class="td_rtsem"><?php echo $fTS['nombre_cultural'] ?></td>
            </tr>
            <tr>
                <th class="th_rtsem">Crédito de AE. Deportiva:</th>
                <td class="td_rtsem"><?php echo $fTS['credito_deportiva'] ?></td>
            </tr>
            <tr>
                <th class="th_rtsem">Nombre de AE. Deportiva:</th>
                <td class="td_rtsem"><?php echo $fTS['nombre_deportiva'] ?></td>
            </tr>
            <tr>
                <th class="th_rtsem">Crédito de Act. Complementaria:</th>
                <td class="td_rtsem"><?php echo $fTS['credito_actcom'] ?></td>
            </tr>
            <tr>
                <th class="th_rtsem">Nombre de Act. Complementaria:</th>
                <td class="td_rtsem"><?php echo $fTS['nombre_actcom'] ?></td>
            </tr>
            <tr>
                <th class="th_rtsem">Suma de Créditos:</th>
                <td class="td_rtsem"><?php echo $fTS['suma_creditos'] ?></td>
            </tr>
            <tr>
                <th class="th_rtsem">Asignaturas cursadas en el Semestre:</th>
                <td class="td_rtsem">
                    <?php echo $fTS['asignatura_1'].' <ion-icon name="arrow-forward-outline"></ion-icon> '.$fTS['calificacion_1'] ?><br>
                    <?php echo $fTS['asignatura_2'].' <ion-icon name="arrow-forward-outline"></ion-icon> '.$fTS['calificacion_2'] ?><br>
                    <?php echo $fTS['asignatura_3'].' <ion-icon name="arrow-forward-outline"></ion-icon> '.$fTS['calificacion_3'] ?><br>
                    <?php echo $fTS['asignatura_4'].' <ion-icon name="arrow-forward-outline"></ion-icon> '.$fTS['calificacion_4'] ?><br>
                    <?php echo $fTS['asignatura_5'].' <ion-icon name="arrow-forward-outline"></ion-icon> '.$fTS['calificacion_5'] ?><br>
                    <?php echo $fTS['asignatura_6'].' <ion-icon name="arrow-forward-outline"></ion-icon> '.$fTS['calificacion_6'] ?><br>
                    <?php echo $fTS['asignatura_7'].' <ion-icon name="arrow-forward-outline"></ion-icon> '.$fTS['calificacion_7'] ?>
                </td>
            </tr>
            <tr>
                <th class="th_rtsem">¿Se encuentra becado?</th>
                <td class="td_rtsem"><?php echo $fTS['beca'] ?></td>
            </tr>
            <tr>
                <th class="th_rtsem">Tpo de Beca:</th>
                <td class="td_rtsem"><?php echo $fTS['tipo_beca'] ?></td>
            </tr>
            <tr>
                <th class="th_rtsem">Materias a Recursar:</th>
                <td class="td_rtsem">
                    <?php echo $fTS['recursar_materia_1'] ?><br>
                    <?php echo $fTS['recursar_materia_2'] ?><br>
                    <?php echo $fTS['recursar_materia_3'] ?><br>
                    <?php echo $fTS['recursar_materia_4'] ?><br>
                    <?php echo $fTS['recursar_materia_5'] ?><br>
                    <?php echo $fTS['recursar_materia_6'] ?><br>
                    <?php echo $fTS['recursar_materia_7'] ?>
                </td>
            </tr>
            <tr>
                <th class="th_rtsem">Canalizaciones:</th>
                <td class="td_rtsem">
                    <?php echo "Área Medica: ".$fTS['area_medica'] ?><br>
                    <?php echo "Área Psicológica: ".$fTS['area_psicologica'] ?><br>
                    <?php echo "Asesoria Pares: ".$fTS['asesoria_pares'] ?><br>
                    <?php echo "Tutorias Individuales: ".$fTS['tutorias_individuales'] ?><br>
                    <?php echo "Otra Canalización: ".$fTS['otra_canalizacion'] ?>
                </td>
            </tr>
            <tr>
                <th class="th_rtsem">Observaciones Enero - Junio:</th>
                <td class="td_rtsem"><?php echo $fTS['observacion_ene_jun'] ?></td>
            </tr>
            <tr>
                <th class="th_rtsem">Tutor(a) que realizó Trayectoria:</th>
                <td class="td_rtsem"><?php echo $fTS['nombre_tutor'] ?></td>
            </tr>
            <tr>
                <th class="th_rtsem">Registro de Trayectoria 1:</th>
                <td class="td_rtsem"><?php echo $fTS['fecha_registro'] ?></td>
            </tr>
            <tr>
                <th class="th_rtsem">Hora de Registro:</th>
                <td class="td_rtsem"><?php echo $fTS['hora_registro'] ?></td>
            </tr>
        <?php } ?>
    </table>
</body>
</html>