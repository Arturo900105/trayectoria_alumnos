let trayectoria7sem, s_tuto7, s_cult7, s_depor7, s_compl7, calificacion7, nuevaCalificacion7;
let creditoTutoria7, creditoCultural7, creditoDeportiva7, creditoComplementaria7;
let newCrediTutoria7, newCrediCultural7, newCrediDeportiva7, newCrediComplementaria7;
let result_tcd1_7, result_tcd2_7, result_tcd3_7, result_tcd4_7, result_tcd5_7, result_tcd6_7, result_tcd7_7, result_tcd8_7;
let result_tcd9_7, result_tcd10_7, result_tcd11_7, result_tcd12_7, result_tcd13_7, result_tcd14_7, result_tcd15_7;
let materiasCursadas7, materiasReprobadas7, folios7;

$(document).ready(function (){
    trayectoria7sem = $("#trayectoria7")
    trayectoria7sem[0].reset()
    materiasCursadas7 = $("#cantidad_materias_7")
    materiasReprobadas7 = $("#materias_reprobadas_7")

    $("#relIngles_7, #lugar_servsoc7, .fila-materias_7, .relbeca_7, .materiarep_7, .folios_canal_7").hide()

    s_tuto7 = $("#tutoria_7")
    s_cult7 = $("#cultural_7")
    s_depor7 = $("#deportiva_7")
    s_compl7 = $("#complementaria_7")

    $('.credito_7, #complementaria_7, .calificacionN_7, .folios_canal_7').on('input', function () {
        this.value = this.value.replace(/[^0-9]/g,'');
    })

    trayectoria7sem.on("change keypress paste focus textInput input",function() {
        creditoTutoria7 = s_tuto7.val()
        creditoCultural7 = s_cult7.val()
        creditoDeportiva7 = s_depor7.val()
        creditoComplementaria7 = s_compl7.val()

        newCrediTutoria7 = creditoTutoria7.replace(/\D/g, "")
        newCrediCultural7 = creditoCultural7.replace(/\D/g, "")
        newCrediDeportiva7 = creditoDeportiva7.replace(/\D/g, "")
        newCrediComplementaria7 = creditoComplementaria7.replace(/\D/g, "")

        if (newCrediTutoria7 > 2) {
            s_tuto7.val(2)
        } else {
            s_tuto7.val(newCrediTutoria7)
        }

        if (newCrediCultural7 > 1) {
            s_cult7.val(1)
        } else {
            s_cult7.val(newCrediCultural7)
        }

        if (newCrediDeportiva7 > 1) {
            s_depor7.val(1)
        } else {
            s_depor7.val(newCrediDeportiva7)
        }

        if (creditoComplementaria7 > 1) {
            s_compl7.val(1)
        } else {
            s_compl7.val(creditoComplementaria7)
        }
    })

    trayectoria7sem.on("keyup", function () {
        result_tcd1_7 = parseInt(s_tuto7.val())
        result_tcd2_7 = parseInt(s_cult7.val())
        result_tcd3_7 = parseInt(s_depor7.val())
        result_tcd4_7 = parseInt(s_compl7.val())
        result_tcd5_7 = result_tcd1_7 + result_tcd2_7;
        result_tcd6_7 = result_tcd1_7 + result_tcd3_7;
        result_tcd7_7 = result_tcd1_7 + result_tcd4_7;
        result_tcd8_7 = result_tcd2_7 + result_tcd3_7;
        result_tcd9_7 = result_tcd2_7 + result_tcd4_7;
        result_tcd10_7 = result_tcd3_7 + result_tcd4_7;
        result_tcd11_7 = result_tcd1_7 + result_tcd2_7 + result_tcd3_7;
        result_tcd12_7 = result_tcd1_7 + result_tcd2_7 + result_tcd4_7;
        result_tcd13_7 = result_tcd1_7 + result_tcd3_7 + result_tcd4_7;
        result_tcd14_7 = result_tcd2_7 + result_tcd3_7 + result_tcd4_7;
        result_tcd15_7 = result_tcd1_7 + result_tcd2_7 + result_tcd3_7 + result_tcd4_7;

        if (s_tuto7.val().trim()==='' && s_cult7.val().trim()==='' && s_depor7.val().trim()==='' && s_compl7.val().trim()==='') {
            $("#suma_tcdc_7").val("")
        } else if (s_cult7.val().trim()==='' && s_depor7.val().trim()==='' && s_compl7.val().trim()==='') {
            $("#suma_tcdc_7").val(result_tcd1_7)
        } else if (s_tuto7.val().trim()==='' && s_depor7.val().trim()==='' && s_compl7.val().trim()==='') {
            $("#suma_tcdc_7").val(result_tcd2_7)
        } else if (s_tuto7.val().trim()==='' && s_cult7.val().trim()==='' && s_compl7.val().trim()==='') {
            $("#suma_tcdc_7").val(result_tcd3_7)
        } else if (s_tuto7.val().trim()==='' && s_cult7.val().trim()==='' && s_depor7.val().trim()==='' ) {
            $("#suma_tcdc_7").val(result_tcd4_7)
        } else if (s_depor7.val().trim()==='' && s_compl7.val().trim()==='') {
            $("#suma_tcdc_7").val(result_tcd5_7)
        } else if (s_cult7.val().trim()==='' && s_compl7.val().trim()==='') {
            $("#suma_tcdc_7").val(result_tcd6_7)
        } else if (s_cult7.val().trim()==='' && s_depor7.val().trim()==='') {
            $("#suma_tcdc_7").val(result_tcd7_7)
        } else if (s_tuto7.val().trim()==='' && s_compl7.val().trim()==='') {
            $("#suma_tcdc_7").val(result_tcd8_7)
        } else if (s_tuto7.val().trim()==='' && s_depor7.val().trim()==='') {
            $("#suma_tcdc_7").val(result_tcd9_7)
        } else if (s_tuto7.val().trim()==='' && s_cult7.val().trim()==='') {
            $("#suma_tcdc_7").val(result_tcd10_7)
        } else if (s_compl7.val().trim()==='') {
            $("#suma_tcdc_7").val(result_tcd11_7)
        } else if (s_depor7.val().trim()==='') {
            $("#suma_tcdc_7").val(result_tcd12_7)
        } else if (s_cult7.val().trim()==='') {
            $("#suma_tcdc_7").val(result_tcd13_7)
        } else if (s_tuto7.val().trim()==='') {
            $("#suma_tcdc_7").val(result_tcd14_7)
        } else {
            $("#suma_tcdc_7").val(result_tcd15_7)
        }
    })

    trayectoria7sem.on("click", function (){
        if ($("[name = ingles_7]:checked").val() === "SÍ"){
            $("#relIngles_7").show()
        } else{
            $("#relIngles_7").hide()
            $("#nivel_ingles_7").val("")
            $("input[name = ubicacion_7]").prop("checked", false)
        }

        if ($("[name=servSsocial_7]:checked").val() === "SÍ") {
            $("#lugar_servsoc7").show()
        } else {
            $("#lugar_servsoc7").hide().val("")
        }

        if (materiasCursadas7.val().trim() === ""){
            $(".fila-materias_7").hide()
            $(".materiaN_7").val("")
            $(".calificacionN_7").val("")
        } else if (materiasCursadas7.val().trim() === "1"){
            $("#fila-materias1_7").show()
            $("#fila-materias2_7").hide()
            $("#fila-materias3_7").hide()
            $("#fila-materias4_7").hide()
            $("#fila-materias5_7").hide()
            $("#fila-materias6_7").hide()
            $("#fila-materias7_7").hide()

            $("[name = materia2_7], [name = calificacion2_7]").val("")
            $("[name = materia3_7], [name = calificacion3_7]").val("")
            $("[name = materia4_7], [name = calificacion4_7]").val("")
            $("[name = materia5_7], [name = calificacion5_7]").val("")
            $("[name = materia6_7], [name = calificacion6_7]").val("")
            $("[name = materia7_7], [name = calificacion7_7]").val("")

        } else if (materiasCursadas7.val().trim() === "2"){
            $("#fila-materias1_7").show()
            $("#fila-materias2_7").show()
            $("#fila-materias3_7").hide()
            $("#fila-materias4_7").hide()
            $("#fila-materias5_7").hide()
            $("#fila-materias6_7").hide()
            $("#fila-materias7_7").hide()

            $("[name = materia3_7], [name = calificacion3_7]").val("")
            $("[name = materia4_7], [name = calificacion4_7]").val("")
            $("[name = materia5_7], [name = calificacion5_7]").val("")
            $("[name = materia6_7], [name = calificacion6_7]").val("")
            $("[name = materia7_7], [name = calificacion7_7]").val("")
        } else if (materiasCursadas7.val().trim() === "3"){
            $("#fila-materias1_7").show()
            $("#fila-materias2_7").show()
            $("#fila-materias3_7").show()
            $("#fila-materias4_7").hide()
            $("#fila-materias5_7").hide()
            $("#fila-materias6_7").hide()
            $("#fila-materias7_7").hide()

            $("[name = materia4_7], [name = calificacion4_7]").val("")
            $("[name = materia5_7], [name = calificacion5_7]").val("")
            $("[name = materia6_7], [name = calificacion6_7]").val("")
            $("[name = materia7_7], [name = calificacion7_7]").val("")
        } else if (materiasCursadas7.val().trim() === "4"){
            $("#fila-materias1_7").show()
            $("#fila-materias2_7").show()
            $("#fila-materias3_7").show()
            $("#fila-materias4_7").show()
            $("#fila-materias5_7").hide()
            $("#fila-materias6_7").hide()
            $("#fila-materias7_7").hide()

            $("[name = materia5_7], [name = calificacion5_7]").val("")
            $("[name = materia6_7], [name = calificacion6_7]").val("")
            $("[name = materia7_7], [name = calificacion7_7]").val("")
        } else if (materiasCursadas7.val().trim() === "5"){
            $("#fila-materias1_7").show()
            $("#fila-materias2_7").show()
            $("#fila-materias3_7").show()
            $("#fila-materias4_7").show()
            $("#fila-materias5_7").show()
            $("#fila-materias6_7").hide()
            $("#fila-materias7_7").hide()

            $("[name = materia6_7], [name = calificacion6_7]").val("")
            $("[name = materia7_7], [name = calificacion7_7]").val("")
        } else if (materiasCursadas7.val().trim() === "6"){
            $("#fila-materias1_7").show()
            $("#fila-materias2_7").show()
            $("#fila-materias3_7").show()
            $("#fila-materias4_7").show()
            $("#fila-materias5_7").show()
            $("#fila-materias6_7").show()
            $("#fila-materias7_7").hide()

            $("[name = materia7_7], [name = calificacion7_7]").val("")
        } else {
            $(".fila-materias_7").show()
        }

        if ($("[name = beca_7]:checked").val() === "SÍ"){
            $("#relbeca_7").show()
        } else{
            $("#relbeca_7").hide()
            $("#tipo_beca_7").val("")
        }

        if (materiasReprobadas7.val().trim() === ''){
            $(".materiarep_7").hide().val("")
        } else if (materiasReprobadas7.val().trim() === '1'){
            $("#materiarep1_7").show();
            $("#materiarep2_7").hide().val("")
            $("#materiarep3_7").hide().val("")
            $("#materiarep4_7").hide().val("")
            $("#materiarep5_7").hide().val("")
            $("#materiarep6_7").hide().val("")
            $("#materiarep7_7").hide().val("")
        } else if (materiasReprobadas7.val().trim() === '2'){
            $("#materiarep1_7").show()
            $("#materiarep2_7").show()
            $("#materiarep3_7").hide().val("")
            $("#materiarep4_7").hide().val("")
            $("#materiarep5_7").hide().val("")
            $("#materiarep6_7").hide().val("")
            $("#materiarep7_7").hide().val("")
        } else if (materiasReprobadas7.val().trim() === '3'){
            $("#materiarep1_7").show()
            $("#materiarep2_7").show()
            $("#materiarep3_7").show()
            $("#materiarep4_7").hide().val("")
            $("#materiarep5_7").hide().val("")
            $("#materiarep6_7").hide().val("")
            $("#materiarep7_7").hide().val("")
        } else if (materiasReprobadas7.val().trim() === '4'){
            $("#materiarep1_7").show()
            $("#materiarep2_7").show()
            $("#materiarep3_7").show()
            $("#materiarep4_7").show()
            $("#materiarep5_7").hide().val("")
            $("#materiarep6_7").hide().val("")
            $("#materiarep7_7").hide().val("")
        } else if (materiasReprobadas7.val().trim() === '5'){
            $("#materiarep1_7").show()
            $("#materiarep2_7").show()
            $("#materiarep3_7").show()
            $("#materiarep4_7").show()
            $("#materiarep5_7").show()
            $("#materiarep6_7").hide().val("")
            $("#materiarep7_7").hide().val("")
        } else if (materiasReprobadas7.val().trim() === '6'){
            $("#materiarep1_7").show()
            $("#materiarep2_7").show()
            $("#materiarep3_7").show()
            $("#materiarep4_7").show()
            $("#materiarep5_7").show()
            $("#materiarep6_7").show()
            $("#materiarep7_7").hide().val("")
        } else {
            $(".materiarep_7").show()
        }

        if (materiasCursadas7.val() === "") {
            materiasReprobadas7.val("")
            $(".materiarep_7").hide()
        }

        if ($("#canalizacion1_7").is(":checked")) {
            $("#folioAM_7").show()
        } else {
            $("#folioAM_7").hide().val("")
        }

        if ($("#canalizacion2_7").is(":checked")) {
            $("#folioAP_7").show()
        } else {
            $("#folioAP_7").hide().val("")
        }

        if ($("#canalizacion3_7").is(":checked")) {
            $("#folioAPar_7").show()
        } else {
            $("#folioAPar_7").hide().val("")
        }

        if ($("#canalizacion4_7").is(":checked")) {
            $("#folioTInd_7").show()
        } else {
            $("#folioTInd_7").hide().val("")
        }

        if ($("#canalizacion5_7").is(":checked")) {
            $("#folioOtra_7").show()
        } else {
            $("#folioOtra_7").hide().val("")
        }
    })

    $(".calificacionN_7").on("change keypress paste focus textInput input",function() {
        calificacion7 = $(this).val()
        nuevaCalificacion7 = calificacion7.replace(/\D/g, "")
        if (nuevaCalificacion7 > 100) {
            $(this).val(nuevaCalificacion7[0]+nuevaCalificacion7[1])
        } else {
            $(this).val(nuevaCalificacion7.replace(/^0+/, ''))
        }
    })

    $(".folios_canal_7").on("change keypress paste focus textInput input", function (){
        let fechita = new Date();
        let year = fechita.getFullYear();
        let digito = year.toString().substr(-2);

        folios7 = $(this).val()
        folios7 = folios7.replace(/\D/g, "")
        if (folios7[0] > 0){
            $(this).val(0)
        } else if (folios7[1] > 8) {
            $(this).val(folios7[0]+8)
        } else if (folios7[1] < 1) {
            $(this).val(folios7[0]+1)
        } else if (folios7[2] > digito[0] || folios7[2] < 1) {
            $(this).val(folios7[0]+folios7[1]+digito[0])
        } else if (folios7[2] === digito[0] && folios7[3] > digito[1]) {
            $(this).val(folios7[0]+folios7[1]+digito[0]+digito[1])
        } else if (folios7[2]+folios7[3] === "00") {
            $(this).val(folios7[0]+folios7[1]+digito[0]+digito[1])
        } else if (folios7[4]+folios7[5]+folios7[6] === "000") {
            $(this).val(folios7[0]+folios7[1]+folios7[2]+folios7[3]+folios7[4]+folios7[5]+1)
        }
    })

    materiasReprobadas7.on("click", function (){
        if (materiasReprobadas7.val() > materiasCursadas7.val()){
            Swal.fire({
                title: 'Fuera del rango de las Asignaturas Cursadas',
                icon: "warning",
                showConfirmButton: false,
                timer: 1500,
                backdrop: "rgba(0,0,0,0.4)"
            });
            materiasReprobadas7.val("")
        } else if (materiasCursadas7.val() === "") {
            Swal.fire({
                title: 'Seleccione primero el número de asignaturas cursadas durante el semestre',
                icon: "warning",
                showConfirmButton: false,
                timer: 2500,
                backdrop: "rgba(0,0,0,0.4)"
            });
        }
    })

    trayectoria7sem.submit(function (){

    })

    $("#CerrarVentana7").on("click", function (){
        parent.$("#v_modal_t7").hide()
        trayectoria7sem[0].reset()
    })
})