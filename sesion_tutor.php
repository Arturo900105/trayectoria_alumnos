<?php
require "php/BD_Connect.php";
session_name("TUTOR");
session_start();
$letSession = $_SESSION["usututor"];
$letCarrera = $_SESSION["carrera"];
$letidTutor = $_SESSION["idTutor"];

if ($letSession == null || $letSession == "") {
    echo "<!doctype html>
          <html lang='es' style='height: 100%; display: flex; align-items: center; justify-content: center;'>
              <head>
                <meta charset='UTF-8'>
                <meta name='viewport' content='width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0'>
                <meta http-equiv='X-UA-Compatible' content='ie=edge'>
                <title>Sesión del Tutor</title>
              </head>
              <body style='text-align: center;'>
                <h1 style='font-family: Arial; margin: 0; font-size: 35px; color: red;'>
                    DEBES INICIAR SESIÓN PARA PODER VER EL CONTENIDO
                </h1>
                <img style='height: 15em; padding: 15px 0;' src='img/logo_itsp.png'>
                <h2 style='margin: 0; font-family: Arial; font-size: 30px;'>
                    Atentamente:
                    <br>la Coordinación Institucional de Tutoría Académica
                    <br>del Instituto Tecnológico Superior P'urhépecha
                </h2>
              </body>
            </html>";
    die();
}
?>

<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <title>Sesión del Tutor</title>
    <link rel="shortcut icon" id="iconoTut" type="image/x-icon">
    <link rel="stylesheet" href="css/estilo-sesiontutor.css">

    <script src="js/jquery_3.4.1.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/sweetalert2@9.10.12/dist/sweetalert2.all.min.js"></script>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@sweetalert2/theme-dark@3/dark.css">
    <script src="https://cdn.jsdelivr.net/npm/sweetalert2@9/dist/sweetalert2.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/js-cookie@rc/dist/js.cookie.min.js"></script>

    <script src="js/alertas_trayectorias.js"></script>
    <script src="js/alerta_tutor.js"></script>
</head>
<body>
    <div id="areaTutor">
        <img title="" class="logosTutor" id="imgTut">
            <div id="datosTutor">
                <h1>Coordinación Institucional de Tutoría Académica<br>"Plataforma del Tutor"</h1>
                <h2 id="nombreTut"></h2>
                <h2 id="tutoriaTut"></h2>
                <h2 id="nombreUsuarioT"><?php echo $letSession; ?></h2>
            </div>
        <img src="img/logo_itsp.png" title="Instituto Tecnológico Superior P'urhépecha" class="logosTutor">
    </div>

    <ul class="menuTutor">
        <li id="inicioT"><a>INICIO</a></li>
        <li id="misdatosT"><a>MI PERFIL</a></li>
        <li><a>ALUMNOS<ion-icon name="caret-down-outline"></ion-icon></a>
            <ul class="submenuTutor">
                <li id="misAlumnos"><a>MIS ALUMNOS</a></li>
                <li id="todosAlumnos"><a>TODOS LOS ALUMNOS</a></li>
            </ul>
        </li>
        <li><a>TRAYECTORIAS<ion-icon name="caret-down-outline"></ion-icon></a>
            <ul class="submenuTutor">
                <li><a>CARACTERIZACIÓN A ALUMNOS</a></li>
                <li><a>SEMESTRAL<ion-icon name="caret-forward-outline"></ion-icon></a>
                    <ul class="submenuTutor2">
                        <li><a>1er Semestre</a></li>
                        <li><a>2do Semestre</a></li>
                        <li><a>3er Semestre</a></li>
                        <li><a>4to Semestre</a></li>
                        <li><a>5to Semestre</a></li>
                        <li><a>6to Semestre</a></li>
                        <li><a>7mo Semestre</a></li>
                        <li><a>8vo Semestre</a></li>
                        <li><a>9no Semestre</a></li>
                        <li><a>10mo Semestre</a></li>
                        <li><a>11vo Semestre</a></li>
                        <li><a>12vo Semestre</a></li>
                    </ul>
                </li>
                <li><a>PROCESO DE TITULACIÓN</a></li>
            </ul>
        </li>
        <li><a>CANALIZACIONES<ion-icon name="caret-down-outline"></ion-icon></a>
            <ul class="submenuTutor">
                <li><a>CANALIZACIONES REALIZADAS</a></li>
            </ul>
        </li>
        <li><a>REPORTES<ion-icon name="caret-down-outline"></ion-icon></a>
            <ul class="submenuTutor">
                <li><a>PARCIALES REALIZADOS</a></li>
                <li><a>FINALES REALIZADOS</a></li>
            </ul>
        </li>
        <li id="cerrarST"><a href="php/terminar_tutor.php">CERRAR SESIÓN</a></li>
    </ul>

    <p id="parrafoTut">
        Esta es la plataforma en donde usted como <a id="sexoTutor"></a> podrá:<br><br>
        <ion-icon name="arrow-forward-outline"></ion-icon> Registrar la trayectoria escolar de un grupo de alumnos de <a id="alumnosTutor"></a>.<br>
        <ion-icon name="arrow-forward-outline"></ion-icon> Tener registro de las Canalizaciones realizadas.<br>
        <ion-icon name="arrow-forward-outline"></ion-icon> Tener registro de los Reportes Parciales realizados.<br>
        <ion-icon name="arrow-forward-outline"></ion-icon> Tener registro de los Reportes Finales realizados.
    </p>

    <table id="tabla_usutUT">
        <tr>
            <th colspan="2" id="th_usuT">MIS DATOS DE USUARIO</th>
        </tr>
        <tr>
            <th class="th_tablausuTut">NOMBRE:</th>
            <td class="td_tablausuTut"><div class="datos_usuTut" id="usuTut_nombre"></div></td>
        </tr>
        <tr>
            <th class="th_tablausuTut">APELLIDOS:</th>
            <td class="td_tablausuTut"><div class="datos_usuTut" id="usuTut_apellidos"></div></td>
        </tr>
        <tr>
            <th class="th_tablausuTut">SEXO:</th>
            <td class="td_tablausuTut"><div class="datos_usuTut" id="usuTut_sexo"></div></td>
        </tr>
        <tr>
            <th class="th_tablausuTut">TIPO DE TUTORÍA:</th>
            <td class="td_tablausuTut"><div class="datos_usuTut" id="usuTut_tutoria"></div></td>
        </tr>
        <tr>
            <th class="th_tablausuTut">ÁREA DE TRABAJO:</th>
            <td class="td_tablausuTut"><div class="datos_usuTut" id="usuTut_trabajo"></div></td>
        </tr>
        <tr>
            <th class="th_tablausuTut">E-MAIL:</th>
            <td class="td_tablausuTut"><div class="datos_usuTut" id="usuTut_email"></div></td>
        </tr>
        <tr>
            <th class="th_tablausuTut">USUARIO:</th>
            <td class="td_tablausuTut"><div class="datos_usuTut" id="usuTut_usuario"></div></td>
        </tr>
        <tr>
            <th class="th_tablausuTut">CONTRASEÑA:</th>
            <td class="td_tablausuTut"><div class="datos_usuTut" id="usuTut_password"></div></td>
        </tr>
    </table>

    <table id="tabla_alumnosITSP">
        <tr>
            <th colspan="6" id="thAlumnosITSP">ALUMNOS DE <a id="dato_carrera"></a></th>
        </tr>

        <tr>
            <th class="th_taITSP">¿Agregar Alumno?</th>
            <th class="th_taITSP">Núm. de Ficha</th>
            <th class="th_taITSP">Apellidos</th>
            <th class="th_taITSP">Nombre(s)</th>
            <th class="th_taITSP">Carrera</th>
            <th class="th_taITSP">Generación</th>
        </tr>

        <?php
        $qAlumno = "SELECT * FROM alumno WHERE carrera = '$letCarrera' and id_tutor = 0";
        $rAlumno = mysqli_query($connect, $qAlumno);
        while ($fAlumno = $rAlumno->fetch_assoc()){
        ?>
        <tr>
            <td class="td_taITSP">
                <button class="agregar" onclick="agregarAlumno('<?php echo $fAlumno['num_ficha'] ?>', '<?php echo $letidTutor ?>');" >AGREGAR</button>
            </td>
            <td class="td_taITSP"><?php echo $fAlumno['num_ficha'] ?></td>
            <td class="td_taITSP"><?php echo $fAlumno['apellidos'] ?></td>
            <td class="td_taITSP"><?php echo $fAlumno['nombre'] ?></td>
            <td class="td_taITSP"><?php echo $fAlumno['carrera'] ?></td>
            <td class="td_taITSP"><?php echo $fAlumno['generacion'] ?></td>
        </tr>
        <?php } ?>
    </table>

    <table id="tabla_misAlumnos">
        <!---->
        <tr>
            <th id="thAlumnos" colspan="14">MIS ALUMNOS</th>
        </tr>
        <tr>
            <th class="th_misAlumnos">Núm de Control</th>
            <th class="th_misAlumnos">Núm. de Ficha</th>
            <th class="th_misAlumnos">Apellidos</th>
            <th class="th_misAlumnos">Nombre(s)</th>
            <th class="th_misAlumnos">Carrera</th>
            <th class="th_misAlumnos">Generación</th>
            <th class="th_misAlumnos" colspan="4">Caracterización Personalizada del Estudiante</th>
            <th class="th_misAlumnos">¿Eliminar de mis Alumnos?</th>
        </tr>

        <?php
        $qmisAlumno = "SELECT * FROM alumno WHERE carrera = '$letCarrera' and id_tutor = '$letidTutor'";
        $rmisAlumno = mysqli_query($connect, $qmisAlumno);
        while ($fmisAlumno = $rmisAlumno->fetch_assoc()){
        ?>
        <tr>
            <td class="td_misAlumnos"><input class="btn_alumno" type="button" value="MATRÍCULA" title="Agregar Núm de Control"></td>
            <td class="td_misAlumnos"><?php echo $fmisAlumno['num_ficha'] ?></td>
            <td class="td_misAlumnos"><?php echo $fmisAlumno['apellidos'] ?></td>
            <td class="td_misAlumnos"><?php echo $fmisAlumno['nombre'] ?></td>
            <td class="td_misAlumnos"><?php echo $fmisAlumno['carrera'] ?></td>
            <td class="td_misAlumnos"><?php echo $fmisAlumno['generacion'] ?></td>
            <td class="td_misAlumnos"><input class="btn_alumno" type="button" value="DATOS" title="Datos del Alumno"></td>
            <td class="td_misAlumnos"><input class="btn_alumno" type="button" value="PEDAGOGÍA" title="Examen Pedagógico"></td>
            <td class="td_misAlumnos"><input class="btn_alumno" type="button" value="PSICOLOGÍA" title="Examen Psicológico"></td>
            <td class="td_misAlumnos"><input class="btn_alumno" type="button" value="MÉDICO" title="Examen Médico"></td>
            <td class="td_misAlumnos">
                <button class="eliminar" onclick="eliminarAlumno('<?php echo $fmisAlumno['num_ficha'] ?>', 0);" >ELIMINAR</button>
            </td>
        </tr>
        <?php } ?>
    </table>

    <div class="contentTutor">
        <p>
            <a href="javascript:abrirCAPPT()">Caracterización por parte del Tutor</a><br>
            <a href="javascript:abrirT1semeste()">Trayectoria 1ro Semestre</a><br>
            <a href="javascript:abrirT2semeste()">Trayectoria 2do Semestre</a><br>
            <a href="javascript:abrirT3semeste()">Trayectoria 3ro Semestre</a><br>
            <a href="javascript:abrirT4semeste()">Trayectoria 4to Semestre</a><br>
            <a href="javascript:abrirT5semeste()">Trayectoria 5to Semestre</a><br>
            <a href="javascript:abrirT6semeste()">Trayectoria 6to Semestre</a><br>
            <a href="javascript:abrirT7semeste()">Trayectoria 7mo Semestre</a><br>
            <a href="javascript:abrirT8semeste()">Trayectoria 8vo Semestre</a><br>
            <a href="javascript:abrirT9semeste()">Trayectoria 9no Semestre</a><br>
            <a href="javascript:abrirTitulacion()">Proceso de Titulación</a>
        </p>
    </div>

    <div class="vmodal_trayectorias" id="v_modal_cappt">
        <iframe class="iframe_trayectoria" src="t_semestre0.html"></iframe>
    </div>

    <div class="vmodal_trayectorias" id="v_modal_t1">
        <iframe class="iframe_trayectoria" src="t_semestre1.html"></iframe>
    </div>

    <div class="vmodal_trayectorias" id="v_modal_t2">
        <iframe class="iframe_trayectoria" src="t_semestre2.html"></iframe>
    </div>

    <div class="vmodal_trayectorias" id="v_modal_t3">
        <iframe class="iframe_trayectoria" src="t_semestre3.html"></iframe>
    </div>

    <div class="vmodal_trayectorias" id="v_modal_t4">
        <iframe class="iframe_trayectoria" src="t_semestre4.html"></iframe>
    </div>

    <div class="vmodal_trayectorias" id="v_modal_t5">
        <iframe class="iframe_trayectoria" src="t_semestre5.html"></iframe>
    </div>

    <div class="vmodal_trayectorias" id="v_modal_t6">
        <iframe class="iframe_trayectoria" src="t_semestre6.html"></iframe>
    </div>

    <div class="vmodal_trayectorias" id="v_modal_t7">
        <iframe class="iframe_trayectoria" src="t_semestre7.html"></iframe>
    </div>

    <div class="vmodal_trayectorias" id="v_modal_t8">
        <iframe class="iframe_trayectoria" src="t_semestre8.html"></iframe>
    </div>

    <div class="vmodal_trayectorias" id="v_modal_t9">
        <iframe class="iframe_trayectoria" src="t_semestre9.html"></iframe>
    </div>

    <div class="vmodal_trayectorias" id="v_modal_titulacion">
        <div id="modalTitulacion">
            <iframe id="iframe_titulacion" src="t_semestret.html"></iframe>
        </div>
    </div>

    <script src="js/usuario_tutor.js"></script>
    <script type="module" src="https://unpkg.com/ionicons@5.1.2/dist/ionicons/ionicons.esm.js"></script>
    <script nomodule="" src="https://unpkg.com/ionicons@5.1.2/dist/ionicons/ionicons.js"></script>
</body>
</html>