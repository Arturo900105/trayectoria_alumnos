<?php
require "php/BD_Connect.php";
session_name("POST-TEST");
session_start();
$sessionPostTest = $_SESSION["ptestAlumno"];

if ($sessionPostTest == null || $sessionPostTest == "") {
    echo "<!doctype html>
              <html lang='es' style='height: 100%; display: flex; align-items: center; justify-content: center;'>
                  <head>
                    <meta charset='UTF-8'>
                    <meta name='viewport' content='width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0'>
                    <meta http-equiv='X-UA-Compatible' content='ie=edge'>
                    <title>Escala POST-TEST</title>
                    <link rel='shortcut icon' href='iconos/posttest.jpg' type='image/x-icon'>
                  </head>
                  <body style='text-align: center;'>
                    <h1 style='font-family: Arial; margin: 0; font-size: 35px; color: red;'>
                        DEBES INICIAR SESIÓN PARA PODER VER LA
                        <br>ESCALA POST-TEST
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
    <title>Escala POST-TEST</title>
    <link rel="shortcut icon" href="iconos/posttest.jpg" type="image/x-icon">
    <link rel="stylesheet" href="css/estilos-post_test.css">

    <script src="js/jquery_3.4.1.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/sweetalert2@9.10.12/dist/sweetalert2.all.min.js"></script>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@sweetalert2/theme-dark@3/dark.css">
    <script src="https://cdn.jsdelivr.net/npm/sweetalert2@9/dist/sweetalert2.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/js-cookie@rc/dist/js.cookie.min.js"></script>

    <script src="js/alerta_posttest.js"></script>
</head>
<body>
    <h1>Escala Hospitalaria Ansiedad y Depresión</h1>
    <form action="" method="" id="posttest_alumnos" autocomplete="off">

        <h2>Control: <?php echo $sessionPostTest; ?>.</h2>
        <h2 id="alumno_posttest"></h2>
        <h2 id="carrera_posttest"></h2>
        <h2 id="generacion_posttest"></h2>
        <br>

        <input type="hidden" name="control" id="control">

        <label><b>¿En qué semestre te encuentras?</b>
            <select name="sem_posttest" id="sem_posttest">
                <option value="">----------</option>
                <option value="3er Semestre">3er Semestre</option>
                <option value="4to Semestre">4to Semestre</option>
                <option value="5to Semestre">5to Semestre</option>
                <option value="6to Semestre">6to Semestre</option>
            </select>
        </label>
        <br>

        <p id="parrafoPT">A continuación;<br>
            Escribe en le columna de [POST-TEST] el número que más se acerque a lo que sientes, percibes o pienses:
        </p>
        <table>
            <tr>
                <th class="escala_th" colspan="2">ANSIEDAD/DEPRESIÓN</th>
                <th class="escala_th">ESCALA</th>
                <th class="escala_th">POST-TEST</th>
            </tr>
            <tr>
                <td class="no_escala">A.1.</td>
                <td class="post_escala">Me siento tensa(o) o nerviosa(o):</td>
                <td class="post_escala">
                        <label>3.&nbsp;&nbsp;Casi todo el día.</label>
                    <br><label>2.&nbsp;&nbsp;Gran parte del día.</label>
                    <br><label>1.&nbsp;&nbsp;De vez en cuando.</label>
                    <br><label>0.&nbsp;&nbsp;Nunca.</label>
                </td>
                <td class="resultado_posttest">
                    <input type="text" class="escala_posttest" name="posttes_A1" maxlength="1">
                </td>
            </tr>
            <tr>
                <td class="no_escala">D.1.</td>
                <td class="post_escala">Sigo disfrutando de las cosas siempre:</td>
                <td class="post_escala">
                        <label>0.&nbsp;&nbsp;Ciertamente. Igual que antes.</label>
                    <br><label>1.&nbsp;&nbsp;No tanto como antes.</label>
                    <br><label>2.&nbsp;&nbsp;Solamente un poco.</label>
                    <br><label>3.&nbsp;&nbsp;Ya no disfruto nada.</label>
                </td>
                <td class="resultado_posttest">
                    <input type="text" class="escala_posttest" name="posttes_D1" maxlength="1">
                </td>
            </tr>
            <tr>
                <td class="no_escala">A.2.</td>
                <td class="post_escala">Siento una especie de temor como si algo malo fuera a suceder:</td>
                <td class="post_escala">
                        <label>3.&nbsp;&nbsp;Sí, y muy intenso.</label>
                    <br><label>2.&nbsp;&nbsp;Sí, pero no muy intenso.</label>
                    <br><label>1.&nbsp;&nbsp;Sí, pero no me preocupa.</label>
                    <br><label>0.&nbsp;&nbsp;No siento nada de eso.</label>
                </td>
                <td class="resultado_posttest">
                    <input type="text" class="escala_posttest" name="posttes_A2" maxlength="1">
                </td>
            </tr>
            <tr>
                <td class="no_escala">D.2.</td>
                <td class="post_escala">Soy capaz de reírme y ver el lado gracioso de las cosas:</td>
                <td class="post_escala">
                        <label>0.&nbsp;&nbsp;Igual que siempre.</label>
                    <br><label>1.&nbsp;&nbsp;Actualmente, algo menos.</label>
                    <br><label>2.&nbsp;&nbsp;Actualmente, mucho menos.</label>
                    <br><label>3.&nbsp;&nbsp;Actualmente, en absoluto.</label>
                </td>
                <td class="resultado_posttest">
                    <input type="text" class="escala_posttest" name="posttes_D2" maxlength="1">
                </td>
            </tr>
            <tr>
                <td class="no_escala">A.3.</td>
                <td class="post_escala">Tengo la cabeza llena de preocupaciones:</td>
                <td class="post_escala">
                        <label>3.&nbsp;&nbsp;Casi todo el día.</label>
                    <br><label>2.&nbsp;&nbsp;Gran parte del día.</label>
                    <br><label>1.&nbsp;&nbsp;De vez en cuando.</label>
                    <br><label>0.&nbsp;&nbsp;Nunca.</label>
                </td>
                <td class="resultado_posttest">
                    <input type="text" class="escala_posttest" name="posttes_A3" maxlength="1">
                </td>
            </tr>
            <tr>
                <td class="no_escala">D.3.</td>
                <td class="post_escala">Me siento alegre:</td>
                <td class="post_escala">
                        <label>3.&nbsp;&nbsp;Nunca.</label>
                    <br><label>2.&nbsp;&nbsp;Muy pocas veces.</label>
                    <br><label>1.&nbsp;&nbsp;En algunas ocaciones.</label>
                    <br><label>0.&nbsp;&nbsp;Gran parte del día.</label>
                </td>
                <td class="resultado_posttest">
                    <input type="text" class="escala_posttest" name="posttes_D3" maxlength="1">
                </td>
            </tr>
            <tr>
                <td class="no_escala">A.4.</td>
                <td class="post_escala">Soy capaz de permanecer sentada(o), tanquila(o) y relajada(o):</td>
                <td class="post_escala">
                        <label>0.&nbsp;&nbsp;Siempre.</label>
                    <br><label>1.&nbsp;&nbsp;A menudo.</label>
                    <br><label>2.&nbsp;&nbsp;Raras veces.</label>
                    <br><label>3.&nbsp;&nbsp;Nunca.</label>
                </td>
                <td class="resultado_posttest">
                    <input type="text" class="escala_posttest" name="posttes_A4" maxlength="1">
                </td>
            </tr>
            <tr>
                <td class="no_escala">D.4.</td>
                <td class="post_escala">Me siento lenta(o) y torpe:</td>
                <td class="post_escala">
                        <label>3.&nbsp;&nbsp;Gran parte del día.</label>
                    <br><label>2.&nbsp;&nbsp;A menudo.</label>
                    <br><label>1.&nbsp;&nbsp;A veces.</label>
                    <br><label>0.&nbsp;&nbsp;Nunca.</label>
                </td>
                <td class="resultado_posttest">
                    <input type="text" class="escala_posttest" name="posttes_D4" maxlength="1">
                </td>
            </tr>
            <tr>
                <td class="no_escala">A.5.</td>
                <td class="post_escala">Experimento una desagradable sensación de nervios y hormigueos en el estómago:</td>
                <td class="post_escala">
                        <label>0.&nbsp;&nbsp;Nunca.</label>
                    <br><label>1.&nbsp;&nbsp;Sólo en algunas ocasiones.</label>
                    <br><label>2.&nbsp;&nbsp;A menudo.</label>
                    <br><label>3.&nbsp;&nbsp;Muy a menudo.</label>
                </td>
                <td class="resultado_posttest">
                    <input type="text" class="escala_posttest" name="posttes_A5" maxlength="1">
                </td>
            </tr>
            <tr>
                <td class="no_escala">D.5.</td>
                <td class="post_escala">He perdido el interés por mi aspecto persona:</td>
                <td class="post_escala">
                        <label>3.&nbsp;&nbsp;Completamente.</label>
                    <br><label>2.&nbsp;&nbsp;No me cuido como debiera hacerlo.</label>
                    <br><label>1.&nbsp;&nbsp;Es posible que no me cuide como debiera.</label>
                    <br><label>0.&nbsp;&nbsp;Me cuido como siempre lo he hecho.</label>
                </td>
                <td class="resultado_posttest">
                    <input type="text" class="escala_posttest" name="posttes_D5" maxlength="1">
                </td>
            </tr>
            <tr>
                <td class="no_escala">A.6.</td>
                <td class="post_escala">Me siento inquieta(o) como si no pudiera parar de moverme:</td>
                <td class="post_escala">
                        <label>3.&nbsp;&nbsp;Realmente mucho.</label>
                    <br><label>2.&nbsp;&nbsp;Bastante.</label>
                    <br><label>1.&nbsp;&nbsp;No mucho.</label>
                    <br><label>0.&nbsp;&nbsp;En absoluto.</label>
                </td>
                <td class="resultado_posttest">
                    <input type="text" class="escala_posttest" name="posttes_A6" maxlength="1">
                </td>
            </tr>
            <tr>
                <td class="no_escala">D.6.</td>
                <td class="post_escala">Espero las cosas con ilusión:</td>
                <td class="post_escala">
                        <label>0.&nbsp;&nbsp;Como siempre.</label>
                    <br><label>1.&nbsp;&nbsp;Algo menos que antes.</label>
                    <br><label>2.&nbsp;&nbsp;Mucho menos que antes.</label>
                    <br><label>3.&nbsp;&nbsp;En absoluto.</label>
                </td>
                <td class="resultado_posttest">
                    <input type="text" class="escala_posttest" name="posttes_D6" maxlength="1">
                </td>
            </tr>
            <tr>
                <td class="no_escala">A.7.</td>
                <td class="post_escala">Experimento de repente sensaciones de gran angustia o temor:</td>
                <td class="post_escala">
                        <label>3.&nbsp;&nbsp;Muy a menudo.</label>
                    <br><label>2.&nbsp;&nbsp;Con cierta frecuencia.</label>
                    <br><label>1.&nbsp;&nbsp;Raramente.</label>
                    <br><label>0.&nbsp;&nbsp;Nunca.</label>
                </td>
                <td class="resultado_posttest">
                    <input type="text" class="escala_posttest" name="posttes_A7" maxlength="1">
                </td>
            </tr>
            <tr>
                <td class="no_escala">D.7.</td>
                <td class="post_escala">Soy capaz de disfrutar con un buen libro o con un buen programa de radio o televisión:</td>
                <td class="post_escala">
                        <label>0.&nbsp;&nbsp;A menudo.</label>
                    <br><label>1.&nbsp;&nbsp;Algunas veces.</label>
                    <br><label>2.&nbsp;&nbsp;Pocas veces.</label>
                    <br><label>3.&nbsp;&nbsp;Casi nunca.</label>
                </td>
                <td class="resultado_posttest">
                    <input type="text" class="escala_posttest" name="posttes_D7" maxlength="1">
                </td>
            </tr>
        </table>

        <div id="botones_posttest">
            <input type="submit" value="GUARDAR" class="boton_posttest" id="guardarPostTest">
            <a href="php/terminar_posttest.php"><input type="button" value="SALIR" class="boton_posttest" id="cerrarPostTest"></a>
        </div>
    </form>
    <script src="js/usuario_posttest.js"></script>
</body>
</html>