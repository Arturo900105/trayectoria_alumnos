
$(document).ready(function (){
    $("#tabla_usuCoord, #tabla_coordinadores,#tabla_tutores,#tabla_alumnos").hide()

    $("#inicioC").on("click",function (){
        $("#parrafoCoord").show()
        $("#tabla_usuCoord, #tabla_coordinadores,#tabla_tutores,#tabla_alumnos").hide()
    })

    $("#misdatos").on("click",function (){
        $("#tabla_usuCoord").show()
        $("#parrafoCoord, #tabla_coordinadores,#tabla_tutores,#tabla_alumnos").hide()
    })

    $("#mostrarListaC").on("click",function (){
        $("#tabla_coordinadores").show()
        $("#parrafoCoord, #tabla_usuCoord, #tabla_tutores, #tabla_alumnos").hide()
    })

    $("#mostrarListaT").on("click",function (){
        $("#tabla_tutores").show()
        $("#parrafoCoord, #tabla_usuCoord, #tabla_coordinadores, #tabla_alumnos").hide()
    })

    $("#mlistaAlumnos").on("click",function (){
        $("#tabla_alumnos").show()
        $("#parrafoCoord, #tabla_usuCoord, #tabla_coordinadores, #tabla_tutores").hide()
    })

})