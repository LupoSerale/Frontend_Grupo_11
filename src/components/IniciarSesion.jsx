import React, { Component } from "react";
import GoogleLogin from 'react-google-login';
import estilos from './css/login.css';
import {
    Link
} from "react-router-dom";

class IniciarSesion extends Component {
    render() {
        const responseGoogle = (response) => {
            console.log(response);
        }
        return (
            <>
                <div className="container">
                    <div className="row justify-content-around">
                        <div className="col-6">
                            <p className="p-3"></p>
                            <div className="container shadow-lg p-3 mb-5 bg-body rounded">
                                <div className="row justify-content-center m-3"></div>
                                <div className="login">
                                    <form action="" className="formulario_login">
                                        <h2>INICIAR SESIÓN</h2>
                                        <br></br>
                                        
                                        <div className="row justify-content-center m-5">
                                            <label for ="username" id="username">Username</label>
                                            <input type="text" placeholder="Enter Username"/>

                                            <label for="password" id="password">Password</label>
                                            <input type="password" placeholder="Enter Password"></input>

                                            <input type="submit" value = "Login"></input>
                                            
                                       </div>
                                                                          

                                        <div className="Oauth2">O INGRESA CON TU CUENTA DE
                                            <GoogleLogin
                                                clientId="1086293686192-5giqrbgjdotqubufjr11dvruejdrc759.apps.googleusercontent.com"
                                                buttonText="GOOGLE"
                                                onSuccess={responseGoogle}
                                                onFailure={responseGoogle}
                                                cookiePolicy={'single_host_origin'}
                                            />
                                        </div>
                                        <br></br>
                                        <br></br>
                                        <p>¿No tienes una cuenta?</p>
                                        <div className="btn-group">
                                            <Link to="registro" className="btn btn-light">
                                                Registrate
                                            </Link>
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
export default IniciarSesion;