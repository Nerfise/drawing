// login.js
const loginForm = document.getElementById('loginForm');

loginForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Firebase authentication
    auth.signInWithEmailAndPassword(auth, username, password)
        .then((userCredential) => {
            // Signed in
            const user = userCredential.user;
            alert("Login successful! Redirecting to home page...");
            // Redirect to home page
            window.location.href = 'home.html';
        })
        .catch((error) => {
            const errorMessage = error.message;
            alert("Login failed: " + errorMessage);
        });
});
