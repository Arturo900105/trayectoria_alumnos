let hermano;

function agregarAlumno(fichaAlumno, idTutor){
    //console.log(fichaAlumno, idTutor)
    $.ajax({
        url: "php/g_alumno_tutor.php",
        type: "json",
        data: JSON.stringify({ids_alumno:fichaAlumno,ids_tutor:idTutor}),
        success: function (respuesta) {
            //alert(respuesta)
            swal.fire({
                position: 'center',
                icon: 'success',
                title: (respuesta),
                showConfirmButton: false,
                timer: 1500
            }).then(() =>{
                location.href = "/sesion_tutor.php"
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
            //alert(respuesta)
            swal.fire({
                position: 'center',
                icon: 'error',
                title: (respuesta),
                showConfirmButton: false,
                timer: 1500
            }).then(() =>{
                location.href = "/sesion_tutor.php"
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
    $("#tabla_misAlumnos").hide()
    $(".contentTutor").show()

    $("#inicioT").on("click", function (){
        $("#tabla_alumnosITSP").hide()
        $("#tabla_usutUT").hide()
        $("#tabla_misAlumnos").hide()
        $("#parrafoTut").show()
    })

    $("#misdatosT").on("click", function (){
        $("#tabla_alumnosITSP").hide()
        $("#tabla_misAlumnos").hide()
        $("#parrafoTut").hide()
        $("#tabla_usutUT").show()
    })

    $("#misAlumnos").on("click", function (){
        $("#parrafoTut").hide()
        $("#tabla_usutUT").hide()
        $("#tabla_alumnosITSP").hide()
        $("#tabla_misAlumnos").show()
    })

    $("#todosAlumnos").on("click", function (){
        $("#parrafoTut").hide()
        $("#tabla_usutUT").hide()
        $("#tabla_misAlumnos").hide()
        $("#tabla_alumnosITSP").show()
    })




})