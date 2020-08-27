let correo, area, tutoria, usuario;
let alerta1, alerta2, alerta3;
let mensaje1, mensaje2, mensaje3, mensaje4, mensaje5;

function crearUsuario() {
    correo = document.getElementById("email").value;
    area = document.getElementById("area_de").value;
    tutoria = document.getElementById("tipo-tutoria").value;

    alerta1 = "Seleccione el tipo de Tutoría";
    alerta2 = "Seleccione una área";
    alerta3 = "Ingrese una dirección de E-mail";

    if (tutoria === ""){
        Swal.fire({
            title: alerta1,
            icon: "warning",
            showConfirmButton: false,
            backdrop: "rgba(85,0,0,0.7)",
            timer: 1000
        });
        return false;
    } else {
        switch (tutoria) {
            case 'Tutoría Grupal': tutoria = "1";
                break;
            case 'Tutoría Generacional': tutoria = "2";
                break;
            case 'Tutoría de Salida': tutoria = "3";
                break;
        }
    }

    if (area === ""){
        Swal.fire({
            title: alerta2,
            icon: "warning",
            showConfirmButton: false,
            backdrop: "rgba(85,0,0,0.7)",
            timer: 1000
        });
        return false;
    } else {
        switch (area) {
            case 'IGEM': area = "01";
                break;
            case 'IIND': area = "02";
                break;
            case 'ISIC': area = "03";
                break;
            case 'IBIO': area = "04";
                break;
            case 'IIAS': area = "05";
                break;
            case 'IENR': area = "06";
                break;
            case 'IFOR': area = "07";
                break;
            case 'IAGR': area = "08";
                break;
        }
    }

    if (correo === ""){
        Swal.fire({
            title: alerta3,
            icon: "warning",
            showConfirmButton: false,
            backdrop: "rgba(85,0,0,0.7)",
            timer: 1000
        });
        return false;
    }

    usuario = correo.split('@')[0] + "." + tutoria.substring(undefined) + area.substring(undefined);
    document.getElementById("usu-tutor").value = usuario;

    document.getElementById("pass-tutor").value = generarPassword(10,'alf');
    //console.log(usuario);
}


$(document).ready(function () {
    document.getElementById("formulario_tutor").reset();
    $('#formulario_tutor').submit(function (e) {
        e.preventDefault();

        area = document.getElementById("area_de").value;
        mensaje1 = "Por favor,\nGenere su Login";
        mensaje2 = "Por favor,\nIngrese su Nombre(s)";
        mensaje3 = "Por favor,\nIngrese su Apellido Paterno";
        mensaje4 = "Por favor,\nIngrese su Apellido Materno";
        mensaje5 = "Por favor, Ingrese sus\nNombre(s) y Apellidos";

        if ($('#usu-tutor').val().trim() === '' && $('#pass-tutor').val().trim() === '') {
            Swal.fire({
                title: mensaje1,
                icon: "warning",
                showConfirmButton: false,
                backdrop: "rgba(85,0,0,0.7)",
                timer: 1000
            });
            return false;
        }

        else if ($('#nombre_tutor').val().trim() === '' && $('#apepat_tutor').val().trim() === '' && $('#apemat_tutor').val().trim() === '') {
            Swal.fire({
                title: mensaje5,
                icon: "warning",
                showConfirmButton: false,
                backdrop: "rgba(255,103,0,0.5)",
                timer: 1500
            });
            return false;
        }

        else if ($('#nombre_tutor').val().trim() === '') {
            Swal.fire({
                title: mensaje2,
                icon: "warning",
                showConfirmButton: false,
                backdrop: "rgba(85,0,0,0.7)",
                timer: 1000
            });
            return false;
        }

        else if ($('#apepat_tutor').val().trim() === '') {
            Swal.fire({
                title: mensaje3,
                icon: "warning",
                showConfirmButton: false,
                backdrop: "rgba(85,0,0,0.7)",
                timer: 1000
            });
            return false;
        }

        else if ($('#apemat_tutor').val().trim() === '') {
            Swal.fire({
                title: mensaje4,
                icon: "warning",
                showConfirmButton: false,
                backdrop: "rgba(85,0,0,0.7)",
                timer: 1000
            });
            return false;
        }

        Swal.fire({
            title: "Registrar",
            text: "Después, dentro de la paltaforma podrá modificar sus datos",
            type: 'warning',
            icon: "question",
            showCancelButton: true,
            confirmButtonColor: '#19980b',
            cancelButtonColor: '#910018',
            confirmButtonText: 'GUARDAR',
            cancelButtonText: 'CANCELAR',
            backdrop: "rgba(7,44,0,0.7)"

        }).then((result) => {
            if (result.value) {
                $.ajax({
                    url: "php/guardar_tutor.php",
                    type: 'POST',
                    data: $("#formulario_tutor").serialize(),
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
                document.getElementById("formulario_tutor").reset();
                document.getElementById("area_de").value = area;
            }
        });

    });
});


function borrarNombre() {document.getElementById("nombre_tutor").value = "";}
function borrarApePat() {document.getElementById("apepat_tutor").value = "";}
function borrarApeMat() {document.getElementById("apemat_tutor").value = "";}


//document.getElementById("formulario_tutor").reset();