const form = document.querySelector('form');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  fetch('http://localhost:5500/form-js/cadastrou.json').then((res) => {
    const answer = res.json();
    return answer
  }).then(answer => {
    console.log(answer)
    document.body.innerHTML = `<p>${answer.success}</p>`
  })
})

// function cadastrar() {
//   var _nome = document.getElementById('nome').value;
//   var _email = document.getElementById('email').value;
//   var _telefone = document.getElementById('telefone').value;
//   var _senha = document.getElementById('senha').value;


//   var aluno = {
//     nome: _nome,
//     email: _email,
//     telefone: _telefone,
//     senha: _senha
//   }

//   console.log(aluno);
// }

