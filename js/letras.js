function soloLetras(e) {
    key = e.keyCode || e.which;
    tecla = String.fromCharCode(key).toString();
    letras = "abcdefghijklmnñopqrstuvwxyzABCDEFGHIJKLMNÑOPQRSTUVWXYZáéíóúäëïöüÁÉÍÓÚÄËÏÖÜ";
    especiales = [8,13,32,45,46];
    teclado_especial = false;

    for (var i in especiales){
        if (key == especiales[i]){
            teclado_especial = true;
            break;}}

    if (letras.indexOf(tecla) == -1 && !teclado_especial){
        var alertaletras = "Ingresa solo letras";
        Swal.fire({title: alertaletras, timer: 900, showConfirmButton: false, icon:"warning", backdrop:"rgba(85,0,0,0.7)"});
        return false;}}

function soloValidos(e) {
    llave = e.keyCode || e.which;
    tecla = String.fromCharCode(llave).toString();
    letras = "abcdefghijklmnñopqrstuvwxyzABCDEFGHIJKLMNÑOPQRSTUVWXYZáéíóúäëïöüÁÉÍÓÚÄËÏÖÜ0123456789";
    especiales = [8,13,32,44,45,46];
    teclado_especial = false;

    for (var i in especiales){
        if (llave == especiales[i]){
            teclado_especial = true;
            break;}}

    if (letras.indexOf(tecla) == -1 && !teclado_especial){
        var alertaletras = "Caracter no válido";
        Swal.fire({title: alertaletras, timer: 900, showConfirmButton: false, icon:"warning", backdrop:"rgba(85,0,0,0.7)"});
        return false;}}