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
                    <title>Área de Pedagogía</title>
                    <link rel='shortcut icon' href='iconos/pedagogia.jpg' type='image/x-icon'>
                  </head>
                  <body style='text-align: center;'>
                    <h1 style='font-family: Arial; margin: 0; font-size: 35px; color: red;'>
                        DEBES INICIAR SESIÓN PARA PODER VER EL
                        <br>EXAMEN DE PEDAGOGÍA
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
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Área de Pedagogía</title>
    <link rel="shortcut icon" href="iconos/pedagogia.jpg" type="image/x-icon">
    <link rel="stylesheet" href="css/estilos-pedagogia.css">

    <script src="js/jquery_3.4.1.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/sweetalert2@9.10.12/dist/sweetalert2.all.min.js"></script>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@sweetalert2/theme-dark@3/dark.css">
    <script src="https://cdn.jsdelivr.net/npm/sweetalert2@9/dist/sweetalert2.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/js-cookie@rc/dist/js.cookie.min.js"></script>

    <script src="js/alerta_pedagogia.js"></script>

</head>
<body>
    <h1>Área de Pedagogía</h1>
    <form action="" method="" id="alumno_pedagogia" autocomplete="off">

        <h2 class="dato">Ficha: <?php echo $letSessionA; ?></h2>
        <h2 class="dato" id="alumno"></h2>
        <h2 class="dato" id="carrera"></h2>
        <h2 class="dato" id="generacion"></h2>
        <input type="hidden" value="" id="ficha_alumno" name="ficha_alumno">
        <br>

        <h2 class="subtema">Inventario sobre estilos de aprendizaje</h2>
        <p class="instrucciones">
            Cada persona tiene su forma preferida de aprender.
            <br><br>
            Reconocer sus preferencias le ayudará a comprender sus fuerzas en cualquier situación de aprendizaje.
            <br><br>
            Por favor, responda verdaderamente a cada una de las preguntas, de acuerdo a lo que hace actualmente, no según lo que piense que sea la respuesta correcta.
            <br><br>
            Use la escala siguiente para responder a cada pregunta. <b>Seleccione un circulo sobre la respuesta:</b>
        </p>
        <br>

        <p class="significado">
            1- Nunca (N).<br>
            2- Raramente (R).<br>
            3- Ocacionalmente (O).<br>
            4- Usualmente (U).<br>
            5- Siempre (S).
        </p>
        <br>

        <table class="preguntas_uno">
            <tr>
                <th class="preg_opc" colspan="2">PREGUNTAS:</th>
                <th class="preg_opc">N</th>
                <th class="preg_opc">R</th>
                <th class="preg_opc">O</th>
                <th class="preg_opc">U</th>
                <th class="preg_opc">S</th>
            </tr>
            <tr>
                <td class="no_pregunta">&nbsp;&nbsp;1</td>
                <td class="preguntas" >Me ayuda trazar o escribir a mano las palabras cuando tengo que aprenderlas de memoria.</td>
                <td class="opciones"><label>1<input type="radio" name="pregunta1" value="1"></label></td>
                <td class="opciones"><label>2<input type="radio" name="pregunta1" value="2"></label></td>
                <td class="opciones"><label>3<input type="radio" name="pregunta1" value="3"></label></td>
                <td class="opciones"><label>4<input type="radio" name="pregunta1" value="4"></label></td>
                <td class="opciones"><label>5<input type="radio" name="pregunta1" value="5"></label></td>
            </tr>
            <tr>
                <td class="no_pregunta">&nbsp;&nbsp;2</td>
                <td class="preguntas" >Recuerdo mejor un tema al escuchar una conferencia, en vez de leer un libro de texto.</td>
                <td class="opciones"><label>1<input type="radio" name="pregunta2" value="1"></label></td>
                <td class="opciones"><label>2<input type="radio" name="pregunta2" value="2"></label></td>
                <td class="opciones"><label>3<input type="radio" name="pregunta2" value="3"></label></td>
                <td class="opciones"><label>4<input type="radio" name="pregunta2" value="4"></label></td>
                <td class="opciones"><label>5<input type="radio" name="pregunta2" value="5"></label></td>
            </tr>
            <tr>
                <td class="no_pregunta">&nbsp;&nbsp;3</td>
                <td class="preguntas" >Prefiero las clases que requieren una prueba sobre lo que se lee en el libro de texto.</td>
                <td class="opciones"><label>1<input type="radio" name="pregunta3" value="1"></label></td>
                <td class="opciones"><label>2<input type="radio" name="pregunta3" value="2"></label></td>
                <td class="opciones"><label>3<input type="radio" name="pregunta3" value="3"></label></td>
                <td class="opciones"><label>4<input type="radio" name="pregunta3" value="4"></label></td>
                <td class="opciones"><label>5<input type="radio" name="pregunta3" value="5"></label></td>
            </tr>
            <tr>
                <td class="no_pregunta">&nbsp;&nbsp;4</td>
                <td class="preguntas" >Me gusta comer bocados y mascar chicle cuando estudio.</td>
                <td class="opciones"><label>1<input type="radio" name="pregunta4" value="1"></label></td>
                <td class="opciones"><label>2<input type="radio" name="pregunta4" value="2"></label></td>
                <td class="opciones"><label>3<input type="radio" name="pregunta4" value="3"></label></td>
                <td class="opciones"><label>4<input type="radio" name="pregunta4" value="4"></label></td>
                <td class="opciones"><label>5<input type="radio" name="pregunta4" value="5"></label></td>
            </tr>
            <tr>
                <td class="no_pregunta">&nbsp;&nbsp;5</td>
                <td class="preguntas" >Al prestar atención a una conferencia, puedo recordar las ideas principales sin anotarlas.</td>
                <td class="opciones"><label>1<input type="radio" name="pregunta5" value="1"></label></td>
                <td class="opciones"><label>2<input type="radio" name="pregunta5" value="2"></label></td>
                <td class="opciones"><label>3<input type="radio" name="pregunta5" value="3"></label></td>
                <td class="opciones"><label>4<input type="radio" name="pregunta5" value="4"></label></td>
                <td class="opciones"><label>5<input type="radio" name="pregunta5" value="5"></label></td>
            </tr>
            <tr>
                <td class="no_pregunta">&nbsp;&nbsp;6</td>
                <td class="preguntas" >Prefiero las instrucciones escritas sobre las orales.</td>
                <td class="opciones"><label>1<input type="radio" name="pregunta6" value="1"></label></td>
                <td class="opciones"><label>2<input type="radio" name="pregunta6" value="2"></label></td>
                <td class="opciones"><label>3<input type="radio" name="pregunta6" value="3"></label></td>
                <td class="opciones"><label>4<input type="radio" name="pregunta6" value="4"></label></td>
                <td class="opciones"><label>5<input type="radio" name="pregunta6" value="5"></label></td>
            </tr>
            <tr>
                <td class="no_pregunta">&nbsp;&nbsp;7</td>
                <td class="preguntas" >Yo resuelvo bien los rompecabezas y los laberintos.</td>
                <td class="opciones"><label>1<input type="radio" name="pregunta7" value="1"></label></td>
                <td class="opciones"><label>2<input type="radio" name="pregunta7" value="2"></label></td>
                <td class="opciones"><label>3<input type="radio" name="pregunta7" value="3"></label></td>
                <td class="opciones"><label>4<input type="radio" name="pregunta7" value="4"></label></td>
                <td class="opciones"><label>5<input type="radio" name="pregunta7" value="5"></label></td>
            </tr>
            <tr>
                <td class="no_pregunta">&nbsp;&nbsp;8</td>
                <td class="preguntas" >Prefiero las clases que requieran una prueba sobre lo que se presenta durante una conferencia.</td>
                <td class="opciones"><label>1<input type="radio" name="pregunta8" value="1"></label></td>
                <td class="opciones"><label>2<input type="radio" name="pregunta8" value="2"></label></td>
                <td class="opciones"><label>3<input type="radio" name="pregunta8" value="3"></label></td>
                <td class="opciones"><label>4<input type="radio" name="pregunta8" value="4"></label></td>
                <td class="opciones"><label>5<input type="radio" name="pregunta8" value="5"></label></td>
            </tr>
            <tr>
                <td class="no_pregunta">&nbsp;&nbsp;9</td>
                <td class="preguntas" >Me ayuda ver diapositivas y videos para comprender un tema.</td>
                <td class="opciones"><label>1<input type="radio" name="pregunta9" value="1"></label></td>
                <td class="opciones"><label>2<input type="radio" name="pregunta9" value="2"></label></td>
                <td class="opciones"><label>3<input type="radio" name="pregunta9" value="3"></label></td>
                <td class="opciones"><label>4<input type="radio" name="pregunta9" value="4"></label></td>
                <td class="opciones"><label>5<input type="radio" name="pregunta9" value="5"></label></td>
            </tr>
            <tr>
                <td class="no_pregunta">10</td>
                <td class="preguntas" >Recuerdo más cuando leo un libro que cuando escucho una conferencia.</td>
                <td class="opciones"><label>1<input type="radio" name="pregunta10" value="1"></label></td>
                <td class="opciones"><label>2<input type="radio" name="pregunta10" value="2"></label></td>
                <td class="opciones"><label>3<input type="radio" name="pregunta10" value="3"></label></td>
                <td class="opciones"><label>4<input type="radio" name="pregunta10" value="4"></label></td>
                <td class="opciones"><label>5<input type="radio" name="pregunta10" value="5"></label></td>
            </tr>
            <tr>
                <td class="no_pregunta">11</td>
                <td class="preguntas" >Por lo general, tengo que escribir los números de teléfono para recordarlos bien.</td>
                <td class="opciones"><label>1<input type="radio" name="pregunta11" value="1"></label></td>
                <td class="opciones"><label>2<input type="radio" name="pregunta11" value="2"></label></td>
                <td class="opciones"><label>3<input type="radio" name="pregunta11" value="3"></label></td>
                <td class="opciones"><label>4<input type="radio" name="pregunta11" value="4"></label></td>
                <td class="opciones"><label>5<input type="radio" name="pregunta11" value="5"></label></td>
            </tr>
            <tr>
                <td class="no_pregunta">12</td>
                <td class="preguntas" >Prefiero recibir las noticias escuchando la radio en vez de leerlas en un periódico.</td>
                <td class="opciones"><label>1<input type="radio" name="pregunta12" value="1"></label></td>
                <td class="opciones"><label>2<input type="radio" name="pregunta12" value="2"></label></td>
                <td class="opciones"><label>3<input type="radio" name="pregunta12" value="3"></label></td>
                <td class="opciones"><label>4<input type="radio" name="pregunta12" value="4"></label></td>
                <td class="opciones"><label>5<input type="radio" name="pregunta12" value="5"></label></td>
            </tr>
            <tr>
                <td class="no_pregunta">13</td>
                <td class="preguntas" >Me gusta tener algo como un bolígrafo o un lápiz en la mano cuando estudio.</td>
                <td class="opciones"><label>1<input type="radio" name="pregunta13" value="1"></label></td>
                <td class="opciones"><label>2<input type="radio" name="pregunta13" value="2"></label></td>
                <td class="opciones"><label>3<input type="radio" name="pregunta13" value="3"></label></td>
                <td class="opciones"><label>4<input type="radio" name="pregunta13" value="4"></label></td>
                <td class="opciones"><label>5<input type="radio" name="pregunta13" value="5"></label></td>
            </tr>
            <tr>
                <td class="no_pregunta">14</td>
                <td class="preguntas" >Necesito copiar los ejemplos de la pizarra del maestro para examinarlos más tarde.</td>
                <td class="opciones"><label>1<input type="radio" name="pregunta14" value="1"></label></td>
                <td class="opciones"><label>2<input type="radio" name="pregunta14" value="2"></label></td>
                <td class="opciones"><label>3<input type="radio" name="pregunta14" value="3"></label></td>
                <td class="opciones"><label>4<input type="radio" name="pregunta14" value="4"></label></td>
                <td class="opciones"><label>5<input type="radio" name="pregunta14" value="5"></label></td>
            </tr>
            <tr>
                <td class="no_pregunta">15</td>
                <td class="preguntas" >Prefiero las instrucciones orales del maestro a aquellas escritas en un examen o en una pizarra.</td>
                <td class="opciones"><label>1<input type="radio" name="pregunta15" value="1"></label></td>
                <td class="opciones"><label>2<input type="radio" name="pregunta15" value="2"></label></td>
                <td class="opciones"><label>3<input type="radio" name="pregunta15" value="3"></label></td>
                <td class="opciones"><label>4<input type="radio" name="pregunta15" value="4"></label></td>
                <td class="opciones"><label>5<input type="radio" name="pregunta15" value="5"></label></td>
            </tr>
            <tr>
                <td class="no_pregunta">16</td>
                <td class="preguntas" >Me gusta escuchar música al estudiar una obra, novela, etc.</td>
                <td class="opciones"><label>1<input type="radio" name="pregunta16" value="1"></label></td>
                <td class="opciones"><label>2<input type="radio" name="pregunta16" value="2"></label></td>
                <td class="opciones"><label>3<input type="radio" name="pregunta16" value="3"></label></td>
                <td class="opciones"><label>4<input type="radio" name="pregunta16" value="4"></label></td>
                <td class="opciones"><label>5<input type="radio" name="pregunta16" value="5"></label></td>
            </tr>
            <tr>
                <td class="no_pregunta">17</td>
                <td class="preguntas" >Puedo corregir mi tarea examinándola y encontrando la mayoría de mis errores.</td>
                <td class="opciones"><label>1<input type="radio" name="pregunta17" value="1"></label></td>
                <td class="opciones"><label>2<input type="radio" name="pregunta17" value="2"></label></td>
                <td class="opciones"><label>3<input type="radio" name="pregunta17" value="3"></label></td>
                <td class="opciones"><label>4<input type="radio" name="pregunta17" value="4"></label></td>
                <td class="opciones"><label>5<input type="radio" name="pregunta17" value="5"></label></td>
            </tr>
            <tr>
                <td class="no_pregunta">18</td>
                <td class="preguntas" >Puedo recordar los números de teléfonos cuando los oigo.</td>
                <td class="opciones"><label>1<input type="radio" name="pregunta18" value="1"></label></td>
                <td class="opciones"><label>2<input type="radio" name="pregunta18" value="2"></label></td>
                <td class="opciones"><label>3<input type="radio" name="pregunta18" value="3"></label></td>
                <td class="opciones"><label>4<input type="radio" name="pregunta18" value="4"></label></td>
                <td class="opciones"><label>5<input type="radio" name="pregunta18" value="5"></label></td>
            </tr>
            <tr>
                <td class="no_pregunta">19</td>
                <td class="preguntas" >Gozo los trabajos que me exige usar la mano o herramientas.</td>
                <td class="opciones"><label>1<input type="radio" name="pregunta19" value="1"></label></td>
                <td class="opciones"><label>2<input type="radio" name="pregunta19" value="2"></label></td>
                <td class="opciones"><label>3<input type="radio" name="pregunta19" value="3"></label></td>
                <td class="opciones"><label>4<input type="radio" name="pregunta19" value="4"></label></td>
                <td class="opciones"><label>5<input type="radio" name="pregunta19" value="5"></label></td>
            </tr>
            <tr>
                <td class="no_pregunta">20</td>
                <td class="preguntas" >Cuando escribo algo, necesito leerlo en voz para oír cómo suena.</td>
                <td class="opciones"><label>1<input type="radio" name="pregunta20" value="1"></label></td>
                <td class="opciones"><label>2<input type="radio" name="pregunta20" value="2"></label></td>
                <td class="opciones"><label>3<input type="radio" name="pregunta20" value="3"></label></td>
                <td class="opciones"><label>4<input type="radio" name="pregunta20" value="4"></label></td>
                <td class="opciones"><label>5<input type="radio" name="pregunta20" value="5"></label></td>
            </tr>
            <tr>
                <td class="no_pregunta">21</td>
                <td class="preguntas" >Puedo recordar mejor las cosas cuando puedo moverme mientras estoy aprendiéndolas,
                    <br> por ej: Caminar al estudiar, o participar en una actividad que me permita moverme, etc.</td>
                <td class="opciones"><label>1<input type="radio" name="pregunta21" value="1"></label></td>
                <td class="opciones"><label>2<input type="radio" name="pregunta21" value="2"></label></td>
                <td class="opciones"><label>3<input type="radio" name="pregunta21" value="3"></label></td>
                <td class="opciones"><label>4<input type="radio" name="pregunta21" value="4"></label></td>
                <td class="opciones"><label>5<input type="radio" name="pregunta21" value="5"></label></td>
            </tr>
        </table>
        <br><br>

        <h2 class="subtema">Habilidades de Estudio</h2>
        <p class="instrucciones">
            Marca el círculo al finalizar cada pregunta, según corresponda tu respuesta a SÍ o NO

            <input type="hidden" id="validados1">
            <input type="hidden" id="validados2">
            <input type="hidden" id="validados3">

            <input type="hidden" id="cadena1" name="cadena1">
            <input type="hidden" id="cadena2" name="cadena2">
            <input type="hidden" id="cadena3" name="cadena3">
        </p>
        <br>

        <table class="preguntas_dos">
            <tr>
                <th class="tabla2th" colspan="2">Encuesta para organización del estudio:</th>
                <th class="tabla2th">SÍ</th>
                <th class="tabla2th">NO</th>
            </tr>
            <tr>
                <td class="no_pregunta2">A.-</td>
                <td class="preguntas2">¿Sueles dejar para el último la preparación de tus trabajos?</td>
                <td class="si_no"><input type="radio" name="marcaXA1" class="marca_x" value="0"></td>
                <td class="si_no"><input type="radio" name="marcaXA1" class="marca_x" value="1"></td>
            </tr>
            <tr>
                <td class="no_pregunta2">B.-</td>
                <td class="preguntas2">¿Crees que el sueño o el cansancio te impidan estudiar eficazmente en muchas ocasiones?</td>
                <td class="si_no"><input type="radio" name="marcaXB1" class="marca_x" value="0"></td>
                <td class="si_no"><input type="radio" name="marcaXB1" class="marca_x" value="1"></td>
            </tr>
            <tr>
                <td class="no_pregunta2">C.-</td>
                <td class="preguntas2">¿Es frecuente que no termines tu tarea a tiempo?</td>
                <td class="si_no"><input type="radio" name="marcaXC1" class="marca_x" value="0"></td>
                <td class="si_no"><input type="radio" name="marcaXC1" class="marca_x" value="1"></td>
            </tr>
            <tr>
                <td class="no_pregunta2">D.-</td>
                <td class="preguntas2">¿Tiendes a emplear tiempo en leer revistas, ver televisión o charlar cuando debieras dedicarlos a estudiar?</td>
                <td class="si_no"><input type="radio" name="marcaXD1" class="marca_x" value="0"></td>
                <td class="si_no"><input type="radio" name="marcaXD1" class="marca_x" value="1"></td>
            </tr>
            <tr>
                <td class="no_pregunta2">E.-</td>
                <td class="preguntas2">Tus actividades sociales o deportivas, ¿Te llevan a descuidar, a menudo, tus tareas escolares?</td>
                <td class="si_no"><input type="radio" name="marcaXE1" class="marca_x" value="0"></td>
                <td class="si_no"><input type="radio" name="marcaXE1" class="marca_x" value="1"></td>
            </tr>
            <tr>
                <td class="no_pregunta2">F.-</td>
                <td class="preguntas2">¿Sueles dejar pasar un día o más antes de repasarlos apuntes tomados en clase?</td>
                <td class="si_no"><input type="radio" name="marcaXF1" class="marca_x" value="0"></td>
                <td class="si_no"><input type="radio" name="marcaXF1" class="marca_x" value="1"></td>
            </tr>
            <tr>
                <td class="no_pregunta2">G.-</td>
                <td class="preguntas2">¿Sueles dedicar tu tiempo libre entre las 4:00 p.m. y las 9:00 p.m. a otras actividades que no sean estudiar?</td>
                <td class="si_no"><input type="radio" name="marcaXG1" class="marca_x" value="0"></td>
                <td class="si_no"><input type="radio" name="marcaXG1" class="marca_x" value="1"></td>
            </tr>
            <tr>
                <td class="no_pregunta2">H.-</td>
                <td class="preguntas2">¿Descubres algunas veces de pronto, que debes entregar una tarea antes de lo que creías?</td>
                <td class="si_no"><input type="radio" name="marcaXH1" class="marca_x" value="0"></td>
                <td class="si_no"><input type="radio" name="marcaXH1" class="marca_x" value="1"></td>
            </tr>
            <tr>
                <td class="no_pregunta2">I.-</td>
                <td class="preguntas2">¿Te retrasas, con frecuencia, en una asignatura debido a que tienes que estudiar otra?</td>
                <td class="si_no"><input type="radio" name="marcaXI1" class="marca_x" value="0"></td>
                <td class="si_no"><input type="radio" name="marcaXI1" class="marca_x" value="1"></td>
            </tr>
            <tr>
                <td class="no_pregunta2">J.-</td>
                <td class="preguntas2">¿Te parece que tu rendimiento es muy bajo, en relación con el tiempo que dedicas al estudio?</td>
                <td class="si_no"><input type="radio" name="marcaXJ1" class="marca_x" value="0"></td>
                <td class="si_no"><input type="radio" name="marcaXJ1" class="marca_x" value="1"></td>
            </tr>
            <tr>
                <td class="no_pregunta2">K.-</td>
                <td class="preguntas2">¿Está situado tu escritorio directamente frente a una ventana, puerta u otra fuente de distracción?</td>
                <td class="si_no"><input type="radio" name="marcaXK1" class="marca_x" value="0"></td>
                <td class="si_no"><input type="radio" name="marcaXK1" class="marca_x" value="1"></td>
            </tr>
            <tr>
                <td class="no_pregunta2">L.-</td>
                <td class="preguntas2">¿Sueles tener fotografías, trofeos o recuerdos sobre tu mesa de escritorio?</td>
                <td class="si_no"><input type="radio" name="marcaXL1" class="marca_x" value="0"></td>
                <td class="si_no"><input type="radio" name="marcaXL1" class="marca_x" value="1"></td>
            </tr>
            <tr>
                <td class="no_pregunta2">M.-</td>
                <td class="preguntas2">¿Sueles estudiar recostado en la cama o arrellanado en un asiento cómodo?</td>
                <td class="si_no"><input type="radio" name="marcaXM1" class="marca_x" value="0"></td>
                <td class="si_no"><input type="radio" name="marcaXM1" class="marca_x" value="1"></td>
            </tr>
            <tr>
                <td class="no_pregunta2">N.-</td>
                <td class="preguntas2">¿Produce resplandor la lámpara que utilizas al estudiar?</td>
                <td class="si_no"><input type="radio" name="marcaXN1" class="marca_x" value="0"></td>
                <td class="si_no"><input type="radio" name="marcaXN1" class="marca_x" value="1"></td>
            </tr>
            <tr>
                <td class="no_pregunta2">O.-</td>
                <td class="preguntas2">Tu mesa de estudio,<br>¿Está tan desordenada y llena de objetos, que no dispones de sitio suficiente para estudiar con eficacia?</td>
                <td class="si_no"><input type="radio" name="marcaXO1" class="marca_x" value="0"></td>
                <td class="si_no"><input type="radio" name="marcaXO1" class="marca_x" value="1"></td>
            </tr>
            <tr>
                <td class="no_pregunta2">P.-</td>
                <td class="preguntas2">¿Sueles interrumpir tu estudio, por personas que vienen a visitarte?</td>
                <td class="si_no"><input type="radio" name="marcaXP1" class="marca_x" value="0"></td>
                <td class="si_no"><input type="radio" name="marcaXP1" class="marca_x" value="1"></td>
            </tr>
            <tr>
                <td class="no_pregunta2">Q.-</td>
                <td class="preguntas2">¿Estudias, con frecuencia, mientras tienes puesta la televisión y/o la radio?</td>
                <td class="si_no"><input type="radio" name="marcaXQ1" class="marca_x" value="0"></td>
                <td class="si_no"><input type="radio" name="marcaXQ1" class="marca_x" value="1"></td>
            </tr>
            <tr>
                <td class="no_pregunta2">R.-</td>
                <td class="preguntas2">En el lugar donde estudias,<br>¿Se pueden ver con facilidad revistas, fotos de jóvenes o materiales pertenecientes a tu afición?</td>
                <td class="si_no"><input type="radio" name="marcaXR1" class="marca_x" value="0"></td>
                <td class="si_no"><input type="radio" name="marcaXR1" class="marca_x" value="1"></td>
            </tr>
            <tr>
                <td class="no_pregunta2">S.-</td>
                <td class="preguntas2">¿Con frecuencia, interrumpen tu estudio, actividades o ruidos que provienen del exterior?</td>
                <td class="si_no"><input type="radio" name="marcaXS1" class="marca_x" value="0"></td>
                <td class="si_no"><input type="radio" name="marcaXS1" class="marca_x" value="1"></td>
            </tr>
            <tr>
                <td class="no_pregunta2">T.-</td>
                <td class="preguntas2">¿Suele hacerse lento tu estudio debido a que no tienes a la mano los libros y los materiales necesarios?</td>
                <td class="si_no"><input type="radio" name="marcaXT1" class="marca_x" value="0"></td>
                <td class="si_no"><input type="radio" name="marcaXT1" class="marca_x" value="1"></td>
            </tr>
        </table>
        <br>
        <br>

        <table class="preguntas_dos">
            <tr>
                <th class="tabla2th" colspan="2">Encuesta sobre técnicas de estudio:</th>
                <th class="tabla2th" >SÍ</th>
                <th class="tabla2th" >NO</th>
            </tr>
            <tr>
                <td class="no_pregunta2">A.-</td>
                <td class="preguntas2">¿Tiendes a comenzar la lectura de un libro de texto sin hojear previamente los subtítulos y las ilustraciones?</td>
                <td class="si_no"><input type="radio" name="marcaXA2" class="marca_x" value="0"></td>
                <td class="si_no"><input type="radio" name="marcaXA2" class="marca_x" value="1"></td>
            </tr>
            <tr>
                <td class="no_pregunta2">B.-</td>
                <td class="preguntas2">¿Te saltas por lo general las figuras, gráficas y tablas cuando estudias un tema?</td>
                <td class="si_no"><input type="radio" name="marcaXB2" class="marca_x" value="0"></td>
                <td class="si_no"><input type="radio" name="marcaXB2" class="marca_x" value="1"></td>
            </tr>
            <tr>
                <td class="no_pregunta2">C.-</td>
                <td class="preguntas2">¿Suele serte difícil seleccionar los puntos de los temas de estudio?</td>
                <td class="si_no"><input type="radio" name="marcaXC2" class="marca_x" value="0"></td>
                <td class="si_no"><input type="radio" name="marcaXC2" class="marca_x" value="1"></td>
            </tr>
            <tr>
                <td class="no_pregunta2">D.-</td>
                <td class="preguntas2">¿Te sorprendes con cierta frecuencia, pensando en algo que no tiene nada que ver con lo que estudias?</td>
                <td class="si_no"><input type="radio" name="marcaXD2" class="marca_x" value="0"></td>
                <td class="si_no"><input type="radio" name="marcaXD2" class="marca_x" value="1"></td>
            </tr>
            <tr>
                <td class="no_pregunta2">E.-</td>
                <td class="preguntas2">¿Sueles tener dificultad en entender tus apuntes de clase cuando tratas de repasarlos, después de cierto tiempo?</td>
                <td class="si_no"><input type="radio" name="marcaXE2" class="marca_x" value="0"></td>
                <td class="si_no"><input type="radio" name="marcaXE2" class="marca_x" value="1"></td>
            </tr>
            <tr>
                <td class="no_pregunta2">F.-</td>
                <td class="preguntas2">Al tomar notas, ¿Te sueles quedar atrás con frecuencia debido a que no puedes escribir con suficiente rapidez?</td>
                <td class="si_no"><input type="radio" name="marcaXF2" class="marca_x" value="0"></td>
                <td class="si_no"><input type="radio" name="marcaXF2" class="marca_x" value="1"></td>
            </tr>
            <tr>
                <td class="no_pregunta2">G.-</td>
                <td class="preguntas2">Poco después de comenzar un curso, ¿Sueles encontrarte con tus apuntes formando un “revoltijo"?</td>
                <td class="si_no"><input type="radio" name="marcaXG2" class="marca_x" value="0"></td>
                <td class="si_no"><input type="radio" name="marcaXG2" class="marca_x" value="1"></td>
            </tr>
            <tr>
                <td class="no_pregunta2">H.-</td>
                <td class="preguntas2">¿Tomas normalmente tus apuntes tratando de escribir las palabras exactas del docente?</td>
                <td class="si_no"><input type="radio" name="marcaXH2" class="marca_x" value="0"></td>
                <td class="si_no"><input type="radio" name="marcaXH2" class="marca_x" value="1"></td>
            </tr>
            <tr>
                <td class="no_pregunta2">I.-</td>
                <td class="preguntas2">Cuando tomas notas de un libro, ¿Tienes la costumbre de copiar el material necesario, palabra por Palabra?</td>
                <td class="si_no"><input type="radio" name="marcaXI2" class="marca_x" value="0"></td>
                <td class="si_no"><input type="radio" name="marcaXI2" class="marca_x" value="1"></td>
            </tr>
            <tr>
                <td class="no_pregunta2">J.-</td>
                <td class="preguntas2">¿Te es difícil preparar un temario apropiado para una evaluación?</td>
                <td class="si_no"><input type="radio" name="marcaXJ2" class="marca_x" value="0"></td>
                <td class="si_no"><input type="radio" name="marcaXJ2" class="marca_x" value="1"></td>
            </tr>
            <tr>
                <td class="no_pregunta2">K.-</td>
                <td class="preguntas2">¿Tienes problemas para organizar los datos o el contenido de una evaluación?</td>
                <td class="si_no"><input type="radio" name="marcaXK2" class="marca_x" value="0"></td>
                <td class="si_no"><input type="radio" name="marcaXK2" class="marca_x" value="1"></td>
            </tr>
            <tr>
                <td class="no_pregunta2">L.-</td>
                <td class="preguntas2">¿Al repasar el temario de una evaluación formulas un resumen de este?</td>
                <td class="si_no"><input type="radio" name="marcaXL2" class="marca_x" value="0"></td>
                <td class="si_no"><input type="radio" name="marcaXL2" class="marca_x" value="1"></td>
            </tr>
            <tr>
                <td class="no_pregunta2">M.-</td>
                <td class="preguntas2">¿Te preparas a veces para un evaluación memorizando fórmulas, definiciones o reglas que no entiendes con claridad?</td>
                <td class="si_no"><input type="radio" name="marcaXM2" class="marca_x" value="0"></td>
                <td class="si_no"><input type="radio" name="marcaXM2" class="marca_x" value="1"></td>
            </tr>
            <tr>
                <td class="no_pregunta2">N.-</td>
                <td class="preguntas2">¿Te resulta difícil decidir qué estudiar y cómo estudiarlo cuando preparas una evaluación?</td>
                <td class="si_no"><input type="radio" name="marcaXN2" class="marca_x" value="0"></td>
                <td class="si_no"><input type="radio" name="marcaXN2" class="marca_x" value="1"></td>
            </tr>
            <tr>
                <td class="no_pregunta2">O.-</td>
                <td class="preguntas2">¿Sueles tener dificultades para organizar, en un orden lógico, las asignaturas que debes estudiar por temas?</td>
                <td class="si_no"><input type="radio" name="marcaXO2" class="marca_x" value="0"></td>
                <td class="si_no"><input type="radio" name="marcaXO2" class="marca_x" value="1"></td>
            </tr>
            <tr>
                <td class="no_pregunta2">P.-</td>
                <td class="preguntas2">Al preparar evaluación, ¿Sueles estudiar toda la asignatura, en el último momento?</td>
                <td class="si_no"><input type="radio" name="marcaXP2" class="marca_x" value="0"></td>
                <td class="si_no"><input type="radio" name="marcaXP2" class="marca_x" value="1"></td>
            </tr>
            <tr>
                <td class="no_pregunta2">Q.-</td>
                <td class="preguntas2">¿Sueles entregar tus exámenes sin revisarlos detenidamente, para ver si tienen algún error cometido por descuido?</td>
                <td class="si_no"><input type="radio" name="marcaXQ2" class="marca_x" value="0"></td>
                <td class="si_no"><input type="radio" name="marcaXQ2" class="marca_x" value="1"></td>
            </tr>
            <tr>
                <td class="no_pregunta2">R.-</td>
                <td class="preguntas2">¿Te es posible con frecuencia terminar una evaluación de exposición de un tema en el tiempo prescrito?</td>
                <td class="si_no"><input type="radio" name="marcaXR2" class="marca_x" value="0"></td>
                <td class="si_no"><input type="radio" name="marcaXR2" class="marca_x" value="1"></td>
            </tr>
            <tr>
                <td class="no_pregunta2">S.-</td>
                <td class="preguntas2">¿Sueles perder puntos en exámenes con preguntas de “Verdadero - Falso", debido a que no lees detenidamente?</td>
                <td class="si_no"><input type="radio" name="marcaXS2" class="marca_x" value="0"></td>
                <td class="si_no"><input type="radio" name="marcaXS2" class="marca_x" value="1"></td>
            </tr>
            <tr>
                <td class="no_pregunta2">T.-</td>
                <td class="preguntas2">¿Empleas normalmente mucho tiempo en contestar la primera mitad de la prueba y tienes que apresurarte en la segunda?</td>
                <td class="si_no"><input type="radio" name="marcaXT2" class="marca_x" value="0"></td>
                <td class="si_no"><input type="radio" name="marcaXT2" class="marca_x" value="1"></td>
            </tr>
        </table>
        <br>
        <br>

        <table class="preguntas_dos">
            <tr>
                <th class="tabla2th" colspan="2">Encuesta sobre motivación para el estudio:</th>
                <th class="tabla2th">SÍ</th>
                <th class="tabla2th">NO</th>
            </tr>
            <tr>
                <td class="no_pregunta2">A.-</td>
                <td class="preguntas2">Después de los primeros días o semanas del curso, ¿Tiendes a perder interés por el estudio?</td>
                <td class="si_no"><input type="radio" name="marcaXA3" class="marca_x" value="0"></td>
                <td class="si_no"><input type="radio" name="marcaXA3" class="marca_x" value="1"></td>
            </tr>
            <tr>
                <td class="no_pregunta2">B.-</td>
                <td class="preguntas2">¿Crees que en general, basta estudiar lo necesario para obtener un “aprobado” en las asignaturas?</td>
                <td class="si_no"><input type="radio" name="marcaXB3" class="marca_x" value="0"></td>
                <td class="si_no"><input type="radio" name="marcaXB3" class="marca_x" value="1"></td>
            </tr>
            <tr>
                <td class="no_pregunta2">C.-</td>
                <td class="preguntas2">¿Te sientes frecuentemente confuso o indeciso sobre cuáles deben ser tus metas formativas y profesionales?</td>
                <td class="si_no"><input type="radio" name="marcaXC3" class="marca_x" value="0"></td>
                <td class="si_no"><input type="radio" name="marcaXC3" class="marca_x" value="1"></td>
            </tr>
            <tr>
                <td class="no_pregunta2">D.-</td>
                <td class="preguntas2">¿Sueles pensar que no vale la pena el tiempo y el esfuerzo que son necesarios para lograr una educación universitaria?</td>
                <td class="si_no"><input type="radio" name="marcaXD3" class="marca_x" value="0"></td>
                <td class="si_no"><input type="radio" name="marcaXD3" class="marca_x" value="1"></td>
            </tr>
            <tr>
                <td class="no_pregunta2">E.-</td>
                <td class="preguntas2">¿Crees que es más importante divertirte y disfrutar de la vida, que estudiar?</td>
                <td class="si_no"><input type="radio" name="marcaXE3" class="marca_x" value="0"></td>
                <td class="si_no"><input type="radio" name="marcaXE3" class="marca_x" value="1"></td>
            </tr>
            <tr>
                <td class="no_pregunta2">F.-</td>
                <td class="preguntas2">¿Sueles pasar el tiempo de clase en divagaciones o soñando despierto en lugar de atender al docente?</td>
                <td class="si_no"><input type="radio" name="marcaXF3" class="marca_x" value="0"></td>
                <td class="si_no"><input type="radio" name="marcaXF3" class="marca_x" value="1"></td>
            </tr>
            <tr>
                <td class="no_pregunta2">G.-</td>
                <td class="preguntas2">¿Te sientes habitualmente incapaz de concentrarte en tus estudios debido a que estas inquieto, aburrido o de mal humor?</td>
                <td class="si_no"><input type="radio" name="marcaXG3" class="marca_x" value="0"></td>
                <td class="si_no"><input type="radio" name="marcaXG3" class="marca_x" value="1"></td>
            </tr>
            <tr>
                <td class="no_pregunta2">H.-</td>
                <td class="preguntas2">¿Piensas con frecuencia que las asignaturas que estudias tienen poco valor practico para ti?</td>
                <td class="si_no"><input type="radio" name="marcaXH3" class="marca_x" value="0"></td>
                <td class="si_no"><input type="radio" name="marcaXH3" class="marca_x" value="1"></td>
            </tr>
            <tr>
                <td class="no_pregunta2">I.-</td>
                <td class="preguntas2">¿Sientes, frecuentes deseos de abandonar la escuela y conseguir un trabajo?</td>
                <td class="si_no"><input type="radio" name="marcaXI3" class="marca_x" value="0"></td>
                <td class="si_no"><input type="radio" name="marcaXI3" class="marca_x" value="1"></td>
            </tr>
            <tr>
                <td class="no_pregunta2">J.-</td>
                <td class="preguntas2">¿Sueles tener la sensación de lo que se enseña en los centros docentes no te prepara para afrontar los problemas de la vida adulta?</td>
                <td class="si_no"><input type="radio" name="marcaXJ3" class="marca_x" value="0"></td>
                <td class="si_no"><input type="radio" name="marcaXJ3" class="marca_x" value="1"></td>
            </tr>
            <tr>
                <td class="no_pregunta2">K.-</td>
                <td class="preguntas2">¿Sueles dedicarte de modo casual, según el estado de ánimo en que te encuentres?</td>
                <td class="si_no"><input type="radio" name="marcaXK3" class="marca_x" value="0"></td>
                <td class="si_no"><input type="radio" name="marcaXK3" class="marca_x" value="1"></td>
            </tr>
            <tr>
                <td class="no_pregunta2">L.-</td>
                <td class="preguntas2">¿Te horroriza estudiar libros de textos porque son insípidos y aburridos?</td>
                <td class="si_no"><input type="radio" name="marcaXL3" class="marca_x" value="0"></td>
                <td class="si_no"><input type="radio" name="marcaXL3" class="marca_x" value="1"></td>
            </tr>
            <tr>
                <td class="no_pregunta2">M.-</td>
                <td class="preguntas2">¿Esperas normalmente a que te fijen la fecha de una evaluación para comenzar a estudiar los textos o repasar tus apuntes de clases?</td>
                <td class="si_no"><input type="radio" name="marcaXM3" class="marca_x" value="0"></td>
                <td class="si_no"><input type="radio" name="marcaXM3" class="marca_x" value="1"></td>
            </tr>
            <tr>
                <td class="no_pregunta2">N.-</td>
                <td class="preguntas2">¿Sueles pensar que los exámenes son pruebas penosas de las que no se puede escapar
                    <br> y respecto a las cuales lo que debe hacerse es sobrevivir, del modo que sea?</td>
                <td class="si_no"><input type="radio" name="marcaXN3" class="marca_x" value="0"></td>
                <td class="si_no"><input type="radio" name="marcaXN3" class="marca_x" value="1"></td>
            </tr>
            <tr>
                <td class="no_pregunta2">O.-</td>
                <td class="preguntas2">¿Sientes con frecuencia que tus docentes no comprenden las necesidades de los estudiantes?</td>
                <td class="si_no"><input type="radio" name="marcaXO3" class="marca_x" value="0"></td>
                <td class="si_no"><input type="radio" name="marcaXO3" class="marca_x" value="1"></td>
            </tr>
            <tr>
                <td class="no_pregunta2">P.-</td>
                <td class="preguntas2">¿Tienes normalmente la sensación de que tus docentes exigen demasiadas horas de estudio fuera de clase?</td>
                <td class="si_no"><input type="radio" name="marcaXP3" class="marca_x" value="0"></td>
                <td class="si_no"><input type="radio" name="marcaXP3" class="marca_x" value="1"></td>
            </tr>
            <tr>
                <td class="no_pregunta2">Q.-</td>
                <td class="preguntas2">¿Dudas por lo general, en pedir ayuda a tus docentes en tareas que te son difíciles?</td>
                <td class="si_no"><input type="radio" name="marcaXQ3" class="marca_x" value="0"></td>
                <td class="si_no"><input type="radio" name="marcaXQ3" class="marca_x" value="1"></td>
            </tr>
            <tr>
                <td class="no_pregunta2">R.-</td>
                <td class="preguntas2">¿Sueles pensar que tus docentes no tienen contacto con los temas y sucesos de actualidad?</td>
                <td class="si_no"><input type="radio" name="marcaXR3" class="marca_x" value="0"></td>
                <td class="si_no"><input type="radio" name="marcaXR3" class="marca_x" value="1"></td>
            </tr>
            <tr>
                <td class="no_pregunta2">S.-</td>
                <td class="preguntas2">¿Te sientes reacio, por lo general, a hablar con tus docentes de tus proyectos futuros, de estudio o profesionales?</td>
                <td class="si_no"><input type="radio" name="marcaXS3" class="marca_x" value="0"></td>
                <td class="si_no"><input type="radio" name="marcaXS3" class="marca_x" value="1"></td>
            </tr>
            <tr>
                <td class="no_pregunta2">T.-</td>
                <td class="preguntas2">¿Criticas con frecuencia a tus docentes cuando charlas con tus compañeros?</td>
                <td class="si_no"><input type="radio" name="marcaXT3" class="marca_x" value="0"></td>
                <td class="si_no"><input type="radio" name="marcaXT3" class="marca_x" value="1"></td>
            </tr>
        </table>
        <br>
        <div id="botones_pedagogia">
            <input type="submit" value="GUARDAR" class="boton_pgia">
            <a href="php/terminar_alumno.php"><input type="button" id="cerrarPedagogia" value="REGRESAR" class="boton_pgia"></a>

        </div>
    </form>
    <script src="js/usuario_alumno.js"></script>
</body>
</html>