import { useEffect } from "react";

export default function Rvalidation() {
    useEffect(() => {
        const form = document.getElementById("formRegistro") as HTMLFormElement | null;
        const password = document.getElementById("password") as HTMLInputElement | null;
        const rpassword = document.getElementById("rpassword") as HTMLInputElement | null;
        const message = document.getElementById("formMessage") as HTMLElement | null;

        if (!form || !password || !rpassword || !message) return;

        const handleSubmit = (e: Event) => {
            e.preventDefault();
            let valid = true;

            // Validar contraseña
            if (!password.value) {
                password.classList.add("is-invalid");
                valid = false;
            } else {
                password.classList.remove("is-invalid");
                password.classList.add("is-valid");
            }

            // Validar repetición
            if (!rpassword.value || password.value !== rpassword.value) {
                rpassword.classList.add("is-invalid");
                valid = false;
            } else {
                rpassword.classList.remove("is-invalid");
                rpassword.classList.add("is-valid");
            }

            // Si todo es válido
            if (valid) {
                message.classList.remove("d-none");
                document.body.classList.add("fade-out");

                setTimeout(() => {
                    window.location.href = "/"; // par donde se redigira la pagina luego de registrarse
                }, 2000);
            }
        };

        form.addEventListener("submit", handleSubmit);

        // cleanup al desmontar el componente
        return () => {
            form.removeEventListener("submit", handleSubmit);
        };
    }, []);
}
