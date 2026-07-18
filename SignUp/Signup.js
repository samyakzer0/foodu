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

    if (passwordValue.length < 6) {
        alert("Password must be at least 6 characters long.");
        return;
    }

    if (passwordValue.includes(" ")) {
        alert("Password cannot contain spaces.");
        return;
    }

      if (passwordValue === emailValue) {
        alert("Password cannot be the same as the email.");
        return;
    }

    fetch('/api/signup',{
        method : 'POST',
        headers : {
            'Content-Type' : 'application/json',
        },
        body : JSON.stringify({
            email : emailValue,
            password : passwordValue
        })
    })
    .then(res => res.json(),window.location.href = "../Admin/admin.html")
    .catch(err => {
        console.log(err);
    })
});
