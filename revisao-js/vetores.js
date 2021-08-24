let frutas = ['laranja', 'maçã', 'banana', 'melancia']

//push(): inserção no final do vetor
frutas.push ('morango')
console.log(frutas)

// unshift(): inserção no inicio do vetor
frutas.unshift('maracujá')
console.log(frutas)

// splice(): inserção em posição intermediária
frutas.splice(3, 0, 'mamão')
console.log(frutas)

// pop(): retira ultimo elemento do vetor
let ultimo = frutas.pop()
console.log(ultimo, frutas)

// shift(): retira o primeiro elemento do vetor
let primeiro = frutas.shift()
console.log(primeiro, frutas)

//splice(): retira um elemento de qualquer posição
let intermed = frutas.splice(3, 1)
console.log(intermed, frutas)

frutas.push('jabuticaba', 'abacaxi', 'amora', 'abacate')
console.log(frutas)

console.log('---------------------------------------------')

for(let i = 0; i < frutas.length; i++){
    console.log(frutas[i])
}

console.log('---------------------------------------------')

for(let i = frutas.length - 1; i >= 0; i--){
    console.log(frutas[i])
}

console.log('---------------------------------------------')

for(let f of frutas){
    console.log(f)
}
