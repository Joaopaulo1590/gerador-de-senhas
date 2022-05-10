
let slider = document.querySelector("#slider")
let button= document.querySelector("#button")

let valor = document.querySelector("#valor")
let senha = document.querySelector("#password")

let containePassword = document.querySelector("#containersenha")

let charset = "abcdefghijklmnopqrstuvxywzABCDEFGHIJKLMNOPQRSTUVXYWZ0123456789"
let novaSenha = ""

valor.innerHTML = slider.value;

slider.oninput = function(){
    valor.innerHTML = this.value;
}

function gerarsenha(){
    let pass = ""
    for(let i = 0, n = charset.length;i < slider.value; ++i){
        pass += charset.charAt(Math.floor(Math.random() * n));
        

    }
    containePassword.classList.remove("hide")
    senha.innerHTML = pass;
    novaSenha = pass
}

function copiar(){
    alert("senha copiada com sucesso!")
    navigator.clipboard.writeText(novaSenha);
}

  