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
    <title>Reportes Finales</title>
    <link rel="stylesheet" href="css/estilos-imprimir.css">

    <script src="js/jquery_3.4.1.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/sweetalert2@9.10.12/dist/sweetalert2.all.min.js"></script>
    <script src="https://cdn.jsdelivr.net/combine/npm/sweetalert2@9.10.12,npm/tablesorter@2.31.3"></script>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@sweetalert2/theme-dark@3/dark.css">
    <script src="https://cdn.jsdelivr.net/npm/sweetalert2@9/dist/sweetalert2.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/js-cookie@rc/dist/js.cookie.min.js"></script>

    <script src="js/registro_canalizacion.js"></script>
</head>
<body>
    <h1>REPORTES FINALES</h1>
    <br>
    <table id="tabla_rfinal" class="registro_pdf">
        <thead>
            <tr>
                <th class="rth_rfinal">Folio</th>
                <th class="rth_rfinal">Periodo</th>
                <th class="rth_rfinal">Tutor</th>
                <th class="rth_rfinal">Semestre/Grupo</th>
                <th class="rth_rfinal">Programa</th>
                <th class="rth_rfinal">Tutorados Asignados</th>
                <th class="rth_rfinal">Fecha</th>
                <th class="rth_rfinal">Hora</th>
                <th class="rth_rfinal2">PDF</th>
            </tr>
        </thead>
        <tbody>
            <?php
            $qRFinal = "SELECT * FROM reporte_final";
            $rRFinal = mysqli_query($connect, $qRFinal);
            while ($frRFinal = $rRFinal->fetch_assoc()){
            if ($frRFinal['programa_final'] == "Ingeniería en Gestión Empresarial") {
                $frRFinal['programa_final'] = "IGEM";
            } elseif ($frRFinal['programa_final'] == "Ingeniería Industrial") {
                $frRFinal['programa_final'] = "IIND";
            } elseif ($frRFinal['programa_final'] == "Ingeniería en Sistemas Computacionales") {
                $frRFinal['programa_final'] = "ISIC";
            } elseif ($frRFinal['programa_final'] == "Ingeniería Biomédica") {
                $frRFinal['programa_final'] = "IBIO";
            } elseif ($frRFinal['programa_final'] == "Ingeniería en Innovación Agrícola Sustentable") {
                $frRFinal['programa_final'] = "IIAS";
            } elseif ($frRFinal['programa_final'] == "Ingeniería en Energías Renovables") {
                $frRFinal['programa_final'] = "IENR";
            } elseif ($frRFinal['programa_final'] == "Ingeniería Forestal") {
                $frRFinal['programa_final'] = "IFOR";
            } elseif ($frRFinal['programa_final'] == "Ingeniería en Agronomía") {
                $frRFinal['programa_final'] = "IAGR";
            }
            ?>
            <tr>
                <td class="rtd_rfinal"><?php echo $frRFinal['id_rfinal'] ?></td>
                <td id="rfinal_periodo" class="rtd_rfinal"><?php echo $frRFinal['periodo_final'] ?></td>
                <td id="rfinal_tutor" class="rtd_rfinal"><?php echo $frRFinal['nombre_tutor'] ?></td>
                <td class="rtd_rfinal"><?php echo $frRFinal['sem_grupf'] ?></td>
                <td class="rtd_rfinal"><?php echo $frRFinal['programa_final'] ?></td>
                <td class="rtd_rfinal"><?php echo $frRFinal['tutf_asignado'] ?></td>
                <td id="rfinal_fecha" class="rtd_rfinal"><?php echo $frRFinal['fecha_final'] ?></td>
                <td class="rtd_rfinal"><?php echo $frRFinal['hora_final'] ?></td>
                <td class="rtd_rfinal">
                    <a target="_blank" href="documentos/reporte_final.php?id_rfinal=<?php echo $frRFinal['id_rfinal'] ?>">
                        <input type="button" value="IMPRIMIR" id="imprimir_rfinal" title="Abrir Reporte Final <?php echo $frRFinal['id_rfinal'] ?>">
                    </a>
                </td>
            </tr>
            <?php } ?>
        </tbody>
    </table>

</body>
</html>
