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
    <title>Datos del Alumno</title>
    <link rel="stylesheet" href="css/estilos-resultados.css">
</head>
<body>
    <h1>Datos del Alumno</h1>
    <form id="tabla_datosAlumno">
        <?php
        $Qtabla_Alumno = "SELECT al.*,dom.*,pro.* FROM alumno al
                            JOIN alumno_domicilio dom
                            ON al.num_ficha = dom.num_ficha
                            JOIN alumno_procedencia pro
                            ON pro.num_ficha = al.num_ficha
                            WHERE al.num_ficha = '$numFicha'";
        $Rtabla_Alumno = mysqli_query($connect, $Qtabla_Alumno);
        while ($ftAlumno = $Rtabla_Alumno->fetch_assoc()){
        if ($ftAlumno['carrera'] == "IGEM") {
            $ftAlumno['carrera'] = "Ingeniería en Gestión Empresarial";
        } elseif ($ftAlumno['carrera'] == "IIND") {
            $ftAlumno['carrera'] = "Ingeniería Industrial";
        } elseif ($ftAlumno['carrera'] == "ISIC") {
            $ftAlumno['carrera'] = "Ingeniería en Sistemas Computacionales";
        } elseif ($ftAlumno['carrera'] == "IBIO") {
            $ftAlumno['carrera'] = "Ingeniería Biomédica";
        } elseif ($ftAlumno['carrera'] == "IIAS") {
            $ftAlumno['carrera'] = "Ingeniería en Innovación Agrícola Sustentable";
        } elseif ($ftAlumno['carrera'] == "IENR") {
            $ftAlumno['carrera'] = "Ingeniería en Energías Renovables";
        } elseif ($ftAlumno['carrera'] == "IFOR") {
            $ftAlumno['carrera'] = "Ingeniería Forestal";
        } elseif ($ftAlumno['carrera'] == "IAGR") {
            $ftAlumno['carrera'] = "Ingeniería en Agronomía";
        }
        ?>
        <h2>Ficha: <?php echo $ftAlumno['num_ficha'] ?></h2>
        <h2>Nombre: <?php echo $ftAlumno['nombre']." ".$ftAlumno['apellidos'] ?></h2>
        <h2>Carrera: <?php echo $ftAlumno['carrera'] ?></h2>
        <h2>Generación: <?php echo $ftAlumno['generacion'] ?></h2>
        <br><br>

        <h2>Personales:</h2>
        <br>
        <table id="resultado_personales">
            <tr>
                <th class="rth_personales">Fecha de Nacimiento:</th>
                <td class="rtd_personales"><?php echo $ftAlumno['fecha_de_nacimiento'] ?></td>
            </tr>
            <tr>
                <th class="rth_personales">Sexo:</th>
                <td class="rtd_personales"><?php echo $ftAlumno['sexo'] ?></td>
            </tr>
            <tr>
                <th class="rth_personales">Indígena:</th>
                <td class="rtd_personales"><?php echo $ftAlumno['indigena'] ?></td>
            </tr>
            <tr>
                <th class="rth_personales">Edad:</th>
                <td class="rtd_personales"><?php echo $ftAlumno['edad'] ?></td>
            </tr>
            <tr>
                <th class="rth_personales">Estado Cívil:</th>
                <td class="rtd_personales"><?php echo $ftAlumno['edo_civil'] ?></td>
            </tr>
            <tr>
                <th class="rth_personales">Teléfono/Celular:</th>
                <td class="rtd_personales"><?php echo $ftAlumno['tel_cel'] ?></td>
            </tr>
            <tr>
                <th class="rth_personales">Email:</th>
                <td class="rtd_personales"><?php echo $ftAlumno['email'] ?></td>
            </tr>
        </table>
        <br><br>

        <h2>Domicilio:</h2>
        <br>
        <table id="resultado_domicilio">
            <tr>
                <th class="rth_domicilio">Dirección:</th>
                <td class="rtd_domicilio"><?php echo $ftAlumno['domicilio'] ?></td>
            </tr>
            <tr>
                <th class="rth_domicilio">Colonia:</th>
                <td class="rtd_domicilio"><?php echo $ftAlumno['colonia'] ?></td>
            </tr>
            <tr>
                <th class="rth_domicilio">Código Postal:</th>
                <td class="rtd_domicilio"><?php echo $ftAlumno['codigo_postal'] ?></td>
            </tr>
            <tr>
                <th class="rth_domicilio">Localidad:</th>
                <td class="rtd_domicilio"><?php echo $ftAlumno['localidad'] ?></td>
            </tr>
            <tr>
                <th class="rth_domicilio">Procedencia:</th>
                <td class="rtd_domicilio"><?php echo $ftAlumno['procedencia'] ?></td>
            </tr>
        </table>
        <br><br>

        <h2>Procedencia:</h2>
        <br>
        <table id="resultado_procedencia">
            <tr>
                <th class="rth_procedencia">Bachillerato:</th>
                <td class="rtd_procedencia"><?php echo $ftAlumno['bach'] ?></td>
            </tr>
            <tr>
                <th class="rth_procedencia">Tipo de Bachillerato:</th>
                <td class="rtd_procedencia"><?php echo $ftAlumno['tipo_bach'] ?></td>
            </tr>
            <tr>
                <th class="rth_procedencia">Nombre del Bachillerato:</th>
                <td class="rtd_procedencia"><?php echo $ftAlumno['nom_bach'] ?></td>
            </tr>
            <tr>
                <th class="rth_procedencia">Promedio de Bachillerato:</th>
                <td class="rtd_procedencia"><?php echo $ftAlumno['promedio_bach'] ?></td>
            </tr>
        </table>
        <?php } ?>
        <br>

        <div id="boton-datosAlumno">
            <button id="cerrar_rdatosAlumno" onclick="window.close();">CERRAR</button>
        </div>
    </form>

</body>
</html>