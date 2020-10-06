let correo, area, tutoria, usuario, formularioTutor, usuTutor, passTutor;
let alerta1, alerta2, alerta3, paginaTutor = '';
let mensaje1, mensaje2, mensaje3, mensaje4, mensaje5;


function crearUsuario() {
    correo = $("#email").val()
    area = $("#area_de").val()
    tutoria = $("#tipo-tutoria").val()

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

    $("#usu-tutor").val(usuario)
    $("#pass-tutor").val(generarPassword(10,'alf'))
}


$(document).ready(function () {
    formularioTutor = $('#formulario_tutor')
    formularioTutor[0].reset()
    $("#contenidoTutor")[0].reset()

    $("#nombre_tutor").on("click", function (){
        $("#nombre_tutor").val("")
    })
    $("#apepat_tutor").on("click", function (){
        $("#apepat_tutor").val("")
    })
    $("#apemat_tutor").on("click", function (){
        $("#apemat_tutor").val("")
    })

    formularioTutor.submit(function (e) {
        e.preventDefault();

        area = $("#area_de").val()
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

        if (!$("[name=sexoTut]:radio").is(":checked")) {
            Swal.fire({
                title: "Seleccione su sexo",
                icon: "warning",
                showConfirmButton: false,
                backdrop: "rgba(85,0,0,0.7)",
                timer: 1000
            });
            return false;
        }

        Swal.fire({
            title: "¿REGISTRARSE?",
            text: "Después, ya no podrá modificar sus datos hasta que acuda al área de Tutoria Académica",
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
                })
                formularioTutor[0].reset()
                $("#area_de").val(area)
            }
        })
    })

    $("#logiarTutor").on("click", function (e){
        e.preventDefault();
        usuTutor = $("[name = usuario]")
        passTutor = $("[name = pass]")

        if (usuTutor.val().trim() === "" && passTutor.val().trim() === "") {
            Swal.fire({
                title: "Ingrese su\nUsuario y Contraseña",
                position: "top",
                icon: "warning",
                showConfirmButton: false,
                backdrop: "rgba(0,0,0,0)",
                timer: 1000
            });
            return false;
        } else if (usuTutor.val().trim() === "") {
            Swal.fire({
                title: "Ingrese su Usuario",
                position: "top",
                icon: "warning",
                showConfirmButton: false,
                backdrop: "rgba(0,0,0,0)",
                timer: 1000
            });
            return false;
        } else if (passTutor.val().trim() === "") {
            Swal.fire({
                title: "Ingrese su Contraseña",
                position: "top",
                icon: "warning",
                showConfirmButton: false,
                backdrop: "rgba(0,0,0,0)",
                timer: 1000
            });
            return false;
        } else {
            $.ajax({
                url: "php/login-tutor.php",
                type: 'POST',
                data: $("#contenidoTutor").serialize(),
                success: function (resulT) {
                    let CookiesT = Cookies.noConflict();
                    CookiesT.set('UsuTut', resulT);
                    //console.log(paginaTutor);
                    location.href = paginaTutor;
                },
                error: function (error) {
                    swal.fire({
                        position: 'top',
                        icon: 'question',
                        title: (error.responseText),
                        showConfirmButton: false,
                        timer: 1500
                    })
                }
            })
        }

    })

    $("#cerrarLoginT").on("click", function (e){
        e.preventDefault();
        $("#modal-acceso").css({display:"none"})
        $("#contenidoTutor")[0].reset()
    })


})


function accesoTutor(paginaT) {
    $("#modal-acceso").css({display:"block"})
    paginaTutor = paginaT;
}