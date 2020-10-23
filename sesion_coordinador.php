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
        <li><a>COORDINADORES<ion-icon name="caret-down-outline"></ion-icon></a>
            <ul class="submenuCoordinador">
                <li id="mostrarListaC"><a>LISTA DE COORDINADORES</a></li>
            </ul>
        </li>
        <li><a>TUTORES<ion-icon name="caret-down-outline"></ion-icon></a>
            <ul class="submenuCoordinador">
                <li id="mostrarListaT"><a>LISTA DE TUTORES</a></li>
            </ul>
        </li>
        <li><a>ALUMNOS<ion-icon name="caret-down-outline"></ion-icon></a>
            <ul class="submenuCoordinador">
                <li id="mlistaAlumnos"><a>DATOS DEL ALUMNO</a></li>
                <li id="mlistaPedagogia"><a>EXAMEN PEDAGÓGICO</a></li>
                <li id="mlistaPsicologia"><a>EXAMEN PSICOLÓGICO</a></li>
                <li id="mlistaMedica"><a>EXAMEN MÉDICO</a></li>
                <li id="mlistaPostTest"><a>A ESCALA POST-TEST</a></li>
                <li id="mlistaCAPPT"><a>TRAYECTORIAS</a></li>
                <li id="mostrar_HE"><a>INTERPRETACIÓN: HABILIDADES DE ESTUDIO</a></li>
                <li id="mostrar_EA"><a>INTERPRETACIÓN: ESTILOS DE APRENDIZAJE</a></li>
            </ul>
        </li>
        <li id="cerrarSC"><a href="php/terminar_coordinador.php">CERRAR SESIÓN</a></li>
    </ul>

    <p id="parrafoCoord">
        Esta es la plataforma en donde usted como <a id="textoC"></a> de la carrera de <a id="carreraC"></a>, podrá ver y llevar acabo:
        <br>
        <br><ion-icon name="arrow-forward-outline"></ion-icon> Los registros de las trayectorias escolares de los Alumnos durante su estancia en el Tecnológico.
        <br><ion-icon name="arrow-forward-outline"></ion-icon> Lista de Tutores asignados a un grupo de cada carrera.
        <br><ion-icon name="arrow-forward-outline"></ion-icon> Registro de las Canalizaciones realizadas durante el semestre.
        <br><ion-icon name="arrow-forward-outline"></ion-icon> Registro de los Reportes Parciales realizados por el Tutor.
        <br><ion-icon name="arrow-forward-outline"></ion-icon> Registro de los Reportes Finales realizados por el Tutor.
        <br><br>
    </p>

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

    <table id="tabla_coordinadores">
        <tr>
            <th colspan="8" id="thCOORDS">COORDINADORES DEL ITSP</th>
        </tr>
        <tr>
            <th class="th_tablaCoords">NÓMINA</th>
            <th class="th_tablaCoords">NOMBRE</th>
            <th class="th_tablaCoords">APELLIDOS</th>
            <th class="th_tablaCoords">COORDINADOR DE...</th>
            <th class="th_tablaCoords">E-MAIL</th>
            <th class="th_tablaCoords">FECHA DE REGISTRO</th>
            <th class="th_tablaCoords">HORA DE REGISTRO</th>
            <th class="th_tablaCoords">USUARIO</th>
        </tr>

        <?php
        $consultaC = "SELECT * FROM coordinador";
        $resultadoC = mysqli_query($connect, $consultaC);
        while ($filaC = $resultadoC->fetch_assoc()){
            if ($filaC['coordinacion'] == "IGEM"){
                $filaC['coordinacion'] = "Ingeniería en Gestión Empresarial";
            } elseif ($filaC['coordinacion'] == "IIND"){
                $filaC['coordinacion'] = "Ingeniería Industrial";
            }elseif ($filaC['coordinacion'] == "ISIC"){
                $filaC['coordinacion'] = "Ingeniería en Sistemas Computacionales";
            }elseif ($filaC['coordinacion'] == "IBIO"){
                $filaC['coordinacion'] = "Ingeniería Biomédica";
            }elseif ($filaC['coordinacion'] == "IIAS"){
                $filaC['coordinacion'] = "Ingeniería en Innovación Agrícola Sustentable";
            }elseif ($filaC['coordinacion'] == "IENR"){
                $filaC['coordinacion'] = "Ingeniería en Energías Renovables";
            }elseif ($filaC['coordinacion'] == "IFOR"){
                $filaC['coordinacion'] = "Ingeniería Forestal";
            }elseif ($filaC['coordinacion'] == "IAGR"){
                $filaC['coordinacion'] = "Ingeniería en Agronomía";
            }
        ?>
        <tr>
            <td class="td_tablaCoords"><?php echo $filaC['id_coordinador'] ?></td>
            <td class="td_tablaCoords"><?php echo $filaC['nombre'] ?></td>
            <td class="td_tablaCoords"><?php echo $filaC['apellidos'] ?></td>
            <td class="td_tablaCoords"><?php echo $filaC['coordinacion'] ?></td>
            <td class="td_tablaCoords"><?php echo $filaC['email'] ?></td>
            <td class="td_tablaCoords"><?php echo $filaC['fecha_registro'] ?></td>
            <td class="td_tablaCoords"><?php echo $filaC['hora_registro'] ?></td>
            <td class="td_tablaCoords"><?php echo $filaC['usuario'] ?></td>
        </tr>
        <?php }?>
    </table>

    <table id="tabla_tutores">
        <tr>
            <th colspan="9" id="thTUTORES">TUTORES DEL ITSP</th>
        </tr>

        <tr>
            <th class="th_tablaTutores">NOMINA</th>
            <th class="th_tablaTutores">NOMBRE</th>
            <th class="th_tablaTutores">APELLIDOS</th>
            <th class="th_tablaTutores">TIPO DE TUTORÍA</th>
            <th class="th_tablaTutores">ÁREA</th>
            <th class="th_tablaTutores">E-MAIL</th>
            <th class="th_tablaTutores">FECHA DE REGISTRO</th>
            <th class="th_tablaTutores">HORA DE REGISTRO</th>
            <th class="th_tablaTutores">USUARIO</th>
        </tr>

        <?php
        $consultaT = "SELECT * FROM tutor";
        $resultadoT = mysqli_query($connect, $consultaT);
        while ($filaT = $resultadoT->fetch_assoc()){
            if ($filaT['area_de'] == "IGEM"){
                $filaT['area_de'] = "Ingeniería en Gestión Empresarial";
            } elseif ($filaT['area_de'] == "IIND"){
                $filaT['area_de'] = "Ingeniería Industrial";
            }elseif ($filaT['area_de'] == "ISIC"){
                $filaT['area_de'] = "Ingeniería en Sistemas Computacionales";
            }elseif ($filaT['area_de'] == "IBIO"){
                $filaT['area_de'] = "Ingeniería Biomédica";
            }elseif ($filaT['area_de'] == "IIAS"){
                $filaT['area_de'] = "Ingeniería en Innovación Agrícola Sustentable";
            }elseif ($filaT['area_de'] == "IENR"){
                $filaT['area_de'] = "Ingeniería en Energías Renovables";
            }elseif ($filaT['area_de'] == "IFOR"){
                $filaT['area_de'] = "Ingeniería Forestal";
            }elseif ($filaT['area_de'] == "IAGR"){
                $filaT['area_de'] = "Ingeniería en Agronomía";
            }
            ?>
            <tr>
                <td class="td_tablaTutores"><?php echo $filaT['id_tutor']?></td>
                <td class="td_tablaTutores"><?php echo $filaT['nombre_tut']?></td>
                <td class="td_tablaTutores"><?php echo $filaT['apellido_tut']?></td>
                <td class="td_tablaTutores"><?php echo $filaT['tipo_tutoria']?></td>
                <td class="td_tablaTutores"><?php echo $filaT['area_de']?></td>
                <td class="td_tablaTutores"><?php echo $filaT['email']?></td>
                <td class="td_tablaTutores"><?php echo $filaT['fecha_registro']?></td>
                <td class="td_tablaTutores"><?php echo $filaT['hora_registro']?></td>
                <td class="td_tablaTutores"><?php echo $filaT['usuario']?></td>
            </tr>
        <?php }?>
    </table>
    
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

    <div id="ventanaCAPPT" class="ventanasCoord">
        <iframe class="listaCA" id="listaTrayectorias" src="zt_trayectorias.php" frameborder="0"></iframe>
    </div>
    
    <script src="js/usuario_coordinador.js"></script>
</body>
</html>