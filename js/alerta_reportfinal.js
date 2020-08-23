let reporte_final, periodof;

function limpiar() {
    $(".sem_grup").val("")
}

$(document).ready(function () {
    reporte_final = $("#")
    periodof = $('#periodo')
    reporte_final[0].reset();
    $(".sem_impar, .sem_par, .grupos").hide();

    reporte_final.on("click", function () {

        if (periodof.val().trim() === "Agosto - Diciembre"){
            $(".sem_impar").show()
            $(".grupos").show()
            $(".sem_par").hide()

        } else if (periodof.val().trim() === ""){
            $(".sem_impar, .sem_par, .grupos").hide();
            $(".sem_grup").val("")

        } else {
            $(".sem_impar").hide()
            $(".grupos").show()
            $(".sem_par").show()
        }
    })

    reporte_final.submit(function (e) {
        e.preventDefault()

        if (periodof.val().trim() === "") {
            Swal.fire({title: "Seleccione\nel periodo final a evaluar",
                icon: "warning",
                confirmButtonColor: '#000155',
                backdrop: "rgba(0,0,0,0)"});
            return false;

        } else if (!$("input[name='num_reporte']:radio").is(":checked")) {
            Swal.fire({title: "Seleccione\nel Número de Reporte",
                icon: "warning",
                confirmButtonColor: '#000155',
                backdrop: "rgba(0,0,0,0)"});
            return false;

        } else if ($('#nom_tutor').val().trim() === "") {
            Swal.fire({title: "Falta:\nNombre del Tutor",
                icon: "warning",
                confirmButtonColor: '#000155',
                backdrop: "rgba(0,0,0,0)"});
            return false;
        }

    })
})