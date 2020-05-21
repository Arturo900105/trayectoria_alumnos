//1) Definir Las Variables Correspondintes
var municipio_1 = new Array ("--- Seleccione: ---",
    "Acuitzio", "Aguililla", "Álvaro Obregón", "Angamacutiro", "Angangueo", "Apatzingán", "Aporo", "Aquila", "Ario", "Arteaga",
    "Briseñas", "Buenavista", "Carácuaro", "Coahuayana", "Coalcomán de Vázquez Pallares", "Coeneo", "Contepec", "Copándaro", "Cotija", "Cuitzeo",
    "Charapan", "Charo", "Chavinda", "Cherán", "Chilchota", "Chinicuila", "Chucándiro", "Churintzio", "Churumuco", "Ecuandureo",
    "Epitacio Huerta", "Erongarícuaro", "Gabriel Zamora", "Hidalgo", "La Huacana", "Huandacareo", "Huaniqueo", "Huetamo", "Huiramba", "Indaparapeo",
    "Irimbo", "Ixtlán", "Jacona", "Jiménez", "Jiquilpan", "Juárez", "Jungapeo", "Lagunillas", "Madero", "Maravatío",
    "Marcos Castellanos", "Lázaro Cárdenas", "Morelia", "Morelos", "Múgica", "Nahuatzen", "Nocupétaro", "Nuevo Parangaricutiro", "Nuevo Urecho", "Numarán",
    "Ocampo", "Pajacuarán", "Panindícuaro", "Parácuaro", "Paracho", "Pátzcuaro", "Penjamillo", "Peribán", "La Piedad", "Purépero",
    "Puruándiro", "Queréndaro", "Quiroga", "Cojumatlán de Régules", "Los Reyes", "Sahuayo", "San Lucas", "Santa Ana Maya", "Salvador Escalante", "Senguio",
    "Susupuato", "Tacámbaro", "Tancítaro", "Tangamandapio", "Tangancícuaro", "Tanhuato", "Taretan", "Tarímbaro", "Tepalcatepec", "Tingambato",
    "Tingüindín", "Tiquicheo de Nicolás Romero", "Tlalpujahua", "Tlazazalca", "Tocumbo", "Tumbiscatío", "Turicato", "Tuxpan", "Tuzantla", "Tzintzuntzan",
    "Tzitzio", "Uruapan", "Venustiano Carranza", "Villamar", "Vista Hermosa", "Yurécuaro", "Zacapu", "Zamora", "Zináparo", "Zinapécuaro",
    "Ziracuaretiro", "Zitácuaro", "José Sixto Verduzco");

var municipio_2 = new Array("-------");

// 2) crear una funcion que permita ejecutar el cambio dinamico
function cambiaEstado(){
    var estado;

    //Se toma el valor del "estado seleccionado"
    estado = document.datos_alumnew.estado[document.datos_alumnew.estado.selectedIndex].value;

    //se checa si el estado está definido
    if(estado != ""){

        //selecionamos los municipios correctos
        mis_municipios = eval("municipio_" + estado);

        //se calcula el numero de municipios
        num_municipios = mis_municipios.length;

        //marco el número de municipios en el select
        document.datos_alumnew.municipio.length = num_municipios;

        //para cada municipio del array, la pongo en el select
        for(i=0; i<num_municipios; i++){
            document.datos_alumnew.municipio.options[i].value = mis_municipios[i];
            document.datos_alumnew.municipio.options[i].text = mis_municipios[i];
        }
    }

    else{

        //si no habia ningún municipio seleccionada, elimino las cosas del select
        document.datos_alumnew.municipio.length = 1;

        //ponemos guiones en el único espacio que he dejado
        document.datos_alumnew.municipio.options[0].value="";
        document.datos_alumnew.municipio.options[0].text="-------";
    }
    //hacer un reset de los municipios
    document.datos_alumnew.municipio.options[0].selected = true;
}

$(document).ready(function () {
    $('#estado').val("");
    $('#nom_estado').val("");
    $('#nom_municipio').val("");


    $('#estado').on('change',function () {
        var SelectValor = '#' + $(this).val();
        $('#estados').children('div').hide();
        try {
            $('#estados').children(SelectValor).show();
        }
        catch (e) { }
    });
});

