// Buscar o elemmento com base no nome do elemento (tag name)
const p = document.getElementsByTagName('p');
console.log(p);

console.log(p[0].innerHTML) // Acessando o conteúdo do primeiro elemento
// console.log(p[1].innerHTML) // Acessando o conteúdo do segundo elemento

console.log(p.length);

alert(`O documento possui ${p.length} parágrafos`); // Exibindo a quantidade de parágrafos no documento

// Manipulando o conteúdo do parágrafo
if(p.length > 0)
p[0].innerHTML = 'Novo conteúdo do parágrafo';

// Manipulando o conteúdo de todos os parágrafos
for (let i = 0; i < p.length; i++) {
    // const element = p[i];
    p[i].innerHTML = 'Novo conteúdo do parágrafo ' + i;
}

// Não é possível utilizar o forEach com o getElementsByTagName pois ele não é um array e sim um HTMLCollection (array-like)
const h3 = document.getElementsByTagName('h3');
let i = 0;
h3.forEach( (h3) => {
    h3[i].innerHTML = 'Novo conteúdo do h3';
    i++;
});

// h3.forEach(h3 => h3.innerHTML = 'Novo conteúdo do h3');
