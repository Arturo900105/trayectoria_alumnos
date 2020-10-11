let trayectoria2sem, s_tuto2, s_cult2, s_depor2;
let result_tcd1_2, result_tcd2_2, result_tcd3_2, result_tcd4_2, result_tcd5_2, result_tcd6_2, result_tcd7_2;
let calificacion2, nuevaCalificacion2, materiasCursadas2, materiasReprobadas2;

$(document).ready(function (){
    trayectoria2sem = $("#trayectoria2")
    trayectoria2sem[0].reset()
    materiasCursadas2 = $("#cantidad_materias_2")
    materiasReprobadas2 = $("#materias_reprobadas_2")
    $("#relIngles_2, .fila-materias_2, .relbeca_2, .materiarep_2, .folios_canal_2").hide()

    s_tuto2 = $("#tutoria_2")
    s_cult2 = $("#cultural_2")
    s_depor2 = $("#deportiva_2")

    $('#tutoria_2, #cultural_2, #deportiva_2, .folios_canal_2, .calificacionN_2').on('input', function () {
        this.value = this.value.replace(/[^0-9]/g,'');
    })

    $("#tutoria_2, #cultural_2, #deportiva_2").on("change keypress paste focus textInput input",function(){
        calificacion2 = $(this).val()
        nuevaCalificacion2 = calificacion2.replace(/\D/g, "")
        if (nuevaCalificacion2 > 1) {
            $(this).val(1)
        } else {
            $(this).val(nuevaCalificacion2)
        }
    })

    trayectoria2sem.on("keyup", function () {
        result_tcd1_2 = parseInt(s_tuto2.val())
        result_tcd2_2 = parseInt(s_cult2.val())
        result_tcd3_2 = parseInt(s_depor2.val())
        result_tcd4_2 = result_tcd2_2 + result_tcd3_2
        result_tcd5_2 = result_tcd1_2 + result_tcd2_2
        result_tcd6_2 = result_tcd1_2 + result_tcd3_2
        result_tcd7_2 = result_tcd1_2 + result_tcd2_2 + result_tcd3_2


        if (s_tuto2.val().trim() === '' && s_cult2.val().trim() === '' && s_depor2.val().trim() === ''){
            $("#suma_tcd_2").val("")
        } else if (s_cult2.val().trim() === '' && s_depor2.val().trim() === '') {
            $("#suma_tcd_2").val(result_tcd1_2)
        } else if (s_tuto2.val().trim() === '' && s_depor2.val().trim() === ''){
            $("#suma_tcd_2").val(result_tcd2_2)
        } else if (s_tuto2.val().trim() === '' && s_cult2.val().trim() === ''){
            $("#suma_tcd_2").val(result_tcd3_2)
        } else if (s_tuto2.val().trim() === ''){
            $("#suma_tcd_2").val(result_tcd4_2)
        }  else if (s_depor2.val().trim() === ''){
            $("#suma_tcd_2").val(result_tcd5_2)
        } else if (s_cult2.val().trim() === ''){
            $("#suma_tcd_2").val(result_tcd6_2)
        } else {
            $("#suma_tcd_2").val(result_tcd7_2)
        }
    })

    $(".calificacionN_2").on("change keypress paste focus textInput input",function(){
        calificacion2 = $(this).val()
        nuevaCalificacion2 = calificacion2.replace(/\D/g, "")
        if (nuevaCalificacion2 > 100) {
            $(this).val(nuevaCalificacion2[0]+nuevaCalificacion2[1])
        } else {
            $(this).val(nuevaCalificacion2.replace(/^0+/, ''))
        }
    })

    $(".folios_canal_2").on("change keypress paste focus textInput input", function (){
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

    $("[name = calificacion1_2]").on("click", function (){
        $("[name = calificacion1_2]").val("")
    })
    $("[name = calificacion2_2]").on("click", function (){
        $("[name = calificacion2_2]").val("")
    })
    $("[name = calificacion3_2]").on("click", function (){
        $("[name = calificacion3_2]").val("")
    })
    $("[name = calificacion4_2]").on("click", function (){
        $("[name = calificacion4_2]").val("")
    })
    $("[name = calificacion5_2]").on("click", function (){
        $("[name = calificacion5_2]").val("")
    })
    $("[name = calificacion6_2]").on("click", function (){
        $("[name = calificacion6_2]").val("")
    })
    $("[name = calificacion7_2]").on("click", function (){
        $("[name = calificacion7_2]").val("")
    })

    trayectoria2sem.on("click", function (){
        if ($("[name = ingles_2]:checked").val() === "SÍ"){
            $("#relIngles_2").show()
        } else{
            $("#relIngles_2").hide()
            $("#nivel_ingles_2").val("")
            $("input[name = ubicacion_2]").prop("checked", false)
        }


        if (materiasCursadas2.val().trim() === ""){
            $(".fila-materias_2").hide()
            $(".materiaN_2").val("")
            $(".calificacionN_2").val("")
        } else if (materiasCursadas2.val().trim() === "1"){
            $("#fila-materias1_2").show()
            $("#fila-materias2_2").hide()
            $("#fila-materias3_2").hide()
            $("#fila-materias4_2").hide()
            $("#fila-materias5_2").hide()
            $("#fila-materias6_2").hide()
            $("#fila-materias7_2").hide()

            $("[name = materia2_2], [name = calificacion2_2]").val("")
            $("[name = materia3_2], [name = calificacion3_2]").val("")
            $("[name = materia4_2], [name = calificacion4_2]").val("")
            $("[name = materia5_2], [name = calificacion5_2]").val("")
            $("[name = materia6_2], [name = calificacion6_2]").val("")
            $("[name = materia7_2], [name = calificacion7_2]").val("")

        } else if (materiasCursadas2.val().trim() === "2"){
            $("#fila-materias1_2").show()
            $("#fila-materias2_2").show()
            $("#fila-materias3_2").hide()
            $("#fila-materias4_2").hide()
            $("#fila-materias5_2").hide()
            $("#fila-materias6_2").hide()
            $("#fila-materias7_2").hide()

            $("[name = materia3_2], [name = calificacion3_2]").val("")
            $("[name = materia4_2], [name = calificacion4_2]").val("")
            $("[name = materia5_2], [name = calificacion5_2]").val("")
            $("[name = materia6_2], [name = calificacion6_2]").val("")
            $("[name = materia7_2], [name = calificacion7_2]").val("")
        } else if (materiasCursadas2.val().trim() === "3"){
            $("#fila-materias1_2").show()
            $("#fila-materias2_2").show()
            $("#fila-materias3_2").show()
            $("#fila-materias4_2").hide()
            $("#fila-materias5_2").hide()
            $("#fila-materias6_2").hide()
            $("#fila-materias7_2").hide()

            $("[name = materia4_2], [name = calificacion4_2]").val("")
            $("[name = materia5_2], [name = calificacion5_2]").val("")
            $("[name = materia6_2], [name = calificacion6_2]").val("")
            $("[name = materia7_2], [name = calificacion7_2]").val("")
        } else if (materiasCursadas2.val().trim() === "4"){
            $("#fila-materias1_2").show()
            $("#fila-materias2_2").show()
            $("#fila-materias3_2").show()
            $("#fila-materias4_2").show()
            $("#fila-materias5_2").hide()
            $("#fila-materias6_2").hide()
            $("#fila-materias7_2").hide()

            $("[name = materia5_2], [name = calificacion5_2]").val("")
            $("[name = materia6_2], [name = calificacion6_2]").val("")
            $("[name = materia7_2], [name = calificacion7_2]").val("")
        } else if (materiasCursadas2.val().trim() === "5"){
            $("#fila-materias1_2").show()
            $("#fila-materias2_2").show()
            $("#fila-materias3_2").show()
            $("#fila-materias4_2").show()
            $("#fila-materias5_2").show()
            $("#fila-materias6_2").hide()
            $("#fila-materias7_2").hide()

            $("[name = materia6_2], [name = calificacion6_2]").val("")
            $("[name = materia7_2], [name = calificacion7_2]").val("")
        } else if (materiasCursadas2.val().trim() === "6"){
            $("#fila-materias1_2").show()
            $("#fila-materias2_2").show()
            $("#fila-materias3_2").show()
            $("#fila-materias4_2").show()
            $("#fila-materias5_2").show()
            $("#fila-materias6_2").show()
            $("#fila-materias7_2").hide()

            $("[name = materia7_2], [name = calificacion7_2]").val("")
        } else {
            $(".fila-materias_2").show()
        }


        if ($("[name = beca_2]:checked").val() === "SÍ"){
            $("#relbeca_2").show()
        } else{
            $("#relbeca_2").hide()
            $("#tipo_beca_2").val("")
        }


        if (materiasReprobadas2.val().trim() === ''){
            $(".materiarep_2").hide().val("")
        } else if (materiasReprobadas2.val().trim() === '1'){
            $("#materiarep1_2").show();
            $("#materiarep2_2").hide().val("")
            $("#materiarep3_2").hide().val("")
            $("#materiarep4_2").hide().val("")
            $("#materiarep5_2").hide().val("")
            $("#materiarep6_2").hide().val("")
            $("#materiarep7_2").hide().val("")
        } else if (materiasReprobadas2.val().trim() === '2'){
            $("#materiarep1_2").show()
            $("#materiarep2_2").show()
            $("#materiarep3_2").hide().val("")
            $("#materiarep4_2").hide().val("")
            $("#materiarep5_2").hide().val("")
            $("#materiarep6_2").hide().val("")
            $("#materiarep7_2").hide().val("")
        } else if (materiasReprobadas2.val().trim() === '3'){
            $("#materiarep1_2").show()
            $("#materiarep2_2").show()
            $("#materiarep3_2").show()
            $("#materiarep4_2").hide().val("")
            $("#materiarep5_2").hide().val("")
            $("#materiarep6_2").hide().val("")
            $("#materiarep7_2").hide().val("")
        } else if (materiasReprobadas2.val().trim() === '4'){
            $("#materiarep1_2").show()
            $("#materiarep2_2").show()
            $("#materiarep3_2").show()
            $("#materiarep4_2").show()
            $("#materiarep5_2").hide().val("")
            $("#materiarep6_2").hide().val("")
            $("#materiarep7_2").hide().val("")
        } else if (materiasReprobadas2.val().trim() === '5'){
            $("#materiarep1_2").show()
            $("#materiarep2_2").show()
            $("#materiarep3_2").show()
            $("#materiarep4_2").show()
            $("#materiarep5_2").show()
            $("#materiarep6_2").hide().val("")
            $("#materiarep7_2").hide().val("")
        } else if (materiasReprobadas2.val().trim() === '6'){
            $("#materiarep1_2").show()
            $("#materiarep2_2").show()
            $("#materiarep3_2").show()
            $("#materiarep4_2").show()
            $("#materiarep5_2").show()
            $("#materiarep6_2").show()
            $("#materiarep7_2").hide().val("")
        } else {
            $(".materiarep_2").show()
        }

        if (materiasCursadas2.val() === "") {
            materiasReprobadas2.val("")
            $(".materiarep_2").hide()
        } else if (materiasCursadas2.val() < materiasReprobadas2.val()) {
            materiasReprobadas2.val("")
            $(".materiarep_2").hide()
        }

        if ($("#canalizacion1_2").is(":checked")) {
            $("#folioAM_2").show()
        } else {
            $("#folioAM_2").hide().val("")
        }

        if ($("#canalizacion2_2").is(":checked")) {
            $("#folioAP_2").show()
        } else {
            $("#folioAP_2").hide().val("")
        }

        if ($("#canalizacion3_2").is(":checked")) {
            $("#folioAPar_2").show()
        } else {
            $("#folioAPar_2").hide().val("")
        }

        if ($("#canalizacion4_2").is(":checked")) {
            $("#folioTInd_2").show()
        } else {
            $("#folioTInd_2").hide().val("")
        }

        if ($("#canalizacion5_2").is(":checked")) {
            $("#folioOtra_2").show()
        } else {
            $("#folioOtra_2").hide().val("")
        }
    })

    materiasReprobadas2.on("click", function (){
        if (materiasReprobadas2.val() > materiasCursadas2.val()){
            Swal.fire({
                title: 'Fuera del rango de las Asignaturas Cursadas',
                width: "40%",
                icon: "warning",
                showConfirmButton: false,
                timer: 1500,
                backdrop: "rgba(0,0,0,0.4)"
            });
            materiasReprobadas2.val("")
        } else if (materiasCursadas2.val() === "") {
            Swal.fire({
                title: 'Seleccione primero\nlas asignaturas cursadas\ndurante el semestre',
                icon: "warning",
                showConfirmButton: false,
                timer: 2500,
                backdrop: "rgba(0,0,0,0.4)"
            });
        }
    })

    trayectoria2sem.submit(function (e){
        e.preventDefault()

        if (!$("[name=ingles_2]").is(":checked")) {
            Swal.fire({
                title: "Cursando idioma Inglés\n¡Sin contestar!",
                icon: "warning",
                showConfirmButton: false,
                timer: 2000,
                backdrop: "rgba(0,0,0,0.4)"
            });
            return false;
        } else {
            if ($("[name=ingles_2]:checked").val() === "SÍ") {
                if ($("#nivel_ingles_2").val().trim() === ""){
                    Swal.fire({
                        title: "Nivel de Inglés\n¡Sin contestar!",
                        icon: "warning",
                        showConfirmButton: false,
                        timer: 2000,
                        backdrop: "rgba(0,0,0,0.4)"
                    });
                    return false;
                } else if (!$("[name=ubicacion1]").is(":checked")) {
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


    })

    $("#CerrarVentana2").on("click", function (){
        parent.$("#v_modal_t2").hide()
        trayectoria2sem[0].reset()
    })


})