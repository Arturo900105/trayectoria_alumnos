<?php
require "php/BD_Connect.php";
$numControl = $_GET["matricula_alumno"];
?>
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <title>Proceso de Titulación</title>
    <link rel="shortcut icon" href="iconos/semT.jpg" type="image/x-icon">
    <link rel="stylesheet" href="css/estilos-ttitulacion.css">

    <script src="js/jquery_3.4.1.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/sweetalert2@9.10.12/dist/sweetalert2.all.min.js"></script>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@sweetalert2/theme-dark@3/dark.css">
    <script src="https://cdn.jsdelivr.net/npm/sweetalert2@9/dist/sweetalert2.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/js-cookie@rc/dist/js.cookie.min.js"></script>
    <script src="https://unpkg.com/ionicons@5.1.2/dist/ionicons.js"></script>

    <script src="js/t_titulacion.js"></script>
</head>
<body>
    <form id="proceso_titulacion" autocomplete="off">
        <h1>Proceso de Titulación</h1>
        <br>
        <?php
        $q_Alumno = "SELECT al.apellidos, al.nombre, tut.apellido_tut, tut.nombre_tut FROM alumno al
                     JOIN num_control_alumno ctr
                     ON ctr.num_ficha = al.num_ficha
                     JOIN tutor tut
                     ON al.id_tutor = tut.id_tutor
                     WHERE num_control = '$numControl'";
        $R_Alumno = mysqli_query($connect, $q_Alumno);
        while ($F_Alumno = $R_Alumno->fetch_assoc()){
        ?>
        <h2>Control: <?php echo $numControl ?></h2>
        <h2>Alumno: <?php echo $F_Alumno['nombre']." ".$F_Alumno['apellidos'] ?></h2>
        <input type="hidden" name="ctrAlumno" value="<?php echo $numControl ?>">
        <input type="hidden" name="nombreTutor" value="<?php echo $F_Alumno['nombre_tut']." ".$F_Alumno['apellido_tut'] ?>">
        <?php } ?>
        <br><br>

        <label>Tema de Proyecto de Investigación:
            <input type="text" name="tema" id="tema" value="" placeholder="">
        </label>
        <br><br>

        Inglés acreditado:
        <label class="ingles_acred">SÍ: <input type="radio" name="ingles_acreditado" value="SÍ"></label>
        <label class="ingles_acred">NO: <input type="radio" name="ingles_acreditado" value="NO"></label>

        <label id="texto_credito">Créditos cumplidos:
            <input type="text" value="" id="creditos_cumplidos" name="creditos_cumplidos" minlength="3" maxlength="3">
        </label>

        <label>Fecha de examen protocolario:
            <input type="date" id="fecha_examen" name="fecha_examen">
        </label>

        <div class="botones_titulacion">
            <input type="submit" value="GUARDAR" class="btn_tit">
            <input type="button" value="CANCELAR" class="btn_tit" id="cerrarTitulacion">
        </div>
    </form>
</body>
</html>