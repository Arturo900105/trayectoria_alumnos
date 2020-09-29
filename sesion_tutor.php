<?php
require "php/BD_Connect.php";
session_name("TUTOR");
session_start();
$letSession = $_SESSION["usututor"];

if ($letSession == null || $letSession == "") {
    echo "<script>history.back();</script>";
    die();
}

?>

<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <title>Sesion del Tutor</title>
    <link rel="stylesheet" href="css/estilo-sesiontutor.css">

    <script src="js/jquery_3.4.1.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/sweetalert2@9.10.12/dist/sweetalert2.all.min.js"></script>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@sweetalert2/theme-dark@3/dark.css">
    <script src="https://cdn.jsdelivr.net/npm/sweetalert2@9/dist/sweetalert2.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/js-cookie@rc/dist/js.cookie.min.js"></script>
    <script src="https://unpkg.com/ionicons@5.1.2/dist/ionicons.js"></script>

    <script src="js/alertas_trayectorias.js"></script>
</head>
<body>
    <div id="areaTutor">
        <img src="" title="Instituto Tecnológico Superior P'urhépecha" class="logosTutor" id="imgTut">
            <div id="datosTutor">
                <h1>Coordinación Institucional de Tutoría Académica<br>"Plataforma del Tutor"</h1>
                <h2 id="nombreTut"></h2>
                <h2 id="tutoriaTut"></h2>
                <h2 id="nombreUsuarioT"><?php echo $letSession; ?></h2>
            </div>
        <img src="img/logo_itsp.png" title="Instituto Tecnológico Superior P'urhépecha" class="logosTutor">
    </div>



    <ul class="menuTutor">
        <li><a href="">INICIO</a></li>
        <li><a href="">MANUAL DE USO</a></li>
        <li><a href="">ALUMNOS<ion-icon name="caret-down-outline"></ion-icon></a>
            <ul class="submenuTutor">
                <li><a href="">MIS ALUMNOS</a></li>
                <li><a href="">TODOS LOS ALUMNOS</a></li>
            </ul>
        </li>
        <li><a href="">TRAYECTORIAS<ion-icon name="caret-down-outline"></ion-icon></a>
            <ul class="submenuTutor">
                <li><a href="">CARACTERIZACIÓN A ALUMNOS</a></li>
                <li><a href="">SEMESTRAL<ion-icon name="caret-forward-outline"></ion-icon></a>
                    <ul class="submenuTutor2">
                        <li><a href="">1er Semestre</a></li>
                        <li><a href="">2do Semestre</a></li>
                        <li><a href="">3er Semestre</a></li>
                        <li><a href="">4to Semestre</a></li>
                        <li><a href="">5to Semestre</a></li>
                        <li><a href="">6to Semestre</a></li>
                        <li><a href="">7mo Semestre</a></li>
                        <li><a href="">8vo Semestre</a></li>
                        <li><a href="">9no Semestre</a></li>
                        <li><a href="">10mo Semestre</a></li>
                        <li><a href="">11vo Semestre</a></li>
                        <li><a href="">12vo Semestre</a></li>
                    </ul>
                </li>
                <li><a href="">PROCESO DE TITULACIÓN</a></li>
            </ul>
        </li>
        <li><a href="">CANALIZACIONES<ion-icon name="caret-down-outline"></ion-icon></a>
            <ul class="submenuTutor">
                <li><a href="">CANALIZACIONES REALIZADAS</a></li>
            </ul>
        </li>
        <li><a href="">REPORTES<ion-icon name="caret-down-outline"></ion-icon></a>
            <ul class="submenuTutor">
                <li><a href="">PARCIALES REALIZADOS</a></li>
                <li><a href="">FINALES REALIZADOS</a></li>
            </ul>
        </li>
        <li><a href="">MI PERFIL</a></li>
        <li id="cerrarST"><a href="php/terminar_tutor.php">CERRAR SESIÓN</a></li>
    </ul>

    <div class="contentTutor">
        <p>
            Esta es la plataforma donde usted como Tutor podrá registrar
            y llevar acabo la trayectoria escolar de sus Alumnos, asignados por
            la Coordinación Institucional de Tutoría Académica del Tecnológico.
            <br><br>
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
</body>
</html>