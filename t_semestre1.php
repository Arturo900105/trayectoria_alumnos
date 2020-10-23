<?php
require "php/BD_Connect.php";
$numControl = $_GET["matricula_alumno"];
?>
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <title>Trayectoria 1er Semestre</title>
    <link rel="shortcut icon" href="iconos/sem1.jpg" type="image/x-icon">
    <link rel="stylesheet" href="css/estilos-tsem1.css">

    <script src="js/jquery_3.4.1.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/sweetalert2@9.10.12/dist/sweetalert2.all.min.js"></script>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@sweetalert2/theme-dark@3/dark.css">
    <script src="https://cdn.jsdelivr.net/npm/sweetalert2@9/dist/sweetalert2.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/js-cookie@rc/dist/js.cookie.min.js"></script>
    <script src="https://unpkg.com/ionicons@5.1.2/dist/ionicons.js"></script>

    <script src="js/t_semestre1.js"></script>
</head>
<body>
    <form autocomplete="off" id="trayectoria1">
        <h1>Trayectoria de 1er Semestre</h1>
        <br>
        <?php
        $q_Alumno = "SELECT al.apellidos, al.nombre, tut.apellido_tut, tut.nombre_tut FROM alumno al
                     JOIN num_control_alumno ctr
                     ON ctr.num_ficha = al.num_ficha
                     JOIN tutor tut
                     ON al.id_tutor = tut.id_tutor
                     WHERE num_control = '$numControl'";
        $R_Alumno = mysqli_query($connect, $q_Alumno);
        while ($F_Alumno = $R_Alumno->fetch_assoc()){
        ?>
        <h2>Control: <?php echo $numControl ?></h2>
        <h2>Alumno: <?php echo $F_Alumno['nombre']." ".$F_Alumno['apellidos'] ?></h2>
        <input type="hidden" name="ctrAlumno" value="<?php echo $numControl ?>">
        <input type="hidden" name="nombreTutor" value="<?php echo $F_Alumno['nombre_tut']." ".$F_Alumno['apellido_tut'] ?>">
        <?php } ?>
        <table id="tabla_ingles">
            <tr>
                <td id="inglesth">
                    <b>¿Se encuentra cursando el idioma inglés?</b>
                    <br>
                    <label class="nivel_ingles">Sí:&nbsp;<input type="radio" name="ingles1" value="SÍ"></label>
                    <label class="nivel_ingles">No:&nbsp;<input type="radio" name="ingles1" value="NO"></label>
                </td>

                <td id="inglestd">
                    <div class="relIngles" id="relIngles">
                        <b>¿Qué nivel?</b>
                        <select name="nivel_ingles1" id="nivel_ingles">
                            <option value="">--- Seleccione Nivel ---</option>
                            <option value="Nivel Intro">Nivel Intro</option>
                            <option value="Nivel 1">Nivel 1</option>
                            <option value="Nivel 2">Nivel 2</option>
                            <option value="Nivel 3">Nivel 3</option>
                            <option value="Nivel 4">Nivel 4</option>
                            <option value="Nivel 5">Nivel 5</option>
                            <option value="Nivel 6">Nivel 6</option>
                            <option value="Nivel 7">Nivel 7</option>
                        </select>
                        <br><br>
                        <b>¿Realizó examen de ubicación?</b>
                        <label class="ingles_ubicacion">Sí:&nbsp;<input type="radio" name="ubicacion1" value="SÍ"></label>
                        <label class="ingles_ubicacion">No:&nbsp;<input type="radio" name="ubicacion1" value="NO"></label>
                    </div>
                </td>

            </tr>
        </table>
        <br>

        <label id="label_creditos">El alumno cuenta con créditos de Tutorías o Actividades Extraescolares:
            <select id="creditos_extras">
                <option value="">----------</option>
                <option value="SÍ">SÍ</option>
                <option value="NO">NO</option>
            </select>
        </label>
        <br><br>

        <table id="creditos">
            <tr>
                <th class="creditosth">Créditos de Tutorías</th>
                <th class="creditosth">Créditos de <br>Actividades Extraescolares</th>
                <th class="creditosth">Suma de  los 2 créditos</th>
            </tr>
            <tr>
                <td class="creditostd">
                    <label>Tutoría I:
                        <input type="text" id="tutoria1" name="tutoria1" minlength="1" maxlength="1" class="credito">
                    </label>
                </td>
                <td class="creditostd">
                    <label>Cultural:&nbsp;&nbsp;&nbsp;
                        <input type="text" id="cultural1" name="cultural1" minlength="1" maxlength="1" class="credito">
                    </label>
                    <br>

                    <label>Deportiva:
                        <input type="text" id="deportiva1" name="deportiva1" minlength="1" maxlength="1" class="credito">
                    </label>
                </td>
                <td class="creditostd">
                    <input type="text" id="suma_tcd" name="suma_tcd1" readonly>
                </td>
            </tr>
            <tr>
                <th class="creditostd2">Act. Extraescolar Cultural:</th>
                <td class="creditostd2" colspan="2">
                    <select name="actCultural" id="actCultural" class="nomActividad">
                        <option value="">----------</option>
                        <option value="Danza">Danza.</option>
                        <option value="Ajedrez">Ajedrez.</option>
                        <option value="Banda de guerra">Banda de Guerra.</option>
                        <option value="Pintura y artes plásticas">Pintura y Artes Plásticas.</option>
                        <option value="otra">Otra Actividad</option>
                    </select>
                    <input type="text" value="" name="otraCult" id="otraCult" class="otraActividad" placeholder="Nombre de la Actividad">
                </td>
            </tr>
            <tr>
                <th class="creditostd2">Act. Extraescolar Deportiva:</th>
                <td class="creditostd2" colspan="2">
                    <select name="actDeportiva" id="actDeportiva" class="nomActividad">
                        <option value="">----------</option>
                        <option value="Fútbol">Fútbol.</option>
                        <option value="Básquetbol">Básquetbol.</option>
                        <option value="Voleibol">Voleibol.</option>
                        <option value="Atletismo">Atletismo.</option>
                        <option value="otra">Otra Actividad</option>
                    </select>
                    <input type="text" value="" name="otraDepor" id="otraDepor" class="otraActividad" placeholder="Nombre de la Actividad">
                </td>
            </tr>
        </table>
        <br>

        <table id="materias" class="materias">
            <tr>
                <th colspan="3" class="materiasth">CALIFICACIONES FINALES POR ASIGNATURA</th>
            </tr>
            <tr>
                <th class="materiastd1">
                    <label title="Seleccione el número de materias cursadas">Número:
                        <select name="cantidad_materias1" id="cantidad_materias">
                            <option value="">-----</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                            <option value="6">6</option>
                            <option value="7">7</option>
                        </select>
                    </label>
                </th>
                <th class="materiastd2">Materia</th>
                <th class="materiastd3">Calificación</th>
            </tr>

            <tr class="fila-materias" id="fila-materias1">
                <td class="materiastd1">Materia 1</td>
                <td class="materiastd2">
                    <input type="text" placeholder="Nombre de la materia 1:" title="Ingrese el nombre de la materia 1" name="materia1" class="materiaN" value="">
                </td>
                <td class="materiastd3">
                    <input type="text" placeholder="Cal. 1:" title="Ingrese la calificación de la materia 1" name="calificacion1" class="calificacionN" value="" minlength="1" maxlength="3">
                </td>
            </tr>

            <tr class="fila-materias" id="fila-materias2">
                <td class="materiastd1">Materia 2</td>
                <td class="materiastd2">
                    <input type="text" placeholder="Nombre de la materia 2:" title="Ingrese el nombre de la materia 2" name="materia2" class="materiaN" value="">
                </td>
                <td class="materiastd3">
                    <input type="text" placeholder="Cal. 2:" title="Ingrese la calificación de la materia 2" name="calificacion2" class="calificacionN" value="" minlength="1" maxlength="3">
                </td>
            </tr>

            <tr class="fila-materias" id="fila-materias3">
                <td class="materiastd1">Materia 3</td>
                <td class="materiastd2">
                    <input type="text" placeholder="Nombre de la materia 3:" title="Ingrese el nombre de la materia 3" name="materia3" class="materiaN" value="">
                </td>
                <td class="materiastd3">
                    <input type="text" placeholder="Cal. 3:" title="Ingrese la calificación de la materia 3" name="calificacion3" class="calificacionN" value="" minlength="1" maxlength="3">
                </td>
            </tr>

            <tr class="fila-materias" id="fila-materias4">
                <td class="materiastd1">Materia 4</td>
                <td class="materiastd2">
                    <input type="text" placeholder="Nombre de la materia 4:" title="Ingrese el nombre de la materia 4" name="materia4" class="materiaN" value="">
                </td>
                <td class="materiastd3">
                    <input type="text" placeholder="Cal. 4:" title="Ingrese la calificación de la materia 4" name="calificacion4" class="calificacionN" value="" minlength="1" maxlength="3">
                </td>
            </tr>

            <tr class="fila-materias" id="fila-materias5">
                <td class="materiastd1">Materia 5</td>
                <td class="materiastd2">
                    <input type="text" placeholder="Nombre de la materia 5:" title="Ingrese el nombre de la materia 5" name="materia5" class="materiaN" value="">
                </td>
                <td class="materiastd3">
                    <input type="text" placeholder="Cal. 5:" title="Ingrese la calificación de la materia 5" name="calificacion5" class="calificacionN" value="" minlength="1" maxlength="3">
                </td>
            </tr>

            <tr class="fila-materias" id="fila-materias6">
                <td class="materiastd1">Materia 6</td>
                <td class="materiastd2">
                    <input type="text" placeholder="Nombre de la materia 6:" title="Ingrese el nombre de la materia 6" name="materia6" class="materiaN" value="">
                </td>
                <td class="materiastd3">
                    <input type="text" placeholder="Cal. 6:" title="Ingrese la calificación de la materia 6" name="calificacion6" class="calificacionN" value="" minlength="1" maxlength="3">
                </td>
            </tr>

            <tr class="fila-materias" id="fila-materias7">
                <td class="materiastd1">Materia 7</td>
                <td class="materiastd2">
                    <input type="text" placeholder="Nombre de la materia 7:" title="Ingrese el nombre de la materia 7" name="materia7" class="materiaN" value="">
                </td>
                <td class="materiastd3">
                    <input type="text" placeholder="Cal. 7:" title="Ingrese la calificación de la materia 7" name="calificacion7" class="calificacionN" value="" minlength="1" maxlength="3">
                </td>
            </tr>
        </table>
        <br>

        <table id="beca">
            <tr>
                <td class="becatd">
                    ¿Se encuentra Becado?
                    <label class="label_becado">Sí:&nbsp;<input type="radio" name="beca" value="SÍ"></label>
                    <label class="label_becado">No:&nbsp;<input type="radio" name="beca" value="NO"></label>
                </td>
                <td class="becatd">
                    <div id="relbeca" class="relbeca">
                        <input type="text" placeholder="Describir el tipo de Beca:" name="tipo_beca" id="tipo_beca">
                    </div>

                </td>
            </tr>
        </table>
        <br>

        <table id="materias2" class="materias2">
            <tr>
                <th class="materias2th">
                    <label title="Seleccione el número de materias por recursar">Materias por recursar:
                        <select name="materias_reprobadas" id="materias_reprobadas">
                            <option value="">-----</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                            <option value="6">6</option>
                            <option value="7">7</option>
                        </select>
                    </label>

                </th>
                <td class="materias2td">
                    <input type="text" name="materiarep1" id="materiarep1" class="materiarep" placeholder="Materia a recursar 1:">
                    <input type="text" name="materiarep2" id="materiarep2" class="materiarep" placeholder="Materia a recursar 2:">
                    <input type="text" name="materiarep3" id="materiarep3" class="materiarep" placeholder="Materia a recursar 3:">
                    <input type="text" name="materiarep4" id="materiarep4" class="materiarep" placeholder="Materia a recursar 4:">
                    <input type="text" name="materiarep5" id="materiarep5" class="materiarep" placeholder="Materia a recursar 5:">
                    <input type="text" name="materiarep6" id="materiarep6" class="materiarep" placeholder="Materia a recursar 6:">
                    <input type="text" name="materiarep7" id="materiarep7" class="materiarep" placeholder="Materia a recursar 7:">
                </td>
            </tr>
            <tr>
                <th class="materias2th">Canalizaciones del tutor a diferentes áreas:</th>
                <td class="materias2td">
                    <label class="label_foliocanali"><input type="checkbox" id="canalizacion1" name="canalizacion1" value="Área Médica">&nbsp;&nbsp;Área Médica:</label>
                    <input type="text" placeholder="Folio:" id="folioAM" name="folioAM" class="folios_canal" minlength="7" maxlength="7">

                    <br><label class="label_foliocanali"><input type="checkbox" id="canalizacion2" name="canalizacion2" value="Área Psicológica">&nbsp;&nbsp;Área Psicológica:</label>
                    <input type="text" placeholder="Folio:" id="folioAP" name="folioAP" class="folios_canal" minlength="7" maxlength="7">

                    <br><label class="label_foliocanali"><input type="checkbox" id="canalizacion3" name="canalizacion3" value="Asesoría Pares">&nbsp;&nbsp;Asesoría Pares:</label>
                    <input type="text" placeholder="Folio:" id="folioAPar" name="folioAPar" class="folios_canal" minlength="7" maxlength="7">

                    <br><label class="label_foliocanali"><input type="checkbox" id="canalizacion4" name="canalizacion4" value="Tutorías Individuales">&nbsp;&nbsp;Tutorías Individuales:</label>
                    <input type="text" placeholder="Folio:" id="folioTInd" name="folioTInd" class="folios_canal" minlength="7" maxlength="7">

                    <br><label class="label_foliocanali"><input type="checkbox" id="canalizacion5" name="canalizacion5" value="Otra Canalización">&nbsp;&nbsp;Otra Canalización:</label>
                    <input type="text" placeholder="Folio:" id="folioOtra" name="folioTInd" class="folios_canal" minlength="7" maxlength="7">
                </td>
            </tr>
            <tr>
                <th class="materias2th">Observaciones: "Agosto - Diciembre"
                </th>
                <td class="materias2td">
                    <textarea name="observaciones" id="observaciones" cols="40" rows="4" placeholder="Describa las observaciones que obtuvo del alumno durante el semestre..."></textarea>
                </td>
            </tr>
        </table>
        <br>

        <div id="contenedor2">
            <input type="submit" value="GUARDAR" class="btn-t1">
            <input type="button" value="CANCELAR" class="btn-t1" id="CerrarVentana1">
        </div>
    </form>
</body>
</html>