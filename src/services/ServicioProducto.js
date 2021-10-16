import axios from "axios";

const UrlProductos = "http://localhost:3001/api/producto";

export const obtenerProducto = async (id) => {
    return await axios.get(`${UrlProductos}/${id}`);
}

export const obtenerProductos = async () => {
    return await axios.get(`${UrlProductos}/`);
}

export const crearProductos = async (producto) => {
    return await axios.post(`${UrlProductos}/`,producto);
}

export const editarProductos = async (producto) => {
    return await axios.put(`${UrlProductos}/${producto._id}`,producto);
}

export const eliminarProducto = async (id) => {
    return await axios.delete(`${UrlProductos}/${id}`);
}