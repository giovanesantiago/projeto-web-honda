//validações
function validarNome() { //Validar Nome Commpleto
    //variaveis
    var nomeV = document.getElementById('nome') //Recebendo dado
    var nome = String(nomeV.value) // adapitando leitura
    qnt = Number(nome.length) // qnt de letras
    var temNumero = temNumber(nome, qnt)
    var doisnome = doisnome(nome)
    
    //funções
    function temNumber(nome, qnt) { //Se tem numero
        const letras = nome.split('')
        for(c = 0; c < qnt; c++) {
            if ((parseInt(letras[c]) >= 0) || (parseInt(letras[c]) <= 0)){
                return true
                break
            }
        }
    }
    function doisnome(nome){ // se tem mais de um nome
        const espaçoX = nome.replace(' ', 'x')
        const lastname = espaçoX.split('x')
        if (lastname.length >= 2) {
            return true
        }else {
            return false
        }
    } 
    
    
    //Validações
    if (qnt <= 3) { // qnt de caracteres maior que 3
        alert('[error] - Nome incompleto.')
        nomeV.value = ' '
    }else if (temNumero){ // nao pode ter numero
        alert('[error] - Nao pode haver numeros.')
        nomeV.value = ' '
    }else if (!doisnome){ //nao pode ter menos de 2 nomes
        alert('[error] - Nome e sobrenome')
        nomeV.value = ' '
    }else { // validado
        return true
    }
    
}
function validarMae() { //Validar Nome Mae
    //variaveis
    var nomeV = document.getElementById('mae') //Recebendo dado
    var nome = String(nomeV.value) // adapitando leitura
    qnt = Number(nome.length) // qnt de letras
    var temNumero = temNumber(nome, qnt)
    var doisnome = doisnome(nome)
    
    //funções
    function temNumber(nome, qnt) {
        const letras = nome.split('')
        for(c = 0; c < qnt; c++) {
            if ((parseInt(letras[c]) >= 0) || (parseInt(letras[c]) <= 0)){
                return true
                break
            }
        }
    }
    function doisnome(nome){
        const espaçoX = nome.replace(' ', 'x')
        const lastname = espaçoX.split('x')
        if (lastname.length >= 2) {
            return true
        }else {
            return false
        }
    } 
    
    
    //Validações
    if (qnt <= 3) {
        alert('[error] - Nome incompleto.')
        nomeV.value = ' '
    }else if (temNumero){
        alert('[error] - Nao pode haver numeros.')
        nomeV.value = ' '
    }else if (!doisnome){
        alert('[error] - Nome e sobrenome')
        nomeV.value = ' '
    }else {
        return true
    }
    
}
function validarPai() { //Validar Nome pai
    //variaveis
    var nomeV = document.getElementById('pai') //Recebendo dado
    var nome = String(nomeV.value) // adapitando leitura
    qnt = Number(nome.length) // qnt de letras
    var temNumero = temNumber(nome, qnt)
    var doisnome = doisnome(nome)
    
    //funções
    function temNumber(nome, qnt) {
        const letras = nome.split('')
        for(c = 0; c < qnt; c++) {
            if ((parseInt(letras[c]) >= 0) || (parseInt(letras[c]) <= 0)){
                return true
                break
            }
        }
    }
    function doisnome(nome){
        const espaçoX = nome.replace(' ', 'x')
        const lastname = espaçoX.split('x')
        if (lastname.length >= 2) {
            return true
        }else {
            return false
        }
    } 
    
    
    //Validações
    if (qnt <= 3) {
        alert('[error] - Nome incompleto.')
        nomeV.value = ' '
    }else if (temNumero){
        alert('[error] - Nao pode haver numeros.')
        nomeV.value = ' '
    }else if (!doisnome){
        alert('[error] - Nome e sobrenome')
        nomeV.value = ' '
    }else {
        return true
    }
    
}
function validarCPF() { //vALIDAR CPF
    //variaveis
    const cpfhtml = document.getElementById('cpf')
    const cpf = String(cpfhtml.value)
    const cpfvalidoreceita = TestaCPF(cpf)  
    

    //funçoes
    const cpfescrita = (cpf) => { //add simbolos
        const cpfsimbolos = cpf.slice(0, 3) + '.' + cpf.slice(3, 6) + '.' + cpf.slice(6, 9) + '-' + cpf.slice(9, 11)
        return cpfsimbolos
    }
   function TestaCPF(strCPF) { //teste de validação da receita
        var Soma;
        var Resto;
        Soma = 0;
      if (strCPF == "00000000000") return false;
    
      for (i=1; i<=9; i++) Soma = Soma + parseInt(strCPF.substring(i-1, i)) * (11 - i);
      Resto = (Soma * 10) % 11;
    
        if ((Resto == 10) || (Resto == 11))  Resto = 0;
        if (Resto != parseInt(strCPF.substring(9, 10)) ) return false;
    
      Soma = 0;
        for (i = 1; i <= 10; i++) Soma = Soma + parseInt(strCPF.substring(i-1, i)) * (12 - i);
        Resto = (Soma * 10) % 11;
    
        if ((Resto == 10) || (Resto == 11))  Resto = 0;
        if (Resto != parseInt(strCPF.substring(10, 11) ) ) return false;
        return true;
    }
    
    // condiçoes
    if(!cpfvalidoreceita){
        alert('[error] - CPF INVALIDO, verifique : \n - Não use de Simbolos(. , - ...) \n - Digite so Numeros. \n - Confira se Digitou os numeros corretos.')
        cpfhtml.value = ' '
    }else {
        cpfhtml.value = cpfescrita(cpf)
        return true
    }
    
}
function validarNasc() { //validar nascimento
    //variaveis
    const dataHTML = document.getElementById('data')
    const data = String(dataHTML.value)
    const ano = parseInt(data.slice(0, 4))
    const dataatual = new Date()
    const anoatual = dataatual.getFullYear()
    
    //condiçoes
    if((anoatual - ano) < 18) {
        if((anoatual - ano) > 16) {
            alert('Menores de 18 e maiores que 16 - Condições especias de cadastro - ENTRE EM CONTATO COM SEU CONSULTOR')
            dataHTML.value = " "
        }else()
    }
}