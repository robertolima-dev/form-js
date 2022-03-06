// Getting main elements
const form = document.querySelector('form');
const main = document.querySelector('main')
const userName = document.querySelector('[name="nome"]');
const userEmail = document.querySelector('[name="email"]');
const userPhone = document.querySelector('[name="telefone"]');
const userPassword = document.querySelector('[name="senha"]');

// Listening to submit event
form.addEventListener('submit', (e) => {
  e.preventDefault();
  const userNameValue = userName.value
  const userNameTest = /^[A-Z][a-z].* [A-Z][a-z].*$/g.test(userNameValue);
  const userEmailValue = userEmail.value
  const userEmailTest = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/.test(userEmailValue);

  const userPhoneValue = userPhone.value
  const userPhoneTest = /^\(\d{2,}\) \d{4,}\d{4}$/.test(userPhoneValue);
  const userPasswordValue = userPassword.value
  const userPasswordTest = /[(?=\W_)(?=\S).]/g.test(userPasswordValue);
  const formIsFulfilled = userNameTest && userEmailTest && userPhoneTest && userPasswordTest


  //if all fields are filled, then the form is valid
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