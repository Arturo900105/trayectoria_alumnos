let reporte_final, periodof, nombreTutorFinal, tf_alumno, area_def;
let numf_materia1, numf_materia2, numf_materia3, numf_materia4, numf_materia5, numf_materia6;
let totalf_reprobado1, totalf_reprobado2, totalf_reprobado3, totalf_reprobado4, totalf_reprobado5, totalf_reprobado6;
let porf_reprobado1, porf_reprobado2, porf_reprobado3, porf_reprobado4, porf_reprobado5, porf_reprobado6;
let CookiesRF;

$(document).ready(function () {
    reporte_final = $("#ReporteFinal")
    periodof = $('#periodofinal')
    nombreTutorFinal = $('#nom_tutorf')
    reporte_final[0].reset();
    $(".sem_imparf, .sem_parf, .grupos").hide();

    $(".periodof").on("click", function () {
        $(".sem_grupf").val("")
    })

    $('#num_tutoradof, .num_materiaf, .cajasf_numrbd, .num_canalif').on('input', function () {
        this.value = this.value.replace(/[^0-9]/g,'');
    });

    numf_materia1 = $("[name = num_materiaf1]")
    numf_materia2 = $("[name = num_materiaf2]")
    numf_materia3 = $("[name = num_materiaf3]")
    numf_materia4 = $("[name = num_materiaf4]")
    numf_materia5 = $("[name = num_materiaf5]")
    numf_materia6 = $("[name = num_materiaf6]")

    reporte_final.on("keyup", function (){
        tf_alumno = $("#num_tutoradof").val()

        totalf_reprobado1 = numf_materia1.val()
        totalf_reprobado2 = numf_materia2.val()
        totalf_reprobado3 = numf_materia3.val()
        totalf_reprobado4 = numf_materia4.val()
        totalf_reprobado5 = numf_materia5.val()
        totalf_reprobado6 = numf_materia6.val()

        porf_reprobado1 = (totalf_reprobado1*100)/tf_alumno;
        porf_reprobado2 = (totalf_reprobado2*100)/tf_alumno;
        porf_reprobado3 = (totalf_reprobado3*100)/tf_alumno;
        porf_reprobado4 = (totalf_reprobado4*100)/tf_alumno;
        porf_reprobado5 = (totalf_reprobado5*100)/tf_alumno;
        porf_reprobado6 = (totalf_reprobado6*100)/tf_alumno;

        if (tf_alumno === "" || totalf_reprobado1 === "") {
            $("[name = por_materiaf1]").val("")
        } else {
            $("[name = por_materiaf1]").val((Math.round(porf_reprobado1*100)/100).toFixed(2))
        }

        if (tf_alumno === "" || totalf_reprobado2 === "") {
            $("[name = por_materiaf2]").val("")
        } else {
            $("[name = por_materiaf2]").val((Math.round(porf_reprobado2*100)/100).toFixed(2))
        }

        if (tf_alumno === "" || totalf_reprobado3 === "") {
            $("[name = por_materiaf3]").val("")
        } else {
            $("[name = por_materiaf3]").val((Math.round(porf_reprobado3*100)/100).toFixed(2))
        }

        if (tf_alumno === "" || totalf_reprobado4 === "") {
            $("[name = por_materiaf4]").val("")
        } else {
            $("[name = por_materiaf4]").val((Math.round(porf_reprobado4*100)/100).toFixed(2))
        }

        if (tf_alumno === "" || totalf_reprobado5 === "") {
            $("[name = por_materiaf5]").val("")
        } else {
            $("[name = por_materiaf5]").val((Math.round(porf_reprobado5*100)/100).toFixed(2))
        }

        if (tf_alumno === "" || totalf_reprobado6 === "") {
            $("[name = por_materiaf6]").val("")
        } else {
            $("[name = por_materiaf6]").val((Math.round(porf_reprobado6*100)/100).toFixed(2))
        }
    })

    $("#num_becadof").on("keyup", function (){
        let num_becadof = $(this).val()
        if (num_becadof[0] === "0") {
            $(this).val(num_becadof[0])
            $("#becariosf").hide().val("")
        } else {
            $("#becariosf").show()
        }
    })

    reporte_final.on("click", function () {

        if (periodof.val().trim() === "Agosto - Diciembre"){
            $(".sem_imparf").show()
            $(".grupos").show()
            $(".sem_parf").hide()

        } else if (periodof.val().trim() === ""){
            $(".sem_imparf, .sem_parf, .grupos, #tutorf").hide();
            $(".sem_grupf").val("")

        } else {
            $(".sem_imparf").hide()
            $(".grupos").show()
            $(".sem_parf").show()
        }

        if (nombreTutorFinal.val().trim() === ''){
            $("#programaf").val("")
        } else {
            switch (nombreTutorFinal.val().trim().split("_")[1]) {
                case 'IGEM': area_def = "Ingeniería en Gestión Empresarial";
                    break;
                case 'IIND': area_def = "Ingeniería Industrial";
                    break;
                case 'ISIC': area_def = "Ingeniería en Sistemas Computacionales";
                    break;
                case 'IBIO': area_def = "Ingeniería Biomédica";
                    break;
                case 'IIAS': area_def = "Ingeniería en Innovación Agrícola Sustentable";
                    break;
                case 'IENR': area_def = "Ingeniería en Energías Renovables";
                    break;
                case 'IFOR': area_def = "Ingeniería Forestal";
                    break;
                case 'IAGR': area_def = "Ingeniería en Agronomía";
                    break;
            }
            $("#programaf").val(area_def)
        }

    })



    //EVENTO DEL BOTÓN IMPRIMIR!!!
    $("#imprimirRF").on("click", function (){
        if (periodof.val().trim() === "") {
            Swal.fire({
                title: "Seleccione el\nPeriodo Final a evaluar",
                icon: "warning",
                backdrop: "rgba(0,84,150, 0.5)",
                showConfirmButton: false,
                timer: 1500
            });
            return false;
        }
        if ($('#nom_tutorf').val().trim() === "") {
            Swal.fire({
                title: "Seleccione su Nombre",
                icon: "warning",
                backdrop: "rgba(0,84,150, 0.5)",
                showConfirmButton: false,
                timer: 1500
            });
            return false;
        }



        if ($('#semestref').val().trim() === "") {
            Swal.fire({
                title: "Seleccione un Semestre",
                icon: "warning",
                backdrop: "rgba(0,84,150, 0.5)",
                showConfirmButton: false,
                timer: 1500
            });
            return false;
        }
        if ($('#grupof').val().trim() === "") {
            Swal.fire({
                title: "Seleccione su Grupo",
                icon: "warning",
                backdrop: "rgba(0,84,150, 0.5)",
                showConfirmButton: false,
                timer: 1500
            });
            return false;
        }


        if ($('#num_tutoradof').val().trim() === "") {
            Swal.fire({
                title: "Ingrese el número total de\nTutorados Asignados",
                icon: "warning",
                backdrop: "rgba(0,84,150, 0.5)",
                showConfirmButton: false,
                timer: 1500
            });
            return false;
        }
        if ($('.materiaf').val().trim() === "") {
            Swal.fire({
                title: "Ingrese al menos una asignatura\n" +
                    "donde existan estudiantes no acreditados",
                icon: "warning",
                backdrop: "rgba(0,84,150, 0.5)",
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
                backdrop: "rgba(0,84,150, 0.5)",
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
                backdrop: "rgba(0,84,150, 0.5)",
                showConfirmButton: false,
                width: "40%",
                timer: 2000
            });
            return false;
        }

        if ($('#num_becadof').val().trim() === "") {
            Swal.fire({
                title: "CAMPO VACÍO:\nNúmero de estudiantes becarios",
                icon: "warning",
                backdrop: "rgba(0,84,150, 0.5)",
                showConfirmButton: false,
                width: "40%",
                timer: 2000
            });
            return false;
        } else if ($('#num_becadof').val().trim() !== "0") {
            if (($('#becariosf').val().trim() === "")) {
                Swal.fire({
                    title: "CAMPO VACÍO: Tipo de Beca",
                    icon: "warning",
                    backdrop: "rgba(0,84,150, 0.5)",
                    showConfirmButton: false,
                    width: "30%",
                    timer: 2000
                });
                return false;
            }
        }

        if ($('[name = num_canalif1]').val().trim() === "") {
            Swal.fire({
                title: "CAMPO VACÍO!!!" +
                    "\nNúmero de canalizaciones a asesoría pares",
                icon: "warning",
                backdrop: "rgba(0,84,150, 0.5)",
                showConfirmButton: false,
                width: "40%",
                timer: 3000
            });
            return false;
        }
        if ($('[name = num_canalif2]').val().trim() === "") {
            Swal.fire({
                title: "CAMPO VACÍO!!!" +
                    "\nNúmero de canalizaciones al área de psicología",
                icon: "warning",
                backdrop: "rgba(0,84,150, 0.5)",
                showConfirmButton: false,
                width: "40%",
                timer: 3000
            });
            return false;
        }
        if ($('[name = num_canalif3]').val().trim() === "") {
            Swal.fire({
                title: "CAMPO VACÍO!!!" +
                    "\nNúmero de canalizaciones al consultorio médico",
                icon: "warning",
                backdrop: "rgba(0,84,150, 0.5)",
                showConfirmButton: false,
                width: "40%",
                timer: 3000
            });
            return false;
        }
        if ($('[name = num_canalif4]').val().trim() === "") {
            Swal.fire({
                title: "CAMPO VACÍO!!!" +
                    "\nNúmero de canalizaciones al área de pedagogía",
                icon: "warning",
                backdrop: "rgba(0,84,150, 0.5)",
                showConfirmButton: false,
                width: "40%",
                timer: 3000
            });
            return false;
        }


        if ($('[name = problematicaf]').val().trim() === "") {
            Swal.fire({
                title: "ÁREA DE TEXTO 1 VACÍA!!!",
                icon: "warning",
                backdrop: "rgba(0,84,150, 0.5)",
                showConfirmButton: false,
                width: "40%",
                timer: 3000
            });
            return false;
        }
        if ($('[name = necesidadesf]').val().trim() === "") {
            Swal.fire({
                title: "ÁREA DE TEXTO 2 VACÍA!!!",
                icon: "warning",
                backdrop: "rgba(0,84,150, 0.5)",
                showConfirmButton: false,
                width: "40%",
                timer: 3000
            });
            return false;
        }
        if ($('[name = desertoresf]').val().trim() === "") {
            Swal.fire({
                title: "ÁREA DE TEXTO 3 VACÍA!!!",
                icon: "warning",
                backdrop: "rgba(0,84,150, 0.5)",
                showConfirmButton: false,
                width: "40%",
                timer: 3000
            });
            return false;
        }
        if ($('[name = rec_obsf]').val().trim() === "") {
            Swal.fire({
                title: "ÁREA DE TEXTO 4 VACÍA!!!",
                icon: "warning",
                backdrop: "rgba(0,84,150, 0.5)",
                showConfirmButton: false,
                width: "40%",
                timer: 3000
            });
            return false;
        }

        Swal.fire({
            title: "¿Imprimir Reporte Final?",
            text: "Después, para modificar errores tendrá que acudir al área de Tutoría Académica",
            type: 'warning',
            icon: "question",
            showCancelButton: true,
            confirmButtonColor: '#19980b',
            cancelButtonColor: '#910018',
            confirmButtonText: 'GUARDAR',
            cancelButtonText: 'IMPRIMIR',
            width: "40%",
            backdrop: "rgba(0,84,150, 0.5)",

        }).then((result) => {
            if (result.value) {
                $.ajax({
                    url: "php/form_reportfinal.php",
                    type: 'POST',
                    data: reporte_final.serialize(),
                    success: function (id_rfinal) {
                        CookiesRF = Cookies.noConflict();
                        CookiesRF.set('idRFinal', id_rfinal)
                        swal.fire({
                            position: 'center',
                            icon: 'success',
                            title: "REPORTE FINAL LISTO PARA IMPRIMIR!!!",
                            showConfirmButton: false,
                            timer: 1500
                        }).then(()=>{
                            document.location = 'documentos/reporte_final.php?id_rfinal='+ id_rfinal;
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
                reporte_final[0].reset();
            }
        });
    })


    //EVENTO DEL BOTÓN GUARDAR!!!
    reporte_final.submit(function (e) {
        e.preventDefault()

        if (periodof.val().trim() === "") {
            Swal.fire({
                title: "Seleccione el\nPeriodo Final a evaluar",
                icon: "warning",
                backdrop: "rgba(0,84,150, 0.5)",
                showConfirmButton: false,
                timer: 1500
            });
            return false;
        }
        if ($('#nom_tutorf').val().trim() === "") {
            Swal.fire({
                title: "Seleccione su Nombre",
                icon: "warning",
                backdrop: "rgba(0,84,150, 0.5)",
                showConfirmButton: false,
                timer: 1500
            });
            return false;
        }



        if ($('#semestref').val().trim() === "") {
            Swal.fire({
                title: "Seleccione un Semestre",
                icon: "warning",
                backdrop: "rgba(0,84,150, 0.5)",
                showConfirmButton: false,
                timer: 1500
            });
            return false;
        }
        if ($('#grupof').val().trim() === "") {
            Swal.fire({
                title: "Seleccione su Grupo",
                icon: "warning",
                backdrop: "rgba(0,84,150, 0.5)",
                showConfirmButton: false,
                timer: 1500
            });
            return false;
        }


        if ($('#num_tutoradof').val().trim() === "") {
            Swal.fire({
                title: "Ingrese el número total de\nTutorados Asignados",
                icon: "warning",
                backdrop: "rgba(0,84,150, 0.5)",
                showConfirmButton: false,
                timer: 1500
            });
            return false;
        }
        if ($('.materiaf').val().trim() === "") {
            Swal.fire({
                title: "Ingrese al menos una asignatura\n" +
                       "donde existan estudiantes no acreditados",
                icon: "warning",
                backdrop: "rgba(0,84,150, 0.5)",
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
                backdrop: "rgba(0,84,150, 0.5)",
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
                backdrop: "rgba(0,84,150, 0.5)",
                showConfirmButton: false,
                width: "40%",
                timer: 2000
            });
            return false;
        }


        if ($('#num_becadof').val().trim() === "") {
            Swal.fire({
                title: "CAMPO VACÍO:\nNúmero de estudiantes becarios",
                icon: "warning",
                backdrop: "rgba(0,84,150, 0.5)",
                showConfirmButton: false,
                width: "40%",
                timer: 2000
            });
            return false;
        } else if ($('#num_becadof').val().trim() !== "0") {
            if (($('#becariosf').val().trim() === "")) {
                Swal.fire({
                    title: "CAMPO VACÍO: Tipo de Beca",
                    icon: "warning",
                    backdrop: "rgba(0,84,150, 0.5)",
                    showConfirmButton: false,
                    width: "30%",
                    timer: 2000
                });
                return false;
            }
        }


        if ($('[name = num_canalif1]').val().trim() === "") {
            Swal.fire({
                title: "CAMPO VACÍO!!!" +
                       "\nNúmero de canalizaciones a asesoría pares",
                icon: "warning",
                backdrop: "rgba(0,84,150, 0.5)",
                showConfirmButton: false,
                width: "40%",
                timer: 3000
            });
            return false;
        }
        if ($('[name = num_canalif2]').val().trim() === "") {
            Swal.fire({
                title: "CAMPO VACÍO!!!" +
                       "\nNúmero de canalizaciones al área de psicología",
                icon: "warning",
                backdrop: "rgba(0,84,150, 0.5)",
                showConfirmButton: false,
                width: "40%",
                timer: 3000
            });
            return false;
        }
        if ($('[name = num_canalif3]').val().trim() === "") {
            Swal.fire({
                title: "CAMPO VACÍO!!!" +
                       "\nNúmero de canalizaciones al consultorio médico",
                icon: "warning",
                backdrop: "rgba(0,84,150, 0.5)",
                showConfirmButton: false,
                width: "40%",
                timer: 3000
            });
            return false;
        }
        if ($('[name = num_canalif4]').val().trim() === "") {
            Swal.fire({
                title: "CAMPO VACÍO!!!" +
                       "\nNúmero de canalizaciones al área de pedagogía",
                icon: "warning",
                backdrop: "rgba(0,84,150, 0.5)",
                showConfirmButton: false,
                width: "40%",
                timer: 3000
            });
            return false;
        }


        if ($('[name = problematicaf]').val().trim() === "") {
            Swal.fire({
                title: "ÁREA DE TEXTO 1 VACÍA!!!",
                icon: "warning",
                backdrop: "rgba(0,84,150, 0.5)",
                showConfirmButton: false,
                width: "40%",
                timer: 3000
            });
            return false;
        }
        if ($('[name = necesidadesf]').val().trim() === "") {
            Swal.fire({
                title: "ÁREA DE TEXTO 2 VACÍA!!!",
                icon: "warning",
                backdrop: "rgba(0,84,150, 0.5)",
                showConfirmButton: false,
                width: "40%",
                timer: 3000
            });
            return false;
        }
        if ($('[name = desertoresf]').val().trim() === "") {
            Swal.fire({
                title: "ÁREA DE TEXTO 3 VACÍA!!!",
                icon: "warning",
                backdrop: "rgba(0,84,150, 0.5)",
                showConfirmButton: false,
                width: "40%",
                timer: 3000
            });
            return false;
        }
        if ($('[name = rec_obsf]').val().trim() === "") {
            Swal.fire({
                title: "ÁREA DE TEXTO 4 VACÍA!!!",
                icon: "warning",
                backdrop: "rgba(0,84,150, 0.5)",
                showConfirmButton: false,
                width: "40%",
                timer: 3000
            });
            return false;
        }

        Swal.fire({
            title: "¿Regisrar Reporte Final?",
            text: "Después, para modificar errores tendrá que acudir al área de Tutoría Académica",
            type: 'warning',
            icon: "question",
            showCancelButton: true,
            confirmButtonColor: '#19980b',
            cancelButtonColor: '#910018',
            confirmButtonText: 'GUARDAR',
            cancelButtonText: 'CANCELAR',
            width: "40%",
            backdrop: "rgba(0,84,150, 0.5)",

        }).then((result) => {
            if (result.value) {
                $.ajax({
                    url: "php/form_reportfinal.php",
                    type: 'POST',
                    data: reporte_final.serialize(),
                    success: function (id_rfinal) {
                        CookiesRF = Cookies.noConflict();
                        CookiesRF.set('idRFinal', id_rfinal)
                        swal.fire({
                            position: 'center',
                            icon: 'success',
                            title: "REPORTE FINAL GUARDADO EXITOSAMENTE!!!",
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
                reporte_final[0].reset();
            }
        });
    })
})