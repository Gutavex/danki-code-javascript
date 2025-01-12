// alert("Supermercado");
var itens = [];

document.querySelector("input[type=button]").addEventListener("click", () => {
  // alert('Clicou')

  let nome = document.querySelector(`input[name=nome-produto]`).value;
  console.log(nome);

  let valor = document.querySelector(`input[name=valor-produto]`).value;
  console.log(valor);

//   itens.push(nome, valor) - Uma forma de adicionar os valores ao array
   itens.push({nome, valor})

//   Outra forma de adicionar os valores ao array
//   itens.push({
//     id: itens.length + 1,
//     nome: nome,
//     valor: valor,
//   });

  // var item = document.querySelector('input[type=button]').value
  console.log(itens);
});
