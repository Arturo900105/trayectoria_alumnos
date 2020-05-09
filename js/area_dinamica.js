$(document).ready(function () {

    $('#area_de').on('change',function () {

        var SelectValor = '#'+$(this).val();

        $('#carpetas').children('div').hide();
        try{
            $('#carpetas').children(SelectValor).show();
        }
        catch (e) {}
    });
});