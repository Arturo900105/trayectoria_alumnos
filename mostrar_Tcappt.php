<?php
require "php/BD_Connect.php";
session_name("TUTOR");
session_start();
$letSession = $_SESSION["usututor"];
$letCarrera = $_SESSION["carrera"];
$letidTutor = $_SESSION["idTutor"];
?>
<!doctype html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Tabla CAPPT</title>
    <link rel="stylesheet" href="css/estilos-lista_alumnos.css">

    <script src="js/jquery_3.4.1.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/sweetalert2@9.10.12/dist/sweetalert2.all.min.js"></script>
    <script src="https://cdn.jsdelivr.net/combine/npm/sweetalert2@9.10.12,npm/tablesorter@2.31.3"></script>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@sweetalert2/theme-dark@3/dark.css">
    <script src="https://cdn.jsdelivr.net/npm/sweetalert2@9/dist/sweetalert2.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/js-cookie@rc/dist/js.cookie.min.js"></script>

    <script src="js/ordenar_tabla.js"></script>
    <script src="js/alerta_tutor.js"></script>
</head>
<body>
    <h1>CARACTERIZACIÓN POR PARTE DEL TUTOR</h1>
    <table class="tabla_cappt">
        <thead>
            <tr>
                <th class="rth_cappt">MATRÍCULA</th>
                <th class="rth_cappt">ALUMNO</th>
                <th class="rth_cappt" title="Caracterización del Alumno por Parte del Tutor">CAPPT</th>
                <th class="rth_cappt" colspan="10">LLENAR TRAYECTORIAS</th>
                <th class="rth_cappt">CARRERA</th>
                <th class="rth_cappt">GENERACIÓN</th>
            </tr>
        </thead>
        <tbody>
            <?php
            $qAlumnoT = "SELECT tcappt.num_control,al.apellidos,al.nombre,al.carrera,al.generacion
                         FROM trayectoria_cappt tcappt
                             JOIN num_control_alumno crl
                                ON tcappt.num_control = crl.num_control
                            JOIN alumno al
                                ON crl.num_ficha = al.num_ficha
                            WHERE al.carrera = '$letCarrera'";
            $rAlumnoT = mysqli_query($connect, $qAlumnoT);
            while ($fAlumnoT = $rAlumnoT->fetch_assoc()){
            ?>
            <input type="hidden" id="numControl" value="<?php echo $fAlumnoT['num_control'] ?>">
            <tr>
                <td class="rtd_cappt"><?php echo $fAlumnoT['num_control'] ?></td>
                <td class="rtd_cappt" id="cappt_nombre"><?php echo $fAlumnoT['apellidos']." ".$fAlumnoT['nombre'] ?></td>
                <td class="rtd_cappt">
                    <a href="zt_cappt.php?matricula_alumno=<?php echo $fAlumnoT['num_control'] ?>"
                       target="_blank"
                       title="Abrir caracterización de <?php echo $fAlumnoT['nombre']." ".$fAlumnoT['apellidos'] ?>.">
                        <input type="button" value="C" class="boton_cappt">
                    </a>
                </td>

                <td class="rtd_cappt">
                    <input type="button" onclick="setTrayectoria(event, 't_semestre1', '<?php echo $fAlumnoT['num_control'] ?>')" value="1" class="boton_tsem" title="Registrar Trayectoria 1 de <?php echo $fAlumnoT['nombre']." ".$fAlumnoT['apellidos'] ?>.">
                    <a id="t_semestre1" href="t_semestre1.php?matricula_alumno=<?php echo $fAlumnoT['num_control'] ?>" target="_blank"></a>
                </td>

                <td class="rtd_cappt">
                    <input type="button" onclick="setTrayectoria(event, 't_semestre2', '<?php echo $fAlumnoT['num_control'] ?>')" value="2" class="boton_tsem" title="Registrar Trayectoria 2 de <?php echo $fAlumnoT['nombre']." ".$fAlumnoT['apellidos'] ?>.">
                    <a id="t_semestre2" href="t_semestre2.php?matricula_alumno=<?php echo $fAlumnoT['num_control'] ?>" target="_blank"></a>
                </td>

                <td class="rtd_cappt">
                    <input type="button" onclick="setTrayectoria(event, 't_semestre3', '<?php echo $fAlumnoT['num_control'] ?>')" value="3" class="boton_tsem" title="Registrar Trayectoria 3 de <?php echo $fAlumnoT['nombre']." ".$fAlumnoT['apellidos'] ?>.">
                    <a id="t_semestre3" href="t_semestre3.php?matricula_alumno=<?php echo $fAlumnoT['num_control'] ?>" target="_blank"></a>
                </td>

                <td class="rtd_cappt">
                    <input type="button" onclick="setTrayectoria(event, 't_semestre4', '<?php echo $fAlumnoT['num_control'] ?>')" value="4" class="boton_tsem" title="Registrar Trayectoria 4 de <?php echo $fAlumnoT['nombre']." ".$fAlumnoT['apellidos'] ?>.">
                    <a id="t_semestre4" href="t_semestre4.php?matricula_alumno=<?php echo $fAlumnoT['num_control'] ?>" target="_blank"></a>
                </td>

                <td class="rtd_cappt">
                    <input type="button" onclick="setTrayectoria(event, 't_semestre5', '<?php echo $fAlumnoT['num_control'] ?>')" value="5" class="boton_tsem" title="Registrar Trayectoria 5 de <?php echo $fAlumnoT['nombre']." ".$fAlumnoT['apellidos'] ?>.">
                    <a id="t_semestre5" href="t_semestre5.php?matricula_alumno=<?php echo $fAlumnoT['num_control'] ?>" target="_blank"></a>
                </td>

                <td class="rtd_cappt">
                    <input type="button" onclick="setTrayectoria(event, 't_semestre6', '<?php echo $fAlumnoT['num_control'] ?>')" value="6" class="boton_tsem" title="Registrar Trayectoria 6 de <?php echo $fAlumnoT['nombre']." ".$fAlumnoT['apellidos'] ?>.">
                    <a id="t_semestre6" href="t_semestre6.php?matricula_alumno=<?php echo $fAlumnoT['num_control'] ?>" target="_blank"></a>
                </td>

                <td class="rtd_cappt">
                    <input type="button" onclick="setTrayectoria(event, 't_semestre7', '<?php echo $fAlumnoT['num_control'] ?>')" value="7" class="boton_tsem" title="Registrar Trayectoria 7 de <?php echo $fAlumnoT['nombre']." ".$fAlumnoT['apellidos'] ?>.">
                    <a id="t_semestre7" href="t_semestre7.php?matricula_alumno=<?php echo $fAlumnoT['num_control'] ?>" target="_blank"></a>
                </td>

                <td class="rtd_cappt">
                    <input type="button" onclick="setTrayectoria(event, 't_semestre8', '<?php echo $fAlumnoT['num_control'] ?>')" value="8" class="boton_tsem" title="Registrar Trayectoria 8 de <?php echo $fAlumnoT['nombre']." ".$fAlumnoT['apellidos'] ?>.">
                    <a id="t_semestre8" href="t_semestre8.php?matricula_alumno=<?php echo $fAlumnoT['num_control'] ?>" target="_blank"></a>
                </td>

                <td class="rtd_cappt">
                    <input type="button" onclick="setTrayectoria(event, 't_semestre9', '<?php echo $fAlumnoT['num_control'] ?>')" value="9" class="boton_tsem" title="Registrar Trayectoria 9 de <?php echo $fAlumnoT['nombre']." ".$fAlumnoT['apellidos'] ?>.">
                    <a id="t_semestre9" href="t_semestre9.php?matricula_alumno=<?php echo $fAlumnoT['num_control'] ?>" target="_blank"></a>
                </td>

                <td class="rtd_cappt">
                    <input type="button" onclick="setTrayectoria(event, 't_titulacion', '<?php echo $fAlumnoT['num_control'] ?>')" value="T" class="boton_tsem" title="Registrar Titulación de <?php echo $fAlumnoT['nombre']." ".$fAlumnoT['apellidos'] ?>.">
                    <a id="t_titulacion" href="t_titulacion.php?matricula_alumno=<?php echo $fAlumnoT['num_control'] ?>" target="_blank"></a>
                </td>

                <td class="rtd_cappt"><?php echo $fAlumnoT['carrera'] ?></td>
                <td class="rtd_cappt"><?php echo $fAlumnoT['generacion'] ?></td>
            </tr>
        </tbody>
        <?php } ?>
    </table>
</body>
</html>
