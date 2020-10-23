<?php
require "php/BD_Connect.php";
$numControl = $_GET["matricula_alumno"];
?>
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <title>Trayectoria 5to Semestre</title>
    <link rel="shortcut icon" href="iconos/sem5.jpg" type="image/x-icon">
    <link rel="stylesheet" href="css/estilos-tsem5.css">

    <script src="js/jquery_3.4.1.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/sweetalert2@9.10.12/dist/sweetalert2.all.min.js"></script>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@sweetalert2/theme-dark@3/dark.css">
    <script src="https://cdn.jsdelivr.net/npm/sweetalert2@9/dist/sweetalert2.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/js-cookie@rc/dist/js.cookie.min.js"></script>
    <script src="https://unpkg.com/ionicons@5.1.2/dist/ionicons.js"></script>

    <script src="js/t_semestre5.js"></script>
</head>
<body>
    <form autocomplete="off" id="trayectoria5">
        <h1>Trayectoria de 5to Semestre</h1>
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
        <table id="tabla_ingles_5">
            <tr>
                <td id="inglesth_5">
                    <b>¿Se encuentra cursando el idioma inglés?</b>
                    <br>
                    <label class="nivel_ingles_5">Sí:&nbsp;<input type="radio" name="ingles_5" value="SÍ"></label>
                    <label class="nivel_ingles_5">No:&nbsp;<input type="radio" name="ingles_5" value="NO"></label>
                </td>

                <td id="inglestd_5">
                    <div class="relIngles_5" id="relIngles_5">
                        <b>¿Qué nivel?</b>
                        <select name="nivel_ingles_5" id="nivel_ingles_5">
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
                        <label class="ingles_ubicacion_5">Sí:&nbsp;<input type="radio" name="ubicacion_5" value="SÍ"></label>
                        <label class="ingles_ubicacion_5">No:&nbsp;<input type="radio" name="ubicacion_5" value="NO"></label>
                    </div>
                </td>
            </tr>
        </table>
        <br>

        <table id="creditos_5">
            <tr>
                <th class="creditosth_5">Créditos de Tutorías</th>
                <th class="creditosth_5">Créditos en Actividades Extraescolares</th>
                <th class="creditosth_5">Créditos en Actividad Complementaria</th>
                <th class="creditosth_5">Suma de los 3 Créditos</th>
            </tr>
            <tr>
                <td id="creditostd1_5" class="creditostd_5">
                    <label>Tutoría I y II:
                        <input type="text" id="tutoria_5" name="tutoria_5" minlength="1" maxlength="1" class="credito_5">
                    </label>
                </td>
                <td id="creditostd2_5" class="creditostd_5">
                    <label>Cultural:
                        <input type="text" id="cultural_5" name="cultural_5" minlength="1" maxlength="1" class="credito_5">
                    </label>
                    <br>

                    <label>Deportiva:
                        <input type="text" id="deportiva_5" name="deportiva_5" minlength="1" maxlength="1" class="credito_5">
                    </label>
                </td>
                <td id="creditostd3_5" class="creditostd_5">
                    <input type="text" id="complementaria_5" name="complementaria_5" minlength="1" maxlength="1">
                </td>
                <td id="creditostd4_5" class="creditostd_5">
                    <input type="text" id="suma_tcdc_5" name="suma_tcdc_5" readonly>
                </td>
            </tr>
            <tr id="fila1">
                <td class="creditostd2" colspan="4">
                    <select name="actCultural" id="actCultural" class="nomActividad">
                        <option value="">Act. Extraescolar Cultural:</option>
                        <option value="Danza">Danza.</option>
                        <option value="Ajedrez">Ajedrez.</option>
                        <option value="Banda de guerra">Banda de Guerra.</option>
                        <option value="Pintura y artes plásticas">Pintura y Artes Plásticas.</option>
                        <option value="otra">Otra Actividad</option>
                    </select>
                    <input type="text" value="" name="otraCult" id="otraCult" class="otraActividad" placeholder="Nombre de la Actividad">
                </td>
            </tr>
            <tr id="fila2">
                <td class="creditostd2" colspan="4">
                    <select name="actDeportiva" id="actDeportiva" class="nomActividad">
                        <option value="">Act. Extraescolar Deportiva:</option>
                        <option value="Fútbol">Fútbol.</option>
                        <option value="Básquetbol">Básquetbol.</option>
                        <option value="Voleibol">Voleibol.</option>
                        <option value="Atletismo">Atletismo.</option>
                        <option value="otra">Otra Actividad</option>
                    </select>
                    <input type="text" value="" name="otraDepor" id="otraDepor" class="otraActividad" placeholder="Nombre de la Actividad">
                </td>
            </tr>
            <tr id="fila3">
                <td class="creditostd3" colspan="4">
                    <select name="actComple" id="actComple">
                        <option value="">Nombre de la Actividad Complementaria:</option>
                        <option value="Apoyo a proyectos de investigación">Apoyo a proyectos de investigación.</option>
                        <option value="Producción de invernadero">Producción de invernadero.</option>
                        <option value="Programa de alto rendimiento académico">Programa de alto rendimiento académico.</option>
                        <option value="Club de robótica (ISIC)">Club de robótica (ISIC).</option>
                        <option value="Eventos académicos">Eventos académicos.</option>
                        <option value="Taller de prototipos (ISIC)">Taller de prototipos (ISIC).</option>
                        <option value="Mantenimiento y operación de la planta purificadora del ITSP">Mantenimiento y operación de la planta purificadora del ITSP.</option>
                        <option value="Cursos y talleres sobre temas a fines a (IIND)">Cursos y talleres sobre temas a fines a (IIND).</option>
                        <option value="Club de energías renovables (IENR)">Club de energías renovables (IENR).</option>
                        <option value="E-SPORTS">E-SPORTS.</option>
                        <option value="Apoyo al sistema de gestión ambiental">Apoyo al sistema de gestión ambiental.</option>
                        <option value="Apoyo al sistema de gestión de la calidad">Apoyo al sistema de gestión de la calidad.</option>
                        <option value="otra">Otra Actividad Complementaria</option>
                    </select>
                    <br>
                    <input type="text" value="" name="otraComple" id="otraComple" placeholder="Nombre de la Actividad Complementaria">
                </td>
            </tr>
        </table>
        <br>

        <table id="materias_5" class="materias_5">
            <tr>
                <th colspan="5" class="materiasth_5">CALIFICACIONES FINALES POR ASIGNATURA</th>
            </tr>
            <tr>
                <th class="materiastd1_5">
                    <label title="Seleccione el número de materias cursadas">Número:
                        <select name="cantidad_materias_5" id="cantidad_materias_5">
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
                <th class="materiastd2_5">Materia</th>
                <th class="materiastd3_5">Calificación</th>
            </tr>

            <tr class="fila-materias_5" id="fila-materias1_5">
                <td class="materiastd1_5">Materia 1</td>
                <td class="materiastd2_5">
                    <input type="text" placeholder="Nombre de la materia 1:" title="Ingrese el nombre de la materia 1" name="materia1_5" class="materiaN_5" value="">
                </td>
                <td class="materiastd3_5">
                    <input type="text" placeholder="Cal. 1:" title="Ingrese la calificación de la materia 1" name="calificacion1_5" class="calificacionN_5" value="" minlength="1" maxlength="3">
                </td>
            </tr>

            <tr class="fila-materias_5" id="fila-materias2_5">
                <td class="materiastd1_5">Materia 2</td>
                <td class="materiastd2_5">
                    <input type="text" placeholder="Nombre de la materia 2:" title="Ingrese el nombre de la materia 2" name="materia2_5" class="materiaN_5" value="">
                </td>
                <td class="materiastd3_5">
                    <input type="text" placeholder="Cal. 2:" title="Ingrese la calificación de la materia 2" name="calificacion2_5" class="calificacionN_5" value="" minlength="1" maxlength="3">
                </td>
            </tr>

            <tr class="fila-materias_5" id="fila-materias3_5">
                <td class="materiastd1_5">Materia 3</td>
                <td class="materiastd2_5">
                    <input type="text" placeholder="Nombre de la materia 3:" title="Ingrese el nombre de la materia 3" name="materia3_5" class="materiaN_5" value="">
                </td>
                <td class="materiastd3_5">
                    <input type="text" placeholder="Cal. 3:" title="Ingrese la calificación de la materia 3" name="calificacion3_5" class="calificacionN_5" value="" minlength="1" maxlength="3">
                </td>
            </tr>

            <tr class="fila-materias_5" id="fila-materias4_5">
                <td class="materiastd1_5">Materia 4</td>
                <td class="materiastd2_5">
                    <input type="text" placeholder="Nombre de la materia 4:" title="Ingrese el nombre de la materia 4" name="materia4_5" class="materiaN_5" value="">
                </td>
                <td class="materiastd3_5">
                    <input type="text" placeholder="Cal. 4:" title="Ingrese la calificación de la materia 4" name="calificacion4_5" class="calificacionN_5" value="" minlength="1" maxlength="3">
                </td>
            </tr>

            <tr class="fila-materias_5" id="fila-materias5_5">
                <td class="materiastd1_5">Materia 5</td>
                <td class="materiastd2_5">
                    <input type="text" placeholder="Nombre de la materia 5:" title="Ingrese el nombre de la materia 5" name="materia5_5" class="materiaN_5" value="">
                </td>
                <td class="materiastd3_5">
                    <input type="text" placeholder="Cal. 5:" title="Ingrese la calificación de la materia 5" name="calificacion5_5" class="calificacionN_5" value="" minlength="1" maxlength="3">
                </td>
            </tr>

            <tr class="fila-materias_5" id="fila-materias6_5">
                <td class="materiastd1_5">Materia 6</td>
                <td class="materiastd2_5">
                    <input type="text" placeholder="Nombre de la materia 6:" title="Ingrese el nombre de la materia 6" name="materia6_5" class="materiaN_5" value="">
                </td>
                <td class="materiastd3_5">
                    <input type="text" placeholder="Cal. 6:" title="Ingrese la calificación de la materia 6" name="calificacion6_5" class="calificacionN_5" value="" minlength="1" maxlength="3">
                </td>
            </tr>

            <tr class="fila-materias_5" id="fila-materias7_5">
                <td class="materiastd1_5">Materia 7</td>
                <td class="materiastd2_5">
                    <input type="text" placeholder="Nombre de la materia 7:" title="Ingrese el nombre de la materia 7" name="materia7_5" class="materiaN_5" value="">
                </td>
                <td class="materiastd3_5">
                    <input type="text" placeholder="Cal. 7:" title="Ingrese la calificación de la materia 7" name="calificacion7_5" class="calificacionN_5" value="" minlength="1" maxlength="3">
                </td>
            </tr>
        </table>
        <br>

        <table id="beca_5">
            <tr>
                <td class="becatd_5">
                    ¿Se encuentra Becado?
                    <label class="label_becado_5">Sí:&nbsp;<input type="radio" name="beca_5" value="SÍ"></label>
                    <label class="label_becado_5">No:&nbsp;<input type="radio" name="beca_5" value="NO"></label>
                </td>
                <td class="becatd_5">
                    <div id="relbeca_5" class="relbeca_5">
                        <input type="text" placeholder="Describir el tipo de Beca:" name="tipo_beca_5" id="tipo_beca_5">
                    </div>

                </td>
            </tr>
        </table>
        <br>

        <table id="materias2_5" class="materias2_5">
            <tr>
                <th class="materias2th_5">
                    <label title="Seleccione el número de materias por recursar">Materias por recursar:
                        <select name="materias_reprobadas_5" id="materias_reprobadas_5">
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
                <td class="materias2td_5">
                    <input type="text" name="materiarep1_5" id="materiarep1_5" class="materiarep_5" placeholder="Materia a recursar 1:">
                    <input type="text" name="materiarep2_5" id="materiarep2_5" class="materiarep_5" placeholder="Materia a recursar 2:">
                    <input type="text" name="materiarep3_5" id="materiarep3_5" class="materiarep_5" placeholder="Materia a recursar 3:">
                    <input type="text" name="materiarep4_5" id="materiarep4_5" class="materiarep_5" placeholder="Materia a recursar 4:">
                    <input type="text" name="materiarep5_5" id="materiarep5_5" class="materiarep_5" placeholder="Materia a recursar 5:">
                    <input type="text" name="materiarep6_5" id="materiarep6_5" class="materiarep_5" placeholder="Materia a recursar 6:">
                    <input type="text" name="materiarep7_5" id="materiarep7_5" class="materiarep_5" placeholder="Materia a recursar 7:">
                </td>
            </tr>
            <tr>
                <th class="materias2th_5">Canalizaciones del tutor a diferentes áreas:</th>
                <td class="materias2td_5">
                    <label class="label_foliocanali_5"><input type="checkbox" id="canalizacion1_5" name="canalizacion5" value="Área Médica">&nbsp;Área Médica:</label>
                    <input type="text" placeholder="Folio:" id="folioAM_5" name="folioAM_5" class="folios_canal_5" minlength="7" maxlength="7">

                    <br><label class="label_foliocanali_5"><input type="checkbox" id="canalizacion2_5" name="canalizacion5" value="Área Psicológica">&nbsp;Área Psicológica:</label>
                    <input type="text" placeholder="Folio:" id="folioAP_5" name="folioAP_5" class="folios_canal_5" minlength="7" maxlength="7">

                    <br><label class="label_foliocanali_5"><input type="checkbox" id="canalizacion3_5" name="canalizacion5" value="Asesoría Pares">&nbsp;Asesoría Pares:</label>
                    <input type="text" placeholder="Folio:" id="folioAPar_5" name="folioAPar_5" class="folios_canal_5" minlength="7" maxlength="7">

                    <br><label class="label_foliocanali_5"><input type="checkbox" id="canalizacion4_5" name="canalizacion5" value="Tutorías Individuales">&nbsp;Tutorías Individuales:</label>
                    <input type="text" placeholder="Folio:" id="folioTInd_5" name="folioTInd_5" class="folios_canal_5" minlength="7" maxlength="7">

                    <br><label class="label_foliocanali_5"><input type="checkbox" id="canalizacion5_5" name="canalizacion5" value="Otra Canalización">&nbsp;Otra Canalización:</label>
                    <input type="text" placeholder="Folio:" id="folioOtra_5" name="folioTInd_5" class="folios_canal_5" minlength="7" maxlength="7">
                </td>
            </tr>
            <tr>
                <th class="materias2th_5">Observaciones: "Agosto - Diciembre"
                </th>
                <td class="materias2td_5">
                    <textarea name="observaciones_5" id="observaciones_5" cols="40" rows="4" placeholder="Describa las observaciones que obtuvo del alumno durante el semestre..."></textarea>
                </td>
            </tr>
        </table>
        <br>

        <div id="contenedor2_5">
            <input type="submit" value="GUARDAR" class="btn-t1_5">
            <input type="button" value="CANCELAR" class="btn-t1_5" id="CerrarVentana5">
        </div>
    </form>
</body>
</html>