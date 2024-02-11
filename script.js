
let botao = window.document.querySelector('input')
botao.addEventListener('click',clicou)

function clicou(){
   let para = window.document.querySelector('p')
   let nome =  window.prompt("Qual é o seu nome?")
   para.innerHTML = `Olá , <strong>${nome}</strong>! É um grande prazer te conhecer! 🖖`
}