window.onload = function(){

    let fecha = new Date(); //Fecha actual
    let year = fecha.getFullYear(); //obteniendo año

    document.getElementById('generacion').value = year;
};

$(document).ready(function (){
    $("#btngeneracion").on('click', function () {
        //$('#generacion').val('')

        Swal.fire({
            backdrop: "rgba(85,0,0,0.7)",
            width: "30%",
            confirmButtonColor: '#19980b',
            confirmButtonText: 'CAMBIAR',
            showCancelButton: true,
            cancelButtonColor: '#910018',
            cancelButtonText: 'CANCELAR',
            input: 'text',
            inputAttributes: {
                minLength: 4,
                maxlength: 4,
                placeholder: "Ingrese aquí el año de su generación:",
                pattern: "[0-9]{4}"
            },
            inputValidator: (year) => {
                if (!year) {
                    return "Por favor llena el campo obligatorio";
                } else {
                    return undefined;
                }
            }
        })

    })
})

