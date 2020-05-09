function Confirmar_Acceso_Pedagogia() {document.getElementById('acceso_pedagogia').style.display="block";}
function Cerrar_Accesol_Pedagogia() {document.getElementById('acceso_pedagogia').style.display="none";}

function Confirmar_Acceso_Psicologia() {document.getElementById('acceso_psicologia').style.display="block";}
function Cerrar_Accesol_Psicologia() {document.getElementById('acceso_psicologia').style.display="none";}

function Confirmar_Acceso_Medica() {document.getElementById('acceso_medica').style.display="block";}
function Cerrar_Accesol_Medica() {document.getElementById('acceso_medica').style.display="none";}

$(document).ready(function () {
    $('#form_alumno').submit(function (e) {
        e.preventDefault();

        let ficha_vacia = "Ingresa un Número de Ficha";
        let generacion = new Date().getFullYear();
        let alerta1 = "Ingresa una Ficha válida";
        let alertaSexo = "Falta validar el campo sexo";
        let alerta2 = "Confirma si te\nconsideras Indígena o no";
        let alerta3 = "Confirma tu Estado Civil";
        let alerta4 = "Debes seleccionar un Estado";
        let alerta5 = "Debes seleccionar un Municipio";
        let alerta6 = "Debes seleccionar\nnombre del Estado";
        let alerta7 = "Debes ingresar un\nMunicipio";
        let alerta8 = "Seleccione la\nescuela de procedencia";
        let alerta9 = "Por favor,\nIngrese el tipo de\nBachillerato";
        let alerta10 = "Por favor,\nIngrese el nombre del\nBachillerato";
        let alerta11 = "Por favor,\nIngrese el nombre de la\nSecundaria";
        let alert_carrera = "Seleccione una Carrera";
        let tittle_confir = "¿Registrar?";
        let texto_confir = "Después, para modificar errores, tendrá que acudir con el(la) encargado(a) de Tutoría Académica.";

        if ($('#no_ficha').val().trim() == ''){
            Swal.fire({title: ficha_vacia, icon:"warning", confirmButtonColor: '#550100', backdrop:"rgba(85,0,0,0.7)"});
            return false;}

        else if ($('#no_ficha').val().trim() == '0000') {
            Swal.fire({title: alerta1, icon:"warning", confirmButtonColor: '#550100', backdrop:"rgba(85,0,0,0.7)"});
            return false;}

        if ($('#sexo').val().trim() == '') {
            Swal.fire({title: alertaSexo, icon:"warning", confirmButtonColor: '#000155', backdrop:"rgba(0,1,85,0.7)"});
            return false;}

        if(!$("input[name='indigena']:radio").is(":checked")) {
            Swal.fire({title: alerta2, icon:"warning", confirmButtonColor: '#000155', backdrop:"rgba(0,1,85,0.7)"});
            return false;}

        if(!$("input[name='estado_civil']:radio").is(":checked")) {
            Swal.fire({title: alerta3, icon:"warning", confirmButtonColor: '#000155', backdrop:"rgba(0,1,85,0.7)"});
            return false;}

        if ($('#estado').val().trim() == '') {
            Swal.fire({title: alerta4, icon:"warning", confirmButtonColor: '#000155', backdrop:"rgba(0,1,85,0.7)"});
            return false;}

        if ($('#municipio').val().trim() == '--- Seleccione: ---') {
            Swal.fire({title: alerta5, icon:"warning", confirmButtonColor: '#000155', backdrop:"rgba(0,1,85,0.7)"});
            return false;}

        if ($('#estado').val().trim() == '2'){
            if ($('#nom_estado').val().trim() == ''){
                Swal.fire({title: alerta6, icon:"warning", confirmButtonColor: '#000155', backdrop:"rgba(0,1,85,0.7)"});
                return false;}
            if ($('#nom_municipio').val().trim() == ''){
                Swal.fire({title: alerta7, icon:"warning", confirmButtonColor: '#000155', backdrop:"rgba(0,1,85,0.7)"});
                return false;}}

        if(!$("input[name='preparatoria']:radio").is(":checked")) {
            Swal.fire({title: alerta8, icon:"warning", confirmButtonColor: '#000155', backdrop:"rgba(0,1,85,0.7)"});
            return false;}

        if ($("input[value='otro']:radio").is(":checked")) {
            if ($('#otro_tipo_prepa').val().trim() == ''){
                Swal.fire({title: alerta9, icon:"warning", confirmButtonColor: '#000155', backdrop:"rgba(0,1,85,0.7)"});
                return false;}}

        if ($('#preparatoria').val().trim() == ''){
            Swal.fire({title: alerta10, icon:"warning", confirmButtonColor: '#000155', backdrop:"rgba(0,1,85,0.7)"});
            return false;}

        if ($('#secundaria').val().trim() == ''){
            Swal.fire({title: alerta11, icon:"warning", confirmButtonColor: '#000155', backdrop:"rgba(0,1,85,0.7)"});
            return false;}

        if(!$("input[name='carrera']:radio").is(":checked")) {
            Swal.fire({title: alert_carrera, icon:"warning", confirmButtonColor: 'rgba(221,91,0,0.98)', backdrop:"rgba(60,59,57,0.7)"});
            return false;}

        Swal.fire({
            title: tittle_confir,
            text: texto_confir,
            type: 'warning',
            icon: "question",
            showCancelButton: true,
            confirmButtonColor: '#19980b',
            cancelButtonColor: '#910018',
            confirmButtonText: 'GUARDAR',
            cancelButtonText: 'CANCELAR',
            backdrop:"rgba(7,44,0,0.7)"

        }).then((result) => {
            if (result.value) {
                $.ajax({
                    url:"php/guardar_alumno.php",
                    type:'POST',
                    data:$("#form_alumno").serialize(),
                    success: function (respuesta) {
                        swal.fire({
                            position: 'center',
                            icon: 'success',
                            title: (respuesta),
                            showConfirmButton: false,
                            timer: 1500})},
                    error: function (error){
                        swal.fire({
                            position: 'center',
                            icon: 'error',
                            title: (error.responseText),
                            showConfirmButton: false,
                            timer: 1500})}
                });
                document.getElementById("form_alumno").reset();
                document.getElementById("generacion").value = generacion;
            }
        });
    });
});

$(document).ready(function (){
    let alertPedagogia = "Debes ingresar tu\nNúm. de Ficha";
    let alertPedagogia2 = "Ficha no válida";

    $('#contenido_pedagogia').submit(function (e){
        e.preventDefault();
        if ($('#login_pedagogia').val().trim() == ''){
            Swal.fire({title: alertPedagogia, position: 'top', showConfirmButton: false, timer: 1500, icon:"warning", backdrop:"rgba(0,0,0,0)"});
            return false;}

        else if ($('#login_pedagogia').val().trim() == '0000'){
            Swal.fire({title: alertPedagogia2, position: 'top', showConfirmButton: false, timer: 700, icon:"warning", backdrop:"rgba(0,0,0,0)"});
            return false;}

        else {
            $.ajax({
                url:"php/login-pedagogia.php",
                type:'POST',
                data:$(this).serialize(),
                success: function (resultado) {
                    let Cookies2 = Cookies.noConflict();
                    Cookies2.set('usuario', resultado);
                    location.href = 'pedagogia.html';
                },
                error: function (error){
                    swal.fire({
                        position: 'top',
                        icon: 'question',
                        title: (error.responseText),
                        showConfirmButton: false,
                        timer: 1500})}});}});

    $('#contenido_psicologia').submit(function (e){
        e.preventDefault();
        if ($('#login_psicologia').val().trim() == ''){
            Swal.fire({title: alertPedagogia, position: 'top', showConfirmButton: false, timer: 1500, icon:"warning", backdrop:"rgba(0,0,0,0)"});
            return false;}

        else if ($('#login_psicologia').val().trim() == '0000'){
            Swal.fire({title: alertPedagogia2, position: 'top', showConfirmButton: false, timer: 700, icon:"warning", backdrop:"rgba(0,0,0,0)"});
            return false;}

        else {
            $.ajax({
                url:"php/login-psicologia.php",
                type:'POST',
                data:$(this).serialize(),
                success: function () {
                    location.href = 'psicologia.html';},
                error: function (error){
                    swal.fire({
                        position: 'top',
                        icon: 'question',
                        title: (error.responseText),
                        showConfirmButton: false,
                        timer: 1500})}});}});

});


function Acceso_Post_Test() {document.getElementById('acceso_posttest').style.display="block";}
function Accesol_Post_Test() {document.getElementById('acceso_posttest').style.display="none";}