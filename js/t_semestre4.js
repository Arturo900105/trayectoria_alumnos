let trayectoria4sem, s_tuto4, s_cult4, s_depor4, s_compl4, calificacion4, nuevaCalificacion4;
let result_tcd1_4, result_tcd2_4, result_tcd3_4, result_tcd4_4, result_tcd5_4, result_tcd6_4, result_tcd7_4, result_tcd8_4;
let result_tcd9_4, result_tcd10_4, result_tcd11_4, result_tcd12_4, result_tcd13_4, result_tcd14_4, result_tcd15_4;
let creditoTutoria4, creditoCultural4, creditoDeportiva4, creditoComplementaria4;
let newCrediTutoria4, newCrediCultural4, newCrediDeportiva4, newCrediComplementaria4;

$(document).ready(function (){
    trayectoria4sem = $("#trayectoria4")
    trayectoria4sem[0].reset()
    $("#relIngles_4, .fila-materias_4, .relbeca_4, .materiarep_4, .folios_canal_4").hide()

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
    })

    $(".calificacionN_4").on("change keypress paste focus textInput input",function() {
        calificacion4 = $(this).val()
        nuevaCalificacion4 = calificacion4.replace(/\D/g, "")
        if (nuevaCalificacion4 > 100) {
            $(this).val(nuevaCalificacion4[0]+nuevaCalificacion4[1])
        } else {
            $(this).val(nuevaCalificacion4.replace(/^0+/, ''))
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


        if ($('#cantidad_materias_4').val().trim() === ""){
            $(".fila-materias_4").hide()
            $(".materiaN_4").val("")
            $(".calificacionN_4").val("")
        } else if ($("#cantidad_materias_4").val().trim() === "1"){
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

        } else if ($("#cantidad_materias_4").val().trim() === "2"){
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
        } else if ($("#cantidad_materias_4").val().trim() === "3"){
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
        } else if ($("#cantidad_materias_4").val().trim() === "4"){
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
        } else if ($("#cantidad_materias_4").val().trim() === "5"){
            $("#fila-materias1_4").show()
            $("#fila-materias2_4").show()
            $("#fila-materias3_4").show()
            $("#fila-materias4_4").show()
            $("#fila-materias5_4").show()
            $("#fila-materias6_4").hide()
            $("#fila-materias7_4").hide()

            $("[name = materia6_4], [name = calificacion6_4]").val("")
            $("[name = materia7_4], [name = calificacion7_4]").val("")
        } else if ($("#cantidad_materias_4").val().trim() === "6"){
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
        } else if ($("#materias_reprobadas_4").val().trim() === '1'){
            $("#materiarep1_4").show();
            $("#materiarep2_4").hide().val("")
            $("#materiarep3_4").hide().val("")
            $("#materiarep4_4").hide().val("")
            $("#materiarep5_4").hide().val("")
            $("#materiarep6_4").hide().val("")
            $("#materiarep7_4").hide().val("")
        } else if ($("#materias_reprobadas_4").val().trim() === '2'){
            $("#materiarep1_4").show()
            $("#materiarep2_4").show()
            $("#materiarep3_4").hide().val("")
            $("#materiarep4_4").hide().val("")
            $("#materiarep5_4").hide().val("")
            $("#materiarep6_4").hide().val("")
            $("#materiarep7_4").hide().val("")
        } else if ($("#materias_reprobadas_4").val().trim() === '3'){
            $("#materiarep1_4").show()
            $("#materiarep2_4").show()
            $("#materiarep3_4").show()
            $("#materiarep4_4").hide().val("")
            $("#materiarep5_4").hide().val("")
            $("#materiarep6_4").hide().val("")
            $("#materiarep7_4").hide().val("")
        } else if ($("#materias_reprobadas_4").val().trim() === '4'){
            $("#materiarep1_4").show()
            $("#materiarep2_4").show()
            $("#materiarep3_4").show()
            $("#materiarep4_4").show()
            $("#materiarep5_4").hide().val("")
            $("#materiarep6_4").hide().val("")
            $("#materiarep7_4").hide().val("")
        } else if ($("#materias_reprobadas_4").val().trim() === '5'){
            $("#materiarep1_4").show()
            $("#materiarep2_4").show()
            $("#materiarep3_4").show()
            $("#materiarep4_4").show()
            $("#materiarep5_4").show()
            $("#materiarep6_4").hide().val("")
            $("#materiarep7_4").hide().val("")
        } else if ($("#materias_reprobadas_4").val().trim() === '6'){
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

    $("#CerrarVentana4").on("click", function (){
        parent.$("#v_modal_t4").hide()
        trayectoria4sem[0].reset()
    })


})
