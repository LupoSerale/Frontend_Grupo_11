import axios from 'axios';

const ventasURL = "http://localhost:3001/api/venta";

export const getVentas = async () => {
    return await axios.get (`${ventasURL}/`);
}

export const createVenta = async (venta) => {
    return await axios.post (`${ventasURL}/`, venta);
}

export const deleteVenta = async (id) => {
    return await axios.delete (`${ventasURL}/${id}`);
}

export const updateVenta = async (venta) => {
    return await axios.put (`${ventasURL}/${venta._id}`,venta);
}