<?php
require "php/BD_Connect.php";
?>
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <title>REPORTE PARCIAL</title>
    <link rel="stylesheet" href="css/esitlo-reporteparcial.css">
    <link rel="shortcut icon" href="iconos/icon3.png" type="image/x-icon">
    <script src="js/jquery_3.4.1.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/sweetalert2@9.10.12/dist/sweetalert2.all.min.js"></script>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@sweetalert2/theme-dark@3/dark.css">
    <script src="https://cdn.jsdelivr.net/npm/sweetalert2@9/dist/sweetalert2.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/js-cookie@rc/dist/js.cookie.min.js"></script>

    <script src="js/alerta_reportparcial.js"></script>

</head>
<body>
    <div class="logos_reporte">
        <img src="img/logo_itsp.png" class="logos">
        <img src="img/logo_tecnm.png" class="logos">
        <img src="img/escudo_michoacan.png" class="logos">
    </div>

        <h1>INSTITUTO TECNOLÓGICO SUPERIOR P’URHÉPECHA
            <br>DIRECCIÓN ACADÉMICA
            <br>PROGRAMA INSTITUCIONAL DE TUTORÍAS
            <br><br>REPORTE PARCIAL
        </h1>

    <form action="" method="" id="ReporteParcial" autocomplete="off">
        <div class="primer">
            <label for="periodo"><b>PERIODO A EVALUAR:</b></label>
            <select name="periodo" id="periodo">
                <option value="">----------</option>
                <option class="periodop" value="Agosto - Diciembre">Agosto - Diciembre</option>
                <option class="periodop" value="Enero - Junio">Enero - Junio</option>
            </select>
            <br><br>

            <b class="label_report">REPORTE:</b>
            <label class="label_numreport">1<input type="radio" name="num_reporte" value="1"></label>
            <label class="label_numreport">2<input type="radio" name="num_reporte" value="2"></label>
            <label class="label_numreport">3<input type="radio" name="num_reporte" value="3"></label>
            <b class="label_tut">DE TUTORÍAS.</b>
        </div>
        <br><br>

        <select name="nom_tutor" id="nom_tutor">
            <option value="">--- Nombre del Tutor: ---</option>
            <?php
            $consulta = "SELECT * FROM tutor";
            $resultado = mysqli_query($connect, $consulta);
            while ($tutor = $resultado->fetch_assoc()) {
                echo "<option value='".$tutor['nombre_tut']." ".$tutor['apellido_tut']."_".$tutor['area_de']."'>".$tutor['nombre_tut']." ".$tutor['apellido_tut']."</option>";
            }
            ?>
        </select>

        <label>Semestre:
            <select name="semestre" id="semestre" class="sem_grup">
                <option value="">-----</option>
                <option class="sem_impar" value="1">1</option>
                <option class="sem_par" value="2">2</option>
                <option class="sem_impar" value="3">3</option>
                <option class="sem_par" value="4">4</option>
                <option class="sem_impar" value="5">5</option>
                <option class="sem_par" value="6">6</option>
                <option class="sem_impar" value="7">7</option>
                <option class="sem_par" value="8">8</option>
                <option class="sem_impar" value="9">9</option>
                <option class="sem_par" value="10">10</option>
            </select>
        </label>

        <label>Grupo:
            <select name="grupo" id="grupo" class="sem_grup">
                <option value="">-----</option>
                <option class="grupos" value="A">A</option>
                <option class="grupos" value="B">B</option>
                <option class="grupos" value="C">C</option>
                <option class="grupos" value="D">D</option>
            </select>
        </label>
        <br><br>

        <input type="text" name="programap" id="programap" placeholder="--- Programa: ---" value="" readonly>

        <label>Núm. Total de tutorados asignados:<input type="text"
                                                          id="num_tutoradop"
                                                          name="num_tutoradop"
                                                          title="Total de Alumnos equivalentes al 100%."
                                                          minlength="1"
                                                          maxlength="2"></label>
        <br><br>

        <p>Núm./Porcentaje de estudiantes no acreditados (Por asignatura):</p>
        <table>
            <tr>
                <th colspan="2" class="nom_materia">Nombre de la Asignatura:</th>
                <th class="materia_reprobada">Núm.</th>
                <th class="porcentaje_reprobado">%</th>
            </tr>
            <tr>
                <td class="num_materia">1.-</td>
                <td class="nom_materia"><input type="text" class="materia" name="materia1" value=""></td>
                <td class="materia_reprobada"><input type="text"
                                                     id="num_materia1"
                                                     class="num-materia"
                                                     minlength="1"
                                                     maxlength="2"
                                                     name="materia_rep1"></td>

                <td class="porcentaje_reprobado"><input type="text"
                                                        id="por_materia1"
                                                        class="por-materia"
                                                        maxlength="5"
                                                        readonly
                                                        name="por_materia1"></td>
            </tr>
            <tr>
                <td class="num_materia">2.-</td>
                <td class="nom_materia"><input type="text" class="materia" name="materia2" value=""></td>
                <td class="materia_reprobada"><input type="text"
                                                     id="num_materia2"
                                                     class="num-materia"
                                                     minlength="1"
                                                     maxlength="2"
                                                     name="materia_rep2"></td>

                <td class="porcentaje_reprobado"><input type="text"
                                                        id="por_materia2"
                                                        class="por-materia"
                                                        maxlength="5"
                                                        readonly
                                                        name="por_materia2"></td>
            </tr>
            <tr>
                <td class="num_materia">3.-</td>
                <td class="nom_materia"><input type="text" class="materia" name="materia3" value=""></td>
                <td class="materia_reprobada"><input type="text"
                                                     id="num_materia3"
                                                     class="num-materia"
                                                     minlength="1"
                                                     maxlength="2"
                                                     name="materia_rep3"></td>

                <td class="porcentaje_reprobado"><input type="text"
                                                        id="por_materia3"
                                                        class="por-materia"
                                                        maxlength="5"
                                                        readonly
                                                        name="por_materia3"></td>
            </tr>
            <tr>
                <td class="num_materia">4.-</td>
                <td class="nom_materia"><input type="text" class="materia" name="materia4" value=""></td>
                <td class="materia_reprobada"><input type="text"
                                                     id="num_materia4"
                                                     class="num-materia"
                                                     minlength="1"
                                                     maxlength="2"
                                                     name="materia_rep4"></td>

                <td class="porcentaje_reprobado"><input type="text"
                                                        id="por_materia4"
                                                        class="por-materia"
                                                        maxlength="5"
                                                        readonly
                                                        name="por_materia4"></td>
            </tr>
            <tr>
                <td class="num_materia">5.-</td>
                <td class="nom_materia"><input type="text" class="materia" name="materia5" value=""></td>
                <td class="materia_reprobada"><input type="text"
                                                     id="num_materia5"
                                                     class="num-materia"
                                                     minlength="1"
                                                     maxlength="2"
                                                     name="materia_rep5"></td>

                <td class="porcentaje_reprobado"><input type="text"
                                                        id="por_materia5"
                                                        class="por-materia"
                                                        maxlength="5"
                                                        readonly
                                                        name="por_materia5"></td>
            </tr>
            <tr>
                <td class="num_materia">6.-</td>
                <td class="nom_materia"><input type="text" class="materia" name="materia6" value=""></td>
                <td class="materia_reprobada"><input type="text"
                                                     id="num_materia6"
                                                     class="num-materia"
                                                     minlength="1"
                                                     maxlength="2"
                                                     name="materia_rep6"></td>

                <td class="porcentaje_reprobado"><input type="text"
                                                        id="por_materia6"
                                                        class="por-materia"
                                                        maxlength="5"
                                                        readonly
                                                        name="por_materia6"></td>
            </tr>
        </table>
        <br>

        <label>Reuniones efectuadas en el periodo:<input type="text" name="reuniones" class="cajas_numrbd" minlength="1" maxlength="3"></label>
        <label id="desertados">Número de estudiantes que desertaron:<input type="text" name="desertados" class="cajas_numrbd" minlength="1" maxlength="3"></label>
        <br><br>

        <label>Número de estudiantes becarios:<input type="text" name="num_becados" class="cajas_numrbd" minlength="1" maxlength="3"></label>
        <input type="text" id="becarios" name="becarios" placeholder="Tipo de Beca:">
        <br><br>

        <table>
            <tr>
                <td class="nom_canalizaciones">Número de canalizaciones a asesoría pares:</td>
                <td class="num_canalizaciones"><input type="text"
                                                      name="num_canalip1"
                                                      class="num_canalip"
                                                      minlength="1"
                                                      maxlength="2"></td>
            </tr>
            <tr>
                <td class="nom_canalizaciones">Número de canalizaciones al área de psicología:</td>
                <td class="num_canalizaciones"><input type="text"
                                                      name="num_canalip2"
                                                      class="num_canalip"
                                                      minlength="1"
                                                      maxlength="2"></td>
            </tr>
            <tr>
                <td class="nom_canalizaciones">Número de canalizaciones al consultorio médico:</td>
                <td class="num_canalizaciones"><input type="text"
                                                      name="num_canalip3"
                                                      class="num_canalip"
                                                      minlength="1"
                                                      maxlength="2"></td>
            </tr>
            <tr>
                <td class="nom_canalizaciones">Número de canalizaciones al área de pedagogía:</td>
                <td class="num_canalizaciones"><input type="text"
                                                      name="num_canalip4"
                                                      class="num_canalip"
                                                      minlength="1"
                                                      maxlength="2"></td>
            </tr>
        </table>
        <br>

        <label for="problematica">Problemática general detectada en el periodo:</label>
        <br><textarea title="Problemática general detectada en el periodo" class="area_texto" name="problematica" cols="70" rows="2"></textarea>
        <br><br>

        <label for="necesidades">Necesidades tutoriales específicas:</label>
        <br><textarea title="Necesidades tutoriales específicas" class="area_texto" name="necesidades" cols="70" rows="2"></textarea>
        <br><br>

        <label for="desertores">En caso de existir desertores describir el motivo:</label>
        <br><textarea title="En caso de existir desertores describir el motivo" class="area_texto" name="desertores" cols="70" rows="2"></textarea>
        <br><br>

        <label for="rec_obs">Recomendaciones/Observaciones:</label>
        <br><textarea title="Recomendaciones/Observaciones" class="area_texto" name="recobser" cols="70" rows="2"></textarea>
        <br>

        <div class="botones_reporte">
            <input type="submit" value="GUARDAR" class="bot-generadores">
            <input type="button" value="IMPRIMIR" id="imprimirRP" class="bot-generadores">
            <input type="button" value="SALIR" class="bot-generadores" id="cerrarRParcial" onclick="history.back()">
            <a id="id_rparcial_href" target="_blank" href=""></a>
        </div>
    </form>
    <br>

    <div id="base_reporte">
            Carretera: Uruapan–Carapan; Km. 31.5; CP. 60270; Cherán, Mich.
        <br>Tels. 01(443) 292 1023 y (443) 292 1026; e-mail: its-purhepecha@its-purhepecha.edu.mx
        <br><b>www.tecnm.mx | www.its-purhepecha.edu.mx</b>
    </div>
</body>
</html>