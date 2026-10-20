let nome = "Lucas"

if (nome == "Lucas") {
    exibirSaudacao("Lucas")
} else if (nome == "Gabriel") {
    exibirSaudacao("Gabriel")
} else if (nome == "Thiago") {
    exibirSaudacao("Thiago")
}
// ----------------------------------------------------------------

function exibirSaudacao(nome) {
    console.log("Seja bem-vindo(a), " + nome)
}

function somarDoisNumeros (num1, num2) {
    return num1 + num2
}

// ----------------------------------------------------------------

let peso = 67
let altura = 1.77
let imc = calcularIMC(peso, altura)
let classificacao = classificarIMC(imc)

function calcularIMC(peso, altura) {
    return peso / (altura * altura)
}
function classificarIMC(IMC) {
    if (IMC <= 18.5) {
        return "Magreza"
    } else if (IMC <= 24.9) {
        return "Normal"
    } else if (IMC <= 29.9) {
        return "Sobrepeso"
    } else if (IMC <= 34.9) {
        return "Obesidade grau 1"
    } else if (IMC <= 39.9) {
        return "Obesidade grau 2"
    } else {
        return "Obesidade grau 3"
    }
}
console.log("Seu IMC é " + imc)
console.log("Sua classificação é " + classificacao)