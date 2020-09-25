let trayectoria7sem;

$(document).ready(function (){
    trayectoria7sem = $("#trayectoria7")


    $("#CerrarVentana7").on("click", function (){
        parent.$("#v_modal_t7").hide()
        trayectoria7sem[0].reset()
    })
})