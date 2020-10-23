let caracter, new_caracter, fechaHoy, yearActual, consultGeneracion, qEA, qHE;

window.addEventListener('message', function(event) {
    if(event.origin === 'http://itsp_cita.com') {
        document.getElementById('ventana_canalizacion').contentDocument.location.reload(true);
        document.getElementById('ventana_rparcial').contentDocument.location.reload(true);
        document.getElementById('ventana_rfinal').contentDocument.location.reload(true);

        document.getElementById('listaAlumnosITSP').contentDocument.location.reload(true);
        document.getElementsByClassName('listaCA').contentDocument.location.reload(true);
    }

}, false);


$(document).ready(function (){
    fechaHoy = new Date(); //Fecha actual
    yearActual = fechaHoy.getFullYear(); //obteniendo año

    $("#tabla_usuCoord, #tabla_coordinadores,#tabla_tutores").hide()
    $("#div_canalizaciones, #div_rparciales, #div_rfinales").hide()
    $(".ventanasCoord").hide()


    $("#inicioC").on("click",function (){
        $(".ventanasCoord").hide()
        $("#tabla_usuCoord, #tabla_coordinadores,#tabla_tutores").hide()
        $("#div_canalizaciones, #div_rparciales, #div_rfinales").hide()
        $("#parrafoCoord").show()

    })


    $("#misdatos").on("click",function (){
        $("#parrafoCoord").hide()
        $(".ventanasCoord").hide()
        $("#tabla_coordinadores,#tabla_tutores").hide()
        $("#div_canalizaciones, #div_rparciales, #div_rfinales").hide()
        $("#tabla_usuCoord").show()
    })


    $("#lista_canalizacion").on("click",function (){
        $("#parrafoCoord").hide()
        $(".ventanasCoord").hide()
        $("#tabla_usuCoord, #tabla_coordinadores,#tabla_tutores").hide()
        $("#div_rparciales, #div_rfinales").hide()
        $("#div_canalizaciones").show()

    })
    $("#lista_rparcial").on("click",function (){
        $("#parrafoCoord").hide()
        $(".ventanasCoord").hide()
        $("#tabla_usuCoord, #tabla_coordinadores,#tabla_tutores").hide()
        $("#div_canalizaciones, #div_rfinales").hide()
        $("#div_rparciales").show()

    })
    $("#lista_rfinal").on("click",function (){
        $("#parrafoCoord").hide()
        $(".ventanasCoord").hide()
        $("#tabla_usuCoord, #tabla_coordinadores,#tabla_tutores").hide()
        $("#div_canalizaciones, #div_rparciales").hide()
        $("#div_rfinales").show()

    })


    $("#mostrarListaC").on("click",function (){
        $("#parrafoCoord").hide()
        $(".ventanasCoord").hide()
        $("#tabla_usuCoord, #tabla_tutores").hide()
        $("#div_canalizaciones, #div_rparciales, #div_rfinales").hide()
        $("#tabla_coordinadores").show()
    })
    $("#mostrarListaT").on("click",function (){
        $("#parrafoCoord").hide()
        $(".ventanasCoord").hide()
        $("#tabla_usuCoord, #tabla_coordinadores").hide()
        $("#div_canalizaciones, #div_rparciales, #div_rfinales").hide()
        $("#tabla_tutores").show()
    })


    $("#mlistaAlumnos").on("click",function (){
        $("#parrafoCoord").hide()
        $(".ventanasCoord").hide()
        $("#tabla_usuCoord, #tabla_coordinadores,#tabla_tutores").hide()
        $("#div_canalizaciones, #div_rparciales, #div_rfinales").hide()
        $("#ventanaPedagogia, #ventanaPsicologia, #ventanaMedica, #ventanaPostTest, #ventanaCAPPT").hide()
        $("#ventanaAlumnos").show()
    })
    $("#mlistaPedagogia").on("click",function (){
        $("#parrafoCoord").hide()
        $("#tabla_usuCoord, #tabla_coordinadores,#tabla_tutores").hide()
        $("#div_canalizaciones, #div_rparciales, #div_rfinales").hide()
        $("#ventanaAlumnos, #ventanaPsicologia, #ventanaMedica, #ventanaPostTest, #ventanaCAPPT").hide()
        $("#ventanaPedagogia").show()
    })
    $("#mlistaPsicologia").on("click",function (){
        $("#parrafoCoord").hide()
        $("#tabla_usuCoord, #tabla_coordinadores,#tabla_tutores").hide()
        $("#div_canalizaciones, #div_rparciales, #div_rfinales").hide()
        $("#ventanaAlumnos, #ventanaPedagogia, #ventanaMedica, #ventanaPostTest, #ventanaCAPPT").hide()
        $("#ventanaPsicologia").show()
    })
    $("#mlistaMedica").on("click",function (){
        $("#parrafoCoord").hide()
        $("#tabla_usuCoord, #tabla_coordinadores,#tabla_tutores").hide()
        $("#div_canalizaciones, #div_rparciales, #div_rfinales").hide()
        $("#ventanaAlumnos, #ventanaPedagogia, #ventanaPsicologia, #ventanaPostTest, #ventanaCAPPT").hide()
        $("#ventanaMedica").show()
    })
    $("#mlistaPostTest").on("click",function (){
        $("#parrafoCoord").hide()
        $("#tabla_usuCoord, #tabla_coordinadores,#tabla_tutores").hide()
        $("#div_canalizaciones, #div_rparciales, #div_rfinales").hide()
        $("#ventanaAlumnos, #ventanaPedagogia, #ventanaPsicologia, #ventanaMedica, #ventanaCAPPT").hide()
        $("#ventanaPostTest").show()
    })
    $("#mlistaCAPPT").on("click",function (){
        $("#parrafoCoord").hide()
        $("#tabla_usuCoord, #tabla_coordinadores,#tabla_tutores").hide()
        $("#div_canalizaciones, #div_rparciales, #div_rfinales").hide()
        $("#ventanaAlumnos, #ventanaPedagogia, #ventanaPsicologia, #ventanaMedica, #ventanaPostTest").hide()
        $("#ventanaCAPPT").show()
    })

    $("#mostrar_HE").on("click",function (){
        $(function(){
            qHE = $("#consultaHE")
            qHE.on("keydown",function (event) {

                if ((event.keyCode < 48 || event.keyCode > 57) &&
                    (event.keyCode < 96 || event.keyCode > 105) &&
                    event.keyCode !==190 &&
                    event.keyCode !==110 &&
                    event.keyCode !==8 &&
                    event.keyCode !==9) {
                    return false;
                }
            })
            qHE.on("click", function (){
                $("#consultaHE").val("")
            })
            qHE.on('change keypress paste focus textInput input',function(){
                caracter = $(this).val()
                new_caracter = caracter.replace(/\D/g, "")
                if (new_caracter > yearActual) {
                    $(this).val(yearActual)
                } else {
                    $(this).val(new_caracter)
                }
            })
        })

        Swal.fire({
            title: "RESULTADOS\nHabilidades de Estudio (HE):",
            backdrop: "rgba(0,0,0,0.7)",
            width: "30%",
            showCancelButton: true,
            confirmButtonColor: '#19980b',
            cancelButtonColor: '#910018',
            confirmButtonText: 'CONSULTAR',
            cancelButtonText: 'CANCELAR',
            input: 'text',
            allowOutsideClick: false,
            allowEscapeKey: false,
            inputAttributes: {
                id: "consultaHE",
                minLength: 4,
                maxlength: 4,
                placeholder: "AÑO",
                title: "Ingresa año de Generación",
                pattern: "[0-9]{4}",
            }, inputValidator: gener => {
                if (gener < (yearActual-6)){
                    return "Consulta una generación no mayor a 6 años de antigüedad";
                }
            }
        }).then((resultado) => {
            if (resultado.value) {
                consultGeneracion = resultado.value;
                window.open("estadistica_HE.php?generacion="+consultGeneracion,"_blank")
            } else {
                return false;
            }
        })
    })

    $("#mostrar_EA").on("click",function (){

        $(function(){
            qEA = $("#consultaEA")
            qEA.on("keydown",function (event) {

                if ((event.keyCode < 48 || event.keyCode > 57) &&
                    (event.keyCode < 96 || event.keyCode > 105) &&
                    event.keyCode !==190 &&
                    event.keyCode !==110 &&
                    event.keyCode !==8 &&
                    event.keyCode !==9) {
                    return false;
                }
            })
            qEA.on("click", function (){
                $("#consultaEA").val("")
            })
            qEA.on('change keypress paste focus textInput input',function(){
                caracter = $(this).val()
                new_caracter = caracter.replace(/\D/g, "")
                if (new_caracter > yearActual) {
                    $(this).val(yearActual)
                } else {
                    $(this).val(new_caracter)
                }
            })
        })

        Swal.fire({
            title: "RESULTADOS\nEstilo de Aprendizaje (EA):",
            backdrop: "rgba(0,0,0,0.7)",
            width: "30%",
            showCancelButton: true,
            confirmButtonColor: '#19980b',
            cancelButtonColor: '#910018',
            confirmButtonText: 'CONSULTAR',
            cancelButtonText: 'CANCELAR',
            input: 'text',
            allowOutsideClick: false,
            allowEscapeKey: false,
            inputAttributes: {
                id: "consultaEA",
                minLength: 4,
                maxlength: 4,
                placeholder: "AÑO",
                title: "Ingresa año de Generación",
                pattern: "[0-9]{4}",
            }, inputValidator: gener => {
                if (gener < (yearActual-6)){
                    return "Consulta una generación no mayor a 6 años de antigüedad";
                }
            }
        }).then((resultado) => {
            if (resultado.value) {
                consultGeneracion = resultado.value;
                window.open("estadistica_EA.php?generacion="+consultGeneracion,"_blank")
            } else {
                return false;
            }
        })
    })
})