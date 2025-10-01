function Register() {
    return (
        <div className="container">
            <div className="container mt-5 pt-5">
                <div className="row d-flex justify-content-center">
                    <div className="col-12 col-md-6 col-lg-4">
                        <div className="card p-4 shadow">

                            <form id="formRegistro" className="needs-validation">
                                <h3 className="text-center mb-5">Registro</h3>

                                <div className="mb-3">
                                    <label htmlFor="email" className="form-label">Correo</label>
                                    <input type="email" className="form-control" id="email" placeholder="Ingresa tu correo" required />
                                    <div className="invalid-feedback">Ingresa un correo válido.</div>
                                </div>

                                <div className="mb-3">
                                    <label htmlFor="password" className="form-label">Contraseña</label>
                                    <input type="password" className="form-control" id="password" placeholder="Ingresa tu contraseña" required />
                                    <div className="invalid-feedback">Ingresa tu contraseña.</div>

                                </div>

                                <div className="mb-3">
                                    <label htmlFor="rpassword" className="form-label">Confirmar Contraseña</label>
                                    <input type="password" className="form-control" id="rpassword" placeholder="Reingresa tu contraseña" required />
                                    <div className="invalid-feedback" id="passwordMismatch">Las contraseñas no coinciden.</div>
                                </div>
                                <div id="formMessage" className="alert alert-success text-center d-none" role="alert">
                                    Registro exitoso. Redirigiendo a la página de inicio...</div>

                                <button type="submit" className="btn btn-primary w-100">Enviar</button>
                            </form>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Register;
