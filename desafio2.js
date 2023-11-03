i = 0
function saldoVitorias(vitoria,derrota){
    let saldo_vitorias = vitoria - derrota
    return saldo_vitorias
}
let saldo = saldoVitorias(20,10)
while(i<12){

    
    function mensagem(posicion){
    
    let rank = ["Ferro","Bronze","Prata","Ouro","Diamante","Lendário","Imortal"]
    console.log(`O Herói tem de saldo ${saldo} e está no nível ${rank[posicion]}`)
}
    if(saldo<=10){
        let posicion = 0
        mensagem(posicion)
        saldo += saldoVitorias(20,10)
    }else if(saldo >= 11 && saldo <= 20){
        posicion = 1
        mensagem(posicion)
        saldo += saldoVitorias(20,10)
    }else if(saldo >= 21 && saldo <= 50){
        posicion = 2
        mensagem(posicion)
        saldo += saldoVitorias(20,10)
    }else if(saldo >= 51 && saldo <= 80){
        posicion = 3
        mensagem(posicion)
        saldo += saldoVitorias(20,10)
    }else if(saldo >= 81 && saldo <= 90){
        posicion = 4
        mensagem(posicion)
        saldo += saldoVitorias(20,10)
    }else if(saldo >= 91 && saldo <= 100){
        posicion = 5
        mensagem(posicion)
        saldo += saldoVitorias(20,10)
    }else{
        posicion = 6
        mensagem(posicion)
        saldo += saldoVitorias(20,10)
    }
    i += 1
}   


    