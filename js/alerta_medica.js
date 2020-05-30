let parametro, radio, caja;

function ocultarRadio(className) {
    radio = document.getElementsByClassName(className);
    for (let i = 0; i < radio.length; i++) {
        radio[i].style.display = 'none';
    }
}

function mostrarRadio(className) {
    radio = document.getElementsByClassName(className);
    for (let i = 0; i < radio.length; i++) {
        radio[i].style.display = 'unset';
    }
}

function cambioRadio(className) {
    parametro = className.split('-');
    switch (parametro[0]) {
        case 'hide':
            ocultarRadio(parametro[1]);
            break;
        case 'show':
            mostrarRadio(parametro[1]);
            break;
    }
}

function cambioCaja(event, nodeId) {
    caja = document.getElementById(nodeId);
    if(event.target.checked){
        caja.style.display = 'unset'
    } else {
        caja.style.display = 'none'
    }
}

function onInputLoad() {
    //console.log('onInputLoad');
    document.getElementById("medica-alumno").reset(); //-> para borrar contenido
    const event = new Event('change');
    const inputs = document.getElementsByTagName('input');
    for (let index = 0; index < inputs.length; ++index) {
        inputs[index].dispatchEvent(event);
    }
}

$(document).ready(function () {
    $(".ante_hered").prop( "checked", false );
    $("input[name = toxi], [name = embarazo], [name = act_fisica], [name = alergias]").prop( "checked", false );
    $("input[name = qui_cir], [name = transfusionales], [name = diabetes], [name = hipertension]").prop( "checked", false );
    $("input[name = convulsiones], [name = asma]").prop( "checked", false );
})