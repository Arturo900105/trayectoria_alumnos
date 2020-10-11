let trayectoria3sem, s_tuto3, s_cult3, s_depor3, s_compl3, calificacion3, nuevaCalificacion3;
let result_tcd1_3, result_tcd2_3, result_tcd3_3, result_tcd4_3, result_tcd5_3, result_tcd6_3, result_tcd7_3, result_tcd8_3;
let result_tcd9_3, result_tcd10_3, result_tcd11_3, result_tcd12_3, result_tcd13_3, result_tcd14_3, result_tcd15_3;
let creditoTutoria3, creditoCultural3, creditoDeportiva3, creditoComplementaria3;
let newCrediTutoria3, newCrediCultural3, newCrediDeportiva3, newCrediComplementaria3;
let materiasCursadas3, materiasReprobadas3;

$(document).ready(function (){
    trayectoria3sem = $("#trayectoria3")
    trayectoria3sem[0].reset()
    materiasCursadas3 = $("#cantidad_materias_3")
    materiasReprobadas3 = $("#materias_reprobadas_3")

    $("#relIngles_3, .fila-materias_3, .relbeca_3, .materiarep_3, .folios_canal_3").hide()

    s_tuto3 = $("#tutoria_3")
    s_cult3 = $("#cultural_3")
    s_depor3 = $("#deportiva_3")
    s_compl3 = $("#complementaria_3")

    $('.credito_3, #complementaria_3, .calificacionN_3, .folios_canal_3').on('input', function () {
        this.value = this.value.replace(/[^0-9]/g,'');
    })

    trayectoria3sem.on("change keypress paste focus textInput input",function() {
        creditoTutoria3 = s_tuto3.val()
        creditoCultural3 = s_cult3.val()
        creditoDeportiva3 = s_depor3.val()
        creditoComplementaria3 = s_compl3.val()

        newCrediTutoria3 = creditoTutoria3.replace(/\D/g, "")
        newCrediCultural3 = creditoCultural3.replace(/\D/g, "")
        newCrediDeportiva3 = creditoDeportiva3.replace(/\D/g, "")
        newCrediComplementaria3 = creditoComplementaria3.replace(/\D/g, "")

        if (newCrediTutoria3 > 2) {
            s_tuto3.val(2)
        } else {
            s_tuto3.val(newCrediTutoria3)
        }

        if (newCrediCultural3 > 1) {
            s_cult3.val(1)
        } else {
            s_cult3.val(newCrediCultural3)
        }

        if (newCrediDeportiva3 > 1) {
            s_depor3.val(1)
        } else {
            s_depor3.val(newCrediDeportiva3)
        }

        if (creditoComplementaria3 > 1) {
            s_compl3.val(1)
        } else {
            s_compl3.val(creditoComplementaria3)
        }
    })

    trayectoria3sem.on("keyup", function () {
        result_tcd1_3 = parseInt(s_tuto3.val())
        result_tcd2_3 = parseInt(s_cult3.val())
        result_tcd3_3 = parseInt(s_depor3.val())
        result_tcd4_3 = parseInt(s_compl3.val())
        result_tcd5_3 = result_tcd1_3 + result_tcd2_3;
        result_tcd6_3 = result_tcd1_3 + result_tcd3_3;
        result_tcd7_3 = result_tcd1_3 + result_tcd4_3;
        result_tcd8_3 = result_tcd2_3 + result_tcd3_3;
        result_tcd9_3 = result_tcd2_3 + result_tcd4_3;
        result_tcd10_3 = result_tcd3_3 + result_tcd4_3;
        result_tcd11_3 = result_tcd1_3 + result_tcd2_3 + result_tcd3_3;
        result_tcd12_3 = result_tcd1_3 + result_tcd2_3 + result_tcd4_3;
        result_tcd13_3 = result_tcd1_3 + result_tcd3_3 + result_tcd4_3;
        result_tcd14_3 = result_tcd2_3 + result_tcd3_3 + result_tcd4_3;
        result_tcd15_3 = result_tcd1_3 + result_tcd2_3 + result_tcd3_3 + result_tcd4_3;

        if (s_tuto3.val().trim()==='' && s_cult3.val().trim()==='' && s_depor3.val().trim()==='' && s_compl3.val().trim()==='') {
            $("#suma_tcdc_3").val("")
        } else if (s_cult3.val().trim()==='' && s_depor3.val().trim()==='' && s_compl3.val().trim()==='') {
            $("#suma_tcdc_3").val(result_tcd1_3)
        } else if (s_tuto3.val().trim()==='' && s_depor3.val().trim()==='' && s_compl3.val().trim()==='') {
            $("#suma_tcdc_3").val(result_tcd2_3)
        } else if (s_tuto3.val().trim()==='' && s_cult3.val().trim()==='' && s_compl3.val().trim()==='') {
            $("#suma_tcdc_3").val(result_tcd3_3)
        } else if (s_tuto3.val().trim()==='' && s_cult3.val().trim()==='' && s_depor3.val().trim()==='' ) {
            $("#suma_tcdc_3").val(result_tcd4_3)
        } else if (s_depor3.val().trim()==='' && s_compl3.val().trim()==='') {
            $("#suma_tcdc_3").val(result_tcd5_3)
        } else if (s_cult3.val().trim()==='' && s_compl3.val().trim()==='') {
            $("#suma_tcdc_3").val(result_tcd6_3)
        } else if (s_cult3.val().trim()==='' && s_depor3.val().trim()==='') {
            $("#suma_tcdc_3").val(result_tcd7_3)
        } else if (s_tuto3.val().trim()==='' && s_compl3.val().trim()==='') {
            $("#suma_tcdc_3").val(result_tcd8_3)
        } else if (s_tuto3.val().trim()==='' && s_depor3.val().trim()==='') {
            $("#suma_tcdc_3").val(result_tcd9_3)
        } else if (s_tuto3.val().trim()==='' && s_cult3.val().trim()==='') {
            $("#suma_tcdc_3").val(result_tcd10_3)
        } else if (s_compl3.val().trim()==='') {
            $("#suma_tcdc_3").val(result_tcd11_3)
        } else if (s_depor3.val().trim()==='') {
            $("#suma_tcdc_3").val(result_tcd12_3)
        } else if (s_cult3.val().trim()==='') {
            $("#suma_tcdc_3").val(result_tcd13_3)
        } else if (s_tuto3.val().trim()==='') {
            $("#suma_tcdc_3").val(result_tcd14_3)
        } else {
            $("#suma_tcdc_3").val(result_tcd15_3)
        }
    })

    $(".calificacionN_3").on("change keypress paste focus textInput input",function() {
        calificacion3 = $(this).val()
        nuevaCalificacion3 = calificacion3.replace(/\D/g, "")
        if (nuevaCalificacion3 > 100) {
            $(this).val(nuevaCalificacion3[0]+nuevaCalificacion3[1])
        } else {
            $(this).val(nuevaCalificacion3.replace(/^0+/, ''))
        }
    })

    $(".folios_canal_3").on("change keypress paste focus textInput input", function (){
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

    $("[name = calificacion1_3]").on("click", function (){
        $("[name = calificacion1_3]").val("")
    })
    $("[name = calificacion2_3]").on("click", function (){
        $("[name = calificacion2_3]").val("")
    })
    $("[name = calificacion3_3]").on("click", function (){
        $("[name = calificacion3_3]").val("")
    })
    $("[name = calificacion4_3]").on("click", function (){
        $("[name = calificacion4_3]").val("")
    })
    $("[name = calificacion5_3]").on("click", function (){
        $("[name = calificacion5_3]").val("")
    })
    $("[name = calificacion6_3]").on("click", function (){
        $("[name = calificacion6_3]").val("")
    })
    $("[name = calificacion7_3]").on("click", function (){
        $("[name = calificacion7_3]").val("")
    })

    trayectoria3sem.on("click", function () {
        if ($("[name = ingles_3]:checked").val() === "SÍ") {
            $("#relIngles_3").show()
        } else {
            $("#relIngles_3").hide()
            $("#nivel_ingles_3").val("")
            $("input[name = ubicacion_3]").prop("checked", false)
        }


        if (materiasCursadas3.val().trim() === ""){
            $(".fila-materias_3").hide()
            $(".materiaN_3").val("")
            $(".calificacionN_3").val("")
        } else if (materiasCursadas3.val().trim() === "1"){
            $("#fila-materias1_3").show()
            $("#fila-materias2_3").hide()
            $("#fila-materias3_3").hide()
            $("#fila-materias4_3").hide()
            $("#fila-materias5_3").hide()
            $("#fila-materias6_3").hide()
            $("#fila-materias7_3").hide()

            $("[name = materia2_3], [name = calificacion2_3]").val("")
            $("[name = materia3_3], [name = calificacion3_3]").val("")
            $("[name = materia4_3], [name = calificacion4_3]").val("")
            $("[name = materia5_3], [name = calificacion5_3]").val("")
            $("[name = materia6_3], [name = calificacion6_3]").val("")
            $("[name = materia7_3], [name = calificacion7_3]").val("")

        } else if (materiasCursadas3.val().trim() === "2"){
            $("#fila-materias1_3").show()
            $("#fila-materias2_3").show()
            $("#fila-materias3_3").hide()
            $("#fila-materias4_3").hide()
            $("#fila-materias5_3").hide()
            $("#fila-materias6_3").hide()
            $("#fila-materias7_3").hide()

            $("[name = materia3_3], [name = calificacion3_3]").val("")
            $("[name = materia4_3], [name = calificacion4_3]").val("")
            $("[name = materia5_3], [name = calificacion5_3]").val("")
            $("[name = materia6_3], [name = calificacion6_3]").val("")
            $("[name = materia7_3], [name = calificacion7_3]").val("")
        } else if (materiasCursadas3.val().trim() === "3"){
            $("#fila-materias1_3").show()
            $("#fila-materias2_3").show()
            $("#fila-materias3_3").show()
            $("#fila-materias4_3").hide()
            $("#fila-materias5_3").hide()
            $("#fila-materias6_3").hide()
            $("#fila-materias7_3").hide()

            $("[name = materia4_3], [name = calificacion4_3]").val("")
            $("[name = materia5_3], [name = calificacion5_3]").val("")
            $("[name = materia6_3], [name = calificacion6_3]").val("")
            $("[name = materia7_3], [name = calificacion7_3]").val("")
        } else if (materiasCursadas3.val().trim() === "4"){
            $("#fila-materias1_3").show()
            $("#fila-materias2_3").show()
            $("#fila-materias3_3").show()
            $("#fila-materias4_3").show()
            $("#fila-materias5_3").hide()
            $("#fila-materias6_3").hide()
            $("#fila-materias7_3").hide()

            $("[name = materia5_3], [name = calificacion5_3]").val("")
            $("[name = materia6_3], [name = calificacion6_3]").val("")
            $("[name = materia7_3], [name = calificacion7_3]").val("")
        } else if (materiasCursadas3.val().trim() === "5"){
            $("#fila-materias1_3").show()
            $("#fila-materias2_3").show()
            $("#fila-materias3_3").show()
            $("#fila-materias4_3").show()
            $("#fila-materias5_3").show()
            $("#fila-materias6_3").hide()
            $("#fila-materias7_3").hide()

            $("[name = materia6_3], [name = calificacion6_3]").val("")
            $("[name = materia7_3], [name = calificacion7_3]").val("")
        } else if (materiasCursadas3.val().trim() === "6"){
            $("#fila-materias1_3").show()
            $("#fila-materias2_3").show()
            $("#fila-materias3_3").show()
            $("#fila-materias4_3").show()
            $("#fila-materias5_3").show()
            $("#fila-materias6_3").show()
            $("#fila-materias7_3").hide()

            $("[name = materia7_3], [name = calificacion7_3]").val("")
        } else {
            $(".fila-materias_3").show()
        }


        if ($("[name = beca_3]:checked").val() === "SÍ"){
            $("#relbeca_3").show()
        } else{
            $("#relbeca_3").hide()
            $("#tipo_beca_3").val("")
        }


        if (materiasReprobadas3.val().trim() === ''){
            $(".materiarep_3").hide().val("")
        } else if ($("#materias_reprobadas_3").val().trim() === '1'){
            $("#materiarep1_3").show();
            $("#materiarep2_3").hide().val("")
            $("#materiarep3_3").hide().val("")
            $("#materiarep4_3").hide().val("")
            $("#materiarep5_3").hide().val("")
            $("#materiarep6_3").hide().val("")
            $("#materiarep7_3").hide().val("")
        } else if (materiasReprobadas3.val().trim() === '2'){
            $("#materiarep1_3").show()
            $("#materiarep2_3").show()
            $("#materiarep3_3").hide().val("")
            $("#materiarep4_3").hide().val("")
            $("#materiarep5_3").hide().val("")
            $("#materiarep6_3").hide().val("")
            $("#materiarep7_3").hide().val("")
        } else if (materiasReprobadas3.val().trim() === '3'){
            $("#materiarep1_3").show()
            $("#materiarep2_3").show()
            $("#materiarep3_3").show()
            $("#materiarep4_3").hide().val("")
            $("#materiarep5_3").hide().val("")
            $("#materiarep6_3").hide().val("")
            $("#materiarep7_3").hide().val("")
        } else if (materiasReprobadas3.val().trim() === '4'){
            $("#materiarep1_3").show()
            $("#materiarep2_3").show()
            $("#materiarep3_3").show()
            $("#materiarep4_3").show()
            $("#materiarep5_3").hide().val("")
            $("#materiarep6_3").hide().val("")
            $("#materiarep7_3").hide().val("")
        } else if (materiasReprobadas3.val().trim() === '5'){
            $("#materiarep1_3").show()
            $("#materiarep2_3").show()
            $("#materiarep3_3").show()
            $("#materiarep4_3").show()
            $("#materiarep5_3").show()
            $("#materiarep6_3").hide().val("")
            $("#materiarep7_3").hide().val("")
        } else if (materiasReprobadas3.val().trim() === '6'){
            $("#materiarep1_3").show()
            $("#materiarep2_3").show()
            $("#materiarep3_3").show()
            $("#materiarep4_3").show()
            $("#materiarep5_3").show()
            $("#materiarep6_3").show()
            $("#materiarep7_3").hide().val("")
        } else {
            $(".materiarep_3").show()
        }

        if (materiasCursadas3.val() === "") {
            materiasReprobadas3.val("")
            $(".materiarep_3").hide()
        } else if (materiasCursadas3.val() < materiasReprobadas3.val()) {
            materiasReprobadas3.val("")
            $(".materiarep_3").hide()
        }

        if ($("#canalizacion1_3").is(":checked")) {
            $("#folioAM_3").show()
        } else {
            $("#folioAM_3").hide().val("")
        }

        if ($("#canalizacion2_3").is(":checked")) {
            $("#folioAP_3").show()
        } else {
            $("#folioAP_3").hide().val("")
        }

        if ($("#canalizacion3_3").is(":checked")) {
            $("#folioAPar_3").show()
        } else {
            $("#folioAPar_3").hide().val("")
        }

        if ($("#canalizacion4_3").is(":checked")) {
            $("#folioTInd_3").show()
        } else {
            $("#folioTInd_3").hide().val("")
        }

        if ($("#canalizacion5_3").is(":checked")) {
            $("#folioOtra_3").show()
        } else {
            $("#folioOtra_3").hide().val("")
        }
    })

    materiasReprobadas3.on("click", function (){
        if (materiasReprobadas3.val() > materiasCursadas3.val()){
            Swal.fire({
                title: 'Fuera del rango de las Asignaturas Cursadas',
                width: "40%",
                icon: "warning",
                showConfirmButton: false,
                timer: 1500,
                backdrop: "rgba(0,0,0,0.4)"
            });
            materiasReprobadas3.val("")
        } else if (materiasCursadas3.val() === "") {
            Swal.fire({
                title: 'Seleccione primero\nlas asignaturas cursadas\ndurante el semestre',
                icon: "warning",
                showConfirmButton: false,
                timer: 2500,
                backdrop: "rgba(0,0,0,0.4)"
            });
        }
    })


    $("#CerrarVentana3").on("click", function (){
        parent.$("#v_modal_t3").hide()
        trayectoria3sem[0].reset()
    })


})