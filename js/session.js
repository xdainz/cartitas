document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("formRegistro");
  const password = document.getElementById("password");
  const rpassword = document.getElementById("rpassword");
  const message = document.getElementById("formMessage");

  form.addEventListener("submit", function (e) {
    e.preventDefault(); // Evita envío inmediato
    let valid = true;


    // Validar contraseña
    if (!password.value) {
      password.classList.add("is-invalid");
      valid = false;
    } else {
      password.classList.remove("is-invalid");
      password.classList.add("is-valid");
    }

    if (!rpassword.value || password.value !== rpassword.value) {
      rpassword.classList.add("is-invalid");
      valid = false;
    } else {
      rpassword.classList.remove("is-invalid");
      rpassword.classList.add("is-valid");
    }

    // Si todo es válido
    if (valid) {
      // Mostrar mensaje de éxito
      message.classList.remove("d-none");

      // Opcional: fade de salida si quieres
      document.body.classList.add("fade-out");

      // Redirigir después de 2 segundos
      setTimeout(function () {
        window.location.href = "index.html";
      }, 2000);
    }
  });
});
