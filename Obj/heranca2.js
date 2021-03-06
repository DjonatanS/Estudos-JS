const avo = {attr1: 'A'}

const pai = {__proto__: avo , attr2: 'b'}

const filho = {__proto__: pai, attr3: 'C'}


console.log(filho.attr1 , filho.attr2)

const carro = {
    velAtual: 0 , 
    velMax: 200,
    acelerarMAIS(delta){
        if(this.velAtual + delta <= this.velMax) {
            this.velAtual += delta
        } else {
            this.velAtual = this.velMax
        }
    },
    status() {
        return `${this.velAtual}km/h de ${this.velMax}km/h`
    }
}


const ferrari = {
    modelo: 'f40',
    velMax: 320
}

const volvo = {
    modelo: 'v40',
    status() {
        return `${this.modelo}: ${super.status()}`
    }
}


Object.setPrototypeOf(ferrari , carro)
Object.setPrototypeOf(volvo, carro)


console.log(ferrari)


volvo.acelerarMAIS(100)

ferrari.acelerarMAIS(160)

console.log(volvo.status())


console.log(ferrari.status())