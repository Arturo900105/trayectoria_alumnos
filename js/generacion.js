let otra_generacion, fechaHoy, yearActual, caracteryear, nuevocaracter;

$(document).ready(function (){
    fechaHoy = new Date(); //Fecha actual
    yearActual = fechaHoy.getFullYear(); //obteniendo año

    $("#generacion").val(yearActual)

    $("#btngeneracion").on('click', function () {

        $(function(){
            $("#otra_generacion").on("keydown",function(event){

                if ((event.keyCode < 48 || event.keyCode > 57) &&
                    (event.keyCode < 96 || event.keyCode > 105) &&
                     event.keyCode !==190 &&
                     event.keyCode !==110 &&
                     event.keyCode !==8 &&
                     event.keyCode !==9) {
                    return false;
                }
            })

            $('#otra_generacion').on('change keypress paste focus textInput input',function(){
                caracteryear = $(this).val()
                nuevocaracter = caracteryear.replace(/\D/g, "")
                if (nuevocaracter > yearActual) {
                    $(this).val(yearActual)
                } else {
                    $(this).val(nuevocaracter)
                }
            })
        })

        Swal.fire({
            backdrop: "rgba(0,0,0,0.0)",
            background: "#020b32",
            width: "30%",
            confirmButtonColor: '#19980b',
            showCancelButton: true,
            cancelButtonColor: '#910018',
            confirmButtonText: 'CAMBIAR',
            cancelButtonText: 'CANCELAR',
            input: 'text',
            allowOutsideClick: false,
            allowEscapeKey: false,
            inputAttributes: {
                id: "otra_generacion",
                minLength: 4,
                maxlength: 4,
                placeholder: "Ingrese aquí el año de su generación:",
                title: "Ingresa solo números",
                pattern: "[0-9]{4}",
            }, inputValidator: gener => {
                let years = new Date().getFullYear(); //obteniendo año

                if (gener > years) {
                    return "Ingresa un año actual ó antes del actual";
                } else if (gener < (years-6)){
                    return "Ingresa un año desde "+[years-6]+" hasta "+[years];
                }
            }
        }).then((resultado) => {
            if (resultado.value) {
                otra_generacion = resultado.value;
                $("#generacion").val(otra_generacion)

            } else {
                return false;

            }
        })

    })
})

