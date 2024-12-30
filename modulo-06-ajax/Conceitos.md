# AJAX
> https://developer.mozilla.org/pt-BR/docs/Learn_web_development/Core/Scripting/Network_requests


AJAX (Asynchronous JavaScript and XML) é uma técnica de desenvolvimento web para criar aplicações interativas e dinâmicas. Com AJAX, é possível atualizar partes de uma página web sem recarregar a página inteira. Isso melhora a experiência do usuário e a performance da aplicação.

## Conceitos de AJAX

- **Asynchronous**: As operações AJAX são assíncronas, o que significa que o navegador pode continuar a processar outras tarefas enquanto a solicitação AJAX está sendo processada.
- **JavaScript**: AJAX utiliza JavaScript para enviar e receber dados entre o cliente e o servidor.
- **XML**: Originalmente, os dados eram enviados e recebidos no formato XML, mas atualmente JSON é mais comumente usado devido à sua simplicidade e eficiência.

## Exemplo Prático

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>AJAX Example</title>
    <script>
        function loadData() {
            const xhr = new XMLHttpRequest();
            xhr.open('GET', 'data.json', true);
            xhr.onload = function() {
                if (this.status === 200) {
                    const data = JSON.parse(this.responseText);
                    document.getElementById('output').innerHTML = data.message;
                } 
            };
            xhr.send();
        }
    </script>
</head>
<body>
    <button onclick="loadData()">Load Data</button>
    <div id="output"></div>
</body>
</html>
```

## Padrões e Melhores Práticas

- **Modularização**: Separe a lógica AJAX em funções reutilizáveis.
- **Tratamento de Erros**: Sempre implemente tratamento de erros para lidar com falhas na solicitação.
- **Segurança**: Valide e sanitize os dados no servidor para evitar ataques como injeção de código.
- **Performance**: Minimize o número de solicitações AJAX e use técnicas de cache quando possível.

## Especificações

- **XMLHttpRequest**: A interface original para fazer solicitações AJAX.
- **Fetch API**: Uma interface mais moderna e simplificada para realizar solicitações assíncronas.

```javascript
// Exemplo usando Fetch API
fetch('data.json')
    .then(response => response.json())
    .then(data => {
        document.getElementById('output').innerHTML = data.message;
    })
    .catch(error => console.error('Error:', error));
```

AJAX continua sendo uma ferramenta poderosa para o desenvolvimento web moderno, permitindo a criação de aplicações rápidas e responsivas.


# ERRO 01 = USO DE JSON.sringfy
O erro ``"Uncaught SyntaxError: Unexpected end of input"`` geralmente ocorre quando há um problema de sintaxe no código, como uma string JSON malformada ou um problema ao passar um objeto como argumento para uma função.

No seu caso, o problema pode estar relacionado ao uso de JSON.stringify ao passar o objeto Pokémon para a função addPokemon. 
> Quando você usa ``JSON.stringify`` dentro de um atributo HTML, ele pode causar problemas de sintaxe se o objeto contiver caracteres especiais.

## Solução
Para resolver esse problema, você pode evitar o uso de JSON.stringify e passar o ID do Pokémon como argumento para a função addPokemon. Em seguida, você pode buscar o objeto Pokémon no array pokemonList usando o ID.