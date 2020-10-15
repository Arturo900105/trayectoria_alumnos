<?php
require "php/BD_Connect.php";
$numFicha = $_GET["ficha_alumno"];
?>
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <title>Formulario (CAPT)</title>
    <link rel="shortcut icon" href="iconos/semC.jpg" type="image/x-icon">
    <link rel="stylesheet" href="css/estilos-tcappt.css">

    <script src="js/jquery_3.4.1.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/sweetalert2@9.10.12/dist/sweetalert2.all.min.js"></script>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@sweetalert2/theme-dark@3/dark.css">
    <script src="https://cdn.jsdelivr.net/npm/sweetalert2@9/dist/sweetalert2.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/js-cookie@rc/dist/js.cookie.min.js"></script>
    <script src="https://unpkg.com/ionicons@5.1.2/dist/ionicons.js"></script>

    <script src="js/t_cappt.js"></script>
</head>
    <body>
        <form id="formulario_capt" autocomplete="off">
            <h1 >Caracterización del Alumno por Parte del Tutor</h1>
            <br>
            <?php
                $q_Alumno = "SELECT num_ficha,apellidos,nombre FROM alumno WHERE num_ficha = '$numFicha'";
                $R_Alumno = mysqli_query($connect, $q_Alumno);
                while ($F_Alumno = $R_Alumno->fetch_assoc()){
            ?>
                    <h2>Ficha: <?php echo $F_Alumno['num_ficha'] ?>.</h2>
                    <h2>Alumno: <?php echo $F_Alumno['nombre']." ".$F_Alumno['apellidos'] ?>.</h2>
                    <input type="hidden" name="num_fichaAlumno" value="<?php echo $F_Alumno['num_ficha'] ?>">

            <?php } ?>
            <br><br>

            <label><b>Ingresar el Número de Control del alumno:</b>
                <input type="text" name="num_control" id="num_control" maxlength="7" minlength="7">
            </label>
            <br><br>

            <b>¿Trabaja?</b>
            <label class="trabaja" ><input type="radio" name="trabaja" value="SÍ">Sí.</label>
            <label class="trabaja" ><input type="radio" name="trabaja" value="NO">No.</label>

            <label class="opt_ITSP"><b>Consideraste al ITSP como:</b>
                <select name="opciones" id="opciones">
                    <option value="">----------</option>
                    <option value="1ra opción">1ra opción</option>
                    <option value="2da opción">2da opción</option>
                    <option value="3ra opción">3ra opción</option>
                </select>
            </label>
            <br><br>

            <table id="puntaje">
                <tr>
                    <th colspan="2" id="punt_exam" class="puntaje_examen">Puntaje del Examen de admisión:</th>
                </tr>
                <tr>
                    <td class="puntaje_examen"><label>EXANI–II:<input type="text" class="punt_examen" id="exani" name="exani" maxlength="4"></label></td>
                    <td class="puntaje_examen"><label>COSNET:<input type="text" class="punt_examen" id="cosnet" name="cosnet" maxlength="4"></label></td>
                </tr>
            </table>
            <br>

            <b>Hablante de la lengua P'urépecha:</b>
            <label class="hablante_pu"><input type="radio" name="hablante_purepecha" value="SÍ">Sí.</label>
            <label class="hablante_pu"><input type="radio" name="hablante_purepecha" value="NO">No.</label>


            <label class="discap"><b>Discapacidad:</b>
                <select name="discapacidad" id="discapacidad">
                    <option value="Ninguna">----------</option>
                    <option value="Motriz">Motriz</option>
                    <option value="Intelectual">Intelectual</option>
                    <option value="Múltiple">Múltiple</option>
                    <option value="Auditiva">Auditiva</option>
                    <option value="Visual">Visual</option>
                    <option value="Psicosocial">Psicosocial</option>
                </select>
            </label>

            <div id="diagnosticos_pm">
                <textarea name="diag_psico" class="diagnosticos" cols="40" rows="3" title="Diagnóstico Psicológico" placeholder="Diagnóstico Psicológico:"></textarea>
                <textarea name="diag_medico" class="diagnosticos" cols="40" rows="3" title="Diagnóstico Médico" placeholder="Diagnóstico Médico:"></textarea>
            </div>

            <br>

            <label><b>Tipos de riesgo a la salud:</b>
                <select name="riesgo_salud" id="riesgo_salud">
                    <option value="">----------</option>
                    <option value="Riesgo de Accidentes">Riesgo de Accidentes</option>
                    <option value="Riesgo Leve">Riesgo Leve</option>
                    <option value="Riesgo Moderado">Riesgo Moderado</option>
                </select>
            </label>
            <br><br>

            <label><b>Estilos de Aprendizaje:</b>
                <label class="est_apre"><input type="checkbox" name="aprendizaje[]" class="aprendizaje" value="Visual">Visual.</label>
                <label class="est_apre"><input type="checkbox" name="aprendizaje[]" class="aprendizaje" value="Auditivo">Auditivo.</label>
                <label class="est_apre"><input type="checkbox" name="aprendizaje[]" class="aprendizaje" value="Kinestésico">Kinestésico.</label>

            </label>
            <br><br>

            <table id="habitos">
                <tr>
                    <th colspan="3" class="habitos_th">Hábitos de Estudio:</th>
                </tr>
                <tr>
                    <td class="habitos_td"><label for="habitosOE">Organización</label></td>
                    <td class="habitos_td"><label for="habitosTE">Técnicas</label></td>
                    <td class="habitos_td"><label for="habitosME">Motivación</label></td>
                </tr>
                <tr>
                    <td class="habitos_td">
                        <select name="habitosOE" id="habitosOE" class="habitos_OTME">
                            <option value="">----------</option>
                            <option value="MA">Muy Alto</option>
                            <option value="A">Alto</option>
                            <option value="PEP">Por Encima del Promedio</option>
                            <option value="PA">Promedio Alto</option>
                            <option value="P">Promedio</option>
                            <option value="PB">Promedio Bajo</option>
                            <option value="PDP">Por Debajo del Promedio</option>
                            <option value="B">Bajo</option>
                            <option value="MB">Muy Bajo</option>
                        </select>
                    </td>
                    <td class="habitos_td">
                        <select name="habitosTE" id="habitosTE" class="habitos_OTME">
                            <option value="">----------</option>
                            <option value="MA">Muy Alto</option>
                            <option value="A">Alto</option>
                            <option value="PEP">Por Encima del Promedio</option>
                            <option value="PA">Promedio Alto</option>
                            <option value="P">Promedio</option>
                            <option value="PB">Promedio Bajo</option>
                            <option value="PDP">Por Debajo del Promedio</option>
                            <option value="B">Bajo</option>
                            <option value="MB">Muy Bajo</option>
                        </select>
                    </td>
                    <td class="habitos_td">
                        <select name="habitosME" id="habitosME" class="habitos_OTME">
                            <option value="">----------</option>
                            <option value="MA">Muy Alto</option>
                            <option value="A">Alto</option>
                            <option value="PEP">Por Encima del Promedio</option>
                            <option value="PA">Promedio Alto</option>
                            <option value="P">Promedio</option>
                            <option value="PB">Promedio Bajo</option>
                            <option value="PDP">Por Debajo del Promedio</option>
                            <option value="B">Bajo</option>
                            <option value="MB">Muy Bajo</option>
                        </select>
                    </td>
                </tr>
            </table>
            <br>

            <b>Orientación Vocacional:</b>
            <label class="ori_voc"><input type="checkbox" name="bloque[]" class="bloque_ov" value="1">Bloque 1.</label>
            <label class="ori_voc"><input type="checkbox" name="bloque[]" class="bloque_ov" value="2">Bloque 2.</label>
            <label class="ori_voc"><input type="checkbox" name="bloque[]" class="bloque_ov" value="3">Bloque 3.</label>
            <label class="ori_voc"><input type="checkbox" name="bloque[]" class="bloque_ov" value="4">Bloque 4.</label>
            <br><br>

            <label><b>Evaluación de ortografía:</b>
                <select class="evaluaciones" id="eval_ort" name="eval_ort">
                    <option value="">----------</option>
                    <option value="MA">Muy Alto</option>
                    <option value="A">Alto</option>
                    <option value="PEP">Por Encima del Promedio</option>
                    <option value="PA">Promedio Alto</option>
                    <option value="P">Promedio</option>
                    <option value="PB">Promedio Bajo</option>
                    <option value="PDP">Por Debajo del Promedio</option>
                    <option value="B">Bajo</option>
                    <option value="MB">Muy Bajo</option>
                </select>
            </label>
            <br><br>

            <label><b>Evaluación de redacción:</b>
                <select class="evaluaciones" id="eval_reda" name="eval_reda">
                    <option value="">----------</option>
                    <option value="MA">Muy Alto</option>
                    <option value="A">Alto</option>
                    <option value="PEP">Por Encima del Promedio</option>
                    <option value="PA">Promedio Alto</option>
                    <option value="P">Promedio</option>
                    <option value="PB">Promedio Bajo</option>
                    <option value="PDP">Por Debajo del Promedio</option>
                    <option value="B">Bajo</option>
                    <option value="MB">Muy Bajo</option>
                </select>
            </label>
            <br><br>

            <table id="cursos">
                <tr>
                    <th colspan="3" class="thcursos">Resultados del curso Propedéutico:</th>
                </tr>
                <tr>
                    <td class="tdcursos1">Curso 1:</td>
                    <td class="tdcursos2"><input type="text" class="nombre_curso" name="nom_curso1" title="Nombre del curso 1"></td>
                    <td class="tdcursos3"><input type="text" class="result_curso" name="res_curso1" minlength="1" maxlength="3" title="Calificación del curso 1"></td>
                </tr>
                <tr>
                    <td class="tdcursos1">Curso 2:</td>
                    <td class="tdcursos2"><input type="text" class="nombre_curso" name="nom_curso2" title="Nombre del curso 2"></td>
                    <td class="tdcursos3"><input type="text" class="result_curso" name="res_curso2" minlength="1" maxlength="3" title="Calificación del curso 2"></td>
                </tr>
                <tr>
                    <td class="tdcursos1">Curso 3:</td>
                    <td class="tdcursos2"><input type="text" class="nombre_curso" name="nom_curso3" title="Nombre del curso 3"></td>
                    <td class="tdcursos3"><input type="text" class="result_curso" name="res_curso3" minlength="1" maxlength="3" title="Calificación del curso 3"></td>
                </tr>
            </table>
            <br>

            <div class="botones_cappt">
                <input type="submit" value="GUARDAR" class="btn_cappt">
                <input type="button" value="CANCELAR" class="btn_cappt" id="cerrarCAPPT" onclick="window.close();">
            </div>
        </form>
    </body>
</html>