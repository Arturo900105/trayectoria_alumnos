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
    <title>Tutores</title>
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

    <table id="tabla_tutores">
        <thead>
            <tr>
                <th class="th_tablaTutores">NOMINA</th>
                <th class="th_tablaTutores">NOMBRE</th>
                <th class="th_tablaTutores">APELLIDOS</th>
                <th class="th_tablaTutores">TIPO DE TUTORÍA</th>
                <th class="th_tablaTutores">ÁREA</th>
                <th class="th_tablaTutores">E-MAIL</th>
                <th class="th_tablaTutores">FECHA DE REGISTRO</th>
                <th class="th_tablaTutores">HORA DE REGISTRO</th>
                <th class="th_tablaTutores">USUARIO</th>
            </tr>
        </thead>
        <tbody>
            <?php
            $consultaT = "SELECT * FROM tutor";
            $resultadoT = mysqli_query($connect, $consultaT);
            while ($filaT = $resultadoT->fetch_assoc()){
                if ($filaT['area_de'] == "IGEM"){
                    $filaT['area_de'] = "Ingeniería en Gestión Empresarial";
                } elseif ($filaT['area_de'] == "IIND"){
                    $filaT['area_de'] = "Ingeniería Industrial";
                }elseif ($filaT['area_de'] == "ISIC"){
                    $filaT['area_de'] = "Ingeniería en Sistemas Computacionales";
                }elseif ($filaT['area_de'] == "IBIO"){
                    $filaT['area_de'] = "Ingeniería Biomédica";
                }elseif ($filaT['area_de'] == "IIAS"){
                    $filaT['area_de'] = "Ingeniería en Innovación Agrícola Sustentable";
                }elseif ($filaT['area_de'] == "IENR"){
                    $filaT['area_de'] = "Ingeniería en Energías Renovables";
                }elseif ($filaT['area_de'] == "IFOR"){
                    $filaT['area_de'] = "Ingeniería Forestal";
                }elseif ($filaT['area_de'] == "IAGR"){
                    $filaT['area_de'] = "Ingeniería en Agronomía";
                }
                ?>
                <tr>
                    <td class="td_tablaTutores"><?php echo $filaT['id_tutor']?></td>
                    <td class="td_tablaTutores"><?php echo $filaT['nombre_tut']?></td>
                    <td class="td_tablaTutores"><?php echo $filaT['apellido_tut']?></td>
                    <td class="td_tablaTutores"><?php echo $filaT['tipo_tutoria']?></td>
                    <td class="td_tablaTutores"><?php echo $filaT['area_de']?></td>
                    <td class="td_tablaTutores"><?php echo $filaT['email']?></td>
                    <td class="td_tablaTutores"><?php echo $filaT['fecha_registro']?></td>
                    <td class="td_tablaTutores"><?php echo $filaT['hora_registro']?></td>
                    <td class="td_tablaTutores"><?php echo $filaT['usuario']?></td>
                </tr>
            <?php }?>
        </tbody>
    </table>
</body>
</html>
