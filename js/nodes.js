function careerHandler(event) {
    console.log(event.target.value);
    let option = event.target.value;
    hideByClassName('careers');
    showByClassName(option)
}

function hideByClassName(className) {
    let careers = document.getElementsByClassName(className);
    for (let i = 0; i < careers.length; i++) {
        careers[i].style.display = 'none';
    }
}

function showByClassName(className) {
    let careers = document.getElementsByClassName(className);
    for (let i = 0; i < careers.length; i++) {
        careers[i].style.display = 'unset';
    }
}

function onChangeRadio(className) {
    let parameters = className.split('-');
    switch (parameters[0]) {
        case 'hide':
            hideByClassName(parameters[1]);
            break;
        case 'show':
            showByClassName(parameters[1]);
            break;
    }
}

function onChangeCheckBox(event, nodeId) {
    let careers = document.getElementById(nodeId);
    if(event.target.checked){
        careers.style.display = 'unset'
    } else {
        careers.style.display = 'none'
    }
}