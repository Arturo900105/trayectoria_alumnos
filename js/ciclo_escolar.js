//1) Definir Las Variables Correspondintes
var sem_1 = new Array ("Agosto - Diciembre");
var sem_2 = new Array ("Enero - Junio");
var sem_3 = new Array ("Agosto - Diciembre");
var sem_4 = new Array ("Enero - Junio");
var sem_5 = new Array ("Agosto - Diciembre");
var sem_6 = new Array ("Enero - Junio");
var sem_7 = new Array ("Agosto - Diciembre");
var sem_8 = new Array ("Enero - Junio");
var sem_9 = new Array ("Agosto - Diciembre");
var sem_10 = new Array ("Enero - Junio");
var sem_11 = new Array ("Agosto - Diciembre");
var sem_12 = new Array ("Enero - Junio");

// 2) crear una funcion que permita ejecutar el cambio dinamico
function cambia(){
    var semestre;

    //Se toma el vamor del semestre seleccionado
    semestre = document.canalizacion.semestre[document.canalizacion.semestre.selectedIndex].value;

    //se checa si el semestre está definido
    if(semestre != 0){

        //Aparecerá en seguida el ciclo escolar correspondiente
        mi_semestre = eval("sem_" + semestre);

        //se calcula el numero de semestre
        num_semestre = mi_semestre.length;

        //marco el numero de opt en el select
        document.canalizacion.ciclo_escolar.length = num_semestre;

        //para cada semestre del array, lo pongo en el select
        for(i=0; i<num_semestre; i++){
            document.canalizacion.ciclo_escolar.options[i].value = mi_semestre[i];
            document.canalizacion.ciclo_escolar.options[i].text = mi_semestre[i];
        }
    }else{
        //si no hay ningún semestre seleccionado, elimino los ciclos del select
        document.canalizacion.ciclo_escolar.length = 1;

        //pongo -- Ciclo Escolar -- en la unica opt que he dejado
        document.canalizacion.ciclo_escolar.options[0].value="";
        document.canalizacion.ciclo_escolar.options[0].text="-- Ciclo Escolar --";
    }
    //hacer un reset de las opts
    document.canalizacion.ciclo_escolar.options[0].selected = true;
}