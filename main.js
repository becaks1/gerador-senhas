const numeroSenha = document.querySelector(".parametro-senha_texto");
const botaoSenha = document.querySelector("parametros-senha_botao");

let tamanhoSenha = 8;
numeroSenha.textContent = tamanhoSenha;

console.log(botaoSenha);

botaoSenha[0].onclick = diminuiTamanhoSenha = () => {
    numeroSenha.textContent = tamanhoSenha;
}
botaoSenha[1].onclick = aumentaTamanhoSenha = () => {
    numeroSenha.textContent = tamanhoSenha;
}
