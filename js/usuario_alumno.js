let Cookies2 = Cookies.noConflict();
let mostrar = JSON.parse(Cookies2.get('usuAlumno'));

$("#alumno").text("Alumno: " + mostrar.nombre + " " + mostrar.apellidos + ".")

let carrera = "";
switch (mostrar.carrera) {
    case 'IGEM': carrera = "Ingeniería en Gestión Empresarial";
        break;
    case 'IIND': carrera = "Ingeniería Industrial";
        break;
    case 'ISIC': carrera = "Ingeniería en Sistemas Computacionales";
        break;
    case 'IBIO': carrera = "Ingeniería Biomédica";
        break;
    case 'IIAS': carrera = "Ingeniería en Innovación Agrícola Sustentable";
        break;
    case 'IENR': carrera = "Ingeniería en Energías Renovables";
        break;
    case 'IFOR': carrera = "Ingeniería Forestal";
        break;
    case 'IAGR': carrera = "Ingeniería en Agronomía";
        break;
}

$("#carrera").text("Carrera: " + carrera + ".")
$("#generacion").text("Generación: " + mostrar.generacion + ".")
$("#ficha_alumno").val(mostrar.num_ficha)

$(document).ready(function (){
    $("#cerrarPedagogia, #cerrarPsicologia, #cerrarMedica").on("click", function (){
        Cookies2.remove('ALUMNO');
        Cookies2.remove('usuAlumno');
        history.back();
    })
})

try {
    if (mostrar.sexo === "Masculino"){
        $("#solo-femenino").css({display:"none"})
        $("#gestacional").css({display:"none"})
    }
}
catch (e) {}
//console.log(mostrar.num_ficha);




