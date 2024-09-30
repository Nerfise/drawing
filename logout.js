// logout.js
function logout() {
    auth.signOut().then(() => {
        // Sign-out successful.
        window.location.href = 'index.html';
    }).catch((error) => {
        console.error("Error signing out: ", error);
    });
}
