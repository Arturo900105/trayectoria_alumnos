let trayectoria8sem, s_tuto8, s_cult8, s_depor8, s_compl8, calificacion8, nuevaCalificacion8;
let creditoTutoria8, creditoCultural8, creditoDeportiva8, creditoComplementaria8;
let newCrediTutoria8, newCrediCultural8, newCrediDeportiva8, newCrediComplementaria8;
let result_tcd1_8, result_tcd2_8, result_tcd3_8, result_tcd4_8, result_tcd5_8, result_tcd6_8, result_tcd7_8, result_tcd8_8;
let result_tcd9_8, result_tcd10_8, result_tcd11_8, result_tcd12_8, result_tcd13_8, result_tcd14_8, result_tcd15_8;
let materiasCursadas8, materiasReprobadas8;

$(document).ready(function (){
    trayectoria8sem = $("#trayectoria8")
    trayectoria8sem[0].reset()
    materiasCursadas8 = $("#cantidad_materias_8")
    materiasReprobadas8 = $("#materias_reprobadas_8")

    $("#relIngles_8, #lugar_servsoc8, .fila-materias_8, .relbeca_8, .materiarep_8, .folios_canal_8").hide()
    $("#fila1, #fila2, #fila3, .otraActividad, #otraComple").hide()

    s_tuto8 = $("#tutoria_8")
    s_cult8 = $("#cultural_8")
    s_depor8 = $("#deportiva_8")
    s_compl8 = $("#complementaria_8")

    $('.credito_8, #complementaria_8, .calificacionN_8, .folios_canal_8').on('input', function () {
        this.value = this.value.replace(/[^0-9]/g,'');
    })

    trayectoria8sem.on("change keypress paste focus textInput input",function() {
        creditoTutoria8 = s_tuto8.val()
        creditoCultural8 = s_cult8.val()
        creditoDeportiva8 = s_depor8.val()
        creditoComplementaria8 = s_compl8.val()

        newCrediTutoria8 = creditoTutoria8.replace(/\D/g, "")
        newCrediCultural8 = creditoCultural8.replace(/\D/g, "")
        newCrediDeportiva8 = creditoDeportiva8.replace(/\D/g, "")
        newCrediComplementaria8 = creditoComplementaria8.replace(/\D/g, "")

        if (newCrediTutoria8 > 2) {
            s_tuto8.val(2)
        } else {
            s_tuto8.val(newCrediTutoria8)
        }

        if (newCrediCultural8 > 1) {
            s_cult8.val(1)
        } else {
            s_cult8.val(newCrediCultural8)
        }

        if (newCrediDeportiva8 > 1) {
            s_depor8.val(1)
        } else {
            s_depor8.val(newCrediDeportiva8)
        }

        if (creditoComplementaria8 > 1) {
            s_compl8.val(1)
        } else {
            s_compl8.val(creditoComplementaria8)
        }
    })

    trayectoria8sem.on("keyup", function () {
        result_tcd1_8 = parseInt(s_tuto8.val())
        result_tcd2_8 = parseInt(s_cult8.val())
        result_tcd3_8 = parseInt(s_depor8.val())
        result_tcd4_8 = parseInt(s_compl8.val())
        result_tcd5_8 = result_tcd1_8 + result_tcd2_8;
        result_tcd6_8 = result_tcd1_8 + result_tcd3_8;
        result_tcd7_8 = result_tcd1_8 + result_tcd4_8;
        result_tcd8_8 = result_tcd2_8 + result_tcd3_8;
        result_tcd9_8 = result_tcd2_8 + result_tcd4_8;
        result_tcd10_8 = result_tcd3_8 + result_tcd4_8;
        result_tcd11_8 = result_tcd1_8 + result_tcd2_8 + result_tcd3_8;
        result_tcd12_8 = result_tcd1_8 + result_tcd2_8 + result_tcd4_8;
        result_tcd13_8 = result_tcd1_8 + result_tcd3_8 + result_tcd4_8;
        result_tcd14_8 = result_tcd2_8 + result_tcd3_8 + result_tcd4_8;
        result_tcd15_8 = result_tcd1_8 + result_tcd2_8 + result_tcd3_8 + result_tcd4_8;

        if (s_tuto8.val().trim()==='' && s_cult8.val().trim()==='' && s_depor8.val().trim()==='' && s_compl8.val().trim()==='') {
            $("#suma_tcdc_8").val("")
        } else if (s_cult8.val().trim()==='' && s_depor8.val().trim()==='' && s_compl8.val().trim()==='') {
            $("#suma_tcdc_8").val(result_tcd1_8)
        } else if (s_tuto8.val().trim()==='' && s_depor8.val().trim()==='' && s_compl8.val().trim()==='') {
            $("#suma_tcdc_8").val(result_tcd2_8)
        } else if (s_tuto8.val().trim()==='' && s_cult8.val().trim()==='' && s_compl8.val().trim()==='') {
            $("#suma_tcdc_8").val(result_tcd3_8)
        } else if (s_tuto8.val().trim()==='' && s_cult8.val().trim()==='' && s_depor8.val().trim()==='' ) {
            $("#suma_tcdc_8").val(result_tcd4_8)
        } else if (s_depor8.val().trim()==='' && s_compl8.val().trim()==='') {
            $("#suma_tcdc_8").val(result_tcd5_8)
        } else if (s_cult8.val().trim()==='' && s_compl8.val().trim()==='') {
            $("#suma_tcdc_8").val(result_tcd6_8)
        } else if (s_cult8.val().trim()==='' && s_depor8.val().trim()==='') {
            $("#suma_tcdc_8").val(result_tcd7_8)
        } else if (s_tuto8.val().trim()==='' && s_compl8.val().trim()==='') {
            $("#suma_tcdc_8").val(result_tcd8_8)
        } else if (s_tuto8.val().trim()==='' && s_depor8.val().trim()==='') {
            $("#suma_tcdc_8").val(result_tcd9_8)
        } else if (s_tuto8.val().trim()==='' && s_cult8.val().trim()==='') {
            $("#suma_tcdc_8").val(result_tcd10_8)
        } else if (s_compl8.val().trim()==='') {
            $("#suma_tcdc_8").val(result_tcd11_8)
        } else if (s_depor8.val().trim()==='') {
            $("#suma_tcdc_8").val(result_tcd12_8)
        } else if (s_cult8.val().trim()==='') {
            $("#suma_tcdc_8").val(result_tcd13_8)
        } else if (s_tuto8.val().trim()==='') {
            $("#suma_tcdc_8").val(result_tcd14_8)
        } else {
            $("#suma_tcdc_8").val(result_tcd15_8)
        }

        if (s_cult8.val() === "1") {
            $("#fila1").show()
        } else {
            $("#fila1").hide()
            $("#actCultural").val("")
            $("#otraCult").hide().val("")
        }

        if (s_depor8.val() === "1") {
            $("#fila2").show()
        } else {
            $("#fila2").hide()
            $("#actDeportiva").val("")
            $("#otraDepor").hide().val("")
        }

        if (s_compl8.val() === "1") {
            $("#fila3").show()
        } else {
            $("#fila3").hide()
            $("#actComple").val("")
            $("#otraComple").hide().val("")
        }
    })

    trayectoria8sem.on("click", function (){
        if ($("[name = ingles_8]:checked").val() === "SÍ"){
            $("#relIngles_8").show()
        } else{
            $("#relIngles_8").hide()
            $("#nivel_ingles_8").val("")
            $("input[name = ubicacion_8]").prop("checked", false)
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

        if ($("[name=servSocial_8]:checked").val() === "SÍ") {
            $("#lugar_servsoc8").show()
        } else {
            $("#lugar_servsoc8").hide().val("")
        }

        if (materiasCursadas8.val().trim() === ""){
            $(".fila-materias_8").hide()
            $(".materiaN_8").val("")
            $(".calificacionN_8").val("")
        } else if (materiasCursadas8.val().trim() === "1"){
            $("#fila-materias1_8").show()
            $("#fila-materias2_8").hide()
            $("#fila-materias3_8").hide()
            $("#fila-materias4_8").hide()
            $("#fila-materias5_8").hide()
            $("#fila-materias6_8").hide()
            $("#fila-materias7_8").hide()

            $("[name = materia2_8], [name = calificacion2_8]").val("")
            $("[name = materia3_8], [name = calificacion3_8]").val("")
            $("[name = materia4_8], [name = calificacion4_8]").val("")
            $("[name = materia5_8], [name = calificacion5_8]").val("")
            $("[name = materia6_8], [name = calificacion6_8]").val("")
            $("[name = materia7_8], [name = calificacion7_8]").val("")

        } else if (materiasCursadas8.val().trim() === "2"){
            $("#fila-materias1_8").show()
            $("#fila-materias2_8").show()
            $("#fila-materias3_8").hide()
            $("#fila-materias4_8").hide()
            $("#fila-materias5_8").hide()
            $("#fila-materias6_8").hide()
            $("#fila-materias7_8").hide()

            $("[name = materia3_8], [name = calificacion3_8]").val("")
            $("[name = materia4_8], [name = calificacion4_8]").val("")
            $("[name = materia5_8], [name = calificacion5_8]").val("")
            $("[name = materia6_8], [name = calificacion6_8]").val("")
            $("[name = materia7_8], [name = calificacion7_8]").val("")
        } else if (materiasCursadas8.val().trim() === "3"){
            $("#fila-materias1_8").show()
            $("#fila-materias2_8").show()
            $("#fila-materias3_8").show()
            $("#fila-materias4_8").hide()
            $("#fila-materias5_8").hide()
            $("#fila-materias6_8").hide()
            $("#fila-materias7_8").hide()

            $("[name = materia4_8], [name = calificacion4_8]").val("")
            $("[name = materia5_8], [name = calificacion5_8]").val("")
            $("[name = materia6_8], [name = calificacion6_8]").val("")
            $("[name = materia7_8], [name = calificacion7_8]").val("")
        } else if (materiasCursadas8.val().trim() === "4"){
            $("#fila-materias1_8").show()
            $("#fila-materias2_8").show()
            $("#fila-materias3_8").show()
            $("#fila-materias4_8").show()
            $("#fila-materias5_8").hide()
            $("#fila-materias6_8").hide()
            $("#fila-materias7_8").hide()

            $("[name = materia5_8], [name = calificacion5_8]").val("")
            $("[name = materia6_8], [name = calificacion6_8]").val("")
            $("[name = materia7_8], [name = calificacion7_8]").val("")
        } else if (materiasCursadas8.val().trim() === "5"){
            $("#fila-materias1_8").show()
            $("#fila-materias2_8").show()
            $("#fila-materias3_8").show()
            $("#fila-materias4_8").show()
            $("#fila-materias5_8").show()
            $("#fila-materias6_8").hide()
            $("#fila-materias7_8").hide()

            $("[name = materia6_8], [name = calificacion6_8]").val("")
            $("[name = materia7_8], [name = calificacion7_8]").val("")
        } else if (materiasCursadas8.val().trim() === "6"){
            $("#fila-materias1_8").show()
            $("#fila-materias2_8").show()
            $("#fila-materias3_8").show()
            $("#fila-materias4_8").show()
            $("#fila-materias5_8").show()
            $("#fila-materias6_8").show()
            $("#fila-materias7_8").hide()

            $("[name = materia7_8], [name = calificacion7_8]").val("")
        } else {
            $(".fila-materias_8").show()
        }

        if ($("[name = beca_8]:checked").val() === "SÍ"){
            $("#relbeca_8").show()
        } else{
            $("#relbeca_8").hide()
            $("#tipo_beca_8").val("")
        }

        if (materiasReprobadas8.val().trim() === ''){
            $(".materiarep_8").hide().val("")
        } else if (materiasReprobadas8.val().trim() === '1'){
            $("#materiarep1_8").show();
            $("#materiarep2_8").hide().val("")
            $("#materiarep3_8").hide().val("")
            $("#materiarep4_8").hide().val("")
            $("#materiarep5_8").hide().val("")
            $("#materiarep6_8").hide().val("")
            $("#materiarep7_8").hide().val("")
        } else if (materiasReprobadas8.val().trim() === '2'){
            $("#materiarep1_8").show()
            $("#materiarep2_8").show()
            $("#materiarep3_8").hide().val("")
            $("#materiarep4_8").hide().val("")
            $("#materiarep5_8").hide().val("")
            $("#materiarep6_8").hide().val("")
            $("#materiarep7_8").hide().val("")
        } else if (materiasReprobadas8.val().trim() === '3'){
            $("#materiarep1_8").show()
            $("#materiarep2_8").show()
            $("#materiarep3_8").show()
            $("#materiarep4_8").hide().val("")
            $("#materiarep5_8").hide().val("")
            $("#materiarep6_8").hide().val("")
            $("#materiarep7_8").hide().val("")
        } else if (materiasReprobadas8.val().trim() === '4'){
            $("#materiarep1_8").show()
            $("#materiarep2_8").show()
            $("#materiarep3_8").show()
            $("#materiarep4_8").show()
            $("#materiarep5_8").hide().val("")
            $("#materiarep6_8").hide().val("")
            $("#materiarep7_8").hide().val("")
        } else if (materiasReprobadas8.val().trim() === '5'){
            $("#materiarep1_8").show()
            $("#materiarep2_8").show()
            $("#materiarep3_8").show()
            $("#materiarep4_8").show()
            $("#materiarep5_8").show()
            $("#materiarep6_8").hide().val("")
            $("#materiarep7_8").hide().val("")
        } else if (materiasReprobadas8.val().trim() === '6'){
            $("#materiarep1_8").show()
            $("#materiarep2_8").show()
            $("#materiarep3_8").show()
            $("#materiarep4_8").show()
            $("#materiarep5_8").show()
            $("#materiarep6_8").show()
            $("#materiarep7_8").hide().val("")
        } else {
            $(".materiarep_8").show()
        }

        if (materiasCursadas8.val() === "") {
            materiasReprobadas8.val("")
            $(".materiarep_8").hide()
        } else if (materiasCursadas8.val() < materiasReprobadas8.val()) {
            materiasReprobadas8.val("")
            $(".materiarep_8").hide()
        }

        if ($("#canalizacion1_8").is(":checked")) {
            $("#folioAM_8").show()
        } else {
            $("#folioAM_8").hide().val("")
        }

        if ($("#canalizacion2_8").is(":checked")) {
            $("#folioAP_8").show()
        } else {
            $("#folioAP_8").hide().val("")
        }

        if ($("#canalizacion3_8").is(":checked")) {
            $("#folioAPar_8").show()
        } else {
            $("#folioAPar_8").hide().val("")
        }

        if ($("#canalizacion4_8").is(":checked")) {
            $("#folioTInd_8").show()
        } else {
            $("#folioTInd_8").hide().val("")
        }

        if ($("#canalizacion5_8").is(":checked")) {
            $("#folioOtra_8").show()
        } else {
            $("#folioOtra_8").hide().val("")
        }
    })

    $(".calificacionN_8").on("change keypress paste focus textInput input",function() {
        calificacion8 = $(this).val()
        nuevaCalificacion8 = calificacion8.replace(/\D/g, "")

        if (nuevaCalificacion8 > 100) {
            $(this).val(nuevaCalificacion8[0]+nuevaCalificacion8[1])

        } else if (nuevaCalificacion8 < 70 && nuevaCalificacion8 >= 20) {
            $(this).val(0)

        } else if (nuevaCalificacion8 >= 10 && nuevaCalificacion8 < 20) {
            $(this).val(100)

        } else if (nuevaCalificacion8 === 0) {
            $(this).val(0)

        } else if (nuevaCalificacion8 === "00") {
            $(this).val(0)

        } else if (nuevaCalificacion8 === "000") {
            $(this).val(0)

        } else if (nuevaCalificacion8[0] === "0" && nuevaCalificacion8[1] > 0) {
            $(this).val(0)
        }
    })

    $(".folios_canal_8").on("change keypress paste focus textInput input", function (){
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

    materiasReprobadas8.on("click", function (){
        if (materiasReprobadas8.val() > materiasCursadas8.val()){
            Swal.fire({
                title: 'Fuera del rango de las Asignaturas Cursadas',
                icon: "warning",
                showConfirmButton: false,
                timer: 1500,
                backdrop: "rgba(0,0,0,0.4)"
            });
            materiasReprobadas8.val("")
        } else if (materiasCursadas8.val() === "") {
            Swal.fire({
                title: 'Seleccione primero\nlas asignaturas cursadas\ndurante el semestre',
                icon: "warning",
                showConfirmButton: false,
                timer: 2500,
                backdrop: "rgba(0,0,0,0.4)"
            });
        }
    })

    trayectoria8sem.submit(function (e){
        e.preventDefault()

        if (!$("[name=ingles_8]").is(":checked")) {
            Swal.fire({
                title: "Cursando idioma Inglés\n¡Sin contestar!",
                icon: "warning",
                showConfirmButton: false,
                timer: 2000,
                backdrop: "rgba(0,0,0,0.4)"
            });
            return false;
        } else {
            if ($("[name=ingles_8]:checked").val() === "SÍ") {
                if ($("#nivel_ingles_8").val().trim() === ""){
                    Swal.fire({
                        title: "Nivel de Inglés\n¡Sin contestar!",
                        icon: "warning",
                        showConfirmButton: false,
                        timer: 2000,
                        backdrop: "rgba(0,0,0,0.4)"
                    });
                    return false;
                } else if (!$("[name=ubicacion_8]").is(":checked")) {
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

        if ($("#tutoria_8").val().trim() === "") {
            Swal.fire({
                title: "¡Campo Vacío!\nTutoría I y II",
                icon: "warning",
                showConfirmButton: false,
                timer: 2000,
                backdrop: "rgba(0,0,0,0.4)"
            });
            return false;
        } else if ($("#cultural_8").val().trim() === ""){
            Swal.fire({
                title: "¡Campo Vacío!\nCultural",
                icon: "warning",
                showConfirmButton: false,
                timer: 2000,
                backdrop: "rgba(0,0,0,0.4)"
            });
            return false;
        } else if ($("#deportiva_8").val().trim() === ""){
            Swal.fire({
                title: "¡Campo Vacío!\nDeportiva",
                icon: "warning",
                showConfirmButton: false,
                timer: 2000,
                backdrop: "rgba(0,0,0,0.4)"
            });
            return false;
        }

        if (s_cult8.val() === "1") {
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
        if (s_depor8.val() === "1") {
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
        if (s_compl8.val() === "1") {
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

        if (!$("[name=servSocial_8]").is(":checked")) {
            Swal.fire({
                title: "Servicio Social\n¡Sin contestar!",
                icon: "warning",
                showConfirmButton: false,
                timer: 2000,
                backdrop: "rgba(0,0,0,0.4)"
            });
            return false;
        } else {
            if ($("[name=servSocial_8]:checked").val() === "SÍ") {
                if ($("#lugar_servsoc8").val().trim() === "") {
                    Swal.fire({
                        title: "Lugar donde realiza el\nServicio Social...",
                        icon: "warning",
                        showConfirmButton: false,
                        timer: 2000,
                        backdrop: "rgba(0,0,0,0.4)"
                    });
                    return false;
                }
            }
        }

        if ($("#cantidad_materias_8").val().trim() === "") {
            Swal.fire({
                title: "Seleccione el número de Asignaturas Cursadas",
                icon: "warning",
                showConfirmButton: false,
                timer: 2000,
                backdrop: "rgba(0,0,0,0.4)"
            });
            return false;
        } else {
            if ($(".materiaN_8").val().trim() === "") {
                Swal.fire({
                    title: "Campos de Materías\nVACÍOS!!!",
                    icon: "warning",
                    showConfirmButton: false,
                    timer: 2000,
                    backdrop: "rgba(0,0,0,0.4)"
                });
                return false;
            } else if ($(".calificacionN_8").val().trim() === "") {
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

        if ($("#materias_reprobadas_8").val().trim() !== "") {
            if ($(".materiarep_8").val().trim() === "") {
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

        if (!$("[name=beca_8]").is(":checked")) {
            Swal.fire({
                title: "¿Se encuentra Becado?\nSí o No",
                icon: "warning",
                showConfirmButton: false,
                timer: 2000,
                backdrop: "rgba(0,0,0,0.4)"
            });
            return false;
        } else {
            if ($("[name=beca_8]:checked").val() === "SÍ") {
                if ($("#tipo_beca_8").val().trim() === "") {
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

        if ($("#canalizacion1_8").is(":checked")) {
            if ($("#folioAM_8").val().trim() === "") {
                Swal.fire({
                    title: "Ingrese el Folio de la Canalización",
                    icon: "warning",
                    showConfirmButton: false,
                    timer: 1500,
                    backdrop: "rgba(0,0,0,0.4)"
                });
                return false;
            }
        } else if ($("#canalizacion2_8").is(":checked")) {
            if ($("#folioAP_8").val().trim() === "") {
                Swal.fire({
                    title: "Ingrese el Folio de la Canalización",
                    icon: "warning",
                    showConfirmButton: false,
                    timer: 1500,
                    backdrop: "rgba(0,0,0,0.4)"
                });
                return false;
            }
        } else if ($("#canalizacion3_8").is(":checked")) {
            if ($("#folioAPar_8").val().trim() === "") {
                Swal.fire({
                    title: "Ingrese el Folio de la Canalización",
                    icon: "warning",
                    showConfirmButton: false,
                    timer: 1500,
                    backdrop: "rgba(0,0,0,0.4)"
                });
                return false;
            }
        } else if ($("#canalizacion4_8").is(":checked")) {
            if ($("#folioTInd_8").val().trim() === "") {
                Swal.fire({
                    title: "Ingrese el Folio de la Canalización",
                    icon: "warning",
                    showConfirmButton: false,
                    timer: 1500,
                    backdrop: "rgba(0,0,0,0.4)"
                });
                return false;
            }
        } else if ($("#canalizacion5_8").is(":checked")) {
            if ($("#folioOtra_8").val().trim() === "") {
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

        if ($("#observaciones_8").val().trim() === "") {
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
            title: "¿Guardar Trayectoria de 8vo Semestre?",
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
                    url: "php/form_tsem8.php",
                    type: 'POST',
                    data: trayectoria8sem.serialize(),
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
                trayectoria8sem[0].reset()
                setTimeout('window.close()',5000)
            }
        })

    })

    $("#CerrarVentana8").on("click", function (){
        trayectoria8sem[0].reset()
        window.close();
    })
})