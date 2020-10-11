let trayectoria6sem, s_tuto6, s_cult6, s_depor6, s_compl6, calificacion6, nuevaCalificacion6;
let creditoTutoria6, creditoCultural6, creditoDeportiva6, creditoComplementaria6;
let newCrediTutoria6, newCrediCultural6, newCrediDeportiva6, newCrediComplementaria6;
let result_tcd1_6, result_tcd2_6, result_tcd3_6, result_tcd4_6, result_tcd5_6, result_tcd6_6, result_tcd7_6, result_tcd8_6;
let result_tcd9_6, result_tcd10_6, result_tcd11_6, result_tcd12_6, result_tcd13_6, result_tcd14_6, result_tcd15_6;
let materiasCursadas6, materiasReprobadas6;

$(document).ready(function (){
    trayectoria6sem = $("#trayectoria6")
    trayectoria6sem[0].reset()
    materiasCursadas6 = $("#cantidad_materias_6")
    materiasReprobadas6 = $("#materias_reprobadas_6")

    $("#relIngles_6, #lugar_servsoc, .fila-materias_6, .relbeca_6, .materiarep_6, .folios_canal_6").hide()

    s_tuto6 = $("#tutoria_6")
    s_cult6 = $("#cultural_6")
    s_depor6 = $("#deportiva_6")
    s_compl6 = $("#complementaria_6")

    $('.credito_6, #complementaria_6, .calificacionN_6, .folios_canal_6').on('input', function () {
        this.value = this.value.replace(/[^0-9]/g,'');
    })


    trayectoria6sem.on("change keypress paste focus textInput input",function() {
        creditoTutoria6 = s_tuto6.val()
        creditoCultural6 = s_cult6.val()
        creditoDeportiva6 = s_depor6.val()
        creditoComplementaria6 = s_compl6.val()

        newCrediTutoria6 = creditoTutoria6.replace(/\D/g, "")
        newCrediCultural6 = creditoCultural6.replace(/\D/g, "")
        newCrediDeportiva6 = creditoDeportiva6.replace(/\D/g, "")
        newCrediComplementaria6 = creditoComplementaria6.replace(/\D/g, "")

        if (newCrediTutoria6 > 2) {
            s_tuto6.val(2)
        } else {
            s_tuto6.val(newCrediTutoria6)
        }

        if (newCrediCultural6 > 1) {
            s_cult6.val(1)
        } else {
            s_cult6.val(newCrediCultural6)
        }

        if (newCrediDeportiva6 > 1) {
            s_depor6.val(1)
        } else {
            s_depor6.val(newCrediDeportiva6)
        }

        if (creditoComplementaria6 > 1) {
            s_compl6.val(1)
        } else {
            s_compl6.val(creditoComplementaria6)
        }
    })


    trayectoria6sem.on("keyup", function () {
        result_tcd1_6 = parseInt(s_tuto6.val())
        result_tcd2_6 = parseInt(s_cult6.val())
        result_tcd3_6 = parseInt(s_depor6.val())
        result_tcd4_6 = parseInt(s_compl6.val())
        result_tcd5_6 = result_tcd1_6 + result_tcd2_6;
        result_tcd6_6 = result_tcd1_6 + result_tcd3_6;
        result_tcd7_6 = result_tcd1_6 + result_tcd4_6;
        result_tcd8_6 = result_tcd2_6 + result_tcd3_6;
        result_tcd9_6 = result_tcd2_6 + result_tcd4_6;
        result_tcd10_6 = result_tcd3_6 + result_tcd4_6;
        result_tcd11_6 = result_tcd1_6 + result_tcd2_6 + result_tcd3_6;
        result_tcd12_6 = result_tcd1_6 + result_tcd2_6 + result_tcd4_6;
        result_tcd13_6 = result_tcd1_6 + result_tcd3_6 + result_tcd4_6;
        result_tcd14_6 = result_tcd2_6 + result_tcd3_6 + result_tcd4_6;
        result_tcd15_6 = result_tcd1_6 + result_tcd2_6 + result_tcd3_6 + result_tcd4_6;

        if (s_tuto6.val().trim()==='' && s_cult6.val().trim()==='' && s_depor6.val().trim()==='' && s_compl6.val().trim()==='') {
            $("#suma_tcdc_6").val("")
        } else if (s_cult6.val().trim()==='' && s_depor6.val().trim()==='' && s_compl6.val().trim()==='') {
            $("#suma_tcdc_6").val(result_tcd1_6)
        } else if (s_tuto6.val().trim()==='' && s_depor6.val().trim()==='' && s_compl6.val().trim()==='') {
            $("#suma_tcdc_6").val(result_tcd2_6)
        } else if (s_tuto6.val().trim()==='' && s_cult6.val().trim()==='' && s_compl6.val().trim()==='') {
            $("#suma_tcdc_6").val(result_tcd3_6)
        } else if (s_tuto6.val().trim()==='' && s_cult6.val().trim()==='' && s_depor6.val().trim()==='' ) {
            $("#suma_tcdc_6").val(result_tcd4_6)
        } else if (s_depor6.val().trim()==='' && s_compl6.val().trim()==='') {
            $("#suma_tcdc_6").val(result_tcd5_6)
        } else if (s_cult6.val().trim()==='' && s_compl6.val().trim()==='') {
            $("#suma_tcdc_6").val(result_tcd6_6)
        } else if (s_cult6.val().trim()==='' && s_depor6.val().trim()==='') {
            $("#suma_tcdc_6").val(result_tcd7_6)
        } else if (s_tuto6.val().trim()==='' && s_compl6.val().trim()==='') {
            $("#suma_tcdc_6").val(result_tcd8_6)
        } else if (s_tuto6.val().trim()==='' && s_depor6.val().trim()==='') {
            $("#suma_tcdc_6").val(result_tcd9_6)
        } else if (s_tuto6.val().trim()==='' && s_cult6.val().trim()==='') {
            $("#suma_tcdc_6").val(result_tcd10_6)
        } else if (s_compl6.val().trim()==='') {
            $("#suma_tcdc_6").val(result_tcd11_6)
        } else if (s_depor6.val().trim()==='') {
            $("#suma_tcdc_6").val(result_tcd12_6)
        } else if (s_cult6.val().trim()==='') {
            $("#suma_tcdc_6").val(result_tcd13_6)
        } else if (s_tuto6.val().trim()==='') {
            $("#suma_tcdc_6").val(result_tcd14_6)
        } else {
            $("#suma_tcdc_6").val(result_tcd15_6)
        }
    })




    trayectoria6sem.on("click", function (){
        if ($("[name = ingles_6]:checked").val() === "SÍ"){
            $("#relIngles_6").show()
        } else{
            $("#relIngles_6").hide()
            $("#nivel_ingles_6").val("")
            $("input[name = ubicacion_6]").prop("checked", false)
        }

        if ($("[name=servSocial_6]:checked").val() === "SÍ") {
            $("#lugar_servsoc").show()
        } else {
            $("#lugar_servsoc").hide().val("")
        }


        if (materiasCursadas6.val().trim() === ""){
            $(".fila-materias_6").hide()
            $(".materiaN_6").val("")
            $(".calificacionN_6").val("")
        } else if (materiasCursadas6.val().trim() === "1"){
            $("#fila-materias1_6").show()
            $("#fila-materias2_6").hide()
            $("#fila-materias3_6").hide()
            $("#fila-materias4_6").hide()
            $("#fila-materias5_6").hide()
            $("#fila-materias6_6").hide()
            $("#fila-materias7_6").hide()

            $("[name = materia2_6], [name = calificacion2_6]").val("")
            $("[name = materia3_6], [name = calificacion3_6]").val("")
            $("[name = materia4_6], [name = calificacion4_6]").val("")
            $("[name = materia5_6], [name = calificacion5_6]").val("")
            $("[name = materia6_6], [name = calificacion6_6]").val("")
            $("[name = materia7_6], [name = calificacion7_6]").val("")

        } else if (materiasCursadas6.val().trim() === "2"){
            $("#fila-materias1_6").show()
            $("#fila-materias2_6").show()
            $("#fila-materias3_6").hide()
            $("#fila-materias4_6").hide()
            $("#fila-materias5_6").hide()
            $("#fila-materias6_6").hide()
            $("#fila-materias7_6").hide()

            $("[name = materia3_6], [name = calificacion3_6]").val("")
            $("[name = materia4_6], [name = calificacion4_6]").val("")
            $("[name = materia5_6], [name = calificacion5_6]").val("")
            $("[name = materia6_6], [name = calificacion6_6]").val("")
            $("[name = materia7_6], [name = calificacion7_6]").val("")
        } else if (materiasCursadas6.val().trim() === "3"){
            $("#fila-materias1_6").show()
            $("#fila-materias2_6").show()
            $("#fila-materias3_6").show()
            $("#fila-materias4_6").hide()
            $("#fila-materias5_6").hide()
            $("#fila-materias6_6").hide()
            $("#fila-materias7_6").hide()

            $("[name = materia4_6], [name = calificacion4_6]").val("")
            $("[name = materia5_6], [name = calificacion5_6]").val("")
            $("[name = materia6_6], [name = calificacion6_6]").val("")
            $("[name = materia7_6], [name = calificacion7_6]").val("")
        } else if (materiasCursadas6.val().trim() === "4"){
            $("#fila-materias1_6").show()
            $("#fila-materias2_6").show()
            $("#fila-materias3_6").show()
            $("#fila-materias4_6").show()
            $("#fila-materias5_6").hide()
            $("#fila-materias6_6").hide()
            $("#fila-materias7_6").hide()

            $("[name = materia5_6], [name = calificacion5_6]").val("")
            $("[name = materia6_6], [name = calificacion6_6]").val("")
            $("[name = materia7_6], [name = calificacion7_6]").val("")
        } else if (materiasCursadas6.val().trim() === "5"){
            $("#fila-materias1_6").show()
            $("#fila-materias2_6").show()
            $("#fila-materias3_6").show()
            $("#fila-materias4_6").show()
            $("#fila-materias5_6").show()
            $("#fila-materias6_6").hide()
            $("#fila-materias7_6").hide()

            $("[name = materia6_6], [name = calificacion6_6]").val("")
            $("[name = materia7_6], [name = calificacion7_6]").val("")
        } else if (materiasCursadas6.val().trim() === "6"){
            $("#fila-materias1_6").show()
            $("#fila-materias2_6").show()
            $("#fila-materias3_6").show()
            $("#fila-materias4_6").show()
            $("#fila-materias5_6").show()
            $("#fila-materias6_6").show()
            $("#fila-materias7_6").hide()

            $("[name = materia7_6], [name = calificacion7_6]").val("")
        } else {
            $(".fila-materias_6").show()
        }


        if ($("[name = beca_6]:checked").val() === "SÍ"){
            $("#relbeca_6").show()
        } else{
            $("#relbeca_6").hide()
            $("#tipo_beca_6").val("")
        }


        if (materiasReprobadas6.val().trim() === ''){
            $(".materiarep_6").hide().val("")
        } else if (materiasReprobadas6.val().trim() === '1'){
            $("#materiarep1_6").show();
            $("#materiarep2_6").hide().val("")
            $("#materiarep3_6").hide().val("")
            $("#materiarep4_6").hide().val("")
            $("#materiarep5_6").hide().val("")
            $("#materiarep6_6").hide().val("")
            $("#materiarep7_6").hide().val("")
        } else if (materiasReprobadas6.val().trim() === '2'){
            $("#materiarep1_6").show()
            $("#materiarep2_6").show()
            $("#materiarep3_6").hide().val("")
            $("#materiarep4_6").hide().val("")
            $("#materiarep5_6").hide().val("")
            $("#materiarep6_6").hide().val("")
            $("#materiarep7_6").hide().val("")
        } else if (materiasReprobadas6.val().trim() === '3'){
            $("#materiarep1_6").show()
            $("#materiarep2_6").show()
            $("#materiarep3_6").show()
            $("#materiarep4_6").hide().val("")
            $("#materiarep5_6").hide().val("")
            $("#materiarep6_6").hide().val("")
            $("#materiarep7_6").hide().val("")
        } else if (materiasReprobadas6.val().trim() === '4'){
            $("#materiarep1_6").show()
            $("#materiarep2_6").show()
            $("#materiarep3_6").show()
            $("#materiarep4_6").show()
            $("#materiarep5_6").hide().val("")
            $("#materiarep6_6").hide().val("")
            $("#materiarep7_6").hide().val("")
        } else if (materiasReprobadas6.val().trim() === '5'){
            $("#materiarep1_6").show()
            $("#materiarep2_6").show()
            $("#materiarep3_6").show()
            $("#materiarep4_6").show()
            $("#materiarep5_6").show()
            $("#materiarep6_6").hide().val("")
            $("#materiarep7_6").hide().val("")
        } else if (materiasReprobadas6.val().trim() === '6'){
            $("#materiarep1_6").show()
            $("#materiarep2_6").show()
            $("#materiarep3_6").show()
            $("#materiarep4_6").show()
            $("#materiarep5_6").show()
            $("#materiarep6_6").show()
            $("#materiarep7_6").hide().val("")
        } else {
            $(".materiarep_6").show()
        }


        if (materiasCursadas6.val() === "") {
            materiasReprobadas6.val("")
            $(".materiarep_6").hide()
        } else if (materiasCursadas6.val() < materiasReprobadas6.val()) {
            materiasReprobadas6.val("")
            $(".materiarep_6").hide()
        }


        if ($("#canalizacion1_6").is(":checked")) {
            $("#folioAM_6").show()
        } else {
            $("#folioAM_6").hide().val("")
        }

        if ($("#canalizacion2_6").is(":checked")) {
            $("#folioAP_6").show()
        } else {
            $("#folioAP_6").hide().val("")
        }

        if ($("#canalizacion3_6").is(":checked")) {
            $("#folioAPar_6").show()
        } else {
            $("#folioAPar_6").hide().val("")
        }

        if ($("#canalizacion4_6").is(":checked")) {
            $("#folioTInd_6").show()
        } else {
            $("#folioTInd_6").hide().val("")
        }

        if ($("#canalizacion5_6").is(":checked")) {
            $("#folioOtra_6").show()
        } else {
            $("#folioOtra_6").hide().val("")
        }
    })


    $(".calificacionN_6").on("change keypress paste focus textInput input",function() {
        calificacion6 = $(this).val()
        nuevaCalificacion6 = calificacion6.replace(/\D/g, "")
        if (nuevaCalificacion6 > 100) {
            $(this).val(nuevaCalificacion6[0]+nuevaCalificacion6[1])
        } else {
            $(this).val(nuevaCalificacion6.replace(/^0+/, ''))
        }
    })

    $(".folios_canal_6").on("change keypress paste focus textInput input", function (){
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

    materiasReprobadas6.on("click", function (){
        if (materiasReprobadas6.val() > materiasCursadas6.val()){
            Swal.fire({
                title: 'Fuera del rango de las Asignaturas Cursadas',
                icon: "warning",
                showConfirmButton: false,
                timer: 1500,
                backdrop: "rgba(0,0,0,0.4)"
            });
            materiasReprobadas6.val("")
        } else if (materiasCursadas6.val() === "") {
            Swal.fire({
                title: 'Seleccione primero\nlas asignaturas cursadas\ndurante el semestre',
                icon: "warning",
                showConfirmButton: false,
                timer: 2500,
                backdrop: "rgba(0,0,0,0.4)"
            });
        }
    })


    trayectoria6sem.submit(function (){

    })


    $("#CerrarVentana6").on("click", function (){
        parent.$("#v_modal_t6").hide()
        trayectoria6sem[0].reset()
    })


})

