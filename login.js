document.getElementById("loginForm").addEventListener("submit", function(event) {

    let username = document.getElementById("username").value.trim();
    let password = document.getElementById("password").value.trim();

    let userError = document.getElementById("userError");
    let passError = document.getElementById("passError");

    userError.textContent = "";
    passError.textContent = "";

    let valid = true;

    if (username === "") {
        userError.textContent = "Username is required";
        valid = false;
    }

    if (password === "") {
        passError.textContent = "Password is required";
        valid = false;
    }

    if (!valid) {
        event.preventDefault();
    }
});