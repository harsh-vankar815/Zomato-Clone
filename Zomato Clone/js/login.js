// Toggle Password Visibility
document.getElementById("toggle-password").addEventListener("click", function () {
    const passwordField = document.getElementById("password");
    const isPassword = passwordField.getAttribute("type") === "password";
    passwordField.setAttribute("type", isPassword ? "text" : "password");
    this.textContent = isPassword ? "Hide" : "Show";
});

// Form Submission with Input Validation
document.getElementById("login-form").addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent form submission for demo purposes

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    // Simple validation (expand as needed)
    if (email && password) {
        alert("Logging in...");
        console.log("Email:", email);
        console.log("Password:", password);
    } else {
        alert("Please enter a valid email and password.");
    }
});
