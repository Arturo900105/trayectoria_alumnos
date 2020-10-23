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
    <title>Coordinadores</title>
    <link rel="stylesheet" href="css/estilo-sesioncoordinador.css">

    <script src="js/jquery_3.4.1.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/sweetalert2@9.10.12/dist/sweetalert2.all.min.js"></script>
    <script src="https://cdn.jsdelivr.net/combine/npm/sweetalert2@9.10.12,npm/tablesorter@2.31.3"></script>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@sweetalert2/theme-dark@3/dark.css">
    <script src="https://cdn.jsdelivr.net/npm/sweetalert2@9/dist/sweetalert2.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/js-cookie@rc/dist/js.cookie.min.js"></script>

    <script src="js/ordenar_tabla.js"></script>
</head>
<body>
    <h1 class="tpersonal">COORDINADORES DEL ITSP</h1>

    <table id="tabla_coordinadores">
        <thead>
            <tr>
                <th class="th_tablaCoords">NÓMINA</th>
                <th class="th_tablaCoords">NOMBRE</th>
                <th class="th_tablaCoords">APELLIDOS</th>
                <th class="th_tablaCoords">COORDINADOR DE...</th>
                <th class="th_tablaCoords">E-MAIL</th>
                <th class="th_tablaCoords">FECHA DE REGISTRO</th>
                <th class="th_tablaCoords">HORA DE REGISTRO</th>
                <th class="th_tablaCoords">USUARIO</th>
            </tr>
        </thead>
        <tbody>
            <?php
            $consultaC = "SELECT * FROM coordinador";
            $resultadoC = mysqli_query($connect, $consultaC);
            while ($filaC = $resultadoC->fetch_assoc()){
                if ($filaC['coordinacion'] == "IGEM"){
                    $filaC['coordinacion'] = "Ingeniería en Gestión Empresarial";
                } elseif ($filaC['coordinacion'] == "IIND"){
                    $filaC['coordinacion'] = "Ingeniería Industrial";
                }elseif ($filaC['coordinacion'] == "ISIC"){
                    $filaC['coordinacion'] = "Ingeniería en Sistemas Computacionales";
                }elseif ($filaC['coordinacion'] == "IBIO"){
                    $filaC['coordinacion'] = "Ingeniería Biomédica";
                }elseif ($filaC['coordinacion'] == "IIAS"){
                    $filaC['coordinacion'] = "Ingeniería en Innovación Agrícola Sustentable";
                }elseif ($filaC['coordinacion'] == "IENR"){
                    $filaC['coordinacion'] = "Ingeniería en Energías Renovables";
                }elseif ($filaC['coordinacion'] == "IFOR"){
                    $filaC['coordinacion'] = "Ingeniería Forestal";
                }elseif ($filaC['coordinacion'] == "IAGR"){
                    $filaC['coordinacion'] = "Ingeniería en Agronomía";
                }
                ?>
                <tr>
                    <td class="td_tablaCoords"><?php echo $filaC['id_coordinador'] ?></td>
                    <td class="td_tablaCoords"><?php echo $filaC['nombre'] ?></td>
                    <td class="td_tablaCoords"><?php echo $filaC['apellidos'] ?></td>
                    <td class="td_tablaCoords"><?php echo $filaC['coordinacion'] ?></td>
                    <td class="td_tablaCoords"><?php echo $filaC['email'] ?></td>
                    <td class="td_tablaCoords"><?php echo $filaC['fecha_registro'] ?></td>
                    <td class="td_tablaCoords"><?php echo $filaC['hora_registro'] ?></td>
                    <td class="td_tablaCoords"><?php echo $filaC['usuario'] ?></td>
                </tr>
            <?php }?>
        </tbody>
    </table>

</body>
</html>
