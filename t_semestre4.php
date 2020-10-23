<?php
require "php/BD_Connect.php";
$numControl = $_GET["matricula_alumno"];
?>
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <title>Trayectoria 4to Semestre</title>
    <link rel="shortcut icon" href="iconos/sem4.jpg" type="image/x-icon">
    <link rel="stylesheet" href="css/estilos-tsem4.css">

    <script src="js/jquery_3.4.1.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/sweetalert2@9.10.12/dist/sweetalert2.all.min.js"></script>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@sweetalert2/theme-dark@3/dark.css">
    <script src="https://cdn.jsdelivr.net/npm/sweetalert2@9/dist/sweetalert2.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/js-cookie@rc/dist/js.cookie.min.js"></script>
    <script src="https://unpkg.com/ionicons@5.1.2/dist/ionicons.js"></script>

    <script src="js/t_semestre4.js"></script>
</head>
<body>
    <form autocomplete="off" id="trayectoria4">
        <h1>Trayectoria de 4to Semestre</h1>
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
        <table id="tabla_ingles_4">
            <tr>
                <td id="inglesth_4">
                    <b>¿Se encuentra cursando el idioma inglés?</b>
                    <br>
                    <label class="nivel_ingles_4">Sí:&nbsp;<input type="radio" name="ingles_4" value="SÍ"></label>
                    <label class="nivel_ingles_4">No:&nbsp;<input type="radio" name="ingles_4" value="NO"></label>
                </td>

                <td id="inglestd_4">
                    <div class="relIngles_4" id="relIngles_4">
                        <b>¿Qué nivel?</b>
                        <select name="nivel_ingles_4" id="nivel_ingles_4">
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
                        <label class="ingles_ubicacion_4">Sí:&nbsp;<input type="radio" name="ubicacion_4" value="SÍ"></label>
                        <label class="ingles_ubicacion_4">No:&nbsp;<input type="radio" name="ubicacion_4" value="NO"></label>
                    </div>
                </td>
            </tr>
        </table>
        <br>

        <table id="creditos_4">
            <tr>
                <th class="creditosth_4">Créditos de Tutorías</th>
                <th class="creditosth_4">Créditos en Actividades Extraescolares</th>
                <th class="creditosth_4">Créditos en Actividad Complementaria</th>
                <th class="creditosth_4">Suma de los 3 Créditos</th>
            </tr>
            <tr>
                <td id="creditostd1_4" class="creditostd_4">
                    <label>Tutoría I y II:
                        <input type="text" id="tutoria_4" name="tutoria_4" minlength="1" maxlength="1" class="credito_4">
                    </label>
                </td>
                <td id="creditostd2_4" class="creditostd_4">
                    <label>Cultural:
                        <input type="text" id="cultural_4" name="cultural_4" minlength="1" maxlength="1" class="credito_4">
                    </label>
                    <br>

                    <label>Deportiva:
                        <input type="text" id="deportiva_4" name="deportiva_4" minlength="1" maxlength="1" class="credito_4">
                    </label>
                </td>
                <td id="creditostd3_4" class="creditostd_4">
                    <input type="text" id="complementaria_4" name="complementaria_4" minlength="1" maxlength="1">
                </td>
                <td id="creditostd4_4" class="creditostd_4">
                    <input type="text" id="suma_tcdc_4" name="suma_tcdc_4" readonly>
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

        <table id="materias_4" class="materias_4">
            <tr>
                <th colspan="4" class="materiasth_4">CALIFICACIONES FINALES POR ASIGNATURA</th>
            </tr>
            <tr>
                <th class="materiastd1_4">
                    <label title="Seleccione el número de materias cursadas">Número:
                        <select name="cantidad_materias_4" id="cantidad_materias_4">
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
                <th class="materiastd2_4">Materia</th>
                <th class="materiastd3_4">Calificación</th>
            </tr>

            <tr class="fila-materias_4" id="fila-materias1_4">
                <td class="materiastd1_4">Materia 1</td>
                <td class="materiastd2_4">
                    <input type="text" placeholder="Nombre de la materia 1:" title="Ingrese el nombre de la materia 1" name="materia1_4" class="materiaN_4" value="">
                </td>
                <td class="materiastd3_4">
                    <input type="text" placeholder="Cal. 1:" title="Ingrese la calificación de la materia 1" name="calificacion1_4" class="calificacionN_4" value="" minlength="1" maxlength="3">
                </td>
            </tr>

            <tr class="fila-materias_4" id="fila-materias2_4">
                <td class="materiastd1_4">Materia 2</td>
                <td class="materiastd2_4">
                    <input type="text" placeholder="Nombre de la materia 2:" title="Ingrese el nombre de la materia 2" name="materia2_4" class="materiaN_4" value="">
                </td>
                <td class="materiastd3_4">
                    <input type="text" placeholder="Cal. 2:" title="Ingrese la calificación de la materia 2" name="calificacion2_4" class="calificacionN_4" value="" minlength="1" maxlength="3">
                </td>
            </tr>

            <tr class="fila-materias_4" id="fila-materias3_4">
                <td class="materiastd1_4">Materia 3</td>
                <td class="materiastd2_4">
                    <input type="text" placeholder="Nombre de la materia 3:" title="Ingrese el nombre de la materia 3" name="materia3_4" class="materiaN_4" value="">
                </td>
                <td class="materiastd3_4">
                    <input type="text" placeholder="Cal. 3:" title="Ingrese la calificación de la materia 3" name="calificacion3_4" class="calificacionN_4" value="" minlength="1" maxlength="3">
                </td>
            </tr>

            <tr class="fila-materias_4" id="fila-materias4_4">
                <td class="materiastd1_4">Materia 4</td>
                <td class="materiastd2_4">
                    <input type="text" placeholder="Nombre de la materia 4:" title="Ingrese el nombre de la materia 4" name="materia4_4" class="materiaN_4" value="">
                </td>
                <td class="materiastd3_4">
                    <input type="text" placeholder="Cal. 4:" title="Ingrese la calificación de la materia 4" name="calificacion4_4" class="calificacionN_4" value="" minlength="1" maxlength="3">
                </td>
            </tr>

            <tr class="fila-materias_4" id="fila-materias5_4">
                <td class="materiastd1_4">Materia 5</td>
                <td class="materiastd2_4">
                    <input type="text" placeholder="Nombre de la materia 5:" title="Ingrese el nombre de la materia 5" name="materia5_4" class="materiaN_4" value="">
                </td>
                <td class="materiastd3_4">
                    <input type="text" placeholder="Cal. 5:" title="Ingrese la calificación de la materia 5" name="calificacion5_4" class="calificacionN_4" value="" minlength="1" maxlength="3">
                </td>
            </tr>

            <tr class="fila-materias_4" id="fila-materias6_4">
                <td class="materiastd1_4">Materia 6</td>
                <td class="materiastd2_4">
                    <input type="text" placeholder="Nombre de la materia 6:" title="Ingrese el nombre de la materia 6" name="materia6_4" class="materiaN_4" value="">
                </td>
                <td class="materiastd3_4">
                    <input type="text" placeholder="Cal. 6:" title="Ingrese la calificación de la materia 6" name="calificacion6_4" class="calificacionN_4" value="" minlength="1" maxlength="3">
                </td>
            </tr>

            <tr class="fila-materias_4" id="fila-materias7_4">
                <td class="materiastd1_4">Materia 7</td>
                <td class="materiastd2_4">
                    <input type="text" placeholder="Nombre de la materia 7:" title="Ingrese el nombre de la materia 7" name="materia7_4" class="materiaN_4" value="">
                </td>
                <td class="materiastd3_4">
                    <input type="text" placeholder="Cal. 7:" title="Ingrese la calificación de la materia 7" name="calificacion7_4" class="calificacionN_4" value="" minlength="1" maxlength="3">
                </td>
            </tr>
        </table>
        <br>

        <table id="beca_4">
            <tr>
                <td class="becatd_4">
                    ¿Se encuentra Becado?
                    <label class="label_becado_4">Sí:&nbsp;<input type="radio" name="beca_4" value="SÍ"></label>
                    <label class="label_becado_4">No:&nbsp;<input type="radio" name="beca_4" value="NO"></label>
                </td>
                <td class="becatd_4">
                    <div id="relbeca_4" class="relbeca_4">
                        <input type="text" placeholder="Describir el tipo de Beca:" name="tipo_beca_4" id="tipo_beca_4">
                    </div>

                </td>
            </tr>
        </table>
        <br>

        <table id="materias2_4" class="materias2_4">
            <tr>
                <th class="materias2th_4">
                    <label title="Seleccione el número de materias por recursar">Materias por recursar:
                        <select name="materias_reprobadas_4" id="materias_reprobadas_4">
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
                <td class="materias2td_4">
                    <input type="text" name="materiarep1_4" id="materiarep1_4" class="materiarep_4" placeholder="Materia a recursar 1:">
                    <input type="text" name="materiarep2_4" id="materiarep2_4" class="materiarep_4" placeholder="Materia a recursar 2:">
                    <input type="text" name="materiarep3_4" id="materiarep3_4" class="materiarep_4" placeholder="Materia a recursar 3:">
                    <input type="text" name="materiarep4_4" id="materiarep4_4" class="materiarep_4" placeholder="Materia a recursar 4:">
                    <input type="text" name="materiarep5_4" id="materiarep5_4" class="materiarep_4" placeholder="Materia a recursar 5:">
                    <input type="text" name="materiarep6_4" id="materiarep6_4" class="materiarep_4" placeholder="Materia a recursar 6:">
                    <input type="text" name="materiarep7_4" id="materiarep7_4" class="materiarep_4" placeholder="Materia a recursar 7:">
                </td>
            </tr>
            <tr>
                <th class="materias2th_4">Canalizaciones del tutor a diferentes áreas:</th>
                <td class="materias2td_4">
                    <label class="label_foliocanali_4"><input type="checkbox" id="canalizacion1_4" name="canalizacion4[]" value="Área Médica">&nbsp;&nbsp;Área Médica:</label>
                    <input type="text" placeholder="Folio:" id="folioAM_4" name="folioAM_4" class="folios_canal_4" minlength="7" maxlength="7">

                    <br><label class="label_foliocanali_4"><input type="checkbox" id="canalizacion2_4" name="canalizacion4[]" value="Área Psicológica">&nbsp;&nbsp;Área Psicológica:</label>
                    <input type="text" placeholder="Folio:" id="folioAP_4" name="folioAP_4" class="folios_canal_4" minlength="7" maxlength="7">

                    <br><label class="label_foliocanali_4"><input type="checkbox" id="canalizacion3_4" name="canalizacion4[]" value="Asesoría Pares">&nbsp;&nbsp;Asesoría Pares:</label>
                    <input type="text" placeholder="Folio:" id="folioAPar_4" name="folioAPar_4" class="folios_canal_4" minlength="7" maxlength="7">

                    <br><label class="label_foliocanali_4"><input type="checkbox" id="canalizacion4_4" name="canalizacion4[]" value="Tutorías Individuales">&nbsp;&nbsp;Tutorías Individuales:</label>
                    <input type="text" placeholder="Folio:" id="folioTInd_4" name="folioTInd_4" class="folios_canal_4" minlength="7" maxlength="7">

                    <br><label class="label_foliocanali_4"><input type="checkbox" id="canalizacion5_4" name="canalizacion4[]" value="Otra Canalización">&nbsp;&nbsp;Otra Canalización:</label>
                    <input type="text" placeholder="Folio:" id="folioOtra_4" name="folioTInd_4" class="folios_canal_4" minlength="7" maxlength="7">
                </td>
            </tr>
            <tr>
                <th class="materias2th_4">Observaciones: "Enero - Junio"
                </th>
                <td class="materias2td_4">
                    <textarea name="observaciones_4" id="observaciones_4" cols="40" rows="4" placeholder="Describa las observaciones que obtuvo del alumno durante el semestre..."></textarea>
                </td>
            </tr>
        </table>
        <br>

        <div id="contenedor2_4">
            <input type="submit" value="GUARDAR" class="btn-t1_4">
            <input type="button" value="CANCELAR" class="btn-t1_4" id="CerrarVentana4">
        </div>
    </form>
</body>
</html>