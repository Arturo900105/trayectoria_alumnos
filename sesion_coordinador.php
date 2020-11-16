<?php
require "php/BD_Connect.php";
session_name("COORDINADOR");
session_start();
$letSessionC = $_SESSION["usucoord"];

    if ($letSessionC == null || $letSessionC == "") {
        echo "<!doctype html>
              <html lang='es' style='height: 100%; display: flex; align-items: center; justify-content: center;'>
                  <head>
                    <meta charset='UTF-8'>
                    <meta name='viewport' content='width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0'>
                    <meta http-equiv='X-UA-Compatible' content='ie=edge'>
                    <title>Sesion del Coordinador</title>
                  </head>
                  <body style='text-align: center;'>
                    <h1 style='font-family: Arial; margin: 0; font-size: 35px; color: red;'>
                        DEBES INICIAR SESIÓN PARA PODER VER EL CONTENIDO
                    </h1>
                    <img style='height: 15em; padding: 15px 0;' src='img/logo_itsp.png'>
                    <h2 style='margin: 0; font-family: Arial; font-size: 30px;'>Coordinación Institucional de Tutoría Académica
                    <br>Instituto Tecnológico Superior P'urhépecha</h2>
                  </body>
                </html>";
        die();
    }
?>
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <title>Sesion del Coordinador</title>
    <link rel="shortcut icon" id="iconoCoord" type="image/x-icon">
    <link rel="stylesheet" href="css/estilo-sesioncoordinador.css">

    <!--<META HTTP-EQUIV="REFRESH" CONTENT="5">-->

    <script src="js/jquery_3.4.1.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/sweetalert2@9.10.12/dist/sweetalert2.all.min.js"></script>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@sweetalert2/theme-dark@3/dark.css">
    <script src="https://cdn.jsdelivr.net/npm/sweetalert2@9/dist/sweetalert2.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/js-cookie@rc/dist/js.cookie.min.js"></script>
    <script src="https://unpkg.com/ionicons@5.1.2/dist/ionicons.js"></script>

    <script src="js/alerta_coordinador.js"></script>
</head>
<body>
    <div id="areaCoordinador">
        <img class="logosCoordinador" id="imgCoord">
        <div id="datosCoordinador">
            <h1>Coordinación Institucional de Tutoría Académica<br>"PLATAFORMA DEL COORDINADOR"</h1>
            <h2 id="nomCoord"></h2>
            <h2 id="coordDe"></h2>
            <h2 id="nombreUsuarioCoord"><?php echo $letSessionC; ?></h2>
        </div>
        <img src="img/logo_itsp.png" title="Instituto Tecnológico Superior P'urhépecha" class="logosCoordinador">
    </div>

    <ul class="menuCoordinador">
        <li id="inicioC"><a>INICIO</a></li>
        <li id="misdatos"><a>MI PERFIL</a></li>
        <li><a>ARCHIVOS<ion-icon name="caret-down-outline"></ion-icon></a>
            <ul class="submenuCoordinador">
                <li id="lista_canalizacion"><a>CANALIZACIONES</a></li>
                <li id="lista_rparcial"><a>REPORTES PARCIALES</a></li>
                <li id="lista_rfinal"><a>REPORTES FINALES</a></li>
            </ul>
        </li>
        <li><a>COORDINADOR<ion-icon name="caret-down-outline"></ion-icon></a>
            <ul class="submenuCoordinador">
                <li id="mostrarListaC"><a>LISTA DE COORDINADORES</a></li>
            </ul>
        </li>
        <li><a>TUTOR<ion-icon name="caret-down-outline"></ion-icon></a>
            <ul class="submenuCoordinador">
                <li id="mostrarListaT"><a>LISTA DE TUTORES</a></li>
            </ul>
        </li>
        <li><a>ALUMNO<ion-icon name="caret-down-outline"></ion-icon></a>
            <ul class="submenuCoordinador">
                <li id="mlistaAlumnos"><a>DATOS DEL ALUMNO</a></li>
                <li id="mlistaPedagogia"><a>R. EXAMEN PEDAGÓGICO</a></li>
                <li id="mlistaPsicologia"><a>R. EXAMEN PSICOLÓGICO</a></li>
                <li id="mlistaMedica"><a>R. EXAMEN MÉDICO</a></li>
                <li id="mlistaPostTest" title="Se requiere matrícula del alumno"><a>REQUIEREN ESCALA POST-TEST</a></li>
                <li id="mresultPostTest"><a>R. ESCALA POST-TEST</a></li>
                <li id="mlistaCAPPT" title="Se requiere matrícula del alumno"><a>TRAYECTORIAS</a></li>
                <li id="mostrar_EA" title="Para ver resultados, se requiere el formulario de la
Caracterización del alumno por parte del tutor (CAPPT) realizado."><a>R. ESTILOS DE APRENDIZAJE</a></li>
                <li id="mostrar_HE"><a>I. HABILIDADES DE ESTUDIO</a></li>
                <li id="mostrar_oe"><a>I. ORGANIZACIÓN DEL ESTUDIO</a></li>
                <li id="mostrar_te"><a>I. TÉCNICAS DE ESTUDIO</a></li>
                <li id="mostrar_me"><a>I. MOTIVACIÓN PARA EL ESTUDIO</a></li>
            </ul>
        </li>
        <li id="cerrarSC"><a href="php/terminar_coordinador.php">CERRAR SESIÓN</a></li>
    </ul>

    <p id="parrafoCoord" class="parrafoCoord">
        Esta es la plataforma en donde usted como <a id="textoC"></a> de la carrera de <a id="carreraC"></a>, podrá ver y llevar acabo:
        <br>
        <br><ion-icon name="arrow-forward-outline"></ion-icon> Los registros de las trayectorias escolares de los Alumnos durante su estancia en el Tecnológico.
        <br><ion-icon name="arrow-forward-outline"></ion-icon> Lista de Tutores asignados a un grupo de cada carrera.
        <br><ion-icon name="arrow-forward-outline"></ion-icon> Registro de las Canalizaciones realizadas durante el semestre.
        <br><ion-icon name="arrow-forward-outline"></ion-icon> Registro de los Reportes Parciales realizados por el Tutor.
        <br><ion-icon name="arrow-forward-outline"></ion-icon> Registro de los Reportes Finales realizados por el Tutor.
    </p>
    <div id="parrafoCoord2" class="parrafoCoord">
        <img src="img/diagrama.png" title="Diagrama del proceso de Tutoría Académica" id="diagramaC">
    </div>

    <div id="div_canalizaciones">
        <iframe id="ventana_canalizacion" src="imprimir_canalizacion.php" frameborder="0"></iframe>
    </div>

    <div id="div_rparciales">
        <iframe id="ventana_rparcial" src="imprimir_rparcial.php" frameborder="0"></iframe>
    </div>

    <div id="div_rfinales">
        <iframe id="ventana_rfinal" src="imprimir_rfinal.php" frameborder="0"></iframe>
    </div>

    <table id="tabla_usuCoord">
        <tr>
            <th colspan="3" id="th_usuC">MIS DATOS DE USUARIO</th>
        </tr>
        <tr>
            <th class="th_tablausuCoord">NOMBRE:</th>
            <td class="td_tablausuCoord"><div class="datos_usuCord" id="usuCoord_nombre"></div></td>
        </tr>
        <tr>
            <th class="th_tablausuCoord">APELLIDOS:</th>
            <td class="td_tablausuCoord"><div class="datos_usuCord" id="usuCoord_apellidos"></div></td>
        </tr>
        <tr>
            <th class="th_tablausuCoord">SEXO:</th>
            <td class="td_tablausuCoord"><div class="datos_usuCord" id="usuCoord_sexo"></div></td>
        </tr>
        <tr>
            <th class="th_tablausuCoord">COORDINACIÓN:</th>
            <td class="td_tablausuCoord"><div class="datos_usuCord" id="usuCoord_coordinacion"></div></td>
        </tr>
        <tr>
            <th class="th_tablausuCoord">E-MAIL:</th>
            <td class="td_tablausuCoord"><div class="datos_usuCord" id="usuCoord_email"></div></td>
        </tr>
        <tr>
            <th class="th_tablausuCoord">USUARIO:</th>
            <td class="td_tablausuCoord"><div class="datos_usuCord" id="usuCoord_usuario"></div></td>
        </tr>
        <tr>
            <th class="th_tablausuCoord">NIP:</th>
            <td class="td_tablausuCoord"><div class="datos_usuCord" id="usuCoord_nip"></div></td>
        </tr>
    </table>



    <div id="ventanaCoordinador" class="ventanasCoord2">
        <iframe class="listaCA" id="listaCoorITSP" src="lista_coordinadores.php" frameborder="0"></iframe>
    </div>

    <div id="ventanaTutor" class="ventanasCoord2">
        <iframe class="listaCA" id="listaTutorITSP" src="lista_tutores.php" frameborder="0"></iframe>
    </div>


    
    <div id="ventanaAlumnos" class="ventanasCoord">
        <iframe id="listaAlumnosITSP" src="mostrar_Adatos.php" frameborder="0"></iframe>
    </div>

    <div id="ventanaPedagogia" class="ventanasCoord">
        <iframe class="listaCA" id="listaPedagogia" src="mostrar_Apedagogia.php" frameborder="0"></iframe>
    </div>

    <div id="ventanaPsicologia" class="ventanasCoord">
        <iframe class="listaCA" id="listaPsicologia" src="mostrar_Apsicologia.php" frameborder="0"></iframe>
    </div>

    <div id="ventanaMedica" class="ventanasCoord">
        <iframe class="listaCA" id="listaMedica" src="mostrar_Amedica.php" frameborder="0"></iframe>
    </div>

    <div id="ventanaPostTest" class="ventanasCoord">
        <iframe class="listaCA" id="listaPostTest" src="mostrar_PostTest.php" frameborder="0"></iframe>
    </div>

    <div id="ventanaPostTest2" class="ventanasCoord">
        <iframe class="listaCA" id="listaPostTest2" src="mostrar_Aposttest.php" frameborder="0"></iframe>
    </div>

    <div id="ventanaCAPPT" class="ventanasCoord">
        <iframe class="listaCA" id="listaTrayectorias" src="zt_trayectorias.php" frameborder="0"></iframe>
    </div>
    
    <script src="js/usuario_coordinador.js"></script>
</body>
</html>