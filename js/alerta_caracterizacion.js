let num_ficha;
let paginaAbrir = '', paginaPostTest = "", form_alumno, prom_bachi;
let alertArea1, alertArea2, areaPostTest, log_posttest;

let yearcpe = new Date().getFullYear().toString().substr(-2)
let generacion = new Date().getFullYear();

function Poner_Ceros(num) {
    num.value = yearcpe+"-"+("0000" + num.value).slice (-4);
}

/*
function numDecimal(evt,input) {
    let key = window.Event ? evt.which : evt.keyCode;
    let chark = String.fromCharCode(key);
    let tempValue = input.value+chark;

    if(key >= 48 && key <= 57){
        if (filter(tempValue)=== false) {
            return false;
        } else {
            return true;
        }
    } else {
        if (key === 8 || key === 13 || key === 0) {
            return true;
        }else if(key === 46){
            if (filter(tempValue)=== false){
                return false;
            } else {
                return true;
            }
        } else{
            return false;
        }
    }
}

function filter(__val__) {
    let preg = /^([0-9]+\.?[0-9]{0,1})$/;
    if(preg.test(__val__) === true) {
        return true;
    } else {
        return false;
    }
}
*/

$(document).ready(function () {
    form_alumno = $("#form_alumno")
    form_alumno[0].reset()
    $('#contenido_area')[0].reset()
    $('#contenido_posttest')[0].reset()
    $("#generacion").val(generacion)
    prom_bachi = $("#prom_prepa")
    areaPostTest = $('#login_posttest')

    $('#no_ficha, #edad, #telefono, #codpos').on('input', function () {
        this.value = this.value.replace(/[^0-9]/g,'');
    })

    $('#login_areas').on('input', function () {
        this.value = this.value.replace(/[^0-9-]/g,'');
    })

    $('#no_ficha').on("click", function (){
        $("#no_ficha").val("")
    })

    areaPostTest.on("click", function (){
        $("#login_posttest").val("")
    })
    areaPostTest.on('input', function () {
        this.value = this.value.replace(/[^0-9ASas]/g,'');
    })
    areaPostTest.on('keyup', function () {
        let datos = new String(areaPostTest.val())
        datos = datos.toUpperCase(datos);
        areaPostTest.val(datos);
    })

    $('.nom_pat_mat').on('input', function (e) {
        if (!/^[ a-záéíóúüñ.-]*$/i.test(this.value)) {
            this.value = this.value.replace(/[^ a-záéíóúüñ.-]+/ig,"");
        }
    });

    $('#preparatoria').on('input', function (e) {
        if (!/^[ a-z0-9áéíóúüñ.]*$/i.test(this.value)) {
            this.value = this.value.replace(/[^ a-z0-9áéíóúüñ.]+/ig,"");
        }
    });

    prom_bachi.on("click", function (){
        $("#prom_prepa").val("")
    })


    prom_bachi.on("change keypress paste focus textInput input",function() {
        if (!/^[0-9.]*$/i.test(this.value)) {
            this.value = this.value.replace(/[^0-9.]+/ig,"");
        } else if (this.value > 10) {
            $(this).val(this.value[0]+"."+this.value[1])
        } else if (this.value >= 2 && this.value <= 5){
            $(this).val(6)
        } else if (this.value === "1"){
            $(this).val(10)
        }else if (this.value[0] === "0" || this.value[0] === "."){
            $(this).val(this.value[1])
        } else if (this.value === this.value[0]+"." || this.value === this.value[0]+".0"){
            $(this).val(this.value[0])
        }
    })


    form_alumno.submit(function (e) {
        e.preventDefault();

        let ficha_vacia = "Ingresa un Número de Ficha";
        let alerta1 = "Ingresa una Ficha válida";
        let alertaSexo = "Falta validar el campo sexo";
        let alerta2 = "Confirma si te\nconsideras Indígena o no";
        let alerta3 = "Confirma tu Estado Civil";
        let alerta4 = "Debes seleccionar un Estado";
        let alerta5 = "Debes seleccionar un Municipio";
        let alerta6 = "Debes seleccionar\nnombre del Estado";
        let alerta7 = "Debes ingresar un\nMunicipio";
        let alerta8 = "Seleccione la\nescuela de procedencia";
        let alerta9 = "Por favor, Ingrese la\nescuela de procedencia";
        let alerta10 = "Por favor,\nSeleccione el tipo de\nBachillerato";
        let alerta11 = "Por favor,\nIngrese el nombre del\nBachillerato";
        let alert_carrera = "Seleccione una Carrera";
        let tittle_confir = "¿Registrar?";
        let texto_confir = "Después, para modificar errores, tendrá que acudir al área de Tutoría Académica del Tecnológico.";

        if ($('#no_ficha').val().trim() === '') {
            Swal.fire({
                title: ficha_vacia,
                icon: "warning",
                confirmButtonColor: '#550100',
                backdrop: "rgba(85,0,0,0.7)"
            });
            return false;
        } else if ($('#no_ficha').val().trim() === yearcpe+"-"+'0000') {
            Swal.fire({title: alerta1, icon: "warning", confirmButtonColor: '#550100', backdrop: "rgba(85,0,0,0.7)"});
            return false;
        }

        if ($('#f_registro').val().trim() === '') {
            Swal.fire({
                title: "Seleccione la fecha en que obtuvo su ficha para el examen de admisión",
                width: "60%",
                icon: "warning",
                confirmButtonColor: '#550100',
                backdrop: "rgba(85,0,0,0.7)"
            });
            return false;
        }


        if ($('#fnacimiento').val().trim() === '') {
            Swal.fire({
                title: "Seleccione su Fecha de Nacimiento",
                width: "40%",
                icon: "warning",
                confirmButtonColor: '#550100',
                backdrop: "rgba(85,0,0,0.7)"
            });
            return false;
        }


        if ($('#sexo').val().trim() === '') {
            Swal.fire({
                title: alertaSexo,
                icon: "warning",
                confirmButtonColor: '#000155',
                backdrop: "rgba(0,1,85,0.7)"
            });
            return false;
        }

        if (!$("input[name='indigena']:radio").is(":checked")) {
            Swal.fire({title: alerta2, icon: "warning", confirmButtonColor: '#000155', backdrop: "rgba(0,1,85,0.7)"});
            return false;
        }

        if (!$("input[name='estado_civil']:radio").is(":checked")) {
            Swal.fire({title: alerta3, icon: "warning", confirmButtonColor: '#000155', backdrop: "rgba(0,1,85,0.7)"});
            return false;
        }

        if ($('#estado').val().trim() === '') {
            Swal.fire({title: alerta4, icon: "warning", confirmButtonColor: '#000155', backdrop: "rgba(0,1,85,0.7)"});
            return false;
        }

        if ($('#municipio').val().trim() === '--- Seleccione: ---') {
            Swal.fire({title: alerta5, icon: "warning", confirmButtonColor: '#000155', backdrop: "rgba(0,1,85,0.7)"});
            return false;
        }

        if ($('#estado').val().trim() === '2') {
            if ($('#nom_estado').val().trim() === '') {
                Swal.fire({
                    title: alerta6,
                    icon: "warning",
                    confirmButtonColor: '#000155',
                    backdrop: "rgba(0,1,85,0.7)"
                });
                return false;
            }
            if ($('#nom_municipio').val().trim() === '') {
                Swal.fire({
                    title: alerta7,
                    icon: "warning",
                    confirmButtonColor: '#000155',
                    backdrop: "rgba(0,1,85,0.7)"
                });
                return false;
            }
        }

        if (!$("input[name='preparatoria']:radio").is(":checked")) {
            Swal.fire({title: alerta8, icon: "warning", confirmButtonColor: '#000155', backdrop: "rgba(0,1,85,0.7)"});
            return false;
        }

        if ($("input[value='otro']:radio").is(":checked")) {
            if ($('#otro_bach').val().trim() === '') {
                Swal.fire({
                    title: alerta9,
                    icon: "warning",
                    confirmButtonColor: '#000155',
                    backdrop: "rgba(0,1,85,0.7)"
                });
                return false;
            }
        }

        if (!$('.tipo_bach').is(":checked")) {
            Swal.fire({title: alerta10, icon: "warning", confirmButtonColor: '#000155', backdrop: "rgba(0,1,85,0.7)"});
            return false;
        }

        if ($('#preparatoria').val().trim() === '') {
            Swal.fire({title: alerta11, icon: "warning", confirmButtonColor: '#000155', backdrop: "rgba(0,1,85,0.7)"});
            return false;
        }

        if (!$("input[name='carrera']:radio").is(":checked")) {
            Swal.fire({
                title: alert_carrera,
                icon: "warning",
                confirmButtonColor: 'rgba(221,91,0,0.98)',
                backdrop: "rgba(60,59,57,0.7)"
            });
            return false;
        }

        Swal.fire({
            title: tittle_confir,
            text: texto_confir,
            width:"50%",
            type: 'warning',
            icon: "question",
            showCancelButton: true,
            confirmButtonColor: '#19980b',
            cancelButtonColor: '#910018',
            confirmButtonText: 'GUARDAR',
            cancelButtonText: 'CANCELAR',
            backdrop: "rgba(7,44,0,0.7)"

        }).then((result) => {
            if (result.value) {
                $.ajax({
                    url: "php/guardar_alumno.php",
                    type: 'POST',
                    data: form_alumno.serialize(),
                    success: function (respuesta) {
                        swal.fire({
                            position: 'center',
                            icon: 'success',
                            title: (respuesta),
                            showConfirmButton: false,
                            timer: 1500
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
                form_alumno[0].reset()
                $("#generacion").val(generacion)
            }
        });
    })

    $("#login_areas").on("click", function (){
        $("#login_areas").val("")
    })
})


function Confirmar_Acceso(pagina) {
    $("#acceso_area").css({display:"block"})
    paginaAbrir = pagina;
    //console.log(paginaAbrir)
}

function Cerrar_Acceso(e) {
    $('#contenido_area')[0].reset()
    e.preventDefault();
    $("#acceso_area").css({display:"none"})
}

function setLogin(e){
    e.preventDefault();

    if ($('#login_areas').val().trim() === '') {
        Swal.fire({
            title: "Debes ingresar tu\nNúm. de Ficha",
            position: 'top',
            showConfirmButton: false,
            timer: 1500,
            icon: "warning",
            backdrop: "rgba(0,0,0,0)"
        });
        return false;
    } else if ($('#login_areas').val().trim() === yearcpe+"-"+'0000') {
        Swal.fire({
            title: "Ficha no válida",
            position: 'top',
            showConfirmButton: false,
            timer: 700,
            icon: "warning",
            backdrop: "rgba(0,0,0,0)"
        });
        return false;
    } else {
        $.ajax({
            url: "php/login-alumno.php",
            type: 'POST',
            data: $("#contenido_area").serialize()+'&Examen='+paginaAbrir,
            success: function (resultado) {
                let Cookies2 = Cookies.noConflict();
                Cookies2.set('usuAlumno', resultado);
                location.href = paginaAbrir;
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
}

function accesoPostTest(posttest) {
    $("#modal_posttest").css({display:"block"})
    paginaPostTest = posttest;
}

function cerrarPostTest(e) {
    e.preventDefault();
    $('#contenido_posttest')[0].reset()
    $("#modal_posttest").css({display:"none"})
}

function setPostTest(e) {
    e.preventDefault();

    if (areaPostTest.val().trim() === '') {
        Swal.fire({
            title: "Debes ingresar un\nNúm. de Control",
            position: 'top',
            showConfirmButton: false,
            timer: 1000,
            icon: "warning",
            backdrop: "rgba(0,0,0,0)"
        });
        return false;
    } else if (areaPostTest.val().trim() === "0000000") {
        Swal.fire({
            title: "Núm. de Control no válido",
            position: 'top',
            showConfirmButton: false,
            timer: 1000,
            icon: "warning",
            backdrop: "rgba(0,0,0,0)"
        });
        return false;
    } else {
        $.ajax({
            url: "php/login-posttest.php",
            type: 'POST',
            data: $("#contenido_posttest").serialize()+'&PostTest='+paginaPostTest,
            success: function (resultado) {
                let CookiesPostTest = Cookies.noConflict();
                CookiesPostTest.set('Usu-PostTest', resultado);
                location.href = paginaPostTest;
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
}