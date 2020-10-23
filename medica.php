<?php
require "php/BD_Connect.php";
session_name("ALUMNO");
session_start();
$letSessionA = $_SESSION["usuAlumno"];

if ($letSessionA == null || $letSessionA == "") {
    echo "<!doctype html>
              <html lang='es' style='height: 100%; display: flex; align-items: center; justify-content: center;'>
                  <head>
                    <meta charset='UTF-8'>
                    <meta name='viewport' content='width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0'>
                    <meta http-equiv='X-UA-Compatible' content='ie=edge'>
                    <title>Área Médica</title>
                    <link rel='shortcut icon' href='iconos/medica.jpg' type='image/x-icon'>
                  </head>
                  <body style='text-align: center;'>
                    <h1 style='font-family: Arial; margin: 0; font-size: 35px; color: red;'>
                        DEBES INICIAR SESIÓN PARA PODER VER EL
                        <br>EXAMEN MÉDICO
                    </h1>
                    <img style='height: 15em; padding: 15px 0;' src='img/logo_itsp.png'>
                    <h2 style='margin: 0; font-family: Arial; font-size: 30px;'>Coordinación Institucional de Tutoría Académica
                    <br>Instituto Tecnológico Superior P'urhépecha
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
    <title>Área Médica</title>
    <link rel="shortcut icon" href="iconos/medica.jpg" type="image/x-icon">
    <link rel="stylesheet" href="css/estilos-medica.css">

    <script src="js/jquery_3.4.1.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/sweetalert2@9.10.12/dist/sweetalert2.all.min.js"></script>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@sweetalert2/theme-dark@3/dark.css">
    <script src="https://cdn.jsdelivr.net/npm/sweetalert2@9/dist/sweetalert2.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/js-cookie@rc/dist/js.cookie.min.js"></script>

    <script src="js/alerta_medica.js"></script>
</head>

<body>
    <h1>ÁREA MÉDICA</h1>
    <form action="" method="" id="medica_alumno" autocomplete="off">

        <h2 class="dato">Ficha: <?php echo $letSessionA; ?></h2>
        <h2 class="dato" id="alumno"></h2>
        <h2 class="dato" id="carrera"></h2>
        <h2 class="dato" id="generacion"></h2>
        <br><br>

        <input type="hidden" value="" id="ficha_alumno" name="ficha_alumno">
        <input type="hidden" value="" id="sexo_alumno" name="sexo_alumno">


        <label><b>Teléfonos de Emergencia:</b>
            <input type="tel"
                   name="tel_obligatorio"
                   class="tel_em"
                   minlength="10"
                   maxlength="10"
                   placeholder="Obligatorio"
                   value="">
        </label>
        <label><b>ó</b>
            <input type="tel"
                   name="tel_opcional"
                   class="tel_em"
                   minlength="0"
                   maxlength="10"
                   placeholder="Opcional"
                   value="">
        </label>
        <br><br><br>

        <div class="cont1">
            <h2>1- Exploración física:</h2>
            <br>
            <table id="tabla1">
                <tr>
                    <td class="columna1">1.- Peso:</td>
                    <td class="columna2">
                        <input type="text"
                               id="peso"
                               name="peso"
                               minlength="2"
                               maxlength="5"
                               onkeypress="return filterFloat(event,this);"
                               >kg.
                    </td>
                </tr>
                <tr>
                    <td class="columna1">2.- Talla (estatura):</td>
                    <td class="columna2">
                        <input type="text"
                               step="any"
                               id="talla"
                               name="talla"
                               minlength="4"
                               maxlength="4"
                               onkeypress="return filterFloat(event,this);"
                               >m.
                    </td>
                </tr>
                <tr>
                    <td class="columna1">3.- Tipo de sangre:</td>
                    <td class="columna2">
                        <select name="sangre" id="sangre">
                            <option value="">---------------</option>
                            <option value="A NEGATIVO">A NEGATIVO</option>
                            <option value="A POSITIVO">A POSITIVO</option>
                            <option value="AB NEGATIVO">AB NEGATIVO</option>
                            <option value="AB POSITIVO">AB POSITIVO</option>
                            <option value="B NEGATIVO">B NEGATIVO</option>
                            <option value="B POSITIVO">B POSITIVO</option>
                            <option value="O NEGATIVO">O NEGATIVO</option>
                            <option value="O POSITIVO">O POSITIVO</option>

                        </select>
                </tr>
            </table>
        </div>
        <div class="cont2">
            <h2>2- Antecedentes Heredofamiliares:</h2>
            <br>
            <div class="preg_enfer">
                ¿Alguno de sus familiares ha sido diagnósticado con...?
            </div><br>
            <div class="enfermedades">
                <label class="label_anteherd"><input type="checkbox" class="ante_hered" name="ante_hered[]" value="Diabetes">: Diabetes.</label>
                <br>
                <label class="label_anteherd"><input type="checkbox" class="ante_hered" name="ante_hered[]" value="Hipertensión">: Hipertensión.</label>
                <br>
                <label class="label_anteherd"><input type="checkbox" class="ante_hered" name="ante_hered[]" value="Cancer">: Cancer.</label>
                <br>
                <label class="label_anteherd"><input type="checkbox" class="ante_hered" name="ante_hered[]" value="Enfermedad del Corazón">: Enfermedad del Corazón.</label>
                <br>
                <label class="label_anteherd"><input type="checkbox" class="ante_hered" name="ante_hered[]" value="Convulsión">: Convulsión.</label>
                <br>
                <label class="label_anteherd"><input type="checkbox" class="ante_hered" name="ante_hered[]" value="Ninguno">: Ninguno.</label>
                <br>
                <label class="label_anteherd"><input type="checkbox" class="ante_hered" name="ante_hered[]" value="" id="otro_ante">&nbsp;&nbsp;Otro(s):</label>
                <input id="otro_hered" type="text" name="otro_hered" placeholder="Especifíca!!!" value="">
            </div>
        </div>
        <br><br>

        <div class="cont3">
            <h2>3- Antecedentes personales no patológicos:</h2>
            <br>
            <table id="tabla2">
                <tr>
                    <td class="columna3_1">
                        Toxicomanías:
                    </td>
                    <td class="columna3_2">
                        &nbsp;&nbsp;<label>SÍ:<input type="radio" name="toxi" value="SÍ"></label>
                        <br>
                        <label>NO:<input type="radio" name="toxi" value="NO"></label>
                    </td>
                    <td class="columna3_3">
                        <label class="label_toxic"><input type="checkbox" class="toxics" name="toxicomanias[]" value="Drogas">: Drogas.</label>
                        <br>
                        <label class="label_toxic"><input type="checkbox" class="toxics" name="toxicomanias[]" value="Alcoholismo">: Alcoholismo.</label>
                        <br>
                        <label class="label_toxic"><input type="checkbox" class="toxics" name="toxicomanias[]" value="Tabaquismo">: Tabaquismo.</label>
                    </td>
                    <td class="columna3_4">
                        <input class="toxicomanias" name="tox_frecuencia" type="text" placeholder="¿Frecuencia?">
                    </td>
                </tr>

                <tr id="solo-femenino">
                    <td class="columna3_1">Embarazo:</td>
                    <td class="columna3_2">
                        &nbsp;&nbsp;<label>SÍ:<input type="radio" name="embarazo" value="SÍ"></label>
                        <br>
                        <label>NO:<input type="radio" name="embarazo" value="NO"></label>
                    </td>
                    <td colspan="2" class="colum_comb">
                        <input class="embarazo" name="tiempo_embarazo" type="text" placeholder="¿Cuántos meses o semanas?">
                    </td>
                </tr>

                <tr>
                    <td class="columna3_1">Actividad Fisica:</td>
                    <td class="columna3_2">
                        &nbsp;&nbsp;<label>SÍ:<input type="radio" name="act_fisica" value="SÍ"></label>
                        <br>
                        <label>NO:<input type="radio" name="act_fisica" value="NO"></label>
                    </td>
                    <td colspan="2" class="colum_comb">
                        <input type="text" name="esp_act" class="ejercicio"  placeholder="Especifica!!!">&nbsp;&nbsp;&nbsp;
                        <input type="text" name="tiempo_act" class="ejercicio" placeholder="¿Cuántas Horas?">
                    </td>
                </tr>
            </table>
        </div>
        <br><br>
        <div class="cont4">
            <h2>4- Antecedentes personales patológicos:</h2>
            <br>
            <table id="tabla3">
                <tr>
                    <td class="columna4_1">Alergias:</td>
                    <td class="columna4_2"><label>SÍ:<input type="radio" name="alergias" value="SÍ"></label></td>
                    <td class="columna4_2"><label>NO:<input type="radio" name="alergias" value="NO"></label></td>
                    <td class="columna4_3" rowspan="3">
                        <textarea class="alergias" name="esp_alergia" placeholder="Especifica!!!"></textarea>
                    </td>
                </tr>
                <tr>
                    <td class="columna4_1">Quirúrgicos/Cirugías:</td>
                    <td class="columna4_2"><label>SÍ:<input type="radio" name="qui_cir" value="SÍ"></label></td>
                    <td class="columna4_2"><label>NO:<input type="radio" name="qui_cir" value="NO"></label></td>
                </tr>
                <tr>
                    <td class="columna4_1">Transfusionales:</td>
                    <td class="columna4_2"><label>SÍ:<input type="radio" name="transfusionales" value="SÍ"></label></td>
                    <td class="columna4_2"><label>NO:<input type="radio" name="transfusionales" value="NO"></label></td>
                </tr>
                <tr>
                    <td class="columna4_1">Diabetes:</td>
                    <td class="columna4_2"><label>SÍ:<input type="radio" name="diabetes" value="SÍ"></label></td>
                    <td class="columna4_2"><label>NO:<input type="radio" name="diabetes" value="NO"></label></td>
                    <td class="columna4_3">
                        <select name="diab_tipo" class="diab_tipo">
                            <option value="">--- ¿Tipo? ---</option>
                            <option value="Diabetes Mellitus 1">Mellitus Tipo 1</option>
                            <option value="Diabetes Mellitus 2">Mellitus Tipo 2</option>
                            <option value="Diabetes Gestacional" id="gestacional">Diabetes Gestacional</option>
                            <option value="Diabetes Relacionada con Fibrosis Quística">Diabetes RFQ</option>
                            <option value="Diabetes de Aparición en la Madurez en los Jóvenes">Diabetes MODY</option>
                            <option value="Diabetes Secundaria a Medicamentos">Diabetes SM</option>
                        </select>
                    </td>
                </tr>
                <tr>
                    <td class="columna4_1">Hipertensión:</td>
                    <td class="columna4_2"><label>SÍ:<input type="radio" name="hipertension" value="SÍ"></label></td>
                    <td class="columna4_2"><label>NO:<input type="radio" name="hipertension" value="NO"></label></td>
                    <td class="columna4_3" rowspan="3">
                        <p class="tipos">
                                RFQ: Diabetes Relacionada con Fibrosis Quística.
                            <br>MODY: Diabetes de Aparición en la Madurez en los Jóvenes.
                            <br>SM: Diabetes Secundaria a Medicamentos.
                        </p>
                    </td>
                </tr>
                <tr>
                    <td class="columna4_1">Convulsiones:</td>
                    <td class="columna4_2"><label>SÍ:<input type="radio" name="convulsiones" value="SÍ"></label></td>
                    <td class="columna4_2"><label>NO:<input type="radio" name="convulsiones" value="NO"></label></td>
                </tr>
                <tr>
                    <td class="columna4_1">Asma:</td>
                    <td class="columna4_2"><label>SÍ:<input type="radio" name="asma" value="SÍ"></label></td>
                    <td class="columna4_2"><label>NO:<input type="radio" name="asma" value="NO"></label></td>
                </tr>
            </table>
        </div>

        <br>
        <div id="botones_medicos">
            <input type="submit" value="GUARDAR" class="bot-med">
            <input type="button" value="REGRESAR" class="bot-med" id="cerrarMedica">
        </div>
    </form>
    <script src="js/usuario_alumno.js"></script>
</body>
</html>