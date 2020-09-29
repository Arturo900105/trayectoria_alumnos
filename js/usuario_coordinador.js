let CookiesC = Cookies.noConflict();
let mostrarC = JSON.parse(CookiesC.get('UsuCoord'));

$("#nomCoord").text((mostrarC.nombre + " " + mostrarC.apellidos).toUpperCase())


let coordDe = "";
let coord_de = "";
switch (mostrarC.coordinacion) {
    case 'IGEM': coordDe = "Gestión Empresarial";
                 coord_de = "img/folder_igem.png";
    break;
    case 'IIND': coordDe = "Industrial";
                 coord_de = "img/folder_iind.png";
    break;
    case 'ISIC': coordDe = "Sistemas Computacionales";
                 coord_de = "img/folder_isic2.png";
    break;
    case 'IBIO': coordDe = "Biomédica";
                 coord_de = "img/folder_ibio2.png";
    break;
    case 'IIAS': coordDe = "Innovación Agrícola Sustentable";
                 coord_de = "img/folder_iias.png";
    break;
    case 'IENR': coordDe = "Energías Renovables";
                 coord_de = "img/folder_ienr.png";
    break;
    case 'IFOR': coordDe = "Forestal";
                 coord_de = "img/folder_ifor.png";
    break;
    case 'IAGR': coordDe = "Agronomía";
                 coord_de = "img/folder_iagr.png";
    break;
}
$("#coordDe").text("Coordinador de "+coordDe)
$("#imgCoord").attr("src",coord_de)

$(document).ready(function (){
    $("#cerrarSC").on("click", function (){
        CookiesC.remove('COORDINADOR');
        CookiesC.remove('UsuCoord');
    })
})