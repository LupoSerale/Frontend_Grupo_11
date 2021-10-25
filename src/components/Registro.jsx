import React, { useState } from 'react';
import { crearUsuarios } from '../services/ServicioUsuario';
import { useHistory } from 'react-router-dom';

const valorInicial = {
    fullName: '',
    email: '',
    password: ''
}
export function Registro() {

    const [nuevoUsuario, setNuevoUsuario] = useState(valorInicial);

    let history = useHistory();
    const onValueChange = (e) => {
        setNuevoUsuario({ ...nuevoUsuario, [e.target.name]: e.target.value });
    }
    const registrarUsuario = async () => {
        let response = await crearUsuarios(nuevoUsuario);
        if (response.status === 201) {
            history.push('/IniciarSesion');
        }
        else
            console.error('Error creando Usuario' + response.data.error);
    }

    return (
        <>
            <div className="container">
                <div className="row justify-content-around">
                    <div className="col-6">
                        <div className="container shadow-lg p-2 mb-5 bg-body rounded">
                            <div className="row justify-content-center m-3">
                                <div className="App">
                                    <h2>Registrarse</h2>
                                    <br />
                                    <div className="col-md-12">
                                        <label className="form-label">Nombre Completo</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            name="fullName"
                                            onChange={(e) => onValueChange(e)} />
                                    </div>
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
                                    <div className="col-md-12">
                                        <label className="form-label">Confirmar Contraseña</label>
                                        <input
                                            type="password"
                                            className="form-control"
                                            name="password2"
                                            onChange={(e) => onValueChange(e)} />
                                    </div>
                                    <br />
                                    <div className="col-12">
                                        <button className="btn btn-success" onClick={() => registrarUsuario()}>Registrese</button>
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

export default Registro;