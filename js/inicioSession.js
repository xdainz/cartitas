document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("forminiciosession");
    const email = document.getElementById("emal");i
    const password = document.getElementById("password");
    const loginMessage = document.getElementById("loginMessage");

    form.addEventListener("submit", function (e) {
        e.preventDefault(); // Evita recargar la página



        // Simulamos que sea correcto
        if (email.value === "admin" && password.value === "123456") {
            loginMessage.classList.remove("d-none");
            loginMessage.classList.add("text-success");
            loginMessage.textContent = "Inicio de sesión exitoso, redirigiendo...";

            setTimeout(() => {
                window.location.href = "index.html"; // esto redirigira al inicio
            }, 1500);
        //login incorrecto
        } else {
            loginMessage.classList.remove("d-none");
            loginMessage.classList.remove("text-success");
            loginMessage.classList.add("text-black");
            loginMessage.textContent = "Correo o contraseña incorrectos.";
        }

    });
});
