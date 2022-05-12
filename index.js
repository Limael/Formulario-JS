const form = document.getElementById('form');
const usuario = document.getElementById('usuario');
const email = document.getElementById('email');
const senha = document.getElementById('senha');
const confirmacao_senha = document.getElementById('confirmacao_senha');
const botao = domcument.getElementById('botao');




form.addEventListener('submit', (e) =>{
    e.preventDefault();
    checkInputs();
    
    
})



function checkInputs(){
    const usuarioValue = usuario.value.trim();
    const emailValue = email.value.trim();
    const senhaValue = senha.value.trim();
    const confirmacao_senhaValue = confirmacao_senha.value.trim();

    Validation_usuario(usuarioValue);
    Validation_email(emailValue);
    Validation_senha(senhaValue);
    Validation_confirmacao(confirmacao_senhaValue,senhaValue);



}

function Validation_usuario (usuarioValue){
    if (usuarioValue === ''){
        errorValidation(usuario,'Preencha esse campo');
    }else if(usuarioValue.length < 3 || usuarioValue.length > 24 ){
        errorValidation(usuario,'Nome de usuário deve ter entre 3 a 25 caracteres');
    }
    else{
        successValidation(usuario);
    }
   
}

function Validation_email(emailValue){
    if(emailValue === ''){
        errorValidation(email, 'Preencha esse campo');
    } else if (emailValue.match(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/)){
        successValidation(email);
    }else{
        errorValidation(email, 'informe um email válido');
    }

}
function Validation_senha(senhaValue){
    if(senhaValue === ''){
        errorValidation(senha, 'Preencha esse campo');
    }else if(senhaValue.length < 8){
        errorValidation(senha, 'A senha deve ter no mínimo 8 caracteres')
    } 
    else{
        successValidation(senha);
    }
}

function Validation_confirmacao(confirmacao_senhaValue,senhaValue){
    if(confirmacao_senhaValue === ''){
        errorValidation(confirmacao_senha, 'Preencha esse campo');
    }else if(confirmacao_senhaValue !== senhaValue){
        errorValidation(confirmacao_senha, 'As senhas devem ser iguais');
    }
    else{
        successValidation(confirmacao_senha);
    }

}



function errorValidation(input, message){
    const controleform = input.parentElement;
    const small = controleform.querySelector('small');

    small.innerText = message;

    controleform.className = 'controle_form error';
}

function successValidation(input){
    const controleform = input.parentElement;

    controleform.className = 'controle_form success';

    
}

function debounce(func, timeout = 300){
    let timer;
    return (...args) => {
      clearTimeout(timer);
      timer = setTimeout(() => { func.apply(this, args); }, timeout);
    };
  }
    
  function saveInput(){
    console.log('Saving data');
  }
  
  const processChanges = debounce(() => saveInput());