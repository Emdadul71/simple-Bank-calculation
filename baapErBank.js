

document.getElementById('login-btn').addEventListener('click', function(){
    const emailField = document.getElementById('user-email');
    const userEmail = emailField.value;

    const passwordField = document.getElementById('user-password');
    const userPassword = passwordField.value;

    if ((userEmail == 'user@baap.com') && (userPassword == 'secret')) {
        window.location.href = "banking.html";
    }else {
        alert("Invalid email or password");
    }
})
