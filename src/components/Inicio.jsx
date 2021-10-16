import React from 'react'

const Inicio = () => {
    return (
        <>
            <div className="container">
                <div className="row justify-content-around">
                    <div className="col-10">
                        <p className="p-3"></p>
                        <div className="container shadow-lg p-3 mb-5 bg-body rounded">
                            <div className="row justify-content-center m-3">
                                <div className="App">
                                    <h1>Proyecto de ventas</h1>
                                    <h2>Grupo 11</h2><br></br>
                                    <table className="table table-bordered table-striped table-hover">
                                        <thead className="table table-secondary">
                                            <tr className="fs-8" valign="middle" align="center">
                                                <th scope="col">Documento</th>
                                                <th scope="col">Nombre</th>
                                                <th scope="col">Email</th>
                                                <th scope="col">Contacto</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>1069306510</td>
                                                <td align="justify">Brian Mateo Mancera Martínez </td>
                                                <td>manceramateo@gmail.com</td>
                                                <td>3104888074</td>
                                            </tr>
                                            <tr>
                                                <td>1083456875</td>
                                                <td align="justify">Arturo Fernando Corpas Ulloa</td>
                                                <td>corpas196@gmail.com</td>
                                                <td>3017954381</td>
                                            </tr>
                                            <tr>
                                                <td>1024517987</td>
                                                <td align="justify">Ginna Paola Rodriguez Beltrán</td>
                                                <td>grodriguez47@gmail.com</td>
                                                <td>3177986206</td>
                                            </tr>
                                            <tr>
                                                <td>1128048816</td>
                                                <td align="justify">Mileidis Ruiz Morelos </td>
                                                <td>milem19@hotmail.com</td>
                                                <td>3205493795</td>
                                            </tr>
                                            <tr>
                                                <td>1082848782</td>
                                                <td align="justify">Jhon Wilmer Calderón Madrid</td>
                                                <td>jwcalderon2@misena.edu.co</td>
                                                <td>3002969886</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Inicio;