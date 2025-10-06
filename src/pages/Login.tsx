function Login() {
    document.title = "Inicio Sesion";
    return (
        <div className="container">
            <div className="container mt-5 pt-5">
                <div className="row d-flex justify-content-center">
                    <div className="col-12 col-md-6 col-lg-4">
                        <div className="card p-4 shadow">

                            <form id="forminiciosession" className="needs-validation" noValidate>
                                <h3 className="text-center mb-5">Iniciar Sesión</h3>

                                <div className="mb-3">
                                    <label htmlFor="email" className="form-label">Correo</label>
                                    <input type="email" className="form-control" id="email"
                                        placeholder="Ingresa tu correo o Usuario" required />
                                    <div className="invalid-feedback">Ingresa un correo válido.</div>
                                </div>

                                <div className="mb-3">
                                    <label htmlFor="password" className="form-label">Contraseña</label>
                                    <input type="password" className="form-control" id="password"
                                        placeholder="Ingresa tu contraseña" required />
                                    <div className="invalid-feedback">Ingresa tu contraseña.</div>

                                </div>
                                <div id="loginMessage" className="alert alert-success text-center d-none" role="alert">
                                    Iniciando Sesión...</div>

                                <button type="submit" className="btn btn-primary w-100">Ingresar</button>
                            </form>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;
