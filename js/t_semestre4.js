let trayectoria4sem, s_tuto4, s_cult4, s_depor4, s_compl4, calificacion4, nuevaCalificacion4;
let result_tcd1_4, result_tcd2_4, result_tcd3_4, result_tcd4_4, result_tcd5_4, result_tcd6_4, result_tcd7_4, result_tcd8_4;
let result_tcd9_4, result_tcd10_4, result_tcd11_4, result_tcd12_4, result_tcd13_4, result_tcd14_4, result_tcd15_4;
let creditoTutoria4, creditoCultural4, creditoDeportiva4, creditoComplementaria4;
let newCrediTutoria4, newCrediCultural4, newCrediDeportiva4, newCrediComplementaria4;
let materiasCursadas4, materiasReprobadas4;

$(document).ready(function (){
    trayectoria4sem = $("#trayectoria4")
    trayectoria4sem[0].reset()
    materiasCursadas4 = $("#cantidad_materias_4")
    materiasReprobadas4 = $("#materias_reprobadas_4")

    $("#relIngles_4, .fila-materias_4, .relbeca_4, .materiarep_4, .folios_canal_4").hide()
    $("#fila1, #fila2, #fila3, .otraActividad, #otraComple").hide()

    s_tuto4 = $("#tutoria_4")
    s_cult4 = $("#cultural_4")
    s_depor4 = $("#deportiva_4")
    s_compl4 = $("#complementaria_4")

    $('.credito_4, #complementaria_4, .calificacionN_4, .folios_canal_4').on('input', function () {
        this.value = this.value.replace(/[^0-9]/g,'');
    })

    trayectoria4sem.on("change keypress paste focus textInput input",function() {
        creditoTutoria4 = s_tuto4.val()
        creditoCultural4 = s_cult4.val()
        creditoDeportiva4 = s_depor4.val()
        creditoComplementaria4 = s_compl4.val()

        newCrediTutoria4 = creditoTutoria4.replace(/\D/g, "")
        newCrediCultural4 = creditoCultural4.replace(/\D/g, "")
        newCrediDeportiva4 = creditoDeportiva4.replace(/\D/g, "")
        newCrediComplementaria4 = creditoComplementaria4.replace(/\D/g, "")

        if (newCrediTutoria4 > 2) {
            s_tuto4.val(2)
        } else {
            s_tuto4.val(newCrediTutoria4)
        }

        if (newCrediCultural4 > 1) {
            s_cult4.val(1)
        } else {
            s_cult4.val(newCrediCultural4)
        }

        if (newCrediDeportiva4 > 1) {
            s_depor4.val(1)
        } else {
            s_depor4.val(newCrediDeportiva4)
        }

        if (creditoComplementaria4 > 1) {
            s_compl4.val(1)
        } else {
            s_compl4.val(creditoComplementaria4)
        }
    })

    trayectoria4sem.on("keyup", function () {
        result_tcd1_4 = parseInt(s_tuto4.val())
        result_tcd2_4 = parseInt(s_cult4.val())
        result_tcd3_4 = parseInt(s_depor4.val())
        result_tcd4_4 = parseInt(s_compl4.val())
        result_tcd5_4 = result_tcd1_4 + result_tcd2_4;
        result_tcd6_4 = result_tcd1_4 + result_tcd3_4;
        result_tcd7_4 = result_tcd1_4 + result_tcd4_4;
        result_tcd8_4 = result_tcd2_4 + result_tcd3_4;
        result_tcd9_4 = result_tcd2_4 + result_tcd4_4;
        result_tcd10_4 = result_tcd3_4 + result_tcd4_4;
        result_tcd11_4 = result_tcd1_4 + result_tcd2_4 + result_tcd3_4;
        result_tcd12_4 = result_tcd1_4 + result_tcd2_4 + result_tcd4_4;
        result_tcd13_4 = result_tcd1_4 + result_tcd3_4 + result_tcd4_4;
        result_tcd14_4 = result_tcd2_4 + result_tcd3_4 + result_tcd4_4;
        result_tcd15_4 = result_tcd1_4 + result_tcd2_4 + result_tcd3_4 + result_tcd4_4;

        if (s_tuto4.val().trim()==='' && s_cult4.val().trim()==='' && s_depor4.val().trim()==='' && s_compl4.val().trim()==='') {
            $("#suma_tcdc_4").val("")
        } else if (s_cult4.val().trim()==='' && s_depor4.val().trim()==='' && s_compl4.val().trim()==='') {
            $("#suma_tcdc_4").val(result_tcd1_4)
        } else if (s_tuto4.val().trim()==='' && s_depor4.val().trim()==='' && s_compl4.val().trim()==='') {
            $("#suma_tcdc_4").val(result_tcd2_4)
        } else if (s_tuto4.val().trim()==='' && s_cult4.val().trim()==='' && s_compl4.val().trim()==='') {
            $("#suma_tcdc_4").val(result_tcd3_4)
        } else if (s_tuto4.val().trim()==='' && s_cult4.val().trim()==='' && s_depor4.val().trim()==='' ) {
            $("#suma_tcdc_4").val(result_tcd4_4)
        } else if (s_depor4.val().trim()==='' && s_compl4.val().trim()==='') {
            $("#suma_tcdc_4").val(result_tcd5_4)
        } else if (s_cult4.val().trim()==='' && s_compl4.val().trim()==='') {
            $("#suma_tcdc_4").val(result_tcd6_4)
        } else if (s_cult4.val().trim()==='' && s_depor4.val().trim()==='') {
            $("#suma_tcdc_4").val(result_tcd7_4)
        } else if (s_tuto4.val().trim()==='' && s_compl4.val().trim()==='') {
            $("#suma_tcdc_4").val(result_tcd8_4)
        } else if (s_tuto4.val().trim()==='' && s_depor4.val().trim()==='') {
            $("#suma_tcdc_4").val(result_tcd9_4)
        } else if (s_tuto4.val().trim()==='' && s_cult4.val().trim()==='') {
            $("#suma_tcdc_4").val(result_tcd10_4)
        } else if (s_compl4.val().trim()==='') {
            $("#suma_tcdc_4").val(result_tcd11_4)
        } else if (s_depor4.val().trim()==='') {
            $("#suma_tcdc_4").val(result_tcd12_4)
        } else if (s_cult4.val().trim()==='') {
            $("#suma_tcdc_4").val(result_tcd13_4)
        } else if (s_tuto4.val().trim()==='') {
            $("#suma_tcdc_4").val(result_tcd14_4)
        } else {
            $("#suma_tcdc_4").val(result_tcd15_4)
        }

        if (s_cult4.val() === "1") {
            $("#fila1").show()
        } else {
            $("#fila1").hide()
            $("#actCultural").val("")
            $("#otraCult").hide().val("")
        }

        if (s_depor4.val() === "1") {
            $("#fila2").show()
        } else {
            $("#fila2").hide()
            $("#actDeportiva").val("")
            $("#otraDepor").hide().val("")
        }

        if (s_compl4.val() === "1") {
            $("#fila3").show()
        } else {
            $("#fila3").hide()
            $("#actComple").val("")
            $("#otraComple").hide().val("")
        }
    })

    $(".calificacionN_4").on("change keypress paste focus textInput input",function() {
        calificacion4 = $(this).val()
        nuevaCalificacion4 = calificacion4.replace(/\D/g, "")

        if (nuevaCalificacion4 > 100) {
            $(this).val(nuevaCalificacion4[0]+nuevaCalificacion4[1])

        } else if (nuevaCalificacion4 < 70 && nuevaCalificacion4 >= 20) {
            $(this).val(0)

        } else if (nuevaCalificacion4 >= 10 && nuevaCalificacion4 < 20) {
            $(this).val(100)

        } else if (nuevaCalificacion4 === 0) {
            $(this).val(0)

        } else if (nuevaCalificacion4 === "00") {
            $(this).val(0)

        } else if (nuevaCalificacion4 === "000") {
            $(this).val(0)

        } else if (nuevaCalificacion4[0] === "0" && nuevaCalificacion4[1] > 0) {
            $(this).val(0)
        }
    })

    $(".folios_canal_4").on("change keypress paste focus textInput input", function (){
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

    $("[name = calificacion1_4]").on("click", function (){
        $("[name = calificacion1_4]").val("")
    })
    $("[name = calificacion2_4]").on("click", function (){
        $("[name = calificacion2_4]").val("")
    })
    $("[name = calificacion3_4]").on("click", function (){
        $("[name = calificacion3_4]").val("")
    })
    $("[name = calificacion4_4]").on("click", function (){
        $("[name = calificacion4_4]").val("")
    })
    $("[name = calificacion5_4]").on("click", function (){
        $("[name = calificacion5_4]").val("")
    })
    $("[name = calificacion6_4]").on("click", function (){
        $("[name = calificacion6_4]").val("")
    })
    $("[name = calificacion7_4]").on("click", function (){
        $("[name = calificacion7_4]").val("")
    })

    trayectoria4sem.on("click", function (){
        if ($("[name = ingles_4]:checked").val() === "SÍ") {
            $("#relIngles_4").show()
        } else {
            $("#relIngles_4").hide()
            $("#nivel_ingles_4").val("")
            $("input[name = ubicacion_4]").prop("checked", false)
        }

        if ($("#actCultural").val().trim() === "otra") {
            $("#otraCult").show()
        } else {
            $("#otraCult").hide().val("")
        }
        if ($("#actDeportiva").val().trim() === "otra") {
            $("#otraDepor").show()
        } else {
            $("#otraDepor").hide().val("")
        }
        if ($("#actComple").val().trim() === "otra") {
            $("#otraComple").show()
        } else {
            $("#otraComple").hide().val("")
        }

        if (materiasCursadas4.val().trim() === ""){
            $(".fila-materias_4").hide()
            $(".materiaN_4").val("")
            $(".calificacionN_4").val("")
        } else if (materiasCursadas4.val().trim() === "1"){
            $("#fila-materias1_4").show()
            $("#fila-materias2_4").hide()
            $("#fila-materias3_4").hide()
            $("#fila-materias4_4").hide()
            $("#fila-materias5_4").hide()
            $("#fila-materias6_4").hide()
            $("#fila-materias7_4").hide()

            $("[name = materia2_4], [name = calificacion2_4]").val("")
            $("[name = materia3_4], [name = calificacion3_4]").val("")
            $("[name = materia4_4], [name = calificacion4_4]").val("")
            $("[name = materia5_4], [name = calificacion5_4]").val("")
            $("[name = materia6_4], [name = calificacion6_4]").val("")
            $("[name = materia7_4], [name = calificacion7_4]").val("")

        } else if (materiasCursadas4.val().trim() === "2"){
            $("#fila-materias1_4").show()
            $("#fila-materias2_4").show()
            $("#fila-materias3_4").hide()
            $("#fila-materias4_4").hide()
            $("#fila-materias5_4").hide()
            $("#fila-materias6_4").hide()
            $("#fila-materias7_4").hide()

            $("[name = materia3_4], [name = calificacion3_4]").val("")
            $("[name = materia4_4], [name = calificacion4_4]").val("")
            $("[name = materia5_4], [name = calificacion5_4]").val("")
            $("[name = materia6_4], [name = calificacion6_4]").val("")
            $("[name = materia7_4], [name = calificacion7_4]").val("")
        } else if (materiasCursadas4.val().trim() === "3"){
            $("#fila-materias1_4").show()
            $("#fila-materias2_4").show()
            $("#fila-materias3_4").show()
            $("#fila-materias4_4").hide()
            $("#fila-materias5_4").hide()
            $("#fila-materias6_4").hide()
            $("#fila-materias7_4").hide()

            $("[name = materia4_3], [name = calificacion4_3]").val("")
            $("[name = materia5_3], [name = calificacion5_3]").val("")
            $("[name = materia6_3], [name = calificacion6_3]").val("")
            $("[name = materia7_3], [name = calificacion7_3]").val("")
        } else if (materiasCursadas4.val().trim() === "4"){
            $("#fila-materias1_4").show()
            $("#fila-materias2_4").show()
            $("#fila-materias3_4").show()
            $("#fila-materias4_4").show()
            $("#fila-materias5_4").hide()
            $("#fila-materias6_4").hide()
            $("#fila-materias7_4").hide()

            $("[name = materia5_4], [name = calificacion5_4]").val("")
            $("[name = materia6_4], [name = calificacion6_4]").val("")
            $("[name = materia7_4], [name = calificacion7_4]").val("")
        } else if (materiasCursadas4.val().trim() === "5"){
            $("#fila-materias1_4").show()
            $("#fila-materias2_4").show()
            $("#fila-materias3_4").show()
            $("#fila-materias4_4").show()
            $("#fila-materias5_4").show()
            $("#fila-materias6_4").hide()
            $("#fila-materias7_4").hide()

            $("[name = materia6_4], [name = calificacion6_4]").val("")
            $("[name = materia7_4], [name = calificacion7_4]").val("")
        } else if (materiasCursadas4.val().trim() === "6"){
            $("#fila-materias1_4").show()
            $("#fila-materias2_4").show()
            $("#fila-materias3_4").show()
            $("#fila-materias4_4").show()
            $("#fila-materias5_4").show()
            $("#fila-materias6_4").show()
            $("#fila-materias7_4").hide()

            $("[name = materia7_4], [name = calificacion7_4]").val("")
        } else {
            $(".fila-materias_4").show()
        }


        if ($("[name = beca_4]:checked").val() === "SÍ"){
            $("#relbeca_4").show()
        } else{
            $("#relbeca_4").hide()
            $("#tipo_beca_4").val("")
        }


        if ($('#materias_reprobadas_4').val().trim() === ''){
            $(".materiarep_4").hide().val("")
        } else if (materiasReprobadas4.val().trim() === '1'){
            $("#materiarep1_4").show();
            $("#materiarep2_4").hide().val("")
            $("#materiarep3_4").hide().val("")
            $("#materiarep4_4").hide().val("")
            $("#materiarep5_4").hide().val("")
            $("#materiarep6_4").hide().val("")
            $("#materiarep7_4").hide().val("")
        } else if (materiasReprobadas4.val().trim() === '2'){
            $("#materiarep1_4").show()
            $("#materiarep2_4").show()
            $("#materiarep3_4").hide().val("")
            $("#materiarep4_4").hide().val("")
            $("#materiarep5_4").hide().val("")
            $("#materiarep6_4").hide().val("")
            $("#materiarep7_4").hide().val("")
        } else if (materiasReprobadas4.val().trim() === '3'){
            $("#materiarep1_4").show()
            $("#materiarep2_4").show()
            $("#materiarep3_4").show()
            $("#materiarep4_4").hide().val("")
            $("#materiarep5_4").hide().val("")
            $("#materiarep6_4").hide().val("")
            $("#materiarep7_4").hide().val("")
        } else if (materiasReprobadas4.val().trim() === '4'){
            $("#materiarep1_4").show()
            $("#materiarep2_4").show()
            $("#materiarep3_4").show()
            $("#materiarep4_4").show()
            $("#materiarep5_4").hide().val("")
            $("#materiarep6_4").hide().val("")
            $("#materiarep7_4").hide().val("")
        } else if (materiasReprobadas4.val().trim() === '5'){
            $("#materiarep1_4").show()
            $("#materiarep2_4").show()
            $("#materiarep3_4").show()
            $("#materiarep4_4").show()
            $("#materiarep5_4").show()
            $("#materiarep6_4").hide().val("")
            $("#materiarep7_4").hide().val("")
        } else if (materiasReprobadas4.val().trim() === '6'){
            $("#materiarep1_4").show()
            $("#materiarep2_4").show()
            $("#materiarep3_4").show()
            $("#materiarep4_4").show()
            $("#materiarep5_4").show()
            $("#materiarep6_4").show()
            $("#materiarep7_4").hide().val("")
        } else {
            $(".materiarep_4").show()
        }

        if (materiasCursadas4.val() === "") {
            materiasReprobadas4.val("")
            $(".materiarep_4").hide()
        } else if (materiasCursadas4.val() < materiasReprobadas4.val()) {
            materiasReprobadas4.val("")
            $(".materiarep_4").hide()
        }

        if ($("#canalizacion1_4").is(":checked")) {
            $("#folioAM_4").show()
        } else {
            $("#folioAM_4").hide().val("")
        }

        if ($("#canalizacion2_4").is(":checked")) {
            $("#folioAP_4").show()
        } else {
            $("#folioAP_4").hide().val("")
        }

        if ($("#canalizacion3_4").is(":checked")) {
            $("#folioAPar_4").show()
        } else {
            $("#folioAPar_4").hide().val("")
        }

        if ($("#canalizacion4_4").is(":checked")) {
            $("#folioTInd_4").show()
        } else {
            $("#folioTInd_4").hide().val("")
        }

        if ($("#canalizacion5_4").is(":checked")) {
            $("#folioOtra_4").show()
        } else {
            $("#folioOtra_4").hide().val("")
        }
    })

    materiasReprobadas4.on("click", function (){
        if (materiasReprobadas4.val() > materiasCursadas4.val()){
            Swal.fire({
                title: 'Fuera del rango de las Asignaturas Cursadas',
                width: "40%",
                icon: "warning",
                showConfirmButton: false,
                timer: 1500,
                backdrop: "rgba(0,0,0,0.4)"
            });
            materiasReprobadas4.val("")
        } else if (materiasCursadas4.val() === "") {
            Swal.fire({
                title: 'Seleccione primero\nlas asignaturas cursadas\ndurante el semestre',
                icon: "warning",
                showConfirmButton: false,
                timer: 2500,
                backdrop: "rgba(0,0,0,0.4)"
            });
        }
    })

    trayectoria4sem.submit(function (e){
        e.preventDefault()

        if (!$("[name=ingles_4]").is(":checked")) {
            Swal.fire({
                title: "Cursando idioma Inglés\n¡Sin contestar!",
                icon: "warning",
                showConfirmButton: false,
                timer: 2000,
                backdrop: "rgba(0,0,0,0.4)"
            });
            return false;
        } else {
            if ($("[name=ingles_4]:checked").val() === "SÍ") {
                if ($("#nivel_ingles_4").val().trim() === ""){
                    Swal.fire({
                        title: "Nivel de Inglés\n¡Sin contestar!",
                        icon: "warning",
                        showConfirmButton: false,
                        timer: 2000,
                        backdrop: "rgba(0,0,0,0.4)"
                    });
                    return false;
                } else if (!$("[name=ubicacion_4]").is(":checked")) {
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

        if (s_cult4.val() === "1") {
            if ($("#actCultural").val().trim() === "") {
                Swal.fire({
                    title: "Seleccione el nombre de la\nActividad Cultural",
                    icon: "warning",
                    showConfirmButton: false,
                    timer: 1500,
                    backdrop: "rgba(0,0,0,0.4)"
                });
                return false;
            } else if ($("#actCultural").val().trim() === "otra") {
                if ($("#otraCult").val().trim() === "") {
                    Swal.fire({
                        title: "Defina el nombre de la\nActividad Cultural",
                        icon: "warning",
                        showConfirmButton: false,
                        timer: 1500,
                        backdrop: "rgba(0,0,0,0.4)"
                    });
                    return false;
                }
            }
        }
        if (s_depor4.val() === "1") {
            if ($("#actDeportiva").val().trim() === "") {
                Swal.fire({
                    title: "Seleccione el nombre de la\nActividad Deportiva",
                    icon: "warning",
                    showConfirmButton: false,
                    timer: 1500,
                    backdrop: "rgba(0,0,0,0.4)"
                });
                return false;
            } else if ($("#actDeportiva").val().trim() === "otra") {
                if ($("#otraDepor").val().trim() === "") {
                    Swal.fire({
                        title: "Defina el nombre de la\nActividad Deportiva",
                        icon: "warning",
                        showConfirmButton: false,
                        timer: 1500,
                        backdrop: "rgba(0,0,0,0.4)"
                    });
                    return false;
                }
            }
        }
        if (s_compl4.val() === "1") {
            if ($("#actComple").val().trim() === "") {
                Swal.fire({
                    title: "Seleccione el nombre de la\nActividad Complementaria",
                    icon: "warning",
                    showConfirmButton: false,
                    timer: 1500,
                    backdrop: "rgba(0,0,0,0.4)"
                });
                return false;
            } else if ($("#actComple").val().trim() === "otra") {
                if ($("#otraComple").val().trim() === "") {
                    Swal.fire({
                        title: "Defina el nombre de la\nActividad Complementaria",
                        icon: "warning",
                        showConfirmButton: false,
                        timer: 1500,
                        backdrop: "rgba(0,0,0,0.4)"
                    });
                    return false;
                }
            }
        }

        if ($("#cantidad_materias_4").val().trim() === "") {
            Swal.fire({
                title: "Seleccione el número de Asignaturas Cursadas",
                icon: "warning",
                showConfirmButton: false,
                timer: 2000,
                backdrop: "rgba(0,0,0,0.4)"
            });
            return false;
        } else {
            if ($(".materiaN_4").val().trim() === "") {
                Swal.fire({
                    title: "Campos de Materías\nVACÍOS!!!",
                    icon: "warning",
                    showConfirmButton: false,
                    timer: 2000,
                    backdrop: "rgba(0,0,0,0.4)"
                });
                return false;
            } else if ($(".calificacionN_4").val().trim() === "") {
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

        if ($("#materias_reprobadas_4").val().trim() !== "") {
            if ($(".materiarep_4").val().trim() === "") {
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

        if (!$("[name=beca_4]").is(":checked")) {
            Swal.fire({
                title: "¿Se encuentra Becado?\nSí o No",
                icon: "warning",
                showConfirmButton: false,
                timer: 2000,
                backdrop: "rgba(0,0,0,0.4)"
            });
            return false;
        } else {
            if ($("[name=beca_4]:checked").val() === "SÍ") {
                if ($("#tipo_beca_4").val().trim() === "") {
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

        if ($("#canalizacion1_4").is(":checked")) {
            if ($("#folioAM_4").val().trim() === "") {
                Swal.fire({
                    title: "Ingrese el Folio de la Canalización",
                    icon: "warning",
                    showConfirmButton: false,
                    timer: 1500,
                    backdrop: "rgba(0,0,0,0.4)"
                });
                return false;
            }
        } else if ($("#canalizacion2_4").is(":checked")) {
            if ($("#folioAP_4").val().trim() === "") {
                Swal.fire({
                    title: "Ingrese el Folio de la Canalización",
                    icon: "warning",
                    showConfirmButton: false,
                    timer: 1500,
                    backdrop: "rgba(0,0,0,0.4)"
                });
                return false;
            }
        } else if ($("#canalizacion3_4").is(":checked")) {
            if ($("#folioAPar_4").val().trim() === "") {
                Swal.fire({
                    title: "Ingrese el Folio de la Canalización",
                    icon: "warning",
                    showConfirmButton: false,
                    timer: 1500,
                    backdrop: "rgba(0,0,0,0.4)"
                });
                return false;
            }
        } else if ($("#canalizacion4_4").is(":checked")) {
            if ($("#folioTInd_4").val().trim() === "") {
                Swal.fire({
                    title: "Ingrese el Folio de la Canalización",
                    icon: "warning",
                    showConfirmButton: false,
                    timer: 1500,
                    backdrop: "rgba(0,0,0,0.4)"
                });
                return false;
            }
        } else if ($("#canalizacion5_4").is(":checked")) {
            if ($("#folioOtra_4").val().trim() === "") {
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

        if ($("#observaciones_4").val().trim() === "") {
            Swal.fire({
                title: 'Describa las Observaciones:\n"Enero - Junio"',
                icon: "warning",
                showConfirmButton: false,
                timer: 1500,
                backdrop: "rgba(0,0,0,0.4)"
            });
            return false;
        }

        Swal.fire({
            title: "¿Guardar Trayectoria de 4to Semestre?",
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
                    url: "php/form_tsem4.php",
                    type: 'POST',
                    data: trayectoria4sem.serialize(),
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
                trayectoria4sem[0].reset()
                setTimeout('window.close()',5000)
            }
        })

    })

    $("#CerrarVentana4").on("click", function (){
        trayectoria4sem[0].reset()
        window.close();
    })


})
