let loginCoordinador = "", logUCord, logPCord;

function accesoCITA(sessionCoord) {
    $("#ventana_modal_nip").css({display:"block"})
    loginCoordinador = sessionCoord;
}

$(document).ready(function (){
    logUCord = $('#log_usu')
    logPCord = $('#log_pass')

    logPCord.on('input', function () {
        this.value = this.value.replace(/[^0-9]/g,'');
    });


    $('#logiarCoord').on('click', function (e) {
        e.preventDefault();
        if (logUCord.val().trim() === "" && logPCord.val().trim() === ""){
            Swal.fire({
                title: "Por favor,\nIngrese su Usuario y NIP",
                icon: "warning",
                position: "top",
                backdrop: "rgba(0,0,0,0)",
                showConfirmButton: false,
                timer: 2000
            });
            return false;
        } else if (logUCord.val().trim() === ""){
            Swal.fire({
                title: "Por favor,\nIngrese su Usuario",
                icon: "warning",
                position: "top",
                backdrop: "rgba(0,0,0,0)",
                showConfirmButton: false,
                timer: 1500
            });
            return false;
        } else if (logPCord.val().trim() === ""){
            Swal.fire({
                title: "Por favor,\nIngrese su NIP",
                icon: "warning",
                position: "top",
                backdrop: "rgba(0,0,0,0)",
                showConfirmButton: false,
                timer: 1500
            });
            return false;
        } else {
            $.ajax({
                url: "php/login-coordinador.php",
                type: 'POST',
                data: $("#v_modal_nip").serialize(),
                success: function (resulCoord) {
                    let CookiesC = Cookies.noConflict();
                    CookiesC.set('UsuCoord', resulCoord);
                    //console.log(loginCoordinador);
                    location.href = loginCoordinador;
                },
                error: function (error) {
                    swal.fire({
                        position: 'top',
                        icon: 'question',
                        title: (error.responseText),
                        showConfirmButton: false,
                        timer: 1500
                    })
                }
            })
        }
    })

    $("#cerrarCoord").on("click", function (e){
        e.preventDefault();
        $("#ventana_modal_nip").css({display:"none"})
        $("#v_modal_nip")[0].reset()
    })


})