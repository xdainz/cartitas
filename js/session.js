formMain.addEventListener("submit", (e) => { // Escuchar cuando se envíe el formulario
    if (password.value !== rpassword.value) { // Comprobar si los valores de los inputs son iguales, si no lo son continuar
      e.preventDefault(); // Prevenir que la página se recargue
      err.innerHTML = "Las contraseñas no coinciden"; // Notificar al usuario
      setTimeout(() => {
        err.innerHTML = " ";
      }, 1200); // Esperar 1.2 segundos y quitar el mensaje
    }
  });