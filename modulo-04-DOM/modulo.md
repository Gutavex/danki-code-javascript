# Modelo de Objeto de Documento (DOM)
> link: https://developer.mozilla.org/pt-BR/docs/Web/API/Document_Object_Model

O Modelo de Objeto de Documento (DOM) é uma interface de programação para documentos HTML, XML e SVG .
> DOM Introduction: https://developer.mozilla.org/pt-BR/docs/Web/API/Document_Object_Model/Introduction

O que podemos acessar no DOM:

> DOM interfaces
> Attr
> CharacterData
> ChildNode Experimental
> Comment
> CustomEvent
> Document***   (Principal - Proprio documento da página)
> DocumentFragment
> DocumentType
> DOMError
> DOMException
> DOMImplementation
> DOMString
> DOMTimeStamp
> DOMSettableTokenList
> DOMStringList
> DOMTokenList
> Element*** (o próprio elemento)
> Event
> EventTarget
> HTMLCollection
> MutationObserver
> MutationRecord
> Node***   (nó de algum objeto ex. div, tr, etc)
> NodeFilter
> NodeIterator
> NodeList
> ParentNode Experimental
> ProcessingInstruction
> Range
> Text
> TreeWalker
> URL
> Window
> Worker
> XMLDocument Experimental

Como manipular o DOM:

> Funções do próprio Javascript no navegador (ex. getElementById(), querySelector(), ... )
> DOM != Javascript (DOM é uma forma de representar um documento)


<!-- Exercises and Learning -->

## getElementById()
> Sintax var span = document.getElementById("exemplo");
nomeDoElemento = element.tagName;

### Exemplo
````html
<span id="exemplo">Descrição do exemplo...</span>
````

````javascript
var span = document.getElementById("exemplo");
console.log(span.tagName);
````