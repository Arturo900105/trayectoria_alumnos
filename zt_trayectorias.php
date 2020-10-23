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
    <title>Trayectorias</title>
    <link rel="stylesheet" href="css/ztrayectoria_estilos.css">

    <script src="js/jquery_3.4.1.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/sweetalert2@9.10.12/dist/sweetalert2.all.min.js"></script>
    <script src="https://cdn.jsdelivr.net/combine/npm/sweetalert2@9.10.12,npm/tablesorter@2.31.3"></script>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@sweetalert2/theme-dark@3/dark.css">
    <script src="https://cdn.jsdelivr.net/npm/sweetalert2@9/dist/sweetalert2.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/js-cookie@rc/dist/js.cookie.min.js"></script>

    <script src="js/ordenar_tabla.js"></script>
</head>
<body>
    <h1>Trayectoria de los Alumnos del ITSP</h1>
    <table class="tabla_trayectorias">
        <thead>
            <tr>
                <th class="th_tratectorias">NÚM. DE CONTROL</th>
                <th class="th_tratectorias">NOMBRE DEL ALUMNO</th>
                <th class="th_tratectorias" colspan="11">REGISTRO DE TRAYECTORIAS</th>
                <th class="th_tratectorias">CARRERA</th>
                <th class="th_tratectorias">GENERACIÓN</th>
            </tr>
        </thead>
        <tbody>
            <?php
            $qAlTSem = "SELECT ctr.num_control, al.apellidos, al.nombre, al.carrera, al.generacion
                        FROM num_control_alumno ctr
                        JOIN alumno al
                        ON ctr.num_ficha = al.num_ficha";
            $rAlTSem = mysqli_query($connect, $qAlTSem);
            while ($fAlTSem = $rAlTSem->fetch_assoc()){
            ?>
            <tr>
                <td class="td_tratectorias"><?php echo $fAlTSem['num_control'] ?></td>
                <td class="td_tratectorias2"><?php echo $fAlTSem['apellidos']." ".$fAlTSem['nombre'] ?></td>
                <td class="td_tratectorias">
                    <a href="zt_cappt.php?matricula_alumno=<?php echo $fAlTSem['num_control'] ?>"
                       target="_blank"
                       title="Ver Caracterización de <?php echo $fAlTSem['nombre']." ".$fAlTSem['apellidos'] ?>.">
                        <input type="button" value="C" class="btn_tsem">
                    </a>
                </td>
                <td class="td_tratectorias">
                    <a href="zt_semestre1.php?matricula_alumno=<?php echo $fAlTSem['num_control'] ?>"
                       target="_blank"
                       title="Ver Trayectoria 1 de <?php echo $fAlTSem['nombre']." ".$fAlTSem['apellidos'] ?>.">
                        <input type="button" value="1" class="btn_tsemI">
                    </a>
                </td>
                <td class="td_tratectorias">
                    <a href="zt_semestre2.php?matricula_alumno=<?php echo $fAlTSem['num_control'] ?>"
                       target="_blank"
                       title="Ver Trayectoria 2 de <?php echo $fAlTSem['nombre']." ".$fAlTSem['apellidos'] ?>.">
                        <input type="button" value="2" class="btn_tsemP">
                    </a>
                </td>
                <td class="td_tratectorias">
                    <a href="zt_semestre3.php?matricula_alumno=<?php echo $fAlTSem['num_control'] ?>"
                       target="_blank"
                       title="Ver Trayectoria 3 de <?php echo $fAlTSem['nombre']." ".$fAlTSem['apellidos'] ?>.">
                        <input type="button" value="3" class="btn_tsemI">
                    </a>
                </td>
                <td class="td_tratectorias">
                    <a href="zt_semestre4.php?matricula_alumno=<?php echo $fAlTSem['num_control'] ?>"
                       target="_blank"
                       title="Ver Trayectoria 4 de <?php echo $fAlTSem['nombre']." ".$fAlTSem['apellidos'] ?>.">
                        <input type="button" value="4" class="btn_tsemP">
                    </a>
                </td>
                <td class="td_tratectorias">
                    <a href="zt_semestre5.php?matricula_alumno=<?php echo $fAlTSem['num_control'] ?>"
                       target="_blank"
                       title="Ver Trayectoria 5 de <?php echo $fAlTSem['nombre']." ".$fAlTSem['apellidos'] ?>.">
                        <input type="button" value="5" class="btn_tsemI">
                    </a>
                </td>
                <td class="td_tratectorias">
                    <a href="zt_semestre6.php?matricula_alumno=<?php echo $fAlTSem['num_control'] ?>"
                       target="_blank"
                       title="Ver Trayectoria 6 de <?php echo $fAlTSem['nombre']." ".$fAlTSem['apellidos'] ?>.">
                        <input type="button" value="6" class="btn_tsemP">
                    </a>
                </td>
                <td class="td_tratectorias">
                    <a href="zt_semestre7.php?matricula_alumno=<?php echo $fAlTSem['num_control'] ?>"
                       target="_blank"
                       title="Ver Trayectoria 7 de <?php echo $fAlTSem['nombre']." ".$fAlTSem['apellidos'] ?>.">
                        <input type="button" value="7" class="btn_tsemI">
                    </a>
                </td>
                <td class="td_tratectorias">
                    <a href="zt_semestre8.php?matricula_alumno=<?php echo $fAlTSem['num_control'] ?>"
                       target="_blank"
                       title="Ver Trayectoria 8 de <?php echo $fAlTSem['nombre']." ".$fAlTSem['apellidos'] ?>.">
                        <input type="button" value="8" class="btn_tsemP">
                    </a>
                </td>
                <td class="td_tratectorias">
                    <a href="zt_semestre9.php?matricula_alumno=<?php echo $fAlTSem['num_control'] ?>"
                       target="_blank"
                       title="Ver Trayectoria 9 de <?php echo $fAlTSem['nombre']." ".$fAlTSem['apellidos'] ?>.">
                        <input type="button" value="9" class="btn_tsemI">
                    </a>
                </td>
                <td class="td_tratectorias">
                    <a href="zt_titulacion.php?matricula_alumno=<?php echo $fAlTSem['num_control'] ?>"
                       target="_blank"
                       title="Ver Proceso de Titilación de <?php echo $fAlTSem['nombre']." ".$fAlTSem['apellidos'] ?>.">
                        <input type="button" value="T" class="btn_tsem">
                    </a>
                </td>
                <td class="td_tratectorias"><?php echo $fAlTSem['carrera'] ?></td>
                <td class="td_tratectorias"><?php echo $fAlTSem['generacion'] ?></td>
            </tr>
            <?php } ?>
        </tbody>

    </table>
</body>
</html>