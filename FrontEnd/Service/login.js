const username = document.getElementById('username');
const password = document.getElementById('password');
const button = document.getElementById('button');

button.addEventListener('click', async () => {
    const getUsername = username.value;
    const getPassword = password.value;

    console.log(log);
    
    const response = await fetch('http://localhost:5000/auth/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify ({
            username: getUsername,
            password: getPassword
        })
    });

    const data = await response.json();

    localStorage.setItem('token', JSON.stringify(data));
});

