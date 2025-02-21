document.getElementById("cupomBtn").addEventListener("click", function() {
    navigator.clipboard.writeText("PRIMEIRACOMPRA");
    alert("Cupom copiado: PRIMEIRACOMPRA");
});

function abrirModalLogin() {
    document.getElementById("loginModal").style.display = "flex";
}

function abrirModalCadastro() {
    fecharModais();
    document.getElementById("cadastroModal").style.display = "flex";
}

function fecharModais() {
    document.getElementById("loginModal").style.display = "none";
    document.getElementById("cadastroModal").style.display = "none";
}

function toggleMenu() {
    var menu = document.getElementById("menuNav");
    if (menu.style.display === "block") {
        menu.style.display = "none";
    } else {
        menu.style.display = "block";
    }
}

function abrirModalLogin() {
    document.getElementById("loginModal").style.display = "flex";
}

function abrirModalCadastro() {
    fecharModais();
    document.getElementById("cadastroModal").style.display = "flex";
}

function fecharModais() {
    document.getElementById("loginModal").style.display = "none";
    document.getElementById("cadastroModal").style.display = "none";
}
