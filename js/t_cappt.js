let num_control, formCappt, calificacionExani, nuevaExani;
let calificacionCurso, nuevaCalifCurso;

$(document).ready(function (){
    num_control = $('#num_control')
    formCappt = $('#formulario_capt')
    formCappt[0].reset()

    $('.punt_examen, .result_curso').on('input', function () {
        this.value = this.value.replace(/[^0-9]/g,'');
    })

    num_control.on('input', function () {
        this.value = this.value.replace(/[^0-9ASas]/g,'');
    })
    num_control.on("click", function (){
        num_control.val("")
    })


    $(".punt_examen").on("change keypress paste focus textInput input",function() {
        calificacionExani = $(this).val()
        nuevaExani = calificacionExani.replace(/\D/g, "")
        if (nuevaExani > 1300) {
            $(this).val(nuevaExani[0]+nuevaExani[1]+nuevaExani[2])
        } else {
            $(this).val(nuevaExani.replace(/^0+/, ''))
        }
    })

    $("#exani").on("click",function () {
        $("#exani").val("")
    })
    $("#cosnet").on("click",function () {
        $("#cosnet").val("")
    })
    $("[name=res_curso1]").on("click",function () {
        $("[name=res_curso1]").val("")
    })
    $("[name=res_curso2]").on("click",function () {
        $("[name=res_curso2]").val("")
    })
    $("[name=res_curso3]").on("click",function () {
        $("[name=res_curso3]").val("")
    })

    $(".result_curso").on("change keypress paste focus textInput input",function() {
        calificacionCurso = $(this).val()
        nuevaCalifCurso = calificacionCurso.replace(/\D/g, "")
        if (nuevaCalifCurso > 100) {
            $(this).val(nuevaCalifCurso[0]+nuevaCalifCurso[1])
        } else {
            $(this).val(nuevaCalifCurso.replace(/^0+/, ''))
        }
    })

    formCappt.submit(function (e){
        e.preventDefault()

        if ($("#num_control").val().trim() === "") {
            Swal.fire({
                title: "Ingresa el Número de Control",
                icon: "warning",
                showConfirmButton: false,
                timer: 2000,
                backdrop: "rgba(0,0,0,0.4)"
            });
            return false;
        }

        if (!$("[name=trabaja]").is(":checked")) {
            Swal.fire({
                title: "¿Trabaja?",
                icon: "warning",
                showConfirmButton: false,
                timer: 2000,
                backdrop: "rgba(0,0,0,0.4)"
            });
            return false;
        }

        if ($("#opciones").val().trim() === "") {
            Swal.fire({
                title: "Consideraste al ITSP como...",
                icon: "warning",
                showConfirmButton: false,
                timer: 2000,
                backdrop: "rgba(0,0,0,0.4)"
            });
            return false;
        }

        if ($("#exani").val().trim() === "" && $("#cosnet").val().trim() === "") {
            Swal.fire({
                title: "Ingrese un puntaje ya sea en EXANI-II ó COSNET",
                icon: "warning",
                showConfirmButton: false,
                timer: 2000,
                backdrop: "rgba(0,0,0,0.4)"
            });
            return false;
        }

        if (!$("[name=hablante_purepecha]").is(":checked")) {
            Swal.fire({
                title: "Hablante de la lengua P'urépecha...",
                icon: "warning",
                showConfirmButton: false,
                timer: 2000,
                backdrop: "rgba(0,0,0,0.4)"
            });
            return false;
        }

        if ($("[name=diag_psico]").val().trim() === "") {
            Swal.fire({
                title: "Campo Vacío:\nDiagnóstico Psicológico",
                icon: "warning",
                showConfirmButton: false,
                timer: 2000,
                backdrop: "rgba(0,0,0,0.4)"
            });
            return false;
        }

        if ($("[name=diag_medico]").val().trim() === "") {
            Swal.fire({
                title: "Campo Vacío:\nDiagnóstico Médico",
                icon: "warning",
                showConfirmButton: false,
                timer: 2000,
                backdrop: "rgba(0,0,0,0.4)"
            });
            return false;
        }

        if ($("#riesgo_salud").val().trim() === "") {
            Swal.fire({
                title: "Tipos de riesgo a la salud...",
                icon: "warning",
                showConfirmButton: false,
                timer: 2000,
                backdrop: "rgba(0,0,0,0.4)"
            });
            return false;
        }

        if (!$(".aprendizaje").is(":checked")) {
            Swal.fire({
                title: "Estilos de Aprendizaje\nSin definir!!!",
                icon: "warning",
                showConfirmButton: false,
                timer: 2000,
                backdrop: "rgba(0,0,0,0.4)"
            });
            return false;
        }

        if ($("#habitosOE").val().trim() === "") {
            Swal.fire({
                title: "Organización sin calificar",
                icon: "warning",
                showConfirmButton: false,
                timer: 2000,
                backdrop: "rgba(0,0,0,0.4)"
            });
            return false;
        }

        if ($("#habitosTE").val().trim() === "") {
            Swal.fire({
                title: "Técnicas sin calificar",
                icon: "warning",
                showConfirmButton: false,
                timer: 2000,
                backdrop: "rgba(0,0,0,0.4)"
            });
            return false;
        }

        if ($("#habitosME").val().trim() === "") {
            Swal.fire({
                title: "Motivación sin calificar",
                icon: "warning",
                showConfirmButton: false,
                timer: 2000,
                backdrop: "rgba(0,0,0,0.4)"
            });
            return false;
        }

        if (!$(".bloque_ov").is(":checked")) {
            Swal.fire({
                title: "Orientación Vocacional\nSin definir!!!",
                icon: "warning",
                showConfirmButton: false,
                timer: 2000,
                backdrop: "rgba(0,0,0,0.4)"
            });
            return false;
        }

        if ($("#eval_ort").val().trim() === "") {
            Swal.fire({
                title: "Ortografía sin evaluar",
                icon: "warning",
                showConfirmButton: false,
                timer: 2000,
                backdrop: "rgba(0,0,0,0.4)"
            });
            return false;
        }

        if ($("#eval_reda").val().trim() === "") {
            Swal.fire({
                title: "Redacción sin evaluar",
                icon: "warning",
                showConfirmButton: false,
                timer: 2000,
                backdrop: "rgba(0,0,0,0.4)"
            });
            return false;
        }

        if ($("[name=nom_curso1]").val().trim() === "") {
            Swal.fire({
                title: "Defina nombre del curso 1",
                icon: "warning",
                showConfirmButton: false,
                timer: 2000,
                backdrop: "rgba(0,0,0,0.4)"
            });
            return false;
        }

        if ($("[name=res_curso1]").val().trim() === "") {
            Swal.fire({
                title: "Ingrese calificación del curso 1",
                icon: "warning",
                showConfirmButton: false,
                timer: 2000,
                backdrop: "rgba(0,0,0,0.4)"
            });
            return false;
        }

        if ($("[name=nom_curso2]").val().trim() === "") {
            Swal.fire({
                title: "Defina nombre del curso 2",
                icon: "warning",
                showConfirmButton: false,
                timer: 2000,
                backdrop: "rgba(0,0,0,0.4)"
            });
            return false;
        }

        if ($("[name=res_curso2]").val().trim() === "") {
            Swal.fire({
                title: "Ingrese calificación del curso 2",
                icon: "warning",
                showConfirmButton: false,
                timer: 2000,
                backdrop: "rgba(0,0,0,0.4)"
            });
            return false;
        }

        if ($("[name=nom_curso3]").val().trim() === "") {
            Swal.fire({
                title: "Defina nombre del curso 3",
                icon: "warning",
                showConfirmButton: false,
                timer: 2000,
                backdrop: "rgba(0,0,0,0.4)"
            });
            return false;
        }

        if ($("[name=res_curso3]").val().trim() === "") {
            Swal.fire({
                title: "Ingrese calificación del curso 3",
                icon: "warning",
                showConfirmButton: false,
                timer: 2000,
                backdrop: "rgba(0,0,0,0.4)"
            });
            return false;
        }

        Swal.fire({
            title: "¿Guardar caracterización por parte del tutor?",
            text: "Después, ya no podrá hacer cambios",
            width:"50%",
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
                    url: "php/form_tcappt.php",
                    type: 'POST',
                    data: formCappt.serialize(),
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
                formCappt[0].reset()
                parent.$("#v_modal_cappt").hide()
            }
        })
    })

    $("#cerrarCAPPT").on("click", function (){
        parent.$("#v_modal_cappt").hide()
        formCappt[0].reset()
    })

})

