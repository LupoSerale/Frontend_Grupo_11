import React,{useState} from "react";
import "./css/estilos.css";
import {Formulario,ContenedorBoton,Boton,MensajeExito,MensajeError} from "./elementos/elementosformulario"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faExclamationTriangle} from '@fortawesome/free-solid-svg-icons'
import FormInput from "./componentesformulario/inputsform"
import axios from 'axios';


const NuevaVenta = () => {
    

    const [fecha, cambiarFecha] = useState({campo: "", valido: null});
    const [valor, cambiarValor] = useState({campo: "", valido: null});
    const [cantidadProd, cambiarCantidadProd] = useState({campo: "", valido: null});
    const [documentoCLiente, cambiarDocumentoCLiente] = useState({campo: "", valido: null});
    const [nombreCliente, cambiarNombreCliente] = useState({campo: "", valido: null});
    const [nombreVendedor, cambiarNombreVendedor] = useState({campo: "", valido: null});
    const [documentoVendedor, cambiarDocumentoVendedor] = useState({campo: "", valido: null});
    const [formularioValido, cambiarFormularioValido] = useState(null);
    
    const expresiones = {
		usuario: /^[a-zA-Z0-9_-]{10}$/, // Letras, numeros, guion y guion_bajo
		nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
        valor: /^[0-9]{1,16}$/ // solo numeros 
        
	}

   const  onSubmit = async(e) => {
       e.preventDefault();

       
       if(
        fecha.valido === "true" && 
        valor.valido === "true" &&
        cantidadProd.valido === "true"&&
        documentoCLiente.valido === "true" && 
        nombreCliente.valido === "true" &&
        nombreVendedor.valido === "true" && 
        documentoVendedor.valido === "true" 
            ){
                
                cambiarFormularioValido(true)
                cambiarFecha ({campo: "", valido: null})
                cambiarValor ({campo: "", valido: null})
                cambiarCantidadProd ({campo: "", valido: null})
                cambiarDocumentoCLiente ({campo: "", valido: null})
                cambiarNombreCliente ({campo: "", valido: null})
                cambiarNombreVendedor ({campo: "", valido: null})
                cambiarDocumentoVendedor ({campo: "", valido: null})
                

              

                try {
                    // make axios post request
                    const response = await axios({
                      method: "post",
                      url: "http://localhost:3001/api/venta",
                      data: { 
                          "fecha": e.target.fecha.value,
                          "valor": e.target.valor.value,
                          "cantidadProd": e.target.cantidadProd.value,
                          "documentoCLiente": e.target.documentoCLiente.value,
                          "nombreCliente": e.target.nombreCliente.value,
                          "nombreVendedor": e.target.nombreVendedor.value,
                          "documentoVendedor": e.target.documentoVendedor.value,
                            }
            
                    });
                    console.log(response.status)
                  } catch(error) {
                    console.log(error)
                  }

            }else{
                cambiarFormularioValido(false)
            }
   } 

    return (
        
        <main>
            <h2>Registrar Venta</h2>
            <br></br>
            <Formulario action = "" onSubmit={onSubmit}>
            <FormInput
                estado={fecha}
                cambiarEstado={cambiarFecha}
                label = "Fecha"
                id= "fecha"
                placeholder = "dd-mm-aaaa"
                type = "text"
                name = "fecha"
                leyendaError = "La Fecha debe ser en dia mes y año"
                expresionRegular = {expresiones.usuario}
            />
            <FormInput
                estado={valor}
                cambiarEstado={cambiarValor}
                label = "Valor"
                placeholder = "ingrese el Valor"
                id= "valor"
                type = "text"
                name = "valor"
                leyendaError = "Debe contener solo numeros sin caracteres especiales"
                expresionRegular = {expresiones.valor}
            />
            <FormInput
                estado={cantidadProd}
                cambiarEstado={cambiarCantidadProd}
                label = "Cantidad Productos"
                id= "cantidadProd"
                placeholder = "ingrese cantidad de productos"
                type = "text"
                name = "cantidadProd"
                leyendaError = "Debe contener solo numeros sin caracteres especiales"
                expresionRegular = {expresiones.valor}
            />
            <FormInput
                estado={documentoCLiente}
                cambiarEstado={cambiarDocumentoCLiente}
                label = "Documento Cliente"
                id= "documentoCLiente"
                placeholder = "ingrese numero documento"
                type = "text"
                name = "documentoCLiente"
                leyendaError = "Debe contener solo numeros sin caracteres especiales"
                expresionRegular = {expresiones.valor}
            />

            <FormInput
                estado={nombreCliente}
                cambiarEstado={cambiarNombreCliente}
                label = "Nombre Cliente"
                id= "nombreCliente"
                placeholder = "ingrese nombre del cliente"
                type = "text"
                name = "nombreCliente"
                leyendaError = "El nombre del cliente solo puede tener letras, no puede contener numeros ni caracteres especiales"
                expresionRegular = {expresiones.nombre}
            />

            <FormInput
                estado={nombreVendedor}
                cambiarEstado={cambiarNombreVendedor}
                label = "Nombre Vendedor"
                id= "nombreVendedor"
                placeholder = "ingrese nombre del vendedor"
                type = "text"
                name = "nombreVendedor"
                leyendaError = "El nombre del vendedor solo puede tener letras, no puede contener numeros ni caracteres especiales"
                expresionRegular = {expresiones.nombre}
            />
            
            <FormInput
                estado={documentoVendedor}
                cambiarEstado={cambiarDocumentoVendedor}
                label = "Documento Vendedor"
                id= "documentoVendedor"
                placeholder = "ingrese nombre de producto"
                type = "text"
                name = "documentoVendedor"
                leyendaError = "Debe contener solo numeros sin caracteres especiales"
                expresionRegular = {expresiones.valor}
            />
            
            { formularioValido === false && <MensajeError>
                <p>
                <FontAwesomeIcon icon={faExclamationTriangle}/>
                    <b>ERROR:</b>Por favor rellene el formulario correctamente
                </p>
            </MensajeError>}
            <ContenedorBoton>
                <Boton type="submit">Enviar</Boton>
                {formularioValido === true && <MensajeExito>Formulario enviado exitosamente</MensajeExito>}
            </ContenedorBoton>
            </Formulario>
        </main>    
        );
}

export default NuevaVenta;