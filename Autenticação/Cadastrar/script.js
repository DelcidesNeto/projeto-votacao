var confirmacao = [false]
function cadastrar(){
    var email_txt = window.document.querySelector('input#email')
    var email_util = email_txt.value
    var senha_txt = window.document.querySelector('input#senha')
    var senha_util = senha_txt.value
    if (email_txt.value.length == 0 || senha_txt.value.length == 0){
        window.alert('[ERRO] Dados faltando!')
    }else{
        if (localStorage.getItem(email_util)){
            window.alert('[ERRO] Este usuário já foi cadastrado!')
        }
        else{
            localStorage.setItem(email_util, senha_util)
            window.alert('Cadastro CONCLUÍDO!')
        }
    }
}


function mostrar_senha(){
    var clicou = confirmacao[0]
    var senha = window.document.querySelector('input#senha')
    var informacao = window.document.querySelector('abbr#informacao')
    if (clicou == false){
        senha.type = 'text'
        confirmacao[0] = true
        informacao.title = 'Esconder senha'
    }else{
        senha.type = 'password'
        confirmacao[0] = false
        informacao.title = 'Mostar senha'
    }
}


function mudar_para_login(){
    window.location.href = '../../index.html'
}