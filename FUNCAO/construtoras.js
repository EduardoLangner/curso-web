function Carro(velocidadeMaxima = 200, delta = 5) {

    //Atributo privado
        let velocidadeAtual = 0

    // Atributo público (por causa do this)
    this.acelerar = function () {
        if (velocidadeAtual + delta <= velocidadeMaxima) {
            velocidadeAtual += delta
        } else {
            velocidadeAtual = velocidadeMaxima
        }
    }

    // Atributo público
    this.getVelocidadeAtual = function () {
        return velocidadeAtual
    }
}

const uno = new Carro //instanciação sem ()
uno.acelerar() // Aumenta a velocidade em 5 (cada vez que eu chamar  função acelerar ele vai aumentar em 5)
console.log(uno.getVelocidadeAtual()) 

const ferrarri = new Carro(350, 20) //passei novos parametros para o construtor
ferrarri.acelerar()
ferrarri.acelerar()
ferrarri.acelerar()
console.log(ferrarri.getVelocidadeAtual())  