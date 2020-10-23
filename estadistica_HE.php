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
    <title>Estadística HE</title>
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
    <h1>INTERPRETACIÓN GENERAL SOBRE HABILIDADES DE ESTUDIO
        <br>GENERACIÓN <?php echo $generacion ?>:</h1>

    <table id="estadistica_HE" class="tabla_estadistica">
        <thead>
            <tr>
                <th class="th_HE" title="">CARRERA</th>
                <th class="th_HE" title="Interpretación Muy Alta">MA</th>
                <th class="th_HE" title="Interpretación Alta">A</th>
                <th class="th_HE" title="Interpretación Por Encima del Promedio">PEP</th>
                <th class="th_HE" title="Interpretación Promedio Alto">PA</th>
                <th class="th_HE" title="Interpretación Promedio">P</th>
                <th class="th_HE" title="Interpretación Promedio Bajo">PB</th>
                <th class="th_HE" title="Interpretación Por Debajo del Promedio">PDP</th>
                <th class="th_HE" title="Interpretación Baja">B</th>
                <th class="th_HE" title="Interpretación Muy Baja">MB</th>
            </tr>
        </thead>
        <tbody>
        <?php
        $qTPed = "SELECT al.carrera, al.generacion, tpe.suma_otme FROM tabla_pedagogia tpe
                  JOIN alumno al
                  ON tpe.num_ficha = al.num_ficha
                  WHERE al.generacion = '$generacion'";
        $rTPed = mysqli_query($connect, $qTPed);

        function sumarFila($arg_1, $arg_2) {
            if ($arg_1['suma_otme'] >= 57 && $arg_1['suma_otme'] <= 60){
                ++$arg_2[0];
            }
            if ($arg_1['suma_otme'] >= 52 && $arg_1['suma_otme'] <= 56) {
                ++$arg_2[1];
            }
            if ($arg_1['suma_otme'] == 50 || $arg_1['suma_otme'] == 51) {
                ++$arg_2[2];
            }
            if ($arg_1['suma_otme'] == 48 || $arg_1['suma_otme'] == 49) {
                ++$arg_2[3];
            }
            if ($arg_1['suma_otme'] >= 43 && $arg_1['suma_otme'] <= 47) {
                ++$arg_2[4];
            }
            if ($arg_1['suma_otme'] >= 39 && $arg_1['suma_otme'] <= 42) {
                ++$arg_2[5];
            }
            if ($arg_1['suma_otme'] == 37 || $arg_1['suma_otme'] == 38) {
                ++$arg_2[6];
            }
            if ($arg_1['suma_otme'] >= 34 && $arg_1['suma_otme'] <= 36) {
                ++$arg_2[7];
            }
            if ($arg_1['suma_otme'] <= 33) {
                ++$arg_2[8];
            }
            return $arg_2;
        }

        $IGEM = array(0,0,0,0,0,0,0,0,0);
        $IIND = array(0,0,0,0,0,0,0,0,0);
        $ISIC = array(0,0,0,0,0,0,0,0,0);
        $IBIO = array(0,0,0,0,0,0,0,0,0);
        $IIAS = array(0,0,0,0,0,0,0,0,0);
        $IENR = array(0,0,0,0,0,0,0,0,0);
        $IFOR = array(0,0,0,0,0,0,0,0,0);
        $IAGR = array(0,0,0,0,0,0,0,0,0);

        while ($fTPed = $rTPed->fetch_assoc()){
            switch ($fTPed['carrera']){
                case 'IGEM': $IGEM = sumarFila($fTPed, $IGEM);
                    break;

                case 'IIND': $IIND = sumarFila($fTPed, $IIND);
                    break;

                case 'ISIC': $ISIC = sumarFila($fTPed, $ISIC);
                    break;

                case 'IBIO': $IBIO = sumarFila($fTPed, $IBIO);
                    break;

                case 'IIAS': $IIAS = sumarFila($fTPed, $IIAS);
                    break;

                case 'IENR': $IENR = sumarFila($fTPed, $IENR);
                    break;

                case 'IFOR': $IFOR = sumarFila($fTPed, $IFOR);
                    break;

                case 'IAGR': $IAGR = sumarFila($fTPed, $IAGR);
                    break;

            } ?>

        <?php } ?>
            <tr class="fila_igem">
                <th class="td_HE" title="Ingeniería en Gestión Empresarial">IGEM</th>
                <td class="td_HE"><?php echo $IGEM[0]; ?></td>
                <td class="td_HE"><?php echo $IGEM[1]; ?></td>
                <td class="td_HE"><?php echo $IGEM[2]; ?></td>
                <td class="td_HE"><?php echo $IGEM[3]; ?></td>
                <td class="td_HE"><?php echo $IGEM[4]; ?></td>
                <td class="td_HE"><?php echo $IGEM[5]; ?></td>
                <td class="td_HE"><?php echo $IGEM[6]; ?></td>
                <td class="td_HE"><?php echo $IGEM[7]; ?></td>
                <td class="td_HE"><?php echo $IGEM[8]; ?></td>
            </tr>

            <tr class="fila_iind">
                <th class="td_HE" title="Ingeniería Industrial">IIND</th>
                <td class="td_HE"><?php echo $IIND[0]; ?></td>
                <td class="td_HE"><?php echo $IIND[1]; ?></td>
                <td class="td_HE"><?php echo $IIND[2]; ?></td>
                <td class="td_HE"><?php echo $IIND[3]; ?></td>
                <td class="td_HE"><?php echo $IIND[4]; ?></td>
                <td class="td_HE"><?php echo $IIND[5]; ?></td>
                <td class="td_HE"><?php echo $IIND[6]; ?></td>
                <td class="td_HE"><?php echo $IIND[7]; ?></td>
                <td class="td_HE"><?php echo $IIND[8]; ?></td>
            </tr>

            <tr class="fila_isic">
                <th class="td_HE" title="Ingeniería en Sistemas Computacionales">ISIC</th>
                <td class="td_HE"><?php echo $ISIC[0]; ?></td>
                <td class="td_HE"><?php echo $ISIC[1]; ?></td>
                <td class="td_HE"><?php echo $ISIC[2]; ?></td>
                <td class="td_HE"><?php echo $ISIC[3]; ?></td>
                <td class="td_HE"><?php echo $ISIC[4]; ?></td>
                <td class="td_HE"><?php echo $ISIC[5]; ?></td>
                <td class="td_HE"><?php echo $ISIC[6]; ?></td>
                <td class="td_HE"><?php echo $ISIC[7]; ?></td>
                <td class="td_HE"><?php echo $ISIC[8]; ?></td>
            </tr>

            <tr class="fila_ibio">
                <th class="td_HE" title="Ingeniería Biomédica">IBIO</th>
                <td class="td_HE"><?php echo $IBIO[0]; ?></td>
                <td class="td_HE"><?php echo $IBIO[1]; ?></td>
                <td class="td_HE"><?php echo $IBIO[2]; ?></td>
                <td class="td_HE"><?php echo $IBIO[3]; ?></td>
                <td class="td_HE"><?php echo $IBIO[4]; ?></td>
                <td class="td_HE"><?php echo $IBIO[5]; ?></td>
                <td class="td_HE"><?php echo $IBIO[6]; ?></td>
                <td class="td_HE"><?php echo $IBIO[7]; ?></td>
                <td class="td_HE"><?php echo $IBIO[8]; ?></td>
            </tr>

            <tr class="fila_iias">
                <th class="td_HE" title="Ingeniería en Innovación Agrícola Sustentable">IIAS</th>
                <td class="td_HE"><?php echo $IIAS[0]; ?></td>
                <td class="td_HE"><?php echo $IIAS[1]; ?></td>
                <td class="td_HE"><?php echo $IIAS[2]; ?></td>
                <td class="td_HE"><?php echo $IIAS[3]; ?></td>
                <td class="td_HE"><?php echo $IIAS[4]; ?></td>
                <td class="td_HE"><?php echo $IIAS[5]; ?></td>
                <td class="td_HE"><?php echo $IIAS[6]; ?></td>
                <td class="td_HE"><?php echo $IIAS[7]; ?></td>
                <td class="td_HE"><?php echo $IIAS[8]; ?></td>
            </tr>

            <tr class="fila_ienr">
                <th class="td_HE" title="Ingeniería en Energías Renovables">IENR</th>
                <td class="td_HE"><?php echo $IENR[0]; ?></td>
                <td class="td_HE"><?php echo $IENR[1]; ?></td>
                <td class="td_HE"><?php echo $IENR[2]; ?></td>
                <td class="td_HE"><?php echo $IENR[3]; ?></td>
                <td class="td_HE"><?php echo $IENR[4]; ?></td>
                <td class="td_HE"><?php echo $IENR[5]; ?></td>
                <td class="td_HE"><?php echo $IENR[6]; ?></td>
                <td class="td_HE"><?php echo $IENR[7]; ?></td>
                <td class="td_HE"><?php echo $IENR[8]; ?></td>
            </tr>

            <tr class="fila_ifor">
                <th class="td_HE" title="Ingeniería Forestal">IFOR</th>
                <td class="td_HE"><?php echo $IFOR[0]; ?></td>
                <td class="td_HE"><?php echo $IFOR[1]; ?></td>
                <td class="td_HE"><?php echo $IFOR[2]; ?></td>
                <td class="td_HE"><?php echo $IFOR[3]; ?></td>
                <td class="td_HE"><?php echo $IFOR[4]; ?></td>
                <td class="td_HE"><?php echo $IFOR[5]; ?></td>
                <td class="td_HE"><?php echo $IFOR[6]; ?></td>
                <td class="td_HE"><?php echo $IFOR[7]; ?></td>
                <td class="td_HE"><?php echo $IFOR[8]; ?></td>
            </tr>

            <tr class="fila_iagr">
                <th class="td_HE" title="Ingeniería en Agronomía">IAGR</th>
                <td class="td_HE"><?php echo $IAGR[0]; ?></td>
                <td class="td_HE"><?php echo $IAGR[1]; ?></td>
                <td class="td_HE"><?php echo $IAGR[2]; ?></td>
                <td class="td_HE"><?php echo $IAGR[3]; ?></td>
                <td class="td_HE"><?php echo $IAGR[4]; ?></td>
                <td class="td_HE"><?php echo $IAGR[5]; ?></td>
                <td class="td_HE"><?php echo $IAGR[6]; ?></td>
                <td class="td_HE"><?php echo $IAGR[7]; ?></td>
                <td class="td_HE"><?php echo $IAGR[8]; ?></td>
            </tr>

        </tbody>
    </table>
</body>
</html>