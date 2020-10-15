<?php
require "php/BD_Connect.php";
session_name("TUTOR");
session_start();
$letSession = $_SESSION["usututor"];
$letCarrera = $_SESSION["carrera"];
$letidTutor = $_SESSION["idTutor"];
?>
<!doctype html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Alumnos del ITSP</title>
    <link rel="stylesheet" href="css/estilos-lista_alumnos.css">

    <script src="js/jquery_3.4.1.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/sweetalert2@9.10.12/dist/sweetalert2.all.min.js"></script>
    <script src="https://cdn.jsdelivr.net/combine/npm/sweetalert2@9.10.12,npm/tablesorter@2.31.3"></script>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@sweetalert2/theme-dark@3/dark.css">
    <script src="https://cdn.jsdelivr.net/npm/sweetalert2@9/dist/sweetalert2.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/js-cookie@rc/dist/js.cookie.min.js"></script>

    <script src="js/ordenar_tabla.js"></script>
    <script src="js/alerta_tutor.js"></script>
</head>
<body>
    <?php
    if ($letCarrera == "IGEM") {
        $nomCarrera = "Ingeniería en Gestión Empresarial";
    } elseif ($letCarrera == "IIND") {
        $nomCarrera = "Ingeniería Industrial";
    } elseif ($letCarrera == "ISIC") {
        $nomCarrera = "Ingeniería en Sistemas Computacionales";
    } elseif ($letCarrera == "IBIO") {
        $nomCarrera = "Ingeniería Biomédica";
    } elseif ($letCarrera == "IIAS") {
        $nomCarrera = "Ingeniería en Innovación Agrícola Sustentable";
    } elseif ($letCarrera == "IENR") {
        $nomCarrera = "Ingeniería en Energías Renovables";
    } elseif ($letCarrera == "IFOR") {
        $nomCarrera = "Ingeniería Forestal";
    } elseif ($letCarrera == "IAGR") {
        $nomCarrera = "Ingeniería en Agronomía";
    }
    ?>

    <h1>Alumnos de <?php echo $nomCarrera; ?></h1>

    <table id="alumnosITSP">
        <thead>
            <tr>
                <th class="th_alumnosITSP">¿Agregar Alumno?</th>
                <th class="th_alumnosITSP">Núm. de Ficha</th>
                <th class="th_alumnosITSP">Apellidos</th>
                <th class="th_alumnosITSP">Nombre(s)</th>
                <th class="th_alumnosITSP">Carrera</th>
                <th class="th_alumnosITSP">Generación</th>
            </tr>
        </thead>
        <tbody>
        <?php
        $qAlumno = "SELECT * FROM alumno WHERE carrera = '$letCarrera' AND id_tutor = 0";
        $rAlumno = mysqli_query($connect, $qAlumno);
        while ($fAlumno = $rAlumno->fetch_assoc()){
        ?>
            <tr>
                <td class="td_alumnosITSP">
                    <button class="agregar" onclick="agregarAlumno('<?php echo $fAlumno['num_ficha'] ?>', '<?php echo $letidTutor ?>');" title="Agregar <?php echo $fAlumno['num_ficha'] ?> a mi lista">
                        AGREGAR
                    </button>
                </td>
                <td class="td_alumnosITSP"><?php echo $fAlumno['num_ficha'] ?></td>
                <td class="td_alumnosITSP"><?php echo $fAlumno['apellidos'] ?></td>
                <td class="td_alumnosITSP"><?php echo $fAlumno['nombre'] ?></td>
                <td class="td_alumnosITSP"><?php echo $fAlumno['carrera'] ?></td>
                <td class="td_alumnosITSP"><?php echo $fAlumno['generacion'] ?></td>
                <?php } ?>
            </tr>
        </tbody>
    </table>

</body>
</html>
