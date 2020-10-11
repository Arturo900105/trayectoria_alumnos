let trayectoria5sem, s_tuto5, s_cult5, s_depor5, s_compl5, calificacion5, nuevaCalificacion5;
let result_tcd1_5, result_tcd2_5, result_tcd3_5, result_tcd4_5, result_tcd5_5, result_tcd6_5, result_tcd7_5, result_tcd8_5;
let result_tcd9_5, result_tcd10_5, result_tcd11_5, result_tcd12_5, result_tcd13_5, result_tcd14_5, result_tcd15_5;
let creditoTutoria5, creditoCultural5, creditoDeportiva5, creditoComplementaria5;
let newCrediTutoria5, newCrediCultural5, newCrediDeportiva5, newCrediComplementaria5;
let materiasCursadas5, materiasReprobadas5;

$(document).ready(function (){
    trayectoria5sem = $("#trayectoria5")
    trayectoria5sem[0].reset()
    materiasCursadas5 = $("#cantidad_materias_5")
    materiasReprobadas5 = $("#materias_reprobadas_5")

    $("#relIngles_5, .fila-materias_5, .relbeca_5, .materiarep_5, .folios_canal_5").hide()

    s_tuto5 = $("#tutoria_5")
    s_cult5 = $("#cultural_5")
    s_depor5 = $("#deportiva_5")
    s_compl5 = $("#complementaria_5")

    $('.credito_5, #complementaria_5, .calificacionN_5, .folios_canal_5').on('input', function () {
        this.value = this.value.replace(/[^0-9]/g,'');
    })

    trayectoria5sem.on("change keypress paste focus textInput input",function() {
        creditoTutoria5 = s_tuto5.val()
        creditoCultural5 = s_cult5.val()
        creditoDeportiva5 = s_depor5.val()
        creditoComplementaria5 = s_compl5.val()

        newCrediTutoria5 = creditoTutoria5.replace(/\D/g, "")
        newCrediCultural5 = creditoCultural5.replace(/\D/g, "")
        newCrediDeportiva5 = creditoDeportiva5.replace(/\D/g, "")
        newCrediComplementaria5 = creditoComplementaria5.replace(/\D/g, "")

        if (newCrediTutoria5 > 2) {
            s_tuto5.val(2)
        } else {
            s_tuto5.val(newCrediTutoria5)
        }

        if (newCrediCultural5 > 1) {
            s_cult5.val(1)
        } else {
            s_cult5.val(newCrediCultural5)
        }

        if (newCrediDeportiva5 > 1) {
            s_depor5.val(1)
        } else {
            s_depor5.val(newCrediDeportiva5)
        }

        if (creditoComplementaria5 > 1) {
            s_compl5.val(1)
        } else {
            s_compl5.val(creditoComplementaria5)
        }
    })

    trayectoria5sem.on("keyup", function () {
        result_tcd1_5 = parseInt(s_tuto5.val())
        result_tcd2_5 = parseInt(s_cult5.val())
        result_tcd3_5 = parseInt(s_depor5.val())
        result_tcd4_5 = parseInt(s_compl5.val())
        result_tcd5_5 = result_tcd1_5 + result_tcd2_5;
        result_tcd6_5 = result_tcd1_5 + result_tcd3_5;
        result_tcd7_5 = result_tcd1_5 + result_tcd4_5;
        result_tcd8_5 = result_tcd2_5 + result_tcd3_5;
        result_tcd9_5 = result_tcd2_5 + result_tcd4_5;
        result_tcd10_5 = result_tcd3_5 + result_tcd4_5;
        result_tcd11_5 = result_tcd1_5 + result_tcd2_5 + result_tcd3_5;
        result_tcd12_5 = result_tcd1_5 + result_tcd2_5 + result_tcd4_5;
        result_tcd13_5 = result_tcd1_5 + result_tcd3_5 + result_tcd4_5;
        result_tcd14_5 = result_tcd2_5 + result_tcd3_5 + result_tcd4_5;
        result_tcd15_5 = result_tcd1_5 + result_tcd2_5 + result_tcd3_5 + result_tcd4_5;

        if (s_tuto5.val().trim()==='' && s_cult5.val().trim()==='' && s_depor5.val().trim()==='' && s_compl5.val().trim()==='') {
            $("#suma_tcdc_5").val("")
        } else if (s_cult5.val().trim()==='' && s_depor5.val().trim()==='' && s_compl5.val().trim()==='') {
            $("#suma_tcdc_5").val(result_tcd1_5)
        } else if (s_tuto5.val().trim()==='' && s_depor5.val().trim()==='' && s_compl5.val().trim()==='') {
            $("#suma_tcdc_5").val(result_tcd2_5)
        } else if (s_tuto5.val().trim()==='' && s_cult5.val().trim()==='' && s_compl5.val().trim()==='') {
            $("#suma_tcdc_5").val(result_tcd3_5)
        } else if (s_tuto5.val().trim()==='' && s_cult5.val().trim()==='' && s_depor5.val().trim()==='' ) {
            $("#suma_tcdc_5").val(result_tcd4_5)
        } else if (s_depor5.val().trim()==='' && s_compl5.val().trim()==='') {
            $("#suma_tcdc_5").val(result_tcd5_5)
        } else if (s_cult5.val().trim()==='' && s_compl5.val().trim()==='') {
            $("#suma_tcdc_5").val(result_tcd6_5)
        } else if (s_cult5.val().trim()==='' && s_depor5.val().trim()==='') {
            $("#suma_tcdc_5").val(result_tcd7_5)
        } else if (s_tuto5.val().trim()==='' && s_compl5.val().trim()==='') {
            $("#suma_tcdc_5").val(result_tcd8_5)
        } else if (s_tuto5.val().trim()==='' && s_depor5.val().trim()==='') {
            $("#suma_tcdc_5").val(result_tcd9_5)
        } else if (s_tuto5.val().trim()==='' && s_cult5.val().trim()==='') {
            $("#suma_tcdc_5").val(result_tcd10_5)
        } else if (s_compl5.val().trim()==='') {
            $("#suma_tcdc_5").val(result_tcd11_5)
        } else if (s_depor5.val().trim()==='') {
            $("#suma_tcdc_5").val(result_tcd12_5)
        } else if (s_cult5.val().trim()==='') {
            $("#suma_tcdc_5").val(result_tcd13_5)
        } else if (s_tuto5.val().trim()==='') {
            $("#suma_tcdc_5").val(result_tcd14_5)
        } else {
            $("#suma_tcdc_5").val(result_tcd15_5)
        }
    })

    $(".calificacionN_5").on("change keypress paste focus textInput input",function(){
        calificacion5 = $(this).val()
        nuevaCalificacion5 = calificacion5.replace(/\D/g, "")
        if (nuevaCalificacion5 > 100) {
            $(this).val(nuevaCalificacion5[0]+nuevaCalificacion5[1])
        } else {
            $(this).val(nuevaCalificacion5.replace(/^0+/, ''))
        }
    })

    $(".folios_canal_5").on("change keypress paste focus textInput input", function (){
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

    $("[name = calificacion1_5]").on("click", function (){
        $("[name = calificacion1_5]").val("")
    })
    $("[name = calificacion2_5]").on("click", function (){
        $("[name = calificacion2_5]").val("")
    })
    $("[name = calificacion3_5]").on("click", function (){
        $("[name = calificacion3_5]").val("")
    })
    $("[name = calificacion4_5]").on("click", function (){
        $("[name = calificacion4_5]").val("")
    })
    $("[name = calificacion5_5]").on("click", function (){
        $("[name = calificacion5_5]").val("")
    })
    $("[name = calificacion6_5]").on("click", function (){
        $("[name = calificacion6_5]").val("")
    })
    $("[name = calificacion7_5]").on("click", function (){
        $("[name = calificacion7_5]").val("")
    })

    trayectoria5sem.on("click", function (){
        if ($("[name = ingles_5]:checked").val() === "SÍ") {
            $("#relIngles_5").show()
        } else {
            $("#relIngles_5").hide()
            $("#nivel_ingles_5").val("")
            $("input[name = ubicacion_5]").prop("checked", false)
        }


        if (materiasCursadas5.val().trim() === ""){
            $(".fila-materias_5").hide()
            $(".materiaN_5").val("")
            $(".calificacionN_5").val("")
        } else if (materiasCursadas5.val().trim() === "1"){
            $("#fila-materias1_5").show()
            $("#fila-materias2_5").hide()
            $("#fila-materias3_5").hide()
            $("#fila-materias4_5").hide()
            $("#fila-materias5_5").hide()
            $("#fila-materias6_5").hide()
            $("#fila-materias7_5").hide()

            $("[name = materia2_5], [name = calificacion2_5]").val("")
            $("[name = materia3_5], [name = calificacion3_5]").val("")
            $("[name = materia4_5], [name = calificacion4_5]").val("")
            $("[name = materia5_5], [name = calificacion5_5]").val("")
            $("[name = materia6_5], [name = calificacion6_5]").val("")
            $("[name = materia7_5], [name = calificacion7_5]").val("")

        } else if (materiasCursadas5.val().trim() === "2"){
            $("#fila-materias1_5").show()
            $("#fila-materias2_5").show()
            $("#fila-materias3_5").hide()
            $("#fila-materias4_5").hide()
            $("#fila-materias5_5").hide()
            $("#fila-materias6_5").hide()
            $("#fila-materias7_5").hide()

            $("[name = materia3_5], [name = calificacion3_5]").val("")
            $("[name = materia4_5], [name = calificacion4_5]").val("")
            $("[name = materia5_5], [name = calificacion5_5]").val("")
            $("[name = materia6_5], [name = calificacion6_5]").val("")
            $("[name = materia7_5], [name = calificacion7_5]").val("")
        } else if (materiasCursadas5.val().trim() === "3"){
            $("#fila-materias1_5").show()
            $("#fila-materias2_5").show()
            $("#fila-materias3_5").show()
            $("#fila-materias4_5").hide()
            $("#fila-materias5_5").hide()
            $("#fila-materias6_5").hide()
            $("#fila-materias7_5").hide()

            $("[name = materia4_3], [name = calificacion4_3]").val("")
            $("[name = materia5_3], [name = calificacion5_3]").val("")
            $("[name = materia6_3], [name = calificacion6_3]").val("")
            $("[name = materia7_3], [name = calificacion7_3]").val("")
        } else if (materiasCursadas5.val().trim() === "4"){
            $("#fila-materias1_5").show()
            $("#fila-materias2_5").show()
            $("#fila-materias3_5").show()
            $("#fila-materias4_5").show()
            $("#fila-materias5_5").hide()
            $("#fila-materias6_5").hide()
            $("#fila-materias7_5").hide()

            $("[name = materia5_5], [name = calificacion5_5]").val("")
            $("[name = materia6_5], [name = calificacion6_5]").val("")
            $("[name = materia7_5], [name = calificacion7_5]").val("")
        } else if (materiasCursadas5.val().trim() === "5"){
            $("#fila-materias1_5").show()
            $("#fila-materias2_5").show()
            $("#fila-materias3_5").show()
            $("#fila-materias4_5").show()
            $("#fila-materias5_5").show()
            $("#fila-materias6_5").hide()
            $("#fila-materias7_5").hide()

            $("[name = materia6_5], [name = calificacion6_5]").val("")
            $("[name = materia7_5], [name = calificacion7_5]").val("")
        } else if (materiasCursadas5.val().trim() === "6"){
            $("#fila-materias1_5").show()
            $("#fila-materias2_5").show()
            $("#fila-materias3_5").show()
            $("#fila-materias4_5").show()
            $("#fila-materias5_5").show()
            $("#fila-materias6_5").show()
            $("#fila-materias7_5").hide()

            $("[name = materia7_5], [name = calificacion7_4]").val("")
        } else {
            $(".fila-materias_5").show()
        }


        if ($("[name = beca_5]:checked").val() === "SÍ"){
            $("#relbeca_5").show()
        } else{
            $("#relbeca_5").hide()
            $("#tipo_beca_5").val("")
        }


        if (materiasReprobadas5.val().trim() === ''){
            $(".materiarep_5").hide().val("")
        } else if (materiasReprobadas5.val().trim() === '1'){
            $("#materiarep1_5").show();
            $("#materiarep2_5").hide().val("")
            $("#materiarep3_5").hide().val("")
            $("#materiarep4_5").hide().val("")
            $("#materiarep5_5").hide().val("")
            $("#materiarep6_5").hide().val("")
            $("#materiarep7_5").hide().val("")
        } else if (materiasReprobadas5.val().trim() === '2'){
            $("#materiarep1_5").show()
            $("#materiarep2_5").show()
            $("#materiarep3_5").hide().val("")
            $("#materiarep4_5").hide().val("")
            $("#materiarep5_5").hide().val("")
            $("#materiarep6_5").hide().val("")
            $("#materiarep7_5").hide().val("")
        } else if (materiasReprobadas5.val().trim() === '3'){
            $("#materiarep1_5").show()
            $("#materiarep2_5").show()
            $("#materiarep3_5").show()
            $("#materiarep4_5").hide().val("")
            $("#materiarep5_5").hide().val("")
            $("#materiarep6_5").hide().val("")
            $("#materiarep7_5").hide().val("")
        } else if (materiasReprobadas5.val().trim() === '4'){
            $("#materiarep1_5").show()
            $("#materiarep2_5").show()
            $("#materiarep3_5").show()
            $("#materiarep4_5").show()
            $("#materiarep5_5").hide().val("")
            $("#materiarep6_5").hide().val("")
            $("#materiarep7_5").hide().val("")
        } else if (materiasReprobadas5.val().trim() === '5'){
            $("#materiarep1_5").show()
            $("#materiarep2_5").show()
            $("#materiarep3_5").show()
            $("#materiarep4_5").show()
            $("#materiarep5_5").show()
            $("#materiarep6_5").hide().val("")
            $("#materiarep7_5").hide().val("")
        } else if (materiasReprobadas5.val().trim() === '6'){
            $("#materiarep1_5").show()
            $("#materiarep2_5").show()
            $("#materiarep3_5").show()
            $("#materiarep4_5").show()
            $("#materiarep5_5").show()
            $("#materiarep6_5").show()
            $("#materiarep7_5").hide().val("")
        } else {
            $(".materiarep_5").show()
        }

        if (materiasCursadas5.val() === "") {
            materiasReprobadas5.val("")
            $(".materiarep_5").hide()
        } else if (materiasCursadas5.val() < materiasReprobadas5.val()) {
            materiasReprobadas5.val("")
            $(".materiarep_5").hide()
        }

        if ($("#canalizacion1_5").is(":checked")) {
            $("#folioAM_5").show()
        } else {
            $("#folioAM_5").hide().val("")
        }

        if ($("#canalizacion2_5").is(":checked")) {
            $("#folioAP_5").show()
        } else {
            $("#folioAP_5").hide().val("")
        }

        if ($("#canalizacion3_5").is(":checked")) {
            $("#folioAPar_5").show()
        } else {
            $("#folioAPar_5").hide().val("")
        }

        if ($("#canalizacion4_5").is(":checked")) {
            $("#folioTInd_5").show()
        } else {
            $("#folioTInd_5").hide().val("")
        }

        if ($("#canalizacion5_5").is(":checked")) {
            $("#folioOtra_5").show()
        } else {
            $("#folioOtra_5").hide().val("")
        }
    })

    materiasReprobadas5.on("click", function (){
        if (materiasReprobadas5.val() > materiasCursadas5.val()){
            Swal.fire({
                title: 'Fuera del rango de las Asignaturas Cursadas',
                icon: "warning",
                showConfirmButton: false,
                timer: 1500,
                backdrop: "rgba(0,0,0,0.4)"
            });
            materiasReprobadas5.val("")
        } else if (materiasCursadas5.val() === "") {
            Swal.fire({
                title: 'Seleccione primero\nlas asignaturas cursadas\ndurante el semestre',
                icon: "warning",
                showConfirmButton: false,
                timer: 2500,
                backdrop: "rgba(0,0,0,0.4)"
            });
        }
    })

    trayectoria5sem.submit(function (){

    })

    $("#CerrarVentana5").on("click", function (){
        parent.$("#v_modal_t5").hide()
        trayectoria5sem[0].reset()
    })
})