let fecha, hoy, mes, dia, year, dias_semana, nom_meses;
let digito1, digito2, digito3;
let impar, par;
let form_canalizacion;
let Cookies3;

$(document).ready(function () {
    fecha = new Date(); //Fecha actual
    hoy = fecha.getDay(); //Obteniendo el Día de la semana
    dia = fecha.getDate(); //Obteniendo Número del día
    mes = fecha.getMonth()+1; //Obteniendo el  Mes del año
    year = fecha.getFullYear(); //Obteniendo el  Año

    dias_semana = ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"];
    nom_meses = ["", "Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];

    form_canalizacion = $("#canalizacion")
    impar = "Agosto - Diciembre";
    par = "Enero - Junio";

    form_canalizacion[0].reset()
    $("#fecha_hoy").val(dias_semana[hoy]+", "+dia+" de "+nom_meses[mes]+" de "+year)


    form_canalizacion.on('click', function () {
        digito2 = year.toString().substr(-2)
        digito3 = "...";

        if ($("#igem:radio").is(":checked")) {
            digito1 = "01"
            $("#folio").val(digito1+digito2+digito3)

        } else if ($("#iind:radio").is(":checked")) {
            digito1 = "02"
            $("#folio").val(digito1+digito2+digito3)

        } else if ($("#isic:radio").is(":checked")) {
            digito1 = "03"
            $("#folio").val(digito1+digito2+digito3)

        } else if ($("#ibio:radio").is(":checked")) {
            digito1 = "04"
            $("#folio").val(digito1+digito2+digito3)

        } else if ($("#iias:radio").is(":checked")) {
            digito1 = "05"
            $("#folio").val(digito1+digito2+digito3)

        } else if ($("#ienr:radio").is(":checked")) {
            digito1 = "06"
            $("#folio").val(digito1+digito2+digito3)

        } else if ($("#ifor:radio").is(":checked")) {
            digito1 = "07"
            $("#folio").val(digito1+digito2+digito3)

        } else if ($("#iagr:radio").is(":checked")) {
            digito1 = "08"
            $("#folio").val(digito1+digito2+digito3)

        }

        if ($('#semestre').val().trim() === ''){
            $("#ciclo_escolar").val("")
        } else if ($("#semestre").val().trim() === '1' ||
                   $("#semestre").val().trim() === '3' ||
                   $("#semestre").val().trim() === '5' ||
                   $("#semestre").val().trim() === '7' ||
                   $("#semestre").val().trim() === '9' ||
                   $("#semestre").val().trim() === '11') {
                           $("#ciclo_escolar").val(impar)
                   } else {
                            $("#ciclo_escolar").val(par)
                        }

        if ($("#otra_canalizacion:radio").is(":checked")) {
            $("#nombre_canalizacion").show()
        } else {
            $("#nombre_canalizacion").hide().val("")
        }

    })


    //Evento del botón IMPRIMIR
    $("#imprimir").on("click", function (){
        if ($('#nom_alumno').val().trim() === "") {
            Swal.fire({title: "Porfavor,\nIngrese el nombre del Estudiante",
                icon: "warning",
                confirmButtonColor: '#000155',
                backdrop: "rgba(0,1,85,0.7)"});
            return false;
        }

        if (!$("input[name='carrera']:radio").is(":checked")) {
            Swal.fire({title: "Porfavor,\nSeleccione una Carrera",
                icon: "warning",
                confirmButtonColor: '#000155',
                backdrop: "rgba(0,1,85,0.7)"});
            return false;
        }

        if ($('#num_control').val().trim() === "") {
            Swal.fire({title: "Porfavor,\nIngrese el Número de Control",
                icon: "warning",
                confirmButtonColor: '#000155',
                backdrop: "rgba(0,1,85,0.7)"});
            return false;
        }

        if ($('#semestre').val().trim() === "") {
            Swal.fire({title: "Porfavor,\nSeleccione el Semestre",
                icon: "warning",
                confirmButtonColor: '#000155',
                backdrop: "rgba(0,1,85,0.7)"});
            return false;
        }

        if (!$("input[name='tipo_canalizacion']:radio").is(":checked")) {
            Swal.fire({title: "Porfavor,\nEscoja el Tipo de Canalización",
                icon: "warning",
                confirmButtonColor: '#000155',
                backdrop: "rgba(0,1,85,0.7)"});
            return false;
        } else if ($("#otra_canalizacion:radio").is(":checked")) {
            if ($('#nombre_canalizacion').val().trim() === ""){
                Swal.fire({title: "Porfavor,\nEscriba el Tipo de Canalización",
                    icon: "warning",
                    confirmButtonColor: '#000155',
                    backdrop: "rgba(0,1,85,0.7)"});
                return false;
            }
        }

        if ($('#problematica').val().trim() === "") {
            Swal.fire({
                icon: "warning",
                title: "Porfavor,\nDescriba el problema canalizado",
                showClass: {
                    popup: 'animate__animated animate__fadeInLeft'
                },
                hideClass: {
                    popup: 'animate__animated animate__fadeOutRight'
                },
                confirmButtonColor: '#000155',
            })
            return false;
        }

        if ($('#firma1').val().trim() === "") {
            Swal.fire({
                icon: "warning",
                title: "Ingrese el nombre del\nTutor o Profesor\nque firmará",
                showClass: {
                    popup: 'animate__animated animate__fadeInDown'
                },
                hideClass: {
                    popup: 'animate__animated animate__fadeOutDown'
                }
            })
            return false;
        }

        if ($('#firma2').val().trim() === "") {
            Swal.fire({
                icon: "warning",
                title: "Ingrese el nombre\ndel encargado(a) de la\nCoordinación de Tutorías\nque firmará",
                showClass: {
                    popup: 'animate__animated animate__fadeInDown'
                },
                hideClass: {
                    popup: 'animate__animated animate__fadeOutDown'
                }
            })
            return false;
        }

        if ($('#firma3').val().trim() === "") {
            Swal.fire({
                icon: "warning",
                title: "Ingrese el nombre\ndel encargado(a) del\nÁrea Canalizada\nque firmará",
                showClass: {
                    popup: 'animate__animated animate__fadeInUp'
                },
                hideClass: {
                    popup: 'animate__animated animate__fadeOutUp'
                }
            })
            return false;
        }

        Swal.fire({
            icon: "question",
            title: "¿Imprimir Canalización?",
            text: "Después, no podrá realizar cambios en el formato",
            type: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#19980b',
            cancelButtonColor: '#910018',
            confirmButtonText: 'IMPRIMIR',
            cancelButtonText: 'CANCELAR',
            backdrop: "rgba(35,220,0,0.7)"

        }).then((result) => {
            if (result.value) {
                $.ajax({
                    url: "php/form_canalizacion.php",
                    type: 'POST',
                    data: form_canalizacion.serialize(),
                    success: function (folio) {
                        Cookies3 = Cookies.noConflict();
                        Cookies3.set('numFolio', folio);
                        swal.fire({
                            position: 'center',
                            icon: 'success',
                            title: "CANALIZACIÓN LISTA PARA IMPRIMIR",
                            showConfirmButton: false,
                            timer: 1500
                        }).then(()=>{
                            history.back();
                            let id_canalizacion = $("#id_canali_href")
                            id_canalizacion.attr("href", 'documentos/canalizacion.php?folio='+ folio);
                            id_canalizacion[0].click();
                            //console.log('documentos/canalizacion.php?folio='+ folio)
                            //document.location = 'documentos/canalizacion.php?folio='+ folio;
                        });
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
                form_canalizacion[0].reset();
                $("#fecha_hoy").val(dias_semana[hoy]+", "+dia+" de "+nom_meses[mes]+" de "+year)
            }
        });
    })

    
    //Evento del botón GUARDAR
    form_canalizacion.submit(function (e) {
        e.preventDefault()

        if ($('#nom_alumno').val().trim() === "") {
            Swal.fire({title: "Porfavor,\nIngrese el nombre del Estudiante",
                icon: "warning",
                confirmButtonColor: '#000155',
                backdrop: "rgba(0,1,85,0.7)"});
            return false;
        }

        if (!$("input[name='carrera']:radio").is(":checked")) {
            Swal.fire({title: "Porfavor,\nSeleccione una Carrera",
                icon: "warning",
                confirmButtonColor: '#000155',
                backdrop: "rgba(0,1,85,0.7)"});
            return false;
        }

        if ($('#num_control').val().trim() === "") {
            Swal.fire({title: "Porfavor,\nIngrese el Número de Control",
                icon: "warning",
                confirmButtonColor: '#000155',
                backdrop: "rgba(0,1,85,0.7)"});
            return false;
        }

        if ($('#semestre').val().trim() === "") {
            Swal.fire({title: "Porfavor,\nSeleccione el Semestre",
                icon: "warning",
                confirmButtonColor: '#000155',
                backdrop: "rgba(0,1,85,0.7)"});
            return false;
        }

        if (!$("input[name='tipo_canalizacion']:radio").is(":checked")) {
            Swal.fire({title: "Porfavor,\nEscoja el Tipo de Canalización",
                icon: "warning",
                confirmButtonColor: '#000155',
                backdrop: "rgba(0,1,85,0.7)"});
            return false;
        } else if ($("#otra_canalizacion:radio").is(":checked")) {
            if ($('#nombre_canalizacion').val().trim() === ""){
                Swal.fire({title: "Porfavor,\nEscriba el Tipo de Canalización",
                    icon: "warning",
                    confirmButtonColor: '#000155',
                    backdrop: "rgba(0,1,85,0.7)"});
                return false;
            }
        }

        if ($('#problematica').val().trim() === "") {
            Swal.fire({
                icon: "warning",
                title: "Porfavor,\nDescriba el problema canalizado",
                showClass: {
                    popup: 'animate__animated animate__fadeInLeft'
                },
                hideClass: {
                    popup: 'animate__animated animate__fadeOutRight'
                },
                confirmButtonColor: '#000155',
            })
            return false;
        }

        if ($('#firma1').val().trim() === "") {
            Swal.fire({
                icon: "warning",
                title: "Ingrese el nombre del\nTutor o Profesor\nque firmará",
                showClass: {
                    popup: 'animate__animated animate__fadeInDown'
                },
                hideClass: {
                    popup: 'animate__animated animate__fadeOutDown'
                }
            })
            return false;
        }

        if ($('#firma2').val().trim() === "") {
            Swal.fire({
                icon: "warning",
                title: "Ingrese el nombre\ndel encargado(a) de la\nCoordinación de Tutorías\nque firmará",
                showClass: {
                    popup: 'animate__animated animate__fadeInDown'
                },
                hideClass: {
                    popup: 'animate__animated animate__fadeOutDown'
                }
            })
            return false;
        }

        if ($('#firma3').val().trim() === "") {
            Swal.fire({
                icon: "warning",
                title: "Ingrese el nombre\ndel encargado(a) del\nÁrea Canalizada\nque firmará",
                showClass: {
                    popup: 'animate__animated animate__fadeInUp'
                },
                hideClass: {
                    popup: 'animate__animated animate__fadeOutUp'
                }
            })
            return false;
        }

        Swal.fire({
            icon: "question",
            title: "¿Guardar Canalización?",
            text: "Después, no podrá realizar cambios en el formato",
            type: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#19980b',
            cancelButtonColor: '#910018',
            confirmButtonText: 'GUARDAR',
            cancelButtonText: 'CANCELAR',
            backdrop: "rgba(35,220,0,0.7)"

        }).then((result) => {
            if (result.value) {
                $.ajax({
                    url: "php/form_canalizacion.php",
                    type: 'POST',
                    data: form_canalizacion.serialize(),
                    success: function (folio) {
                        Cookies3 = Cookies.noConflict();
                        Cookies3.set('numFolio', folio);

                        swal.fire({
                            position: 'center',
                            icon: 'success',
                            title: "CANALIZACIÓN GUARDADA\nEXITOSAMENTE!!!",
                            showConfirmButton: false,
                            timer: 1500
                        }).then(()=>{
                            history.back();
                        });
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
                form_canalizacion[0].reset();
                $("#fecha_hoy").val(dias_semana[hoy]+", "+dia+" de "+nom_meses[mes]+" de "+year)
            }
        });

    })

})
