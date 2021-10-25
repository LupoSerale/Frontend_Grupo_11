import axios from "axios";
import jwtDecode from "jwt-decode";

//const UrlAuth = "http://localhost:3001/api/auth";
const UrlAuth = "https://backendgrupo11.herokuapp.com/api/auth";

export const iniciarSesionAuth = async (credenciales) => {
    return await axios.post(`${UrlAuth}/login`,credenciales);
}

export const getCurrentUser =  () => {
    try {
        let token = localStorage.getItem('token');
        return jwtDecode(token);
    } catch (error) {
        console.log(error);
        return null;
    }


}