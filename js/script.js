const texto = document.querySelector('textarea');
const btnEnviar = document.querySelector('#botao__enviar');
const btnDeletar = document.querySelector('#botao__deletar');
const main = document.querySelector('main');

btnEnviar.addEventListener('click', pegandoDados);
var anotacoes = []

function pegandoDados(event){
  event.preventDefault();
  criandoDiv(texto.value);
}

btnDeletar.addEventListener('click', deletaDiv);

function deletaDiv(event){
  event.preventDefault();
  anotacoes.forEach((item, index) => { 
    const filhos = item.children;
    if(filhos[1].checked){
      main.removeChild(item);
      anotacoes.splice(index, 1);
    }
  });
}

function criandoDiv(texto){
  const div = document.createElement('div');
  const paragrafo = document.createElement('p');
  const input = document.createElement('input');

  div.classList.add('ativo');
  paragrafo.innerText = texto
  input.type = 'checkbox'
  div.appendChild(paragrafo)
  div.appendChild(input);
  main.appendChild(div);
  anotacoes.push(div);
}
