let form_posttest, valor, nuevoValor;

$(document).ready(function () {
    form_posttest = $("#posttest_alumnos")
    form_posttest[0].reset()

    $('.escala_posttest').on('change keypress paste focus textInput input',function(){
        valor = $(this).val();
        nuevoValor = valor.replace(/\D/g, '');
        if (nuevoValor > 3){
            $(this).val(3);
        } else {
            $(this).val(nuevoValor);
        }
    })

    $("[name=posttes_A1]").on("click", function () {
        $("[name=posttes_A1]").val("")
    })
    $("[name=posttes_A2]").on("click", function () {
        $("[name=posttes_A2]").val("")
    })
    $("[name=posttes_A3]").on("click", function () {
        $("[name=posttes_A3]").val("")
    })
    $("[name=posttes_A4]").on("click", function () {
        $("[name=posttes_A4]").val("")
    })
    $("[name=posttes_A5]").on("click", function () {
        $("[name=posttes_A5]").val("")
    })
    $("[name=posttes_A6]").on("click", function () {
        $("[name=posttes_A6]").val("")
    })
    $("[name=posttes_A7]").on("click", function () {
        $("[name=posttes_A7]").val("")
    })


    $("[name=posttes_D1]").on("click", function () {
        $("[name=posttes_D1]").val("")
    })
    $("[name=posttes_D2]").on("click", function () {
        $("[name=posttes_D2]").val("")
    })
    $("[name=posttes_D3]").on("click", function () {
        $("[name=posttes_D3]").val("")
    })
    $("[name=posttes_D4]").on("click", function () {
        $("[name=posttes_D4]").val("")
    })
    $("[name=posttes_D5]").on("click", function () {
        $("[name=posttes_D5]").val("")
    })
    $("[name=posttes_D6]").on("click", function () {
        $("[name=posttes_D6]").val("")
    })
    $("[name=posttes_D7]").on("click", function () {
        $("[name=posttes_D7]").val("")
    })

    form_posttest.submit(function (e){
        e.preventDefault()

        if ($("#sem_posttest").val().trim() === "") {
            Swal.fire({
                title: "¿En qué semestre te encuentras?",
                icon: "warning",
                showConfirmButton: false,
                timer: 1500,
                backdrop: "rgba(0,0,0,0.4)"
            });
            return false;
        } else if ($("[name=posttes_A1]").val().trim() === "") {
            Swal.fire({
                title: "Campo A1 vacío",
                icon: "warning",
                showConfirmButton: false,
                timer: 1500,
                backdrop: "rgba(0,0,0,0.4)"
            });
            return false;
        } else if ($("[name=posttes_D1]").val().trim() === "") {
            Swal.fire({
                title: "Campo D1 vacío",
                icon: "warning",
                showConfirmButton: false,
                timer: 1500,
                backdrop: "rgba(0,0,0,0.4)"
            });
            return false;
        } else if ($("[name=posttes_A2]").val().trim() === "") {
            Swal.fire({
                title: "Campo A2 vacío",
                icon: "warning",
                showConfirmButton: false,
                timer: 1500,
                backdrop: "rgba(0,0,0,0.4)"
            });
            return false;
        } else if ($("[name=posttes_D2]").val().trim() === "") {
            Swal.fire({
                title: "Campo D2 vacío",
                icon: "warning",
                showConfirmButton: false,
                timer: 1500,
                backdrop: "rgba(0,0,0,0.4)"
            });
            return false;
        } else if ($("[name=posttes_A3]").val().trim() === "") {
            Swal.fire({
                title: "Campo A3 vacío",
                icon: "warning",
                showConfirmButton: false,
                timer: 1500,
                backdrop: "rgba(0,0,0,0.4)"
            });
            return false;
        } else if ($("[name=posttes_D3]").val().trim() === "") {
            Swal.fire({
                title: "Campo D3 vacío",
                icon: "warning",
                showConfirmButton: false,
                timer: 1500,
                backdrop: "rgba(0,0,0,0.4)"
            });
            return false;
        } else if ($("[name=posttes_A4]").val().trim() === "") {
            Swal.fire({
                title: "Campo A4 vacío",
                icon: "warning",
                showConfirmButton: false,
                timer: 1500,
                backdrop: "rgba(0,0,0,0.4)"
            });
            return false;
        } else if ($("[name=posttes_D4]").val().trim() === "") {
            Swal.fire({
                title: "Campo D4 vacío",
                icon: "warning",
                showConfirmButton: false,
                timer: 1500,
                backdrop: "rgba(0,0,0,0.4)"
            });
            return false;
        } else if ($("[name=posttes_A5]").val().trim() === "") {
            Swal.fire({
                title: "Campo A5 vacío",
                icon: "warning",
                showConfirmButton: false,
                timer: 1500,
                backdrop: "rgba(0,0,0,0.4)"
            });
            return false;
        } else if ($("[name=posttes_D5]").val().trim() === "") {
            Swal.fire({
                title: "Campo D5 vacío",
                icon: "warning",
                showConfirmButton: false,
                timer: 1500,
                backdrop: "rgba(0,0,0,0.4)"
            });
            return false;
        } else if ($("[name=posttes_A6]").val().trim() === "") {
            Swal.fire({
                title: "Campo A6 vacío",
                icon: "warning",
                showConfirmButton: false,
                timer: 1500,
                backdrop: "rgba(0,0,0,0.4)"
            });
            return false;
        } else if ($("[name=posttes_D6]").val().trim() === "") {
            Swal.fire({
                title: "Campo D6 vacío",
                icon: "warning",
                showConfirmButton: false,
                timer: 1500,
                backdrop: "rgba(0,0,0,0.4)"
            });
            return false;
        } else if ($("[name=posttes_A7]").val().trim() === "") {
            Swal.fire({
                title: "Campo A7 vacío",
                icon: "warning",
                showConfirmButton: false,
                timer: 1500,
                backdrop: "rgba(0,0,0,0.4)"
            });
            return false;
        } else if ($("[name=posttes_D7]").val().trim() === "") {
            Swal.fire({
                title: "Campo D7 vacío",
                icon: "warning",
                showConfirmButton: false,
                timer: 1500,
                backdrop: "rgba(0,0,0,0.4)"
            });
            return false;
        } else {
            Swal.fire({
                title: "¿Guardar Escala Post-Test?",
                text: "Después, ya no podrá hacer modificaciones",
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
                        url: "php/datos_posttest.php",
                        type: 'POST',
                        data: form_posttest.serialize(),
                        success: function (respuesta) {
                            swal.fire({
                                position: 'center',
                                icon: 'success',
                                title: (respuesta),
                                showConfirmButton: false,
                                timer: 1500
                            }).then(
                                setTimeout("location.href ='php/terminar_posttest.php'",2000)
                            )
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
                    form_posttest[0].reset()
                    CookiesPostTest.remove('POST-TEST')
                    CookiesPostTest.remove('Usu-PostTest')
                }
            })
        }
    })
})