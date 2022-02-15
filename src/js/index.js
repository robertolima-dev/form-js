const form = document.querySelector('form');
const main = document.querySelector('main')
const userName = document.querySelector('[name="nome"]');
const userEmail = document.querySelector('[name="email"]');
const userPhone = document.querySelector('[name="telefone"]');
const userPassword = document.querySelector('[name="senha"]');
form.addEventListener('submit', (e) => {
  e.preventDefault();
  const formIsFulfilled = userName.value && userEmail.value && userPhone.value && userPassword.value
  if (formIsFulfilled) {
    fetch('http://localhost:5500/form-js/cadastrou.json').then((res) => {
      const answer = res.json();
      return answer
    }).then(answer => {
      console.log(answer)
      main.innerHTML = `<p>${answer.success}</p>`
    })
  } else {
    main.innerHTML = `<p>Não</p>`
  }

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

