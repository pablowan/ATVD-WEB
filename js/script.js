let inpt = document.querySelectorAll('input')
let btsave = document.querySelector('.save')
let LiVros = document.querySelector('ul')

console.log(inpt)

btsave.addEventListener('click', function (e) {
  let livro = {
    titulo: inpt[0].value,
    autor: inpt[1].value,
    link: inpt[2].value,
    lido: inpt[3].checked,
    id: criarId(),
  }

  addLivro(livro)

  e.preventDefault()
})

function criarId() {
  return Math.floor(Math.random() * 1000)
}

function addLivro(livro) {
  let li = criarTagLi(livro)
  LiVros.appendChild(li)
  inpt[0].value;
  inpt[1].value;
  inpt[2].value;
  inpt[3].checked;
}

function criarTagLi(livro) {
  let li = document.createElement('li')
  li.setAttribute('id', `${livro.id}`)
  if (livro.lido) {
    li.classList.add('lido')
  }

  let span = document.createElement('span')
  span.innerHTML = (livro.titulo + ' - ' + livro.autor)

  let div = document.createElement('div')

  let Bcompra = document.createElement('button')
  Bcompra.classList.add('btn-buy')
  Bcompra.innerHTML = `<a class="material-icons" href=${livro.link}> shopping_cart </a>`

  let Bexcluir = document.createElement('button')
  Bexcluir.classList.add('delete')
  Bexcluir.innerHTML = '<span class="material-icons"> delete </span>'
  Bexcluir.setAttribute('onclick', 'deletar(' + livro.id + ')')

  div.appendChild(Bcompra)
  div.appendChild(Bexcluir)

  li.appendChild(span)
  li.appendChild(div)

  return li
}

function deletar(idLivro) {
  let confirm = window.confirm('Deseja mesmo deletar seu livro?')
  if (confirm) {
    let li = document.getElementById('' + idLivro + '')
    if (li) {
      LiVros.removeChild(li)
    }
  }
}

function checkEmptyList() {
  if (!document.querySelector('ul').childNodes.length) {
    document.querySelector('ul').innerHTML = 'Adicione um livro nos campos abaixo';
  }
}

checkEmptyList()