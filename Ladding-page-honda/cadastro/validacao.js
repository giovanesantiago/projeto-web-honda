
//validações
function validarNome(conteudo) { //Validar Nome Commpleto
    //variaveis
    const nome = conteudo // Recendo dados
    var temNumero = false
    var doisnome = false
    
    // confirindo se tem numero e nome e sobre nome
    for (let value of nome) {
        if(parseInt(value) >= 0) {
            temNumero = true
            break
        }
        if(value == ' ') {
            doisnome = true
            break
        }
    }
    
    //Validações
    if (nome.length <= 3) { // qnt de caracteres maior que 3
        alert('[error] - Nome incompleto.')
        nomeV.value = ''
    }else if (temNumero){ // nao pode ter numero
        alert('[error] - Nao pode haver numeros.')
        nomeV.value = ''
    }else if (!doisnome){ //nao pode ter menos de 2 nomes
        alert('[error] - Nome e sobrenome')
        nomeV.value = ''
    }else { // validado
        return true
    }
    
}
function validarMae(conteudo) { //Validar Nome Mae
    //variaveis
    const nome = conteudo // Recendo dados
    var temNumero = false
    var doisnome = false
    // confirindo se tem numero 
    for (let value of nome) {
        if(parseInt(value) >= 0) {
            temNumero = true
            break
        }
        if(value == ' ') {
            doisnome = true
            break
        }
    }
    //Validações
    if (nome.length <= 3) { // qnt de caracteres maior que 3
        alert('[error] - Nome incompleto.')
        nomeV.value = ''
    }else if (temNumero){ // nao pode ter numero
        alert('[error] - Nao pode haver numeros.')
        nomeV.value = ''
    }else if (!doisnome){ //nao pode ter menos de 2 nomes
        alert('[error] - Nome e sobrenome')
        nomeV.value = ''
    }else { // validado
        return true
    }
    
}
function validarPai(conteudo) { //Validar Nome pai
    //variaveis
    const nome = conteudo // Recendo dados
    var temNumero = false
    var doisnome = false
    // confirindo se tem numero 
    for (let value of nome) {
        if(parseInt(value) >= 0) {
            temNumero = true
            break
        }
        if(value == ' ') {
            doisnome = true
            break
        }
    }
    //Validações
    if (nome.length <= 3) { // qnt de caracteres maior que 3
        alert('[error] - Nome incompleto.')
        nomeV.value = ''
    }else if (temNumero){ // nao pode ter numero
        alert('[error] - Nao pode haver numeros.')
        nomeV.value = ''
    }else if (!doisnome){ //nao pode ter menos de 2 nomes
        alert('[error] - Nome e sobrenome')
        nomeV.value = ''
    }else { // validado
        return true
    }
    
}
function validarCPF() { //vALIDAR CPF
    //variaveis
    const cpfhtml = document.getElementById('cpf')
    const cpf = String(cpfhtml.value)
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
    const cpfvalidoreceita = TestaCPF(cpf) 
    // condiçoes
    const naovalido = false
    if(!cpfvalidoreceita){
        alert('[error] - CPF INVALIDO, verifique : \n - Não use de Simbolos(. , - ...) \n - Digite so Numeros. \n - Confira se Digitou os numeros corretos.')
        cpfhtml.value = ''
        naovalido = true
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
        }else{
            alert('Menor de 16 anos não pode fazer consorcio - favor fazer com os dados de alguem maior de idade.')
            dataHTML.value = " "
        }
    }else if((anoatual - ano) > 100) {
        alert('[error] - Idade Invalida')
        dataHTML.value = " "
    }else {
        return true
    }
}

function enviar() {
    const dados = [
        '- ' + document.getElementById('nome').value + '\n',
        'Pai: ' + document.getElementById('pai').value + '\n',
        'Mae: ' + document.getElementById('mae').value + '\n',
        'CPF: ' + document.getElementById('cpf').value + '\n',
        'Nasc: ' + document.getElementById('data').value + '\n',
        'RG: ' + document.getElementById('rg').value + '\n',
        'Cep: ' + document.getElementById('cep').value + '\n',
        'Rua: ' + document.getElementById('rua').value,
        'Nº casa: ' + document.getElementById('numero').value,
        'complemento: ' + document.getElementById('Complemento').value + '\n',
        'Barrio: ' + document.getElementById('bairro').value,
        'Cidade: ' + document.getElementById('cidade').value,
        'Uf: ' + document.getElementById('uf').value + '\n',
        'Telefone : (' + document.getElementById('ddd').value + ')' + document.getElementById('telefone').value + '\n',
        'Email: ' + document.getElementById('email').value + '\n',
        'Nome Recado: ' + document.getElementById('NomeRecado').value,
        'Recado : (' + document.getElementById('ddd2').value + ')' + document.getElementById('telefonerec').value
    ]
    const dadosTXT = dados.join(' * ')
    console.log(dadosTXT)
    alert('ok')

    
}

