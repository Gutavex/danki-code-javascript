// alert("Supermercado");
var items = [];

document.querySelector("input[type=button]").addEventListener("click", () => {
  // alert('Clicou')

  let nome = document.querySelector(`input[name=nome-produto]`);
  // console.log(nome);

  let valor = document.querySelector(`input[name=valor-produto]`);
  // console.log(valor);

  //   itens.push(nome, valor) - Uma forma de adicionar os valores ao array
  //   items.push({ nome, valor });

  // Outra forma de adicionar os valores ao array
  items.push({
    // id: items.length + 1,
    name: nome.value,
    price: valor.value,
  });
  console.log(items);

  let listaProdutos = document.querySelector(".produtos-carrinho");
  var soma = 0;

  console.log(listaProdutos);

  listaProdutos.innerHTML = "";

  items.map(function (val) {
    // Soma os produtos da lista conforme são adicionados
    soma += parseFloat(val.price);
    console.log(soma);

    // Adiciona os produtos na lista (array ja dentro das divs)
    listaProdutos.innerHTML += `<div class="produto-single">
    <h3>${val.name}</h3>
    <h3 class="price-produto"><span>R$ ${parseFloat(val.price).toFixed(
      2
    )}</span></h3>
    <div class="delete"><input type=button value="X" id="delete" name="delete" /> </div>
  </div>
  `;
  });

  // Limpa os campos de input
  nome.value = "";
  valor.value = "";

  // Adiciona o total da compra no final da lista
  let total = document.querySelector(".soma-produto h1");
  console.log(total);
  total.innerHTML = `Total: R$ ${soma.toFixed(2)}`;

  console.log(soma.toFixed(2));
  console.log(soma);
  // var item = document.querySelector('input[type=button]').value
});

// Limpar lista
document.querySelector(".limpar-lista").addEventListener("click", () => {
  items = [];
  let listaProdutos = document.querySelector(".produtos-carrinho");
  listaProdutos.innerHTML = "";
  let total = document.querySelector(".soma-produto h1");
  total.innerHTML = `Total: R$ 0.00`;
});

// Remover item da Lista
// function remover(produto) {

// }

// Função para remover um produto pelo nome
function removerProduto(listaProdutos, produtoNome) {
  let index = items.findIndex((item) => item.name === produtoNome);
  if (index !== -1) {
    items.splice(index, 1);
    console.log(produtoNome + " foi removido.");
    updateListaProdutos();
  } else {
    console.error("Produto não encontrado.");
  }
}

document.addEventListener("DOMContentLoaded", function () {
  document.addEventListener("click", function (e) {
    if (e.target && e.target.id === "delete") {
      let produtoNome = e.target
        .closest(".produto-single")
        .querySelector("h3").innerText;
      let listaProdutos = document.querySelector(".produtos-carrinho");
      removerProduto(listaProdutos, produtoNome);
    }
  });
});

function updateListaProdutos() {
  let listaProdutos = document.querySelector(".produtos-carrinho");
  listaProdutos.innerHTML = "";
  let soma = 0;

  items.map(function (val) {
    soma += parseFloat(val.price);
    listaProdutos.innerHTML += `<div class="produto-single">
      <h3>${val.name}</h3>
      <h3 class="price-produto"><span>R$ ${parseFloat(val.price).toFixed(
        2
      )}</span></h3>
      <div class="delete"><input type=button value="X" id="delete" name="delete" /> </div>
    </div>`;
  });

  let total = document.querySelector(".soma-produto h1");
  total.innerHTML = `Total: R$ ${soma.toFixed(2)}`;
}
