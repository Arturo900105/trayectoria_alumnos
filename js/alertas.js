let passCITA, nombreCoord, apePat, apeMat, separador, coordTutoria, usuarioCoord, usuMUlt, patCoord, matCoord;
let alertaCITA1, alertaCITA2, alertaCITA3, alertaCITA4, alertaCITA5;
let alertaCITA6, alertaCITA7, alertaCITA8, alertaCITA9, alertaCITA10;
let alertaCITA11, alertaCITA12;

function Confirmar_Acceso() {
    document.getElementById('ventana_modal').style.display="block";
}
function Cerrar_Accesol() {
    document.getElementById('ventana_modal').style.display="none";
}


function Confirmar_Accesol_Reportes() {
    document.getElementById('ventana_modal_reportes').style.display="block";
}
function Cerrar_Accesol_Reportes() {
    document.getElementById('ventana_modal_reportes').style.display="none";
}


function Confirmar_M_Acceso() {
    document.getElementById('modal-acceso').style.display="block";
}
function Cerrar_M_Acceso() {
    document.getElementById('modal-acceso').style.display="none";
}



function accesoCITA() {
    document.getElementById('ventana_modal_nip').style.display="block";
}
function cerrarCITA() {
    document.getElementById('ventana_modal_nip').style.display="none";
    document.getElementById("log_usu").value = "";
    document.getElementById("log_pass").value = "";
}



function LogNipCITA() {
    document.getElementById('fondo_nip').style.display="block";
    return cerrarCITA();
}
function cerrarNipCITA() {
    document.getElementById('fondo_nip').style.display="none";
    document.getElementById("pass-nip").value = "";
}


function confirmarLoginNip() {
    passCITA = document.getElementById("pass-nip").value;

    if (passCITA === "CITA20ITSP" || passCITA === "cita20itsp"){
        document.getElementById('ventana_modal_cita').style.display="block";
        return cerrarNipCITA();
    } else  if (passCITA === ""){
        Swal.fire({
            title: "Porfavor,\nIntrodusca la Clave de Seguridad",
            position: 'top',
            showConfirmButton: false,
            timer: 700,
            icon: "warning",
            backdrop: "rgba(0,0,0,0)"
        });

    } else {
        Swal.fire({
            title: "Clave Incorrecta!!!",
            position: 'top',
            showConfirmButton: false,
            timer: 700,
            icon: "warning",
            backdrop: "rgba(0,0,0,0)"
        });
    }
}
function cerrarLoginNip() {
    document.getElementById('ventana_modal_cita').style.display="none";
}


$(document).ready(function () {
    try {
        document.getElementById("formulario_cita").reset();
        document.getElementById("form").reset();
        document.getElementById("pass-nip").value = "";
    } catch (e) {}

    $(document).on("keydown", function (e) {
        if(e.which === 27){
            return cerrarNipCITA(),cerrarCITA(),cerrarLoginNip();
        }
    })

    $("#pass-nip").on("keypress", function (e) {
        if(e.which === 13){
            return confirmarLoginNip();
        }
    })

    alertaCITA1 = "Por favor,\nIngrese su Nombre";
    alertaCITA2 = "Por favor,\nIngrese sus Apellidos";
    alertaCITA3 = "Por favor,\nIngrese su Apellido Paterno";
    alertaCITA4 = "Por favor,\nIngrese su Apellido Materno";
    alertaCITA5 = "Por favor,\nSeleccione el Área de Coordinación";
    alertaCITA6 = "Por favor,\nIngrese su E-mail";
    alertaCITA7 = "Por favor,\nGenere su Login";
    alertaCITA8 = "Por favor,\nIngrese los datos requeridos";
    alertaCITA9 = "Por favor,\nIngrese su Usuario y NIP";
    alertaCITA10 = "Por favor,\nIngrese su Usuario";
    alertaCITA11 = "Por favor,\nIngrese su NIP";
    alertaCITA12 = "LOGIN INCORRECTO!!!";

    $('#logarUsuario').on('click', function () {

        if ($('#log_usu').val().trim() === "" && $('#log_pass').val().trim() === ""){
            Swal.fire({
                title: alertaCITA9,
                icon: "warning",
                position: "top",
                backdrop: "rgba(0,0,0,0)",
                showConfirmButton: false,
                timer: 2000
            });
            return false;
        } else if ($('#log_usu').val().trim() === ""){
            Swal.fire({
                title: alertaCITA10,
                icon: "warning",
                position: "top",
                backdrop: "rgba(0,0,0,0)",
                showConfirmButton: false,
                timer: 1500
            });
            return false;
        } else if ($('#log_pass').val().trim() === ""){
            Swal.fire({
                title: alertaCITA11,
                icon: "warning",
                position: "top",
                backdrop: "rgba(0,0,0,0)",
                showConfirmButton: false,
                timer: 1500
            });
            return false;
        }
    })

    $('#generarLogin').on('click', function () {

        if ($('#nombreCoord,#apePat,#apeMat,#cita_tutoria').val().trim() === ""){
            Swal.fire({
                title: alertaCITA8,
                icon: "warning",
                position: "top",
                backdrop: "rgba(0,0,0,0)",
                showConfirmButton: false,
                timer: 1000
            });
            return false;
        } else if ($('#nombreCoord').val().trim() === ""){
            Swal.fire({
                title: alertaCITA8,
                icon: "warning",
                position: "top",
                backdrop: "rgba(0,0,0,0)",
                showConfirmButton: false,
                timer: 1000
            });
            return false;
        } else if ($('#apePat').val().trim() === ""){
            Swal.fire({
                title: alertaCITA8,
                icon: "warning",
                position: "top",
                backdrop: "rgba(0,0,0,0)",
                showConfirmButton: false,
                timer: 1000
            });
            return false;
        } else if ($('#apeMat').val().trim() === ""){
            Swal.fire({
                title: alertaCITA8,
                icon: "warning",
                position: "top",
                backdrop: "rgba(0,0,0,0)",
                showConfirmButton: false,
                timer: 1000
            });
            return false;
        } else if ($('#cita_tutoria').val().trim() === ""){
            Swal.fire({
                title: alertaCITA8,
                icon: "warning",
                position: "top",
                backdrop: "rgba(0,0,0,0)",
                showConfirmButton: false,
                timer: 1000
            });
            return false;
        } else {
            separador = / de la | de los | de | del | /;
            nombreCoord = document.getElementById("nombreCoord").value;

            //Más de un Nombre
            if (nombreCoord.split(separador).length === 2){
                usuMUlt = nombreCoord.toLowerCase().substring(0,1) +
                    nombreCoord.toLowerCase().split(separador)[1].substring(0,1);
            } else if (nombreCoord.split(separador).length === 3){
                usuMUlt = nombreCoord.toLowerCase().substring(0,1) +
                    nombreCoord.toLowerCase().split(separador)[1].substring(0,1) +
                    nombreCoord.toLowerCase().split(separador)[2].substring(0,1);
            } else {
                usuMUlt = nombreCoord.toLowerCase().substr(0,1);
            }

            apePat = document.getElementById("apePat").value;
            apeMat = document.getElementById("apeMat").value;


            //Apellidos compuestos por 2 o 3 palabras
            if (apePat.split(" ").length > 1){
                patCoord = apePat.split(" ")[apePat.split(" ").length - 1].toLowerCase();
            } else {
                patCoord = apePat.toLowerCase().substring(undefined);
            }

            if (apeMat.split(" ").length > 1){
                matCoord = apeMat.split(" ")[apeMat.split(" ").length - 1].toLowerCase().substring(0,1);
            } else {
                matCoord = apeMat.toLowerCase().substring(0,1);
            }

            coordTutoria = document.getElementById("cita_tutoria").value;
            switch (coordTutoria) {
                case 'IGEM': coordTutoria = "01";
                    break;
                case 'IIND': coordTutoria = "02";
                    break;
                case 'ISIC': coordTutoria = "03";
                    break;
                case 'IBIO': coordTutoria = "04";
                    break;
                case 'IIAS': coordTutoria = "05";
                    break;
                case 'IENR': coordTutoria = "06";
                    break;
            }

            const eliminaAcentos = (str) =>{return str.normalize("NFD").replace(/[\u0300-\u036f]/g,"");}
            usuarioCoord = eliminaAcentos(usuMUlt + "." + patCoord + matCoord + "_" + coordTutoria.substring(undefined));
            document.getElementById("usuarioCoord").value = usuarioCoord;
            document.getElementById("passCoord").value = generarPassword(4,'num');
        }
    })

    $("#formulario_cita").submit(function (e) {
        e.preventDefault();

        if ($('#nombreCoord').val().trim() === "") {
            Swal.fire({
                title: alertaCITA1,
                icon: "warning",
                position: "top",
                backdrop: "rgba(0,0,0,0)",
                showConfirmButton: false,
                timer: 1000
            });
            return false;
        }

        if ($('#apePat').val().trim() === "" && $('#apeMat').val().trim() === "") {
            Swal.fire({
                title: alertaCITA2,
                icon: "warning",
                position: "top",
                backdrop: "rgba(0,0,0,0)",
                showConfirmButton: false,
                timer: 1000
            });
            return false;
        }

        if ($('#apePat').val().trim() === "") {
            Swal.fire({
                title: alertaCITA3,
                icon: "warning",
                position: "top",
                backdrop: "rgba(0,0,0,0)",
                showConfirmButton: false,
                timer: 1000
            });
            return false;
        }

        if ($('#apeMat').val().trim() === "") {
            Swal.fire({
                title: alertaCITA4,
                icon: "warning",
                position: "top",
                backdrop: "rgba(0,0,0,0)",
                showConfirmButton: false,
                timer: 1000
            });
            return false;
        }

        if ($('#cita_tutoria').val().trim() === "") {
            Swal.fire({
                title: alertaCITA5,
                icon: "warning",
                position: "top",
                backdrop: "rgba(0,0,0,0)",
                showConfirmButton: false,
                timer: 1000
            });
            return false;
        }

        if ($('#cita_email').val().trim() === "") {
            Swal.fire({
                title: alertaCITA6,
                icon: "warning",
                position: "top",
                backdrop: "rgba(0,0,0,0)",
                showConfirmButton: false,
                timer: 1000
            });
            return false;
        }

        if ($('#usuarioCoord').val().trim() === "" && $('#passCoord').val().trim() === "") {
            Swal.fire({
                title: alertaCITA7,
                icon: "warning",
                position: "top",
                backdrop: "rgba(0,0,0,0)",
                showConfirmButton: false,
                timer: 1000
            });
            return false;
        }

        Swal.fire({
            title: "REGISTRARSE!!!",
            text: "Después, dentro de la paltaforma podrá modificar sus datos",
            type: 'warning',
            icon: "question",
            showCancelButton: true,
            confirmButtonColor: '#19980b',
            cancelButtonColor: '#910018',
            confirmButtonText: 'GUARDAR',
            cancelButtonText: 'CANCELAR',
            backdrop: "rgba(0,0,0,0)"

        }).then((result) => {
            if (result.value) {
                $.ajax({
                    url: "php/guardar_coordinador.php",
                    type: 'POST',
                    data: $("#formulario_cita").serialize(),
                    success: function (respuesta) {
                        swal.fire({
                            position: 'center',
                            icon: 'success',
                            title: (respuesta),
                            showConfirmButton: false,
                            timer: 1500
                        })
                    },
                    error: function (error) {
                        swal.fire({
                            position: 'center',
                            icon: 'error',
                            title: (error.responseText),
                            showConfirmButton: false,
                            timer: 1500
                        })
                    }
                });
                document.getElementById("formulario_cita").reset();
                document.getElementById("pass-nip").value = "";
                return cerrarLoginNip();
            }
        });

    })
})
