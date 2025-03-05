
document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    
    if (username === 'user' && password === 'password') {
        window.location.href = 'catalog.html'; 
    } else {
        document.getElementById('error-message').innerText = 'Invalid username or password';
    }
});
