function alterarMensagem() {

    var elementoDashboard = document.getElementById("dashboard");
    var botao = document.getElementById("btn-rend");

    var conteudoOriginal = elementoDashboard.innerText;
    elementoDashboard.innerText = "Solicitação Enviada, Avalie seu Dashboard no e-mail que enviamos!";
    botao.classList.add("ocultar");}

function enviarSolicitacao() {
    var botao = document.querySelector('.pedir');

    botao.innerHTML = 'Solicitação enviada!';
    
    setTimeout(function() {
        botao.innerHTML = 'Peça aqui seu cartão';
    }, 5000);
}
