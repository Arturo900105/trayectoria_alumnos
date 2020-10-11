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
                    <title>Área de Psicología</title>
                    <link rel='shortcut icon' href='iconos/psicologia.jpg' type='image/x-icon'>
                  </head>
                  <body style='text-align: center;'>
                    <h1 style='font-family: Arial; margin: 0; font-size: 35px; color: red;'>
                        DEBES INICIAR SESIÓN PARA PODER VER EL
                        <br>EXAMEN DE PSICOLOGÍA
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
    <title>Área de Psicología</title>
    <link rel="shortcut icon" href="iconos/psicologia.jpg" type="image/x-icon">
    <link rel="stylesheet" href="css/estilos-psicologia.css">

    <script src="js/jquery_3.4.1.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/sweetalert2@9.10.12/dist/sweetalert2.all.min.js"></script>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@sweetalert2/theme-dark@3/dark.css">
    <script src="https://cdn.jsdelivr.net/npm/sweetalert2@9/dist/sweetalert2.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/js-cookie@rc/dist/js.cookie.min.js"></script>

    <script src="js/alerta_psicologia.js"></script>

</head>
<body>
    <h1>Área de Psicología</h1>
    <form action="" method="" id="alumno_psicologia" autocomplete="off">

        <h2 class="dato">Ficha: <?php echo $letSessionA; ?></h2>
        <h2 class="dato" id="alumno"></h2>
        <h2 class="dato" id="carrera"></h2>
        <h2 class="dato" id="generacion"></h2>
        <input type="hidden" value="" id="ficha_alumno" name="ficha_alumno">

        <p class="p_preguntas">
            Contesta las siguientes preguntas, marcando el círculo donde corresponda:
        </p>

        <table id="preguntas">
            <tr>
                <th class="preguntas">
                    ¿Has tenido alguna dificultad de insomnio o de dormir demasiado (más de 10 horas diarias) en los últimos 6 meses?
                </th>
                <td class="respuesta">
                    <label>Sí:&nbsp;&nbsp;
                        <input type="radio" name="respuesta1" value="SÍ" id="respuesta1">
                    </label>
                    <br>

                    <label>No:
                        <input type="radio" name="respuesta1" value="NO">
                    </label>
                </td>
                <td>
                    <textarea name="cual" id="cual" cols="30" rows="10" placeholder="¿Cuál?"></textarea>
                </td>
            </tr>

            <tr>
                <th class="preguntas">
                    ¿Alguna ves ha tenido la idea o ha llegado a autolastimarse, o pensado en la muerte?
                </th>
                <td class="respuesta">
                    <label>Sí:&nbsp;&nbsp;
                        <input type="radio" name="respuesta2" value="SÍ" id="respuesta2">
                    </label>
                    <br>
                    <label>No:
                        <input type="radio" name="respuesta2" value="NO">
                    </label>
                </td>
                <td>
                    <textarea name="porque" id="porque" cols="30" rows="10" placeholder="¿Por qué?" ></textarea>
                </td>
            </tr>

        </table>
        <br><br>

        <h2>Escala Hospitalaria de Ansiedad y Depresión</h2>
        <p class="p_tabla">
            A continuación;
            <br>Escribe en le columna de [PRE-TEST] el número que más se acerque a lo que sientes, percibes o pienses:
        </p>

        <table id="ansiedad_depresion">
            <tr>
                <th class="ad_th" colspan="2">ANSIEDAD/DEPRESIÓN</th>
                <th class="ad_th">ESCALA</th>
                <th class="ad_th">PRE-TEST</th>
            </tr>
            <tr>
                <td class="no_escala">A.1.</td>
                <td class="preguntas_escala">Me siento tensa(o) o nerviosa(o):</td>
                <td class="escala_pt">
                        <label>3.&nbsp;&nbsp;Casi todo el día.</label>
                    <br><label>2.&nbsp;&nbsp;Gran parte del día.</label>
                    <br><label>1.&nbsp;&nbsp;De vez en cuando.</label>
                    <br><label>0.&nbsp;&nbsp;Nunca.</label>
                </td>
                <td class="resultado_escala">
                    <input type="text" class="escala_pretest" name="ep_a1" maxlength="1">
                </td>
            </tr>
            <tr>
                <td class="no_escala">D.1.</td>
                <td class="preguntas_escala">Sigo disfrutando de las cosas siempre:</td>
                <td class="escala_pt">
                        <label>0.&nbsp;&nbsp;Ciertamente. Igual que antes.</label>
                    <br><label>1.&nbsp;&nbsp;No tanto como antes.</label>
                    <br><label>2.&nbsp;&nbsp;Solamente un poco.</label>
                    <br><label>3.&nbsp;&nbsp;Ya no disfruto nada.</label>
                </td>
                <td class="resultado_escala">
                    <input type="text" class="escala_pretest" name="ep_d1" maxlength="1">
                </td>
            </tr>
            <tr>
                <td class="no_escala">A.2.</td>
                <td class="preguntas_escala">Siento una especie de temor como si algo malo fuera a suceder:</td>
                <td class="escala_pt">
                        <label>3.&nbsp;&nbsp;Sí, y muy intenso.</label>
                    <br><label>2.&nbsp;&nbsp;Sí, pero no muy intenso.</label>
                    <br><label>1.&nbsp;&nbsp;Sí, pero no me preocupa.</label>
                    <br><label>0.&nbsp;&nbsp;No siento nada de eso.</label>
                </td>
                <td class="resultado_escala">
                    <input type="text" class="escala_pretest" name="ep_a2" maxlength="1">
                </td>
            </tr>
            <tr>
                <td class="no_escala">D.2.</td>
                <td class="preguntas_escala">Soy capaz de reírme y ver el lado gracioso de las cosas:</td>
                <td class="escala_pt">
                        <label>0.&nbsp;&nbsp;Igual que siempre.</label>
                    <br><label>1.&nbsp;&nbsp;Actualmente, algo menos.</label>
                    <br><label>2.&nbsp;&nbsp;Actualmente, mucho menos.</label>
                    <br><label>3.&nbsp;&nbsp;Actualmente, en absoluto.</label>
                </td>
                <td class="resultado_escala">
                    <input type="text" class="escala_pretest" name="ep_d2" maxlength="1">
                </td>
            </tr>
            <tr>
                <td class="no_escala">A.3.</td>
                <td class="preguntas_escala">Tengo la cabeza llena de preocupaciones:</td>
                <td class="escala_pt">
                        <label>3.&nbsp;&nbsp;Casi todo el día.</label>
                    <br><label>2.&nbsp;&nbsp;Gran parte del día.</label>
                    <br><label>1.&nbsp;&nbsp;De vez en cuando.</label>
                    <br><label>0.&nbsp;&nbsp;Nunca.</label>
                </td>
                <td class="resultado_escala">
                    <input type="text" class="escala_pretest" name="ep_a3" maxlength="1">
                </td>
            </tr>
            <tr>
                <td class="no_escala">D.3.</td>
                <td class="preguntas_escala">Me siento alegre:</td>
                <td class="escala_pt">
                        <label>3.&nbsp;&nbsp;Nunca.</label>
                    <br><label>2.&nbsp;&nbsp;Muy pocas veces.</label>
                    <br><label>1.&nbsp;&nbsp;En algunas ocaciones.</label>
                    <br><label>0.&nbsp;&nbsp;Gran parte del día.</label>
                </td>
                <td class="resultado_escala">
                    <input type="text" class="escala_pretest" name="ep_d3" maxlength="1">
                </td>
            </tr>
            <tr>
                <td class="no_escala">A.4.</td>
                <td class="preguntas_escala">Soy capaz de permanecer sentada(o), tanquila(o) y relajada(o):</td>
                <td class="escala_pt">
                        <label>0.&nbsp;&nbsp;Siempre.</label>
                    <br><label>1.&nbsp;&nbsp;A menudo.</label>
                    <br><label>2.&nbsp;&nbsp;Raras veces.</label>
                    <br><label>3.&nbsp;&nbsp;Nunca.</label>
                </td>
                <td class="resultado_escala">
                    <input type="text" class="escala_pretest" name="ep_a4" maxlength="1">
                </td>
            </tr>
            <tr>
                <td class="no_escala">D.4.</td>
                <td class="preguntas_escala">Me siento lenta(o) y torpe:</td>
                <td class="escala_pt">
                        <label>3.&nbsp;&nbsp;Gran parte del día.</label>
                    <br><label>2.&nbsp;&nbsp;A menudo.</label>
                    <br><label>1.&nbsp;&nbsp;A veces.</label>
                    <br><label>0.&nbsp;&nbsp;Nunca.</label>
                </td>
                <td class="resultado_escala">
                    <input type="text" class="escala_pretest" name="ep_d4" maxlength="1">
                </td>
            </tr>
            <tr>
                <td class="no_escala">A.5.</td>
                <td class="preguntas_escala">Experimento una desagradable sensación de nervios y hormigueos en el estómago:</td>
                <td class="escala_pt">
                        <label>0.&nbsp;&nbsp;Nunca.</label>
                    <br><label>1.&nbsp;&nbsp;Sólo en algunas ocasiones.</label>
                    <br><label>2.&nbsp;&nbsp;A menudo.</label>
                    <br><label>3.&nbsp;&nbsp;Muy a menudo.</label>
                </td>
                <td class="resultado_escala">
                    <input type="text" class="escala_pretest" name="ep_a5" maxlength="1">
                </td>
            </tr>
            <tr>
                <td class="no_escala">D.5.</td>
                <td class="preguntas_escala">He perdido el interés por mi aspecto persona:</td>
                <td class="escala_pt">
                        <label>3.&nbsp;&nbsp;Completamente.</label>
                    <br><label>2.&nbsp;&nbsp;No me cuido como debiera hacerlo.</label>
                    <br><label>1.&nbsp;&nbsp;Es posible que no me cuide como debiera.</label>
                    <br><label>0.&nbsp;&nbsp;Me cuido como siempre lo he hecho.</label>
                </td>
                <td class="resultado_escala">
                    <input type="text" class="escala_pretest" name="ep_d5" maxlength="1">
                </td>
            </tr>
            <tr>
                <td class="no_escala">A.6.</td>
                <td class="preguntas_escala">Me siento inquieta(o) como si no pudiera parar de moverme:</td>
                <td class="escala_pt">
                        <label>3.&nbsp;&nbsp;Realmente mucho.</label>
                    <br><label>2.&nbsp;&nbsp;Bastante.</label>
                    <br><label>1.&nbsp;&nbsp;No mucho.</label>
                    <br><label>0.&nbsp;&nbsp;En absoluto.</label>
                </td>
                <td class="resultado_escala">
                    <input type="text" class="escala_pretest" name="ep_a6" maxlength="1">
                </td>
            </tr>
            <tr>
                <td class="no_escala">D.6.</td>
                <td class="preguntas_escala">Espero las cosas con ilusión:</td>
                <td class="escala_pt">
                        <label>0.&nbsp;&nbsp;Como siempre.</label>
                    <br><label>1.&nbsp;&nbsp;Algo menos que antes.</label>
                    <br><label>2.&nbsp;&nbsp;Mucho menos que antes.</label>
                    <br><label>3.&nbsp;&nbsp;En absoluto.</label>
                </td>
                <td class="resultado_escala">
                    <input type="text" class="escala_pretest" name="ep_d6" maxlength="1">
                </td>
            </tr>
            <tr>
                <td class="no_escala">A.7.</td>
                <td class="preguntas_escala">Experimento de repente sensaciones de gran angustia o temor:</td>
                <td class="escala_pt">
                        <label>3.&nbsp;&nbsp;Muy a menudo.</label>
                    <br><label>2.&nbsp;&nbsp;Con cierta frecuencia.</label>
                    <br><label>1.&nbsp;&nbsp;Raramente.</label>
                    <br><label>0.&nbsp;&nbsp;Nunca.</label>
                </td>
                <td class="resultado_escala">
                    <input type="text" class="escala_pretest" name="ep_a7" maxlength="1">
                </td>
            </tr>
            <tr>
                <td class="no_escala">D.7.</td>
                <td class="preguntas_escala">Soy capaz de disfrutar con un buen libro o con un buen programa de radio o televisión:</td>
                <td class="escala_pt">
                        <label>0.&nbsp;&nbsp;A menudo.</label>
                    <br><label>1.&nbsp;&nbsp;Algunas veces.</label>
                    <br><label>2.&nbsp;&nbsp;Pocas veces.</label>
                    <br><label>3.&nbsp;&nbsp;Casi nunca.</label>
                </td>
                <td class="resultado_escala">
                    <input type="text" class="escala_pretest" name="ep_d7" maxlength="1">
                </td>
            </tr>
        </table>
        <br>

        <h2>Test de orientación vocacional.</h2>
        <p class="p_sino">
            Contesta Sí o No, según corresponda:
            <input type="hidden" id="bloque1v">
            <input type="hidden" id="bloque2v">
            <input type="hidden" id="bloque3v">
            <input type="hidden" id="bloque4v">

            <input type="hidden" id="bloque1v_bd" name="bloque1v_bd">
            <input type="hidden" id="bloque2v_bd" name="bloque2v_bd">
            <input type="hidden" id="bloque3v_bd" name="bloque3v_bd">
            <input type="hidden" id="bloque4v_bd" name="bloque4v_bd">
        </p>
        <table class="tabla_orivoc">
            <tr>
                <th colspan="2" class="valor">BLOQUE 1</th>
                <th colspan="2" class="valor">VALOR</th>
            </tr>
            <tr>
                <td class="no_bloques">01</td>
                <td class="bloques">¿Te gustaría inventar nuevas formas para hacer las cosas?</td>
                <td class="bloques_sn"><label>Sí:<input type="radio" name="bloque1_01" value="1"></label></td>
                <td class="bloques_sn"><label>No:<input type="radio" name="bloque1_01" value="0"></label></td>
            </tr>
            <tr>
                <td class="no_bloques">02</td>
                <td class="bloques">¿Descubrir nuevas analogías es tu pasión?</td>
                <td class="bloques_sn"><label>Sí:<input type="radio" name="bloque1_02" value="1"></label></td>
                <td class="bloques_sn"><label>No:<input type="radio" name="bloque1_02" value="0"></label></td>
            </tr>
            <tr>
                <td class="no_bloques">03</td>
                <td class="bloques">¿Te gusta arreglar o construir cosas y sientes gran curiosidad por saber cómo funciona todo?</td>
                <td class="bloques_sn"><label>Sí:<input type="radio" name="bloque1_03" value="1"></label></td>
                <td class="bloques_sn"><label>No:<input type="radio" name="bloque1_03" value="0"></label></td>
            </tr>

            <tr>
                <td class="no_bloques">04</td>
                <td class="bloques">¿Siempre quieres saber de qué está hecho todo?</td>
                <td class="bloques_sn"><label>Sí:<input type="radio" name="bloque1_04" value="1"></label></td>
                <td class="bloques_sn"><label>No:<input type="radio" name="bloque1_04" value="0"></label></td>
            </tr>
            <tr>
                <td class="no_bloques">05</td>
                <td class="bloques">¿Siempre te has preguntado cuántas estrellas habrá en el universo?</td>
                <td class="bloques_sn"><label>Sí:<input type="radio" name="bloque1_05" value="1"></label></td>
                <td class="bloques_sn"><label>No:<input type="radio" name="bloque1_05" value="0"></label></td>
            </tr>
            <tr>
                <td class="no_bloques">06</td>
                <td class="bloques">¿Disfrutas la tecnología?</td>
                <td class="bloques_sn"><label>Sí:<input type="radio" name="bloque1_06" value="1"></label></td>
                <td class="bloques_sn"><label>No:<input type="radio" name="bloque1_06" value="0"></label></td>
            </tr>
            <tr>
                <td class="no_bloques">07</td>
                <td class="bloques">¿Te gustaría medir el infinito?</td>
                <td class="bloques_sn"><label>Sí:<input type="radio" name="bloque1_07" value="1"></label></td>
                <td class="bloques_sn"><label>No:<input type="radio" name="bloque1_07" value="0"></label></td>
            </tr>
            <tr>
                <td class="no_bloques">08</td>
                <td class="bloques">¿Te has preguntado si la tierra y el sistema solar no serán sino partes de un mecanismo mayor?</td>
                <td class="bloques_sn"><label>Sí:<input type="radio" name="bloque1_08" value="1"></label></td>
                <td class="bloques_sn"><label>No:<input type="radio" name="bloque1_08" value="0"></label></td>
            </tr>
            <tr>
                <td class="no_bloques">09</td>
                <td class="bloques">¿Sientes que el tiempo no te alcanza para saber todo lo que te gustaría?</td>
                <td class="bloques_sn"><label>Sí:<input type="radio" name="bloque1_09" value="1"></label></td>
                <td class="bloques_sn"><label>No:<input type="radio" name="bloque1_09" value="0"></label></td>
            </tr>
            <tr>
                <td class="no_bloques">10</td>
                <td class="bloques">¿Eres practica(o) para encontrar la solución a los problemas que enfrentas?</td>
                <td class="bloques_sn"><label>Sí:<input type="radio" name="bloque1_10" value="1"></label></td>
                <td class="bloques_sn"><label>No:<input type="radio" name="bloque1_10" value="0"></label></td>
            </tr>
        </table>
        <br>
        <br>

        <table class="tabla_orivoc">
            <tr>
                <th colspan="2" class="valor">BLOQUE 2</th>
                <th colspan="2" class="valor">VALOR</th>
            </tr>
            <tr>
                <td class="no_bloques">11</td>
                <td class="bloques">¿Te identificas plenamente con la naturaleza?</td>
                <td class="bloques_sn"><label>Sí:<input type="radio" name="bloque2_11" value="1"></label></td>
                <td class="bloques_sn"><label>No:<input type="radio" name="bloque2_11" value="0"></label></td>
            </tr>
            <tr>
                <td class="no_bloques">12</td>
                <td class="bloques">¿Sientes amor por los animales, las plantas y en general por todos los seres vivos?</td>
                <td class="bloques_sn"><label>Sí:<input type="radio" name="bloque2_12" value="1"></label></td>
                <td class="bloques_sn"><label>No:<input type="radio" name="bloque2_12" value="0"></label></td>
            </tr>
            <tr>
                <td class="no_bloques">13</td>
                <td class="bloques">¿Te gusta e interesa la investigación y los laboratorios?</td>
                <td class="bloques_sn"><label>Sí:<input type="radio" name="bloque2_13" value="1"></label></td>
                <td class="bloques_sn"><label>No:<input type="radio" name="bloque2_13" value="0"></label></td>
            </tr>
            <tr>
                <td class="no_bloques">14</td>
                <td class="bloques">¿Te encantaría trabajar en medios rurales y en contacto con la naturaleza?</td>
                <td class="bloques_sn"><label>Sí:<input type="radio" name="bloque2_14" value="1"></label></td>
                <td class="bloques_sn"><label>No:<input type="radio" name="bloque2_14" value="0"></label></td>
            </tr>
            <tr>
                <td class="no_bloques">15</td>
                <td class="bloques">¿Consideras que tienes buena memoria?</td>
                <td class="bloques_sn"><label>Sí:<input type="radio" name="bloque2_15" value="1"></label></td>
                <td class="bloques_sn"><label>No:<input type="radio" name="bloque2_15" value="0"></label></td>
            </tr>
            <tr>
                <td class="no_bloques">16</td>
                <td class="bloques">¿Siempre te preguntas cómo somos los seres vivos, cómo estamos formados, cómo logramos subsistir?</td>
                <td class="bloques_sn"><label>Sí:<input type="radio" name="bloque2_16" value="1"></label></td>
                <td class="bloques_sn"><label>No:<input type="radio" name="bloque2_16" value="0"></label></td>
            </tr>
            <tr>
                <td class="no_bloques">17</td>
                <td class="bloques">¿Te gustaría trabajar en algo relacionado con la salud y la lucha contra las enfermedades?</td>
                <td class="bloques_sn"><label>Sí:<input type="radio" name="bloque2_17" value="1"></label></td>
                <td class="bloques_sn"><label>No:<input type="radio" name="bloque2_17" value="0"></label></td>
            </tr>
            <tr>
                <td class="no_bloques">18</td>
                <td class="bloques">¿Te adaptas fácilmente a distintos medios, distintos de los que estás acostumbrado?</td>
                <td class="bloques_sn"><label>Sí:<input type="radio" name="bloque2_18" value="1"></label></td>
                <td class="bloques_sn"><label>No:<input type="radio" name="bloque2_18" value="0"></label></td>
            </tr>
            <tr>
                <td class="no_bloques">19</td>
                <td class="bloques">¿Acampar para ti es mucho más que unas simples vacaciones?</td>
                <td class="bloques_sn"><label>Sí:<input type="radio" name="bloque2_19" value="1"></label></td>
                <td class="bloques_sn"><label>No:<input type="radio" name="bloque2_19" value="0"></label></td>
            </tr>
            <tr>
                <td class="no_bloques">20</td>
                <td class="bloques">¿El funcionamiento del cerebro y todo lo relacionado con él te mantienen interesado y ocupado?</td>
                <td class="bloques_sn"><label>Sí:<input type="radio" name="bloque2_20" value="1"></label></td>
                <td class="bloques_sn"><label>No:<input type="radio" name="bloque2_20" value="0"></label></td>
            </tr>
        </table>
        <br>
        <br>

        <table class="tabla_orivoc">
            <tr>
                <th colspan="2" class="valor">BLOQUE 3</th>
                <th colspan="2" class="valor">VALOR</th>
            </tr>
            <tr>
                <td class="no_bloques">21</td>
                <td class="bloques">¿Te consideras un(a) líder?</td>
                <td class="bloques_sn"><label>Sí:<input type="radio" name="bloque3_21" value="1"></label></td>
                <td class="bloques_sn"><label>No:<input type="radio" name="bloque3_21" value="0"></label></td>
            </tr>
            <tr>
                <td class="no_bloques">22</td>
                <td class="bloques">¿Eres buena(o) para dirigir grupos grandes de personas?</td>
                <td class="bloques_sn"><label>Sí:<input type="radio" name="bloque3_22" value="1"></label></td>
                <td class="bloques_sn"><label>No:<input type="radio" name="bloque3_22" value="0"></label></td>
            </tr>
            <tr>
                <td class="no_bloques">23</td>
                <td class="bloques">¿Eres de las(os) primeras(os) en encontrar una buena solución a cualquier problema de tipo social?</td>
                <td class="bloques_sn"><label>Sí:<input type="radio" name="bloque3_23" value="1"></label></td>
                <td class="bloques_sn"><label>No:<input type="radio" name="bloque3_23" value="0"></label></td>
            </tr>
            <tr>
                <td class="no_bloques">24</td>
                <td class="bloques">¿Eres buena(o) para negociar y casi siempre consigues lo que quieres y tal y como lo quieres?</td>
                <td class="bloques_sn"><label>Sí:<input type="radio" name="bloque3_24" value="1"></label></td>
                <td class="bloques_sn"><label>No:<input type="radio" name="bloque3_24" value="0"></label></td>
            </tr>
            <tr>
                <td class="no_bloques">25</td>
                <td class="bloques">¿Serias capaz de venderle hielo a un esquimal, influir en los demás y crearles una necesidad de consumo?</td>
                <td class="bloques_sn"><label>Sí:<input type="radio" name="bloque3_25" value="1"></label></td>
                <td class="bloques_sn"><label>No:<input type="radio" name="bloque3_25" value="0"></label></td>
            </tr>
            <tr>
                <td class="no_bloques">26</td>
                <td class="bloques">Si se quiere un viaje, ¿tú eres elegida(o) para encargarte de la organización pues tu planeas mejor los viajes?</td>
                <td class="bloques_sn"><label>Sí:<input type="radio" name="bloque3_26" value="1"></label></td>
                <td class="bloques_sn"><label>No:<input type="radio" name="bloque3_26" value="0"></label></td>
            </tr>
            <tr>
                <td class="no_bloques">27</td>
                <td class="bloques">¿Podríamos decir que tu fuerte es todo aquello que afecte directamente o indirectamente a la sociedad?</td>
                <td class="bloques_sn"><label>Sí:<input type="radio" name="bloque3_27" value="1"></label></td>
                <td class="bloques_sn"><label>No:<input type="radio" name="bloque3_27" value="0"></label></td>
            </tr>
            <tr>
                <td class="no_bloques">28</td>
                <td class="bloques">¿Te gustaría enseñar lo que sabes a los demás e investigar lo que no sabes cuando alguien lo necesita?</td>
                <td class="bloques_sn"><label>Sí:<input type="radio" name="bloque3_28" value="1"></label></td>
                <td class="bloques_sn"><label>No:<input type="radio" name="bloque3_28" value="0"></label></td>
            </tr>
            <tr>
                <td class="no_bloques">29</td>
                <td class="bloques">¿No puedes terminar el día sin saber exactamente qué está pasando en el mundo?</td>
                <td class="bloques_sn"><label>Sí:<input type="radio" name="bloque3_29" value="1"></label></td>
                <td class="bloques_sn"><label>No:<input type="radio" name="bloque3_29" value="0"></label></td>
            </tr>
            <tr>
                <td class="no_bloques">30</td>
                <td class="bloques">¿Te da miedo y vergüenza hablar en público?</td>
                <td class="bloques_sn"><label>Sí:<input type="radio" name="bloque3_30" value="1"></label></td>
                <td class="bloques_sn"><label>No:<input type="radio" name="bloque3_30" value="0"></label></td>
            </tr>
        </table>
        <br>
        <br>

        <table class="tabla_orivoc">
            <tr>
                <th colspan="2" class="valor">BLOQUE 4</th>
                <th colspan="2" class="valor">VALOR</th>
            </tr>
            <tr>
                <td class="no_bloques">31</td>
                <td class="bloques">¿Te interesa todo lo que tiene que ver con el pasado?</td>
                <td class="bloques_sn"><label>Sí:<input type="radio" name="bloque4_31" value="1"></label></td>
                <td class="bloques_sn"><label>No:<input type="radio" name="bloque4_31" value="0"></label></td>
            </tr>
            <tr>
                <td class="no_bloques">32</td>
                <td class="bloques">¿Tienes curiosidad y te encanta saber lo que ha pasado en la historia de la humanidad y porqué ha pasado?</td>
                <td class="bloques_sn"><label>Sí:<input type="radio" name="bloque4_32" value="1"></label></td>
                <td class="bloques_sn"><label>No:<input type="radio" name="bloque4_32" value="0"></label></td>
            </tr>
            <tr>
                <td class="no_bloques">33</td>
                <td class="bloques">¿Tienes tantos libros que ya no sabes qué hacer con todos?</td>
                <td class="bloques_sn"><label>Sí:<input type="radio" name="bloque4_33" value="1"></label></td>
                <td class="bloques_sn"><label>No:<input type="radio" name="bloque4_33" value="0"></label></td>
            </tr>
            <tr>
                <td class="no_bloques">34</td>
                <td class="bloques">¿Te gusta el arte en todas sus expresiones?</td>
                <td class="bloques_sn"><label>Sí:<input type="radio" name="bloque4_34" value="1"></label></td>
                <td class="bloques_sn"><label>No:<input type="radio" name="bloque4_34" value="0"></label></td>
            </tr>
            <tr>
                <td class="no_bloques">35</td>
                <td class="bloques">¿Te gusta crear nuevas formas, sensaciones, texturas y formas de vida?</td>
                <td class="bloques_sn"><label>Sí:<input type="radio" name="bloque4_35" value="1"></label></td>
                <td class="bloques_sn"><label>No:<input type="radio" name="bloque4_35" value="0"></label></td>
            </tr>
            <tr>
                <td class="no_bloques">36</td>
                <td class="bloques">¿En cada lugar no puedes dejar de admirar su decoración o sugerir lo que se vería mejor en cierto lugar?</td>
                <td class="bloques_sn"><label>Sí:<input type="radio" name="bloque4_36" value="1"></label></td>
                <td class="bloques_sn"><label>No:<input type="radio" name="bloque4_36" value="0"></label></td>
            </tr>
            <tr>
                <td class="no_bloques">37</td>
                <td class="bloques">¿Los museos para ti son algo así como un segundo hogar?</td>
                <td class="bloques_sn"><label>Sí:<input type="radio" name="bloque4_37" value="1"></label></td>
                <td class="bloques_sn"><label>No:<input type="radio" name="bloque4_37" value="0"></label></td>
            </tr>
            <tr>
                <td class="no_bloques">38</td>
                <td class="bloques">¿La mejor forma que tiene el ser humano para expresar es la música?</td>
                <td class="bloques_sn"><label>Sí:<input type="radio" name="bloque4_38" value="1"></label></td>
                <td class="bloques_sn"><label>No:<input type="radio" name="bloque4_38" value="0"></label></td>
            </tr>
            <tr>
                <td class="no_bloques">39</td>
                <td class="bloques">¿Te interesa saber lo que les pasa a los demás, la raíz de sus problemas, y por qué les cuesta adaptarse?</td>
                <td class="bloques_sn"><label>Sí:<input type="radio" name="bloque4_39" value="1"></label></td>
                <td class="bloques_sn"><label>No:<input type="radio" name="bloque4_39" value="0"></label></td>
            </tr>
            <tr>
                <td class="no_bloques">40</td>
                <td class="bloques">¿Te llama la atención el comportamiento humano?</td>
                <td class="bloques_sn"><label>Sí:<input type="radio" name="bloque4_40" value="1"></label></td>
                <td class="bloques_sn"><label>No:<input type="radio" name="bloque4_40" value="0"></label></td>
            </tr>
        </table>
        <br>

        <div id="botones_psicologia">
            <input type="submit" value="GUARDAR" class="boton_psico">
            <a href="php/terminar_alumno.php"><input type="button" id="cerrarPsicologia" value="REGRESAR" class="boton_psico"></a>
        </div>
    </form>
    <script src="js/usuario_alumno.js"></script>
</body>
</html>