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
    <title>Resultados E. Médico</title>
    <link rel="stylesheet" href="css/estilos-resultados.css">
</head>
<body>
    <h1>Resultados del Examen Médico</h1>
    <form class="tablas_ppm">
        <?php
        $Qtabla_Medica = "SELECT tm.*,al.nombre,al.apellidos,al.carrera,al.generacion
                                FROM tabla_medica tm
                                JOIN alumno al
                                ON al.num_ficha = tm.num_ficha
                                WHERE tm.num_ficha = '$numFicha'";
        $Rtabla_Medica = mysqli_query($connect, $Qtabla_Medica);
        while ($ftMedica = $Rtabla_Medica->fetch_assoc()){
            if ($ftMedica['carrera'] == "IGEM") {
                $ftMedica['carrera'] = "Ingeniería en Gestión Empresarial";
            } elseif ($ftMedica['carrera'] == "IIND") {
                $ftMedica['carrera'] = "Ingeniería Industrial";
            } elseif ($ftMedica['carrera'] == "ISIC") {
                $ftMedica['carrera'] = "Ingeniería en Sistemas Computacionales";
            } elseif ($ftMedica['carrera'] == "IBIO") {
                $ftMedica['carrera'] = "Ingeniería Biomédica";
            } elseif ($ftMedica['carrera'] == "IIAS") {
                $ftMedica['carrera'] = "Ingeniería en Innovación Agrícola Sustentable";
            } elseif ($ftMedica['carrera'] == "IENR") {
                $ftMedica['carrera'] = "Ingeniería en Energías Renovables";
            } elseif ($ftMedica['carrera'] == "IFOR") {
                $ftMedica['carrera'] = "Ingeniería Forestal";
            } elseif ($ftMedica['carrera'] == "IAGR") {
                $ftMedica['carrera'] = "Ingeniería en Agronomía";
            }
        ?>
        <h2>Ficha: <?php echo $ftMedica['num_ficha'] ?></h2>
        <h2>Nombre: <?php echo $ftMedica['nombre']." ".$ftMedica['apellidos'] ?></h2>
        <h2>Carrera: <?php echo $ftMedica['carrera'] ?></h2>
        <h2>Generación: <?php echo $ftMedica['generacion'] ?></h2>
        <br><br>

        <table id="resultado_medico">
            <tr>
                <th class="rth_medico">Peso:</th>
                <td class="rtd_medico"><?php echo $ftMedica['peso'] ?></td>
            </tr>
            <tr>
                <th class="rth_medico">Estatura:</th>
                <td class="rtd_medico"><?php echo $ftMedica['estatura'] ?></td>
            </tr>
            <tr>
                <th class="rth_medico">Tipo de Sangre:</th>
                <td class="rtd_medico"><?php echo $ftMedica['tipo_sangre'] ?></td>
            </tr>
            <tr>
                <th class="rth_medico">Antecedentes Heredofamiliares:</th>
                <td class="rtd_medico"><?php echo $ftMedica['antes_hered'] ?></td>
            </tr>
            <tr>
                <th class="rth_medico">Toxicomanías:</th>
                <td class="rtd_medico"><?php echo $ftMedica['toxicomanias'] ?></td>
            </tr>
            <tr>
                <th class="rth_medico">Tipo de Toxicomanías:</th>
                <td class="rtd_medico"><?php echo $ftMedica['tipo_toxicomanias'] ?></td>
            </tr>
            <tr>
                <th class="rth_medico">Frecuencia de Toxicomanías:</th>
                <td class="rtd_medico"><?php echo $ftMedica['frecuencia'] ?></td>
            </tr>
            <tr>
                <th class="rth_medico">Embarazo:</th>
                <td class="rtd_medico"><?php echo $ftMedica['embarazo'] ?></td>
            </tr>
            <tr>
                <th class="rth_medico">Tiempo de Embarazo:</th>
                <td class="rtd_medico"><?php echo $ftMedica['tiempo_embarazo'] ?></td>
            </tr>
            <tr>
                <th class="rth_medico">Actividad Fisica:</th>
                <td class="rtd_medico"><?php echo $ftMedica['act_fisica'] ?></td>
            </tr>
            <tr>
                <th class="rth_medico">Tipo de Actividad:</th>
                <td class="rtd_medico"><?php echo $ftMedica['actividad'] ?></td>
            </tr>
            <tr>
                <th class="rth_medico">Tiempo en Actividad:</th>
                <td class="rtd_medico"><?php echo $ftMedica['tiempo'] ?></td>
            </tr>
            <tr>
                <th class="rth_medico">Alergias:</th>
                <td class="rtd_medico"><?php echo $ftMedica['alergias'] ?></td>
            </tr>
            <tr>
                <th class="rth_medico">Alergia Especificada:</th>
                <td class="rtd_medico"><?php echo $ftMedica['desc_alergias'] ?></td>
            </tr>
            <tr>
                <th class="rth_medico">Quirúrgicos/Cirugías:</th>
                <td class="rtd_medico"><?php echo $ftMedica['quir_cir'] ?></td>
            </tr>
            <tr>
                <th class="rth_medico">Transfusionales:</th>
                <td class="rtd_medico"><?php echo $ftMedica['transfusionales'] ?></td>
            </tr>
            <tr>
                <th class="rth_medico">Diabetes:</th>
                <td class="rtd_medico"><?php echo $ftMedica['diabetes'] ?></td>
            </tr>
            <tr>
                <th class="rth_medico">Tipo de Diabetes:</th>
                <td class="rtd_medico"><?php echo $ftMedica['tipo_diabetes'] ?></td>
            </tr>
            <tr>
                <th class="rth_medico">Hipertensión:</th>
                <td class="rtd_medico"><?php echo $ftMedica['hipertencion'] ?></td>
            </tr>
            <tr>
                <th class="rth_medico">Convulsiones:</th>
                <td class="rtd_medico"><?php echo $ftMedica['convulsiones'] ?></td>
            </tr>
            <tr>
                <th class="rth_medico">Asma:</th>
                <td class="rtd_medico"><?php echo $ftMedica['asma'] ?></td>
            </tr>
            <tr>
                <th class="rth_medico">Teléfono de Emergencia 1:</th>
                <td class="rtd_medico"><?php echo $ftMedica['tel_obligatorio'] ?></td>
            </tr>
            <tr>
                <th class="rth_medico">Teléfono de Emergencia 2:</th>
                <td class="rtd_medico"><?php echo $ftMedica['tel_opcional'] ?></td>
            </tr>
        </table>
        <?php } ?>
        <br>

        <div id="boton-medico">
            <button id="cerrar_rmedico" onclick="window.close();">CERRAR</button>
        </div>
    </form>
</body>
</html>