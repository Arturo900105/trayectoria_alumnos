<?php
require "php/BD_Connect.php";
$numFicha = $_GET["ficha_alumno"];
?>
<!doctype html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Resultados E. Psicología</title>
    <link rel="stylesheet" href="css/estilos-resultados.css">
</head>
<body>
    <h1>Resultados del Examen Psicológico</h1>
    <form class="tablas_ppm">
        <?php
        $Qtabla_Psicologia = "SELECT tp.*,al.nombre,al.apellidos,al.carrera,al.generacion
                                FROM tabla_psicologia tp
                                JOIN alumno al
                                ON al.num_ficha = tp.num_ficha
                                WHERE tp.num_ficha = '$numFicha'";
        $Rtabla_Psicologia = mysqli_query($connect, $Qtabla_Psicologia);
        while ($ftPsicologia = $Rtabla_Psicologia->fetch_assoc()){
            if ($ftPsicologia['carrera'] == "IGEM") {
                $ftPsicologia['carrera'] = "Ingeniería en Gestión Empresarial";
            } elseif ($ftPsicologia['carrera'] == "IIND") {
                $ftPsicologia['carrera'] = "Ingeniería Industrial";
            } elseif ($ftPsicologia['carrera'] == "ISIC") {
                $ftPsicologia['carrera'] = "Ingeniería en Sistemas Computacionales";
            } elseif ($ftPsicologia['carrera'] == "IBIO") {
                $ftPsicologia['carrera'] = "Ingeniería Biomédica";
            } elseif ($ftPsicologia['carrera'] == "IIAS") {
                $ftPsicologia['carrera'] = "Ingeniería en Innovación Agrícola Sustentable";
            } elseif ($ftPsicologia['carrera'] == "IENR") {
                $ftPsicologia['carrera'] = "Ingeniería en Energías Renovables";
            } elseif ($ftPsicologia['carrera'] == "IFOR") {
                $ftPsicologia['carrera'] = "Ingeniería Forestal";
            } elseif ($ftPsicologia['carrera'] == "IAGR") {
                $ftPsicologia['carrera'] = "Ingeniería en Agronomía";
            }
        ?>
        <h2>Ficha: <?php echo $ftPsicologia['num_ficha'] ?></h2>
        <h2>Nombre: <?php echo $ftPsicologia['nombre']." ".$ftPsicologia['apellidos'] ?></h2>
        <h2>Carrera: <?php echo $ftPsicologia['carrera'] ?></h2>
        <h2>Generación: <?php echo $ftPsicologia['generacion'] ?></h2>
        <br><br>

        <table id="resultados_psicologia">
            <tr>
                <th class="rth_psicologia">Pregunta 1:</th>
                <td class="rtd_psicologia"><?php echo $ftPsicologia['pregunta1'] ?></td>
            </tr>
            <tr>
                <th class="rth_psicologia">Respuesta 1:</th>
                <td class="rtd_psicologia"><?php echo $ftPsicologia['respuesta1'] ?></td>
            </tr>
            <tr>
                <th class="rth_psicologia">Pregunta 2:</th>
                <td class="rtd_psicologia"><?php echo $ftPsicologia['pregunta2'] ?></td>
            </tr>
            <tr>
                <th class="rth_psicologia">Respuesta 2:</th>
                <td class="rtd_psicologia"><?php echo $ftPsicologia['respuesta2'] ?></td>
            </tr>
            <tr>
                <th class="rth_psicologia">Suma de Ansiedad:</th>
                <td class="rtd_psicologia"><?php echo $ftPsicologia['ansiedad'] ?></td>
            </tr>
            <tr>
                <th class="rth_psicologia">Suma de Depresión:</th>
                <td class="rtd_psicologia"><?php echo $ftPsicologia['depresion'] ?></td>
            </tr>
            <tr>
                <th class="rth_psicologia">Suma de Ansiedad y Depresión:</th>
                <td class="rtd_psicologia"><?php echo $ftPsicologia['suma_ad'] ?></td>
            </tr>
            <tr>
                <th class="rth_psicologia">Preguntas validadas con "Sí" del Bloque1:</th>
                <td class="rtd_psicologia"><?php echo $ftPsicologia['preguntas_bloque1'] ?></td>
            </tr>
            <tr>
                <th class="rth_psicologia">Total del Bloque1:</th>
                <td class="rtd_psicologia"><?php echo $ftPsicologia['bloque1'] ?></td>
            </tr>
            <tr>
                <th class="rth_psicologia">Preguntas validadas con "Sí" del Bloque2:</th>
                <td class="rtd_psicologia"><?php echo $ftPsicologia['preguntas_bloque2'] ?></td>
            </tr>
            <tr>
                <th class="rth_psicologia">Total del Bloque2:</th>
                <td class="rtd_psicologia"><?php echo $ftPsicologia['bloque2'] ?></td>
            </tr>
            <tr>
                <th class="rth_psicologia">Preguntas validadas con "Sí" del Bloque3:</th>
                <td class="rtd_psicologia"><?php echo $ftPsicologia['preguntas_bloque3'] ?></td>
            </tr>
            <tr>
                <th class="rth_psicologia">Total del Bloque3:</th>
                <td class="rtd_psicologia"><?php echo $ftPsicologia['bloque3'] ?></td>
            </tr>
            <tr>
                <th class="rth_psicologia">Preguntas validadas con "Sí" del Bloque4:</th>
                <td class="rtd_psicologia"><?php echo $ftPsicologia['preguntas_bloque4'] ?></td>
            </tr>
            <tr>
                <th class="rth_psicologia">Total del Bloque4:</th>
                <td class="rtd_psicologia"><?php echo $ftPsicologia['bloque4'] ?></td>
            </tr>
        </table>
        <?php } ?>
        <br>

        <div id="boton-psicologia">
            <button id="cerrar_rpsicologia" onclick="window.close();">CERRAR</button>
        </div>
    </form>
</body>
</html>