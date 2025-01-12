// alert("Supermercado");
var items = [];

document.querySelector("input[type=button]").addEventListener("click", () => {
  // alert('Clicou')

  let nome = document.querySelector(`input[name=nome-produto]`);
  console.log(nome);

  let valor = document.querySelector(`input[name=valor-produto]`);
  console.log(valor);

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
  let soma = 0;
  
  console.log(listaProdutos);
  
  listaProdutos.innerHTML = "";
  
  items.map(function (val) {
    listaProdutos.innerHTML += `<div class="produto-single">
    <h3>${val.name}</h3>
    <h3 class="price-produto"><span>R$ ${val.price}</span></h3>
  </div>
  `;
  });

  soma+= parseFloat(valor.value);
  nome.value = "";
  valor.value = "";

  let total = document.querySelector(".total");
  total = document.querySelector(".total").innerHTML = `Total: R$ ${soma}`;

//   soma = items.reduce((acc, item) => {
//     return acc + parseFloat(item.price);
//   });
  console.log(soma);
  // var item = document.querySelector('input[type=button]').value
});
