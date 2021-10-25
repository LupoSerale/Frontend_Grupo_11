import React, { useState } from 'react';
import { iniciarSesionAuth } from '../services/ServicioAuth';

const valorInicial = {
    email: '',
    password: ''
}
var oldURL = document.referrer;
export function IniciarSesion() {

    const [credenciales, setCredenciales] = useState(valorInicial);

    const onValueChange = (e) => {
        setCredenciales({ ...credenciales, [e.target.name]: e.target.value });
    }
    const login = async () => {
        let response = await iniciarSesionAuth (credenciales);
        if(response.status === 200) {
            const token = response.data.token;
            localStorage.setItem('token', token);
            window.location = oldURL;
        }
        console.log(response);
    }

    return (
        <>
            <div className="container">
                <div className="row justify-content-around">
                    <div className="col-6">
                        <div className="container shadow-lg p-2 mb-5 bg-body rounded">
                            <div className="row justify-content-center m-3">
                                <div className="App">
                                    <h2>Iniciar Sesion</h2>
                                    <br />
                                    <div className="col-md-12">
                                        <label className="form-label">Email</label>
                                        <input
                                            type="email"
                                            className="form-control"
                                            name="email"
                                            onChange={(e) => onValueChange(e)} />
                                    </div>
                                    <br />
                                    <div className="col-md-12">
                                        <label className="form-label">Contraseña</label>
                                        <input
                                            type="password"
                                            className="form-control"
                                            name="password"
                                            onChange={(e) => onValueChange(e)} />
                                    </div>
                                    <br />
                                    <div className="col-12">
                                        <button className="btn btn-success" onClick={() => login()}>Iniciar Session</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default IniciarSesion;