// script.js

document.addEventListener("DOMContentLoaded", function () {
    const cadastroLink = document.querySelector("a[href='#cadastro']");
    const modal = document.createElement("div");
    modal.id = "cadastroModal";
    modal.style.display = "none";
    modal.style.position = "fixed";
    modal.style.top = "0";
    modal.style.left = "0";
    modal.style.width = "100%";
    modal.style.height = "100%";
    modal.style.backgroundColor = "rgba(0,0,0,0.5)";
    modal.style.justifyContent = "center";
    modal.style.alignItems = "center";
    modal.innerHTML = `
        <div class="cadastro-container">
            <h2>Cadastro</h2>
            <form>
                <label for="nome">Nome:</label>
                <input type="text" id="nome" name="nome" required>
                
                <label for="email">E-mail:</label>
                <input type="email" id="email" name="email" required>
                
                <label for="senha">Senha:</label>
                <input type="password" id="senha" name="senha" required>
                
                <button type="submit">Cadastrar</button>
            </form>
            <button id="fecharModal">Fechar</button>
        </div>
    `;
    
    document.body.appendChild(modal);
    
    cadastroLink.addEventListener("click", function (event) {
        event.preventDefault();
        modal.style.display = "flex";
    });
    
    document.getElementById("fecharModal").addEventListener("click", function () {
        modal.style.display = "none";
    });
    
    window.addEventListener("click", function (event) {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    });
});
