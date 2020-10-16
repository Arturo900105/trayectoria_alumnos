<?php
require "php/BD_Connect.php";
?>
<!doctype html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Tabla Médica</title>
    <link rel="stylesheet" href="css/estilos-mostrar.css">
</head>
<body>
    <h1>RESULTADOS DEL EXAMEN MÉDICO</h1>
    <table id="mostrarMedica">
        <thead>
            <tr>
                <th class="mth_mostrarMedica">Núm. de Ficha</th>
                <th class="mth_mostrarMedica">Nombre</th>
                <th class="mth_mostrarMedica">Peso</th>
                <th class="mth_mostrarMedica">Estatura</th>
                <th class="mth_mostrarMedica">Tipo de Sangre</th>
                <th class="mth_mostrarMedica">Tel. Obligatorio</th>
                <th class="mth_mostrarMedica">Tel. Opcional</th>
                <th class="mth_mostrarMedica">Carrera</th>
                <th class="mth_mostrarMedica">Generación</th>
                <th class="mth_mostrarMedica">RESULTADOS</th>
            </tr>
        </thead>
        <tbody>
        <?php
        $qMedica = "SELECT me.*,al.nombre,al.apellidos,al.carrera,al.generacion
                    FROM tabla_medica me
                    JOIN alumno al
                    ON me.num_ficha = al.num_ficha";
        $rMedica = mysqli_query($connect, $qMedica);
        while ($fMedica = $rMedica->fetch_assoc()){
        ?>
            <tr>
                <td class="mtd_mostrarMedica"><?php echo $fMedica['num_ficha'] ?></td>
                <td class="mtd_mostrarMedica"><?php echo $fMedica['nombre']." ".$fMedica['apellidos'] ?></td>
                <td class="mtd_mostrarMedica"><?php echo $fMedica['peso'] ?></td>
                <td class="mtd_mostrarMedica"><?php echo $fMedica['estatura'] ?></td>
                <td class="mtd_mostrarMedica"><?php echo $fMedica['tipo_sangre'] ?></td>
                <td class="mtd_mostrarMedica"><?php echo $fMedica['tel_obligatorio'] ?></td>
                <td class="mtd_mostrarMedica"><?php echo $fMedica['tel_opcional'] ?></td>
                <td class="mtd_mostrarMedica"><?php echo $fMedica['carrera'] ?></td>
                <td class="mtd_mostrarMedica"><?php echo $fMedica['generacion'] ?></td>
                <td class="mtd_mostrarMedica">
                    <a href="mostrar_Amedica2.php?ficha_alumno=<?php echo $fMedica['num_ficha'] ?>" target="_blank">
                        <input type="button" value="MÁS RESULTADOS" id="mostRespMedico" title="Mostar más resultados de <?php echo $fMedica['nombre']." ".$fMedica['apellidos'] ?>.">
                    </a>
                </td>
            </tr>
        <?php } ?>
        </tbody>
    </table>
</body>
</html>
