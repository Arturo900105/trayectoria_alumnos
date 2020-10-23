<?php
require "php/BD_Connect.php";
$generacion = $_GET["generacion"];
?>
<!doctype html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Estadística EA</title>
    <link rel="stylesheet" href="css/estilos-estadisticas.css">

    <script src="js/jquery_3.4.1.js"></script>
    <script src="https://cdn.jsdelivr.net/combine/npm/sweetalert2@9.10.12,npm/tablesorter@2.31.3"></script>
    <script src="https://cdn.jsdelivr.net/npm/sweetalert2@9.10.12/dist/sweetalert2.all.min.js"></script>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@sweetalert2/theme-dark@3/dark.css">
    <script src="https://cdn.jsdelivr.net/npm/sweetalert2@9/dist/sweetalert2.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/js-cookie@rc/dist/js.cookie.min.js"></script>
    <script src="https://unpkg.com/ionicons@5.1.2/dist/ionicons.js"></script>

    <script src="js/ordenar_tabla.js"></script>
    <script src="js/alerta_estadistica.js"></script>
</head>
<body>
    <h1>INTERPRETACIÓN GENERAL SOBRE ESTILOS DE APRENDIZAJE
        <br>GENERACIÓN <?php echo $generacion ?>:</h1>

    <table id="estadistica_EA" class="tabla_estadistica">
        <thead>
            <tr>
                <th class="th_EA1">CARRERA</th>
                <th class="th_EA">VISUAL</th>
                <th class="th_EA">AUDITIVO</th>
                <th class="th_EA">KINESTÉSICO</th>
                <th class="th_EA">VISUAL - AUDITIVO</th>
                <th class="th_EA">VISUAL - KINESTÉSICO</th>
                <th class="th_EA">AUDITIVO - KINESTÉSICO</th>
                <th class="th_EA2">VISUAL - AUDITIVO - KINESTÉSICO</th>
            </tr>
        </thead>
        <tbody>
            <?php
            $QT_CAPPT = "SELECT al.carrera, al.generacion, tc.estilo_aprendizaje FROM trayectoria_cappt tc
                         JOIN num_control_alumno ctr ON tc.num_control = ctr.num_control
                         JOIN alumno al ON ctr.num_ficha = al.num_ficha
                         WHERE al.generacion = '$generacion'";
            $RT_CAPPT = mysqli_query($connect, $QT_CAPPT);

            function sumarFila($arg_1, $arg_2) {
                if ($arg_1['estilo_aprendizaje'] == "Visual."){
                    ++$arg_2[0];
                }
                if ($arg_1['estilo_aprendizaje'] == "Auditivo.") {
                    ++$arg_2[1];
                }
                if ($arg_1['estilo_aprendizaje'] == "Kinestésico.") {
                    ++$arg_2[2];
                }
                if ($arg_1['estilo_aprendizaje'] == "Visual, Auditivo.") {
                    ++$arg_2[3];
                }
                if ($arg_1['estilo_aprendizaje'] == "Visual, Kinestésico") {
                    ++$arg_2[4];
                }
                if ($arg_1['estilo_aprendizaje'] == "Auditivo, Kinestésico.") {
                    ++$arg_2[5];
                }
                if ($arg_1['estilo_aprendizaje'] == "Visual, Auditivo, Kinestésico.") {
                    ++$arg_2[6];
                }
                return $arg_2;
            }

            $IGEM = array(0,0,0,0,0,0,0);
            $IIND = array(0,0,0,0,0,0,0);
            $ISIC = array(0,0,0,0,0,0,0);
            $IBIO = array(0,0,0,0,0,0,0);
            $IIAS = array(0,0,0,0,0,0,0);
            $IENR = array(0,0,0,0,0,0,0);
            $IFOR = array(0,0,0,0,0,0,0);
            $IAGR = array(0,0,0,0,0,0,0);

            while ($FT_CAPPT = $RT_CAPPT->fetch_assoc()){
            switch ($FT_CAPPT['carrera']){
                case 'IGEM': $IGEM = sumarFila($FT_CAPPT, $IGEM);
                    break;

                case 'IIND': $IIND = sumarFila($FT_CAPPT, $IIND);
                    break;

                case 'ISIC': $ISIC = sumarFila($FT_CAPPT, $ISIC);
                    break;

                case 'IBIO': $IBIO = sumarFila($FT_CAPPT, $IBIO);
                    break;

                case 'IIAS': $IIAS = sumarFila($FT_CAPPT, $IIAS);
                    break;

                case 'IENR': $IENR = sumarFila($FT_CAPPT, $IENR);
                    break;

                case 'IFOR': $IFOR = sumarFila($FT_CAPPT, $IFOR);
                    break;

                case 'IAGR': $IAGR = sumarFila($FT_CAPPT, $IAGR);
                    break;

            } ?>
            <?php } ?>
            <tr class="fila_igem2">
                <th class="td_EA" title="Ingeniería en Gestión Empresarial">IGEM</th>
                <td class="td_EA"><?php echo $IGEM[0]; ?></td>
                <td class="td_EA"><?php echo $IGEM[1]; ?></td>
                <td class="td_EA"><?php echo $IGEM[2]; ?></td>
                <td class="td_EA"><?php echo $IGEM[3]; ?></td>
                <td class="td_EA"><?php echo $IGEM[4]; ?></td>
                <td class="td_EA"><?php echo $IGEM[5]; ?></td>
                <td class="td_EA"><?php echo $IGEM[6]; ?></td>
            </tr>
            <tr class="fila_iind2">
                <th class="td_EA" title="Ingeniería Industrial">IIND</th>
                <td class="td_EA"><?php echo $IIND[0]; ?></td>
                <td class="td_EA"><?php echo $IIND[1]; ?></td>
                <td class="td_EA"><?php echo $IIND[2]; ?></td>
                <td class="td_EA"><?php echo $IIND[3]; ?></td>
                <td class="td_EA"><?php echo $IIND[4]; ?></td>
                <td class="td_EA"><?php echo $IIND[5]; ?></td>
                <td class="td_EA"><?php echo $IIND[6]; ?></td>
            </tr>
            <tr class="fila_isic2">
                <th class="td_EA" title="Ingeniería en Sistemas Computacionales">ISIC</th>
                <td class="td_EA"><?php echo $ISIC[0]; ?></td>
                <td class="td_EA"><?php echo $ISIC[1]; ?></td>
                <td class="td_EA"><?php echo $ISIC[2]; ?></td>
                <td class="td_EA"><?php echo $ISIC[3]; ?></td>
                <td class="td_EA"><?php echo $ISIC[4]; ?></td>
                <td class="td_EA"><?php echo $ISIC[5]; ?></td>
                <td class="td_EA"><?php echo $ISIC[6]; ?></td>
            </tr>
            <tr class="fila_ibio2">
                <th class="td_EA" title="Ingeniería Biomédica">IBIO</th>
                <td class="td_EA"><?php echo $IBIO[0]; ?></td>
                <td class="td_EA"><?php echo $IBIO[1]; ?></td>
                <td class="td_EA"><?php echo $IBIO[2]; ?></td>
                <td class="td_EA"><?php echo $IBIO[3]; ?></td>
                <td class="td_EA"><?php echo $IBIO[4]; ?></td>
                <td class="td_EA"><?php echo $IBIO[5]; ?></td>
                <td class="td_EA"><?php echo $IBIO[6]; ?></td>
            </tr>
            <tr class="fila_iias2">
                <th class="td_EA" title="Ingeniería en Innovación Agrícola Sustentable">IIAS</th>
                <td class="td_EA"><?php echo $IIAS[0]; ?></td>
                <td class="td_EA"><?php echo $IIAS[1]; ?></td>
                <td class="td_EA"><?php echo $IIAS[2]; ?></td>
                <td class="td_EA"><?php echo $IIAS[3]; ?></td>
                <td class="td_EA"><?php echo $IIAS[4]; ?></td>
                <td class="td_EA"><?php echo $IIAS[5]; ?></td>
                <td class="td_EA"><?php echo $IIAS[6]; ?></td>
            </tr>
            <tr class="fila_ienr2">
                <th class="td_EA" title="Ingeniería en Energías Renovables">IENR</th>
                <td class="td_EA"><?php echo $IENR[0]; ?></td>
                <td class="td_EA"><?php echo $IENR[1]; ?></td>
                <td class="td_EA"><?php echo $IENR[2]; ?></td>
                <td class="td_EA"><?php echo $IENR[3]; ?></td>
                <td class="td_EA"><?php echo $IENR[4]; ?></td>
                <td class="td_EA"><?php echo $IENR[5]; ?></td>
                <td class="td_EA"><?php echo $IENR[6]; ?></td>
            </tr>
            <tr class="fila_ifor2">
                <th class="td_EA" title="Ingeniería Forestal">IFOR</th>
                <td class="td_EA"><?php echo $IFOR[0]; ?></td>
                <td class="td_EA"><?php echo $IFOR[1]; ?></td>
                <td class="td_EA"><?php echo $IFOR[2]; ?></td>
                <td class="td_EA"><?php echo $IFOR[3]; ?></td>
                <td class="td_EA"><?php echo $IFOR[4]; ?></td>
                <td class="td_EA"><?php echo $IFOR[5]; ?></td>
                <td class="td_EA"><?php echo $IFOR[6]; ?></td>
            </tr>
            <tr class="fila_iagr2">
                <th class="td_EA" title="Ingeniería en Agronomía">IAGR</th>
                <td class="td_EA"><?php echo $IAGR[0]; ?></td>
                <td class="td_EA"><?php echo $IAGR[1]; ?></td>
                <td class="td_EA"><?php echo $IAGR[2]; ?></td>
                <td class="td_EA"><?php echo $IAGR[3]; ?></td>
                <td class="td_EA"><?php echo $IAGR[4]; ?></td>
                <td class="td_EA"><?php echo $IAGR[5]; ?></td>
                <td class="td_EA"><?php echo $IAGR[6]; ?></td>
            </tr>
        </tbody>
    </table>
</body>
</html>