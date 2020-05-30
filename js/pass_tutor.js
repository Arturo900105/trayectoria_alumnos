let characters;
let pass;

function generarPassword(length,type) {
    switch(type){
        case 'num':
            characters = "0123456789";
            break;
        case 'alf':
            characters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
            break;
    }
    pass = "";
    for (let i=0; i < length; i++){
        pass += characters.charAt(Math.floor(Math.random()*characters.length));
    }
    return pass;
}

