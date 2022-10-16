var votos_do_bolsonaro = 0
var votos_do_lula = 0
var email_user = []
var login = []


function confira(){
    var voto_str = window.document.querySelector('input#voto')
    var voto = Number.parseInt(window.document.querySelector('input#voto').value)
    var frase = window.document.querySelector('frase')
    var foto_confira = window.document.querySelector('img#confira')
    if (voto == 22){
        foto_confira.src = 'bolsonaro.png'
        frase.innerHTML = ''
    }else if (voto == 13){
        foto_confira.src = 'lula.png'
        frase.innerHTML = ''
    }else if (voto_str.value.length == 0){
        frase.innerHTML = ''
    }else{
        frase.innerHTML = 'Candidato não encontrado.'
        foto_confira.src = 'embranco.png'
    }
}


function confirma(){
    var email = `${email_user[0]}votou`
    var fim = window.document.querySelector('audio#fim')
    var voto_str = window.document.querySelector('input#voto')
    var voto = Number.parseInt(voto_str.value)
    var foto_confira = window.document.querySelector('img#confira')
    if (login[0] == false){
        window.alert('[ERRO] Você não fez login!\nFaça login e tente novamente!')
        liberar_voto()
    }else if (localStorage.getItem(email)){
        window.alert('[ERRO] Você já votou!')
    }else if (voto == 22){
        votos_do_bolsonaro = votos_do_bolsonaro+1
        localStorage.setItem(email, 'votou')
        fim.src = 'Fim.mp3'
        setTimeout(function esperar(){
            window.alert('FIM')
        }, 500)
    }else if (voto == 13){
        votos_do_lula = votos_do_lula+1
        localStorage.setItem(email_user, 'votou')
        fim.src = 'Fim.mp3'
        setTimeout(function esperar(){
            window.alert('FIM')
        }, 500)
    }else if (voto_str.value.length == 0){
        window.alert('[ERRO] Digite um candidato antes de CONFIRMAR!')
    }else{
        window.alert('[ERRO] Digite um candidato VÁLIDO!')
    }
    voto_str.value = ''
    foto_confira.src = 'embranco.png'
}


function liberar_voto(){
    var True = true
    while (True == true){
        login[0] = false
        var email = window.prompt('Antes de votar digite seu login.').toLowerCase()
        var senha_sistema = localStorage.getItem(email)
        if (senha_sistema){
            var senha = window.prompt('Antes de votar digite a sua senha.')
            if (senha == senha_sistema){
                window.alert('Seu acesso a urna foi liberado!')
                email_user[0] = email
                login[0] = true
                break
            }else{
                window.alert('[ERRO] Verifique o e-mail e a senha, e TENTE NOVAMENTE!')
            }
        }else{
            window.alert('[ERRO] Usuário não cadastrado!')
        }
    }
}


function mostrar_votos(){
    if (votos_do_bolsonaro > votos_do_lula){
        window.alert(`BOLSONARO LIDERANDO!\nBolsonaro com ${votos_do_bolsonaro} votos.\nLula com ${votos_do_lula} votos.`)
    }else if (votos_do_lula > votos_do_bolsonaro){
        window.alert(`LULA LIDERANDO!\nLula com ${votos_do_lula} votos.\nBolsonaro com ${votos_do_bolsonaro} votos.`)
    }else{
        window.alert(`AMBOS EMPATADOS!\nBolsonaro com ${votos_do_bolsonaro} votos.\nLula com ${votos_do_lula} votos.`)
    }
}


function entrou(){
    var secao = window.document.querySelector('section#confira')
    secao.style.borderColor = 'green'
}


function saiu(){
    var secao = window.document.querySelector('section#confira')
    secao.style.borderColor = 'rgba(0, 0, 0, 0.658)'
}