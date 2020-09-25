let otra_generacion, fechaHoy, yearActual;

$(document).ready(function (){
    fechaHoy = new Date(); //Fecha actual
    yearActual = fechaHoy.getFullYear(); //obteniendo año

    $("#generacion").val(yearActual)

    $("#btngeneracion").on('click', function () {

        Swal.fire({
            backdrop: "rgba(0,0,0,0.0)",
            background: "#020b32",
            width: "30%",
            confirmButtonColor: '#19980b',
            confirmButtonText: 'CAMBIAR',
            showCancelButton: true,
            cancelButtonColor: '#910018',
            cancelButtonText: 'CANCELAR',
            input: 'text',
            allowOutsideClick: false,
            allowEscapeKey: false,
            inputAttributes: {
                minLength: 4,
                maxlength: 4,
                placeholder: "Ingrese aquí el año de su generación:",
                title: "Ingresa solo números",
                pattern: "[0-9]{4}",
            }, inputValidator: gener => {
                let years = new Date().getFullYear(); //obteniendo año

                if (gener > years) {
                    return "Ingresa un año actual ó antes del actual";
                } else if (!/^[0-9]+$/.test(gener)){
                    return "Caracteres no Válidos";
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

