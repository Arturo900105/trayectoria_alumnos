let trayectoria9sem, s_tuto9, s_cult9, s_depor9, s_compl9, calificacion9, nuevaCalificacion9;
let creditoTutoria9, creditoCultural9, creditoDeportiva9, creditoComplementaria9;
let newCrediTutoria9, newCrediCultural9, newCrediDeportiva9, newCrediComplementaria9;
let result_tcd1_9, result_tcd2_9, result_tcd3_9, result_tcd4_9, result_tcd5_9, result_tcd6_9, result_tcd7_9, result_tcd8_9;
let result_tcd9_9, result_tcd10_9, result_tcd11_9, result_tcd12_9, result_tcd13_9, result_tcd14_9, result_tcd15_9;
let materiasCursadas9, materiasReprobadas9;

$(document).ready(function (){
    trayectoria9sem = $("#trayectoria9")
    trayectoria9sem[0].reset()
    materiasCursadas9 = $("#cantidad_materias_9")
    materiasReprobadas9 = $("#materias_reprobadas_9")

    $("#relIngles_9, #lugar_residencia, .fila-materias_9, .relbeca_9, .materiarep_9, .folios_canal_9").hide()
    $("#fila1, #fila2, #fila3, .otraActividad, #otraComple").hide()

    s_tuto9 = $("#tutoria_9")
    s_cult9 = $("#cultural_9")
    s_depor9 = $("#deportiva_9")
    s_compl9 = $("#complementaria_9")

    $('.credito_9, #complementaria_9, .calificacionN_9, .folios_canal_9').on('input', function () {
        this.value = this.value.replace(/[^0-9]/g,'');
    })


    trayectoria9sem.on("change keypress paste focus textInput input",function() {
        creditoTutoria9 = s_tuto9.val()
        creditoCultural9 = s_cult9.val()
        creditoDeportiva9 = s_depor9.val()
        creditoComplementaria9 = s_compl9.val()

        newCrediTutoria9 = creditoTutoria9.replace(/\D/g, "")
        newCrediCultural9 = creditoCultural9.replace(/\D/g, "")
        newCrediDeportiva9 = creditoDeportiva9.replace(/\D/g, "")
        newCrediComplementaria9 = creditoComplementaria9.replace(/\D/g, "")

        if (newCrediTutoria9 > 2) {
            s_tuto9.val(2)
        } else {
            s_tuto9.val(newCrediTutoria9)
        }

        if (newCrediCultural9 > 1) {
            s_cult9.val(1)
        } else {
            s_cult9.val(newCrediCultural9)
        }

        if (newCrediDeportiva9 > 1) {
            s_depor9.val(1)
        } else {
            s_depor9.val(newCrediDeportiva9)
        }

        if (creditoComplementaria9 > 1) {
            s_compl9.val(1)
        } else {
            s_compl9.val(creditoComplementaria9)
        }
    })


    trayectoria9sem.on("keyup", function () {
        result_tcd1_9 = parseInt(s_tuto9.val())
        result_tcd2_9 = parseInt(s_cult9.val())
        result_tcd3_9 = parseInt(s_depor9.val())
        result_tcd4_9 = parseInt(s_compl9.val())
        result_tcd5_9 = result_tcd1_9 + result_tcd2_9;
        result_tcd6_9 = result_tcd1_9 + result_tcd3_9;
        result_tcd7_9 = result_tcd1_9 + result_tcd4_9;
        result_tcd8_9 = result_tcd2_9 + result_tcd3_9;
        result_tcd9_9 = result_tcd2_9 + result_tcd4_9;
        result_tcd10_9 = result_tcd3_9 + result_tcd4_9;
        result_tcd11_9 = result_tcd1_9 + result_tcd2_9 + result_tcd3_9;
        result_tcd12_9 = result_tcd1_9 + result_tcd2_9 + result_tcd4_9;
        result_tcd13_9 = result_tcd1_9 + result_tcd3_9 + result_tcd4_9;
        result_tcd14_9 = result_tcd2_9 + result_tcd3_9 + result_tcd4_9;
        result_tcd15_9 = result_tcd1_9 + result_tcd2_9 + result_tcd3_9 + result_tcd4_9;

        if (s_tuto9.val().trim()==='' && s_cult9.val().trim()==='' && s_depor9.val().trim()==='' && s_compl9.val().trim()==='') {
            $("#suma_tcdc_9").val("")
        } else if (s_cult9.val().trim()==='' && s_depor9.val().trim()==='' && s_compl9.val().trim()==='') {
            $("#suma_tcdc_9").val(result_tcd1_9)
        } else if (s_tuto9.val().trim()==='' && s_depor9.val().trim()==='' && s_compl9.val().trim()==='') {
            $("#suma_tcdc_9").val(result_tcd2_9)
        } else if (s_tuto9.val().trim()==='' && s_cult9.val().trim()==='' && s_compl9.val().trim()==='') {
            $("#suma_tcdc_9").val(result_tcd3_9)
        } else if (s_tuto9.val().trim()==='' && s_cult9.val().trim()==='' && s_depor9.val().trim()==='' ) {
            $("#suma_tcdc_9").val(result_tcd4_9)
        } else if (s_depor9.val().trim()==='' && s_compl9.val().trim()==='') {
            $("#suma_tcdc_9").val(result_tcd5_9)
        } else if (s_cult9.val().trim()==='' && s_compl9.val().trim()==='') {
            $("#suma_tcdc_9").val(result_tcd6_9)
        } else if (s_cult9.val().trim()==='' && s_depor9.val().trim()==='') {
            $("#suma_tcdc_9").val(result_tcd7_9)
        } else if (s_tuto9.val().trim()==='' && s_compl9.val().trim()==='') {
            $("#suma_tcdc_9").val(result_tcd8_9)
        } else if (s_tuto9.val().trim()==='' && s_depor9.val().trim()==='') {
            $("#suma_tcdc_9").val(result_tcd9_9)
        } else if (s_tuto9.val().trim()==='' && s_cult9.val().trim()==='') {
            $("#suma_tcdc_9").val(result_tcd10_9)
        } else if (s_compl9.val().trim()==='') {
            $("#suma_tcdc_9").val(result_tcd11_9)
        } else if (s_depor9.val().trim()==='') {
            $("#suma_tcdc_9").val(result_tcd12_9)
        } else if (s_cult9.val().trim()==='') {
            $("#suma_tcdc_9").val(result_tcd13_9)
        } else if (s_tuto9.val().trim()==='') {
            $("#suma_tcdc_9").val(result_tcd14_9)
        } else {
            $("#suma_tcdc_9").val(result_tcd15_9)
        }

        if (s_cult9.val() === "1") {
            $("#fila1").show()
        } else {
            $("#fila1").hide()
            $("#actCultural").val("")
            $("#otraCult").hide().val("")
        }

        if (s_depor9.val() === "1") {
            $("#fila2").show()
        } else {
            $("#fila2").hide()
            $("#actDeportiva").val("")
            $("#otraDepor").hide().val("")
        }

        if (s_compl9.val() === "1") {
            $("#fila3").show()
        } else {
            $("#fila3").hide()
            $("#actComple").val("")
            $("#otraComple").hide().val("")
        }
    })

    trayectoria9sem.on("click", function (){
        if ($("[name = ingles_9]:checked").val() === "SÍ"){
            $("#relIngles_9").show()
        } else{
            $("#relIngles_9").hide()
            $("#nivel_ingles_9").val("")
            $("input[name = ubicacion_9]").prop("checked", false)
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

        if ($("[name=residencia]:checked").val() === "SÍ") {
            $("#lugar_residencia").show()
        } else {
            $("#lugar_residencia").hide().val("")
        }

        if (materiasCursadas9.val().trim() === ""){
            $(".fila-materias_9").hide()
            $(".materiaN_9").val("")
            $(".calificacionN_9").val("")
        } else if (materiasCursadas9.val().trim() === "1"){
            $("#fila-materias1_9").show()
            $("#fila-materias2_9").hide()
            $("#fila-materias3_9").hide()
            $("#fila-materias4_9").hide()
            $("#fila-materias5_9").hide()
            $("#fila-materias6_9").hide()
            $("#fila-materias7_9").hide()

            $("[name = materia2_9], [name = calificacion2_9]").val("")
            $("[name = materia3_9], [name = calificacion3_9]").val("")
            $("[name = materia4_9], [name = calificacion4_9]").val("")
            $("[name = materia5_9], [name = calificacion5_9]").val("")
            $("[name = materia6_9], [name = calificacion6_9]").val("")
            $("[name = materia7_9], [name = calificacion7_9]").val("")

        } else if (materiasCursadas9.val().trim() === "2"){
            $("#fila-materias1_9").show()
            $("#fila-materias2_9").show()
            $("#fila-materias3_9").hide()
            $("#fila-materias4_9").hide()
            $("#fila-materias5_9").hide()
            $("#fila-materias6_9").hide()
            $("#fila-materias7_9").hide()

            $("[name = materia3_9], [name = calificacion3_9]").val("")
            $("[name = materia4_9], [name = calificacion4_9]").val("")
            $("[name = materia5_9], [name = calificacion5_9]").val("")
            $("[name = materia6_9], [name = calificacion6_9]").val("")
            $("[name = materia7_9], [name = calificacion7_9]").val("")
        } else if (materiasCursadas9.val().trim() === "3"){
            $("#fila-materias1_9").show()
            $("#fila-materias2_9").show()
            $("#fila-materias3_9").show()
            $("#fila-materias4_9").hide()
            $("#fila-materias5_9").hide()
            $("#fila-materias6_9").hide()
            $("#fila-materias7_9").hide()

            $("[name = materia4_9], [name = calificacion4_9]").val("")
            $("[name = materia5_9], [name = calificacion5_9]").val("")
            $("[name = materia6_9], [name = calificacion6_9]").val("")
            $("[name = materia7_9], [name = calificacion7_9]").val("")
        } else if (materiasCursadas9.val().trim() === "4"){
            $("#fila-materias1_9").show()
            $("#fila-materias2_9").show()
            $("#fila-materias3_9").show()
            $("#fila-materias4_9").show()
            $("#fila-materias5_9").hide()
            $("#fila-materias6_9").hide()
            $("#fila-materias7_9").hide()

            $("[name = materia5_9], [name = calificacion5_9]").val("")
            $("[name = materia6_9], [name = calificacion6_9]").val("")
            $("[name = materia7_9], [name = calificacion7_9]").val("")
        } else if (materiasCursadas9.val().trim() === "5"){
            $("#fila-materias1_9").show()
            $("#fila-materias2_9").show()
            $("#fila-materias3_9").show()
            $("#fila-materias4_9").show()
            $("#fila-materias5_9").show()
            $("#fila-materias6_9").hide()
            $("#fila-materias7_9").hide()

            $("[name = materia6_9], [name = calificacion6_9]").val("")
            $("[name = materia7_9], [name = calificacion7_9]").val("")
        } else if (materiasCursadas9.val().trim() === "6"){
            $("#fila-materias1_9").show()
            $("#fila-materias2_9").show()
            $("#fila-materias3_9").show()
            $("#fila-materias4_9").show()
            $("#fila-materias5_9").show()
            $("#fila-materias6_9").show()
            $("#fila-materias7_9").hide()

            $("[name = materia7_9], [name = calificacion7_9]").val("")
        } else {
            $(".fila-materias_9").show()
        }


        if ($("[name = beca_9]:checked").val() === "SÍ"){
            $("#relbeca_9").show()
        } else{
            $("#relbeca_9").hide()
            $("#tipo_beca_9").val("")
        }


        if (materiasReprobadas9.val().trim() === ''){
            $(".materiarep_9").hide().val("")
        } else if (materiasReprobadas9.val().trim() === '1'){
            $("#materiarep1_9").show();
            $("#materiarep2_9").hide().val("")
            $("#materiarep3_9").hide().val("")
            $("#materiarep4_9").hide().val("")
            $("#materiarep5_9").hide().val("")
            $("#materiarep6_9").hide().val("")
            $("#materiarep7_9").hide().val("")
        } else if (materiasReprobadas9.val().trim() === '2'){
            $("#materiarep1_9").show()
            $("#materiarep2_9").show()
            $("#materiarep3_9").hide().val("")
            $("#materiarep4_9").hide().val("")
            $("#materiarep5_9").hide().val("")
            $("#materiarep6_9").hide().val("")
            $("#materiarep7_9").hide().val("")
        } else if (materiasReprobadas9.val().trim() === '3'){
            $("#materiarep1_9").show()
            $("#materiarep2_9").show()
            $("#materiarep3_9").show()
            $("#materiarep4_9").hide().val("")
            $("#materiarep5_9").hide().val("")
            $("#materiarep6_9").hide().val("")
            $("#materiarep7_9").hide().val("")
        } else if (materiasReprobadas9.val().trim() === '4'){
            $("#materiarep1_9").show()
            $("#materiarep2_9").show()
            $("#materiarep3_9").show()
            $("#materiarep4_9").show()
            $("#materiarep5_9").hide().val("")
            $("#materiarep6_9").hide().val("")
            $("#materiarep7_9").hide().val("")
        } else if (materiasReprobadas9.val().trim() === '5'){
            $("#materiarep1_9").show()
            $("#materiarep2_9").show()
            $("#materiarep3_9").show()
            $("#materiarep4_9").show()
            $("#materiarep5_9").show()
            $("#materiarep6_9").hide().val("")
            $("#materiarep7_9").hide().val("")
        } else if (materiasReprobadas9.val().trim() === '6'){
            $("#materiarep1_9").show()
            $("#materiarep2_9").show()
            $("#materiarep3_9").show()
            $("#materiarep4_9").show()
            $("#materiarep5_9").show()
            $("#materiarep6_9").show()
            $("#materiarep7_9").hide().val("")
        } else {
            $(".materiarep_9").show()
        }


        if (materiasCursadas9.val() === "") {
            materiasReprobadas9.val("")
            $(".materiarep_9").hide()
        } else if (materiasCursadas9.val() < materiasReprobadas9.val()) {
            materiasReprobadas9.val("")
            $(".materiarep_9").hide()
        }


        if ($("#canalizacion1_9").is(":checked")) {
            $("#folioAM_9").show()
        } else {
            $("#folioAM_9").hide().val("")
        }

        if ($("#canalizacion2_9").is(":checked")) {
            $("#folioAP_9").show()
        } else {
            $("#folioAP_9").hide().val("")
        }

        if ($("#canalizacion3_9").is(":checked")) {
            $("#folioAPar_9").show()
        } else {
            $("#folioAPar_9").hide().val("")
        }

        if ($("#canalizacion4_9").is(":checked")) {
            $("#folioTInd_9").show()
        } else {
            $("#folioTInd_9").hide().val("")
        }

        if ($("#canalizacion5_9").is(":checked")) {
            $("#folioOtra_9").show()
        } else {
            $("#folioOtra_9").hide().val("")
        }
    })


    $(".calificacionN_9").on("change keypress paste focus textInput input",function() {
        calificacion9 = $(this).val()
        nuevaCalificacion9 = calificacion9.replace(/\D/g, "")

        if (nuevaCalificacion9 > 100) {
            $(this).val(nuevaCalificacion9[0]+nuevaCalificacion9[1])

        } else if (nuevaCalificacion9 < 70 && nuevaCalificacion9 >= 20) {
            $(this).val(0)

        } else if (nuevaCalificacion9 >= 10 && nuevaCalificacion9 < 20) {
            $(this).val(100)

        } else if (nuevaCalificacion9 === 0) {
            $(this).val(0)

        } else if (nuevaCalificacion9 === "00") {
            $(this).val(0)

        } else if (nuevaCalificacion9 === "000") {
            $(this).val(0)

        } else if (nuevaCalificacion9[0] === "0" && nuevaCalificacion9[1] > 0) {
            $(this).val(0)
        }
    })

    $(".folios_canal_9").on("change keypress paste focus textInput input", function() {
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

    materiasReprobadas9.on("click", function (){
        if (materiasReprobadas9.val() > materiasCursadas9.val()){
            Swal.fire({
                title: 'Fuera del rango de las Asignaturas Cursadas',
                icon: "warning",
                showConfirmButton: false,
                timer: 1500,
                backdrop: "rgba(0,0,0,0.4)"
            });
            materiasReprobadas9.val("")
        } else if (materiasCursadas9.val() === "") {
            Swal.fire({
                title: 'Seleccione primero\nlas asignaturas cursadas\ndurante el semestre',
                icon: "warning",
                showConfirmButton: false,
                timer: 2500,
                backdrop: "rgba(0,0,0,0.4)"
            });
        }
    })


    trayectoria9sem.submit(function (e){
        e.preventDefault()

        if (!$("[name=ingles_9]").is(":checked")) {
            Swal.fire({
                title: "Cursando idioma Inglés\n¡Sin contestar!",
                icon: "warning",
                showConfirmButton: false,
                timer: 2000,
                backdrop: "rgba(0,0,0,0.4)"
            });
            return false;
        } else {
            if ($("[name=ingles_9]:checked").val() === "SÍ") {
                if ($("#nivel_ingles_9").val().trim() === ""){
                    Swal.fire({
                        title: "Nivel de Inglés\n¡Sin contestar!",
                        icon: "warning",
                        showConfirmButton: false,
                        timer: 2000,
                        backdrop: "rgba(0,0,0,0.4)"
                    });
                    return false;
                } else if (!$("[name=ubicacion_9]").is(":checked")) {
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

        if ($("#tutoria_9").val().trim() === "") {
            Swal.fire({
                title: "¡Campo Vacío!\nTutoría I y II",
                icon: "warning",
                showConfirmButton: false,
                timer: 2000,
                backdrop: "rgba(0,0,0,0.4)"
            });
            return false;
        } else if ($("#cultural_9").val().trim() === ""){
            Swal.fire({
                title: "¡Campo Vacío!\nCultural",
                icon: "warning",
                showConfirmButton: false,
                timer: 2000,
                backdrop: "rgba(0,0,0,0.4)"
            });
            return false;
        } else if ($("#deportiva_9").val().trim() === ""){
            Swal.fire({
                title: "¡Campo Vacío!\nDeportiva",
                icon: "warning",
                showConfirmButton: false,
                timer: 2000,
                backdrop: "rgba(0,0,0,0.4)"
            });
            return false;
        } else if ($("#complementaria_9").val().trim() === ""){
            Swal.fire({
                title: "¡Campo Vacío!\nActividad Complementaria",
                icon: "warning",
                showConfirmButton: false,
                timer: 2000,
                backdrop: "rgba(0,0,0,0.4)"
            });
            return false;
        }

        if (s_cult9.val() === "1") {
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
        if (s_depor9.val() === "1") {
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
        if (s_compl9.val() === "1") {
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

        if (!$("[name=residencia]").is(":checked")) {
            Swal.fire({
                title: "Residencias Profesionales\n¡Sin contestar!",
                icon: "warning",
                showConfirmButton: false,
                timer: 2000,
                backdrop: "rgba(0,0,0,0.4)"
            });
            return false;
        } else {
            if ($("[name=residencia]:checked").val() === "SÍ") {
                if ($("#lugar_residencia").val().trim() === "") {
                    Swal.fire({
                        title: "Lugar donde realiza las\nResidencias Profesionales...",
                        icon: "warning",
                        showConfirmButton: false,
                        timer: 2000,
                        backdrop: "rgba(0,0,0,0.4)"
                    });
                    return false;
                }
            }
        }

        if ($("#cantidad_materias_9").val().trim() === "") {
            Swal.fire({
                title: "Seleccione el número de Asignaturas Cursadas",
                icon: "warning",
                showConfirmButton: false,
                timer: 2000,
                backdrop: "rgba(0,0,0,0.4)"
            });
            return false;
        } else {
            if ($(".materiaN_9").val().trim() === "") {
                Swal.fire({
                    title: "Campos de Materías\nVACÍOS!!!",
                    icon: "warning",
                    showConfirmButton: false,
                    timer: 2000,
                    backdrop: "rgba(0,0,0,0.4)"
                });
                return false;
            } else if ($(".calificacionN_9").val().trim() === "") {
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

        if ($("#materias_reprobadas_9").val().trim() !== "") {
            if ($(".materiarep_9").val().trim() === "") {
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

        if (!$("[name=beca_9]").is(":checked")) {
            Swal.fire({
                title: "¿Se encuentra Becado?\nSí o No",
                icon: "warning",
                showConfirmButton: false,
                timer: 2000,
                backdrop: "rgba(0,0,0,0.4)"
            });
            return false;
        } else {
            if ($("[name=beca_9]:checked").val() === "SÍ") {
                if ($("#tipo_beca_9").val().trim() === "") {
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

        if ($("#canalizacion1_9").is(":checked")) {
            if ($("#folioAM_9").val().trim() === "") {
                Swal.fire({
                    title: "Ingrese el Folio de la Canalización",
                    icon: "warning",
                    showConfirmButton: false,
                    timer: 1500,
                    backdrop: "rgba(0,0,0,0.4)"
                });
                return false;
            }
        } else if ($("#canalizacion2_9").is(":checked")) {
            if ($("#folioAP_9").val().trim() === "") {
                Swal.fire({
                    title: "Ingrese el Folio de la Canalización",
                    icon: "warning",
                    showConfirmButton: false,
                    timer: 1500,
                    backdrop: "rgba(0,0,0,0.4)"
                });
                return false;
            }
        } else if ($("#canalizacion3_9").is(":checked")) {
            if ($("#folioAPar_9").val().trim() === "") {
                Swal.fire({
                    title: "Ingrese el Folio de la Canalización",
                    icon: "warning",
                    showConfirmButton: false,
                    timer: 1500,
                    backdrop: "rgba(0,0,0,0.4)"
                });
                return false;
            }
        } else if ($("#canalizacion4_9").is(":checked")) {
            if ($("#folioTInd_9").val().trim() === "") {
                Swal.fire({
                    title: "Ingrese el Folio de la Canalización",
                    icon: "warning",
                    showConfirmButton: false,
                    timer: 1500,
                    backdrop: "rgba(0,0,0,0.4)"
                });
                return false;
            }
        } else if ($("#canalizacion5_9").is(":checked")) {
            if ($("#folioOtra_9").val().trim() === "") {
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

        if ($("#observaciones_9").val().trim() === "") {
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
            title: "¿Guardar Trayectoria de 9no Semestre?",
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
                    url: "php/form_tsem9.php",
                    type: 'POST',
                    data: trayectoria9sem.serialize(),
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
                trayectoria9sem[0].reset()
                setTimeout('window.close()',5000)
            }
        })

    })


    $("#CerrarVentana9").on("click", function (){
        trayectoria9sem[0].reset()
        window.close();
    })


})

