import React from "react";
import {GrupoInput, Input, LeyendaError,IconoValidacion, Label} from "./../elementos/elementosformulario"
import { faCheckCircle, faTimesCircle} from '@fortawesome/free-solid-svg-icons'

const FormInput = ({estado,cambiarEstado,label, placeholder, type, name, leyendaError, expresionRegular,funcion}) => {

    const onChange = (e) => {
        cambiarEstado({...estado, campo: e.target.value});
    }

    const validacion = () => {
        if(expresionRegular){
            if(expresionRegular.test(estado.campo)){
                cambiarEstado({...estado, valido: "true"});
            }else{
                cambiarEstado({...estado, valido: "false"});
    }
    
    }
    if(funcion){
        funcion();
    }
        }
   
    return (
        <div>
            <Label htmlFor={name} valido={estado.valido}>{label}</Label>
            <GrupoInput>
                <Input id={name} type={type} placeholder={placeholder} value={estado.campo} onChange={onChange} onKeyUp={validacion} onBlur={validacion} valido={estado.valido} />
                <IconoValidacion icon={estado.valido === "true" ? faCheckCircle : faTimesCircle} valido={estado.valido}/>
            </GrupoInput>
            <LeyendaError valido={estado.valido}>{leyendaError}</LeyendaError>
        </div>
    )

}

export default FormInput;