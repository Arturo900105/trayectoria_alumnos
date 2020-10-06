let trayectoria8sem, s_tuto8, s_cult8, s_depor8, s_compl8, calificacion8, nuevaCalificacion8;
let creditoTutoria8, creditoCultural8, creditoDeportiva8, creditoComplementaria8;
let newCrediTutoria8, newCrediCultural8, newCrediDeportiva8, newCrediComplementaria8;
let result_tcd1_8, result_tcd2_8, result_tcd3_8, result_tcd4_8, result_tcd5_8, result_tcd6_8, result_tcd7_8, result_tcd8_8;
let result_tcd9_8, result_tcd10_8, result_tcd11_8, result_tcd12_8, result_tcd13_8, result_tcd14_8, result_tcd15_8;
let materiasCursadas8, materiasReprobadas8, folios8;

$(document).ready(function (){
    trayectoria8sem = $("#trayectoria8")
    trayectoria8sem[0].reset()
    materiasCursadas8 = $("#cantidad_materias_8")
    materiasReprobadas8 = $("#materias_reprobadas_8")

    $("#relIngles_8, #lugar_servsoc8, .fila-materias_8, .relbeca_8, .materiarep_8, .folios_canal_8").hide()

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
    })

    trayectoria8sem.on("click", function (){
        if ($("[name = ingles_8]:checked").val() === "SÍ"){
            $("#relIngles_8").show()
        } else{
            $("#relIngles_8").hide()
            $("#nivel_ingles_8").val("")
            $("input[name = ubicacion_8]").prop("checked", false)
        }

        if ($("[name=servSsocial_8]:checked").val() === "SÍ") {
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
        } else {
            $(this).val(nuevaCalificacion8.replace(/^0+/, ''))
        }
    })

    $(".folios_canal_8").on("change keypress paste focus textInput input", function (){
        let fechita = new Date();
        let year = fechita.getFullYear();
        let digito = year.toString().substr(-2);

        folios8 = $(this).val()
        folios8 = folios8.replace(/\D/g, "")
        if (folios8[0] > 0){
            $(this).val(0)
        } else if (folios8[1] > 8) {
            $(this).val(folios8[0]+8)
        } else if (folios8[1] < 1) {
            $(this).val(folios8[0]+1)
        } else if (folios8[2] > digito[0] || folios8[2] < 1) {
            $(this).val(folios8[0]+folios8[1]+digito[0])
        } else if (folios8[2] === digito[0] && folios8[3] > digito[1]) {
            $(this).val(folios8[0]+folios8[1]+digito[0]+digito[1])
        } else if (folios8[2]+folios8[3] === "00") {
            $(this).val(folios8[0]+folios8[1]+digito[0]+digito[1])
        } else if (folios8[4]+folios8[5]+folios8[6] === "000") {
            $(this).val(folios8[0]+folios8[1]+folios8[2]+folios8[3]+folios8[4]+folios8[5]+1)
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
                title: 'Seleccione primero el número de asignaturas cursadas durante el semestre',
                icon: "warning",
                showConfirmButton: false,
                timer: 2500,
                backdrop: "rgba(0,0,0,0.4)"
            });
        }
    })

    trayectoria8sem.submit(function (){

    })

    $("#CerrarVentana8").on("click", function (){
        parent.$("#v_modal_t8").hide()
        trayectoria8sem[0].reset()
    })
})