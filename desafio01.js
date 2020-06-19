//DESAFIO

//Cálculo de IMC

// constantes para armazenar 
//o nome, peso, altura
//formula do imc: peso / (altura * altura)

//se o imc for maior ou igual a 30,
// exibir mensagem: Carlos, você está acima do peso.
//se o imc for menor que 29.9,
//exibir: Carlos, você não está acima do peso.

const nome = "Clau"
const peso = 59.9
const altura = 1.77

const imc =  (peso / (altura * altura))
console.log(imc)

if (imc >= 30){
   console.log("Clau, você está acima do peso.")
}

if (imc < 29.9){
    console.log("Clau, você não está acima do peso.")
}

// Outra opção:

const nome2 = 'Carlos'
const peso2 = 110
const altura2 = 1.88

const imc2 = peso / (altura * altura)

let message = ""

if (imc2 >= 30) {
    message = `${nome2} você está acima do peso`
} else {
    message = `${nome2} você não está acima do peso`
}

console.log(message)