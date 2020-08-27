let fecha, mes, dia, year;
let digito1, digito2, digito3;
let impar, par;
let form_canalizacion;
let Cookies3;

window.onload = function(){

    fecha = new Date(); //Fecha actual

    mes = fecha.getMonth()+1; //obteniendo mes
    dia = fecha.getDate(); //obteniendo dia
    year = fecha.getFullYear(); //obteniendo año

    if(dia < 10)
        dia = '0' + dia; //agrega cero si el menor de 10

    if(mes < 10)
        mes = '0' + mes; //agrega cero si el menor de 10

    $("#fecha-hoy").val(dia+"-"+mes+"-"+year)

    //console.log(year.toString().substr(2));
};


$(document).ready(function () {
    form_canalizacion = $("#canalizacion")
    impar = "Agosto - Diciembre";
    par = "Enero - Junio";

    form_canalizacion[0].reset()
    $("#fecha-hoy").val(dia+"-"+mes+"-"+year)


    form_canalizacion.on('click', function () {
        digito2 = new Date().getFullYear().toString().substr(-2)
        digito3 = "000";

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
                            title: "CANALIZACIÓN GUARDADA EXITOSAMENTE!!!",
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
                //form_canalizacion[0].reset();
                //$("#fecha-hoy").val(dia+"-"+mes+"-"+year)
            }
        });

    })

})
