function main() {
    ALTURA = window.innerHeight
    LARGURA = window.innerWidth

    if(LARGURA >= 500){
        LARGURA = 600
        ALTURA = 600
    }


    canvas = document.createElement("canvas")
    canvas.width = LARGURA
    canvas.height = ALTURA
    canvas.style.border = "1px solid #000"


    ctx = canvas.getContext("2d")
    document.body.appendChild(canvas)
    document.addEventListener("mousedown", clique)
    document.addEventListener("ontouchstart", clique)

    estadoAtual = estados.jogar
    record = localStorage.getItem("record")

    if(record == null){
        record = 0
    }

    

    imgBG = new Image()
    imgBG.src = "imagens/sheet.png"

    imgBola = new Image()
    imgBola.src = "imagens/bola.png"

    imgChao = new Image()
    imgChao.src = "imagens/chao.png"

    imgPlay = new Image()
    imgPlay.src = "imagens/play_game.png"

    imgGOver = new Image()
    imgGOver.src = "imagens/game_over.png"

    

    roda()

}

function clique(evento){
    if(estadoAtual == estados.jogando){
        bloco.pula()
    }else if(estadoAtual == estados.jogar){
        estadoAtual = estados.jogando;
    }else if(estadoAtual == estados.perdeu && bloco.y >= 4 * ALTURA){
        estadoAtual = estados.jogar
        
        obstaculos.limpa()
        bloco.reset();
    
       
        
    }
    
}
    


function roda(){

    atualiza()
    desenha()

    // deixa a função em loop
    window.requestAnimationFrame(roda)

}

function atualiza(){
    bloco.atualiza()
    chao.atualiza()

    if(estadoAtual == estados.jogando){
        obstaculos.atualiza()
        
    }
    

}

function desenha(){

    bg.desenha(0,0)

    

    ctx.fillStyle = "#cd7f32"
    ctx.font = "50px Arial"
    ctx.fillText(bloco.score, 30, 68)

    ctx.fillStyle = "red"
    ctx.fillText(bloco.vidas, 550,68)

    ctx.fillStyle = "rgba(0, 0, 0, " + labelNovaFase.opacidade + " )"
    ctx.fillText(labelNovaFase.texto, canvas.width / 2 - ctx.measureText(labelNovaFase.texto).width / 2 , canvas.height / 3 )

    if(estadoAtual == estados.jogando){
        obstaculos.desenha()
        if(bloco.score <10){
            ctx.fillStyle = "#cd7f32"
            ctx.fillText(bloco.score, 30, 68)
            
        }else if(bloco.score >= 10 && bloco.score < 100){
            ctx.fillStyle = "#c0c0c0"
            ctx.fillText(bloco.score, 30 ,68)
        }else if(bloco.score >=100){
            ctx.fillStyle = "gold"
            ctx.fillText(bloco.score, 30 ,68)
        }
            
        
    }

    chao.desenha()
    bloco.desenha()

    if(estadoAtual == estados.jogar){
       play.desenha(LARGURA /2 - play.largura /2 ,ALTURA / 2 - play.altura / 2)
    }

    if(estadoAtual == estados.perdeu){
        GameOver.desenha(LARGURA /2 - GameOver.largura /2 ,ALTURA / 2 - GameOver.altura / 2)
        
        //maior
        if(bloco.score > record && bloco.score < 10 ){
            ctx.fillStyle = "#cd7f32"
            ctx.fillText(bloco.score, 270 ,420)
            ctx.fillText(bloco.score, 30, 68)
            if(record < 10){
                ctx.fillStyle = "#cd7f32"
                ctx.fillText(record, 290 ,460)
            }else if(record >=10 && record < 100){
                ctx.fillStyle = "#c0c0c0"
                ctx.fillText(record, 290 ,460)
            }else if(record >=100){
                ctx.fillStyle = "gold"
                ctx.fillText(record, 290 ,460)
            }
        }else if(bloco.score > record && bloco.score >= 10 && bloco.score < 100){
            ctx.fillStyle = "#c0c0c0"
            ctx.fillText(bloco.score, 270 ,420)
            ctx.fillText(bloco.score, 30, 68)
            if(record < 10){
                ctx.fillStyle = "#cd7f32"
                ctx.fillText(record, 290 ,460)
            }else if(record >=10 && record < 100){
                ctx.fillStyle = "#c0c0c0"
                ctx.fillText(record, 290 ,460)
            }else if(record >=100){
                ctx.fillStyle = "gold"
                ctx.fillText(record, 290 ,460)
            }
        }else if(bloco.score > record && bloco.score >= 100){
            ctx.fillStyle = "gold"
            ctx.fillText(bloco.score, 270 ,420)
            ctx.fillText(bloco.score, 30, 68)
            if(record < 10){
                ctx.fillStyle = "#cd7f32"
                ctx.fillText(record, 290 ,460)
            }else if(record >=10 && record < 100){
                ctx.fillStyle = "#c0c0c0"
                ctx.fillText(record, 290 ,460)
            }else if(record >=100){
                ctx.fillStyle = "gold"
                ctx.fillText(record, 290 ,460)
            }
        }
        
        //menor
        else if(bloco.score < record && bloco.score < 10 ){
            ctx.fillStyle = "#cd7f32"
            ctx.fillText(bloco.score, 270 ,420)
            ctx.fillText(bloco.score, 30, 68)
            if(record < 10){
                ctx.fillStyle = "#cd7f32"
                ctx.fillText(record, 290 ,460)
            }else if(record >=10 && record < 100){
                ctx.fillStyle = "#c0c0c0"
                ctx.fillText(record, 290 ,460)
            }else if(record >=100){
                ctx.fillStyle = "gold"
                ctx.fillText(record, 290 ,460)
            }


        }else if(bloco.score < record && bloco.score >= 10 && bloco.score < 100){
            ctx.fillStyle = "#c0c0c0"
            ctx.fillText(bloco.score, 270 ,420)
            ctx.fillText(bloco.score, 30, 68)
            if(record < 10){
                ctx.fillStyle = "#cd7f32"
                ctx.fillText(record, 290 ,460)
            }else if(record >=10 && record < 100){
                ctx.fillStyle = "#c0c0c0"
                ctx.fillText(record, 290 ,460)
            }else if(record >=100){
                ctx.fillStyle = "gold"
                ctx.fillText(record, 290 ,460)
            }
        }else if(bloco.score < record && bloco.score >= 100){
            ctx.fillStyle = "gold"
            ctx.fillText(bloco.score, 270 ,420)
            ctx.fillText(bloco.score, 30, 68)
            if(record < 10){
                ctx.fillStyle = "#cd7f32"
                ctx.fillText(record, 290 ,460)
            }else if(record >=10 && record < 100){
                ctx.fillStyle = "#c0c0c0"
                ctx.fillText(record, 290 ,460)
            }else if(record >=100){
                ctx.fillStyle = "gold"
                ctx.fillText(record, 290 ,460)
            }
        }
    }

    
}



