let yearcpe, num_ficha, ficha;
let alertaEdad = 'Número no válido!!!';
let alertaTel = 'Ingresa solo número sin:\nespacios, "( )" ni " - "';
let alertaCP = 'Entrada no válida!!!';


yearcpe = new Date().getFullYear().toString().substr(-2)

function borrarProm_Bach() {
    $("#prom_prepa").val("")
}

function soloEdad(evt) {
    let code = (evt.which) ? evt.which : evt.keyCode;
    if(code === 8) {
        return true;
    } else if (code>=48 && code<=57) {
        return true;
    } else {
        Swal.fire({title: alertaEdad, timer: 500, showConfirmButton: false, icon:"warning", backdrop:"rgba(85,0,0,0.7)"});
        return false;
    }
}

function nip(evt) {
    let code = (evt.which) ? evt.which : evt.keyCode;
    if(code === 8) {
        return true;
    } else if (code>=48 && code<=57) {
        return true;
    } else {
        return false;
    }
}

function solo_tel(evt) {
    keynum = evt.which;
    if (keynum>47 && keynum<58){
        return true;
    } else {
        Swal.fire({
            title: alertaTel,
            timer: 2000,
            showConfirmButton: false,
            icon:"warning",
            backdrop:"rgba(85,0,0,0.7)"
        });
        return false;
    }
}