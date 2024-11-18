function criaCartao(categoria, pergunta, resposta, tipo){
    let container = document.getElementById('container')
    let cartao = document.createElement('article')
    cartao.className = 'cartao'

    cartao.innerHTML = `
    <div class="cartao__conteudo ${tipo}">
    <h3>${categoria}</h3>
    <div class="cartao__conteudo__pergunta ${tipo}">
        <img src='assets/img/${pergunta}'>
    </div>
    <div class="cartao__conteudo__resposta ${tipo}">
        <p>${resposta}</p>
    </div>
    </div>
    `

    let respostaEstaVisivel = false

    function viraCartao(){
        respostaEstaVisivel = !respostaEstaVisivel
        cartao.classList.toggle('active', respostaEstaVisivel);
    }
    cartao.addEventListener('click', viraCartao)
    

    container.appendChild(cartao)
}