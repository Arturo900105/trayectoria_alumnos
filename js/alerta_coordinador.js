
$(document).ready(function (){
    $("#tabla_usuCoord, #tabla_coordinadores,#tabla_tutores").hide()
    $("#div_canalizaciones").hide()
    $("#div_rparciales").hide()
    $("#div_rfinales").hide()
    $("#ventanaAlumnos").hide()
    $(".ventanasCoord").hide()

    $("#inicioC").on("click",function (){
        $("#parrafoCoord").show()
        $("#tabla_usuCoord, #tabla_coordinadores,#tabla_tutores").hide()
        $("#div_canalizaciones").hide()
        $("#div_rparciales").hide()
        $("#div_rfinales").hide()
        $("#ventanaAlumnos").hide()
        $(".ventanasCoord").hide()
    })

    $("#misdatos").on("click",function (){
        $("#tabla_usuCoord").show()
        $("#parrafoCoord, #tabla_coordinadores,#tabla_tutores").hide()
        $("#div_canalizaciones").hide()
        $("#div_rparciales").hide()
        $("#div_rfinales").hide()
        $("#ventanaAlumnos").hide()
        $(".ventanasCoord").hide()
    })


    $("#lista_canalizacion").on("click",function (){
        $("#div_canalizaciones").show()
        $("#parrafoCoord, #tabla_usuCoord, #tabla_coordinadores,#tabla_tutores").hide()
        $("#div_rparciales").hide()
        $("#div_rfinales").hide()
        $("#ventanaAlumnos").hide()
        $(".ventanasCoord").hide()
    })
    $("#lista_rparcial").on("click",function (){
        $("#div_rparciales").show()
        $("#parrafoCoord, #tabla_usuCoord, #tabla_coordinadores,#tabla_tutores").hide()
        $("#div_canalizaciones").hide()
        $("#div_rfinales").hide()
        $("#ventanaAlumnos").hide()
        $(".ventanasCoord").hide()
    })
    $("#lista_rfinal").on("click",function (){
        $("#div_rfinales").show()
        $("#parrafoCoord, #tabla_usuCoord, #tabla_coordinadores,#tabla_tutores").hide()
        $("#div_canalizaciones").hide()
        $("#div_rparciales").hide()
        $("#ventanaAlumnos").hide()
        $(".ventanasCoord").hide()
    })


    $("#mostrarListaC").on("click",function (){
        $("#tabla_coordinadores").show()
        $("#parrafoCoord, #tabla_usuCoord, #tabla_tutores").hide()
        $("#div_canalizaciones").hide()
        $("#div_rparciales").hide()
        $("#div_rfinales").hide()
        $("#ventanaAlumnos").hide()
        $(".ventanasCoord").hide()
    })

    $("#mostrarListaT").on("click",function (){
        $("#tabla_tutores").show()
        $("#parrafoCoord, #tabla_usuCoord, #tabla_coordinadores").hide()
        $("#div_canalizaciones").hide()
        $("#div_rparciales").hide()
        $("#div_rfinales").hide()
        $("#ventanaAlumnos").hide()
        $(".ventanasCoord").hide()
    })

    $("#mlistaAlumnos").on("click",function (){
        $("#ventanaAlumnos").show()
        $("#parrafoCoord").hide()
        $("#tabla_usuCoord, #tabla_coordinadores,#tabla_tutores").hide()
        $("#div_canalizaciones").hide()
        $("#div_rparciales").hide()
        $("#div_rfinales").hide()
        $(".ventanasCoord").hide()

    })

    $("#mlistaPedagogia").on("click",function (){
        $("#ventanaPedagogia").show()
        $("#parrafoCoord").hide()
        $("#ventanaPsicologia, #ventanaMedica").hide()
        $("#tabla_usuCoord, #tabla_coordinadores,#tabla_tutores").hide()
        $("#ventanaAlumnos, #div_canalizaciones, #div_rparciales, #div_rfinales").hide()
    })
    $("#mlistaPsicologia").on("click",function (){
        $("#ventanaPsicologia").show()
        $("#parrafoCoord").hide()
        $("#ventanaPedagogia, #ventanaMedica").hide()
        $("#tabla_usuCoord, #tabla_coordinadores,#tabla_tutores").hide()
        $("#ventanaAlumnos, #div_canalizaciones, #div_rparciales, #div_rfinales").hide()
    })
    $("#mlistaMedica").on("click",function (){
        $("#ventanaMedica").show()
        $("#parrafoCoord").hide()
        $("#ventanaPedagogia, #ventanaPsicologia").hide()
        $("#tabla_usuCoord, #tabla_coordinadores,#tabla_tutores").hide()
        $("#ventanaAlumnos, #div_canalizaciones, #div_rparciales, #div_rfinales").hide()
    })

})