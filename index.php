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
        <title>Trayectoria ITSP</title>
        <link rel="shortcut icon" href="iconos/icon2.png" type="image/x-icon">
        <link rel="stylesheet" href="css/estilo-index.css">
        <script src="js/jquery_3.4.1.js"></script>

        <script src="https://cdn.jsdelivr.net/npm/sweetalert2@9.10.12/dist/sweetalert2.all.min.js"></script>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@sweetalert2/theme-dark@3/dark.css">
        <script src="https://cdn.jsdelivr.net/npm/sweetalert2@9/dist/sweetalert2.min.js"></script>
        <script src="https://cdn.jsdelivr.net/npm/js-cookie@rc/dist/js.cookie.min.js"></script>

        <script src="js/alertas.js"></script>
        <script src="js/index_tutor.js"></script>
        <script src="js/index_coordinador.js"></script>
    </head>
    <body>
        <h1>Coordinación Institucional de Tutoría Académica</h1>
        <img src="img/logo_cita2.png" title="Coordinación Institucional de Tutoría Académica" id="itsp_logo">
        <br>

        <a href="caracterizacion.html"><input type="button" value="ALUMNO" class="boton_acceso" title="Formularios de Caracterización Personalizada del Estudiante"></a>
        <a href="javascript:Confirmar_Acceso('sesion_tutor.php')"><input type="button" value="TRAYECTORIA" class="boton_acceso" title="Acceso para Tutores"></a>
        <a href="canalizacion.html"><input type="button" value="CANALIZACIÓN" class="boton_acceso" title="Canalizar Problema Presentado"></a>
        <a href="javascript:Confirmar_Acceso_Reportes()"><input type="button" value="REALIZAR REPORTE" class="boton_acceso" title="Generar Reporte Parcial o Final"></a>
        <a href="javascript:accesoCITA('sesion_coordinador.php')"><input type="button" value="COORDINADOR" class="boton_acceso" title="Acceso solo para el Personal de Tutaría Académica"></a>
        <button class="boton_acceso-salir" title="Salir de la Aplicación" onclick="history.back()">SALIR</button>
        <!--<a href="http://its-purhepecha.edu.mx/"> <input type="button" class="boton_acceso-salir" title="Salir de la Aplicación" value="SALIR"></a>-->
        <br><br><br>

        <div id="significado">
            La tutoría es un proceso de acompañamiento grupal o individual que un tutor le brinda al estudiante durante su estancia en el ITSP
            con el propósito de contribuir a su formación integral e incidir en las metas institucionales relacionados con la calidad educativa;
            elevar los índices de eficiencia terminal, bajar los índices de reprobación y deserción. La tutoría contempla 3 ejes fundamentales:
            <br><br>

            <div id="significado2">
                    1- Desarrollo Académico.
                <br>2- Desarrollo Personal.
                <br>3- Desarrollo Profesional.
            </div>
        </div>

        <div class="modal-fondo" id="ventana_modal">
            <form id="v_modal" autocomplete="off">
                <img src="img/candado.png" id="candado">
                <div id="contenido_modal">
                    <input type="text" placeholder="Ingresa tu Usuario" id="usuarioTutor" name="usuario" class="login">
                    <br><br>
                    <input type="password" placeholder="Ingresa tu Contraseña" id="passTutor" name="pass" class="login" minlength="10" maxlength="10">
                </div>
                <br><br>
                <div id="contenido_modal2">
                    <a href="login-tutor.html"><input type="button" class="botones_login" id="nuevoTutor" value="Nuevo Usuario"></button></a>
                    <button class="botones_login" id="entrar_tutor">ENTRAR</button>
                    <button class="botones_login" id="cerrarTutor">CANCELAR</button>
                </div>
            </form>
        </div>
        
        <div class="modal-fondo" id="ventana_modal_reportes">
            <div id="v_modal_reportes">
                <div id="contenido_modal_reportes">
                    <a href="reporte_parcial.php"><input type="button" value="REPORTE PARCIAL" class="login_reportes" id="reporteParcial"></a>
                    <br><br>
                    <a href="reporte_final.php"><input type="button" value="REPORTE FINAL" class="login_reportes" id="reporteFinal"></a>
                    <br><br>
                    <input type="button" value="SALIR" id="reporteSalir" class="login_reportes">
                </div>
            </div>
        </div>

        <div class="modal-fondo" id="ventana_modal_nip">
            <form id="v_modal_nip" autocomplete="off">
                <img src="img/candado2.png" id="candado2">
                <div id="contenido_modal_nip">
                    <input type="text"
                           id="log_usu"
                           name="log_usuC"
                           placeholder="Ingresa tu Usuario:"
                           class="login_nip">
                    <br><br>
                    <input type="password"
                           id="log_pass"
                           name="log_passC"
                           placeholder="Ingresa tu NIP:"
                           maxlength="4"
                           class="login_nip">
                </div>
                <br><br>

                <div id="contenido_modal_nip2">
                    <a href="javascript:LogNipCITA()"><input type="button" value="Nuevo Usuario" class="botones_login"></a>
                    <input type="button" id="logiarCoord" value="ENTRAR" class="botones_login">
                    <input type="button" id="cerrarCoord" value="CANCELAR" class="botones_login">
                </div>
            </form>
        </div>

        <div class="modal-fondo" id="fondo_nip">
            <form id="solo_nip">
                <input type="password" placeholder="Ingrese NIP autorizado" id="pass-nip" name="pass-nip" maxlength="10">
                <br><br>
                <a href="javascript:confirmarLoginNip()" id="btn_formcita">
                    <input type="button" value="ENTRAR" class="boton_formcita">
                </a>
                <input type="button" value="CANCELAR" class="boton_formcita" onclick="cerrarNipCITA()">
            </form>
        </div>

        <div class="modal-fondo" id="ventana_modal_cita">
            <div id="v_modal_cita">
                <form id="formulario_cita" autocomplete="off">
                    <h2 class="form_pcita">Formulario para el Personal de la
                        <br>Coordinación Institucional de Tutoría Académica</h2>
                    <br>

                    <input type="text" name="nombreCoord" id="nombreCoord" placeholder="Nombre(s):" class="cita_nombre">
                    <input type="text" name="apePat" id="apePat" placeholder="Apellido Paterno:" class="cita_apellidos">
                    <input type="text" name="apeMat" id="apeMat" placeholder="Apellido Materno:" class="cita_apellidos">
                    <br><br>

                    <input type="text" id="nominaCoord" name="nominaCoord" placeholder="No. Trab.:" maxlength="3" minlength="3">

                    <b id="titleSexo">Sexo:</b>
                    <label class="seCoord"><input type="radio" name="sexoCoord" value="M">Masculino</label>
                    <label class="seCoord"><input type="radio" name="sexoCoord" value="F">Femenino</label>
                    <br><br>

                    <select name="cita_tutoria" id="cita_tutoria">
                        <option value="">--- Coordinación de Tutoría: ---</option>
                        <option value="IGEM">Ingeniería en Gestión Empresarial</option>
                        <option value="IIND">Ingeniería Industrial</option>
                        <option value="ISIC">Ingeniería en Sistemas Computacionales</option>
                        <option value="IBIO">Ingeniería Biomédica</option>
                        <option value="IIAS">Ingeniería en Innovación Agrícola Sustentable</option>
                        <option value="IENR">Ingeniería en Energías Renovables</option>
                        <option value="IFOR">Ingeniería Forestal</option>
                        <option value="IAGR">Ingeniería en Agronomía</option>
                    </select>
                    <input type="email" placeholder="E-mail:" name="cita_email" id="cita_email">
                    <br><br>

                    <input type="button" id="generarLogin" value="Generar Login" class="boton_formcita">
                    <input type="text" name="usuarioCoord" id="usuarioCoord" placeholder="Usuario:" class="cita_login" readonly>
                    <input type="text" name="passCoord" id="passCoord" placeholder="Contraseña:" class="cita_login" readonly>
                    <br><br>

                    <input type="submit" value="REGISTRAR" class="boton_formcita">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <a href="javascript:cerrarLoginNip()">
                        <input type="button" value="CANCELAR" class="boton_formcita" onclick="cerrarLoginNip()">
                    </a>
                </form>
            </div>
        </div>
        <script src="js/pass_tutor.js"></script>

        <div class="cite_name">
            <cite>Hecha por ISIC. Gabriel Abraham Sánchez Fonseca</cite>
        </div>
    </body>
</html>