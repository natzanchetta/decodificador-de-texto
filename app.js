
escondeTelaResultado()

function criptografar() {
    let textoOriginal = document.querySelector('textarea').value;
    if (textoOriginal === '') {
        mostraTelaInicial();
        escondeTelaResultado();
    } else {
        let textoCriptografado = textoOriginal.replace(/e/g, "enter").replace(/i/g, "imes").replace(/a/g, "ai").replace(/o/g, "ober").replace(/u/g, "ufat");
        console.log(`O texto criptografado é ${textoCriptografado}`);
        exibirTextoNaTela('h3', `${textoCriptografado}`);
        mostraTelaResultado();
        escondeTelaInicial();
    }
}

function descriptografar() {
    let textoCriptografado = document.querySelector('textarea').value;
    if (textoCriptografado === '') {
        mostraTelaInicial();
        escondeTelaResultado();
    } else {
        let textoDescriptografado = textoCriptografado.replace(/enter/g, "e").replace(/imes/g, "i").replace(/ai/g, "a").replace(/ober/g, "o").replace(/ufat/g, "u");
        exibirTextoNaTela('h3', `${textoDescriptografado}`);
        mostraTelaResultado();
        escondeTelaInicial();
    }
}

function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}

// Adicionar evento para processar entradas
const textareaField = document.getElementById('inputText');

// Processar a entrada inicial e futuras entradas
textareaField.addEventListener('input', function() {
  // Remover caracteres especiais, transformar em minúsculas
  const cleanedInput = this.value.replace(/[^a-zA-Z\s]/g, '').toLowerCase();

  // Atualizar o valor do campo com o texto limpo
  this.value = cleanedInput;
});

function escondeTelaResultado() {
    document.getElementById("telaResultado").style.display = "none";
  }

function mostraTelaResultado() {
    document.getElementById("telaResultado").style.display = "block";
}

function escondeTelaInicial() {
    document.getElementById("telaInicial").style.display = "none";
}

function mostraTelaInicial() {
    document.getElementById("telaInicial").style.display = "block";
}

function copiarTexto() {
    // Seleciona o texto da tag <h3>
    let texto = document.getElementById("resultado").innerText;

    // Cria um elemento de input para armazenar temporariamente o texto
    let inputTemporario = document.createElement("input");
    inputTemporario.setAttribute("value", texto);
    document.body.appendChild(inputTemporario);

    // Seleciona e copia o texto do input temporário
    inputTemporario.select();
    document.execCommand("copy");

    // Remove o input temporário
    document.body.removeChild(inputTemporario);
}