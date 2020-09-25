let trayectoria8sem;

$(document).ready(function (){
    trayectoria8sem = $("#trayectoria8")


    $("#CerrarVentana8").on("click", function (){
        parent.$("#v_modal_t8").hide()
        trayectoria8sem[0].reset()
    })
})