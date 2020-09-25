let SelectValor, area_carrera, carpeta_carrera;

$(document).ready(function () {
    area_carrera = $('#area_de')
    carpeta_carrera = $('#carpetas')

    area_carrera.on('change',function () {

        SelectValor = '#'+$(this).val();

        carpeta_carrera.children('div').hide();
        try{
            carpeta_carrera.children(SelectValor).show();
        }
        catch (e) {}
    });
});