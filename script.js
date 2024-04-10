const form = document.getElementById('form-nome-contato');
const nomeContato = [];
const telefone = [];

let linhas = '';

form.addEventListener('submit', function (e) {
  e.preventDefault();

  adicionaLinha();
  atualizaTabela();
})

function adicionaLinha() {
  const inputNomeContato = document.getElementById('nome-contato');
  const inputTelefone = document.getElementById('telefone');

  if (nomeContato.includes(inputNomeContato.value)) {
    alert(`A atividade: ${inputNomeContato.value} já foi inserida`);
  } else {

    nomeContato.push(inputNomeContato.value);/* adiciona o contato no array */
    telefone.push(parseFloat(inputTelefone.value));/* adiciona o tel no array */


    let linha = '<tr>';
    linha += `<td>${inputNomeContato.value}</td>`;
    linha += `<td>${inputTelefone.value}</td>`;
    linha += '</tr>';

    linhas += linha;
  }


  inputNomeContato.value = '';/* limpa campos */
  inputTelefone.value = '';/* limpa campo */
}

function atualizaTabela() {
  const corpoTabela = document.querySelector('tbody');
  corpoTabela.innerHTML = linhas;
}
