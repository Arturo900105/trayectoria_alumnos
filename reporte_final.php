<?php
require "php/BD_Connect.php";
?>
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <title>REPORTE FINAL</title>
    <link rel="stylesheet" href="css/estilo-reportefinal.css">

    <script src="js/jquery_3.4.1.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/sweetalert2@9.10.12/dist/sweetalert2.all.min.js"></script>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@sweetalert2/theme-dark@3/dark.css">
    <script src="https://cdn.jsdelivr.net/npm/sweetalert2@9/dist/sweetalert2.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/js-cookie@rc/dist/js.cookie.min.js"></script>

    <script src="js/alerta_reportfinal.js"></script>

</head>
<body>
    <div class="logos_reportef">
        <img src="img/logo_itsp.png" class="logosf">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <img src="img/logo_tecnm.png" class="logosf">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <img src="img/escudo_michoacan.png" class="logosf">
    </div>

    <h1>INSTITUTO TECNOLÓGICO SUPERIOR P’URHÉPECHA
        <br>DIRECCIÓN ACADÉMICA
        <br>PROGRAMA INSTITUCIONAL DE TUTORÍAS
        <br><br>REPORTE FINAL DE TUTORÍAS
    </h1>

    <form action="" method="" id="ReporteFinal">
        <div class="primerf">
            <select name="periodofinal" id="periodofinal">
                <option value="">--- PERIODO A EVALUAR: ---</option>
                <option onclick="limpiarf()" value="Agosto - Diciembre">Agosto - Diciembre</option>
                <option onclick="limpiarf()" value="Enero - Junio">Enero - Junio</option>
            </select>
        </div>

        <select name="nom_tutorf" id="nom_tutorf">
            <option value="">--- Nombre del Tutor: ---</option>
            <?php
            $consultaF = "SELECT * FROM tutor";
            $resultadoF = mysqli_query($connect, $consultaF);
            while ($tutor = $resultadoF->fetch_assoc()) {
                echo "<option value='".$tutor['nombre']." ".$tutor['apellido']."_".$tutor['area_de']."'>".$tutor['nombre']." ".$tutor['apellido']."</option>";
            }
            ?>
        </select>

        <label>Semestre:
            <select name="semestref" id="semestref" class="sem_grupf">
                <option value="">-----</option>
                <option class="sem_imparf" value="1">1</option>
                <option class="sem_parf" value="2">2</option>
                <option class="sem_imparf" value="3">3</option>
                <option class="sem_parf" value="4">4</option>
                <option class="sem_imparf" value="5">5</option>
                <option class="sem_parf" value="6">6</option>
                <option class="sem_imparf" value="7">7</option>
                <option class="sem_parf" value="8">8</option>
                <option class="sem_imparf" value="9">9</option>
                <option class="sem_parf" value="10">10</option>
            </select>
        </label>

        <label>Grupo:
            <select name="grupof" id="grupof" class="sem_grupf">
                <option value="">-----</option>
                <option class="grupos" value="A">A</option>
                <option class="grupos" value="B">B</option>
                <option class="grupos" value="C">C</option>
                <option class="grupos" value="D">D</option>
            </select>
        </label>
        <br><br>

        <input type="text" name="programaf" id="programaf" placeholder="--- Programa: ---" value="" readonly>

        <label>Núm. total de tutorados asignados:<input type="text"
                                                        id="num_tutoradof"
                                                        name="num_tutoradof"
                                                        title="Total de Alumnos equivalentes al 100%."
                                                        minlength="1"
                                                        maxlength="2"></label>

        <p>Núm./Porcentaje de estudiantes no acreditados (Por asignatura):</p>
        <table>
            <tr>
                <th class="nom_materia" colspan="2">Nombre de la Asignatura:</th>
                <th class="materia_reprobada">Núm.</th>
                <th class="porcentaje_reprobado">%</th>
            </tr>
            <tr>
                <td class="num_materia">1.-</td>
                <td class="nom_materia"><input type="text" name="materiaf1" class="materiaf"></td>
                <td class="materia_reprobada"><input type="text"
                                                     name="num_materiaf1"
                                                     class="num_materiaf"
                                                     minlength="1"
                                                     maxlength="2"></td>
                <td class="porcentaje_reprobado"><input type="text"
                                                        name="por_materiaf1"
                                                        class="por_materiaf"
                                                        maxlength="5"
                                                        readonly></td>
            </tr>
            <tr>
                <td class="num_materia">2.-</td>
                <td class="nom_materia"><input type="text" name="materiaf2" class="materiaf"></td>
                <td class="materia_reprobada"><input type="text"
                                                     name="num_materiaf2"
                                                     class="num_materiaf"
                                                     minlength="1"
                                                     maxlength="2"></td>
                <td class="porcentaje_reprobado"><input type="text"
                                                        name="por_materiaf2"
                                                        class="por_materiaf"
                                                        maxlength="5"
                                                        readonly></td></td>
            </tr>
            <tr>
                <td class="num_materia">3.-</td>
                <td class="nom_materia"><input type="text" name="materiaf3" class="materiaf"></td>
                <td class="materia_reprobada"><input type="text"
                                                     name="num_materiaf3"
                                                     class="num_materiaf"
                                                     minlength="1"
                                                     maxlength="2"></td>
                <td class="porcentaje_reprobado"><input type="text"
                                                        name="por_materiaf3"
                                                        class="por_materiaf"
                                                        maxlength="5"
                                                        readonly></td></td>
            </tr>
            <tr>
                <td class="num_materia">4.-</td>
                <td class="nom_materia"><input type="text" name="materiaf4" class="materiaf"></td>
                <td class="materia_reprobada"><input type="text"
                                                     name="num_materiaf4"
                                                     class="num_materiaf"
                                                     minlength="1"
                                                     maxlength="2"></td>
                <td class="porcentaje_reprobado"><input type="text"
                                                        name="por_materiaf4"
                                                        class="por_materiaf"
                                                        maxlength="5"
                                                        readonly></td></td>
            </tr>
            <tr>
                <td class="num_materia">5.-</td>
                <td class="nom_materia"><input type="text" name="materiaf5" class="materiaf"></td>
                <td class="materia_reprobada"><input type="text"
                                                     name="num_materiaf5"
                                                     class="num_materiaf"
                                                     minlength="1"
                                                     maxlength="2"></td>
                <td class="porcentaje_reprobado"><input type="text"
                                                        name="por_materiaf5"
                                                        class="por_materiaf"
                                                        maxlength="5"
                                                        readonly></td></td>
            </tr>
            <tr>
                <td class="num_materia">6.-</td>
                <td class="nom_materia"><input type="text" name="materiaf6" class="materiaf"></td>
                <td class="materia_reprobada"><input type="text"
                                                     name="num_materiaf6"
                                                     class="num_materiaf"
                                                     minlength="1"
                                                     maxlength="2"></td>
                <td class="porcentaje_reprobado"><input type="text"
                                                        name="por_materiaf6"
                                                        class="por_materiaf"
                                                        maxlength="5"
                                                        readonly></td></td>
            </tr>
        </table>
        <br>

        <label>Reuniones efectuadas en el periodo:<input type="text" name="reuniones" class="cajasf_numrbd"  minlength="1" maxlength="3"></label>
        <label id="desertadosf">Número de estudiantes que desertaron:<input type="text" name="desertados" class="cajasf_numrbd"  minlength="1" maxlength="3"></label>
        <br><br>

        <label>Número de estudiantes becarios:<input type="text" id="num_becadof" name="num_becadof" class="cajasf_numrbd"  minlength="1" maxlength="3"></label>
        <input type="text" id="becariosf" name="becariosf" placeholder="Tipo de Beca:">
        <br><br>

        <table>
            <tr>
                <td class="nom_canalizaciones">Número de canalizaciones a asesoría pares:</td>
                <td class="num_canalizaciones"><input type="text"
                                                      name="num_canalif1"
                                                      class="num_canalif"
                                                      minlength="1"
                                                      maxlength="2"></td>
            </tr>
            <tr>
                <td class="nom_canalizaciones">Número de canalizaciones al área de psicología:</td>
                <td class="num_canalizaciones"><input type="text"
                                                      name="num_canalif2"
                                                      class="num_canalif"
                                                      minlength="1"
                                                      maxlength="2"></td>
            </tr>
            <tr>
                <td class="nom_canalizaciones">Número de canalizaciones al consultorio médico:</td>
                <td class="num_canalizaciones"><input type="text"
                                                      name="num_canalif3"
                                                      class="num_canalif"
                                                      minlength="1"
                                                      maxlength="2"></td>
            </tr>
            <tr>
                <td class="nom_canalizaciones">Número de canalizaciones al área de pedagogía:</td>
                <td class="num_canalizaciones"><input type="text"
                                                      name="num_canalif4"
                                                      class="num_canalif"
                                                      minlength="1"
                                                      maxlength="2"></td>
            </tr>
        </table>

        <textarea class="area_texto" name="problematicaf" cols="80" rows="2" placeholder="Problemática general detectada en el periodo:" title="Problemática general detectada en el periodo"></textarea>

        <textarea class="area_texto" name="necesidadesf" cols="80" rows="2" placeholder="Necesidades tutoriales específicas:" title="Necesidades tutoriales específicas"></textarea>

        <textarea class="area_texto" name="desertoresf" cols="80" rows="2" placeholder="En caso de existir desertores describir el motivo:" title="En caso de existir desertores describir el motivo"></textarea>

        <textarea class="area_texto" name="rec_obsf" cols="80" rows="2" placeholder="Recomendaciones/Observaciones:" title="Recomendaciones/Observaciones"></textarea>

        <div class="botones_reportef">
            <input type="submit" value="GUARDAR" class="bot-generadoresf">
            <input type="button" id="imprimirRF" value="IMPRIMIR" class="bot-generadoresf">
            <input type="button" value="SALIR" class="bot-generadoresf" onclick="history.back()">
        </div>
    </form>
    <br>

    <div id="base_reportef">
        Carretera: Uruapan–Carapan; Km. 31.5; CP. 60270; Cherán, Mich.
        <br>Tels. 01(443) 292 1023 y (443) 292 1026; e-mail: its-purhepecha@its-purhepecha.edu.mx
        <br><b>www.tecnm.mx | www.its-purhepecha.edu.mx</b>
    </div>

</body>
</html>