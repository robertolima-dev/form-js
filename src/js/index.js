const form = document.querySelector('form');
const userName = document.querySelector('[name="nome"]');
const userEmail = document.querySelector('[name="email"]');
const userPhone = document.querySelector('[name="telefone"]');
const userPassword = document.querySelector('[name="senha"]');
form.addEventListener('submit', (e) => {
  e.preventDefault();
  if (userName.value && userEmail.value && userPhone.value && userPassword.value) {
    fetch('http://localhost:5500/form-js/cadastrou.json').then((res) => {
      const answer = res.json();
      return answer
    }).then(answer => {
      console.log(answer)
      document.body.innerHTML = `<p>${answer.success}</p>`
    })
  } else {
    document.body.innerHTML = `<p>Não</p>`
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

