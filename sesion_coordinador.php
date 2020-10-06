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
                <li><a>CANALIZACIONES</a></li>
                <li><a>REPORTES PARCIALES</a></li>
                <li><a>REPORTES FINALES</a></li>
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
                <li><a>EXAMEN PEDAGÓGICO</a></li>
                <li><a>EXAMEN PSICOLÓGICO</a></li>
                <li><a>EXAMEN MÉDICO</a></li>
                <li><a>CARACTERIZACIÓN POR PARTE DEL TUTOR</a></li>
                <li><a>NÚMERO DE CONTROL</a></li>
                <li><a>TRAYECTORIA SEMESTRAL</a></li>
                <li><a>PROCESO DE TITULACIÓN</a></li>
            </ul>
        </li>
        <li id="cerrarSC"><a href="php/terminar_coordinador.php">CERRAR SESIÓN</a></li>
    </ul>

    <p id="parrafoCoord">
        Esta es la plataforma en donde usted como <a id="textoC"></a> de la carrera <a id="carreraC"></a>, podrá ver y llevar acabo:
        <br>
        <br><ion-icon name="arrow-forward-outline"></ion-icon> Los registros de las trayectorias escolares de los Alumnos durante su estancia en el Tecnológico.
        <br><ion-icon name="arrow-forward-outline"></ion-icon> Lista de Tutores asignados a un grupo de cada carrera.
        <br><ion-icon name="arrow-forward-outline"></ion-icon> Registro de las Canalizaciones realizadas durante el semestre.
        <br><ion-icon name="arrow-forward-outline"></ion-icon> Registro de los Reportes Parciales realizados por el Tutor.
        <br><ion-icon name="arrow-forward-outline"></ion-icon> Registro de los Reportes Finales realizados por el Tutor.
        <br><br>
    </p>

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
            <th colspan="7" id="thCOORDS">COORDINADORES DEL ITSP</th>
        </tr>
        <tr>
            <th class="th_tablaCoords">NOMBRE(S)</th>
            <th class="th_tablaCoords">APELLIDOS</th>
            <th class="th_tablaCoords">COORDINADOR DE...</th>
            <th class="th_tablaCoords">E-MAIL</th>
            <th class="th_tablaCoords">FECHA DE REGISTRO</th>
            <th class="th_tablaCoords">HORA DE REGISTRO</th>
            <th class="th_tablaCoords">USUARIO</th>
        </tr>

        <?php
        $consultaC = "SELECT nombre,apellidos,sexo,coordinacion,email,fecha_registro,hora_registro,usuario FROM coordinador";
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
            <th colspan="8" id="thTUTORES">TUTORES DEL ITSP</th>
        </tr>

        <tr>
            <th class="th_tablaTutores">NOMBRE(S)</th>
            <th class="th_tablaTutores">APELLIDOS</th>
            <th class="th_tablaTutores">TIPO DE TUTORÍA</th>
            <th class="th_tablaTutores">ÁREA</th>
            <th class="th_tablaTutores">E-MAIL</th>
            <th class="th_tablaTutores">FECHA DE REGISTRO</th>
            <th class="th_tablaTutores">HORA DE REGISTRO</th>
            <th class="th_tablaTutores">USUARIO</th>
        </tr>

        <?php
        $consultaT = "SELECT nombre,apellido,tipo_tutoria,area_de,email,fecha_registro,hora_registro,usuario FROM tutor";
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
                <td class="td_tablaTutores"><?php echo $filaT['nombre']?></td>
                <td class="td_tablaTutores"><?php echo $filaT['apellido']?></td>
                <td class="td_tablaTutores"><?php echo $filaT['tipo_tutoria']?></td>
                <td class="td_tablaTutores"><?php echo $filaT['area_de']?></td>
                <td class="td_tablaTutores"><?php echo $filaT['email']?></td>
                <td class="td_tablaTutores"><?php echo $filaT['fecha_registro']?></td>
                <td class="td_tablaTutores"><?php echo $filaT['hora_registro']?></td>
                <td class="td_tablaTutores"><?php echo $filaT['usuario']?></td>
            </tr>
        <?php }?>
    </table>

    <table id="tabla_alumnos">
        <tr>
            <th colspan="14" id="thAlumnos">DATOS DE LOS ALUMNOS DEL ITSP</th>
        </tr>

        <tr>
            <th class="th_tablaAlumnos">Núm. de Ficha</th>
            <th class="th_tablaAlumnos">Fecha de Registro</th>
            <th class="th_tablaAlumnos">Apellidos</th>
            <th class="th_tablaAlumnos">Nombre(s)</th>
            <th class="th_tablaAlumnos">Fecha de Nacimiento</th>
            <th class="th_tablaAlumnos">Sexo</th>
            <th class="th_tablaAlumnos">Indígena</th>
            <th class="th_tablaAlumnos">Edad</th>
            <th class="th_tablaAlumnos">Estado Civil</th>
            <th  class="th_tablaAlumnos">Teléfono o Celular</th>
            <th  class="th_tablaAlumnos">E-mail</th>
            <th  class="th_tablaAlumnos">Fecha cuando sacó Ficha</th>
            <th  class="th_tablaAlumnos">Carrera</th>
            <th  class="th_tablaAlumnos">Generación</th>
        </tr>

        <?php
        $consultaA = "SELECT * FROM alumno";
        $resultadoA = mysqli_query($connect, $consultaA);
        while ($filaA = $resultadoA->fetch_assoc()){
            ?>
            <tr>
                <td id="td_tA1" class="td_tablaAlumnos"><?php echo $filaA['num_ficha']?></td>
                <td id="td_tA2" class="td_tablaAlumnos"><?php echo $filaA['fecha_registro']?></td>
                <td id="td_tA3" class="td_tablaAlumnos"><?php echo $filaA['apellidos']?></td>
                <td id="td_tA4" class="td_tablaAlumnos"><?php echo $filaA['nombre']?></td>
                <td id="td_tA5" class="td_tablaAlumnos"><?php echo $filaA['fecha_de_nacimiento']?></td>
                <td id="td_tA6" class="td_tablaAlumnos"><?php echo $filaA['sexo']?></td>
                <td id="td_tA7" class="td_tablaAlumnos"><?php echo $filaA['indigena']?></td>
                <td id="td_tA8" class="td_tablaAlumnos"><?php echo $filaA['edad']?></td>
                <td id="td_tA9" class="td_tablaAlumnos"><?php echo $filaA['edo_civil']?></td>
                <td id="td_tA10" class="td_tablaAlumnos"><?php echo $filaA['tel_cel']?></td>
                <td id="td_tA11" class="td_tablaAlumnos"><?php echo $filaA['email']?></td>
                <td id="td_tA12" class="td_tablaAlumnos"><?php echo $filaA['fecha_ficha']?></td>
                <td id="td_tA13" class="td_tablaAlumnos"><?php echo $filaA['carrera']?></td>
                <td id="td_tA14" class="td_tablaAlumnos"><?php echo $filaA['generacion']?></td>
            </tr>
        <?php }?>
    </table>
    <script src="js/usuario_coordinador.js"></script>
</body>
</html>