document.getElementById('clientForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const formData = new FormData(this);

    fetch('process.php', {
        method: 'POST',
        body: formData
    })
    .then(response => response.text())
    .then(data => {
        alert(data);
        document.getElementById('clientForm').reset();
        
        const newUsername = formData.get('newUsername');
        const newPassword = formData.get('newPassword');
        localStorage.setItem('newUsername', newUsername);
        localStorage.setItem('newPassword', newPassword);

        localStorage.setItem('formCompleted', 'true');

        window.location.href = 'iniciar sesion.html';
    })
    .catch(error => console.error('Error:', error));
});
