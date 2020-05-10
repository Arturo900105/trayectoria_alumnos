let Cookies2 = Cookies.noConflict();
let mostrar = JSON.parse(Cookies2.get('usuario'));

document.getElementById("ficha").innerText = "Ficha: " + mostrar.num_ficha + ".";
document.getElementById("alumno").innerText = "Alumno: " + mostrar.nombre + ".";

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


function borrarCoockie() {
    Cookies2.remove('usuario');
    history.back();}

//console.log(mostrar.num_ficha);





