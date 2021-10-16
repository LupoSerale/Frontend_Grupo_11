import React from 'react'

const RegistrarVenta = () => {
    return (
        <>
            <div className="container">
                <div className="row justify-content-around">
                    <div className="col-10">
                        <p className="p-3"></p>
                        <div className="container shadow-lg p-3 mb-5 bg-body rounded">
                            <div className="row justify-content-center m-3"></div>
                            <h1>Bienvenido al Modulo de Registro de Venta</h1>

    <div class="container">
        
        <input type="text" id="ID_Venta" placeholder="Id Venta"></input>

        <input type="date" id="Fecha_Venta"></input><br></br>

        <input type="tex" id="ID_Cliente" placeholder="Id Cliente"></input>

        <input type="text" id="Nombre_cliente" placeholder="Nombre cliente"></input>

        <input type="text" id="Vendedor" placeholder="Nombre Vendedor"></input><br></br>

        <input type="number" id="Cantidad" placeholder="Cantidad de Mercancia" step="0.001" oninput="calcular()"></input>

        <input type="tex" id="ID_Producto" placeholder="ID de Mercancia"></input>

        <input type="value" id="Valor_Unitario" placeholder="Valor Unitario"  step="0.001" oninput="calcular()"></input><br></br>

        <input type="value" id="Valor_Total" placeholder="Valor Total" step="0.001"></input>
        
    </div>

    <div class="button">
        
        <input type="submit" id="registrar" value="Registrar"></input>

        <input type="reset" id="reset" value="Cancelar"></input>

    </div>


                        </div>
                    </div>
                </div>
            </div>

        </>
    );
}

export default RegistrarVenta;