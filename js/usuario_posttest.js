let CookiesPostTest = Cookies.noConflict();
let PostTest = JSON.parse(CookiesPostTest.get('Usu-PostTest'));

$("#alumno_posttest").text("Alumno: " + PostTest.nombre + " " + PostTest.apellidos + ".")

let carrera_pt = "";
switch (PostTest.carrera) {
    case 'IGEM': carrera_pt = "Ingeniería en Gestión Empresarial";
        break;
    case 'IIND': carrera_pt = "Ingeniería Industrial";
        break;
    case 'ISIC': carrera_pt = "Ingeniería en Sistemas Computacionales";
        break;
    case 'IBIO': carrera_pt = "Ingeniería Biomédica";
        break;
    case 'IIAS': carrera_pt = "Ingeniería en Innovación Agrícola Sustentable";
        break;
    case 'IENR': carrera_pt = "Ingeniería en Energías Renovables";
        break;
    case 'IFOR': carrera_pt = "Ingeniería Forestal";
        break;
    case 'IAGR': carrera_pt = "Ingeniería en Agronomía";
        break;
}
$("#carrera_posttest").text("Carrera: " + carrera_pt + ".")
$("#generacion_posttest").text("Generación: " + PostTest.generacion + ".")

$("#control").val(PostTest.num_control)

$(document).ready(function (){
    $("#cerrarPostTest").on("click", function (){
        CookiesPostTest.remove('POST-TEST');
        CookiesPostTest.remove('Usu-PostTest');
    })
})