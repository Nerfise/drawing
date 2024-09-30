// signup.js
const signupForm = document.getElementById('signupForm');

signupForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const username = document.getElementById('newUsername').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('newPassword').value;

    // Firebase authentication
    auth.createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in
            const user = userCredential.user;
            alert("Signup successful! Please log in.");
            // Redirect to login page
            window.location.href = 'index.html';
        })
        .catch((error) => {
            const errorMessage = error.message;
            alert("Signup failed: " + errorMessage);
        });
});
