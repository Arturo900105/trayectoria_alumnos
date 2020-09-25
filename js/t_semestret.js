let form_titulacion;

$(document).ready(function (){
    form_titulacion = $("#proceso_titulacion")


    $('#creditos_cumplidos').on('input', function () {
        this.value = this.value.replace(/[^0-9]/g,'');
    })

    $("#cerrarTitulacion").on("click", function (){
        parent.$("#v_modal_titulacion").hide()
        form_titulacion[0].reset()
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
        }

    })

})