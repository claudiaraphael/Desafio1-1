//DESAFIO
//Cálculo de aposentadoria
//na condicional é preciso colocar   == , pq = é atribuição.

//condicionais:
    // 1 - tempo de contribuição (tempcont)
        //homem precisa contribuir por 35 ou mais (tempo de contribuição >= 35 )
        //mulher precisa contribuir por 30 ou mais ( '' >= 30 )
    
    // 2 - soma do tempcont + idade
        //homem: soma >= 95
        //mulher: soma >= 85

//atenção: levar em conta que há mulher ou homem no cenário.

//perfis teste 

const nome = "xavier"
const idade = 45
const sexo = "M" 
const tempcont = 32

//const soma
const somaF = tempcont + idade
const somaM = tempcont + idade

//Variaveis que fazem parte das condicionais
    //const sexo = "F" 
    //const sexo = "M"
    //const tempcont
    //const tempcont
    //console.log (somaM)
    //console.log (somaF)

//condições
    //if(tempcont >= 30)
    //if(soma >= 85)

console.log(somaF)
console.log(somaM)

//resolução
   if (sexo == "F") {
        if (tempcont >= 30 && somaF >= 85) {
            console.log(`${nome}, a senhora pode se aposentar`)
          // Condição 1 e 2 passaram
        } else {
          console.log(`${nome}, a senhora ainda não pode se aposentar`)
          // Condição 1 passou, porém condição 2 não passou
        }
      } else {
          if(sexo == "M"){
              if(tempcont >= 35 && idade >= 95){
                  console.log(`${nome} o pode se aposentar`)
              } else{
                  console.log(`${nome} o senhor ainda não pode se aposentar`)
              }
          }
        }
        // Condição 1 não passou
     // }

 