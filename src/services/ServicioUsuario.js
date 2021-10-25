import axios from "axios";

//const UrlUsuarios = "http://localhost:3001/api/usuario";
const UrlUsuarios = "https://backendgrupo11.herokuapp.com/api/usuario";

export const obtenerUsuario = async (id) => {
    return await axios.get(`${UrlUsuarios}/${id}`);
}

export const obtenerUsuarios = async () => {
    return await axios.get(`${UrlUsuarios}/`);
}

export const crearUsuarios = async (usuario) => {
    return await axios.post(`${UrlUsuarios}/`,usuario);
}

export const editarUsuarios = async (usuario) => {
    return await axios.put(`${UrlUsuarios}/${usuario._id}`,usuario);
}

export const eliminarUsuario = async (id) => {
    return await axios.delete(`${UrlUsuarios}/${id}`);
}