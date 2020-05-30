let fecha, mes, dia, year;
let digito1, digito2, digito3;
let semestre, impar, par;
let canalizacion, parametro;

window.onload = function(){

    fecha = new Date(); //Fecha actual

    mes = fecha.getMonth()+1; //obteniendo mes
    dia = fecha.getDate(); //obteniendo dia
    year = fecha.getFullYear(); //obteniendo año

    if(dia < 10)
        dia = '0' + dia; //agrega cero si el menor de 10

    if(mes < 10)
        mes = '0' + mes; //agrega cero si el menor de 10
    document.getElementById('fecha-hoy').value = dia + "-" + mes + "-" + year;

    //console.log(year.toString().substr(2));

};


$(document).ready(function () {
    digito2 = new Date().getFullYear().toString().substr(-2);
    digito3 = "000"

    $("input[name = carrera], [name = tipo_canalizacion]").prop("checked", false);
    document.getElementById("folio").value = "";
    
    $('#igem').click(function () {
        digito1 = "01";
        document.getElementById("folio").value = digito1 + digito2 + digito3;
    })

    $('#iind').click(function () {
        digito1 = "02";
        document.getElementById("folio").value = digito1 + digito2 + digito3;
    })

    $('#isic').click(function () {
        digito1 = "03";
        document.getElementById("folio").value = digito1 + digito2 + digito3;
    })

    $('#ibio').click(function () {
        digito1 = "04";
        document.getElementById("folio").value = digito1 + digito2 + digito3;
    })

    $('#iias').click(function () {
        digito1 = "05";
        document.getElementById("folio").value = digito1 + digito2 + digito3;
    })

    $('#ienr').click(function () {
        digito1 = "06";
        document.getElementById("folio").value = digito1 + digito2 + digito3;
    })

})


function cambiarCiclo() {
    semestre = document.getElementById("semestre").value;
    impar = "Agosto - Diciembre";
    par = "Enero - Junio";

    if (semestre == ""){
        document.getElementById("ciclo_escolar").value = "";
    }
    else if (semestre == "1" || semestre == "3" || semestre == "5" || semestre == "7" || semestre == "9" || semestre == "11"){
        document.getElementById("ciclo_escolar").value = impar;
    }
    else {
        document.getElementById("ciclo_escolar").value = par;
    }
}


function ocultar(className) {
    canalizacion = document.getElementsByClassName(className);
    for (let i = 0; i < canalizacion.length; i++) {
        canalizacion[i].style.display = 'none';
    }
}
function mostrar(className) {
    canalizacion = document.getElementsByClassName(className);
    for (let i = 0; i < canalizacion.length; i++) {
        canalizacion[i].style.display = 'unset';
    }
}
function onChangeRadio(className) {
    parametro = className.split('-');
    switch (parametro[0]) {
        case 'hide':
            ocultar(parametro[1]);
            break;
        case 'show':
            mostrar(parametro[1]);
            break;
    }
}
