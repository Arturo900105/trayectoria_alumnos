let trayectoria9sem, s_tuto9, s_cult9, s_depor9, s_compl9, calificacion9, nuevaCalificacion9;
let creditoTutoria9, creditoCultural9, creditoDeportiva9, creditoComplementaria9;
let newCrediTutoria9, newCrediCultural9, newCrediDeportiva9, newCrediComplementaria9;
let result_tcd1_9, result_tcd2_9, result_tcd3_9, result_tcd4_9, result_tcd5_9, result_tcd6_9, result_tcd7_9, result_tcd8_9;
let result_tcd9_9, result_tcd10_9, result_tcd11_9, result_tcd12_9, result_tcd13_9, result_tcd14_9, result_tcd15_9;
let materiasCursadas9, materiasReprobadas9, folios9;

$(document).ready(function (){
    trayectoria9sem = $("#trayectoria9")
    trayectoria9sem[0].reset()
    materiasCursadas9 = $("#cantidad_materias_9")
    materiasReprobadas9 = $("#materias_reprobadas_9")

    $("#relIngles_9, #lugar_residencia, .fila-materias_9, .relbeca_9, .materiarep_9, .folios_canal_9").hide()

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
    })




    trayectoria9sem.on("click", function (){
        if ($("[name = ingles_9]:checked").val() === "SÍ"){
            $("#relIngles_9").show()
        } else{
            $("#relIngles_9").hide()
            $("#nivel_ingles_9").val("")
            $("input[name = ubicacion_9]").prop("checked", false)
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
        } else {
            $(this).val(nuevaCalificacion9.replace(/^0+/, ''))
        }
    })

    $(".folios_canal_9").on("change keypress paste focus textInput input", function() {
        let fechita = new Date();
        let year = fechita.getFullYear();
        let digito = year.toString().substr(-2);

        folios9 = $(this).val()
        folios9 = folios9.replace(/\D/g, "")
        if (folios9[0] > 0){
            $(this).val(0)
        } else if (folios9[1] > 8) {
            $(this).val(folios9[0]+8)
        } else if (folios9[1] < 1) {
            $(this).val(folios9[0]+1)
        } else if (folios9[2] > digito[0] || folios9[2] < 1) {
            $(this).val(folios9[0]+folios9[1]+digito[0])
        } else if (folios9[2] === digito[0] && folios9[3] > digito[1]) {
            $(this).val(folios9[0]+folios9[1]+digito[0]+digito[1])
        } else if (folios9[2]+folios9[3] === "00") {
            $(this).val(folios9[0]+folios9[1]+digito[0]+digito[1])
        } else if (folios9[4]+folios9[5]+folios9[6] === "000") {
            $(this).val(folios9[0]+folios9[1]+folios9[2]+folios9[3]+folios9[4]+folios9[5]+1)
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
                title: 'Seleccione primero el número de asignaturas cursadas durante el semestre',
                icon: "warning",
                showConfirmButton: false,
                timer: 2500,
                backdrop: "rgba(0,0,0,0.4)"
            });
        }
    })


    trayectoria9sem.submit(function (){

    })


    $("#CerrarVentana9").on("click", function (){
        parent.$("#v_modal_t9").hide()
        trayectoria9sem[0].reset()
    })


})

