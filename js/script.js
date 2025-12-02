function mostrarmenu() {
    document.querySelector("header nav").classList.toggle("mostrar");
}

function validar() {
    var nome = document.getElementById("nome");
    var email = document.getElementById("email");
    var mensagem = document.getElementById("mensagem");

    if (nome.value == "" || email.value == "" || mensagem.value == "") {
        alert("Preencha todos os campos obrigatórios");

        if (nome.value === "") {
            nome.focus();
        } else if (email.value === "") {
            email.focus();
        } else {
            mensagem.focus();
        }
        
        return;
    }

    alert("Dados enviados com sucesso!");
}

