let reporte_parcial, periodo;

function limpiar() {
    $(".sem_grup").val("")
}

$(document).ready(function () {
    reporte_parcial = $("#ReporteParcial")
    periodo = $('#periodo')
    reporte_parcial[0].reset();
    $(".sem_impar, .sem_par, .grupos").hide();

    reporte_parcial.on("click", function () {

        if (periodo.val().trim() === "Agosto - Diciembre"){
            $(".sem_impar").show()
            $(".grupos").show()
            $(".sem_par").hide()

        } else if (periodo.val().trim() === ""){
            $(".sem_impar, .sem_par, .grupos").hide();
            $(".sem_grup").val("")

        } else {
            $(".sem_impar").hide()
            $(".grupos").show()
            $(".sem_par").show()
        }
    })

    reporte_parcial.submit(function (e) {
        e.preventDefault()

        if (periodo.val().trim() === "") {
            Swal.fire({title: "Seleccione\nel periodo a evaluar",
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