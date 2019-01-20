function SpriteBG(x, y, largura, altura){
    this.x = x
    this.y = y
    this.largura = largura
    this.altura = altura


    this.desenha = function(xCanvas, yCanvas){
        ctx.drawImage(imgBG, this.x, this.y, this.largura, this.altura, xCanvas, yCanvas, this.largura, this.altura)
        
    }

    

}

var bg = new SpriteBG(0, 0, 600, 600)

function SpriteBola(x, y, largura, altura){
    this.x = x
    this.y = y
    this.largura = largura
    this.altura = altura


    this.desenha = function(xCanvas, yCanvas){
        ctx.drawImage(imgBola, this.x, this.y, this.largura, this.altura, xCanvas, yCanvas, this.largura, this.altura)
        
    }

    

}


var bola = new SpriteBola(0, 0, 50, 50)

function SpriteChao(x, y, largura, altura){
    this.x = x
    this.y = y
    this.largura = largura
    this.altura = altura


    this.desenha = function(xCanvas, yCanvas){
        ctx.drawImage(imgChao, this.x, this.y, this.largura, this.altura, xCanvas, yCanvas, this.largura, this.altura)
        
    }

    

}


var xao = new SpriteChao(0, 0, 550, 50)

function SpritePlay(x, y, largura, altura){
    this.x = x
    this.y = y
    this.largura = largura
    this.altura = altura


    this.desenha = function(xCanvas, yCanvas){
        ctx.drawImage(imgPlay, this.x, this.y, this.largura, this.altura, xCanvas, yCanvas, this.largura, this.altura)
        
    }

    

}


var play = new SpritePlay(0, 0, 397, 347)

function SpriteGOver(x, y, largura, altura){
    this.x = x
    this.y = y
    this.largura = largura
    this.altura = altura


    this.desenha = function(xCanvas, yCanvas){
        ctx.drawImage(imgGOver, this.x, this.y, this.largura, this.altura, xCanvas, yCanvas, this.largura, this.altura)
        
    }

    

}


var GameOver = new SpriteGOver(0, 0, 397, 358)


