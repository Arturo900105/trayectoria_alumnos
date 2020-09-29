<?php
require "php/BD_Connect.php";
session_name("COORDINADOR");
session_start();
$letSessionC = $_SESSION["usucoord"];

if ($letSessionC == null || $letSessionC == "") {
    echo "<script>history.back();</script>";
    die();
}

?>

<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <title>Sesion del Coordinador</title>
    <link rel="stylesheet" href="css/estilo-sesioncoordinador.css">

    <script src="js/jquery_3.4.1.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/sweetalert2@9.10.12/dist/sweetalert2.all.min.js"></script>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@sweetalert2/theme-dark@3/dark.css">
    <script src="https://cdn.jsdelivr.net/npm/sweetalert2@9/dist/sweetalert2.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/js-cookie@rc/dist/js.cookie.min.js"></script>
    <script src="https://unpkg.com/ionicons@5.1.2/dist/ionicons.js"></script>

</head>
<body>
    <div id="areaCoordinador">
        <img src="" title="Instituto Tecnológico Superior P'urhépecha" class="logosCoordinador" id="imgCoord">
        <div id="datosCoordinador">
            <h1>Coordinación Institucional de Tutoría Académica<br>"PLATAFORMA DEL COORDINADOR"</h1>
            <h2 id="nomCoord"></h2>
            <h2 id="coordDe"></h2>
            <h2 id="nombreUsuarioCoord"><?php echo $letSessionC; ?></h2>
        </div>
        <img src="img/logo_itsp.png" title="Instituto Tecnológico Superior P'urhépecha" class="logosCoordinador">
    </div>

    <div class="contenidoCoor">

        <ul class="menuCoordinador">
            <li><a href="">INICIO</a></li>
            <li><a href="">MI PERFIL</a></li>
            <li><a href="">MANUAL DE USO</a></li>
            <li><a href="">COORDINADORES&nbsp;&nbsp;<ion-icon name="caret-forward-outline"></ion-icon></a>
                <ul class="submenuCoordinador">
                    <li><a href="">LISTA DE COORDINADORES</a></li>
                    <li><a href="">COORDINACIÓN DE TUTORÍAS</a></li>
                </ul>
            </li>
            <li><a href="">TUTORES EN LÍNEA</a></li>
            <li><a href="">TUTORES&nbsp;&nbsp;<ion-icon name="caret-forward-outline"></ion-icon></a>
                <ul class="submenuCoordinador">
                    <li><a href="" title="">ING. EN GESTIÓN EMPRESARIAL</a></li>
                    <li><a href="" title="">ING. INDUSTRIAL</a></li>
                    <li><a href="" title="">ING. EN SISTEMAS COMPUTACIONALES</a></li>
                    <li><a href="" title="">ING. BIOMÉDICA</a></li>
                    <li><a href="" title="">ING. EN INNOVACIÓN AGRÍCOLA SUSTENTABLE</a></li>
                    <li><a href="" title="">ING. EN ENERGÍAS RENOVABLES</a></li>
                    <li><a href="" title="">ING. FORESTAL</a></li>
                    <li><a href="" title="">ING. EN AGRONOMÍA</a></li>
                </ul>
            </li>

            <li><a href="">ALUMNOS&nbsp;&nbsp;<ion-icon name="caret-forward-outline"></ion-icon></a>
                <ul class="submenuCoordinador">
                    <li><a href="">DATOS DEL ALUMNO</a></li>
                    <li><a href="">EXAMEN PEDAGÓGICO</a></li>
                    <li><a href="">EXAMEN PSICOLÓGICO</a></li>
                    <li><a href="">EXAMEN MÉDICO</a></li>
                    <li><a href="">CARACTERIZACIÓN POR PARTE DEL TUTOR</a></li>
                    <li><a href="">NÚMERO DE CONTROL</a></li>
                    <li><a href="">TRAYECTORIA SEMESTRAL</a></li>
                    <li><a href="">PROCESO DE TITULACIÓN</a></li>
                </ul>
            </li>
            <li><a href="">CANALIZACIONES</a></li>
            <li><a href="">REPORTES PARCIALES</a></li>
            <li><a href="">REPORTES FINALES</a></li>
            <li id="cerrarSC"><a href="php/terminar_coordinador.php">CERRAR SESIÓN</a></li>

        </ul>
        <p class="parrafoCoor">
            Esta es la plataforma donde usted como Coordinador(a) podrá llevar acabo
            los registros de las trayectorias escolares de todos los Alumnos del Tecnológico.
        </p>
    </div>

    <script src="js/usuario_coordinador.js"></script>
</body>
</html>