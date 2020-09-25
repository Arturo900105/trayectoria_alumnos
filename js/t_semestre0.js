let num_control, formCappt, calificacionExani, nuevaExani;
let calificacionCurso, nuevaCalifCurso;

$(document).ready(function (){
    num_control = $('#num_control')
    formCappt = $('#formulario_capt')
    formCappt[0].reset()

    $('.punt_examen, .result_curso').on('input', function () {
        this.value = this.value.replace(/[^0-9]/g,'');
    })

    num_control.on('keypress', function (e) {
        if (!/^[a-zA-Z0-9]*$/.test(e.target.value)) {
            e.preventDefault();
        }
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


    })

    $("#cerrarCAPPT").on("click", function (){
        parent.$("#v_modal_cappt").hide()
        formCappt[0].reset()
    })

})

