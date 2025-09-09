const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const confirm = document.getElementById('confirm');
const text = document.getElementById('text');
const button = document.getElementById('button');

button.addEventListener('click', async () => {
    console.log(username.value, email.value, password.value);

    if(confirm.value === password.value){
    const response = await fetch('http://localhost:5000/auth/signup', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            username: username.value,
            email: email.value,
            password: password.value,
        })
    });
    console.log(response.status);
    if(response.status === 200){
        window.location.href = '/FrontEnd/Interface/login.html';
    } 
  } else {
     text.textContent = 'Incorrect confirm password'
  }
});