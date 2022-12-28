function calculateSalary(salario, vendas){

    if(vendas >= 1200){
        
        let tresP = 3 * vendas
        return tresP / 100 + salario
        

    }else{

        let cincoP = 5 * vendas
        return cincoP / 100 + salario

    }

}

console.log(calculateSalary(1534, 324))

//============================================================================================================

function cashMachine(valorSaque, salarioFixo, Valorvendas){

    let salarioTotal = calculateSalary(salarioFixo, Valorvendas)
    let nota200 = 0
    let nota100 = 0
    let nota50 = 0
    let nota20 = 0
    let nota10 = 0
    let nota5 = 0
    let nota2 = 0
    let restoSalario = salarioTotal - valorSaque
    let saque = valorSaque

    if(valorSaque == 0){

        return "Digite um valor acima de 0!"

    }else if(valorSaque > salarioTotal){

        return `Saldo insuficiente! Seu saldo atual é de: R$ ${salarioTotal} !`

    }else if(valorSaque !== 0){

        while(valorSaque >= 200){
        
            valorSaque -= 200
            nota200++

        }while(valorSaque >= 100){

            valorSaque -= 100
            nota100++

        }while(valorSaque >= 50){

            valorSaque -= 50
            nota50++

        }while(valorSaque >= 20){

            valorSaque -= 20
            nota20++

        }while(valorSaque >= 10){

            valorSaque -= 10
            nota10++

        }while(valorSaque >= 5){

            valorSaque -= 5
            nota5++

        }while(valorSaque >= 2){

            valorSaque -= 2
            nota2++

        }

    }  

    return `Seu salário era de: R$ ${salarioTotal}. Você acabou de sacar R$ ${saque}. Você recebe: ${nota200} nota(s) de 200; ${nota100} nota(s) de 100 e ${nota50} nota(s) de 50; ${nota20} nota(s) de 20; ${nota10} nota(s) de 10 ${nota5} nota(s) de 5; ${nota2} nota(s) de 2. Seu saldo agora é de ${restoSalario}`

}


console.log(cashMachine(387, 4400, 80))

//============================================================================================================

function calculateStock(estoqueAtual, estoqueMax, estoqueMin){

    let media = (estoqueMax + estoqueMin) / 2

    if(estoqueAtual >= media){

        return 'Não efetuar compra'

    }else{

        return 'Efetuar Compra'

    }

}

console.log(calculateStock(50,100,60))

//============================================================================================================

function calculateAge(anoNascimento, anoAtual){

    let idade = anoAtual - anoNascimento
    let idadeMeses = idade * 12
    let idadeDias = idade * 365
    let idadeSemanas = idadeDias / 7 
    
    return `Idade em anos: ${idade}. Idade em meses: ${idadeMeses}. Idade em dias: ${idadeDias}. Idade em semanas: ${idadeSemanas}.`
}

console.log(calculateAge(1997, 2022))

//============================================================================================================

const matrizQuadrada3x3 = [ [1, 2, 3] , 
                            [4, 5, 6] , 
                            [7, 8, 9] 
                        ]

function getDiagonal(matrizQuadrada3x3){

    let resultado = []

    for(let i = 0; i < matrizQuadrada3x3.length; i++){

        resultado.push(matrizQuadrada3x3[i][i])

    }    

    return resultado

}

console.log(getDiagonal(matrizQuadrada3x3))

//============================================================================================================
