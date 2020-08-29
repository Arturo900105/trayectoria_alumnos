let a, i, x;
let tSemestre, tcicloImpar, tcicloPar;

function trayectoriaCiclo() {
    tSemestre = document.getElementById("t_semestre").value;
    tcicloImpar = "Agosto - Diciembre";
    tcicloPar = "Enero - Junio";

    if (tSemestre === "1er Semestre" || tSemestre === "3er Semestre" || tSemestre === "5to Semestre" || tSemestre === "7mo Semestre" || tSemestre === "9no Semestre"){
        $("#ciclo").val(tcicloImpar);
    }
    else if (tSemestre === "Proceso de Titulación"){
        $("#ciclo").val("Proceso de Titulación");
    }
    else {
        $("#ciclo").val(tcicloPar);
    }
}

$(document).ready(function () {
    $("#trayectoria1")[0].reset();
    $("#relIngles").hide();
    $(".fila-materias").hide();
    $(".relbeca").hide();
    $(".materiarep").hide();
    $(".folios_canal").hide();

    $('#trayectoria1').on('click', function () {

        if ($("#t_semestre").val().trim() === ''){
            $("#relIngles").hide();
            $("input[name = ingles]").prop( "checked", false );
            $("#nivel_ingles").val("");
            $("input[name = ubicacion]").prop( "checked", false );

            $("#relbeca").hide();
            $("input[name = beca]").prop( "checked", false );
            $("#tipo_beca").val("");

            $("#ciclo").val("");
        }
        else {
            if ($("[name = ingles]:checked").val() === "SÍ"){
                $("#relIngles").show();
            }
            else{
                $("#relIngles").hide();
                $("#nivel_ingles").val("");
                $("input[name = ubicacion]").prop( "checked", false );
            }


            if ($("[name = beca]:checked").val() === "SÍ"){
                $("#relbeca").show();
            }
            else{
                $("#relbeca").hide();
                $("#tipo_beca").val("");
            }
        }


        if ($('#cantidad_materias').val().trim() === ""){
            $(".fila-materias").hide();
            $(".materiaN").val("");
            $(".calificacionN").val("");
        }
        else if ($("#cantidad_materias").val().trim() === "1"){
            $("#fila-materias1").show();
            $("#fila-materias2").hide();
            $("#fila-materias3").hide();
            $("#fila-materias4").hide();
            $("#fila-materias5").hide();
            $("#fila-materias6").hide();
            $("#fila-materias7").hide();

            $("[name = materia2], [name = calificacion2]").val("");
            $("[name = materia3], [name = calificacion3]").val("");
            $("[name = materia4], [name = calificacion4]").val("");
            $("[name = materia5], [name = calificacion5]").val("");
            $("[name = materia6], [name = calificacion6]").val("");
            $("[name = materia7], [name = calificacion7]").val("");

        }
        else if ($("#cantidad_materias").val().trim() === "2"){
            $("#fila-materias1").show();
            $("#fila-materias2").show();
            $("#fila-materias3").hide();
            $("#fila-materias4").hide();
            $("#fila-materias5").hide();
            $("#fila-materias6").hide();
            $("#fila-materias7").hide();

            $("[name = materia3], [name = calificacion3]").val("");
            $("[name = materia4], [name = calificacion4]").val("");
            $("[name = materia5], [name = calificacion5]").val("");
            $("[name = materia6], [name = calificacion6]").val("");
            $("[name = materia7], [name = calificacion7]").val("");
        }
        else if ($("#cantidad_materias").val().trim() === "3"){
            $("#fila-materias1").show();
            $("#fila-materias2").show();
            $("#fila-materias3").show();
            $("#fila-materias4").hide();
            $("#fila-materias5").hide();
            $("#fila-materias6").hide();
            $("#fila-materias7").hide();

            $("[name = materia4], [name = calificacion4]").val("");
            $("[name = materia5], [name = calificacion5]").val("");
            $("[name = materia6], [name = calificacion6]").val("");
            $("[name = materia7], [name = calificacion7]").val("");
        }
        else if ($("#cantidad_materias").val().trim() === "4"){
            $("#fila-materias1").show();
            $("#fila-materias2").show();
            $("#fila-materias3").show();
            $("#fila-materias4").show();
            $("#fila-materias5").hide();
            $("#fila-materias6").hide();
            $("#fila-materias7").hide();

            $("[name = materia5], [name = calificacion5]").val("");
            $("[name = materia6], [name = calificacion6]").val("");
            $("[name = materia7], [name = calificacion7]").val("");
        }
        else if ($("#cantidad_materias").val().trim() === "5"){
            $("#fila-materias1").show();
            $("#fila-materias2").show();
            $("#fila-materias3").show();
            $("#fila-materias4").show();
            $("#fila-materias5").show();
            $("#fila-materias6").hide();
            $("#fila-materias7").hide();

            $("[name = materia6], [name = calificacion6]").val("");
            $("[name = materia7], [name = calificacion7]").val("");
        }
        else if ($("#cantidad_materias").val().trim() === "6"){
            $("#fila-materias1").show();
            $("#fila-materias2").show();
            $("#fila-materias3").show();
            $("#fila-materias4").show();
            $("#fila-materias5").show();
            $("#fila-materias6").show();
            $("#fila-materias7").hide();

            $("[name = materia7], [name = calificacion7]").val("");
        }
        else {
            $(".fila-materias").show();
        }


        if ($('#materias_reprobadas').val().trim() === ''){
            $(".materiarep").hide();
        }
        else if ($("#materias_reprobadas").val().trim() === '1'){
            $("#materiarep1").show();
            $("#materiarep2").hide().val("");
            $("#materiarep3").hide().val("");
            $("#materiarep4").hide().val("");
            $("#materiarep5").hide().val("");
            $("#materiarep6").hide().val("");
            $("#materiarep7").hide().val("");
        }
        else if ($("#materias_reprobadas").val().trim() === '2'){
            $("#materiarep1").show();
            $("#materiarep2").show();
            $("#materiarep3").hide().val("");
            $("#materiarep4").hide().val("");
            $("#materiarep5").hide().val("");
            $("#materiarep6").hide().val("");
            $("#materiarep7").hide().val("");
        }
        else if ($("#materias_reprobadas").val().trim() === '3'){
            $("#materiarep1").show();
            $("#materiarep2").show();
            $("#materiarep3").show();
            $("#materiarep4").hide().val("");
            $("#materiarep5").hide().val("");
            $("#materiarep6").hide().val("");
            $("#materiarep7").hide().val("");
        }
        else if ($("#materias_reprobadas").val().trim() === '4'){
            $("#materiarep1").show();
            $("#materiarep2").show();
            $("#materiarep3").show();
            $("#materiarep4").show();
            $("#materiarep5").hide().val("");
            $("#materiarep6").hide().val("");
            $("#materiarep7").hide().val("");
        }
        else if ($("#materias_reprobadas").val().trim() === '5'){
            $("#materiarep1").show();
            $("#materiarep2").show();
            $("#materiarep3").show();
            $("#materiarep4").show();
            $("#materiarep5").show();
            $("#materiarep6").hide().val("");
            $("#materiarep7").hide().val("");
        }
        else if ($("#materias_reprobadas").val().trim() === '6'){
            $("#materiarep1").show();
            $("#materiarep2").show();
            $("#materiarep3").show();
            $("#materiarep4").show();
            $("#materiarep5").show();
            $("#materiarep6").show();
            $("#materiarep7").hide().val("");
        }
        else {
            $(".materiarep").show();
        }


        if ($("#canalizacion1").is(":checked")) {
            $("#folioAM").show();
        } else {
            $("#folioAM").hide();}

        if ($("#canalizacion2").is(":checked")) {
            $("#folioAP").show();
        } else {
            $("#folioAP").hide();}

        if ($("#canalizacion3").is(":checked")) {
            $("#folioAPar").show();
        } else {
            $("#folioAPar").hide();}

        if ($("#canalizacion4").is(":checked")) {
            $("#folioTInd").show();
        } else {
            $("#folioTInd").hide();}
    })
})