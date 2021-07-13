function validarNome() {
    //variaveis
    var nomeV = document.getElementById('nome') //Recebendo dado
    var nome = String(nomeV.value) // adapitando leitura
    qnt = Number(nome.length) // qnt de letras
    var temNumero = temNumber(nome, qnt)
    
    //funções
    function temNumber(nome, qnt) {
        return true
    }
    
    
    //Validações
    if (qnt <= 3) {
        alert('[error] - Nome incompleto')
    }else if (temNumero){
        alert('ok')
    }
    
}

