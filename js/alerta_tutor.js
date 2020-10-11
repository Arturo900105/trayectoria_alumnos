let iframe1 = document.getElementById("lista_misAlumnos");
let iframe2 = document.getElementById("lista_alumnosITSP");

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
                location.reload(true);
                iframe1.src = iframe1.src;
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
                location.reload(true);
                iframe2.src = iframe2.src;
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

    $("#inicioT").on("click", function (){
        $(".ventana_alumnos").hide()
        $("#tabla_usutUT").hide()
        $(".mis_alumnos").hide()
        $("#parrafoTut").show()
    })

    $("#misdatosT").on("click", function (){
        $(".ventana_alumnos").hide()
        $(".mis_alumnos").hide()
        $("#parrafoTut").hide()
        $("#tabla_usutUT").show()
    })

    $("#misAlumnos").on("click", function (){
        $("#parrafoTut").hide()
        $("#tabla_usutUT").hide()
        $(".ventana_alumnos").hide()
        $(".mis_alumnos").show()
    })

    $("#todosAlumnos").on("click", function (){
        $("#parrafoTut").hide()
        $("#tabla_usutUT").hide()
        $(".mis_alumnos").hide()
        $(".ventana_alumnos").show()
    })




})