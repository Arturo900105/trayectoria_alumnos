
window.addEventListener('message', function(event) {
    if(event.origin === 'http://itsp_cita.com') {
        document.getElementById('lista_misAlumnos').contentDocument.location.reload(true);
        document.getElementById('lista_alumnosITSP').contentDocument.location.reload(true);
    }

}, false);

function agregarAlumno(fichaAlumno, idTutor){
    //console.log(fichaAlumno, idTutor)
    $.ajax({
        url: "php/g_alumno_tutor.php",
        type: "json",
        data: JSON.stringify({ids_alumno:fichaAlumno,ids_tutor:idTutor}),
        success: function (respuesta) {
            swal.fire({
                position: 'center',
                icon: 'success',
                title: (respuesta),
                showConfirmButton: false,
                timer: 1500
            }).then(() =>{
                window.parent.postMessage({message: 'Hello world'}, 'http://itsp_cita.com');
            })
        },
        error: function (error) {
            swal.fire({
                position: 'center',
                icon: 'error',
                title: (error.responseText),
                showConfirmButton: false,
                timer: 1500
            })
        }
    });
}

function eliminarAlumno(fichaAlumno, idTutor){
    //console.log(fichaAlumno, idTutor)
    $.ajax({
        url: "php/e_alumno_tutor.php",
        type: "json",
        data: JSON.stringify({ids_alumno:fichaAlumno,ids_tutor:idTutor}),
        success: function (respuesta) {
            swal.fire({
                position: 'center',
                icon: 'error',
                title: (respuesta),
                showConfirmButton: false,
                timer: 1500
            }).then(() =>{
                window.parent.postMessage({message: 'Hello world'}, 'http://itsp_cita.com');
            })
        },
        error: function (error) {
            swal.fire({
                position: 'center',
                icon: 'error',
                title: (error.responseText),
                showConfirmButton: false,
                timer: 1500
            })
        }
    });
}




$(document).ready(function (){
    $("#tabla_usutUT, #tabla_alumnosITSP").hide()
    $(".mis_alumnos, .ventana_alumnos").hide()
    $(".contentTutor").show()

    $("#div_canalizaciones").hide()
    $("#div_rparciales").hide()
    $("#div_rfinales").hide()

    $("#inicioT").on("click", function (){
        $("#div_canalizaciones").hide()
        $("#div_rparciales").hide()
        $("#div_rfinales").hide()
        $(".ventana_alumnos").hide()
        $("#tabla_usutUT").hide()
        $(".mis_alumnos").hide()
        $("#parrafoTut").show()
    })

    $("#misdatosT").on("click", function (){
        $("#div_canalizaciones").hide()
        $("#div_rparciales").hide()
        $("#div_rfinales").hide()
        $(".ventana_alumnos").hide()
        $(".mis_alumnos").hide()
        $("#parrafoTut").hide()
        $("#tabla_usutUT").show()
    })

    $("#misAlumnos").on("click", function (){
        $("#div_canalizaciones").hide()
        $("#div_rparciales").hide()
        $("#div_rfinales").hide()
        $("#parrafoTut").hide()
        $("#tabla_usutUT").hide()
        $(".ventana_alumnos").hide()
        $(".mis_alumnos").show()
    })

    $("#todosAlumnos").on("click", function (){
        $("#div_canalizaciones").hide()
        $("#div_rparciales").hide()
        $("#div_rfinales").hide()
        $("#parrafoTut").hide()
        $("#tabla_usutUT").hide()
        $(".mis_alumnos").hide()
        $(".ventana_alumnos").show()
    })



    $("#lista_canalizacion").on("click",function (){
        $("#parrafoTut").hide()
        $("#div_rparciales").hide()
        $("#div_rfinales").hide()
        $("#tabla_usutUT, #tabla_alumnosITSP").hide()
        $(".mis_alumnos, .ventana_alumnos").hide()
        $(".contentTutor").hide()
        $("#div_canalizaciones").show()
    })
    $("#lista_rparcial").on("click",function (){
        $("#parrafoTut").hide()
        $("#div_rfinales").hide()
        $("#div_canalizaciones").hide()
        $("#tabla_usutUT, #tabla_alumnosITSP").hide()
        $(".mis_alumnos, .ventana_alumnos").hide()
        $(".contentTutor").hide()
        $("#div_rparciales").show()
    })
    $("#lista_rfinal").on("click",function (){
        $("#parrafoTut").hide()
        $("#div_rparciales").hide()
        $("#div_canalizaciones").hide()
        $("#tabla_usutUT, #tabla_alumnosITSP").hide()
        $(".mis_alumnos, .ventana_alumnos").hide()
        $(".contentTutor").hide()
        $("#div_rfinales").show()
    })



})