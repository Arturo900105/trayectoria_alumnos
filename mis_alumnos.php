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
    <title>Mis Alumnos</title>
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
    <h1>Mis Alumnos</h1>
    <table id="tabla_misAlumnos">
        <!---->
        <thead>
            <tr>

                <th class="th_misAlumnos">Núm. de Ficha</th>
                <th class="th_misAlumnos">Apellidos</th>
                <th class="th_misAlumnos">Nombre(s)</th>
                <th class="th_misAlumnos">Carrera</th>
                <th class="th_misAlumnos">Generación</th>
                <th class="th_misAlumnos" colspan="4">Caracterización Personalizada del Estudiante</th>
                <th class="th_misAlumnos">Núm de Control</th>
                <th class="th_misAlumnos">¿Eliminar de mis Alumnos?</th>
            </tr>
        </thead>

        <tbody>
            <?php
            $qmisAlumno = "SELECT * FROM alumno WHERE carrera = '$letCarrera' and id_tutor = '$letidTutor'";
            $rmisAlumno = mysqli_query($connect, $qmisAlumno);
            while ($fmisAlumno = $rmisAlumno->fetch_assoc()){
                ?>
                <input type="hidden" id="numFicha" value="<?php echo $fmisAlumno['num_ficha'] ?>">
                <tr>
                    <td class="td_misAlumnos" title="Fecha cuando sacó la Ficha: <?php echo $fmisAlumno['fecha_ficha'] ?>">
                        <?php echo $fmisAlumno['num_ficha'] ?></td>
                    <td class="td_misAlumnos2"><?php echo $fmisAlumno['apellidos'] ?></td>
                    <td class="td_misAlumnos2"><?php echo $fmisAlumno['nombre'] ?></td>
                    <td class="td_misAlumnos"><?php echo $fmisAlumno['carrera'] ?></td>
                    <td class="td_misAlumnos"><?php echo $fmisAlumno['generacion'] ?></td>

                    <td class="td_misAlumnos">
                        <a href="resultado_alumno.php?ficha_alumno=<?php echo $fmisAlumno['num_ficha'] ?>" target="_blank">
                            <input class="btn_alumno" type="button" value="DATOS" title="Datos de <?php echo $fmisAlumno['num_ficha'] ?>">
                        </a>
                    </td>

                    <td class="td_misAlumnos">
                        <a href="resultado_pedagogia.php?ficha_alumno=<?php echo $fmisAlumno['num_ficha'] ?>" target="_blank">
                            <input class="btn_alumno" type="button" value="PEDAGOGÍA" title="Examen Pedagógico de <?php echo $fmisAlumno['num_ficha'] ?>">
                        </a>
                    </td>

                    <td class="td_misAlumnos">
                        <a href="resultado_psicologia.php?ficha_alumno=<?php echo $fmisAlumno['num_ficha'] ?>" target="_blank">
                            <input class="btn_alumno" type="button" value="PSICOLOGÍA" title="Examen Psicológico de <?php echo $fmisAlumno['num_ficha'] ?>">
                        </a>
                    </td>

                    <td class="td_misAlumnos">
                        <a href="resultado_medico.php?ficha_alumno=<?php echo $fmisAlumno['num_ficha'] ?>" target="_blank">
                            <input class="btn_alumno" type="button" value="MÉDICO" title="Examen Médico de <?php echo $fmisAlumno['num_ficha'] ?>">
                        </a>
                    </td>



                    <td class="td_misAlumnos">
                        <input class="btn_alumno" onclick="setCAPPT(event, '<?php echo $fmisAlumno['num_ficha'] ?>')" type="button" value="MATRÍCULA" title="Agregar matrícula a <?php echo $fmisAlumno['num_ficha'] ?>">
                        <a id="acceso_cappt" target="_blank" href="t_cappt.php?ficha_alumno=<?php echo $fmisAlumno['num_ficha'] ?>"></a>
                    </td>



                    <td class="td_misAlumnos">
                        <button class="eliminar" onclick="eliminarAlumno('<?php echo $fmisAlumno['num_ficha'] ?>', 0);" title="Eliminar a <?php echo $fmisAlumno['num_ficha'] ?>">
                            ELIMINAR
                        </button>
                    </td>
                </tr>
            <?php } ?>
        </tbody>

    </table>
</body>
</html>