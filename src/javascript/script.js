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

  fetch('http://localhost:3000/api/mensagem')
    .then(response => response.json())
    .then(data => console.log(data.mensagem))
    .catch(error => console.error('Erro:', error));
