function togglePassword(inputId, checkbox) {
    let senhaInput = document.getElementById(inputId);
    if (senhaInput.type === "password") {
      senhaInput.type = "text";
    } else {
      senhaInput.type = "password";
    }
  }

  $(document).ready(function () {
    // Quando clicar para abrir o modal de login
    $('[data-target="#loginModal"]').click(function () {
      $('#cadastroModal').modal('hide'); // Fecha o modal de cadastro
    });
  
    // Quando clicar para abrir o modal de cadastro
    $('[data-target="#cadastroModal"]').click(function () {
      $('#loginModal').modal('hide'); // Fecha o modal de login
    });
  });
  

  // Consumir back-end

    document.addEventListener("DOMContentLoaded", function () {
      // Cadastro de usuário
      document.querySelector("#cadastroModal form").addEventListener("submit", async function (event) {
        event.preventDefault();
    
        const nome = document.querySelector("#nome").value;
        const sobrenome = document.querySelector("#sobrenome").value;
        const email = document.querySelector("#email").value;
        const senha = document.querySelector("#senha").value;
    
        const response = await fetch("http://localhost:5001/auth/register", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ nome, sobrenome, email, senha }),
        });
    
        const data = await response.json();
        if (response.ok) {
          alert("Cadastro realizado com sucesso!");
          $("#cadastroModal").modal("hide");
        } else {
          alert("Erro: " + data.message);
        }
      });
    
      // Login de usuário
      document.querySelector("#loginModal form").addEventListener("submit", async function (event) {
        event.preventDefault();
    
        const email = document.querySelector("#login-email").value;
        const senha = document.querySelector("#login-senha").value;
    
        const response = await fetch("http://localhost:5001/auth/login", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ email, senha }),
        });
    
        const data = await response.json();
        if (response.ok) {
          localStorage.setItem("token", data.token);
          alert("Login realizado com sucesso!");
          $("#loginModal").modal("hide");
        } else {
          alert("Erro: " + data.message);
        }
      });
     
    }); 