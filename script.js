let lis = []
let num = document.getElementById('num')
let lista = document.getElementById('lista')
let res = document.querySelector('div#res')

function isNumber(n) {
    if(Number(n) >= 1 && Number(n) <= 100) {
        return true
    } else {
        return false
    }
}

function inLista(n, l) {
    if(lis.indexOf(Number(n)) != -1){
        return true
    } else {
        return false
    }
}

function adicionar() {
    if(isNumber(num.value) && !inLista(num.value, lista)) {
        lis.push(Number(num.value))
        let item = document.createElement('option')
        item.text = `O Valor ${num.value} foi adicionado ${lis.length}`
        lista.appendChild(item)
    } else {
        window.alert('Valor invalido ou ja encontrado na lista.')
    }
    /*if (num.value.length == 0) {
        window.alert('[ERRO]')
    } else {
        
        for( let i in lis.length) {
            
            
            let item = document.createElement('option') 
            item.text = `O Valor ${i} foi adicionado ${lis.length}`
            lista.appendChild(item)
        }

    }*/
    
}

function finalizar() {

}