import React from 'react'

const EstadoVenta = () => {
    return (
        <>
            <div className="container">
                <div className="row justify-content-around">
                    <div className="col-10">
                        <p className="p-3"></p>
                        <div className="container shadow-lg p-3 mb-5 bg-body rounded">
                            <div className="row justify-content-center m-3"></div>

                            <h1>Módulo de Edición de Estado de Ventas</h1>

                            <div class="container">

                                <input type="text" id="ID_Venta" placeholder="Id Venta a Editar"></input>

                                <input type="tex" id="Fecha_Venta" placeholder="Fecha de Venta"></input><br></br>

                                <input type="tex" id="ID_Cliente" placeholder="Id Cliente"></input>

                                <input type="text" id="Nombre_cliente" placeholder="Nombre cliente"></input>

                                <input type="text" id="Vendedor" placeholder="Nombre Vendedor"></input> <br></br>

                                <input type="number" id="Cantidad" placeholder="Cantidad de Mercancia"></input>

                                <input type="tex" id="ID_Producto" placeholder="ID de Mercancia"></input>

                                <input type="value" id="Valor_Unitario" placeholder="Valor Unitario"></input><br></br>

                                <input type="value" id="Valor_Total" placeholder="Valor Total"></input>

                                <form action="">
                                    Selecione Nueva Estado:
                                    <select name="Estado" id="cambio_estado">

                                        <option value="1"> En Proceso </option>

                                        <option value="2"> Cancelada </option>

                                        <option value="3"> Entregada </option>

                                    </select>
                                </form>


                            </div>

                            <div class="button">

                                <input type="submit" id="cambio" value="Registrar Cambio"></input>

                                <input type="reset" id="reset" value="Cancelar"></input> <br></br>


                            </div>

                        </div>
                    </div>
                </div>
            </div>

        </>
    );
}

export default EstadoVenta;