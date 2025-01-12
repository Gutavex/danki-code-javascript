# Usuário Black (Telegram - Danki Code)

> boa tarde, alguem sabe me informar o porquer o meu formulário não ta aumentando os Inputs?

Problema encontrado:

- Uso da formatação CSS inválido para os inputs


````css
/* Não deve existir espaço entre o elemento e o argumento  */
/* form input [type="text"] {} */
form input [type="text"]{
    display: inline-block;
    margin-top: 30px;
    width: 100%;
    padding: 10px;
    /* box-sizing: border-box; */
}
````

Solução:
````css
/* Não deve existir espaço entre o elemento e o argumento  */
/* REMOVER O ESPAÇO "form input[type="text"] {}" */
form input[type="text"]{
    display: inline-block;
    margin-top: 30px;
    width: 100%;
    padding: 10px;
}
````
