// Trabalhando com Promise
// Promise é um objeto usado para processamento assíncrono. Um Promise (de "promessa") representa um valor que pode estar disponível agora, no futuro ou nunca.
// https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Promise


// Funções assincronas: 
// setTimeout e setInterval são funções assíncronas, 
// pois não são executadas de forma sequencial, ou seja, 
// não são executadas linha a linha. 
// Elas são executadas em paralelo com o restante do código.

// setTimeout(() => {
//   console.log("Executando setTimeout, após 2 segundos...");
// }, 2000);


// # ASYNC / AWAIT
// O async/await é uma forma de escrever código assíncrono de forma mais simples e legível.
// https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Statements/async_function

async function pegarId() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(5);
    }
    , 1500);
  }
  );
}



// Exemplo de Promise
// const promessa = new Promise((resolve, reject) => {
//   let condicao = true;
//   if (condicao) {
//     resolve("Estou pronto!");
//   } else {
//     reject("Ainda não estou pronto!");
//   }
// });

// function pegarId() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve(5);
//     }, 1500);
//   });
// }
var erro = true;
var contador = 0;

function testes() {
  console.log("---- Inicio Promise ----");
  return new Promise((resolve, reject) => {
    console.log("--- Validar erro ---");
    
    console.log("Status >>> ", erro);

    console.log("--- Verificar status do erro ---");
    if (erro) {
      reject("O valor do reject está aqui: Erro...");
      console.log("Deu algum Erro...");
      erro = false;
    } else {
      resolve("Sucesso...");
      console.log("Toe teu SUCESSO fi...");
      erro = true;
    }

    // setTimeout(() => {
    //   resolve('Teste');
    // }, 1500);
  });
}

// setInterval(() => {
  // console.log("---- Intervalo ----");
  // console.log("Intervalo de 2 segundos...");
  // testes().then((resposta) => {
  //   console.log(resposta);
  //   alert(resposta)
  // }).catch((erro) => {
  //   console.log(erro);
  // });
  // console.log("---- Intervalo ----");
// }, 2000);

async function executarDepois() {
  console.log("---- Executar depois da função testes() ----");
  await testes().then((resposta) => {
    console.log("Essa foi a resposta de Sucesso: ", resposta);
    alert(resposta)
  }).catch((erro) => {
    console.log("Essa foi a resposta de Erro: ", erro);
  });
  console.log("---- termminou ----");
}

executarDepois();


// testes().then((res) => {
//   console.log(res);
//   alert(res);
// });


// Mais exemplos de Promise Async/Await
const fetchData = () => {
  return new Promise((resolve, reject) => {
      setTimeout(() => {
          const data = { user: "John", age: 30 }; // Simulando um retorno de uma API
          // let valor;
          resolve(valor);
      }, 2000);
  });
};

fetchData()
  .then(data => {
      console.log("Data fetched:", data);
  })
  .catch(error => {
      console.error("Error fetching data:", error);
  });