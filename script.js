const button = document.getElementById('button')

button.addEventListener('click', (event) => {
    event.preventDefault()

    const nome = document.getElementById('nome')
    const email = document.getElementById('email')
    const tel = document.getElementById('tel')
    const idmenu = document.getElementById('idmenu')
    const message = document.getElementById('message')

    
    if(nome.value == ''){
        nome.classList.add('errorInput')
    }else{
        nome.classList.remove('errorInput')
    }
    if(email.value == ''){
        email.classList.add('errorInput')
    }else{
        email.classList.remove('errorInput')
    }
    if(tel.value == ''){
        tel.classList.add('errorInput')
    }else{
        tel.classList.remove('errorInput')
    }
    if(idmenu.value == ''){
        idmenu.classList.add('errorInput')
    }else{
        idmenu.classList.remove('errorInput')
    }
    if(message.value == ''){
        message.classList.add('errorInput')
    }else{
        message.classList.remove('errorInput')
    }
    window.location.href='http://127.0.0.1:5500/sucesso.html';
})