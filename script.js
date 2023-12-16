// Acessar o formulário e guardar os dados dentro de uma variável
const formulario = document.querySelector("form");
const inome = document.querySelector(".nome");
const iemail = document.querySelector(".email");
const isenha = document.querySelector(".senha");
const itelefone = document.querySelector(".telefone");

// Método post
function cadastrar() {
    fetch("http://localhost:8080/usuarios", {
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json"
        },
        method: "POST",
        body: JSON.stringify({
            nome: inome.value,
            email: iemail.value,
            senha: isenha.value,
            telefone: itelefone.value
        })
    })
    .then(function (res) {
        if (!res.ok) {
            throw new Error(`Erro na requisição: ${res.status} - ${res.statusText}`);
        }
        return res.json();
    })
    .then(function (data) {
        console.log("Cadastro realizado com sucesso:", data);
        // Adicione aqui o código para fornecer feedback visual ao usuário (ex: exibir uma mensagem)
        limpar(); // Limpar o formulário após o sucesso
    })
    .catch(function (error) {
        console.error("Erro ao cadastrar:", error);
        // Adicione aqui o código para fornecer feedback visual ao usuário em caso de erro
    });
}

// Função de limpar o formulário
function limpar() {
    inome.value = "";
    iemail.value = "";
    isenha.value = "";
    itelefone.value = "";
}

// Evento do botão cadastrar e transformar os dados em um objeto do tipo JSON
formulario.addEventListener("submit", function(event) {
    event.preventDefault();
    cadastrar();
});
