let caracter, new_caracter, fechaHoy, yearActual, consultGeneracion, qEA, qHE, qOE, qTE, qME;

$(document).ready(function (){
    fechaHoy = new Date(); //Fecha actual
    yearActual = fechaHoy.getFullYear(); //obteniendo año

    $("#tabla_usuCoord").hide()
    $("#div_canalizaciones, #div_rparciales, #div_rfinales").hide()
    $(".ventanasCoord, .ventanasCoord2").hide()


    $("#inicioC").on("click",function (){
        $("#tabla_usuCoord").hide()
        $(".ventanasCoord, .ventanasCoord2").hide()
        $("#div_canalizaciones, #div_rparciales, #div_rfinales").hide()
        $(".parrafoCoord").show()

    })


    $("#misdatos").on("click",function (){
        $(".parrafoCoord").hide()
        $(".ventanasCoord, .ventanasCoord2").hide()
        $("#div_canalizaciones, #div_rparciales, #div_rfinales").hide()
        $("#tabla_usuCoord").show()
    })


    $("#lista_canalizacion").on("click",function (){
        $(".parrafoCoord").hide()
        $("#tabla_usuCoord").hide()
        $(".ventanasCoord, .ventanasCoord2").hide()
        $("#div_rparciales, #div_rfinales").hide()
        $("#div_canalizaciones").show()

    })
    $("#lista_rparcial").on("click",function (){
        $(".parrafoCoord").hide()
        $("#tabla_usuCoord").hide()
        $(".ventanasCoord, .ventanasCoord2").hide()
        $("#div_canalizaciones, #div_rfinales").hide()
        $("#div_rparciales").show()

    })
    $("#lista_rfinal").on("click",function (){
        $(".parrafoCoord").hide()
        $("#tabla_usuCoord").hide()
        $(".ventanasCoord, .ventanasCoord2").hide()
        $("#div_canalizaciones, #div_rparciales").hide()
        $("#div_rfinales").show()

    })


    $("#mostrarListaC").on("click",function (){
        $(".parrafoCoord").hide()
        $("#tabla_usuCoord").hide()
        $(".ventanasCoord").hide()
        $("#div_canalizaciones, #div_rparciales, #div_rfinales").hide()
        $("#ventanaTutor").hide()
        $("#ventanaCoordinador").show()
    })
    $("#mostrarListaT").on("click",function (){
        $(".parrafoCoord").hide()
        $("#tabla_usuCoord").hide()
        $(".ventanasCoord").hide()
        $("#div_canalizaciones, #div_rparciales, #div_rfinales").hide()
        $("#ventanaCoordinador").hide()
        $("#ventanaTutor").show()
    })


    $("#mlistaAlumnos").on("click",function (){
        $(".parrafoCoord").hide()
        $("#tabla_usuCoord").hide()
        $(".ventanasCoord2").hide()
        $("#div_canalizaciones, #div_rparciales, #div_rfinales").hide()
        $("#ventanaPedagogia, #ventanaPsicologia, #ventanaMedica, #ventanaPostTest, #ventanaCAPPT, #ventanaPostTest2").hide()
        $("#ventanaAlumnos").show()
    })
    $("#mlistaPedagogia").on("click",function (){
        $(".parrafoCoord").hide()
        $("#tabla_usuCoord").hide()
        $(".ventanasCoord2").hide()
        $("#div_canalizaciones, #div_rparciales, #div_rfinales").hide()
        $("#ventanaAlumnos, #ventanaPsicologia, #ventanaMedica, #ventanaPostTest, #ventanaCAPPT, #ventanaPostTest2").hide()
        $("#ventanaPedagogia").show()
    })
    $("#mlistaPsicologia").on("click",function (){
        $(".parrafoCoord").hide()
        $("#tabla_usuCoord").hide()
        $(".ventanasCoord2").hide()
        $("#div_canalizaciones, #div_rparciales, #div_rfinales").hide()
        $("#ventanaAlumnos, #ventanaPedagogia, #ventanaMedica, #ventanaPostTest, #ventanaCAPPT, #ventanaPostTest2").hide()
        $("#ventanaPsicologia").show()
    })
    $("#mlistaMedica").on("click",function (){
        $(".parrafoCoord").hide()
        $("#tabla_usuCoord").hide()
        $(".ventanasCoord2").hide()
        $("#div_canalizaciones, #div_rparciales, #div_rfinales").hide()
        $("#ventanaAlumnos, #ventanaPedagogia, #ventanaPsicologia, #ventanaPostTest, #ventanaCAPPT, #ventanaPostTest2").hide()
        $("#ventanaMedica").show()
    })
    $("#mlistaPostTest").on("click",function (){
        $(".parrafoCoord").hide()
        $("#tabla_usuCoord").hide()
        $(".ventanasCoord2").hide()
        $("#div_canalizaciones, #div_rparciales, #div_rfinales").hide()
        $("#ventanaAlumnos, #ventanaPedagogia, #ventanaPsicologia, #ventanaMedica, #ventanaCAPPT, #ventanaPostTest2").hide()
        $("#ventanaPostTest").show()
    })
    $("#mresultPostTest").on("click",function (){
        $(".parrafoCoord").hide()
        $("#tabla_usuCoord").hide()
        $(".ventanasCoord2").hide()
        $("#div_canalizaciones, #div_rparciales, #div_rfinales").hide()
        $("#ventanaAlumnos, #ventanaPedagogia, #ventanaPsicologia, #ventanaMedica, #ventanaCAPPT, #ventanaPostTest").hide()
        $("#ventanaPostTest2").show()
    })
    $("#mlistaCAPPT").on("click",function (){
        $(".parrafoCoord").hide()
        $("#tabla_usuCoord").hide()
        $(".ventanasCoord2").hide()
        $("#div_canalizaciones, #div_rparciales, #div_rfinales").hide()
        $("#ventanaAlumnos, #ventanaPedagogia, #ventanaPsicologia, #ventanaMedica, #ventanaPostTest, #ventanaPostTest2").hide()
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
            title: "INTERPRETACIÓN\nHabilidades de Estudio (HE):",
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

    $("#mostrar_oe").on("click", function (){
        $(function(){
            qOE = $("#consulta_oe")
            qOE.on("keydown",function (event) {

                if ((event.keyCode < 48 || event.keyCode > 57) &&
                    (event.keyCode < 96 || event.keyCode > 105) &&
                    event.keyCode !==190 &&
                    event.keyCode !==110 &&
                    event.keyCode !==8 &&
                    event.keyCode !==9) {
                    return false;
                }
            })
            qOE.on("click", function (){
                $("#consulta_oe").val("")
            })
            qOE.on('change keypress paste focus textInput input',function(){
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
            title: "INTERPRETACIÓN\nOrganización del Estudio:",
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
                id: "consulta_oe",
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
                window.open("interpretacion_oe.php?generacion="+consultGeneracion,"_blank")
            } else {
                return false;
            }
        })
    })

    $("#mostrar_te").on("click", function (){
        $(function(){
            qTE = $("#consulta_te")
            qTE.on("keydown",function (event) {

                if ((event.keyCode < 48 || event.keyCode > 57) &&
                    (event.keyCode < 96 || event.keyCode > 105) &&
                    event.keyCode !==190 &&
                    event.keyCode !==110 &&
                    event.keyCode !==8 &&
                    event.keyCode !==9) {
                    return false;
                }
            })
            qTE.on("click", function (){
                $("#consulta_te").val("")
            })
            qTE.on('change keypress paste focus textInput input',function(){
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
            title: "INTERPRETACIÓN\nTécnicas de Estudio:",
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
                id: "consulta_te",
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
                window.open("interpretacion_te.php?generacion="+consultGeneracion,"_blank")
            } else {
                return false;
            }
        })
    })

    $("#mostrar_me").on("click", function (){
        $(function(){
            qME = $("#consulta_me")
            qME.on("keydown",function (event) {

                if ((event.keyCode < 48 || event.keyCode > 57) &&
                    (event.keyCode < 96 || event.keyCode > 105) &&
                    event.keyCode !==190 &&
                    event.keyCode !==110 &&
                    event.keyCode !==8 &&
                    event.keyCode !==9) {
                    return false;
                }
            })
            qME.on("click", function (){
                $("#consulta_me").val("")
            })
            qME.on('change keypress paste focus textInput input',function(){
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
            title: "INTERPRETACIÓN\nMotivación para el Estudio:",
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
                id: "consulta_me",
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
                window.open("interpretacion_me.php?generacion="+consultGeneracion,"_blank")
            } else {
                return false;
            }
        })
    })

})