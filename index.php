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
        <link rel="stylesheet" href="css/estilo-index.css">
        <script src="js/jquery_3.4.1.js"></script>
        <script src="https://cdn.jsdelivr.net/npm/sweetalert2@9.10.12/dist/sweetalert2.all.min.js"></script>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@sweetalert2/theme-dark@3/dark.css">
        <script src="https://cdn.jsdelivr.net/npm/sweetalert2@9/dist/sweetalert2.min.js"></script>
        <script src="https://cdn.jsdelivr.net/npm/js-cookie@rc/dist/js.cookie.min.js"></script>

        <script src="js/alertas.js"></script>
        <script src="js/numeros.js"></script>
    </head>
    <body>
        <h1>Coordinación Institucional de Tutoría Académica</h1>
        <img src="img/logo_cita.png" title="Tutoría Académica" id="itsp_logo">
        <br>

        <a href="caracterizacion.html"><input type="button" value="ALUMNOS" class="boton_acceso" title="Formularios para Alumnos de Nuevo Ingreso"></a>
        <a href="javascript:Confirmar_Acceso()"><input type="button" value="TRAYECTORIAS" class="boton_acceso" title="Acceso para Tutores"></a>
        <a href="canalizacion.html"><input type="button" value="CANALIZACIÓN" class="boton_acceso" title="Canalizar Problema Presentado"></a>
        <a href="javascript:Confirmar_Accesol_Reportes()"><input type="button" value="REALIZAR REPORTES" class="boton_acceso" title="Generar Reporte Parcial o Final"></a>
        <a href="javascript:accesoCITA()"><input type="button" value="PERSONAL DE LA CITA" class="boton_acceso" title="Acceso solo para el Personal de Tutaría Académica"></a>
        <a href=""><input type="button" value="SALIR" class="boton_acceso-salir" title="Salir de la Aplicación"></a>
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
            <div id="v_modal">
                <img src="img/candado.png" id="candado">
                <div id="contenido_modal">
                    <input type="text" placeholder="Ingresa tu Usuario" class="login">
                    <br><br>
                    <input type="password" placeholder="Ingresa tu Contraseña" class="login">
                </div>
                <br><br>
                <div id="contenido_modal2">
                    <a href="login-tutor.html"><input type="button" value="Nuevo Usuario" class="botones_login"></a>&nbsp;&nbsp;&nbsp;&nbsp;
                    <input type="button" value="ENTRAR" class="botones_login">&nbsp;&nbsp;&nbsp;&nbsp;
                    <input type="button" value="CANCELAR" class="botones_login" onclick="Cerrar_Accesol()">
                </div>
            </div>
        </div>
        
        <div class="modal-fondo" id="ventana_modal_reportes">
            <div id="v_modal_reportes">
                <div id="contenido_modal_reportes">
                    <a href="reporte_parcial.html"><input type="button" value="REPORTE PARCIAL" class="login_reportes"></a>
                    <br><br>
                    <a href="reporte_final.html"><input type="button" value="REPORTE FINAL" class="login_reportes"></a>
                    <br><br>
                    <input type="button" value="SALIR" class="login_reportes" onclick="Cerrar_Accesol_Reportes()">
                </div>
            </div>
        </div>

        <div class="modal-fondo" id="ventana_modal_nip">
            <div id="v_modal_nip">
                <img src="img/candado2.png" id="candado2">
                <div id="contenido_modal_nip">
                    <input type="text"
                           id="log_usu"
                           placeholder="Ingrese su Usuario:"
                           title="Ingresa el NIP de seguridad"
                           class="login_nip"
                           required>
                    <br><br>
                    <input type="password"
                           id="log_pass"
                           placeholder="Ingrese su NIP:"
                           onkeypress="return nip(event);"
                           title="Ingresa el NIP de seguridad"
                           maxlength="4"
                           class="login_nip"
                           required>
                </div>
                <br><br>

                <div id="contenido_modal_nip2">
                    <a href="javascript:LogNipCITA()"><input type="button" value="Nuevo Usuario" class="botones_login"></a>&nbsp;&nbsp;&nbsp;&nbsp;
                    <input type="button" id="logarUsuario" value="ENTRAR" class="botones_login">&nbsp;&nbsp;&nbsp;&nbsp;
                    <input type="button" value="CANCELAR" class="botones_login" onclick="cerrarCITA()">
                </div>
            </div>
        </div>

        <div id="fondo_nip">
            <div id="solo_nip">
                <input type="password" placeholder="Ingrese NIP autorizado" id="pass-nip" maxlength="10">
                <br><br>
                <a href="javascript:confirmarLoginNip()">
                    <input type="button" value="ENTRAR" class="boton_formcita">
                </a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <input type="button" value="CANCELAR" class="boton_formcita" onclick="cerrarNipCITA()">
            </div>
        </div>

        <div id="ventana_modal_cita">
            <div id="v_modal_cita">
                <form id="formulario_cita">
                    <h2>Formulario para el Personal de la
                        <br>Coordinación Institucional de Tutoría Académica</h2>
                    <input type="text" name="nombreCoord" id="nombreCoord" placeholder="Nombre(s):" class="cita_nombre">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <input type="text" name="apePat" id="apePat" placeholder="Apellido Paterno:" class="cita_apellidos">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <input type="text" name="apeMat" id="apeMat" placeholder="Apellido Materno:" class="cita_apellidos">
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
                    </select>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <input type="email" placeholder="E-mail:" name="cita_email" id="cita_email">
                    <br><br>

                    <input type="button" id="generarLogin" value="Generar Login" class="boton_formcita">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <input type="text" name="usuarioCoord" id="usuarioCoord" placeholder="Usuario:" class="cita_login" readonly>&nbsp;&nbsp;&nbsp;&nbsp;
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
    </body>
</html>