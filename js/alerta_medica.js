let form_medica, telefono;

function filterFloat(evt,input) {
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
    let preg = /^([0-9]+\.?[0-9]{0,2})$/;
    if(preg.test(__val__) === true) {
        return true;
    } else {
        return false;
    }
}


$(document).ready(function () {
    form_medica = $("#medica_alumno")
    telefono = $('.tel_em')
    form_medica[0].reset()
    $("#otro_hered, .label_toxic, .toxicomanias, .embarazo, .ejercicio, .alergias, .diab_tipo, .tipos").hide()

    telefono.on('input', function () {
        this.value = this.value.replace(/[^0-9]/g,'');
        if (!this.value.replace(/[^0-9]/g,'')){
            Swal.fire({
                title: 'Ingresa solo números sin:\nEspacios, Parentecis, ni Guiones',
                timer: 2500,
                width: "40%",
                showConfirmButton: false,
                icon:"warning",
                backdrop: "rgba(0,0,0,0.0)",
                background:"#260101"
            });
            return false;
        }
    })

    $('[name=tel_obligatorio]').on("click", function (){
        $('[name=tel_obligatorio]').val("")
    })
    $('[name=tel_opcional]').on("click", function (){
        $('[name=tel_opcional]').val("")
    })

    $('#otro_hered').on('input', function (e) {
        if (!/^[ a-záéíóúüñ]*$/i.test(this.value)) {
            this.value = this.value.replace(/[^ a-záéíóúüñ]+/ig,"");
        }
    });

    $('.toxicomanias, .embarazo, .ejercicio, .alergias').on('input', function (e) {
        if (!/^[ a-z0-9áéíóúüñ]*$/i.test(this.value)) {
            this.value = this.value.replace(/[^ a-z0-9áéíóúüñ]+/ig,"");
        }
    });

    $("#peso").on("click", function (){
        $("#peso").val("")
    })
    $("#talla").on("click", function (){
        $("#talla").val("")
    })


    form_medica.on("click", function () {

        if ($("#otro_ante").is(":checked")){
            $("#otro_hered").show()
        } else {
            $("#otro_hered").hide().val("")
        }

        if ($("[name='toxi']:checked").val() === "SÍ"){
            $(".label_toxic, .toxicomanias").show()
        } else {
            $(".toxics").prop("checked", false)
            $(".label_toxic, .toxicomanias").hide().val("")

        }

        if ($("[name='embarazo']:checked").val() === "SÍ"){
            $(".embarazo").show()
        } else {
            $(".embarazo").hide().val("")
        }

        if ($("[name='act_fisica']:checked").val() === "SÍ"){
            $(".ejercicio").show()
        } else {
            $(".ejercicio").hide().val("")
        }

        if ($("[name='alergias']:checked").val() === "SÍ"){
            $(".alergias").show()
        } else {
            $(".alergias").hide().val("")
        }

        if ($("[name='diabetes']:checked").val() === "SÍ"){
            $(".diab_tipo, .tipos").show()
        } else {
            $(".diab_tipo, .tipos").hide().val("")
        }
    })

    form_medica.submit(function (e){
        e.preventDefault();

        if ($("[name=tel_obligatorio]").val().trim() === "") {
            Swal.fire({
                title: "Ingresa un teléfono oblogatorio",
                icon: "warning",
                showConfirmButton: false,
                backdrop: "rgba(0,0,0,0.0)",
                timer: 1000
            });
            return false;
        }

        if ($("#peso").val().trim() === "") {
            Swal.fire({
                title: "Campo Vacío!!!\nPeso",
                icon: "warning",
                showConfirmButton: false,
                backdrop: "rgba(0,0,0,0.0)",
                timer: 1000
            });
            return false;
        } else if ($("#talla").val().trim() === "") {
            Swal.fire({
                title: "Campo Vacío!!!\nTalla (estatura)",
                icon: "warning",
                showConfirmButton: false,
                backdrop: "rgba(0,0,0,0.0)",
                timer: 1000
            });
            return false;
        } else if ($("#sangre").val().trim() === "") {
            Swal.fire({
                title: "Seleccione su Tipo de Sangre",
                icon: "warning",
                showConfirmButton: false,
                backdrop: "rgba(0,0,0,0.0)",
                timer: 1000
            });
            return false;
        }

        if (!$(".ante_hered").is(":checked")){
            Swal.fire({
                title: "Seleccione una opción de:\nAntecedente Heredofamiliar",
                icon: "warning",
                showConfirmButton: false,
                backdrop: "rgba(0,0,0,0.0)",
                timer: 2000
            });
            return false;
        }

        if ($("#otro_ante").is(":checked")){
            if ($("#otro_hered").val().trim() === "") {
                Swal.fire({
                    title: "Especifíque:\nAntecedente Heredofamiliar",
                    icon: "warning",
                    showConfirmButton: false,
                    backdrop: "rgba(0,0,0,0.0)",
                    timer: 2000
                });
                return false;
            }
        }


        if (!$("[name='toxi']:radio").is(":checked")) {
            Swal.fire({
                title: "Toxicomanías sin contestar",
                icon: "warning",
                showConfirmButton: false,
                backdrop: "rgba(0,0,0,0.0)",
                timer: 2000
            });
            return false;
        } else {
            if ($("[name='toxi']:checked").val() === "SÍ"){
                if (!$(".toxics").is(":checked")){
                    Swal.fire({
                        title: "Seleccione algunas de sus Toxicomanías",
                        icon: "warning",
                        showConfirmButton: false,
                        backdrop: "rgba(0,0,0,0.0)",
                        timer: 2000
                    });
                    return false;
                } else if ($(".toxicomanias").val().trim() === "") {
                    Swal.fire({
                        title: "¿Qué Frecuencia?",
                        icon: "warning",
                        showConfirmButton: false,
                        backdrop: "rgba(0,0,0,0.0)",
                        timer: 2000
                    });
                    return false;
                }
            }
        }

        if (mostrar.sexo === "Femenino"){
            if (!$("[name='embarazo']:radio").is(":checked")){
                Swal.fire({
                    title: "Embarazo sin contestar",
                    icon: "warning",
                    showConfirmButton: false,
                    backdrop: "rgba(0,0,0,0.0)",
                    timer: 2000
                });
                return false;
            } else {
                if ($("[name='embarazo']:checked").val() === "SÍ"){
                    if ($(".embarazo").val().trim() === "") {
                        Swal.fire({
                            title: "¿Cuántos meses o semanas tiene de Embarazo?",
                            width: "40%",
                            icon: "warning",
                            showConfirmButton: false,
                            backdrop: "rgba(0,0,0,0.0)",
                            timer: 2000
                        });
                        return false;
                    }
                }
            }
        }

        if (!$("[name='act_fisica']:radio").is(":checked")) {
            Swal.fire({
                title: "Actividad Fisica sin contestar",
                icon: "warning",
                showConfirmButton: false,
                backdrop: "rgba(0,0,0,0.0)",
                timer: 2000
            });
            return false;
        } else {
            if ($("[name='act_fisica']:checked").val() === "SÍ"){
                if ($("[name=esp_act]").val().trim() === "") {
                    Swal.fire({
                        title: "Especifica Actividad",
                        icon: "warning",
                        showConfirmButton: false,
                        backdrop: "rgba(0,0,0,0.0)",
                        timer: 2000
                    });
                    return false;
                } else if ($("[name=tiempo_act]").val().trim() === "") {
                    Swal.fire({
                        title: "¿Cuántas Horas?",
                        icon: "warning",
                        showConfirmButton: false,
                        backdrop: "rgba(0,0,0,0.0)",
                        timer: 2000
                    });
                    return false;
                }
            }
        }


        if (!$("[name='alergias']:radio").is(":checked")) {
            Swal.fire({
                title: "Alergias sin respuesta",
                icon: "warning",
                showConfirmButton: false,
                backdrop: "rgba(0,0,0,0.0)",
                timer: 2000
            });
            return false;
        } else {
            if ($("[name='alergias']:checked").val() === "SÍ"){
                if ($(".alergias").val().trim() === ""){
                    Swal.fire({
                        title: "Especifique sus Alergias",
                        icon: "warning",
                        showConfirmButton: false,
                        backdrop: "rgba(0,0,0,0.0)",
                        timer: 2000
                    });
                    return false;
                }
            }
        }

        if (!$("input[name='qui_cir']:radio").is(":checked")) {
            Swal.fire({
                title: "Quirúrgicos/Cirugías\nsin respuesta",
                icon: "warning",
                showConfirmButton: false,
                backdrop: "rgba(0,0,0,0.0)",
                timer: 2000
            });
            return false;
        }
        if (!$("input[name='transfusionales']:radio").is(":checked")) {
            Swal.fire({
                title: "Transfusionales sin respuesta",
                icon: "warning",
                showConfirmButton: false,
                backdrop: "rgba(0,0,0,0.0)",
                timer: 2000
            });
            return false;
        }
        if (!$("input[name='diabetes']:radio").is(":checked")) {
            Swal.fire({
                title: "Diabetes sin respuesta",
                icon: "warning",
                showConfirmButton: false,
                backdrop: "rgba(0,0,0,0.0)",
                timer: 2000
            });
            return false;
        } else {
            if ($("[name='diabetes']:checked").val() === "SÍ"){
                if ($(".diab_tipo").val().trim() === ""){
                    Swal.fire({
                        title: "Seleccione tipo de Diabetes",
                        icon: "warning",
                        showConfirmButton: false,
                        backdrop: "rgba(0,0,0,0.0)",
                        timer: 2000
                    });
                    return false;
                }
            }
        }

        if (!$("input[name='hipertension']:radio").is(":checked")) {
            Swal.fire({
                title: "Hipertensión sin respuesta",
                icon: "warning",
                showConfirmButton: false,
                backdrop: "rgba(0,0,0,0.0)",
                timer: 2000
            });
            return false;
        }
        if (!$("input[name='convulsiones']:radio").is(":checked")) {
            Swal.fire({
                title: "Convulsiones sin respuesta",
                icon: "warning",
                showConfirmButton: false,
                backdrop: "rgba(0,0,0,0.0)",
                timer: 2000
            });
            return false;
        }
        if (!$("input[name='asma']:radio").is(":checked")) {
            Swal.fire({
                title: "Asma sin respuesta",
                icon: "warning",
                showConfirmButton: false,
                backdrop: "rgba(0,0,0,0.0)",
                timer: 2000
            });
            return false;
        }

        Swal.fire({
            title: "¿Guardar Examen Médico?",
            text: "Descpués, ya no podrá hacer cambios en el Examen Médico",
            type: 'warning',
            icon: "question",
            width: "40%",
            showCancelButton: true,
            confirmButtonColor: '#19980b',
            cancelButtonColor: '#910018',
            confirmButtonText: 'GUARDAR',
            cancelButtonText: 'CANCELAR',
            backdrop: "rgba(7,44,0,0.7)"

        }).then((result) => {
            if (result.value) {
                $.ajax({
                    url: "php/datos_medica.php",
                    type: 'POST',
                    data: form_medica.serialize(),
                    success: function (respuesta) {
                        swal.fire({
                            position: 'center',
                            icon: 'success',
                            title: (respuesta),
                            showConfirmButton: false,
                            timer: 1500
                        }).then(
                            setTimeout("location.href ='php/terminar_alumno.php'",2000)
                        )
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
                form_medica[0].reset()
                Cookies2.remove('ALUMNO')
                Cookies2.remove('usuAlumno')
            }
        })
    })
})