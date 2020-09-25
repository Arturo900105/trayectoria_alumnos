let trayectoria5sem;

$(document).ready(function (){
    trayectoria5sem = $("#trayectoria5")

    $("#CerrarVentana5").on("click", function (){
        parent.$("#v_modal_t5").hide()
        trayectoria5sem[0].reset()
    })
})