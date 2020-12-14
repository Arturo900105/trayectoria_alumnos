let reporte_parcial, periodo, t_alumno, nombreTutor, area_de, code;
let num_materia1, num_materia2, num_materia3, num_materia4, num_materia5, num_materia6;
let total_reprobado1, total_reprobado2, total_reprobado3, total_reprobado4, total_reprobado5, total_reprobado6;
let por_reprobado1, por_reprobado2, por_reprobado3, por_reprobado4, por_reprobado5, por_reprobado6;
let CookiesRP;

$(document).ready(function () {
    reporte_parcial = $("#ReporteParcial")
    periodo = $('#periodo')
    nombreTutor = $('#nom_tutor')
    reporte_parcial[0].reset();
    $(".sem_impar, .sem_par, .grupos").hide();

    $(".periodop").on("click", function () {
        $(".sem_grup").val("")
    })

    $('#num_tutoradop, .num-materia, .cajas_numrbd, .num_canalip').on('input', function () {
        this.value = this.value.replace(/[^0-9]/g,'');
    });

    num_materia1 = $("#num_materia1")
    num_materia2 = $("#num_materia2")
    num_materia3 = $("#num_materia3")
    num_materia4 = $("#num_materia4")
    num_materia5 = $("#num_materia5")
    num_materia6 = $("#num_materia6")

    reporte_parcial.on("keyup", function (){
        t_alumno = $("#num_tutoradop").val()

        total_reprobado1 = num_materia1.val()
        total_reprobado2 = num_materia2.val()
        total_reprobado3 = num_materia3.val()
        total_reprobado4 = num_materia4.val()
        total_reprobado5 = num_materia5.val()
        total_reprobado6 = num_materia6.val()

        por_reprobado1 = (total_reprobado1*100)/t_alumno;
        por_reprobado2 = (total_reprobado2*100)/t_alumno;
        por_reprobado3 = (total_reprobado3*100)/t_alumno;
        por_reprobado4 = (total_reprobado4*100)/t_alumno;
        por_reprobado5 = (total_reprobado5*100)/t_alumno;
        por_reprobado6 = (total_reprobado6*100)/t_alumno;

        if (t_alumno === "" || total_reprobado1 === "") {
            $("#por_materia1").val("")
        } else {
            $("#por_materia1").val((Math.round(por_reprobado1*100)/100).toFixed(2))
        }

        if (t_alumno === "" || total_reprobado2 === "") {
            $("#por_materia2").val("")
        } else {
            $("#por_materia2").val((Math.round(por_reprobado2*100)/100).toFixed(2))
        }

        if (t_alumno === "" || total_reprobado3 === "") {
            $("#por_materia3").val("")
        } else {
            $("#por_materia3").val((Math.round(por_reprobado3*100)/100).toFixed(2))
        }

        if (t_alumno === "" || total_reprobado4 === "") {
            $("#por_materia4").val("")
        } else {
            $("#por_materia4").val((Math.round(por_reprobado4*100)/100).toFixed(2))
        }

        if (t_alumno === "" || total_reprobado5 === "") {
            $("#por_materia5").val("")
        } else {
            $("#por_materia5").val((Math.round(por_reprobado5*100)/100).toFixed(2))
        }

        if (t_alumno === "" || total_reprobado6 === "") {
            $("#por_materia6").val("")
        } else {
            $("#por_materia6").val((Math.round(por_reprobado6*100)/100).toFixed(2))
        }
    })

    $("[name=num_becados]").on("keyup", function (){
        let num_becado = $(this).val()
        if (num_becado[0] === "0") {
            $(this).val(num_becado[0])
            $("#becarios").hide().val("")
        } else {
            $("#becarios").show()
        }
    })

    reporte_parcial.on("click", function () {

        if (periodo.val().trim() === "Agosto - Diciembre"){
            $(".sem_impar").show()
            $(".grupos").show()
            $(".sem_par").hide()
            $(".programap").show()

        } else if (periodo.val().trim() === ""){
            $(".sem_impar, .sem_par, .grupos, .programap").hide();
            $(".sem_grup, #programap").val("")

        } else {
            $(".sem_impar").hide()
            $(".grupos").show()
            $(".sem_par").show()
            $(".programap").show()
        }

        if (nombreTutor.val().trim() === ''){
            $("#programap").val("")
        } else {
            switch (nombreTutor.val().trim().split("_")[1]) {
                case 'IGEM': area_de = "Ingeniería en Gestión Empresarial";
                    break;
                case 'IIND': area_de = "Ingeniería Industrial";
                    break;
                case 'ISIC': area_de = "Ingeniería en Sistemas Computacionales";
                    break;
                case 'IBIO': area_de = "Ingeniería Biomédica";
                    break;
                case 'IIAS': area_de = "Ingeniería en Innovación Agrícola Sustentable";
                    break;
                case 'IENR': area_de = "Ingeniería en Energías Renovables";
                    break;
                case 'IFOR': area_de = "Ingeniería Forestal";
                    break;
                case 'IAGR': area_de = "Ingeniería en Agronomía";
                    break;
            }
            $("#programap").val(area_de)
        }

    })


    //EVENTO DEL BOTÓN IMPRIMIR!!!
    $("#imprimirRP").on("click", function (){
        if (periodo.val().trim() === "") {
            Swal.fire({
                title: "Seleccione el periodo a evaluar",
                icon: "warning",
                backdrop: "rgba(0,1,85, 0.5)",
                showConfirmButton: false,
                width: "30%",
                timer: 1500
            });
            return false;

        }

        if (!$("input[name='num_reporte']:radio").is(":checked")) {
            Swal.fire({
                title: "Escoja el número de reporte",
                icon: "warning",
                backdrop: "rgba(0,1,85, 0.5)",
                showConfirmButton: false,
                width: "30%",
                timer: 1500
            });
            return false;

        }

        if ($('#nom_tutor').val().trim() === "") {
            Swal.fire({
                title: "Seleccione su Nombre",
                icon: "warning",
                backdrop: "rgba(0,1,85, 0.5)",
                showConfirmButton: false,
                timer: 1500
            });
            return false;
        }


        if ($('#semestre').val().trim() === "") {
            Swal.fire({
                title: "Seleccione un Semestre",
                icon: "warning",
                backdrop: "rgba(0,1,85, 0.5)",
                showConfirmButton: false,
                timer: 1500
            });
            return false;
        }
        if ($('#grupo').val().trim() === "") {
            Swal.fire({
                title: "Seleccione su Grupo",
                icon: "warning",
                backdrop: "rgba(0,1,85, 0.5)",
                showConfirmButton: false,
                timer: 1500
            });
            return false;
        }


        if ($('#num_tutoradop').val().trim() === "") {
            Swal.fire({
                title: "Ingrese el número total de\nTutorados Asignados",
                icon: "warning",
                backdrop: "rgba(0,1,85, 0.5)",
                showConfirmButton: false,
                timer: 1500
            });
            return false;
        }
        if ($('.materia').val().trim() === "") {
            Swal.fire({
                title: "Ingrese al menos una asignatura\n" +
                    "donde existan estudiantes no acreditados",
                icon: "warning",
                backdrop: "rgba(0,1,85, 0.5)",
                showConfirmButton: false,
                width: "40%",
                timer: 2000
            });
            return false;
        }


        if ($('[name = reuniones]').val().trim() === "") {
            Swal.fire({
                title: "CAMPO VACÍO:\nReuniones efectuadas en el periodo",
                icon: "warning",
                backdrop: "rgba(0,1,85, 0.5)",
                showConfirmButton: false,
                width: "40%",
                timer: 2000
            });
            return false;
        }
        if ($('[name = desertados]').val().trim() === "") {
            Swal.fire({
                title: "CAMPO VACÍO:\nNúmero de estudiantes que desertaron",
                icon: "warning",
                backdrop: "rgba(0,1,85, 0.5)",
                showConfirmButton: false,
                width: "40%",
                timer: 2000
            });
            return false;
        }

        if ($('[name = num_becados]').val().trim() === "") {
            Swal.fire({
                title: "CAMPO VACÍO:\nNúmero de estudiantes becarios",
                icon: "warning",
                backdrop: "rgba(0,1,85, 0.5)",
                showConfirmButton: false,
                width: "40%",
                timer: 2000
            });
            return false;
        } else if (($('[name=num_becados]').val().trim() !== "0")) {
            if (($('#becarios').val().trim() === "")) {
                Swal.fire({
                    title: "CAMPO VACÍO: Tipo de Beca",
                    icon: "warning",
                    backdrop: "rgba(0,1,85, 0.5)",
                    showConfirmButton: false,
                    width: "30%",
                    timer: 2000
                });
                return false;
            }
        }


        if ($('[name = num_canalip1]').val().trim() === "") {
            Swal.fire({
                title: "CAMPO VACÍO!!!" +
                    "\nNúmero de canalizaciones a asesoría pares",
                icon: "warning",
                backdrop: "rgba(0,1,85, 0.5)",
                showConfirmButton: false,
                width: "40%",
                timer: 2000
            });
            return false;
        }
        if ($('[name = num_canalip2]').val().trim() === "") {
            Swal.fire({
                title: "CAMPO VACÍO!!!" +
                    "\nNúmero de canalizaciones al área de psicología",
                icon: "warning",
                backdrop: "rgba(0,1,85, 0.5)",
                showConfirmButton: false,
                width: "40%",
                timer: 2000
            });
            return false;
        }
        if ($('[name = num_canalip3]').val().trim() === "") {
            Swal.fire({
                title: "CAMPO VACÍO!!!" +
                    "\nNúmero de canalizaciones al consultorio médico",
                icon: "warning",
                backdrop: "rgba(0,1,85, 0.5)",
                showConfirmButton: false,
                width: "40%",
                timer: 2000
            });
            return false;
        }
        if ($('[name = num_canalip4]').val().trim() === "") {
            Swal.fire({
                title: "CAMPO VACÍO!!!" +
                    "\nNúmero de canalizaciones al área de pedagogía",
                icon: "warning",
                backdrop: "rgba(0,1,85, 0.5)",
                showConfirmButton: false,
                width: "40%",
                timer: 2000
            });
            return false;
        }


        if ($('[name = problematica]').val().trim() === "") {
            Swal.fire({
                title: "CAMPO VACÍO!!!" +
                    "\nProblemática general detectada en el periodo",
                icon: "warning",
                backdrop: "rgba(0,1,85, 0.5)",
                showConfirmButton: false,
                width: "40%",
                timer: 2000
            });
            return false;
        }
        if ($('[name = necesidades]').val().trim() === "") {
            Swal.fire({
                title: "CAMPO VACÍO!!!" +
                    "\nNecesidades tutoriales específicas",
                icon: "warning",
                backdrop: "rgba(0,1,85, 0.5)",
                showConfirmButton: false,
                width: "40%",
                timer: 2000
            });
            return false;
        }
        if ($('[name = desertores]').val().trim() === "") {
            Swal.fire({
                title: "CAMPO VACÍO!!!" +
                    "\nEn caso de existir desertores describir el motivo",
                icon: "warning",
                backdrop: "rgba(0,1,85, 0.5)",
                showConfirmButton: false,
                width: "40%",
                timer: 2000
            });
            return false;
        }
        if ($('[name = recobser]').val().trim() === "") {
            Swal.fire({
                title: "CAMPO VACÍO!!!" +
                    "\nRecomendaciones/Observaciones",
                icon: "warning",
                backdrop: "rgba(0,1,85, 0.5)",
                showConfirmButton: false,
                width: "40%",
                timer: 2000
            });
            return false;
        }

        Swal.fire({
            title: "¿Imprimir Reporte Parcial?",
            text: "Después, para modificar errores tendrá que acudir al área de Tutoría Académica",
            type: 'warning',
            icon: "question",
            showCancelButton: true,
            confirmButtonColor: '#19980b',
            cancelButtonColor: '#910018',
            confirmButtonText: 'IMPRIMIR',
            cancelButtonText: 'CANCELAR',
            width: "40%",
            backdrop: "rgba(0,1,85, 0.5)",

        }).then((result) => {
            if (result.value) {
                $.ajax({
                    url: "php/form_reportparcial.php",
                    type: 'POST',
                    data: reporte_parcial.serialize(),
                    success: function (id_rparcial) {
                        CookiesRP = Cookies.noConflict();
                        CookiesRP.set('idRParcial', id_rparcial)
                        swal.fire({
                            position: 'center',
                            icon: 'success',
                            title: "REPORTE PARCIAL\nLISTO PARA IMPRIMIR",
                            showConfirmButton: false,
                            timer: 1500
                        }).then(()=>{
                            history.back();
                            let id_reporteParcial = $("#id_rparcial_href")
                            id_reporteParcial.attr("href", 'documentos/reporte_parcial.php?id_rparcial='+id_rparcial);
                            id_reporteParcial[0].click();
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
                reporte_parcial[0].reset();
            }
        });
    })


    //EVENTO DEL BOTÓN GUARDAR!!!
    reporte_parcial.submit(function (e) {
        e.preventDefault()

        if (periodo.val().trim() === "") {
            Swal.fire({
                title: "Seleccione el periodo a evaluar",
                icon: "warning",
                backdrop: "rgba(0,1,85, 0.5)",
                showConfirmButton: false,
                width: "30%",
                timer: 1500
            });
            return false;

        }

        if (!$("input[name='num_reporte']:radio").is(":checked")) {
            Swal.fire({
                title: "Escoja el número de reporte",
                icon: "warning",
                backdrop: "rgba(0,1,85, 0.5)",
                showConfirmButton: false,
                width: "30%",
                timer: 1500
            });
            return false;

        }

        if ($('#nom_tutor').val().trim() === "") {
            Swal.fire({
                title: "Seleccione su Nombre",
                icon: "warning",
                backdrop: "rgba(0,1,85, 0.5)",
                showConfirmButton: false,
                timer: 1500
            });
            return false;
        }


        if ($('#semestre').val().trim() === "") {
            Swal.fire({
                title: "Seleccione un Semestre",
                icon: "warning",
                backdrop: "rgba(0,1,85, 0.5)",
                showConfirmButton: false,
                timer: 1500
            });
            return false;
        }
        if ($('#grupo').val().trim() === "") {
            Swal.fire({
                title: "Seleccione su Grupo",
                icon: "warning",
                backdrop: "rgba(0,1,85, 0.5)",
                showConfirmButton: false,
                timer: 1500
            });
            return false;
        }


        if ($('#num_tutoradop').val().trim() === "") {
            Swal.fire({
                title: "Ingrese el número total de\nTutorados Asignados",
                icon: "warning",
                backdrop: "rgba(0,1,85, 0.5)",
                showConfirmButton: false,
                timer: 1500
            });
            return false;
        }
        if ($('.materia').val().trim() === "") {
            Swal.fire({
                title: "Ingrese al menos una asignatura\n" +
                       "donde existan estudiantes no acreditados",
                icon: "warning",
                backdrop: "rgba(0,1,85, 0.5)",
                showConfirmButton: false,
                width: "40%",
                timer: 2000
            });
            return false;
        }


        if ($('[name = reuniones]').val().trim() === "") {
            Swal.fire({
                title: "CAMPO VACÍO:\nReuniones efectuadas en el periodo",
                icon: "warning",
                backdrop: "rgba(0,1,85, 0.5)",
                showConfirmButton: false,
                width: "40%",
                timer: 2000
            });
            return false;
        }
        if ($('[name = desertados]').val().trim() === "") {
            Swal.fire({
                title: "CAMPO VACÍO:\nNúmero de estudiantes que desertaron",
                icon: "warning",
                backdrop: "rgba(0,1,85, 0.5)",
                showConfirmButton: false,
                width: "40%",
                timer: 2000
            });
            return false;
        }

        if ($('[name = num_becados]').val().trim() === "") {
            Swal.fire({
                title: "CAMPO VACÍO:\nNúmero de estudiantes becarios",
                icon: "warning",
                backdrop: "rgba(0,1,85, 0.5)",
                showConfirmButton: false,
                width: "40%",
                timer: 2000
            });
            return false;
        } else if (($('[name=num_becados]').val().trim() !== "0")) {
            if (($('#becarios').val().trim() === "")) {
                Swal.fire({
                    title: "CAMPO VACÍO: Tipo de Beca",
                    icon: "warning",
                    backdrop: "rgba(0,1,85, 0.5)",
                    showConfirmButton: false,
                    width: "30%",
                    timer: 2000
                });
                return false;
            }
        }

        if ($('[name = num_canalip1]').val().trim() === "") {
            Swal.fire({
                title: "CAMPO VACÍO!!!" +
                    "\nNúmero de canalizaciones a asesoría pares",
                icon: "warning",
                backdrop: "rgba(0,1,85, 0.5)",
                showConfirmButton: false,
                width: "40%",
                timer: 2000
            });
            return false;
        }
        if ($('[name = num_canalip2]').val().trim() === "") {
            Swal.fire({
                title: "CAMPO VACÍO!!!" +
                    "\nNúmero de canalizaciones al área de psicología",
                icon: "warning",
                backdrop: "rgba(0,1,85, 0.5)",
                showConfirmButton: false,
                width: "40%",
                timer: 2000
            });
            return false;
        }
        if ($('[name = num_canalip3]').val().trim() === "") {
            Swal.fire({
                title: "CAMPO VACÍO!!!" +
                    "\nNúmero de canalizaciones al consultorio médico",
                icon: "warning",
                backdrop: "rgba(0,1,85, 0.5)",
                showConfirmButton: false,
                width: "40%",
                timer: 2000
            });
            return false;
        }
        if ($('[name = num_canalip4]').val().trim() === "") {
            Swal.fire({
                title: "CAMPO VACÍO!!!" +
                    "\nNúmero de canalizaciones al área de pedagogía",
                icon: "warning",
                backdrop: "rgba(0,1,85, 0.5)",
                showConfirmButton: false,
                width: "40%",
                timer: 2000
            });
            return false;
        }


        if ($('[name = problematica]').val().trim() === "") {
            Swal.fire({
                title: "CAMPO VACÍO!!!" +
                       "\nProblemática general detectada en el periodo",
                icon: "warning",
                backdrop: "rgba(0,1,85, 0.5)",
                showConfirmButton: false,
                width: "40%",
                timer: 2000
            });
            return false;
        }
        if ($('[name = necesidades]').val().trim() === "") {
            Swal.fire({
                title: "CAMPO VACÍO!!!" +
                       "\nNecesidades tutoriales específicas",
                icon: "warning",
                backdrop: "rgba(0,1,85, 0.5)",
                showConfirmButton: false,
                width: "40%",
                timer: 2000
            });
            return false;
        }
        if ($('[name = desertores]').val().trim() === "") {
            Swal.fire({
                title: "CAMPO VACÍO!!!" +
                       "\nEn caso de existir desertores describir el motivo",
                icon: "warning",
                backdrop: "rgba(0,1,85, 0.5)",
                showConfirmButton: false,
                width: "40%",
                timer: 2000
            });
            return false;
        }
        if ($('[name = recobser]').val().trim() === "") {
            Swal.fire({
                title: "CAMPO VACÍO!!!" +
                       "\nRecomendaciones/Observaciones",
                icon: "warning",
                backdrop: "rgba(0,1,85, 0.5)",
                showConfirmButton: false,
                width: "40%",
                timer: 2000
            });
            return false;
        }

        Swal.fire({
            title: "¿Regisrar Reporte Parcial?",
            text: "Después, para modificar errores tendrá que acudir al área de Tutoría Académica",
            type: 'warning',
            icon: "question",
            showCancelButton: true,
            confirmButtonColor: '#19980b',
            cancelButtonColor: '#910018',
            confirmButtonText: 'GUARDAR',
            cancelButtonText: 'CANCELAR',
            width: "40%",
            backdrop: "rgba(0,1,85, 0.5)",

        }).then((result) => {
            if (result.value) {
                $.ajax({
                    url: "php/form_reportparcial.php",
                    type: 'POST',
                    data: reporte_parcial.serialize(),
                    success: function (id_rparcial) {
                        CookiesRP = Cookies.noConflict();
                        CookiesRP.set('idRParcial', id_rparcial)
                        swal.fire({
                            position: 'center',
                            icon: 'success',
                            title: "REPORTE PARCIAL GUARDADO EXITOSAMENTE!!!",
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
                reporte_parcial[0].reset();
            }
        });

    })
})