/*

//Paso 1 -> Declaro las variables que voy a utilizar:

let fecha, hoy, mes, dia, year, dias_semana, nom_meses;


//Paso 2 -> Las variables las apunto a las siguientes funciones para obtener la fecha actual:

fecha = new Date(); //Obteniendo la Fecha actual
hoy = fecha.getDay(); //Obteniendo el Día de la semana
dia = fecha.getDate(); //Obteniendo Número del día
mes = fecha.getMonth()+1; //Obteniendo el  Mes del año
year = fecha.getFullYear(); //Obteniendo el  Año


//Paso 3 -> Las 2 últimas variables las apunto a los siguientes datos:

dias_semana = ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"];
nom_meses = ["", "Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];


//Paso 4 -> En la hoja de diseño HTML5 dentro de "<head></head>" colocar estos archivos:
//<script src="js/jquery_3.4.1.js"></script>  -> para que reconosca las funciones que pertenecen a JQuery.
//<script src="js/alerta_canalizacion.js"></script> -> este archivo que contiene la parte lógica del HTML5 y desde donde obtengo la fecha actual.


//Paso 5 -> Dentro de esta función coloco el JQuery que mostrará la fecha actual:

$(document).ready(function (){
    $("#fecha_hoy").val(dias_semana[hoy]+", "+dia+" de "+nom_meses[mes]+" de "+year)
})
*/

let apellidoPaterno, apellidoMaterno , Usuarios;
let paternoName, maternoName, separadores1, separadores2;

$(document).ready(function() {

    $("#cambiar").on("click", function (){
        apellidoPaterno = $("#name1").val()
        apellidoMaterno = $("#name2").val()

        separadores1 = / de |-| De /
        separadores2 = /de la |de los |de |y |del |De la |De los |De |Y |Del /

        if (apellidoPaterno.split(separadores1).length > 1){
            paternoName = apellidoPaterno.split(separadores1)[0].toLowerCase().substring(0,1)+
                          apellidoPaterno.split(separadores1)[1].toLowerCase().substring(undefined);
        }
        else if (apellidoPaterno.split(separadores2).length > 1){
            paternoName = apellidoPaterno.split(separadores2)[apellidoPaterno.split(separadores2).length - 1].toLowerCase();
        }
        else {
            paternoName = apellidoPaterno.toLowerCase().substring(undefined);
        }


        if (apellidoMaterno.split(separadores1).length > 1){
            maternoName = apellidoMaterno.split(separadores1)[0].toLowerCase().substring(0,1)+
                          apellidoMaterno.split(separadores1)[1].toLowerCase().substring(0,1);
        }
        else if (apellidoMaterno.split(separadores2).length > 1){
            maternoName = apellidoMaterno.split(separadores2)[apellidoMaterno.split(separadores2).length - 1].toLowerCase().substring(0,1);
        }
        else {
            maternoName = apellidoMaterno.toLowerCase().substring(0,1);
        }


        const sinAcentos = (str) =>{return str.normalize("NFD").replace(/[\u0300-\u036f]/g,"");}

        Usuarios = sinAcentos(paternoName+maternoName);
        $("#name3").val(Usuarios)


    })
})