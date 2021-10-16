import React,{useState} from "react";
import {Formulario,ContenedorBoton,Boton,MensajeExito,MensajeError} from "./elementos/elementosformulario"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faExclamationTriangle} from '@fortawesome/free-solid-svg-icons'
import FormInput from "./componentesformulario/inputsform"

const RegistroDOs = () => {
    const [nombre, cambiarNombre] = useState({campo: "", valido: null});
    const [email, cambiarEmail] = useState({campo: "", valido: null});
    const [email2, cambiarEmail2] = useState({campo: "", valido: null});
    const [numero, cambiarNumero] = useState({campo: "", valido: null});
    const [pais, cambiarPais] = useState({campo: "", valido: null});
    const [ciudad, cambiarCiudad] = useState({campo: "", valido: null});
    const [formularioValido, cambiarFormularioValido] = useState(null);
    
    const expresiones = {
		usuario: /^[a-zA-Z0-9_-]{4,16}$/, // Letras, numeros, guion y guion_bajo
		nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
		password: /^.{4,12}$/, // 4 a 12 digitos.
		correo: /^[a-zA-Z0-9_.+-]+@[gmail]+\.[a-zA-Z0-9-.]+$/,
		telefono: /^\d{7,14}$/ // 7 a 14 numeros.
	}

    const validarCorreo = () => {
        if(email.campo.length > 0){
            if(email.campo !== email2.campo){
            cambiarEmail2((estadoAnterior)=>{
                return {...estadoAnterior, valido: "false"}
            });
        }else{
            cambiarEmail2((estadoAnterior)=>{
                return {...estadoAnterior, valido: "true"}
            });
        }
    }
}
   const onSubmit = (e) => {
       e.preventDefault();

       if(
            nombre.valido === "true" && 
            email.valido === "true" &&
            email2.valido === "true" && 
            numero.valido === "true" && 
            pais.valido === "true" && 
            ciudad.valido === "true"  
            ){
                cambiarFormularioValido(true)
                cambiarNombre ({campo: "", valido: null})
                cambiarEmail ({campo: "", valido: null})
                cambiarEmail2 ({campo: "", valido: null})
                cambiarNumero ({campo: "", valido: null})
                cambiarPais ({campo: "", valido: null})
                cambiarCiudad ({campo: "", valido: null})
            }else{
                cambiarFormularioValido(false)
            }
   } 

    return (
        
        <main>
            <h2>Formulario de Registro</h2>
            <br></br>
            <Formulario action = "" onSubmit={onSubmit}>
            <FormInput
                estado={nombre}
                cambiarEstado={cambiarNombre}
                label = "Nombre completo"
                placeholder = "ingrese su nombre completo aqui"
                type = "text"
                name = "nombre"
                leyendaError = "EL nombre solo puede tener letras, no puede contener numeros ni caracteres especiales"
                expresionRegular = {expresiones.nombre}
            />
            <FormInput
                estado={email}
                cambiarEstado={cambiarEmail}
                label = "E-mail"
                placeholder = "ingrese un correo electronico de gmail"
                type = "email"
                name = "email"
                leyendaError = "Debe ser un correo de Gmail"
                expresionRegular = {expresiones.correo}
            />
            <FormInput
                estado={email2}
                cambiarEstado={cambiarEmail2}
                label = "Confirmar E-mail"
                placeholder = "Escriba nuevamente su direccion de correo electronico"
                type = "email"
                name = "email2"
                leyendaError = "El correo debe ser el mismo que ingreso anteriormente"
                funcion ={validarCorreo}

            />
            <FormInput
              estado={numero}
              cambiarEstado={cambiarNumero}
              label = "Numero de contacto"
              placeholder = "ingrese un numero de contacto"
              type = "text"
              name = "numero"
              leyendaError = "El telefono debe tener una longitud maxima de 10 numeros"
              expresionRegular = {expresiones.telefono}
            />
            <FormInput
              estado={pais}
              cambiarEstado={cambiarPais}
              label = "Pais"
              placeholder = "En que pais se encuentra"
              type = "text"
              name = "pais"
              leyendaError = "EL nombre solo puede tener letras, no puede contener numeros ni caracteres especiales"
              expresionRegular = {expresiones.nombre}
            />
            <FormInput
              estado={ciudad}
              cambiarEstado={cambiarCiudad}
              label = "Ciudad"
              placeholder = "En que Ciudad se encuentra"
              type = "text"
              name = "ciudad"
              leyendaError = "EL nombre solo puede tener letras, no puede contener numeros ni caracteres especiales"
              expresionRegular = {expresiones.nombre}
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

export default RegistroDOs;

    
       
    


