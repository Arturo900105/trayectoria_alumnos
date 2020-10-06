let consulta_ficha;

$(document).ready(function(){
    //hacemos focus
    //$("#no_ficha").focus();

    //comprobamos si se pulsa una tecla
    $("#comprobar").on("click",function(e){
        //obtenemos el texto introducido en el campo
        consulta_ficha = $("#no_ficha").val();

        if (consulta_ficha === ""){
            Swal.fire({
                title: "Inresa una ficha",
                icon: "warning",
                showConfirmButton: false,
                backdrop: "rgba(0,0,0,0.0)",
                timer: 1500
            });
            return false;
        } else if (consulta_ficha === yearcpe+"-"+'0000') {
            Swal.fire({
                title: "Ficha no válida",
                icon: "warning",
                showConfirmButton: false,
                backdrop: "rgba(0,0,0,0.0)",
                timer: 1500
            });
            consulta_ficha.val("")
            return false;
        } else {
            $.ajax({
                type: "POST",
                url: "php/comprobar_ficha.php",
                data: "ficha="+consulta_ficha,
                success: function(respuesta){
                    swal.fire({
                        title: (respuesta),
                        position: 'center',
                        icon: 'info',
                        showConfirmButton: false,
                        timer: 1500
                    })
                },
                error: function(error){
                    swal.fire({
                        title: (error.responseText),
                        position: 'center',
                        icon: 'error',
                        showConfirmButton: false,
                        timer: 1500
                    })
                }
            })
        }
    });

});