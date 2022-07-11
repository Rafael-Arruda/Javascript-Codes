
const nome = document.querySelector('.input-name');
const senha = document.querySelector('.input-password');
const botao = document.querySelector('.btn-login');

function validaLogin(){
    
    if(nome.value && senha.value.length >= 8){
        
        botao.removeAttribute('disabled');
        botao.classList.add('btn-login-ativo');
        
    }else {
        botao.setAttribute('disabled', 'disabled');
        botao.classList.remove('btn-login-ativo');
    }
}

senha.addEventListener('input', validaLogin);