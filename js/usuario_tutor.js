let CookiesT = Cookies.noConflict();
let mostrarT = JSON.parse(CookiesT.get('UsuTut'));
let iconoT = "", areade = "", titulo = "", imagenCarpeta;

$(document).ready(function (){
    imagenCarpeta = $("#imgTut")

    $("#nombreTut").text((mostrarT.nombre + " " + mostrarT.apellido).toUpperCase())

    switch (mostrarT.area_de) {
        case 'IGEM': iconoT = "iconos/icon_igem.png";
                     areade = "img/folder_igem.png";
                     titulo = "Ingeniería en Gestión Empresarial";
            break;
        case 'IIND': iconoT = "iconos/icon_iind.png";
                     areade = "img/folder_iind.png";
                     titulo = "Ingeniería Industrial";
            break;
        case 'ISIC': iconoT = "iconos/icon_isic.png";
                     areade = "img/folder_isic2.png";
                     titulo = "Ingeniería en Sistemas Computacionales";
            break;
        case 'IBIO': iconoT = "iconos/icon_ibio.png";
                     areade = "img/folder_ibio2.png";
                     titulo = "Ingeniería Biomédica";
            break;
        case 'IIAS': iconoT = "iconos/icon_iias.png";
                     areade = "img/folder_iias.png";
                     titulo = "Ingeniería en Innovación Agrícola Sustentable";
            break;
        case 'IENR': iconoT = "iconos/icon_ienr.png";
                     areade = "img/folder_ienr.png";
                     titulo = "Ingeniería en Energías Renovables";
            break;
        case 'IFOR': iconoT = "img/icon_ifor.png";
                     areade = "img/folder_ifor.png";
                     titulo = "Ingeniería Forestal";
            break;
        case 'IAGR': iconoT = "img/icon_iagr.png";
                     areade = "img/folder_iagr.png";
                     titulo = "Ingeniería en Agronomía";
            break;
    }
    $("#iconoTut").attr("href",iconoT)
    imagenCarpeta.attr("src",areade)
    imagenCarpeta.attr("title",titulo)
    if (mostrarT.sexo === "F") {
        $("#sexoTutor").text("Tutora")
    } else {
        $("#sexoTutor").text("Tutor")
    }
    $("#alumnosTutor").text(titulo)
    $("#tutoriaTut").text((mostrarT.tipo_tutoria).toUpperCase())

    $("#dato_carrera").text((titulo.toUpperCase()))

    $("#usuTut_nombre").text(mostrarT.nombre)
    $("#usuTut_apellidos").text(mostrarT.apellido)

    if (mostrarT.sexo === "F") {
        $("#usuTut_sexo").text("Femenino")
    } else {
        $("#usuTut_sexo").text("Masculino")
    }

    $("#usuTut_tutoria").text(mostrarT.tipo_tutoria)
    $("#usuTut_trabajo").text(titulo)
    $("#usuTut_email").text(mostrarT.email)
    $("#usuTut_usuario").text(mostrarT.usuario)
    $("#usuTut_password").text(mostrarT.pass_tutor)

    $("#cerrarST").on("click", function (){
        CookiesT.remove('TUTOR');
        CookiesT.remove('UsuTut');
    })
})