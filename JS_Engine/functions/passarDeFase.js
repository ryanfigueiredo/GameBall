function passarDeFase(){
    velocidade++
    faseAtual++
    bloco.vidas++
    

    if(faseAtual == 4){
        bloco.gravidade *= 0.6
    }

    if(faseAtual == 5){
        bloco.gravidade = 1.2
        velocidade = 18
    }

    if(faseAtual == 6){
        bloco.gravidade = 0.9
        velocidade = 22
    }

    if(faseAtual == 7){
        bloco.gravidade = 1.3
        velocidade = 25
        maxPulos = 1
    }

    if(faseAtual == 8){
        bloco.vidas + 5
        bloco.gravidade = 0.8
        velocidade = 10
        maxPulos = 2
    }

    labelNovaFase.texto = "Level" + faseAtual
    labelNovaFase.fadeIn(0.4)

    setTimeout(function () {
        labelNovaFase.fadeOut(0.4)
    }, 800)
    
}