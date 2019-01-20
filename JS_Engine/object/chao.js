chao = {
    y: 550,
    x: 0,
    altura: 50,

    atualiza: function(){
        this.x -= velocidade
        if(this.x <= -30){
            this.x += 30
        }
    },

    desenha: function(){
        xao.desenha(this.x, this.y)
        xao.desenha(this.x + xao.largura, this.y)
    }
}