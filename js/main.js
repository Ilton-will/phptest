//window.onload(alert("Você caiu no conto da amoeba"))

const btm = document.getElementById("sandwich");

function toggleMenu() {
    const nav = document.getElementById("nav");
    nav.classList.toggle('active');
}

btm.addEventListener("click", toggleMenu);