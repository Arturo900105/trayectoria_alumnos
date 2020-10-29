window.addEventListener('message', function(event) {
    if(event.origin === 'http://itsp_cita.com') {
        document.getElementById('lista_misAlumnos').contentDocument.location.reload(true);
        document.getElementById('lista_alumnosITSP').contentDocument.location.reload(true);
        document.getElementById('tabla_cappt').contentDocument.location.reload(true);
        document.getElementById('ventana_canalizacion').contentDocument.location.reload(true);
        document.getElementById('ventana_rparcial').contentDocument.location.reload(true);
        document.getElementById('ventana_rfinal').contentDocument.location.reload(true);
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
    $("#tabla_usutUT").hide()
    $(".mis_alumnos, .ventana_alumnos, .cappt_alumnos, .trayectoria_alumnos").hide()
    $("#div_canalizaciones, #div_rparciales, #div_rfinales").hide()

    $("#inicioT").on("click", function (){
        $("#tabla_usutUT").hide()
        $(".mis_alumnos, .ventana_alumnos, .cappt_alumnos, .trayectoria_alumnos").hide()
        $("#div_canalizaciones, #div_rparciales, #div_rfinales").hide()
        $(".parrafoTut").show()
    })

    $("#misdatosT").on("click", function (){
        $(".parrafoTut").hide()
        $(".mis_alumnos, .ventana_alumnos, .cappt_alumnos, .trayectoria_alumnos").hide()
        $("#div_canalizaciones, #div_rparciales, #div_rfinales").hide()
        $("#tabla_usutUT").show()
    })


    $("#misAlumnos").on("click", function (){
        $(".parrafoTut").hide()
        $("#tabla_usutUT").hide()
        $(".ventana_alumnos, .cappt_alumnos, .trayectoria_alumnos").hide()
        $("#div_canalizaciones, #div_rparciales, #div_rfinales").hide()
        $(".mis_alumnos").show()
    })
    $("#todosAlumnos").on("click", function (){
        $(".parrafoTut").hide()
        $("#tabla_usutUT").hide()
        $(".mis_alumnos, .cappt_alumnos, .trayectoria_alumnos").hide()
        $("#div_canalizaciones, #div_rparciales, #div_rfinales").hide()
        $(".ventana_alumnos").show()
    })


    $("#cappt_misAlumnos").on("click", function (){
        $(".parrafoTut").hide()
        $("#tabla_usutUT").hide()
        $(".mis_alumnos, .ventana_alumnos, .trayectoria_alumnos").hide()
        $("#div_canalizaciones, #div_rparciales, #div_rfinales").hide()
        $(".trayectoria_alumnos").hide()
        $(".cappt_alumnos").show()
    })
    $("#tsems_misAlumnos").on("click", function (){
        $(".parrafoTut").hide()
        $("#tabla_usutUT").hide()
        $(".mis_alumnos, .ventana_alumnos").hide()
        $("#div_canalizaciones, #div_rparciales, #div_rfinales").hide()
        $(".cappt_alumnos").hide()
        $(".trayectoria_alumnos").show()
    })


    $("#lista_canalizacion").on("click",function (){
        $(".parrafoTut").hide()
        $("#tabla_usutUT").hide()
        $(".mis_alumnos, .ventana_alumnos, .cappt_alumnos, .trayectoria_alumnos").hide()
        $("#div_rparciales, #div_rfinales").hide()
        $("#div_canalizaciones").show()
    })
    $("#lista_rparcial").on("click",function (){
        $(".parrafoTut").hide()
        $("#tabla_usutUT").hide()
        $(".mis_alumnos, .ventana_alumnos, .cappt_alumnos, .trayectoria_alumnos").hide()
        $("#div_canalizaciones, #div_rfinales").hide()
        $("#div_rparciales").show()
    })
    $("#lista_rfinal").on("click",function (){
        $(".parrafoTut").hide()
        $("#tabla_usutUT").hide()
        $(".mis_alumnos, .ventana_alumnos, .cappt_alumnos, .trayectoria_alumnos").hide()
        $("#div_canalizaciones, #div_rparciales").hide()
        $("#div_rfinales").show()
    })

})


function setCAPPT(e, tcappt){
    e.preventDefault();
    $.ajax({
        url: "php/entrar_cappt.php",
        type: 'POST',
        data: "numFicha="+tcappt,
        success: function () {
            let form_cappt = $("#acceso_cappt")
            form_cappt.attr("href", 't_cappt.php?ficha_alumno='+ tcappt);
            form_cappt[0].click();
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


function setTrayectoria(e, tsem, control){
    e.preventDefault();
    $.ajax({
        url: "php/entrar_trayectorias.php",
        type: 'POST',
        data: "numControl="+control+"&tsem="+tsem,
        success: function () {
            let form_tsems = $("#"+tsem)
            form_tsems.attr("href", tsem+'.php?matricula_alumno='+control);
            form_tsems[0].click();
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