const signUpform = document.getElementById("signupForm");

signUpform.addEventListener("submit", function(submitEvent) {
    submitEvent.preventDefault();
    const emailInput = document.getElementById("email");
    const passwordInput = document.getElementById("password");

    const emailValue = emailInput.value.trim();
    const passwordValue = passwordInput.value.trim();

    if (emailValue === "" || passwordValue === "") {
        alert("Fill all fields please.");
        return;
    }
    window.location.href = "../Admin/admin.html";
});
