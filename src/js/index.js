const form = document.querySelector('form');

// function cadastrar() {
//   var _nome = document.getElementById('nome').value;
//   var _email = document.getElementById('email').value;
//   var _telefone = document.getElementById('telefone').value;
//   var _senha = document.getElementById('senha').value;

//   console.log(_nome + _email + _telefone + _senha);

//   var aluno = {
//     nome: _nome,
//     email: _email,
//     telefone: _telefone,
//     senha: _senha
//   }

//   console.log(aluno);
// }

form.addEventListener('submit', (e) => {
  e.preventDefault();
})
