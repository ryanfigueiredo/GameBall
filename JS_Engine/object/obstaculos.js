obstaculos = {
    _obs: [],
    _score: false,
    cores: ["#ffbc1c", "#ff1c1c", "#ff85e1", "#52a7ff", "#78ff5d"],
    tempoInsere: 0,

    insere: function(){
        this._obs.push({
            x: LARGURA,
            largura: 50,
            altura: 30 + Math.floor(120 * Math.random()),
            cor: this.cores[Math.floor(5 * Math.random())]


        })

        this.tempoInsere = 30 + Math.floor(25 * Math.random());
    },

    atualiza: function(){
        if(this.tempoInsere == 0){
            this.insere()
        }else{
            this.tempoInsere--
        }

        for(var i = 0, tam = this._obs.length; i< tam; i++){
            var obs = this._obs[i]

            obs.x -= velocidade

            if(!bloco.colidindo && bloco.x < obs.x + obs.largura && bloco.x + bloco.largura >= obs.x 
            && bloco.y + bloco.altura >= chao.y - obs.altura){
                bloco.colidindo = true;


                setTimeout(function() {
                    bloco.colidindo = false
                }, 500)

                if(bloco.vidas >= 1){
                    bloco.vidas--
                }else {
                    estadoAtual = estados.perdeu
                }

            }else if(obs.x <= 0 && !obs._score){
                bloco.score++
                obs._score = true;

                if(faseAtual < pontosParaNovaFase.length && bloco.score == pontosParaNovaFase[faseAtual]){
                    passarDeFase()
                }


            }else if(obs.x <= -obs.largura){
                this._obs.splice(i, 1)
                tam--
                i--
            }
        
        }
    },

    limpa: function(){
        this._obs = []
    },

    desenha: function(){
        for( var i = 0, tam = this._obs.length; i < tam; i++){
            var obs = this._obs[i]
            ctx.fillStyle = obs.cor
            ctx.fillRect(obs.x, chao.y - obs.altura, obs.largura, obs.altura)
        }
    }

}

