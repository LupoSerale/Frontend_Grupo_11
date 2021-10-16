import React, { useState, useEffect } from 'react';
import { Modal, ModalBody, ModalHeader, ModalFooter } from 'reactstrap';
import { obtenerProductos, eliminarProducto } from '../services/ServicioProducto';
import NumberFormat from "react-number-format";

//import {Link} from 'react-router-dom';

function Producto() {
//Desde aqui codigo API funcional
  const [productos, setProductos] = useState([])
  useEffect(() =>{
    obtenerProductosTodos();
  },[])

  const obtenerProductosTodos = async()=>{
    let response = await obtenerProductos();
    console.log(response);
    setProductos(response.data.data);
  }

  const seleccionarProducto = (elemento, caso) => {
    setProductoSeleccionado(elemento);
    (caso === 'Editar') ? setModalEditar(true) : setModalEliminar(true)
  }

  const eliminar = async(id) => {
    await eliminarProducto(id);
    setModalEliminar(false);
    obtenerProductosTodos();
  }
  //Hasta aqui codigo API funcional

   const dataProducto = [
    { id: 1, descripcion: "Perro Caliente", valorUnitario: "5000", estado: "Disponible" },
    { id: 2, descripcion: "Hamburguesa", valorUnitario: "7000", estado: "Disponible" },
    { id: 3, descripcion: "Pizza", valorUnitario: "10000", estado: "Disponible" },
  ];

  const [data, setData] = useState(dataProducto);
  const [modalEditar, setModalEditar] = useState(false);
  const [modalEliminar, setModalEliminar] = useState(false);
  const [modalInsertar, setModalInsertar] = useState(false);

  const [productoSeleccionado, setProductoSeleccionado] = useState({
    id: '',
    descripcion: '',
    valorUnitario: '',
    estado: ''
  });

  const handleChange = e => {
    const { name, value } = e.target;
    setProductoSeleccionado((prevState) => ({
      ...prevState,
      [name]: value
    }));
  }

  const editar = () => {
    var dataNueva = data;
    dataNueva.map(producto => {
      if (producto.id === productoSeleccionado.id) {
        producto.descripcion = productoSeleccionado.descripcion;
        producto.valorUnitario = productoSeleccionado.valorUnitario;
        producto.estado = productoSeleccionado.estado;
      }
    });
    setData(dataNueva);
    setModalEditar(false);
  }

 

  const abrirModalInsertar = () => {
    setProductoSeleccionado(null);
    setModalInsertar(true);
  }

  const insertar = () => {
    var valorInsertar = productoSeleccionado;
    valorInsertar.id = data[data.length - 1].id + 1;
    var dataNueva = data;
    dataNueva.push(valorInsertar);
    setData(dataNueva);
    setModalInsertar(false);
  }

  return (
    <>
      <div className="container">
        <div className="row justify-content-around">
          <div className="col-12">
            <div className="container shadow-lg p-3 mb-5 bg-body rounded">
              <div className="row justify-content-center m-3">
                <div className="table-responsive">
                  <h2>Gestion de Productos</h2>
                  <br />
                  <button className="btn btn-success" onClick={() => abrirModalInsertar()}>Nuevo Producto</button>
                  <br /><br />
                  <table className="table table-bordered table-striped table-hover">
                    <thead className="table-dark">
                      <tr>
                        <th>ID</th>
                        <th>Descripcion</th>
                        <th>Valor Unitario</th>
                        <th>Estado</th>
                        <th colSpan="2">Acciones</th>
                      </tr>
                    </thead>
                    <tbody>
                      {productos.map(producto => (
                        <tr align="justify" key={producto._id}>
                          <td>{producto._id}</td>
                          <td>{producto.descripcion}</td>
                          <td><NumberFormat value={producto.valor} displayType={'text'} thousandSeparator={true} prefix={'$'} /></td>
                          <td>{producto.estado ? "Disponible" : "No disponible"}</td>
                          <td><button className="btn btn-success" onClick={() => seleccionarProducto(producto, 'Editar')}>Editar</button></td>
                          <td><button className="btn btn-danger" onClick={() => seleccionarProducto(producto, 'Eliminar')}>Eliminar</button></td>
                        </tr>
                      ))
                      }
                    </tbody>
                  </table>
                  <Modal isOpen={modalEditar}>
                    <ModalHeader>
                      <div>
                        <h3>Editar Producto</h3>
                      </div>
                    </ModalHeader>
                    <ModalBody>
                      <div className="form-group">
                        <label>ID</label>
                        <input
                          className="form-control"
                          readOnly
                          type="text"
                          name="id"
                          value={productoSeleccionado && productoSeleccionado._id} />
                        <br />
                        <label>Descripcion</label>
                        <textarea
                          className="form-control"
                          rows="5"
                          name="descripcion"
                          value={productoSeleccionado && productoSeleccionado.descripcion}
                          onChange={handleChange} />
                        <br />
                        <label>Valor Unitario</label>
                        <input
                          className="form-control"
                          type="text"
                          name="valorUnitario"
                          value={productoSeleccionado && productoSeleccionado.valor}
                          onChange={handleChange} />
                        <br />
                        <label>Estado</label>
                        <select
                          className="form-select"
                          name="estado"
                          value={productoSeleccionado && productoSeleccionado.estado}
                          onChange={handleChange} >
                            <option value="">Seleccione</option>
                        <option value="true">Disponible</option>
                        <option value="false">No Disponible</option>
                        </select>
                        <br />
                      </div>
                    </ModalBody>
                    <ModalFooter>
                      <button className="btn btn-success" onClick={() => editar()}>
                        Actualizar
                      </button>
                      <button
                        className="btn btn-danger"
                        onClick={() => setModalEditar(false)}>
                        Cancelar
                      </button>
                    </ModalFooter>
                  </Modal>
                  <Modal isOpen={modalEliminar}>
                  <ModalHeader>
                      <div>
                        <h3>Eliminar Producto</h3>
                      </div>
                    </ModalHeader>
                    <ModalBody>
                      Estás Seguro que deseas eliminar el producto <b><i>{productoSeleccionado && productoSeleccionado.descripcion}</i></b> ? <b className="text-danger">Esta acción no se puede deshacer...</b>
                    </ModalBody>
                    <ModalFooter>
                      <button className="btn btn-danger" onClick={() => eliminar(productoSeleccionado._id)}>
                        Sí
                      </button>
                      <button
                        className="btn btn-secondary"
                        onClick={() => setModalEliminar(false)}>
                        No
                      </button>
                    </ModalFooter>
                  </Modal>
                  <Modal isOpen={modalInsertar}>
                    <ModalHeader>
                      <div>
                        <h3>Nuevo Producto</h3>
                      </div>
                    </ModalHeader>
                    <ModalBody>
                      <div className="form-group">
                        <label>ID</label>
                        <input
                          className="form-control"
                          readOnly
                          type="text"
                          name="id"
                          value={data[data.length - 1].id + 1} />
                        <br />
                        <label>Descripcion</label>
                        <textarea
                          className="form-control"
                          rows="5"
                          name="descripcion"
                          value={productoSeleccionado ? productoSeleccionado.descripcion : ''}
                          onChange={handleChange}
                        />
                        <br />
                        <label>Valor Unitario</label>
                        <input
                          className="form-control"
                          type="text"
                          name="valorUnitario"
                          value={productoSeleccionado ? productoSeleccionado.valorUnitario : ''}
                          onChange={handleChange}
                        />
                        <br />
                        <label>Estado</label>
                        <select
                          className="form-select"
                          name="estado"
                          value={productoSeleccionado ? productoSeleccionado.estado : ''}
                          onChange={handleChange}>
                        <option value="">Seleccione</option>
                        <option value="Disponible">Disponible</option>
                        <option value="No Disponible">No Disponible</option>
                        </select>
                        <br />
                      </div>
                    </ModalBody>
                    <ModalFooter>
                      <button className="btn btn-success"
                        onClick={() => insertar()}>
                        Insertar
                      </button>
                      <button className="btn btn-danger"
                        onClick={() => setModalInsertar(false)}>
                        Cancelar
                      </button>
                    </ModalFooter>
                  </Modal>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )  
}
export default Producto;
