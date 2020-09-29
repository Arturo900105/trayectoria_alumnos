let passCITA, nombreCoord, apePat, apeMat, separador, coordTutoria, usuarioCoord, usuMUlt, patCoord, matCoord;
let alertaCITA1, alertaCITA2, alertaCITA3, alertaCITA4, alertaCITA5;
let alertaCITA6, alertaCITA7, alertaCITA8, separador1, separador2;

function Confirmar_Acceso_Reportes() {
    $("#ventana_modal_reportes").css({display:"block"})
}


function LogNipCITA() {
    $("#fondo_nip").css({display:"block"})
    $("#ventana_modal_nip").css({display:"none"})
}
function cerrarNipCITA() {
    $("#fondo_nip").css({display:"none"})
    $("#pass-nip").val("")
}


function confirmarLoginNip() {
    passCITA = $("#pass-nip").val()

    if (passCITA === "CITA20ITSP" || passCITA === "cita20itsp"){
        $("#ventana_modal_cita").css({display:"block"})
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
    $("#ventana_modal_cita").css({display:"none"})
}


$(document).ready(function () {
    try {
        $("#formulario_cita")[0].reset()
        $("#form")[0].reset()
        $("#pass-nip").val("")
    } catch (e) {}

    $(document).on("keydown", function (e) {
        if(e.which === 27){
            return cerrarNipCITA(),cerrarLoginNip();
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

    //Ventana modal para acceder a los Reportes: Parcial y Final
    $("#reporteParcial").on("click",function (){
        $("#ventana_modal_reportes").css({display:"none"})
    })
    $("#reporteFinal").on("click",function (){
        $("#ventana_modal_reportes").css({display:"none"})
    })
    $("#reporteSalir").on("click", function (){
        $("#ventana_modal_reportes").css({display:"none"})
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
            //Más de un Nombre
            nombreCoord = $("#nombreCoord").val()
            separador = / de la | de los | de | del | /

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


            //Apellidos Paterno compuestos por 2 o 3 palabras
            apePat = $("#apePat").val()
            apeMat = $("#apeMat").val()

            separador1 = / de |-| de la | de los | del | y /
            separador2 = /de la |de los |de |y |del |De la |De los |De |Y |Del /

            if (apePat.split(separador1).length > 1){
                patCoord = apePat.split(separador1)[0].toLowerCase().substring(0,1)+
                           apePat.split(separador1)[1].toLowerCase().substring(undefined);

            } else if (apePat.split(separador2).length > 1){
                patCoord = apePat.split(separador2)[apePat.split(separador2).length - 1].toLowerCase();

            } else {
                patCoord = apePat.toLowerCase().substring(undefined);

            }

            //Apellidos Materno compuestos por 2 o 3 palabras
            if (apeMat.split(separador1).length > 1){
                matCoord = apeMat.split(separador1)[0].toLowerCase().substring(0,1)+
                           apeMat.split(separador1)[1].toLowerCase().substring(0,1);

            } else if (apeMat.split(separador2).length > 1){
                matCoord = apeMat.split(separador2)[apeMat.split(separador2).length - 1].toLowerCase().substring(0,1);

            } else {
                matCoord = apeMat.toLowerCase().substring(0,1);

            }

            //Valor de la Coordinación de Tutoría
            coordTutoria = $("#cita_tutoria").val()
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
                case 'IFOR': coordTutoria = "07";
                    break;
                case 'IAGR': coordTutoria = "08";
                    break;
            }

            //Eliminación de acentos
            const eliminaAcentos = (str) =>{
                return str.normalize("NFD").replace(/[\u0300-\u036f]/g,"")
            }

            //Concatenando el Usuario del Coordinador y generando Nip de 4 números
            usuarioCoord = eliminaAcentos(usuMUlt + "." + patCoord + matCoord + "_" + coordTutoria.substring(undefined))
            $("#usuarioCoord").val(usuarioCoord)
            $("#passCoord").val(generarPassword(4,'num'))
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
                $("#formulario_cita")[0].reset()
                $("#pass-nip").val("")
                return cerrarLoginNip();
            }
        });

    })
})
