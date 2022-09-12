//window.onload(alert("Você caiu no conto da amoeba"))

const btm = document.getElementById("sandwich");
const config = document.getElementById("config-but");
const act = "active";

function actionBut() {
    window.location.replace("config.html");
    toggleMenu();
}

function toggleMenu() {
    const listas = document.getElementById("list");
    listas.classList.toggle(act);

}

function altersandwich(){
    const san = document.getElementById("labsand");
    san.classList.toggle(act);
}


function animatelinks() {

    const links = document.querySelectorAll("li");
    links.forEach((link, index) => {
        link.style.animation 
        ? (link.style.animation = "")
        : (link.style.animation = `navLinkFade 0.3s ease forwards ${index / 7 + 0.2}s`);
    });
}

function clickfunc(){
    toggleMenu();
    altersandwich();
    animatelinks();
}


config.addEventListener("click", actionBut);
btm.addEventListener("click", clickfunc);