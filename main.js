const form = document.getElementById("form-atividade")
const nomes = [];
const numeros =  [];

let linhas = ' '

form.addEventListener('submit' ,function(e) {
    e.preventDefault();

    adicionaLinha();
    atualizaTabela();
});

function adicionaLinha() {

    let nomeContato = document.getElementById("nome-contato");
    let numeroContato = document.getElementById("numero-contato");

    if(nomes.includes(nomeContato.value || numeros.includes(numeroContato.value))) {
        alert(`Algum contato já foi salvom com ${nomeContato}`);

        if (numeros.includes(numeroContato.value)) {
            alert(`Algum contato já foi salvo com o número ${numeroContato}`);
        }
    }

    nomes.push(nomeContato.value);
    numeros.push(numeroContato.value);

    let linha = '<tr>';
    linha += `<td>${nomeContato.value}</td>`;
    linha += `<td>${numeroContato.value}</td>`;
    linha += '</tr>';

    linhas += linha

    nomeContato = ' ';
    numeroContato = ' ';
}

function atualizaTabela() {

    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;

}





