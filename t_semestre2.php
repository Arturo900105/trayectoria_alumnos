<?php
require "php/BD_Connect.php";
$numControl = $_GET["matricula_alumno"];
?>
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <title>Trayectoria 2do Semestre</title>
    <link rel="shortcut icon" href="iconos/sem2.jpg" type="image/x-icon">
    <link rel="stylesheet" href="css/estilos-tsem2.css">

    <script src="js/jquery_3.4.1.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/sweetalert2@9.10.12/dist/sweetalert2.all.min.js"></script>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@sweetalert2/theme-dark@3/dark.css">
    <script src="https://cdn.jsdelivr.net/npm/sweetalert2@9/dist/sweetalert2.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/js-cookie@rc/dist/js.cookie.min.js"></script>
    <script src="https://unpkg.com/ionicons@5.1.2/dist/ionicons.js"></script>

    <script src="js/t_semestre2.js"></script>
</head>
<body>
    <form autocomplete="off" id="trayectoria2">
        <h1>Trayectoria de 2do Semestre</h1>
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
        <table id="tabla_ingles_2">
            <tr>
                <td id="inglesth_2">
                    <b>¿Se encuentra cursando el idioma inglés?</b>
                    <br>
                    <label class="nivel_ingles_2">Sí:&nbsp;<input type="radio" name="ingles_2" value="SÍ"></label>
                    <label class="nivel_ingles_2">No:&nbsp;<input type="radio" name="ingles_2" value="NO"></label>
                </td>

                <td id="inglestd_2">
                    <div class="relIngles_2" id="relIngles_2">
                        <b>¿Qué nivel?</b>
                        <select name="nivel_ingles_2" id="nivel_ingles_2">
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
                        <label class="ingles_ubicacion_2">Sí:&nbsp;<input type="radio" name="ubicacion_2" value="SÍ"></label>
                        <label class="ingles_ubicacion_2">No:&nbsp;<input type="radio" name="ubicacion_2" value="NO"></label>
                    </div>
                </td>
            </tr>
        </table>
        <br>

        <label id="label_creditos2">El alumno cuenta con créditos de Tutorías o Actividades Extraescolares:
            <select id="creditos_extras2">
                <option value="">----------</option>
                <option value="SÍ">SÍ</option>
                <option value="NO">NO</option>
            </select>
        </label>
        <br><br>

        <table id="creditos_2">
            <tr>
                <th class="creditosth_2">Créditos de Tutorías</th>
                <th class="creditosth_2">Créditos de <br>Actividades Extraescolares</th>
                <th class="creditosth_2">Suma de  los 2 créditos</th>
            </tr>
            <tr>
                <td class="creditostd_2">
                    <label>Tutoría II:
                        <input type="text" id="tutoria_2" name="tutoria_2" minlength="1" maxlength="1" class="credito_2">
                    </label>
                </td>
                <td class="creditostd_2">
                    <label>Cultural:&nbsp;&nbsp;&nbsp;
                        <input type="text" id="cultural_2" name="cultural_2" minlength="1" maxlength="1" class="credito_2">
                    </label>
                    <br>

                    <label>Deportiva:
                        <input type="text" id="deportiva_2" name="deportiva_2" minlength="1" maxlength="1" class="credito_2">
                    </label>
                </td>
                <td class="creditostd_2">
                    <input type="text" id="suma_tcd_2" name="suma_tcd_2" readonly>
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

        <table id="materias_2" class="materias_2">
            <tr>
                <th colspan="3" class="materiasth_2">CALIFICACIONES FINALES POR ASIGNATURA</th>
            </tr>
            <tr>
                <th class="materiastd1_2">
                    <label title="Seleccione el número de materias cursadas">Número:
                        <select name="cantidad_materias_2" id="cantidad_materias_2">
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
                <th class="materiastd2_2">Materia</th>
                <th class="materiastd3_2">Calificación</th>
            </tr>

            <tr class="fila-materias_2" id="fila-materias1_2">
                <td class="materiastd1_2">Materia 1</td>
                <td class="materiastd2_2">
                    <input type="text" placeholder="Nombre de la materia 1:" title="Ingrese el nombre de la materia 1" name="materia1_2" class="materiaN_2" value="">
                </td>
                <td class="materiastd3_2">
                    <input type="text" placeholder="Cal. 1:" title="Ingrese la calificación de la materia 1" name="calificacion1_2" class="calificacionN_2" value="" minlength="1" maxlength="3">
                </td>
            </tr>

            <tr class="fila-materias_2" id="fila-materias2_2">
                <td class="materiastd1_2">Materia 2</td>
                <td class="materiastd2_2">
                    <input type="text" placeholder="Nombre de la materia 2:" title="Ingrese el nombre de la materia 2" name="materia2_2" class="materiaN_2" value="">
                </td>
                <td class="materiastd3_2">
                    <input type="text" placeholder="Cal. 2:" title="Ingrese la calificación de la materia 2" name="calificacion2_2" class="calificacionN_2" value="" minlength="1" maxlength="3">
                </td>
            </tr>

            <tr class="fila-materias_2" id="fila-materias3_2">
                <td class="materiastd1_2">Materia 3</td>
                <td class="materiastd2_2">
                    <input type="text" placeholder="Nombre de la materia 3:" title="Ingrese el nombre de la materia 3" name="materia3_2" class="materiaN_2" value="">
                </td>
                <td class="materiastd3_2">
                    <input type="text" placeholder="Cal. 3:" title="Ingrese la calificación de la materia 3" name="calificacion3_2" class="calificacionN_2" value="" minlength="1" maxlength="3">
                </td>
            </tr>

            <tr class="fila-materias_2" id="fila-materias4_2">
                <td class="materiastd1_2">Materia 4</td>
                <td class="materiastd2_2">
                    <input type="text" placeholder="Nombre de la materia 4:" title="Ingrese el nombre de la materia 4" name="materia4_2" class="materiaN_2" value="">
                </td>
                <td class="materiastd3_2">
                    <input type="text" placeholder="Cal. 4:" title="Ingrese la calificación de la materia 4" name="calificacion4_2" class="calificacionN_2" value="" minlength="1" maxlength="3">
                </td>
            </tr>

            <tr class="fila-materias_2" id="fila-materias5_2">
                <td class="materiastd1_2">Materia 5</td>
                <td class="materiastd2_2">
                    <input type="text" placeholder="Nombre de la materia 5:" title="Ingrese el nombre de la materia 5" name="materia5_2" class="materiaN_2" value="">
                </td>
                <td class="materiastd3_2">
                    <input type="text" placeholder="Cal. 5:" title="Ingrese la calificación de la materia 5" name="calificacion5_2" class="calificacionN_2" value="" minlength="1" maxlength="3">
                </td>
            </tr>

            <tr class="fila-materias_2" id="fila-materias6_2">
                <td class="materiastd1_2">Materia 6</td>
                <td class="materiastd2_2">
                    <input type="text" placeholder="Nombre de la materia 6:" title="Ingrese el nombre de la materia 6" name="materia6_2" class="materiaN_2" value="">
                </td>
                <td class="materiastd3_2">
                    <input type="text" placeholder="Cal. 6:" title="Ingrese la calificación de la materia 6" name="calificacion6_2" class="calificacionN_2" value="" minlength="1" maxlength="3">
                </td>
            </tr>

            <tr class="fila-materias_2" id="fila-materias7_2">
                <td class="materiastd1_2">Materia 7</td>
                <td class="materiastd2_2">
                    <input type="text" placeholder="Nombre de la materia 7:" title="Ingrese el nombre de la materia 7" name="materia7_2" class="materiaN_2" value="">
                </td>
                <td class="materiastd3_2">
                    <input type="text" placeholder="Cal. 7:" title="Ingrese la calificación de la materia 7" name="calificacion7_2" class="calificacionN_2" value="" minlength="1" maxlength="3">
                </td>
            </tr>
        </table>
        <br>

        <table id="beca_2">
            <tr>
                <td class="becatd_2">
                    ¿Se encuentra Becado?
                    <label class="label_becado_2">Sí:&nbsp;<input type="radio" name="beca_2" value="SÍ"></label>
                    <label class="label_becado_2">No:&nbsp;<input type="radio" name="beca_2" value="NO"></label>
                </td>
                <td class="becatd_2">
                    <div id="relbeca_2" class="relbeca_2">
                        <input type="text" placeholder="Describir el tipo de Beca:" name="tipo_beca_2" id="tipo_beca_2">
                    </div>

                </td>
            </tr>
        </table>
        <br>

        <table id="materias2_2" class="materias2_2">
            <tr>
                <th class="materias2th_2">
                    <label title="Seleccione el número de materias por recursar">Materias por recursar:
                        <select name="materias_reprobadas_2" id="materias_reprobadas_2">
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
                <td class="materias2td_2">
                    <input type="text" name="materiarep1_2" id="materiarep1_2" class="materiarep_2" placeholder="Materia a recursar 1:">
                    <input type="text" name="materiarep2_2" id="materiarep2_2" class="materiarep_2" placeholder="Materia a recursar 2:">
                    <input type="text" name="materiarep3_2" id="materiarep3_2" class="materiarep_2" placeholder="Materia a recursar 3:">
                    <input type="text" name="materiarep4_2" id="materiarep4_2" class="materiarep_2" placeholder="Materia a recursar 4:">
                    <input type="text" name="materiarep5_2" id="materiarep5_2" class="materiarep_2" placeholder="Materia a recursar 5:">
                    <input type="text" name="materiarep6_2" id="materiarep6_2" class="materiarep_2" placeholder="Materia a recursar 6:">
                    <input type="text" name="materiarep7_2" id="materiarep7_2" class="materiarep_2" placeholder="Materia a recursar 7:">
                </td>
            </tr>
            <tr>
                <th class="materias2th_2">Canalizaciones del tutor a diferentes áreas:</th>
                <td class="materias2td_2">
                    <label class="label_foliocanali_2"><input type="checkbox" id="canalizacion1_2" name="canalizacion1_2" value="Área Médica">&nbsp;&nbsp;Área Médica:</label>
                    <input type="text" placeholder="Folio:" id="folioAM_2" name="folioAM_2" class="folios_canal_2" minlength="7" maxlength="7">

                    <br><label class="label_foliocanali_2"><input type="checkbox" id="canalizacion2_2" name="canalizacion2_2" value="Área Psicológica">&nbsp;&nbsp;Área Psicológica:</label>
                    <input type="text" placeholder="Folio:" id="folioAP_2" name="folioAP_2" class="folios_canal_2" minlength="7" maxlength="7">

                    <br><label class="label_foliocanali_2"><input type="checkbox" id="canalizacion3_2" name="canalizacion3_2" value="Asesoría Pares">&nbsp;&nbsp;Asesoría Pares:</label>
                    <input type="text" placeholder="Folio:" id="folioAPar_2" name="folioAPar_2" class="folios_canal_2" minlength="7" maxlength="7">

                    <br><label class="label_foliocanali_2"><input type="checkbox" id="canalizacion4_2" name="canalizacion4_2" value="Tutorías Individuales">&nbsp;&nbsp;Tutorías Individuales:</label>
                    <input type="text" placeholder="Folio:" id="folioTInd_2" name="folioTInd_2" class="folios_canal_2" minlength="7" maxlength="7">

                    <br><label class="label_foliocanali_2"><input type="checkbox" id="canalizacion5_2" name="canalizacion5_2" value="Otra Canalización">&nbsp;&nbsp;Otra Canalización:</label>
                    <input type="text" placeholder="Folio:" id="folioOtra_2" name="folioTInd_2" class="folios_canal_2" minlength="7" maxlength="7">
                </td>
            </tr>
            <tr>
                <th class="materias2th_2">Observaciones: "Enero - Junio"
                </th>
                <td class="materias2td_2">
                    <textarea name="observaciones_2" id="observaciones_2" cols="40" rows="4" placeholder="Describa las observaciones que obtuvo del alumno durante el semestre..."></textarea>
                </td>
            </tr>
        </table>
        <br>

        <div id="contenedor2_2">
            <input type="submit" value="GUARDAR" class="btn-t1_2">
            <input type="button" value="CANCELAR" class="btn-t1_2" id="CerrarVentana2">
        </div>
    </form>
</body>
</html>