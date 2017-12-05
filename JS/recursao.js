//este código não é de minha autoria, o mesmo pode ser encontrado como exemplo de recursão no site da Mozila

//este processo é executado desde o inicio do documento devido a declaração
var charsInBody = (function counter(elm) {
	//verifica se no nó é um texto
    if (elm.nodeType == 3) {
    	//caso o campo seja um texto retorna a quantidade de letras do valor
        return elm.nodeValue.length;
    }
    //define a váriavel que irá carregar a soma de uma arvore de nós
    var count = 0;
    //percorre cada nó de forma recursiva, assim faz com o desde a objeto passado até todos os seus filhos sejam calculados
    for (var i = 0, child; child = elm.childNodes[i]; i++) {
        count += counter(child);
    }
    return count;
    //está declaração que define que é o corpo do documento, é o argumento que será passado para a função
    //function counter(elm)
})(document.body);
//imprime para o usuário a quantidade de letras que é em todo os site
console.log(charsInBody);