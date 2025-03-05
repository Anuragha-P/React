if (!localStorage.getItem('loggedIn')) {
    window.location.href = 'login.html';
}


document.getElementById('logout').addEventListener('click', function() {
    localStorage.removeItem('loggedIn');
    window.location.href = 'login.html';
});

