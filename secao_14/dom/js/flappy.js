/*Funcao para criar elementos*/
function NovoElemento(tagName, className){
    const elem = document.createElement(tagName);
    elem.className = className;
    return elem;
}

/*Funcao para criar as barreiras*/
function Barreira(reversa = false){
    /*Cria a barreira */
    this.elemento = NovoElemento('div', 'barreira');
    /*Cria os elementos borda e corpo da barreira */
    const borda = NovoElemento('div', 'borda');
    const corpo = NovoElemento('div', 'corpo');
    /*Dependendo do parametro da funcao a barreira pode ser inversa ou nao*/
    this.elemento.appendChild(reversa ? corpo : borda);
    this.elemento.appendChild(reversa ? borda : corpo);
    /*Criando uma funcao que vai definir a altura da barreira*/
    this.setAltura = altura => corpo.style.height = `${altura}px`;
}

/* const b = new barreira(true);
b.setAltura(100);
document.querySelector('[wm-flappy]').appendChild(b.elemento); */

function ParDeBarreira(altura, abertura, x){
    this.elemento = NovoElemento('div', 'par-de-barreiras');

    this.superior = new Barreira(true);
    this.inferior = new Barreira(false);

    this.elemento.appendChild(this.superior.elemento);
    this.elemento.appendChild(this.inferior.elemento);

    /*Definir a altura das barreiras*/
    this.sortearAbertura = () => {
        const alturaSuperior = Math.random() * (altura - abertura);
        const alturaInferior = altura - abertura - alturaSuperior;
        /*Setando as alturas */
        this.superior.setAltura(alturaSuperior);
        this.inferior.setAltura(alturaInferior);
    }

    /*Pegando o valor do par de barreiras ultilizando a distancia e fazendo um split para pegar o valor numerico */
    this.getX = () => parseInt(this.elemento.style.left.split('px')[0]);
    /*Setando um valor para a distancia horizontal */
    this.setX = x => this.elemento.style.left = `${x}px`;
    /*Pegando a largura */
    this.getLargura = () => this.elemento.clientWidth
    /* */
    this.sortearAbertura()
    this.setX(x)
}

/* const b = new parDeBarreira(700, 200, 400);
document.querySelector('[wm-flappy]').appendChild(b.elemento); */

function Barreiras(altura, largura, abertura, espaco, notificarPonto){
    this.pares = [
        new ParDeBarreira(altura, abertura, largura),
        new ParDeBarreira(altura, abertura, largura + espaco),
        new ParDeBarreira(altura, abertura, largura + espaco * 2),
        new ParDeBarreira(altura, abertura, largura + espaco * 3)
    ]

    const deslocamento = 3;
    /*Funcao para animar as barreiras */
    this.animar = () => {
        this.pares.forEach(par => {
            par.setX(par.getX() - deslocamento);

            /*Quando elemento sair da tela */

            if(par.getX() < -par.getLargura()){
                par.setX(par.getX() + espaco * this.pares.length);
                par.sortearAbertura();
            }

            const meio = largura / 2;
            const cruzouMeio = par.getX() + deslocamento >= meio && par.getX() < meio;
            if(cruzouMeio){
                notificarPonto();
            }
        })
    }
}

function Passaro(alturaJogo) {
    let voando = false;
    /*Colocando passaro */
    this.elemento = NovoElemento('img', 'passaro');
    this.elemento.src = 'imgs/passaro.png';
    /*Pegando posicao do passaro e setando ela */
    this.getY = () => parseInt(this.elemento.style.bottom.split('px')[0]);
    this.setY = y => this.elemento.style.bottom = `${y}px`;
    /*Colocando para quando o usuario segurar uma tecla mudar o voando e para quando ele soltar a tecla mudar de novo */
    window.onkeydown = e => voando = true;
    window.onkeyup = e => voando = false;
    /*Funcao para animar o passaro */
    this.animar = () => {
        /*Velocidade de quando o passaro sobe ou desce baseado em 'voando' */
        const novoY = this.getY() + (voando ? 8 : -5);
        const alturaMaxima = alturaJogo - this.elemento.clientHeight;
        /*Impedir do passaro sair da tela de jogo */
        if (novoY <= 0) {
            this.setY(0);
        } else if (novoY >= alturaMaxima) {
            this.setY(alturaMaxima);
        } else {
            this.setY(novoY);
        }
    }

    this.setY(alturaJogo / 2);
}


function Progresso(){
    this.elemento = NovoElemento('span', 'progresso');
    this.atualizarPontos = pontos => {
        this.elemento.innerHTML = pontos;
    }
    this.atualizarPontos(0);
}

/* const barreiras = new Barreiras(700, 1200, 200, 400);
const passaro = new Passaro(700);
const areaDoJogo = document.querySelector('[wm-flappy]');

areaDoJogo.appendChild(passaro.elemento);
areaDoJogo.appendChild(new Progresso().elemento)
barreiras.pares.forEach(par => areaDoJogo.appendChild(par.elemento))
setInterval(() => {
    barreiras.animar()
    passaro.animar()
}, 20) */

function EstaoSobrepostos(elementoA, elementoB) {
    const a = elementoA.getBoundingClientRect();
    const b = elementoB.getBoundingClientRect();

    const horizontal = a.left + a.width >= b.left && b.left + b.width >= a.left;
    const vertical = a.top + a.height >= b.top && b.top + b.height >= a.top;

    return horizontal && vertical;
}

function Colidiu(passaro, barreiras) {
    let colidiu = false;

    barreiras.pares.forEach(parDeBarreiras => {
        if (!colidiu) {
            const superior = parDeBarreiras.superior.elemento;
            const inferior = parDeBarreiras.inferior.elemento;

            colidiu = EstaoSobrepostos(passaro.elemento, superior) || EstaoSobrepostos(passaro.elemento, inferior);
        }
    })
    return colidiu;
}

function FlappyBird() {
    let pontos = 0;

    const areaDoJogo = document.querySelector('[wm-flappy]');
    const altura = areaDoJogo.clientHeight;
    const largura = areaDoJogo.clientWidth;

    const progresso = new Progresso();
    const barreiras = new Barreiras(altura, largura, 200, 400,
        () => progresso.atualizarPontos(++pontos));

    const passaro = new Passaro(altura);

    areaDoJogo.appendChild(progresso.elemento);
    areaDoJogo.appendChild(passaro.elemento);
    barreiras.pares.forEach(par => areaDoJogo.appendChild(par.elemento));

    this.start = () => {
        /* loop do jogo */
        const temporizador = setInterval(() => {
            barreiras.animar();
            passaro.animar();

            if (Colidiu(passaro, barreiras)) {
                clearInterval(temporizador);
            }
        }, 20);
    }
}

new FlappyBird().start()