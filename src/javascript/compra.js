// Redireciona para a página de compra com os detalhes do produto
function comprarProduto(nome, preco, img) {
    localStorage.setItem("produtoNome", nome);
    localStorage.setItem("produtoPreco", preco);
    localStorage.setItem("produtoImg", img);
    window.location.href = "../src/html/compra.html";
}

// Exibe os detalhes do produto na página de compra
document.addEventListener("DOMContentLoaded", function () {
    if (document.getElementById("produto-nome")) {
        document.getElementById("produto-nome").innerText = localStorage.getItem("produtoNome");
        document.getElementById("produto-preco").innerText = localStorage.getItem("produtoPreco");
        document.getElementById("produto-img").src = localStorage.getItem("produtoImg");
    }
});
