const form = document.getElementById('form')

function cadastrarCliente() {
    let nome = document.getElementById('nome').value;
    let email = document.getElementById('email').value;
    let confirma = document.getElementById('checkbox').checked;

    if (nome && email != null) {
        let data = {
            nome,
            email,
            confirma,
        }
    
        let convertData = JSON.stringify(data);
    
        localStorage.setItem('lead', convertData);
    
        alert("Cadastro feito com sucesso!");

    }else{
        console.log("Dados não foram inseridos.")
    }

}