function Poner_Ceros(num) {
    while (num.value.length<4) {
        num.value = '0'+num.value;
    }
}

function borrarFicha() {document.getElementById("no_ficha").value = "";}
function borrarProm_Bach() {document.getElementById("prom_prepa").value = "";}
function borrarProm_Secun() {document.getElementById("prom_secun").value = "";}
function loginArea() {document.getElementById("login_areas").value = "";}


let alertaEdad = 'Número no válido!!!';
let alertaTel = 'Ingresa solo número sin:\nespacios, "( )" ni " - "';
let alertaCP = 'Entrada no válida!!!';

function soloEdad(evt) {
    var code = (evt.which) ? evt.which : evt.keyCode;
    if(code == 8) {return true;}
    else if (code>=48 && code<=57) {return true;}
    else {
        Swal.fire({title: alertaEdad, timer: 500, showConfirmButton: false, icon:"warning", backdrop:"rgba(85,0,0,0.7)"});
        return false;}}

function nip(evt) {
    var code = (evt.which) ? evt.which : evt.keyCode;
    if(code == 8) {return true;}
    else if (code>=48 && code<=57) {return true;}
    else {return false;}}

function solo_tel(evt) {
    keynum = evt.which;
    if (keynum>47 && keynum<58){return true;}
    else {
        Swal.fire({title: alertaTel, timer: 2000, showConfirmButton: false, icon:"warning", backdrop:"rgba(85,0,0,0.7)"});
        return false;}}

function CodigoPostal(evt) {
    keynum = evt.which;
    if (keynum>47 && keynum<58){return true;}
    else {
        Swal.fire({title: alertaCP, timer: 500, showConfirmButton: false, icon:"warning", backdrop:"rgba(85,0,0,0.7)"});
        return false;}}

function solo_numero(evt) {
    var code = (evt.which) ? evt.which : evt.keyCode;
    if(code == 8) {return true;}
    else if (code>=48 && code<=57) {return true;}
    else {return false;}}


$(document).ready(function () {
    $('.escala_pretest').on('change keypress paste focus textInput input',function(){
        var val = $(this).val();
        var newVal = val.replace(/\D/g, '');
        if (newVal > 3) {
            $(this).val(3);
        } else {
            $(this).val(newVal);
        }
    });
});

$(document).ready(function () {
    $('.escala_posttest').on('change keypress paste focus textInput input',function(){
        var val = $(this).val();
        var newVal = val.replace(/\D/g, '');
        if (newVal > 3){
            $(this).val(3);
        } else {
            $(this).val(newVal);
        }
    });
});