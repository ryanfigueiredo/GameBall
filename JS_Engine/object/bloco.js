


bloco = {
    x: 50,
    y: 0,
    altura: bola.altura,
    largura: bola.largura,
    gravidade: 1.5,
    velocidade: 0,
    forcaDoPulo: 25,
    qntPulos: 0,
    score: 0,
    rotacao: 0,
    vidas: 3,
    colidindo: false,

    atualiza: function(){
        this.velocidade += this.gravidade
        this.y += this.velocidade
        this.rotacao += Math.PI / 180 * velocidade

        
        if(this.y > chao.y - this.altura && estadoAtual != estados.perdeu){
            this.y = chao.y - this.altura
            this.qntPulos = 0
            this.velocidade = 0
        }
    },

    desenha: function(){       
       ctx.save()
       ctx.translate(this.x + this.largura /2, this.y + this.altura /2)
       ctx.rotate(this.rotacao)
       bola.desenha(-this.largura / 2, -this.altura /2)
       ctx.restore()
    },

    reset: function(){
        this.velocidade = 0
        this.y = 0

        if(this.score > record){
            localStorage.setItem("record", this.score)
            record = this.score
        }

        this.score = 0
        this.vidas = 3

        velocidade = 6
        faseAtual = 0
        this.gravidade = 1.5
        maxPulos =3;
    },



    pula: function(){
        if(this.qntPulos < maxPulos){
           this.velocidade = -this.forcaDoPulo
           this.qntPulos++


        }
        
    }



}



