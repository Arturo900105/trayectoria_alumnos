let loginTutor = "";

function Confirmar_Acceso(sessionTutor) {
    $("#ventana_modal").css({display:"block"})
    loginTutor = sessionTutor;
}

$(document).ready(function (){

    //Ventana modal para acceder a las trayectorias
    $("#nuevoTutor").on("click", function (){
        $("#ventana_modal").css({display:"none"})
        $('#v_modal')[0].reset()
    })

    $("#entrar_tutor").on("click", function (e){
        e.preventDefault();
        if ($('#usuarioTutor').val().trim() === "" && $('#passTutor').val().trim() === ""){
            Swal.fire({
                title: "Ingresa tu Usuario y tu\nContraseña de 10 digitos",
                icon: "warning",
                position: "top",
                backdrop: "rgba(0,0,0,0)",
                showConfirmButton: false,
                timer: 2000
            })
            return false
        } else if ($('#usuarioTutor').val().trim() === "") {
            Swal.fire({
                title: "Ingresa tu Usuario",
                icon: "warning",
                position: "top",
                backdrop: "rgba(0,0,0,0)",
                showConfirmButton: false,
                timer: 2000
            });
            return false
        } else if ($('#passTutor').val().trim() === "") {
            Swal.fire({
                title: "Ingresa tu\nContraseña de 10 digitos",
                icon: "warning",
                position: "top",
                backdrop: "rgba(0,0,0,0)",
                showConfirmButton: false,
                timer: 2000
            });
            return false
        } else {
            $.ajax({
                url: "php/login-tutor.php",
                type: 'POST',
                data: $("#v_modal").serialize(),
                success: function (resulT) {
                    let CookiesT = Cookies.noConflict();
                    CookiesT.set('UsuTut', resulT);
                    //console.log(loginTutor);
                    location.href = loginTutor;
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

    $("#cerrarTutor").on("click", function (e){
        e.preventDefault();
        $("#ventana_modal").css({display:"none"})
        $('#v_modal')[0].reset()
    })
})