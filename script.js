function showMessage() {
    alert('Ola, esta e uma interacao em JavaScript!');
}
function changeText() {
    if (document.getElementById("mudar").textContent == "Boa noite!") {
        document.getElementById("mudar").textContent = "Ola, mundo!";
    } else {
        document.getElementById("mudar").textContent = "Boa noite!";
    }
}
function changeColor() {
    if (document.body.style.backgroundColor == 'white') {
    document.body.style.backgroundColor = 'black';
    } else {
        document.body.style.backgroundColor = 'white';
    }
}