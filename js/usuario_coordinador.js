let CookiesC = Cookies.noConflict();
let mostrarC = JSON.parse(CookiesC.get('UsuCoord'));
let iconoC = "", coordDe = "", coord_de = "", imagenCarpeta, tituloC;

$(document).ready(function (){
    imagenCarpeta = $("#imgCoord")

    $("#nomCoord").text((mostrarC.nombre + " " + mostrarC.apellidos).toUpperCase())

    switch (mostrarC.coordinacion) {
        case 'IGEM': iconoC = "iconos/icon_igem.png";
                     coordDe = "Gestión Empresarial";
                     coord_de = "img/folder_igem.png";
                     tituloC = "Ingeniería en Gestión Empresarial";
            break;
        case 'IIND': iconoC = "iconos/icon_iind.png";
                     coordDe = "Industrial";
                     coord_de = "img/folder_iind.png";
                     tituloC = "Ingeniería Industrial";
            break;
        case 'ISIC': iconoC = "iconos/icon_isic.png"
                     coordDe = "Sistemas Computacionales";
                     coord_de = "img/folder_isic2.png";
                     tituloC = "Ingeniería en Sistemas Computacionales";
            break;
        case 'IBIO': iconoC = "iconos/icon_ibio.png";
                     coordDe = "Biomédica";
                     coord_de = "img/folder_ibio2.png";
                     tituloC = "Ingeniería Biomédica";
            break;
        case 'IIAS': iconoC = "iconos/icon_iias.png";
                     coordDe = "Innovación Agrícola Sustentable";
                     coord_de = "img/folder_iias.png";
                     tituloC = "Ingeniería en Innovación Agrícola Sustentable";
            break;
        case 'IENR': iconoC = "iconos/icon_ienr.png";
                     coordDe = "Energías Renovables";
                     coord_de = "img/folder_ienr.png";
                     tituloC = "Ingeniería en Energías Renovables";
            break;
        case 'IFOR': iconoC = "img/icon_ifor.png";
                     coordDe = "Forestal";
                     coord_de = "img/folder_ifor.png";
                     tituloC = "Ingeniería Forestal";
            break;
        case 'IAGR': iconoC = "img/icon_iagr.png";
                     coordDe = "Agronomía";
                     coord_de = "img/folder_iagr.png";
                     tituloC = "Ingeniería en Agronomía";
            break;
    }
    $("#iconoCoord").attr("href",iconoC)
    imagenCarpeta.attr("src",coord_de)
    imagenCarpeta.attr("title",tituloC)

    if (mostrarC.sexo === "F") {
        $("#coordDe").text("Coordinadora de "+coordDe)
        $("#usuCoord_sexo").text("Femenino")
        $("#textoC").text("Coordinadora")
    } else {
        $("#coordDe").text("Coordinador de "+coordDe)
        $("#usuCoord_sexo").text("Masculino")
        $("#textoC").text("Coordinador")
    }
    $("#carreraC").text(tituloC)

    $("#usuCoord_nombre").text(mostrarC.nombre)
    $("#usuCoord_apellidos").text(mostrarC.apellidos)

    $("#usuCoord_coordinacion").text(tituloC)
    $("#usuCoord_email").text(mostrarC.email)
    $("#usuCoord_usuario").text(mostrarC.usuario)
    $("#usuCoord_nip").text(mostrarC.pass_coord)

    $("#cerrarSC").on("click", function (){
        CookiesC.remove('COORDINADOR');
        CookiesC.remove('UsuCoord');
    })
})