let Cookies2 = Cookies.noConflict();
let mostrar = JSON.parse(Cookies2.get('usuario'));

document.getElementById("ficha").innerText = "Ficha: " + mostrar.num_ficha + ".";
document.getElementById("alumno").innerText = "Alumno: " + mostrar.nombre + " " + mostrar.apellidos + ".";

let carrera = "";
switch (mostrar.carrera) {
    case 'IGEM': carrera = "Ingeniería en Gestión Empresarial";
        break;
    case 'IIND': carrera = "Ingeniería Industrial";
        break;
    case 'ISIC': carrera = "Ingeniería en Sistemas Computacionales";
        break;
    case 'IBIO': carrera = "Ingeniería Biomédica";
        break;
    case 'IIAS': carrera = "Ingeniería en Innovación Agrícola Sustentable";
        break;
    case 'IENR': carrera = "Ingeniería en Energías Renovables";
        break;}

document.getElementById("carrera").innerText = "Carrera: " + carrera + ".";
document.getElementById("generacion").innerText = "Generación: " + mostrar.generacion + ".";
document.getElementById("ficha_alumno").value = mostrar.num_ficha;

function borrarCoockie() {
    Cookies2.remove('usuario');
    history.back();
}

try {
    document.getElementById("edo_civil").innerText = "Estado Civil: " + mostrar.edo_civil + ".";


    document.getElementById("sexo").innerText = "Sexo: " + mostrar.sexo + ".";
    if (mostrar.sexo === "Masculino"){
        document.getElementById('solo-femenino').style.display="none";
    }


    document.getElementById("indigena").innerText = "Indígena: " + mostrar.indigena + ".";
}
catch (e) {}
//console.log(mostrar.num_ficha);




