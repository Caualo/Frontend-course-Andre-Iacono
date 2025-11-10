//.querySelector identifica pelo arquivo CSS.
const search =  document.querySelector('#search');
const list = document.querySelector('#list');

search.addEventListener('input', () => {
    //Variavel "value" pega o input do usuario e armazena, o tolowercase deixa o input minusculo.
    const value = search.value.toLowerCase();
    //A variavel items vai pegar dentro da lista os elementos <li>
    const items = list.getElementsByTagName('li');
    //Array.from transforma "items" em uma array 
    //forEach é um método de array que percorre cada item e executa uma função.
    //item é parâmetro da função, representa cada <li> da lista.
    Array.from(items).forEach((item) => {
        //pegando os itens dentro da lista e convertendo para minusculo para comparação
        const text = item.textContent.toLowerCase();
        //indexOf(value) → procura se a string value (o que o usuário digitou) existe dentro do text (conteúdo do <li>).
        if (text.indexOf(value) !== -1) {
            //Para aparecer o item
            item.style.display = 'block';
        } else {
            //para esconder o item
            item.style.display = 'none';
        }
    })
})