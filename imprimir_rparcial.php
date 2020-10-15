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
    <title>Reportes Parciales</title>
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
    <h1>REPORTES PARCIALES</h1>
    <br>
    <table id="tabla_rparcial" class="registro_pdf">
        <thead>
            <tr>
                <th class="rth_rparcial">Folio</th>
                <th class="rth_rparcial">Periodo</th>
                <th class="rth_rparcial">Tutor</th>
                <th class="rth_rparcial">Semestre/Grupo</th>
                <th class="rth_rparcial">Programa</th>
                <th class="rth_rparcial">Tutorados Asignados</th>
                <th class="rth_rparcial">Fecha</th>
                <th class="rth_rparcial">Hora</th>
                <th class="rth_rparcial2">PDF</th>
            </tr>
        </thead>
        <tbody>
            <?php
            $qRParcial = "SELECT * FROM reporte_parcial";
            $rRParcial = mysqli_query($connect, $qRParcial);
            while ($frRParcial = $rRParcial->fetch_assoc()){
                if ($frRParcial['programa'] == "Ingeniería en Gestión Empresarial") {
                    $frRParcial['programa'] = "IGEM";
                } elseif ($frRParcial['programa'] == "Ingeniería Industrial") {
                    $frRParcial['programa'] = "IIND";
                } elseif ($frRParcial['programa'] == "Ingeniería en Sistemas Computacionales") {
                    $frRParcial['programa'] = "ISIC";
                } elseif ($frRParcial['programa'] == "Ingeniería Biomédica") {
                    $frRParcial['programa'] = "IBIO";
                } elseif ($frRParcial['programa'] == "Ingeniería en Innovación Agrícola Sustentable") {
                    $frRParcial['programa'] = "IIAS";
                } elseif ($frRParcial['programa'] == "Ingeniería en Energías Renovables") {
                    $frRParcial['programa'] = "IENR";
                } elseif ($frRParcial['programa'] == "Ingeniería Forestal") {
                    $frRParcial['programa'] = "IFOR";
                } elseif ($frRParcial['programa'] == "Ingeniería en Agronomía") {
                    $frRParcial['programa'] = "IAGR";
                }
            ?>
            <tr>
                <td class="rtd_rparcial"><?php echo $frRParcial['id_rparcial'] ?></td>
                <td id="rparcial_periodo" class="rtd_rparcial"><?php echo $frRParcial['periodo'] ?></td>
                <td id="rparcial_tutor" class="rtd_rparcial"><?php echo $frRParcial['nom_tutor'] ?></td>
                <td class="rtd_rparcial"><?php echo $frRParcial['semestre_grupo'] ?></td>
                <td class="rtd_rparcial"><?php echo $frRParcial['programa'] ?></td>
                <td class="rtd_rparcial"><?php echo $frRParcial['tutorado_asignado'] ?></td>
                <td id="rparcial_fecha" class="rtd_rparcial"><?php echo $frRParcial['fecha'] ?></td>
                <td class="rtd_rparcial"><?php echo $frRParcial['hora'] ?></td>
                <td class="rtd_rparcial">
                    <a target="_blank" href="documentos/reporte_parcial.php?id_rparcial=<?php echo $frRParcial['id_rparcial'] ?>">
                        <input type="button" value="IMPRIMIR" id="imprimir_rparcial" title="Abrir Reporte Parcial <?php echo $frRParcial['id_rparcial'] ?>">
                    </a>
                </td>
            </tr>
            <?php } ?>
        </tbody>
    </table>
</body>
</html>