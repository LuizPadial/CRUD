//acessar o formulario e guardar os dados dentro de uma variavel
const formulario = document.querySelector("form");
const Inome = document.querySelector(".nome");
const Iemail = document.querySelector(".email");
const Isenha = document.querySelector(".senha");
const Itel = document.querySelector(".tel");

//método post
function cadastrar (){
    fetch("http://localhost:8080/cadastrar",
    {
        headers: {
            'Accept':'application/json',
            'Content-Type': 'application/json'
        },
        method:"POST",
        body: JSON.stringify({       
            nome: Inome.value,
            email: Iemail.value,
            senha: Isenha.value,
            telefone: Itel.value
        })
    })
    .then(function (res) {console.log(res) })
    .catch(function (res) {console.log(res) })  
}

//função de limpar o formulário
function limpar () {
    Inome.value = ""
    Iemail.value =""
    Isenha.value = ""
    Itel.value = ""
}

//evento do botão cadastrar e transformar os dados em um objeto do tipo JSON
formulario.addEventListener('submit', function(event){
    event.preventDefault();
    limpar();
    cadastrar();
});