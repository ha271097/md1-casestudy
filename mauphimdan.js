function backgroundA() {
    let colors1 = document.getElementById("buttonA");
    colors1.style.backgroundColor = "#ADFF2F";
    setTimeout(function(){
        colors1.style.backgroundColor="white";
    }, 200);
}function backgroundS() {
    let colors1 = document.getElementById("buttonS");
    colors1.style.backgroundColor = "#ADFF2F";
    setTimeout(function(){
        colors1.style.backgroundColor="white";
    }, 200);
}
function backgroundD() {
    let colors1 = document.getElementById("buttonD");
    colors1.style.backgroundColor = "#ADFF2F";
    setTimeout(function(){
        colors1.style.backgroundColor="white";
    }, 200);
}
function backgroundF() {
    let colors1 = document.getElementById("buttonF");
    colors1.style.backgroundColor = "#ADFF2F";
    setTimeout(function(){
        colors1.style.backgroundColor="white";
    }, 200);
}
function backgroundG() {
    let colors1 = document.getElementById("buttonG");
    colors1.style.backgroundColor = "#ADFF2F";
    setTimeout(function(){
        colors1.style.backgroundColor="white";
    }, 200);
}
function backgroundH() {
    let colors1 = document.getElementById("buttonH");
    colors1.style.backgroundColor = "#ADFF2F";
    setTimeout(function(){
        colors1.style.backgroundColor="white";
    }, 200);
}
function backgroundJ() {
    let colors1 = document.getElementById("buttonJ");
    colors1.style.backgroundColor = "#ADFF2F";
    setTimeout(function(){
        colors1.style.backgroundColor="white";
    }, 200);
}
function backgroundK() {
    let colors1 = document.getElementById("buttonK");
    colors1.style.backgroundColor = "#ADFF2F";
    setTimeout(function(){
        colors1.style.backgroundColor="white";
    }, 200);
}
function backgroundL() {
    let colors1 = document.getElementById("buttonL");
    colors1.style.backgroundColor = "#ADFF2F";
    setTimeout(function(){
        colors1.style.backgroundColor="white";
    }, 200);
}
function backgroundx() {
    let colors1 = document.getElementById("button;");
    colors1.style.backgroundColor = "#ADFF2F";
    setTimeout(function(){
        colors1.style.backgroundColor="white";
    }, 200);
}function backgroundW() {
    let colors1 = document.getElementById("buttonW");
    colors1.style.backgroundColor = "#ADFF2F";
    setTimeout(function(){
        colors1.style.backgroundColor="black";
    }, 200);
}function backgroundE() {
    let colors1 = document.getElementById("buttonE");
    colors1.style.backgroundColor = "#ADFF2F";
    setTimeout(function(){
        colors1.style.backgroundColor="black";
    }, 200);
}function backgroundT() {
    let colors1 = document.getElementById("buttonT");
    colors1.style.backgroundColor = "#ADFF2F";
    setTimeout(function(){
        colors1.style.backgroundColor="black";
    }, 200);
}function backgroundY() {
    let colors1 = document.getElementById("buttonY");
    colors1.style.backgroundColor = "#ADFF2F";
    setTimeout(function(){
        colors1.style.backgroundColor="black";
    }, 200);
}function backgroundU() {
    let colors1 = document.getElementById("buttonU");
    colors1.style.backgroundColor = "#ADFF2F";
    setTimeout(function(){
        colors1.style.backgroundColor="black";
    }, 200);
}function backgroundO() {
    let colors1 = document.getElementById("buttonO");
    colors1.style.backgroundColor = "#ADFF2F";
    setTimeout(function(){
        colors1.style.backgroundColor="black";
    }, 200);
}function backgroundP() {
    let colors1 = document.getElementById("buttonP");
    colors1.style.backgroundColor = "#ADFF2F";
    setTimeout(function(){
        colors1.style.backgroundColor="black";
    }, 200);
}
function backgroundChange(e){
    switch (e.keyCode){
        case 65:
            backgroundA();
            record(65);
            document.getElementById("note").innerText= "C";
            break;
        case 83:
            backgroundS();
            record(83);
            document.getElementById("note").innerText= "D";
            break;
        case 68:
            backgroundD();
            record(68);
            document.getElementById("note").innerText= "E";
            break;
        case 70:
            backgroundF();
            record(70);
            document.getElementById("note").innerText= "F";
            break;
        case  71:
            backgroundG();
            record(71);
            document.getElementById("note").innerText= "G";
            break;
        case  72:
            backgroundH();
            record(72);
            document.getElementById("note").innerText= "A";
            break;
        case 74:
            backgroundJ();
            record(74);
            document.getElementById("note").innerText= "B";
            break;
        case 75:
            backgroundK()
            record(75);
            document.getElementById("note").innerText= "C2";
            break;
        case 76:
            backgroundL();
            record(76);
            document.getElementById("note").innerText= "D2";
            break;
        case  186:
            backgroundx();
            record(186);
            document.getElementById("note").innerText= "E2";
            break;
        case  87:
            backgroundW();
            record(87);
            document.getElementById("note").innerText= "C#";
            break;
        case  69:
            backgroundE();
            record(69);
            document.getElementById("note").innerText= "D#";
            break;
        case  84:
            backgroundT();
            record(84);
            document.getElementById("note").innerText= "F#";
            break;
        case  89:
            backgroundY();
            record(89);
            document.getElementById("note").innerText= "G#";
            break;
        case 85:
            backgroundU();
            record(85);
            document.getElementById("note").innerText= "A#";
            break;
        case 79:
            backgroundO();
            record(79);
            document.getElementById("note").innerText= "C#";
            break;
        case 80:
            backgroundP();
            record(80);
            document.getElementById("note").innerText= "D#";
            break;
    }
}
window.addEventListener("keydown", backgroundChange);