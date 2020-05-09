window.onload = function(){

    let fecha = new Date(); //Fecha actual
    let year = fecha.getFullYear(); //obteniendo año

    document.getElementById('generacion').value = year;
};