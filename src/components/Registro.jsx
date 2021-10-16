import React, { Component } from "react";
import swal from 'sweetalert';


class Registro extends Component {
    render() {
        const alerta = () => {
            swal("EXITOSO", "Solicitud creada con exito");
        }
        return (
            <>
                <div className="container">
                    <div className="row justify-content-around">
                        <div className="col-8">
                            <p className="p-3"></p>
                            <div className="container shadow-lg p-3 mb-5 bg-body rounded">
                                <div className="row justify-content-center m-3"></div>
                                <div className="Register">
                                    <h2>Formulario de Registro</h2>
                                    <form className="row g-3">
                                        <div className="col-12">
                                            <br></br>
                                            <label htmlFor="nombreCompleto" className="form-label">Nombre Completo</label>
                                            <input type="text" className="form-control" id="nombreCompleto" placeholder="-Ingrese nombres y apellidos-" />
                                        </div>
                                        <div className="col-md-6">
                                            <label htmlFor="inputEmail4" className="form-label">Email</label>
                                            <input type="email" className="form-control" id="inputEmail4" />
                                            <label className="inputEmail4" htmlFor="email">
                                                Para acceder debes registrar un correo de Gmail
                                            </label>
                                        </div>
                                        <div className="col-md-6">
                                            <label htmlFor="Telefono" className="form-label">Numero de contacto</label>
                                            <input type="text" className="form-control" id="Telefono" />
                                        </div>
                                        <div className="col-md-6">
                                            <label htmlFor="Pais" className="form-label">Pais</label>
                                            <input type="text" className="form-control" id="Pais" />
                                        </div>
                                        <div className="col-md-6">
                                            <label htmlFor="Ciudad" className="form-label">Ciudad</label>
                                            <input type="text" id="Ciudad" className="form-select" />
                                        </div>
                                        <div className="col-12">
                                            <div className="form-check">
                                                <input className="form-check-input" type="checkbox" id="gridCheck" />
                                                <label className="form-check-label" htmlFor="gridCheck">
                                                    Enviar
                                                </label>
                                            </div>
                                        </div>
                                        <div className="col-12">
                                            <button onClick={() => alerta()}>Sign in</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}
export default Registro;