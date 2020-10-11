let trayectoria1sem, s_tuto1, s_cult1, s_depor1, materiasCursadas;
let result_tcd1, result_tcd2, result_tcd3, result_tcd4, result_tcd5, result_tcd6, result_tcd7;
let calificacion1, nuevaCalificacion1, materiasReprobadas;

$(document).ready(function () {
    trayectoria1sem = $("#trayectoria1")
    trayectoria1sem[0].reset()
    materiasCursadas = $("#cantidad_materias")
    materiasReprobadas = $("#materias_reprobadas")
    $("#relIngles, .fila-materias, #creditos, .relbeca, .materiarep, .folios_canal").hide()

    s_tuto1 = $("#tutoria1")
    s_cult1 = $("#cultural1")
    s_depor1 = $("#deportiva1")

    $('#tutoria1,#cultural1,#deportiva1, .folios_canal, .calificacionN').on('input', function () {
        this.value = this.value.replace(/[^0-9]/g,'');
    })

    $("#tutoria1, #cultural1, #deportiva1").on("change keypress paste focus textInput input",function(){
        calificacion1 = $(this).val()
        nuevaCalificacion1 = calificacion1.replace(/\D/g, "")
        if (nuevaCalificacion1 > 1) {
            $(this).val(1)
        } else {
            $(this).val(nuevaCalificacion1)
        }
    })

    //Evento para calcular la suma de créditos:
    trayectoria1sem.on("keyup", function (){
        result_tcd1 = parseInt(s_tuto1.val())
        result_tcd2 = parseInt(s_cult1.val())
        result_tcd3 = parseInt(s_depor1.val())
        result_tcd4 = result_tcd2 + result_tcd3
        result_tcd5 = result_tcd1 + result_tcd2
        result_tcd6 = result_tcd1 + result_tcd3
        result_tcd7 = result_tcd1 + result_tcd2 + result_tcd3

        if (s_tuto1.val().trim() === '' && s_cult1.val().trim() === '' && s_depor1.val().trim() === ''){
            $("#suma_tcd").val("")
        } else if (s_cult1.val().trim() === '' && s_depor1.val().trim() === '') {
            $("#suma_tcd").val(result_tcd1)
        } else if (s_tuto1.val().trim() === '' && s_depor1.val().trim() === ''){
            $("#suma_tcd").val(result_tcd2)
        } else if (s_tuto1.val().trim() === '' && s_cult1.val().trim() === ''){
            $("#suma_tcd").val(result_tcd3)
        } else if (s_tuto1.val().trim() === ''){
            $("#suma_tcd").val(result_tcd4)
        }  else if (s_depor1.val().trim() === ''){
            $("#suma_tcd").val(result_tcd5)
        } else if (s_cult1.val().trim() === ''){
            $("#suma_tcd").val(result_tcd6)
        } else {
            $("#suma_tcd").val(result_tcd7)
        }
    })

    $(".calificacionN").on("change keypress paste focus textInput input",function(){
        calificacion1 = $(this).val()
        nuevaCalificacion1 = calificacion1.replace(/\D/g, "")
        if (nuevaCalificacion1 > 100) {
            $(this).val(nuevaCalificacion1[0]+nuevaCalificacion1[1])
        } else {
            $(this).val(nuevaCalificacion1.replace(/^0+/, ''))
        }
    })

    $(".folios_canal").on("change keypress paste focus textInput input", function (){
        let fecha = new Date();
        let year = fecha.getFullYear();
        let digito = year.toString().substr(-2);

        let folio = $(this).val()
        folio = folio.replace(/\D/g, "")
        if (folio[0] > 0){
            $(this).val(0)
        } else if (folio[1] > 8) {
            $(this).val(folio[0]+8)
        } else if (folio[1] < 1) {
            $(this).val(folio[0]+1)
        } else if (folio[2] > digito[0] || folio[2] < 1) {
            $(this).val(folio[0]+folio[1]+digito[0])
        } else if (folio[2] === digito[0] && folio[3] > digito[1]) {
            $(this).val(folio[0]+folio[1]+digito[0]+digito[1])
        } else if (folio[2]+folio[3] === "00") {
            $(this).val(folio[0]+folio[1]+digito[0]+digito[1])
        } else if (folio[4]+folio[5]+folio[6] === "000") {
            $(this).val(folio[0]+folio[1]+folio[2]+folio[3]+folio[4]+folio[5]+1)
        }
    })

    $("[name = calificacion1]").on("click", function (){
        $("[name = calificacion1]").val("")
    })
    $("[name = calificacion2]").on("click", function (){
        $("[name = calificacion2]").val("")
    })
    $("[name = calificacion3]").on("click", function (){
        $("[name = calificacion3]").val("")
    })
    $("[name = calificacion4]").on("click", function (){
        $("[name = calificacion4]").val("")
    })
    $("[name = calificacion5]").on("click", function (){
        $("[name = calificacion5]").val("")
    })
    $("[name = calificacion6]").on("click", function (){
        $("[name = calificacion6]").val("")
    })
    $("[name = calificacion7]").on("click", function (){
        $("[name = calificacion7]").val("")
    })

    trayectoria1sem.on('click', function () {
        if ($("[name = ingles1]:checked").val() === "SÍ"){
            $("#relIngles").show()
        } else{
            $("#relIngles").hide()
            $("#nivel_ingles").val("")
            $("input[name = ubicacion1]").prop("checked", false)
        }

        if ($('#creditos_extras').val().trim() === "SÍ") {
            $("#creditos").show()
        } else {
            $("#creditos").hide()
            $("#tutoria1").val("")
            $("#cultural1").val("")
            $("#deportiva1").val("")
            $("#suma_tcd").val("")
        }

        if ($("[name = beca]:checked").val() === "SÍ"){
            $("#relbeca").show()
        } else{
            $("#relbeca").hide()
            $("#tipo_beca").val("")
        }


        if (materiasCursadas.val().trim() === ""){
            $(".fila-materias").hide()
            $(".materiaN").val("")
            $(".calificacionN").val("")
        } else if (materiasCursadas.val().trim() === "1"){
            $("#fila-materias1").show()
            $("#fila-materias2").hide()
            $("#fila-materias3").hide()
            $("#fila-materias4").hide()
            $("#fila-materias5").hide()
            $("#fila-materias6").hide()
            $("#fila-materias7").hide()

            $("[name = materia2], [name = calificacion2]").val("")
            $("[name = materia3], [name = calificacion3]").val("")
            $("[name = materia4], [name = calificacion4]").val("")
            $("[name = materia5], [name = calificacion5]").val("")
            $("[name = materia6], [name = calificacion6]").val("")
            $("[name = materia7], [name = calificacion7]").val("")

        } else if (materiasCursadas.val().trim() === "2"){
            $("#fila-materias1").show()
            $("#fila-materias2").show()
            $("#fila-materias3").hide()
            $("#fila-materias4").hide()
            $("#fila-materias5").hide()
            $("#fila-materias6").hide()
            $("#fila-materias7").hide()

            $("[name = materia3], [name = calificacion3]").val("")
            $("[name = materia4], [name = calificacion4]").val("")
            $("[name = materia5], [name = calificacion5]").val("")
            $("[name = materia6], [name = calificacion6]").val("")
            $("[name = materia7], [name = calificacion7]").val("")
        } else if (materiasCursadas.val().trim() === "3"){
            $("#fila-materias1").show()
            $("#fila-materias2").show()
            $("#fila-materias3").show()
            $("#fila-materias4").hide()
            $("#fila-materias5").hide()
            $("#fila-materias6").hide()
            $("#fila-materias7").hide()

            $("[name = materia4], [name = calificacion4]").val("")
            $("[name = materia5], [name = calificacion5]").val("")
            $("[name = materia6], [name = calificacion6]").val("")
            $("[name = materia7], [name = calificacion7]").val("")
        } else if (materiasCursadas.val().trim() === "4"){
            $("#fila-materias1").show()
            $("#fila-materias2").show()
            $("#fila-materias3").show()
            $("#fila-materias4").show()
            $("#fila-materias5").hide()
            $("#fila-materias6").hide()
            $("#fila-materias7").hide()

            $("[name = materia5], [name = calificacion5]").val("")
            $("[name = materia6], [name = calificacion6]").val("")
            $("[name = materia7], [name = calificacion7]").val("")
        } else if (materiasCursadas.val().trim() === "5"){
            $("#fila-materias1").show()
            $("#fila-materias2").show()
            $("#fila-materias3").show()
            $("#fila-materias4").show()
            $("#fila-materias5").show()
            $("#fila-materias6").hide()
            $("#fila-materias7").hide()

            $("[name = materia6], [name = calificacion6]").val("")
            $("[name = materia7], [name = calificacion7]").val("")
        } else if (materiasCursadas.val().trim() === "6"){
            $("#fila-materias1").show()
            $("#fila-materias2").show()
            $("#fila-materias3").show()
            $("#fila-materias4").show()
            $("#fila-materias5").show()
            $("#fila-materias6").show()
            $("#fila-materias7").hide()

            $("[name = materia7], [name = calificacion7]").val("")
        } else {
            $(".fila-materias").show()
        }


        if (materiasReprobadas.val().trim() === ''){
            $(".materiarep").hide().val("")
        } else if (materiasReprobadas.val().trim() === '1'){
            $("#materiarep1").show();
            $("#materiarep2").hide().val("")
            $("#materiarep3").hide().val("")
            $("#materiarep4").hide().val("")
            $("#materiarep5").hide().val("")
            $("#materiarep6").hide().val("")
            $("#materiarep7").hide().val("")
        } else if (materiasReprobadas.val().trim() === '2'){
            $("#materiarep1").show()
            $("#materiarep2").show()
            $("#materiarep3").hide().val("")
            $("#materiarep4").hide().val("")
            $("#materiarep5").hide().val("")
            $("#materiarep6").hide().val("")
            $("#materiarep7").hide().val("")
        } else if (materiasReprobadas.val().trim() === '3'){
            $("#materiarep1").show()
            $("#materiarep2").show()
            $("#materiarep3").show()
            $("#materiarep4").hide().val("")
            $("#materiarep5").hide().val("")
            $("#materiarep6").hide().val("")
            $("#materiarep7").hide().val("")
        } else if (materiasReprobadas.val().trim() === '4'){
            $("#materiarep1").show()
            $("#materiarep2").show()
            $("#materiarep3").show()
            $("#materiarep4").show()
            $("#materiarep5").hide().val("")
            $("#materiarep6").hide().val("")
            $("#materiarep7").hide().val("")
        } else if (materiasReprobadas.val().trim() === '5'){
            $("#materiarep1").show()
            $("#materiarep2").show()
            $("#materiarep3").show()
            $("#materiarep4").show()
            $("#materiarep5").show()
            $("#materiarep6").hide().val("")
            $("#materiarep7").hide().val("")
        } else if (materiasReprobadas.val().trim() === '6'){
            $("#materiarep1").show()
            $("#materiarep2").show()
            $("#materiarep3").show()
            $("#materiarep4").show()
            $("#materiarep5").show()
            $("#materiarep6").show()
            $("#materiarep7").hide().val("")
        } else {
            $(".materiarep").show()
        }

        if (materiasCursadas.val() === "") {
            materiasReprobadas.val("")
            $(".materiarep").hide()
        } else if (materiasCursadas.val() < materiasReprobadas.val()) {
            materiasReprobadas.val("")
            $(".materiarep").hide()
        }

        if ($("#canalizacion1").is(":checked")) {
            $("#folioAM").show()

        } else {
            $("#folioAM").hide().val("")
        }

        if ($("#canalizacion2").is(":checked")) {
            $("#folioAP").show()

        } else {
            $("#folioAP").hide().val("")
        }

        if ($("#canalizacion3").is(":checked")) {
            $("#folioAPar").show()

        } else {
            $("#folioAPar").hide().val("")
        }

        if ($("#canalizacion4").is(":checked")) {
            $("#folioTInd").show()

        } else {
            $("#folioTInd").hide().val("")
        }

        if ($("#canalizacion5").is(":checked")) {
            $("#folioOtra").show()

        } else {
            $("#folioOtra").hide().val("")
        }
    })

    materiasReprobadas.on("click", function (){
        if (materiasReprobadas.val() > $("#cantidad_materias").val()){
            Swal.fire({
                title: 'Fuera del rango de las Asignaturas Cursadas',
                width: "40%",
                icon: "warning",
                showConfirmButton: false,
                timer: 1500,
                backdrop: "rgba(0,0,0,0.4)"
            });
            materiasReprobadas.val("")
        } else if (materiasCursadas.val() === "") {
            Swal.fire({
                title: 'Seleccione primero\nlas asignaturas cursadas\ndurante el semestre',
                icon: "warning",
                showConfirmButton: false,
                timer: 2500,
                backdrop: "rgba(0,0,0,0.4)"
            });
        }
    })

    trayectoria1sem.submit(function (e){
        e.preventDefault()

        if (!$("[name=ingles1]").is(":checked")) {
            Swal.fire({
                title: "Cursando idioma Inglés\n¡Sin contestar!",
                icon: "warning",
                showConfirmButton: false,
                timer: 2000,
                backdrop: "rgba(0,0,0,0.4)"
            });
            return false;
        } else {
            if ($("[name=ingles1]:checked").val() === "SÍ") {
                if ($("#nivel_ingles").val().trim() === ""){
                    Swal.fire({
                        title: "Nivel de Inglés\n¡Sin contestar!",
                        icon: "warning",
                        showConfirmButton: false,
                        timer: 2000,
                        backdrop: "rgba(0,0,0,0.4)"
                    });
                    return false;
                } else if (!$("[name=ubicacion1]").is(":checked")) {
                    Swal.fire({
                        title: "Examen de Ubicación\n¡Sin contestar!",
                        icon: "warning",
                        showConfirmButton: false,
                        timer: 2000,
                        backdrop: "rgba(0,0,0,0.4)"
                    });
                    return false;
                }
            }
        }

        if ($('#creditos_extras').val().trim() === "") {
            Swal.fire({
                title: "Seleccione si cuenta con créditos de:",
                html: 'Tutorías.<br>Actividades Extraescolares.',
                icon: "warning",
                showConfirmButton: false,
                width: "35%",
                timer: 2500,
                backdrop: "rgba(0,0,0,0.4)"
            });
            return false;
        }

        if ($("#cantidad_materias").val().trim() === "") {
            Swal.fire({
                title: "Seleccione el número de Asignaturas Cursadas",
                icon: "warning",
                showConfirmButton: false,
                timer: 2000,
                backdrop: "rgba(0,0,0,0.4)"
            });
            return false;
        } else {
            if ($(".materiaN").val().trim() === "") {
                Swal.fire({
                    title: "Campos de Materías\nVACÍOS!!!",
                    icon: "warning",
                    showConfirmButton: false,
                    timer: 2000,
                    backdrop: "rgba(0,0,0,0.4)"
                });
                return false;
            } else if ($(".calificacionN").val().trim() === "") {
                Swal.fire({
                    title: "Campos de Calificaciones\nVACÍOS!!!",
                    icon: "warning",
                    showConfirmButton: false,
                    timer: 2000,
                    backdrop: "rgba(0,0,0,0.4)"
                });
                return false;
            }
        }

        if ($("#materias_reprobadas").val().trim() !== "") {
            if ($(".materiarep").val().trim() === "") {
                Swal.fire({
                    title: "Campos de\nMaterías Reprobadas\nVACÍOS!!!",
                    icon: "warning",
                    showConfirmButton: false,
                    timer: 2000,
                    backdrop: "rgba(0,0,0,0.4)"
                });
                return false;
            }
        }

        if (!$("[name=beca]").is(":checked")) {
            Swal.fire({
                title: "¿Se encuentra Becado?\nSí o No",
                icon: "warning",
                showConfirmButton: false,
                timer: 2000,
                backdrop: "rgba(0,0,0,0.4)"
            });
            return false;
        } else {
            if ($("[name=beca]:checked").val() === "SÍ") {
                if ($("#tipo_beca").val().trim() === "") {
                    Swal.fire({
                        title: "Describa el tipo de Beca",
                        icon: "warning",
                        showConfirmButton: false,
                        timer: 2000,
                        backdrop: "rgba(0,0,0,0.4)"
                    });
                    return false;
                }
            }
        }

        if ($("#canalizacion1").is(":checked")) {
            if ($("#folioAM").val().trim() === "") {
                Swal.fire({
                        title: "Ingrese el Folio de la Canalización",
                        icon: "warning",
                        showConfirmButton: false,
                        timer: 1500,
                        backdrop: "rgba(0,0,0,0.4)"
                    });
                    return false;
            }
        } else if ($("#canalizacion2").is(":checked")) {
            if ($("#folioAP").val().trim() === "") {
                Swal.fire({
                        title: "Ingrese el Folio de la Canalización",
                        icon: "warning",
                        showConfirmButton: false,
                        timer: 1500,
                        backdrop: "rgba(0,0,0,0.4)"
                    });
                    return false;
            }
        } else if ($("#canalizacion3").is(":checked")) {
            if ($("#folioAPar").val().trim() === "") {
                Swal.fire({
                        title: "Ingrese el Folio de la Canalización",
                        icon: "warning",
                        showConfirmButton: false,
                        timer: 1500,
                        backdrop: "rgba(0,0,0,0.4)"
                    });
                    return false;
            }
        } else if ($("#canalizacion4").is(":checked")) {
            if ($("#folioTInd").val().trim() === "") {
                Swal.fire({
                        title: "Ingrese el Folio de la Canalización",
                        icon: "warning",
                        showConfirmButton: false,
                        timer: 1500,
                        backdrop: "rgba(0,0,0,0.4)"
                    });
                    return false;
            }
        } else if ($("#canalizacion5").is(":checked")) {
            if ($("#folioOtra").val().trim() === "") {
                Swal.fire({
                        title: "Ingrese el Folio de la Canalización",
                        icon: "warning",
                        showConfirmButton: false,
                        timer: 1500,
                        backdrop: "rgba(0,0,0,0.4)"
                    });
                    return false;
            }
        }

        if ($("#observaciones").val().trim() === "") {
            Swal.fire({
                title: 'Describa las Observaciones:\n"Agosto - Diciembre"',
                icon: "warning",
                showConfirmButton: false,
                timer: 1500,
                backdrop: "rgba(0,0,0,0.4)"
            });
            return false;
        }

        Swal.fire({
            title: "¿Guardar Trayectoria de 1er Semestre?",
            html: "Después, no podrá hacer cambios hasta que acuda al<br>Área de Tutorías",
            width:"40%",
            type: 'warning',
            icon: "question",
            showCancelButton: true,
            confirmButtonColor: '#19980b',
            cancelButtonColor: '#910018',
            confirmButtonText: 'GUARDAR',
            cancelButtonText: 'CANCELAR',
            backdrop: "rgba(0,0,0,0)"

        }).then((result) => {
            if (result.value) {
                $.ajax({
                    url: "php/form_tsem1.php",
                    type: 'POST',
                    data: trayectoria1sem.serialize(),
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
                })
                parent.$("#v_modal_t1").hide()
                trayectoria1sem[0].reset()
            }
        })

    })

    $("#CerrarVentana1").on("click", function (){
        parent.$("#v_modal_t1").hide()
        trayectoria1sem[0].reset()
    })

})