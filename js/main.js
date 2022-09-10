//window.onload(alert("Você caiu no conto da amoeba"))

const btm = document.getElementById("sandwich");
const config = document.getElementById("config-but");

function actionBut() {
    window.location.replace("config.html");
}

function toggleMenu() {
    const nav = document.getElementById("nav");
    nav.classList.toggle('active');
}

config.addEventListener("click", actionBut);
btm.addEventListener("click", toggleMenu);