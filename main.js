const numeroSenha = document.querySelector(".parametro-senha_texto");
const botaoSenha = document.querySelector("parametros-senha_botao");

let tamanhoSenha = 6;
numeroSenha.textContent = tamanhoSenha;

console.log(botaoSenha);

botaoSenha[0].onclick = diminuiTamanhoSenha = () => {
    if (tamanhoSenha > 1) {

        tamanhoSenha--;
    }
};
numeroSenha.textContent = tamanhoSenha;

botaoSenha[1].onclick = aumentaTamanhoSenha = () => {
    if (tamanhoSenha < 20) {

        tamanhoSenha++;

        numeroSenha.textContent = tamanhoSenha;
    }
};
