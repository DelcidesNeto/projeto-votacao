var confirmacao = [false]
function logar(){
    var email_txt = window.document.querySelector('input#email')
    var email_util = email_txt.value
    var senha_txt = window.document.querySelector('input#senha')
    var senha_util = senha_txt.value
    if (email_txt.value.length == 0 || senha_txt.value.length == 0){
        window.alert('[ERRO] Dados faltando!')
    }else{
        var email_sistema = email_util
        var senha_sistema = localStorage.getItem(email_util)
        if (senha_sistema){
            if (senha_util == senha_sistema){
                window.alert(`Você logou como ${email_sistema}`)
                window.location.href = 'Votação/votacao.html'
            }else{
                window.alert('[ERRO] Usuário ou senha INCORRETOS!')
            }
        }else{
            window.alert('[ERRO] Usuário não encontrado!')
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
        informacao.title = 'Mostrar senha'
    }
}


function mudar_para_cadastro(){
    window.location.href = 'Autenticação/Cadastrar/cadastrar.html'
}