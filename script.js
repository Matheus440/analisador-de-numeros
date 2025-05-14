let btnAdd = document.querySelector("#butao-add")
let btnVeri = document.querySelector("#butao-verificar")
btnAdd.addEventListener("click", adicionar)
btnVeri.addEventListener("click", verificar)

let nume = document.querySelector("#dignum")
let list = document.querySelector("#cxnum")
let res = document.querySelector("#res")
let valores = []

//Verifica se a minha variavel (nume) é um número e se está entre 1 e 100
function isNumero(n) {
    if (Number(n) >= 1 && Number(n) <= 100) {
        return true
    } else {
        return false
    }
}

//Verifica se o número ja está em lista
function inLista(n, l) {
    if (l.indexOf(Number(n)) != -1) {
        return true
    } else {
        return false
    }
}

//função para add em lista 
function adicionar() {
    if (isNumero(nume.value) && !inLista(nume.value, valores)) {
        valores.push(Number(nume.value))
        let item = document.createElement("option")
        item.text = `Valor ${nume.value} adicionado.`
        list.appendChild(item)
        res.innerHTML = ""
    } else {
        alert("Valor inválido ou já encontrado na lista.")
    }

    nume.value = "" //limpa o meu input toda vez q um número é add a lista
    nume.focus()    //o cursor volta automaticamente para o meu input
}

//função para fazer as verificações dos números add em lista
function verificar() {
    if (valores.length == 0) {
        alert("Preencha os campos à baixo com os valores desejados!")
    } else {
        let total = valores.length
        let maior = valores[0]
        let menor = valores[0]
        let soma = 0
        let media = 0

        for(let pos in valores) {
            soma += valores[pos]
            if (valores[pos] > maior)
                maior = valores[pos]
            if (valores[pos] < menor)
                menor = valores[pos]
        }

        media = soma / total
        res.innerHTML = ""
        res.innerHTML += `<p>Ao todo, temos ${total} números cadastrados.</p> `
        res.innerHTML += `<p>O maior valor informado foi ${maior}.</p>`
        res.innerHTML += `<p>O menor valor informado foi ${menor}.</p>`
        res.innerHTML += `<p>Somando todos os valores temos ${soma}.</p>`
        res.innerHTML += `<p>A média dos valores digitados é ${media}</p>`
        
    }
}