document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("forminiciosession");
    const email = document.getElementById("email");
    const password = document.getElementById("password");
    const loginMessage = document.getElementById("loginMessage");

    form.addEventListener("submit", function (e) {
        e.preventDefault(); // Evita recargar la página



        // Simulamos que sea correcto
        if (email.value === "admin" && password.value === "123456") {
            loginMessage.classList.remove("d-none");
            loginMessage.classList.remove("alert-danger");
            loginMessage.classList.add("alert-success");
            loginMessage.textContent = "Inicio de sesión exitoso, redirigiendo...";

            setTimeout(() => {
                window.location.href = "adminplant.html"; // esto redirigira al inicio
            }, 1500);
        //login incorrecto
        } else {
            loginMessage.classList.remove("d-none");
            loginMessage.classList.remove("alert-success");
            loginMessage.classList.add("alert-danger");
            loginMessage.textContent = "Correo o contraseña incorrectos.";
        }

    });
});
