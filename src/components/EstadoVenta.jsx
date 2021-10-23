import React, {useState, useEffect} from 'react'
import { Table, TableHead, TableCell, TableBody,TableRow, Button, makeStyles } from '@material-ui/core';
import { getVentas, deleteVenta } from '../services/ServicioVenta';
import { Link } from 'react-router-dom';

//estilos de la tabla que vamos a crear
const useStyles = makeStyles({
    table: {
        width: '90%',
        margin: '50px 0 0 50px'
    },
    thead: {
        '& > *': {
            fontSize: 20,
            background: '#000000',
            color: '#FFFFFF'
        } 
    },
    row: {
        '& > *': {
            fontSize: 18,
        }
    }

})

export default function ListarVentas (){
const classes = useStyles();
    // definimos los estados
    const [ventas,setVentas] = useState([])
    useEffect(()=>{
        getAllVentas();
    },[])
    
    const getAllVentas = async ()=>{
        let response = await getVentas()
        console.log(response);
        setVentas (response.data.data);
    }
    
    const deleteDataVentas= async (id) => {
        let callbackUser = window.confirm('Esta seguro de eliminar la venta');
        if (callbackUser) {
            await deleteVenta(id);
            getAllVentas();
        }
    }
    return (
    <Table className={classes.table}>
        <TableHead>
        <TableRow className={classes.thead}>
            <TableCell>ID</TableCell>
            <TableCell>Fecha</TableCell>
            <TableCell>Valor</TableCell>
            <TableCell>Cantidad Productos</TableCell>
            <TableCell>Documento CLiente</TableCell>
            <TableCell>Nombre Cliente</TableCell>
            <TableCell>Nombre Vendedor</TableCell>
            <TableCell>Documento Vendedor</TableCell>
            <TableCell className={classes.button_add}>
                <Button variant="contained" color="primary" component={Link} to="/registrarVenta" >Agregar</Button>
            </TableCell>
        </TableRow>
        </TableHead>
        <TableBody>
        {
                
                ventas.map(ventas => (
                    <TableRow className= {classes.row} key={ventas._id}>
                        <TableCell>{ventas._id}</TableCell>
                        <TableCell>{ventas.fecha}</TableCell>
                        <TableCell>{ventas.valor}</TableCell>
                        <TableCell>{ventas.cantidadProd}</TableCell>
                        <TableCell>{ventas.documentoCLiente}</TableCell>
                        <TableCell>{ventas.nombreCliente}</TableCell>
                        <TableCell>{ventas.nombreVendedor}</TableCell>
                        <TableCell>{ventas.documentoVendedor}</TableCell>
                        <TableCell>
                            <Button className={classes.button} variant="contained" component={Link} to={`/api/venta/${ventas._id}`} color="info">Editar</Button>
                            <Button variant="contained" color="secondary" onClick={() => deleteDataVentas(ventas._id)} >Eliminar</Button>
                        </TableCell>
                     </TableRow>   
                ))
            }
        </TableBody>
    </Table>
    )
        
} 