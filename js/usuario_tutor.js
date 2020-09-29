let CookiesT = Cookies.noConflict();
let mostrarT = JSON.parse(CookiesT.get('UsuTut'));

$("#nombreTut").text((mostrarT.nombre + " " + mostrarT.apellido).toUpperCase())

let areade = "";
switch (mostrarT.area_de) {
    case 'IGEM': areade = "img/folder_igem.png";
        break;
    case 'IIND': areade = "img/folder_iind.png";
        break;
    case 'ISIC': areade = "img/folder_isic2.png";
        break;
    case 'IBIO': areade = "img/folder_ibio2.png";
        break;
    case 'IIAS': areade = "img/folder_iias.png";
        break;
    case 'IENR': areade = "img/folder_ienr.png";
        break;
    case 'IFOR': areade = "img/folder_ifor.png";
        break;
    case 'IAGR': areade = "img/folder_iagr.png";
        break;
}
$("#imgTut").attr("src",areade)

$("#tutoriaTut").text((mostrarT.tipo_tutoria).toUpperCase())

$(document).ready(function (){
    $("#cerrarST").on("click", function (){
        CookiesT.remove('TUTOR');
        CookiesT.remove('UsuTut');
    })
})