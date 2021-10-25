import React, { useState, useEffect } from 'react';
/*importar route */
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";

/*importacion componentes*/
import Header from './components/Header.jsx';
import IniciarSesion from './components/IniciarSesion.jsx';
import Registro from './components/Registro.jsx';
import Producto from './components/Producto.jsx';
import Inicio from './components/Inicio.jsx';
import RegistrarVenta from './components/RegistrarVenta.jsx';
import EstadoVenta from './components/EstadoVenta.jsx';
import Usuario from './components/Usuario.jsx';
import EditarVenta from './components/EditarVenta.jsx';
import { getCurrentUser } from './services/ServicioAuth';


function App() {

    const [user, setUser] = useState([]);

  useEffect(() => {
    setUser(getCurrentUser());
  }, []);

    return (
        <Router>
            <Route component={Header} />
            <Switch>
                <Route exact path="/" component={Inicio} />
                <Route path="/iniciarSesion" component={IniciarSesion} />
                <Route path="/registro" component={Registro} />
                <Route path="/producto" component={Producto} />
                {user && (
                    <>
                <Route path="/registrarVenta" component={RegistrarVenta} />
                <Route path="/estadoVenta" component={EstadoVenta} />
                <Route path="/editarVenta" component={EditarVenta} />
                <Route path="/Usuario" component={Usuario} />
                </>)}
            </Switch>
        </Router>
    );
}
export default App;
