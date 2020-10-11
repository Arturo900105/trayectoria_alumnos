let form_titulacion;

$(document).ready(function (){
    form_titulacion = $("#proceso_titulacion")
    form_titulacion[0].reset()


    $('#creditos_cumplidos').on('input', function () {
        this.value = this.value.replace(/[^0-9]/g,'');
    })

    form_titulacion.submit(function (e){
        e.preventDefault()

        if ($("#tema").val().trim() === "") {
            Swal.fire({
                title: "Ingrese el tema del proyecto",
                icon: "warning",
                showConfirmButton: false,
                timer: 2000,
                backdrop: "rgba(0,0,0,0)"
            });
            return false;
        } else if (!$("[name=ingles_acreditado]").is(":checked")) {
            Swal.fire({
                title: "Inglés acreditado\nsin contestar",
                icon: "warning",
                showConfirmButton: false,
                timer: 2000,
                backdrop: "rgba(0,0,0,0)"
            });
            return false;
        } else if ($("#creditos_cumplidos").val().trim() === "") {
            Swal.fire({
                title: "Ingrese los créditos cumplidos",
                icon: "warning",
                showConfirmButton: false,
                timer: 2000,
                backdrop: "rgba(0,0,0,0)"
            });
            return false;
        } else if ($("#fecha_examen").val().trim() === "") {
            Swal.fire({
                title: "Seleccione la fecha de\nExamen Protocolario",
                icon: "warning",
                showConfirmButton: false,
                timer: 2000,
                backdrop: "rgba(0,0,0,0)"
            });
            return false;
        } else {
            Swal.fire({
                title: "¿Guardar Trayectoria de Titulación?",
                text: "Después, ya no podrá hacer cambios",
                width:"35%",
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
                        url: "php/form_ttitulacion.php",
                        type: 'POST',
                        data: form_titulacion.serialize(),
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
                    form_titulacion[0].reset()
                    parent.$("#v_modal_titulacion").hide()
                }
            })
        }
    })


    $("#cerrarTitulacion").on("click", function (){
        parent.$("#v_modal_titulacion").hide()
        form_titulacion[0].reset()
    })


})