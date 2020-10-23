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
    <title>Canalizaciones</title>
    <link rel="stylesheet" href="css/estilos-imprimir.css">

    <script src="js/jquery_3.4.1.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/sweetalert2@9.10.12/dist/sweetalert2.all.min.js"></script>
    <script src="https://cdn.jsdelivr.net/combine/npm/sweetalert2@9.10.12,npm/tablesorter@2.31.3"></script>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@sweetalert2/theme-dark@3/dark.css">
    <script src="https://cdn.jsdelivr.net/npm/sweetalert2@9/dist/sweetalert2.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/js-cookie@rc/dist/js.cookie.min.js"></script>

    <script src="js/ordenar_tabla.js"></script>
</head>
<body>
    <h1>CANALIZACIONES</h1>
    <br>
    <table id="tabla_canalizacion" class="registro_pdf">
        <thead>
            <tr>
                <th class="rth_canalizacion">Folio</th>
                <th class="rth_canalizacion">Nombre del Estudiante</th>
                <th class="rth_canalizacion">Núm. de Control</th>
                <th class="rth_canalizacion">Semestre</th>
                <th class="rth_canalizacion">Ciclo Escolar</th>
                <th class="rth_canalizacion">Tutor/Profesor</th>
                <th class="rth_canalizacion">Coordinación de Tutorías</th>
                <th class="rth_canalizacion">Encargado del área canalizada</th>
                <th class="rth_canalizacion">Fecha</th>
                <th class="rth_canalizacion">Hora</th>
                <th class="rth_canalizacion2">PDF</th>
            </tr>
        </thead>
        <tbody>
            <?php
            $qCanalizacion = "SELECT * FROM canalizacion";
            $rCanalizacion = mysqli_query($connect, $qCanalizacion);
            while ($fCanalizacion = $rCanalizacion->fetch_assoc()){
                ?>
                <tr>
                    <td id="canali_folio" class="rtd_canalizacion"><?php echo $fCanalizacion['folio'] ?></td>
                    <td class="rtd_canalizacion"><?php echo $fCanalizacion['nom_estudiante'] ?></td>
                    <td id="canali_control" class="rtd_canalizacion"><?php echo $fCanalizacion['num_control'] ?></td>
                    <td id="canali_semestre" class="rtd_canalizacion"><?php echo $fCanalizacion['semestre'] ?></td>
                    <td class="rtd_canalizacion"><?php echo $fCanalizacion['ciclo_escolar'] ?></td>
                    <td class="rtd_canalizacion"><?php echo $fCanalizacion['firma_tutor'] ?></td>
                    <td class="rtd_canalizacion"><?php echo $fCanalizacion['firma_ctpe'] ?></td>
                    <td class="rtd_canalizacion"><?php echo $fCanalizacion['firma_encargado_ac'] ?></td>
                    <td class="rtd_canalizacion"><?php echo $fCanalizacion['fecha'] ?></td>
                    <td class="rtd_canalizacion"><?php echo $fCanalizacion['hora'] ?></td>
                    <td class="rtd_canalizacion2">
                        <a target="_blank" href="documentos/canalizacion.php?folio=<?php echo $fCanalizacion['folio'] ?>">
                            <input type="button" value="IMPRIMIR" id="imprimir_canalizacion" title="Abrir Canalización <?php echo $fCanalizacion['folio'] ?>">
                        </a>
                    </td>
                </tr>
            <?php } ?>
        </tbody>

    </table>

</body>
</html>